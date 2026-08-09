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

- Commit: `058bed0`
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
  - Updated hero primary action text to `View + category` / `查看 + 分类`; destinations remain unchanged.
  - Reduced the hero viewport height and moved carousel dots to about `30px` above the image bottom.
  - Reduced carousel dot size and softened inactive dot contrast.
  - Preserved the product image and carousel logic while making text and image read as one visual module.
  - Simplified the trust row rhythm with text blocks and fine separators.
  - Reduced the WhatsApp floating button to `50px` with a lighter color and shadow.
  - Added new static asset cache-busting query strings.
  - Updated the WordPress theme asset version to `1.0.69-preview`.
- Verification:
  - Mobile viewport `390 x 844`: passed.
  - Header height: `117px`; search height: `56px`.
  - Language button: `中文` stayed on one line.
  - Hero title `工坊与打样支持`: `31px`, weight `690`.
  - Hero action text: `查看工具`, `获取报价`.
  - Carousel dot size: `6px`; dots positioned about `30px` from hero bottom.
  - WhatsApp floating button: `50 x 50`.
  - Category cards remained square, light-gray and static-title on mobile.
  - Static CSS/JS and WordPress theme CSS/JS hash matched.
- Rollback point:
  - To return to the previous version, revert commit `058bed0`.
