# 产品上传与后续修改指南

更新时间：2026-06-06

## 当前产品数量说明

当前预览站的产品数据是由 `assets/js/aurora-commerce.js` 里的 `CATEGORY_CONFIG` 和本地图片自动生成的演示数据：

- Bag：30 个
- Hardware：20 个
- Leather：20 个
- Zipper：20 个
- Accessories：20 个
- Tools：20 个

左侧筛选数量已经改为动态计算：显示“当前产品数据里实际能筛出的数量”，不再使用之前写死的 120、80、50 等假数字。

## WordPress 正式上传产品的推荐方式

正式站不要靠改 JS 来管理产品，应该使用 WooCommerce 后台管理产品。

推荐流程：

1. 登录 WordPress 后台。
2. 确认 WooCommerce 已安装并启用。
3. 进入 `Products / All Products` 手动新增少量产品，或进入 `Products / Import` 批量导入 CSV。
4. 上传产品图片到 `Media / Library`。
5. CSV 里的图片字段使用 WordPress 媒体库图片 URL。
6. 导入后逐个检查商品标题、SKU、分类、图片、MOQ、规格和询价按钮。

## 当前可用的 CSV 草稿

当前目录有产品导入草稿：

`Aurora_Six_Category_Product_Import_Draft.csv`

它可以作为第一版 WooCommerce 导入表，但导入前要注意：

- `Local Image Path` 还是本地路径，WooCommerce 不能直接用本机路径生成正式主图。
- 需要先把图片上传到 WordPress 媒体库，再把 CSV 图片字段换成媒体 URL。
- SKU 要保持唯一。
- 分类名称要和站点分类一致。
- 价格目前建议保持 `Request Quote` 逻辑，不建议直接做普通零售价。

## 图片上传方式

方式 A：少量产品手动上传

- 进入 `Media / Add New` 上传图片。
- 进入产品编辑页，设置 Product image 和 Product gallery。

方式 B：批量产品导入

- 先批量上传图片到媒体库或服务器可访问目录。
- 获取每张图片的 URL。
- 在 CSV 里填入图片 URL。
- 用 WooCommerce Import 导入产品。

方式 C：服务器批量放图

- 把图片上传到服务器固定目录。
- 确认图片 URL 可以公网访问。
- CSV 使用这些 URL。

## 后续哪些信息方便在后台改

上传成 WordPress + WooCommerce 后，建议在后台改：

- 产品标题
- SKU
- 分类
- 产品图片
- 产品描述
- MOQ、材质、表面、电镀、用途等属性
- 库存状态
- 询价相关说明
- 普通页面正文，例如 About、Contact、FAQ、Privacy Policy
- 菜单链接

## 哪些信息目前仍在主题里

以下信息目前写在主题或前端 JS/CSS 中，后续如果要后台化，需要再开发成主题设置或 ACF 字段：

- 首页 hero 六大类轮播文案
- 多语言切换文案
- 页脚固定联系信息
- 首页采购流程说明
- 产品筛选项名称和筛选逻辑
- PayPal 底部展示
- 社媒链接

## 最适合你的维护方案

短期建议：

- 产品全部交给 WooCommerce 后台管理。
- 页面内容用 WordPress 页面编辑。
- 菜单用 Appearance / Menus 管理。
- 主题只负责视觉和结构。

中期建议：

- 用 ACF 或主题设置页，把页脚电话、邮箱、地址、社媒链接、首页文案做成后台可改。
- 产品筛选改成 WooCommerce 属性筛选，而不是前端演示筛选。

## 上传前必须记住

- 不要上传整个预览目录。
- 不要上传 `edge-profile-*` 目录。
- 主题 ZIP 只能从 `wordpress-theme/aurora-bag-supply` 文件夹打包。
- ZIP 第一层必须是 `aurora-bag-supply/style.css`。
- 上传后需要创建并绑定页面：Home、Shop、Cart、Checkout、My Account、About、Contact、FAQ、Privacy Policy、Terms of Service、Shipping、Returns、Blog。
