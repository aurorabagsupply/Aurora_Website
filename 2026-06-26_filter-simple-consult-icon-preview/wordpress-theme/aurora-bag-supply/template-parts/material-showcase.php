<?php
if (!defined('ABSPATH')) { exit; }
$image_base = isset($args['image_base']) ? $args['image_base'] : get_template_directory_uri() . '/assets/images/materials-craftsmanship/';
$materials = array(
    array('image' => 'material-zinc-alloy-concept.jpg', 'alt' => 'Concept image of a polished zinc alloy buckle', 'title' => 'zinc', 'title_text' => 'Zinc Alloy', 'copy' => 'zincCopy', 'copy_text' => 'For shaped buckles, logo hardware, pullers and decorative components.'),
    array('image' => 'material-stainless-steel-concept.jpg', 'alt' => 'Concept image of a stainless steel bag clasp', 'title' => 'steel', 'title_text' => 'Stainless Steel', 'copy' => 'steelCopy', 'copy_text' => 'For stable structures, durable use and a clean metal appearance.'),
    array('image' => 'material-brass-concept.jpg', 'alt' => 'Concept image of a brass D ring', 'title' => 'brass', 'title_text' => 'Brass', 'copy' => 'brassCopy', 'copy_text' => 'For substantial weight, tactile quality and refined surface character.'),
);
?>
<section class="mc-section" id="materials" aria-labelledby="mc-materials-title">
  <div class="container mc-section__head">
    <p class="mc-eyebrow" data-mc-i18n="materialsEyebrow">Hardware Materials</p>
    <h2 class="mc-title" id="mc-materials-title" data-mc-i18n="materialsTitle">Materials Matter.</h2>
    <p class="mc-intro" data-mc-i18n="materialsCopy">Different applications require different materials. We develop hardware around appearance, strength, finish and production requirements.</p>
  </div>
  <ul class="mc-material-track" aria-label="Hardware materials">
    <?php foreach ($materials as $material) : ?>
      <li class="mc-material-card">
        <img src="<?php echo esc_url($image_base . $material['image']); ?>" alt="<?php echo esc_attr($material['alt']); ?>" loading="lazy" />
        <h3 data-mc-i18n="<?php echo esc_attr($material['title']); ?>"><?php echo esc_html($material['title_text']); ?></h3>
        <p data-mc-i18n="<?php echo esc_attr($material['copy']); ?>"><?php echo esc_html($material['copy_text']); ?></p>
      </li>
    <?php endforeach; ?>
  </ul>
</section>
