# Aurora Bag Supply Project Rules

## Project positioning
Aurora Bag Supply is a B2B inquiry and quotation website for overseas customers. The site sells and sources bag hardware, leather materials, zippers, accessories, tools and custom bag components. It is not a retail-only website.

## Language synchronization rule
This project supports multiple languages. Whenever modifying any visible text, layout section, navigation item, footer item, product card, product filter, Mega Menu, CTA button, form label, policy page, support page or WooCommerce-related display, always check language synchronization.

Rules:
1. Do not update only one language version.
2. If Chinese text is changed, update the corresponding English text.
3. If English text is changed, update the corresponding Chinese text.
4. Navigation labels, Mega Menu labels, product filter labels, footer links, CTA buttons and support page headings must stay consistent across languages.
5. Product category names must not conflict between languages.
6. Do not leave mixed-language placeholders such as "后续内容", "Coming soon", "Lorem ipsum", "Click here" unless intentionally required.
7. For B2B pages, English copy should be professional and export-oriented. Chinese copy should be clear and aligned with the English meaning.
8. Before finishing any task, run a language consistency check and report what was checked.

## Required final checklist
At the end of every task, Codex must report:
- Files changed
- Pages changed
- Chinese text checked: yes/no
- English text checked: yes/no
- Navigation language synced: yes/no
- Footer language synced: yes/no
- Mega Menu language synced: yes/no if affected
- Product filters language synced: yes/no if affected
- Buttons and CTA language synced: yes/no
- Any untranslated or mixed-language text found

## Translation style
Use these standard translations:
- 首页 = Home
- 包袋 = Bags
- 五金 = Hardware
- 皮革 = Leather
- 拉链 = Zippers
- 配件 = Accessories
- 工具 = Tools
- 联系我们 = Contact Us
- 关于我们 = About Us
- 获取报价 = Request a Quote
- 询价清单 = Inquiry List
- 在线咨询 = WhatsApp Inquiry / Chat on WhatsApp
- 运输 = Shipping
- 退换货 = Returns
- 隐私政策 = Privacy Policy
- 服务条款 = Terms of Service
- 博客 = Blog
- 生产标准 = Production Standards
- 定制服务 = Custom Service

## Do not break
Do not break the current header, footer, product category pages, WooCommerce structure, filter sidebar, Mega Menu, WhatsApp floating button or payment methods area.

## Mobile breakpoint and preview rule
1. Do not use an exact-width or narrow-range media query for a mobile fix, such as `width: 390px` or `375px-430px`. A real phone browser may report a different effective CSS viewport, causing a tested change to have no effect on the user's phone.
2. Reuse the project's existing mobile breakpoint, currently `@media (max-width: 760px)`, unless the user explicitly requests a different breakpoint.
3. Use 390px for the requested mobile verification, but keep the implementation on the shared mobile breakpoint so it also applies to the user's real phone viewport.
4. After every requested website change, update the relevant asset cache-busting parameter, commit and push the exact changed files to GitHub, verify that GitHub Pages serves the new asset version, and send the user a fresh mobile preview URL without waiting to be reminded.
5. Incident record (2026-08-20): mobile menu position changes were published correctly but did not appear on the user's phone because the final override was restricted to `375px-430px`. Changing the override to the shared `max-width: 760px` breakpoint resolved the mismatch.
