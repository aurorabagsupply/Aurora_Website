<?php
/**
 * Plugin Name: AOLOLA Admin Dashboard
 * Description: Merchant admin dashboard for AOLOLA products, categories, quotes, customers and operations.
 * Version: 0.1.1
 * Author: AOLOLA
 * Text Domain: aurora-admin-dashboard
 */

if (!defined('ABSPATH')) {
    exit;
}

define('AURORA_ADMIN_DASHBOARD_VERSION', '0.1.1');
define('AURORA_ADMIN_DASHBOARD_FILE', __FILE__);
define('AURORA_ADMIN_DASHBOARD_DIR', plugin_dir_path(__FILE__));
define('AURORA_ADMIN_DASHBOARD_URL', plugin_dir_url(__FILE__));

require_once AURORA_ADMIN_DASHBOARD_DIR . 'includes/class-aurora-admin-dashboard.php';

register_activation_hook(__FILE__, array('Aurora_Admin_Dashboard', 'activate'));

add_action('plugins_loaded', function () {
    Aurora_Admin_Dashboard::instance();
});
