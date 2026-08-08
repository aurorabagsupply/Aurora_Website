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
