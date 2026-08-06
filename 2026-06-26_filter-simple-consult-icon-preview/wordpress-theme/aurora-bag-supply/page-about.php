<?php
add_filter('pre_get_document_title', function () {
    return 'Production Standards & Bag Component Supplier Capabilities | Aurora Bag Supply';
});

add_action('wp_head', function () {
    echo '<meta name="description" content="Learn about Aurora Bag Supply&#039;s quality control, material sourcing, custom order process and B2B supplier capabilities for bag hardware, leather, zippers and accessories." />' . "\n";
}, 1);

get_header();
?>
<main class="aurora-about">
  <section class="aurora-standards-hero">
    <div class="container aurora-standards-hero__grid">
      <div class="aurora-standards-hero__copy">
        <p class="kicker">B2B Supply Standards</p>
        <h1>Production Standards & Supplier Capabilities</h1>
        <p class="aurora-standards-hero__subtitle">Reliable bag hardware, leather materials, zippers and custom components for brands, factories and importers.</p>
        <p>Aurora Bag Supply supports bag manufacturers, leather workshops, designers, wholesalers and importers with carefully selected materials, stable quality control and flexible sourcing solutions. From sample development to bulk order coordination, we help customers prepare the right components for bags, leather goods and accessories.</p>
        <div class="hero-actions"><a class="btn btn-brass" href="<?php echo esc_url(home_url('/contact/')); ?>">Request a Quote</a><a class="btn" href="<?php echo esc_url(home_url('/contact/')); ?>">Contact Us</a></div>
      </div>
      <aside class="aurora-standards-hero__media" aria-label="Factory and quality control reference image">
        <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/quality.jpg'); ?>" alt="Bag hardware quality control and material checking" />
        <div class="aurora-standards-hero__note"><strong>Supplier capability</strong><span>Material review, sample coordination, packing checks and export support.</span></div>
      </aside>
    </div>
  </section>

  <section class="aurora-standards-section">
    <div class="container">
      <div class="aurora-standards-head">
        <p class="kicker">Inspection Workflow</p>
        <h2>Testing & Quality Control</h2>
        <p>We focus on practical quality control for bag components and leather goods supplies, including material checking, finish inspection, size confirmation, color matching and packaging review before shipment. For custom orders, samples can be confirmed before bulk production to reduce mistakes and improve consistency.</p>
      </div>
      <div class="aurora-standards-grid aurora-standards-grid--four">
        <article class="aurora-standards-card"><span class="aurora-standards-icon aurora-standards-icon--check" aria-hidden="true"></span><h3>Material Checking</h3><p>Hardware finish, leather texture, zipper tape, thread and accessory materials are checked before order preparation.</p></article>
        <article class="aurora-standards-card"><span class="aurora-standards-icon aurora-standards-icon--measure" aria-hidden="true"></span><h3>Size & Specification Review</h3><p>Dimensions, colors, thickness, plating options and custom requirements are confirmed based on customer needs.</p></article>
        <article class="aurora-standards-card"><span class="aurora-standards-icon aurora-standards-icon--sample" aria-hidden="true"></span><h3>Sample Confirmation</h3><p>Samples can be prepared for custom hardware, leather goods components or special sourcing requests before bulk order.</p></article>
        <article class="aurora-standards-card"><span class="aurora-standards-icon aurora-standards-icon--pack" aria-hidden="true"></span><h3>Packing Inspection</h3><p>Products are reviewed and packed carefully to reduce scratches, deformation and shipping damage.</p></article>
      </div>
    </div>
  </section>

  <section class="aurora-standards-section aurora-standards-section--warm">
    <div class="container">
      <div class="aurora-standards-head">
        <p class="kicker">Product Range</p>
        <h2>Materials We Supply</h2>
        <p>Our catalog is organized around the materials and components that bag factories, leather goods brands and importers need for development and repeat purchasing.</p>
      </div>
      <div class="aurora-standards-grid aurora-standards-grid--three">
        <article class="aurora-standards-card"><span class="aurora-standards-icon aurora-standards-icon--hardware" aria-hidden="true"></span><h3>Bag Hardware</h3><p>Buckles, locks, clasps, rings, chains, hooks and metal accessories for bags and leather goods.</p></article>
        <article class="aurora-standards-card"><span class="aurora-standards-icon aurora-standards-icon--leather" aria-hidden="true"></span><h3>Leather Materials</h3><p>Leather sheets, leather panels and selected materials for bag production and leather workshops.</p></article>
        <article class="aurora-standards-card"><span class="aurora-standards-icon aurora-standards-icon--zipper" aria-hidden="true"></span><h3>Zippers</h3><p>Metal zippers, nylon zippers, sliders, pullers and zipper accessories for bags and cases.</p></article>
        <article class="aurora-standards-card"><span class="aurora-standards-icon aurora-standards-icon--component" aria-hidden="true"></span><h3>Bag Components</h3><p>Handles, straps, decorative parts, reinforcement parts and custom bag accessories.</p></article>
        <article class="aurora-standards-card"><span class="aurora-standards-icon aurora-standards-icon--tool" aria-hidden="true"></span><h3>Tools & Supplies</h3><p>Tools and small supplies for leather craft, bag making and sample development.</p></article>
        <article class="aurora-standards-card"><span class="aurora-standards-icon aurora-standards-icon--source" aria-hidden="true"></span><h3>Custom Sourcing</h3><p>Support for special materials, colors, finishes and component matching based on project needs.</p></article>
      </div>
    </div>
  </section>

  <section class="aurora-standards-section">
    <div class="container">
      <div class="aurora-standards-head">
        <p class="kicker">Project Coordination</p>
        <h2>Custom Order Process</h2>
      </div>
      <div class="aurora-standards-process">
        <article><span>Step 1</span><h3>Send Requirements</h3><p>Customer sends product type, quantity, size, color, material, finish and reference photos.</p></article>
        <article><span>Step 2</span><h3>Confirm Details</h3><p>We review specifications, MOQ, available options, sample needs and estimated lead time.</p></article>
        <article><span>Step 3</span><h3>Sample or Quotation</h3><p>We provide quotation, product suggestions, or sample arrangement when needed.</p></article>
        <article><span>Step 4</span><h3>Production & Inspection</h3><p>Orders are prepared with quality checking, packaging review and production coordination.</p></article>
        <article><span>Step 5</span><h3>Shipping Support</h3><p>We support export packing, shipping documents and delivery coordination for international customers.</p></article>
      </div>
    </div>
  </section>

  <section class="aurora-standards-section aurora-standards-section--warm">
    <div class="container aurora-standards-split">
      <div class="aurora-standards-panel">
        <p class="kicker">Responsible Communication</p>
        <h2>Compliance & Responsible Sourcing</h2>
        <p>We understand that international customers may have requirements for material safety, restricted substances, plating quality, color consistency and responsible sourcing. For specific projects, customers may request available test reports, material information or third-party testing support before order confirmation.</p>
      </div>
      <div class="aurora-standards-grid aurora-standards-grid--stack">
        <article class="aurora-standards-card"><h3>Material Information</h3><p>We can help confirm material type, finish, thickness, color and production details based on supplier information.</p></article>
        <article class="aurora-standards-card"><h3>Testing Support</h3><p>For projects with special compliance requirements, third-party testing can be discussed before bulk order.</p></article>
        <article class="aurora-standards-card"><h3>Clear Communication</h3><p>Product limitations, MOQ, lead time and customization details are confirmed clearly before production.</p></article>
      </div>
    </div>
  </section>

  <section class="aurora-standards-section">
    <div class="container">
      <div class="aurora-standards-head"><p class="kicker">Customer Types</p><h2>Who We Serve</h2></div>
      <div class="aurora-standards-grid aurora-standards-grid--serve">
        <article class="aurora-standards-card"><h3>Bag Factories</h3><p>Component sourcing and repeat order support for handbag, luggage and leather goods production.</p></article>
        <article class="aurora-standards-card"><h3>Leather Workshops</h3><p>Leather materials, tools and small accessories for sampling, repair and custom craft work.</p></article>
        <article class="aurora-standards-card"><h3>Designers & Startups</h3><p>Guidance on materials, MOQ and sample preparation for new bag and accessory concepts.</p></article>
        <article class="aurora-standards-card"><h3>Online Brands</h3><p>Stable sourcing options for product launches, seasonal updates and branded packaging needs.</p></article>
        <article class="aurora-standards-card"><h3>Wholesalers</h3><p>Mixed-category purchasing support for hardware, zippers, leather and accessory inventory.</p></article>
        <article class="aurora-standards-card"><h3>Importers</h3><p>Export-oriented communication, packing review and delivery coordination for overseas orders.</p></article>
        <article class="aurora-standards-card"><h3>Custom Product Developers</h3><p>Material matching, finish discussion and sourcing support for special bag component projects.</p></article>
      </div>
    </div>
  </section>

  <section class="aurora-standards-section aurora-standards-section--warm">
    <div class="container">
      <div class="aurora-standards-head"><p class="kicker">Procurement Value</p><h2>Why Work With Aurora Bag Supply</h2></div>
      <div class="aurora-standards-grid aurora-standards-grid--three">
        <article class="aurora-standards-card"><h3>Wide Product Range</h3><p>Hardware, leather, zippers, accessories and tools can be sourced together for bag projects.</p></article>
        <article class="aurora-standards-card"><h3>Flexible MOQ</h3><p>Support sample orders, small batch projects and bulk purchasing depending on product type.</p></article>
        <article class="aurora-standards-card"><h3>Custom Hardware Service</h3><p>Support color, finish, size, logo or shape customization for selected hardware items.</p></article>
        <article class="aurora-standards-card"><h3>Fast Response</h3><p>Clear communication for quotation, specification confirmation and production updates.</p></article>
        <article class="aurora-standards-card"><h3>Export-Oriented Support</h3><p>Suitable for international customers who need sourcing, packing and shipping coordination.</p></article>
        <article class="aurora-standards-card"><h3>Long-Term Supplier Relationship</h3><p>We aim to support repeat orders, product development and stable procurement needs.</p></article>
      </div>
    </div>
  </section>

  <section class="aurora-standards-cta">
    <div class="container aurora-standards-cta__inner">
      <div><p class="kicker">Start a Project</p><h2>Need bag components for your next project?</h2><p>Send us your product photos, drawings, quantity and material requirements. Our team will help you prepare a quotation or sourcing plan.</p></div>
      <div class="hero-actions"><a class="btn btn-brass" href="<?php echo esc_url(home_url('/contact/')); ?>">Request a Quote</a><a class="btn" href="<?php echo esc_url(home_url('/contact/')); ?>">Contact Aurora Bag Supply</a></div>
    </div>
  </section>
</main>
<?php get_footer(); ?>
