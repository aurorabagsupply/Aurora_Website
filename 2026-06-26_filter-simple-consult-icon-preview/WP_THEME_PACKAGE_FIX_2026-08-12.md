# WP Theme Package Fix - 2026-08-12

## Issue

The uploaded `1.0.64-preview` theme package rendered the header but then showed the WordPress message:

`There has been a critical error on this website.`

The visible header means WordPress could load the theme, but a runtime PHP error likely occurred during front-page/body rendering.

## Fix

- Created package version `1.0.65-preview`.
- Replaced direct header `get_product_search_form()` rendering with `aurora_render_product_search_form()` fallback.
- Added safe WooCommerce URL helpers:
  - `aurora_wc_page_url()`
  - `aurora_cart_url()`
  - `aurora_cart_count()`
- Added front-page shortcode fallback handling:
  - Category shortcode falls back to theme static category tiles.
  - Featured/New/Best Seller shortcodes fall back to theme static product cards.
- Wrapped shortcode rendering in `try/catch Throwable` to prevent a broken shortcode/plugin state from taking down the front page.
- Bumped CSS/JS cache version to `1.0.99-preview`.
- Bumped WordPress theme version to `1.0.65-preview`.

## Package

`E:\Aurora_Website_Previews\2026-06-26_filter-simple-consult-icon-preview\aurora-bag-supply-v1.0.65-preview.zip`

SHA256:

`EF1DBD018E355AC2FACB2A68CD236AAB2F011B8EF8165ED52C39E24854A71AC2`

## Validation

- `node --check assets/js/aurora-commerce.js`: passed.
- `node --check assets/js/aurora-image-search.js`: passed.
- ZIP root contains:
  - `aurora-bag-supply/style.css`
  - `aurora-bag-supply/functions.php`
  - `aurora-bag-supply/header.php`
  - `aurora-bag-supply/front-page.php`
- ZIP paths use forward slashes only.
- No `edge-profile-*` entries included.

## Not Verified Locally

Local machine does not have PHP CLI installed, so `php -l` syntax lint could not be run locally.

If the site still shows a critical error after uploading `1.0.65-preview`, retrieve the exact PHP fatal error from WordPress debug log or Hostinger error log.
