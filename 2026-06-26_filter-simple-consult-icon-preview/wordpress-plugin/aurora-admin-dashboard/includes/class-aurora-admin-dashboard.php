<?php
if (!defined('ABSPATH')) {
    exit;
}

class Aurora_Admin_Dashboard {
    private static $instance = null;
    private $namespace = 'aurora-admin/v1';
    private $public_namespace = 'aurora/v1';

    public static function instance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public static function activate() {
        self::create_tables();
        self::add_capabilities();
    }

    private function __construct() {
        add_action('admin_menu', array($this, 'register_admin_menu'));
        add_action('admin_enqueue_scripts', array($this, 'enqueue_admin_assets'));
        add_action('wp_enqueue_scripts', array($this, 'enqueue_public_assets'));
        add_action('rest_api_init', array($this, 'register_routes'));
    }

    public static function tables() {
        global $wpdb;
        return array(
            'quotes' => $wpdb->prefix . 'aurora_quotes',
            'quote_items' => $wpdb->prefix . 'aurora_quote_items',
            'lead_notes' => $wpdb->prefix . 'aurora_lead_notes',
            'audit_logs' => $wpdb->prefix . 'aurora_admin_audit_logs',
        );
    }

    public static function create_tables() {
        global $wpdb;
        $tables = self::tables();
        $charset = $wpdb->get_charset_collate();
        require_once ABSPATH . 'wp-admin/includes/upgrade.php';

        dbDelta("CREATE TABLE {$tables['quotes']} (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            lead_uid varchar(40) NOT NULL DEFAULT '',
            status varchar(32) NOT NULL DEFAULT 'new',
            owner_id bigint(20) unsigned NOT NULL DEFAULT 0,
            customer_user_id bigint(20) unsigned NOT NULL DEFAULT 0,
            name varchar(190) NOT NULL DEFAULT '',
            company varchar(190) NOT NULL DEFAULT '',
            country varchar(120) NOT NULL DEFAULT '',
            email varchar(190) NOT NULL DEFAULT '',
            phone varchar(120) NOT NULL DEFAULT '',
            whatsapp_wechat varchar(120) NOT NULL DEFAULT '',
            source_page text NULL,
            utm_source varchar(120) NOT NULL DEFAULT '',
            utm_medium varchar(120) NOT NULL DEFAULT '',
            utm_campaign varchar(120) NOT NULL DEFAULT '',
            project_notes longtext NULL,
            follow_up_at datetime NULL,
            created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
            deleted_at datetime NULL,
            PRIMARY KEY (id),
            KEY status (status),
            KEY email (email),
            KEY owner_id (owner_id),
            KEY created_at (created_at)
        ) {$charset};");

        dbDelta("CREATE TABLE {$tables['quote_items']} (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            quote_id bigint(20) unsigned NOT NULL,
            product_id bigint(20) unsigned NOT NULL DEFAULT 0,
            sku varchar(120) NOT NULL DEFAULT '',
            product_name varchar(190) NOT NULL DEFAULT '',
            category varchar(120) NOT NULL DEFAULT '',
            quantity varchar(80) NOT NULL DEFAULT '',
            finish varchar(190) NOT NULL DEFAULT '',
            custom_requirement longtext NULL,
            created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id),
            KEY quote_id (quote_id),
            KEY product_id (product_id),
            KEY sku (sku)
        ) {$charset};");

        dbDelta("CREATE TABLE {$tables['lead_notes']} (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            quote_id bigint(20) unsigned NOT NULL,
            user_id bigint(20) unsigned NOT NULL DEFAULT 0,
            note longtext NOT NULL,
            created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id),
            KEY quote_id (quote_id),
            KEY user_id (user_id)
        ) {$charset};");

        dbDelta("CREATE TABLE {$tables['audit_logs']} (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            user_id bigint(20) unsigned NOT NULL DEFAULT 0,
            action varchar(120) NOT NULL DEFAULT '',
            object_type varchar(80) NOT NULL DEFAULT '',
            object_id bigint(20) unsigned NOT NULL DEFAULT 0,
            context longtext NULL,
            ip_hash varchar(80) NOT NULL DEFAULT '',
            created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id),
            KEY user_id (user_id),
            KEY action (action),
            KEY object_type (object_type),
            KEY created_at (created_at)
        ) {$charset};");

        update_option('aurora_admin_dashboard_db_version', '1');
    }

    public static function add_capabilities() {
        $caps = array(
            'aurora_view_dashboard',
            'aurora_manage_products',
            'aurora_manage_categories',
            'aurora_manage_quotes',
            'aurora_view_customers',
            'aurora_export_data',
            'aurora_view_audit_logs',
        );
        foreach (array('administrator', 'shop_manager') as $role_name) {
            $role = get_role($role_name);
            if (!$role) {
                continue;
            }
            foreach ($caps as $cap) {
                $role->add_cap($cap);
            }
        }
    }

    public function register_admin_menu() {
        add_menu_page(
            __('AOLOLA Admin', 'aurora-admin-dashboard'),
            __('AOLOLA Admin', 'aurora-admin-dashboard'),
            'aurora_view_dashboard',
            'aurora-admin-dashboard',
            array($this, 'render_admin_page'),
            'dashicons-store',
            56
        );
    }

    public function enqueue_admin_assets($hook) {
        if ($hook !== 'toplevel_page_aurora-admin-dashboard') {
            return;
        }
        wp_enqueue_style(
            'aurora-admin-dashboard',
            AURORA_ADMIN_DASHBOARD_URL . 'assets/admin.css',
            array(),
            AURORA_ADMIN_DASHBOARD_VERSION
        );
        wp_enqueue_script(
            'aurora-admin-dashboard',
            AURORA_ADMIN_DASHBOARD_URL . 'assets/admin.js',
            array('wp-api-fetch'),
            AURORA_ADMIN_DASHBOARD_VERSION,
            true
        );
        wp_localize_script('aurora-admin-dashboard', 'AuroraAdminDashboard', array(
            'root' => esc_url_raw(rest_url($this->namespace)),
            'nonce' => wp_create_nonce('wp_rest'),
            'can' => array(
                'products' => current_user_can('aurora_manage_products'),
                'categories' => current_user_can('aurora_manage_categories'),
                'quotes' => current_user_can('aurora_manage_quotes'),
                'customers' => current_user_can('aurora_view_customers'),
                'audit' => current_user_can('aurora_view_audit_logs'),
            ),
        ));
    }

    public function enqueue_public_assets() {
        if (is_admin()) {
            return;
        }
        wp_enqueue_style(
            'aurora-admin-dashboard-public',
            AURORA_ADMIN_DASHBOARD_URL . 'assets/public-quote.css',
            array(),
            AURORA_ADMIN_DASHBOARD_VERSION
        );
        wp_enqueue_script(
            'aurora-admin-dashboard-public',
            AURORA_ADMIN_DASHBOARD_URL . 'assets/public-quote.js',
            array(),
            AURORA_ADMIN_DASHBOARD_VERSION,
            true
        );
        wp_localize_script('aurora-admin-dashboard-public', 'AuroraQuoteApi', array(
            'endpoint' => esc_url_raw(rest_url($this->public_namespace . '/quotes')),
            'messages' => array(
                'sending' => __('Sending quote request...', 'aurora-admin-dashboard'),
                'success' => __('Thank you. Your quote request has been received.', 'aurora-admin-dashboard'),
                'error' => __('Unable to send the request. Please email aurorabagsupply@gmail.com.', 'aurora-admin-dashboard'),
            ),
        ));
    }

    public function render_admin_page() {
        if (!current_user_can('aurora_view_dashboard')) {
            wp_die(esc_html__('You do not have permission to access AOLOLA Admin.', 'aurora-admin-dashboard'));
        }
        ?>
        <div class="aurora-admin" id="aurora-admin-root">
            <aside class="aurora-admin__sidebar">
                <div class="aurora-admin__brand">
                    <span>AB</span>
                    <div>
                        <strong>AOLOLA Admin</strong>
                        <small>Merchant operations</small>
                    </div>
                </div>
                <button data-view="dashboard" class="is-active">Dashboard</button>
                <button data-view="products">Products</button>
                <button data-view="categories">Categories</button>
                <button data-view="quotes">Quotes</button>
                <button data-view="customers">Customers</button>
                <button data-view="audit">Audit Logs</button>
            </aside>
            <main class="aurora-admin__main">
                <header class="aurora-admin__topbar">
                    <div>
                        <h1 data-title>AOLOLA Merchant Dashboard</h1>
                        <p data-subtitle>Products, sourcing leads, customers and operational controls.</p>
                    </div>
                    <button class="aurora-admin__refresh" data-refresh>Refresh</button>
                </header>
                <section class="aurora-admin__content" data-content>
                    <p>Loading dashboard...</p>
                </section>
            </main>
        </div>
        <?php
    }

    public function register_routes() {
        register_rest_route($this->public_namespace, '/quotes', array(
            'methods' => WP_REST_Server::CREATABLE,
            'callback' => array($this, 'public_quotes_create'),
            'permission_callback' => '__return_true',
        ));
        register_rest_route($this->namespace, '/dashboard', array(
            'methods' => WP_REST_Server::READABLE,
            'callback' => array($this, 'dashboard'),
            'permission_callback' => array($this, 'can_view_dashboard'),
        ));
        register_rest_route($this->namespace, '/products', array(
            array(
                'methods' => WP_REST_Server::READABLE,
                'callback' => array($this, 'products_index'),
                'permission_callback' => array($this, 'can_manage_products'),
            ),
            array(
                'methods' => WP_REST_Server::CREATABLE,
                'callback' => array($this, 'products_create'),
                'permission_callback' => array($this, 'can_manage_products'),
            ),
        ));
        register_rest_route($this->namespace, '/products/(?P<id>\d+)', array(
            array(
                'methods' => WP_REST_Server::EDITABLE,
                'callback' => array($this, 'products_update'),
                'permission_callback' => array($this, 'can_manage_products'),
            ),
            array(
                'methods' => WP_REST_Server::DELETABLE,
                'callback' => array($this, 'products_trash'),
                'permission_callback' => array($this, 'can_manage_products'),
            ),
        ));
        register_rest_route($this->namespace, '/products/(?P<id>\d+)/duplicate', array(
            'methods' => WP_REST_Server::CREATABLE,
            'callback' => array($this, 'products_duplicate'),
            'permission_callback' => array($this, 'can_manage_products'),
        ));
        register_rest_route($this->namespace, '/categories', array(
            array(
                'methods' => WP_REST_Server::READABLE,
                'callback' => array($this, 'categories_index'),
                'permission_callback' => array($this, 'can_manage_categories'),
            ),
            array(
                'methods' => WP_REST_Server::CREATABLE,
                'callback' => array($this, 'categories_create'),
                'permission_callback' => array($this, 'can_manage_categories'),
            ),
        ));
        register_rest_route($this->namespace, '/categories/(?P<id>\d+)', array(
            array(
                'methods' => WP_REST_Server::EDITABLE,
                'callback' => array($this, 'categories_update'),
                'permission_callback' => array($this, 'can_manage_categories'),
            ),
            array(
                'methods' => WP_REST_Server::DELETABLE,
                'callback' => array($this, 'categories_delete'),
                'permission_callback' => array($this, 'can_manage_categories'),
            ),
        ));
        register_rest_route($this->namespace, '/quotes', array(
            array(
                'methods' => WP_REST_Server::READABLE,
                'callback' => array($this, 'quotes_index'),
                'permission_callback' => array($this, 'can_manage_quotes'),
            ),
            array(
                'methods' => WP_REST_Server::CREATABLE,
                'callback' => array($this, 'quotes_create'),
                'permission_callback' => array($this, 'can_manage_quotes'),
            ),
        ));
        register_rest_route($this->namespace, '/quotes/(?P<id>\d+)', array(
            'methods' => WP_REST_Server::EDITABLE,
            'callback' => array($this, 'quotes_update'),
            'permission_callback' => array($this, 'can_manage_quotes'),
        ));
        register_rest_route($this->namespace, '/quotes/(?P<id>\d+)/notes', array(
            'methods' => WP_REST_Server::CREATABLE,
            'callback' => array($this, 'quotes_add_note'),
            'permission_callback' => array($this, 'can_manage_quotes'),
        ));
        register_rest_route($this->namespace, '/customers', array(
            'methods' => WP_REST_Server::READABLE,
            'callback' => array($this, 'customers_index'),
            'permission_callback' => array($this, 'can_view_customers'),
        ));
        register_rest_route($this->namespace, '/audit-logs', array(
            'methods' => WP_REST_Server::READABLE,
            'callback' => array($this, 'audit_index'),
            'permission_callback' => array($this, 'can_view_audit'),
        ));
    }

    public function can_view_dashboard() {
        return current_user_can('aurora_view_dashboard') || current_user_can('manage_options');
    }

    public function can_manage_products() {
        return current_user_can('aurora_manage_products') || current_user_can('manage_woocommerce') || current_user_can('manage_options');
    }

    public function can_manage_categories() {
        return current_user_can('aurora_manage_categories') || current_user_can('manage_product_terms') || current_user_can('manage_options');
    }

    public function can_manage_quotes() {
        return current_user_can('aurora_manage_quotes') || current_user_can('manage_woocommerce') || current_user_can('manage_options');
    }

    public function can_view_customers() {
        return current_user_can('aurora_view_customers') || current_user_can('list_users') || current_user_can('manage_options');
    }

    public function can_view_audit() {
        return current_user_can('aurora_view_audit_logs') || current_user_can('manage_options');
    }

    public function dashboard() {
        global $wpdb;
        $tables = self::tables();
        $product_count = post_type_exists('product') ? wp_count_posts('product') : null;
        $new_quotes = (int) $wpdb->get_var("SELECT COUNT(*) FROM {$tables['quotes']} WHERE deleted_at IS NULL AND status = 'new'");
        $quote_total = (int) $wpdb->get_var("SELECT COUNT(*) FROM {$tables['quotes']} WHERE deleted_at IS NULL");
        $customer_count = count_users();
        $top_products = $this->top_products();

        return rest_ensure_response(array(
            'cards' => array(
                array('label' => 'Published products', 'value' => $product_count ? (int) $product_count->publish : 0),
                array('label' => 'Draft products', 'value' => $product_count ? (int) $product_count->draft : 0),
                array('label' => 'New quotes', 'value' => $new_quotes),
                array('label' => 'Total quotes', 'value' => $quote_total),
                array('label' => 'Registered users', 'value' => (int) ($customer_count['total_users'] ?? 0)),
            ),
            'topProducts' => $top_products,
            'quoteStatus' => $this->quote_status_summary(),
        ));
    }

    private function top_products() {
        if (!function_exists('wc_get_products')) {
            return array();
        }
        $products = wc_get_products(array(
            'limit' => 5,
            'status' => array('publish', 'draft'),
            'orderby' => 'date',
            'order' => 'DESC',
        ));
        return array_map(array($this, 'format_product'), $products);
    }

    public function products_index(WP_REST_Request $request) {
        if (!function_exists('wc_get_products')) {
            return new WP_Error('aurora_woocommerce_missing', 'WooCommerce is required for product management.', array('status' => 503));
        }
        $products = wc_get_products(array(
            'limit' => min(100, max(1, absint($request->get_param('limit') ?: 30))),
            'status' => array('publish', 'draft', 'pending', 'private'),
            'search' => sanitize_text_field($request->get_param('search')),
            'orderby' => 'date',
            'order' => 'DESC',
        ));
        return rest_ensure_response(array('products' => array_map(array($this, 'format_product'), $products)));
    }

    public function products_create(WP_REST_Request $request) {
        if (!function_exists('wc_get_product_object')) {
            return new WP_Error('aurora_woocommerce_missing', 'WooCommerce is required for product management.', array('status' => 503));
        }
        $product = wc_get_product_object('simple');
        $this->apply_product_payload($product, $request);
        $product->save();
        $this->apply_product_meta_payload($product->get_id(), $request);
        $this->audit('product_created', 'product', $product->get_id(), array('name' => $product->get_name()));
        return rest_ensure_response(array('product' => $this->format_product($product)));
    }

    public function products_update(WP_REST_Request $request) {
        $product = function_exists('wc_get_product') ? wc_get_product(absint($request['id'])) : null;
        if (!$product) {
            return new WP_Error('aurora_product_not_found', 'Product not found.', array('status' => 404));
        }
        $this->apply_product_payload($product, $request);
        $product->save();
        $this->apply_product_meta_payload($product->get_id(), $request);
        $this->audit('product_updated', 'product', $product->get_id(), array('name' => $product->get_name()));
        return rest_ensure_response(array('product' => $this->format_product($product)));
    }

    public function products_trash(WP_REST_Request $request) {
        $product_id = absint($request['id']);
        if (get_post_type($product_id) !== 'product') {
            return new WP_Error('aurora_product_not_found', 'Product not found.', array('status' => 404));
        }
        wp_trash_post($product_id);
        $this->audit('product_trashed', 'product', $product_id);
        return rest_ensure_response(array('ok' => true, 'id' => $product_id));
    }

    public function products_duplicate(WP_REST_Request $request) {
        $source = function_exists('wc_get_product') ? wc_get_product(absint($request['id'])) : null;
        if (!$source || !function_exists('wc_get_product_object')) {
            return new WP_Error('aurora_product_not_found', 'Product not found.', array('status' => 404));
        }
        $copy = wc_get_product_object('simple');
        $copy->set_name($source->get_name() . ' Copy');
        $copy->set_sku('');
        $copy->set_status('draft');
        $copy->set_description($source->get_description());
        $copy->set_short_description($source->get_short_description());
        $copy->set_image_id($source->get_image_id());
        $copy->set_gallery_image_ids($source->get_gallery_image_ids());
        $copy->save();
        foreach (array('_aurora_moq', '_aurora_finish', '_aurora_application') as $key) {
            update_post_meta($copy->get_id(), $key, get_post_meta($source->get_id(), $key, true));
        }
        wp_set_object_terms($copy->get_id(), wp_get_object_terms($source->get_id(), 'product_cat', array('fields' => 'ids')), 'product_cat');
        $this->audit('product_duplicated', 'product', $copy->get_id(), array('source_id' => $source->get_id()));
        return rest_ensure_response(array('product' => $this->format_product($copy)));
    }

    private function apply_product_payload($product, WP_REST_Request $request) {
        $payload = $request->get_json_params();
        if (isset($payload['name'])) {
            $product->set_name(sanitize_text_field($payload['name']));
        }
        if (isset($payload['sku'])) {
            $product->set_sku(sanitize_text_field($payload['sku']));
        }
        if (isset($payload['status'])) {
            $product->set_status(in_array($payload['status'], array('publish', 'draft', 'pending'), true) ? $payload['status'] : 'draft');
        }
        if (isset($payload['description'])) {
            $product->set_description(wp_kses_post($payload['description']));
        }
        if (isset($payload['short_description'])) {
            $product->set_short_description(wp_kses_post($payload['short_description']));
        }
        if (isset($payload['regular_price'])) {
            $product->set_regular_price(wc_format_decimal($payload['regular_price']));
        }
    }

    private function apply_product_meta_payload($product_id, WP_REST_Request $request) {
        $product_id = absint($product_id);
        if (!$product_id) {
            return;
        }
        $payload = $request->get_json_params();
        foreach (array('moq' => '_aurora_moq', 'finish' => '_aurora_finish', 'application' => '_aurora_application') as $field => $meta_key) {
            if (isset($payload[$field])) {
                update_post_meta($product_id, $meta_key, sanitize_text_field($payload[$field]));
            }
        }
        if (!empty($payload['category_ids']) && is_array($payload['category_ids'])) {
            wp_set_object_terms($product_id, array_map('absint', $payload['category_ids']), 'product_cat');
        }
    }

    public function categories_index() {
        $terms = get_terms(array('taxonomy' => 'product_cat', 'hide_empty' => false));
        if (is_wp_error($terms)) {
            return $terms;
        }
        return rest_ensure_response(array('categories' => array_map(array($this, 'format_category'), $terms)));
    }

    public function categories_create(WP_REST_Request $request) {
        $payload = $request->get_json_params();
        $name = sanitize_text_field($payload['name'] ?? '');
        if (!$name) {
            return new WP_Error('aurora_category_name_required', 'Category name is required.', array('status' => 400));
        }
        $term = wp_insert_term($name, 'product_cat', array(
            'slug' => sanitize_title($payload['slug'] ?? ''),
            'parent' => absint($payload['parent'] ?? 0),
            'description' => sanitize_textarea_field($payload['description'] ?? ''),
        ));
        if (is_wp_error($term)) {
            return $term;
        }
        if (!empty($payload['thumbnail_id'])) {
            update_term_meta($term['term_id'], 'thumbnail_id', absint($payload['thumbnail_id']));
        }
        $this->audit('category_created', 'product_cat', $term['term_id'], array('name' => $name));
        return $this->categories_index();
    }

    public function categories_update(WP_REST_Request $request) {
        $payload = $request->get_json_params();
        $term_id = absint($request['id']);
        $args = array();
        foreach (array('name', 'slug', 'description') as $field) {
            if (isset($payload[$field])) {
                $args[$field] = $field === 'description' ? sanitize_textarea_field($payload[$field]) : sanitize_text_field($payload[$field]);
            }
        }
        if (isset($payload['parent'])) {
            $args['parent'] = absint($payload['parent']);
        }
        $result = wp_update_term($term_id, 'product_cat', $args);
        if (is_wp_error($result)) {
            return $result;
        }
        if (isset($payload['thumbnail_id'])) {
            update_term_meta($term_id, 'thumbnail_id', absint($payload['thumbnail_id']));
        }
        $this->audit('category_updated', 'product_cat', $term_id);
        return $this->categories_index();
    }

    public function categories_delete(WP_REST_Request $request) {
        $term_id = absint($request['id']);
        $result = wp_delete_term($term_id, 'product_cat');
        if (is_wp_error($result)) {
            return $result;
        }
        $this->audit('category_deleted', 'product_cat', $term_id);
        return rest_ensure_response(array('ok' => true));
    }

    public function quotes_index(WP_REST_Request $request) {
        global $wpdb;
        $tables = self::tables();
        $status = sanitize_key($request->get_param('status') ?: '');
        $where = 'deleted_at IS NULL';
        $params = array();
        if ($status) {
            $where .= ' AND status = %s';
            $params[] = $status;
        }
        $sql = "SELECT * FROM {$tables['quotes']} WHERE {$where} ORDER BY created_at DESC LIMIT 100";
        $rows = $params ? $wpdb->get_results($wpdb->prepare($sql, $params), ARRAY_A) : $wpdb->get_results($sql, ARRAY_A);
        foreach ($rows as &$row) {
            $row['items'] = $wpdb->get_results($wpdb->prepare("SELECT * FROM {$tables['quote_items']} WHERE quote_id = %d", $row['id']), ARRAY_A);
            $row['notes'] = $wpdb->get_results($wpdb->prepare("SELECT * FROM {$tables['lead_notes']} WHERE quote_id = %d ORDER BY created_at DESC", $row['id']), ARRAY_A);
        }
        return rest_ensure_response(array('quotes' => $rows));
    }

    public function quotes_create(WP_REST_Request $request) {
        $payload = $request->get_json_params();
        $result = $this->create_quote_from_payload(is_array($payload) ? $payload : array(), 'admin');
        if (is_wp_error($result)) {
            return $result;
        }
        return rest_ensure_response(array('ok' => true, 'quote_id' => $result['quote_id'], 'lead_uid' => $result['lead_uid']));
    }

    public function public_quotes_create(WP_REST_Request $request) {
        $payload = $request->get_json_params();
        $payload = is_array($payload) ? $payload : array();
        $honeypot = sanitize_text_field($payload['website'] ?? $payload['aurora_company_site'] ?? '');
        if ($honeypot) {
            return rest_ensure_response(array('ok' => true));
        }
        $email = sanitize_email($payload['email'] ?? '');
        if (!$email || !is_email($email)) {
            return new WP_Error('aurora_quote_email_required', 'A valid email is required.', array('status' => 400));
        }
        if (!$this->allow_public_quote_submission($email)) {
            return new WP_Error('aurora_quote_rate_limited', 'Please wait before sending another quote request.', array('status' => 429));
        }
        $result = $this->create_quote_from_payload($payload, 'public');
        if (is_wp_error($result)) {
            return $result;
        }
        $this->notify_quote_created($result['quote_id'], $result['lead_uid'], $email);
        return rest_ensure_response(array('ok' => true, 'quote_id' => $result['quote_id'], 'lead_uid' => $result['lead_uid']));
    }

    public function quotes_update(WP_REST_Request $request) {
        global $wpdb;
        $tables = self::tables();
        $payload = $request->get_json_params();
        $quote_id = absint($request['id']);
        $data = array('updated_at' => current_time('mysql'));
        foreach (array('status', 'country', 'company', 'phone', 'whatsapp_wechat') as $field) {
            if (isset($payload[$field])) {
                $data[$field] = sanitize_text_field($payload[$field]);
            }
        }
        if (isset($payload['owner_id'])) {
            $data['owner_id'] = absint($payload['owner_id']);
        }
        if (isset($payload['follow_up_at'])) {
            $data['follow_up_at'] = sanitize_text_field($payload['follow_up_at']);
        }
        $wpdb->update($tables['quotes'], $data, array('id' => $quote_id));
        $this->audit('quote_updated', 'quote', $quote_id, $data);
        return rest_ensure_response(array('ok' => true));
    }

    public function quotes_add_note(WP_REST_Request $request) {
        global $wpdb;
        $tables = self::tables();
        $payload = $request->get_json_params();
        $note = sanitize_textarea_field($payload['note'] ?? '');
        if (!$note) {
            return new WP_Error('aurora_note_required', 'Note is required.', array('status' => 400));
        }
        $quote_id = absint($request['id']);
        $wpdb->insert($tables['lead_notes'], array(
            'quote_id' => $quote_id,
            'user_id' => get_current_user_id(),
            'note' => $note,
            'created_at' => current_time('mysql'),
        ));
        $this->audit('quote_note_added', 'quote', $quote_id);
        return rest_ensure_response(array('ok' => true));
    }

    public function customers_index(WP_REST_Request $request) {
        $users = get_users(array(
            'number' => min(100, max(1, absint($request->get_param('limit') ?: 50))),
            'role__in' => array('customer', 'subscriber'),
            'orderby' => 'registered',
            'order' => 'DESC',
        ));
        $customers = array();
        foreach ($users as $user) {
            $customers[] = array(
                'id' => $user->ID,
                'name' => $user->display_name,
                'email' => $user->user_email,
                'company' => get_user_meta($user->ID, 'company_name', true),
                'country' => get_user_meta($user->ID, 'country', true),
                'whatsapp_wechat' => get_user_meta($user->ID, 'whatsapp_wechat', true),
                'business_type' => get_user_meta($user->ID, 'business_type', true),
                'registered' => $user->user_registered,
            );
        }
        return rest_ensure_response(array('customers' => $customers));
    }

    public function audit_index() {
        global $wpdb;
        $tables = self::tables();
        $rows = $wpdb->get_results("SELECT * FROM {$tables['audit_logs']} ORDER BY created_at DESC LIMIT 100", ARRAY_A);
        return rest_ensure_response(array('logs' => $rows));
    }

    private function quote_status_summary() {
        global $wpdb;
        $tables = self::tables();
        $rows = $wpdb->get_results("SELECT status, COUNT(*) as total FROM {$tables['quotes']} WHERE deleted_at IS NULL GROUP BY status", ARRAY_A);
        return $rows ?: array();
    }

    private function format_product($product) {
        $id = $product->get_id();
        $terms = wc_get_product_terms($id, 'product_cat', array('fields' => 'all'));
        return array(
            'id' => $id,
            'name' => $product->get_name(),
            'sku' => $product->get_sku(),
            'status' => $product->get_status(),
            'permalink' => get_permalink($id),
            'image' => wp_get_attachment_image_url($product->get_image_id(), 'thumbnail'),
            'categories' => array_map(array($this, 'format_category'), $terms),
            'moq' => get_post_meta($id, '_aurora_moq', true),
            'finish' => get_post_meta($id, '_aurora_finish', true),
            'application' => get_post_meta($id, '_aurora_application', true),
            'price' => wp_strip_all_tags($product->get_price_html()),
            'modified' => get_post_modified_time('c', true, $id),
        );
    }

    private function format_category($term) {
        return array(
            'id' => (int) $term->term_id,
            'name' => $term->name,
            'slug' => $term->slug,
            'parent' => (int) $term->parent,
            'count' => (int) $term->count,
            'description' => $term->description,
            'thumbnail_id' => (int) get_term_meta($term->term_id, 'thumbnail_id', true),
        );
    }

    private function create_quote_from_payload($payload, $source = 'admin') {
        global $wpdb;
        $tables = self::tables();
        $email = sanitize_email($payload['email'] ?? '');
        if (!$email || !is_email($email)) {
            return new WP_Error('aurora_quote_email_required', 'A valid email is required.', array('status' => 400));
        }

        $lead_uid = 'AUR-' . gmdate('Ymd') . '-' . wp_generate_password(6, false, false);
        $inserted = $wpdb->insert($tables['quotes'], array(
            'lead_uid' => $lead_uid,
            'status' => 'new',
            'customer_user_id' => get_current_user_id(),
            'name' => sanitize_text_field($payload['name'] ?? ''),
            'company' => sanitize_text_field($payload['company'] ?? ''),
            'country' => sanitize_text_field($payload['country'] ?? ''),
            'email' => $email,
            'phone' => sanitize_text_field($payload['phone'] ?? ''),
            'whatsapp_wechat' => sanitize_text_field($payload['whatsapp_wechat'] ?? $payload['contact'] ?? ''),
            'source_page' => esc_url_raw($payload['source_page'] ?? ''),
            'utm_source' => sanitize_text_field($payload['utm_source'] ?? ''),
            'utm_medium' => sanitize_text_field($payload['utm_medium'] ?? ''),
            'utm_campaign' => sanitize_text_field($payload['utm_campaign'] ?? ''),
            'project_notes' => sanitize_textarea_field($payload['project_notes'] ?? $payload['message'] ?? ''),
            'created_at' => current_time('mysql'),
            'updated_at' => current_time('mysql'),
        ), array('%s', '%s', '%d', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s'));

        if (!$inserted) {
            return new WP_Error('aurora_quote_insert_failed', 'Unable to save quote request.', array('status' => 500));
        }

        $quote_id = (int) $wpdb->insert_id;
        $items = isset($payload['items']) && is_array($payload['items']) ? $payload['items'] : array();
        if (empty($items)) {
            $items[] = array(
                'product_id' => absint($payload['product_id'] ?? 0),
                'sku' => $payload['sku'] ?? '',
                'product_name' => $payload['product'] ?? $payload['product_name'] ?? '',
                'category' => $payload['category'] ?? '',
                'quantity' => $payload['quantity'] ?? '',
                'finish' => $payload['finish'] ?? '',
                'custom_requirement' => $payload['custom_requirement'] ?? '',
            );
        }

        foreach ($items as $item) {
            $sku = sanitize_text_field($item['sku'] ?? '');
            $product_name = sanitize_text_field($item['product_name'] ?? $item['name'] ?? '');
            $category = sanitize_text_field($item['category'] ?? '');
            $quantity = sanitize_text_field($item['quantity'] ?? $item['qty'] ?? '');
            $finish = sanitize_text_field($item['finish'] ?? '');
            $custom_requirement = sanitize_textarea_field($item['custom_requirement'] ?? '');
            if (!$sku && !$product_name && !$category && !$quantity && !$finish && !$custom_requirement) {
                continue;
            }
            $wpdb->insert($tables['quote_items'], array(
                'quote_id' => $quote_id,
                'product_id' => absint($item['product_id'] ?? $item['id'] ?? 0),
                'sku' => $sku,
                'product_name' => $product_name,
                'category' => $category,
                'quantity' => $quantity,
                'finish' => $finish,
                'custom_requirement' => $custom_requirement,
            ), array('%d', '%d', '%s', '%s', '%s', '%s', '%s', '%s'));
        }

        $this->audit($source === 'public' ? 'quote_created_public' : 'quote_created', 'quote', $quote_id, array(
            'email' => $email,
            'source' => sanitize_key($source),
        ));

        return array('quote_id' => $quote_id, 'lead_uid' => $lead_uid);
    }

    private function allow_public_quote_submission($email) {
        $ip = isset($_SERVER['REMOTE_ADDR']) ? sanitize_text_field(wp_unslash($_SERVER['REMOTE_ADDR'])) : '';
        $key = 'aurora_quote_rate_' . md5(strtolower($email) . '|' . $ip);
        $count = (int) get_transient($key);
        if ($count >= 5) {
            return false;
        }
        set_transient($key, $count + 1, 10 * MINUTE_IN_SECONDS);
        return true;
    }

    private function notify_quote_created($quote_id, $lead_uid, $email) {
        $admin_email = get_option('admin_email');
        if (!$admin_email || !is_email($admin_email)) {
            return;
        }
        $subject = sprintf('New AOLOLA quote request %s', $lead_uid);
        $message = sprintf(
            "A new quote request was submitted.\n\nLead: %s\nEmail: %s\nQuote ID: %d\n\nOpen WordPress Admin > AOLOLA Admin > Quotes to review.",
            $lead_uid,
            $email,
            absint($quote_id)
        );
        wp_mail($admin_email, $subject, $message);
    }

    private function audit($action, $object_type, $object_id = 0, $context = array()) {
        global $wpdb;
        $tables = self::tables();
        $ip = isset($_SERVER['REMOTE_ADDR']) ? sanitize_text_field(wp_unslash($_SERVER['REMOTE_ADDR'])) : '';
        $wpdb->insert($tables['audit_logs'], array(
            'user_id' => get_current_user_id(),
            'action' => sanitize_key($action),
            'object_type' => sanitize_key($object_type),
            'object_id' => absint($object_id),
            'context' => wp_json_encode($context),
            'ip_hash' => $ip ? wp_hash($ip) : '',
            'created_at' => current_time('mysql'),
        ));
    }
}
