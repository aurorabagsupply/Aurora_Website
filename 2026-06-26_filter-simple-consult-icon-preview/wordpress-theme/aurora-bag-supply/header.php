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
    <div><?php esc_html_e('AOLOLA | Accessories, Bag, Hardware, Leather, Tools and Zipper Supplier', 'aurora-bag-supply'); ?></div>
    <div class="top-strip__right">
      <span><?php esc_html_e('Global B2B sourcing support', 'aurora-bag-supply'); ?></span>
      <span>Tel: (86)13500014739</span><span>Email: aurorabagsupply@gmail.com</span>
      <a href="<?php echo esc_url(home_url('/contact/')); ?>">WhatsApp / WeChat / Contact Us</a>
      <a href="<?php echo esc_url(function_exists('wc_get_page_permalink') ? wc_get_page_permalink('myaccount') : home_url('/my-account/')); ?>">Account</a>
      <a href="<?php echo esc_url(function_exists('wc_get_cart_url') ? wc_get_cart_url() : home_url('/cart/')); ?>">Cart <span class="cart-dot"><?php echo function_exists('WC') && WC()->cart ? esc_html(WC()->cart->get_cart_contents_count()) : '0'; ?></span></a>
    </div>
  </div>
</div>
<header class="main-header">
  <div class="container">
    <button class="mobile-menu" data-mobile-menu aria-label="Menu">Menu</button>
    <a class="brand" href="<?php echo esc_url(home_url('/')); ?>">
      <img class="brand__mark" src="<?php echo esc_url(get_template_directory_uri() . '/assets/logo/aurora-ab-logo.jpg'); ?>" alt="AOLOLA logo" />
      <span><span class="brand__name">AOLOLA</span><span class="brand__tagline">Hardware | Leather | Custom Supply</span></span>
    </a>
    <?php get_product_search_form(); ?>
    <div class="header-actions">
      <a class="header-action" href="<?php echo esc_url(function_exists('wc_get_page_permalink') ? wc_get_page_permalink('myaccount') : home_url('/my-account/')); ?>">Account</a>
      <a class="header-action" href="<?php echo esc_url(function_exists('wc_get_page_permalink') ? wc_get_page_permalink('myaccount') : home_url('/my-account/')); ?>#wishlist">Wishlist</a>
      <a class="header-action" href="<?php echo esc_url(function_exists('wc_get_cart_url') ? wc_get_cart_url() : home_url('/cart/')); ?>">Cart <span class="cart-dot"><?php echo function_exists('WC') && WC()->cart ? esc_html(WC()->cart->get_cart_contents_count()) : '0'; ?></span></a>
    </div>
  </div>
</header>
<?php aurora_render_category_nav(); ?>


