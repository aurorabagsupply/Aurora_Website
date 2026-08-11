<?php if (!defined('ABSPATH')) { exit; } ?>
<?php
$page_key = isset($aurora_info_page) ? $aurora_info_page : 'faq';
$fallback_titles = array(
    'shipping' => 'Shipping & Delivery Support',
    'returns' => 'Returns, Claims & Order Issue Support',
    'faq' => 'FAQ',
    'blog' => 'Blog & Buying Guides',
    'privacy' => 'Privacy Policy',
    'terms' => 'Terms of Service',
);
$fallback_subtitles = array(
    'shipping' => 'AOLOLA supports sample shipments, bulk order delivery and export coordination for international B2B customers.',
    'returns' => 'We handle return and claim requests based on order details, product condition and actual case review.',
    'faq' => 'Common questions about sourcing, samples, MOQ, quotation and production support.',
    'blog' => 'Product guides, sourcing tips and material insights for bag manufacturers, designers and importers.',
    'privacy' => 'How AOLOLA collects and uses information submitted through this website.',
    'terms' => 'Basic terms for using the AOLOLA website and requesting product quotations or supply support.',
);
$fallback_title = isset($fallback_titles[$page_key]) ? $fallback_titles[$page_key] : 'Information';
$fallback_subtitle = isset($fallback_subtitles[$page_key]) ? $fallback_subtitles[$page_key] : 'AOLOLA information page.';
?>
<?php get_header(); ?>
<main class="aurora-support-page" data-info-page="<?php echo esc_attr($page_key); ?>">
  <section class="page-title" data-info-title>
    <div class="container">
      <p class="kicker">Support</p>
      <h1><?php echo esc_html($fallback_title); ?></h1>
      <p><?php echo esc_html($fallback_subtitle); ?></p>
      <p>Detailed information is provided for B2B buyers who need quotation, sample, packing, shipping or order support.</p>
    </div>
  </section>
  <section class="section">
    <div class="info-page" data-info-content></div>
  </section>
</main>
<?php get_footer(); ?>
