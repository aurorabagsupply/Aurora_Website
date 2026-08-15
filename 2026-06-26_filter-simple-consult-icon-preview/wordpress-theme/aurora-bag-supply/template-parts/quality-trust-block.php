<?php if (!defined('ABSPATH')) { exit; } ?>
<section class="mc-section mc-section--muted" aria-labelledby="mc-quality-title">
  <div class="container mc-quality-grid">
    <div class="mc-quality-copy">
      <p class="mc-eyebrow" data-mc-i18n="qualityEyebrow">Quality & Testing</p>
      <h2 class="mc-title" id="mc-quality-title" data-mc-i18n="qualityTitle">Quality You Can Verify.</h2>
      <p class="mc-intro" data-mc-i18n="qualityCopy">Quality files are matched to the confirmed material, finish and product. This planning preview does not make unsupported certification claims.</p>
      <a class="mc-text-link" href="<?php echo esc_url(home_url('/contact/?topic=quality-files')); ?>" data-mc-i18n="askFiles">Ask About Quality Files</a>
    </div>
    <div>
      <figure class="mc-quality-visual"><img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/quality.jpg'); ?>" alt="AOLOLA quality checking reference" loading="lazy" /></figure>
      <div class="mc-document-list" aria-label="Quality document layout placeholders">
        <?php foreach (array(array('docOne', 'Plating test file'), array('docTwo', 'Material document'), array('docThree', 'Product quality file')) as $document) : ?>
          <div class="mc-document-item"><span class="mc-document-item__icon">PDF</span><div><strong data-mc-i18n="<?php echo esc_attr($document[0]); ?>"><?php echo esc_html($document[1]); ?></strong><span data-mc-i18n="docPending">Verified customer-view file will replace this layout placeholder.</span></div></div>
        <?php endforeach; ?>
      </div>
    </div>
  </div>
</section>
