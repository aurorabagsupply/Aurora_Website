<?php
if (!defined('ABSPATH')) {
    exit;
}

function aurora_image_search_is_configured() {
    return (bool) aurora_image_search_env('AURORA_IMAGE_EMBEDDING_ENDPOINT', '');
}

function aurora_image_search_embedding_model() {
    return aurora_image_search_env('AURORA_IMAGE_EMBEDDING_MODEL', 'openclip-shape-first-v1');
}

function aurora_image_search_normalize_vector($vector) {
    if (!is_array($vector)) {
        return array();
    }
    return array_values(array_filter(array_map('floatval', $vector), 'is_finite'));
}

function aurora_image_search_decode_embedding($raw) {
    $decoded = json_decode($raw, true);
    if (!is_array($decoded)) {
        return array();
    }
    if (isset($decoded['shape']) || isset($decoded['color'])) {
        return array(
            'shape' => aurora_image_search_normalize_vector($decoded['shape'] ?? array()),
            'color' => aurora_image_search_normalize_vector($decoded['color'] ?? array()),
        );
    }
    return aurora_image_search_normalize_vector($decoded);
}

function aurora_image_search_cosine($a, $b) {
    $count = min(count($a), count($b));
    if ($count === 0) {
        return 0.0;
    }

    $dot = 0.0;
    $norm_a = 0.0;
    $norm_b = 0.0;
    for ($i = 0; $i < $count; $i++) {
        $av = (float) $a[$i];
        $bv = (float) $b[$i];
        $dot += $av * $bv;
        $norm_a += $av * $av;
        $norm_b += $bv * $bv;
    }
    if ($norm_a <= 0.0 || $norm_b <= 0.0) {
        return 0.0;
    }
    return $dot / (sqrt($norm_a) * sqrt($norm_b));
}

function aurora_image_search_score($query_embedding, $stored_embedding) {
    $query = is_array($query_embedding) ? $query_embedding : array();
    $stored = is_array($stored_embedding) ? $stored_embedding : array();
    $has_parts = isset($query['shape']) || isset($query['color']) || isset($stored['shape']) || isset($stored['color']);

    if ($has_parts) {
        $shape_score = aurora_image_search_cosine($query['shape'] ?? array(), $stored['shape'] ?? array());
        $color_score = aurora_image_search_cosine($query['color'] ?? array(), $stored['color'] ?? array());
        if (!$color_score) {
            return $shape_score;
        }
        return ($shape_score * 0.75) + ($color_score * 0.25);
    }

    return aurora_image_search_cosine($query, $stored);
}

function aurora_image_search_embedding_from_file($file_path) {
    $endpoint = aurora_image_search_env('AURORA_IMAGE_EMBEDDING_ENDPOINT', '');
    if (!$endpoint) {
        return new WP_Error('aurora_image_search_not_configured', __('Image search is not configured.', 'aurora-bag-supply'), array('status' => 503));
    }
    if (!is_readable($file_path)) {
        return new WP_Error('aurora_image_search_file_unreadable', __('The uploaded image could not be read.', 'aurora-bag-supply'), array('status' => 400));
    }

    $api_key = aurora_image_search_env('AURORA_IMAGE_EMBEDDING_API_KEY', '');
    $body = array(
        'model' => aurora_image_search_embedding_model(),
        'priority' => 'shape_first',
        'image_base64' => base64_encode(file_get_contents($file_path)),
    );
    $headers = array('Content-Type' => 'application/json');
    if ($api_key) {
        $headers['Authorization'] = 'Bearer ' . $api_key;
    }

    $response = wp_remote_post($endpoint, array(
        'headers' => $headers,
        'timeout' => absint(aurora_image_search_env('AURORA_IMAGE_EMBEDDING_TIMEOUT', '35')),
        'body' => wp_json_encode($body),
    ));
    if (is_wp_error($response)) {
        return $response;
    }
    $code = wp_remote_retrieve_response_code($response);
    $payload = json_decode(wp_remote_retrieve_body($response), true);
    if ($code < 200 || $code >= 300 || !is_array($payload)) {
        return new WP_Error('aurora_image_search_embedding_failed', __('The image model could not analyze this image.', 'aurora-bag-supply'), array('status' => 502));
    }

    if (isset($payload['shape_embedding']) || isset($payload['color_embedding'])) {
        $embedding = array(
            'shape' => aurora_image_search_normalize_vector($payload['shape_embedding'] ?? array()),
            'color' => aurora_image_search_normalize_vector($payload['color_embedding'] ?? array()),
        );
        if (!$embedding['shape']) {
            return new WP_Error('aurora_image_search_empty_embedding', __('No clear product feature was detected in this image.', 'aurora-bag-supply'), array('status' => 422));
        }
        return $embedding;
    }

    $embedding = aurora_image_search_normalize_vector($payload['embedding'] ?? array());
    if (!$embedding) {
        return new WP_Error('aurora_image_search_empty_embedding', __('No clear product feature was detected in this image.', 'aurora-bag-supply'), array('status' => 422));
    }
    return $embedding;
}

function aurora_image_search_product_attachment_ids($product_id) {
    $ids = array();
    $thumbnail_id = get_post_thumbnail_id($product_id);
    if ($thumbnail_id) {
        $ids[] = array('id' => absint($thumbnail_id), 'source' => 'thumbnail');
    }
    if (function_exists('wc_get_product')) {
        $product = wc_get_product($product_id);
        if ($product) {
            foreach ($product->get_gallery_image_ids() as $gallery_id) {
                $ids[] = array('id' => absint($gallery_id), 'source' => 'gallery');
            }
        }
    }
    return $ids;
}

function aurora_image_search_index_product($product_id) {
    global $wpdb;
    $product_id = absint($product_id);
    if (!$product_id || get_post_type($product_id) !== 'product') {
        return new WP_Error('aurora_image_search_invalid_product', __('Invalid product.', 'aurora-bag-supply'), array('status' => 400));
    }

    $indexed = 0;
    $model = aurora_image_search_embedding_model();
    $table = aurora_image_search_table_name();
    foreach (aurora_image_search_product_attachment_ids($product_id) as $image) {
        $file_path = get_attached_file($image['id']);
        if (!$file_path || !is_readable($file_path)) {
            continue;
        }
        $hash = hash_file('sha256', $file_path);
        $existing = $wpdb->get_var($wpdb->prepare(
            "SELECT id FROM {$table} WHERE product_id = %d AND attachment_id = %d AND image_hash = %s AND model = %s LIMIT 1",
            $product_id,
            $image['id'],
            $hash,
            $model
        ));
        if ($existing) {
            $indexed++;
            continue;
        }

        $embedding = aurora_image_search_embedding_from_file($file_path);
        if (is_wp_error($embedding)) {
            return $embedding;
        }

        $wpdb->replace($table, array(
            'product_id' => $product_id,
            'attachment_id' => $image['id'],
            'image_hash' => $hash,
            'model' => $model,
            'embedding' => wp_json_encode($embedding),
            'source' => sanitize_key($image['source']),
            'indexed_at' => current_time('mysql'),
        ), array('%d', '%d', '%s', '%s', '%s', '%s', '%s'));
        $indexed++;
    }
    delete_post_meta($product_id, '_aurora_image_search_stale');
    return $indexed;
}

function aurora_image_search_mark_product_stale($post_id, $post, $update) {
    if (wp_is_post_revision($post_id) || get_post_type($post_id) !== 'product') {
        return;
    }
    update_post_meta($post_id, '_aurora_image_search_stale', current_time('mysql'));
}
