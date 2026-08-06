<?php
defined('ABSPATH') || exit;
global $product;
if (empty($product) || !$product->is_visible()) {
    return;
}
$sku = $product->get_sku();
?>
<article <?php wc_product_class('product-card', $product); ?>>
  <a class="product-card__image" href="<?php the_permalink(); ?>">
    <?php if ($product->is_featured()) : ?><span class="badge">Featured</span><?php endif; ?>
    <?php echo $product->get_image('woocommerce_thumbnail'); ?>
  </a>
  <div class="product-card__body">
    <div class="product-card__meta">
      <?php if ($sku) : ?><span><?php echo esc_html($sku); ?></span><?php endif; ?>
      <?php $terms = wc_get_product_terms($product->get_id(), 'product_cat', array('fields' => 'names')); if ($terms) : ?><span><?php echo esc_html($terms[0]); ?></span><?php endif; ?>
    </div>
    <h3><?php the_title(); ?></h3>
    <div class="product-specs">
      <?php foreach (array('pa_material' => 'Material', 'pa_color' => 'Color', 'pa_size' => 'Size') as $taxonomy => $label) : ?>
        <?php $value = wc_get_product_terms($product->get_id(), $taxonomy, array('fields' => 'names')); ?>
        <?php if ($value) : ?><span><strong><?php echo esc_html($label); ?>:</strong> <?php echo esc_html(implode(', ', $value)); ?></span><?php endif; ?>
      <?php endforeach; ?>
      <?php $application = get_post_meta($product->get_id(), '_aurora_application', true); if ($application) : ?><span><strong>Use:</strong> <?php echo esc_html($application); ?></span><?php endif; ?>
    </div>
    <div class="buying-row"><span><?php $moq = get_post_meta($product->get_id(), '_aurora_moq', true); echo $moq ? esc_html('MOQ ' . $moq) : esc_html__('MOQ by order', 'aurora-bag-supply'); ?></span><strong><?php echo $product->get_price_html() ? wp_kses_post($product->get_price_html()) : esc_html__('Request Quote', 'aurora-bag-supply'); ?></strong></div>
    <div class="product-actions">
      <a class="btn" href="<?php the_permalink(); ?>">View Details</a>
      <?php echo aurora_quote_button($product->get_id()); ?>
    </div>
  </div>
</article>
