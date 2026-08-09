<?php
if (!defined('ABSPATH')) {
    exit;
}

function aurora_image_search_register_routes() {
    register_rest_route('aurora/v1', '/image-search', array(
        'methods' => WP_REST_Server::CREATABLE,
        'callback' => 'aurora_image_search_rest_search',
        'permission_callback' => '__return_true',
    ));

    register_rest_route('aurora/v1', '/image-search/reindex', array(
        'methods' => WP_REST_Server::CREATABLE,
        'callback' => 'aurora_image_search_rest_reindex',
        'permission_callback' => function () {
            return current_user_can('manage_woocommerce') || current_user_can('manage_options');
        },
    ));
}

function aurora_image_search_max_bytes() {
    $mb = max(1, min(12, absint(aurora_image_search_env('AURORA_IMAGE_MAX_UPLOAD_MB', '6'))));
    return $mb * 1024 * 1024;
}

function aurora_image_search_uploaded_file(WP_REST_Request $request) {
    $files = $request->get_file_params();
    if (empty($files['image']) || !is_array($files['image'])) {
        return new WP_Error('aurora_image_search_missing_file', __('Please upload an image first.', 'aurora-bag-supply'), array('status' => 400));
    }

    $file = $files['image'];
    if (!empty($file['error'])) {
        return new WP_Error('aurora_image_search_upload_error', __('The image upload failed. Please try another file.', 'aurora-bag-supply'), array('status' => 400));
    }
    if (empty($file['tmp_name']) || !is_uploaded_file($file['tmp_name'])) {
        return new WP_Error('aurora_image_search_invalid_upload', __('The uploaded image is invalid.', 'aurora-bag-supply'), array('status' => 400));
    }
    if (!empty($file['size']) && (int) $file['size'] > aurora_image_search_max_bytes()) {
        return new WP_Error('aurora_image_search_file_too_large', __('This image is too large. Please upload a smaller image.', 'aurora-bag-supply'), array('status' => 413));
    }

    $allowed = array('image/jpeg', 'image/png', 'image/webp');
    $mime = wp_get_image_mime($file['tmp_name']);
    if (!$mime || !in_array($mime, $allowed, true)) {
        return new WP_Error('aurora_image_search_bad_type', __('Please upload JPG, PNG or WEBP images only.', 'aurora-bag-supply'), array('status' => 415));
    }
    if (!@getimagesize($file['tmp_name'])) {
        return new WP_Error('aurora_image_search_not_image', __('No clear image was detected in this file.', 'aurora-bag-supply'), array('status' => 415));
    }
    return $file['tmp_name'];
}

function aurora_image_search_rest_search(WP_REST_Request $request) {
    global $wpdb;

    aurora_image_search_maybe_install();

    $tmp_file = aurora_image_search_uploaded_file($request);
    if (is_wp_error($tmp_file)) {
        return $tmp_file;
    }

    $query_embedding = aurora_image_search_embedding_from_file($tmp_file);
    if (is_wp_error($query_embedding)) {
        return $query_embedding;
    }

    $limit = max(1, min(20, absint($request->get_param('limit') ?: 16)));
    $table = aurora_image_search_table_name();
    $rows = $wpdb->get_results($wpdb->prepare(
        "SELECT product_id, attachment_id, embedding, source, indexed_at FROM {$table} WHERE model = %s",
        aurora_image_search_embedding_model()
    ), ARRAY_A);
    if (!$rows) {
        return new WP_REST_Response(array(
            'ok' => false,
            'message' => __('No indexed products are ready for image search yet.', 'aurora-bag-supply'),
            'products' => array(),
        ), 200);
    }

    $best_by_product = array();
    foreach ($rows as $row) {
        $product_id = absint($row['product_id']);
        $score = aurora_image_search_score($query_embedding, aurora_image_search_decode_embedding($row['embedding']));
        if (!isset($best_by_product[$product_id]) || $score > $best_by_product[$product_id]['score']) {
            $best_by_product[$product_id] = array(
                'product_id' => $product_id,
                'score' => $score,
                'attachment_id' => absint($row['attachment_id']),
            );
        }
    }

    usort($best_by_product, function ($a, $b) {
        return $b['score'] <=> $a['score'];
    });

    $debug = (bool) $request->get_param('debug') && aurora_image_search_env('AURORA_IMAGE_SEARCH_DEBUG', '') === '1';
    $products = array();
    foreach (array_slice($best_by_product, 0, $limit) as $match) {
        $payload = aurora_image_search_product_payload($match['product_id']);
        if (!$payload) {
            continue;
        }
        if ($debug) {
            $payload['similarity'] = round((float) $match['score'], 4);
        }
        $products[] = $payload;
    }

    return new WP_REST_Response(array(
        'ok' => true,
        'message' => $products ? '' : __('No similar products were found.', 'aurora-bag-supply'),
        'products' => $products,
    ), 200);
}

function aurora_image_search_product_payload($product_id) {
    if (!function_exists('wc_get_product')) {
        return null;
    }
    $product = wc_get_product($product_id);
    if (!$product || !$product->is_visible()) {
        return null;
    }

    $terms = wc_get_product_terms($product_id, 'product_cat', array('fields' => 'names'));
    $material = wc_get_product_terms($product_id, 'pa_material', array('fields' => 'names'));
    $size = wc_get_product_terms($product_id, 'pa_size', array('fields' => 'names'));
    $moq = get_post_meta($product_id, '_aurora_moq', true);

    return array(
        'id' => $product_id,
        'name' => $product->get_name(),
        'sku' => $product->get_sku(),
        'category' => $terms ? $terms[0] : '',
        'material' => $material ? implode(', ', $material) : '',
        'size' => $size ? implode(', ', $size) : '',
        'moq' => $moq ? 'MOQ ' . $moq : __('MOQ by order', 'aurora-bag-supply'),
        'price' => wp_strip_all_tags($product->get_price_html() ?: __('Request Quote', 'aurora-bag-supply')),
        'image' => wp_get_attachment_image_url($product->get_image_id(), 'woocommerce_thumbnail'),
        'permalink' => get_permalink($product_id),
        'quoteUrl' => add_query_arg(array(
            'product' => rawurlencode($product->get_name()),
            'sku' => rawurlencode($product->get_sku()),
        ), home_url('/contact/')),
    );
}

function aurora_image_search_rest_reindex(WP_REST_Request $request) {
    aurora_image_search_maybe_install();

    $product_id = absint($request->get_param('product_id'));
    if ($product_id) {
        $indexed = aurora_image_search_index_product($product_id);
        if (is_wp_error($indexed)) {
            return $indexed;
        }
        return new WP_REST_Response(array('ok' => true, 'indexed' => $indexed), 200);
    }

    $args = array(
        'post_type' => 'product',
        'post_status' => 'publish',
        'fields' => 'ids',
        'posts_per_page' => max(1, min(200, absint($request->get_param('limit') ?: 50))),
    );
    if (!$request->get_param('all')) {
        $args['meta_query'] = array(
            array(
                'key' => '_aurora_image_search_stale',
                'compare' => 'EXISTS',
            ),
        );
    }
    $ids = get_posts($args);

    $indexed = 0;
    $errors = array();
    foreach ($ids as $id) {
        $result = aurora_image_search_index_product($id);
        if (is_wp_error($result)) {
            $errors[] = array('product_id' => $id, 'message' => $result->get_error_message());
            continue;
        }
        $indexed += (int) $result;
    }

    return new WP_REST_Response(array(
        'ok' => empty($errors),
        'indexed' => $indexed,
        'errors' => $errors,
    ), empty($errors) ? 200 : 207);
}
