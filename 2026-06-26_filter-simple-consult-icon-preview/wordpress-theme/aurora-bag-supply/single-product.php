<?php
if (function_exists('wc_get_template')) {
    wc_get_template('single-product.php');
} else {
    get_header();
    echo '<main><section class="section"><div class="container"><p>WooCommerce is required for product pages.</p></div></section></main>';
    get_footer();
}

