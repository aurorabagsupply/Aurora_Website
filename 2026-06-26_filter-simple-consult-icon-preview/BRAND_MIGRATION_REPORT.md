# AOLOLA Brand Migration Report

Date: 2026-08-12
Backup tag: `pre-aolola-migration-20260812`
Target brand: `AOLOLA`
Target public domain: `https://aolola.com`

## Summary

- Migrated public-facing brand text from `Aurora Bag Supply` / `Aurora` to `AOLOLA`.
- Migrated public SEO domain references from `aurorabagsupply.com` and `aurorabagsupply.github.io` to `aolola.com`.
- Preserved existing logo graphic file and only changed the visible/accessible brand text to `AOLOLA`.
- Preserved current contact phone, address, WhatsApp number, product data, layout, animation and responsive structure.
- Preserved legacy email/social handles for user confirmation instead of changing them automatically.

## Modified Files

Static site:

- `index.html`
- `about.html`
- `account.html`
- `blog.html`
- `cart.html`
- `checkout.html`
- `contact.html`
- `faq.html`
- `privacy-policy.html`
- `product-detail.html`
- `products.html`
- `returns.html`
- `shipping.html`
- `terms-of-service.html`
- `assets/js/aurora-commerce.js`
- `assets/js/aurora-image-search.js`
- `assets/css/aurora-commerce.css`
- `assets/css/aurora-category-clean-float.css`
- `assets/css/aurora-mobile-v2-final.css`
- `assets/logo/aurora-ab-logo.svg`

SEO/static metadata:

- root `../CNAME`
- `sitemap.xml`
- `robots.txt`
- `site.webmanifest`
- root `../sitemap.xml`
- root `../robots.txt`
- root `../site.webmanifest`

WordPress theme:

- `wordpress-theme/aurora-bag-supply/header.php`
- `wordpress-theme/aurora-bag-supply/footer.php`
- `wordpress-theme/aurora-bag-supply/page-about.php`
- `wordpress-theme/aurora-bag-supply/page-contact.php`
- `wordpress-theme/aurora-bag-supply/template-parts/page-info.php`
- `wordpress-theme/aurora-bag-supply/inc/image-search.php`
- `wordpress-theme/aurora-bag-supply/style.css`
- `wordpress-theme/aurora-bag-supply/assets/js/aurora-commerce.js`
- `wordpress-theme/aurora-bag-supply/assets/js/aurora-image-search.js`
- `wordpress-theme/aurora-bag-supply/assets/css/aurora-commerce.css`
- `wordpress-theme/aurora-bag-supply/assets/css/aurora-category-clean-float.css`
- `wordpress-theme/aurora-bag-supply/assets/css/aurora-mobile-v2-final.css`
- `wordpress-theme/aurora-bag-supply/assets/logo/aurora-ab-logo.svg`

Admin/plugin visible labels and documentation:

- `wordpress-plugin/aurora-admin-dashboard/aurora-admin-dashboard.php`
- `wordpress-plugin/aurora-admin-dashboard/includes/class-aurora-admin-dashboard.php`
- `wordpress-plugin/aurora-admin-dashboard/README.md`
- `ADMIN_DASHBOARD_PHASE1_PROGRESS.md`
- `screenshots/admin-preview/aurora-admin-preview.html`

Root redirect:

- `../index.html`

## Pages Covered

- Home
- Products / Product Catalog
- Product Detail
- About / Production Standards
- Contact
- Account
- Cart
- Checkout
- Blog / Buying Guides
- FAQ
- Shipping & Delivery
- Returns / Claims
- Privacy Policy
- Terms of Service
- Search by Image modal copy
- Header / Footer / WhatsApp CTA
- WordPress theme equivalents

## Replacement Count

- First controlled migration pass changed 254 old brand/domain occurrences.
- Additional SEO metadata was added after the first pass.
- Follow-up verification scan found `0` remaining public-facing matches for:
  - `Aurora Bag Supply`
  - standalone public `Aurora`
  - `aurorabagsupply.com`
  - `aurorabagsupply.github.io`

## SEO Changes

- `canonical` URLs now point to `https://aolola.com`.
- Open Graph `og:site_name` is `AOLOLA`.
- Open Graph page titles/descriptions use `AOLOLA`.
- Twitter Card title/description use `AOLOLA`.
- `application-name` and `apple-mobile-web-app-title` use `AOLOLA`.
- Home page JSON-LD `Organization.name` is `AOLOLA`.
- Inner page JSON-LD uses `BreadcrumbList` with `https://aolola.com`.
- `sitemap.xml` was generated with `https://aolola.com` URLs.
- `robots.txt` references `https://aolola.com/sitemap.xml`.
- `site.webmanifest` name and short name are `AOLOLA`.
- Root `CNAME` is set to `aolola.com` for GitHub Pages custom-domain configuration.

## Preserved Technical Names

The following were intentionally kept because changing them can affect CSS, JS, WordPress, database tables, API routes or deployment compatibility:

- CSS classes and variables such as `.aurora-*`, `--aurora-*`
- JS/localStorage identifiers such as `auroraLang`
- WordPress theme folder: `wordpress-theme/aurora-bag-supply`
- WordPress text domain: `aurora-bag-supply`
- WordPress function prefixes such as `aurora_*`
- API namespaces such as `/wp-json/aurora/v1/image-search` and `/wp-json/aurora-admin/v1`
- Database/table names such as `wp_aurora_quotes`
- Existing archive ZIP names and old historical preview folder names
- Existing logo asset filenames such as `aurora-ab-logo.jpg`
- Internal project documents such as `AGENTS.md`, `LANGUAGE_SYNC_CHECKLIST.md`, and `README_NEXT_STEPS.md`

Current technical-name scan count: `2254` matches. These are mostly internal code identifiers, classes, CSS variables, old file paths, retained email/social handles and documentation references.

## Emails Requiring User Confirmation

These were found and intentionally not changed:

- `aurorabagsupply@gmail.com`

No `@aolola.com` email was added because the new enterprise mailbox has not been confirmed.

## Social Handles Requiring User Confirmation

These were found and intentionally not changed:

- `https://www.instagram.com/aurorabagsupply/`
- `https://www.facebook.com/aurorabagsupply`
- `https://www.pinterest.com/aurorabagsupply/`
- `https://www.youtube.com/@aurorabagsupply`

## Validation

Completed:

- `node --check` passed for:
  - `assets/js/aurora-commerce.js`
  - `assets/js/aurora-image-search.js`
  - `wordpress-theme/aurora-bag-supply/assets/js/aurora-commerce.js`
  - `wordpress-theme/aurora-bag-supply/assets/js/aurora-image-search.js`
- Playwright / Microsoft Edge smoke test passed on:
  - Mobile viewport: `390 x 844`
  - Desktop viewport: `1366 x 768`
- Checked pages:
  - `index.html`
  - `products.html`
  - `product-detail.html?sku=ABS-HDW-001`
  - `contact.html`
  - `about.html`
  - `cart.html`
  - `checkout.html`
  - `account.html`
  - `privacy-policy.html`
  - `terms-of-service.html`
- Results:
  - No console errors
  - No failed static resource requests
  - No missing images detected
  - No horizontal overflow detected
  - Header brand text reports `AOLOLA`
  - Canonical URLs report `https://aolola.com`

Not completed:

- PHP lint could not run because `php` is not available in the current Windows PATH.
- Live DNS / SSL verification for `https://aolola.com` was not performed in this local pass.

## Notes

- Existing GitHub Pages hosting may still use the old GitHub Pages URL until the custom domain and DNS are configured.
- The public canonical and sitemap now tell search engines that `https://aolola.com` is the official site.
- If legal company name, invoice entity or payment entity is not AOLOLA, those legal records should be updated separately and carefully.
