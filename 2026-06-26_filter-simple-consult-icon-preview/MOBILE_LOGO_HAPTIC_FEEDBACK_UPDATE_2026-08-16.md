# Mobile Logo Haptic Feedback Update

Date: 2026-08-16

## Scope

- Added a short mobile Logo press response without changing the existing home link.
- Uses the browser vibration API when available and a 120ms scale feedback fallback.
- Respects `prefers-reduced-motion` and mirrors the change in the WordPress theme.

## Note

iPhone Safari does not expose the keyboard-level Taptic Engine to ordinary web pages. On iPhone, the visual press response is therefore the reliable fallback; browsers that expose `navigator.vibrate` also receive a short 10ms vibration request.
