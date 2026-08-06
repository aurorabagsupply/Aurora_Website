# WordPress Continuation Note

更新时间：2026-07-28

## 当前结论

本次接手时，根目录没有找到原先提到的 `WordPress_Continuation_Note.md`。已根据现有记录和目录实物重新确认当前进度，并补建本文件作为后续优先读取记录。

当前应继续使用的最新版本目录：

`C:\Users\Administrator\Desktop\Aurora_Website_Previews\2026-06-26_filter-simple-consult-icon-preview`

当前 WordPress 主题源码目录：

`C:\Users\Administrator\Desktop\Aurora_Website_Previews\2026-06-26_filter-simple-consult-icon-preview\wordpress-theme\aurora-bag-supply`

当前最终可上传主题 ZIP：

`C:\Users\Administrator\Desktop\Aurora_Website_Previews\2026-06-26_filter-simple-consult-icon-preview\aurora-bag-supply-v1.0.63-preview.zip`

## 本次已完成

- 确认不要继续使用 2026-06-02 的早期静态主题包。
- 确认当前最新目录是 2026-06-26 的 `filter-simple-consult-icon-preview`。
- 从最新 `wordpress-theme\aurora-bag-supply` 重新生成 WordPress 上传包。
- 修复 WordPress 中产品图片相对路径隐患：JS 现在优先读取 `window.AURORA_THEME_ASSET_BASE`，上传后图片会指向主题 assets 目录。
- 同步修复静态预览 JS 和 WordPress 主题 JS，保持两边一致。
- 补齐 WordPress 主题内缺失的 `assets/images` 通用图片，包括 `factory.jpg` 和 `quality.jpg`。
- 主题版本号更新到 `1.0.63-preview`。

## 已验证

- `node --check` 已通过：`assets/js/aurora-commerce.js` 没有 JS 语法错误。
- 静态预览与 WordPress 主题的 `assets/css/aurora-commerce.css` 哈希一致。
- 静态预览与 WordPress 主题的 `assets/js/aurora-commerce.js` 哈希一致。
- WordPress 主题中已包含 `assets/images/factory.jpg` 和 `assets/images/quality.jpg`。
- ZIP 第一层结构正确：`aurora-bag-supply\style.css`。
- ZIP 包含 `functions.php`、`header.php`、WooCommerce `archive-product.php`。
- ZIP 没有包含 `edge-profile-*` 测试浏览器缓存目录。

## 上传提醒

- WordPress 后台路径：Appearance / Themes / Add New / Upload Theme。
- 上传：`aurora-bag-supply-v1.0.63-preview.zip`。
- ZIP 大小约 82 MB，若 WordPress 后台上传限制小于这个值，需要改服务器上传限制，或改用主机文件管理器 / FTP / SFTP 上传到 `wp-content/themes/`。
- 启用主题前确认 WooCommerce 已安装并启用。
- 启用后到 Settings / Permalinks 点一次 Save Changes。
- 后续产品正式导入仍建议把商品主图上传到 Media Library，并在 CSV 中使用媒体 URL。

## 仍需上线后检查

- 首页 6 类 hero 轮播是否正常显示。
- Mega Menu 白色透明覆盖层、文字展开、移动端菜单是否正常。
- Products 页面筛选行点击、选中状态、清空筛选是否正常。
- WooCommerce 商品列表、详情页、Cart、Checkout、My Account 是否使用正确页面。
- Contact 表单后续建议接 Contact Form 7 / WPForms / Fluent Forms，不建议长期只做静态或 mailto。

## 长期维护原则

维护对象：Aurora Bag Supply B2B 独立站。

项目目标：

- WordPress + WooCommerce。
- B2B 询盘模式，不按普通零售站处理。
- 核心产品分类：Bag、Hardware、Leather、Zipper、Accessories、Tools。

所有后续修改必须遵守：

- 不破坏已有功能，尤其是首页、产品目录、筛选、询盘、WooCommerce 页面和多语言基础体验。
- 修改前先复制/生成新版本目录或备份主题包。
- 保留历史记录，记录修改目录、版本号、ZIP 包、已验证内容和未验证风险。
- 优先考虑 SEO、B2B 采购路径和询盘转化，不做单纯好看但影响采购效率的改动。
