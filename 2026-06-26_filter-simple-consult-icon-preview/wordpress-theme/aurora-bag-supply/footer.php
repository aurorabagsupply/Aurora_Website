<?php if (!defined('ABSPATH')) { exit; } ?>
<footer class="site-footer">
  <div class="container footer-grid">
    <div class="footer-contact">
      <h3>Contact</h3>
      <div class="footer-contact__item"><span class="footer-contact__icon footer-contact__icon--pin" aria-hidden="true"></span><p><strong>Room 318, Building A</strong><span>No.4 Helong 3rd Road, Baiyun District, Guangzhou</span></p></div>
      <div class="footer-contact__item"><span class="footer-contact__icon footer-contact__icon--phone" aria-hidden="true"></span><p><strong>Phone</strong><a href="tel:+8613500014739">(86)13500014739</a></p></div>
      <div class="footer-contact__item"><span class="footer-contact__icon footer-contact__icon--mail" aria-hidden="true"></span><p><strong>Email</strong><a href="mailto:aurorabagsupply@gmail.com">aurorabagsupply@gmail.com</a></p></div>
      <div class="footer-contact__item"><span class="footer-contact__icon footer-contact__icon--clock" aria-hidden="true"></span><p><strong>Business Hours</strong><span>Mon - Fri: 9:00 - 18:00</span><span>Sample and quotation support</span></p></div>
    </div>
    <div><h3>Products</h3><?php wp_nav_menu(array('theme_location' => 'footer_products', 'container' => false, 'fallback_cb' => false)); ?></div>
    <div><h3>Support</h3><?php wp_nav_menu(array('theme_location' => 'footer_support', 'container' => false, 'fallback_cb' => false)); ?><a href="<?php echo esc_url(home_url('/contact/')); ?>">Contact Us</a><a href="<?php echo esc_url(home_url('/shipping/')); ?>">Shipping</a><a href="<?php echo esc_url(home_url('/returns/')); ?>">Returns</a><a href="<?php echo esc_url(home_url('/faq/')); ?>">FAQ</a><a data-footer-action="quote" href="<?php echo esc_url(home_url('/contact/')); ?>">Request a Quote</a><a href="<?php echo esc_url(function_exists('wc_get_page_permalink') ? wc_get_page_permalink('myaccount') : home_url('/my-account/')); ?>">Order Status</a></div>
    <div><h3>Company</h3><?php wp_nav_menu(array('theme_location' => 'footer_company', 'container' => false, 'fallback_cb' => false)); ?><a href="<?php echo esc_url(home_url('/about/')); ?>">About Us</a><a href="<?php echo esc_url(home_url('/quality/')); ?>">Quality</a><a href="<?php echo esc_url(function_exists('wc_get_page_permalink') ? wc_get_page_permalink('shop') : home_url('/shop/')); ?>">All Products</a><a href="<?php echo esc_url(home_url('/blog/')); ?>">Blog</a><a href="<?php echo esc_url(home_url('/privacy-policy/')); ?>">Privacy Policy</a><a href="<?php echo esc_url(home_url('/terms-of-service/')); ?>">Terms of Service</a></div>
    <div class="footer-side"><div class="footer-callout"><strong>B2B Supply Partner</strong><span>Factory sourcing support for bags, hardware, leather, zippers, accessories and tools.</span></div><div class="footer-social" aria-label="AOLOLA social media"><a href="https://www.instagram.com/aurorabagsupply/" target="_blank" rel="noopener" aria-label="Instagram">Instagram</a><a href="https://www.facebook.com/aurorabagsupply" target="_blank" rel="noopener" aria-label="Facebook">Facebook</a><a href="https://www.pinterest.com/aurorabagsupply/" target="_blank" rel="noopener" aria-label="Pinterest">Pinterest</a><a href="https://www.youtube.com/@aurorabagsupply" target="_blank" rel="noopener" aria-label="YouTube">YouTube</a></div></div>
  </div>
  <div class="container footer-bottom"><div class="aurora-footer-payments" aria-label="Payment methods"><strong data-payment-title>Payment Methods</strong><div class="aurora-footer-payments__badges"><span>PayPal</span><span>VISA</span></div><p data-payment-note>Available payment options depend on the final quotation and order confirmation.</p></div><div class="copyright"><span>&copy; 2026 AOLOLA.</span><span class="footer-meta"><a href="<?php echo esc_url(home_url('/terms-of-service/')); ?>">Terms of Service</a><span aria-hidden="true">—</span><a href="<?php echo esc_url(home_url('/privacy-policy/')); ?>">Privacy Policy</a></span></div></div>
</footer>
<a class="aurora-whatsapp-button" href="https://wa.me/8613500014739?text=Hello%20AOLOLA%2C%20I%E2%80%99m%20interested%20in%20your%20bag%20hardware%20%2F%20leather%20%2F%20zipper%20products.%20I%20would%20like%20to%20ask%20for%20more%20details." target="_blank" rel="noopener" aria-label="Chat with AOLOLA on WhatsApp" title="Chat with us on WhatsApp"><span class="aurora-whatsapp-button__icon" aria-hidden="true">W</span><span class="aurora-whatsapp-button__text"><strong data-whatsapp-label>Chat on WhatsApp</strong><span data-whatsapp-tip>Need help?</span></span></a>
<?php wp_footer(); ?>
</body>
</html>


