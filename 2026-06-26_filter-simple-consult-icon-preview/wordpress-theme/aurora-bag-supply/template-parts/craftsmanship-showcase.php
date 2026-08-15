<?php
if (!defined('ABSPATH')) { exit; }
$image_base = isset($args['image_base']) ? $args['image_base'] : get_template_directory_uri() . '/assets/images/materials-craftsmanship/';
$items = array(
    array('image' => 'craft-stitching-concept.jpg', 'alt' => 'Concept macro image of precise stitching', 'title' => 'stitching', 'title_text' => 'Stitching', 'copy' => 'stitchingCopy', 'copy_text' => 'Controlled lines, spacing and structural placement.'),
    array('image' => 'craft-edge-finishing-concept.jpg', 'alt' => 'Concept macro image of finished leather edges', 'title' => 'edge', 'title_text' => 'Edge Finishing', 'copy' => 'edgeCopy', 'copy_text' => 'Clean edges, even coating and considered closure details.'),
    array('image' => 'craft-leather-selection-concept.jpg', 'alt' => 'Concept image of coordinated leather swatches', 'title' => 'leather', 'title_text' => 'Leather Selection', 'copy' => 'leatherCopy', 'copy_text' => 'Grain, thickness, surface and batch direction matched to the project.'),
    array('image' => 'craft-hardware-assembly-concept.jpg', 'alt' => 'Concept macro image of hardware assembled on leather', 'title' => 'assembly', 'title_text' => 'Hardware Assembly', 'copy' => 'assemblyCopy', 'copy_text' => 'Hardware placement and connection developed with the bag structure.'),
);
?>
<section class="mc-section mc-section--muted" aria-labelledby="mc-craft-title">
  <div class="container">
    <div class="mc-section__head">
      <p class="mc-eyebrow" data-mc-i18n="craftEyebrow">Bag & Leather Craftsmanship</p>
      <h2 class="mc-title" id="mc-craft-title" data-mc-i18n="craftTitle">Details Define the Product.</h2>
      <p class="mc-intro" data-mc-i18n="craftCopy">Construction details are reviewed as part of the finished product, not as isolated decoration.</p>
    </div>
    <div class="mc-craft-grid">
      <?php foreach ($items as $item) : ?>
        <article class="mc-craft-card">
          <img src="<?php echo esc_url($image_base . $item['image']); ?>" alt="<?php echo esc_attr($item['alt']); ?>" loading="lazy" />
          <h3 data-mc-i18n="<?php echo esc_attr($item['title']); ?>"><?php echo esc_html($item['title_text']); ?></h3>
          <p data-mc-i18n="<?php echo esc_attr($item['copy']); ?>"><?php echo esc_html($item['copy_text']); ?></p>
        </article>
      <?php endforeach; ?>
    </div>
    <p class="mc-concept-note" data-mc-i18n="conceptNote">Concept imagery for layout planning. Replace with verified AOLOLA photography before final publication.</p>
  </div>
</section>
