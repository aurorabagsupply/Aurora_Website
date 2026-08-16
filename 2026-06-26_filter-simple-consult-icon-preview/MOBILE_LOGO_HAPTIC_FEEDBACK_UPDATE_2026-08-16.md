# Mobile Logo Haptic Feedback Update

Date: 2026-08-16

## Scope

- Added a short mobile Logo press response without changing the existing home link.
- Uses the browser vibration API when available and a 120ms scale feedback fallback.
- Respects `prefers-reduced-motion` and mirrors the change in the WordPress theme.
- Added a restrained mobile 3D tilt effect driven by device orientation when available.
- iPhone Safari requests motion permission from the Logo touch; pointer movement remains a fallback.
- Compressed the mobile navigation row by reducing its vertical padding and icon containers by about one quarter.
- Mirrored the header height refinement in the WordPress theme without changing desktop styles or header interactions.
- Applied a second quarter reduction to the mobile navigation row, with smaller icon containers and matching menu-line spacing.
- Simplified the mobile menu mark to two centered lines by removing the inherited third-line box shadow.
- Reduced the mobile frosted header white opacity so Hero imagery shows through more softly while retaining the blur effect.
- Centered the mobile search, quote and menu icons on one vertical alignment line by removing the quote icon offset and normalizing the final icon containers.
- Shortened and lightened the mobile two-line menu mark to match the compact reference shape.
- Tightened the vertical spacing between the two mobile menu lines so they sit closer together.
- Applied the compact two-line menu treatment to the actual `.mobile-menu` button as well as the dynamically moved mobile action button, preventing the old wide spacing from returning.
- Added a centered lowercase `aolola` mobile wordmark with a subtle frosted-glass treatment between the logo and navigation actions; it fades while the search overlay is open.

## Note

iPhone Safari does not expose the keyboard-level Taptic Engine to ordinary web pages. On iPhone, the visual press response is therefore the reliable fallback; browsers that expose `navigator.vibrate` also receive a short 10ms vibration request.
