<?php get_header(); ?>
<main>
  <section class="page-title">
    <div class="container">
      <h1><?php single_post_title(); ?></h1>
      <p>Professional bag hardware, leather materials and custom accessory supply.</p>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <article <?php post_class('panel'); ?>>
          <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
          <?php the_excerpt(); ?>
        </article>
      <?php endwhile; the_posts_navigation(); else : ?>
        <div class="panel"><p>No content found.</p></div>
      <?php endif; ?>
    </div>
  </section>
</main>
<?php get_footer(); ?>
