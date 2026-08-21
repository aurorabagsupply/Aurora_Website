const CATEGORY_CONFIG = [
  { name: "Bag", count: 30, prefix: "BAG", moq: 100 },
  { name: "Hardware", count: 20, prefix: "HDW", moq: 500 },
  { name: "Leather", count: 20, prefix: "LTH", moq: 50 },
  { name: "Zipper", count: 20, prefix: "ZIP", moq: 1000 },
  { name: "Accessories", count: 20, prefix: "ACC", moq: 300 },
  { name: "Tools", count: 20, prefix: "TLS", moq: 50 },
];

const LANGUAGES = [
  ["en", "English"],
  ["ru", "Русский"],
  ["es", "Español"],
  ["fr", "Français"],
  ["de", "Deutsch"],
  ["it", "Italiano"],
  ["ar", "العربية"],
  ["zh", "中文"],
];

const HERO_SLIDES = [
  {
    category: "Bag",
    image: "Bag.png",
    copy: {
      en: ["BAG SUPPLY", "Bags Ready for Sourcing", "Structured shapes / practical details / production ready", "Explore bag styles prepared for online brands, wholesalers and factory sample development."],
      zh: ["包类供应", "适合采购的包款方案", "结构版型 / 实用细节 / 可进入生产", "面向电商品牌、批发商和工厂打样开发的包款方案。"],
      ru: ["Сумки", "Модели сумок для закупки", "Форма / детали / готовность к производству", "Подбор сумок для брендов, оптовиков и фабричных образцов."],
      es: ["Bolsos", "Bolsos listos para compra", "Estructura / detalles / produccion", "Modelos de bolsos para marcas online, mayoristas y desarrollo de muestras."],
      fr: ["Sacs", "Sacs prets pour l'achat", "Structure / details / production", "Modeles de sacs pour marques, grossistes et echantillons usine."],
      de: ["Taschen", "Taschen fuer den Einkauf", "Struktur / Details / Produktion", "Taschenmodelle fuer Marken, Grosshandel und Musterentwicklung."],
      it: ["Borse", "Borse pronte per l'acquisto", "Struttura / dettagli / produzione", "Modelli di borse per brand, grossisti e sviluppo campioni."],
      ar: ["الحقائب", "حقائب جاهزة للتوريد", "هيكل / تفاصيل / جاهزة للانتاج", "نماذج حقائب للعلامات التجارية وتجار الجملة وتطوير العينات."]
    }
  },
  {
    category: "Hardware",
    image: "Hardware.png",
    copy: {
      en: ["BAG HARDWARE", "Durable Metal Components", "Locks / rings / hooks / logo plates", "Select metal parts with finish, size and logo options for long-lasting bag production."],
      zh: ["箱包五金", "耐用金属配件", "锁扣 / 圆环 / 挂钩 / 标牌", "按表面、尺寸和 Logo 需求选择金属配件，适合长期稳定生产。"],
      ru: ["Фурнитура", "Прочные металлические детали", "Замки / кольца / крючки / логотипы", "Подбор металлических деталей по покрытию, размеру и логотипу."],
      es: ["Herrajes", "Componentes metalicos duraderos", "Cierres / anillas / ganchos / placas", "Elija piezas metalicas por acabado, tamano y opcion de logotipo."],
      fr: ["Quincaillerie", "Pieces metalliques durables", "Fermoirs / anneaux / crochets / plaques", "Selectionnez les pieces par finition, taille et option logo."],
      de: ["Hardware", "Robuste Metallteile", "Schloesser / Ringe / Haken / Platten", "Metallteile nach Finish, Groesse und Logo-Option fuer Taschenproduktion."],
      it: ["Accessori metallici", "Componenti metallici resistenti", "Chiusure / anelli / ganci / targhette", "Scegli parti metalliche per finitura, misura e logo."],
      ar: ["الاكسسوارات المعدنية", "قطع معدنية متينة", "اقفال / حلقات / خطافات / شعارات", "اختر القطع المعدنية حسب التشطيب والمقاس وخيار الشعار."]
    }
  },
  {
    category: "Leather",
    image: "Leather.png",
    copy: {
      en: ["LEATHER MATERIAL", "Color and Texture Options", "Grain / soft touch / stable supply", "Compare leather materials by color, texture, thickness and application before quotation."],
      zh: ["皮革材料", "颜色与纹理选择", "纹理 / 手感 / 稳定供应", "按颜色、纹理、厚度和用途比较皮革材料，再确认询价。"],
      ru: ["Кожа", "Цвета и фактуры", "Зерно / мягкость / стабильные поставки", "Сравните материалы по цвету, фактуре, толщине и применению."],
      es: ["Cuero", "Opciones de color y textura", "Grano / tacto suave / suministro estable", "Compare materiales por color, textura, grosor y uso antes de cotizar."],
      fr: ["Cuir", "Options couleur et texture", "Grain / toucher doux / supply stable", "Comparez couleur, texture, epaisseur et usage avant devis."],
      de: ["Leder", "Farb- und Strukturwahl", "Narbenbild / weicher Griff / stabile Lieferung", "Vergleichen Sie Farbe, Struktur, Staerke und Anwendung vor dem Angebot."],
      it: ["Pelle", "Colori e texture", "Grana / mano morbida / fornitura stabile", "Confronta colore, texture, spessore e utilizzo prima del preventivo."],
      ar: ["الجلود", "خيارات اللون والملمس", "نقشة / ملمس ناعم / توريد ثابت", "قارن الجلد حسب اللون والملمس والسماكة والاستخدام قبل عرض السعر."]
    }
  },
  {
    category: "Zipper",
    image: "Zipper.png",
    copy: {
      en: ["ZIPPER SYSTEMS", "Smooth Pullers and Chains", "Nylon / metal / custom pullers / color match", "Build zipper sets for bags, luggage and accessories with chain, tape and puller options."],
      zh: ["拉链系统", "顺滑拉头与链条", "尼龙 / 金属 / 定制拉片 / 配色", "为包袋、行李箱和配件组合拉链、布带和拉头方案。"],
      ru: ["Молнии", "Плавные бегунки и цепи", "Нейлон / металл / бегунки / цвет", "Комплекты молний для сумок, багажа и аксессуаров."],
      es: ["Cremalleras", "Tiradores y cadenas suaves", "Nylon / metal / tiradores / color", "Configure cremalleras para bolsos, equipaje y accesorios."],
      fr: ["Fermetures", "Curseurs et chaines fluides", "Nylon / metal / tirettes / couleur", "Composez des fermetures pour sacs, bagages et accessoires."],
      de: ["Reissverschluesse", "Leichtgaengige Zieher und Ketten", "Nylon / Metall / Zieher / Farbe", "Sets fuer Taschen, Gepaeck und Accessoires zusammenstellen."],
      it: ["Cerniere", "Tiretti e catene scorrevoli", "Nylon / metallo / tiretti / colore", "Crea set cerniera per borse, valigie e accessori."],
      ar: ["السحابات", "سلاسل وسحابات سلسة", "نايلون / معدن / ساحب مخصص / لون", "جهز مجموعات السحاب للحقائب والاكسسوارات."]
    }
  },
  {
    category: "Accessories",
    image: "Accessories.png",
    copy: {
      en: ["BAG ACCESSORIES", "Small Parts With Big Impact", "Tags / straps / trims / packaging details", "Complete each product line with accessories that improve function, branding and presentation."],
      zh: ["箱包配件", "小配件提升整体质感", "吊牌 / 肩带 / 装饰 / 包装细节", "用配套配件完善产品线，提升功能、品牌感和展示效果。"],
      ru: ["Аксессуары", "Мелкие детали с большим эффектом", "Бирки / ремни / отделка / упаковка", "Дополните линейку аксессуарами для функции и бренда."],
      es: ["Accesorios", "Piezas pequenas con gran impacto", "Etiquetas / correas / detalles / empaque", "Complete cada linea con accesorios para funcion, marca y presentacion."],
      fr: ["Accessoires", "Petites pieces, grand impact", "Etiquettes / sangles / finitions / emballage", "Completez vos lignes avec des accessoires utiles et valorisants."],
      de: ["Accessoires", "Kleine Teile mit grosser Wirkung", "Tags / Gurte / Besatz / Verpackung", "Ergaenzen Sie Produktlinien mit funktionalen und markenstarken Details."],
      it: ["Accessori", "Piccoli pezzi, grande impatto", "Tag / tracolle / finiture / packaging", "Completa ogni linea con accessori per funzione e branding."],
      ar: ["الاكسسوارات", "قطع صغيرة بتأثير كبير", "بطاقات / احزمة / تشطيبات / تغليف", "اكمل خط المنتج باكسسوارات تحسن الوظيفة والعرض."]
    }
  },
  {
    category: "Tools",
    image: "Tools.png",
    copy: {
      en: ["TOOLS", "Workshop and Sample Support", "Cutting / setting / measuring / repair", "Prepare tools for leather workshops, sample rooms and production quality checks."],
      zh: ["工具", "工坊与打样支持", "裁切 / 安装 / 测量 / 维修", "为皮具工坊、打样间和生产质检准备实用工具。"],
      ru: ["Инструменты", "Поддержка мастерской и образцов", "Резка / установка / измерение / ремонт", "Инструменты для мастерских, образцов и контроля качества."],
      es: ["Herramientas", "Soporte para taller y muestras", "Corte / montaje / medicion / reparacion", "Herramientas para talleres, muestras y control de calidad."],
      fr: ["Outils", "Support atelier et echantillons", "Coupe / pose / mesure / reparation", "Outils pour ateliers cuir, salles d'echantillons et controle qualite."],
      de: ["Werkzeuge", "Werkstatt- und Musterhilfe", "Schneiden / Setzen / Messen / Reparatur", "Werkzeuge fuer Lederwerkstatt, Musterraum und Qualitaetskontrolle."],
      it: ["Strumenti", "Supporto laboratorio e campioni", "Taglio / montaggio / misura / riparazione", "Strumenti per laboratori, campioni e controllo qualita."],
      ar: ["الادوات", "دعم الورشة والعينات", "قص / تركيب / قياس / اصلاح", "ادوات لورش الجلد وغرف العينات وفحص الجودة."]
    }
  }
];

const HERO_AUTOPLAY_MS = 5000;
const PRODUCT_CAROUSEL_MS = 3600;
const productCarouselTimers = new WeakMap();
const productCarouselScrollTimers = new WeakMap();
let activeHeroIndex = 0;
let heroAutoplayTimer = null;

const I18N = {
  en: {
    topLine: "AOLOLA | Professional Accessories, Bags, Hardware, Leather, Tools & Zippers",
    globalSupport: "Global B2B sourcing support",
    emailLabel: "Email",
    phoneLabel: "Tel",
    contactTop: "WhatsApp / WeChat / Contact Us",
    signIn: "Account",
    account: "Account",
    wishlist: "Wishlist",
    cart: "Cart",
    search: "Search products...",
    searchTitle: "Search",
    quickLinks: "Quick Links",
    searchHardware: "Hardware",
    searchBags: "Finished Bags",
    searchLeather: "Leather Materials",
    searchZippers: "Zippers",
    searchButton: "Search",
    searchAll: "View all results",
    home: "Home",
    contact: "Contact Us",
    about: "About Us",
    newArrivals: "New Arrivals",
    quality: "Quality",
    heroKicker: "Inspired by design | Engineered with care",
    heroTitle: "Beyond Design. Built to Last.",
    heroText: "Great accessories do not just look good. They are developed to perform across Accessories, Bag, Hardware, Leather, Tools and Zipper supply.",
    shopProducts: "Shop Products",
    requestQuote: "Request a Quote",
    viewAll: "View All Categories",
    categoryHead: "Shop by Category",
    categoryIntro: "Quickly find the product category you need.",
    featured: "Featured Products",
    new: "New Arrivals",
    best: "Best Sellers",
    fullCatalog: "View Full Catalog",
    catalogKicker: "Procurement catalog",
    catalogTitle: "Product Catalog",
    catalogText: "Compare products by SKU, category, material, finish, MOQ and application.",
    filtersTitle: "Filters",
    clearFilters: "Clear",
    quickBuying: "Quick Buying",
    category: "Category",
    material: "Material",
    color: "Color",
    finish: "Finish",
    scale: "Scale",
    application: "Application",
    moq: "MOQ",
    readyReview: "ready for quotation review",
    sortBy: "Sort by",
    newest: "Newest",
    bestSelling: "Best Selling",
    moqLow: "MOQ Low to High",
    categorySort: "Category",
    quickView: "Quick View",
    details: "View Details",
    quote: "Add to Quote",
    quoteList: "Quote List",
    empty: "Your quote list is empty.",
    checkout: "Send Inquiry",
    close: "Close",
    price: "Price",
    size: "Size",
    use: "Use",
    productDescription: "Product Description",
    specifications: "Specifications",
    customization: "Customization",
    shipping: "Shipping & Delivery",
    quantity: "Quantity",
    noResults: "No products match the selected filters.",
    sample: "Ready sample support",
    custom: "Custom logo hardware",
    repeat: "Repeat order SKUs",
    alloy: "Zinc Alloy",
    brass: "Brass",
    leatherMaterial: "Leather",
    steel: "Steel",
    gold: "Gold",
    nickel: "Nickel",
    gunmetal: "Gunmetal",
    black: "Black",
    plated: "Plated",
    brushed: "Brushed",
    polished: "Polished",
    customFinish: "Custom finish",
    small: "Small",
    medium: "Medium",
    customSize: "Custom",
    handbag: "Handbag",
    luggage: "Luggage",
    belt: "Belt",
    under500: "Under 500 pcs",
    between500: "500-1000 pcs",
    customMoq: "Custom MOQ",
    brandTagline: "Hardware | Leather | Custom Supply",
    buyerLabel: "Buyer checklist",
    buyerTitle: "Send SKU, finish, quantity and destination.",
    buyerText: "We prepare unit price, MOQ, sample option and packing suggestion for your project.",
    metricDesignTitle: "Design",
    metricDesignText: "inspired by detail",
    metricCareTitle: "Care",
    metricCareText: "engineered for use",
    metricRealTitle: "Real",
    metricRealText: "tested for orders",
    metricLastTitle: "Last",
    metricLastText: "made to perform",
    factorySupply: "Factory Supply",
    factorySupplyText: "Stable production and export packing",
    customizableHardware: "Customizable Hardware",
    customizableHardwareText: "Logo, plating, size and mold options",
    worldwideShipping: "Worldwide Shipping",
    worldwideShippingText: "Support for importers and online brands",
    procurement01Title: "Select products",
    procurement01Text: "Browse by category, SKU, material, finish and application.",
    procurement02Title: "Send quote details",
    procurement02Text: "Share quantity, target finish, packing and shipping country.",
    procurement03Title: "Confirm sample",
    procurement03Text: "Review sample, color plating and logo position before bulk order.",
    procurement04Title: "Repeat orders",
    procurement04Text: "Keep SKU, packaging and QC notes for stable reorder supply.",
    featuredIntro: "Core product systems for buyers, workshops and sourcing teams.",
    newIntro: "Recently prepared products for production buyers.",
    bestIntro: "High-demand items for repeat orders and wholesale projects.",
    sixSupply: "Six category supply",
    sixSupplyTitle: "Accessories, bags, hardware, leather, tools and zipper products",
    sixSupplyText: "Send product reference, quantity, color, size and destination. We help prepare quotation details, sample options, packaging notes and reorder standards.",
    sixPoint1: "Product photo and SKU matching",
    sixPoint2: "Color, material and size confirmation",
    sixPoint3: "Sample and production quotation",
    sixPoint4: "Packaging and repeat order support",
    footerHelpEyebrow: "How can we help you",
    footerHelpTitle: "With projects or production?",
    footerStandardsTitle: "Production Standards",
    footerStandardsText: "We support stable product matching, sample checking and repeat-order quality notes.",
    footerStandardsLink: "Learn More",
    footerCareTitle: "Sourcing Support",
    footerCareText: "Send SKU, quantity, finish and destination. Our team will prepare quotation details.",
    footerCareLink: "Request a Quote",
    footerShippingTitle: "Global Shipping",
    footerShippingText: "Export packing and shipping coordination for importers, factories and online brands.",
    footerShippingLink: "Contact Us",
    newsletterTitle: "Get material updates and wholesale support",
    newsletterText: "Create an account or subscribe to receive new product information, sample support and quotation follow-up.",
    subscribe: "Subscribe",
    emailPlaceholder: "Your email address",
    footerContact: "Contact",
    footerDescription: "Premium bag accessories, bags, hardware, leather, tools and zippers supplier.",
    footerProjectSupport: "Request project support",
    footerContactText: "Address: Room 318, Building A, No.4 Helong 3rd Road, Baiyun District, Guangzhou. Tel: (86)13500014739.",
    footerAddressTitle: "Room 318, Building A",
    footerAddressText: "No.4 Helong 3rd Road, Baiyun District, Guangzhou",
    footerPhoneTitle: "Phone",
    footerEmailTitle: "Email",
    footerHoursTitle: "Business Hours",
    footerHoursText: "Mon - Fri: 9:00 - 18:00",
    footerHoursNote: "Sample and quotation support",
    footerCalloutTitle: "B2B Supply Partner",
    footerCalloutText: "Factory sourcing support for bags, hardware, leather, zippers, accessories and tools.",
    footerCopyright: "© 2026 AOLOLA.",
    footerMeta: "Wholesale catalog | Sample support | Export packing",
    footerProducts: "Products",
    footerSupport: "Support",
    footerCompany: "Company",
    contactKicker: "Request a quote",
    contactTitle: "Contact AOLOLA",
    contactIntro: "Send product SKU, quantity, finish, destination and customization details. We will reply with price, MOQ, sample option and production suggestion.",
    contactName: "Name",
    contactEmail: "Email",
    contactCompany: "Company",
    contactCountry: "Country / Market",
    contactChannel: "WhatsApp / WeChat",
    contactBuyerType: "Buyer Type",
    contactProductCategory: "Product Category",
    contactSkuProduct: "SKU or Product Name",
    contactProductName: "Product Name",
    contactSku: "SKU",
    contactQuantity: "Estimated Quantity",
    contactFinishColor: "Target Finish / Color",
    contactCustomRequirement: "Custom Requirement",
    contactProjectNotes: "Project Notes",
    contactMessage: "Message",
    contactQuantityPlaceholder: "Example: 500 pcs / 100 yards",
    contactFinishPlaceholder: "Example: light gold, nickel, matte black",
    contactCustomPlaceholder: "Logo, mold, size, plating, packaging or sample request",
    contactNotesPlaceholder: "Share target price, deadline, destination, product photos or drawings if available.",
    contactAsideTitle: "Business Contact",
    contactAddressLabel: "Address",
    contactAddressValue: "Room 318, Building A, No.4 Helong 3rd Road, Baiyun District, Guangzhou",
    contactTelLabel: "Tel",
    contactBusinessLabel: "Business",
    contactBusinessValue: "Bag hardware, leather materials, custom accessories",
    contactResponseLabel: "Response Time",
    contactResponseValue: "Within 24 hours",
    contactChecklistTitle: "For faster quotation, include:",
    contactChecklist1: "SKU or reference photo",
    contactChecklist2: "Quantity and target market",
    contactChecklist3: "Material, color and finish",
    contactChecklist4: "Logo or mold requirement",
    contactChecklist5: "Packaging and delivery needs",
    buyerFactory: "Bag factory",
    buyerBrand: "Brand / importer",
    buyerWholesaler: "Wholesaler",
    buyerOnline: "Online seller",
    buyerDesigner: "Designer / studio",
    shippingLink: "Shipping",
    returnsLink: "Returns",
    faq: "FAQ",
    orderStatus: "Order Status",
    allProducts: "All Products",
    blog: "Blog",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    chat: "Chat",
  },
  zh: {
    topLine: "AOLOLA | 配件、包、五金、皮革、工具、拉链专业供应",
    globalSupport: "全球 B2B 采购支持",
    emailLabel: "邮箱",
    phoneLabel: "电话",
    contactTop: "WhatsApp / 微信 / 联系我们",
    signIn: "账户",
    account: "账户",
    wishlist: "收藏",
    cart: "询价清单",
    search: "搜索产品...",
    searchTitle: "搜索",
    quickLinks: "快捷入口",
    searchHardware: "五金",
    searchBags: "成品包",
    searchLeather: "皮革材料",
    searchZippers: "拉链",
    searchButton: "搜索",
    searchAll: "查看全部搜索结果",
    home: "首页",
    contact: "联系我们",
    about: "关于我们",
    newArrivals: "新品",
    quality: "品质",
    heroKicker: "源于设计 | 精工制造",
    heroTitle: "超越设计。经久耐用。",
    heroText: "优秀配件不只是好看，更要经得起真实使用。我们专注配件、包、五金、皮革、工具和拉链供应。",
    shopProducts: "浏览产品",
    requestQuote: "获取报价",
    viewAll: "查看全部品类",
    categoryHead: "按类别采购",
    categoryIntro: "快速找到需要的产品类别。",
    featured: "精选产品",
    new: "新品上架",
    best: "热销产品",
    fullCatalog: "查看完整目录",
    catalogKicker: "采购目录",
    catalogTitle: "产品目录",
    catalogText: "按 SKU、类别、材质、表面、起订量和用途比较产品。",
    filtersTitle: "筛选",
    clearFilters: "清空",
    quickBuying: "快速购买",
    category: "类别",
    material: "材料",
    color: "颜色",
    finish: "表面",
    scale: "规模",
    application: "应用",
    moq: "起订量",
    readyReview: "个产品可供询价查看",
    sortBy: "排序",
    newest: "最新",
    bestSelling: "热销",
    moqLow: "起订量从低到高",
    categorySort: "类别",
    quickView: "快速查看",
    details: "查看详情",
    quote: "加入询价",
    quoteList: "询价清单",
    empty: "询价清单为空。",
    checkout: "发送询盘",
    close: "关闭",
    price: "价格",
    size: "尺寸",
    use: "用途",
    productDescription: "产品描述",
    specifications: "规格参数",
    customization: "定制",
    shipping: "运输交付",
    quantity: "数量",
    noResults: "没有符合当前筛选条件的产品。",
    sample: "现货样品支持",
    custom: "定制 Logo 五金",
    repeat: "重复订单 SKU",
    alloy: "锌合金",
    brass: "黄铜",
    leatherMaterial: "真皮",
    steel: "钢",
    gold: "金色",
    nickel: "镍",
    gunmetal: "枪色",
    black: "黑色",
    plated: "电镀",
    brushed: "拉丝",
    polished: "抛光",
    customFinish: "定制表面",
    small: "小",
    medium: "中号",
    customSize: "定制",
    handbag: "手提包",
    luggage: "行李",
    belt: "腰带",
    under500: "500 件以下",
    between500: "500-1000 件",
    customMoq: "定制起订量",
    brandTagline: "五金 | 皮革 | 定制供应",
    buyerLabel: "买家清单",
    buyerTitle: "发送 SKU、表面、数量和目的地。",
    buyerText: "我们会准备单价、起订量、样品方案和包装建议。",
    metricDesignTitle: "设计",
    metricDesignText: "源于细节",
    metricCareTitle: "精工",
    metricCareText: "为使用而制造",
    metricRealTitle: "真实",
    metricRealText: "经订单验证",
    metricLastTitle: "耐用",
    metricLastText: "为长期表现而生",
    factorySupply: "工厂供应",
    factorySupplyText: "稳定生产和出口包装",
    customizableHardware: "可定制产品",
    customizableHardwareText: "标志、表面、尺寸和模具选项",
    worldwideShipping: "全球发货",
    worldwideShippingText: "支持进口商和线上品牌",
    procurement01Title: "选择产品",
    procurement01Text: "按类别、SKU、材质、表面和用途浏览。",
    procurement02Title: "发送询价信息",
    procurement02Text: "提供数量、目标表面、包装和目的国家。",
    procurement03Title: "确认样品",
    procurement03Text: "批量生产前确认样品、颜色和标志位置。",
    procurement04Title: "重复订单",
    procurement04Text: "保留 SKU、包装和质检记录，方便稳定复购。",
    featuredIntro: "适合买家、工坊和采购团队的核心产品。",
    newIntro: "为生产采购客户准备的新产品。",
    bestIntro: "适合重复订单和批发项目的高需求产品。",
    sixSupply: "六大品类供应",
    sixSupplyTitle: "配件、包、五金、皮革、工具和拉链产品",
    sixSupplyText: "发送产品参考、数量、颜色、尺寸和目的地，我们协助准备报价、样品、包装和复购标准。",
    sixPoint1: "产品图片和 SKU 匹配",
    sixPoint2: "颜色、材质和尺寸确认",
    sixPoint3: "样品和生产报价",
    sixPoint4: "包装和重复订单支持",
    footerHelpEyebrow: "我们可以如何协助",
    footerHelpTitle: "项目开发或生产采购？",
    footerStandardsTitle: "生产标准",
    footerStandardsText: "支持产品匹配、样品确认和复购质检记录，便于稳定下单。",
    footerStandardsLink: "了解更多",
    footerCareTitle: "采购支持",
    footerCareText: "发送 SKU、数量、表面和目的地，我们会准备报价细节。",
    footerCareLink: "获取报价",
    footerShippingTitle: "全球发货",
    footerShippingText: "为进口商、工厂和线上品牌提供出口包装与运输协助。",
    footerShippingLink: "联系我们",
    newsletterTitle: "获取产品更新和批发支持",
    newsletterText: "创建账户或订阅，接收新品信息、样品支持和报价跟进。",
    subscribe: "订阅",
    emailPlaceholder: "您的邮箱地址",
    footerContact: "联系",
    footerDescription: "专业供应包类配件、包、五金、皮革、工具和拉链。",
    footerProjectSupport: "提交项目需求",
    footerContactText: "地址：广州市白云区鹤龙三路4号A栋318室。电话：（86)13500014739。",
    footerAddressTitle: "广州市白云区",
    footerAddressText: "鹤龙三路4号A栋318室",
    footerPhoneTitle: "电话",
    footerEmailTitle: "邮箱",
    footerHoursTitle: "服务时间",
    footerHoursText: "周一至周五：9:00 - 18:00",
    footerHoursNote: "样品、报价和采购支持",
    footerCalloutTitle: "B2B 供应合作伙伴",
    footerCalloutText: "为箱包、五金、皮革、拉链、配件和工具提供工厂采购支持。",
    footerCopyright: "© 2026 AOLOLA。",
    footerMeta: "批发目录 | 样品支持 | 出口包装",
    footerProducts: "产品",
    footerSupport: "支持",
    footerCompany: "公司",
    contactKicker: "获取报价",
    contactTitle: "联系 AOLOLA",
    contactIntro: "请发送产品 SKU、数量、表面处理、目的地和定制需求。我们会回复价格、起订量、样品选项和生产建议。",
    contactName: "姓名",
    contactEmail: "邮箱",
    contactCompany: "公司",
    contactCountry: "国家 / 市场",
    contactChannel: "WhatsApp / 微信",
    contactBuyerType: "买家类型",
    contactProductCategory: "产品类别",
    contactSkuProduct: "SKU 或产品名称",
    contactProductName: "产品名称",
    contactSku: "SKU",
    contactQuantity: "预计数量",
    contactFinishColor: "目标表面 / 颜色",
    contactCustomRequirement: "定制需求",
    contactProjectNotes: "项目备注",
    contactMessage: "留言",
    contactQuantityPlaceholder: "例如：500 pcs / 100 yards",
    contactFinishPlaceholder: "例如：浅金、镍色、哑黑",
    contactCustomPlaceholder: "Logo、模具、尺寸、电镀、包装或样品需求",
    contactNotesPlaceholder: "可填写目标价格、交期、目的地、产品图片或图纸。",
    contactAsideTitle: "商务联系",
    contactAddressLabel: "地址",
    contactAddressValue: "广州市白云区鹤龙三路4号A栋318室",
    contactTelLabel: "电话",
    contactBusinessLabel: "业务",
    contactBusinessValue: "箱包五金、皮革材料、定制配件",
    contactResponseLabel: "响应时间",
    contactResponseValue: "24 小时内",
    contactChecklistTitle: "为了更快报价，请提供：",
    contactChecklist1: "SKU 或参考图片",
    contactChecklist2: "数量和目标市场",
    contactChecklist3: "材质、颜色和表面处理",
    contactChecklist4: "Logo 或开模需求",
    contactChecklist5: "包装和交付需求",
    buyerFactory: "箱包工厂",
    buyerBrand: "品牌 / 进口商",
    buyerWholesaler: "批发商",
    buyerOnline: "线上卖家",
    buyerDesigner: "设计师 / 工作室",
    shippingLink: "运输",
    returnsLink: "退换货",
    faq: "常见问题",
    orderStatus: "订单状态",
    allProducts: "全部产品",
    blog: "博客",
    privacy: "隐私政策",
    terms: "服务条款",
    chat: "在线咨询",
  },
  ru: {
    topLine: "AOLOLA | Аксессуары, сумки, фурнитура, кожа, инструменты и молнии",
    globalSupport: "Поддержка B2B закупок по всему миру",
    emailLabel: "Эл. почта",
    contactTop: "WhatsApp / WeChat / Контакты",
    signIn: "Вход / Регистрация",
    account: "Аккаунт",
    wishlist: "Избранное",
    cart: "Список запроса",
    search: "Поиск товаров...",
    searchButton: "Поиск",
    home: "Главная",
    contact: "Контакты",
    about: "О нас",
    newArrivals: "Новинки",
    quality: "Качество",
    heroKicker: "Дизайн и надежная разработка",
    heroTitle: "За пределами дизайна. Сделано надолго.",
    heroText: "Хорошие аксессуары должны не только выглядеть хорошо, но и работать стабильно.",
    shopProducts: "Каталог",
    requestQuote: "Запросить цену",
    viewAll: "Все категории",
    categoryHead: "Покупать по категориям",
    categoryIntro: "Быстро найдите нужную категорию.",
    featured: "Рекомендуемые товары",
    new: "Новинки",
    best: "Хиты продаж",
    fullCatalog: "Полный каталог",
    catalogKicker: "Каталог закупок",
    catalogTitle: "Каталог товаров",
    catalogText: "Сравните товары по SKU, категории, материалу, отделке, MOQ и применению.",
    filtersTitle: "Фильтры",
    clearFilters: "Очистить",
    quickBuying: "Быстрая закупка",
    category: "Категория",
    material: "Материал",
    color: "Цвет",
    finish: "Отделка",
    scale: "Размер",
    application: "Применение",
    moq: "MOQ",
    readyReview: "готовы к запросу цены",
    sortBy: "Сортировка",
    newest: "Новые",
    bestSelling: "Популярные",
    moqLow: "MOQ по возрастанию",
    categorySort: "Категория",
    quickView: "Быстрый просмотр",
    details: "Подробнее",
    quote: "В запрос",
    quoteList: "Список запроса",
    empty: "Список пуст.",
    checkout: "Отправить запрос",
    close: "Закрыть",
    price: "Цена",
    size: "Размер",
    use: "Применение",
    productDescription: "Описание товара",
    specifications: "Характеристики",
    customization: "Кастомизация",
    shipping: "Доставка",
    quantity: "Количество",
    noResults: "Нет товаров по выбранным фильтрам.",
  },
  es: {
    topLine: "AOLOLA | Accesorios, bolsos, herrajes, cuero, herramientas y cremalleras",
    globalSupport: "Soporte global de compras B2B",
    emailLabel: "Correo",
    contactTop: "WhatsApp / WeChat / Contacto",
    signIn: "Iniciar sesion / Registro",
    account: "Cuenta",
    wishlist: "Favoritos",
    cart: "Lista de cotizacion",
    search: "Buscar productos...",
    searchButton: "Buscar",
    home: "Inicio",
    contact: "Contacto",
    about: "Nosotros",
    newArrivals: "Novedades",
    quality: "Calidad",
    heroKicker: "Inspirado por el diseno | Fabricado con cuidado",
    heroTitle: "Mas alla del diseno. Hecho para durar.",
    heroText: "Los buenos accesorios no solo se ven bien. Estan desarrollados para rendir.",
    shopProducts: "Ver productos",
    requestQuote: "Solicitar cotizacion",
    viewAll: "Todas las categorias",
    categoryHead: "Comprar por categoria",
    categoryIntro: "Encuentre rapidamente la categoria que necesita.",
    featured: "Productos destacados",
    new: "Novedades",
    best: "Mas vendidos",
    fullCatalog: "Catalogo completo",
    catalogKicker: "Catalogo de compra",
    catalogTitle: "Catalogo de productos",
    catalogText: "Compare por SKU, categoria, material, acabado, MOQ y aplicacion.",
    filtersTitle: "Filtros",
    clearFilters: "Limpiar",
    quickBuying: "Compra rapida",
    category: "Categoria",
    material: "Material",
    color: "Color",
    finish: "Acabado",
    scale: "Escala",
    application: "Aplicacion",
    moq: "MOQ",
    readyReview: "listos para cotizacion",
    sortBy: "Ordenar",
    newest: "Mas nuevos",
    bestSelling: "Mas vendidos",
    moqLow: "MOQ menor primero",
    categorySort: "Categoria",
    quickView: "Vista rapida",
    details: "Detalles",
    quote: "Agregar a cotizacion",
    quoteList: "Lista de cotizacion",
    empty: "La lista esta vacia.",
    checkout: "Enviar consulta",
    close: "Cerrar",
    price: "Precio",
    size: "Tamano",
    use: "Uso",
    productDescription: "Descripcion",
    specifications: "Especificaciones",
    customization: "Personalizacion",
    shipping: "Envio",
    quantity: "Cantidad",
    noResults: "No hay productos para estos filtros.",
  },
  fr: {
    topLine: "AOLOLA | Accessoires, sacs, quincaillerie, cuir, outils et fermetures",
    globalSupport: "Support achat B2B mondial",
    emailLabel: "E-mail",
    contactTop: "WhatsApp / WeChat / Contact",
    signIn: "Connexion / Inscription",
    account: "Compte",
    wishlist: "Favoris",
    cart: "Liste de devis",
    search: "Rechercher des produits...",
    searchButton: "Rechercher",
    home: "Accueil",
    contact: "Contact",
    about: "A propos",
    newArrivals: "Nouveautes",
    quality: "Qualite",
    heroKicker: "Inspire par le design | Concu avec soin",
    heroTitle: "Au-dela du design. Fait pour durer.",
    heroText: "Les bons accessoires ne sont pas seulement beaux. Ils sont concus pour performer.",
    shopProducts: "Voir les produits",
    requestQuote: "Demander un devis",
    viewAll: "Toutes les categories",
    categoryHead: "Acheter par categorie",
    categoryIntro: "Trouvez rapidement la categorie souhaitee.",
    featured: "Produits en vedette",
    new: "Nouveautes",
    best: "Meilleures ventes",
    fullCatalog: "Catalogue complet",
    catalogKicker: "Catalogue d'achat",
    catalogTitle: "Catalogue produits",
    catalogText: "Comparez par SKU, categorie, matiere, finition, MOQ et usage.",
    filtersTitle: "Filtres",
    clearFilters: "Effacer",
    quickBuying: "Achat rapide",
    category: "Categorie",
    material: "Matiere",
    color: "Couleur",
    finish: "Finition",
    scale: "Format",
    application: "Usage",
    moq: "MOQ",
    readyReview: "prets pour devis",
    sortBy: "Trier",
    newest: "Nouveaux",
    bestSelling: "Meilleures ventes",
    moqLow: "MOQ croissant",
    categorySort: "Categorie",
    quickView: "Apercu rapide",
    details: "Details",
    quote: "Ajouter au devis",
    quoteList: "Liste de devis",
    empty: "La liste est vide.",
    checkout: "Envoyer",
    close: "Fermer",
    price: "Prix",
    size: "Taille",
    use: "Usage",
    productDescription: "Description",
    specifications: "Specifications",
    customization: "Personnalisation",
    shipping: "Livraison",
    quantity: "Quantite",
    noResults: "Aucun produit ne correspond aux filtres.",
  },
  de: {
    topLine: "AOLOLA | Accessoires, Taschen, Hardware, Leder, Werkzeuge und Reissverschlusse",
    globalSupport: "Globale B2B-Beschaffung",
    emailLabel: "E-Mail",
    contactTop: "WhatsApp / WeChat / Kontakt",
    signIn: "Anmelden / Registrieren",
    account: "Konto",
    wishlist: "Wunschliste",
    cart: "Anfrageliste",
    search: "Produkte suchen...",
    searchButton: "Suchen",
    home: "Start",
    contact: "Kontakt",
    about: "Uber uns",
    newArrivals: "Neuheiten",
    quality: "Qualitaet",
    heroKicker: "Vom Design inspiriert | Mit Sorgfalt entwickelt",
    heroTitle: "Mehr als Design. Fur Dauer gemacht.",
    heroText: "Gute Accessoires sehen nicht nur gut aus. Sie sind fur Leistung entwickelt.",
    shopProducts: "Produkte ansehen",
    requestQuote: "Angebot anfragen",
    viewAll: "Alle Kategorien",
    categoryHead: "Nach Kategorie kaufen",
    categoryIntro: "Finden Sie schnell die passende Kategorie.",
    featured: "Empfohlene Produkte",
    new: "Neuheiten",
    best: "Bestseller",
    fullCatalog: "Vollstandiger Katalog",
    catalogKicker: "Beschaffungskatalog",
    catalogTitle: "Produktkatalog",
    catalogText: "Vergleichen Sie nach SKU, Kategorie, Material, Finish, MOQ und Anwendung.",
    filtersTitle: "Filter",
    clearFilters: "Loschen",
    quickBuying: "Schnellkauf",
    category: "Kategorie",
    material: "Material",
    color: "Farbe",
    finish: "Finish",
    scale: "Grosse",
    application: "Anwendung",
    moq: "MOQ",
    readyReview: "bereit fur Anfrage",
    sortBy: "Sortieren",
    newest: "Neueste",
    bestSelling: "Bestseller",
    moqLow: "MOQ aufsteigend",
    categorySort: "Kategorie",
    quickView: "Schnellansicht",
    details: "Details",
    quote: "Zur Anfrage",
    quoteList: "Anfrageliste",
    empty: "Die Liste ist leer.",
    checkout: "Anfrage senden",
    close: "Schliessen",
    price: "Preis",
    size: "Grosse",
    use: "Anwendung",
    productDescription: "Produktbeschreibung",
    specifications: "Spezifikationen",
    customization: "Anpassung",
    shipping: "Versand",
    quantity: "Menge",
    noResults: "Keine Produkte passen zu den Filtern.",
  },
  it: {
    topLine: "AOLOLA | Accessori, borse, hardware, pelle, strumenti e cerniere",
    globalSupport: "Supporto acquisti B2B globale",
    emailLabel: "E-mail",
    contactTop: "WhatsApp / WeChat / Contatto",
    signIn: "Accedi / Registrati",
    account: "Account",
    wishlist: "Preferiti",
    cart: "Lista preventivo",
    search: "Cerca prodotti...",
    searchButton: "Cerca",
    home: "Home",
    contact: "Contatto",
    about: "Chi siamo",
    newArrivals: "Novita",
    quality: "Qualita",
    heroKicker: "Ispirato dal design | Progettato con cura",
    heroTitle: "Oltre il design. Fatto per durare.",
    heroText: "I buoni accessori non sono solo belli. Sono sviluppati per funzionare.",
    shopProducts: "Vedi prodotti",
    requestQuote: "Richiedi preventivo",
    viewAll: "Tutte le categorie",
    categoryHead: "Acquista per categoria",
    categoryIntro: "Trova rapidamente la categoria necessaria.",
    featured: "Prodotti in evidenza",
    new: "Novita",
    best: "Piu venduti",
    fullCatalog: "Catalogo completo",
    catalogKicker: "Catalogo acquisti",
    catalogTitle: "Catalogo prodotti",
    catalogText: "Confronta per SKU, categoria, materiale, finitura, MOQ e applicazione.",
    filtersTitle: "Filtri",
    clearFilters: "Pulisci",
    quickBuying: "Acquisto rapido",
    category: "Categoria",
    material: "Materiale",
    color: "Colore",
    finish: "Finitura",
    scale: "Scala",
    application: "Applicazione",
    moq: "MOQ",
    readyReview: "pronti per preventivo",
    sortBy: "Ordina",
    newest: "Nuovi",
    bestSelling: "Piu venduti",
    moqLow: "MOQ crescente",
    categorySort: "Categoria",
    quickView: "Vista rapida",
    details: "Dettagli",
    quote: "Aggiungi al preventivo",
    quoteList: "Lista preventivo",
    empty: "La lista e vuota.",
    checkout: "Invia richiesta",
    close: "Chiudi",
    price: "Prezzo",
    size: "Misura",
    use: "Uso",
    productDescription: "Descrizione",
    specifications: "Specifiche",
    customization: "Personalizzazione",
    shipping: "Spedizione",
    quantity: "Quantita",
    noResults: "Nessun prodotto corrisponde ai filtri.",
  },
  ar: {
    topLine: "AOLOLA | اكسسوارات وحقائب ومعدات وجلود وادوات وسحابات",
    globalSupport: "دعم مشتريات B2B عالمي",
    emailLabel: "البريد",
    contactTop: "WhatsApp / WeChat / تواصل معنا",
    signIn: "تسجيل الدخول / التسجيل",
    account: "الحساب",
    wishlist: "المفضلة",
    cart: "قائمة الطلب",
    search: "ابحث عن المنتجات...",
    searchButton: "بحث",
    home: "الرئيسية",
    contact: "تواصل معنا",
    about: "من نحن",
    newArrivals: "وصل حديثا",
    quality: "الجودة",
    heroKicker: "تصميم ملهم | تصنيع بعناية",
    heroTitle: "ما بعد التصميم. مصنوع ليدوم.",
    heroText: "الاكسسوارات الجيدة لا تبدو جميلة فقط، بل يتم تطويرها لتعمل بثبات.",
    shopProducts: "تصفح المنتجات",
    requestQuote: "طلب عرض سعر",
    viewAll: "كل الفئات",
    categoryHead: "تسوق حسب الفئة",
    categoryIntro: "اعثر بسرعة على الفئة المطلوبة.",
    featured: "منتجات مختارة",
    new: "وصل حديثا",
    best: "الاكثر مبيعا",
    fullCatalog: "الكتالوج الكامل",
    catalogKicker: "كتالوج الشراء",
    catalogTitle: "كتالوج المنتجات",
    catalogText: "قارن حسب SKU والفئة والمادة والتشطيب والحد الادنى والتطبيق.",
    filtersTitle: "الفلاتر",
    clearFilters: "مسح",
    quickBuying: "شراء سريع",
    category: "الفئة",
    material: "المادة",
    color: "اللون",
    finish: "التشطيب",
    scale: "الحجم",
    application: "الاستخدام",
    moq: "MOQ",
    readyReview: "جاهزة للمراجعة",
    sortBy: "ترتيب",
    newest: "الاحدث",
    bestSelling: "الاكثر مبيعا",
    moqLow: "MOQ من الاقل",
    categorySort: "الفئة",
    quickView: "عرض سريع",
    details: "التفاصيل",
    quote: "اضف للطلب",
    quoteList: "قائمة الطلب",
    empty: "القائمة فارغة.",
    checkout: "ارسال استفسار",
    close: "اغلاق",
    price: "السعر",
    size: "الحجم",
    use: "الاستخدام",
    productDescription: "وصف المنتج",
    specifications: "المواصفات",
    customization: "التخصيص",
    shipping: "الشحن",
    quantity: "الكمية",
    noResults: "لا توجد منتجات مطابقة.",
    brandTagline: "معدات | جلود | توريد مخصص",
    buyerLabel: "قائمة المشتري",
    buyerTitle: "ارسل SKU والتشطيب والكمية والوجهة.",
    buyerText: "نجهز السعر و MOQ وخيار العينة واقتراح التغليف لمشروعك.",
    metricDesignTitle: "تصميم",
    metricDesignText: "مستلهم من التفاصيل",
    metricCareTitle: "عناية",
    metricCareText: "مصمم للاستخدام",
    metricRealTitle: "حقيقي",
    metricRealText: "مختبر للطلبات",
    metricLastTitle: "يدوم",
    metricLastText: "مصنوع للاداء",
    factorySupply: "توريد المصنع",
    factorySupplyText: "انتاج ثابت وتغليف تصدير",
    customizableHardware: "منتجات قابلة للتخصيص",
    customizableHardwareText: "شعار وتشطيب وحجم وخيارات قالب",
    worldwideShipping: "شحن عالمي",
    worldwideShippingText: "دعم للمستوردين والعلامات التجارية",
    procurement01Title: "اختر المنتجات",
    procurement01Text: "تصفح حسب الفئة و SKU والمادة والتشطيب والاستخدام.",
    procurement02Title: "ارسل تفاصيل السعر",
    procurement02Text: "شارك الكمية والتشطيب المستهدف والتغليف وبلد الشحن.",
    procurement03Title: "تاكيد العينة",
    procurement03Text: "راجع العينة واللون وموضع الشعار قبل الطلب الكبير.",
    procurement04Title: "طلبات متكررة",
    procurement04Text: "احتفظ ب SKU والتغليف وملاحظات الجودة لاعادة الطلب بثبات.",
    featuredIntro: "منتجات اساسية للمشترين وفرق التوريد.",
    newIntro: "منتجات جديدة مجهزة لمشتري الانتاج.",
    bestIntro: "منتجات مطلوبة للطلبات المتكررة والجملة.",
    sixSupply: "توريد ست فئات",
    sixSupplyTitle: "اكسسوارات وحقائب ومعدات وجلود وادوات وسحابات",
    sixSupplyText: "ارسل مرجع المنتج والكمية واللون والحجم والوجهة. نساعد في اعداد السعر والعينة والتغليف ومعايير اعادة الطلب.",
    sixPoint1: "مطابقة صورة المنتج و SKU",
    sixPoint2: "تاكيد اللون والمادة والحجم",
    sixPoint3: "عرض سعر العينة والانتاج",
    sixPoint4: "دعم التغليف واعادة الطلب",
    newsletterTitle: "احصل على تحديثات المنتجات ودعم الجملة",
    newsletterText: "انشئ حسابا او اشترك لاستلام معلومات المنتجات الجديدة ودعم العينات ومتابعة عروض السعر.",
    subscribe: "اشتراك",
    emailPlaceholder: "عنوان البريد الالكتروني",
    footerDescription: "مورد محترف للاكسسوارات والحقائب والمعدات والجلود والادوات والسحابات.",
    footerProducts: "المنتجات",
    footerSupport: "الدعم",
    footerCompany: "الشركة",
    shippingLink: "الشحن",
    returnsLink: "المرتجعات",
    faq: "الاسئلة الشائعة",
    orderStatus: "حالة الطلب",
    allProducts: "كل المنتجات",
    blog: "المدونة",
    privacy: "سياسة الخصوصية",
    terms: "شروط الخدمة",
    chat: "دردشة",
  },
};

const I18N_SUPPLEMENTS = {
  ru: {
    brandTagline: "Фурнитура | Кожа | Индивидуальные поставки",
    buyerLabel: "Список покупателя",
    buyerTitle: "Отправьте SKU, отделку, количество и страну доставки.",
    buyerText: "Мы подготовим цену, MOQ, вариант образца и рекомендацию по упаковке.",
    metricDesignTitle: "Дизайн",
    metricDesignText: "внимание к деталям",
    metricCareTitle: "Точность",
    metricCareText: "для реального использования",
    metricRealTitle: "Проверено",
    metricRealText: "для заказов",
    metricLastTitle: "Надежно",
    metricLastText: "для долгой работы",
    factorySupply: "Заводская поставка",
    factorySupplyText: "Стабильное производство и экспортная упаковка",
    customizableHardware: "Индивидуальные изделия",
    customizableHardwareText: "Логотип, покрытие, размер и варианты формы",
    worldwideShipping: "Мировая доставка",
    worldwideShippingText: "Поддержка импортеров и онлайн-брендов",
    procurement01Title: "Выберите товары",
    procurement01Text: "Просматривайте по категории, SKU, материалу, отделке и применению.",
    procurement02Title: "Отправьте детали",
    procurement02Text: "Укажите количество, отделку, упаковку и страну доставки.",
    procurement03Title: "Подтвердите образец",
    procurement03Text: "Проверьте образец, цвет и место логотипа перед заказом.",
    procurement04Title: "Повторные заказы",
    procurement04Text: "Сохраняем SKU, упаковку и QC-заметки для стабильных повторов.",
    featuredIntro: "Основные товары для покупателей, мастерских и команд закупки.",
    newIntro: "Новые товары, подготовленные для производственных закупок.",
    bestIntro: "Популярные позиции для повторных заказов и опта.",
    sixSupply: "Поставка шести категорий",
    sixSupplyTitle: "Аксессуары, сумки, фурнитура, кожа, инструменты и молнии",
    sixSupplyText: "Отправьте фото, количество, цвет, размер и страну. Мы подготовим цену, образцы, упаковку и стандарты повторного заказа.",
    sixPoint1: "Подбор фото товара и SKU",
    sixPoint2: "Подтверждение цвета, материала и размера",
    sixPoint3: "Расчет образца и производства",
    sixPoint4: "Поддержка упаковки и повторных заказов",
    newsletterTitle: "Получайте обновления товаров и оптовую поддержку",
    newsletterText: "Создайте аккаунт или подпишитесь, чтобы получать новинки, поддержку образцов и ответы по ценам.",
    subscribe: "Подписаться",
    emailPlaceholder: "Ваш email",
    footerDescription: "Поставщик аксессуаров, сумок, фурнитуры, кожи, инструментов и молний.",
    footerProducts: "Товары",
    footerSupport: "Поддержка",
    footerCompany: "Компания",
    shippingLink: "Доставка",
    returnsLink: "Возвраты",
    faq: "FAQ",
    orderStatus: "Статус заказа",
    allProducts: "Все товары",
    blog: "Блог",
    privacy: "Политика конфиденциальности",
    terms: "Условия сервиса",
    chat: "Чат",
  },
  es: {
    brandTagline: "Herrajes | Cuero | Suministro personalizado",
    buyerLabel: "Lista del comprador",
    buyerTitle: "Envie SKU, acabado, cantidad y destino.",
    buyerText: "Preparamos precio unitario, MOQ, opcion de muestra y sugerencia de empaque.",
    factorySupply: "Suministro de fabrica",
    factorySupplyText: "Produccion estable y empaque de exportacion",
    customizableHardware: "Productos personalizables",
    customizableHardwareText: "Logo, acabado, tamano y opciones de molde",
    worldwideShipping: "Envio mundial",
    worldwideShippingText: "Soporte para importadores y marcas online",
    procurement01Title: "Seleccione productos",
    procurement01Text: "Explore por categoria, SKU, material, acabado y uso.",
    procurement02Title: "Envie detalles",
    procurement02Text: "Comparta cantidad, acabado, empaque y pais de envio.",
    procurement03Title: "Confirme muestra",
    procurement03Text: "Revise muestra, color y posicion del logo antes del pedido.",
    procurement04Title: "Pedidos repetidos",
    procurement04Text: "Guardamos SKU, empaque y notas QC para reordenes estables.",
    featuredIntro: "Productos clave para compradores, talleres y equipos de sourcing.",
    newIntro: "Productos nuevos preparados para compradores de produccion.",
    bestIntro: "Articulos de alta demanda para reordenes y mayoristas.",
    sixSupply: "Suministro de seis categorias",
    sixSupplyTitle: "Accesorios, bolsos, herrajes, cuero, herramientas y cremalleras",
    sixSupplyText: "Envie referencia, cantidad, color, tamano y destino. Ayudamos con cotizacion, muestras, empaque y reorden.",
    sixPoint1: "Coincidencia de foto y SKU",
    sixPoint2: "Confirmacion de color, material y tamano",
    sixPoint3: "Cotizacion de muestra y produccion",
    sixPoint4: "Soporte de empaque y reorden",
    newsletterTitle: "Reciba novedades y soporte mayorista",
    newsletterText: "Cree una cuenta o suscribase para recibir nuevos productos, muestras y seguimiento de cotizacion.",
    subscribe: "Suscribirse",
    emailPlaceholder: "Su email",
    footerDescription: "Proveedor de accesorios, bolsos, herrajes, cuero, herramientas y cremalleras.",
    footerProducts: "Productos",
    footerSupport: "Soporte",
    footerCompany: "Empresa",
    shippingLink: "Envio",
    returnsLink: "Devoluciones",
    faq: "FAQ",
    orderStatus: "Estado del pedido",
    allProducts: "Todos los productos",
    blog: "Blog",
    privacy: "Privacidad",
    terms: "Terminos de servicio",
    chat: "Chat",
  },
  fr: {
    brandTagline: "Quincaillerie | Cuir | Supply personnalise",
    buyerLabel: "Liste acheteur",
    buyerTitle: "Envoyez SKU, finition, quantite et destination.",
    buyerText: "Nous preparons prix unitaire, MOQ, option echantillon et conseil emballage.",
    factorySupply: "Approvisionnement usine",
    factorySupplyText: "Production stable et emballage export",
    customizableHardware: "Produits personnalisables",
    customizableHardwareText: "Logo, finition, taille et options moule",
    worldwideShipping: "Expedition mondiale",
    worldwideShippingText: "Support importateurs et marques en ligne",
    procurement01Title: "Selectionner les produits",
    procurement01Text: "Parcourez par categorie, SKU, matiere, finition et usage.",
    procurement02Title: "Envoyer les details",
    procurement02Text: "Partagez quantite, finition cible, emballage et pays.",
    procurement03Title: "Confirmer l'echantillon",
    procurement03Text: "Validez echantillon, couleur et logo avant production.",
    procurement04Title: "Commandes repetees",
    procurement04Text: "Conservez SKU, emballage et notes QC pour reorders stables.",
    featuredIntro: "Produits essentiels pour acheteurs, ateliers et equipes sourcing.",
    newIntro: "Nouveaux produits prepares pour acheteurs production.",
    bestIntro: "Articles demandes pour commandes repetees et wholesale.",
    sixSupply: "Supply six categories",
    sixSupplyTitle: "Accessoires, sacs, quincaillerie, cuir, outils et fermetures",
    sixSupplyText: "Envoyez reference, quantite, couleur, taille et destination. Nous aidons devis, echantillons, emballage et reorder.",
    sixPoint1: "Correspondance photo et SKU",
    sixPoint2: "Validation couleur, matiere et taille",
    sixPoint3: "Devis echantillon et production",
    sixPoint4: "Support emballage et commandes repetees",
    newsletterTitle: "Recevoir nouveautes et support wholesale",
    newsletterText: "Creez un compte ou abonnez-vous pour recevoir produits, echantillons et suivi devis.",
    subscribe: "S'abonner",
    emailPlaceholder: "Votre email",
    footerDescription: "Fournisseur d'accessoires, sacs, quincaillerie, cuir, outils et fermetures.",
    footerProducts: "Produits",
    footerSupport: "Support",
    footerCompany: "Societe",
    shippingLink: "Livraison",
    returnsLink: "Retours",
    faq: "FAQ",
    orderStatus: "Statut commande",
    allProducts: "Tous les produits",
    blog: "Blog",
    privacy: "Confidentialite",
    terms: "Conditions",
    chat: "Chat",
  },
  de: {
    brandTagline: "Hardware | Leder | Individuelle Lieferung",
    buyerLabel: "Einkaeuferliste",
    buyerTitle: "Senden Sie SKU, Finish, Menge und Zielort.",
    buyerText: "Wir bereiten Stueckpreis, MOQ, Musteroption und Verpackungsvorschlag vor.",
    factorySupply: "Fabriklieferung",
    factorySupplyText: "Stabile Produktion und Exportverpackung",
    customizableHardware: "Anpassbare Produkte",
    customizableHardwareText: "Logo, Finish, Groesse und Werkzeugoptionen",
    worldwideShipping: "Weltweiter Versand",
    worldwideShippingText: "Support fuer Importeure und Online-Marken",
    procurement01Title: "Produkte waehlen",
    procurement01Text: "Nach Kategorie, SKU, Material, Finish und Anwendung suchen.",
    procurement02Title: "Details senden",
    procurement02Text: "Menge, Ziel-Finish, Verpackung und Versandland teilen.",
    procurement03Title: "Muster bestaetigen",
    procurement03Text: "Muster, Farbe und Logoposition vor Bestellung pruefen.",
    procurement04Title: "Wiederholbestellungen",
    procurement04Text: "SKU, Verpackung und QC-Notizen fuer stabile Reorders sichern.",
    featuredIntro: "Kernprodukte fuer Einkaeufer, Werkstaetten und Sourcing-Teams.",
    newIntro: "Neue Produkte fuer Produktionskaeufer vorbereitet.",
    bestIntro: "Gefragte Artikel fuer Reorders und Grosshandel.",
    sixSupply: "Sechs Kategorien Supply",
    sixSupplyTitle: "Accessoires, Taschen, Hardware, Leder, Werkzeuge und Reissverschluesse",
    sixSupplyText: "Senden Sie Referenz, Menge, Farbe, Groesse und Zielort. Wir helfen mit Angebot, Muster, Verpackung und Reorder-Standards.",
    sixPoint1: "Produktfoto und SKU-Abgleich",
    sixPoint2: "Farbe, Material und Groesse bestaetigen",
    sixPoint3: "Muster- und Produktionsangebot",
    sixPoint4: "Verpackung und Reorder-Support",
    newsletterTitle: "Produktupdates und Wholesale-Support erhalten",
    newsletterText: "Konto erstellen oder abonnieren fuer Neuheiten, Muster-Support und Angebotsverfolgung.",
    subscribe: "Abonnieren",
    emailPlaceholder: "Ihre E-Mail",
    footerDescription: "Lieferant fuer Accessoires, Taschen, Hardware, Leder, Werkzeuge und Reissverschluesse.",
    footerProducts: "Produkte",
    footerSupport: "Support",
    footerCompany: "Firma",
    shippingLink: "Versand",
    returnsLink: "Rueckgaben",
    faq: "FAQ",
    orderStatus: "Bestellstatus",
    allProducts: "Alle Produkte",
    blog: "Blog",
    privacy: "Datenschutz",
    terms: "Servicebedingungen",
    chat: "Chat",
  },
  it: {
    brandTagline: "Hardware | Pelle | Fornitura personalizzata",
    buyerLabel: "Lista buyer",
    buyerTitle: "Invia SKU, finitura, quantita e destinazione.",
    buyerText: "Prepariamo prezzo unitario, MOQ, opzione campione e suggerimento imballo.",
    factorySupply: "Fornitura di fabbrica",
    factorySupplyText: "Produzione stabile e imballo export",
    customizableHardware: "Prodotti personalizzabili",
    customizableHardwareText: "Logo, finitura, misura e opzioni stampo",
    worldwideShipping: "Spedizione globale",
    worldwideShippingText: "Supporto per importatori e brand online",
    procurement01Title: "Seleziona prodotti",
    procurement01Text: "Sfoglia per categoria, SKU, materiale, finitura e uso.",
    procurement02Title: "Invia dettagli",
    procurement02Text: "Condividi quantita, finitura, imballo e paese di spedizione.",
    procurement03Title: "Conferma campione",
    procurement03Text: "Verifica campione, colore e logo prima del bulk order.",
    procurement04Title: "Ordini ripetuti",
    procurement04Text: "Mantieni SKU, imballo e note QC per riordini stabili.",
    featuredIntro: "Prodotti chiave per buyer, laboratori e team sourcing.",
    newIntro: "Nuovi prodotti preparati per buyer di produzione.",
    bestIntro: "Articoli richiesti per riordini e wholesale.",
    sixSupply: "Fornitura sei categorie",
    sixSupplyTitle: "Accessori, borse, hardware, pelle, strumenti e cerniere",
    sixSupplyText: "Invia riferimento, quantita, colore, misura e destinazione. Aiutiamo con preventivo, campioni, imballo e riordino.",
    sixPoint1: "Abbinamento foto prodotto e SKU",
    sixPoint2: "Conferma colore, materiale e misura",
    sixPoint3: "Preventivo campione e produzione",
    sixPoint4: "Supporto imballo e riordino",
    newsletterTitle: "Ricevi aggiornamenti e supporto wholesale",
    newsletterText: "Crea un account o iscriviti per ricevere prodotti, campioni e follow-up preventivo.",
    subscribe: "Iscriviti",
    emailPlaceholder: "La tua email",
    footerDescription: "Fornitore di accessori, borse, hardware, pelle, strumenti e cerniere.",
    footerProducts: "Prodotti",
    footerSupport: "Supporto",
    footerCompany: "Azienda",
    shippingLink: "Spedizione",
    returnsLink: "Resi",
    faq: "FAQ",
    orderStatus: "Stato ordine",
    allProducts: "Tutti i prodotti",
    blog: "Blog",
    privacy: "Privacy",
    terms: "Termini di servizio",
    chat: "Chat",
  },
};

Object.keys(I18N_SUPPLEMENTS).forEach((lang) => {
  I18N[lang] = { ...I18N[lang], ...I18N_SUPPLEMENTS[lang] };
});

const CATEGORY_TEXT = {
  en: {
    Accessories: ["Bag Accessories", "Decorative and functional accessories for bags, straps and leather goods.", "Zinc alloy / brass / mixed material", "Plated, polished or custom finish", "Handbags, fashion bags, straps and small leather goods"],
    Bag: ["Finished Bags", "Bag styles and references for sourcing, development and OEM projects.", "Leather / PU / fabric options", "Custom material and hardware matching", "Retail bags, sample development and brand projects"],
    Hardware: ["Hardware Product", "Locks, clasps, rings, hooks and metal parts engineered for reliable use.", "Zinc alloy / brass / stainless steel", "Light gold, nickel, gunmetal, antique brass", "Handbags, luggage, belts and leather accessories"],
    Leather: ["Leather Materials", "Leather and leather-like material options for bag production and sampling.", "Genuine leather / microfiber / PU", "Smooth, pebbled, matte or custom texture", "Bags, belts, wallets, straps and panels"],
    Tools: ["Leather Tools", "Tools and workshop accessories for leather craft and production support.", "Steel / wood / alloy", "Workshop grade finish", "Cutting, punching, stitching, setting and repair"],
    Zipper: ["Zippers", "Zippers, sliders and pullers for bags, luggage and leather goods.", "Metal / nylon / resin / alloy puller", "Gold, nickel, antique brass, matte black", "Handbags, luggage, wallets, backpacks and apparel"],
  },
  zh: {
    Accessories: ["包类配件", "用于箱包、肩带和皮具的装饰及功能配件。", "锌合金 / 铜 / 复合材料", "电镀、抛光或定制表面", "手提包、时尚包、肩带和小皮具"],
    Bag: ["成品包", "适合采购、开发和 OEM 项目的包款参考。", "真皮 / PU / 面料选项", "可匹配定制材料和五金", "零售包、样品开发和品牌项目"],
    Hardware: ["五金产品", "锁扣、扣具、环、钩和耐用金属件。", "锌合金 / 铜 / 不锈钢", "浅金、镍色、枪色、古铜", "手提包、行李、腰带和皮具配件"],
    Leather: ["皮革材料", "用于箱包生产和打样的皮革及类皮材料。", "真皮 / 微纤 / PU", "光面、荔枝纹、哑光或定制纹理", "包、腰带、钱包、肩带和面料片"],
    Tools: ["皮具工具", "用于皮具手工和生产支持的工具及工作坊配件。", "钢 / 木 / 合金", "工坊级表面", "裁切、冲孔、缝制、安装和修理"],
    Zipper: ["拉链", "用于箱包和皮具的拉链、拉头和滑块。", "金属 / 尼龙 / 树脂 / 合金拉头", "金色、镍色、古铜、哑黑", "手提包、行李、钱包、背包和服装"],
  },
  ar: {
    Accessories: ["اكسسوارات الحقائب", "اكسسوارات زخرفية ووظيفية للحقائب والاحزمة والمنتجات الجلدية.", "سبيكة زنك / نحاس / مواد مختلطة", "مطلي او مصقول او تشطيب مخصص", "حقائب يد، حقائب موضة، احزمة ومنتجات جلدية صغيرة"],
    Bag: ["حقائب جاهزة", "نماذج حقائب مناسبة للتوريد والتطوير ومشاريع OEM.", "جلد / PU / خيارات قماش", "مطابقة مواد ومعدات مخصصة", "حقائب تجزئة، تطوير عينات ومشاريع علامات تجارية"],
    Hardware: ["منتجات معدنية", "اقفال وابازيم وحلقات وخطافات وقطع معدنية للاستخدام المستقر.", "سبيكة زنك / نحاس / فولاذ مقاوم للصدأ", "ذهبي فاتح، نيكل، رمادي معدني، نحاس عتيق", "حقائب يد، امتعة، احزمة واكسسوارات جلدية"],
    Leather: ["مواد جلدية", "خيارات جلد ومواد شبيهة بالجلد لانتاج الحقائب والعينات.", "جلد طبيعي / مايكروفايبر / PU", "ناعم، محبب، مطفي او ملمس مخصص", "حقائب، احزمة، محافظ، احزمة كتف والواح"],
    Tools: ["ادوات جلدية", "ادوات واكسسوارات ورشة لدعم الحرف الجلدية والانتاج.", "فولاذ / خشب / سبيكة", "تشطيب مناسب للورشة", "قص، تخريم، خياطة، تركيب واصلاح"],
    Zipper: ["سحابات", "سحابات وسلايدر وسحابات سحب للحقائب والامتعة والجلود.", "معدن / نايلون / راتنج / ساحب سبيكة", "ذهبي، نيكل، نحاس عتيق، اسود مطفي", "حقائب يد، امتعة، محافظ، حقائب ظهر وملابس"],
  },
};

const CATEGORY_TEXT_SUPPLEMENTS = {
  ru: {
    Accessories: ["Аксессуары для сумок", "Декоративные и функциональные аксессуары для сумок, ремней и кожгалантереи.", "Цинковый сплав / латунь / смешанные материалы", "Покрытие, полировка или индивидуальная отделка", "Сумки, модные сумки, ремни и мелкая кожгалантерея"],
    Bag: ["Готовые сумки", "Модели сумок для закупки, разработки и OEM проектов.", "Кожа / PU / тканевые варианты", "Индивидуальный подбор материала и фурнитуры", "Розничные сумки, образцы и бренд-проекты"],
    Hardware: ["Металлическая фурнитура", "Замки, пряжки, кольца, крючки и металлические детали для стабильного использования.", "Цинковый сплав / латунь / нержавеющая сталь", "Светлое золото, никель, ганметалл, античная латунь", "Сумки, багаж, ремни и кожаные аксессуары"],
    Leather: ["Кожаные материалы", "Кожа и материалы под кожу для производства сумок и образцов.", "Натуральная кожа / микрофибра / PU", "Гладкая, зернистая, матовая или индивидуальная фактура", "Сумки, ремни, кошельки, лямки и панели"],
    Tools: ["Инструменты для кожи", "Инструменты и аксессуары мастерской для кожевенного ремесла и производства.", "Сталь / дерево / сплав", "Отделка уровня мастерской", "Резка, пробивка, шитье, установка и ремонт"],
    Zipper: ["Молнии", "Молнии, бегунки и пуллеры для сумок, багажа и кожгалантереи.", "Металл / нейлон / смола / пуллер из сплава", "Золото, никель, античная латунь, матовый черный", "Сумки, багаж, кошельки, рюкзаки и одежда"],
  },
  es: {
    Accessories: ["Accesorios para bolsos", "Accesorios decorativos y funcionales para bolsos, correas y articulos de cuero.", "Aleacion de zinc / laton / material mixto", "Chapado, pulido o acabado personalizado", "Bolsos, moda, correas y pequenos articulos de cuero"],
    Bag: ["Bolsos terminados", "Modelos de bolsos para compra, desarrollo y proyectos OEM.", "Cuero / PU / opciones de tela", "Material y herrajes personalizados", "Bolsos retail, muestras y proyectos de marca"],
    Hardware: ["Herrajes metalicos", "Cierres, hebillas, anillas, ganchos y piezas metalicas para uso estable.", "Aleacion de zinc / laton / acero inoxidable", "Oro claro, niquel, gunmetal, laton antiguo", "Bolsos, equipaje, cinturones y accesorios de cuero"],
    Leather: ["Materiales de cuero", "Cuero y materiales similares para produccion de bolsos y muestras.", "Cuero genuino / microfibra / PU", "Liso, granulado, mate o textura personalizada", "Bolsos, cinturones, carteras, correas y paneles"],
    Tools: ["Herramientas para cuero", "Herramientas y accesorios de taller para artesania y produccion en cuero.", "Acero / madera / aleacion", "Acabado de taller", "Corte, perforado, costura, montaje y reparacion"],
    Zipper: ["Cremalleras", "Cremalleras, sliders y pullers para bolsos, equipaje y articulos de cuero.", "Metal / nylon / resina / puller de aleacion", "Oro, niquel, laton antiguo, negro mate", "Bolsos, equipaje, carteras, mochilas y ropa"],
  },
  fr: {
    Accessories: ["Accessoires de sacs", "Accessoires decoratifs et fonctionnels pour sacs, sangles et articles en cuir.", "Alliage de zinc / laiton / matieres mixtes", "Plaque, poli ou finition personnalisee", "Sacs a main, mode, sangles et petite maroquinerie"],
    Bag: ["Sacs finis", "Modeles de sacs pour achat, developpement et projets OEM.", "Cuir / PU / options tissu", "Matiere et quincaillerie personnalisees", "Sacs retail, echantillons et projets de marque"],
    Hardware: ["Quincaillerie metal", "Fermoirs, boucles, anneaux, crochets et pieces metal pour usage stable.", "Alliage de zinc / laiton / acier inoxydable", "Or clair, nickel, gunmetal, laiton antique", "Sacs, bagages, ceintures et accessoires cuir"],
    Leather: ["Matieres cuir", "Cuir et matieres similaires pour production de sacs et echantillons.", "Cuir veritable / microfibre / PU", "Lisse, graine, mat ou texture personnalisee", "Sacs, ceintures, portefeuilles, sangles et panneaux"],
    Tools: ["Outils cuir", "Outils et accessoires d'atelier pour artisanat cuir et production.", "Acier / bois / alliage", "Finition atelier", "Coupe, perforation, couture, pose et reparation"],
    Zipper: ["Fermetures", "Fermetures, curseurs et tirettes pour sacs, bagages et maroquinerie.", "Metal / nylon / resine / tirette alliage", "Or, nickel, laiton antique, noir mat", "Sacs, bagages, portefeuilles, sacs a dos et vetements"],
  },
  de: {
    Accessories: ["Taschenaccessoires", "Dekorative und funktionale Accessoires fuer Taschen, Gurte und Lederwaren.", "Zinklegierung / Messing / Mischmaterial", "Beschichtet, poliert oder individuelles Finish", "Handtaschen, Mode-Taschen, Gurte und kleine Lederwaren"],
    Bag: ["Fertige Taschen", "Taschenmodelle fuer Beschaffung, Entwicklung und OEM-Projekte.", "Leder / PU / Stoffoptionen", "Individuelle Material- und Hardware-Abstimmung", "Retail-Taschen, Musterentwicklung und Markenprojekte"],
    Hardware: ["Metall-Hardware", "Schloesser, Schnallen, Ringe, Haken und Metallteile fuer stabile Nutzung.", "Zinklegierung / Messing / Edelstahl", "Hellgold, Nickel, Gunmetal, Antikmessing", "Handtaschen, Gepaeck, Guertel und Lederaccessoires"],
    Leather: ["Ledermaterialien", "Leder und lederaehnliche Materialien fuer Taschenproduktion und Muster.", "Echtleder / Mikrofaser / PU", "Glatt, genarbt, matt oder individuelle Struktur", "Taschen, Guertel, Geldboersen, Riemen und Paneele"],
    Tools: ["Lederwerkzeuge", "Werkzeuge und Werkstattzubehoer fuer Lederhandwerk und Produktion.", "Stahl / Holz / Legierung", "Werkstatt-Finish", "Schneiden, Stanzen, Naehen, Setzen und Reparatur"],
    Zipper: ["Reissverschluesse", "Reissverschluesse, Slider und Puller fuer Taschen, Gepaeck und Lederwaren.", "Metall / Nylon / Harz / Legierungspuller", "Gold, Nickel, Antikmessing, Mattschwarz", "Handtaschen, Gepaeck, Geldboersen, Rucksaecke und Kleidung"],
  },
  it: {
    Accessories: ["Accessori per borse", "Accessori decorativi e funzionali per borse, tracolle e articoli in pelle.", "Lega di zinco / ottone / materiale misto", "Placcato, lucido o finitura personalizzata", "Borse, moda, tracolle e piccoli articoli in pelle"],
    Bag: ["Borse finite", "Modelli di borse per acquisto, sviluppo e progetti OEM.", "Pelle / PU / opzioni tessuto", "Materiale e hardware personalizzati", "Borse retail, campioni e progetti brand"],
    Hardware: ["Hardware metallico", "Chiusure, fibbie, anelli, ganci e parti metalliche per uso stabile.", "Lega di zinco / ottone / acciaio inox", "Oro chiaro, nichel, gunmetal, ottone antico", "Borse, valigie, cinture e accessori in pelle"],
    Leather: ["Materiali in pelle", "Pelle e materiali simili per produzione borse e campioni.", "Vera pelle / microfibra / PU", "Liscia, martellata, opaca o texture personalizzata", "Borse, cinture, portafogli, tracolle e pannelli"],
    Tools: ["Strumenti per pelle", "Strumenti e accessori da laboratorio per artigianato pelle e produzione.", "Acciaio / legno / lega", "Finitura da laboratorio", "Taglio, punzonatura, cucitura, montaggio e riparazione"],
    Zipper: ["Cerniere", "Cerniere, slider e tiretti per borse, valigie e articoli in pelle.", "Metallo / nylon / resina / tiretto in lega", "Oro, nichel, ottone antico, nero opaco", "Borse, valigie, portafogli, zaini e abbigliamento"],
  },
};

Object.keys(CATEGORY_TEXT_SUPPLEMENTS).forEach((lang) => {
  CATEGORY_TEXT[lang] = { ...(CATEGORY_TEXT[lang] || {}), ...CATEGORY_TEXT_SUPPLEMENTS[lang] };
});

const FILTER_LABELS = {
  en: {
    sample: "Sample Available",
    custom: "Logo Customization",
    repeat: "Repeat order SKUs",
    buckles: "Buckles & strap adjusters",
    locks: "Locks, clasps & closures",
    rings: "D-rings, O-rings & loops",
    chains: "Chains, hooks & connectors",
    bagBody: "Finished bags & samples",
    leatherSheets: "Leather sheets & straps",
    zipperPulls: "Zippers, sliders & pullers",
    alloy: "Zinc alloy",
    brass: "Solid brass",
    leatherMaterial: "Genuine leather / PU",
    steel: "Stainless steel / iron",
    nylon: "Nylon / resin zipper",
    lightGold: "Light gold",
    nickel: "Nickel / silver",
    gunmetal: "Gunmetal",
    matteBlack: "Matte black",
    antiqueBrass: "Antique brass",
    customPlating: "Custom plating",
    customFinish: "Custom finish",
    smallHardware: "Small hardware under 20mm",
    mediumHardware: "20-40mm strap hardware",
    wideStrap: "Wide strap / handle fit",
    customSize: "Custom size or mold",
    handbag: "Handbags & Purses",
    luggage: "Luggage & Travel Bags",
    belt: "Belts & leather goods",
    repair: "Repair, craft & workshop",
    under500: "Low MOQ under 500 pcs",
    between500: "500-1000 pcs wholesale",
    customMoq: "Custom MOQ",
    oem: "OEM / ODM Development",
    packaging: "Export Packaging Support",
    toteBags: "Tote Bags",
    shoulderBags: "Shoulder Bags",
    crossbodyBags: "Crossbody Bags",
    sampleBags: "Sample-Ready Bag Styles",
    leatherBags: "Leather / PU Bags",
    logoReadyBags: "Logo-Ready Bag Design",
    logoPlates: "Logo plates & metal labels",
    leatherStraps: "Leather straps",
    microfiberLeather: "Microfiber leather",
    puLeather: "PU leather",
    grainTexture: "Pebbled / grain texture",
    smoothFinish: "Smooth finish",
    zipperCoil: "Nylon coil zippers",
    zipperMetal: "Metal zippers",
    zipperSliderPuller: "Zipper sliders & pullers",
    zipperTape: "Custom zipper tape",
    zipperRolls: "Zipper rolls by yard",
    bagCharmsTags: "Bag charms & tags",
    bagStraps: "Bag straps",
    decorativeTrims: "Decorative trims",
    packagingAccessories: "Packaging accessories",
    replacementParts: "Replacement parts",
    punchingTools: "Punching tools",
    cuttingTools: "Cutting tools",
    rivetSetters: "Rivet / snap setters",
    measuringTools: "Measuring tools",
    handTools: "Hand tools",
    thicknessOptions: "Thickness options",
    rollWidthOptions: "Roll width options",
    apparelAccessories: "Apparel accessories",
  },
  zh: {
    sample: "可提供样品",
    custom: "Logo 定制",
    repeat: "可复购 SKU",
    buckles: "扣具与肩带调节扣",
    locks: "锁扣、插扣与闭合件",
    rings: "D 环、O 环与连接环",
    chains: "链条、挂钩与连接件",
    bagBody: "成品包与样品",
    leatherSheets: "皮料片材与皮带",
    zipperPulls: "拉链、拉头与拉片",
    alloy: "锌合金",
    brass: "实心黄铜",
    leatherMaterial: "真皮 / PU",
    steel: "不锈钢 / 铁",
    nylon: "尼龙 / 树脂拉链",
    lightGold: "浅金色",
    nickel: "镍色 / 银色",
    gunmetal: "枪黑色",
    matteBlack: "哑黑色",
    antiqueBrass: "古铜色",
    customPlating: "定制电镀",
    customFinish: "定制表面",
    smallHardware: "20mm 以下小五金",
    mediumHardware: "20-40mm 肩带五金",
    wideStrap: "宽肩带 / 手柄适配",
    customSize: "定制尺寸或开模",
    handbag: "手袋与女包",
    luggage: "箱包与旅行包",
    belt: "腰带与皮具",
    repair: "维修、手作与工作室",
    under500: "低起订量 500 件以下",
    between500: "500-1000 件批发",
    customMoq: "定制起订量",
    oem: "OEM / ODM 开发",
    packaging: "出口包装支持",
    toteBags: "托特包",
    shoulderBags: "肩背包",
    crossbodyBags: "斜挎包",
    sampleBags: "可打样包款",
    leatherBags: "真皮 / PU 包款",
    logoReadyBags: "可加 Logo 包款",
    logoPlates: "Logo 标牌 / 金属牌",
    leatherStraps: "皮革肩带 / 条料",
    microfiberLeather: "超纤皮",
    puLeather: "PU 皮革",
    grainTexture: "荔枝纹 / 压纹",
    smoothFinish: "光面 / 平纹",
    zipperCoil: "尼龙码装拉链",
    zipperMetal: "金属拉链",
    zipperSliderPuller: "拉头 / 拉片",
    zipperTape: "定制布带颜色",
    zipperRolls: "码装 / 卷装拉链",
    bagCharmsTags: "吊牌 / 挂饰",
    bagStraps: "包带 / 肩带",
    decorativeTrims: "装饰条 / 饰边",
    packagingAccessories: "包装配件",
    replacementParts: "替换维修配件",
    punchingTools: "冲孔工具",
    cuttingTools: "裁切工具",
    rivetSetters: "铆钉 / 四合扣安装工具",
    measuringTools: "测量工具",
    handTools: "手工皮具工具",
    thicknessOptions: "厚度可选",
    rollWidthOptions: "卷料宽度可选",
    apparelAccessories: "服装辅料",
  },
  ru: { sample: "Поддержка образцов", custom: "Кастомный логотип", repeat: "SKU для повторных заказов", alloy: "Цинковый сплав", brass: "Латунь", leatherMaterial: "Кожа", steel: "Сталь", gold: "Золото", nickel: "Никель", gunmetal: "Ганметалл", black: "Черный", plated: "Покрытие", brushed: "Матовый", polished: "Полированный", customFinish: "Индивидуальная отделка", small: "Малый", medium: "Средний", customSize: "Индивидуальный", handbag: "Сумка", luggage: "Багаж", belt: "Ремень", under500: "До 500 шт", between500: "500-1000 шт", customMoq: "Индивидуальный MOQ" },
  es: { sample: "Soporte de muestras", custom: "Logo personalizado", repeat: "SKU de recompra", alloy: "Aleacion de zinc", brass: "Laton", leatherMaterial: "Cuero", steel: "Acero", gold: "Oro", nickel: "Niquel", gunmetal: "Gunmetal", black: "Negro", plated: "Chapado", brushed: "Cepillado", polished: "Pulido", customFinish: "Acabado personalizado", small: "Pequeno", medium: "Mediano", customSize: "Personalizado", handbag: "Bolso", luggage: "Equipaje", belt: "Cinturon", under500: "Menos de 500 pcs", between500: "500-1000 pcs", customMoq: "MOQ personalizado" },
  fr: { sample: "Support echantillon", custom: "Logo personnalise", repeat: "SKU reorder", alloy: "Alliage de zinc", brass: "Laiton", leatherMaterial: "Cuir", steel: "Acier", gold: "Or", nickel: "Nickel", gunmetal: "Gunmetal", black: "Noir", plated: "Plaque", brushed: "Brosse", polished: "Poli", customFinish: "Finition personnalisee", small: "Petit", medium: "Moyen", customSize: "Personnalise", handbag: "Sac a main", luggage: "Bagage", belt: "Ceinture", under500: "Moins de 500 pcs", between500: "500-1000 pcs", customMoq: "MOQ personnalise" },
  de: { sample: "Musterunterstutzung", custom: "Individuelles Logo", repeat: "Wiederbestell-SKU", alloy: "Zinklegierung", brass: "Messing", leatherMaterial: "Leder", steel: "Stahl", gold: "Gold", nickel: "Nickel", gunmetal: "Gunmetal", black: "Schwarz", plated: "Beschichtet", brushed: "Geburstet", polished: "Poliert", customFinish: "Individuelles Finish", small: "Klein", medium: "Mittel", customSize: "Individuell", handbag: "Handtasche", luggage: "Gepack", belt: "Gurtel", under500: "Unter 500 Stk", between500: "500-1000 Stk", customMoq: "Individueller MOQ" },
  it: { sample: "Supporto campioni", custom: "Logo personalizzato", repeat: "SKU riordino", alloy: "Lega di zinco", brass: "Ottone", leatherMaterial: "Pelle", steel: "Acciaio", gold: "Oro", nickel: "Nichel", gunmetal: "Gunmetal", black: "Nero", plated: "Placcato", brushed: "Spazzolato", polished: "Lucido", customFinish: "Finitura personalizzata", small: "Piccolo", medium: "Medio", customSize: "Personalizzato", handbag: "Borsa", luggage: "Bagaglio", belt: "Cintura", under500: "Meno di 500 pcs", between500: "500-1000 pcs", customMoq: "MOQ personalizzato" },
  ar: { sample: "دعم العينات", custom: "شعار مخصص", repeat: "SKU لاعادة الطلب", alloy: "سبيكة زنك", brass: "نحاس", leatherMaterial: "جلد", steel: "فولاذ", gold: "ذهبي", nickel: "نيكل", gunmetal: "رمادي معدني", black: "اسود", plated: "مطلي", brushed: "مصقول خشن", polished: "مصقول", customFinish: "تشطيب مخصص", small: "صغير", medium: "متوسط", customSize: "مخصص", handbag: "حقيبة يد", luggage: "امتعة", belt: "حزام", under500: "اقل من 500 قطعة", between500: "500-1000 قطعة", customMoq: "MOQ مخصص" },
};

Object.assign(FILTER_LABELS.ar, {
  buckles: "ابازيم ومعدلات احزمة",
  locks: "اقفال ومشابك واغلاقات",
  rings: "حلقات D وحلقات O وحلقات ربط",
  chains: "سلاسل وخطافات وموصلات",
  bagBody: "حقائب جاهزة وعينات",
  leatherSheets: "ألواح واحزمة جلدية",
  zipperPulls: "سحابات وسلايدر وسحابات سحب",
  lightGold: "ذهبي فاتح",
  nylon: "نايلون / سحاب راتنج",
  matteBlack: "اسود مطفي",
  antiqueBrass: "نحاس عتيق",
  customPlating: "طلاء مخصص",
  smallHardware: "قطع معدنية صغيرة اقل من 20 مم",
  mediumHardware: "قطع احزمة 20-40 مم",
  wideStrap: "مناسب للاحزمة العريضة والمقابض",
  repair: "اصلاح وحرف وورشة",
  oem: "تطوير OEM / ODM",
  packaging: "دعم تغليف التصدير",
  toteBags: "حقائب توت",
  shoulderBags: "حقائب كتف",
  crossbodyBags: "حقائب كروس بودي",
  sampleBags: "موديلات حقائب جاهزة للعينات",
  leatherBags: "حقائب جلد / PU",
  logoReadyBags: "تصميم حقائب قابل للشعار",
  logoPlates: "لوحات شعار وبطاقات معدنية",
  leatherStraps: "احزمة جلدية",
  microfiberLeather: "جلد مايكروفايبر",
  puLeather: "جلد PU",
  grainTexture: "ملمس محبب / بارز",
  smoothFinish: "تشطيب ناعم",
  zipperCoil: "سحابات نايلون ملفوفة",
  zipperMetal: "سحابات معدنية",
  zipperSliderPuller: "سلايدر وسحابات سحب",
  zipperTape: "شريط سحاب مخصص",
  zipperRolls: "سحابات رول بالمتر",
  bagCharmsTags: "تعليقات وبطاقات للحقائب",
  bagStraps: "احزمة حقائب",
  decorativeTrims: "زخارف وحواف تزيينية",
  packagingAccessories: "اكسسوارات تغليف",
  replacementParts: "قطع بديلة",
  punchingTools: "ادوات تخريم",
  cuttingTools: "ادوات قص",
  rivetSetters: "ادوات تثبيت براشيم وكباسات",
  measuringTools: "ادوات قياس",
  handTools: "ادوات يدوية",
  thicknessOptions: "خيارات السماكة",
  rollWidthOptions: "خيارات عرض الرول",
  apparelAccessories: "اكسسوارات ملابس",
});

const FILTER_UI = {
  en: {
    intro: "Browse by category, product type, finish, material, size and buying use. These filters match common sourcing terms for bag supplies.",
    categories: "Categories",
    type: "Product Type",
    finish: "Finish / Plating",
    material: "Material",
    size: "Size & Fit",
    application: "Application",
    supply: "MOQ & Supply",
    custom: "Customization",
  },
  zh: {
    intro: "按类别、产品类型、表面处理、材质、尺寸和采购用途筛选，方便采购客户快速找到合适产品。",
    categories: "类别",
    type: "产品类型",
    finish: "表面 / 电镀",
    material: "材质",
    size: "尺寸与适配",
    application: "用途",
    supply: "起订量与供货",
    custom: "定制服务",
  },
  ar: {
    intro: "تصفح حسب الفئة ونوع المنتج والتشطيب والمادة والمقاس والاستخدام لتجهيز طلبات الشراء بشكل اوضح.",
    categories: "الفئات",
    type: "نوع المنتج",
    finish: "التشطيب / الطلاء",
    material: "المادة",
    size: "المقاس والتوافق",
    application: "الاستخدام",
    supply: "MOQ والتوريد",
    custom: "خدمة التخصيص",
  },
};

const FILTER_SECTIONS_BY_CATEGORY = {
  All: [
    ["type", [["type", "toteBags", "bag-body", 120], ["type", "buckles", "buckles", 86], ["type", "leatherSheets", "leather-sheets", 160], ["type", "zipperCoil", "zipper-pulls", 130], ["type", "bagStraps", "chains", 58], ["type", "handTools", "repair", 90]]],
    ["finish", [["color", "lightGold", "gold", 96], ["color", "nickel", "nickel", 88], ["color", "gunmetal", "gunmetal", 54], ["color", "matteBlack", "black", 61], ["finish", "customPlating", "custom", 120]]],
    ["material", [["material", "alloy", "alloy", 132], ["material", "brass", "brass", 78], ["material", "steel", "steel", 65], ["material", "leatherMaterial", "leather", 160], ["material", "nylon", "nylon", 82]]],
    ["application", [["application", "handbag", "handbag", 210], ["application", "luggage", "luggage", 84], ["application", "belt", "belt", 96], ["application", "repair", "repair", 110]]],
    ["supply", [["moq", "under500", "under500", 180], ["moq", "between500", "500to1000", 260], ["quick", "sample", "sample", 90], ["quick", "repeat", "repeat", 110]]],
  ],
  Bag: [
    ["type", [["type", "toteBags", "bag-body", 42], ["type", "shoulderBags", "bag-body", 36], ["type", "crossbodyBags", "bag-body", 34], ["type", "sampleBags", "bag-body", 28], ["type", "leatherBags", "bag-body", 40], ["type", "logoReadyBags", "bag-body", 24]]],
    ["material", [["material", "leatherMaterial", "leather", 60], ["material", "microfiberLeather", "leather", 48], ["material", "puLeather", "leather", 44]]],
    ["size", [["scale", "wideStrap", "wide-strap", 32], ["scale", "customSize", "custom", 28]]],
    ["application", [["application", "handbag", "handbag", 70], ["application", "luggage", "luggage", 22]]],
    ["custom", [["quick", "custom", "custom", 38], ["customization", "oem", "oem", 30], ["customization", "packaging", "packaging", 26], ["quick", "sample", "sample", 40]]],
  ],
  Hardware: [
    ["type", [["type", "buckles", "buckles", 44], ["type", "locks", "locks", 36], ["type", "rings", "rings", 40], ["type", "chains", "chains", 30], ["type", "logoPlates", "rings", 28]]],
    ["finish", [["color", "lightGold", "gold", 50], ["color", "nickel", "nickel", 48], ["color", "gunmetal", "gunmetal", 30], ["color", "matteBlack", "black", 32], ["finish", "antiqueBrass", "antique", 24], ["finish", "customPlating", "custom", 50]]],
    ["material", [["material", "alloy", "alloy", 60], ["material", "brass", "brass", 36], ["material", "steel", "steel", 34]]],
    ["size", [["scale", "smallHardware", "small", 38], ["scale", "mediumHardware", "medium", 58], ["scale", "wideStrap", "wide-strap", 34], ["scale", "customSize", "custom", 36]]],
    ["application", [["application", "handbag", "handbag", 64], ["application", "luggage", "luggage", 26], ["application", "belt", "belt", 42]]],
    ["custom", [["quick", "custom", "custom", 52], ["customization", "oem", "oem", 34], ["quick", "sample", "sample", 36], ["quick", "repeat", "repeat", 44]]],
  ],
  Leather: [
    ["type", [["type", "leatherSheets", "leather-sheets", 64], ["type", "leatherStraps", "leather-sheets", 42], ["material", "microfiberLeather", "leather", 36], ["material", "puLeather", "leather", 40]]],
    ["material", [["material", "leatherMaterial", "leather", 72], ["material", "microfiberLeather", "leather", 36], ["material", "puLeather", "leather", 40]]],
    ["finish", [["finish", "grainTexture", "custom", 38], ["finish", "smoothFinish", "custom", 44], ["finish", "customFinish", "custom", 30]]],
    ["size", [["scale", "thicknessOptions", "custom", 46], ["scale", "rollWidthOptions", "custom", 32], ["scale", "customSize", "custom", 28]]],
    ["application", [["application", "handbag", "handbag", 62], ["application", "belt", "belt", 28], ["application", "repair", "repair", 34]]],
    ["supply", [["moq", "under500", "under500", 54], ["moq", "between500", "500to1000", 68], ["quick", "sample", "sample", 42]]],
  ],
  Zipper: [
    ["type", [["type", "zipperCoil", "zipper-pulls", 44], ["type", "zipperMetal", "zipper-pulls", 38], ["type", "zipperSliderPuller", "zipper-pulls", 52], ["type", "zipperTape", "zipper-pulls", 30], ["type", "zipperRolls", "zipper-pulls", 28]]],
    ["material", [["material", "nylon", "nylon", 54], ["material", "alloy", "alloy", 36], ["material", "steel", "steel", 28]]],
    ["finish", [["color", "lightGold", "gold", 34], ["color", "nickel", "nickel", 32], ["color", "gunmetal", "gunmetal", 24], ["color", "matteBlack", "black", 30], ["finish", "customPlating", "custom", 40]]],
    ["application", [["application", "handbag", "handbag", 44], ["application", "luggage", "luggage", 40], ["application", "apparelAccessories", "apparel", 24]]],
    ["custom", [["quick", "custom", "custom", 46], ["customization", "oem", "oem", 28], ["quick", "sample", "sample", 34], ["quick", "repeat", "repeat", 38]]],
  ],
  Accessories: [
    ["type", [["type", "bagCharmsTags", "chains", 34], ["type", "bagStraps", "chains", 42], ["type", "decorativeTrims", "rings", 28], ["type", "packagingAccessories", "bag-body", 26], ["type", "replacementParts", "repair", 32]]],
    ["material", [["material", "alloy", "alloy", 42], ["material", "brass", "brass", 24], ["material", "leatherMaterial", "leather", 38], ["material", "nylon", "nylon", 28]]],
    ["finish", [["color", "lightGold", "gold", 34], ["color", "nickel", "nickel", 30], ["color", "matteBlack", "black", 28], ["finish", "customPlating", "custom", 36]]],
    ["application", [["application", "handbag", "handbag", 54], ["application", "belt", "belt", 24], ["application", "repair", "repair", 26]]],
    ["custom", [["quick", "custom", "custom", 44], ["customization", "oem", "oem", 28], ["customization", "packaging", "packaging", 34]]],
  ],
  Tools: [
    ["type", [["type", "punchingTools", "repair", 24], ["type", "cuttingTools", "repair", 22], ["type", "rivetSetters", "repair", 20], ["type", "measuringTools", "repair", 18], ["type", "handTools", "repair", 30]]],
    ["material", [["material", "steel", "steel", 46], ["material", "brass", "brass", 18]]],
    ["application", [["application", "repair", "repair", 58], ["application", "belt", "belt", 20], ["application", "handbag", "handbag", 18]]],
    ["supply", [["moq", "under500", "under500", 34], ["quick", "sample", "sample", 26], ["quick", "repeat", "repeat", 24]]],
  ],
};

const CATEGORY_LABELS = {
  en: { Accessories: "Accessories", Bag: "Bag", Hardware: "Hardware", Leather: "Leather", Tools: "Tools", Zipper: "Zipper" },
  zh: { Accessories: "配件", Bag: "包袋", Hardware: "五金", Leather: "皮革", Tools: "工具", Zipper: "拉链" },
  ru: { Accessories: "Аксессуары", Bag: "Сумки", Hardware: "Фурнитура", Leather: "Кожа", Tools: "Инструменты", Zipper: "Молнии" },
  es: { Accessories: "Accesorios", Bag: "Bolsos", Hardware: "Herrajes", Leather: "Cuero", Tools: "Herramientas", Zipper: "Cremalleras" },
  fr: { Accessories: "Accessoires", Bag: "Sacs", Hardware: "Quincaillerie", Leather: "Cuir", Tools: "Outils", Zipper: "Fermetures" },
  de: { Accessories: "Accessoires", Bag: "Taschen", Hardware: "Hardware", Leather: "Leder", Tools: "Werkzeuge", Zipper: "Reissverschlusse" },
  it: { Accessories: "Accessori", Bag: "Borse", Hardware: "Hardware", Leather: "Pelle", Tools: "Strumenti", Zipper: "Cerniere" },
  ar: { Accessories: "اكسسوارات", Bag: "حقائب", Hardware: "معدات", Leather: "جلود", Tools: "ادوات", Zipper: "سحابات" },
};

const HERO_CATEGORY_ACTIONS = {
  en: { Bag: "View Bag", Hardware: "View Hardware", Leather: "View Leather", Zipper: "View Zipper", Accessories: "View Accessories", Tools: "View Tools" },
  zh: { Bag: "查看包袋", Hardware: "查看五金", Leather: "查看皮革", Zipper: "查看拉链", Accessories: "查看配件", Tools: "查看工具" },
  ru: { Bag: "Открыть сумки", Hardware: "Открыть фурнитуру", Leather: "Открыть кожу", Zipper: "Открыть молнии", Accessories: "Открыть аксессуары", Tools: "Открыть инструменты" },
  es: { Bag: "Ver bolsos", Hardware: "Ver herrajes", Leather: "Ver cuero", Zipper: "Ver cremalleras", Accessories: "Ver accesorios", Tools: "Ver herramientas" },
  fr: { Bag: "Voir les sacs", Hardware: "Voir la quincaillerie", Leather: "Voir le cuir", Zipper: "Voir les fermetures", Accessories: "Voir les accessoires", Tools: "Voir les outils" },
  de: { Bag: "Taschen ansehen", Hardware: "Hardware ansehen", Leather: "Leder ansehen", Zipper: "Reissverschlusse ansehen", Accessories: "Accessoires ansehen", Tools: "Werkzeuge ansehen" },
  it: { Bag: "Vedi borse", Hardware: "Vedi hardware", Leather: "Vedi pelle", Zipper: "Vedi cerniere", Accessories: "Vedi accessori", Tools: "Vedi strumenti" },
  ar: { Bag: "عرض الحقائب", Hardware: "عرض مستلزمات الحقائب", Leather: "عرض الجلود", Zipper: "عرض السحابات", Accessories: "عرض الإكسسوارات", Tools: "عرض الأدوات" },
};

const GENERIC_PRODUCT_TEXT = {
  ru: ["товар", "Профессиональный товар для B2B закупок, образцов и повторных заказов.", "Материал по категории / индивидуальная опция", "Покрытие и цвет по запросу", "Сумки, кожа, багаж и производственные проекты"],
  es: ["producto", "Producto profesional para compras B2B, muestras y pedidos repetidos.", "Material segun categoria / opcion personalizada", "Acabado y color bajo solicitud", "Bolsos, cuero, equipaje y proyectos de produccion"],
  fr: ["produit", "Produit professionnel pour achat B2B, echantillons et commandes repetees.", "Matiere selon categorie / option personnalisee", "Finition et couleur sur demande", "Sacs, cuir, bagages et projets de production"],
  de: ["Produkt", "Professionelles Produkt fur B2B-Beschaffung, Muster und Wiederbestellungen.", "Material nach Kategorie / individuelle Option", "Finish und Farbe auf Anfrage", "Taschen, Leder, Gepack und Produktionsprojekte"],
  it: ["prodotto", "Prodotto professionale per acquisti B2B, campioni e riordini.", "Materiale secondo categoria / opzione personalizzata", "Finitura e colore su richiesta", "Borse, pelle, bagagli e progetti di produzione"],
  ar: ["منتج", "منتج احترافي لمشتريات B2B والعينات واعادة الطلب.", "مادة حسب الفئة / خيار مخصص", "تشطيب ولون حسب الطلب", "حقائب وجلود وامتعة ومشاريع انتاج"],
};

function currentLang() {
  const urlLang = new URLSearchParams(window.location.search).get("lang");
  if (LANGUAGES.some(([code]) => code === urlLang)) return urlLang;
  return localStorage.getItem("auroraLang") || "en";
}

function langPack() {
  return I18N[currentLang()] || I18N.en;
}

function t(key) {
  return langPack()[key] || I18N.en[key] || key;
}

function categoryLabel(category) {
  const labels = CATEGORY_LABELS[currentLang()] || CATEGORY_LABELS.en;
  return labels[category] || category;
}

function heroCategoryAction(category) {
  const actions = HERO_CATEGORY_ACTIONS[currentLang()] || HERO_CATEGORY_ACTIONS.en;
  return actions[category] || categoryLabel(category);
}

function normalizeCategory(value) {
  if (!value) return "";
  const decoded = String(value).trim();
  const direct = CATEGORY_CONFIG.find((item) => item.name.toLowerCase() === decoded.toLowerCase());
  if (direct) return direct.name;
  for (const labels of Object.values(CATEGORY_LABELS)) {
    const match = Object.entries(labels).find(([, label]) => String(label).toLowerCase() === decoded.toLowerCase());
    if (match) return match[0];
  }
  return "";
}

function categoryText(category) {
  const lang = currentLang();
  const pack = CATEGORY_TEXT[lang];
  if (pack[category]) return pack[category];
  const generic = GENERIC_PRODUCT_TEXT[lang];
  if (generic) {
    return [`${categoryLabel(category)} ${generic[0]}`, generic[1], generic[2], generic[3], generic[4]];
  }
  return CATEGORY_TEXT.en[category];
}

function normalizeSearchText(value) {
  return String(value || "").trim().toLowerCase();
}

function searchQueryFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return normalizeSearchText(params.get("q") || params.get("s"));
}

function productSearchHaystack(productInput) {
  const product = enrichProduct(productInput);
  const categoryTexts = Object.values(CATEGORY_TEXT)
    .flatMap((pack) => pack[product.category] || [])
    .join(" ");
  const categoryLabels = Object.values(CATEGORY_LABELS)
    .map((pack) => pack[product.category])
    .filter(Boolean)
    .join(" ");
  return normalizeSearchText([
    product.name,
    product.sku,
    product.category,
    categoryLabel(product.category),
    categoryLabels,
    product.material,
    product.finish,
    product.application,
    product.description,
    product.moq,
    product.price,
    categoryTexts,
    String(product.number),
    String(product.number).padStart(2, "0"),
  ].join(" "));
}

function productMatchesSearch(productInput, query) {
  const normalized = normalizeSearchText(query);
  if (!normalized) return true;
  return normalized.split(/\s+/).every((term) => productSearchHaystack(productInput).includes(term));
}

function searchResultsHref(query) {
  const url = new URL("products.html", window.location.href);
  const normalized = String(query || "").trim();
  if (normalized) url.searchParams.set("q", normalized);
  url.searchParams.set("lang", currentLang());
  return `${url.pathname.split("/").pop()}${url.search}`;
}

function productDetailHref(product) {
  const url = new URL("product-detail.html", window.location.href);
  url.searchParams.set("sku", product.sku);
  url.searchParams.set("lang", currentLang());
  return `${url.pathname.split("/").pop()}${url.search}`;
}

function renderSearchSuggestions(form) {
  const input = form.querySelector('input[type="search"], input[name="q"], input[name="s"]');
  if (!input) return;
  const query = input.value.trim();
  let panel = form.querySelector(".search-suggestions");
  if (!panel) {
    panel = document.createElement("div");
    panel.className = "search-suggestions";
    form.append(panel);
  }
  if (!query) {
    panel.classList.remove("is-open");
    panel.innerHTML = "";
    return;
  }
  const matches = AURORA_PRODUCTS.filter((item) => productMatchesSearch(item, query)).slice(0, 6);
  panel.innerHTML = matches.length ? `
    ${matches.map((item) => {
      const product = enrichProduct(item);
      return `
        <a class="search-suggestion" href="${productDetailHref(product)}">
          <img src="${encodeURI(product.image)}" alt="${escapeInfoHtml(product.name)}" />
          <span><strong>${escapeInfoHtml(product.name)}</strong><small>${escapeInfoHtml(product.sku)} · ${escapeInfoHtml(categoryLabel(product.category))}</small></span>
        </a>
      `;
    }).join("")}
    <a class="search-suggestion search-suggestion--all" href="${searchResultsHref(query)}">${t("searchAll")}</a>
  ` : `<div class="search-suggestion search-suggestion--empty">${t("noResults")}</div>`;
  panel.classList.add("is-open");
}

function translatedFilterLabel(key) {
  const filterPack = FILTER_LABELS[currentLang()] || {};
  if (filterPack[key]) return filterPack[key];
  if (FILTER_LABELS.en?.[key]) return FILTER_LABELS.en[key];
  return langPack()[key] || key;
}

function filterUiText() {
  return FILTER_UI[currentLang()] || FILTER_UI.en;
}

const FILTER_URL_PARAM_TO_GROUP = {
  product_type: "type",
  type: "type",
  finish: ["color", "finish"],
  color: "color",
  material: "material",
  size_fit: "scale",
  scale: "scale",
  application: "application",
  custom_service: ["quick", "customization"],
  quick: "quick",
  customization: "customization",
  supply: "moq",
  moq: "moq",
};

const FILTER_URL_PARAMS = Object.keys(FILTER_URL_PARAM_TO_GROUP);

function countProductsForFilters(filters, activeCategory = "") {
  return AURORA_PRODUCTS.filter((item) => {
    if (activeCategory && item.category !== activeCategory) return false;
    return productMatchesSeoFilters(item, filters);
  }).length;
}

function checkedFilterCategory() {
  const checked = [...document.querySelectorAll('[data-filter-group="category"]:checked')]
    .map((input) => normalizeCategory(input.value))
    .filter(Boolean);
  return checked.length === 1 ? checked[0] : "";
}

function categoryFromUrl() {
  return normalizeCategory(new URLSearchParams(window.location.search).get("category"));
}

function activeFilterCategory() {
  return checkedFilterCategory() || categoryFromUrl();
}

function syncCategoryUrl(category) {
  const url = new URL(window.location.href);
  if (category) {
    url.searchParams.set("category", category);
  } else {
    url.searchParams.delete("category");
  }
  FILTER_URL_PARAMS.forEach((param) => url.searchParams.delete(param));
  window.history.replaceState({}, "", url);
}

function applyUrlFiltersToPanel(panel) {
  const params = new URLSearchParams(window.location.search);
  FILTER_URL_PARAMS.forEach((param) => {
    const rawValues = params.getAll(param).flatMap((value) => String(value).split(","));
    const groups = FILTER_URL_PARAM_TO_GROUP[param];
    const groupList = Array.isArray(groups) ? groups : [groups];
    rawValues.map((value) => value.trim()).filter(Boolean).forEach((value) => {
      groupList.forEach((group) => {
        const input = Array.from(panel.querySelectorAll(`[data-filter-group="${group}"]`)).find((item) => item.value === value);
        if (input) input.checked = true;
      });
    });
  });
}

function syncFilterSectionVisibility(panel) {
  panel.querySelectorAll(".filter-group").forEach((group) => {
    const toggle = group.querySelector("[data-filter-section-toggle]");
    if (!toggle) return;
    const hasCheckedOption = Boolean(group.querySelector("[data-filter-group]:checked"));
    group.classList.toggle("is-collapsed", !hasCheckedOption);
    toggle.setAttribute("aria-expanded", hasCheckedOption ? "true" : "false");
  });
}

function renderFilterPanel() {
  const panel = document.querySelector("[data-filter-panel]");
  if (!panel) return;
  const activeCategory = activeFilterCategory();
  const lang = currentLang();
  if (panel.dataset.renderedLang === lang && panel.dataset.renderedCategory === activeCategory) return;
  const ui = filterUiText();
  const categoryOptions = CATEGORY_CONFIG.map((item) => `
    <label class="aurora-filter-option${activeCategory === item.name ? " is-selected" : ""}">
      <input type="checkbox" data-filter-group="category" value="${item.name}" ${activeCategory === item.name ? "checked" : ""} />
      <span class="aurora-filter-label">${categoryLabel(item.name)}</span>
    </label>
  `).join("");
  const categorySections = FILTER_SECTIONS_BY_CATEGORY[activeCategory] || FILTER_SECTIONS_BY_CATEGORY.All;
  const sections = categorySections.map(([titleKey, options]) => `
    <div class="filter-group">
      <button type="button" class="filter-section-toggle" data-filter-section-toggle aria-expanded="false">
        <span>${ui[titleKey]}</span><span class="filter-section-chevron" aria-hidden="true">⌄</span>
      </button>
      ${options.map(([filterGroup, labelKey, value, count]) => `
        <label class="aurora-filter-option">
          <input type="checkbox" data-filter-group="${filterGroup}" value="${value}" />
          <span class="aurora-filter-label">${translatedFilterLabel(labelKey)}</span>
        </label>
      `).join("")}
    </div>
  `).join("");
  panel.innerHTML = `
    <div class="filter-head"><strong>${t("filtersTitle")}</strong><button type="button" data-clear-filters>${t("clearFilters")}</button></div>
    <p class="filter-intro">${ui.intro}</p>
    <div class="filter-group filter-group--tree">
      <button type="button" class="filter-section-toggle" data-filter-section-toggle aria-expanded="false">
        <span>${ui.categories}</span><span class="filter-section-chevron" aria-hidden="true">⌄</span>
      </button>
      ${categoryOptions}
    </div>
    ${sections}
  `;
  applyUrlFiltersToPanel(panel);
  updateFilterOptionStates(panel);
  syncFilterSectionVisibility(panel);
  panel.dataset.renderedLang = lang;
  panel.dataset.renderedCategory = activeCategory;
}

function ensureMobileCatalogFilterControls() {
  const grid = document.querySelector("[data-catalog-grid]");
  const panel = document.querySelector("[data-filter-panel]");
  if (!grid || !panel) return;
  const catalogMain = grid.parentElement;
  if (!catalogMain) return;
  let trigger = catalogMain.querySelector("[data-mobile-filter-toggle]");
  if (!trigger) {
    trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "mobile-filter-trigger";
    trigger.setAttribute("data-mobile-filter-toggle", "");
    trigger.setAttribute("aria-controls", "aurora-mobile-filters");
    const sortRow = catalogMain.querySelector(".sort-row");
    catalogMain.insertBefore(trigger, sortRow || grid);
  }
  trigger.textContent = currentLang() === "zh" ? "筛选" : "Filters";
  panel.id = "aurora-mobile-filters";
  panel.setAttribute("aria-label", trigger.textContent);
  let backdrop = document.querySelector("[data-filter-backdrop]");
  if (!backdrop) {
    backdrop = document.createElement("button");
    backdrop.type = "button";
    backdrop.className = "mobile-filter-backdrop";
    backdrop.setAttribute("data-filter-backdrop", "");
    document.body.appendChild(backdrop);
  }
  backdrop.setAttribute("aria-label", currentLang() === "zh" ? "关闭筛选" : "Close filters");
}

let mobileFilterScrollY = 0;
let mobileFilterLockStyles = null;
let mobileFilterTouchLockBound = false;

function bindMobileFilterTouchLock() {
  if (mobileFilterTouchLockBound) return;
  document.addEventListener(
    "touchmove",
    (event) => {
      if (!document.documentElement.classList.contains("aurora-filter-open")) return;
      if (!event.target.closest("[data-filter-panel]")) event.preventDefault();
    },
    { passive: false },
  );
  mobileFilterTouchLockBound = true;
}

function setMobileFilterDrawer(open) {
  const panel = document.querySelector("[data-filter-panel]");
  const backdrop = document.querySelector("[data-filter-backdrop]");
  const trigger = document.querySelector("[data-mobile-filter-toggle]");
  if (!panel) return;
  const nextOpen = Boolean(open);
  const root = document.documentElement;
  const body = document.body;
  bindMobileFilterTouchLock();

  if (nextOpen && !root.classList.contains("aurora-filter-open")) {
    mobileFilterScrollY = window.scrollY;
    mobileFilterLockStyles = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
    };
    root.classList.add("aurora-filter-open");
    body.classList.add("aurora-filter-open");
    body.style.position = "fixed";
    body.style.top = `-${mobileFilterScrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
  } else if (!nextOpen && root.classList.contains("aurora-filter-open")) {
    root.classList.remove("aurora-filter-open");
    body.classList.remove("aurora-filter-open");
    const previous = mobileFilterLockStyles || {};
    body.style.position = previous.position || "";
    body.style.top = previous.top || "";
    body.style.left = previous.left || "";
    body.style.right = previous.right || "";
    body.style.width = previous.width || "";
    mobileFilterLockStyles = null;
    window.requestAnimationFrame(() => window.scrollTo(0, mobileFilterScrollY));
  }

  panel.classList.toggle("is-mobile-open", nextOpen);
  if (backdrop) backdrop.classList.toggle("is-open", nextOpen);
  if (trigger) trigger.setAttribute("aria-expanded", nextOpen ? "true" : "false");
}

function updateFilterOptionStates(scope = document) {
  scope.querySelectorAll(".aurora-filter-option").forEach((label) => {
    const input = label.querySelector("input");
    label.classList.toggle("is-selected", Boolean(input?.checked));
  });
}

const PAGE_TEXT = {
  en: {
    accountKicker: "Account access",
    accountTitle: "My Account",
    accountIntro: "Create an account, sign in and review order history from one clean account page.",
    signInTitle: "Sign In",
    createAccountTitle: "Create Account",
    fullName: "Full Name",
    emailAddress: "Email Address",
    loginPassword: "Login Password",
    companyName: "Company Name",
    companyFullAddress: "Company Full Address",
    businessCertificate: "Business Certificate Attachment",
    createAccountButton: "Create Account",
    orderHistoryTitle: "Order History",
    orderHistoryIntro: "Logged-in users can review order date, item name, specification, quantity, total paid and status.",
    orderDate: "Order Date",
    itemName: "Item Name",
    specification: "Specification",
    qty: "Qty",
    totalPaid: "Total Paid",
    status: "Status",
    detail: "Detail",
    processing: "Processing",
    view: "View",
    checkoutKicker: "Order checkout",
    checkoutTitle: "Checkout",
    checkoutIntro: "Choose guest checkout or create an account while placing the order.",
    checkoutOptions: "Checkout Options",
    guestCheckout: "Checkout as Guest",
    accountCheckout: "Create Account & Checkout",
    shippingAddress: "Shipping Address",
    placeOrder: "Place Order",
    orderSummary: "Order Summary",
    orderSummaryText: "Review the products and quantities in your quote list before sending the inquiry.",
  },
  zh: {
    accountKicker: "账户入口",
    accountTitle: "我的账户",
    accountIntro: "创建账户、登录并在同一个简洁页面查看历史订单。",
    signInTitle: "登录",
    createAccountTitle: "创建账户",
    fullName: "姓名",
    emailAddress: "邮箱地址",
    loginPassword: "登录密码",
    companyName: "公司名称",
    companyFullAddress: "公司完整地址",
    businessCertificate: "营业证明附件",
    createAccountButton: "创建账户",
    orderHistoryTitle: "历史订单",
    orderHistoryIntro: "登录后可查看下单日期、商品名称、规格、数量、支付总额和订单状态。",
    orderDate: "下单日期",
    itemName: "商品名称",
    specification: "规格",
    qty: "数量",
    totalPaid: "支付总额",
    status: "状态",
    detail: "详情",
    processing: "处理中",
    view: "查看",
    checkoutKicker: "订单结账",
    checkoutTitle: "结账",
    checkoutIntro: "下单时可选择游客结账，或同时创建账户。",
    checkoutOptions: "结账方式",
    guestCheckout: "游客结账",
    accountCheckout: "创建账户并结账",
    shippingAddress: "收货地址",
    placeOrder: "提交订单",
    orderSummary: "订单摘要",
    orderSummaryText: "提交询价前，请确认报价清单中的产品和数量。",
  },
};

function tagLabel(tag) {
  const labels = {
    en: { Featured: "Featured", "New Arrival": "New Arrival", "Best Seller": "Best Seller" },
    zh: { Featured: "精选", "New Arrival": "新品", "Best Seller": "畅销" },
    ru: { Featured: "Рекомендуемое", "New Arrival": "Новинка", "Best Seller": "Бестселлер" },
    es: { Featured: "Destacado", "New Arrival": "Nuevo", "Best Seller": "Mas vendido" },
    fr: { Featured: "En vedette", "New Arrival": "Nouveau", "Best Seller": "Meilleure vente" },
    de: { Featured: "Empfohlen", "New Arrival": "Neu", "Best Seller": "Bestseller" },
    it: { Featured: "In evidenza", "New Arrival": "Novita", "Best Seller": "Best seller" },
    ar: { Featured: "مختار", "New Arrival": "وصل حديثا", "Best Seller": "الاكثر مبيعا" },
  };
  return labels[currentLang()]?.[tag] || labels.en[tag] || tag;
}

function auroraAssetBase() {
  return (window.AURORA_THEME_ASSET_BASE || "assets").replace(/\/$/, "");
}

function imagePath(category, index) {
  const path = `${auroraAssetBase()}/catalog/${category}/${category} (${index}).jpg`;
  return category === "Bag" && Number(index) === 3 ? `${path}?v=20260816-bag3-white` : path;
}

function categoryThumbnailPath(category) {
  return `${auroraAssetBase()}/catalog/category-thumbnails/${category}.png`;
}

const AURORA_PRODUCTS = CATEGORY_CONFIG.flatMap((category) =>
  Array.from({ length: category.count }, (_, itemIndex) => {
    const number = itemIndex + 1;
    return {
      sku: `ABS-${category.prefix}-${String(number).padStart(3, "0")}`,
      category: category.name,
      number,
      moqNumber: category.moq,
      moq: `${category.moq} pcs`,
      image: imagePath(category.name, number),
      tags: number <= 4 ? ["Featured"] : number <= 7 ? ["New Arrival"] : number <= 10 ? ["Best Seller"] : [],
      price: "Request Quote",
    };
  })
);

function enrichProduct(product) {
  const [title, description, material, finish, application] = categoryText(product.category);
  return {
    ...product,
    name: `${title} ${String(product.number).padStart(2, "0")}`,
    description,
    material,
    finish,
    color: finish,
    application,
    size: currentLang() === "zh" ? "可定制尺寸 / 规格" : "Custom size / specification",
    price: t("requestQuote"),
  };
}

function quoteItems() {
  try {
    return JSON.parse(localStorage.getItem("auroraQuoteItems") || "[]");
  } catch {
    return [];
  }
}

function saveQuoteItems(items) {
  localStorage.setItem("auroraQuoteItems", JSON.stringify(items));
  updateQuoteCount();
}

function productBySku(sku) {
  return enrichProduct(AURORA_PRODUCTS.find((item) => item.sku === sku) || AURORA_PRODUCTS[0]);
}

function compactProductMeta(product) {
  const material = product.material.replace(/\s*\/\s*/g, " / ");
  const size = product.size.replace(/\s*\/\s*/g, " / ");
  return `${material} · ${size}`;
}

function productCard(productInput, options = {}) {
  const product = enrichProduct(productInput);
  const variant = options.variant ? ` product-card--${options.variant}` : "";
  const hideQuote = options.hideQuote === true;
  return `
    <article class="product-card${variant}">
      <a class="product-card__image" href="product-detail.html?sku=${encodeURIComponent(product.sku)}">
        <img src="${encodeURI(product.image)}" alt="${product.name}" loading="lazy" />
      </a>
      <div class="product-card__body">
        <div class="product-card__meta"><span>${product.sku}</span><span>${categoryLabel(product.category)}</span></div>
        <h3>${product.name}</h3>
        <p class="product-card__summary">${compactProductMeta(product)}</p>
        <div class="buying-row"><span>${t("moq")} ${product.moq}</span></div>
        <div class="product-actions">
          <a class="detail-link" href="product-detail.html?sku=${encodeURIComponent(product.sku)}">${t("details")} <span aria-hidden="true">&rsaquo;</span></a>
          ${hideQuote ? "" : `<button class="btn btn-secondary" type="button" data-add-quote="${product.sku}">${t("quote")}</button>`}
        </div>
      </div>
    </article>
  `;
}

function animateProductCards(grid) {
  if (!grid) return;
  grid.classList.add("aurora-products-grid");
  const cards = Array.from(grid.querySelectorAll(".product-card"));
  cards.forEach((card, index) => {
    card.classList.add("aurora-product-card");
    card.classList.remove("is-visible");
    card.style.setProperty("--aurora-card-delay", `${Math.min(index * 45, 300)}ms`);
  });
  window.requestAnimationFrame(() => {
    grid.classList.remove("is-updating");
    cards.forEach((card) => card.classList.add("is-visible"));
  });
}

function renderCategories() {
  const target = document.querySelector("[data-category-grid]");
  if (!target) return;
  target.innerHTML = CATEGORY_CONFIG.map((category) => {
    const productText = categoryText(category.name);
    return `
      <a class="category-card" href="products.html?category=${encodeURIComponent(category.name)}">
        <div class="category-card__media">
          <img src="${encodeURI(categoryThumbnailPath(category.name))}" alt="${categoryLabel(category.name)}" loading="lazy" />
        </div>
        <div class="category-card__body">
          <h3>${categoryLabel(category.name)}</h3>
          <p>${productText[1]}</p>
          <span class="category-card__count">${category.count} ${currentLang() === "zh" ? "个产品" : "Products"}</span>
          <span class="category-card__link">${currentLang() === "zh" ? "浏览分类" : "Browse Category"} <span aria-hidden="true">→</span></span>
        </div>
      </a>
    `;
  }).join("");
}

function filteredProducts(mode) {
  let products = AURORA_PRODUCTS;
  if (mode === "featured") products = products.filter((item) => item.tags.includes("Featured"));
  if (mode === "new") products = products.filter((item) => item.tags.includes("New Arrival"));
  if (mode === "best") products = products.filter((item) => item.tags.includes("Best Seller"));
  return products;
}

function stopProductCarousel(target) {
  const timer = productCarouselTimers.get(target);
  if (!timer) return;
  window.clearInterval(timer);
  productCarouselTimers.delete(target);
}

function carouselCardCenterLeft(viewport, card) {
  if (!viewport || !card) return 0;
  return card.offsetLeft - (viewport.clientWidth - card.offsetWidth) / 2;
}

function nearestCarouselCardIndex(viewport) {
  const cards = Array.from(viewport?.querySelectorAll(".product-card") || []);
  if (!viewport || !cards.length) return 0;
  const viewportRect = viewport.getBoundingClientRect();
  const viewportCenter = viewportRect.left + viewportRect.width / 2;
  let nearest = 0;
  let nearestDistance = Infinity;
  cards.forEach((card, index) => {
    const rect = card.getBoundingClientRect();
    const distance = Math.abs((rect.left + rect.width / 2) - viewportCenter);
    if (distance < nearestDistance) {
      nearest = index;
      nearestDistance = distance;
    }
  });
  return nearest;
}

function scrollCarouselCardIntoCenter(viewport, index, behavior = "auto") {
  const cards = Array.from(viewport?.querySelectorAll(".product-card") || []);
  const card = cards[index];
  if (!viewport || !card) return;
  const viewportRect = viewport.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();
  const delta = (cardRect.left + cardRect.width / 2) - (viewportRect.left + viewportRect.width / 2);
  viewport.scrollTo({
    left: viewport.scrollLeft + delta,
    behavior,
  });
}

function normalizeLoopingProductCarousel(viewport) {
  if (!viewport || viewport.dataset.loopCarousel !== "true") return;
  const cards = Array.from(viewport.querySelectorAll(".product-card"));
  if (cards.length < 4 || viewport.dataset.loopNormalizing === "true") return;
  const index = nearestCarouselCardIndex(viewport);
  const lastIndex = cards.length - 1;
  const loopCount = Number.parseInt(viewport.dataset.loopCount || "0", 10);
  let targetIndex = null;
  if (loopCount > 0 && cards.length >= loopCount * 3) {
    if (index < loopCount) targetIndex = index + loopCount;
    if (index >= loopCount * 2) targetIndex = index - loopCount;
  } else {
    if (index === 0) targetIndex = lastIndex - 1;
    if (index === lastIndex) targetIndex = 1;
  }
  if (targetIndex === null) return;
  viewport.dataset.loopNormalizing = "true";
  viewport.classList.add("is-loop-normalizing");
  viewport.scrollLeft = carouselCardCenterLeft(viewport, cards[targetIndex]);
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      viewport.classList.remove("is-loop-normalizing");
      delete viewport.dataset.loopNormalizing;
    });
  });
}

function scheduleLoopingCarouselNormalize(viewport) {
  if (!viewport || viewport.dataset.loopCarousel !== "true") return;
  const existing = productCarouselScrollTimers.get(viewport);
  if (existing) window.clearTimeout(existing);
  const timer = window.setTimeout(() => {
    productCarouselScrollTimers.delete(viewport);
    normalizeLoopingProductCarousel(viewport);
  }, 120);
  productCarouselScrollTimers.set(viewport, timer);
}

function loopingCarouselStartIndex(viewport) {
  const cards = Array.from(viewport?.querySelectorAll(".product-card") || []);
  const requested = Number.parseInt(viewport?.dataset.loopStart || "1", 10);
  if (!Number.isFinite(requested)) return 1;
  return Math.max(1, Math.min(requested, Math.max(1, cards.length - 2)));
}

function productCarouselStep(viewport) {
  const track = viewport.querySelector(".product-carousel__track");
  const card = track?.querySelector(".product-card");
  if (!track || !card) return;
  if (viewport.dataset.loopCarousel === "true") {
    const cards = Array.from(track.querySelectorAll(".product-card"));
    if (cards.length < 2) return;
    scrollCarouselCardIntoCenter(viewport, nearestCarouselCardIndex(viewport) + 1, "smooth");
    scheduleLoopingCarouselNormalize(viewport);
    return;
  }
  const gap = Number.parseFloat(window.getComputedStyle(track).columnGap || "0");
  const step = card.getBoundingClientRect().width + gap;
  const maxScroll = viewport.scrollWidth - viewport.clientWidth;
  if (maxScroll <= 2 || step <= 0) return;
  const next = viewport.scrollLeft + step;
  viewport.scrollTo({
    left: next >= maxScroll - step / 2 ? 0 : next,
    behavior: "smooth",
  });
}

function startProductCarousel(target) {
  stopProductCarousel(target);
  const viewport = target.querySelector(".product-carousel__viewport");
  if (!viewport || viewport.scrollWidth <= viewport.clientWidth + 2) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (viewport.dataset.loopCarousel === "true" && !viewport.dataset.loopReady) {
    viewport.dataset.loopReady = "true";
    window.requestAnimationFrame(() => scrollCarouselCardIntoCenter(viewport, loopingCarouselStartIndex(viewport), "auto"));
  }
  const requestedInterval = Number.parseInt(viewport.dataset.carouselInterval || "", 10);
  const interval = Number.isFinite(requestedInterval) ? Math.max(3200, requestedInterval) : PRODUCT_CAROUSEL_MS;
  const timer = window.setInterval(() => {
    if (!document.hidden) productCarouselStep(viewport);
  }, interval);
  productCarouselTimers.set(target, timer);
}

function bindProductCarousel(target) {
  if (target.dataset.carouselBound) return;
  target.dataset.carouselBound = "true";
  target.addEventListener("mouseenter", () => stopProductCarousel(target));
  target.addEventListener("mouseleave", () => startProductCarousel(target));
  target.addEventListener("pointerdown", () => stopProductCarousel(target));
  target.addEventListener("pointerup", () => startProductCarousel(target));
  target.addEventListener("focusin", () => stopProductCarousel(target));
  target.addEventListener("focusout", () => startProductCarousel(target));
  const viewport = target.querySelector(".product-carousel__viewport");
  if (viewport?.dataset.loopCarousel === "true") {
    viewport.addEventListener("scroll", () => scheduleLoopingCarouselNormalize(viewport), { passive: true });
    viewport.addEventListener("scrollend", () => normalizeLoopingProductCarousel(viewport), { passive: true });
    viewport.addEventListener("pointerup", () => scheduleLoopingCarouselNormalize(viewport), { passive: true });
    viewport.addEventListener("touchend", () => scheduleLoopingCarouselNormalize(viewport), { passive: true });
    window.requestAnimationFrame(() => scrollCarouselCardIntoCenter(viewport, loopingCarouselStartIndex(viewport), "auto"));
  }
}

function renderProductGrids() {
  document.querySelectorAll("[data-products]").forEach((target) => {
    stopProductCarousel(target);
    const mode = target.dataset.products;
    const products = filteredProducts(mode).slice(0, mode === "featured" ? 6 : mode === "best" ? 4 : 10);
    target.className = "product-grid";
    if (mode === "featured") {
      const mobileCarousel = window.matchMedia("(max-width: 760px)").matches && products.length > 2;
      target.classList.add("product-featured-layout");
      if (mobileCarousel) {
        const loopProducts = [...products, ...products, ...products];
        target.classList.add("product-carousel", "product-carousel--featured");
        target.innerHTML = `
          <div class="product-carousel__viewport" tabindex="0" aria-label="${t("featured")}" data-loop-carousel="true" data-loop-start="${products.length}" data-loop-count="${products.length}">
            <div class="product-carousel__track">
              ${loopProducts.map((item, index) => productCard(item, { variant: index < products.length || index >= products.length * 2 ? "featured is-carousel-clone" : "featured" })).join("")}
            </div>
          </div>
        `;
        bindProductCarousel(target);
        window.requestAnimationFrame(() => startProductCarousel(target));
      } else {
        target.innerHTML = products.slice(0, 2).map((item, index) => productCard(item, { variant: index === 0 ? "hero" : "featured" })).join("");
        animateProductCards(target);
      }
      return;
    }
    if (mode === "new") {
      const mobileLoop = window.matchMedia("(max-width: 760px)").matches && products.length > 1;
      const visibleProducts = mobileLoop ? products.slice(0, 6) : products;
      const carouselProducts = mobileLoop ? [...visibleProducts, ...visibleProducts, ...visibleProducts] : visibleProducts;
      const loopAttributes = mobileLoop
        ? `data-loop-carousel="true" data-loop-start="${visibleProducts.length}" data-loop-count="${visibleProducts.length}"`
        : "";
      target.classList.add("product-carousel", "product-carousel--new");
      target.innerHTML = `
        <div class="product-carousel__viewport" tabindex="0" aria-label="${t("new")}" data-carousel-interval="5600" ${loopAttributes}>
          <div class="product-carousel__track">
            ${carouselProducts.map((item, index) => productCard(item, { variant: mobileLoop && (index < visibleProducts.length || index >= visibleProducts.length * 2) ? "carousel is-carousel-clone" : "carousel" })).join("")}
          </div>
        </div>
      `;
      bindProductCarousel(target);
      window.requestAnimationFrame(() => startProductCarousel(target));
      return;
    }
    target.classList.add("product-grid--best");
    target.innerHTML = products.map((item) => productCard(item, { variant: "compact best", hideQuote: true })).join("");
    animateProductCards(target);
  });
}

function activeFilters() {
  const filters = {};
  document.querySelectorAll("[data-filter-group]:checked").forEach((input) => {
    if (!filters[input.dataset.filterGroup]) filters[input.dataset.filterGroup] = [];
    const value = input.dataset.filterGroup === "category" ? normalizeCategory(input.value) : input.value;
    if (value) filters[input.dataset.filterGroup].push(value);
  });
  return filters;
}

function includesAny(haystack, values) {
  const text = haystack.toLowerCase();
  return values.some((value) => text.includes(value.toLowerCase()));
}

function productMatchesFilters(productInput, filters) {
  const product = enrichProduct(productInput);
  if (filters.category?.length && !filters.category.includes(product.category)) return false;
  if (filters.quick?.length) {
    const quickOk = filters.quick.some((value) => {
      if (value === "sample") return product.number <= 7;
      if (value === "custom") return ["Accessories", "Hardware", "Zipper"].includes(product.category);
      if (value === "repeat") return product.tags.includes("Best Seller");
      return true;
    });
    if (!quickOk) return false;
  }
  if (filters.material?.length) {
    const haystack = `${product.material} ${product.category}`.toLowerCase();
    const materialOk = filters.material.some((value) => {
      if (value === "alloy") return haystack.includes("alloy") || haystack.includes("zinc") || haystack.includes("合金");
      if (value === "brass") return haystack.includes("brass") || haystack.includes("铜");
      if (value === "leather") return haystack.includes("leather") || haystack.includes("皮");
      if (value === "steel") return haystack.includes("steel") || haystack.includes("钢");
      return false;
    });
    if (!materialOk) return false;
  }
  if (filters.color?.length && !includesAny(product.finish, filters.color)) return false;
  if (filters.finish?.length) {
    const finishOk = filters.finish.some((value) => {
      if (value === "custom") return product.finish.toLowerCase().includes("custom") || product.finish.includes("定制");
      return product.finish.toLowerCase().includes(value);
    });
    if (!finishOk) return false;
  }
  if (filters.scale?.length) {
    const scaleOk = filters.scale.some((value) => {
      if (value === "small") return ["Accessories", "Hardware", "Tools"].includes(product.category);
      if (value === "medium") return ["Bag", "Leather", "Zipper"].includes(product.category);
      if (value === "custom") return true;
      return false;
    });
    if (!scaleOk) return false;
  }
  if (filters.application?.length && !includesAny(product.application, filters.application)) return false;
  if (filters.moq?.length) {
    const moqOk = filters.moq.some((value) => {
      if (value === "under500") return product.moqNumber < 500;
      if (value === "500to1000") return product.moqNumber >= 500 && product.moqNumber <= 1000;
      if (value === "custom") return product.category === "Bag" || product.category === "Leather";
      return false;
    });
    if (!moqOk) return false;
  }
  return true;
}

function sortedProducts(products) {
  const sort = document.querySelector("[data-sort]")?.value || "newest";
  const result = [...products];
  if (sort === "best") result.sort((a, b) => Number(b.tags.includes("Best Seller")) - Number(a.tags.includes("Best Seller")));
  if (sort === "moqLow") result.sort((a, b) => a.moqNumber - b.moqNumber);
  if (sort === "category") result.sort((a, b) => a.category.localeCompare(b.category));
  return result;
}

function productMatchesSeoFilters(productInput, filters) {
  const product = enrichProduct(productInput);
  const category = product.category;
  const finish = product.finish.toLowerCase();
  const material = product.material.toLowerCase();
  const application = product.application.toLowerCase();

  if (filters.category?.length && !filters.category.includes(category)) return false;

  if (filters.quick?.length) {
    const quickOk = filters.quick.some((value) => {
      if (value === "sample") return product.number <= 7;
      if (value === "custom") return ["Accessories", "Hardware", "Zipper"].includes(category);
      if (value === "repeat") return product.tags.includes("Best Seller");
      return true;
    });
    if (!quickOk) return false;
  }

  if (filters.type?.length) {
    const typeOk = filters.type.some((value) => {
      if (value === "buckles") return category === "Hardware" && product.number % 4 !== 3;
      if (value === "locks") return category === "Hardware" && product.number % 4 === 0;
      if (value === "rings") return category === "Hardware" && product.number % 4 === 1;
      if (value === "chains") return ["Hardware", "Accessories"].includes(category) && product.number % 3 === 0;
      if (value === "bag-body") return category === "Bag";
      if (value === "leather-sheets") return category === "Leather";
      if (value === "zipper-pulls") return category === "Zipper";
      return true;
    });
    if (!typeOk) return false;
  }

  if (filters.material?.length) {
    const materialOk = filters.material.some((value) => {
      if (value === "alloy") return material.includes("alloy") || material.includes("zinc") || ["Hardware", "Accessories"].includes(category);
      if (value === "brass") return material.includes("brass") || category === "Hardware";
      if (value === "leather") return material.includes("leather") || category === "Leather" || category === "Bag";
      if (value === "steel") return material.includes("steel") || category === "Tools";
      if (value === "nylon") return category === "Zipper";
      return false;
    });
    if (!materialOk) return false;
  }

  if (filters.color?.length && !includesAny(finish, filters.color)) return false;

  if (filters.finish?.length) {
    const finishOk = filters.finish.some((value) => {
      if (value === "custom") return finish.includes("custom") || ["Bag", "Hardware", "Accessories"].includes(category);
      if (value === "antique") return category === "Hardware" && product.number % 4 === 1;
      return finish.includes(value);
    });
    if (!finishOk) return false;
  }

  if (filters.scale?.length) {
    const scaleOk = filters.scale.some((value) => {
      if (value === "small") return ["Accessories", "Hardware", "Tools"].includes(category);
      if (value === "medium") return ["Bag", "Leather", "Zipper"].includes(category);
      if (value === "wide-strap") return ["Bag", "Hardware", "Leather"].includes(category);
      if (value === "custom") return true;
      return false;
    });
    if (!scaleOk) return false;
  }

  if (filters.application?.length) {
    const applicationOk = filters.application.some((value) => {
      if (value === "repair") return category === "Tools" || application.includes("repair") || application.includes("craft");
      return application.includes(value);
    });
    if (!applicationOk) return false;
  }

  if (filters.moq?.length) {
    const moqOk = filters.moq.some((value) => {
      if (value === "under500") return product.moqNumber < 500;
      if (value === "500to1000") return product.moqNumber >= 500 && product.moqNumber <= 1000;
      if (value === "custom") return category === "Bag" || category === "Leather";
      return false;
    });
    if (!moqOk) return false;
  }

  if (filters.customization?.length) {
    const customOk = filters.customization.some((value) => {
      if (value === "oem") return ["Bag", "Hardware", "Accessories", "Zipper"].includes(category);
      if (value === "packaging") return ["Bag", "Leather", "Hardware"].includes(category);
      return true;
    });
    if (!customOk) return false;
  }

  return true;
}

function renderCatalog() {
  const grid = document.querySelector("[data-catalog-grid]");
  if (!grid) return;
  grid.classList.add("aurora-products-grid", "is-updating");
  renderFilterPanel();
  ensureMobileCatalogFilterControls();
  updateFilterOptionStates(document.querySelector("[data-filter-panel]") || document);
  const query = searchQueryFromUrl();
  document.querySelectorAll('.site-search input[type="search"], .site-search input[name="q"], .site-search input[name="s"]').forEach((input) => {
    input.value = query;
  });
  let products = AURORA_PRODUCTS;
  if (query) products = products.filter((item) => productMatchesSearch(item, query));
  const filters = activeFilters();
  products = sortedProducts(products.filter((item) => productMatchesSeoFilters(item, filters)));
  const count = document.querySelector("[data-catalog-count]");
  if (count) count.textContent = `${products.length} ${currentLang() === "zh" ? "个产品" : "products"}`;
  grid.innerHTML = products.length ? products.map(productCard).join("") : `<div class="empty-results">${t("noResults")}</div>`;
  animateProductCards(grid);
}

function renderDetail() {
  const detail = document.querySelector("[data-product-detail]");
  if (!detail) return;
  const params = new URLSearchParams(window.location.search);
  const product = productBySku(params.get("sku"));
  document.title = `${product.name} | AOLOLA`;
  const category = CATEGORY_CONFIG.find((item) => item.name === product.category);
  const thumbs = [product.image, imagePath(product.category, Math.min(2, category.count)), imagePath(product.category, Math.min(3, category.count)), imagePath(product.category, Math.min(4, category.count))];
  detail.innerHTML = `
    <div class="product-detail">
      <div>
        <div class="gallery-main"><img src="${encodeURI(product.image)}" alt="${product.name}" /></div>
        <div class="gallery-thumbs">${thumbs.map((image) => `<button class="gallery-thumb" type="button" data-thumb="${encodeURI(image)}"><img src="${encodeURI(image)}" alt="${product.name}" /></button>`).join("")}</div>
      </div>
      <aside class="detail-panel">
        <p class="kicker">${categoryLabel(product.category)}</p>
        <h1>${product.name}</h1>
        <p class="sku">SKU: ${product.sku}</p>
        <p class="detail-lead">${product.description}</p>
        <dl class="detail-specs">
          <dt>${t("material")}</dt><dd>${product.material}</dd>
          <dt>${t("finish")}</dt><dd>${product.finish}</dd>
          <dt>${t("size")}</dt><dd>${product.size}</dd>
          <dt>${t("use")}</dt><dd>${product.application}</dd>
          <dt>${t("moq")}</dt><dd>${product.moq}</dd>
        </dl>
        <div class="qty-row"><label for="qty">${t("quantity")}</label><input id="qty" type="number" min="1" value="${product.moqNumber}" /></div>
        <div class="hero-actions">
          <button class="btn btn-primary" type="button" data-add-quote="${product.sku}">${t("quote")}</button>
          <a class="btn btn-secondary" href="contact.html?sku=${encodeURIComponent(product.sku)}">${t("requestQuote")}</a>
          <a class="detail-wishlist" href="account.html">${t("wishlist")} <span aria-hidden="true">&rsaquo;</span></a>
        </div>
      </aside>
    </div>
    <div class="tab-box">
      <div class="tabs" data-tabs>
        <button class="is-active" data-tab="description">${t("productDescription")}</button>
        <button data-tab="specifications">${t("specifications")}</button>
        <button data-tab="customization">${t("customization")}</button>
        <button data-tab="shipping">${t("shipping")}</button>
      </div>
      <div class="tab-panel is-active" data-panel="description"><p>${product.description}</p></div>
      <div class="tab-panel" data-panel="specifications">
        <table class="spec-table"><tbody>
          <tr><th>SKU</th><td>${product.sku}</td></tr>
          <tr><th>${t("category")}</th><td>${categoryLabel(product.category)}</td></tr>
          <tr><th>${t("material")}</th><td>${product.material}</td></tr>
          <tr><th>${t("finish")}</th><td>${product.finish}</td></tr>
          <tr><th>${t("moq")}</th><td>${product.moq}</td></tr>
          <tr><th>${t("application")}</th><td>${product.application}</td></tr>
        </tbody></table>
      </div>
      <div class="tab-panel" data-panel="customization"><ul class="check-list"><li>Logo and finish customization</li><li>Sample confirmation before bulk order</li><li>Packaging and export carton support</li></ul></div>
      <div class="tab-panel" data-panel="shipping"><p>Samples can be shipped by express. Bulk orders can be packed by carton and shipped by air, sea or forwarder warehouse.</p></div>
    </div>
  `;
}

function addToQuote(sku) {
  const qtyInput = document.querySelector("#qty");
  const items = quoteItems();
  const existing = items.find((item) => item.sku === sku);
  const quantity = qtyInput ? Math.max(1, Number(qtyInput.value) || 1) : 1;
  if (existing) existing.quantity += quantity;
  else items.push({ sku, quantity });
  saveQuoteItems(items);
  openQuoteDrawer();
}

function updateQuoteCount() {
  const count = quoteItems().reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll(".cart-dot").forEach((item) => { item.textContent = String(count); });
}

function openQuickView(sku) {
  const product = productBySku(sku);
  const modal = ensureModal();
  modal.querySelector(".quick-view__content").innerHTML = `
    <button class="quick-view__close" type="button" data-close-modal>${t("close")}</button>
    <div class="quick-view__grid">
      <img src="${encodeURI(product.image)}" alt="${product.name}" />
      <div>
        <p class="kicker">${categoryLabel(product.category)}</p>
        <h2>${product.name}</h2>
        <p class="sku">SKU: ${product.sku}</p>
        <p>${product.description}</p>
        <div class="detail-specs">
          <dt>${t("material")}</dt><dd>${product.material}</dd>
          <dt>${t("finish")}</dt><dd>${product.finish}</dd>
          <dt>${t("moq")}</dt><dd>${product.moq}</dd>
        </div>
        <div class="hero-actions">
          <a class="btn" href="product-detail.html?sku=${encodeURIComponent(product.sku)}">${t("details")}</a>
          <button class="btn btn-primary" type="button" data-add-quote="${product.sku}">${t("quote")}</button>
        </div>
      </div>
    </div>
  `;
  modal.classList.add("is-open");
}

function ensureModal() {
  let modal = document.querySelector(".quick-view");
  if (!modal) {
    modal = document.createElement("div");
    modal.className = "quick-view";
    modal.innerHTML = '<div class="quick-view__shade" data-close-modal></div><div class="quick-view__content"></div>';
    document.body.appendChild(modal);
  }
  return modal;
}

function ensureQuoteDrawer() {
  let drawer = document.querySelector(".quote-drawer");
  if (!drawer) {
    drawer = document.createElement("aside");
    drawer.className = "quote-drawer";
    document.body.appendChild(drawer);
  }
  return drawer;
}

function openQuoteDrawer() {
  const drawer = ensureQuoteDrawer();
  const items = quoteItems();
  drawer.innerHTML = `
    <button class="quote-drawer__close" type="button" data-close-quote>${t("close")}</button>
    <h2>${t("quoteList")}</h2>
    ${items.length ? items.map((item) => {
      const product = productBySku(item.sku);
      return `<div class="quote-line"><img src="${encodeURI(product.image)}" alt="${product.name}" /><div><strong>${product.name}</strong><span>${product.sku}</span><span>${t("quantity")}: ${item.quantity}</span></div></div>`;
    }).join("") : `<p>${t("empty")}</p>`}
    <a class="btn btn-primary" href="contact.html">${t("checkout")}</a>
  `;
  drawer.classList.add("is-open");
}

function languageSwitcherHtml(active, iconOnly = false) {
  const activeLabel = LANGUAGES.find(([code]) => code === active)?.[1] || "EN";
  return `
    <button class="language-select__button" type="button" data-lang-toggle aria-label="Select language${iconOnly ? ` (${activeLabel})` : ""}">${iconOnly ? '<span class="language-select__glyph" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3c2.4 2.5 3.6 5.5 3.6 9s-1.2 6.5-3.6 9c-2.4-2.5-3.6-5.5-3.6-9S9.6 5.5 12 3Z"></path></svg></span>' : activeLabel}</button>
    <div class="language-select__menu">
      ${LANGUAGES.map(([code, label]) => `<button type="button" data-lang="${code}">${label}</button>`).join("")}
    </div>
  `;
}

function insertLanguageSwitcher() {
  const active = currentLang();
  const desktopTarget = document.querySelector(".header-actions") || document.querySelector(".top-strip__right");
  if (desktopTarget && !document.querySelector(".language-select--desktop")) {
    const wrapper = document.createElement("div");
    wrapper.className = "language-select language-select--desktop";
    wrapper.innerHTML = languageSwitcherHtml(active);
    desktopTarget.prepend(wrapper);
  }

  const mobileTarget = document.querySelector(".main-header .container");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  if (mobileTarget && mobileMenu && !document.querySelector(".language-select--mobile")) {
    const wrapper = document.createElement("div");
    wrapper.className = "language-select language-select--mobile";
    wrapper.innerHTML = languageSwitcherHtml(active);
    mobileMenu.insertAdjacentElement("afterend", wrapper);
  }
}

function syncLanguageSwitcherLabel() {
  document.querySelectorAll(".language-select__button").forEach((button) => {
    const activeLabel = LANGUAGES.find(([code]) => code === currentLang())?.[1] || "EN";
    if (button.closest(".language-select--menu")) {
      button.innerHTML = '<span class="language-select__glyph" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3c2.4 2.5 3.6 5.5 3.6 9s-1.2 6.5-3.6 9c-2.4-2.5-3.6-5.5-3.6-9S9.6 5.5 12 3Z"></path></svg></span>';
      button.setAttribute("aria-label", `Select language (${activeLabel})`);
      return;
    }
    button.textContent = activeLabel;
  });
}

function applyLanguageText() {
  const pack = langPack();
  document.documentElement.lang = currentLang();
  syncLanguageSwitcherLabel();
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (pack[key]) node.textContent = pack[key];
  });
  document.querySelectorAll("[data-filter-label]").forEach((node) => {
    node.textContent = translatedFilterLabel(node.dataset.filterLabel);
  });
  document.querySelectorAll("[data-cat]").forEach((node) => {
    node.textContent = categoryLabel(node.dataset.cat);
  });
  document.querySelectorAll('.site-search input[type="search"], .site-search input[name="q"], .site-search input[name="s"]').forEach((input) => {
    input.placeholder = t("search");
    if (document.querySelector("[data-catalog-grid]")) input.value = searchQueryFromUrl();
  });
  document.querySelectorAll('.site-search button[type="submit"], .site-search button:not([type]):not([data-image-search-trigger])').forEach((button) => { button.textContent = t("searchButton"); });
  document.querySelector(".top-strip .container > div:first-child") && (document.querySelector(".top-strip .container > div:first-child").textContent = t("topLine"));
  const topRight = document.querySelector(".top-strip__right");
  if (topRight) {
    const spans = Array.from(topRight.children).filter((node) => node.tagName === "SPAN");
    const contactStart = spans.length > 2 ? 1 : 0;
    if (spans.length > 2 && spans[0] && !spans[0].classList.contains("cart-dot")) {
      spans[0].textContent = t("globalSupport");
    }
    if (spans[contactStart]) {
      spans[contactStart].textContent = `${t("phoneLabel")}: (86)13500014739`;
    }
    if (spans[contactStart + 1]) {
      spans[contactStart + 1].textContent = `${t("emailLabel")}: aurorabagsupply@gmail.com`;
    }
    topRight.querySelectorAll("a").forEach((link) => {
      const href = link.getAttribute("href") || "";
      if (href === "contact.html") link.textContent = t("contactTop");
      if (href === "account.html") link.textContent = t("account");
      if (href === "cart.html") link.innerHTML = `${t("cart")} <span class="cart-dot">${quoteItems().reduce((sum, item) => sum + item.quantity, 0)}</span>`;
    });
  }
  updateCommonLinks();
  applyStaticPageText();
  renderHeroCarousel();
}

function setText(selector, value) {
  const node = document.querySelector(selector);
  if (node && value) node.textContent = value;
}

function setHtml(selector, value) {
  const node = document.querySelector(selector);
  if (node && value) node.innerHTML = value;
}

function pageText() {
  return PAGE_TEXT[currentLang()] || PAGE_TEXT.en;
}

function translateAccountPage() {
  if (!document.querySelector(".account-grid")) return;
  const copy = pageText();
  document.title = `${copy.accountTitle} | AOLOLA`;
  setText(".page-title .kicker", copy.accountKicker);
  setText(".page-title h1", copy.accountTitle);
  setText(".page-title p:not(.kicker)", copy.accountIntro);
  const panels = document.querySelectorAll(".account-grid .panel");
  if (panels[0]) {
    setTextFromNode(panels[0], "h2", copy.signInTitle);
    const labels = panels[0].querySelectorAll("label");
    if (labels[0]) labels[0].textContent = copy.emailAddress;
    if (labels[1]) labels[1].textContent = copy.loginPassword;
    const button = panels[0].querySelector("button");
    if (button) button.textContent = copy.signInTitle;
  }
  if (panels[1]) {
    setTextFromNode(panels[1], "h2", copy.createAccountTitle);
    const labels = panels[1].querySelectorAll("label");
    const values = [copy.fullName, copy.emailAddress, copy.loginPassword, copy.companyName, copy.companyFullAddress, copy.businessCertificate];
    labels.forEach((label, index) => {
      if (values[index]) label.textContent = values[index];
    });
    const button = panels[1].querySelector("button");
    if (button) button.textContent = copy.createAccountButton;
  }
  setText(".section-alt .section-head h2", copy.orderHistoryTitle);
  setText(".section-alt .section-head p", copy.orderHistoryIntro);
  const heads = document.querySelectorAll(".order-table th");
  [copy.orderDate, copy.itemName, copy.specification, copy.qty, copy.totalPaid, copy.status, copy.detail].forEach((value, index) => {
    if (heads[index]) heads[index].textContent = value;
  });
  const cells = document.querySelectorAll(".order-table tbody td");
  if (cells[5]) cells[5].textContent = copy.processing;
  const detailLink = document.querySelector(".order-table tbody a");
  if (detailLink) detailLink.textContent = copy.view;
}

function translateCheckoutPage() {
  if (!document.querySelector(".checkout-grid")) return;
  const copy = pageText();
  document.title = `${copy.checkoutTitle} | AOLOLA`;
  setText(".page-title .kicker", copy.checkoutKicker);
  setText(".page-title h1", copy.checkoutTitle);
  setText(".page-title p:not(.kicker)", copy.checkoutIntro);
  const form = document.querySelector(".checkout-grid form");
  if (form) {
    setTextFromNode(form, "h2", copy.checkoutOptions);
    const optionLabels = form.querySelectorAll(".option-row label");
    if (optionLabels[0]) optionLabels[0].lastChild.textContent = ` ${copy.guestCheckout}`;
    if (optionLabels[1]) optionLabels[1].lastChild.textContent = ` ${copy.accountCheckout}`;
    const labels = Array.from(form.querySelectorAll(".field:not(.option-row) label"));
    const values = [copy.fullName, copy.emailAddress, copy.shippingAddress];
    labels.forEach((label, index) => {
      if (values[index]) label.textContent = values[index];
    });
    const button = form.querySelector("button");
    if (button) button.textContent = copy.placeOrder;
  }
  const aside = document.querySelector(".checkout-grid aside");
  if (aside) {
    setTextFromNode(aside, "h2", copy.orderSummary);
    setTextFromNode(aside, "p", copy.orderSummaryText);
  }
}

function heroSlideCopy(slide) {
  const lang = currentLang();
  const copy = slide.copy[lang] || slide.copy.en;
  return {
    eyebrow: copy[0],
    title: copy[1],
    subtitle: copy[2],
    text: copy[3],
  };
}

function renderHeroCarousel() {
  const carousel = document.querySelector("[data-hero-carousel]");
  if (!carousel) return;
  const track = carousel.querySelector("[data-hero-track]");
  const dots = carousel.querySelector("[data-hero-dots]");
  const base = carousel.dataset.heroBase || "assets/hero";
  const productsUrl = carousel.dataset.productsUrl || "products.html";
  const contactUrl = carousel.dataset.contactUrl || "contact.html";
  if (!track || !dots) return;
  activeHeroIndex = ((activeHeroIndex % HERO_SLIDES.length) + HERO_SLIDES.length) % HERO_SLIDES.length;
  track.innerHTML = HERO_SLIDES.map((slide, index) => {
    const copy = heroSlideCopy(slide);
    const category = categoryLabel(slide.category);
    const actionLabel = heroCategoryAction(slide.category);
    const active = index === activeHeroIndex ? " is-active" : "";
    return `
      <article class="hero-cover__slide${active}" data-hero-slide="${index}" aria-hidden="${index === activeHeroIndex ? "false" : "true"}">
        <img src="${base}/${slide.image}" alt="${category}" />
        <div class="hero-cover__copy">
          <p class="kicker">${copy.eyebrow}</p>
          <h1>${copy.title}</h1>
          <p class="hero-cover__subtitle">${copy.subtitle}</p>
          <p>${copy.text}</p>
          <div class="hero-cover__actions">
            <a class="btn btn-primary" href="${productsUrl}${productsUrl.includes("?") ? "&" : "?"}category=${encodeURIComponent(slide.category)}">${actionLabel}</a>
            <a class="btn btn-brass" href="${contactUrl}">${t("requestQuote")}</a>
          </div>
        </div>
      </article>
    `;
  }).join("");
  dots.innerHTML = HERO_SLIDES.map((slide, index) => {
    const category = categoryLabel(slide.category);
    const active = index === activeHeroIndex ? " is-active" : "";
    return `<button class="hero-cover__dot${active}" type="button" data-hero-dot="${index}" aria-label="${category}"></button>`;
  }).join("");
}

function setHeroSlide(index) {
  activeHeroIndex = index;
  renderHeroCarousel();
}

function moveHeroSlide(step) {
  setHeroSlide(activeHeroIndex + step);
}

function startHeroAutoplay() {
  const carousel = document.querySelector("[data-hero-carousel]");
  if (!carousel || HERO_SLIDES.length < 2) return;
  window.clearInterval(heroAutoplayTimer);
  heroAutoplayTimer = window.setInterval(() => {
    moveHeroSlide(1);
  }, HERO_AUTOPLAY_MS);
}

function resetHeroAutoplay() {
  window.clearInterval(heroAutoplayTimer);
  startHeroAutoplay();
}

function applyStaticPageText() {
  const isCatalogPage = Boolean(document.querySelector("[data-catalog-grid]"));
  if (isCatalogPage) {
    forceCatalogTitleLanguage();
  }
  setText(".brand__tagline", t("brandTagline"));
  if (!document.querySelector("[data-hero-carousel]")) {
    setText(".hero-copy .kicker", t("heroKicker"));
    setText(".hero-copy h1", t("heroTitle"));
    setText(".hero-copy > p:not(.kicker)", t("heroText"));
  }
  const metricKeys = [
    ["metricDesignTitle", "metricDesignText"],
    ["metricCareTitle", "metricCareText"],
    ["metricRealTitle", "metricRealText"],
    ["metricLastTitle", "metricLastText"],
  ];
  document.querySelectorAll(".hero-metrics span").forEach((node, index) => {
    const keys = metricKeys[index];
    if (keys) node.innerHTML = `<strong>${t(keys[0])}</strong> ${t(keys[1])}`;
  });
  document.querySelectorAll(".hero-actions a").forEach((link) => {
    const href = link.getAttribute("href") || "";
    if (href === "products.html" && link.classList.contains("btn-primary")) link.textContent = t("shopProducts");
    else if (href === "contact.html") link.textContent = t("requestQuote");
    else if (href === "products.html") link.textContent = t("viewAll");
  });
  setText(".quote-rail__label", t("buyerLabel"));
  setText(".quote-rail strong", t("buyerTitle"));
  setText(".quote-rail p", t("buyerText"));
  const trust = [
    ["factorySupply", "factorySupplyText"],
    ["customizableHardware", "customizableHardwareText"],
    ["worldwideShipping", "worldwideShippingText"],
  ];
  document.querySelectorAll(".trust-item").forEach((node, index) => {
    const keys = trust[index];
    if (!keys) return;
    setTextFromNode(node, "strong", t(keys[0]));
    setTextFromNode(node, "span", t(keys[1]));
  });
  if (!isCatalogPage) {
    setText(".section .section-head h2", t("categoryHead"));
    setText(".section .section-head p", t("categoryIntro"));
  }
  const procurement = [
    ["procurement01Title", "procurement01Text"],
    ["procurement02Title", "procurement02Text"],
    ["procurement03Title", "procurement03Text"],
    ["procurement04Title", "procurement04Text"],
  ];
  document.querySelectorAll(".procurement-grid > div").forEach((node, index) => {
    const keys = procurement[index];
    if (!keys) return;
    setTextFromNode(node, "strong", t(keys[0]));
    setTextFromNode(node, "p", t(keys[1]));
  });
  applySectionHeadTranslations();
  setText(".service-card .kicker", t("sixSupply"));
  setText(".service-card h2", t("sixSupplyTitle"));
  setText(".service-card p:not(.kicker)", t("sixSupplyText"));
  const points = ["sixPoint1", "sixPoint2", "sixPoint3", "sixPoint4"];
  document.querySelectorAll(".service-card .check-list li").forEach((node, index) => {
    if (points[index]) node.textContent = t(points[index]);
  });
  applyFooterHelpTranslations();
  setText(".newsletter h2", t("newsletterTitle"));
  setText(".newsletter p", t("newsletterText"));
  const newsletterInput = document.querySelector(".newsletter input");
  if (newsletterInput) newsletterInput.placeholder = t("emailPlaceholder");
  setText(".newsletter button", t("subscribe"));
  applyFooterTranslations();
  applyPaymentAndWhatsAppText();
  translateInfoPage();
  translateContactPage();
  translateAccountPage();
  translateCheckoutPage();
}

function forceCatalogTitleLanguage() {
  const title = document.querySelector('[data-page-title="catalog"], .page-title');
  if (!title || !document.querySelector("[data-catalog-grid]")) return;
  const kicker = title.querySelector(".kicker");
  const heading = title.querySelector("h1");
  const paragraphs = Array.from(title.querySelectorAll("p")).filter((node) => !node.classList.contains("kicker"));
  if (kicker) kicker.textContent = t("catalogKicker");
  if (heading) heading.textContent = t("catalogTitle");
  paragraphs.forEach((node) => {
    node.textContent = t("catalogText");
  });
}

function setTextFromNode(parent, selector, value) {
  const node = parent.querySelector(selector);
  if (node && value) node.textContent = value;
}

function applySectionHeadTranslations() {
  document.querySelectorAll(".section-head").forEach((head) => {
    const productMode = head.parentElement?.querySelector("[data-products]")?.dataset.products;
    if (head.querySelector("[data-products]")) return;
    if (productMode === "featured") {
      setTextFromNode(head, "h2", t("featured"));
      setTextFromNode(head, "p", t("featuredIntro"));
      const link = head.querySelector("a.btn");
      if (link) link.textContent = t("fullCatalog");
    }
    if (productMode === "new") {
      setTextFromNode(head, "h2", t("new"));
      setTextFromNode(head, "p", t("newIntro"));
    }
    if (productMode === "best") {
      setTextFromNode(head, "h2", t("best"));
      setTextFromNode(head, "p", t("bestIntro"));
    }
  });
}

function applyFooterHelpTranslations() {
  setText(".footer-help__eyebrow", t("footerHelpEyebrow"));
  setText(".footer-help__head h2", t("footerHelpTitle"));
  const helpCards = {
    standards: ["footerStandardsTitle", "footerStandardsText", "footerStandardsLink"],
    care: ["footerCareTitle", "footerCareText", "footerCareLink"],
    shipping: ["footerShippingTitle", "footerShippingText", "footerShippingLink"],
  };
  Object.entries(helpCards).forEach(([name, keys]) => {
    const card = document.querySelector(`[data-footer-help="${name}"]`);
    if (!card) return;
    setTextFromNode(card, "h3", t(keys[0]));
    setTextFromNode(card, "p", t(keys[1]));
    setTextFromNode(card, "a", t(keys[2]));
  });
}

function applyFooterTranslations() {
  const footerCols = document.querySelectorAll(".footer-grid > div");
  if (footerCols[0]) {
    setTextFromNode(footerCols[0], "h3", t("footerContact"));
    const contactItems = footerCols[0].querySelectorAll(".footer-contact__item");
    if (contactItems[0]) {
      setTextFromNode(contactItems[0], "strong", t("footerAddressTitle"));
      const addressLine = contactItems[0].querySelector("p > span");
      if (addressLine) addressLine.textContent = t("footerAddressText");
    }
    if (contactItems[1]) setTextFromNode(contactItems[1], "strong", t("footerPhoneTitle"));
    if (contactItems[2]) setTextFromNode(contactItems[2], "strong", t("footerEmailTitle"));
    if (contactItems[3]) {
      setTextFromNode(contactItems[3], "strong", t("footerHoursTitle"));
      const hourLines = contactItems[3].querySelectorAll("p > span");
      if (hourLines[0]) hourLines[0].textContent = t("footerHoursText");
      if (hourLines[1]) hourLines[1].textContent = t("footerHoursNote");
    }
  }
  if (footerCols[1]) {
    setTextFromNode(footerCols[1], "h3", t("footerProducts"));
  }
  if (footerCols[2]) {
    setTextFromNode(footerCols[2], "h3", t("footerSupport"));
    footerCols[2].querySelectorAll("a").forEach((link) => {
      const href = link.getAttribute("href") || "";
      if (href === "contact.html" || href.includes("/contact/")) {
        link.textContent = link.dataset.footerAction === "quote" ? t("requestQuote") : t("contact");
      }
      if (href === "account.html" || href.includes("/my-account/")) link.textContent = t("orderStatus");
      if (href.includes("shipping.html") || href.includes("/shipping/")) link.textContent = t("shippingLink");
      if (href.includes("returns.html") || href.includes("/returns/")) link.textContent = t("returnsLink");
      if (href.includes("faq.html") || href.includes("/faq/")) link.textContent = t("faq");
    });
  }
  if (footerCols[3]) {
    setTextFromNode(footerCols[3], "h3", t("footerCompany"));
    footerCols[3].querySelectorAll("a").forEach((link) => {
      const href = link.getAttribute("href") || "";
      if (href === "about.html" || href.includes("/about/")) link.textContent = t("about");
      if (href === "products.html" || href.includes("/shop/")) link.textContent = t("allProducts");
      if (href.includes("blog.html") || href.includes("/blog/")) link.textContent = t("blog");
      if (href.includes("privacy-policy.html") || href.includes("/privacy-policy/")) link.textContent = t("privacy");
      if (href.includes("terms-of-service.html") || href.includes("/terms-of-service/")) link.textContent = t("terms");
    });
  }
  if (footerCols[4]) {
    setTextFromNode(footerCols[4], "strong", t("footerCalloutTitle"));
    setTextFromNode(footerCols[4], "span", t("footerCalloutText"));
  }
  setText(".copyright span:first-child", t("footerCopyright"));
  const footerMeta = document.querySelector(".footer-meta");
  if (footerMeta) {
    const links = footerMeta.querySelectorAll("a");
    if (links.length >= 2) {
      links[0].textContent = t("terms");
      links[1].textContent = t("privacy");
    } else {
      footerMeta.innerHTML = `<a href="terms-of-service.html">${t("terms")}</a><span aria-hidden="true">—</span><a href="privacy-policy.html">${t("privacy")}</a>`;
    }
  }
}

function applyPaymentAndWhatsAppText() {
  const isZh = currentLang() === "zh";
  setText("[data-payment-title]", isZh ? "付款方式" : "Payment Methods");
  setText("[data-payment-note]", isZh ? "可用付款方式将根据最终报价和订单确认。" : "Available payment options depend on the final quotation and order confirmation.");
  document.querySelectorAll(".aurora-whatsapp-button").forEach((link) => {
    link.href = WHATSAPP_URL;
    link.target = "_blank";
    link.rel = "noopener";
    link.setAttribute("aria-label", isZh ? "在线咨询" : "Online consult via WhatsApp");
    link.title = isZh ? "在线咨询" : "Online consult";
    const label = link.querySelector("[data-whatsapp-label]");
    const tip = link.querySelector("[data-whatsapp-tip]");
    if (label) label.textContent = isZh ? "在线咨询" : "Online Consult";
    if (tip) tip.textContent = isZh ? "快速联系" : "Need help?";
  });
}

function setLabeledParagraph(paragraph, label, value) {
  if (!paragraph) return;
  paragraph.innerHTML = `<strong>${label}:</strong> ${value}`;
}

function translateContactPage() {
  const contactGrid = document.querySelector(".contact-grid");
  if (!contactGrid) return;
  const title = document.querySelector(".page-title");
  if (title) {
    setTextFromNode(title, ".kicker", t("contactKicker"));
    setTextFromNode(title, "h1", t("contactTitle"));
    const intro = Array.from(title.querySelectorAll("p")).find((node) => !node.classList.contains("kicker"));
    if (intro) intro.textContent = t("contactIntro");
  }

  const labels = Array.from(contactGrid.querySelectorAll("form .field label"));
  const staticKeys = ["contactName", "contactEmail", "contactCompany", "contactCountry", "contactChannel", "contactBuyerType", "contactProductCategory", "contactSkuProduct", "contactQuantity", "contactFinishColor", "contactCustomRequirement", "contactProjectNotes"];
  const wpKeys = ["contactName", "contactEmail", "contactCompany", "contactCountry", "contactChannel", "contactProductCategory", "contactProductName", "contactSku", "contactQuantity", "contactCustomRequirement", "contactMessage"];
  const labelKeys = labels.length >= 12 ? staticKeys : wpKeys;
  labels.forEach((label, index) => {
    if (labelKeys[index]) label.textContent = t(labelKeys[index]);
  });

  const fields = contactGrid.querySelectorAll("form .field");
  const quantityInput = fields[8]?.querySelector("input");
  if (quantityInput) quantityInput.placeholder = t("contactQuantityPlaceholder");
  const finishInput = fields[9]?.querySelector("input");
  if (finishInput && labels.length >= 12) finishInput.placeholder = t("contactFinishPlaceholder");
  const textareas = contactGrid.querySelectorAll("form textarea");
  if (textareas[0]) textareas[0].placeholder = t("contactCustomPlaceholder");
  if (textareas[1]) textareas[1].placeholder = t("contactNotesPlaceholder");
  const submit = contactGrid.querySelector("form .btn-primary");
  if (submit) submit.textContent = t("requestQuote");

  const buyerSelect = fields[5]?.querySelector("select");
  if (buyerSelect && labels.length >= 12) {
    ["buyerFactory", "buyerBrand", "buyerWholesaler", "buyerOnline", "buyerDesigner"].forEach((key, index) => {
      if (buyerSelect.options[index]) buyerSelect.options[index].textContent = t(key);
    });
  }
  const categorySelect = contactGrid.querySelector('select option[value], select');
  contactGrid.querySelectorAll("select").forEach((select) => {
    Array.from(select.options).forEach((option) => {
      if (CATEGORY_CONFIG.some((item) => item.name === option.textContent || item.name === option.value)) {
        option.textContent = categoryLabel(option.value || option.textContent);
      }
    });
  });

  const aside = contactGrid.querySelector(".contact-aside, aside.panel");
  if (!aside) return;
  setTextFromNode(aside, "h2", t("contactAsideTitle"));
  const paragraphs = aside.querySelectorAll("p");
  setLabeledParagraph(paragraphs[0], t("contactAddressLabel"), t("contactAddressValue"));
  setLabeledParagraph(paragraphs[1], t("contactTelLabel"), "(86)13500014739");
  setLabeledParagraph(paragraphs[2], t("contactEmail"), "aurorabagsupply@gmail.com");
  setLabeledParagraph(paragraphs[3], t("contactBusinessLabel"), t("contactBusinessValue"));
  setLabeledParagraph(paragraphs[4], t("contactResponseLabel"), t("contactResponseValue"));
  if (paragraphs[5] && !aside.querySelector(".mini-checklist")) {
    paragraphs[5].textContent = t("contactChecklistTitle").replace(/[:：]$/, "");
  }
  const checklist = aside.querySelector(".mini-checklist");
  if (checklist) {
    setTextFromNode(checklist, "strong", t("contactChecklistTitle"));
    ["contactChecklist1", "contactChecklist2", "contactChecklist3", "contactChecklist4", "contactChecklist5"].forEach((key, index) => {
      const item = checklist.querySelectorAll("span")[index];
      if (item) item.textContent = t(key);
    });
  }
}

const WHATSAPP_URL = "https://wa.me/8613500014739?text=Hello%20AOLOLA%2C%20I%E2%80%99m%20interested%20in%20your%20bag%20hardware%20%2F%20leather%20%2F%20zipper%20products.%20I%20would%20like%20to%20ask%20for%20more%20details.";

const MEGA_MENU_CONFIG = {
  Bag: {
    label: "Bags",
    cta: ["Developing a new bag project?", "Request a Quote"],
  },
  Hardware: {
    label: "Hardware",
    cta: ["Need custom bag hardware?", "Request a Quote"],
  },
  Leather: {
    label: "Leather",
    cta: ["Need leather materials for production?", "Contact Us"],
  },
  Zipper: {
    label: "Zippers",
    cta: ["Need custom zippers?", "Request a Quote"],
  },
  Accessories: {
    label: "Accessories",
    cta: ["Looking for matching bag accessories?", "Send Inquiry"],
  },
  Tools: {
    label: "Tools",
    cta: ["Need tools for leather or bag production?", "Contact Us"],
  },
};

const MEGA_MENU_CTA_COPY = {
  zh: {
    Bag: ["正在开发新的包袋项目？", "获取报价"],
    Hardware: ["需要定制箱包五金？", "获取报价"],
    Leather: ["需要生产用皮革材料？", "联系我们"],
    Zipper: ["需要定制拉链？", "获取报价"],
    Accessories: ["正在寻找匹配的箱包配件？", "发送询盘"],
    Tools: ["需要皮具或箱包生产工具？", "联系我们"],
  },
  ar: {
    Bag: ["هل تعمل على مشروع حقيبة جديد؟", "طلب عرض سعر"],
    Hardware: ["هل تحتاج الى اكسسوارات معدنية مخصصة للحقائب؟", "طلب عرض سعر"],
    Leather: ["هل تحتاج الى مواد جلدية للانتاج؟", "تواصل معنا"],
    Zipper: ["هل تحتاج الى سحابات مخصصة؟", "طلب عرض سعر"],
    Accessories: ["هل تبحث عن اكسسوارات حقائب متطابقة؟", "ارسال استفسار"],
    Tools: ["هل تحتاج الى ادوات لانتاج الجلد او الحقائب؟", "تواصل معنا"],
  },
};

const INFO_PAGE_COPY = {
  en: {
    shipping: {
      label: "Support",
      title: "Shipping & Delivery Support",
      subtitle: "AOLOLA supports sample shipments, bulk order delivery and export coordination for international B2B customers.",
      intro: "We help customers arrange sample shipments, bulk order packing and export delivery support based on order type, destination and product requirements. Shipping methods, lead time and packing details are confirmed during quotation and order processing.",
      cards: [
        ["Sample Orders", ["Samples can usually be arranged after confirming item details, quantity and destination.", "Small sample shipments are commonly sent by express courier.", "Sample timing depends on stock availability or sample preparation needs."]],
        ["Bulk Orders", ["Bulk orders are packed based on product type, surface protection and shipping needs.", "Shipping may be arranged by express, air freight, sea freight or customer-appointed forwarder.", "Final shipping method depends on quantity, destination, lead time and packaging requirements."]],
        ["Before Quotation", ["Please provide destination country, estimated quantity, preferred shipping method and packaging requirements.", "If available, include product photos, specifications and delivery expectations so we can prepare a more accurate quote."]],
        ["Export & Packing Support", ["We support export packing coordination for bag hardware, leather materials and related accessories.", "Protective packaging may be arranged to reduce scratches, pressure damage or moisture risk during transit."]],
      ],
      notesTitle: "Shipping Notes",
      notes: ["Shipping cost and delivery time vary by order size and destination.", "Custom orders, special finishes and bulk quantities may require extra preparation time.", "Final delivery details are confirmed before shipment."],
      cta: ["Need shipping support for your order?", "Send us your product list, quantity, destination and packaging needs for a tailored quotation.", "Request a Quote", "Contact Us"],
    },
    returns: {
      label: "Support",
      title: "Returns, Claims & Order Issue Support",
      subtitle: "We handle return and claim requests based on order details, product condition and actual case review.",
      intro: "For B2B orders, returns, replacements or claim support are handled according to product condition, customization status and communication records. Please contact us with clear order details if there is any issue after delivery.",
      cards: [
        ["Quality Issues", ["If there is a confirmed product quality issue, please provide photos, quantity, SKU and order information.", "Clear pictures and issue descriptions help us review the situation more efficiently."]],
        ["Custom Products", ["Customized products such as logo items, special plating, custom sizes, special materials or custom packaging are generally confirmed through samples or order approval before bulk production.", "Because of the custom nature, these items are usually not eligible for standard return unless there is a confirmed quality problem."]],
      ],
      processTitle: "Claim Review Process",
      steps: ["Send order number and issue description", "Provide photos / videos and affected quantity", "Our team reviews the case", "Solution discussion", "Replacement / refund / credit / next-order adjustment if applicable"],
      notesTitle: "Resolution Options & Return Notes",
      notes: ["Depending on the case, solutions may include replacement, partial refund, order credit, reshipment or next order deduction.", "Do not return goods without confirmation.", "Return shipping method and responsibility should be confirmed first.", "Different product types and order conditions may have different handling solutions."],
      cta: ["Need help with an order issue?", "Send us your order details and product photos so our team can review the case.", "Contact Support", "WhatsApp Us"],
    },
    faq: {
      label: "Support",
      title: "FAQ",
      subtitle: "Common questions about sourcing, samples, MOQ, quotation and production support.",
      intro: "These answers help B2B buyers prepare clearer inquiries for bag hardware, leather materials, zippers, tools and custom components.",
      cards: [
        ["How do I request a quote?", ["Send SKU, product photo, quantity, finish, destination and any logo or packaging requirements.", "Clear requirements help us prepare a faster and more accurate quotation."]],
        ["Can I order samples?", ["Yes. Sample support depends on stock, product type and customization requirements.", "Sample timing and courier method are confirmed before shipment."]],
        ["Do you support custom logo?", ["Yes. We can discuss logo, mold, plating, packaging and repeat-order standards before production.", "Custom details should be confirmed before bulk order."]],
      ],
      cta: ["Need help preparing your inquiry?", "Send product photos, quantity, finish and destination so we can review the request.", "Request a Quote", "Contact Us"],
    },
    blog: {
      label: "Resources",
      title: "Blog & Buying Guides",
      subtitle: "Product guides, sourcing tips and material insights for bag manufacturers, designers and importers.",
      intro: "This section is used to share helpful content about bag hardware, leather materials, zipper selection, sourcing advice and product application ideas for B2B buyers.",
      topicsTitle: "Featured Topics",
      topics: [
        ["Bag Hardware Guide", "Understand common metal parts, finishes and application choices for different bag styles."],
        ["Leather Material Guide", "Learn basic leather material options for factories, workshops and sample development."],
        ["Zipper Selection", "Compare zipper types, sliders, pullers and matching details for bags and cases."],
        ["Tool Recommendations", "Find practical tools and small supplies for leather craft and bag making."],
        ["Custom Component Development", "Prepare details for logo, plating, size and shape customization requests."],
        ["Buying & Sourcing Tips", "Improve quotation communication and reduce sourcing mistakes before ordering."],
      ],
      articlesTitle: "Latest Articles",
      articles: [
        ["Hardware", "How to Choose Bag Hardware for Different Bag Styles", "A practical checklist for matching buckles, locks, rings and chains with bag structure and use."],
        ["Zippers", "Common Zipper Types for Bags and Leather Goods", "Basic differences between metal, nylon and accessory zipper options for B2B buyers."],
        ["Custom", "What to Confirm Before Ordering Custom Metal Accessories", "Key details to prepare before asking for logo, plating, mold or special finish quotations."],
        ["Leather", "Leather Material Basics for Bag Factories and Workshops", "Simple points to review when comparing leather sheets, panels, thickness and color."],
        ["Sourcing", "Sample Order vs Bulk Order: What Buyers Should Prepare", "How samples, MOQ, lead time and packing details differ between trial and bulk orders."],
      ],
      guideTitle: "Why Read Our Guides",
      guides: [
        ["Clear Product Knowledge", "Understand materials, finishes and applications before confirming an order."],
        ["Better Sourcing Decisions", "Compare options with clearer requirements, MOQ and usage scenarios."],
        ["Faster Communication with Suppliers", "Prepare the right details so quotation and sampling move faster."],
      ],
      cta: ["Looking for specific sourcing advice?", "Tell us what bag parts or materials you need, and we can recommend suitable options.", "Request a Quote", "Contact Us"],
    },
    privacy: {
      label: "Company Policy",
      title: "Privacy Policy",
      subtitle: "How AOLOLA collects and uses information submitted through this website.",
      intro: "This policy explains how inquiry and communication information may be handled when customers contact AOLOLA for product quotation, sourcing support or order discussion.",
      policy: [
        ["Information We Collect", "We may collect contact name, company name, email address, phone number, country, inquiry details, product requirements and related communication information submitted through forms, email or direct contact."],
        ["How We Use Information", "Information may be used to respond to inquiries, prepare quotations, confirm product details, arrange sample or order communication and improve service support."],
        ["Data Protection", "We do not sell customer inquiry information. Submitted information is used internally for communication, quotation and order support purposes."],
        ["Third-Party Services", "The website may use third-party tools or services for website operation, communication or analytics. Please note that these third-party services may process limited technical information according to their own policies."],
        ["Cookies", "Basic cookies may be used for site functionality, analytics or user experience improvement."],
        ["Contact", "For privacy-related questions, please contact aurorabagsupply@gmail.com."],
      ],
      cta: ["Questions about privacy?", "Contact AOLOLA if you need clarification about how inquiry information is used.", "Contact Us", "Request a Quote"],
    },
    terms: {
      label: "Company Policy",
      title: "Terms of Service",
      subtitle: "Basic terms for using the AOLOLA website and requesting product quotations or supply support.",
      intro: "These terms outline how website information, quotations, custom orders and B2B order communication are handled before final order confirmation.",
      policy: [
        ["Website Information", "Product descriptions, images, specifications and product references on this website are provided for general information and sourcing reference."],
        ["Quotation & Confirmation", "Final price, lead time, packaging and shipping details are confirmed according to actual product requirements, quantity and order confirmation."],
        ["Custom Orders", "Custom orders involving logo, plating, material, dimensions, packaging or other special requirements must be confirmed before production."],
        ["Product Information Accuracy", "We try to keep website content clear and useful, but some information may be updated based on product changes, sourcing conditions or order requirements."],
        ["Order Communication", "Order processing depends on confirmed specifications, mutual communication and final agreement between both parties."],
        ["Contact", "For service-related questions, please contact aurorabagsupply@gmail.com."],
      ],
      cta: ["Need quotation or service support?", "Send product details, quantity and destination so we can confirm available options before order processing.", "Request a Quote", "Contact Us"],
    },
  },
  zh: {
    shipping: {
      label: "支持服务",
      title: "运输与交付支持",
      subtitle: "AOLOLA 为国际 B2B 客户提供样品寄送、大货运输和出口交付协助。",
      intro: "我们会根据订单类型、目的地和产品要求协助客户安排样品寄送、大货包装和出口运输支持。运输方式、交期和包装细节会在报价与订单处理过程中确认。",
      cards: [
        ["样品订单", ["确认产品细节、数量和目的地后，通常可安排样品。", "小批量样品通常通过国际快递寄送。", "样品时间取决于库存情况或样品准备需求。"]],
        ["批量订单", ["大货会根据产品类型、表面保护和运输需求进行包装。", "运输方式可包括快递、空运、海运或客户指定货代。", "最终方式取决于数量、目的地、交期和包装要求。"]],
        ["报价前信息", ["请提供目的国家、预计数量、偏好运输方式和包装要求。", "如有产品图片、规格和交付期望，也请一并提供，方便准备更准确的报价。"]],
        ["出口与包装支持", ["我们支持箱包五金、皮革材料和相关配件的出口包装协调。", "可根据需要安排保护包装，以降低刮花、受压变形或潮湿风险。"]],
      ],
      notesTitle: "运输说明",
      notes: ["运费和交期会根据订单大小和目的地变化。", "定制订单、特殊表面和大批量产品可能需要额外准备时间。", "最终交付细节会在发货前确认。"],
      cta: ["需要订单运输支持？", "请发送产品清单、数量、目的地和包装需求，我们将协助准备对应报价。", "获取报价", "联系我们"],
    },
    returns: {
      label: "支持服务",
      title: "退换货、索赔与订单问题支持",
      subtitle: "我们会根据订单细节、产品状态和实际案例审核处理退换货或索赔需求。",
      intro: "B2B 订单的退换、补发或索赔支持，会根据产品状态、定制情况和沟通记录处理。如收货后发现问题，请提供清晰订单信息联系我们。",
      cards: [
        ["质量问题", ["如确认存在产品质量问题，请提供照片、数量、SKU 和订单信息。", "清晰图片和问题描述有助于更高效审核。"]],
        ["定制产品", ["Logo、特殊电镀、定制尺寸、特殊材料或定制包装等产品，通常会在大货前通过样品或订单确认。", "由于定制属性，除非确认质量问题，通常不适用于标准退货。"]],
      ],
      processTitle: "问题审核流程",
      steps: ["发送订单号和问题描述", "提供照片 / 视频和影响数量", "我们的团队审核情况", "讨论解决方案", "如适用，安排补发 / 退款 / 抵扣 / 下单调整"],
      notesTitle: "解决方式与退货说明",
      notes: ["根据具体情况，方案可能包括更换、部分退款、订单抵扣、重新发货或下次订单扣减。", "未确认前请勿自行退回货物。", "退货运输方式和责任需先确认。", "不同产品类型和订单条件可能有不同处理方案。"],
      cta: ["订单问题需要帮助？", "请发送订单信息和产品照片，我们的团队会协助审核。", "联系支持", "WhatsApp咨询"],
    },
    faq: {
      label: "支持服务",
      title: "常见问题",
      subtitle: "关于采购、样品、起订量、报价和生产支持的常见问题。",
      intro: "这些说明帮助 B2B 买家更清楚地准备箱包五金、皮革材料、拉链、工具和定制配件询盘。",
      cards: [
        ["如何获取报价？", ["请发送 SKU、产品图片、数量、表面、目的地，以及 Logo 或包装要求。", "清晰需求有助于更快准备准确报价。"]],
        ["可以订样品吗？", ["可以。样品支持取决于库存、产品类型和是否需要定制。", "样品时间和快递方式会在寄出前确认。"]],
        ["支持 Logo 定制吗？", ["支持。可在生产前沟通 Logo、开模、电镀、包装和复购标准。", "定制细节应在大货前确认。"]],
      ],
      cta: ["需要帮助准备询盘？", "请发送产品图片、数量、表面和目的地，我们会协助审核需求。", "获取报价", "联系我们"],
    },
    blog: {
      label: "资源中心",
      title: "博客与采购指南",
      subtitle: "为箱包工厂、设计师和进口商准备的产品指南、采购建议和材料知识。",
      intro: "这里用于分享箱包五金、皮革材料、拉链选择、采购建议和产品应用思路，帮助 B2B 买家更清楚地准备询盘。",
      topicsTitle: "推荐主题",
      topics: [
        ["箱包五金指南", "了解不同包型常用金属件、表面和应用选择。"],
        ["皮革材料指南", "了解工厂、工作室和样品开发常用皮革材料。"],
        ["拉链选择", "比较拉链类型、拉头和配套细节。"],
        ["工具推荐", "查找皮具和箱包打样所需工具与小辅料。"],
        ["定制配件开发", "准备 Logo、电镀、尺寸和形状定制资料。"],
        ["采购建议", "优化报价沟通，减少下单前的规格误差。"],
      ],
      articlesTitle: "最新文章",
      articles: [
        ["五金", "如何为不同包型选择箱包五金", "用于匹配扣具、锁扣、圆环和链条的基础检查清单。"],
        ["拉链", "箱包与皮具常见拉链类型", "面向 B2B 买家的金属、尼龙和配件拉链基础差异。"],
        ["定制", "定制金属配件下单前需要确认什么", "Logo、电镀、开模和特殊表面报价前需要准备的关键资料。"],
        ["皮革", "箱包工厂与工作室的皮革材料基础", "比较皮革片材、厚度、颜色和用途时的简单要点。"],
        ["采购", "样品订单和大货订单：买家应准备什么", "说明样品、MOQ、交期和包装细节在不同订单阶段的差异。"],
      ],
      guideTitle: "为什么阅读我们的指南",
      guides: [["清晰产品知识", "下单前理解材料、表面和应用。"], ["更好的采购决策", "根据需求、MOQ 和使用场景比较方案。"], ["更快供应商沟通", "准备正确细节，让报价和打样更快。"]],
      cta: ["需要具体采购建议？", "告诉我们你需要的箱包配件或材料，我们可以推荐合适方案。", "获取报价", "联系我们"],
    },
    privacy: {
      label: "公司政策",
      title: "隐私政策",
      subtitle: "AOLOLA 如何收集和使用通过网站提交的信息。",
      intro: "本政策说明客户为了产品报价、采购支持或订单沟通联系 AOLOLA 时，询盘和沟通信息可能如何被处理。",
      policy: [
        ["我们收集的信息", "我们可能收集联系人姓名、公司名称、邮箱地址、电话号码、国家、询盘内容、产品需求，以及通过表单、邮件或直接联系提交的相关沟通信息。"],
        ["信息用途", "信息可能用于回复询盘、准备报价、确认产品细节、安排样品或订单沟通，以及改进服务支持。"],
        ["数据保护", "我们不会出售客户询盘信息。提交信息仅用于内部沟通、报价和订单支持。"],
        ["第三方服务", "网站可能使用第三方工具或服务进行网站运行、沟通或分析。这些服务可能根据自身政策处理有限技术信息。"],
        ["Cookies", "网站可能使用基础 cookies 用于站点功能、分析或用户体验改善。"],
        ["联系我们", "隐私相关问题请联系 aurorabagsupply@gmail.com。"],
      ],
      cta: ["关于隐私还有问题？", "如需了解询盘信息如何使用，请联系 AOLOLA。", "联系我们", "获取报价"],
    },
    terms: {
      label: "公司政策",
      title: "服务条款",
      subtitle: "使用 AOLOLA 网站以及申请产品报价或供应支持的基本条款。",
      intro: "这些条款说明网站信息、报价、定制订单和 B2B 订单沟通在最终确认前的处理方式。",
      policy: [
        ["网站信息", "本网站的产品描述、图片、规格和产品参考用于一般信息和采购参考。"],
        ["报价与确认", "最终价格、交期、包装和运输细节会根据实际产品要求、数量和订单确认确定。"],
        ["定制订单", "涉及 Logo、电镀、材料、尺寸、包装或其他特殊要求的定制订单，必须在生产前确认。"],
        ["产品信息准确性", "我们会尽量保持网站内容清晰有用，但部分信息可能根据产品变化、采购条件或订单要求更新。"],
        ["订单沟通", "订单处理取决于已确认规格、双方沟通以及最终协议。"],
        ["联系我们", "服务相关问题请联系 aurorabagsupply@gmail.com。"],
      ],
      cta: ["需要报价或服务支持？", "请发送产品细节、数量和目的地，以便我们在订单处理前确认可用方案。", "获取报价", "联系我们"],
    },
  },
};

const INFO_PAGE_GENERIC = {
  ru: {
    intro: "Информационная страница AOLOLA для покупателей B2B.",
    overview: "Обзор",
    overviewText: "Здесь собрана базовая информация по закупке, образцам, доставке, возвратам, политике и условиям сервиса.",
    action: "Что делать дальше",
    actionText: "Для точного ответа отправьте SKU, количество, покрытие, страну доставки и требования к логотипу или упаковке.",
    contact: "Контакт",
    contactText: "По вопросам свяжитесь с aurorabagsupply@gmail.com.",
  },
  es: {
    intro: "Pagina informativa de AOLOLA para compradores B2B.",
    overview: "Resumen",
    overviewText: "Aqui reunimos informacion basica sobre compra, muestras, envio, devoluciones, privacidad y condiciones de servicio.",
    action: "Siguiente paso",
    actionText: "Para una respuesta precisa, envie SKU, cantidad, acabado, pais de envio y requisitos de logo o empaque.",
    contact: "Contacto",
    contactText: "Para preguntas, contacte aurorabagsupply@gmail.com.",
  },
  fr: {
    intro: "Page d'information AOLOLA pour acheteurs B2B.",
    overview: "Apercu",
    overviewText: "Cette page regroupe les informations de base sur achat, echantillons, livraison, retours, confidentialite et conditions.",
    action: "Prochaine etape",
    actionText: "Pour une reponse precise, envoyez SKU, quantite, finition, pays de livraison et demandes logo ou emballage.",
    contact: "Contact",
    contactText: "Pour toute question, contactez aurorabagsupply@gmail.com.",
  },
  de: {
    intro: "Informationsseite von AOLOLA fuer B2B-Kaeufer.",
    overview: "Ueberblick",
    overviewText: "Hier stehen Basisinformationen zu Einkauf, Mustern, Versand, Rueckgaben, Datenschutz und Servicebedingungen.",
    action: "Naechster Schritt",
    actionText: "Fuer eine genaue Antwort senden Sie SKU, Menge, Finish, Lieferland und Logo- oder Verpackungswuensche.",
    contact: "Kontakt",
    contactText: "Bei Fragen kontaktieren Sie aurorabagsupply@gmail.com.",
  },
  it: {
    intro: "Pagina informativa AOLOLA per buyer B2B.",
    overview: "Panoramica",
    overviewText: "Qui raccogliamo informazioni di base su acquisto, campioni, spedizione, resi, privacy e termini di servizio.",
    action: "Passo successivo",
    actionText: "Per una risposta precisa, invia SKU, quantita, finitura, paese di spedizione e richieste logo o imballo.",
    contact: "Contatto",
    contactText: "Per domande, contatta aurorabagsupply@gmail.com.",
  },
  ar: {
    intro: "صفحة معلومات من AOLOLA لمشتري B2B.",
    overview: "نظرة عامة",
    overviewText: "تجمع هذه الصفحة معلومات اساسية عن الشراء والعينات والشحن والمرتجعات والخصوصية وشروط الخدمة.",
    action: "الخطوة التالية",
    actionText: "للحصول على رد دقيق، ارسل SKU والكمية والتشطيب وبلد الشحن ومتطلبات الشعار او التغليف.",
    contact: "اتصال",
    contactText: "للاستفسار تواصل عبر aurorabagsupply@gmail.com.",
  },
};

function infoPageCopy(page) {
  const copy = INFO_PAGE_COPY[currentLang()]?.[page] || INFO_PAGE_COPY.en[page];
  if (INFO_PAGE_COPY[currentLang()]?.[page]) return copy;
  const generic = INFO_PAGE_GENERIC[currentLang()];
  if (generic) {
    const titleKeys = { shipping: "shippingLink", returns: "returnsLink", faq: "faq", blog: "blog", privacy: "privacy", terms: "terms" };
    return {
      title: t(titleKeys[page] || "about"),
      intro: generic.intro,
      sections: [
        [generic.overview, generic.overviewText],
        [generic.action, generic.actionText],
        [generic.contact, generic.contactText],
      ],
    };
  }
  if (copy) return copy;
  return INFO_PAGE_COPY.en.faq;
}

function escapeInfoHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function infoList(items) {
  return `<ul class="aurora-support-list">${(items || []).map((item) => `<li>${escapeInfoHtml(item)}</li>`).join("")}</ul>`;
}

function supportPageHref(page) {
  const staticHref = `${page}.html`;
  const staticLink = document.querySelector(`a[href="${staticHref}"]`);
  if (staticLink) return staticHref;
  const wpLink = Array.from(document.querySelectorAll("a")).find((link) => (link.getAttribute("href") || "").includes(`/${page}/`));
  return wpLink ? wpLink.getAttribute("href") : `/${page}/`;
}

function renderInfoCards(cards) {
  return `<div class="aurora-support-grid">${(cards || []).map(([title, items], index) => `
    <article class="aurora-support-card">
      <span class="aurora-support-icon aurora-support-icon--${(index % 6) + 1}" aria-hidden="true"></span>
      <h2>${escapeInfoHtml(title)}</h2>
      ${Array.isArray(items) ? infoList(items) : `<p>${escapeInfoHtml(items)}</p>`}
    </article>
  `).join("")}</div>`;
}

function renderInfoSteps(title, steps) {
  if (!steps?.length) return "";
  return `
    <section class="aurora-support-section">
      <div class="aurora-support-section__head"><p class="kicker">${currentLang() === "zh" ? "处理流程" : "Process"}</p><h2>${escapeInfoHtml(title)}</h2></div>
      <div class="aurora-support-steps">${steps.map((step, index) => `
        <article><span>${currentLang() === "zh" ? "步骤" : "Step"} ${index + 1}</span><p>${escapeInfoHtml(step)}</p></article>
      `).join("")}</div>
    </section>`;
}

function renderInfoNotes(title, notes) {
  if (!notes?.length) return "";
  return `
    <section class="aurora-support-section">
      <div class="aurora-support-note">
        <div><p class="kicker">${currentLang() === "zh" ? "重要说明" : "Important Notes"}</p><h2>${escapeInfoHtml(title)}</h2></div>
        ${infoList(notes)}
      </div>
    </section>`;
}

function renderBlogContent(copy) {
  return `
    <section class="aurora-support-section">
      <div class="aurora-support-section__head"><p class="kicker">${currentLang() === "zh" ? "内容主题" : "Content Topics"}</p><h2>${escapeInfoHtml(copy.topicsTitle)}</h2></div>
      <div class="aurora-support-grid aurora-support-grid--three">${copy.topics.map(([title, text]) => `
        <article class="aurora-support-card"><span class="aurora-support-icon" aria-hidden="true"></span><h2>${escapeInfoHtml(title)}</h2><p>${escapeInfoHtml(text)}</p><a class="btn" href="#latest-articles">${currentLang() === "zh" ? "查看文章" : "View Articles"}</a></article>
      `).join("")}</div>
    </section>
    <section class="aurora-support-section" id="latest-articles">
      <div class="aurora-support-section__head"><p class="kicker">${currentLang() === "zh" ? "文章列表" : "Resource List"}</p><h2>${escapeInfoHtml(copy.articlesTitle)}</h2></div>
      <div class="aurora-support-articles">${copy.articles.map(([tag, title, text]) => `
        <article class="aurora-support-article"><span>${escapeInfoHtml(tag)}</span><h2>${escapeInfoHtml(title)}</h2><p>${escapeInfoHtml(text)}</p><a href="${supportPageHref("contact")}">${currentLang() === "zh" ? "阅读全文" : "Read More"}</a></article>
      `).join("")}</div>
    </section>
    <section class="aurora-support-section">
      <div class="aurora-support-section__head"><p class="kicker">${currentLang() === "zh" ? "采购价值" : "Buyer Value"}</p><h2>${escapeInfoHtml(copy.guideTitle)}</h2></div>
      <div class="aurora-support-grid aurora-support-grid--three">${copy.guides.map(([title, text]) => `<article class="aurora-support-card aurora-support-card--compact"><h2>${escapeInfoHtml(title)}</h2><p>${escapeInfoHtml(text)}</p></article>`).join("")}</div>
    </section>`;
}

function renderPolicyContent(copy) {
  return `
    <section class="aurora-policy-layout">
      <aside class="aurora-policy-toc">
        <strong>${currentLang() === "zh" ? "本页内容" : "On this page"}</strong>
        ${copy.policy.map(([title], index) => `<a href="#policy-${index + 1}">${escapeInfoHtml(title)}</a>`).join("")}
      </aside>
      <div class="aurora-policy-content">
        ${copy.policy.map(([title, text], index) => `
          <article id="policy-${index + 1}" class="aurora-policy-block"><h2>${escapeInfoHtml(title)}</h2><p>${escapeInfoHtml(text)}</p></article>
        `).join("")}
      </div>
    </section>`;
}

function renderInfoCta(cta) {
  if (!cta) return "";
  const secondaryHref = /whatsapp/i.test(cta[3] || "") || /WhatsApp/.test(cta[3] || "") ? WHATSAPP_URL : "contact.html";
  const primaryHref = supportPageHref("contact");
  const finalSecondaryHref = secondaryHref === "contact.html" ? primaryHref : secondaryHref;
  return `
    <section class="aurora-support-cta">
      <div><p class="kicker">${currentLang() === "zh" ? "下一步" : "Next Step"}</p><h2>${escapeInfoHtml(cta[0])}</h2><p>${escapeInfoHtml(cta[1])}</p></div>
      <div class="hero-actions"><a class="btn btn-brass" href="${primaryHref}">${escapeInfoHtml(cta[2])}</a><a class="btn" href="${finalSecondaryHref}" target="${finalSecondaryHref.startsWith("https") ? "_blank" : "_self"}" rel="noopener">${escapeInfoHtml(cta[3])}</a></div>
    </section>`;
}

function translateInfoPage() {
  const page = document.querySelector("[data-info-page]")?.dataset.infoPage;
  const target = document.querySelector("[data-info-content]");
  if (!page || !target) return;
  const copy = infoPageCopy(page);
  document.title = `${copy.title} | AOLOLA`;
  setText("[data-info-title] .kicker", copy.label || t("footerCompany"));
  setText("[data-info-title] h1", copy.title);
  const titleParagraphs = document.querySelectorAll("[data-info-title] p:not(.kicker)");
  if (titleParagraphs[0]) titleParagraphs[0].textContent = copy.subtitle || copy.intro;
  if (titleParagraphs[1]) {
    titleParagraphs[1].textContent = copy.intro || "";
  } else if (copy.intro) {
    const titleContainer = document.querySelector("[data-info-title] .container");
    if (titleContainer) {
      const intro = document.createElement("p");
      intro.textContent = copy.intro;
      titleContainer.appendChild(intro);
    }
  }
  let html = "";
  if (copy.cards) html += `<section class="aurora-support-section">${renderInfoCards(copy.cards)}</section>`;
  if (copy.processTitle) html += renderInfoSteps(copy.processTitle, copy.steps);
  if (copy.notesTitle) html += renderInfoNotes(copy.notesTitle, copy.notes);
  if (copy.topics) html += renderBlogContent(copy);
  if (copy.policy) html += renderPolicyContent(copy);
  html += renderInfoCta(copy.cta);
  target.innerHTML = html;
}

function megaSlug(value) {
  return String(value)
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function megaTopLabel(category) {
  if (currentLang() === "en" && MEGA_MENU_CONFIG[category]?.label) return MEGA_MENU_CONFIG[category].label;
  return categoryLabel(category);
}

function translatedMegaFilterLabel(labelKey) {
  return translatedFilterLabel(labelKey);
}

function megaCtaCopy(category) {
  const lang = currentLang();
  return MEGA_MENU_CTA_COPY[lang]?.[category] || MEGA_MENU_CONFIG[category]?.cta || ["Need help with this category?", t("requestQuote")];
}

function megaFilterParamName(filterGroup) {
  return {
    type: "product_type",
    color: "finish",
    finish: "finish",
    material: "material",
    scale: "size_fit",
    application: "application",
    quick: "custom_service",
    customization: "custom_service",
    moq: "supply",
  }[filterGroup] || filterGroup;
}

function megaFilterHref(baseHref, filterGroup, value) {
  const url = new URL(baseHref, window.location.href);
  url.searchParams.set(megaFilterParamName(filterGroup), value);
  return url.pathname.endsWith(".html") ? `${url.pathname.split("/").pop()}${url.search}` : `${url.pathname}${url.search}`;
}

function renderMegaPanel(category, baseHref) {
  const menu = MEGA_MENU_CONFIG[category];
  const sections = FILTER_SECTIONS_BY_CATEGORY[category] || [];
  if (!menu) return "";
  const ui = filterUiText();
  const cta = megaCtaCopy(category);
  const contactHref = baseHref.includes("product-category") || baseHref.startsWith("/") ? "/contact/" : "contact.html";
  const columns = sections.map(([titleKey, options]) => `
    <section class="aurora-mega-menu__column">
      <h3>${escapeInfoHtml(ui[titleKey] || titleKey)}</h3>
      ${options.map(([filterGroup, labelKey, value]) => `<a class="aurora-mega-menu__link" data-mega-filter-group="${filterGroup}" data-mega-filter-value="${value}" href="${megaFilterHref(baseHref, filterGroup, value)}">${escapeInfoHtml(translatedMegaFilterLabel(labelKey))}</a>`).join("")}
    </section>
  `).join("");
  return `
    <div class="aurora-mega-menu__panel">
      <div class="aurora-mega-menu__grid">${columns}</div>
      <div class="aurora-mega-menu__cta">
        <span>${escapeInfoHtml(cta[0])}</span>
        <a class="btn btn-brass" href="${contactHref}">${escapeInfoHtml(cta[1])}</a>
      </div>
    </div>
  `;
}

function updateMegaMenuPanels() {
  document.querySelectorAll(".aurora-mega-menu").forEach((menu) => {
    const key = menu.dataset.megaKey || "";
    const category = key === "zipper" ? "Zipper" : key.charAt(0).toUpperCase() + key.slice(1);
    if (!MEGA_MENU_CONFIG[category]) return;
    const top = menu.querySelector(".aurora-mega-menu__top");
    const baseHref = top?.getAttribute("href") || "products.html";
    if (top) top.textContent = megaTopLabel(category);
    const currentPanel = menu.querySelector(".aurora-mega-menu__panel");
    if (currentPanel) currentPanel.outerHTML = renderMegaPanel(category, baseHref);
  });
}

function enhanceStaticMegaMenu() {
  const nav = document.querySelector(".category-nav .container");
  if (!nav || nav.querySelector(".aurora-mega-menu")) return;
  nav.classList.add("aurora-mega-menu__nav");
  Array.from(nav.children).forEach((node) => {
    if (!(node instanceof HTMLAnchorElement)) return;
    const href = node.getAttribute("href") || "";
    const category = categoryFromHref(href);
    if (!MEGA_MENU_CONFIG[category]) {
      node.classList.add("aurora-mega-menu__simple");
      return;
    }
    const wrapper = document.createElement("div");
    wrapper.className = "aurora-mega-menu";
    wrapper.dataset.megaKey = category.toLowerCase();
    node.classList.add("aurora-mega-menu__top");
    node.dataset.megaTop = category;
    node.textContent = megaTopLabel(category);
    wrapper.appendChild(node.cloneNode(true));
    wrapper.insertAdjacentHTML("beforeend", `<button class="aurora-mega-menu__toggle" type="button" aria-expanded="false" aria-label="Open ${escapeInfoHtml(MEGA_MENU_CONFIG[category].label)} menu"></button>${renderMegaPanel(category, href)}`);
    node.replaceWith(wrapper);
  });
}

  function ensureMobileMenuLanguageSwitcher() {
    const nav = document.querySelector(".category-nav > .container, .category-nav .container.aurora-mega-menu__nav");
    if (!nav) return;
    let home = nav.querySelector(".mobile-nav-home-link");
    if (!home) {
      home = Array.from(nav.children).map((node) => node.matches?.("a") ? node : node.querySelector?.("a")).find((node) => {
        if (!node) return false;
        const label = (node.textContent || "").trim().toLowerCase();
        const href = node.getAttribute("href") || "";
        return label === "home" || label === "首页" || href === "index.html" || href === "/" || href.endsWith("/");
      });
    }
    if (!home) return;

    let lineRow = nav.querySelector(":scope > .mobile-nav-close-line-row");
    if (!lineRow) {
      lineRow = document.createElement("div");
      lineRow.className = "mobile-nav-close-line-row";
      nav.insertBefore(lineRow, nav.firstElementChild);
    }
    let close = lineRow.querySelector(".mobile-nav-close-line") || nav.querySelector(".mobile-menu-close");
    if (!close) close = document.createElement("button");
    close.className = "mobile-menu-close mobile-nav-close-line";
    close.type = "button";
    close.dataset.mobileMenuClose = "true";
    close.setAttribute("aria-label", currentLang() === "zh" ? "关闭菜单" : "Close menu");
    close.innerHTML = '<span aria-hidden="true"></span>';
    lineRow.appendChild(close);
    nav.querySelectorAll(".mobile-menu-close").forEach((button) => {
      if (button !== close) button.remove();
    });

    let row = nav.querySelector(":scope > .mobile-nav-home-row");
    if (!row) {
      row = document.createElement("div");
      row.className = "mobile-nav-home-row";
      nav.insertBefore(row, lineRow.nextElementSibling || null);
    }
    home.classList.add("mobile-nav-home-link");
    row.appendChild(home);

    let languageRow = row.querySelector(".mobile-nav-language-row");
    if (!languageRow) {
      languageRow = document.createElement("div");
      languageRow.className = "mobile-nav-language-row";
      row.appendChild(languageRow);
    }
    let wrapper = nav.querySelector(".language-select--menu");
    if (!wrapper) {
      wrapper = document.createElement("div");
      wrapper.className = "language-select language-select--menu";
      wrapper.innerHTML = languageSwitcherHtml(currentLang(), true);
    } else if (!wrapper.querySelector("[data-lang-toggle]")) {
      wrapper.innerHTML = languageSwitcherHtml(currentLang(), true);
    }
    languageRow.appendChild(wrapper);
  }

function setMegaMenuOpen(menu, open) {
  menu.classList.toggle("is-open", open);
  menu.querySelector(".aurora-mega-menu__toggle")?.setAttribute("aria-expanded", open ? "true" : "false");
}

function closeSiblingMegaMenus(menu) {
  document.querySelectorAll(".aurora-mega-menu.is-open").forEach((item) => {
    if (item !== menu) setMegaMenuOpen(item, false);
  });
}

function isMobileMegaMenu() {
  return window.matchMedia("(max-width: 760px)").matches;
}

function ensureMegaBackdrop() {
  const nav = document.querySelector(".category-nav");
  if (!nav) return null;
  let backdrop = document.querySelector(".aurora-mega-backdrop");
  if (!backdrop) {
    backdrop = document.createElement("div");
    backdrop.className = "aurora-mega-backdrop";
    backdrop.setAttribute("aria-hidden", "true");
    nav.insertAdjacentElement("afterend", backdrop);
  }
  return backdrop;
}

function updateMegaBackdropOffset() {
  const nav = document.querySelector(".category-nav");
  if (!nav) return;
  const bottom = Math.max(0, Math.round(nav.getBoundingClientRect().bottom));
  document.documentElement.style.setProperty("--aurora-mega-backdrop-top", `${bottom}px`);
}

function setMegaBackdropOpen(open) {
  ensureMegaBackdrop();
  if (isMobileMegaMenu()) open = false;
  if (open) updateMegaBackdropOffset();
  document.body.classList.toggle("aurora-mega-open", Boolean(open));
}

function bindMegaMenuBackdrop() {
  ensureMegaBackdrop();
  document.querySelectorAll(".aurora-mega-menu").forEach((menu) => {
    menu.addEventListener("pointerenter", () => setMegaBackdropOpen(true));
    menu.addEventListener("pointerleave", () => setMegaBackdropOpen(false));
    menu.addEventListener("focusin", () => setMegaBackdropOpen(true));
    menu.addEventListener("focusout", () => {
      window.setTimeout(() => {
        const focusedMenu = document.activeElement?.closest?.(".aurora-mega-menu");
        const hoveredMenu = document.querySelector(".aurora-mega-menu:hover");
        if (!focusedMenu && !hoveredMenu) setMegaBackdropOpen(false);
      }, 0);
    });
  });
  window.addEventListener("resize", () => {
    if (isMobileMegaMenu()) {
      setMegaBackdropOpen(false);
      return;
    }
    if (document.body.classList.contains("aurora-mega-open")) updateMegaBackdropOffset();
  });
}

function updateCommonLinks() {
  document.querySelectorAll(".category-nav a").forEach((link) => {
    if (link.closest(".aurora-mega-menu__panel")) return;
    const href = link.getAttribute("href") || "";
    if (href === "index.html") link.textContent = t("home");
    const category = categoryFromHref(href);
    if (category) link.textContent = link.classList.contains("aurora-mega-menu__top") ? megaTopLabel(category) : categoryLabel(category);
    if (href === "#new-arrivals") link.textContent = t("newArrivals");
    if (href === "quality.html") link.textContent = t("quality");
    if (href === "contact.html") link.textContent = t("contact");
    if (href === "about.html") link.textContent = t("about");
  });
  document.querySelectorAll("a").forEach((link) => {
    if (link.closest(".aurora-mega-menu__panel")) return;
    const href = link.getAttribute("href") || "";
    const category = categoryFromHref(href);
    if (category) link.textContent = link.classList.contains("aurora-mega-menu__top") ? megaTopLabel(category) : categoryLabel(category);
    if (href === "quality.html") link.textContent = t("quality");
    if (href === "contact.html" && /Contact|联系|Contacto|Kontakt|تواصل/.test(link.textContent)) link.textContent = t("contact");
    if (href === "about.html" && /About|关于|Nosotros|A propos|Uber|Chi|من/.test(link.textContent)) link.textContent = t("about");
  });
  document.querySelectorAll(".header-action").forEach((link) => {
    const href = link.getAttribute("href") || "";
    if (href.includes("account.html#wishlist")) link.textContent = t("wishlist");
    else if (href.includes("account.html")) link.textContent = t("account");
    else if (href.includes("cart.html")) link.innerHTML = `${t("cart")} <span class="cart-dot">${quoteItems().reduce((sum, item) => sum + item.quantity, 0)}</span>`;
  });
}

function categoryFromHref(href) {
  const match = href.match(/[?&]category=([^&#]+)/);
  if (match) return normalizeCategory(decodeURIComponent(match[1]));
  const pathMatch = href.match(/product-category\/([^/?#]+)/);
  if (!pathMatch) return "";
  const slugMap = {
    accessories: "Accessories",
    bag: "Bag",
    bags: "Bag",
    hardware: "Hardware",
    leather: "Leather",
    tools: "Tools",
    zipper: "Zipper",
    zippers: "Zipper",
  };
  const value = slugMap[pathMatch[1]] || pathMatch[1];
  return normalizeCategory(value);
}

function bindTabs() {
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-tab]");
    if (!button) return;
    const box = button.closest(".tab-box");
    box.querySelectorAll("[data-tab]").forEach((item) => item.classList.toggle("is-active", item === button));
    box.querySelectorAll("[data-panel]").forEach((panel) => panel.classList.toggle("is-active", panel.dataset.panel === button.dataset.tab));
  });
}

function rerenderDynamicContent() {
  applyLanguageText();
  updateMegaMenuPanels();
  renderCategories();
  renderProductGrids();
  renderCatalog();
  renderDetail();
  updateQuoteCount();
  window.requestAnimationFrame(applyMobileDesignSystemV2);
}

function bindActions() {
  document.addEventListener("change", (event) => {
    if (event.target.matches('[data-filter-group="category"]')) {
      const selectedCategory = event.target.checked ? normalizeCategory(event.target.value) : "";
      document.querySelectorAll('[data-filter-group="category"]').forEach((input) => {
        if (input !== event.target) input.checked = false;
      });
      updateFilterOptionStates(event.target.closest("[data-filter-panel]") || document);
      syncCategoryUrl(selectedCategory);
      const panel = event.target.closest("[data-filter-panel]");
      if (panel) {
        delete panel.dataset.renderedCategory;
      }
      renderCatalog();
      return;
    }
    if (event.target.matches("[data-filter-group], [data-sort]")) {
      updateFilterOptionStates(event.target.closest("[data-filter-panel]") || document);
      renderCatalog();
    }
  });
  document.addEventListener("click", (event) => {
    const quick = event.target.closest("[data-quick-view]");
    const add = event.target.closest("[data-add-quote]");
    const closeModal = event.target.closest("[data-close-modal]");
    const closeQuote = event.target.closest("[data-close-quote]");
    const langToggle = event.target.closest("[data-lang-toggle]");
    const lang = event.target.closest("[data-lang]");
    const thumb = event.target.closest("[data-thumb]");
    const clear = event.target.closest("[data-clear-filters]");
    const heroPrev = event.target.closest("[data-hero-prev]");
    const heroNext = event.target.closest("[data-hero-next]");
    const heroDot = event.target.closest("[data-hero-dot]");
    const filterToggle = event.target.closest("[data-mobile-filter-toggle]");
    const filterBackdrop = event.target.closest("[data-filter-backdrop]");
    const filterSectionToggle = event.target.closest("[data-filter-section-toggle]");
    if (quick) openQuickView(quick.dataset.quickView);
    if (add) addToQuote(add.dataset.addQuote);
    if (closeModal) document.querySelector(".quick-view")?.classList.remove("is-open");
    if (closeQuote) document.querySelector(".quote-drawer")?.classList.remove("is-open");
    if (langToggle) {
      const select = langToggle.closest(".language-select");
      document.querySelectorAll(".language-select.is-open").forEach((item) => {
        if (item !== select) item.classList.remove("is-open");
      });
      select.classList.toggle("is-open");
    }
    if (lang) {
      const nextLang = lang.dataset.lang;
      localStorage.setItem("auroraLang", nextLang);
      const url = new URL(window.location.href);
      url.searchParams.set("lang", nextLang);
      window.history.replaceState({}, "", url);
      document.documentElement.lang = nextLang;
      window.dispatchEvent(new CustomEvent("aurora:languagechange", { detail: { lang: nextLang } }));
      syncLanguageSwitcherLabel();
      document.querySelectorAll(".language-select.is-open").forEach((item) => item.classList.remove("is-open"));
      rerenderDynamicContent();
    }
    if (thumb) {
      const main = document.querySelector(".gallery-main img");
      if (main) main.src = thumb.dataset.thumb;
    }
    if (clear) {
      document.querySelectorAll("[data-filter-group]").forEach((input) => { input.checked = false; });
      updateFilterOptionStates(clear.closest("[data-filter-panel]") || document);
      syncCategoryUrl("");
      delete clear.closest("[data-filter-panel]")?.dataset.renderedCategory;
      renderCatalog();
    }
    if (heroPrev) {
      moveHeroSlide(-1);
      resetHeroAutoplay();
    }
    if (heroNext) {
      moveHeroSlide(1);
      resetHeroAutoplay();
    }
    if (heroDot) {
      setHeroSlide(Number(heroDot.dataset.heroDot));
      resetHeroAutoplay();
    }
    if (filterToggle) {
      setMobileFilterDrawer(true);
    }
    if (filterBackdrop) {
      setMobileFilterDrawer(false);
    }
    if (filterSectionToggle && window.matchMedia("(max-width: 760px)").matches) {
      const group = filterSectionToggle.closest(".filter-group");
      const collapsed = group?.classList.toggle("is-collapsed");
      if (group) filterSectionToggle.setAttribute("aria-expanded", collapsed ? "false" : "true");
    }
  });
  document.addEventListener("keydown", (event) => {
    const filterSectionToggle = event.target.closest?.("[data-filter-section-toggle]");
    if (filterSectionToggle && window.matchMedia("(max-width: 760px)").matches && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      filterSectionToggle.click();
      return;
    }
    if (event.key === "Escape") setMobileFilterDrawer(false);
  });
}

function bindForms() {
  document.querySelectorAll("[data-demo-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      alert(form.dataset.success || "Thank you. Our sales team will contact you within 24 hours.");
    });
  });
  document.querySelectorAll(".site-search").forEach((form) => {
    const input = form.querySelector('input[type="search"], input[name="q"], input[name="s"]');
    if (input) {
      input.addEventListener("input", () => renderSearchSuggestions(form));
      input.addEventListener("focus", () => renderSearchSuggestions(form));
    }
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const query = input ? input.value.trim() : "";
      const action = form.getAttribute("action") || "products.html";
      const url = new URL(action, window.location.href);
      const searchParam = input?.name === "s" ? "s" : "q";
      if (query) url.searchParams.set(searchParam, query);
      else url.searchParams.delete(searchParam);
      url.searchParams.set("lang", currentLang());
      FILTER_URL_PARAMS.forEach((param) => url.searchParams.delete(param));
      if (document.querySelector("[data-catalog-grid]") && url.pathname.endsWith("products.html")) {
        window.history.replaceState({}, "", url);
        renderCatalog();
        return;
      }
      window.location.href = url.href;
    });
  });
  document.addEventListener("click", (event) => {
    if (event.target.closest(".site-search")) return;
    document.querySelectorAll(".search-suggestions.is-open").forEach((panel) => panel.classList.remove("is-open"));
  });
  const menu = document.querySelector("[data-mobile-menu]");
  const nav = document.querySelector(".category-nav");
  const openMobileNav = () => {
    if (!nav) return;
    nav.scrollTop = 0;
    nav.classList.add("is-open");
    document.body.classList.add("aurora-mobile-menu-open");
    menu?.setAttribute("aria-expanded", "true");
    setMegaBackdropOpen(false);
    requestAnimationFrame(() => {
      nav.scrollTop = 0;
    });
  };
  const closeMobileNav = () => {
    if (!nav) return;
    nav.classList.remove("is-open");
    document.body.classList.remove("aurora-mobile-menu-open");
    menu?.setAttribute("aria-expanded", "false");
    setMegaBackdropOpen(false);
    document.querySelectorAll(".aurora-mega-menu.is-open").forEach((item) => setMegaMenuOpen(item, false));
  };
  if (menu && nav) {
    menu.addEventListener("click", () => {
      if (nav.classList.contains("is-open")) closeMobileNav();
      else openMobileNav();
    });
    document.addEventListener("click", (event) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!nav.classList.contains("is-open") || target?.closest(".category-nav .container, [data-mobile-menu]")) return;
      closeMobileNav();
    });
  }
  document.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (target?.closest("[data-mobile-menu-close]")) closeMobileNav();
  });
  document.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target : null;
    const menuItem = target?.closest(".category-nav .aurora-mega-menu");
    if (!menuItem || target?.closest(".aurora-mega-menu__panel") || !isMobileMegaMenu()) return;
    const link = menuItem.querySelector(".aurora-mega-menu__top");
    const href = link?.getAttribute("href");
    if (!href) return;
    event.preventDefault();
    event.stopPropagation();
    window.location.assign(href);
  }, true);
  document.addEventListener("click", (event) => {
    const toggle = event.target.closest(".aurora-mega-menu__toggle");
    if (!toggle) return;
    const megaMenu = toggle.closest(".aurora-mega-menu");
    if (!megaMenu || !isMobileMegaMenu()) return;
    event.preventDefault();
    const nextState = !megaMenu.classList.contains("is-open");
    closeSiblingMegaMenus(megaMenu);
    setMegaMenuOpen(megaMenu, nextState);
  });
}

function bindHeroSwipe() {
  const carousel = document.querySelector("[data-hero-carousel]");
  if (!carousel) return;
  let startX = 0;
  let startY = 0;
  let pointerActive = false;
  carousel.addEventListener("pointerdown", (event) => {
    startX = event.clientX;
    startY = event.clientY;
    pointerActive = true;
  });
  carousel.addEventListener("pointerup", (event) => {
    if (!pointerActive) return;
    pointerActive = false;
    const diffX = event.clientX - startX;
    const diffY = event.clientY - startY;
    if (Math.abs(diffX) < 44 || Math.abs(diffX) < Math.abs(diffY) * 1.2) return;
    moveHeroSlide(diffX > 0 ? -1 : 1);
    resetHeroAutoplay();
  });
  carousel.addEventListener("pointercancel", () => {
    pointerActive = false;
  });
}

function enhanceMobileFooterAccordions() {
  document.querySelectorAll(".site-footer .footer-grid > div:not(.footer-contact):not(.footer-side)").forEach((group) => {
    if (group.dataset.footerAccordionBound) return;
    const heading = group.querySelector("h3");
    if (!heading) return;
    group.dataset.footerAccordionBound = "true";
    heading.setAttribute("role", "button");
    heading.setAttribute("tabindex", "0");
    heading.setAttribute("aria-expanded", "false");
    const toggle = () => {
      const isOpen = group.classList.toggle("is-open");
      heading.setAttribute("aria-expanded", String(isOpen));
    };
    heading.addEventListener("click", toggle);
    heading.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      toggle();
    });
  });
}

function ensureSharedMobileHeader() {
  const headerContainer = document.querySelector(".main-header .container");
  if (!headerContainer) return;
  let menuButton = headerContainer.querySelector("[data-mobile-menu]");
  if (!menuButton) {
    const button = document.createElement("button");
    button.className = "mobile-menu";
    button.type = "button";
    button.dataset.mobileMenu = "";
    button.setAttribute("aria-label", "Open menu");
    button.textContent = "Menu";
    menuButton = button;
  }
  const search = headerContainer.querySelector(".site-search");
  const brand = headerContainer.querySelector(".brand");
  if (menuButton && menuButton.parentElement !== headerContainer) headerContainer.prepend(menuButton);
  if (menuButton) headerContainer.prepend(menuButton);
  if (brand && menuButton) menuButton.insertAdjacentElement("afterend", brand);
  const actions = headerContainer.querySelector(".header-actions");
  if (actions) actions.hidden = true;
  if (search && !search.id) search.id = "aurora-site-search";
  if (search) headerContainer.append(search);
  if (brand) brand.setAttribute("aria-label", "AOLOLA home");

  let overlay = document.querySelector(".mobile-search-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className = "mobile-search-overlay";
    overlay.id = "mobile-search-overlay";
    overlay.setAttribute("aria-hidden", "true");
    overlay.innerHTML = `
      <div class="mobile-search-overlay__panel" role="dialog" aria-modal="true" aria-label="Search">
        <button class="mobile-search-overlay__close" type="button" data-mobile-search-close aria-label="Close search">×</button>
        <form class="mobile-search-overlay__form" action="products.html">
          <label class="mobile-search-overlay__field">
            <span class="mobile-search-overlay__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="6.8"></circle><path d="m16 16 4.2 4.2"></path></svg>
            </span>
            <input name="q" type="search" placeholder="Search" autocomplete="off" autocapitalize="none" autocorrect="off" spellcheck="false" />
          </label>
          <button class="mobile-search-overlay__image" type="button" data-image-search-trigger aria-label="Search by image">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 8.5A2.5 2.5 0 0 1 7 6h1.6l1-1.4h4.8l1 1.4H17a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 17 18H7a2.5 2.5 0 0 1-2.5-2.5v-7Z"></path><circle cx="12" cy="12" r="3.2"></circle></svg>
          </button>
        </form>
        <div class="mobile-search-overlay__quick">
          <p data-mobile-search-quick-title>${t("quickLinks") || "Quick Links"}</p>
          <a href="products.html?category=Hardware" data-mobile-search-link="searchHardware">${t("searchHardware") || "Hardware"}</a>
          <a href="products.html?category=Bag" data-mobile-search-link="searchBags">${t("searchBags") || "Finished Bags"}</a>
          <a href="products.html?category=Leather" data-mobile-search-link="searchLeather">${t("searchLeather") || "Leather Materials"}</a>
          <a href="products.html?category=Zipper" data-mobile-search-link="searchZippers">${t("searchZippers") || "Zippers"}</a>
          <a href="contact.html" data-mobile-search-link="requestQuote">${t("requestQuote") || "Request a Quote"}</a>
        </div>
      </div>
    `;
    document.body.append(overlay);
  }

  const overlayInput = overlay.querySelector('input[type="search"]');
  const overlayForm = overlay.querySelector("form");
  const overlayClose = overlay.querySelector("[data-mobile-search-close]");
  const openOverlay = () => {
    overlay.querySelector(".mobile-search-overlay__field input")?.setAttribute("placeholder", t("searchTitle") || "Search");
    const quickTitle = overlay.querySelector("[data-mobile-search-quick-title]");
    if (quickTitle) quickTitle.textContent = t("quickLinks") || "Quick Links";
    overlay.querySelectorAll("[data-mobile-search-link]").forEach((link) => {
      link.textContent = t(link.dataset.mobileSearchLink) || link.textContent;
    });
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    document.documentElement.classList.add("mobile-search-is-open");
    document.body.classList.add("mobile-search-is-open");
    const sourceInput = headerContainer.querySelector('.site-search input[type="search"], .site-search input[name="q"], .site-search input[name="s"]');
    if (overlayInput && sourceInput) overlayInput.value = sourceInput.value || "";
    window.setTimeout(() => overlayInput?.focus(), 160);
  };
  const closeOverlay = () => {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.documentElement.classList.remove("mobile-search-is-open");
    document.body.classList.remove("mobile-search-is-open");
    document.querySelector("[data-mobile-search-focus]")?.setAttribute("aria-expanded", "false");
  };
  if (overlayClose && !overlayClose.dataset.bound) {
    overlayClose.dataset.bound = "true";
    overlayClose.addEventListener("click", closeOverlay);
  }
  if (overlayForm && !overlayForm.dataset.bound) {
    overlayForm.dataset.bound = "true";
    overlayForm.addEventListener("submit", (event) => {
      const query = overlayInput?.value.trim() || "";
      if (!query) return;
      event.preventDefault();
      const url = new URL("products.html", window.location.href);
      url.searchParams.set("q", query);
      url.searchParams.set("lang", currentLang());
      window.location.href = `${url.pathname.split("/").pop()}${url.search}`;
    });
  }
  if (!overlay.dataset.escapeBound) {
    overlay.dataset.escapeBound = "true";
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && overlay.classList.contains("is-open")) closeOverlay();
    });
  }

  let mobileActions = headerContainer.querySelector(".mobile-header-actions");
  if (!mobileActions) {
    mobileActions = document.createElement("div");
    mobileActions.className = "mobile-header-actions";
    mobileActions.innerHTML = `
      <button class="mobile-header-icon mobile-header-icon--search" type="button" data-mobile-search-focus aria-label="Search products">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"></circle><path d="m16 16 4.2 4.2"></path></svg>
      </button>
      <a class="mobile-header-icon mobile-header-icon--quote" href="cart.html" aria-label="Quote list">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 8.5h9l1.1 11H6.4l1.1-11Z"></path><path d="M9 8.5V7a3 3 0 0 1 6 0v1.5"></path></svg>
      </a>
    `;
    headerContainer.append(mobileActions);
  }
  if (menuButton && mobileActions && menuButton.parentElement === headerContainer) mobileActions.append(menuButton);
  const searchFocus = mobileActions.querySelector("[data-mobile-search-focus]");
  if (searchFocus && !searchFocus.dataset.bound) {
    searchFocus.dataset.bound = "true";
    searchFocus.setAttribute("aria-controls", "mobile-search-overlay");
    searchFocus.setAttribute("aria-expanded", "false");
    searchFocus.addEventListener("click", () => {
      openOverlay();
      searchFocus.setAttribute("aria-expanded", "true");
    });
  }
}

function enhanceMobileAccountTabs() {
  const accountGrid = document.querySelector(".account-grid");
  if (!accountGrid || accountGrid.dataset.v2TabsReady) return;
  accountGrid.dataset.v2TabsReady = "true";
  const panels = Array.from(accountGrid.querySelectorAll(":scope > form.panel"));
  if (panels.length < 2) return;
  accountGrid.classList.add("account-grid--tabs");
  const nav = document.createElement("div");
  nav.className = "account-tabs";
  nav.setAttribute("role", "tablist");
  const labels = [pageText().signInTitle, pageText().createAccountTitle];
  nav.innerHTML = labels.map((label, index) => `<button type="button" role="tab" aria-selected="${index === 0 ? "true" : "false"}" data-account-tab="${index}">${label}</button>`).join("");
  accountGrid.prepend(nav);
  const setActive = (index) => {
    panels.forEach((panel, panelIndex) => {
      panel.classList.toggle("is-account-active", panelIndex === index);
      panel.hidden = panelIndex !== index;
    });
    nav.querySelectorAll("[data-account-tab]").forEach((button, buttonIndex) => {
      button.classList.toggle("is-active", buttonIndex === index);
      button.setAttribute("aria-selected", buttonIndex === index ? "true" : "false");
    });
  };
  nav.addEventListener("click", (event) => {
    const button = event.target.closest("[data-account-tab]");
    if (!button) return;
    setActive(Number(button.dataset.accountTab));
  });
  setActive(0);
}

function enhanceBusinessCertificateUpload() {
  document.querySelectorAll('input[type="file"][name="business_certificate"]').forEach((input) => {
    if (input.dataset.v2UploadReady) return;
    input.dataset.v2UploadReady = "true";
    const field = input.closest(".field");
    if (!field) return;
    const label = field.querySelector("label")?.textContent || pageText().businessCertificate;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "file-upload-control";
    button.innerHTML = `<span>${label}</span><small>${currentLang() === "zh" ? "上传营业执照或公司资料" : "Upload business license or company profile"}</small>`;
    input.classList.add("sr-only-file");
    input.insertAdjacentElement("afterend", button);
    button.addEventListener("click", () => input.click());
    input.addEventListener("change", () => {
      const name = input.files?.[0]?.name;
      button.querySelector("small").textContent = name || (currentLang() === "zh" ? "上传营业执照或公司资料" : "Upload business license or company profile");
    });
  });
}

function enhanceCheckoutOptions() {
  document.querySelectorAll(".checkout-grid .option-row label").forEach((label) => {
    if (label.dataset.v2RadioReady) return;
    label.dataset.v2RadioReady = "true";
    label.classList.add("checkout-option");
    const input = label.querySelector('input[type="radio"]');
    if (!input) return;
    const update = () => {
      document.querySelectorAll(`input[name="${input.name}"]`).forEach((item) => {
        item.closest("label")?.classList.toggle("is-selected", item.checked);
      });
    };
    input.addEventListener("change", update);
    update();
  });
}

function enhanceContactFormGroups() {
  const form = document.querySelector(".contact-grid form.form-grid");
  if (!form || form.dataset.v2Grouped) return;
  form.dataset.v2Grouped = "true";
  const groups = [
    [currentLang() === "zh" ? "联系信息" : "Contact Information", 0, 6],
    [currentLang() === "zh" ? "产品需求" : "Product Requirements", 6, 10],
    [currentLang() === "zh" ? "定制与项目备注" : "Customization & Project Notes", 10, 12],
  ];
  const fields = Array.from(form.children).filter((node) => node.classList?.contains("field"));
  const fragment = document.createDocumentFragment();
  groups.forEach(([title, start, end]) => {
    const group = document.createElement("section");
    group.className = "form-section";
    group.innerHTML = `<h2>${title}</h2>`;
    fields.slice(start, end).forEach((field) => group.append(field));
    fragment.append(group);
  });
  const submit = fields[12];
  form.innerHTML = "";
  form.append(fragment);
  if (submit) form.append(submit);
}

function enhanceFaqAccordions() {
  if (document.body.dataset.infoPage !== "faq") return;
  document.querySelectorAll(".aurora-support-card").forEach((card, index) => {
    if (card.dataset.faqReady) return;
    card.dataset.faqReady = "true";
    card.classList.add("faq-item");
    const title = card.querySelector("h2");
    const body = card.querySelector("p");
    if (!title || !body) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "faq-question";
    button.setAttribute("aria-expanded", index === 0 ? "true" : "false");
    button.innerHTML = `<span>${title.textContent}</span><span aria-hidden="true">⌄</span>`;
    const answer = document.createElement("div");
    answer.className = "faq-answer";
    answer.innerHTML = `<p>${body.textContent}</p>`;
    answer.hidden = index !== 0;
    card.innerHTML = "";
    card.append(button, answer);
    card.classList.toggle("is-open", index === 0);
    button.addEventListener("click", () => {
      const open = !card.classList.contains("is-open");
      card.classList.toggle("is-open", open);
      button.setAttribute("aria-expanded", open ? "true" : "false");
      answer.hidden = !open;
    });
  });
}

function compactFooterCopy() {
  document.querySelectorAll(".footer-callout span").forEach((node) => {
    node.textContent = currentLang() === "zh" ? "箱包五金、皮革、拉链与配件采购支持。" : "B2B sourcing support for bags, hardware, leather, zippers and tools.";
  });
}

function tuneWhatsAppForFooter() {
  const button = document.querySelector(".aurora-whatsapp-button");
  const footer = document.querySelector(".site-footer");
  if (!button || !footer || button.dataset.v2FooterGuard) return;
  button.dataset.v2FooterGuard = "true";
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.some((entry) => entry.isIntersecting);
    button.classList.toggle("is-near-footer", visible);
  }, { threshold: 0.08 });
  observer.observe(footer);
}

function bindBrandHapticFeedback() {
  document.querySelectorAll(".brand").forEach((brand) => {
    if (brand.dataset.hapticBound) return;
    brand.dataset.hapticBound = "true";
    brand.addEventListener("pointerdown", () => {
      if (window.matchMedia("(max-width: 760px)").matches) {
        brand.classList.remove("is-haptic-tap");
        window.requestAnimationFrame(() => brand.classList.add("is-haptic-tap"));
        if (typeof navigator.vibrate === "function") navigator.vibrate(10);
      }
    }, { passive: true });
  });
}

function bindBrandTiltFeedback() {
  const brands = Array.from(document.querySelectorAll(".brand"));
  if (!brands.length || !window.matchMedia("(max-width: 760px)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  let orientationEnabled = false;
  let permissionRequested = false;
  let baseBeta = null;
  let baseGamma = null;

  const applyTilt = (rotateX, rotateY) => {
    brands.forEach((brand) => {
      const mark = brand.querySelector(".brand__mark");
      if (!mark) return;
      mark.style.setProperty("--brand-tilt-x", `${clamp(rotateX, -5, 5).toFixed(2)}deg`);
      mark.style.setProperty("--brand-tilt-y", `${clamp(rotateY, -6, 6).toFixed(2)}deg`);
    });
  };

  const resetTilt = () => applyTilt(0, 0);

  const onOrientation = (event) => {
    if (!Number.isFinite(event.beta) || !Number.isFinite(event.gamma)) return;
    if (baseBeta === null || baseGamma === null) {
      baseBeta = event.beta;
      baseGamma = event.gamma;
      return;
    }
    applyTilt((event.beta - baseBeta) * -0.16, (event.gamma - baseGamma) * 0.2);
  };

  const enableOrientation = () => {
    if (orientationEnabled) return;
    orientationEnabled = true;
    window.addEventListener("deviceorientation", onOrientation, { passive: true });
  };

  const requestOrientationPermission = () => {
    if (permissionRequested) return;
    permissionRequested = true;
    const orientation = window.DeviceOrientationEvent;
    if (orientation && typeof orientation.requestPermission === "function") {
      orientation.requestPermission().then((state) => {
        if (state === "granted") enableOrientation();
      }).catch(() => {});
      return;
    }
    enableOrientation();
  };

  brands.forEach((brand) => {
    if (brand.dataset.tiltBound) return;
    brand.dataset.tiltBound = "true";
    brand.addEventListener("pointerdown", requestOrientationPermission, { passive: true });
    brand.addEventListener("pointermove", (event) => {
      if (orientationEnabled || !brand.clientWidth || !brand.clientHeight) return;
      const rect = brand.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      applyTilt(-y * 4, x * 5);
    }, { passive: true });
    brand.addEventListener("pointerleave", resetTilt, { passive: true });
    brand.addEventListener("pointerup", resetTilt, { passive: true });
  });
}

function applyMobileDesignSystemV2() {
  enhanceMobileAccountTabs();
  enhanceBusinessCertificateUpload();
  enhanceCheckoutOptions();
  enhanceContactFormGroups();
  enhanceFaqAccordions();
  compactFooterCopy();
  tuneWhatsAppForFooter();
  bindBrandHapticFeedback();
  bindBrandTiltFeedback();
  document.body.classList.add("aurora-mobile-v2");
}

function guardWhatsAppProductOverlap() {
  const button = document.querySelector(".aurora-whatsapp-button");
  if (!button || button.dataset.productGuardBound) return;
  button.dataset.productGuardBound = "true";

  let ticking = false;
  const update = () => {
    ticking = false;
    if (!window.matchMedia("(max-width: 760px)").matches) {
      button.classList.remove("is-over-product-content");
      return;
    }
    const buttonRect = button.getBoundingClientRect();
    const targets = document.querySelectorAll(".product-card h3, .product-specs, .buying-row, .product-actions, .detail-link");
    const overlapsCriticalContent = Array.from(targets).some((target) => {
      const style = window.getComputedStyle(target);
      if (style.display === "none" || style.visibility === "hidden" || Number.parseFloat(style.opacity || "1") === 0) return false;
      const rect = target.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return false;
      if (rect.bottom < 0 || rect.top > window.innerHeight) return false;
      return !(buttonRect.right <= rect.left || rect.right <= buttonRect.left || buttonRect.bottom <= rect.top || rect.bottom <= buttonRect.top);
    });
    button.classList.toggle("is-over-product-content", overlapsCriticalContent);
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  window.addEventListener("orientationchange", requestUpdate);
  const observer = new MutationObserver(requestUpdate);
  observer.observe(document.body, { childList: true, subtree: true });
  window.setTimeout(update, 200);
  window.setTimeout(update, 900);
}

function repairMobileMenuLayout() {
  const nav = document.querySelector(
    ".category-nav > .container, .category-nav .container.aurora-mega-menu__nav, .category-nav .aurora-mega-menu__nav"
  );
  if (!nav) return;

  let home = nav.querySelector(":scope > .mobile-nav-home-link");
  if (!home) {
    home = Array.from(nav.querySelectorAll(":scope > a, :scope a")).find((node) => {
      const label = (node.textContent || "").trim().toLowerCase();
      const href = node.getAttribute("href") || "";
      return label === "home" || label === "首页" || href === "index.html" || href === "/" || href.endsWith("/");
    });
  }
  if (!home) return;

  let lineRow = nav.querySelector(":scope > .mobile-nav-close-line-row");
  if (!lineRow) {
    lineRow = document.createElement("div");
    lineRow.className = "mobile-nav-close-line-row";
    nav.insertBefore(lineRow, nav.firstElementChild);
  }

  let line = lineRow.querySelector(".mobile-nav-close-line");
  if (!line) line = document.createElement("button");
  line.className = "mobile-menu-close mobile-nav-close-line";
  line.type = "button";
  line.dataset.mobileMenuClose = "true";
  line.setAttribute("aria-label", currentLang() === "zh" ? "关闭菜单" : "Close menu");
  line.innerHTML = '<span aria-hidden="true"></span>';
  lineRow.appendChild(line);
  nav.querySelectorAll(".mobile-menu-close").forEach((button) => {
    if (button !== line) button.remove();
  });

  let row = nav.querySelector(":scope > .mobile-nav-home-row");
  if (!row) {
    row = document.createElement("div");
    row.className = "mobile-nav-home-row";
    nav.insertBefore(row, lineRow.nextElementSibling || null);
  }

  let languageRow = row.querySelector(".mobile-nav-language-row");
  if (!languageRow) {
    languageRow = document.createElement("div");
    languageRow.className = "mobile-nav-language-row";
    row.appendChild(languageRow);
  }
  home.classList.add("mobile-nav-home-link");
  row.insertBefore(home, languageRow);

  const wrappers = Array.from(nav.querySelectorAll(".language-select--menu"));
  let wrapper = wrappers.find((item) => item.querySelector("[data-lang-toggle]")) || wrappers[0];
  if (!wrapper) {
    wrapper = document.createElement("div");
    wrapper.className = "language-select language-select--menu";
    wrapper.innerHTML = languageSwitcherHtml(currentLang(), true);
  } else if (!wrapper.querySelector("[data-lang-toggle]")) {
    wrapper.innerHTML = languageSwitcherHtml(currentLang(), true);
  }
  languageRow.appendChild(wrapper);
  wrappers.forEach((item) => {
    if (item !== wrapper) item.remove();
  });
}

enhanceStaticMegaMenu();
ensureSharedMobileHeader();
repairMobileMenuLayout();
insertLanguageSwitcher();
rerenderDynamicContent();
bindMegaMenuBackdrop();
bindTabs();
bindActions();
bindForms();
bindHeroSwipe();
enhanceMobileFooterAccordions();
guardWhatsAppProductOverlap();
applyMobileDesignSystemV2();
startHeroAutoplay();
window.setTimeout(repairMobileMenuLayout, 0);
window.setTimeout(repairMobileMenuLayout, 450);
