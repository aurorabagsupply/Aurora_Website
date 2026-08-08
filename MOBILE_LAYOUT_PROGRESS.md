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
