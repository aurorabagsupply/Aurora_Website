const CATEGORY_CONFIG = [
  { name: "Bag", count: 30, prefix: "BAG", moq: 100 },
  { name: "Hardware", count: 20, prefix: "HDW", moq: 500 },
  { name: "Leather", count: 20, prefix: "LTH", moq: 50 },
  { name: "Zipper", count: 20, prefix: "ZIP", moq: 1000 },
  { name: "Accessories", count: 20, prefix: "ACC", moq: 300 },
  { name: "Tools", count: 20, prefix: "TLS", moq: 50 },
];

const LANGUAGES = [
  ["en", "EN"],
  ["zh", "中文"],
  ["ru", "RU"],
  ["es", "ES"],
  ["fr", "FR"],
  ["de", "DE"],
  ["it", "IT"],
  ["ar", "AR"],
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

let activeHeroIndex = 0;

const I18N = {
  en: {
    topLine: "Aurora Bag Supply | Professional Accessories, Bags, Hardware, Leather, Tools & Zippers",
    globalSupport: "Global B2B sourcing support",
    emailLabel: "Email",
    contactTop: "WhatsApp / WeChat / Contact Us",
    signIn: "Sign in / Register",
    account: "Account",
    wishlist: "Wishlist",
    cart: "Cart",
    search: "Search products...",
    searchButton: "Search",
    home: "Home",
    contact: "Contact Us",
    about: "About Us",
    newArrivals: "New Arrivals",
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
    newsletterTitle: "Get material updates and wholesale support",
    newsletterText: "Create an account or subscribe to receive new product information, sample support and quotation follow-up.",
    subscribe: "Subscribe",
    emailPlaceholder: "Your email address",
    footerDescription: "Premium bag accessories, bags, hardware, leather, tools and zippers supplier.",
    footerProducts: "Products",
    footerSupport: "Support",
    footerCompany: "Company",
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
    topLine: "Aurora Bag Supply | 配件、包、五金、皮革、工具、拉链专业供应",
    globalSupport: "全球 B2B 采购支持",
    emailLabel: "邮箱",
    contactTop: "WhatsApp / 微信 / 联系我们",
    signIn: "登录 / 注册",
    account: "账户",
    wishlist: "收藏",
    cart: "询价清单",
    search: "搜索产品...",
    searchButton: "搜索",
    home: "首页",
    contact: "联系我们",
    about: "关于我们",
    newArrivals: "新品",
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
    sample: "准备样本支持",
    custom: "定制标志硬件",
    repeat: "重复订单 SKU",
    alloy: "锌合金",
    brass: "铜管",
    leatherMaterial: "真皮",
    steel: "钢",
    gold: "金牌",
    nickel: "镍",
    gunmetal: "枪金属",
    black: "布莱克",
    plated: "电镀",
    brushed: "刷子",
    polished: "抛光",
    customFinish: "定制表面",
    small: "小",
    medium: "媒介",
    customSize: "习俗",
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
    newsletterTitle: "获取产品更新和批发支持",
    newsletterText: "创建账户或订阅，接收新品信息、样品支持和报价跟进。",
    subscribe: "订阅",
    emailPlaceholder: "您的邮箱地址",
    footerDescription: "专业供应包类配件、包、五金、皮革、工具和拉链。",
    footerProducts: "产品",
    footerSupport: "支持",
    footerCompany: "公司",
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
    topLine: "Aurora Bag Supply | Аксессуары, сумки, фурнитура, кожа, инструменты и молнии",
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
    topLine: "Aurora Bag Supply | Accesorios, bolsos, herrajes, cuero, herramientas y cremalleras",
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
    topLine: "Aurora Bag Supply | Accessoires, sacs, quincaillerie, cuir, outils et fermetures",
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
    topLine: "Aurora Bag Supply | Accessoires, Taschen, Hardware, Leder, Werkzeuge und Reissverschlusse",
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
    topLine: "Aurora Bag Supply | Accessori, borse, hardware, pelle, strumenti e cerniere",
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
    topLine: "Aurora Bag Supply | اكسسوارات وحقائب ومعدات وجلود وادوات وسحابات",
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
  ru: { sample: "Поддержка образцов", custom: "Кастомный логотип", repeat: "SKU для повторных заказов", alloy: "Цинковый сплав", brass: "Латунь", leatherMaterial: "Кожа", steel: "Сталь", gold: "Золото", nickel: "Никель", gunmetal: "Ганметалл", black: "Черный", plated: "Покрытие", brushed: "Матовый", polished: "Полированный", customFinish: "Индивидуальная отделка", small: "Малый", medium: "Средний", customSize: "Индивидуальный", handbag: "Сумка", luggage: "Багаж", belt: "Ремень", under500: "До 500 шт", between500: "500-1000 шт", customMoq: "Индивидуальный MOQ" },
  es: { sample: "Soporte de muestras", custom: "Logo personalizado", repeat: "SKU de recompra", alloy: "Aleacion de zinc", brass: "Laton", leatherMaterial: "Cuero", steel: "Acero", gold: "Oro", nickel: "Niquel", gunmetal: "Gunmetal", black: "Negro", plated: "Chapado", brushed: "Cepillado", polished: "Pulido", customFinish: "Acabado personalizado", small: "Pequeno", medium: "Mediano", customSize: "Personalizado", handbag: "Bolso", luggage: "Equipaje", belt: "Cinturon", under500: "Menos de 500 pcs", between500: "500-1000 pcs", customMoq: "MOQ personalizado" },
  fr: { sample: "Support echantillon", custom: "Logo personnalise", repeat: "SKU reorder", alloy: "Alliage de zinc", brass: "Laiton", leatherMaterial: "Cuir", steel: "Acier", gold: "Or", nickel: "Nickel", gunmetal: "Gunmetal", black: "Noir", plated: "Plaque", brushed: "Brosse", polished: "Poli", customFinish: "Finition personnalisee", small: "Petit", medium: "Moyen", customSize: "Personnalise", handbag: "Sac a main", luggage: "Bagage", belt: "Ceinture", under500: "Moins de 500 pcs", between500: "500-1000 pcs", customMoq: "MOQ personnalise" },
  de: { sample: "Musterunterstutzung", custom: "Individuelles Logo", repeat: "Wiederbestell-SKU", alloy: "Zinklegierung", brass: "Messing", leatherMaterial: "Leder", steel: "Stahl", gold: "Gold", nickel: "Nickel", gunmetal: "Gunmetal", black: "Schwarz", plated: "Beschichtet", brushed: "Geburstet", polished: "Poliert", customFinish: "Individuelles Finish", small: "Klein", medium: "Mittel", customSize: "Individuell", handbag: "Handtasche", luggage: "Gepack", belt: "Gurtel", under500: "Unter 500 Stk", between500: "500-1000 Stk", customMoq: "Individueller MOQ" },
  it: { sample: "Supporto campioni", custom: "Logo personalizzato", repeat: "SKU riordino", alloy: "Lega di zinco", brass: "Ottone", leatherMaterial: "Pelle", steel: "Acciaio", gold: "Oro", nickel: "Nichel", gunmetal: "Gunmetal", black: "Nero", plated: "Placcato", brushed: "Spazzolato", polished: "Lucido", customFinish: "Finitura personalizzata", small: "Piccolo", medium: "Medio", customSize: "Personalizzato", handbag: "Borsa", luggage: "Bagaglio", belt: "Cintura", under500: "Meno di 500 pcs", between500: "500-1000 pcs", customMoq: "MOQ personalizzato" },
  ar: { sample: "دعم العينات", custom: "شعار مخصص", repeat: "SKU لاعادة الطلب", alloy: "سبيكة زنك", brass: "نحاس", leatherMaterial: "جلد", steel: "فولاذ", gold: "ذهبي", nickel: "نيكل", gunmetal: "رمادي معدني", black: "اسود", plated: "مطلي", brushed: "مصقول خشن", polished: "مصقول", customFinish: "تشطيب مخصص", small: "صغير", medium: "متوسط", customSize: "مخصص", handbag: "حقيبة يد", luggage: "امتعة", belt: "حزام", under500: "اقل من 500 قطعة", between500: "500-1000 قطعة", customMoq: "MOQ مخصص" },
};

const CATEGORY_LABELS = {
  en: { Accessories: "Accessories", Bag: "Bag", Hardware: "Hardware", Leather: "Leather", Tools: "Tools", Zipper: "Zipper" },
  zh: { Accessories: "配件", Bag: "包", Hardware: "硬件", Leather: "皮革", Tools: "工具", Zipper: "拉链" },
  ru: { Accessories: "Аксессуары", Bag: "Сумки", Hardware: "Фурнитура", Leather: "Кожа", Tools: "Инструменты", Zipper: "Молнии" },
  es: { Accessories: "Accesorios", Bag: "Bolsos", Hardware: "Herrajes", Leather: "Cuero", Tools: "Herramientas", Zipper: "Cremalleras" },
  fr: { Accessories: "Accessoires", Bag: "Sacs", Hardware: "Quincaillerie", Leather: "Cuir", Tools: "Outils", Zipper: "Fermetures" },
  de: { Accessories: "Accessoires", Bag: "Taschen", Hardware: "Hardware", Leather: "Leder", Tools: "Werkzeuge", Zipper: "Reissverschlusse" },
  it: { Accessories: "Accessori", Bag: "Borse", Hardware: "Hardware", Leather: "Pelle", Tools: "Strumenti", Zipper: "Cerniere" },
  ar: { Accessories: "اكسسوارات", Bag: "حقائب", Hardware: "معدات", Leather: "جلود", Tools: "ادوات", Zipper: "سحابات" },
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

function translatedFilterLabel(key) {
  const direct = langPack()[key];
  if (direct) return direct;
  const filterPack = FILTER_LABELS[currentLang()] || {};
  return filterPack[key] || FILTER_LABELS.en?.[key] || key;
}

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

function imagePath(category, index) {
  return `assets/catalog/${category}/${category} (${index}).jpg`;
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

function productCard(productInput) {
  const product = enrichProduct(productInput);
  const badge = product.tags[0] ? `<span class="badge">${tagLabel(product.tags[0])}</span>` : "";
  return `
    <article class="product-card">
      <a class="product-card__image" href="product-detail.html?sku=${encodeURIComponent(product.sku)}">
        ${badge}
        <img src="${encodeURI(product.image)}" alt="${product.name}" loading="lazy" />
      </a>
      <div class="product-card__body">
        <div class="product-card__meta"><span>${product.sku}</span><span>${categoryLabel(product.category)}</span></div>
        <h3>${product.name}</h3>
        <div class="product-specs">
          <span><strong>${t("material")}:</strong> ${product.material}</span>
          <span><strong>${t("finish")}:</strong> ${product.finish}</span>
          <span><strong>${t("use")}:</strong> ${product.application}</span>
        </div>
        <div class="buying-row"><span>${t("moq")} ${product.moq}</span><strong>${product.price}</strong></div>
        <div class="product-actions">
          <button class="btn" type="button" data-quick-view="${product.sku}">${t("quickView")}</button>
          <button class="btn btn-primary" type="button" data-add-quote="${product.sku}">${t("quote")}</button>
        </div>
        <a class="detail-link" href="product-detail.html?sku=${encodeURIComponent(product.sku)}">${t("details")}</a>
      </div>
    </article>
  `;
}

function renderCategories() {
  const target = document.querySelector("[data-category-grid]");
  if (!target) return;
  target.innerHTML = CATEGORY_CONFIG.map((category) => {
    const productText = categoryText(category.name);
    return `
      <a class="category-card" href="products.html?category=${encodeURIComponent(category.name)}">
        <img src="${encodeURI(imagePath(category.name, 1))}" alt="${categoryLabel(category.name)}" loading="lazy" />
        <h3>${categoryLabel(category.name)}</h3>
        <p>${productText[1]}</p>
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

function renderProductGrids() {
  document.querySelectorAll("[data-products]").forEach((target) => {
    target.innerHTML = filteredProducts(target.dataset.products).slice(0, 8).map(productCard).join("");
  });
}

function activeFilters() {
  const filters = {};
  document.querySelectorAll("[data-filter-group]:checked").forEach((input) => {
    if (!filters[input.dataset.filterGroup]) filters[input.dataset.filterGroup] = [];
    filters[input.dataset.filterGroup].push(input.value);
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

function renderCatalog() {
  const grid = document.querySelector("[data-catalog-grid]");
  if (!grid) return;
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  const query = (params.get("q") || "").toLowerCase();
  let products = AURORA_PRODUCTS;
  if (category) products = products.filter((item) => item.category === category);
  if (query) {
    products = products.filter((item) => {
      const product = enrichProduct(item);
      return [product.name, product.sku, categoryLabel(product.category), product.material, product.finish, product.application].join(" ").toLowerCase().includes(query);
    });
  }
  const filters = activeFilters();
  products = sortedProducts(products.filter((item) => productMatchesFilters(item, filters)));
  const count = document.querySelector("[data-catalog-count]");
  if (count) count.textContent = `${products.length} ${currentLang() === "zh" ? "个产品" : "products"}`;
  grid.innerHTML = products.length ? products.map(productCard).join("") : `<div class="empty-results">${t("noResults")}</div>`;
}

function renderDetail() {
  const detail = document.querySelector("[data-product-detail]");
  if (!detail) return;
  const params = new URLSearchParams(window.location.search);
  const product = productBySku(params.get("sku"));
  document.title = `${product.name} | Aurora Bag Supply`;
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
        <dl class="detail-specs">
          <dt>${t("material")}</dt><dd>${product.material}</dd>
          <dt>${t("finish")}</dt><dd>${product.finish}</dd>
          <dt>${t("size")}</dt><dd>${product.size}</dd>
          <dt>${t("use")}</dt><dd>${product.application}</dd>
          <dt>${t("moq")}</dt><dd>${product.moq}</dd>
          <dt>${t("price")}</dt><dd>${product.price}</dd>
        </dl>
        <div class="qty-row"><label for="qty">${t("quantity")}</label><input id="qty" type="number" min="1" value="${product.moqNumber}" /></div>
        <div class="hero-actions">
          <button class="btn btn-primary" type="button" data-add-quote="${product.sku}">${t("quote")}</button>
          <a class="btn btn-brass" href="contact.html?sku=${encodeURIComponent(product.sku)}">${t("requestQuote")}</a>
          <a class="btn" href="account.html">${t("wishlist")}</a>
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

function insertLanguageSwitcher() {
  const target = document.querySelector(".header-actions") || document.querySelector(".top-strip__right");
  if (!target || document.querySelector(".language-select")) return;
  const active = currentLang();
  const wrapper = document.createElement("div");
  wrapper.className = "language-select";
  wrapper.innerHTML = `
    <button class="language-select__button" type="button" data-lang-toggle>${LANGUAGES.find(([code]) => code === active)?.[1] || "EN"}</button>
    <div class="language-select__menu">
      ${LANGUAGES.map(([code, label]) => `<button type="button" data-lang="${code}">${label}</button>`).join("")}
    </div>
  `;
  target.prepend(wrapper);
}

function syncLanguageSwitcherLabel() {
  const button = document.querySelector(".language-select__button");
  if (!button) return;
  button.textContent = LANGUAGES.find(([code]) => code === currentLang())?.[1] || "EN";
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
  document.querySelectorAll(".site-search input").forEach((input) => { input.placeholder = t("search"); });
  document.querySelectorAll(".site-search button").forEach((button) => { button.textContent = t("searchButton"); });
  document.querySelector(".top-strip .container > div:first-child") && (document.querySelector(".top-strip .container > div:first-child").textContent = t("topLine"));
  const topRight = document.querySelector(".top-strip__right");
  if (topRight) {
    const spans = topRight.querySelectorAll("span");
    if (spans[0] && !spans[0].classList.contains("cart-dot") && !spans[0].textContent.includes("Email")) {
      spans[0].textContent = t("globalSupport");
    }
    if (spans[1]) {
      spans[1].textContent = `${t("emailLabel")}: sales@aurorabagsupply.com`;
    }
    topRight.querySelectorAll("a").forEach((link) => {
      const href = link.getAttribute("href") || "";
      if (href === "contact.html") link.textContent = t("contactTop");
      if (href === "account.html") link.textContent = t("signIn");
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
            <a class="btn btn-primary" href="${productsUrl}${productsUrl.includes("?") ? "&" : "?"}category=${encodeURIComponent(slide.category)}">${category}</a>
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
  setText(".newsletter h2", t("newsletterTitle"));
  setText(".newsletter p", t("newsletterText"));
  const newsletterInput = document.querySelector(".newsletter input");
  if (newsletterInput) newsletterInput.placeholder = t("emailPlaceholder");
  setText(".newsletter button", t("subscribe"));
  applyFooterTranslations();
  setText(".floating-contact", t("chat"));
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

function applyFooterTranslations() {
  const footerCols = document.querySelectorAll(".footer-grid > div");
  if (footerCols[0]) {
    setTextFromNode(footerCols[0], "p", t("footerDescription"));
  }
  if (footerCols[1]) {
    setTextFromNode(footerCols[1], "h3", t("footerProducts"));
  }
  if (footerCols[2]) {
    setTextFromNode(footerCols[2], "h3", t("footerSupport"));
    footerCols[2].querySelectorAll("a").forEach((link) => {
      const href = link.getAttribute("href") || "";
      if (href === "contact.html") link.textContent = t("requestQuote");
      if (href === "account.html") link.textContent = t("orderStatus");
      if (href === "#") {
        if (/Shipping|运输|الشحن/.test(link.textContent)) link.textContent = t("shippingLink");
        else if (/Returns|退换货|المرتجعات/.test(link.textContent)) link.textContent = t("returnsLink");
        else link.textContent = t("faq");
      }
    });
  }
  if (footerCols[3]) {
    setTextFromNode(footerCols[3], "h3", t("footerCompany"));
    footerCols[3].querySelectorAll("a").forEach((link) => {
      const href = link.getAttribute("href") || "";
      if (href === "about.html") link.textContent = t("about");
      if (href === "products.html") link.textContent = t("allProducts");
      if (href === "#") {
        if (/Blog|博客|المدونة/.test(link.textContent)) link.textContent = t("blog");
        else if (/Privacy|隐私|الخصوصية/.test(link.textContent)) link.textContent = t("privacy");
        else link.textContent = t("terms");
      }
    });
  }
}

function updateCommonLinks() {
  document.querySelectorAll(".category-nav a").forEach((link) => {
    const href = link.getAttribute("href") || "";
    if (href === "index.html") link.textContent = t("home");
    const category = categoryFromHref(href);
    if (category) link.textContent = categoryLabel(category);
    if (href === "#new-arrivals") link.textContent = t("newArrivals");
    if (href === "contact.html") link.textContent = t("contact");
    if (href === "about.html") link.textContent = t("about");
  });
  document.querySelectorAll("a").forEach((link) => {
    const href = link.getAttribute("href") || "";
    const category = categoryFromHref(href);
    if (category) link.textContent = categoryLabel(category);
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
  if (!match) return "";
  const value = decodeURIComponent(match[1]);
  return CATEGORY_CONFIG.some((item) => item.name === value) ? value : "";
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
  renderCategories();
  renderProductGrids();
  renderCatalog();
  renderDetail();
  updateQuoteCount();
}

function bindActions() {
  document.addEventListener("change", (event) => {
    if (event.target.matches("[data-filter-group], [data-sort]")) renderCatalog();
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
    if (quick) openQuickView(quick.dataset.quickView);
    if (add) addToQuote(add.dataset.addQuote);
    if (closeModal) document.querySelector(".quick-view")?.classList.remove("is-open");
    if (closeQuote) document.querySelector(".quote-drawer")?.classList.remove("is-open");
    if (langToggle) langToggle.closest(".language-select").classList.toggle("is-open");
    if (lang) {
      localStorage.setItem("auroraLang", lang.dataset.lang);
      const url = new URL(window.location.href);
      url.searchParams.set("lang", lang.dataset.lang);
      window.history.replaceState({}, "", url);
      syncLanguageSwitcherLabel();
      lang.closest(".language-select").classList.remove("is-open");
      rerenderDynamicContent();
    }
    if (thumb) {
      const main = document.querySelector(".gallery-main img");
      if (main) main.src = thumb.dataset.thumb;
    }
    if (clear) {
      document.querySelectorAll("[data-filter-group]").forEach((input) => { input.checked = false; });
      renderCatalog();
    }
    if (heroPrev) moveHeroSlide(-1);
    if (heroNext) moveHeroSlide(1);
    if (heroDot) setHeroSlide(Number(heroDot.dataset.heroDot));
  });
}

function bindForms() {
  document.querySelectorAll("[data-demo-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      alert(form.dataset.success || "Thank you. Our sales team will contact you within 24 hours.");
    });
  });
  const menu = document.querySelector("[data-mobile-menu]");
  const nav = document.querySelector(".category-nav");
  if (menu && nav) menu.addEventListener("click", () => nav.classList.toggle("is-open"));
}

function bindHeroSwipe() {
  const carousel = document.querySelector("[data-hero-carousel]");
  if (!carousel) return;
  let startX = 0;
  carousel.addEventListener("pointerdown", (event) => {
    startX = event.clientX;
  });
  carousel.addEventListener("pointerup", (event) => {
    const diff = event.clientX - startX;
    if (Math.abs(diff) < 60) return;
    moveHeroSlide(diff > 0 ? -1 : 1);
  });
}

insertLanguageSwitcher();
rerenderDynamicContent();
bindTabs();
bindActions();
bindForms();
bindHeroSwipe();
