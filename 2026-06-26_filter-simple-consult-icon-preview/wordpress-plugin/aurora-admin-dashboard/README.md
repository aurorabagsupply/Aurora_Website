# AOLOLA Admin Dashboard

Phase 1 WordPress plugin for AOLOLA merchant operations.

## Scope

- Secure WordPress admin menu: `AOLOLA Admin`
- Role capabilities for dashboard, products, categories, quotes, customers and audit logs
- Custom database tables for quotes, quote items, lead notes and audit logs
- REST API namespace: `/wp-json/aurora-admin/v1`
- Admin shell UI with Dashboard, Products, Categories, Quotes, Customers and Audit Logs
- Public quote submission endpoint: `/wp-json/aurora/v1/quotes`
- Frontend quote form Ajax handler for WordPress contact/request quote forms

## Data Source

Products, categories, media, users and future orders stay in WordPress/WooCommerce. This avoids creating a second product/customer database outside WooCommerce.

## Phase 1 Limits

- Analytics dashboards are placeholders for Phase 2.
- Media library management, export, role UI, SEO and backups are Phase 3/4 work.
- The current GitHub Pages static preview is not an admin backend and should not store secrets or operational data.

## Security Notes

- Admin routes require WordPress capabilities and REST nonces.
- Public quote creation only creates quote records; quote lists and management remain admin-only.
- Public quote creation requires a valid email, uses a honeypot field and applies short-term transient rate limiting.
- Passwords are never read or displayed by this plugin.
- Audit logs hash IP addresses instead of storing full IPs.
