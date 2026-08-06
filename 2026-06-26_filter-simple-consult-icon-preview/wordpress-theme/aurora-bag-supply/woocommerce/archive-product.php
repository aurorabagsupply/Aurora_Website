<?php
defined('ABSPATH') || exit;
get_header('shop');
$aurora_archive_filter_key = 'hardware';
$aurora_queried = get_queried_object();
if ($aurora_queried && !empty($aurora_queried->slug)) {
    $aurora_slug_map = array(
        'bag' => 'bag',
        'bags' => 'bag',
        'hardware' => 'hardware',
        'leather' => 'leather',
        'zipper' => 'zipper',
        'zippers' => 'zipper',
        'accessories' => 'accessories',
        'tools' => 'tools',
    );
    $aurora_archive_filter_key = isset($aurora_slug_map[$aurora_queried->slug]) ? $aurora_slug_map[$aurora_queried->slug] : $aurora_archive_filter_key;
}
?>
<main>
  <section class="page-title">
    <div class="container">
      <h1><?php woocommerce_page_title(); ?></h1>
      <p>Explore our complete range of bag hardware designed for handbags, luggage, belts and leather goods manufacturing.</p>
    </div>
  </section>
  <section class="section catalog-section">
    <div class="container catalog-layout">
      <aside class="filters">
        <div class="filter-group"><strong>Category</strong><?php woocommerce_product_categories(array('title_li' => '', 'hide_empty' => false)); ?></div>
        <?php aurora_render_filter_sidebar($aurora_archive_filter_key); ?>
        <div class="filter-group"><strong>Price Range</strong><?php the_widget('WC_Widget_Price_Filter'); ?></div>
      </aside>
      <div>
        <div class="sort-row">
          <span><?php woocommerce_result_count(); ?></span>
          <?php woocommerce_catalog_ordering(); ?>
        </div>
        <?php if (woocommerce_product_loop()) : ?>
          <?php woocommerce_product_loop_start(); ?>
          <?php while (have_posts()) : the_post(); ?>
            <?php wc_get_template_part('content', 'product'); ?>
          <?php endwhile; ?>
          <?php woocommerce_product_loop_end(); ?>
          <?php woocommerce_pagination(); ?>
        <?php else : ?>
          <?php do_action('woocommerce_no_products_found'); ?>
        <?php endif; ?>
      </div>
    </div>
  </section>
</main>
<?php get_footer('shop'); ?>

