const loginScreen = document.querySelector("[data-login-screen]");
const adminApp = document.querySelector("[data-admin-app]");
const loginForm = document.querySelector("[data-login-form]");
const loginError = document.querySelector("[data-login-error]");
const root = document.querySelector("[data-view-root]");
const sidebar = document.querySelector("[data-sidebar]");
const pageLabel = document.querySelector("[data-page-label]");
const modal = document.querySelector("[data-modal]");
let failures = 0;

const rows = [
  { id: "INQ-260905-018", company: "Brightfield Studio", contact: "Amelia Hunt", country: "London, United Kingdom", product: "Hardware Product 04", qty: "2,000 pcs", source: "Website", status: "New", time: "12 min ago", sales: "Lin Zhang" },
  { id: "INQ-260905-017", company: "Novea Goods", contact: "Maya Brown", country: "Melbourne, Australia", product: "Finished Bags 02, 06", qty: "600 pcs", source: "WhatsApp", status: "Contacted", time: "38 min ago", sales: "Lin Zhang" },
  { id: "INQ-260904-016", company: "Horizon Leather", contact: "Victor Chen", country: "Toronto, Canada", product: "Leather Material 02", qty: "300 m", source: "Website", status: "Quoting", time: "2 h ago", sales: "Unassigned", more: "+3 more" }
];
const meta = {
  overview: ["Overview", "业务概览", "实时查看 AOLOLA 的产品、询盘与采购机会。"],
  inquiries: ["Inquiries", "询盘中心", "统一处理来自网站与 WhatsApp 的采购需求。"],
  quotes: ["Quotes", "报价单", "从询盘到正式报价，保持每一次沟通清晰可追踪。"],
  products: ["Products", "产品目录", "管理产品资料、图片、规格、MOQ 与发布状态。"],
  categories: ["Categories", "产品分类", "组织箱包五金、包袋、皮革和配件的目录结构。"],
  media: ["Media", "媒体库", "集中管理用于目录、内容与询盘的产品图片。"],
  content: ["Content / SEO", "内容与 SEO", "管理页面内容、搜索标题、描述与网址结构。"],
  customers: ["Customers", "客户", "查看联系人、采购记录与沟通历史。"],
  companies: ["Companies", "公司", "维护 B2B 公司资料、团队联系人与采购机会。"],
  orders: ["Orders", "订单", "跟进订单、生产状态、交期与交付。"],
  analytics: ["Analytics", "数据分析", "持续观察询盘来源、转化与业务趋势。"],
  users: ["Users & Roles", "用户与权限", "为团队成员分配最小必要的访问权限。"],
  settings: ["Settings", "设置", "管理系统通知、业务规则与安全配置。"]
};

function toast(message) {
  document.querySelector(".view-toast")?.remove();
  const item = document.createElement("div");
  item.className = "view-toast";
  item.textContent = message;
  document.body.append(item);
  setTimeout(() => item.remove(), 2400);
}
function head(view, action) {
  const value = meta[view];
  return '<section class="page-head"><div><p class="eyebrow">AOLOLA ADMIN / ' + value[0].toUpperCase() + '</p><h1>' + value[1] + '</h1><p>' + value[2] + '</p></div>' + (action || "") + '</section>';
}
function btn(text, action, tone) { return '<button class="button button--' + (tone || "light") + '" type="button" data-action="' + action + '">' + text + '</button>'; }
function status(value) { return '<span class="status status--' + value.toLowerCase() + '">' + value + '</span>'; }
function desktopRows() {
  return '<div class="data-table desktop-table"><table><thead><tr><th>Inquiry ID</th><th>Company / Contact</th><th>Products</th><th>Quantity</th><th>Source</th><th>Status</th><th>Assigned sales</th><th></th></tr></thead><tbody>' + rows.map((r) => '<tr><td><strong>' + r.id + '</strong><small>' + r.time + '</small></td><td><strong>' + r.company + '</strong><small>' + r.contact + ' · ' + r.country + '</small></td><td>' + r.product + (r.more ? '<small>' + r.more + '</small>' : "") + '</td><td>' + r.qty + '</td><td>' + r.source + '</td><td>' + status(r.status) + '</td><td>' + r.sales + '</td><td><button class="row-button" data-action="view-inquiry" type="button">View</button></td></tr>').join("") + '</tbody></table></div>';
}
function mobileRows() {
  return '<div class="inquiry-cards mobile-only">' + rows.map((r) => '<article class="inquiry-card"><div class="inquiry-card__top"><div><strong>' + r.company + '</strong><small>' + r.country + '</small></div>' + status(r.status) + '</div><div class="inquiry-card__product"><strong>' + r.product + '</strong>' + (r.more ? '<span>' + r.more + '</span>' : "") + '<small>' + r.qty + '</small></div><div class="inquiry-card__bottom"><span>' + r.time + '</span><div><button class="text-button" type="button" data-action="view-inquiry">查看询盘</button><button class="text-button" type="button" data-action="whatsapp">WhatsApp</button></div></div></article>').join("") + '</div>';
}
function overview() {
  return head("overview", '<button class="period-button" type="button" data-action="period">近 30 天 <span>⌄</span></button>') +
    '<section class="metrics"><button class="metric" data-view="inquiries"><span>待处理询盘</span><strong>18</strong><small class="trend">+24.1% <em>vs 上月</em></small></button><button class="metric" data-view="quotes"><span>报价金额</span><strong>$48,600</strong><small class="trend">+12.5% <em>vs 上月</em></small></button><button class="metric" data-view="customers"><span>活跃客户</span><strong>386</strong><small class="trend">+8.2% <em>vs 上月</em></small></button><button class="metric" data-view="products"><span>目录产品</span><strong>124</strong><small>6 个主要分类</small></button></section>' +
    '<section class="panel table-panel priority-panel"><div class="panel-head"><div><h2>最新询盘</h2><p>需要优先跟进的客户需求</p></div><div class="panel-actions"><button class="filter-button" data-action="filter">筛选</button><button class="text-button" data-view="inquiries">全部询盘 →</button></div></div>' + desktopRows() + mobileRows() + '</section>' +
    '<section class="dashboard-grid"><section class="panel funnel-panel"><div class="panel-head"><div><h2>询盘转化</h2><p>本月采购机会的推进情况</p></div><button class="text-button" data-view="analytics">查看分析 →</button></div><div class="funnel"><div class="funnel-row"><span>新询盘</span><div><i style="--width:100%"></i></div><strong>18</strong><small>100%</small></div><div class="funnel-row"><span>已沟通</span><div><i style="--width:67%"></i></div><strong>12</strong><small>66.7%</small></div><div class="funnel-row"><span>报价中</span><div><i style="--width:39%"></i></div><strong>7</strong><small>38.9%</small></div><div class="funnel-row"><span>已成交</span><div><i style="--width:22%"></i></div><strong>4</strong><small>22.2%</small></div></div></section><section class="panel activity-panel"><div class="panel-head"><div><h2>最新动态</h2><p>团队近期操作记录</p></div><button class="text-button" data-view="analytics">操作日志 →</button></div><ol class="activity-list"><li><i></i><p><strong>Lin Zhang</strong> 更新了 ABS-HDW-004 的 MOQ<small>MOQ: 500 → 300 · 12 分钟前</small></p></li><li><i></i><p><strong>Brightfield Studio</strong> 提交了新的五金产品询盘<small>12 分钟前</small></p></li><li><i></i><p><strong>Quote Q-2048</strong> 已通过 WhatsApp 发送<small>38 分钟前</small></p></li></ol></section></section>';
}
function inquiries() {
  return head("inquiries", btn("+ 新建询盘", "new-record", "dark")) + '<section class="toolbar"><label><span>⌕</span><input type="search" placeholder="搜索 Inquiry ID、公司、联系人" /></label><button class="filter-button" data-action="filter">Status: All</button><button class="filter-button" data-action="filter">Source: All</button><button class="filter-button" data-action="filter">Sort: Newest</button></section><section class="panel table-panel"><div class="panel-head"><div><h2>所有询盘</h2><p>支持按状态、来源、销售负责人和时间筛选。</p></div><span class="count-label">18 open</span></div>' + desktopRows() + mobileRows() + '</section>';
}
function products() {
  const productRows = [["Finished Bags 04", "ABS-BAG-004", "Bags", "Published"], ["Hardware Product 04", "ABS-HDW-004", "Hardware", "Published"], ["Leather Material 02", "ABS-LTH-002", "Leather", "Draft"]];
  return head("products", btn("+ 新增产品", "new-record", "dark")) + '<section class="toolbar"><label><span>⌕</span><input type="search" placeholder="按产品名或 SKU 搜索" /></label><button class="filter-button" data-action="filter">Category</button><button class="filter-button" data-action="filter">Status</button></section><section class="panel table-panel"><div class="panel-head"><div><h2>产品库</h2><p>产品字段：图片、材质、表面处理、颜色、尺寸、MOQ、描述与 SEO。</p></div><span class="count-label">124 products</span></div><div class="data-table"><table><thead><tr><th>Product</th><th>SKU</th><th>Category</th><th>MOQ</th><th>Updated</th><th>Status</th><th></th></tr></thead><tbody>' + productRows.map((p) => '<tr><td><strong>' + p[0] + '</strong><small>Images · Material · Finish · SEO</small></td><td>' + p[1] + '</td><td>' + p[2] + '</td><td>300 pcs</td><td>05 Sep 2026</td><td>' + status(p[3]) + '</td><td><button class="row-button" data-action="edit-product">Edit</button><button class="row-button row-button--danger" data-action="delete-product">Delete</button></td></tr>').join("") + '</tbody></table></div></section><section class="detail-grid"><article class="panel compact-panel"><h2>产品编辑字段</h2><p>Product name、SKU、Category、Images、Material、Finish、Color、Size、MOQ、Description、SEO title、Meta description、Slug 与 Status。</p></article><article class="panel compact-panel"><h2>目录操作</h2><p>支持新增、编辑、复制、草稿、发布、下架和二次确认删除。</p>' + btn("复制当前产品", "duplicate-product") + '</article></section>';
}
function quotes() {
  return head("quotes", btn("+ 创建报价", "new-record", "dark")) + '<section class="panel table-panel"><div class="panel-head"><div><h2>报价管理</h2><p>从询盘生成报价，并保留版本、沟通与有效期。</p></div><div class="panel-actions"><button class="filter-button" data-action="filter">Status</button><button class="filter-button" data-action="filter">Currency</button></div></div><div class="data-table"><table><thead><tr><th>Quote ID</th><th>Customer</th><th>Products / Qty</th><th>Total</th><th>Validity</th><th>Status</th><th></th></tr></thead><tbody><tr><td><strong>Q-2048</strong><small>From INQ-260905-018</small></td><td>Brightfield Studio</td><td>Hardware Product 04<br /><small>2,000 pcs</small></td><td>USD 12,800</td><td>19 Sep 2026</td><td>' + status("Quoting") + '</td><td><button class="row-button" data-action="quote-actions">PDF / Email / WhatsApp</button></td></tr><tr><td><strong>Q-2047</strong></td><td>Novea Goods</td><td>Finished Bags 02, 06<br /><small>600 pcs</small></td><td>USD 8,400</td><td>16 Sep 2026</td><td>' + status("Negotiating") + '</td><td><button class="row-button" data-action="quote-actions">View</button></td></tr></tbody></table></div></section><section class="panel compact-panel"><h2>报价字段</h2><p>单价、总价、币种、MOQ、交期、可提供表面处理、有效期、备注与状态；正式系统将支持 PDF、Email、WhatsApp 及 Convert to Order。</p></section>';
}
function placeholder(view) {
  const copy = { categories: "6 个主营分类，支持层级、排序和关联产品。", media: "图片资产将与产品、内容和询盘共享使用。", content: "控制首页、分类页、产品页和文章的内容与 SEO。", customers: "联系人资料、询盘、报价、订单及最近沟通会集中展示。", companies: "公司与联系人分开维护，保留国家、邮箱、WhatsApp、销售负责人和备注。", orders: "订单将继承报价、交期、生产和交付信息。", analytics: "关键指标、来源归因、转化漏斗与操作审计。", users: "Owner、Admin、Sales、Product Editor、Viewer 具有不同访问权限。", settings: "通知、业务规则、会话、安全与系统设置。" }[view];
  const rbac = view === "users" ? '<section class="panel permission-panel"><div class="permission-row"><strong>Owner</strong><span>Full business, users and security access</span></div><div class="permission-row"><strong>Admin</strong><span>Operations, catalog and customer access</span></div><div class="permission-row"><strong>Sales</strong><span>Inquiries, quotes, customers and orders only</span></div><div class="permission-row"><strong>Product Editor</strong><span>Catalog, media and content only</span></div><div class="permission-row"><strong>Viewer</strong><span>Read-only reporting access</span></div></section>' : "";
  const audit = view === "analytics" ? '<section class="panel audit-panel"><div class="panel-head"><div><h2>Audit Log</h2><p>所有重要后台操作会在正式系统中持久化。</p></div></div><div class="audit-row"><strong>Lin Zhang</strong><span>Updated product ABS-HDW-004</span><span>MOQ: 500 → 300</span><small>2026-09-05 10:32</small></div><div class="audit-row"><strong>Admin</strong><span>Changed inquiry INQ-260905-018</span><span>New → Contacted</span><small>2026-09-05 10:18</small></div></section>' : "";
  return head(view, btn(view === "users" ? "+ Invite user" : "+ Add new", "new-record", "dark")) + '<section class="panel placeholder-panel"><p class="eyebrow">' + meta[view][0].toUpperCase() + '</p><h2>' + meta[view][1] + ' 工作区</h2><p>' + copy + '</p><div class="placeholder-actions">' + btn("查看数据结构", "architecture") + btn("新增记录", "new-record", "dark") + '</div></section>' + rbac + audit;
}
function render(view) {
  const target = view || "overview";
  pageLabel.textContent = meta[target][0];
  document.querySelectorAll("[data-view]").forEach((item) => item.classList.toggle("is-active", item.dataset.view === target));
  root.innerHTML = target === "overview" ? overview() : target === "inquiries" ? inquiries() : target === "products" ? products() : target === "quotes" ? quotes() : placeholder(target);
  sidebar.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const values = new FormData(loginForm);
  if (failures >= 3) { loginError.hidden = false; return; }
  if (!values.get("email") || String(values.get("password")).length < 4) { failures += 1; loginError.hidden = failures < 3; toast(failures >= 3 ? "演示登录已临时锁定" : "无法完成演示登录，请检查输入"); return; }
  loginScreen.hidden = true; adminApp.hidden = false; render();
});
document.addEventListener("click", (event) => {
  const view = event.target.closest("[data-view]")?.dataset.view;
  if (view) render(view);
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (action === "delete-product") modal.showModal();
  if (action === "view-inquiry") render("inquiries");
  if (action === "whatsapp") toast("WhatsApp 询盘动作将在真实 API 接入后启用");
  if (action === "quote-actions") toast("PDF、Email、WhatsApp 和转订单操作已预留");
  if (action && ["new-record", "edit-product", "duplicate-product"].includes(action)) toast("这是静态原型，正式表单将在后端接入后启用");
  if (action === "filter" || action === "period") toast("筛选、搜索和排序已为真实 API 预留");
  if (action === "architecture") toast("字段与权限架构已在当前预览中展示");
  if (event.target.closest("[data-menu-button]")) { sidebar.classList.add("is-open"); document.body.classList.add("menu-open"); }
  if (event.target.closest("[data-close-menu]")) { sidebar.classList.remove("is-open"); document.body.classList.remove("menu-open"); }
  if (event.target.closest("[data-logout]")) { adminApp.hidden = true; loginScreen.hidden = false; loginForm.reset(); toast("已退出演示后台"); }
  if (event.target.closest("[data-forgot-password]")) toast("正式系统将通过安全邮件重设密码");
  if (event.target.closest("[data-notifications]")) toast("3 个需要处理的通知");
  if (event.target.closest("[data-profile]")) toast("个人资料与 2FA 设置将在真实认证阶段接入");
});
document.querySelector("[data-confirm-delete]").addEventListener("click", () => toast("产品删除动作已确认（演示数据未改变）"));
document.querySelector("[data-global-search]").addEventListener("keydown", (event) => { if (event.key === "Enter") { event.preventDefault(); toast("正在搜索：" + event.target.value); } });
