# WordPress / GitHub Sync Package - 2026-08-12

## Package

- File: `aurora-bag-supply-v1.0.66-sync.zip`
- Theme version: `1.0.66-sync`
- Asset cache version: `1.0.100-sync`
- SHA256: `91E92272A377D51B7FC9F841F25D0D0708F3E0669E49F48617A55E413078B181`

## Goal

Make the WordPress theme homepage render from the same front-end structure as the GitHub Pages preview, so the live WordPress site and preview site do not visually drift.

## Changes

- Updated `front-page.php`.
  - Replaced WooCommerce shortcode-rendered homepage category/product blocks with the same JS-driven nodes used by the GitHub static preview:
    - `data-category-grid`
    - `data-products="featured"`
    - `data-products="new"`
    - `data-products="best"`
  - This keeps the WordPress homepage visually aligned with the GitHub preview while avoiding shortcode markup differences.
- Updated `functions.php`.
  - Bumped CSS/JS enqueue versions to `1.0.100-sync` for cache busting.
- Updated `style.css`.
  - Bumped WordPress theme version to `1.0.66-sync`.

## Validation

- `node --check assets/js/aurora-commerce.js`: passed.
- `node --check assets/js/aurora-image-search.js`: passed.
- ZIP root verified:
  - `aurora-bag-supply/style.css`
  - `aurora-bag-supply/functions.php`
  - `aurora-bag-supply/header.php`
  - `aurora-bag-supply/front-page.php`
  - `aurora-bag-supply/assets/js/aurora-commerce.js`
  - `aurora-bag-supply/assets/js/aurora-image-search.js`
- AUREX text scan in the theme directory: no matches.

## Not Verified Locally

- PHP lint was not run because PHP CLI is not installed on this workstation.
- Live WordPress activation is not verified until the ZIP is uploaded and activated in the WordPress backend.

## Upload Notes

After uploading and activating this package in WordPress:

1. Go to `Appearance / Themes` and confirm `AOLOLA 1.0.66-sync` is active.
2. Go to `Settings / Reading` and confirm the homepage is using the theme front page.
3. Clear WordPress / Hostinger / LiteSpeed cache.
4. Open the live site in a private browser window.

## Product Detail Route Fix - v1.0.67-sync

- Package: `aurora-bag-supply-v1.0.67-sync.zip`
- Theme version: `1.0.67-sync`
- Asset cache version: `1.0.101-sync`
- Added `page-product-detail.php`.
- Added a WordPress product detail route:
  - `/?aurora_product_detail=1&sku=...`
  - `/product-detail/`
  - `/product-detail.html`
- Updated `assets/js/aurora-commerce.js` so product cards, search suggestions and quick view detail links use the WordPress product detail route when the theme is installed.
- This fixes the issue where clicking a static-preview product card in WordPress opened an empty product page.

