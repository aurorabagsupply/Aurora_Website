# Aurora Bag Supply 项目记忆

更新时间：2026-06-06

## 继续工作时先看这里

接手校准：当前实际最新可继续开发版本是：

`C:\Users\Administrator\Desktop\Aurora_Website_Previews\2026-06-06_21-16_no-image-letterbox-card-preview`

说明：

- `2026-06-06_14-05_product-update-workflow-preview` 是产品上传与每周更新流程版本，可用于参考产品维护工具和模板。
- 前端预览、视觉样式和 WordPress 主题继续修改时，优先从 21:16 版本复制生成新版本目录。
- 21:16 版本把分类卡片和产品卡片图片改为铺满图片区，去掉左右白边。
- 21:00 版本把产品目录页卡片改成更短的参考站风格，隐藏多余按钮和标签，只保留图片、标题、一个参数行和 MOQ/询价行。
- 20:44 版本统一了卡片图片区域近白底、缩短阴影外扩，并压缩产品目录页卡片高度。
- 20:20 版本优化了首页分类/产品卡片边缘、去掉产品轮播底部不协调浅色条，并把产品目录页同步成同样的干净产品卡片样式。
- 20:08 版本把首页 Featured Products / New Arrivals / Best Sellers 产品卡片改回更简洁的整块图片区样式，并保留外层圆角、边框和浮起阴影。
- 19:57 版本取消了首页分类卡片图片区里的内嵌小框感，产品图直接占满上方图片区。
- 19:44 版本把首页分类卡片改成更简约的大图上方、浅米文字区下方样式，并保留圆角和浮起阴影。
- 不要回退到 2026-06-05 或 2026-06-02 的旧版本。

另一个同步盘：

`Y:\Aurora_Website_Previews`

以后如果要继续改站点，默认从当前基准版本开始，不要从旧 zip 或早期目录开始。

## 项目目标

给 Aurora Bag Supply 做 WordPress + WooCommerce 独立站。它是 B2B 采购型网站，不是单纯零售展示站。

用户重点关注：

- 能上传到 WordPress 独立站。
- 页面视觉要像专业供应商网站。
- 产品多、分类清楚、适合采购。
- 能支持询价、账户、购物车/询价清单、结账/提交需求。
- 后续要能继续维护产品和内容。

## 品牌与业务信息

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

## 视觉记忆

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

## 产品与分类记忆

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

## 多语言记忆

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

如果继续改文案，要同步检查：

- 首页 hero
- 分类卡片
- 产品列表
- 页脚
- 联系页
- 账户/结账页

## 当前主题文件

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

## 重要不要做

- 不要上传 `edge-profile-*` 目录。
- 不要把整个预览目录压成 WordPress 主题包。
- 不要直接用 2026-06-02 的旧 zip 当最终上传包。
- 不要把产品图片只留在本地路径里就导入 WooCommerce；正式导入需要媒体 URL 或服务器可访问 URL。
- 不要覆盖用户现有文件，除非明确要求。
- 不要把项目从最新版本退回早期版本。

## 如果继续上传 WordPress

默认流程：

1. 从最新主题源码目录重新打 `aurora-bag-supply.zip`。
2. 上传到 WordPress 后台主题。
3. 启用 WooCommerce。
4. 创建/绑定 Home、Shop、About、Contact、My Account、Cart、Checkout。
5. 设置菜单和固定链接。
6. 上传产品图片到媒体库。
7. 处理 CSV 图片 URL 后导入产品。
8. 检查前端页面。

## 如果继续改代码

改静态预览时，同步考虑 WordPress 主题里的对应文件。

重点同步：

- 静态 `assets\css\aurora-commerce.css` 与主题 `assets\css\aurora-commerce.css`
- 静态 `assets\js\aurora-commerce.js` 与主题 `assets\js\aurora-commerce.js`
- 静态 header/footer 变化与 `header.php`、`footer.php`

## 已知待办

- 重新制作最新主题 ZIP。
- 在真实 WordPress 环境测试主题。
- 把 Contact 的 `mailto:` 改成正式表单。
- 明确最终产品导入策略：媒体库 URL、外链 URL、还是服务器批量上传。
- 补充真实产品标题、描述、价格、规格。
- 做 SEO 标题、SEO 描述和站点基础设置。
- 检查移动端、多语言、WooCommerce 页面兼容。
