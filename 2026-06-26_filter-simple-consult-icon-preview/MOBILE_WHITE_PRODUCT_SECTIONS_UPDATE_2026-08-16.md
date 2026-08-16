# Mobile White Product Sections Update

Date: 2026-08-16

## Scope

- Mobile product-led sections only.
- Desktop layout, product images, data, links, and functionality are unchanged.

## Change

- Changed the shared mobile `.section-alt` canvas from light gray to pure white.
- Changed the shared mobile product image containers to pure white as well.
- Added a higher-specificity override for the Featured Products and Best Sellers outer canvases.
- Added a final higher-specificity override for Featured, New Arrivals, Best Sellers, and Catalog product image surfaces, including the image element background.
- Bumped static and WordPress CSS cache versions again.

## Validation

- Checked the affected mobile styling at 390px.
- Confirmed the shared section and product image container backgrounds resolve to `#fff`.
