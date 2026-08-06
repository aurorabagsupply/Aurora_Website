<?php if (!defined('ABSPATH')) { exit; } ?>
<footer class="site-footer">
  <div class="container footer-grid">
    <div><h3>Aurora Bag Supply</h3><p>Professional supplier of bag hardware, leather materials and custom accessories.</p></div>
    <div><h3>Products</h3><?php wp_nav_menu(array('theme_location' => 'footer_products', 'container' => false, 'fallback_cb' => false)); ?></div>
    <div><h3>Support</h3><?php wp_nav_menu(array('theme_location' => 'footer_support', 'container' => false, 'fallback_cb' => false)); ?><a href="<?php echo esc_url(home_url('/contact/')); ?>">Request a Quote</a><a href="<?php echo esc_url(function_exists('wc_get_page_permalink') ? wc_get_page_permalink('myaccount') : home_url('/my-account/')); ?>">Order Status</a></div>
    <div><h3>Company</h3><?php wp_nav_menu(array('theme_location' => 'footer_company', 'container' => false, 'fallback_cb' => false)); ?><a href="<?php echo esc_url(home_url('/about/')); ?>">About Us</a><a href="<?php echo esc_url(home_url('/privacy-policy/')); ?>">Privacy Policy</a><a href="<?php echo esc_url(home_url('/terms-of-service/')); ?>">Terms of Service</a></div>
  </div>
  <div class="container copyright">Aurora Bag Supply. All rights reserved.</div>
</footer>
<a class="floating-contact" href="<?php echo esc_url(home_url('/contact/')); ?>">Chat</a>
<?php wp_footer(); ?>
</body>
</html>
