<?php
if (!defined('ABSPATH')) {
    exit;
}

require_once get_template_directory() . '/inc/image-search.php';

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
    wp_enqueue_style('aurora-commerce', get_template_directory_uri() . '/assets/css/aurora-commerce.css', array(), '1.0.96-preview');
    wp_enqueue_style('aurora-category-clean-float', get_template_directory_uri() . '/assets/css/aurora-category-clean-float.css', array('aurora-commerce'), '1.0.96-preview');
    wp_enqueue_style('aurora-mobile-v2-final', get_template_directory_uri() . '/assets/css/aurora-mobile-v2-final.css', array('aurora-category-clean-float'), '1.0.96-preview');
    wp_enqueue_script('aurora-commerce', get_template_directory_uri() . '/assets/js/aurora-commerce.js', array(), '1.0.96-preview', true);
    wp_enqueue_script('aurora-image-search', get_template_directory_uri() . '/assets/js/aurora-image-search.js', array('aurora-commerce'), '1.0.96-preview', true);
    wp_add_inline_script('aurora-commerce', 'window.AURORA_THEME_ASSET_BASE = ' . wp_json_encode(get_template_directory_uri() . '/assets') . ';', 'before');
    wp_add_inline_script('aurora-image-search', 'window.AURORA_IMAGE_SEARCH_ENDPOINT = ' . wp_json_encode(rest_url('aurora/v1/image-search')) . ';', 'before');
}
add_action('wp_enqueue_scripts', 'aurora_assets');

function aurora_product_search_form($form) {
    $shop_url = function_exists('wc_get_page_permalink') ? wc_get_page_permalink('shop') : home_url('/');
    return '<form role="search" method="get" class="site-search" action="' . esc_url($shop_url) . '"><input type="search" name="s" placeholder="Search hardware, leather, buckles, zippers, accessories..." value="' . get_search_query() . '" /><button class="image-search-trigger" type="button" data-image-search-trigger aria-label="' . esc_attr__('Search by image', 'aurora-bag-supply') . '"><span aria-hidden="true">?</span></button><button type="submit">Search</button><input type="hidden" name="post_type" value="product" /></form>';
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

function aurora_filter_section_labels() {
    return array(
        'type' => 'Product Type',
        'finish' => 'Finish / Plating',
        'material' => 'Material',
        'size' => 'Size & Fit',
        'application' => 'Application',
        'supply' => 'MOQ & Supply',
        'custom' => 'Customization',
    );
}

function aurora_filter_option_labels() {
    return array(
        'buckles' => 'Buckles & strap adjusters',
        'locks' => 'Locks, clasps & closures',
        'rings' => 'D-rings, O-rings & loops',
        'chains' => 'Chains, hooks & connectors',
        'logoPlates' => 'Logo plates & metal labels',
        'alloy' => 'Zinc alloy',
        'brass' => 'Solid brass',
        'steel' => 'Stainless steel / iron',
        'leatherMaterial' => 'Genuine leather / PU',
        'nylon' => 'Nylon / resin zipper',
        'lightGold' => 'Light gold',
        'nickel' => 'Nickel / silver',
        'gunmetal' => 'Gunmetal',
        'matteBlack' => 'Matte black',
        'antiqueBrass' => 'Antique brass',
        'customPlating' => 'Custom plating',
        'customFinish' => 'Custom finish',
        'smallHardware' => 'Small hardware under 20mm',
        'mediumHardware' => '20-40mm strap hardware',
        'wideStrap' => 'Wide strap / handle fit',
        'customSize' => 'Custom size or mold',
        'handbag' => 'Handbags & Purses',
        'luggage' => 'Luggage & Travel Bags',
        'belt' => 'Belts & leather goods',
        'repair' => 'Repair, craft & workshop',
        'custom' => 'Logo Customization',
        'oem' => 'OEM / ODM Development',
        'sample' => 'Sample Available',
        'repeat' => 'Repeat order SKUs',
        'packaging' => 'Export Packaging Support',
        'under500' => 'Low MOQ under 500 pcs',
        'between500' => '500-1000 pcs wholesale',
        'toteBags' => 'Tote Bags',
        'shoulderBags' => 'Shoulder Bags',
        'crossbodyBags' => 'Crossbody Bags',
        'sampleBags' => 'Sample-Ready Bag Styles',
        'leatherBags' => 'Leather / PU Bags',
        'logoReadyBags' => 'Logo-Ready Bag Design',
        'leatherSheets' => 'Leather sheets & straps',
        'leatherStraps' => 'Leather straps',
        'microfiberLeather' => 'Microfiber leather',
        'puLeather' => 'PU leather',
        'grainTexture' => 'Pebbled / grain texture',
        'smoothFinish' => 'Smooth finish',
        'thicknessOptions' => 'Thickness options',
        'rollWidthOptions' => 'Roll width options',
        'zipperCoil' => 'Nylon coil zippers',
        'zipperMetal' => 'Metal zippers',
        'zipperSliderPuller' => 'Zipper sliders & pullers',
        'zipperTape' => 'Custom zipper tape',
        'zipperRolls' => 'Zipper rolls by yard',
        'apparelAccessories' => 'Apparel accessories',
        'bagCharmsTags' => 'Bag charms & tags',
        'bagStraps' => 'Bag straps',
        'decorativeTrims' => 'Decorative trims',
        'packagingAccessories' => 'Packaging accessories',
        'replacementParts' => 'Replacement parts',
        'punchingTools' => 'Punching tools',
        'cuttingTools' => 'Cutting tools',
        'rivetSetters' => 'Rivet / snap setters',
        'measuringTools' => 'Measuring tools',
        'handTools' => 'Hand tools',
    );
}

function aurora_filter_sections_by_category() {
    return array(
        'bag' => array(
            array('type', array(array('type', 'toteBags', 'bag-body'), array('type', 'shoulderBags', 'bag-body'), array('type', 'crossbodyBags', 'bag-body'), array('type', 'sampleBags', 'bag-body'), array('type', 'leatherBags', 'bag-body'), array('type', 'logoReadyBags', 'bag-body'))),
            array('material', array(array('material', 'leatherMaterial', 'leather'), array('material', 'microfiberLeather', 'leather'), array('material', 'puLeather', 'leather'))),
            array('size', array(array('scale', 'wideStrap', 'wide-strap'), array('scale', 'customSize', 'custom'))),
            array('application', array(array('application', 'handbag', 'handbag'), array('application', 'luggage', 'luggage'))),
            array('custom', array(array('quick', 'custom', 'custom'), array('customization', 'oem', 'oem'), array('customization', 'packaging', 'packaging'), array('quick', 'sample', 'sample'))),
        ),
        'hardware' => array(
            array('type', array(array('type', 'buckles', 'buckles'), array('type', 'locks', 'locks'), array('type', 'rings', 'rings'), array('type', 'chains', 'chains'), array('type', 'logoPlates', 'rings'))),
            array('finish', array(array('color', 'lightGold', 'gold'), array('color', 'nickel', 'nickel'), array('color', 'gunmetal', 'gunmetal'), array('color', 'matteBlack', 'black'), array('finish', 'antiqueBrass', 'antique'), array('finish', 'customPlating', 'custom'))),
            array('material', array(array('material', 'alloy', 'alloy'), array('material', 'brass', 'brass'), array('material', 'steel', 'steel'))),
            array('size', array(array('scale', 'smallHardware', 'small'), array('scale', 'mediumHardware', 'medium'), array('scale', 'wideStrap', 'wide-strap'), array('scale', 'customSize', 'custom'))),
            array('application', array(array('application', 'handbag', 'handbag'), array('application', 'luggage', 'luggage'), array('application', 'belt', 'belt'))),
            array('custom', array(array('quick', 'custom', 'custom'), array('customization', 'oem', 'oem'), array('quick', 'sample', 'sample'), array('quick', 'repeat', 'repeat'))),
        ),
        'leather' => array(
            array('type', array(array('type', 'leatherSheets', 'leather-sheets'), array('type', 'leatherStraps', 'leather-sheets'), array('material', 'microfiberLeather', 'leather'), array('material', 'puLeather', 'leather'))),
            array('material', array(array('material', 'leatherMaterial', 'leather'), array('material', 'microfiberLeather', 'leather'), array('material', 'puLeather', 'leather'))),
            array('finish', array(array('finish', 'grainTexture', 'custom'), array('finish', 'smoothFinish', 'custom'), array('finish', 'customFinish', 'custom'))),
            array('size', array(array('scale', 'thicknessOptions', 'custom'), array('scale', 'rollWidthOptions', 'custom'), array('scale', 'customSize', 'custom'))),
            array('application', array(array('application', 'handbag', 'handbag'), array('application', 'belt', 'belt'), array('application', 'repair', 'repair'))),
            array('supply', array(array('moq', 'under500', 'under500'), array('moq', 'between500', '500to1000'), array('quick', 'sample', 'sample'))),
        ),
        'zipper' => array(
            array('type', array(array('type', 'zipperCoil', 'zipper-pulls'), array('type', 'zipperMetal', 'zipper-pulls'), array('type', 'zipperSliderPuller', 'zipper-pulls'), array('type', 'zipperTape', 'zipper-pulls'), array('type', 'zipperRolls', 'zipper-pulls'))),
            array('material', array(array('material', 'nylon', 'nylon'), array('material', 'alloy', 'alloy'), array('material', 'steel', 'steel'))),
            array('finish', array(array('color', 'lightGold', 'gold'), array('color', 'nickel', 'nickel'), array('color', 'gunmetal', 'gunmetal'), array('color', 'matteBlack', 'black'), array('finish', 'customPlating', 'custom'))),
            array('application', array(array('application', 'handbag', 'handbag'), array('application', 'luggage', 'luggage'), array('application', 'apparelAccessories', 'apparel'))),
            array('custom', array(array('quick', 'custom', 'custom'), array('customization', 'oem', 'oem'), array('quick', 'sample', 'sample'), array('quick', 'repeat', 'repeat'))),
        ),
        'accessories' => array(
            array('type', array(array('type', 'bagCharmsTags', 'chains'), array('type', 'bagStraps', 'chains'), array('type', 'decorativeTrims', 'rings'), array('type', 'packagingAccessories', 'bag-body'), array('type', 'replacementParts', 'repair'))),
            array('material', array(array('material', 'alloy', 'alloy'), array('material', 'brass', 'brass'), array('material', 'leatherMaterial', 'leather'), array('material', 'nylon', 'nylon'))),
            array('finish', array(array('color', 'lightGold', 'gold'), array('color', 'nickel', 'nickel'), array('color', 'matteBlack', 'black'), array('finish', 'customPlating', 'custom'))),
            array('application', array(array('application', 'handbag', 'handbag'), array('application', 'belt', 'belt'), array('application', 'repair', 'repair'))),
            array('custom', array(array('quick', 'custom', 'custom'), array('customization', 'oem', 'oem'), array('customization', 'packaging', 'packaging'))),
        ),
        'tools' => array(
            array('type', array(array('type', 'punchingTools', 'repair'), array('type', 'cuttingTools', 'repair'), array('type', 'rivetSetters', 'repair'), array('type', 'measuringTools', 'repair'), array('type', 'handTools', 'repair'))),
            array('material', array(array('material', 'steel', 'steel'), array('material', 'brass', 'brass'))),
            array('application', array(array('application', 'repair', 'repair'), array('application', 'belt', 'belt'), array('application', 'handbag', 'handbag'))),
            array('supply', array(array('moq', 'under500', 'under500'), array('quick', 'sample', 'sample'), array('quick', 'repeat', 'repeat'))),
        ),
    );
}

function aurora_mega_menu_items() {
    return array(
        'bag' => array('label' => 'Bags', 'url' => home_url('/product-category/bag/'), 'cta' => array('text' => 'Developing a new bag project?', 'button' => 'Request a Quote', 'url' => home_url('/contact/'))),
        'hardware' => array('label' => 'Hardware', 'url' => home_url('/product-category/hardware/'), 'cta' => array('text' => 'Need custom bag hardware?', 'button' => 'Request a Quote', 'url' => home_url('/contact/'))),
        'leather' => array('label' => 'Leather', 'url' => home_url('/product-category/leather/'), 'cta' => array('text' => 'Need leather materials for production?', 'button' => 'Contact Us', 'url' => home_url('/contact/'))),
        'zipper' => array('label' => 'Zippers', 'url' => home_url('/product-category/zipper/'), 'cta' => array('text' => 'Need custom zippers?', 'button' => 'Request a Quote', 'url' => home_url('/contact/'))),
        'accessories' => array('label' => 'Accessories', 'url' => home_url('/product-category/accessories/'), 'cta' => array('text' => 'Looking for matching bag accessories?', 'button' => 'Send Inquiry', 'url' => home_url('/contact/'))),
        'tools' => array('label' => 'Tools', 'url' => home_url('/product-category/tools/'), 'cta' => array('text' => 'Need tools for leather or bag production?', 'button' => 'Contact Us', 'url' => home_url('/contact/'))),
    );
}

function aurora_filter_param_name($filter_group) {
    $map = array(
        'type' => 'product_type',
        'color' => 'finish',
        'finish' => 'finish',
        'material' => 'material',
        'scale' => 'size_fit',
        'application' => 'application',
        'quick' => 'custom_service',
        'customization' => 'custom_service',
        'moq' => 'supply',
    );
    return isset($map[$filter_group]) ? $map[$filter_group] : $filter_group;
}

function aurora_filter_link($base_url, $filter_group, $value) {
    return add_query_arg(aurora_filter_param_name($filter_group), rawurlencode($value), $base_url);
}

function aurora_render_category_nav() {
    echo '<nav class="category-nav"><div class="container aurora-mega-menu__nav">';
    echo '<a class="aurora-mega-menu__simple" href="' . esc_url(home_url('/')) . '">Home</a>';
    foreach (aurora_mega_menu_items() as $key => $menu) {
        echo '<div class="aurora-mega-menu" data-mega-key="' . esc_attr($key) . '">';
        echo '<a class="aurora-mega-menu__top" href="' . esc_url($menu['url']) . '">' . esc_html($menu['label']) . '</a>';
        echo '<button class="aurora-mega-menu__toggle" type="button" aria-expanded="false" aria-label="' . esc_attr(sprintf('Open %s menu', $menu['label'])) . '"></button>';
        echo '<div class="aurora-mega-menu__panel">';
        echo '<div class="aurora-mega-menu__grid">';
        $section_labels = aurora_filter_section_labels();
        $option_labels = aurora_filter_option_labels();
        $filter_sections = aurora_filter_sections_by_category();
        foreach ($filter_sections[$key] as $section) {
            list($heading_key, $links) = $section;
            echo '<section class="aurora-mega-menu__column">';
            echo '<h3>' . esc_html(isset($section_labels[$heading_key]) ? $section_labels[$heading_key] : $heading_key) . '</h3>';
            foreach ($links as $item) {
                list($filter_group, $label_key, $value) = $item;
                $link_label = isset($option_labels[$label_key]) ? $option_labels[$label_key] : $label_key;
                echo '<a class="aurora-mega-menu__link" href="' . esc_url(aurora_filter_link($menu['url'], $filter_group, $value)) . '">' . esc_html($link_label) . '</a>';
            }
            echo '</section>';
        }
        echo '</div>';
        echo '<div class="aurora-mega-menu__cta"><span>' . esc_html($menu['cta']['text']) . '</span><a class="btn btn-brass" href="' . esc_url($menu['cta']['url']) . '">' . esc_html($menu['cta']['button']) . '</a></div>';
        echo '</div></div>';
    }
    echo '<a class="aurora-mega-menu__simple" href="' . esc_url(home_url('/contact/')) . '">Contact Us</a>';
    echo '<a class="aurora-mega-menu__simple" href="' . esc_url(home_url('/about/')) . '">About Us</a>';
    echo '</div></nav>';
}

function aurora_current_filter_value($param) {
    if (!isset($_GET[$param])) {
        return '';
    }
    return sanitize_text_field(wp_unslash($_GET[$param]));
}

function aurora_render_filter_sidebar($category_key = '') {
    $section_labels = aurora_filter_section_labels();
    $option_labels = aurora_filter_option_labels();
    $filter_sections = aurora_filter_sections_by_category();
    $category_key = $category_key && isset($filter_sections[$category_key]) ? $category_key : 'hardware';
    foreach ($filter_sections[$category_key] as $section) {
        list($heading_key, $options) = $section;
        echo '<div class="filter-group"><strong>' . esc_html(isset($section_labels[$heading_key]) ? $section_labels[$heading_key] : $heading_key) . '</strong>';
        foreach ($options as $item) {
            list($filter_group, $label_key, $value) = $item;
            $param = aurora_filter_param_name($filter_group);
            $checked = aurora_current_filter_value($param) === $value;
            echo '<label class="aurora-filter-option' . ($checked ? ' is-selected' : '') . '"><input type="checkbox" disabled ' . checked($checked, true, false) . ' /><span class="aurora-filter-label">' . esc_html(isset($option_labels[$label_key]) ? $option_labels[$label_key] : $label_key) . '</span></label>';
        }
        echo '</div>';
    }
}

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
