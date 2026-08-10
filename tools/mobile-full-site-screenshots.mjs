import http from "node:http";
import { createRequire } from "node:module";
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { extname, join, resolve } from "node:path";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const sourceDir = resolve("2026-06-26_filter-simple-consult-icon-preview");
const screenshotDir = resolve("screenshots/mobile");
const port = 4190;
const baseUrl = `http://127.0.0.1:${port}`;

const categories = ["Bag", "Hardware", "Leather", "Zipper", "Accessories", "Tools"];
const representativeProducts = [
  ["product-bag-example", "/product-detail.html?sku=ABS-BAG-001", "Bag representative product detail"],
  ["product-hardware-example", "/product-detail.html?sku=ABS-HDW-001", "Hardware representative product detail"],
  ["product-leather-example", "/product-detail.html?sku=ABS-LTH-001", "Leather representative product detail"],
  ["product-zipper-example", "/product-detail.html?sku=ABS-ZIP-001", "Zipper representative product detail"],
  ["product-accessories-example", "/product-detail.html?sku=ABS-ACC-001", "Accessories representative product detail"],
  ["product-tools-example", "/product-detail.html?sku=ABS-TLS-001", "Tools representative product detail"],
];

const forcedStates = [
  ["01-home", "/index.html", "Home"],
  ["02-mobile-menu-open", "/index.html", "Mobile menu open", { menu: true }],
  ["03-catalog", "/products.html", "Product Catalog"],
  ["04-category-bag", "/products.html?category=Bag", "Bag category"],
  ["05-category-hardware", "/products.html?category=Hardware", "Hardware category"],
  ["06-category-leather", "/products.html?category=Leather", "Leather category"],
  ["07-category-zipper", "/products.html?category=Zipper", "Zipper category"],
  ["08-category-accessories", "/products.html?category=Accessories", "Accessories category"],
  ["09-category-tools", "/products.html?category=Tools", "Tools category"],
  ["10-search-results-zipper", "/products.html?q=zipper", "Search results for zipper"],
  ["11-search-results-hardware", "/products.html?q=hardware", "Search results for hardware"],
  ["12-image-search-modal", "/index.html", "Search by Image modal", { imageSearch: true }],
  ["13-quote-contact-prefill", "/contact.html?sku=ABS-HDW-001&product=Hardware%20Product%2001", "Request a Quote / Contact prefill"],
  ["14-quote-list-cart", "/cart.html", "Quote List / Cart"],
  ["15-checkout-inquiry", "/checkout.html", "Checkout / Inquiry"],
  ...representativeProducts,
];

const pageNames = {
  "/about.html": "About Us",
  "/account.html": "My Account",
  "/blog.html": "Blog & Buying Guides",
  "/cart.html": "Quote List / Cart",
  "/checkout.html": "Checkout / Inquiry",
  "/contact.html": "Contact Us",
  "/faq.html": "FAQ",
  "/privacy-policy.html": "Privacy Policy",
  "/product-detail.html": "Product Detail",
  "/products.html": "Product Catalog",
  "/returns.html": "Returns",
  "/shipping.html": "Shipping & Delivery",
  "/terms-of-service.html": "Terms of Service",
};

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

function cleanOutput() {
  const resolved = resolve(screenshotDir);
  const workspace = resolve(".");
  if (!resolved.startsWith(workspace)) {
    throw new Error(`Refusing to clean outside workspace: ${resolved}`);
  }
  rmSync(resolved, { recursive: true, force: true });
  mkdirSync(resolved, { recursive: true });
}

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

function normalizeInternalUrl(rawHref, currentPath = "/index.html") {
  if (!rawHref || rawHref.startsWith("mailto:") || rawHref.startsWith("tel:") || rawHref.startsWith("javascript:")) return null;
  let url;
  try {
    url = new URL(rawHref, `${baseUrl}${currentPath}`);
  } catch {
    return null;
  }
  if (url.origin !== baseUrl) return null;
  const pathname = url.pathname === "/" ? "/index.html" : url.pathname;
  if (!pathname.endsWith(".html")) return null;
  const params = new URLSearchParams(url.search);
  const kept = new URLSearchParams();
  ["category", "q", "sku", "product"].forEach((key) => {
    if (params.has(key)) kept.set(key, params.get(key));
  });
  const search = kept.toString();
  return `${pathname}${search ? `?${search}` : ""}`;
}

function slugifyPath(pathname) {
  const url = new URL(`${baseUrl}${pathname}`);
  const base = url.pathname.replace(/^\//, "").replace(/\.html$/, "").replace(/index$/, "home");
  const params = Array.from(url.searchParams.entries()).map(([key, value]) => `${key}-${value}`).join("-");
  return `${base}${params ? `-${params}` : ""}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function browserOptions() {
  const edge = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
  return existsSync(edge) ? { headless: true, executablePath: edge } : { headless: true };
}

async function waitForPage(page) {
  await page.waitForLoadState("domcontentloaded");
  await page.waitForTimeout(800);
  await page.evaluate(async () => {
    if (document.fonts?.ready) await document.fonts.ready.catch(() => {});
    const imageReady = Promise.all(Array.from(document.images).map((img) => {
      if (img.complete) return Promise.resolve();
      return new Promise((resolveImage) => {
        img.addEventListener("load", resolveImage, { once: true });
        img.addEventListener("error", resolveImage, { once: true });
      });
    }));
    await Promise.race([imageReady, new Promise((resolveWait) => window.setTimeout(resolveWait, 1800))]);
  });
}

async function slowScroll(page) {
  const height = await page.evaluate(() => Math.max(document.body.scrollHeight, document.documentElement.scrollHeight));
  for (let y = 0; y <= height; y += 520) {
    await page.evaluate((nextY) => window.scrollTo(0, nextY), y);
    await page.waitForTimeout(120);
  }
  await page.evaluate(async () => {
    const imageReady = Promise.all(Array.from(document.images).map((img) => (img.complete ? Promise.resolve() : new Promise((resolveImage) => {
      img.addEventListener("load", resolveImage, { once: true });
      img.addEventListener("error", resolveImage, { once: true });
    }))));
    await Promise.race([imageReady, new Promise((resolveWait) => window.setTimeout(resolveWait, 1600))]);
  });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(650);
}

async function collectLinks(page, currentPath) {
  const hrefs = await page.evaluate(() => Array.from(document.querySelectorAll("a[href]")).map((a) => a.getAttribute("href")));
  return hrefs.map((href) => normalizeInternalUrl(href, currentPath)).filter(Boolean);
}

async function collectCrawlUrls(browser) {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });
  const seen = new Set();
  const queue = ["/index.html"];
  while (queue.length && seen.size < 120) {
    const path = queue.shift();
    if (!path || seen.has(path)) continue;
    seen.add(path);
    const page = await context.newPage();
    await page.goto(`${baseUrl}${path}`, { waitUntil: "domcontentloaded" }).catch(() => {});
    await waitForPage(page).catch(() => {});
    const menu = page.locator("[data-mobile-menu]").first();
    if (await menu.count()) {
      await menu.click().catch(() => {});
      await page.waitForTimeout(200);
    }
    for (const link of await collectLinks(page, path)) {
      if (!seen.has(link) && !queue.includes(link)) queue.push(link);
    }
    await page.close();
  }
  await context.close();
  return Array.from(seen);
}

function buildScreenshotPlan(crawledUrls) {
  const plan = [];
  const usedUrls = new Set();
  for (const item of forcedStates) {
    const [slug, url, title, options] = item;
    plan.push({ slug, url, title, options: options || {}, source: "required" });
    usedUrls.add(`${url}|${JSON.stringify(options || {})}`);
  }
  for (const url of crawledUrls) {
    if (url.startsWith("/product-detail.html?sku=")) continue;
    if (url.includes("lang=")) continue;
    const key = `${url}|{}`;
    if (usedUrls.has(key)) continue;
    const pathname = new URL(`${baseUrl}${url}`).pathname;
    plan.push({
      slug: slugifyPath(url),
      url,
      title: pageNames[pathname] || slugifyPath(url),
      options: {},
      source: "discovered",
    });
    usedUrls.add(key);
  }
  return plan.map((item, index) => ({
    ...item,
    file: `${String(index + 1).padStart(2, "0")}-${item.slug}.png`,
  }));
}

async function openSpecialState(page, options = {}) {
  if (options.menu) {
    await page.locator("[data-mobile-menu]").first().click({ timeout: 3000 }).catch(() => {});
    await page.waitForTimeout(500);
  }
  if (options.imageSearch) {
    await page.locator("[data-image-search-trigger]").first().click({ timeout: 3000 }).catch(() => {});
    await page.waitForTimeout(500);
  }
}

async function visualMetrics(page) {
  return page.evaluate(() => {
    const visible = (el) => {
      if (!el) return false;
      const style = getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      return style.display !== "none" && style.visibility !== "hidden" && Number.parseFloat(style.opacity || "1") > 0.01 && rect.width > 0 && rect.height > 0;
    };
    const rectOf = (el) => {
      const rect = el.getBoundingClientRect();
      return { left: rect.left, right: rect.right, top: rect.top, bottom: rect.bottom, width: rect.width, height: rect.height };
    };
    const overlaps = (a, b) => !(a.right <= b.left || b.right <= a.left || a.bottom <= b.top || b.bottom <= a.top);
    const viewportWidth = document.documentElement.clientWidth;
    const bodyOverflow = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth) - viewportWidth;
    const nonFeaturedCards = Array.from(document.querySelectorAll(".product-card")).filter((card) => !card.closest(".product-grid[data-products='featured']"));
    const clippedCards = nonFeaturedCards.filter((card) => {
      const rect = rectOf(card);
      return rect.left < -1 || rect.right > viewportWidth + 1;
    }).length;
    const buttonsOut = Array.from(document.querySelectorAll("button, .btn, .detail-link")).filter((button) => {
      if (!visible(button)) return false;
      const rect = rectOf(button);
      return rect.left < -1 || rect.right > viewportWidth + 1;
    }).length;
    const whatsapp = document.querySelector(".aurora-whatsapp-button");
    const waRect = visible(whatsapp) ? rectOf(whatsapp) : null;
    const critical = Array.from(document.querySelectorAll(".product-card h3, .product-actions, .detail-link, .footer-bottom, .checkout-panel button, .panel .btn, input, textarea"));
    const whatsappOverlap = waRect ? critical.some((el) => visible(el) && overlaps(waRect, rectOf(el))) : false;
    const distortedImages = Array.from(document.images).filter((img) => {
      if (!visible(img) || !img.naturalWidth || !img.naturalHeight) return false;
      const rect = rectOf(img);
      if (rect.width < 32 || rect.height < 32) return false;
      const naturalRatio = img.naturalWidth / img.naturalHeight;
      const displayedRatio = rect.width / rect.height;
      return Math.abs(naturalRatio - displayedRatio) > 0.35 && getComputedStyle(img).objectFit !== "contain";
    }).length;
    const header = document.querySelector(".main-header");
    const footer = document.querySelector(".site-footer");
    return {
      url: location.pathname + location.search,
      bodyOverflow,
      clippedCards,
      buttonsOut,
      distortedImages,
      whatsappOverlap,
      productCards: document.querySelectorAll(".product-card").length,
      cameraButtons: document.querySelectorAll("[data-image-search-trigger]").length,
      mobileMenuButtons: document.querySelectorAll("[data-mobile-menu]").length,
      headerHeight: header ? Math.round(header.getBoundingClientRect().height) : 0,
      footerPresent: Boolean(footer),
      scrollHeight: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
    };
  });
}

function issuesFromMetrics(metrics) {
  const issues = [];
  if (metrics.bodyOverflow > 1) issues.push(`horizontal overflow ${metrics.bodyOverflow}px`);
  if (metrics.clippedCards > 0) issues.push(`${metrics.clippedCards} product cards clipped`);
  if (metrics.buttonsOut > 0) issues.push(`${metrics.buttonsOut} visible buttons or links exceed viewport`);
  if (metrics.distortedImages > 0) issues.push(`${metrics.distortedImages} potentially distorted images`);
  if (metrics.whatsappOverlap) issues.push("WhatsApp floating button overlaps critical content");
  if (!metrics.footerPresent) issues.push("Footer missing");
  if (metrics.mobileMenuButtons < 1) issues.push("Mobile menu trigger missing");
  if (metrics.cameraButtons < 1) issues.push("Image search trigger missing");
  return issues;
}

cleanOutput();
const server = await startServer();
const browser = await chromium.launch(browserOptions());
const results = [];

try {
  const crawled = await collectCrawlUrls(browser);
  const plan = buildScreenshotPlan(crawled);
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1",
  });
  for (const item of plan) {
    const page = await context.newPage();
    await page.goto(`${baseUrl}${item.url}`, { waitUntil: "domcontentloaded" });
    await waitForPage(page);
    await openSpecialState(page, item.options);
    if (!item.options.menu && !item.options.imageSearch) {
      await slowScroll(page);
    }
    const metrics = await visualMetrics(page);
    await page.screenshot({ path: join(screenshotDir, item.file), fullPage: true });
    results.push({ ...item, metrics, issues: issuesFromMetrics(metrics) });
    await page.close();
  }
  await context.close();

  const realPages = new Set(crawled.map((url) => new URL(`${baseUrl}${url}`).pathname));
  const discoveredTemplates = Array.from(realPages).sort();
  const noIndependent = [];
  if (!crawled.some((url) => /new/i.test(url))) noIndependent.push("New Arrivals independent page not found; covered on Home product section.");
  if (!crawled.some((url) => /featured/i.test(url))) noIndependent.push("Featured Products independent page not found; covered on Home product section.");
  if (!crawled.some((url) => /best/i.test(url))) noIndependent.push("Best Sellers independent page not found; covered on Home product section.");

  const readme = `# Aurora Bag Supply Mobile Screenshots

Generated: 2026-08-10
Viewport: 390 x 844
Source: current local preview folder \`2026-06-26_filter-simple-consult-icon-preview\`

## Summary

1. Internal URLs discovered by crawler: ${crawled.length}
2. Screenshots generated: ${results.length}
3. Independent page templates discovered: ${discoveredTemplates.length}

## Discovered Internal Page Templates

${discoveredTemplates.map((item) => `- ${item}`).join("\n")}

## Screenshots

${results.map((item) => `- \`${item.file}\` - ${item.title} - \`${item.url}\``).join("\n")}

## Representative Product Pages

The product detail pages use one shared detail template. To avoid mechanically screenshotting every SKU, the run selected one representative product from each main category:

${representativeProducts.map(([slug, url, title]) => `- ${title}: \`${url}\``).join("\n")}

## Product Sections Without Separate Pages

${noIndependent.length ? noIndependent.map((item) => `- ${item}`).join("\n") : "- None detected."}

## Mobile Visual QA Findings

${results.some((item) => item.issues.length)
  ? results.filter((item) => item.issues.length).map((item) => `- \`${item.file}\`: ${item.issues.join("; ")}`).join("\n")
  : "- No blocking mobile UI issues detected in automated 390px checks."}

## QA Metrics Checked

- Horizontal overflow
- Product-card viewport clipping
- Visible button/link viewport overflow
- Potential image distortion
- WhatsApp overlap with critical content
- Mobile menu trigger presence
- Search by Image trigger presence
- Footer presence
`;
  writeFileSync(join(screenshotDir, "README.md"), readme);
  writeFileSync(join(screenshotDir, "crawl-results.json"), JSON.stringify({ crawled, results }, null, 2));
  console.log(JSON.stringify({
    discoveredUrls: crawled.length,
    screenshots: results.length,
    issues: results.reduce((sum, item) => sum + item.issues.length, 0),
    screenshotDir,
  }, null, 2));
} finally {
  await browser.close();
  server.close();
}
