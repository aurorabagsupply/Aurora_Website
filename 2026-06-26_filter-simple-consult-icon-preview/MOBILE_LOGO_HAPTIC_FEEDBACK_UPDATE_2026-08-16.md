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

## Note

iPhone Safari does not expose the keyboard-level Taptic Engine to ordinary web pages. On iPhone, the visual press response is therefore the reliable fallback; browsers that expose `navigator.vibrate` also receive a short 10ms vibration request.
