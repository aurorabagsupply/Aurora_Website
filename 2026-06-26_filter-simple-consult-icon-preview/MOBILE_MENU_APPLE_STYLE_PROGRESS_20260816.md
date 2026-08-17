# Mobile Menu Update

## Version

2026-08-16 - Apple-style mobile navigation

## Changes

- Replaced the mobile menu card presentation with a full-screen, near-white frosted navigation layer.
- Added a dedicated close control and locked page scrolling while the menu is open.
- Kept the existing Home, category, Quality, Contact Us, language switcher, and nested category links.
- Preserved desktop styles and existing navigation behavior outside the mobile breakpoint.

## Validation

- Checked JavaScript syntax with `node --check`.
- Checked the staged diff with `git diff --check`.
- Confirmed the published GitHub Pages HTML, CSS, and JavaScript return HTTP 200 and contain the new menu version.
- Playwright was not available in this workspace, so no automated 390px click-through screenshot was generated.

## Follow-up

2026-08-17 - Tightened mobile menu spacing, forced the menu layer above the page/header, reset its scroll position on open, and added cache-busting for the published preview.

2026-08-17 - Refined the mobile menu into a full-screen Apple-inspired list: opaque white surface, unclipped left alignment, simplified close control, hidden category chevrons, and expandable secondary links retained for functionality.
