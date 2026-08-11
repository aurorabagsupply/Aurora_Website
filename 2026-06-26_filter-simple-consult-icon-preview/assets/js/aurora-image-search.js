(function () {
  const DEFAULT_ENDPOINT = "https://aurorabagsupply.com/wp-json/aurora/v1/image-search";
  const MAX_UPLOAD_BYTES = 6 * 1024 * 1024;
  const MAX_DIMENSION = 1600;
  const JPEG_QUALITY = 0.86;
  const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];

  const copy = {
    en: {
      trigger: "Search by image",
      title: "Search by Image",
      intro: "Upload a hardware, buckle, zipper, leather or bag reference image. We will find visually similar products.",
      choose: "Choose Image",
      drop: "Drop image here",
      search: "Search Similar Products",
      change: "Change image",
      loading: "Finding similar products...",
      empty: "No similar products were found.",
      notConfigured: "Image search backend is not configured yet.",
      badType: "Please upload JPG, PNG or WEBP images only.",
      tooLarge: "This image is too large. Please choose a smaller image.",
      uploadFirst: "Please choose an image first.",
      failed: "Image search failed. Please try another product photo.",
      results: "Similar products",
      view: "View Product",
      quote: "Add to Quote",
      sku: "SKU",
      material: "Material",
      size: "Size",
      moq: "MOQ",
    },
    zh: {
      trigger: "图片搜产品",
      title: "图片搜产品",
      intro: "上传五金、锁扣、拉链、皮料或包款参考图，系统会查找视觉结构相似的产品。",
      choose: "选择图片",
      drop: "拖拽图片到这里",
      search: "搜索相似产品",
      change: "更换图片",
      loading: "正在查找相似产品...",
      empty: "没有找到相似产品。",
      notConfigured: "图片搜索后端暂未配置完成。",
      badType: "请上传 JPG、PNG 或 WEBP 图片。",
      tooLarge: "图片太大，请换一张更小的图片。",
      uploadFirst: "请先选择一张图片。",
      failed: "图片搜索失败，请换一张产品图再试。",
      results: "相似产品",
      view: "查看产品",
      quote: "加入询价",
      sku: "SKU",
      material: "材质",
      size: "尺寸",
      moq: "起订量",
    },  };

  let selectedBlob = null;
  let selectedName = "aurora-search-image.jpg";
  let previewUrl = "";

  function lang() {
    const param = new URLSearchParams(window.location.search).get("lang");
    if (copy[param]) return param;
    const stored = localStorage.getItem("auroraLang");
    if (copy[stored]) return stored;
    const htmlLang = document.documentElement.lang;
    return htmlLang === "zh" || htmlLang?.startsWith("zh") ? "zh" : "en";
  }

  function text(key) {
    return (copy[lang()] || copy.en)[key] || copy.en[key] || key;
  }

  function endpoint() {
    return window.AURORA_IMAGE_SEARCH_ENDPOINT || DEFAULT_ENDPOINT;
  }

  function cameraSvg() {
    return '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false"><path d="M9 6.5 10.4 5h3.2L15 6.5h2.7c1 0 1.8.8 1.8 1.8v8.4c0 1-.8 1.8-1.8 1.8H6.3c-1 0-1.8-.8-1.8-1.8V8.3c0-1 .8-1.8 1.8-1.8H9Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><circle cx="12" cy="12.5" r="3.1" fill="none" stroke="currentColor" stroke-width="1.7"/></svg>';
  }

  function ensureTriggers() {
    document.querySelectorAll(".site-search").forEach((form) => {
      const existing = form.querySelector("[data-image-search-trigger]");
      if (existing) {
        existing.classList.add("image-search-trigger");
        existing.setAttribute("aria-label", text("trigger"));
        existing.innerHTML = cameraSvg();
        return;
      }
      const submit = form.querySelector('button[type="submit"], button:not([type])');
      const button = document.createElement("button");
      button.type = "button";
      button.className = "image-search-trigger";
      button.dataset.imageSearchTrigger = "";
      button.setAttribute("aria-label", text("trigger"));
      button.innerHTML = cameraSvg();
      if (submit) form.insertBefore(button, submit);
      else form.append(button);
    });
  }

  function ensureModal() {
    let modal = document.querySelector("[data-image-search-modal]");
    if (modal) {
      refreshModalCopy(modal);
      return modal;
    }
    modal = document.createElement("div");
    modal.className = "image-search-modal";
    modal.dataset.imageSearchModal = "";
    modal.innerHTML = `
      <div class="image-search-modal__panel" role="dialog" aria-modal="true" aria-labelledby="aurora-image-search-title">
        <button class="image-search-modal__close" type="button" data-image-search-close aria-label="Close">&times;</button>
        <div class="image-search-modal__head">
          <h2 id="aurora-image-search-title">${text("title")}</h2>
          <p>${text("intro")}</p>
        </div>
        <label class="image-search-dropzone" data-image-dropzone>
          <input type="file" accept="image/jpeg,image/png,image/webp" data-image-search-input />
          <span class="image-search-dropzone__icon">${cameraSvg()}</span>
          <strong>${text("choose")}</strong>
          <small>${text("drop")}</small>
        </label>
        <div class="image-search-preview" hidden>
          <img alt="" data-image-preview />
          <button type="button" data-image-change>${text("change")}</button>
        </div>
        <div class="image-search-error" data-image-search-error role="alert"></div>
        <button class="image-search-submit" type="button" data-image-search-submit>${text("search")}</button>
        <div class="image-search-loading" data-image-search-loading hidden>${text("loading")}</div>
        <div class="image-search-results" data-image-search-results></div>
      </div>
    `;
    document.body.append(modal);
    bindModal(modal);
    refreshModalCopy(modal);
    return modal;
  }

  function refreshModalCopy(modal) {
    if (!modal) return;
    const title = modal.querySelector("#aurora-image-search-title");
    const intro = modal.querySelector(".image-search-modal__head p");
    const choose = modal.querySelector("[data-image-dropzone] strong");
    const drop = modal.querySelector("[data-image-dropzone] small");
    const change = modal.querySelector("[data-image-change]");
    const submit = modal.querySelector("[data-image-search-submit]");
    const loading = modal.querySelector("[data-image-search-loading]");
    const close = modal.querySelector("[data-image-search-close]");
    if (title) title.textContent = text("title");
    if (intro) intro.textContent = text("intro");
    if (choose) choose.textContent = text("choose");
    if (drop) drop.textContent = text("drop");
    if (change) change.textContent = text("change");
    if (submit) submit.textContent = text("search");
    if (loading) loading.textContent = text("loading");
    if (close) close.setAttribute("aria-label", lang() === "zh" ? "关闭" : "Close");
  }

  function openModal() {
    const modal = ensureModal();
    refreshModalCopy(modal);
    modal.classList.add("is-open");
    document.body.classList.add("image-search-open");
  }

  function closeModal() {
    const modal = document.querySelector("[data-image-search-modal]");
    if (!modal) return;
    modal.classList.remove("is-open");
    document.body.classList.remove("image-search-open");
  }

  function setError(modal, message) {
    const node = modal.querySelector("[data-image-search-error]");
    node.textContent = message || "";
    node.classList.toggle("is-visible", Boolean(message));
  }

  function setLoading(modal, loading) {
    modal.querySelector("[data-image-search-loading]").hidden = !loading;
    modal.querySelector("[data-image-search-submit]").disabled = loading;
  }

  function resetPreview(modal) {
    selectedBlob = null;
    selectedName = "aurora-search-image.jpg";
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    previewUrl = "";
    modal.querySelector(".image-search-preview").hidden = true;
    modal.querySelector("[data-image-preview]").removeAttribute("src");
    modal.querySelector("[data-image-search-input]").value = "";
  }

  function drawCompressed(file) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.onload = () => {
        URL.revokeObjectURL(url);
        const scale = Math.min(1, MAX_DIMENSION / Math.max(img.width, img.height));
        const width = Math.max(1, Math.round(img.width * scale));
        const height = Math.max(1, Math.round(img.height * scale));
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);
        canvas.toBlob((blob) => {
          if (!blob) reject(new Error("Canvas export failed"));
          else resolve(blob);
        }, "image/jpeg", JPEG_QUALITY);
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error("Image decode failed"));
      };
      img.src = url;
    });
  }

  async function handleFile(modal, file) {
    setError(modal, "");
    if (!file) return;
    if (!ACCEPTED_TYPES.includes(file.type)) {
      setError(modal, text("badType"));
      return;
    }
    if (file.size > MAX_UPLOAD_BYTES) {
      setError(modal, text("tooLarge"));
      return;
    }
    try {
      const blob = await drawCompressed(file);
      selectedBlob = blob;
      selectedName = file.name.replace(/\.[^.]+$/, "") + ".jpg";
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      previewUrl = URL.createObjectURL(blob);
      modal.querySelector("[data-image-preview]").src = previewUrl;
      modal.querySelector(".image-search-preview").hidden = false;
      modal.querySelector("[data-image-search-results]").innerHTML = "";
    } catch {
      setError(modal, text("failed"));
    }
  }

  async function runSearch(modal) {
    setError(modal, "");
    if (!selectedBlob) {
      setError(modal, text("uploadFirst"));
      return;
    }
    setLoading(modal, true);
    const formData = new FormData();
    formData.append("image", selectedBlob, selectedName);
    formData.append("limit", "16");
    formData.append("lang", lang());
    if (new URLSearchParams(window.location.search).get("aurora_debug") === "1") {
      formData.append("debug", "1");
    }
    try {
      const response = await fetch(endpoint(), { method: "POST", body: formData });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(payload.message || payload?.data?.message || text("failed"));
      }
      renderResults(modal, payload.products || [], payload.message || "");
    } catch (error) {
      const message = error.message && error.message !== "Failed to fetch" ? error.message : text("notConfigured");
      setError(modal, message);
    } finally {
      setLoading(modal, false);
    }
  }

  function escapeHtml(value) {
    return String(value || "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    }[char]));
  }

  function renderResults(modal, products, message) {
    const target = modal.querySelector("[data-image-search-results]");
    if (!products.length) {
      target.innerHTML = `<p class="image-search-empty">${escapeHtml(message || text("empty"))}</p>`;
      return;
    }
    target.innerHTML = `
      <h3>${text("results")}</h3>
      <div class="image-search-result-grid">
        ${products.map((product) => `
          <article class="image-search-result">
            <a class="image-search-result__image" href="${escapeHtml(product.permalink)}">
              <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy" />
            </a>
            <div class="image-search-result__body">
              <h4>${escapeHtml(product.name)}</h4>
              <p>${text("sku")}: ${escapeHtml(product.sku)}</p>
              ${product.material ? `<p>${text("material")}: ${escapeHtml(product.material)}</p>` : ""}
              ${product.size ? `<p>${text("size")}: ${escapeHtml(product.size)}</p>` : ""}
              <p>${escapeHtml(product.moq || "")}</p>
              <div class="image-search-result__actions">
                <a href="${escapeHtml(product.quoteUrl)}">${text("quote")}</a>
                <a href="${escapeHtml(product.permalink)}">${text("view")} <span aria-hidden="true">&rsaquo;</span></a>
              </div>
              ${product.similarity ? `<small class="image-search-debug">Similarity ${escapeHtml(product.similarity)}</small>` : ""}
            </div>
          </article>
        `).join("")}
      </div>
    `;
  }

  function bindModal(modal) {
    const input = modal.querySelector("[data-image-search-input]");
    const dropzone = modal.querySelector("[data-image-dropzone]");
    input.addEventListener("change", () => handleFile(modal, input.files[0]));
    modal.querySelector("[data-image-change]").addEventListener("click", () => input.click());
    modal.querySelector("[data-image-search-submit]").addEventListener("click", () => runSearch(modal));
    modal.querySelector("[data-image-search-close]").addEventListener("click", closeModal);
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeModal();
    });
    ["dragenter", "dragover"].forEach((name) => {
      dropzone.addEventListener(name, (event) => {
        event.preventDefault();
        dropzone.classList.add("is-dragging");
      });
    });
    ["dragleave", "drop"].forEach((name) => {
      dropzone.addEventListener(name, (event) => {
        event.preventDefault();
        dropzone.classList.remove("is-dragging");
      });
    });
    dropzone.addEventListener("drop", (event) => {
      handleFile(modal, event.dataTransfer.files[0]);
    });
  }

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-image-search-trigger]");
    if (!trigger) return;
    event.preventDefault();
    openModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
  window.addEventListener("aurora:languagechange", () => {
    ensureTriggers();
    refreshModalCopy(document.querySelector("[data-image-search-modal]"));
  });
  window.addEventListener("storage", (event) => {
    if (event.key !== "auroraLang") return;
    ensureTriggers();
    refreshModalCopy(document.querySelector("[data-image-search-modal]"));
  });
  document.addEventListener("DOMContentLoaded", ensureTriggers);
  ensureTriggers();
}());
