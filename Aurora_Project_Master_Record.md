# Aurora Bag Supply 项目总记录

更新时间：2026-06-06

这个文件是以后继续 WordPress 独立站上传、主题修改、产品导入时优先读取的总记录。

## 0. 接手校准记录

接手时间：2026-06-06

当前实际最新可继续开发版本：

`C:\Users\Administrator\Desktop\Aurora_Website_Previews\2026-06-06_21-16_no-image-letterbox-card-preview`

说明：

- `2026-06-06_14-05_product-update-workflow-preview` 是产品上传与每周更新流程版本，保留了产品维护工具和模板记录，但不是当前最新视觉版本。
- 21:16 版本继承了 21:00 版本，把分类卡片和产品卡片图片改为铺满图片区，去掉 `contain` 造成的左右白边。
- 21:00 版本继承了 20:44 版本，把产品目录页卡片改成更短的参考站风格：图片、标题、一个参数行、MOQ/询价行，隐藏 SKU/分类标签、快速查看、加入询价和详情链接。
- 20:44 版本继承了 20:20 版本，进一步统一分类/产品卡片边缘颜色，把图片区域改为近白底，缩短阴影外扩，并压缩产品目录页卡片高度。
- 20:20 版本继承了 20:08 版本，修正首页卡片边缘发脏、产品轮播底部浅色条不协调的问题，并把产品目录页同步为同一套无内嵌小框的产品卡片样式。
- 20:08 版本继承了 19:57 版本，并按用户反馈把首页产品卡片也改回更简洁的上方整块图片区、下方商品信息结构，保留外层圆角、边框和浮起阴影；同时把分类卡片文字区背景调浅。
- 19:57 版本继承了 19:44 版本，并按用户反馈取消分类卡片上半区的“内嵌小图片框”效果，让产品图直接占满上方图片区，同时保留外卡片圆角和浮起阴影。
- 19:44 版本继承了 18:05 版本，并按用户要求把首页分类卡片改回更简洁的大图上方、浅米文字区下方的结构，同时保留圆角和浮起阴影。
- 18:05 版本继承了 17:45、17:20、15:55、16:20 等后续视觉与信息页优化。
- 如果后续要继续产品表、CSV 导出、每周更新工具，则参考 14:05 版本里的 `Aurora_Product_Update` 工作区。
- 每次继续修改仍按既有规则新建版本目录，不直接覆盖旧版本。

## 1. 当前基准版本

当前可继续工作的主版本：

`C:\Users\Administrator\Desktop\Aurora_Website_Previews\2026-06-06_21-16_no-image-letterbox-card-preview`

另一个同步盘：

`Y:\Aurora_Website_Previews`

`Y:` 盘版本目录更完整，包含 2026-06-01 到 2026-06-05 的早期演进记录；桌面版本从 2026-06-02 起保留了主要预览和资料。

以后继续做站点，默认从当前基准版本开始，不要从旧 zip 或早期目录开始。每次生成新版本时，都新建一个版本文件夹，不直接覆盖旧版本目录。

## 2. 丢失 Markdown 排查结论

用户反馈：之前转移 `Aurora_Website_Previews` 到另一个盘时，根目录里的 `.md` 项目记录疑似不见了。

已检查：

- `C:\Users\Administrator\Desktop\Aurora_Website_Previews`
- `Y:\Aurora_Website_Previews`
- `D:\$RECYCLE.BIN`
- `E:\$RECYCLE.BIN`
- `Y:\$RECYCLE.BIN`

结果：

- 桌面 `Aurora_Website_Previews` 中仍有 39 个 `.md`，但主要是各版本目录里的 `README_NEXT_STEPS.md`。
- 根目录没有找到原来的项目进度/计划/记忆类 `.md`。
- `Y:\Aurora_Website_Previews` 根目录没有 `.md`。
- 回收站定向搜索 `.md` 没有结果。

因此，本文件是根据当前文件夹实物重新恢复出来的总项目记录。

## 3. 项目目标

项目名称：Aurora Bag Supply

目标：搭建一个 WordPress + WooCommerce 独立站，面向 B2B 采购客户，展示箱包相关供应品类，并支持询价、账户、购物车/询盘清单、结账/提交需求等流程。

核心方向：

- 不是普通零售站，而是 B2B procurement / wholesale / quote-oriented site。
- 参考 Buckleguy 类型的采购站结构，但品牌、视觉、产品和内容使用 Aurora Bag Supply。
- 重点品类：Accessories、Bag、Hardware、Leather、Tools、Zipper。
- 主要转化动作：Request a Quote / Send Inquiry / Contact Us。
- 后续要能继续维护产品和内容。

## 4. 品牌与业务信息

Brand：Aurora Bag Supply

业务：

- Bag hardware
- Leather materials
- Custom accessories
- Bags
- Zippers
- Tools
- OEM / ODM / wholesale / sample support

联系方式：

- Tel：(86)13500014739
- Email：aurorabagsupply@gmail.com
- Address：Room 318, Building A, No.4 Helong 3rd Road, Baiyun District, Guangzhou

社媒：

- Instagram：https://www.instagram.com/aurorabagsupply/
- Facebook：https://www.facebook.com/aurorabagsupply
- Pinterest：https://www.pinterest.com/aurorabagsupply/
- YouTube：https://www.youtube.com/@aurorabagsupply

## 5. 当前最新版本内容

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

重要路径：

- 当前最新预览入口：`C:\Users\Administrator\Desktop\Aurora_Website_Previews\2026-06-05_17-22_dark-brown-nav-process-preview\index.html`
- 当前主题源码：`C:\Users\Administrator\Desktop\Aurora_Website_Previews\2026-06-05_17-22_dark-brown-nav-process-preview\wordpress-theme\aurora-bag-supply`
- 当前产品 CSV：`C:\Users\Administrator\Desktop\Aurora_Website_Previews\2026-06-05_17-22_dark-brown-nav-process-preview\Aurora_Six_Category_Product_Import_Draft.csv`
- 原始产品图片资料：`C:\Users\Administrator\Desktop\Aurora_Website_Previews\Product Information`
- 设计稿/hero 图：`C:\Users\Administrator\Desktop\Aurora_Website_Previews\Website design draft`

## 6. 已完成进度

站点基本结构已完成：

- 首页
- 产品列表
- 产品详情
- 账户页
- 购物车/询价清单
- 结账/提交询盘
- 关于我们
- 联系我们

WordPress 主题雏形已完成：

- 支持 WooCommerce
- 注册主导航、分类导航、页脚菜单
- 加载自定义 CSS/JS
- 包含 front-page、about、contact、my-account 页面模板
- 包含 WooCommerce 商品归档、商品卡片、单品页模板
- 有 Request a Quote 按钮/短代码逻辑
- 注册页增加 B2B 字段：Company Name、Country、WhatsApp / WeChat、Business Type

前端交互已完成：

- 6 类首页 hero carousel
- hero 自动播放，当前配置约 5 秒切换
- 产品 carousel，当前配置约 3.6 秒切换
- 产品筛选侧栏
- 搜索、排序、筛选、空结果提示
- 本地 quote/cart 交互
- 产品详情图库与标签页
- 语言切换
- 移动端菜单

## 7. 视觉记忆

当前确定方向：

- 深棕/中棕导航和页脚。
- 黄铜色作为按钮与重点色。
- 白色、米色、纸感背景。
- B2B 采购站风格，信息密度可以偏高，但要整齐。
- 卡片圆角小，不走花哨营销页风格。
- 首页首屏用大图 hero carousel，展示 6 大品类。
- header sticky。
- 页脚保留联系信息、支持说明、社媒入口。

不要轻易改回：

- 绿色主色调
- 过亮或过浅的页脚
- 只有 logo 字母 A 的旧头部
- 早期简单版权页脚

## 8. 产品与分类记忆

6 大类：

- Bag
- Hardware
- Leather
- Zipper
- Accessories
- Tools

当前图片数量：

- Bag：30
- Hardware：20
- Leather：20
- Zipper：20
- Accessories：20
- Tools：20

SKU 规则：

- Bag：ABS-BAG-001 起
- Hardware：ABS-HDW-001 起
- Leather：ABS-LTH-001 起
- Zipper：ABS-ZIP-001 起
- Accessories：ABS-ACC-001 起
- Tools：ABS-TLS-001 起

MOQ：

- Bag：100 pcs
- Hardware：500 pcs
- Leather：50 pcs
- Zipper：1000 pcs
- Accessories：300 pcs
- Tools：50 pcs

价格逻辑：

- 当前以 `Request Quote` 为主。
- 不要默认做普通零售价电商。

## 9. 多语言记忆

当前语言：

- EN
- 中文
- RU
- ES
- FR
- DE
- IT
- AR

已经处理过：

- 中文乱码
- 俄语长文本撑开布局
- 阿拉伯语方向和显示
- 语言按钮位置
- 多语言产品页同步

重点要求：

- 每次新增页面、页脚链接、筛选项、按钮、提示语后，都必须同步到语言切换逻辑。
- 用户切换到哪种语言，页面标题、正文、按钮、页脚、筛选和提示信息就应尽量显示哪种语言。
- 不要只改中文/英文静态 HTML 后忘记 JS 里的多语言文案。

如果继续改文案，要同步检查：

- 首页 hero
- 分类卡片
- 产品列表
- 页脚
- 联系页
- 账户/结账页

## 10. 当前主题文件

主题目录：

`2026-06-05_17-22_dark-brown-nav-process-preview\wordpress-theme\aurora-bag-supply`

关键文件：

- `style.css`：WordPress 主题头信息
- `functions.php`：主题支持、资源加载、WooCommerce wrapper、询价按钮、注册字段
- `header.php`：顶部条、logo、搜索、账户/购物车、分类导航
- `footer.php`：联系信息、页脚菜单、社媒
- `front-page.php`：首页结构
- `page-about.php`
- `page-contact.php`
- `page-my-account.php`
- `woocommerce\archive-product.php`
- `woocommerce\content-product.php`
- `woocommerce\single-product.php`
- `woocommerce\single-product\tabs\tabs.php`
- `assets\css\aurora-commerce.css`
- `assets\js\aurora-commerce.js`

## 11. 版本演进记录

根据目录名恢复出的主要演进：

- 2026-06-01：基础当前预览、多语言、语言下拉、市场翻译
- 2026-06-02：图片路径修复、Buckleguy 风格 UI、WooCommerce 结构、采购 UI、6 大品类产品、筛选语言优化、完整语言同步、目录标题修复
- 2026-06-03：hero cover、多语言视觉检查、hero 5 秒自动播放
- 2026-06-04：产品轮播、SEO 筛选侧栏、B2B 账户/结账/筛选
- 2026-06-05：分类卡片颜色与间距、footer 支持区、logo 与公司信息、footer 图标布局、社媒、sticky header、深棕导航和最终视觉处理

## 12. WordPress 上传计划

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

## 13. 下一步优先级

1. 重新打包最新主题 ZIP。
2. 在测试 WordPress 站点上传并启用主题。
3. 配 WooCommerce 页面和菜单。
4. 处理产品图片 URL 与 CSV 导入。
5. 检查移动端和多语言布局。
6. 把 Contact 从 `mailto:` 改成正式表单方案。
7. 上线前做备份、SEO 标题描述、站点图标、SSL、固定链接、缓存检查。

## 13.1 2026-06-06 修复记录

本次已修：

- 去掉产品图片左上角的 Featured / 新品 / 畅销角标，避免遮挡产品。
- 修复中文类别参数和英文内部分类不匹配的问题，例如 `拉链` 会标准化为 `Zipper`。
- 产品目录页现在以左侧勾选状态为准，URL 里的分类只负责初始勾选；取消勾选后不再继续强制显示该分类。
- 新增独立说明页：`faq.html`、`shipping.html`、`returns.html`、`privacy-policy.html`、`terms-of-service.html`、`blog.html`。
- 页脚 Support / Company 链接已改到对应独立页面，不再使用 `href="#"`。
- 底部支付区域只保留 PayPal。
- 底部版权区改成类似对标站的 `Terms of Service — Privacy Policy` 链接形式，并支持语言切换。
- Facebook 社媒图标垂直居中。
- WordPress 主题同步新增 `page-faq.php`、`page-shipping.php`、`page-returns.php`、`page-privacy-policy.php`、`page-terms-of-service.php`、`page-blog.php` 和共用 `template-parts/page-info.php`。
- 主题资源版本更新到 `1.0.35-preview`。

## 13.2 2026-06-06 筛选数量与上传说明

新建版本目录：

`C:\Users\Administrator\Desktop\Aurora_Website_Previews\2026-06-06_12-20_filter-counts-product-upload-guide-preview`

本次已修：

- 左侧筛选数量改为按当前产品数据动态计算。
- 大分类数量显示真实产品数量：Bag 30，其他主要类当前各 20。
- 子筛选项数量显示“当前范围内勾选该条件可筛出的产品数”，不再显示写死的 120、80、50 等数字。
- 静态 JS 与 WordPress 主题 JS 已同步。
- 主题资源版本更新到 `1.0.36-preview`。
- 新增 `PRODUCT_UPLOAD_AND_EDIT_GUIDE.md`，说明产品如何上传、图片如何处理、后续哪些内容建议在 WordPress / WooCommerce 后台维护。

## 13.3 2026-06-06 分类筛选模块联动修复

新建版本目录：
`C:\Users\Administrator\Desktop\Aurora_Website_Previews\2026-06-06_12-45_category-filter-groups-preview`

本次已修：
- 修复产品页左侧分类勾选后，下方筛选模块仍沿用旧 URL 分类或五金模块的问题。
- 分类筛选现在以当前勾选的类别为准；勾选包袋就显示包袋筛选项，勾选五金就显示五金筛选项，勾选皮革/拉链/配件/工具也分别显示各自模块。
- 分类勾选改为单选式行为，避免同时勾多个大类导致下方筛选项混乱。
- 清空筛选时同步移除 URL 里的 category 参数，避免清空后又被旧分类自动勾回。
- 静态预览 JS 与 WordPress 主题 JS 已同步。
- WordPress 主题资源版本更新到 `1.0.37-preview`。

后续生成时重点记住：
- 分类入口 URL 只负责初始化当前类别。
- 用户在页面上重新勾选分类后，筛选模块和产品列表必须跟随当前勾选类别，不得继续读取旧 URL 分类造成错乱。
- 多语言切换时，当前类别对应的筛选标题和筛选项也要同步当前语言。

## 13.4 2026-06-06 社媒图标与首页对齐修复

新建版本目录：
`C:\Users\Administrator\Desktop\Aurora_Website_Previews\2026-06-06_13-10_social-layout-alignment-preview`

本次已修：
- 页脚社媒新增 WhatsApp 图标，链接为 `https://wa.me/8613500014739`，顺序放在 Instagram 前面。
- 页脚社媒图标行改为与上方 B2B 供应合作伙伴框同宽分布，左右边缘对齐。
- 首页 hero 区和信任条宽度改为与主内容 `.container` 同宽，避免上下区块左右边缘不一致。
- 移动端增加页面级横向溢出保护，避免出现左侧大空白、内容整体跑到右侧的问题。
- 移动端产品轮播改为单卡占满内容宽度，不再使用容易产生偏移的 `84vw` 宽度。
- 静态预览 CSS 与 WordPress 主题 CSS 已同步。
- WordPress 主题资源版本更新到 `1.0.38-preview`。

后续生成时重点记住：
- 首页上下区块的左右边缘要尽量统一使用同一个 `.container` 宽度。
- 移动端不得出现 body 级横向滚动；如需要产品横向滑动，只允许轮播内部滚动。
- 页脚社媒图标顺序保持 WhatsApp、Instagram、Facebook、Pinterest、YouTube。

## 13.5 2026-06-06 隐私政策专业页优化

新建版本目录：
`C:\Users\Administrator\Desktop\Aurora_Website_Previews\2026-06-06_13-35_privacy-policy-professional-preview`

本次按用户要求从以下基准复制生成：
`C:\Users\Administrator\Desktop\Aurora_Website_Previews\2026-06-06_12-45_category-filter-groups-preview`

本次已修：
- 将 `privacy-policy.html` 改为专业 B2B 外贸独立站隐私政策页。
- Hero 区增加 `Company Policy`、`Privacy Policy`、B2B 询价/采购网站说明和 `Last updated: 2026-06-06`。
- 主体改为 policy layout：左侧/顶部目录，右侧/下方政策正文。
- 英文隐私政策扩展为 12 个模块：收集信息、用途、询价/账户/WooCommerce 数据、Cookies、信息共享、数据保存、国际业务、数据安全、用户权利、第三方链接、政策更新、联系方式。
- 中文状态下同步关键标题、目录、正文模块和 CTA。
- 增加底部 CTA 卡片 `Questions About Privacy?` / `关于隐私还有问题？`。
- 添加 `.policy-layout`、`.policy-toc`、`.policy-content`、`.policy-section`、`.policy-meta`、`.policy-contact-card`、`.policy-updated`、`.policy-badge` 相关样式。
- 页面标题区域白色背景改成米白纸感背景；首页信任条白底改成更融入站点的米白/皮革色。
- 阿拉伯语切换时设置 `dir="rtl"`，并补充 RTL 下 policy 列表和强调线方向。
- 静态 `assets` 与 WordPress 主题 `assets` 已同步。
- WordPress 主题资源版本更新到 `1.0.38-preview`。
- 新增 `README_NEXT_STEPS.md` 记录本次优化和上传检查项。

后续生成时重点记住：
- Privacy Policy 不要做成普通博客文章，也不要只有占位短文；必须保持正式 B2B 采购站政策页结构。
- 不要写死未实际接入的 Google Analytics / Meta Pixel，只能使用 may use analytics tools 这类表述。
- 多语言切换时，隐私政策页至少保证中文关键标题、目录、按钮和模块标题同步。

## 13.6 2026-06-06 产品上传与每周更新流程

新建版本目录：
`C:\Users\Administrator\Desktop\Aurora_Website_Previews\2026-06-06_14-05_product-update-workflow-preview`

本次按用户要求从以下基准复制生成：
`C:\Users\Administrator\Desktop\Aurora_Website_Previews\2026-06-06_12-45_category-filter-groups-preview`

本次新增：
- 新建 `Aurora_Product_Update` 产品更新工作区。
- 新建 `01_Product_Master.xlsx` 产品总表模板。
- 新建 `01_Product_Master_Template.csv` CSV 兼容模板。
- 新建 `02_Weekly_Update/Weekly_Update_Template.xlsx` 每周更新模板。
- 新建 `02_Weekly_Update/Weekly_Update_Template.csv` CSV 兼容模板。
- 新建 `03_Product_Images`，并按 `Bag`、`Hardware`、`Leather`、`Zipper`、`Accessories`、`Tools` 建好图片分类目录。
- 新建 `04_Export_CSV_For_WooCommerce` 用于保存 WooCommerce 导入 CSV。
- 新建 `05_Readme_Update_Notes/PRODUCT_UPDATE_WORKFLOW.md`，记录产品更新流程、字段规则、SKU 规则、图片命名、导出命令和 WooCommerce 导入注意。
- 新建 `tools/export_woocommerce_csv.py`，支持读取 `.xlsx` 或 `.csv`，校验 SKU、分类、MOQ、图片命名，并导出 WooCommerce CSV 和更新报告。
- 新建 `tools/create_product_templates.py`，用于重新生成产品模板。
- 新建 `Run_Weekly_Export.ps1` 快捷运行脚本。

当前产品维护规则：
- Aurora Bag Supply 是 B2B 询价型站点，产品核心动作保持 `Request Quote / Send Inquiry / Add to Inquiry`。
- 不把 `Reference Price` 当作 WooCommerce 普通零售价导入，只作为内部参考 meta。
- 图片没有上传到 WordPress Media Library 或公网可访问 URL 前，WooCommerce CSV 的 `Images` 字段不强行写入本地路径。
- 每次产品更新都新建版本目录，不覆盖旧版本。
- 后续 WordPress 实站产品以 WooCommerce 数据库为主；静态 JS 只用于预览，不作为唯一数据源。

已验证：
- Python 脚本语法检查通过。
- 模板数据已成功导出 WooCommerce CSV 和更新报告。
- PowerShell 快捷脚本可用，运行方式：`powershell -ExecutionPolicy Bypass -File .\Aurora_Product_Update\Run_Weekly_Export.ps1`

## 14. 重要不要做

- 不要上传 `edge-profile-*` 目录。
- 不要把整个预览目录压成 WordPress 主题包。
- 不要直接用 2026-06-02 的旧 zip 当最终上传包。
- 不要把产品图片只留在本地路径里就导入 WooCommerce；正式导入需要媒体 URL 或服务器可访问 URL。
- 不要覆盖用户现有文件，除非明确要求。
- 不要把项目从最新版本退回早期版本。

## 15. 如果继续改代码

改静态预览时，同步考虑 WordPress 主题里的对应文件。

重点同步：

- 静态 `assets\css\aurora-commerce.css` 与主题 `assets\css\aurora-commerce.css`
- 静态 `assets\js\aurora-commerce.js` 与主题 `assets\js\aurora-commerce.js`
- 静态 header/footer 变化与 `header.php`、`footer.php`

## 16. 当前风险

- 当前主题是预览/开发包，还不是经过 WordPress 实站完整测试的最终包。
- 旧 zip 不是最新版本，不能直接当最终上传包。
- CSV 中图片路径是本地/相对路径，直接导入 WooCommerce 可能无法生成商品主图。
- 多语言现在主要由前端 JS 处理，正式多语言 SEO 如需独立 URL，需要后续接 WPML / Polylang / TranslatePress 等方案。
- Contact 页当前 WordPress 模板使用 `mailto:`，正式站建议换成 Contact Form 7 / WPForms / Fluent Forms。
- `edge-profile-*` 目录体积大且无上传价值，打包时必须排除。
