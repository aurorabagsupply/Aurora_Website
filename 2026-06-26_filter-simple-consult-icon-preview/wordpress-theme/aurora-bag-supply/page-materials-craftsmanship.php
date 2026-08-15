<?php
if (!defined('ABSPATH')) { exit; }

add_filter('pre_get_document_title', function () {
    return 'Materials & Craftsmanship for Bags and Hardware | AOLOLA';
});

add_action('wp_head', function () {
    echo '<meta name="description" content="Explore AOLOLA materials, hardware finishes, leather details, bag craftsmanship and product-specific quality documentation for B2B production." />' . "\n";
    echo '<link rel="canonical" href="' . esc_url(home_url('/materials-craftsmanship/')) . '" />' . "\n";
}, 1);

get_header();
$image_base = get_template_directory_uri() . '/assets/images/materials-craftsmanship/';
?>
<main class="mc-page">
  <section class="mc-hero">
    <div class="container mc-hero__grid">
      <figure class="mc-hero__visual">
        <img src="<?php echo esc_url($image_base . 'hero-hardware-leather-concept.jpg'); ?>" alt="Concept macro image of polished bag hardware mounted on leather" fetchpriority="high" />
        <figcaption class="mc-concept-note" data-mc-i18n="conceptNote">Concept imagery for layout planning. Replace with verified AOLOLA photography before final publication.</figcaption>
      </figure>
      <div class="mc-hero__copy">
        <p class="mc-eyebrow" data-mc-i18n="heroEyebrow">Materials & Craftsmanship</p>
        <h1 data-mc-i18n="heroTitle">Crafted for Better Bags.</h1>
        <p data-mc-i18n="heroCopy">Materials, finishes and construction developed for consistent production quality.</p>
        <div class="mc-hero__keywords" aria-label="Core craftsmanship areas"><span data-mc-i18n="keywordHardware">Hardware</span><span data-mc-i18n="keywordLeather">Leather</span><span data-mc-i18n="keywordCraft">Bag Craftsmanship</span></div>
        <a class="mc-text-link" href="#materials" data-mc-i18n="exploreCraft">Explore Our Craftsmanship</a>
      </div>
    </div>
  </section>

  <?php get_template_part('template-parts/material-showcase', null, array('image_base' => $image_base)); ?>
  <?php get_template_part('template-parts/finish-showcase', null, array('image_base' => $image_base)); ?>
  <?php get_template_part('template-parts/craftsmanship-showcase', null, array('image_base' => $image_base)); ?>
  <?php get_template_part('template-parts/quality-trust-block'); ?>

  <section class="mc-final">
    <div class="container mc-final__inner">
      <p class="mc-eyebrow" data-mc-i18n="finalEyebrow">Production-Ready Craft</p>
      <h2 data-mc-i18n="finalTitle">Built with Better Materials. Finished with Care.</h2>
      <p data-mc-i18n="finalCopy">From hardware and leather to finished bags, AOLOLA focuses on material selection, finishing consistency and production-ready craftsmanship.</p>
      <div class="mc-final__actions">
        <a class="btn btn-brass" href="<?php echo esc_url(home_url('/contact/')); ?>" data-mc-i18n="requestQuote">Request a Quote</a>
        <a class="mc-text-link" href="<?php echo esc_url(aurora_wc_page_url('shop', '/shop/')); ?>" data-mc-i18n="exploreProducts">Explore Products</a>
      </div>
    </div>
  </section>
</main>
<?php get_footer(); ?>
