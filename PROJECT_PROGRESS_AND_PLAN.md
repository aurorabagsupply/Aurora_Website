# Aurora Bag Supply 项目进度与上传计划

更新时间：2026-06-06

## 当前结论

接手校准后，当前实际最新可继续开发版本是：

`C:\Users\Administrator\Desktop\Aurora_Website_Previews\2026-06-06_21-16_no-image-letterbox-card-preview`

说明：

- `2026-06-06_14-05_product-update-workflow-preview` 主要新增产品上传与每周更新工作区。
- 21:16 版本继承了后续信息页 SEO、卡片深度、产品展示舞台等优化，并将卡片图片改为铺满图片区，去掉左右白边。
- 继续改站点页面、静态预览或 WordPress 主题时，应从 21:16 版本开始新建版本目录。

另一个盘里也有同步目录：

`Y:\Aurora_Website_Previews`

`Y:` 盘版本目录更完整，包含 2026-06-01 到 2026-06-05 的早期演进记录；桌面版本从 2026-06-02 起保留了主要预览和资料。

## 已找到的 Markdown

桌面 `Aurora_Website_Previews` 内仍有 39 个 `.md`，主要是各版本目录里的 `README_NEXT_STEPS.md`，内容是早期通用说明。根目录没有找到原来的项目进度/计划/记忆类 `.md`。

`Y:\Aurora_Website_Previews` 根目录也没有 `.md`。回收站定向搜索 `.md` 没有结果。

因此，本文件是根据当前文件夹实物重新恢复出来的项目进度与计划。

## 项目定位

项目名称：Aurora Bag Supply

目标：搭建一个 WordPress + WooCommerce 独立站，面向 B2B 采购客户，展示箱包相关供应品类，并支持询价、账户、购物车/询盘清单、结账/提交需求等流程。

核心方向：

- 不是普通零售站，而是 B2B procurement / wholesale / quote-oriented site。
- 参考 Buckleguy 类型的采购站结构，但品牌、视觉、产品和内容使用 Aurora Bag Supply。
- 重点品类：Accessories、Bag、Hardware、Leather、Tools、Zipper。
- 主要转化动作：Request a Quote / Send Inquiry / Contact Us。

## 当前最新版本内容

最新目录：

`2026-06-05_17-22_dark-brown-nav-process-preview`

包含：

- 静态预览页：`index.html`、`products.html`、`product-detail.html`、`account.html`、`cart.html`、`checkout.html`、`about.html`、`contact.html`
- WordPress 主题源码：`wordpress-theme\aurora-bag-supply`
- WooCommerce 模板：`woocommerce\archive-product.php`、`content-product.php`、`single-product.php`、`single-product\tabs\tabs.php`
- 首页 6 类 hero 图片：Bag、Hardware、Leather、Zipper、Accessories、Tools
- logo：`assets\logo\aurora-ab-logo.jpg` 和 `.svg`
- 产品图片：6 大类共 130 张
- CSV 草稿：`Aurora_Six_Category_Product_Import_Draft.csv`
- 视觉检查截图：hero、多语言、产品轮播、筛选侧栏等

产品图片数量：

- Bag：30
- Hardware：20
- Leather：20
- Zipper：20
- Accessories：20
- Tools：20

MOQ 设定：

- Bag：100 pcs
- Hardware：500 pcs
- Leather：50 pcs
- Zipper：1000 pcs
- Accessories：300 pcs
- Tools：50 pcs

## 已完成进度

1. 站点基本结构已完成

- 首页
- 产品列表
- 产品详情
- 账户页
- 购物车/询价清单
- 结账/提交询盘
- 关于我们
- 联系我们

2. WordPress 主题雏形已完成

- 支持 WooCommerce
- 注册主导航、分类导航、页脚菜单
- 加载自定义 CSS/JS
- 包含 front-page、about、contact、my-account 页面模板
- 包含 WooCommerce 商品归档、商品卡片、单品页模板
- 有 Request a Quote 按钮/短代码逻辑
- 注册页增加 B2B 字段：Company Name、Country、WhatsApp / WeChat、Business Type

3. 前端交互已完成

- 6 类首页 hero carousel
- hero 自动播放，当前配置约 5 秒切换
- 产品 carousel，当前配置约 3.6 秒切换
- 产品筛选侧栏
- 搜索、排序、筛选、空结果提示
- 本地 quote/cart 交互
- 产品详情图库与标签页
- 语言切换
- 移动端菜单

4. 多语言已做

语言列表：

- English
- 中文
- Russian
- Spanish
- French
- German
- Italian
- Arabic

已处理过中文乱码、俄语长文本、阿拉伯语/RTL、语言按钮和多语言同步检查。

5. 视觉方向已定

当前风格：

- 中深棕色导航与页脚
- 白色/米色纸感背景
- 黄铜色点缀
- 紧凑 B2B 采购布局
- 品类卡片方图
- 页脚包含联系信息、服务支持、社媒入口
- header 保持 sticky

6. 联系与品牌信息已写入当前版本

- Brand：Aurora Bag Supply
- Tel：(86)13500014739
- Email：aurorabagsupply@gmail.com
- Address：Room 318, Building A, No.4 Helong 3rd Road, Baiyun District, Guangzhou
- Social：Instagram、Facebook、Pinterest、YouTube 链接已放入页脚

## 版本演进记录

根据目录名恢复出的主要演进：

- 2026-06-01：基础当前预览、多语言、语言下拉、市场翻译
- 2026-06-02：图片路径修复、Buckleguy 风格 UI、WooCommerce 结构、采购 UI、6 大品类产品、筛选语言优化、完整语言同步、目录标题修复
- 2026-06-03：hero cover、多语言视觉检查、hero 5 秒自动播放
- 2026-06-04：产品轮播、SEO 筛选侧栏、B2B 账户/结账/筛选
- 2026-06-05：分类卡片颜色与间距、footer 支持区、logo 与公司信息、footer 图标布局、社媒、sticky header、深棕导航和最终视觉处理

## 重要路径

当前最新预览入口：

`C:\Users\Administrator\Desktop\Aurora_Website_Previews\2026-06-05_17-22_dark-brown-nav-process-preview\index.html`

当前主题源码：

`C:\Users\Administrator\Desktop\Aurora_Website_Previews\2026-06-05_17-22_dark-brown-nav-process-preview\wordpress-theme\aurora-bag-supply`

当前产品 CSV：

`C:\Users\Administrator\Desktop\Aurora_Website_Previews\2026-06-05_17-22_dark-brown-nav-process-preview\Aurora_Six_Category_Product_Import_Draft.csv`

原始产品图片资料：

`C:\Users\Administrator\Desktop\Aurora_Website_Previews\Product Information`

设计稿/hero 图：

`C:\Users\Administrator\Desktop\Aurora_Website_Previews\Website design draft`

## WordPress 上传计划

### 第 1 步：上传前确认

- 确认最终使用 `2026-06-05_17-22_dark-brown-nav-process-preview`。
- 不要上传 `edge-profile-*` 目录，这些是浏览器测试配置/缓存。
- 不要直接使用旧的 `aurora-bag-supply-woocommerce-theme-preview.zip` 作为最终包，它是 2026-06-02 的早期 zip。
- 最终主题 zip 应该只从 `wordpress-theme\aurora-bag-supply` 文件夹重新打包。

### 第 2 步：WordPress 环境准备

- 确认 WordPress 已安装并能登录后台。
- 安装并启用 WooCommerce。
- 建议安装产品导入工具，优先用 WooCommerce 自带 CSV importer。
- 如果站点已有内容，先备份数据库和 `wp-content`。

### 第 3 步：制作主题 ZIP

要打包的文件夹：

`wordpress-theme\aurora-bag-supply`

ZIP 里面第一层必须是：

`aurora-bag-supply\style.css`

不要变成：

`2026-06-05_17-22_dark-brown-nav-process-preview\wordpress-theme\aurora-bag-supply\style.css`

否则 WordPress 会识别失败。

### 第 4 步：上传主题

WordPress 后台路径：

Appearance / Themes / Add New / Upload Theme

上传新打包的 `aurora-bag-supply.zip`，安装后启用。

### 第 5 步：页面与菜单设置

需要创建或绑定：

- Home
- Shop / Products
- About
- Contact
- My Account
- Cart
- Checkout

设置：

- Settings / Reading：Homepage 指向 Home
- WooCommerce / Settings / Advanced：绑定 Cart、Checkout、My Account
- Appearance / Menus：设置 Primary Navigation、Category Navigation、Footer Products、Footer Support、Footer Company

### 第 6 步：上传媒体和导入产品

产品图片本地路径在 CSV 中仍是：

`assets/catalog/...`

WooCommerce 正式导入前需要处理图片：

- 方案 A：先把图片上传到 WordPress Media Library，再把 CSV 图片路径替换为媒体 URL。
- 方案 B：把图片作为主题静态资源展示，但 WooCommerce 商品主图仍建议用媒体库 URL。

产品导入草稿：

`Aurora_Six_Category_Product_Import_Draft.csv`

导入后需要检查：

- SKU 是否唯一
- Category 是否正确
- MOQ 是否保留
- Price 是否保持 Request Quote 逻辑
- 主图/图库是否显示
- 商品详情页规格表是否显示

### 第 7 步：上线前检查

- 首页 hero 6 类轮播是否正常。
- 多语言切换是否影响布局。
- 产品列表筛选、排序、搜索是否可用。
- 商品详情页图片、规格、询价按钮是否正常。
- Cart、Checkout、My Account 是否走 WooCommerce 页面。
- Contact 表单是否改成正式表单插件或后台收件逻辑，不建议长期只用 `mailto:`。
- 移动端 header、菜单、筛选侧栏、页脚是否不重叠。
- 固定链接保存一次：Settings / Permalinks / Save Changes。

## 下一步优先级

1. 重新打包最新主题 ZIP。
2. 在测试 WordPress 站点上传并启用主题。
3. 配 WooCommerce 页面和菜单。
4. 处理产品图片 URL 与 CSV 导入。
5. 检查移动端和多语言布局。
6. 把 Contact 从 `mailto:` 改成正式表单方案。
7. 上线前做备份、SEO 标题描述、站点图标、SSL、固定链接、缓存检查。

## 当前风险

- 当前主题是预览/开发包，还不是经过 WordPress 实站完整测试的最终包。
- 旧 zip 不是最新版本，不能直接当最终上传包。
- CSV 中图片路径是本地/相对路径，直接导入 WooCommerce 可能无法生成商品主图。
- 多语言现在主要由前端 JS 处理，正式多语言 SEO 如需独立 URL，需要后续接 WPML / Polylang / TranslatePress 等方案。
- Contact 页当前 WordPress 模板使用 `mailto:`，正式站建议换成 Contact Form 7 / WPForms / Fluent Forms。
- `edge-profile-*` 目录体积大且无上传价值，打包时必须排除。
