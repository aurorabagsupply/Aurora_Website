# Mobile New Arrivals Update - 2026-08-15

## Scope

- Mobile New Arrivals carousel only.
- Desktop layout and other product sections are unchanged.

## Changes

- Removed the fixed right-side preview sliver by making each mobile card fill the carousel viewport.
- Added seamless looping on mobile so automatic movement does not end with an abrupt empty edge.
- Slowed automatic advancement to one smooth move every 5.6 seconds.
- Kept touch/swipe navigation and pause-on-interaction behavior.
- Disabled autoplay when reduced motion is requested.
- Synchronized the static preview and WordPress theme assets.

## Rollback

Revert this update's commit to restore the previous 24px next-card preview.
