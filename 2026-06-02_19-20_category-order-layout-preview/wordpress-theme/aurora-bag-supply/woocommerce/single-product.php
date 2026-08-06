<?php
defined('ABSPATH') || exit;
get_header('shop');
while (have_posts()) :
    the_post();
    global $product;
    ?>
    <main>
      <section class="section">
        <div class="container">
          <div class="product-detail">
            <div>
              <div class="gallery-main"><?php echo $product ? $product->get_image('large') : get_the_post_thumbnail(get_the_ID(), 'large'); ?></div>
              <div class="gallery-thumbs">
                <?php
                $ids = $product ? $product->get_gallery_image_ids() : array();
                foreach (array_slice($ids, 0, 4) as $image_id) {
                    echo '<div class="gallery-thumb">' . wp_get_attachment_image($image_id, 'thumbnail') . '</div>';
                }
                ?>
              </div>
            </div>
            <aside class="detail-panel">
              <p class="kicker"><?php echo wc_get_product_category_list($product->get_id()); ?></p>
              <h1><?php the_title(); ?></h1>
              <p class="sku">SKU: <?php echo esc_html($product->get_sku()); ?></p>
              <dl class="detail-specs">
                <?php aurora_product_meta_row('MOQ', '_aurora_moq'); ?>
                <?php aurora_product_meta_row('Finish', '_aurora_finish'); ?>
                <?php aurora_product_meta_row('Application', '_aurora_application'); ?>
                <dt>Stock Status</dt><dd><?php echo $product->is_in_stock() ? 'Available for production' : 'Made to order'; ?></dd>
                <dt>Price</dt><dd><?php echo $product->get_price_html() ? wp_kses_post($product->get_price_html()) : esc_html__('Request Quote', 'aurora-bag-supply'); ?></dd>
              </dl>
              <?php woocommerce_template_single_add_to_cart(); ?>
              <div class="hero-actions"><?php echo aurora_quote_button($product->get_id()); ?><a class="btn" href="<?php echo esc_url(wc_get_page_permalink('myaccount')); ?>">Add to Wishlist</a></div>
            </aside>
          </div>
          <?php wc_get_template('single-product/tabs/tabs.php'); ?>
        </div>
      </section>
    </main>
<?php endwhile; get_footer('shop'); ?>
