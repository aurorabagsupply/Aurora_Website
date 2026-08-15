# Mobile Featured Products Match Update

Date: 2026-08-15

## Scope

- Mobile only (`max-width: 760px`).
- Updated the shared Featured Products card styling.
- Preserved desktop layout, product data, links, and carousel behavior.

## Changes

- Matched Featured Products to the compact New Arrivals card rhythm.
- Kept the large square product image centered and fully visible.
- Unified white card surface, 18px radius, image padding, and body spacing.
- Reduced title and metadata sizing to prevent clipping.
- Centered the `View Details` action inside the card.
- Updated static and WordPress theme styles together.
- Bumped static and WordPress CSS cache versions.

## Validation

- Checked the mobile layout at the 390px test viewport.
- Product image center offset: less than 1px.
- Product image, title, material, MOQ, and `View Details` remain inside the card.
- Document width equals viewport width; no horizontal page overflow.
- Static preview and WordPress theme CSS files have matching SHA-256 hashes.
