<?php
add_filter('pre_get_document_title', function () {
    return 'Quality Assurance for Bag Hardware, Materials & Finishes | AOLOLA';
});

add_action('wp_head', function () {
    echo '<meta name="description" content="AOLOLA quality assurance for bag hardware, stainless steel, brass, zinc alloy, vacuum plating and production-ready B2B sourcing." />' . "\n";
    echo '<link rel="canonical" href="' . esc_url(home_url('/quality/')) . '" />' . "\n";
}, 1);

get_header();
?>
<main class="quality-page">
  <section class="quality-hero">
    <div class="container quality-hero__inner">
      <p class="kicker">Quality Assurance</p>
      <h1>Quality You Can Trust.</h1>
      <p>AOLOLA supports overseas B2B buyers with carefully selected materials, stable surface finishing options and practical quality checks for production-ready bag components.</p>
    </div>
  </section>

  <section class="quality-section quality-materials" aria-labelledby="quality-materials-title">
    <div class="container">
      <div class="quality-section__head">
        <p class="kicker">Materials & Craftsmanship</p>
        <h2 id="quality-materials-title">Built from the right material and finish.</h2>
      </div>
      <div class="quality-material-grid">
        <article class="quality-material-card">
          <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/catalog/Hardware/Hardware%20(1).jpg'); ?>" alt="Gold tone zinc alloy D ring hardware" />
          <div><h3>Zinc Alloy</h3><p>Widely used for structured buckles, rings, locks and decorative bag hardware.</p></div>
        </article>
        <article class="quality-material-card">
          <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/catalog/Hardware/Hardware%20(5).jpg'); ?>" alt="Silver tone stainless steel buckle hardware" />
          <div><h3>Stainless Steel</h3><p>Selected for clean finish, stable shape and everyday hardware applications.</p></div>
        </article>
        <article class="quality-material-card">
          <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/catalog/Hardware/Hardware%20(6).jpg'); ?>" alt="Brass tone bag buckle hardware" />
          <div><h3>Brass</h3><p>A premium metal option for solid-feel hardware and refined surface direction.</p></div>
        </article>
        <article class="quality-material-card">
          <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/custom-hardware.jpg'); ?>" alt="Custom plated bag hardware and finish reference" />
          <div><h3>Vacuum Plating</h3><p>Surface finishing support for polished color direction and production consistency.</p></div>
        </article>
      </div>
    </div>
  </section>

  <section class="quality-section quality-testing" aria-labelledby="quality-testing-title">
    <div class="container quality-testing__grid">
      <div class="quality-testing__copy">
        <p class="kicker">Quality Testing</p>
        <h2 id="quality-testing-title">Reports are matched to the real product and order.</h2>
        <p>Available material, plating or product-related quality files can be reviewed according to the confirmed product, finish and project requirement. We do not display invented standards or unsupported testing claims.</p>
        <a class="btn btn-brass" href="<?php echo esc_url(home_url('/contact/?topic=test-reports')); ?>">View Test Reports</a>
      </div>
      <div class="quality-report-preview" aria-label="Quality checking reference">
        <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/quality.jpg'); ?>" alt="Quality checking and surface condition reference" />
        <div>
          <strong>Available on request</strong>
          <span>Quality documents are shared based on the exact material, finish and confirmed sourcing project.</span>
        </div>
      </div>
    </div>
  </section>

  <section class="quality-final">
    <div class="container quality-final__inner">
      <p class="kicker">Production Confidence</p>
      <h2>Built for Quality. Made for Production.</h2>
      <p>Send your material, finish, quantity and application requirements. AOLOLA will help confirm the right product direction before quotation.</p>
      <a class="btn btn-brass" href="<?php echo esc_url(home_url('/contact/')); ?>">Request a Quote</a>
    </div>
  </section>
</main>
<?php get_footer(); ?>
