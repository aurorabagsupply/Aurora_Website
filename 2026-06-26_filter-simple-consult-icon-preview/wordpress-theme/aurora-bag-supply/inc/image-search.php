<?php
if (!defined('ABSPATH')) {
    exit;
}

require_once get_template_directory() . '/inc/image-search-index.php';
require_once get_template_directory() . '/inc/image-search-rest.php';

function aurora_image_search_table_name() {
    global $wpdb;
    return $wpdb->prefix . 'aurora_image_embeddings';
}

function aurora_image_search_env($key, $default = '') {
    $value = getenv($key);
    if ($value !== false && $value !== '') {
        return $value;
    }
    if (defined($key) && constant($key) !== '') {
        return constant($key);
    }
    return $default;
}

function aurora_image_search_install() {
    global $wpdb;
    $table = aurora_image_search_table_name();
    $charset_collate = $wpdb->get_charset_collate();

    require_once ABSPATH . 'wp-admin/includes/upgrade.php';
    dbDelta("CREATE TABLE {$table} (
        id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
        product_id bigint(20) unsigned NOT NULL,
        attachment_id bigint(20) unsigned NOT NULL DEFAULT 0,
        image_hash varchar(64) NOT NULL DEFAULT '',
        model varchar(120) NOT NULL DEFAULT '',
        embedding longtext NOT NULL,
        source varchar(24) NOT NULL DEFAULT 'thumbnail',
        indexed_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY  (id),
        KEY product_id (product_id),
        KEY attachment_id (attachment_id),
        KEY image_hash (image_hash),
        KEY model (model)
    ) {$charset_collate};");

    update_option('aurora_image_search_db_version', '1');
}

function aurora_image_search_maybe_install() {
    if (get_option('aurora_image_search_db_version') !== '1') {
        aurora_image_search_install();
    }
}
add_action('after_switch_theme', 'aurora_image_search_install');
add_action('admin_init', 'aurora_image_search_maybe_install');

function aurora_image_search_allowed_origins() {
    $configured = aurora_image_search_env('AURORA_IMAGE_SEARCH_ALLOWED_ORIGINS', '');
    $origins = array_filter(array_map('trim', explode(',', $configured)));
    $defaults = array(
        home_url(),
        'https://aolola.com',
        'https://aolola.com',
    );
    return array_unique(array_merge($defaults, $origins));
}

function aurora_image_search_cors_headers($served, $result, $request, $server) {
    $route = $request instanceof WP_REST_Request ? $request->get_route() : '';
    if (strpos($route, '/aurora/v1/image-search') !== 0) {
        return $served;
    }

    $origin = isset($_SERVER['HTTP_ORIGIN']) ? esc_url_raw(wp_unslash($_SERVER['HTTP_ORIGIN'])) : '';
    if ($origin && in_array($origin, aurora_image_search_allowed_origins(), true)) {
        header('Access-Control-Allow-Origin: ' . $origin);
        header('Vary: Origin');
        header('Access-Control-Allow-Methods: POST, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, X-WP-Nonce');
    }
    return $served;
}
add_filter('rest_pre_serve_request', 'aurora_image_search_cors_headers', 10, 4);

add_action('rest_api_init', 'aurora_image_search_register_routes');
add_action('save_post_product', 'aurora_image_search_mark_product_stale', 10, 3);
