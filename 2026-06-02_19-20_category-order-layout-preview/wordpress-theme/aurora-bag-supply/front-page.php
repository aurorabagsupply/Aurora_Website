<?php get_header(); ?>
<main>
  <section class="hero">
    <div class="container hero-slider">
      <div class="hero-copy">
        <p class="kicker">Inspired by design | Engineered with care</p>
        <h1>Beyond Design. Built to Last.</h1>
        <p>Great accessories do not just look good. They are developed to perform across Accessories, Bag, Hardware, Leather, Tools and Zipper supply.</p>
        <div class="hero-metrics" aria-label="Procurement highlights">
          <span><strong>Design</strong> inspired by detail</span>
          <span><strong>Care</strong> engineered for use</span>
          <span><strong>Real</strong> tested for orders</span>
          <span><strong>Last</strong> made to perform</span>
        </div>
        <div class="hero-actions">
          <a class="btn btn-primary" href="<?php echo esc_url(function_exists('wc_get_page_permalink') ? wc_get_page_permalink('shop') : home_url('/shop/')); ?>">Shop Products</a>
          <a class="btn btn-brass" href="<?php echo esc_url(home_url('/contact/')); ?>">Request a Quote</a>
          <a class="btn" href="<?php echo esc_url(function_exists('wc_get_page_permalink') ? wc_get_page_permalink('shop') : home_url('/shop/')); ?>">View All Categories</a>
        </div>
      </div>
      <div class="hero-media">
        <div class="quote-rail">
          <span class="quote-rail__label">Buyer checklist</span>
          <strong>Send SKU, finish, quantity and destination.</strong>
          <p>We prepare unit price, MOQ, sample option and packing suggestion for your project.</p>
        </div>
      </div>
      <div class="hero-dots"><span></span><span></span><span></span><span></span><span></span></div>
    </div>
  </section>
  <section class="trust-row">
    <div class="trust-item"><strong>Factory Supply</strong><span>Stable production and export packing</span></div>
    <div class="trust-item"><strong>Customizable Hardware</strong><span>Logo, plating, size and mold options</span></div>
    <div class="trust-item"><strong>Worldwide Shipping</strong><span>Support for importers and online brands</span></div>
  </section>
  <section class="section">
    <div class="container">
      <div class="section-head"><h2>Shop by Category</h2><p>Explore Accessories, Bag, Hardware, Leather, Tools and Zipper products.</p></div>
      <?php echo do_shortcode('[product_categories number="8" columns="4" hide_empty="0"]'); ?>
    </div>
  </section>
  <section class="procurement-strip">
    <div class="container procurement-grid">
      <div><span>01</span><strong>Select products</strong><p>Browse by category, SKU, material, finish and application.</p></div>
      <div><span>02</span><strong>Send quote details</strong><p>Share quantity, target finish, packing and shipping country.</p></div>
      <div><span>03</span><strong>Confirm sample</strong><p>Review sample, color plating and logo position before bulk order.</p></div>
      <div><span>04</span><strong>Repeat orders</strong><p>Keep SKU, packaging and QC notes for stable reorder supply.</p></div>
    </div>
  </section>
  <section class="section section-alt">
    <div class="container">
      <div class="section-head section-head--split"><div><h2>Featured Products</h2><p>Core product systems for bag factories, leather workshops and sourcing teams.</p></div><a class="btn" href="<?php echo esc_url(function_exists('wc_get_page_permalink') ? wc_get_page_permalink('shop') : home_url('/shop/')); ?>">View Full Catalog</a></div>
      <?php echo do_shortcode('[products limit="8" columns="4" visibility="featured"]'); ?>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="section-head"><h2>New Arrivals</h2><p>Recently prepared materials and components for production buyers.</p></div>
      <?php echo do_shortcode('[products limit="8" columns="4" orderby="date" order="DESC"]'); ?>
    </div>
  </section>
  <section class="section section-alt">
    <div class="container">
      <div class="section-head"><h2>Best Sellers</h2><p>High-demand items for repeat orders, wholesale projects and custom bag manufacturing.</p></div>
      <?php echo do_shortcode('[best_selling_products limit="8" columns="4"]'); ?>
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
  <section class="newsletter">
    <div class="container">
      <div><h2>Get material updates and wholesale support</h2><p>Create an account or subscribe to receive new product information, sample support and quotation follow-up.</p></div>
      <form action="<?php echo esc_url(home_url('/contact/')); ?>" method="get"><input type="email" name="email" placeholder="Your email address" required /><button>Subscribe</button></form>
    </div>
  </section>
</main>
<?php get_footer(); ?>
