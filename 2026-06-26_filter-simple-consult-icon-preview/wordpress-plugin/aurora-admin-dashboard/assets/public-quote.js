(function () {
  if (!window.AuroraQuoteApi) return;

  const FORM_SELECTOR = "form[data-aurora-quote-form], .contact-grid form.form-grid";

  function quoteItemsFromStorage() {
    try {
      const raw = window.localStorage.getItem("auroraQuoteItems");
      const items = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(items)) return [];
      return items.map((item) => ({
        product_id: item.product_id || item.id || 0,
        sku: item.sku || "",
        product_name: item.product_name || item.name || item.title || "",
        category: item.category || "",
        quantity: item.quantity || item.qty || "",
        finish: item.finish || "",
        custom_requirement: item.custom_requirement || "",
      }));
    } catch (error) {
      return [];
    }
  }

  function getStatus(form) {
    let status = form.querySelector("[data-aurora-quote-status]");
    if (!status) {
      status = document.createElement("div");
      status.className = "aurora-quote-status";
      status.setAttribute("data-aurora-quote-status", "");
      form.appendChild(status);
    }
    return status;
  }

  function setStatus(form, message, type) {
    const status = getStatus(form);
    status.textContent = message;
    status.dataset.state = type || "info";
  }

  function getUrlParam(name) {
    return new URLSearchParams(window.location.search).get(name) || "";
  }

  function formPayload(form) {
    const data = new FormData(form);
    const payload = {};
    data.forEach((value, key) => {
      payload[key] = String(value).trim();
    });
    payload.source_page = window.location.href;
    payload.utm_source = getUrlParam("utm_source");
    payload.utm_medium = getUrlParam("utm_medium");
    payload.utm_campaign = getUrlParam("utm_campaign");
    payload.items = quoteItemsFromStorage();
    if (!payload.items.length && (payload.product || payload.sku || payload.category || payload.quantity || payload.custom_requirement)) {
      payload.items = [{
        product_name: payload.product || payload.product_name || "",
        sku: payload.sku || "",
        category: payload.category || "",
        quantity: payload.quantity || "",
        finish: payload.finish || "",
        custom_requirement: payload.custom_requirement || "",
      }];
    }
    return payload;
  }

  async function submitQuote(form) {
    const payload = formPayload(form);
    const button = form.querySelector('button[type="submit"], .btn-primary');
    const previousText = button ? button.textContent : "";
    if (button) {
      button.disabled = true;
      button.textContent = AuroraQuoteApi.messages.sending || "Sending...";
    }
    setStatus(form, AuroraQuoteApi.messages.sending || "Sending...", "loading");

    try {
      const response = await fetch(AuroraQuoteApi.endpoint, {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.ok) {
        throw new Error(result.message || AuroraQuoteApi.messages.error || "Request failed");
      }
      setStatus(form, AuroraQuoteApi.messages.success || "Thank you. Your quote request has been received.", "success");
      form.reset();
    } catch (error) {
      setStatus(form, error.message || AuroraQuoteApi.messages.error || "Unable to send the request.", "error");
    } finally {
      if (button) {
        button.disabled = false;
        button.textContent = previousText;
      }
    }
  }

  document.addEventListener("submit", function (event) {
    const form = event.target && event.target.closest ? event.target.closest(FORM_SELECTOR) : null;
    if (!form || form.dataset.auroraQuoteSubmitting === "true") return;
    event.preventDefault();
    event.stopImmediatePropagation();
    form.dataset.auroraQuoteSubmitting = "true";
    submitQuote(form).finally(() => {
      form.dataset.auroraQuoteSubmitting = "false";
    });
  }, true);
}());
