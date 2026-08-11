(function () {
  const state = { view: "dashboard" };
  const root = document.querySelector("#aurora-admin-root");
  if (!root || !window.AuroraAdminDashboard) return;

  const content = root.querySelector("[data-content]");
  const title = root.querySelector("[data-title]");
  const subtitle = root.querySelector("[data-subtitle]");

  function api(path, options = {}) {
    return fetch(`${AuroraAdminDashboard.root}${path}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        "X-WP-Nonce": AuroraAdminDashboard.nonce,
        ...(options.headers || {}),
      },
    }).then(async (response) => {
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || "Request failed");
      return payload;
    });
  }

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    }[char]));
  }

  function setHeader(nextTitle, nextSubtitle) {
    title.textContent = nextTitle;
    subtitle.textContent = nextSubtitle;
  }

  function setActive(view) {
    state.view = view;
    root.querySelectorAll("[data-view]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.view === view);
    });
  }

  function loading() {
    content.innerHTML = '<div class="aurora-card">Loading...</div>';
  }

  function error(message) {
    content.innerHTML = `<div class="aurora-card"><strong>Unable to load</strong><p class="aurora-muted">${escapeHtml(message)}</p></div>`;
  }

  async function renderDashboard() {
    setHeader("Dashboard", "Operational summary for products, quotes and registered users.");
    loading();
    const data = await api("/dashboard");
    content.innerHTML = `
      <div class="aurora-grid">
        ${data.cards.map((card) => `<div class="aurora-card aurora-stat"><strong>${escapeHtml(card.value)}</strong><span>${escapeHtml(card.label)}</span></div>`).join("")}
      </div>
      <div class="aurora-card">
        <h2>Recent Products</h2>
        ${table(["Product", "SKU", "Status", "MOQ"], data.topProducts.map((product) => [
          product.name,
          product.sku || "-",
          product.status,
          product.moq || "-"
        ]))}
      </div>
      <div class="aurora-card">
        <h2>Quote Pipeline</h2>
        ${data.quoteStatus.length ? table(["Status", "Total"], data.quoteStatus.map((item) => [item.status, item.total])) : '<p class="aurora-muted">No quote records yet.</p>'}
      </div>
    `;
  }

  async function renderProducts() {
    setHeader("Products", "Create, update, duplicate, draft and trash WooCommerce products.");
    loading();
    const data = await api("/products?limit=50");
    content.innerHTML = `
      <div class="aurora-card">
        <h2>Quick Product Create</h2>
        <form class="aurora-form" data-product-create>
          <label>Name <input name="name" required placeholder="Hardware Product 01"></label>
          <label>SKU <input name="sku" placeholder="ABS-HDW-001"></label>
          <label>Status <select name="status"><option value="draft">Draft</option><option value="publish">Published</option></select></label>
          <label>MOQ <input name="moq" placeholder="500 pcs"></label>
          <label class="is-wide">Short Description <textarea name="short_description" placeholder="Core material, finish or sourcing note."></textarea></label>
          <button class="button-primary" type="submit">Create Product</button>
        </form>
      </div>
      <div class="aurora-card">
        <h2>Products</h2>
        ${table(["Product", "SKU", "Status", "MOQ", "Actions"], data.products.map((product) => [
          `<strong>${escapeHtml(product.name)}</strong>`,
          product.sku || "-",
          product.status,
          product.moq || "-",
          `<div class="aurora-actions">
            <button data-product-edit="${product.id}" data-name="${escapeHtml(product.name)}" data-status="${escapeHtml(product.status)}" data-moq="${escapeHtml(product.moq || "")}">Quick Edit</button>
            <button data-product-duplicate="${product.id}">Duplicate</button>
            <button data-product-trash="${product.id}">Trash</button>
            <a href="${escapeHtml(product.permalink)}" target="_blank" rel="noopener">View</a>
          </div>`
        ]), true)}
      </div>
    `;
  }

  async function renderCategories() {
    setHeader("Categories", "Manage WooCommerce product categories.");
    loading();
    const data = await api("/categories");
    content.innerHTML = `
      <div class="aurora-card">
        <h2>Create Category</h2>
        <form class="aurora-form" data-category-create>
          <label>Name <input name="name" required placeholder="Hardware"></label>
          <label>Slug <input name="slug" placeholder="hardware"></label>
          <label class="is-wide">Description <textarea name="description"></textarea></label>
          <button class="button-primary" type="submit">Create Category</button>
        </form>
      </div>
      <div class="aurora-card">
        <h2>Categories</h2>
        ${table(["Name", "Slug", "Products", "Parent", "Actions"], data.categories.map((cat) => [
          cat.name,
          cat.slug,
          cat.count,
          cat.parent || "-",
          `<div class="aurora-actions">
            <button data-category-rename="${cat.id}" data-name="${escapeHtml(cat.name)}">Rename</button>
            <button data-category-delete="${cat.id}">Delete</button>
          </div>`
        ]), true)}
      </div>
    `;
  }

  async function renderQuotes() {
    setHeader("Quotes", "CRM pipeline for B2B quote requests and follow-up status.");
    loading();
    const data = await api("/quotes");
    content.innerHTML = `
      <div class="aurora-card">
        <h2>Quote Requests</h2>
        ${data.quotes.length ? table(["Lead", "Customer", "Country", "Status", "Items", "Actions"], data.quotes.map((quote) => [
          `<strong>${escapeHtml(quote.lead_uid || ("#" + quote.id))}</strong><br><span class="aurora-muted">${escapeHtml(quote.created_at)}</span>`,
          `${escapeHtml(quote.name || "-")}<br><span class="aurora-muted">${escapeHtml(quote.email)}</span>`,
          quote.country || "-",
          `<select data-quote-status="${quote.id}">
            ${["new", "contacted", "quoted", "negotiating", "sample", "won", "lost"].map((status) => `<option value="${status}" ${status === quote.status ? "selected" : ""}>${status}</option>`).join("")}
          </select>`,
          (quote.items || []).map((item) => escapeHtml(item.sku || item.product_name)).join("<br>") || "-",
          `<button data-note-for="${quote.id}">Add Note</button>`
        ]), true) : '<p class="aurora-muted">No quote requests yet.</p>'}
      </div>
    `;
  }

  async function renderCustomers() {
    setHeader("Customers", "Registered B2B customer accounts. Passwords are never shown.");
    loading();
    const data = await api("/customers");
    content.innerHTML = `
      <div class="aurora-card">
        <h2>Customers</h2>
        ${data.customers.length ? table(["Name", "Email", "Company", "Country", "Registered"], data.customers.map((user) => [
          user.name,
          user.email,
          user.company || "-",
          user.country || "-",
          user.registered
        ])) : '<p class="aurora-muted">No customer accounts yet.</p>'}
      </div>
    `;
  }

  async function renderAudit() {
    setHeader("Audit Logs", "Security record for important admin actions.");
    loading();
    const data = await api("/audit-logs");
    content.innerHTML = `
      <div class="aurora-card">
        <h2>Audit Logs</h2>
        ${data.logs.length ? table(["Time", "User", "Action", "Object", "Context"], data.logs.map((log) => [
          log.created_at,
          log.user_id,
          log.action,
          `${log.object_type} #${log.object_id}`,
          log.context || "-"
        ])) : '<p class="aurora-muted">No audit logs yet.</p>'}
      </div>
    `;
  }

  function table(headers, rows, html = false) {
    return `
      <div style="overflow:auto">
        <table class="aurora-table">
          <thead><tr>${headers.map((head) => `<th>${escapeHtml(head)}</th>`).join("")}</tr></thead>
          <tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${html ? cell : escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}</tbody>
        </table>
      </div>
    `;
  }

  async function render(view = state.view) {
    setActive(view);
    try {
      if (view === "products") return await renderProducts();
      if (view === "categories") return await renderCategories();
      if (view === "quotes") return await renderQuotes();
      if (view === "customers") return await renderCustomers();
      if (view === "audit") return await renderAudit();
      return await renderDashboard();
    } catch (err) {
      error(err.message);
    }
  }

  root.addEventListener("click", async (event) => {
    const viewButton = event.target.closest("[data-view]");
    if (viewButton) render(viewButton.dataset.view);

    if (event.target.closest("[data-refresh]")) render();

    const edit = event.target.closest("[data-product-edit]");
    if (edit) {
      const name = window.prompt("Product name", edit.dataset.name || "");
      if (!name) return;
      const status = window.prompt("Status: publish, draft or pending", edit.dataset.status || "draft") || "draft";
      const moq = window.prompt("MOQ", edit.dataset.moq || "");
      await api(`/products/${edit.dataset.productEdit}`, {
        method: "PATCH",
        body: JSON.stringify({ name, status, moq }),
      });
      render("products");
    }

    const duplicate = event.target.closest("[data-product-duplicate]");
    if (duplicate) {
      await api(`/products/${duplicate.dataset.productDuplicate}/duplicate`, { method: "POST", body: "{}" });
      render("products");
    }

    const trash = event.target.closest("[data-product-trash]");
    if (trash && window.confirm("Move this product to Trash?")) {
      await api(`/products/${trash.dataset.productTrash}`, { method: "DELETE" });
      render("products");
    }

    const note = event.target.closest("[data-note-for]");
    if (note) {
      const text = window.prompt("Internal note");
      if (text) {
        await api(`/quotes/${note.dataset.noteFor}/notes`, { method: "POST", body: JSON.stringify({ note: text }) });
        render("quotes");
      }
    }

    const rename = event.target.closest("[data-category-rename]");
    if (rename) {
      const name = window.prompt("Category name", rename.dataset.name || "");
      if (!name) return;
      await api(`/categories/${rename.dataset.categoryRename}`, { method: "PATCH", body: JSON.stringify({ name }) });
      render("categories");
    }

    const deleteCategory = event.target.closest("[data-category-delete]");
    if (deleteCategory && window.confirm("Delete this category? Products will not be deleted.")) {
      await api(`/categories/${deleteCategory.dataset.categoryDelete}`, { method: "DELETE" });
      render("categories");
    }
  });

  root.addEventListener("change", async (event) => {
    const status = event.target.closest("[data-quote-status]");
    if (status) {
      await api(`/quotes/${status.dataset.quoteStatus}`, { method: "PATCH", body: JSON.stringify({ status: status.value }) });
      render("quotes");
    }
  });

  root.addEventListener("submit", async (event) => {
    const productForm = event.target.closest("[data-product-create]");
    const categoryForm = event.target.closest("[data-category-create]");
    if (!productForm && !categoryForm) return;
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target).entries());
    if (productForm) {
      await api("/products", { method: "POST", body: JSON.stringify(data) });
      render("products");
    }
    if (categoryForm) {
      await api("/categories", { method: "POST", body: JSON.stringify(data) });
      render("categories");
    }
  });

  render("dashboard");
}());
