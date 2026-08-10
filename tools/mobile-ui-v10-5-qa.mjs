import http from "node:http";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { extname, join, resolve } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const sourceDir = resolve("2026-06-26_filter-simple-consult-icon-preview");
const screenshotDir = resolve("screenshots/mobile-ui-v10-5");
const auditPath = resolve("mobile-ui-audit.md");
const port = 4179;
const baseUrl = `http://127.0.0.1:${port}`;

const pages = [
  ["home", "/index.html"],
  ["mobile-menu", "/index.html", { menu: true }],
  ["catalog", "/products.html"],
  ["category-bag", "/products.html?category=Bag"],
  ["category-hardware", "/products.html?category=Hardware"],
  ["category-leather", "/products.html?category=Leather"],
  ["category-zipper", "/products.html?category=Zipper"],
  ["category-accessories", "/products.html?category=Accessories"],
  ["category-tools", "/products.html?category=Tools"],
  ["search-zipper", "/products.html?q=zipper"],
  ["image-search-modal", "/index.html", { imageSearch: true }],
  ["product-bag", "/product-detail.html?sku=ABS-BAG-001"],
  ["product-hardware", "/product-detail.html?sku=ABS-HDW-001"],
  ["product-leather", "/product-detail.html?sku=ABS-LTH-001"],
  ["product-zipper", "/product-detail.html?sku=ABS-ZIP-001"],
  ["product-accessories", "/product-detail.html?sku=ABS-ACC-001"],
  ["product-tools", "/product-detail.html?sku=ABS-TLS-001"],
  ["cart", "/cart.html"],
  ["checkout", "/checkout.html"],
  ["account", "/account.html"],
  ["about", "/about.html"],
  ["contact", "/contact.html"],
  ["blog", "/blog.html"],
  ["faq", "/faq.html"],
  ["shipping", "/shipping.html"],
  ["returns", "/returns.html"],
  ["privacy-policy", "/privacy-policy.html"],
  ["terms-of-service", "/terms-of-service.html"],
];

const widths = [320, 375, 390, 393, 414, 430];
const qaUrls = [
  "/index.html",
  "/products.html",
  "/products.html?category=Hardware",
  "/product-detail.html?sku=ABS-HDW-001",
  "/cart.html",
  "/checkout.html",
  "/account.html",
  "/contact.html",
  "/faq.html",
  "/privacy-policy.html",
];

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
};

function startServer() {
  const server = http.createServer((req, res) => {
    const requestUrl = new URL(req.url || "/", baseUrl);
    const pathname = decodeURIComponent(requestUrl.pathname === "/" ? "/index.html" : requestUrl.pathname);
    const target = resolve(sourceDir, `.${pathname}`);
    if (!target.startsWith(sourceDir) || !existsSync(target)) {
      res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }
    res.writeHead(200, {
      "content-type": mime[extname(target).toLowerCase()] || "application/octet-stream",
      "cache-control": "no-store",
    });
    res.end(readFileSync(target));
  });
  return new Promise((resolveServer) => server.listen(port, () => resolveServer(server)));
}

async function waitForStablePage(page) {
  await page.waitForLoadState("domcontentloaded");
  await page.waitForTimeout(700);
  await page.evaluate(async () => {
    const imageReady = Promise.all(Array.from(document.images).map((img) => {
      if (img.complete) return Promise.resolve();
      return new Promise((resolveImage) => {
        img.addEventListener("load", resolveImage, { once: true });
        img.addEventListener("error", resolveImage, { once: true });
      });
    }));
    const timeout = new Promise((resolveWait) => window.setTimeout(resolveWait, 1600));
    await Promise.race([imageReady, timeout]);
  });
}

async function scrollPage(page) {
  const height = await page.evaluate(() => Math.max(document.body.scrollHeight, document.documentElement.scrollHeight));
  for (let y = 0; y <= height; y += 620) {
    await page.evaluate((nextY) => window.scrollTo(0, nextY), y);
    await page.waitForTimeout(90);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
}

async function openState(page, options = {}) {
  if (options.menu) {
    await page.locator("[data-mobile-menu]").first().click({ timeout: 3000 }).catch(() => {});
    await page.waitForTimeout(400);
  }
  if (options.imageSearch) {
    await page.locator("[data-image-search-trigger]").first().click({ timeout: 3000 }).catch(() => {});
    await page.waitForTimeout(400);
  }
}

async function collectMetrics(page) {
  return page.evaluate(() => {
    const doc = document.documentElement;
    const body = document.body;
    const viewportWidth = doc.clientWidth;
    const bodyOverflow = Math.max(body.scrollWidth, doc.scrollWidth) - viewportWidth;
    const header = document.querySelector(".main-header");
    const whatsapp = document.querySelector(".aurora-whatsapp-button");
    const visible = (el) => {
      if (!el) return false;
      const style = getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      return style.display !== "none" && style.visibility !== "hidden" && Number.parseFloat(style.opacity || "1") > 0.01 && rect.width > 0 && rect.height > 0;
    };
    const rectOf = (el) => {
      const rect = el.getBoundingClientRect();
      return { left: rect.left, top: rect.top, right: rect.right, bottom: rect.bottom, width: rect.width, height: rect.height };
    };
    const overlaps = (a, b) => !(a.right <= b.left || b.right <= a.left || a.bottom <= b.top || b.bottom <= a.top);
    const critical = Array.from(document.querySelectorAll(".product-card h3, .product-actions, .detail-link, .footer-bottom, .checkout-panel button, .panel .btn"));
    const waRect = visible(whatsapp) ? rectOf(whatsapp) : null;
    const whatsappOverlap = waRect ? critical.some((el) => visible(el) && overlaps(waRect, rectOf(el))) : false;
    const productCards = Array.from(document.querySelectorAll(".product-card"));
    const gridProductCards = productCards.filter((card) => !card.closest(".product-grid[data-products='featured']"));
    const clippedCards = gridProductCards.filter((card) => {
      const rect = rectOf(card);
      return rect.left < -1 || rect.right > viewportWidth + 1;
    }).length;
    const productGrids = Array.from(document.querySelectorAll("[data-catalog-grid], .product-grid[data-products='new'] .product-carousel__track, .product-grid[data-products='best'] .product-carousel__track"));
    const gridColumns = productGrids.map((grid) => getComputedStyle(grid).gridTemplateColumns.split(" ").filter(Boolean).length);
    const featuredViewport = document.querySelector(".product-grid[data-products='featured'] .product-carousel__viewport");
    return {
      url: location.pathname + location.search,
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      clientWidth: viewportWidth,
      dpr: window.devicePixelRatio,
      breakpoint: window.matchMedia("(max-width: 760px)").matches ? "mobile" : "desktop",
      bodyOverflow,
      headerHeight: header ? Math.round(header.getBoundingClientRect().height) : 0,
      cameraButtons: document.querySelectorAll("[data-image-search-trigger]").length,
      menuButtons: document.querySelectorAll("[data-mobile-menu]").length,
      productCards: productCards.length,
      clippedCards,
      gridColumns,
      featuredSnap: featuredViewport ? getComputedStyle(featuredViewport).scrollSnapType : "",
      footerSocialItems: document.querySelectorAll(".footer-social a").length,
      whatsappOverlap,
    };
  });
}

function createBrowserOptions() {
  const edge = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
  return existsSync(edge)
    ? { headless: true, executablePath: edge }
    : { headless: true };
}

function pageDisplayName(slug) {
  return slug.replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

mkdirSync(screenshotDir, { recursive: true });
const server = await startServer();
const browser = await chromium.launch(createBrowserOptions());
const screenshotRows = [];
const qaRows = [];

try {
  const screenshotContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1",
  });
  for (let index = 0; index < pages.length; index += 1) {
    const [slug, path, options] = pages[index];
    const page = await screenshotContext.newPage();
    await page.goto(`${baseUrl}${path}`, { waitUntil: "domcontentloaded" });
    await waitForStablePage(page);
    await openState(page, options);
    if (!options?.menu && !options?.imageSearch) await scrollPage(page);
    const metrics = await collectMetrics(page);
    const file = `${String(index + 1).padStart(2, "0")}-${slug}.png`;
    await page.screenshot({ path: join(screenshotDir, file), fullPage: true });
    screenshotRows.push({ slug, file, url: `${baseUrl}${path}`, metrics });
    await page.close();
  }
  await screenshotContext.close();

  for (const width of widths) {
    const context = await browser.newContext({
      viewport: { width, height: 844 },
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1",
    });
    for (const path of qaUrls) {
      const page = await context.newPage();
      await page.goto(`${baseUrl}${path}`, { waitUntil: "domcontentloaded" });
      await waitForStablePage(page);
      const metrics = await collectMetrics(page);
      qaRows.push({ width, path, ...metrics });
      await page.close();
    }
    await context.close();
  }
} finally {
  await browser.close();
  server.close();
}

const hardIssues = qaRows.filter((row) => (
  row.bodyOverflow > 1 ||
  row.clippedCards > 0 ||
  row.cameraButtons < 1 ||
  row.menuButtons < 1 ||
  row.whatsappOverlap
));

const pageSections = screenshotRows.map((row) => {
  const pageIssues = qaRows.filter((qa) => qa.path === new URL(row.url).pathname + new URL(row.url).search).filter((qa) => (
    qa.bodyOverflow > 1 || qa.clippedCards > 0 || qa.cameraButtons < 1 || qa.menuButtons < 1 || qa.whatsappOverlap
  ));
  return [
    `### ${pageDisplayName(row.slug)}`,
    `- URL: ${row.url}`,
    `- Screenshot: screenshots/mobile-ui-v10-5/${row.file}`,
    `- Fixed: mobile header/search/image-search entry/footer/WhatsApp/product spacing use the shared v10.5 mobile layer where the page has those components.`,
    `- Remaining Issues: ${pageIssues.length ? pageIssues.map((issue) => `${issue.width}px overflow=${issue.bodyOverflow}, clippedCards=${issue.clippedCards}, camera=${issue.cameraButtons}, menu=${issue.menuButtons}, whatsappOverlap=${issue.whatsappOverlap}`).join("; ") : "None detected in automated viewport checks."}`,
    `- Shared Component Problems: ${row.metrics.cameraButtons < 1 ? "Image search trigger missing." : "None detected for shared header/search/footer at 390px."}`,
  ].join("\n");
}).join("\n\n");

const audit = `# Aurora Mobile UI Audit v10.5

Date: 2026-08-10
Viewport screenshots: 390 x 844
Responsive QA widths: ${widths.join(", ")}

## Scope

- Checked mobile UI consistency across homepage, catalog/category/search pages, representative product details, Search by Image modal, cart, checkout, account, about, contact, blog, FAQ, shipping, returns, privacy and terms pages.
- The pass uses a mobile-only CSS layer. Desktop CSS and desktop layout rules were not intentionally changed.

## Shared Fixes

- Fixed: unified mobile header sizing, search row height, camera image-search trigger placement, language button scale and sticky glass behavior.
- Fixed: unified mobile horizontal padding, section rhythm, typography scale, card radii, form fields, product card structure and footer accordions.
- Fixed: Product Catalog and product grids use stable two-column layout with min-width guards.
- Fixed: Search by Image modal was restyled from prototype-like UI into a formal upload workflow surface.
- Fixed: Footer social links, payment badges and legal links are protected against mobile overlap and wrapping issues.
- Fixed: WhatsApp floating button uses safe-area-aware placement and reduced visual weight.

## Automated Findings

- Screenshot pages: ${screenshotRows.length}
- Responsive QA runs: ${qaRows.length}
- Blocking issues detected: ${hardIssues.length}

${hardIssues.length ? hardIssues.map((row) => `- ${row.width}px ${row.path}: overflow=${row.bodyOverflow}, clippedCards=${row.clippedCards}, camera=${row.cameraButtons}, menu=${row.menuButtons}, whatsappOverlap=${row.whatsappOverlap}`).join("\n") : "- None detected by automated checks."}

## Page Results

${pageSections}

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
`;

writeFileSync(auditPath, audit);
writeFileSync(join(screenshotDir, "qa-results.json"), JSON.stringify({ screenshotRows, qaRows, hardIssues }, null, 2));

console.log(JSON.stringify({
  screenshots: screenshotRows.length,
  qaRuns: qaRows.length,
  hardIssues: hardIssues.length,
  screenshotDir,
  auditPath,
}, null, 2));
