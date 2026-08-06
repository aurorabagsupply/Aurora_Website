<?php if (!defined('ABSPATH')) { exit; } ?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div class="top-strip">
  <div class="container">
    <div><?php esc_html_e('Aurora Bag Supply | Accessories, Bag, Hardware, Leather, Tools and Zipper Supplier', 'aurora-bag-supply'); ?></div>
    <div class="top-strip__right">
      <span><?php esc_html_e('Global B2B sourcing support', 'aurora-bag-supply'); ?></span>
      <span>Email: sales@aurorabagsupply.com</span>
      <a href="<?php echo esc_url(home_url('/contact/')); ?>">WhatsApp / WeChat / Contact Us</a>
      <a href="<?php echo esc_url(function_exists('wc_get_page_permalink') ? wc_get_page_permalink('myaccount') : home_url('/my-account/')); ?>">Sign in / Register</a>
      <a href="<?php echo esc_url(function_exists('wc_get_cart_url') ? wc_get_cart_url() : home_url('/cart/')); ?>">Cart <span class="cart-dot"><?php echo function_exists('WC') && WC()->cart ? esc_html(WC()->cart->get_cart_contents_count()) : '0'; ?></span></a>
    </div>
  </div>
</div>
<header class="main-header">
  <div class="container">
    <button class="mobile-menu" data-mobile-menu aria-label="Menu">Menu</button>
    <a class="brand" href="<?php echo esc_url(home_url('/')); ?>">
      <span class="brand__mark">A</span>
      <span><span class="brand__name">Aurora Bag Supply</span><span class="brand__tagline">Hardware | Leather | Custom Supply</span></span>
    </a>
    <?php get_product_search_form(); ?>
    <div class="header-actions">
      <a class="header-action" href="<?php echo esc_url(function_exists('wc_get_page_permalink') ? wc_get_page_permalink('myaccount') : home_url('/my-account/')); ?>">Account</a>
      <a class="header-action" href="<?php echo esc_url(function_exists('wc_get_page_permalink') ? wc_get_page_permalink('myaccount') : home_url('/my-account/')); ?>#wishlist">Wishlist</a>
      <a class="header-action" href="<?php echo esc_url(function_exists('wc_get_cart_url') ? wc_get_cart_url() : home_url('/cart/')); ?>">Cart <span class="cart-dot"><?php echo function_exists('WC') && WC()->cart ? esc_html(WC()->cart->get_cart_contents_count()) : '0'; ?></span></a>
    </div>
  </div>
</header>
<nav class="category-nav">
  <div class="container">
    <?php
    wp_nav_menu(array(
        'theme_location' => 'category',
        'container' => false,
        'items_wrap' => '%3$s',
        'fallback_cb' => function() {
            $links = array(
                'Home' => home_url('/'),
                'Bag' => home_url('/product-category/bag/'),
                'Hardware' => home_url('/product-category/hardware/'),
                'Leather' => home_url('/product-category/leather/'),
                'Zipper' => home_url('/product-category/zipper/'),
                'Accessories' => home_url('/product-category/accessories/'),
                'Tools' => home_url('/product-category/tools/'),
                'Contact Us' => home_url('/contact/'),
                'About Us' => home_url('/about/'),
            );
            foreach ($links as $label => $url) {
                echo '<a href="' . esc_url($url) . '">' . esc_html($label) . '</a>';
            }
        },
    ));
    ?>
  </div>
</nav>
