import http from "node:http";
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { extname, join, resolve } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const sourceDir = resolve("2026-06-26_filter-simple-consult-icon-preview");
const screenshotDir = resolve("screenshots/mobile-premium-refinement");
const auditPath = resolve("mobile-premium-refinement-audit.md");
const beforeSource = resolve("screenshots/mobile-v2/01-home.png");
const port = 4183;
const baseUrl = `http://127.0.0.1:${port}`;
const widths = [320, 375, 390, 393, 414, 430];
const edgeExecutable = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

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
  await page.evaluate(() => {
    document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
      img.setAttribute("loading", "eager");
      img.src = img.currentSrc || img.src;
    });
  });
  await page.waitForTimeout(450);
  await page.evaluate(async () => {
    await Promise.race([
      Promise.all(Array.from(document.images).map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolveImage) => {
          img.addEventListener("load", resolveImage, { once: true });
          img.addEventListener("error", resolveImage, { once: true });
        });
      })),
      new Promise((resolveWait) => window.setTimeout(resolveWait, 1200)),
    ]);
  });
}

async function scrollPage(page) {
  const height = await page.evaluate(() => Math.max(document.body.scrollHeight, document.documentElement.scrollHeight));
  for (let y = 0; y <= height; y += 760) {
    await page.evaluate((nextY) => window.scrollTo(0, nextY), y);
    await page.waitForTimeout(80);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(320);
}

async function measure(page) {
  return page.evaluate(() => {
    const doc = document.documentElement;
    const body = document.body;
    const headerBrand = document.querySelector(".brand__name");
    const header = document.querySelector(".main-header");
    const whatsapp = document.querySelector(".aurora-whatsapp-button");
    const productCards = Array.from(document.querySelectorAll('.product-grid[data-products]:not([data-products="featured"]):not([data-products="new"]) .product-card'));
    const carouselTracks = Array.from(document.querySelectorAll('.product-grid[data-products="featured"], .product-carousel__viewport'));
    const categoryCards = Array.from(document.querySelectorAll(".category-card"));
    const viewportWidth = doc.clientWidth;
    const rightOverflow = Array.from(document.body.querySelectorAll("*"))
      .map((el) => el.getBoundingClientRect())
      .filter((rect) => rect.width > 0 && rect.right > viewportWidth + 1)
      .slice(0, 10)
      .length;
    const productOverflow = productCards.filter((card) => {
      const rect = card.getBoundingClientRect();
      return rect.left < -1 || rect.right > viewportWidth + 1;
    }).length;
    const brandRect = headerBrand?.getBoundingClientRect();
    return {
      innerWidth: window.innerWidth,
      clientWidth: doc.clientWidth,
      scrollWidth: Math.max(doc.scrollWidth, body.scrollWidth),
      bodyOverflow: Math.max(doc.scrollWidth, body.scrollWidth) > doc.clientWidth + 1,
      rightOverflow,
      productOverflow,
      productCards: productCards.length,
      carouselContainers: carouselTracks.length,
      carouselSnapReady: carouselTracks.every((node) => getComputedStyle(node).scrollSnapType.includes("x") || node.scrollWidth > node.clientWidth),
      categoryCards: categoryCards.length,
      brandText: headerBrand?.textContent?.trim() || "",
      brandFits: headerBrand ? headerBrand.scrollWidth <= Math.ceil(brandRect.width) + 1 : false,
      headerHeight: Math.round(header?.getBoundingClientRect().height || 0),
      whatsappRect: whatsapp ? Array.from(whatsapp.getBoundingClientRect()).map(Math.round) : null,
    };
  });
}

async function screenshotHome(page, name) {
  await page.addStyleTag({
    content: `
      @media (max-width: 760px) {
        .main-header { position: relative !important; top: auto !important; }
        .aurora-whatsapp-button { display: none !important; }
      }
    `,
  });
  await page.screenshot({ path: join(screenshotDir, name), fullPage: true });
}

mkdirSync(screenshotDir, { recursive: true });
if (existsSync(beforeSource)) copyFileSync(beforeSource, join(screenshotDir, "home-before-v2.png"));

const server = await startServer();
const launchOptions = existsSync(edgeExecutable) ? { executablePath: edgeExecutable } : {};
const browser = await chromium.launch(launchOptions);
const results = [];

try {
  for (const width of widths) {
    const page = await browser.newPage({
      viewport: { width, height: 844 },
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1",
    });
    await page.goto(`${baseUrl}/index.html`, { waitUntil: "domcontentloaded" });
    await waitForStablePage(page);
    await scrollPage(page);
    const metrics = await measure(page);
    results.push({ width, ...metrics });
    if (width === 390) {
      await screenshotHome(page, "home-after-premium-390.png");
    }
    await page.close();
  }
} finally {
  await browser.close();
  server.close();
}

const failures = results.filter((item) => item.bodyOverflow || item.productOverflow || !item.brandFits);
const lines = [
  "# Aurora Mobile Homepage Premium Refinement QA",
  "",
  `Generated: ${new Date().toISOString()}`,
  "",
  "## Scope",
  "",
  "- Mobile homepage only visual refinement.",
  "- Desktop layout and product/search/quote/language logic unchanged.",
  "- Tested widths: 320, 375, 390, 393, 414, 430.",
  "",
  "## Results",
  "",
  "| Width | Client | Scroll | Body overflow | Product overflow | Brand fits | Header height |",
  "|---:|---:|---:|:---:|---:|:---:|---:|",
  ...results.map((item) => `| ${item.width} | ${item.clientWidth} | ${item.scrollWidth} | ${item.bodyOverflow ? "FAIL" : "OK"} | ${item.productOverflow} | ${item.brandFits ? "OK" : "FAIL"} | ${item.headerHeight} |`),
  "",
  "## Screenshots",
  "",
  "- `screenshots/mobile-premium-refinement/home-before-v2.png`",
  "- `screenshots/mobile-premium-refinement/home-after-premium-390.png`",
  "",
  "## Remaining Issues",
  "",
  failures.length
    ? failures.map((item) => `- ${item.width}px: overflow=${item.bodyOverflow}, productOverflow=${item.productOverflow}, brandFits=${item.brandFits}`).join("\n")
    : "- No blocking homepage responsive issues found in automated checks.",
  "",
];

writeFileSync(auditPath, `${lines.join("\n")}\n`, "utf8");
