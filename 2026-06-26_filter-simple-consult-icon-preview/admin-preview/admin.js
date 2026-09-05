const loginScreen = document.querySelector("[data-login-screen]");
const adminApp = document.querySelector("[data-admin-app]");
const loginForm = document.querySelector("[data-login-form]");
const pageTitle = document.querySelector("[data-page-title]");
const pageLabel = document.querySelector("[data-page-label]");
const pageSummary = document.querySelector("[data-page-summary]");
const sidebar = document.querySelector("[data-sidebar]");

const pageCopy = {
  overview: ["业务概览", "实时查看 AOLOLA 的产品、询盘与采购机会。"],
  products: ["产品目录", "管理产品资料、图片、规格、MOQ 与分类。"],
  inquiries: ["询盘中心", "统一处理来自网站和 WhatsApp 的客户需求。"],
  customers: ["客户", "查看客户资料、采购记录与沟通状态。"],
  quotes: ["报价单", "管理待发送、协商中和已确认的报价单。"],
  orders: ["订单", "跟进订单、生产进度与交付状态。"],
  settings: ["设置", "配置团队、通知与业务规则。"],
};

function showToast(message) {
  document.querySelector(".view-toast")?.remove();
  const toast = document.createElement("div");
  toast.className = "view-toast";
  toast.textContent = message;
  document.body.append(toast);
  window.setTimeout(() => toast.remove(), 2200);
}

loginForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  loginScreen.hidden = true;
  adminApp.hidden = false;
});

document.querySelectorAll("[data-view]").forEach((button) => {
  button.addEventListener("click", () => {
    const view = button.dataset.view;
    const [title, summary] = pageCopy[view] || pageCopy.overview;
    pageTitle.textContent = title;
    pageLabel.textContent = title;
    pageSummary.textContent = summary;
    document.querySelectorAll(".sidebar-link").forEach((item) => item.classList.toggle("is-active", item === button));
    sidebar.classList.remove("is-open");
    showToast(`${title}布局预览`);
  });
});

document.querySelector("[data-menu-button]")?.addEventListener("click", () => sidebar.classList.toggle("is-open"));
document.querySelector("[data-add-product]")?.addEventListener("click", () => showToast("新增产品表单将在真实后台阶段接入"));
