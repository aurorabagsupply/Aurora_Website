const CATEGORY_CONFIG = [
  { name: "Bag", count: 30, prefix: "BAG", moq: 100 },
  { name: "Hardware", count: 20, prefix: "HDW", moq: 500 },
  { name: "Leather", count: 20, prefix: "LTH", moq: 50 },
  { name: "Zipper", count: 20, prefix: "ZIP", moq: 1000 },
  { name: "Accessories", count: 20, prefix: "ACC", moq: 300 },
  { name: "Tools", count: 20, prefix: "TLS", moq: 50 },
];

const HERO_SLIDES = [
  {
    category: "Bag",
    image: "assets/hero/Bag.png",
    eyebrow: "EXQUISITE CRAFTSMANSHIP",
    title: "PREMIUM BAGS",
    subtitle: "ELEGANT · PRACTICAL · CUSTOM",
    text: "Designed for sourcing teams, brand projects and sample development.",
    specs: ["Structured forms", "OEM ready", "Material matching", "Export packing"],
  },
  {
    category: "Hardware",
    image: "assets/hero/Hardware.png",
    eyebrow: "BEYOND DESIGN",
    title: "BAG HARDWARE",
    subtitle: "DURABLE · POLISHED · PRECISE",
    text: "Locks, rings, hooks and metal parts developed for long-lasting use.",
    specs: ["Strong alloy", "Smooth finish", "Custom plating", "Stable reorder"],
  },
  {
    category: "Leather",
    image: "assets/hero/Leather.png",
    eyebrow: "MATERIAL SELECTION",
    title: "LEATHER MATERIALS",
    subtitle: "TEXTURED · FLEXIBLE · REFINED",
    text: "Leather and leather-like materials for bags, straps and panels.",
    specs: ["Rich texture", "Color options", "Cutting support", "Sample rolls"],
  },
  {
    category: "Zipper",
    image: "assets/hero/Zipper.png",
    eyebrow: "EXQUISITE CRAFTSMANSHIP",
    title: "PREMIUM ZIPPERS",
    subtitle: "SMOOTH · DURABLE · STYLISH",
    text: "Designed to elevate your bags and accessories.",
    specs: ["High quality", "Smooth performance", "Multiple styles", "Custom solutions"],
  },
  {
    category: "Accessories",
    image: "assets/hero/Accessories.png",
    eyebrow: "DETAILS THAT WORK",
    title: "BAG ACCESSORIES",
    subtitle: "FUNCTIONAL · DECORATIVE · READY",
    text: "Small components that complete straps, bags and leather goods.",
    specs: ["Design details", "Easy sourcing", "Mixed materials", "Quote support"],
  },
  {
    category: "Tools",
    image: "assets/hero/Tools.png",
    eyebrow: "WORKSHOP SUPPORT",
    title: "LEATHER TOOLS",
    subtitle: "ACCURATE · RELIABLE · HANDY",
    text: "Tools for cutting, punching, stitching, setting and repair work.",
    specs: ["Workshop grade", "Clean handling", "Production use", "Sample support"],
  },
];

const HERO_SLIDE_COPY = {
  zh: {
    Bag: {
      eyebrow: "精致工艺",
      title: "高端箱包",
      subtitle: "优雅 / 实用 / 可定制",
      text: "面向采购团队、品牌项目和样品开发的箱包供应方案。",
      specs: ["立体包型", "支持 OEM", "材质匹配", "出口包装"],
    },
    Hardware: {
      eyebrow: "超越设计",
      title: "箱包五金",
      subtitle: "耐用 / 精细 / 准确",
      text: "锁扣、圆环、挂钩和金属配件，适合长期稳定使用。",
      specs: ["高强合金", "顺滑表面", "定制电镀", "稳定返单"],
    },
    Leather: {
      eyebrow: "材质精选",
      title: "皮革材料",
      subtitle: "有质感 / 柔韧 / 精致",
      text: "适用于包身、肩带和面板的皮革及类皮革材料。",
      specs: ["纹理丰富", "颜色可选", "裁切支持", "样品卷料"],
    },
    Zipper: {
      eyebrow: "精致工艺",
      title: "高端拉链",
      subtitle: "顺滑 / 耐用 / 美观",
      text: "提升箱包和配件质感的拉链产品。",
      specs: ["品质稳定", "拉合顺滑", "款式多样", "支持定制"],
    },
    Accessories: {
      eyebrow: "细节成就产品",
      title: "箱包配件",
      subtitle: "功能性 / 装饰性 / 可供货",
      text: "完善肩带、箱包和皮具产品的小型配件。",
      specs: ["设计细节", "采购方便", "多材质组合", "询价支持"],
    },
    Tools: {
      eyebrow: "工坊支持",
      title: "皮具工具",
      subtitle: "准确 / 可靠 / 顺手",
      text: "用于裁切、打孔、缝制、安装和维修的工具。",
      specs: ["工坊级别", "操作干净", "生产可用", "样品支持"],
    },
  },
  ru: {
    Bag: {
      eyebrow: "ТОЧНОЕ ИЗГОТОВЛЕНИЕ",
      title: "ПРЕМИАЛЬНЫЕ СУМКИ",
      subtitle: "ЭЛЕГАНТНО / ПРАКТИЧНО / НА ЗАКАЗ",
      text: "Решения для закупочных команд, брендов и разработки образцов.",
      specs: ["Форма сумки", "OEM готово", "Подбор материалов", "Экспортная упаковка"],
    },
    Hardware: {
      eyebrow: "БОЛЬШЕ ЧЕМ ДИЗАЙН",
      title: "ФУРНИТУРА ДЛЯ СУМОК",
      subtitle: "ПРОЧНО / ГЛАДКО / ТОЧНО",
      text: "Замки, кольца, крючки и металлические детали для долгого использования.",
      specs: ["Прочный сплав", "Гладкая отделка", "Покрытие на заказ", "Стабильный повтор"],
    },
    Leather: {
      eyebrow: "ВЫБОР МАТЕРИАЛА",
      title: "КОЖАНЫЕ МАТЕРИАЛЫ",
      subtitle: "ФАКТУРНО / ГИБКО / АККУРАТНО",
      text: "Кожа и похожие материалы для сумок, ремней и панелей.",
      specs: ["Богатая фактура", "Выбор цвета", "Поддержка раскроя", "Рулоны образцов"],
    },
    Zipper: {
      eyebrow: "ТОЧНОЕ ИЗГОТОВЛЕНИЕ",
      title: "ПРЕМИАЛЬНЫЕ МОЛНИИ",
      subtitle: "ПЛАВНО / ПРОЧНО / СТИЛЬНО",
      text: "Молнии для повышения качества сумок и аксессуаров.",
      specs: ["Высокое качество", "Плавная работа", "Много стилей", "Решения на заказ"],
    },
    Accessories: {
      eyebrow: "ДЕТАЛИ, КОТОРЫЕ РАБОТАЮТ",
      title: "АКСЕССУАРЫ ДЛЯ СУМОК",
      subtitle: "ФУНКЦИЯ / ДЕКОР / ГОТОВО",
      text: "Малые компоненты для ремней, сумок и кожгалантереи.",
      specs: ["Детали дизайна", "Легкая закупка", "Разные материалы", "Поддержка цены"],
    },
    Tools: {
      eyebrow: "ПОДДЕРЖКА МАСТЕРСКОЙ",
      title: "ИНСТРУМЕНТЫ ДЛЯ КОЖИ",
      subtitle: "ТОЧНО / НАДЕЖНО / УДОБНО",
      text: "Инструменты для резки, пробивки, шитья, установки и ремонта.",
      specs: ["Уровень мастерской", "Чистая работа", "Для производства", "Образцы"],
    },
  },
  es: {
    Bag: { eyebrow: "ARTESANIA CUIDADA", title: "BOLSOS PREMIUM", subtitle: "ELEGANTE / PRACTICO / PERSONALIZADO", text: "Soluciones para compras, proyectos de marca y desarrollo de muestras.", specs: ["Formas estructuradas", "Listo para OEM", "Material a juego", "Embalaje export"] },
    Hardware: { eyebrow: "MAS ALLA DEL DISENO", title: "HERRAJE PARA BOLSOS", subtitle: "DURADERO / PULIDO / PRECISO", text: "Cierres, aros, ganchos y piezas metalicas para uso duradero.", specs: ["Aleacion fuerte", "Acabado suave", "Bano personalizado", "Reposicion estable"] },
    Leather: { eyebrow: "SELECCION DE MATERIAL", title: "MATERIALES DE CUERO", subtitle: "TEXTURA / FLEXIBLE / REFINADO", text: "Cuero y materiales similares para bolsos, correas y paneles.", specs: ["Textura rica", "Opciones de color", "Soporte de corte", "Rollos muestra"] },
    Zipper: { eyebrow: "ARTESANIA CUIDADA", title: "CREMALLERAS PREMIUM", subtitle: "SUAVE / DURADERO / ESTILO", text: "Cremalleras para elevar bolsos y accesorios.", specs: ["Alta calidad", "Uso suave", "Varios estilos", "Soluciones custom"] },
    Accessories: { eyebrow: "DETALLES QUE FUNCIONAN", title: "ACCESORIOS PARA BOLSOS", subtitle: "FUNCIONAL / DECORATIVO / LISTO", text: "Componentes pequenos para correas, bolsos y articulos de cuero.", specs: ["Detalle de diseno", "Compra facil", "Materiales mixtos", "Soporte de cotizacion"] },
    Tools: { eyebrow: "SOPORTE DE TALLER", title: "HERRAMIENTAS DE CUERO", subtitle: "PRECISO / FIABLE / PRACTICO", text: "Herramientas para cortar, perforar, coser, instalar y reparar.", specs: ["Grado taller", "Manejo limpio", "Uso produccion", "Soporte muestra"] },
  },
  fr: {
    Bag: { eyebrow: "SAVOIR-FAIRE SOIGNE", title: "SACS PREMIUM", subtitle: "ELEGANT / PRATIQUE / PERSONNALISE", text: "Solutions pour achats, projets de marque et developpement d'echantillons.", specs: ["Formes structurees", "Pret pour OEM", "Matiere assortie", "Emballage export"] },
    Hardware: { eyebrow: "AU-DELA DU DESIGN", title: "QUINCAILLERIE DE SAC", subtitle: "DURABLE / POLI / PRECIS", text: "Fermoirs, anneaux, crochets et pieces metal pour un usage durable.", specs: ["Alliage solide", "Finition lisse", "Placage sur mesure", "Reassort stable"] },
    Leather: { eyebrow: "SELECTION MATIERE", title: "MATIERES CUIR", subtitle: "TEXTURE / SOUPLE / RAFFINE", text: "Cuir et matieres similaires pour sacs, sangles et panneaux.", specs: ["Texture riche", "Choix couleurs", "Aide decoupe", "Rouleaux echantillon"] },
    Zipper: { eyebrow: "SAVOIR-FAIRE SOIGNE", title: "FERMETURES PREMIUM", subtitle: "FLUIDE / DURABLE / STYLE", text: "Fermetures pour valoriser sacs et accessoires.", specs: ["Haute qualite", "Glisse fluide", "Styles multiples", "Solutions custom"] },
    Accessories: { eyebrow: "DETAILS UTILES", title: "ACCESSOIRES DE SAC", subtitle: "FONCTION / DECOR / DISPONIBLE", text: "Petits composants pour sangles, sacs et articles cuir.", specs: ["Details design", "Achat facile", "Matieres mixtes", "Aide devis"] },
    Tools: { eyebrow: "SUPPORT ATELIER", title: "OUTILS POUR CUIR", subtitle: "PRECIS / FIABLE / PRATIQUE", text: "Outils pour couper, perforer, coudre, poser et reparer.", specs: ["Niveau atelier", "Manipulation propre", "Usage production", "Support echantillon"] },
  },
  de: {
    Bag: { eyebrow: "FEINE VERARBEITUNG", title: "PREMIUM TASCHEN", subtitle: "ELEGANT / PRAKTISCH / CUSTOM", text: "Losungen fur Einkaufsteams, Markenprojekte und Musterentwicklung.", specs: ["Strukturformen", "OEM bereit", "Materialabgleich", "Exportverpackung"] },
    Hardware: { eyebrow: "MEHR ALS DESIGN", title: "TASCHENBESCHLAGE", subtitle: "HALTBAR / POLIERT / PRAZISE", text: "Schlosser, Ringe, Haken und Metallteile fur lange Nutzung.", specs: ["Starke Legierung", "Glatte Oberflache", "Custom Beschichtung", "Stabile Nachorder"] },
    Leather: { eyebrow: "MATERIALAUSWAHL", title: "LEDERMATERIALIEN", subtitle: "STRUKTURIERT / FLEXIBEL / FEIN", text: "Leder und lederahnliche Materialien fur Taschen, Riemen und Panels.", specs: ["Reiche Struktur", "Farboptionen", "Schneidehilfe", "Musterrollen"] },
    Zipper: { eyebrow: "FEINE VERARBEITUNG", title: "PREMIUM REISSVERSCHLUSSE", subtitle: "GLATT / HALTBAR / STILVOLL", text: "Reissverschlusse zur Aufwertung von Taschen und Accessoires.", specs: ["Hohe Qualitat", "Glatter Lauf", "Viele Stile", "Custom Losungen"] },
    Accessories: { eyebrow: "DETAILS, DIE FUNKTIONIEREN", title: "TASCHENZUBEHOR", subtitle: "FUNKTION / DEKOR / BEREIT", text: "Kleine Komponenten fur Riemen, Taschen und Lederwaren.", specs: ["Design Details", "Einfacher Einkauf", "Materialmix", "Angebotshilfe"] },
    Tools: { eyebrow: "WERKSTATT SUPPORT", title: "LEDERWERKZEUGE", subtitle: "PRAZISE / ZUVERLASSIG / HANDLICH", text: "Werkzeuge zum Schneiden, Stanzen, Nahen, Setzen und Reparieren.", specs: ["Werkstattqualitat", "Saubere Nutzung", "Produktionstauglich", "Mustersupport"] },
  },
  it: {
    Bag: { eyebrow: "ARTIGIANALITA CURATA", title: "BORSE PREMIUM", subtitle: "ELEGANTE / PRATICO / CUSTOM", text: "Soluzioni per team acquisti, progetti brand e sviluppo campioni.", specs: ["Forme strutturate", "Pronto OEM", "Materiali abbinati", "Imballo export"] },
    Hardware: { eyebrow: "OLTRE IL DESIGN", title: "ACCESSORI METALLICI", subtitle: "DUREVOLE / LUCIDO / PRECISO", text: "Chiusure, anelli, ganci e parti metalliche per uso duraturo.", specs: ["Lega forte", "Finitura liscia", "Placcatura custom", "Riordino stabile"] },
    Leather: { eyebrow: "SELEZIONE MATERIALI", title: "MATERIALI IN PELLE", subtitle: "TEXTURE / FLESSIBILE / RAFFINATO", text: "Pelle e materiali simili per borse, tracolle e pannelli.", specs: ["Texture ricca", "Colori disponibili", "Supporto taglio", "Rotoli campione"] },
    Zipper: { eyebrow: "ARTIGIANALITA CURATA", title: "CERNIERE PREMIUM", subtitle: "SCORREVOLE / DUREVOLE / STILE", text: "Cerniere per valorizzare borse e accessori.", specs: ["Alta qualita", "Scorrimento fluido", "Stili multipli", "Soluzioni custom"] },
    Accessories: { eyebrow: "DETTAGLI FUNZIONALI", title: "ACCESSORI PER BORSE", subtitle: "FUNZIONALE / DECORATIVO / PRONTO", text: "Piccoli componenti per tracolle, borse e pelletteria.", specs: ["Dettagli design", "Acquisto facile", "Materiali misti", "Supporto preventivo"] },
    Tools: { eyebrow: "SUPPORTO LABORATORIO", title: "UTENSILI PER PELLE", subtitle: "PRECISO / AFFIDABILE / COMODO", text: "Utensili per taglio, foratura, cucitura, fissaggio e riparazione.", specs: ["Grado laboratorio", "Uso pulito", "Uso produzione", "Supporto campioni"] },
  },
  ar: {
    Bag: { eyebrow: "حرفية دقيقة", title: "حقائب فاخرة", subtitle: "انيقة / عملية / مخصصة", text: "حلول لفرق الشراء ومشاريع العلامات وتطوير العينات.", specs: ["اشكال منظمة", "جاهز OEM", "مطابقة المواد", "تغليف تصدير"] },
    Hardware: { eyebrow: "ما بعد التصميم", title: "اكسسوارات معدنية للحقائب", subtitle: "متين / مصقول / دقيق", text: "اقفال وحلقات وخطافات وقطع معدنية للاستخدام الطويل.", specs: ["سبيكة قوية", "تشطيب ناعم", "طلاء مخصص", "اعادة طلب ثابتة"] },
    Leather: { eyebrow: "اختيار المواد", title: "مواد جلدية", subtitle: "ملمس / مرن / راق", text: "جلد ومواد شبيهة بالجلد للحقائب والاحزمة والالواح.", specs: ["ملمس غني", "خيارات الوان", "دعم القص", "لفائف عينات"] },
    Zipper: { eyebrow: "حرفية دقيقة", title: "سحابات فاخرة", subtitle: "سلس / متين / انيق", text: "سحابات ترفع جودة الحقائب والاكسسوارات.", specs: ["جودة عالية", "اداء سلس", "انماط متعددة", "حلول مخصصة"] },
    Accessories: { eyebrow: "تفاصيل عملية", title: "اكسسوارات الحقائب", subtitle: "وظيفي / زخرفي / جاهز", text: "مكونات صغيرة تكمل الاحزمة والحقائب والمنتجات الجلدية.", specs: ["تفاصيل تصميم", "توريد سهل", "مواد متنوعة", "دعم عرض السعر"] },
    Tools: { eyebrow: "دعم الورشة", title: "ادوات الجلد", subtitle: "دقيق / موثوق / عملي", text: "ادوات للقص والثقب والخياطة والتركيب والاصلاح.", specs: ["درجة ورشة", "استخدام نظيف", "للانتاج", "دعم عينات"] },
  },
};

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

const I18N = {
  en: {
    topLine: "Aurora Bag Supply | Professional Accessories, Bags, Hardware, Leather, Tools & Zippers",
    globalSupport: "Global B2B sourcing support",
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
};

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
  const pack = CATEGORY_TEXT[currentLang()] || CATEGORY_TEXT.en;
  if (pack[category]) return pack[category];
  const generic = GENERIC_PRODUCT_TEXT[currentLang()];
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
  const badge = product.tags[0] ? `<span class="badge">${product.tags[0]}</span>` : "";
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

let heroSlideIndex = 0;
let heroStartX = 0;

function renderHeroCarousel() {
  const track = document.querySelector("[data-hero-track]");
  const dots = document.querySelector("[data-hero-dots]");
  if (!track || !dots) return;
  track.innerHTML = HERO_SLIDES.map((baseSlide, index) => {
    const slide = localizedHeroSlide(baseSlide);
    return `
    <article class="hero-slide${index === heroSlideIndex ? " is-active" : ""}" style="background-image: url('${encodeURI(slide.image)}')">
      <div class="hero-slide__content">
        <p class="hero-slide__eyebrow">${slide.eyebrow}</p>
        <h1>${slide.title}</h1>
        <p class="hero-slide__subtitle">${slide.subtitle}</p>
        <span class="hero-slide__rule"></span>
        <p class="hero-slide__text">${slide.text}</p>
        <div class="hero-slide__icons">
          ${slide.specs.map((item) => `<span><i></i>${item}</span>`).join("")}
        </div>
        <a class="hero-slide__button" href="products.html?category=${encodeURIComponent(slide.category)}">${t("shopProducts")}</a>
      </div>
    </article>
  `;
  }).join("");
  dots.innerHTML = HERO_SLIDES.map((slide, index) => `<button type="button" class="${index === heroSlideIndex ? "is-active" : ""}" data-hero-dot="${index}" aria-label="${slide.category}"></button>`).join("");
}

function localizedHeroSlide(slide) {
  const localized = HERO_SLIDE_COPY[currentLang()]?.[slide.category];
  return localized ? { ...slide, ...localized } : slide;
}

function setHeroSlide(index) {
  const total = HERO_SLIDES.length;
  heroSlideIndex = (index + total) % total;
  document.querySelectorAll(".hero-slide").forEach((slide, itemIndex) => {
    slide.classList.toggle("is-active", itemIndex === heroSlideIndex);
  });
  document.querySelectorAll("[data-hero-dot]").forEach((dot, itemIndex) => {
    dot.classList.toggle("is-active", itemIndex === heroSlideIndex);
  });
}

function bindHeroCarousel() {
  const hero = document.querySelector("[data-hero-carousel]");
  if (!hero) return;
  document.querySelector("[data-hero-prev]")?.addEventListener("click", () => setHeroSlide(heroSlideIndex - 1));
  document.querySelector("[data-hero-next]")?.addEventListener("click", () => setHeroSlide(heroSlideIndex + 1));
  hero.addEventListener("click", (event) => {
    const dot = event.target.closest("[data-hero-dot]");
    if (dot) setHeroSlide(Number(dot.dataset.heroDot));
  });
  hero.addEventListener("pointerdown", (event) => {
    heroStartX = event.clientX;
  });
  hero.addEventListener("pointerup", (event) => {
    const delta = event.clientX - heroStartX;
    if (Math.abs(delta) < 50) return;
    setHeroSlide(delta > 0 ? heroSlideIndex - 1 : heroSlideIndex + 1);
  });
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

function applyLanguageText() {
  const pack = langPack();
  document.documentElement.lang = currentLang();
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

function applyStaticPageText() {
  const isCatalogPage = Boolean(document.querySelector("[data-catalog-grid]"));
  if (isCatalogPage) {
    forceCatalogTitleLanguage();
  }
  setText(".brand__tagline", t("brandTagline"));
  setText(".hero-copy .kicker", t("heroKicker"));
  setText(".hero-copy h1", t("heroTitle"));
  setText(".hero-copy > p:not(.kicker)", t("heroText"));
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
  renderHeroCarousel();
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
    if (quick) openQuickView(quick.dataset.quickView);
    if (add) addToQuote(add.dataset.addQuote);
    if (closeModal) document.querySelector(".quick-view")?.classList.remove("is-open");
    if (closeQuote) document.querySelector(".quote-drawer")?.classList.remove("is-open");
    if (langToggle) langToggle.closest(".language-select").classList.toggle("is-open");
    if (lang) {
      localStorage.setItem("auroraLang", lang.dataset.lang);
      document.querySelector(".language-select__button").textContent = lang.textContent;
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

insertLanguageSwitcher();
renderHeroCarousel();
rerenderDynamicContent();
bindTabs();
bindHeroCarousel();
bindActions();
bindForms();
