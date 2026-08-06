<?php
if (!defined('ABSPATH')) {
    exit;
}

function aurora_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('woocommerce');
    add_theme_support('wc-product-gallery-zoom');
    add_theme_support('wc-product-gallery-lightbox');
    add_theme_support('wc-product-gallery-slider');

    register_nav_menus(array(
        'primary' => __('Primary Navigation', 'aurora-bag-supply'),
        'category' => __('Category Navigation', 'aurora-bag-supply'),
        'footer_products' => __('Footer Products', 'aurora-bag-supply'),
        'footer_support' => __('Footer Support', 'aurora-bag-supply'),
        'footer_company' => __('Footer Company', 'aurora-bag-supply'),
    ));
}
add_action('after_setup_theme', 'aurora_setup');

function aurora_assets() {
    wp_enqueue_style('aurora-commerce', get_template_directory_uri() . '/assets/css/aurora-commerce.css', array(), '1.0.10-preview');
    wp_enqueue_script('aurora-commerce', get_template_directory_uri() . '/assets/js/aurora-commerce.js', array(), '1.0.10-preview', true);
}
add_action('wp_enqueue_scripts', 'aurora_assets');

function aurora_product_search_form($form) {
    $shop_url = function_exists('wc_get_page_permalink') ? wc_get_page_permalink('shop') : home_url('/');
    return '<form role="search" method="get" class="site-search" action="' . esc_url($shop_url) . '"><input type="search" name="s" placeholder="Search hardware, leather, buckles, zippers, accessories..." value="' . get_search_query() . '" /><button type="submit">Search</button><input type="hidden" name="post_type" value="product" /></form>';
}
add_filter('get_product_search_form', 'aurora_product_search_form');

function aurora_woocommerce_wrapper_start() {
    echo '<main><section class="page-title"><div class="container"><h1>' . esc_html(woocommerce_page_title(false)) . '</h1><p>Explore our complete range of bag hardware designed for handbags, luggage, belts and leather goods manufacturing.</p></div></section><section class="section"><div class="container">';
}

function aurora_woocommerce_wrapper_end() {
    echo '</div></section></main>';
}

remove_action('woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10);
remove_action('woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10);
add_action('woocommerce_before_main_content', 'aurora_woocommerce_wrapper_start', 10);
add_action('woocommerce_after_main_content', 'aurora_woocommerce_wrapper_end', 10);

function aurora_quote_button($product_id = 0) {
    $product_id = $product_id ? $product_id : get_the_ID();
    $name = get_the_title($product_id);
    $sku = '';
    if (function_exists('wc_get_product')) {
        $product = wc_get_product($product_id);
        if ($product) {
            $sku = $product->get_sku();
        }
    }
    $url = add_query_arg(array(
        'product' => rawurlencode($name),
        'sku' => rawurlencode($sku),
    ), home_url('/contact/'));

    return '<a class="btn btn-brass" href="' . esc_url($url) . '">' . esc_html__('Request a Quote', 'aurora-bag-supply') . '</a>';
}

function aurora_quote_shortcode($atts) {
    $atts = shortcode_atts(array('product_id' => 0), $atts);
    return aurora_quote_button(absint($atts['product_id']));
}
add_shortcode('aurora_quote_button', 'aurora_quote_shortcode');

function aurora_account_registration_fields() {
    ?>
    <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
        <label for="reg_company_name"><?php esc_html_e('Company Name', 'aurora-bag-supply'); ?></label>
        <input type="text" class="woocommerce-Input woocommerce-Input--text input-text" name="company_name" id="reg_company_name" />
    </p>
    <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
        <label for="reg_country"><?php esc_html_e('Country', 'aurora-bag-supply'); ?></label>
        <input type="text" class="woocommerce-Input woocommerce-Input--text input-text" name="country" id="reg_country" />
    </p>
    <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
        <label for="reg_whatsapp"><?php esc_html_e('WhatsApp / WeChat', 'aurora-bag-supply'); ?></label>
        <input type="text" class="woocommerce-Input woocommerce-Input--text input-text" name="whatsapp_wechat" id="reg_whatsapp" />
    </p>
    <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
        <label for="reg_business_type"><?php esc_html_e('Business Type', 'aurora-bag-supply'); ?></label>
        <select name="business_type" id="reg_business_type">
            <option value="Bag factory">Bag factory</option>
            <option value="Leather workshop">Leather workshop</option>
            <option value="Designer">Designer</option>
            <option value="Online brand">Online brand</option>
            <option value="Wholesaler">Wholesaler</option>
            <option value="Importer">Importer</option>
        </select>
    </p>
    <?php
}
add_action('woocommerce_register_form', 'aurora_account_registration_fields');

function aurora_save_registration_fields($customer_id) {
    foreach (array('company_name', 'country', 'whatsapp_wechat', 'business_type') as $field) {
        if (isset($_POST[$field])) {
            update_user_meta($customer_id, $field, sanitize_text_field(wp_unslash($_POST[$field])));
        }
    }
}
add_action('woocommerce_created_customer', 'aurora_save_registration_fields');

function aurora_product_meta_row($label, $meta_key) {
    $value = get_post_meta(get_the_ID(), $meta_key, true);
    if (!$value) {
        return;
    }
    echo '<dt>' . esc_html($label) . '</dt><dd>' . esc_html($value) . '</dd>';
}
