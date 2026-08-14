<?php get_header(); ?>
<main>
  <section class="hero hero-cover" data-hero-carousel data-hero-base="<?php echo esc_url(get_template_directory_uri() . '/assets/hero'); ?>" data-products-url="<?php echo esc_url(aurora_wc_page_url('shop', '/shop/')); ?>" data-contact-url="<?php echo esc_url(home_url('/contact/')); ?>">
    <div class="hero-cover__viewport">
      <div class="hero-cover__track" data-hero-track></div>
      <button class="hero-cover__arrow hero-cover__arrow--prev" type="button" data-hero-prev aria-label="Previous slide">‹</button>
      <button class="hero-cover__arrow hero-cover__arrow--next" type="button" data-hero-next aria-label="Next slide">›</button>
      <div class="hero-cover__dots" data-hero-dots></div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="section-head"><h2>Shop by Category</h2><p>Quickly find the hardware, leather material and accessory category you need.</p></div>
      <div class="category-grid" data-category-grid></div>
    </div>
  </section>
  <section class="section section-alt">
    <div class="container">
      <div class="section-head section-head--split"><div><h2>Featured Products</h2><p>Core product systems for bag factories, leather workshops and sourcing teams.</p></div><a class="btn" href="<?php echo esc_url(aurora_wc_page_url('shop', '/shop/')); ?>">View Full Catalog</a></div>
      <div class="product-grid" data-products="featured"></div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="section-head"><h2>New Arrivals</h2><p>Recently prepared materials and components for production buyers.</p></div>
      <div class="product-grid" data-products="new"></div>
    </div>
  </section>
  <section class="section section-alt">
    <div class="container">
      <div class="section-head"><h2>Best Sellers</h2><p>High-demand items for repeat orders, wholesale projects and custom bag manufacturing.</p></div>
      <div class="product-grid" data-products="best"></div>
    </div>
  </section>
  <section class="trust-row">
    <div class="trust-item"><strong>Factory Supply</strong><span>Stable production and export packing</span></div>
    <div class="trust-item"><strong>Customizable Hardware</strong><span>Logo, plating, size and mold options</span></div>
    <div class="trust-item"><strong>Worldwide Shipping</strong><span>Support for importers and online brands</span></div>
  </section>
  <section class="procurement-strip">
    <div class="container procurement-grid">
      <div><span>01</span><strong>Select products</strong><p>Browse by category, SKU, material, finish and application.</p></div>
      <div><span>02</span><strong>Send quote details</strong><p>Share quantity, target finish, packing and shipping country.</p></div>
      <div><span>03</span><strong>Confirm sample</strong><p>Review sample, color plating and logo position before bulk order.</p></div>
      <div><span>04</span><strong>Repeat orders</strong><p>Keep SKU, packaging and QC notes for stable reorder supply.</p></div>
    </div>
  </section>
  <section class="section">
    <div class="container split-grid">
      <div class="service-card">
        <p class="kicker">Six category supply</p>
        <h2>Accessories, bags, hardware, leather, tools and zipper products</h2>
        <p>Send product reference, quantity, color, size and destination. We help prepare quotation details, sample options, packaging notes and reorder standards.</p>
        <ul class="check-list"><li>Product photo and SKU matching</li><li>Color, material and size confirmation</li><li>Sample and production quotation</li><li>Packaging and repeat order support</li></ul>
      </div>
      <div class="service-card image"></div>
    </div>
  </section>
  <section class="footer-help">
    <div class="container">
      <div class="footer-help__head">
        <span></span>
        <p class="footer-help__eyebrow">How can we help you</p>
        <span></span>
        <h2>With projects or production?</h2>
      </div>
      <div class="footer-help__grid">
        <article data-footer-help="standards"><div class="footer-help__icon">QS</div><h3>Production Standards</h3><p>We support stable product matching, sample checking and repeat-order quality notes.</p><a href="<?php echo esc_url(home_url('/about/')); ?>">Learn More</a></article>
        <article data-footer-help="care"><div class="footer-help__icon">RFQ</div><h3>Sourcing Support</h3><p>Send SKU, quantity, finish and destination. Our team will prepare quotation details.</p><a href="<?php echo esc_url(home_url('/contact/')); ?>">Request a Quote</a></article>
        <article data-footer-help="shipping"><div class="footer-help__icon">AIR</div><h3>Global Shipping</h3><p>Export packing and shipping coordination for importers, factories and online brands.</p><a href="<?php echo esc_url(home_url('/contact/')); ?>">Contact Us</a></article>
      </div>
    </div>
  </section>
  <section class="newsletter">
    <div class="container">
      <div><h2>Get material updates and wholesale support</h2><p>Create an account or subscribe to receive new product information, sample support and quotation follow-up.</p></div>
      <form action="<?php echo esc_url(home_url('/contact/')); ?>" method="get"><input type="email" name="email" placeholder="Your email address" required /><button>Subscribe</button></form>
    </div>
  </section>
</main>
<?php get_footer(); ?>

