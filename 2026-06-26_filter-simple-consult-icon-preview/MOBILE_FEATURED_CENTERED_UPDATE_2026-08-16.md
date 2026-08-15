# Mobile Featured Centering Update

Date: 2026-08-16

## Scope

- Mobile Featured Products carousel only.
- Desktop layout, product data, links, and carousel behavior are unchanged.

## Change

- Explicitly cleared inline scroll-snap padding on the shared Featured Products viewport.
- Bumped static and WordPress CSS cache versions so mobile browsers load the centered rule.

## Validation

- Checked the 390px mobile preview.
- Featured card center offset remains below 1px.
- Product title, metadata, MOQ, and `View Details` stay inside the card.
- Page width matches the viewport with no horizontal overflow.
