<?php
if (!defined('ABSPATH')) { exit; }
$image_base = isset($args['image_base']) ? $args['image_base'] : get_template_directory_uri() . '/assets/images/materials-craftsmanship/';
?>
<section class="mc-section mc-section--muted" aria-labelledby="mc-finish-title">
  <div class="container">
    <div class="mc-section__head">
      <p class="mc-eyebrow" data-mc-i18n="finishEyebrow">Surface Finishing</p>
      <h2 class="mc-title" id="mc-finish-title" data-mc-i18n="finishTitle">Finish Makes the Difference.</h2>
      <p class="mc-intro" data-mc-i18n="finishCopy">Reference finish directions are confirmed against the selected product and production requirement.</p>
    </div>
    <figure class="mc-finish-visual">
      <img src="<?php echo esc_url($image_base . 'surface-finishes-concept.jpg'); ?>" alt="Concept comparison of five bag hardware finish directions" loading="lazy" />
      <figcaption class="mc-concept-note" data-mc-i18n="conceptNote">Concept imagery for layout planning. Replace with verified AOLOLA photography before final publication.</figcaption>
    </figure>
    <div class="mc-finish-copy">
      <div><h3 data-mc-i18n="vacuum">Vacuum Plating</h3><p data-mc-i18n="vacuumCopy">Clean color. Refined surface. Consistent finishing.</p></div>
      <div>
        <ul class="mc-finish-names"><li data-mc-i18n="gold">Gold</li><li data-mc-i18n="silver">Silver / Nickel</li><li data-mc-i18n="gunmetal">Gunmetal</li><li data-mc-i18n="antique">Antique Brass</li><li data-mc-i18n="black">Matte Black</li></ul>
        <ol class="mc-process"><li data-mc-i18n="polishing">Polishing</li><li data-mc-i18n="preparation">Surface Preparation</li><li data-mc-i18n="plating">Plating</li><li data-mc-i18n="inspection">Inspection</li></ol>
      </div>
    </div>
  </div>
</section>
