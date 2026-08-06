# Aurora Bag Supply - Hero Filter Overlay Fix Preview

Version folder: `2026-06-26_hero-filter-overlay-fix-preview`
Baseline: `2026-06-26_mega-menu-language-animation-preview`

## Purpose

This version restores the home Hero images, changes the Mega Menu backdrop from blur to a clean white overlay, and refines the catalog filter sidebar so buyers click text rows instead of visible checkbox boxes.

## Key Updates

- Restored missing `assets/hero/*.png` and `wordpress-theme/aurora-bag-supply/assets/hero/*.png`.
- Restored catalog product images to keep static catalog cards visible.
- Added explicit Hero image visibility guard: `.hero-cover__slide img` keeps `opacity: 1` and `visibility: visible`.
- Changed `.aurora-mega-backdrop` to `background: rgba(255, 255, 255, 0.96)`.
- Removed Mega Menu backdrop blur by setting `backdrop-filter: none` and `-webkit-backdrop-filter: none`.
- Kept Mega Menu panel, hover/focus behavior, links and CTA behavior unchanged.
- Hid filter checkbox inputs with visually hidden CSS instead of `display: none`.
- Converted filter labels to full-row clickable options with text/count alignment.
- Added selected filter styling using warm background, brass left line, stronger text, and highlighted count.
- Added `aurora-filter-option`, `aurora-filter-label`, `aurora-filter-count`, and `.is-selected` support.
- Synced static preview CSS/JS to the WordPress theme assets.
- Theme resource version updated to `1.0.56-preview`.

## Modified Files

- `assets/css/aurora-commerce.css`
- `assets/js/aurora-commerce.js`
- `wordpress-theme/aurora-bag-supply/assets/css/aurora-commerce.css`
- `wordpress-theme/aurora-bag-supply/assets/js/aurora-commerce.js`
- `wordpress-theme/aurora-bag-supply/functions.php`
- `wordpress-theme/aurora-bag-supply/style.css`

## Verification

- Ran `node --check assets/js/aurora-commerce.js`.
- Confirmed static and WordPress CSS files match.
- Confirmed static and WordPress JS files match.
- Confirmed no `backdrop-filter: blur(...)` remains in the new version CSS.
- Confirmed home Hero active image loads from `assets/hero/Bag.png`, natural size `1672x941`, rendered size about `1350x760`, opacity `1`.
- Confirmed Mega Menu backdrop is `rgba(255, 255, 255, 0.96)`, `backdrop-filter: none`, and `pointer-events: none`.
- Confirmed filter input remains in DOM, is visually hidden at `1px` with `clip-path: inset(50%)`, and label click toggles checked state.
- Confirmed selected filter state uses `.is-selected`, warm background, `14px` font size, and stronger brand color.
- Generated visual screenshots:
  - `verification-home-normal.png`
  - `verification-home.png`
  - `verification-products.png`

## Local Preview

Open these files directly:

- `index.html`
- `products.html`

Checks:
- Home Hero image should be clearly visible when Mega Menu is closed.
- Hover a Mega Menu item; the page beneath should become clean white, not blurred.
- On `products.html`, checkbox boxes should not be visible.
- Click a filter text row; it should select, highlight and update products.
- Click the same row again; it should clear the selection.

## WordPress Upload

Upload the generated theme ZIP from this folder through WordPress Admin / Appearance / Themes / Add New / Upload Theme.
