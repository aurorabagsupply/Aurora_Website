# Aurora Mobile Design System V2 Audit

Date: 2026-08-10
Viewport screenshots: 390 x 844
Responsive QA widths: 320, 375, 390, 393, 414, 430

## Scope

- Checked mobile UI consistency across homepage, catalog/category/search pages, representative product details, Search by Image modal, cart, checkout, account, about, contact, blog, FAQ, shipping, returns, privacy and terms pages.
- The pass uses a mobile-only CSS layer. Desktop CSS and desktop layout rules were not intentionally changed.

## Shared Components Updated

- Fixed: MobileHeader now uses one stable hamburger / logo / Aurora Bag Supply / language row, with search isolated on row two.
- Fixed: ProductCard now uses reduced information density, unified image safe area, compact MOQ and View Details / Add to Quote hierarchy.
- Fixed: Home product modules now use distinct shared layouts for Featured, New Arrivals and Best Sellers.
- Fixed: ProductDetail now uses one shared gallery/specification/CTA/tab template across Bag, Hardware, Leather, Zipper, Accessories and Tools.
- Fixed: Account, Checkout, Contact, FAQ, Footer, Search by Image and WhatsApp all receive shared mobile V2 enhancements.
- Fixed: Desktop CSS remains protected because all visual overrides are mobile breakpoint scoped.

## Automated Findings

- Screenshot pages: 30
- Responsive QA runs: 60
- Blocking issues detected: 0

- None detected by automated checks.

## Page Results

### Home
- URL: http://127.0.0.1:4179/index.html
- Screenshot: screenshots/mobile-v2/01-home.png
- Fixed: mobile header/search/image-search entry/footer/WhatsApp/product spacing use the shared Mobile Design System V2 layer where the page has those components.
- Remaining Issues: None detected in automated viewport checks.
- Shared Component Problems: None detected for shared header/search/footer at 390px.

### Mobile Menu
- URL: http://127.0.0.1:4179/index.html
- Screenshot: screenshots/mobile-v2/02-mobile-menu.png
- Fixed: mobile header/search/image-search entry/footer/WhatsApp/product spacing use the shared Mobile Design System V2 layer where the page has those components.
- Remaining Issues: None detected in automated viewport checks.
- Shared Component Problems: None detected for shared header/search/footer at 390px.

### Catalog
- URL: http://127.0.0.1:4179/products.html
- Screenshot: screenshots/mobile-v2/03-catalog.png
- Fixed: mobile header/search/image-search entry/footer/WhatsApp/product spacing use the shared Mobile Design System V2 layer where the page has those components.
- Remaining Issues: None detected in automated viewport checks.
- Shared Component Problems: None detected for shared header/search/footer at 390px.

### Category Bag
- URL: http://127.0.0.1:4179/products.html?category=Bag
- Screenshot: screenshots/mobile-v2/04-category-bag.png
- Fixed: mobile header/search/image-search entry/footer/WhatsApp/product spacing use the shared Mobile Design System V2 layer where the page has those components.
- Remaining Issues: None detected in automated viewport checks.
- Shared Component Problems: None detected for shared header/search/footer at 390px.

### Category Hardware
- URL: http://127.0.0.1:4179/products.html?category=Hardware
- Screenshot: screenshots/mobile-v2/05-category-hardware.png
- Fixed: mobile header/search/image-search entry/footer/WhatsApp/product spacing use the shared Mobile Design System V2 layer where the page has those components.
- Remaining Issues: None detected in automated viewport checks.
- Shared Component Problems: None detected for shared header/search/footer at 390px.

### Category Leather
- URL: http://127.0.0.1:4179/products.html?category=Leather
- Screenshot: screenshots/mobile-v2/06-category-leather.png
- Fixed: mobile header/search/image-search entry/footer/WhatsApp/product spacing use the shared Mobile Design System V2 layer where the page has those components.
- Remaining Issues: None detected in automated viewport checks.
- Shared Component Problems: None detected for shared header/search/footer at 390px.

### Category Zipper
- URL: http://127.0.0.1:4179/products.html?category=Zipper
- Screenshot: screenshots/mobile-v2/07-category-zipper.png
- Fixed: mobile header/search/image-search entry/footer/WhatsApp/product spacing use the shared Mobile Design System V2 layer where the page has those components.
- Remaining Issues: None detected in automated viewport checks.
- Shared Component Problems: None detected for shared header/search/footer at 390px.

### Category Accessories
- URL: http://127.0.0.1:4179/products.html?category=Accessories
- Screenshot: screenshots/mobile-v2/08-category-accessories.png
- Fixed: mobile header/search/image-search entry/footer/WhatsApp/product spacing use the shared Mobile Design System V2 layer where the page has those components.
- Remaining Issues: None detected in automated viewport checks.
- Shared Component Problems: None detected for shared header/search/footer at 390px.

### Category Tools
- URL: http://127.0.0.1:4179/products.html?category=Tools
- Screenshot: screenshots/mobile-v2/09-category-tools.png
- Fixed: mobile header/search/image-search entry/footer/WhatsApp/product spacing use the shared Mobile Design System V2 layer where the page has those components.
- Remaining Issues: None detected in automated viewport checks.
- Shared Component Problems: None detected for shared header/search/footer at 390px.

### Search Zipper
- URL: http://127.0.0.1:4179/products.html?q=zipper
- Screenshot: screenshots/mobile-v2/10-search-zipper.png
- Fixed: mobile header/search/image-search entry/footer/WhatsApp/product spacing use the shared Mobile Design System V2 layer where the page has those components.
- Remaining Issues: None detected in automated viewport checks.
- Shared Component Problems: None detected for shared header/search/footer at 390px.

### Search Hardware
- URL: http://127.0.0.1:4179/products.html?q=hardware
- Screenshot: screenshots/mobile-v2/11-search-hardware.png
- Fixed: mobile header/search/image-search entry/footer/WhatsApp/product spacing use the shared Mobile Design System V2 layer where the page has those components.
- Remaining Issues: None detected in automated viewport checks.
- Shared Component Problems: None detected for shared header/search/footer at 390px.

### Image Search Modal
- URL: http://127.0.0.1:4179/index.html
- Screenshot: screenshots/mobile-v2/12-image-search-modal.png
- Fixed: mobile header/search/image-search entry/footer/WhatsApp/product spacing use the shared Mobile Design System V2 layer where the page has those components.
- Remaining Issues: None detected in automated viewport checks.
- Shared Component Problems: None detected for shared header/search/footer at 390px.

### Quote Contact Prefill
- URL: http://127.0.0.1:4179/contact.html?sku=ABS-HDW-001&product=Hardware%20Product%2001
- Screenshot: screenshots/mobile-v2/13-quote-contact-prefill.png
- Fixed: mobile header/search/image-search entry/footer/WhatsApp/product spacing use the shared Mobile Design System V2 layer where the page has those components.
- Remaining Issues: None detected in automated viewport checks.
- Shared Component Problems: None detected for shared header/search/footer at 390px.

### Product Bag
- URL: http://127.0.0.1:4179/product-detail.html?sku=ABS-BAG-001
- Screenshot: screenshots/mobile-v2/14-product-bag.png
- Fixed: mobile header/search/image-search entry/footer/WhatsApp/product spacing use the shared Mobile Design System V2 layer where the page has those components.
- Remaining Issues: None detected in automated viewport checks.
- Shared Component Problems: None detected for shared header/search/footer at 390px.

### Product Hardware
- URL: http://127.0.0.1:4179/product-detail.html?sku=ABS-HDW-001
- Screenshot: screenshots/mobile-v2/15-product-hardware.png
- Fixed: mobile header/search/image-search entry/footer/WhatsApp/product spacing use the shared Mobile Design System V2 layer where the page has those components.
- Remaining Issues: None detected in automated viewport checks.
- Shared Component Problems: None detected for shared header/search/footer at 390px.

### Product Leather
- URL: http://127.0.0.1:4179/product-detail.html?sku=ABS-LTH-001
- Screenshot: screenshots/mobile-v2/16-product-leather.png
- Fixed: mobile header/search/image-search entry/footer/WhatsApp/product spacing use the shared Mobile Design System V2 layer where the page has those components.
- Remaining Issues: None detected in automated viewport checks.
- Shared Component Problems: None detected for shared header/search/footer at 390px.

### Product Zipper
- URL: http://127.0.0.1:4179/product-detail.html?sku=ABS-ZIP-001
- Screenshot: screenshots/mobile-v2/17-product-zipper.png
- Fixed: mobile header/search/image-search entry/footer/WhatsApp/product spacing use the shared Mobile Design System V2 layer where the page has those components.
- Remaining Issues: None detected in automated viewport checks.
- Shared Component Problems: None detected for shared header/search/footer at 390px.

### Product Accessories
- URL: http://127.0.0.1:4179/product-detail.html?sku=ABS-ACC-001
- Screenshot: screenshots/mobile-v2/18-product-accessories.png
- Fixed: mobile header/search/image-search entry/footer/WhatsApp/product spacing use the shared Mobile Design System V2 layer where the page has those components.
- Remaining Issues: None detected in automated viewport checks.
- Shared Component Problems: None detected for shared header/search/footer at 390px.

### Product Tools
- URL: http://127.0.0.1:4179/product-detail.html?sku=ABS-TLS-001
- Screenshot: screenshots/mobile-v2/19-product-tools.png
- Fixed: mobile header/search/image-search entry/footer/WhatsApp/product spacing use the shared Mobile Design System V2 layer where the page has those components.
- Remaining Issues: None detected in automated viewport checks.
- Shared Component Problems: None detected for shared header/search/footer at 390px.

### Cart
- URL: http://127.0.0.1:4179/cart.html
- Screenshot: screenshots/mobile-v2/20-cart.png
- Fixed: mobile header/search/image-search entry/footer/WhatsApp/product spacing use the shared Mobile Design System V2 layer where the page has those components.
- Remaining Issues: None detected in automated viewport checks.
- Shared Component Problems: None detected for shared header/search/footer at 390px.

### Checkout
- URL: http://127.0.0.1:4179/checkout.html
- Screenshot: screenshots/mobile-v2/21-checkout.png
- Fixed: mobile header/search/image-search entry/footer/WhatsApp/product spacing use the shared Mobile Design System V2 layer where the page has those components.
- Remaining Issues: None detected in automated viewport checks.
- Shared Component Problems: None detected for shared header/search/footer at 390px.

### Account
- URL: http://127.0.0.1:4179/account.html
- Screenshot: screenshots/mobile-v2/22-account.png
- Fixed: mobile header/search/image-search entry/footer/WhatsApp/product spacing use the shared Mobile Design System V2 layer where the page has those components.
- Remaining Issues: None detected in automated viewport checks.
- Shared Component Problems: None detected for shared header/search/footer at 390px.

### About
- URL: http://127.0.0.1:4179/about.html
- Screenshot: screenshots/mobile-v2/23-about.png
- Fixed: mobile header/search/image-search entry/footer/WhatsApp/product spacing use the shared Mobile Design System V2 layer where the page has those components.
- Remaining Issues: None detected in automated viewport checks.
- Shared Component Problems: None detected for shared header/search/footer at 390px.

### Contact
- URL: http://127.0.0.1:4179/contact.html
- Screenshot: screenshots/mobile-v2/24-contact.png
- Fixed: mobile header/search/image-search entry/footer/WhatsApp/product spacing use the shared Mobile Design System V2 layer where the page has those components.
- Remaining Issues: None detected in automated viewport checks.
- Shared Component Problems: None detected for shared header/search/footer at 390px.

### Blog
- URL: http://127.0.0.1:4179/blog.html
- Screenshot: screenshots/mobile-v2/25-blog.png
- Fixed: mobile header/search/image-search entry/footer/WhatsApp/product spacing use the shared Mobile Design System V2 layer where the page has those components.
- Remaining Issues: None detected in automated viewport checks.
- Shared Component Problems: None detected for shared header/search/footer at 390px.

### Faq
- URL: http://127.0.0.1:4179/faq.html
- Screenshot: screenshots/mobile-v2/26-faq.png
- Fixed: mobile header/search/image-search entry/footer/WhatsApp/product spacing use the shared Mobile Design System V2 layer where the page has those components.
- Remaining Issues: None detected in automated viewport checks.
- Shared Component Problems: None detected for shared header/search/footer at 390px.

### Shipping
- URL: http://127.0.0.1:4179/shipping.html
- Screenshot: screenshots/mobile-v2/27-shipping.png
- Fixed: mobile header/search/image-search entry/footer/WhatsApp/product spacing use the shared Mobile Design System V2 layer where the page has those components.
- Remaining Issues: None detected in automated viewport checks.
- Shared Component Problems: None detected for shared header/search/footer at 390px.

### Returns
- URL: http://127.0.0.1:4179/returns.html
- Screenshot: screenshots/mobile-v2/28-returns.png
- Fixed: mobile header/search/image-search entry/footer/WhatsApp/product spacing use the shared Mobile Design System V2 layer where the page has those components.
- Remaining Issues: None detected in automated viewport checks.
- Shared Component Problems: None detected for shared header/search/footer at 390px.

### Privacy Policy
- URL: http://127.0.0.1:4179/privacy-policy.html
- Screenshot: screenshots/mobile-v2/29-privacy-policy.png
- Fixed: mobile header/search/image-search entry/footer/WhatsApp/product spacing use the shared Mobile Design System V2 layer where the page has those components.
- Remaining Issues: None detected in automated viewport checks.
- Shared Component Problems: None detected for shared header/search/footer at 390px.

### Terms Of Service
- URL: http://127.0.0.1:4179/terms-of-service.html
- Screenshot: screenshots/mobile-v2/30-terms-of-service.png
- Fixed: mobile header/search/image-search entry/footer/WhatsApp/product spacing use the shared Mobile Design System V2 layer where the page has those components.
- Remaining Issues: None detected in automated viewport checks.
- Shared Component Problems: None detected for shared header/search/footer at 390px.

## Representative Product Templates

- Bag: product-detail.html?sku=ABS-BAG-001
- Hardware: product-detail.html?sku=ABS-HDW-001
- Leather: product-detail.html?sku=ABS-LTH-001
- Zipper: product-detail.html?sku=ABS-ZIP-001
- Accessories: product-detail.html?sku=ABS-ACC-001
- Tools: product-detail.html?sku=ABS-TLS-001

## Notes

- Automated screenshots use local Chromium/Edge emulation with an iPhone Safari user agent. Real iPhone Safari and WeChat WebView should still be spot-checked after GitHub Pages cache refresh.
- Image Search backend availability depends on the deployed WordPress/serverless endpoint. This audit checks the UI shell and trigger availability, not the production visual embedding API.
