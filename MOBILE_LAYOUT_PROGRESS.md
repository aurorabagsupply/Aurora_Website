# Aurora Mobile Layout Progress

This file records mobile-only layout changes for Aurora Bag Supply.
Desktop layout should remain unchanged unless explicitly requested.

## Working Rule

- Scope: mobile layout first, mainly CSS inside mobile media queries.
- Desktop: do not change desktop layout by default.
- Verification: check mobile viewport, language switcher, search, and inquiry buttons before each push.
- Rollback: use the listed Git commit ID for each version.

## Versions

### 2026-08-08 - Mobile Homepage First Screen

- Commit: `c165d65`
- Source folder: `2026-06-26_filter-simple-consult-icon-preview`
- Files changed:
  - `assets/css/aurora-commerce.css`
  - `wordpress-theme/aurora-bag-supply/assets/css/aurora-commerce.css`
- Page area:
  - Home page mobile header
  - Home page mobile hero carousel
  - Home page mobile trust cards
- Changes:
  - Reduced mobile header height.
  - Replaced visible `Menu` text with a compact menu icon button.
  - Kept mobile language selector visible in the header.
  - Preserved the mobile search bar and reduced first-screen crowding.
  - Reduced mobile hero height.
  - Hid mobile hero carousel arrows to avoid overlapping CTA buttons.
  - Kept hero dots visible and separated from CTA buttons.
  - Reduced trust card spacing on mobile.
- Verification:
  - Mobile viewport `390 x 844`: passed.
  - Header height: `121px`.
  - Hero height: `370px`.
  - Mobile language button: `中文` verified.
  - Chinese search query `拉链`: `20` products verified.
  - Search suggestions: `7` items verified.
  - Static CSS and WordPress theme CSS hash matched.
- Rollback point:
  - To return to the previous version, revert commit `c165d65`.

### 2026-08-08 - Mobile Category Directory Layout

- Commit: `c9f159e`
- Source folder: `2026-06-26_filter-simple-consult-icon-preview`
- Files changed:
  - `assets/css/aurora-commerce.css`
  - `assets/css/aurora-category-clean-float.css`
  - `wordpress-theme/aurora-bag-supply/assets/css/aurora-commerce.css`
  - `wordpress-theme/aurora-bag-supply/assets/css/aurora-category-clean-float.css`
- Page area:
  - Mobile language dropdown
  - Mobile category overview grid
- Changes:
  - Reordered the mobile language dropdown so Chinese appears last.
  - Rebuilt the mobile category overview as a compact two-column directory.
  - Moved category names into a band across the bottom of each image.
  - Kept category descriptions below each image for easier scanning.
  - Reduced card framing so the section feels closer to a B2B product directory reference.
  - Kept the changes inside mobile media queries so desktop layout is not intentionally changed.
- Verification:
  - Mobile viewport `390 x 844`: passed.
  - Language menu visual order: `EN`, `RU`, `ES`, `FR`, `DE`, `IT`, `AR`, `中文`.
  - Category grid: two columns, first card media `168 x 146`.
  - Category label bands visible on mobile cards.
  - Static CSS and WordPress theme CSS hash matched.
  - `git diff --check`: passed with only line-ending warnings.
- Rollback point:
  - To return to the previous version, revert commit `c9f159e`.

### 2026-08-08 - Mobile Category Soft Palette Correction

- Commit: `37adc30`
- Source folder: `2026-06-26_filter-simple-consult-icon-preview`
- Files changed:
  - `assets/css/aurora-commerce.css`
  - `assets/css/aurora-category-clean-float.css`
  - `wordpress-theme/aurora-bag-supply/assets/css/aurora-commerce.css`
  - `wordpress-theme/aurora-bag-supply/assets/css/aurora-category-clean-float.css`
- Page area:
  - Mobile category overview grid
- Changes:
  - Kept the two-column category layout inspired by the reference image.
  - Replaced the green category title band with Aurora soft beige.
  - Changed category title text back to Aurora brown.
  - Adjusted supporting text and media background to softer beige/brown tones.
  - Kept desktop layout unchanged by limiting the edits to mobile media queries.
- Verification:
  - Mobile viewport `390 x 844`: passed.
  - Category grid stayed two columns.
  - Category title background: `rgba(248, 239, 231, 0.9)`.
  - Category title color: `rgb(138, 93, 75)`.
  - Static CSS and WordPress theme CSS hash matched.
  - `git diff --check`: passed with only line-ending warnings.
- Rollback point:
  - To return to the previous version, revert commit `37adc30`.

### 2026-08-08 - Mobile Image Fit and Compact Product Cards

- Commit: `689a580`
- Source folder: `2026-06-26_filter-simple-consult-icon-preview`
- Files changed:
  - `index.html`
  - `products.html`
  - `assets/css/aurora-category-clean-float.css`
  - `wordpress-theme/aurora-bag-supply/assets/css/aurora-category-clean-float.css`
  - `wordpress-theme/aurora-bag-supply/functions.php`
- Page area:
  - Mobile home hero image
  - Mobile category overview images
  - Mobile home product sections
  - Mobile catalog product cards
- Changes:
  - Added CSS cache-busting query strings on the static home and products pages.
  - Updated the WordPress theme asset version to `1.0.64-preview`.
  - Forced mobile category title bands to Aurora beige/brown so stale green styles are overridden.
  - Changed mobile hero, category and product images to `object-fit: contain` to avoid cropping product images.
  - Reduced category image height and description line count.
  - Converted mobile product cards to a shorter left-image/right-content layout.
  - Hid mobile quick-view and detail links inside product cards, keeping the quote action visible.
- Verification:
  - Mobile viewport `390 x 844`: passed.
  - Home hero image `object-fit`: `contain`.
  - Category image `object-fit`: `contain`.
  - Category title background: `rgba(248, 239, 231, 0.94)`.
  - Featured product card approx size: `250 x 192`.
  - Catalog product card approx size: `358 x 169`.
  - Catalog quick-view hidden, quote action visible, detail link hidden.
  - Static CSS and WordPress theme CSS hash matched.
  - `git diff --check`: passed with only line-ending warnings.
- Rollback point:
  - To return to the previous version, revert commit `689a580`.

### 2026-08-08 - Mobile Category Directory Redesign

- Commit: `97e2f88`
- Source folder: `2026-06-26_filter-simple-consult-icon-preview`
- Files changed:
  - `index.html`
  - `products.html`
  - `assets/css/aurora-category-clean-float.css`
  - `wordpress-theme/aurora-bag-supply/assets/css/aurora-category-clean-float.css`
  - `wordpress-theme/aurora-bag-supply/functions.php`
- Page area:
  - Mobile home category overview section
- Changes:
  - Replaced the two-column category tile layout with a single-column mobile procurement directory.
  - Changed category cards to left-image and right-content structure.
  - Removed the image-overlay title band from mobile category cards.
  - Kept full category images with `object-fit: contain`.
  - Reduced the section title size and tightened mobile spacing.
  - Kept Aurora beige/brown palette and soft card styling.
  - Added new static asset cache-busting query strings.
  - Updated the WordPress theme asset version to `1.0.65-preview`.
- Verification:
  - Mobile viewport `390 x 844`: passed.
  - Category grid: single column.
  - Category card approx size: `362 x 126`.
  - Category image `object-fit`: `contain`.
  - Category title position: `static`, no overlay band.
  - Category title color: `rgb(138, 93, 75)`.
  - Static CSS and WordPress theme CSS hash matched.
  - `git diff --check`: passed with only line-ending warnings.
- Rollback point:
  - To return to the previous version, revert commit `97e2f88`.

### 2026-08-08 - Mobile Square Category Tiles

- Commit: `df4062d`
- Source folder: `2026-06-26_filter-simple-consult-icon-preview`
- Files changed:
  - `index.html`
  - `products.html`
  - `assets/css/aurora-category-clean-float.css`
  - `wordpress-theme/aurora-bag-supply/assets/css/aurora-category-clean-float.css`
  - `wordpress-theme/aurora-bag-supply/functions.php`
- Page area:
  - Mobile home category overview section
- Changes:
  - Replaced the previous mobile category directory cards with square category tiles.
  - Restored a two-column mobile grid while keeping each card square.
  - Kept category images fully visible with `object-fit: contain`.
  - Hid mobile category descriptions and product-count pills to reduce clutter.
  - Kept only the category name in a soft Aurora beige title band.
  - Added new static asset cache-busting query strings.
  - Updated the WordPress theme asset version to `1.0.66-preview`.
- Verification:
  - Mobile viewport `390 x 844`: passed.
  - Category grid columns: `174px 174px`.
  - First category cards approx size: `174 x 174`.
  - Category images `object-fit`: `contain`.
  - Description and count elements hidden on mobile.
  - Static CSS and WordPress theme CSS hash matched.
  - `git diff --check`: passed with only line-ending warnings.
- Rollback point:
  - To return to the previous version, revert commit `df4062d`.

### 2026-08-09 - Mobile Square Category Tile Polish

- Commit: `656acd6`
- Source folder: `2026-06-26_filter-simple-consult-icon-preview`
- Files changed:
  - `index.html`
  - `products.html`
  - `assets/css/aurora-category-clean-float.css`
  - `wordpress-theme/aurora-bag-supply/assets/css/aurora-category-clean-float.css`
  - `wordpress-theme/aurora-bag-supply/functions.php`
- Page area:
  - Mobile home category overview section
- Changes:
  - Kept the two-column square category tile layout.
  - Changed the full-width bottom title band into a smaller soft pill label.
  - Reduced visual heaviness with lighter spacing, softer shadow and smaller label text.
  - Increased usable image area by reducing bottom reserved space.
  - Added new static asset cache-busting query strings.
  - Updated the WordPress theme asset version to `1.0.67-preview`.
- Verification:
  - Mobile viewport `390 x 844`: passed.
  - Category grid columns: `175px 175px`.
  - First category card approx size: `175 x 175`.
  - Category label approx size: `149 x 30`.
  - Category label radius: `999px`.
  - Category image `object-fit`: `contain`.
  - Static CSS and WordPress theme CSS hash matched.
  - `git diff --check`: passed with only line-ending warnings.
- Rollback point:
  - To return to the previous version, revert commit `656acd6`.

### 2026-08-09 - Apple-Style Mobile Homepage Refinement

- Commit: `b0ce14e`
- Source folder: `2026-06-26_filter-simple-consult-icon-preview`
- Files changed:
  - `index.html`
  - `products.html`
  - `assets/css/aurora-category-clean-float.css`
  - `assets/js/aurora-commerce.js`
  - `wordpress-theme/aurora-bag-supply/assets/css/aurora-category-clean-float.css`
  - `wordpress-theme/aurora-bag-supply/assets/js/aurora-commerce.js`
  - `wordpress-theme/aurora-bag-supply/functions.php`
- Page area:
  - Mobile home header, hero, trust row, category overview, product carousel cards
- Changes:
  - Added mobile-only Apple-style refinement using white and `#f5f5f7` backgrounds, `#1d1d1f` primary text, and restrained brown accents.
  - Changed mobile header to a lighter sticky glass surface; hid the brand subtitle on mobile to reduce crowding.
  - Repositioned the mobile language selector so Menu, Logo and language button remain aligned; language menu order is now `EN, RU, ES, FR, DE, IT, AR, 中文`.
  - Kept search logic but restyled mobile search as a lighter integrated search field; verified live suggestions appear after typing.
  - Simplified mobile hero copy to one large title, one natural sentence and lighter text-link actions while preserving carousel images, dots and arrows.
  - Replaced the thick trust cards with simple text blocks and fine separators.
  - Reworked mobile category tiles into square light-gray image panels with category names below and a simple arrow, removing the nested pill-label look.
  - Reduced mobile product card density: large square product image area, hidden quick-view button, visible `Add to Quote` and `View Details` text actions, and simplified specs/MOQ.
  - Added new static cache-busting query strings.
  - Updated the WordPress theme asset version to `1.0.68-preview`.
- Verification:
  - Mobile viewport `390 x 844`: passed.
  - Header: sticky glass background, brand subtitle hidden, Menu/Logo/language/search aligned.
  - Search: typing `zipper` produced product suggestions.
  - Mobile menu: still toggles category navigation open.
  - Language order: Chinese is last in the selector.
  - Category media: square `172 x 172`, background `rgb(245, 245, 247)`, title position `static`.
  - Product card image share: about `68%` of card height.
  - Quick View hidden on mobile; Add to Quote and View Details remain visible.
  - Static CSS and WordPress theme CSS hash matched.
- Rollback point:
  - To return to the previous version, revert commit `b0ce14e`.

### 2026-08-09 - Apple-Style Mobile Homepage Refinement V2

- Commit: `a2c9ac1`
- Base source commit: `058bed0`
- Source folder: `2026-06-26_filter-simple-consult-icon-preview`
- Files changed:
  - `index.html`
  - `products.html`
  - `assets/css/aurora-category-clean-float.css`
  - `assets/js/aurora-commerce.js`
  - `wordpress-theme/aurora-bag-supply/assets/css/aurora-category-clean-float.css`
  - `wordpress-theme/aurora-bag-supply/assets/js/aurora-commerce.js`
  - `wordpress-theme/aurora-bag-supply/functions.php`
- Page area:
  - Mobile home header, hero carousel, trust row and floating WhatsApp entry
- Changes:
  - Tightened the mobile sticky header by reducing control sizes and spacing while keeping Menu, logo, language, search and language switching intact.
  - Kept the mobile search field at `56px` height and softened the black search button weight.
  - Reduced mobile hero title weight and size; secondary text uses softer gray.
  - Kept desktop hero action text unchanged; mobile-only CSS adds `View` / `查看` before the category action label.
  - Reduced the hero viewport height and moved carousel dots to about `30px` above the image bottom.
  - Reduced carousel dot size and softened inactive dot contrast.
  - Preserved the product image and carousel logic while making text and image read as one visual module.
  - Simplified the trust row rhythm with text blocks and fine separators.
  - Reduced the WhatsApp floating button to `50px` with a lighter color and shadow.
  - Added new static asset cache-busting query strings: `20260809-mobile-apple-home-v3`.
  - Updated the WordPress theme asset version to `1.0.70-preview`.
- Verification:
  - Mobile viewport `390 x 844`: passed.
  - Header height: `117px`; search height: `56px`.
  - Language button: `中文` stayed on one line.
  - Hero title `工坊与打样支持`: `31px`, weight `690`.
  - Hero action text: `查看工具`, `获取报价`.
  - Desktop hero action raw text remained `工具` for the same Tools slide.
  - Carousel dot size: `6px`; dots positioned about `30px` from hero bottom.
  - WhatsApp floating button: `50 x 50`.
  - Category cards remained square, light-gray and static-title on mobile.
  - Static CSS/JS and WordPress theme CSS/JS hash matched.
- Rollback point:
  - To return to the previous version, revert commits `a2c9ac1` and `058bed0` in that order.

### 2026-08-09 - Mobile Hero Swipe And Catalog Grid V4

- Commit: `3bd04c0`
- Base source commit: `a2c9ac1`
- Source folder: `2026-06-26_filter-simple-consult-icon-preview`
- Files changed:
  - `index.html`
  - `products.html`
  - `assets/css/aurora-category-clean-float.css`
  - `assets/js/aurora-commerce.js`
  - `wordpress-theme/aurora-bag-supply/assets/css/aurora-category-clean-float.css`
  - `wordpress-theme/aurora-bag-supply/assets/js/aurora-commerce.js`
  - `wordpress-theme/aurora-bag-supply/functions.php`
- Page area:
  - Mobile home hero carousel
  - Mobile category/product image stages
  - Mobile product catalog page
- Changes:
  - Added real mobile hero swipe support using pointer movement with vertical-scroll protection, while keeping existing autoplay and dot navigation.
  - Forced mobile category and product image stages to pure white so product images blend with their original white backgrounds.
  - Converted the mobile product catalog list into a compact two-column grid.
  - Reduced mobile catalog product cards to image, product name and quote/price text only; hid SKU pills, specs, MOQ text, repeated quote button and detail link in the catalog grid.
  - Added a mobile-only `Filters` trigger and moved the filter panel into a hidden left-side drawer with backdrop close behavior.
  - Added new static cache-busting query strings: `20260809-mobile-catalog-grid-v4`.
  - Updated the WordPress theme asset version to `1.0.71-preview`.
- Verification:
  - JS syntax check passed for static and WordPress theme JS.
  - Static JS/CSS and WordPress theme JS/CSS hashes matched.
  - Mobile viewport `390 x 844`: passed with system Edge headless.
  - Hero swipe changed active slide from `0` to `1`; `touch-action` is `pan-y`.
  - Catalog grid columns measured `172px 172px`, first two product cards are on the same row.
  - Catalog product image background measured `rgb(255, 255, 255)` and image box ratio measured `1`.
  - Product meta/spec/actions are hidden in mobile catalog grid; quote text remains visible as the current basic price/quote value.
  - Filter panel is hidden by default and opens from the left after tapping `Filters`.
- Rollback point:
  - To return to the previous version, revert commit `3bd04c0`.

### 2026-08-09 - Mobile Search Focus And Category Image Blend V5

- Commit: `fdd5a36`
- Base source commit: `7401705`
- Source folder: `2026-06-26_filter-simple-consult-icon-preview`
- Files changed:
  - `index.html`
  - `products.html`
  - `assets/css/aurora-category-clean-float.css`
  - `wordpress-theme/aurora-bag-supply/assets/css/aurora-category-clean-float.css`
  - `wordpress-theme/aurora-bag-supply/functions.php`
- Page area:
  - Mobile sticky header search field
  - Mobile home category tiles
  - Mobile hero action label spacing
- Changes:
  - Set mobile search input computed font size to `16px` to prevent iPhone Safari automatic focus zoom.
  - Kept the search field height at `54px` so the layout does not visually grow after the font-size fix.
  - Removed extra inner padding from mobile category image stages.
  - Matched the Bag category image stage to `#f5f5f7` and used `object-fit: cover` for the Bag image so its square source background blends with the stage.
  - Added explicit mobile spacing between the generated `View` prefix and the category name in hero action links.
  - Added new static cache-busting query strings: `20260809-mobile-focus-image-v5`.
  - Updated the WordPress theme asset version to `1.0.72-preview`.
- Verification:
  - Static CSS and WordPress theme CSS hash matched.
  - JS syntax check still passed.
  - Mobile viewport `390 x 844`: passed with system Edge headless.
  - Focused mobile search input computed font size measured `16px`.
  - Focused mobile viewport scale measured `1`, confirming no browser zoom in the test environment.
  - Bag category media padding measured `0px`; media background measured `rgb(245, 245, 247)`; image object-fit measured `cover`.
  - Hero action generated prefix measured `View` with margin, preventing `ViewBag` text collision.
- Rollback point:
  - To return to the previous version, revert commit `fdd5a36`.

### 2026-08-09 - Mobile Bag Product Image Blend V6

- Commit: `f720cd3`
- Base source commit: `5b054b1`
- Source folder: `2026-06-26_filter-simple-consult-icon-preview`
- Files changed:
  - `index.html`
  - `products.html`
  - `assets/css/aurora-category-clean-float.css`
  - `wordpress-theme/aurora-bag-supply/assets/css/aurora-category-clean-float.css`
  - `wordpress-theme/aurora-bag-supply/functions.php`
- Page area:
  - Mobile product catalog Bag product cards
- Changes:
  - Matched Bag product image stages to the same light-gray treatment used by the Bag category tile.
  - Removed extra mobile padding from Bag catalog product image stages.
  - Used `object-fit: cover` for Bag catalog product images so their built-in square backgrounds fill the card stage.
  - Added selectors for the static catalog SKU links and WordPress/WooCommerce Bag product classes.
  - Added new static cache-busting query strings: `20260809-mobile-bag-blend-v6`.
  - Updated the WordPress theme asset version to `1.0.73-preview`.
- Verification:
  - Static CSS and WordPress theme CSS hash matched.
  - Mobile Bag catalog viewport `390 x 844`: passed with system Edge headless.
  - Bag product media padding measured `0px`; background measured `rgb(245, 245, 247)`; image object-fit measured `cover`.
- Rollback point:
  - To return to the previous version, revert commit `f720cd3`.

### 2026-08-09 - Search By Image Foundation V7

- Commit: `c9f440e`
- Base source commit: `9dd7c6d`
- Source folder: `2026-06-26_filter-simple-consult-icon-preview`
- Files changed:
  - `index.html`
  - `products.html`
  - `assets/js/aurora-commerce.js`
  - `assets/js/aurora-image-search.js`
  - `assets/css/aurora-category-clean-float.css`
  - `wordpress-theme/aurora-bag-supply/functions.php`
  - `wordpress-theme/aurora-bag-supply/inc/image-search.php`
  - `wordpress-theme/aurora-bag-supply/inc/image-search-index.php`
  - `wordpress-theme/aurora-bag-supply/inc/image-search-rest.php`
  - `wordpress-theme/aurora-bag-supply/assets/js/aurora-commerce.js`
  - `wordpress-theme/aurora-bag-supply/assets/js/aurora-image-search.js`
  - `wordpress-theme/aurora-bag-supply/assets/css/aurora-category-clean-float.css`
- Page area:
  - Header product search
  - Search by Image upload modal
  - WordPress/WooCommerce image similarity backend
- Changes:
  - Added a camera/image trigger beside the existing product text search without changing text search behavior.
  - Added upload modal support for JPG, JPEG, PNG and WEBP, including mobile file picker, desktop upload, drag/drop, preview, loading state and friendly errors.
  - Added front-end image compression before upload to reduce latency and API cost.
  - Added WordPress REST endpoint `POST /wp-json/aurora/v1/image-search` for secure server-side image analysis and product result lookup.
  - Added admin-only `POST /wp-json/aurora/v1/image-search/reindex` for product image embedding indexing, including first-time `all=1` batch support.
  - Added custom MySQL table `wp_aurora_image_embeddings` for product image vector storage.
  - Added shape-first vector scoring: shape/structure similarity is weighted at `75%`, color/material similarity at `25%` when the embedding provider returns separate vectors.
  - Added environment-variable based provider configuration; no API key or secret is committed to the repo.
  - Fixed `.site-search` translation selectors so hidden WordPress inputs and the new image-search camera button are not overwritten by text-search language sync.
  - Added new static cache-busting query strings: `20260809-image-search-v7`.
  - Updated the WordPress theme asset version to `1.0.74-preview`.
- Required production environment:
  - `AURORA_IMAGE_EMBEDDING_ENDPOINT`
  - `AURORA_IMAGE_EMBEDDING_API_KEY` if the provider requires auth
  - Optional: `AURORA_IMAGE_EMBEDDING_MODEL`, `AURORA_IMAGE_MAX_UPLOAD_MB`, `AURORA_IMAGE_SEARCH_DEBUG`, `AURORA_IMAGE_SEARCH_ALLOWED_ORIGINS`
- Verification:
  - JS syntax check passed for `aurora-commerce.js` and `aurora-image-search.js`.
  - Static CSS/JS and WordPress theme CSS/JS hashes matched after sync.
  - Mobile viewport `390 x 844`: camera trigger exists, label translated to Chinese, search submit button remains `搜索`, and upload modal opens.
  - PHP lint could not run because this workstation does not currently have a `php` executable in PATH.
- Rollback point:
  - To return to the previous version, revert commit `c9f440e`.

### 2026-08-09 - Mobile Trust To Category Rhythm V8

- Commit: `452aebb`
- Base source commit: `6c9ee44`
- Source folder: `2026-06-26_filter-simple-consult-icon-preview`
- Files changed:
  - `index.html`
  - `products.html`
  - `assets/css/aurora-category-clean-float.css`
  - `wordpress-theme/aurora-bag-supply/assets/css/aurora-category-clean-float.css`
  - `wordpress-theme/aurora-bag-supply/functions.php`
- Page area:
  - Mobile home trust/advantages area after hero
  - Mobile `Shop by Category` / `按类别采购` section entrance
- Changes:
  - Redesigned the three mobile trust items into a compact Apple-style advantages area.
  - Added a mobile-only pseudo heading: `Why Aurora` / `为什么选择 Aurora`.
  - Added lightweight line-icon treatments through CSS-only mobile rules.
  - Removed heavy card/shadow styling from the mobile trust area.
  - Reduced the empty vertical space before the category section.
  - Set mobile category heading to `38px` and `600` font weight, with `17px` supporting copy.
  - Added new static cache-busting query strings: `20260809-mobile-trust-v8`.
  - Updated the WordPress theme asset version to `1.0.75-preview`.
- Verification:
  - Mobile viewport `390 x 844`: passed with system Edge headless.
  - Trust pseudo heading measured `为什么选择 Aurora`.
  - Trust area height measured about `407px`, keeping it below half of the mobile viewport.
  - Category section top padding measured `68px`.
  - Category heading measured `38px`, weight `600`; subtitle measured `17px`.
  - Desktop viewport `1366 x 900`: trust row display remained `grid`, and the mobile-only pseudo heading measured `none`.
- Rollback point:
  - To return to the previous version, revert commit `452aebb`.

### 2026-08-09 - Mobile Glass Navigation Drawer V9

- Commit: `b122cdb`
- Base source commit: `522d8ea`
- Source folder: `2026-06-26_filter-simple-consult-icon-preview`
- Files changed:
  - `index.html`
  - `products.html`
  - `assets/css/aurora-category-clean-float.css`
  - `wordpress-theme/aurora-bag-supply/assets/css/aurora-category-clean-float.css`
  - `wordpress-theme/aurora-bag-supply/functions.php`
- Page area:
  - Mobile expanded main navigation
  - Mobile category mega-menu drawer
- Changes:
  - Redesigned the mobile expanded menu as a fixed glass drawer over page content.
  - Replaced the heavy black menu background with light glass surfaces: outer `rgba(245,245,247,.62)` and drawer `rgba(255,255,255,.94)`.
  - Kept the header above the drawer so the menu button can close the navigation.
  - Reduced first-level row height to `56px`, with `17px` medium-weight text.
  - Removed the separate right-side arrow column visually; the row-wide toggle now uses a light chevron at the right edge.
  - Changed submenu panels to transparent inline expansion with smooth max-height/opacity transition.
  - Set submenu links to `15.5px` and `#6E6E73`, with no dark blocks or heavy cards.
  - Added spacing for secondary simple links such as New Arrivals, Contact and About without heavy dividers.
  - Added new static cache-busting query strings: `20260809-mobile-menu-v9`.
  - Updated the WordPress theme asset version to `1.0.76-preview`.
- Verification:
  - Mobile viewport `390 x 844`: passed with system Edge headless.
  - Open nav measured `position: fixed`, outer background `rgba(245, 245, 247, 0.62)`, backdrop filter `blur(20px) saturate(1.8)`.
  - Drawer panel measured `rgba(255, 255, 255, 0.94)` with `28px` radius.
  - First-level row height measured `56px`, text color `rgb(29, 29, 31)`, font size `17px`.
  - Row toggle covers the full menu row; chevron color measured `rgb(110, 110, 115)`.
  - Expanded submenu measured `max-height: 720px`, opacity `1`, transparent background.
  - Submenu links measured `15.5px`, color `rgb(110, 110, 115)`, height `38px`.
  - Header z-index measured `9100`, nav z-index measured `9000`, confirming the menu button remains accessible.
  - Desktop viewport `1366 x 900`: nav remained `position: static`, dark background unchanged, opacity `1`.
- Rollback point:
  - To return to the previous version, revert commit `b122cdb`.

### 2026-08-09 - Mobile Homepage Apple UI System V10

- Commit: `96ff797`
- Base source commit: `fe99c08`
- Source folder: `2026-06-26_filter-simple-consult-icon-preview`
- Files changed:
  - `index.html`
  - `products.html`
  - `assets/css/aurora-category-clean-float.css`
  - `assets/js/aurora-commerce.js`
  - `wordpress-theme/aurora-bag-supply/assets/css/aurora-category-clean-float.css`
  - `wordpress-theme/aurora-bag-supply/assets/js/aurora-commerce.js`
  - `wordpress-theme/aurora-bag-supply/functions.php`
- Page area:
  - Mobile homepage full visual system
  - Header, hero, trust area, category section, procurement strip, product modules, story/services/newsletter/footer
- Changes:
  - Added a mobile-only V10 design layer using `#FFFFFF`, `#F5F5F7`, `#1D1D1F`, `#6E6E73` and restrained Aurora brown accents.
  - Reworked mobile header into a lighter sticky glass layout with compact logo/menu/language row and a lighter second-row search area.
  - Kept text search and image search functionality intact while reducing the visual weight of the camera and submit controls.
  - Refined the mobile hero into a cleaner product-led visual with lighter text-link CTAs and softer carousel dots.
  - Rebuilt the trust area as a compact `Why Aurora` advantage section with line icons, short copy and controlled height.
  - Rebuilt `Shop by Category` as a two-column square-image category grid with direct category names and arrows.
  - Converted the procurement strip into a shorter dark B2B selling-points section.
  - Differentiated product modules: Featured remains horizontal, New Arrivals becomes a two-column grid, Best Sellers becomes a compact vertical list.
  - Reduced product-card information density and hid repeated meta/action elements on mobile, keeping product name, material line, MOQ/price and detail link.
  - Restyled brand story, service, newsletter and footer areas for a more consistent Apple-style rhythm.
  - Added mobile footer accordion behavior while leaving desktop footer display unchanged.
  - Reduced the WhatsApp floating button to `50px` with safe-area-aware placement.
  - Added prefers-reduced-motion support for the new mobile motion layer.
- Verification:
  - JS syntax check passed for static and WordPress theme `aurora-commerce.js`.
  - Static CSS/JS and WordPress theme CSS/JS hashes matched after sync.
  - Mobile viewports `320 x 844`, `375 x 844`, `390 x 844`, `430 x 932`: no horizontal overflow.
  - Mobile product modules measured as intended: Featured horizontal track, New Arrivals two-column grid, Best Sellers one-column compact list.
  - Mobile category grid measured as two columns with square product imagery.
  - Mobile footer groups measured collapsed by default.
  - Mobile WhatsApp button measured `50px` wide/high with `18px` right/bottom spacing.
  - Chinese state `?lang=zh` verified for hero title, search placeholder, category title and trust heading.
  - Mobile menu open state verified as fixed glass drawer with `56px` first-level rows and no overflow.
  - Desktop viewport `1366 x 900`: nav remained static and product carousel layout remained desktop-style.
- Rollback point:
  - To return to the previous version, revert commit `96ff797`.

### 2026-08-09 - Mobile Footer Social Responsive Fix V10.2

- Commit: `76bb818`
- Base source commit: `bc66f19`
- Source folder: `2026-06-26_filter-simple-consult-icon-preview`
- Files changed:
  - `index.html`
  - `products.html`
  - `assets/css/aurora-category-clean-float.css`
  - `wordpress-theme/aurora-bag-supply/assets/css/aurora-category-clean-float.css`
  - `wordpress-theme/aurora-bag-supply/functions.php`
- Page area:
  - Mobile footer social media area
  - Mobile footer accordions, payment badges, copyright/legal links and WhatsApp safe spacing
- Changes:
  - Replaced the cramped mobile footer social row with a two-column grid.
  - Each social link now renders as an independent tap target with a circular platform icon and centered platform name.
  - Removed the mobile overlap caused by inheriting desktop circular icon sizing while showing text.
  - Added safer mobile footer bottom padding so WhatsApp does not cover footer content.
  - Allowed payment badges and copyright/legal links to wrap naturally on narrow screens.
  - Added new static cache-busting query strings: `20260809-mobile-footer-v10-2`.
  - Updated the WordPress theme asset version to `1.0.78-preview`.
- Verification:
  - CSS static copy and WordPress theme CSS copy have matching SHA256 hashes.
  - `git diff --check` passed.
  - `node --check` passed for `assets/js/aurora-commerce.js` and `assets/js/aurora-image-search.js`.
  - Tested footer at `320`, `375`, `390` and `430` px mobile widths with headless Edge.
  - Result: no page horizontal scroll, no social item overlap, payment badges and legal links wrap correctly, and WhatsApp does not overlap Payment Methods or Copyright.
- Rollback point:
  - To return to the previous version, revert commit `76bb818`.

### 2026-08-09 - Mobile Product Grid Responsive Fix V10.3

- Commit: `8848ee4`
- Base source commit: `c9dd550`
- Source folder: `2026-06-26_filter-simple-consult-icon-preview`
- Files changed:
  - `index.html`
  - `products.html`
  - `assets/css/aurora-category-clean-float.css`
  - `assets/js/aurora-commerce.js`
  - `wordpress-theme/aurora-bag-supply/assets/css/aurora-category-clean-float.css`
  - `wordpress-theme/aurora-bag-supply/assets/js/aurora-commerce.js`
  - `wordpress-theme/aurora-bag-supply/functions.php`
- Page area:
  - Mobile Featured Products carousel
  - Mobile New Arrivals and Best Sellers product grids
  - Mobile catalog two-column product grid
  - Mobile WhatsApp product-content collision behavior
- Changes:
  - Kept Featured Products as a horizontal scroll-snap carousel with one complete card visible and a partial next-card preview.
  - Forced New Arrivals, Best Sellers and product catalog grids into stable two-column layouts at mobile widths.
  - Removed fixed-height and inherited flex-basis behavior that made product image areas too tall and pushed CTAs outside cards.
  - Standardized mobile product cards around square image stages, flex-column bodies, two-line titles, two-line material text, one-line MOQ and stable Add to Quote / View Details actions.
  - Added mobile content width control so product grids use clear 20 px side rhythm instead of touching the viewport edge.
  - Added a mobile WhatsApp guard that temporarily hides the floating button only when it would overlap product text, MOQ, Add to Quote or View Details.
  - Added new static cache-busting query strings: `20260809-mobile-products-v10-3`.
  - Updated the WordPress theme asset version to `1.0.79-preview`.
- Verification:
  - CSS static copy and WordPress theme CSS copy have matching SHA256 hashes.
  - `assets/js/aurora-commerce.js` static copy and WordPress theme copy have matching SHA256 hashes.
  - `node --check` passed for `assets/js/aurora-commerce.js` and `assets/js/aurora-image-search.js`.
  - `git diff --check` passed.
  - Tested `320`, `375`, `390` and `430` px mobile widths with headless Edge.
  - Tested home page and catalog page in both English and Chinese language states.
  - Result: body horizontal overflow is `0`; Featured Products remains `scroll-snap-type: x mandatory`; New Arrivals, Best Sellers and catalog grids use two-column grid; visible cards stay inside viewport; card content and CTA are not clipped; same-row grid card heights are consistent; WhatsApp does not visibly overlap product text, MOQ, Add to Quote or View Details.
- Rollback point:
  - To return to the previous version, revert commit `8848ee4`.

### 2026-08-09 - Mobile Cross-Browser Responsive Compatibility Audit V10.4

- Commit: `b53e31f`
- Base source commit: `416fa7f`
- Source folder: `2026-06-26_filter-simple-consult-icon-preview`
- Files changed:
  - All static HTML pages in the source folder
  - `assets/css/aurora-category-clean-float.css`
  - `wordpress-theme/aurora-bag-supply/assets/css/aurora-category-clean-float.css`
  - `wordpress-theme/aurora-bag-supply/functions.php`
- Page area:
  - Whole mobile site: Header, search, image search, Hero, Shop by Category, product grids, Featured carousel, mobile menu, filter drawer, quick view, quote drawer, footer and WhatsApp floating button
- Changes:
  - Added `viewport-fit=cover` to every static HTML viewport meta tag.
  - Added static cache-busting query `20260809-mobile-compat-v10-4` to CSS and JS references.
  - Added a mobile compatibility CSS layer with safe-area variables, `svh` / `dvh` fallbacks, WebKit backdrop fallback and stronger container width guards.
  - Replaced fragile `100vw` / negative-margin carousel behavior with a contained mobile carousel viewport and scroll-snap track.
  - Stabilized mobile product grids, category grids, mobile menu, filter drawer, image search modal, quick view and quote drawer against cross-WebView viewport differences.
  - Updated the WordPress theme asset version to `1.0.80-preview`.
- Verification:
  - CSS static copy and WordPress theme CSS copy have matching SHA256 hashes.
  - `node --check` passed for `assets/js/aurora-commerce.js` and `assets/js/aurora-image-search.js`.
  - `git diff --check` passed.
  - Automated mobile compatibility QA covered 72 runs: 6 widths (`320`, `375`, `390`, `393`, `414`, `430`) x 3 WebView-style UA profiles (`in-app`, `wechat-webview`, `ios-chrome-ua`) x 4 pages (`home`, `catalog`, `detail`, `contact`).
  - Test metrics included `window.innerWidth`, `window.innerHeight`, `document.documentElement.clientWidth`, `window.devicePixelRatio`, current breakpoint and CSS support flags.
  - Result: no detected horizontal overflow, obvious layout switch, critical clipping, content overlap, menu/modal overflow or broken carousel snap in the automated local test matrix.
  - Limitation: automated QA used local Edge / Chromium with mobile WebView-style user agents. Real iPhone Safari and WeChat WebView should still be spot-checked after GitHub Pages cache updates.
- Rollback point:
  - To return to the previous version, revert commit `b53e31f`.

### 2026-08-10 - Full Mobile UI Consistency & Visual QA Pass V10.5

- Commit: `65037dc`
- Base source commit: `5066a80`
- Source folder: `2026-06-26_filter-simple-consult-icon-preview`
- Files changed:
  - All static HTML pages in the source folder
  - `assets/css/aurora-category-clean-float.css`
  - `assets/js/aurora-commerce.js`
  - `wordpress-theme/aurora-bag-supply/assets/css/aurora-category-clean-float.css`
  - `wordpress-theme/aurora-bag-supply/assets/js/aurora-commerce.js`
  - `wordpress-theme/aurora-bag-supply/functions.php`
  - `mobile-ui-audit.md`
  - `tools/mobile-ui-v10-5-qa.mjs`
- Page area:
  - Whole mobile site: Home, Product Catalog, category pages, product detail pages, Search by Image modal, Cart, Checkout, Account, About, Contact, Blog, FAQ, Shipping, Returns, Privacy Policy, Terms of Service, Footer and WhatsApp floating button.
- Changes:
  - Added a final mobile-only v10.5 design-system layer to unify colors, spacing, typography, radii, card depth, forms and shared components across all mobile pages.
  - Standardized mobile header layout across pages, including injected mobile menu support for pages that previously lacked the menu button.
  - Added Search by Image script loading to every static page so the camera/image-search entry is available site-wide.
  - Restyled inner page heroes, catalog controls, filters, product cards, product detail gallery/summary, tabs, forms, Search by Image modal and content pages under one restrained Apple-style mobile system.
  - Preserved product data, text search, image search UI flow, quote actions, language switcher, catalog filters, product detail links and desktop layout.
  - Added a MutationObserver to the WhatsApp overlap guard so dynamically rendered product cards can trigger safe hiding when the floating button would cover critical content.
  - Updated static cache-busting query strings to `20260810-mobile-ui-v10-5`.
  - Updated the WordPress theme asset version to `1.0.81-preview`.
- Verification:
  - Generated 28 mobile full-page screenshots at `390 x 844` in `screenshots/mobile-ui-v10-5/`.
  - Automated responsive QA covered 60 runs: 6 widths (`320`, `375`, `390`, `393`, `414`, `430`) x 10 representative pages.
  - Result: `0` hard issues in the final automated QA matrix.
  - Checks covered body horizontal overflow, clipped product cards, camera/image-search trigger presence, mobile menu trigger presence, featured carousel snap behavior, footer social items and WhatsApp overlap.
  - `mobile-ui-audit.md` was generated with page-by-page Fixed / Remaining Issues / Shared Component Problems.
  - Limitation: automated QA used local Edge / Chromium with an iPhone Safari user agent. Real iPhone Safari and WeChat WebView should still be spot-checked after GitHub Pages cache refresh.
- Rollback point:
  - To return to the previous version after commit, revert the v10.5 commit.

### 2026-08-10 - Mobile Design System V2 Full-Site Refinement

- Commit: Mobile Design System V2 commit in git history
- Base source commit: `65037dc`
- Source folder: `2026-06-26_filter-simple-consult-icon-preview`
- Files changed:
  - All static HTML pages in the source folder
  - `assets/css/aurora-commerce.css`
  - `assets/css/aurora-category-clean-float.css`
  - `assets/css/aurora-mobile-v2-final.css`
  - `assets/js/aurora-commerce.js`
  - `assets/js/aurora-image-search.js`
  - Matching WordPress theme assets and `wordpress-theme/aurora-bag-supply/functions.php`
  - `tools/mobile-ui-v2-qa.mjs`
  - `mobile-v2-audit.md`
  - `screenshots/mobile-v2/`
- Page area:
  - Full mobile site: Home, mobile menu, Product Catalog, all category pages, representative product details for Bag / Hardware / Leather / Zipper / Accessories / Tools, Search by Image modal, Cart, Checkout, Account, About, Contact, Blog, FAQ, Shipping, Returns, Privacy Policy and Terms of Service.
- Changes:
  - Added a final mobile-only V2 CSS layer loaded after legacy mobile CSS to stabilize the shared design system without changing desktop layout.
  - Fixed the mobile header brand truncation issue so `Aurora Bag Supply` stays readable across `320` to `430` px widths.
  - Standardized the mobile header row, second-row search, image-search trigger, typography, product grids, product cards, category cards, product detail layout, account tabs, forms, footer and WhatsApp spacing.
  - Reduced product-card density by making product imagery primary and changing repeated quote actions into lighter `View Details` / compact quote actions.
  - Updated Search by Image modal and result state styling while preserving existing upload/search flow and endpoint behavior.
  - Reworked Account mobile behavior into `Sign In | Create Account` tabs and replaced the native file input with a branded upload control.
  - Added cache-busting with `aurora-mobile-v2-final.css?v=20260810-mobile-design-v2` for static pages and WordPress theme version `1.0.82-preview`.
- Verification:
  - `node --check` passed for `assets/js/aurora-commerce.js` and `assets/js/aurora-image-search.js`.
  - Generated 30 mobile full-page screenshots at `390 x 844` in `screenshots/mobile-v2/`.
  - Automated responsive QA covered 60 runs: 6 widths (`320`, `375`, `390`, `393`, `414`, `430`) x 10 representative pages.
  - Result: `0` hard issues in the final automated QA matrix.
  - Checks covered body horizontal overflow, clipped product cards, header brand clipping, camera/image-search trigger presence, mobile menu trigger presence, footer social layout and WhatsApp overlap.
  - `mobile-v2-audit.md` was generated with page-by-page Fixed / Remaining Issues / Shared Component Problems.
  - `aurora-mobile-v2-screenshots.zip` was generated for local review.
- Limitation:
  - Automated QA used local Edge / Chromium with an iPhone Safari user agent. Real iPhone Safari, WeChat WebView and ChatGPT in-app browser should still be spot-checked after GitHub Pages cache refresh.
- Rollback point:
  - To return to the previous version, revert the Mobile Design System V2 commit.

### 2026-08-10 - Mobile Homepage Premium Visual Refinement

- Source folder: `2026-06-26_filter-simple-consult-icon-preview`
- Files changed:
  - `assets/css/aurora-mobile-v2-final.css`
  - Matching WordPress theme CSS: `wordpress-theme/aurora-bag-supply/assets/css/aurora-mobile-v2-final.css`
  - Static HTML cache-busting query strings
  - WordPress theme asset version in `functions.php`
  - `tools/mobile-home-premium-qa.mjs`
  - `mobile-premium-refinement-audit.md`
  - `screenshots/mobile-premium-refinement/`
- Page area:
  - Mobile homepage only. Desktop layout and product/search/quote/language logic were not changed.
- Changes:
  - Added a mobile-only premium refinement layer after V2 to strengthen the homepage visual hierarchy without restructuring the page.
  - Refined mobile header sizing, keeping `Aurora Bag Supply` visible across `320` to `430` px widths while preserving the two-row header/search structure.
  - Reworked the hero into a stronger product-first brand module with larger headline, lighter secondary copy, one primary CTA and one text-link CTA.
  - Converted the trust row into a lighter `Why Aurora` value block with restrained spacing and subtle dividers.
  - Enlarged and simplified category cards, fixed the category arrow rendering, unified image backgrounds and made the full card feel like a product entry.
  - Refined the dark procurement/capabilities section so capability titles carry the visual weight instead of boxed list styling.
  - Separated homepage product presentation patterns: Featured uses a larger horizontal showcase, New Arrivals uses a compact carousel, Best Sellers uses a 2-column simplified grid.
  - Reduced repeated brown CTA weight on homepage product cards; New/Best now use lighter `View Details` actions while Featured keeps a single primary quote action.
  - Lightened the brand story, production help, newsletter and footer-home transitions with fewer borders, shadows and heavy cards.
  - Updated static cache-busting query strings to `20260810-premium-home-v1`.
  - Updated the WordPress theme asset version to `1.0.83-preview`.
- Verification:
  - `node --check` passed for `assets/js/aurora-commerce.js`.
  - Automated homepage responsive QA covered widths `320`, `375`, `390`, `393`, `414`, `430`.
  - Result: no body horizontal overflow, no ordinary product-grid overflow, no header brand clipping.
  - Generated before/after and 390px mobile screenshots in `screenshots/mobile-premium-refinement/`.
  - `mobile-premium-refinement-audit.md` records the automated QA matrix.
- Limitation:
  - Automated QA used local Edge / Chromium with mobile viewport simulation. Real iPhone Safari, WeChat WebView and ChatGPT in-app browser should still be spot-checked after GitHub Pages cache refresh.

### 2026-08-11 - Mobile New Arrivals Carousel Width Fix

- Source folder: `2026-06-26_filter-simple-consult-icon-preview`
- Files changed:
  - `assets/css/aurora-mobile-v2-final.css`
  - Matching WordPress theme CSS: `wordpress-theme/aurora-bag-supply/assets/css/aurora-mobile-v2-final.css`
  - Static HTML cache-busting query strings
  - WordPress theme asset version in `functions.php`
  - `screenshots/mobile-premium-refinement/new-arrivals-carousel-fix-390.jpg`
- Page area:
  - Mobile homepage `New Arrivals` product carousel only. Desktop layout and product/search/quote/language logic were not changed.
- Changes:
  - Fixed the carousel width calculation that made the second product card appear as hard-cut content in iPhone-style mobile viewports.
  - Removed right padding from the carousel track so flex percentage widths are calculated from the real viewport container width.
  - Changed New Arrivals mobile cards to a stable single-card carousel: current card is complete, next card only peeks as a narrow edge.
  - Kept scroll-snap behavior and preserved the existing product data and `View Details` links.
  - Updated static cache-busting query strings to `20260810-premium-home-v2`.
  - Updated the WordPress theme asset version to `1.0.84-preview`.
- Verification:
  - Tested rendered widths `320`, `375`, `390`, `393`, `414`, `430`.
  - Result: no body horizontal overflow, no New Arrivals section overflow, current card is fully inside the viewport, title and `View Details` stay inside the card.
  - Right-side next-card peek is constrained to about `10px` across tested widths, avoiding cut-off second-card text.
  - `tools/mobile-home-premium-qa.mjs` completed successfully.
  - Generated `screenshots/mobile-premium-refinement/new-arrivals-carousel-fix-390.jpg` for review.
- Limitation:
  - Automated QA used local Edge / Chromium mobile viewport simulation. Real iPhone Safari should still be refreshed and spot-checked after GitHub Pages cache updates.

### 2026-08-11 - Mobile Category Grid Scale Increase

- Source folder: `2026-06-26_filter-simple-consult-icon-preview`
- Files changed:
  - `assets/css/aurora-mobile-v2-final.css`
  - Matching WordPress theme CSS: `wordpress-theme/aurora-bag-supply/assets/css/aurora-mobile-v2-final.css`
  - Static HTML cache-busting query strings
  - WordPress theme asset version in `functions.php`
  - `screenshots/mobile-premium-refinement/category-grid-scale-390.jpg`
- Page area:
  - Mobile homepage `Shop by Category` six-category grid only. Desktop layout and product/category link logic were not changed.
- Changes:
  - Increased the visual screen share of the six category entries by expanding the mobile category grid width within the viewport.
  - Reduced column gap and category image internal padding so Bag / Hardware / Leather / Zipper / Accessories / Tools images read larger.
  - Preserved the existing two-column layout, category names, arrows and click targets.
  - Updated static cache-busting query strings to `20260811-category-scale-v1`.
  - Updated the WordPress theme asset version to `1.0.85-preview`.
- Verification:
  - Tested rendered widths `320`, `375`, `390`, `393`, `414`, `430`.
  - Result: no body horizontal overflow and no category-grid overflow.
  - At `390px`, category image boxes increased to about `169px` wide.
  - `tools/mobile-home-premium-qa.mjs` completed successfully.
  - Generated `screenshots/mobile-premium-refinement/category-grid-scale-390.jpg` for review.

### 2026-08-11 - Mobile Category Grid Spacing Alignment

- Source folder: `2026-06-26_filter-simple-consult-icon-preview`
- Files changed:
  - `assets/css/aurora-mobile-v2-final.css`
  - Matching WordPress theme CSS: `wordpress-theme/aurora-bag-supply/assets/css/aurora-mobile-v2-final.css`
  - Static HTML cache-busting query strings
  - WordPress theme asset version in `functions.php`
  - `screenshots/mobile-premium-refinement/category-grid-spacing-390.jpg`
- Page area:
  - Mobile homepage `Shop by Category` six-category grid only. Desktop layout and category link logic were not changed.
- Changes:
  - Aligned the left, center and right horizontal gaps in the two-column category grid.
  - Kept the enlarged card scale from the previous pass while increasing the center column gap to match the side gutters visually.
  - Updated static cache-busting query strings to `20260811-category-spacing-v1`.
  - Updated the WordPress theme asset version to `1.0.86-preview`.
- Verification:
  - Tested rendered widths `320`, `375`, `390`, `393`, `414`, `430`.
  - At `390px`, measured gaps are `18px / 18px / 18px` for left / center / right.
  - Result: no body horizontal overflow.
  - Generated `screenshots/mobile-premium-refinement/category-grid-spacing-390.jpg` for review.

### 2026-08-11 - Mobile Featured Products Center Loop Carousel

- Source folder: `2026-06-26_filter-simple-consult-icon-preview`
- Files changed:
  - `assets/js/aurora-commerce.js`
  - `assets/css/aurora-mobile-v2-final.css`
  - Matching WordPress theme JS/CSS under `wordpress-theme/aurora-bag-supply/assets/`
  - Static HTML cache-busting query strings
  - WordPress theme asset version in `functions.php`
  - `screenshots/mobile-premium-refinement/featured-loop-carousel-390.jpg`
- Page area:
  - Mobile homepage `Featured Products` carousel only. Desktop layout and product/search/quote/language logic were not changed.
- Changes:
  - Rebuilt the mobile Featured Products area as a centered carousel with the active product in the middle.
  - Added a looping product sequence so users can keep swiping left or right without reaching an empty end.
  - Adjusted mobile card width to `62vw` with `max-width: 280px`, so adjacent product cards are visible on both sides.
  - Removed inherited carousel padding that previously reduced the real viewport and caused a hard-cut look.
  - Added loop-normalization handling that temporarily disables scroll snap while jumping between repeated product sets.
  - Updated static cache-busting query strings to `20260811-featured-loop-v2`.
  - Updated the WordPress theme asset version to `1.0.88-preview`.
- Verification:
  - `node --check` passed for both static and WordPress theme `aurora-commerce.js`.
  - Tested rendered widths `320`, `375`, `390`, `393`, `414`, `430`.
  - At `390px`, active card center delta is `0`, side peeks are `56px / 56px`, card width is `242px`, and body horizontal overflow is `false`.
  - Generated `screenshots/mobile-premium-refinement/featured-loop-carousel-390.jpg` for review.

### 2026-08-11 - Mobile Best Sellers Product Card Scale

- Source folder: `2026-06-26_filter-simple-consult-icon-preview`
- Files changed:
  - `assets/css/aurora-mobile-v2-final.css`
  - Matching WordPress theme CSS: `wordpress-theme/aurora-bag-supply/assets/css/aurora-mobile-v2-final.css`
  - Static HTML cache-busting query strings
  - WordPress theme asset version in `functions.php`
  - `screenshots/mobile-premium-refinement/best-sellers-card-scale-390.jpg`
- Page area:
  - Mobile homepage `Best Sellers` product grid only. Desktop layout and product/detail/quote/search/language logic were not changed.
- Changes:
  - Increased Best Sellers product image area and reduced image padding so products read larger.
  - Hid the long material summary in this homepage block to reduce card height and visual density.
  - Removed inherited flex stretching from Best Sellers cards so `View Details` follows the MOQ instead of being pushed to the bottom.
  - Kept the two-column grid and existing `View Details` links.
  - Updated static cache-busting query strings to `20260811-best-card-scale-v4`.
  - Updated the WordPress theme asset version to `1.0.92-preview`.
- Verification:
  - Tested rendered widths `320`, `375`, `390`, `393`, `414`, `430`.
  - Result: no body horizontal overflow; Best Sellers cards stay within the viewport.
  - At `390px`, first card is about `146px x 268px`, image area is about `163px` high, and image share is about `61%`.
  - Generated `screenshots/mobile-premium-refinement/best-sellers-card-scale-390.jpg` for review.

### 2026-08-11 - Mobile Best Sellers Premium Card Redesign

- Source folder: `2026-06-26_filter-simple-consult-icon-preview`
- Files changed:
  - `assets/css/aurora-mobile-v2-final.css`
  - Matching WordPress theme CSS: `wordpress-theme/aurora-bag-supply/assets/css/aurora-mobile-v2-final.css`
  - Static homepage cache-busting query strings
  - WordPress theme asset version in `functions.php`
  - `screenshots/mobile-premium-refinement/best-sellers-redesign-390.jpg`
- Page area:
  - Mobile homepage `Best Sellers` / `热销产品` block only. Desktop layout and product/detail/quote/search/language logic were not changed.
- Changes:
  - Reworked Best Sellers from separated image/text pieces into complete unified product cards.
  - Added a cleaner white card body under a soft neutral image area.
  - Reduced visual fragmentation by removing transparent card bodies and restoring one coherent rounded card surface.
  - Kept the two-column layout, product names, MOQ and `View Details` links.
  - Added extra mobile bottom safe spacing for this section so browser bars and floating buttons are less likely to cover the final row.
  - Updated static cache-busting query strings to `20260811-best-seller-premium-v1`.
  - Updated the WordPress theme asset version to `1.0.93-preview`.
- Verification:
  - Ran a 390px mobile layout check with Edge DevTools protocol.
  - Result: no body horizontal overflow; Best Sellers cards stay within the viewport.
  - At the tested viewport, the grid kept two equal columns and four visible product cards.

### 2026-08-11 - Mobile Best Sellers Premium Card Redesign v2

- Source folder: `2026-06-26_filter-simple-consult-icon-preview`
- Files changed:
  - `assets/css/aurora-mobile-v2-final.css`
  - `assets/js/aurora-commerce.js`
  - Matching WordPress theme CSS/JS under `wordpress-theme/aurora-bag-supply/assets/`
  - Static homepage cache-busting query strings
  - WordPress theme asset version in `functions.php`
- Page area:
  - Mobile homepage `Best Sellers` / `热销产品` block only. Desktop layout and shared product data were not changed.
- Changes:
  - Removed the homepage `Add to Quote` button from Best Sellers cards so this area reads as a curated product showcase instead of a dense catalog.
  - Changed Best Sellers into integrated premium tiles with one continuous card surface, larger product imagery, softer neutral image background, and lighter text hierarchy.
  - Hid SKU/category chips and long material summaries in this homepage block; retained product name, MOQ, and `View Details`.
  - Increased section breathing room and updated cache-busting to `20260811-best-seller-premium-v2`.
  - Updated the WordPress theme asset version to `1.0.94-preview`.
- Verification:
  - `node --check` passed for both static and WordPress theme `aurora-commerce.js`.
