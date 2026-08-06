<?php
defined('ABSPATH') || exit;
global $product;
?>
<div class="tab-box">
  <div class="tabs" data-tabs>
    <button class="is-active" data-tab="description">Product Description</button>
    <button data-tab="specifications">Specifications</button>
    <button data-tab="customization">Customization</button>
    <button data-tab="shipping">Shipping & Delivery</button>
    <button data-tab="faq">FAQ</button>
  </div>
  <div class="tab-panel is-active" data-panel="description"><?php the_content(); ?></div>
  <div class="tab-panel" data-panel="specifications">
    <table class="spec-table"><tbody>
      <tr><th>Material</th><td><?php echo esc_html($product->get_attribute('pa_material')); ?></td></tr>
      <tr><th>Size</th><td><?php echo esc_html($product->get_attribute('pa_size')); ?></td></tr>
      <tr><th>Color</th><td><?php echo esc_html($product->get_attribute('pa_color')); ?></td></tr>
      <tr><th>Finish</th><td><?php echo esc_html(get_post_meta(get_the_ID(), '_aurora_finish', true)); ?></td></tr>
      <tr><th>Weight</th><td><?php echo esc_html($product->get_weight()); ?></td></tr>
      <tr><th>MOQ</th><td><?php echo esc_html(get_post_meta(get_the_ID(), '_aurora_moq', true)); ?></td></tr>
      <tr><th>Application</th><td><?php echo esc_html(get_post_meta(get_the_ID(), '_aurora_application', true)); ?></td></tr>
      <tr><th>Custom Logo</th><td>Available</td></tr>
      <tr><th>Packaging</th><td>OPP bag, inner box, export carton, custom label</td></tr>
    </tbody></table>
  </div>
  <div class="tab-panel" data-panel="customization"><ul class="check-list"><li>Logo engraving</li><li>Color plating</li><li>Size adjustment</li><li>Material selection</li><li>Custom mold development</li></ul></div>
  <div class="tab-panel" data-panel="shipping"><p>Samples can be shipped by express. Bulk orders can be packed by carton and shipped by air, sea or forwarder warehouse according to your destination market.</p></div>
  <div class="tab-panel" data-panel="faq"><p><strong>Can I request wholesale pricing?</strong> Yes. Register an account or submit the quote form with quantity and target market.</p><p><strong>Can I customize finish and logo?</strong> Yes. Please send drawings, finish reference and expected quantity.</p></div>
</div>
