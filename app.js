const STORAGE_KEY = "campus-food-map-favorites";

const schools = [
  { id: "all", name: "整个大学城", shortName: "全域", color: "#bfa6f6", x: 50, y: 50 },
  { id: "north", name: "北辰大学", shortName: "北辰", color: "#bfa6f6", x: 26, y: 24 },
  { id: "science", name: "云川理工大学", shortName: "云理", color: "#7bc47f", x: 68, y: 30 },
  { id: "arts", name: "溪谷师范大学", shortName: "溪师", color: "#ff9f5a", x: 36, y: 70 },
  { id: "medical", name: "春和医学院", shortName: "春医", color: "#ff6e5b", x: 74, y: 66 }
];

const restaurants = [
  {
    id: "r01",
    name: "东门小火锅",
    schoolIds: ["north", "science"],
    category: "火锅",
    tags: ["热乎", "学生党", "夜宵"],
    scenarioTags: ["dorm", "night"],
    rating: 4.8,
    price: 36,
    walkingMinutes: 8,
    distanceText: "距北辰大学东门 580m",
    isOpen: true,
    isFavorite: false,
    cover: "双人锅底和自选配菜都很稳",
    address: "大学城东街 18 号",
    description: "适合宿舍小聚的高性价比火锅店，晚自习后去也来得及。",
    featuredReason: "晚上 10 点后依然稳定出餐，四人拼桌压力小。",
    dishes: [
      { name: "招牌牛肉卷", price: 24, tag: "点单率高" },
      { name: "手工虾滑", price: 28, tag: "口碑稳" },
      { name: "番茄锅底", price: 18, tag: "新手友好" }
    ],
    reviews: [
      { userName: "小陈", content: "人均很稳，锅底不敷衍，宿舍聚餐不会翻车。", tags: ["聚餐", "性价比"], score: 4.8 },
      { userName: "阿哲", content: "9 点以后去等位也不算夸张，适合考完试冲一顿。", tags: ["夜宵", "营业晚"], score: 4.7 }
    ],
    x: 30,
    y: 27
  },
  {
    id: "r02",
    name: "图书馆旁麻辣烫",
    schoolIds: ["north"],
    category: "麻辣烫",
    tags: ["一人食", "快吃", "预算友好"],
    scenarioTags: ["solo", "budget", "walk"],
    rating: 4.6,
    price: 19,
    walkingMinutes: 6,
    distanceText: "距北辰大学图书馆 420m",
    isOpen: true,
    isFavorite: false,
    cover: "午饭十分钟解决，汤底清爽不腻",
    address: "书香路 22 号",
    description: "适合赶课和复习间隙快速吃一顿的麻辣烫小馆。",
    featuredReason: "单人位多，6 分钟步行可达，20 元内就能吃饱。",
    dishes: [
      { name: "番茄骨汤底", price: 6, tag: "轻负担" },
      { name: "肥牛拼菌菇", price: 12, tag: "经典组合" },
      { name: "红糖糍粑", price: 8, tag: "加分项" }
    ],
    reviews: [
      { userName: "阿福", content: "课间来一碗最省心，出餐很快。", tags: ["快", "一人食"], score: 4.7 },
      { userName: "木木", content: "菜量实在，宿舍群里经常拼单。", tags: ["便宜", "常吃"], score: 4.6 }
    ],
    x: 22,
    y: 20
  },
  {
    id: "r03",
    name: "晴窗咖啡实验室",
    schoolIds: ["science", "north"],
    category: "咖啡",
    tags: ["安静", "自习", "拍照"],
    scenarioTags: ["date", "walk"],
    rating: 4.9,
    price: 28,
    walkingMinutes: 9,
    distanceText: "距云川理工主楼 690m",
    isOpen: true,
    isFavorite: false,
    cover: "明亮落地窗和稳定手冲，是周末路线常驻点",
    address: "创客大道 6 号",
    description: "适合约会、轻自习和周末慢节奏聊天的咖啡馆。",
    featuredReason: "窗边位好看，甜品稳定，适合下午 2 点到 5 点停留。",
    dishes: [
      { name: "冷萃拿铁", price: 22, tag: "招牌饮品" },
      { name: "巴斯克蛋糕", price: 18, tag: "拍照友好" },
      { name: "燕麦拿铁", price: 24, tag: "轻负担" }
    ],
    reviews: [
      { userName: "安安", content: "窗边光线很好，适合约会也适合慢慢写作业。", tags: ["安静", "拍照"], score: 4.9 },
      { userName: "知行", content: "不会太吵，甜品比很多连锁店更稳。", tags: ["甜品", "舒服"], score: 4.8 }
    ],
    x: 62,
    y: 26
  },
  {
    id: "r04",
    name: "后街炸鸡站",
    schoolIds: ["science"],
    category: "炸鸡",
    tags: ["聚会", "外卖", "看球"],
    scenarioTags: ["dorm", "night"],
    rating: 4.5,
    price: 26,
    walkingMinutes: 11,
    distanceText: "距云川理工南门 820m",
    isOpen: true,
    isFavorite: false,
    cover: "适合宿舍看球和深夜加餐的高热量选手",
    address: "青年里 3 号",
    description: "量大酱多，适合多人分享，宿舍局和看比赛都很搭。",
    featuredReason: "双拼桶最受欢迎，晚上营业到 23:30。",
    dishes: [
      { name: "蒜香双拼桶", price: 48, tag: "多人推荐" },
      { name: "年糕芝士条", price: 16, tag: "下酒搭子" },
      { name: "蜂蜜黄油鸡翅", price: 22, tag: "回头率高" }
    ],
    reviews: [
      { userName: "阿林", content: "宿舍一起点最划算，味道比想象中稳。", tags: ["宿舍", "大份"], score: 4.5 },
      { userName: "阿俊", content: "夜里嘴馋会想起它，送到寝室也快。", tags: ["夜宵", "外卖"], score: 4.4 }
    ],
    x: 72,
    y: 38
  },
  {
    id: "r05",
    name: "溪谷焖面馆",
    schoolIds: ["arts"],
    category: "面馆",
    tags: ["一人食", "暖胃", "课间"],
    scenarioTags: ["solo", "walk"],
    rating: 4.7,
    price: 17,
    walkingMinutes: 5,
    distanceText: "距溪谷师范西门 360m",
    isOpen: true,
    isFavorite: false,
    cover: "5 分钟步行直达，适合课间空档解决午饭",
    address: "溪谷路 47 号",
    description: "小份和加菜选项丰富，一人食友好。",
    featuredReason: "离教学楼近，不用纠结，焖面和汤都很稳。",
    dishes: [
      { name: "番茄牛腩焖面", price: 17, tag: "经典款" },
      { name: "雪菜肉丝面", price: 15, tag: "常点款" },
      { name: "卤蛋双拼", price: 6, tag: "补能量" }
    ],
    reviews: [
      { userName: "小羽", content: "老师拖堂也来得及，离西门真的近。", tags: ["步行近", "快"], score: 4.8 },
      { userName: "阿澄", content: "17 块钱吃得很舒服，冬天尤其想来。", tags: ["暖胃", "便宜"], score: 4.7 }
    ],
    x: 34,
    y: 66
  },
  {
    id: "r06",
    name: "青柠越南粉",
    schoolIds: ["arts", "medical"],
    category: "东南亚",
    tags: ["清爽", "约会", "拍照"],
    scenarioTags: ["date", "walk"],
    rating: 4.8,
    price: 32,
    walkingMinutes: 12,
    distanceText: "距溪谷师范南门 880m",
    isOpen: true,
    isFavorite: false,
    cover: "清爽汤头和明亮装潢，适合周末换换口味",
    address: "湖畔商街 9 号",
    description: "风格清新，适合不想吃重口时来一碗河粉或春卷。",
    featuredReason: "店里明亮好拍，适合两人慢慢吃。",
    dishes: [
      { name: "牛肉河粉", price: 29, tag: "稳妥之选" },
      { name: "鲜虾春卷", price: 18, tag: "高颜值" },
      { name: "青柠苏打", price: 12, tag: "夏天必点" }
    ],
    reviews: [
      { userName: "知南", content: "比想象中更清爽，适合不想吃太重的时候。", tags: ["清爽", "约会"], score: 4.8 },
      { userName: "阿柚", content: "店里很好拍照，周末会带朋友来。", tags: ["拍照", "舒服"], score: 4.7 }
    ],
    x: 48,
    y: 74
  },
  {
    id: "r07",
    name: "春和轻食碗",
    schoolIds: ["medical"],
    category: "轻食",
    tags: ["低负担", "午餐", "一个人"],
    scenarioTags: ["solo", "budget"],
    rating: 4.4,
    price: 23,
    walkingMinutes: 7,
    distanceText: "距春和医学院东侧 500m",
    isOpen: true,
    isFavorite: false,
    cover: "给实习和赶课同学准备的快手轻食午餐",
    address: "医学院路 11 号",
    description: "蔬菜和蛋白搭配合理，适合想吃得清爽的工作日午餐。",
    featuredReason: "打包快，午高峰队伍也比较可控。",
    dishes: [
      { name: "鸡胸牛油果碗", price: 24, tag: "高蛋白" },
      { name: "黑椒牛肉碗", price: 26, tag: "饱腹感强" },
      { name: "无糖酸奶杯", price: 10, tag: "搭配推荐" }
    ],
    reviews: [
      { userName: "云朵", content: "实习前打包很方便，不容易踩雷。", tags: ["打包", "轻食"], score: 4.4 },
      { userName: "大白", content: "比很多轻食店味道更在线。", tags: ["清爽", "稳"], score: 4.3 }
    ],
    x: 78,
    y: 60
  },
  {
    id: "r08",
    name: "深夜烤串站",
    schoolIds: ["medical", "science"],
    category: "烧烤",
    tags: ["夜宵", "朋友局", "重口"],
    scenarioTags: ["night", "dorm"],
    rating: 4.7,
    price: 39,
    walkingMinutes: 13,
    distanceText: "距春和医学院北门 960m",
    isOpen: true,
    isFavorite: false,
    cover: "越晚越热闹，是考完试和聚会常去的烤串摊",
    address: "星河夜市 B 区",
    description: "烤串种类多，营业到凌晨，适合宵夜局。",
    featuredReason: "夜里氛围感强，三五个人点串最合适。",
    dishes: [
      { name: "招牌五花肉串", price: 4, tag: "必点" },
      { name: "烤鸡软骨", price: 18, tag: "下酒搭子" },
      { name: "蒜蓉烤茄子", price: 14, tag: "桌桌必点" }
    ],
    reviews: [
      { userName: "老白", content: "凌晨还热闹，适合和朋友聊到散场。", tags: ["夜宵", "热闹"], score: 4.8 },
      { userName: "初七", content: "烤串火候稳，价格也不离谱。", tags: ["性价比", "烧烤"], score: 4.6 }
    ],
    x: 82,
    y: 48
  },
  {
    id: "r09",
    name: "月台寿喜锅",
    schoolIds: ["science", "arts"],
    category: "日料",
    tags: ["约会", "聚餐", "环境好"],
    scenarioTags: ["date", "dorm"],
    rating: 4.8,
    price: 69,
    walkingMinutes: 15,
    distanceText: "距云川理工艺术桥 1.1km",
    isOpen: false,
    isFavorite: false,
    cover: "适合想认真吃一顿的时候，环境和出品都够稳",
    address: "樱井街 5 号",
    description: "偏精致路线，适合纪念日、小聚或带朋友见面。",
    featuredReason: "环境安静，双人套餐接受度很高。",
    dishes: [
      { name: "和牛寿喜锅", price: 98, tag: "招牌" },
      { name: "蟹肉玉子烧", price: 28, tag: "口碑好" },
      { name: "抹茶布丁", price: 18, tag: "收尾稳" }
    ],
    reviews: [
      { userName: "海盐", content: "环境确实适合约会，分量也没有看起来那么少。", tags: ["约会", "安静"], score: 4.8 },
      { userName: "若溪", content: "想吃得正式一点时会选这里。", tags: ["品质", "环境"], score: 4.7 }
    ],
    x: 54,
    y: 44
  },
  {
    id: "r10",
    name: "操场边汉堡屋",
    schoolIds: ["north", "arts"],
    category: "西式快餐",
    tags: ["快吃", "朋友局", "外带"],
    scenarioTags: ["solo", "dorm"],
    rating: 4.3,
    price: 24,
    walkingMinutes: 10,
    distanceText: "距北辰大学南操场 710m",
    isOpen: true,
    isFavorite: false,
    cover: "忙的时候最省心，双层堡和薯条能迅速补能量",
    address: "跑道街 2 号",
    description: "外带方便，适合社团活动前后快速解决一餐。",
    featuredReason: "上菜快，座位松弛，朋友一起去不挤。",
    dishes: [
      { name: "双层牛肉堡", price: 22, tag: "饱腹感" },
      { name: "黑椒鸡块", price: 14, tag: "多人分享" },
      { name: "柠檬气泡水", price: 9, tag: "解腻" }
    ],
    reviews: [
      { userName: "阿涛", content: "社团排练前后经常来，真的快。", tags: ["快", "外带"], score: 4.3 },
      { userName: "三金", content: "薯条状态稳定，价格也能接受。", tags: ["快餐", "学生价"], score: 4.2 }
    ],
    x: 28,
    y: 44
  },
  {
    id: "r11",
    name: "九宫格川菜馆",
    schoolIds: ["arts", "medical"],
    category: "川菜",
    tags: ["重口", "聚餐", "下饭"],
    scenarioTags: ["dorm", "night"],
    rating: 4.7,
    price: 42,
    walkingMinutes: 14,
    distanceText: "距春和医学院西门 1km",
    isOpen: true,
    isFavorite: false,
    cover: "适合一群人开吃的热辣川菜馆，米饭永远不够",
    address: "合欢街 35 号",
    description: "适合宿舍聚餐和期末解压，菜量大，口味稳定。",
    featuredReason: "人均控制在 40 左右，点招牌菜不容易踩雷。",
    dishes: [
      { name: "水煮牛肉", price: 42, tag: "下饭王" },
      { name: "干锅花菜", price: 22, tag: "稳妥之选" },
      { name: "冰粉", price: 8, tag: "解辣" }
    ],
    reviews: [
      { userName: "姜姜", content: "适合朋友多的时候，人均很好控制。", tags: ["聚餐", "够味"], score: 4.7 },
      { userName: "小夏", content: "口味偏正，不会只有辣没有香。", tags: ["川菜", "稳"], score: 4.6 }
    ],
    x: 58,
    y: 78
  },
  {
    id: "r12",
    name: "南门砂锅粥",
    schoolIds: ["medical"],
    category: "粥铺",
    tags: ["暖胃", "夜宵", "清淡"],
    scenarioTags: ["night", "solo"],
    rating: 4.5,
    price: 21,
    walkingMinutes: 9,
    distanceText: "距春和医学院南门 650m",
    isOpen: true,
    isFavorite: false,
    cover: "实习后很适合来一锅热粥，清淡但不寡淡",
    address: "杏林巷 7 号",
    description: "夜里想吃点热乎的可以来，单人和双人份都好点。",
    featuredReason: "营业到深夜，适合值班或晚课后的补给。",
    dishes: [
      { name: "鲜虾瘦肉粥", price: 20, tag: "经典" },
      { name: "煎饺拼盘", price: 12, tag: "搭配推荐" },
      { name: "皮蛋滑鸡粥", price: 18, tag: "暖胃" }
    ],
    reviews: [
      { userName: "白月", content: "值完班来一锅很舒服，不会太油。", tags: ["清淡", "夜宵"], score: 4.6 },
      { userName: "阿宁", content: "夜里不想吃太重口就会来这里。", tags: ["暖胃", "轻松"], score: 4.4 }
    ],
    x: 70,
    y: 78
  },
  {
    id: "r13",
    name: "树下韩式拌饭",
    schoolIds: ["north", "arts"],
    category: "韩餐",
    tags: ["一人食", "轻社交", "拍照"],
    scenarioTags: ["solo", "date"],
    rating: 4.6,
    price: 27,
    walkingMinutes: 8,
    distanceText: "距溪谷师范北门 570m",
    isOpen: true,
    isFavorite: false,
    cover: "出餐干净利落，适合一个人也适合两个人简单约饭",
    address: "银杏街 12 号",
    description: "装修清爽，拌饭和年糕都稳，适合轻松聊天。",
    featuredReason: "价格可控，视觉好看，女生组队常点。",
    dishes: [
      { name: "肥牛石锅拌饭", price: 27, tag: "高频点单" },
      { name: "辣炒年糕", price: 19, tag: "分享友好" },
      { name: "海苔紫菜汤", price: 8, tag: "补充热量" }
    ],
    reviews: [
      { userName: "阿梨", content: "一个人吃不会尴尬，环境很舒服。", tags: ["一人食", "干净"], score: 4.6 },
      { userName: "小青", content: "拍照好看，适合和朋友轻松吃。", tags: ["拍照", "聊天"], score: 4.5 }
    ],
    x: 38,
    y: 54
  },
  {
    id: "r14",
    name: "一锅鲜牛肉粉",
    schoolIds: ["science"],
    category: "粉面",
    tags: ["早餐", "午餐", "快吃"],
    scenarioTags: ["solo", "walk", "budget"],
    rating: 4.4,
    price: 16,
    walkingMinutes: 4,
    distanceText: "距云川理工北门 300m",
    isOpen: true,
    isFavorite: false,
    cover: "早八前还能赶上的一碗热粉，4 分钟步行直达",
    address: "科技路 3 号",
    description: "适合早课前后快速补充热量，汤底清爽。",
    featuredReason: "步行 4 分钟，预算压力小，工作日利用率极高。",
    dishes: [
      { name: "鲜牛肉原汤粉", price: 16, tag: "高频早餐" },
      { name: "卤豆腐拼海带", price: 6, tag: "加料友好" },
      { name: "冰豆浆", price: 5, tag: "顺手带走" }
    ],
    reviews: [
      { userName: "阿莫", content: "早八救星，真的离北门很近。", tags: ["早饭", "步行近"], score: 4.5 },
      { userName: "远远", content: "16 块性价比很高，不容易踩雷。", tags: ["便宜", "快"], score: 4.4 }
    ],
    x: 64,
    y: 18
  },
  {
    id: "r15",
    name: "星屿甜品研究所",
    schoolIds: ["science", "medical"],
    category: "甜品",
    tags: ["约会", "下午茶", "拍照"],
    scenarioTags: ["date"],
    rating: 4.8,
    price: 25,
    walkingMinutes: 13,
    distanceText: "距春和医学院中心广场 980m",
    isOpen: true,
    isFavorite: false,
    cover: "适合下午两点到傍晚的甜品暂停键",
    address: "星屿巷 16 号",
    description: "环境柔和，适合和朋友小坐，也适合作为约会路线的甜品站。",
    featuredReason: "提拉米苏和芒果千层稳定，是常见收藏款。",
    dishes: [
      { name: "芒果千层", price: 24, tag: "颜值高" },
      { name: "提拉米苏杯", price: 22, tag: "口碑款" },
      { name: "海盐奶盖茶", price: 16, tag: "搭配稳" }
    ],
    reviews: [
      { userName: "西西", content: "适合下午见面，店里氛围很柔和。", tags: ["下午茶", "约会"], score: 4.8 },
      { userName: "苏苏", content: "蛋糕不会太甜，朋友来访会带去。", tags: ["甜品", "回购"], score: 4.7 }
    ],
    x: 80,
    y: 36
  },
  {
    id: "r16",
    name: "宿舍楼下煲仔饭",
    schoolIds: ["arts", "north"],
    category: "粤式简餐",
    tags: ["一人食", "夜宵", "锅气"],
    scenarioTags: ["solo", "night", "walk"],
    rating: 4.5,
    price: 22,
    walkingMinutes: 7,
    distanceText: "距溪谷师范宿舍区 520m",
    isOpen: true,
    isFavorite: false,
    cover: "锅气足，适合晚上不想跑远的时候来一份",
    address: "宿舍街 14 号",
    description: "煲仔饭和汤都很稳，适合想吃热乎主食的时候。",
    featuredReason: "步行近，夜里也方便，是宿舍党常备安全牌。",
    dishes: [
      { name: "腊味双拼煲仔饭", price: 22, tag: "招牌" },
      { name: "香菇滑鸡饭", price: 24, tag: "不踩雷" },
      { name: "老火例汤", price: 8, tag: "加分项" }
    ],
    reviews: [
      { userName: "果冻", content: "宿舍楼下级别的方便，晚上很适合。", tags: ["夜宵", "方便"], score: 4.6 },
      { userName: "晴天", content: "锅巴很香，冬天回头率更高。", tags: ["锅气", "暖胃"], score: 4.5 }
    ],
    x: 26,
    y: 60
  },
  {
    id: "r17",
    name: "桥头海鲜大排档",
    schoolIds: ["medical", "science"],
    category: "海鲜",
    tags: ["聚餐", "热闹", "周末"],
    scenarioTags: ["dorm", "night"],
    rating: 4.6,
    price: 58,
    walkingMinutes: 16,
    distanceText: "距云川理工创业园 1.2km",
    isOpen: false,
    isFavorite: false,
    cover: "适合周末多人聚餐的热闹大排档",
    address: "桥头路 88 号",
    description: "更适合周末和朋友大部队一起去，夜里氛围足。",
    featuredReason: "点海鲜拼盘最省心，适合庆祝和聚会。",
    dishes: [
      { name: "椒盐皮皮虾", price: 68, tag: "人气菜" },
      { name: "蒜蓉粉丝扇贝", price: 36, tag: "多人局" },
      { name: "海鲜炒饭", price: 28, tag: "收尾稳" }
    ],
    reviews: [
      { userName: "阿政", content: "社团庆功常来，气氛确实热闹。", tags: ["聚餐", "庆祝"], score: 4.6 },
      { userName: "元元", content: "适合周末人多的时候冲，平时就有点远。", tags: ["周末", "多人"], score: 4.5 }
    ],
    x: 88,
    y: 24
  },
  {
    id: "r18",
    name: "北门新疆抓饭",
    schoolIds: ["north"],
    category: "西北菜",
    tags: ["高性价比", "大份", "一人食"],
    scenarioTags: ["solo", "budget"],
    rating: 4.7,
    price: 18,
    walkingMinutes: 7,
    distanceText: "距北辰大学北门 510m",
    isOpen: true,
    isFavorite: false,
    cover: "18 元就能吃到饱，是很多同学的常驻午饭选择",
    address: "北门巷 2 号",
    description: "分量扎实，人均压力小，是预算友好型代表。",
    featuredReason: "想吃肉又不想花太多时，基本不会后悔。",
    dishes: [
      { name: "羊肉抓饭", price: 18, tag: "学生党最爱" },
      { name: "烤包子", price: 6, tag: "顺手加一份" },
      { name: "酸奶疙瘩", price: 8, tag: "特色小食" }
    ],
    reviews: [
      { userName: "大河", content: "18 块吃得很扎实，肉也不是意思一下。", tags: ["便宜", "饱"], score: 4.7 },
      { userName: "笑笑", content: "午饭不知道吃什么时就会去。", tags: ["安全牌", "常吃"], score: 4.6 }
    ],
    x: 20,
    y: 30
  },
  {
    id: "r19",
    name: "花园披萨小馆",
    schoolIds: ["arts", "science"],
    category: "西餐",
    tags: ["约会", "朋友分享", "周末"],
    scenarioTags: ["date", "dorm"],
    rating: 4.8,
    price: 48,
    walkingMinutes: 14,
    distanceText: "距溪谷师范中心湖 1km",
    isOpen: true,
    isFavorite: false,
    cover: "周末想吃慢一点的时候，这里很适合作为正餐主站",
    address: "花园路 19 号",
    description: "环境轻松，适合和朋友分享披萨，也适合约会。",
    featuredReason: "二人套餐友好，披萨和意面都在线。",
    dishes: [
      { name: "松露蘑菇披萨", price: 56, tag: "口碑最佳" },
      { name: "番茄海鲜意面", price: 42, tag: "双人分食" },
      { name: "凯撒沙拉", price: 26, tag: "清爽搭配" }
    ],
    reviews: [
      { userName: "安夏", content: "周末约会去过两次，氛围很松弛。", tags: ["约会", "舒服"], score: 4.8 },
      { userName: "阿文", content: "适合慢慢吃，不像快餐店那么赶。", tags: ["周末", "聊天"], score: 4.7 }
    ],
    x: 46,
    y: 58
  },
  {
    id: "r20",
    name: "晨光豆花饭",
    schoolIds: ["medical", "arts"],
    category: "中式简餐",
    tags: ["早餐", "预算友好", "暖胃"],
    scenarioTags: ["solo", "budget", "walk"],
    rating: 4.5,
    price: 14,
    walkingMinutes: 6,
    distanceText: "距春和医学院教学楼 430m",
    isOpen: true,
    isFavorite: false,
    cover: "早八之前也来得及的一碗豆花饭，热乎又便宜",
    address: "晨光巷 5 号",
    description: "价格低，出餐快，适合早餐和轻午餐。",
    featuredReason: "14 元的高频选择，步行短，压力小。",
    dishes: [
      { name: "招牌豆花饭", price: 14, tag: "高性价比" },
      { name: "红糖糍粑", price: 8, tag: "加餐选手" },
      { name: "脆萝卜小菜", price: 4, tag: "标配" }
    ],
    reviews: [
      { userName: "阿澈", content: "预算紧的时候真的很友好。", tags: ["早餐", "便宜"], score: 4.5 },
      { userName: "子沐", content: "6 分钟可达，赶课也不怕。", tags: ["步行近", "省心"], score: 4.4 }
    ],
    x: 66,
    y: 68
  }
];

const rankings = [
  { id: "rank-budget", title: "20 元以内吃饱榜", description: "优先看预算友好和步行近的店。", restaurantIds: ["r02", "r05", "r14", "r18", "r20"] },
  { id: "rank-night", title: "夜宵续命榜", description: "图书馆闭馆后还能接住你的店。", restaurantIds: ["r01", "r04", "r08", "r12", "r16"] },
  { id: "rank-date", title: "约会不翻车榜", description: "环境、氛围和出品都更稳。", restaurantIds: ["r03", "r06", "r09", "r15", "r19"] },
  { id: "rank-freshman", title: "新生必吃榜", description: "适合刚到大学城先认识的代表选手。", restaurantIds: ["r01", "r03", "r05", "r10", "r18"] },
  { id: "rank-dorm", title: "宿舍聚餐榜", description: "适合 3 到 6 人一起冲的安全牌。", restaurantIds: ["r01", "r04", "r11", "r17", "r19"] },
  { id: "rank-walk", title: "步行 10 分钟内", description: "不用想太多，走着就能到。", restaurantIds: ["r02", "r05", "r07", "r14", "r20"] }
];

const routePlans = [
  { id: "route-1", title: "周末咖啡 + 晚餐 + 甜品", schoolId: "science", theme: "coffee-dinner", stopIds: ["r03", "r19", "r15"], durationText: "4 小时", budgetText: "¥95 - ¥140" },
  { id: "route-2", title: "夜宵续命三连", schoolId: "medical", theme: "night", stopIds: ["r12", "r08", "r15"], durationText: "2.5 小时", budgetText: "¥48 - ¥80" },
  { id: "route-3", title: "一个人也舒服的吃喝路线", schoolId: "north", theme: "solo", stopIds: ["r02", "r18", "r03"], durationText: "3 小时", budgetText: "¥55 - ¥75" },
  { id: "route-4", title: "宿舍聚餐不踩雷组合", schoolId: "arts", theme: "group", stopIds: ["r05", "r11", "r16"], durationText: "4.5 小时", budgetText: "¥80 - ¥120" }
];

const state = {
  currentView: "home",
  currentSchool: "all",
  searchKeyword: "",
  activeScenario: "all",
  mapFilters: {
    category: "all",
    price: "all",
    rating: "all",
    openOnly: false,
    walking: "all",
    sort: "distance"
  },
  selectedRestaurantId: "r03",
  favorites: [],
  currentRouteTheme: "coffee-dinner",
  hoveredRestaurantId: null,
  currentRankingId: "rank-budget",
  favoritesFilter: "all",
  favoritesLayout: "grid",
  mapPan: { x: 0, y: 0 },
  mapDragging: false
};

const pageMeta = {
  home: {
    kicker: "Campus Life",
    title: "今天想吃点什么？",
    subtitle: "围绕 4 所大学的本地餐厅推荐、地图筛选和路线灵感都在这里。"
  },
  map: {
    kicker: "Campus Map",
    title: "地图探索",
    subtitle: "用学校范围、步行时间和价格带，快速缩小决策范围。"
  },
  detail: {
    kicker: "Restaurant Detail",
    title: "餐厅详情",
    subtitle: "把值不值得去的信息集中放在一屏里。"
  },
  rankings: {
    kicker: "Local Picks",
    title: "榜单专题",
    subtitle: "更像学生自己的本地化美食指南，而不是泛点评平台。"
  },
  favorites: {
    kicker: "Saved Places",
    title: "我的收藏",
    subtitle: "把想去、常吃和周末备选都整理成自己的美食资产。"
  },
  routes: {
    kicker: "Route Planning",
    title: "路线规划",
    subtitle: "围绕一条路线组织吃喝顺序，降低临场决策成本。"
  }
};

const categoryColors = {
  火锅: ["#ff9f5a", "#ffcf91"],
  麻辣烫: ["#ff7564", "#ffb195"],
  咖啡: ["#8d73d6", "#c9b8ff"],
  炸鸡: ["#ffad5d", "#ffe0a4"],
  面馆: ["#9dbe68", "#d8f0a3"],
  东南亚: ["#53b8a2", "#b3eddc"],
  轻食: ["#7bc47f", "#c1e7c3"],
  烧烤: ["#8a4930", "#d28b63"],
  日料: ["#6d7ce8", "#b9c2ff"],
  西式快餐: ["#e37d6c", "#f6c3af"],
  川菜: ["#cd5c58", "#f1a1a2"],
  粥铺: ["#59a99f", "#b9ebe2"],
  韩餐: ["#db7ea5", "#f3c2d9"],
  粉面: ["#7ea0d9", "#ceddff"],
  甜品: ["#c58cf1", "#f3d9ff"],
  粤式简餐: ["#6fae82", "#d1edd9"],
  海鲜: ["#5e93cd", "#b6d4fb"],
  西北菜: ["#c88f52", "#f0d09c"],
  西餐: ["#c16f64", "#efbeb2"],
  中式简餐: ["#b6a25f", "#ebddb1"]
};

const categoryEmoji = {
  火锅: "🍲",
  麻辣烫: "🌶️",
  咖啡: "☕",
  炸鸡: "🍗",
  面馆: "🍜",
  东南亚: "🥗",
  轻食: "🥙",
  烧烤: "🍢",
  日料: "🍣",
  西式快餐: "🍔",
  川菜: "🥘",
  粥铺: "🥣",
  韩餐: "🍚",
  粉面: "🍜",
  甜品: "🍰",
  粤式简餐: "🍛",
  海鲜: "🦐",
  西北菜: "🥙",
  西餐: "🍕",
  中式简餐: "🥟"
};

const dom = {};
let toastTimer = null;
const mapDrag = {
  active: false,
  startX: 0,
  startY: 0,
  originX: 0,
  originY: 0
};

document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  cacheDom();
  restoreFavorites();
  bindEvents();
  renderApp();
}

function cacheDom() {
  dom.pageTitle = document.getElementById("page-title");
  dom.pageSubtitle = document.getElementById("page-subtitle");
  dom.pageKicker = document.getElementById("page-kicker");
  dom.currentCampusLabel = document.getElementById("current-campus-label");
  dom.globalSearch = document.getElementById("global-search");
  dom.toast = document.getElementById("toast");
  dom.navItems = Array.from(document.querySelectorAll(".nav-item"));
  dom.views = Array.from(document.querySelectorAll(".view"));
  dom.home = document.getElementById("home-content");
  dom.map = document.getElementById("map-content");
  dom.detail = document.getElementById("detail-content");
  dom.rankings = document.getElementById("rankings-content");
  dom.favorites = document.getElementById("favorites-content");
  dom.routes = document.getElementById("routes-content");
}

function bindEvents() {
  document.addEventListener("click", handleClick);
  document.addEventListener("change", handleChange);
  document.addEventListener("input", handleInput);
  document.addEventListener("mouseover", handleHover);
  document.addEventListener("mouseout", handleHoverOut);
  document.addEventListener("mousedown", handleMapDragStart);
  document.addEventListener("mousemove", handleMapDragMove);
  document.addEventListener("mouseup", handleMapDragEnd);
  document.addEventListener("mouseleave", handleMapDragEnd);
}

function handleClick(event) {
  const navButton = event.target.closest("[data-view]");
  if (navButton) {
    setView(navButton.dataset.view);
    return;
  }

  const schoolButton = event.target.closest("[data-school-id]");
  if (schoolButton) {
    state.currentSchool = schoolButton.dataset.schoolId;
    renderApp();
    return;
  }

  const scenarioButton = event.target.closest("[data-scenario]");
  if (scenarioButton) {
    state.activeScenario = scenarioButton.dataset.scenario;
    renderApp();
    return;
  }

  const rankingButton = event.target.closest("[data-ranking-id]");
  if (rankingButton) {
    state.currentRankingId = rankingButton.dataset.rankingId;
    renderRankings();
  }

  const layoutButton = event.target.closest("[data-favorites-layout]");
  if (layoutButton) {
    state.favoritesLayout = layoutButton.dataset.favoritesLayout;
    renderFavorites();
    return;
  }

  const favoritesFilterButton = event.target.closest("[data-favorites-filter]");
  if (favoritesFilterButton) {
    state.favoritesFilter = favoritesFilterButton.dataset.favoritesFilter;
    renderFavorites();
    return;
  }

  const routeThemeButton = event.target.closest("[data-route-theme]");
  if (routeThemeButton) {
    state.currentRouteTheme = routeThemeButton.dataset.routeTheme;
    renderRoutes();
    return;
  }

  const randomButton = event.target.closest("[data-action='random-pick']");
  if (randomButton) {
    generateRandomPick();
    return;
  }

  const favoriteButton = event.target.closest("[data-action='toggle-favorite']");
  if (favoriteButton) {
    toggleFavorite(favoriteButton.dataset.restaurantId);
    return;
  }

  const markerButton = event.target.closest("[data-action='select-marker']");
  if (markerButton) {
    selectRestaurant(markerButton.dataset.restaurantId);
    return;
  }

  const detailButton = event.target.closest("[data-action='open-detail']");
  if (detailButton) {
    selectRestaurant(detailButton.dataset.restaurantId);
    return;
  }

  const shortcut = event.target.closest("[data-view-shortcut]");
  if (shortcut) {
    setView(shortcut.dataset.viewShortcut);
  }
}

function handleChange(event) {
  const element = event.target;

  if (element.matches("[data-map-filter='category']")) {
    state.mapFilters.category = element.value;
    renderMap();
  }

  if (element.matches("[data-map-filter='price']")) {
    state.mapFilters.price = element.value;
    renderMap();
  }

  if (element.matches("[data-map-filter='rating']")) {
    state.mapFilters.rating = element.value;
    renderMap();
  }

  if (element.matches("[data-map-filter='walking']")) {
    state.mapFilters.walking = element.value;
    renderMap();
  }

  if (element.matches("[data-map-filter='sort']")) {
    state.mapFilters.sort = element.value;
    renderMap();
  }

  if (element.matches("[data-map-filter='openOnly']")) {
    state.mapFilters.openOnly = element.checked;
    renderMap();
  }
}

function handleInput(event) {
  const element = event.target;

  if (element.id === "global-search") {
    state.searchKeyword = element.value.trim();
    renderApp();
    return;
  }

  if (element.matches("[data-map-filter='search']")) {
    state.searchKeyword = element.value.trim();
    dom.globalSearch.value = state.searchKeyword;
    renderApp();
  }
}

function handleHover(event) {
  const target = event.target.closest("[data-hover-restaurant-id]");
  if (!target) return;
  if (state.mapDragging) return;
  if (state.hoveredRestaurantId === target.dataset.hoverRestaurantId) return;
  state.hoveredRestaurantId = target.dataset.hoverRestaurantId;
  if (state.currentView === "map") updateMapHoverState();
}

function handleHoverOut(event) {
  const target = event.target.closest("[data-hover-restaurant-id]");
  if (!target) return;
  if (state.mapDragging) return;
  const related = event.relatedTarget && event.relatedTarget.closest("[data-hover-restaurant-id]");
  if (related && related.dataset.hoverRestaurantId === target.dataset.hoverRestaurantId) return;
  if (state.hoveredRestaurantId === null) return;
  state.hoveredRestaurantId = null;
  if (state.currentView === "map") updateMapHoverState();
}

function handleMapDragStart(event) {
  if (state.currentView !== "map") return;
  const canvas = event.target.closest(".map-canvas");
  if (!canvas) return;
  if (event.target.closest(".map-marker, button, .button, input, select, label")) return;

  mapDrag.active = true;
  mapDrag.startX = event.clientX;
  mapDrag.startY = event.clientY;
  mapDrag.originX = state.mapPan.x;
  mapDrag.originY = state.mapPan.y;
  state.mapDragging = true;
  canvas.classList.add("is-dragging");
}

function handleMapDragMove(event) {
  if (!mapDrag.active) return;
  const canvas = document.querySelector(".map-canvas");
  const stage = document.querySelector(".map-stage");
  if (!canvas || !stage) return;

  const nextX = mapDrag.originX + event.clientX - mapDrag.startX;
  const nextY = mapDrag.originY + event.clientY - mapDrag.startY;
  state.mapPan = clampMapPan(nextX, nextY, canvas, stage);
  applyMapPan();
}

function handleMapDragEnd() {
  if (!mapDrag.active) return;
  mapDrag.active = false;
  state.mapDragging = false;
  const canvas = document.querySelector(".map-canvas");
  if (canvas) canvas.classList.remove("is-dragging");
}

function restoreFavorites() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    if (Array.isArray(stored)) state.favorites = stored;
  } catch (error) {
    state.favorites = [];
  }
}

function saveFavorites() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.favorites));
}

function setView(viewName) {
  state.currentView = viewName;
  renderHeader();
  updateViewVisibility();
  renderVisibleView();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderApp() {
  renderHeader();
  updateViewVisibility();
  renderHome();
  renderMap();
  renderDetail();
  renderRankings();
  renderFavorites();
  renderRoutes();
}

function renderVisibleView() {
  if (state.currentView === "home") renderHome();
  if (state.currentView === "map") renderMap();
  if (state.currentView === "detail") renderDetail();
  if (state.currentView === "rankings") renderRankings();
  if (state.currentView === "favorites") renderFavorites();
  if (state.currentView === "routes") renderRoutes();
}

function renderHeader() {
  const selectedRestaurant = getRestaurantById(state.selectedRestaurantId);
  const meta = { ...pageMeta[state.currentView] };

  if (state.currentView === "detail" && selectedRestaurant) {
    meta.title = selectedRestaurant.name;
    meta.subtitle = `${selectedRestaurant.distanceText} · ${selectedRestaurant.description}`;
  }

  dom.pageKicker.textContent = meta.kicker;
  dom.pageTitle.textContent = meta.title;
  dom.pageSubtitle.textContent = meta.subtitle;
  dom.currentCampusLabel.textContent = `当前范围：${getSchoolName(state.currentSchool)}`;

  if (dom.globalSearch.value !== state.searchKeyword) {
    dom.globalSearch.value = state.searchKeyword;
  }

  dom.navItems.forEach((item) => {
    item.classList.toggle("is-active", item.dataset.view === state.currentView);
  });
}

function updateViewVisibility() {
  dom.views.forEach((view) => {
    view.classList.toggle("is-active", view.dataset.viewPanel === state.currentView);
  });
}

function renderHome() {
  const filtered = getFilteredRestaurants();
  const featured = filtered.slice(0, 6);
  const popularRankings = rankings.slice(0, 3);
  const quickCards = [
    { title: "今晚夜宵", text: "23:00 前还能接住你的店，适合晚自习后补给。", value: `${restaurants.filter((item) => item.scenarioTags.includes("night")).length} 家备选` },
    { title: "预算友好", text: "20 元上下也能吃得舒服，步行半径优先。", value: `${restaurants.filter((item) => item.price <= 20).length} 家可冲` },
    { title: "约会不翻车", text: "环境更稳，聊天舒服，适合两个人慢慢吃。", value: `${restaurants.filter((item) => item.scenarioTags.includes("date")).length} 家推荐` }
  ];
  const recent = filtered.slice(0, 3);

  dom.home.innerHTML = `
    <div class="home-layout">
      <div class="home-main">
        <section class="hero-card">
          <div class="hero-grid">
            <div class="hero-intro">
              <p class="eyebrow">University Town Picks</p>
              <h3>从纠结吃什么，到一眼看到附近能去的好店。</h3>
              <p>围绕 4 所高校做本地化推荐，突出学生最关心的预算、步行时间、场景适配和是否正在营业。</p>
            </div>

            <div class="quick-pick-card">
              <p class="eyebrow">随机推荐</p>
              <h4>今天吃什么</h4>
              <p>从当前学校范围、搜索词和场景标签里随机给你一张安全牌。</p>
              <button class="button button--primary" type="button" data-action="random-pick">帮我选一家</button>
            </div>

            <div class="hero-bottom">
              <div class="hero-filter-block">
                <div class="hero-filter-group">
                  <p class="eyebrow">学校范围</p>
                  <div class="school-row">${renderSchoolChips()}</div>
                </div>
                <div class="hero-filter-group">
                  <p class="eyebrow">场景筛选</p>
                  <div class="chip-row">${renderScenarioChips()}</div>
                </div>
              </div>

              <div class="hero-stats">
                <div class="metric-pill">
                  <strong>${filtered.length}</strong>
                  <span class="muted">当前可看餐厅</span>
                </div>
                <div class="metric-pill">
                  <strong>${restaurants.filter((item) => item.isOpen).length}</strong>
                  <span class="muted">营业中</span>
                </div>
                <div class="metric-pill">
                  <strong>${state.favorites.length}</strong>
                  <span class="muted">已收藏</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="section-title">
            <div>
              <h3>附近值得先看的店</h3>
              <p>按当前学校范围与场景条件筛出的推荐卡片。</p>
            </div>
            <button class="button button--secondary" type="button" data-view-shortcut="map">去地图页继续筛</button>
          </div>
          <div class="recommendation-grid">
            ${featured.map((restaurant) => renderRestaurantCard(restaurant)).join("")}
          </div>
        </section>

        <section>
          <div class="section-title">
            <div>
              <h3>学生场景榜单</h3>
              <p>比泛点评更贴近大学城节奏的专题入口。</p>
            </div>
            <button class="button button--secondary" type="button" data-view-shortcut="rankings">查看全部榜单</button>
          </div>
          <div class="ranking-strip">
            ${popularRankings.map((ranking) => `
              <article class="ranking-card interactive-card" data-ranking-id="${ranking.id}" data-view-shortcut="rankings">
                <img class="ranking-thumb" src="${getRankingImage(rankings.find((item) => item.id === ranking.id))}" alt="${ranking.title}">
                <p class="eyebrow">专题</p>
                <h4>${ranking.title}</h4>
                <p>${ranking.description}</p>
                <button class="button button--ghost" type="button" data-ranking-id="${ranking.id}" data-view-shortcut="rankings">打开专题</button>
              </article>
            `).join("")}
          </div>
        </section>
      </div>

      <aside class="home-side">
        <div class="side-card">
          <div class="section-title">
            <div>
              <h3>今日辅助信息</h3>
              <p>从本地化决策信息切入，不做后台数据面板。</p>
            </div>
          </div>
          <div class="side-stack">
            ${quickCards.map((item) => `
              <div class="mini-item">
                <p class="eyebrow">${item.value}</p>
                <h4>${item.title}</h4>
                <p>${item.text}</p>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="side-card">
          <div class="section-title">
            <div>
              <h3>最近值得决策的店</h3>
              <p>适合从发现页直接进入详情。</p>
            </div>
          </div>
          <div class="mini-list">
            ${recent.map((restaurant) => `
              <article class="mini-item interactive-card" data-action="open-detail" data-restaurant-id="${restaurant.id}">
                <div class="mini-media-row">
                  <img class="mini-thumb" src="${getRestaurantImage(restaurant, "mini")}" alt="${restaurant.name}">
                  <div>
                    <p class="eyebrow">${restaurant.category}</p>
                    <h4>${restaurant.name}</h4>
                  </div>
                </div>
                <p>${restaurant.distanceText}</p>
                <div class="action-row">
                  <span class="tag ${restaurant.isOpen ? "is-open" : "is-close"}">${restaurant.isOpen ? "营业中" : "已打烊"}</span>
                  <button class="button button--ghost" type="button" data-action="open-detail" data-restaurant-id="${restaurant.id}">查看详情</button>
                </div>
              </article>
            `).join("")}
          </div>
        </div>
      </aside>
    </div>
  `;
}

function renderMap() {
  const filtered = getFilteredRestaurants(true);
  const hovered = state.hoveredRestaurantId;
  const currentResultList = dom.map.querySelector(".result-list");
  const previousScrollTop = currentResultList ? currentResultList.scrollTop : 0;

  dom.map.innerHTML = `
    <div class="map-layout">
      <aside class="filter-panel">
        <div class="section-title">
          <div>
            <h3>筛选器</h3>
            <p>围绕学生真实决策因素做过滤。</p>
          </div>
        </div>

        <div class="filter-group">
          <h4>搜索关键词</h4>
          <input class="field" type="search" value="${escapeAttribute(state.searchKeyword)}" data-map-filter="search" placeholder="菜系、店名、适合约会">
        </div>

        <div class="filter-group">
          <h4>菜系分类</h4>
          <select class="select-field" data-map-filter="category">
            ${renderSelectOptions(["all", "火锅", "咖啡", "麻辣烫", "烧烤", "甜品", "川菜", "面馆"], state.mapFilters.category, {
              all: "全部"
            })}
          </select>
        </div>

        <div class="filter-group">
          <h4>人均价格</h4>
          <select class="select-field" data-map-filter="price">
            ${renderSelectOptions(["all", "lt20", "lt35", "lt50", "gt50"], state.mapFilters.price, {
              all: "不限",
              lt20: "20 元内",
              lt35: "35 元内",
              lt50: "50 元内",
              gt50: "50 元以上"
            })}
          </select>
        </div>

        <div class="filter-group">
          <h4>步行时间</h4>
          <select class="select-field" data-map-filter="walking">
            ${renderSelectOptions(["all", "10", "15"], state.mapFilters.walking, {
              all: "不限",
              "10": "10 分钟内",
              "15": "15 分钟内"
            })}
          </select>
        </div>

        <div class="filter-group">
          <h4>评分门槛</h4>
          <select class="select-field" data-map-filter="rating">
            ${renderSelectOptions(["all", "4.5", "4.7", "4.8"], state.mapFilters.rating, {
              all: "不限",
              "4.5": "4.5 分以上",
              "4.7": "4.7 分以上",
              "4.8": "4.8 分以上"
            })}
          </select>
        </div>

        <div class="filter-group">
          <label class="check-row">
            <input type="checkbox" data-map-filter="openOnly" ${state.mapFilters.openOnly ? "checked" : ""}>
            <span>只看营业中</span>
          </label>
        </div>

        <div class="filter-group">
          <h4>排序方式</h4>
          <select class="select-field" data-map-filter="sort">
            ${renderSelectOptions(["distance", "rating", "price", "popular"], state.mapFilters.sort, {
              distance: "距离优先",
              rating: "评分优先",
              price: "性价比优先",
              popular: "热门优先"
            })}
          </select>
        </div>
      </aside>

      <section class="map-panel">
        <div class="map-toolbar">
          <div>
            <p class="eyebrow">Mock Campus Map</p>
            <strong>${getSchoolName(state.currentSchool)} · ${filtered.length} 个结果</strong>
          </div>
          <div class="chip-row">
            <span class="chip is-active">地图模式</span>
            <span class="chip">步行半径</span>
            <span class="chip">热门店</span>
          </div>
        </div>

        <div class="map-canvas">
          <div class="map-hint">拖拽地图空白区域可查看更大范围</div>
          <div class="map-stage" style="transform: translate(${state.mapPan.x}px, ${state.mapPan.y}px);">
            ${schools.filter((school) => school.id !== "all").map((school) => `
              <button class="campus-node interactive-card" type="button" style="left:${school.x}%; top:${school.y}%; border:1px solid ${school.color};" data-school-id="${school.id}">
                <strong>${school.shortName}</strong>
                <span>${school.name}</span>
              </button>
            `).join("")}

            ${filtered.map((restaurant) => {
              const selected = restaurant.id === state.selectedRestaurantId;
              const highlighted = restaurant.id === hovered;
              return `
                <button
                  class="map-marker ${selected ? "is-selected" : ""} ${highlighted ? "is-highlighted" : ""} ${isFavorite(restaurant.id) ? "is-favorite" : ""}"
                  type="button"
                  style="left:${restaurant.x}%; top:${restaurant.y}%;"
                  data-action="select-marker"
                  data-hover-restaurant-id="${restaurant.id}"
                  data-restaurant-id="${restaurant.id}"
                >
                  <strong>${restaurant.name}</strong>
                </button>
              `;
            }).join("")}
          </div>
        </div>
      </section>

      <aside class="results-panel">
        <div class="section-title">
          <div>
            <h3>结果列表</h3>
            <p>悬停卡片与地图 marker 双向联动。</p>
          </div>
        </div>
        <div class="result-list">
          ${filtered.map((restaurant) => `
            <article class="result-card interactive-card ${restaurant.id === hovered ? "is-highlighted" : ""}" data-hover-restaurant-id="${restaurant.id}" data-action="open-detail" data-restaurant-id="${restaurant.id}">
              <div class="result-top">
                <img class="result-thumb" src="${getRestaurantImage(restaurant, "result")}" alt="${restaurant.name}">
                <div>
                  <div class="restaurant-head">
                    <div>
                      <h4>${restaurant.name}</h4>
                      <div class="meta-row">
                        <span>${restaurant.rating.toFixed(1)} 分</span>
                        <span>人均 ¥${restaurant.price}</span>
                        <span>${restaurant.walkingMinutes} 分钟</span>
                      </div>
                    </div>
                    <button class="favorite-button ${isFavorite(restaurant.id) ? "is-active" : ""}" type="button" data-action="toggle-favorite" data-restaurant-id="${restaurant.id}">
                      收藏
                    </button>
                  </div>
                </div>
              </div>
              <div class="tag-row">
                <span class="tag ${restaurant.isOpen ? "is-open" : "is-close"}">${restaurant.isOpen ? "营业中" : "已打烊"}</span>
                ${restaurant.tags.slice(0, 2).map((tag) => `<span class="tag">${tag}</span>`).join("")}
              </div>
              <p>${restaurant.distanceText}</p>
              <div class="action-inline" style="margin-top:12px;">
                <button class="button button--ghost" type="button" data-action="open-detail" data-restaurant-id="${restaurant.id}">查看详情</button>
                <button class="button button--secondary" type="button" data-action="select-marker" data-restaurant-id="${restaurant.id}">去这里</button>
              </div>
            </article>
          `).join("")}
        </div>
      </aside>
    </div>
  `;

  const canvas = dom.map.querySelector(".map-canvas");
  const stage = dom.map.querySelector(".map-stage");
  const resultList = dom.map.querySelector(".result-list");
  if (canvas && stage) {
    state.mapPan = clampMapPan(state.mapPan.x, state.mapPan.y, canvas, stage);
    applyMapPan();
  }
  if (resultList) {
    resultList.scrollTop = previousScrollTop;
  }
}

function renderDetail() {
  const restaurant = getRestaurantById(state.selectedRestaurantId);
  const colors = getCategoryColors(restaurant.category);
  const related = getFilteredRestaurants().filter((item) => item.id !== restaurant.id).slice(0, 3);

  dom.detail.innerHTML = `
    <div class="detail-layout">
      <div class="detail-main">
        <section class="hero-detail">
          <div class="cover-showcase" style="--cover-start:${colors[0]}; --cover-end:${colors[1]};">
            <img class="cover-showcase-image" src="${getRestaurantImage(restaurant, "hero")}" alt="${restaurant.name}">
            <div>
              <p class="eyebrow">${restaurant.category}</p>
              <h3 style="margin:0;">${restaurant.cover}</h3>
            </div>
          </div>

          <div class="detail-info">
            <p class="eyebrow">Restaurant Snapshot</p>
            <h3>${restaurant.name}</h3>
            <div class="meta-row">
              <span>${restaurant.rating.toFixed(1)} 分</span>
              <span>人均 ¥${restaurant.price}</span>
              <span>${restaurant.walkingMinutes} 分钟</span>
            </div>
            <div class="tag-row">
              <span class="tag ${restaurant.isOpen ? "is-open" : "is-close"}">${restaurant.isOpen ? "营业中" : "已打烊"}</span>
              ${restaurant.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
            <p class="restaurant-desc" style="margin-top:16px;">${restaurant.description}</p>
            <div class="action-inline">
              <button class="button button--primary" type="button" data-view-shortcut="map">去这里</button>
              <button class="button button--secondary" type="button" data-action="toggle-favorite" data-restaurant-id="${restaurant.id}">
                ${isFavorite(restaurant.id) ? "已收藏" : "收藏"}
              </button>
            </div>
            <div class="split-line"></div>
            <div class="info-stack">
              <div class="info-block">
                <strong>地址</strong>
                <span>${restaurant.address}</span>
              </div>
              <div class="info-block">
                <strong>离学校关系</strong>
                <span>${restaurant.distanceText}</span>
              </div>
              <div class="info-block">
                <strong>推荐理由</strong>
                <span>${restaurant.featuredReason}</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="section-title">
            <div>
              <h3>为什么值得去</h3>
              <p>尽量把会影响决策的句子做得短而直接。</p>
            </div>
          </div>
          <div class="three-col">
            ${[
              { title: "适合场景", text: restaurant.scenarioTags.map(renderScenarioLabel).join(" / ") },
              { title: "营业状态", text: restaurant.isOpen ? "现在适合出发，不用担心临近打烊。" : "当前已打烊，更适合加入收藏留到之后。" },
              { title: "学生视角", text: restaurant.featuredReason }
            ].map((item) => `
              <article class="reason-card">
                <p class="eyebrow">${item.title}</p>
                <h4>${item.title}</h4>
                <p class="muted">${item.text}</p>
              </article>
            `).join("")}
          </div>
        </section>

        <section>
          <div class="section-title">
            <div>
              <h3>招牌菜推荐</h3>
              <p>不做复杂菜单，只保留最能帮助判断的 3 个选项。</p>
            </div>
          </div>
          <div class="three-col">
            ${restaurant.dishes.map((dish) => `
              <article class="dish-card">
                <p class="eyebrow">${dish.tag}</p>
                <h4>${dish.name}</h4>
                <p class="dish-price">价格：¥${dish.price}</p>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="two-col">
          <div>
            <div class="section-title">
              <div>
                <h3>精选评价</h3>
                <p>压缩成更适合答辩展示的高频短评。</p>
              </div>
            </div>
            <div class="mini-list">
              ${restaurant.reviews.map((review) => `
                <article class="review-card">
                  <p class="eyebrow">${review.userName}</p>
                  <h4>${review.score.toFixed(1)} 分</h4>
                  <p class="muted">${review.content}</p>
                  <div class="tag-row" style="margin-top:12px;">
                    ${review.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
                  </div>
                </article>
              `).join("")}
            </div>
          </div>

          <div>
            <div class="section-title">
              <div>
                <h3>附近学校关系</h3>
                <p>把多校联动这个产品特征直接说清楚。</p>
              </div>
            </div>
            <div class="mini-list">
              ${restaurant.schoolIds.map((schoolId) => {
                const school = schools.find((item) => item.id === schoolId);
                return `
                  <article class="reason-card">
                    <p class="eyebrow">${school.shortName}</p>
                    <h4>${school.name}</h4>
                    <p class="muted">步行 ${restaurant.walkingMinutes} 分钟左右可达，适合从 ${school.shortName} 出发。</p>
                  </article>
                `;
              }).join("")}
            </div>
          </div>
        </section>
      </div>

      <aside class="detail-side">
        <div class="side-card">
          <p class="eyebrow">粘性信息栏</p>
          <h4 style="margin:8px 0 10px;">当前店铺状态</h4>
          <div class="info-stack">
            <div class="info-block">
              <strong>${restaurant.isOpen ? "营业中" : "已打烊"}</strong>
              <span>${restaurant.distanceText}</span>
            </div>
            <div class="info-block">
              <strong>场景标签</strong>
              <span>${restaurant.tags.join(" / ")}</span>
            </div>
          </div>
          <div class="action-inline" style="margin-top:16px;">
            <button class="button button--primary" type="button" data-view-shortcut="map">地图定位</button>
            <button class="button button--secondary" type="button" data-action="toggle-favorite" data-restaurant-id="${restaurant.id}">
              ${isFavorite(restaurant.id) ? "取消收藏" : "加入收藏"}
            </button>
          </div>
        </div>

        <div class="side-card">
          <p class="eyebrow">附近类似推荐</p>
          <div class="mini-list">
            ${related.map((item) => `
              <article class="mini-item interactive-card" data-action="open-detail" data-restaurant-id="${item.id}">
                <div class="mini-media-row">
                  <img class="mini-thumb" src="${getRestaurantImage(item, "mini")}" alt="${item.name}">
                  <h4>${item.name}</h4>
                </div>
                <p>${item.category} · ${item.distanceText}</p>
                <div class="action-row">
                  <span class="tag">${item.rating.toFixed(1)} 分</span>
                  <button class="button button--ghost" type="button" data-action="open-detail" data-restaurant-id="${item.id}">切换查看</button>
                </div>
              </article>
            `).join("")}
          </div>
        </div>
      </aside>
    </div>
  `;
}

function renderRankings() {
  const selectedRanking = rankings.find((item) => item.id === state.currentRankingId) || rankings[0];
  const rankingRestaurants = selectedRanking.restaurantIds
    .map(getRestaurantById)
    .filter(Boolean)
    .filter(matchesGlobalFilters);

  dom.rankings.innerHTML = `
    <div class="ranking-layout">
      <aside class="ranking-sidebar">
        <div class="side-card">
          <p class="eyebrow">专题切换</p>
          <div class="mini-list">
            ${rankings.map((ranking) => `
              <button class="ranking-feature-card ${ranking.id === selectedRanking.id ? "is-highlighted" : ""}" type="button" data-ranking-id="${ranking.id}">
                <p class="eyebrow">榜单</p>
                <h4>${ranking.title}</h4>
                <p class="muted">${ranking.description}</p>
              </button>
            `).join("")}
          </div>
        </div>
      </aside>

      <div class="ranking-main">
        <section class="hero-card">
          <p class="eyebrow">Current Ranking</p>
          <h3 style="margin-bottom:10px;">${selectedRanking.title}</h3>
          <p>${selectedRanking.description} 当前会跟随学校范围、搜索词和场景标签一起过滤，确保榜单也保持本地化。</p>
          <div class="school-row" style="margin-top:18px;">${renderSchoolChips()}</div>
        </section>

        <section>
          <div class="section-title">
            <div>
              <h3>专题结果</h3>
              <p>${rankingRestaurants.length} 家餐厅符合当前榜单与全局条件。</p>
            </div>
          </div>
          ${rankingRestaurants.length > 0
            ? `<div class="recommendation-grid">${rankingRestaurants.map((restaurant) => renderRestaurantCard(restaurant)).join("")}</div>`
            : renderEmptyState("当前条件下没有匹配餐厅", "可以切换学校范围、清空搜索词，或者换一个场景标签。")}
        </section>
      </div>
    </div>
  `;
}

function renderFavorites() {
  const favorites = restaurants.filter((item) => isFavorite(item.id));
  const filteredFavorites = favorites.filter((restaurant) => {
    if (state.favoritesFilter === "all") return true;
    if (state.favoritesFilter === "visited") return restaurant.isOpen;
    return restaurant.scenarioTags.includes(state.favoritesFilter);
  });

  dom.favorites.innerHTML = `
    <div class="favorites-layout">
      <section class="hero-card">
        <div class="favorites-toolbar">
          <div>
            <p class="eyebrow">Saved Collection</p>
            <h3 style="margin:8px 0 10px;">把想去、常吃和周末备选整理成自己的清单。</h3>
            <p>当前共收藏 ${favorites.length} 家，支持按场景查看，也支持卡片和紧凑列表切换。</p>
          </div>
          <div class="stats-grid" style="grid-template-columns:repeat(3, minmax(0, 1fr)); width:420px;">
            <div class="stats-card">
              <p class="eyebrow">收藏总数</p>
              <h4>${favorites.length}</h4>
              <p>适合长期沉淀</p>
            </div>
            <div class="stats-card">
              <p class="eyebrow">营业中</p>
              <h4>${favorites.filter((item) => item.isOpen).length}</h4>
              <p>适合现在出发</p>
            </div>
            <div class="stats-card">
              <p class="eyebrow">约会备选</p>
              <h4>${favorites.filter((item) => item.scenarioTags.includes("date")).length}</h4>
              <p>慢一点吃</p>
            </div>
          </div>
        </div>
      </section>

      <section class="panel-card">
        <div class="favorites-toolbar">
          <div class="tab-row">
            ${renderFavoritesFilterChip("all", "全部")}
            ${renderFavoritesFilterChip("solo", "一人食")}
            ${renderFavoritesFilterChip("dorm", "宿舍聚餐")}
            ${renderFavoritesFilterChip("date", "约会")}
            ${renderFavoritesFilterChip("night", "夜宵")}
            ${renderFavoritesFilterChip("visited", "营业中")}
          </div>
          <div class="tab-row">
            <button class="tab-chip ${state.favoritesLayout === "grid" ? "is-active" : ""}" type="button" data-favorites-layout="grid">卡片网格</button>
            <button class="tab-chip ${state.favoritesLayout === "list" ? "is-active" : ""}" type="button" data-favorites-layout="list">紧凑列表</button>
          </div>
        </div>
      </section>

      ${favorites.length === 0
        ? renderEmptyState("还没有收藏餐厅", "先在发现页、地图页或详情页点几家店收藏，收藏页会自动更新。")
        : filteredFavorites.length === 0
          ? renderEmptyState("这个分类下还没有收藏", "换一个标签看看，或者继续去发现页收集更多备选。")
          : state.favoritesLayout === "grid"
            ? `<section class="favorites-grid">${filteredFavorites.map((restaurant) => renderRestaurantCard(restaurant)).join("")}</section>`
            : `<section class="favorites-list">${filteredFavorites.map(renderFavoriteListItem).join("")}</section>`
      }
    </div>
  `;
}

function renderRoutes() {
  const route = generateRoute(state.currentRouteTheme);
  const stops = route.stopIds.map(getRestaurantById).filter(Boolean);

  dom.routes.innerHTML = `
    <div class="route-layout">
      <aside class="route-sidebar">
        <div class="side-card">
          <p class="eyebrow">路线设置</p>
          <h4>先定一个主题</h4>
          <div class="tab-row" style="margin-top:16px;">
            ${renderRouteThemeChip("coffee-dinner", "咖啡 + 晚餐")}
            ${renderRouteThemeChip("night", "夜宵")}
            ${renderRouteThemeChip("solo", "一人食")}
            ${renderRouteThemeChip("group", "宿舍聚餐")}
          </div>
          <div class="split-line"></div>
          <p class="muted">当前学校范围：${getSchoolName(state.currentSchool)}。如果当前范围没有对应路线，会自动回退到最接近的预设路线。</p>
        </div>

        <div class="side-card">
          <p class="eyebrow">路线摘要</p>
          <div class="info-stack">
            <div class="info-block">
              <strong>${route.title}</strong>
              <span>${route.durationText} · ${route.budgetText}</span>
            </div>
            <div class="info-block">
              <strong>推荐学校</strong>
              <span>${getSchoolName(route.schoolId)}</span>
            </div>
          </div>
        </div>
      </aside>

      <section class="route-main">
        <div class="route-overview">
          <div class="section-title">
            <div>
              <h3>${route.title}</h3>
              <p>用 3 个站点讲清楚一条路线，不做复杂算法，优先保证故事感和展示完整度。</p>
            </div>
            <div class="action-inline">
              <button class="button button--primary" type="button">保存路线</button>
              <button class="button button--secondary" type="button">发送到手机</button>
            </div>
          </div>
        </div>

        <div class="route-line">
          ${stops.map((restaurant, index) => `
            <article class="route-stop interactive-card" data-action="open-detail" data-restaurant-id="${restaurant.id}">
              <p class="eyebrow">第 ${index + 1} 站</p>
              <img class="route-stop-thumb" src="${getRestaurantImage(restaurant, "mini")}" alt="${restaurant.name}">
              <h4>${restaurant.name}</h4>
              <p class="route-meta">${restaurant.category} · ${restaurant.distanceText}</p>
              <p class="muted">${index === 0 ? "先用轻松入口建立节奏。" : index === 1 ? "把正餐放在中段，决策最稳。" : "最后用甜品或夜宵收尾，适合继续散步或回宿舍。"}</p>
              <div class="action-inline" style="margin-top:14px;">
                <button class="button button--ghost" type="button" data-action="open-detail" data-restaurant-id="${restaurant.id}">查看详情</button>
                <button class="button button--secondary" type="button" data-action="toggle-favorite" data-restaurant-id="${restaurant.id}">
                  ${isFavorite(restaurant.id) ? "已收藏" : "加入收藏"}
                </button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>

      <aside class="route-side">
        <div class="route-map-card">
          <p class="eyebrow">Route Preview</p>
          <h4 style="margin:8px 0 16px;">Mock 路线图</h4>
          <div class="route-mini-map">
            ${stops.map((restaurant, index) => `
              <div class="route-dot" style="left:${restaurant.x}%; top:${restaurant.y}%;" title="${index + 1}. ${restaurant.name}"></div>
            `).join("")}
          </div>
        </div>
      </aside>
    </div>
  `;
}

function getFilteredRestaurants(includeMapFilters = false) {
  const list = restaurants.filter((restaurant) => {
    if (!matchesGlobalFilters(restaurant)) return false;
    if (!includeMapFilters) return true;
    return matchesMapFilters(restaurant);
  });

  return list.sort(sortRestaurants);
}

function matchesGlobalFilters(restaurant) {
  const schoolMatch = state.currentSchool === "all" || restaurant.schoolIds.includes(state.currentSchool);
  const keyword = state.searchKeyword.toLowerCase();
  const keywordMatch = !keyword || [
    restaurant.name,
    restaurant.category,
    restaurant.address,
    restaurant.description,
    restaurant.featuredReason,
    ...restaurant.tags
  ].join(" ").toLowerCase().includes(keyword);
  const scenarioMatch = matchScenario(restaurant, state.activeScenario);
  return schoolMatch && keywordMatch && scenarioMatch;
}

function matchesMapFilters(restaurant) {
  if (state.mapFilters.category !== "all" && restaurant.category !== state.mapFilters.category) return false;
  if (state.mapFilters.price === "lt20" && restaurant.price > 20) return false;
  if (state.mapFilters.price === "lt35" && restaurant.price > 35) return false;
  if (state.mapFilters.price === "lt50" && restaurant.price > 50) return false;
  if (state.mapFilters.price === "gt50" && restaurant.price <= 50) return false;
  if (state.mapFilters.rating !== "all" && restaurant.rating < Number(state.mapFilters.rating)) return false;
  if (state.mapFilters.walking !== "all" && restaurant.walkingMinutes > Number(state.mapFilters.walking)) return false;
  if (state.mapFilters.openOnly && !restaurant.isOpen) return false;
  return true;
}

function matchScenario(restaurant, scenario) {
  if (scenario === "all") return true;
  if (scenario === "budget") return restaurant.price <= 20;
  if (scenario === "walk") return restaurant.walkingMinutes <= 10;
  return restaurant.scenarioTags.includes(scenario);
}

function sortRestaurants(a, b) {
  if (state.mapFilters.sort === "rating") return b.rating - a.rating;
  if (state.mapFilters.sort === "price") return a.price - b.price;
  if (state.mapFilters.sort === "popular") return scenarioWeight(b) - scenarioWeight(a);
  return a.walkingMinutes - b.walkingMinutes || b.rating - a.rating;
}

function scenarioWeight(restaurant) {
  return restaurant.tags.length + restaurant.scenarioTags.length + restaurant.rating;
}

function selectRestaurant(id) {
  state.selectedRestaurantId = id;
  state.currentView = "detail";
  renderApp();
}

function toggleFavorite(id) {
  if (isFavorite(id)) {
    state.favorites = state.favorites.filter((item) => item !== id);
    showToast("已从收藏中移除");
  } else {
    state.favorites = [...state.favorites, id];
    showToast("已加入收藏");
  }
  saveFavorites();
  renderApp();
}

function isFavorite(id) {
  return state.favorites.includes(id);
}

function generateRandomPick() {
  const pool = getFilteredRestaurants();
  const pick = pool[Math.floor(Math.random() * pool.length)] || restaurants[0];
  state.selectedRestaurantId = pick.id;
  state.currentView = "detail";
  renderApp();
  showToast(`今天吃 ${pick.name}`);
}

function generateRoute(theme) {
  const exact = routePlans.find((item) => item.theme === theme && (state.currentSchool === "all" || item.schoolId === state.currentSchool));
  if (exact) return exact;
  const sameTheme = routePlans.find((item) => item.theme === theme);
  return sameTheme || routePlans[0];
}

function getRestaurantById(id) {
  return restaurants.find((item) => item.id === id) || restaurants[0];
}

function getSchoolName(id) {
  const school = schools.find((item) => item.id === id);
  return school ? school.name : "整个大学城";
}

function getCategoryColors(category) {
  return categoryColors[category] || ["#bfa6f6", "#ebe3ff"];
}

function renderRestaurantCard(restaurant) {
  return `
    <article class="restaurant-card interactive-card" data-hover-restaurant-id="${restaurant.id}" data-action="open-detail" data-restaurant-id="${restaurant.id}">
      <div class="cover-art" style="--cover-start:${getCategoryColors(restaurant.category)[0]}; --cover-end:${getCategoryColors(restaurant.category)[1]};">
        <img class="cover-image" src="${getRestaurantImage(restaurant, "card")}" alt="${restaurant.name}">
        <span>${restaurant.cover}</span>
      </div>
      <div class="restaurant-body">
        <div class="restaurant-head">
          <div>
            <h4>${restaurant.name}</h4>
            <div class="meta-row">
              <span>${restaurant.rating.toFixed(1)} 分</span>
              <span>人均 ¥${restaurant.price}</span>
              <span>${restaurant.walkingMinutes} 分钟</span>
            </div>
          </div>
          <button class="favorite-button ${isFavorite(restaurant.id) ? "is-active" : ""}" type="button" data-action="toggle-favorite" data-restaurant-id="${restaurant.id}">
            收藏
          </button>
        </div>
        <div class="tag-row">
          <span class="tag ${restaurant.isOpen ? "is-open" : "is-close"}">${restaurant.isOpen ? "营业中" : "已打烊"}</span>
          ${restaurant.tags.slice(0, 2).map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <p class="restaurant-desc">${restaurant.description}</p>
        <div class="action-row">
          <span class="muted">${restaurant.distanceText}</span>
          <button class="button button--ghost" type="button" data-action="open-detail" data-restaurant-id="${restaurant.id}">查看详情</button>
        </div>
      </div>
    </article>
  `;
}

function renderFavoriteListItem(restaurant) {
  return `
    <article class="favorite-list-item interactive-card" data-action="open-detail" data-restaurant-id="${restaurant.id}">
      <div class="favorite-thumb" style="--cover-start:${getCategoryColors(restaurant.category)[0]}; --cover-end:${getCategoryColors(restaurant.category)[1]};">
        <img class="favorite-thumb-image" src="${getRestaurantImage(restaurant, "result")}" alt="${restaurant.name}">
      </div>
      <div>
        <h4 style="margin:0 0 8px;">${restaurant.name}</h4>
        <div class="meta-row">
          <span>${restaurant.category}</span>
          <span>${restaurant.rating.toFixed(1)} 分</span>
          <span>人均 ¥${restaurant.price}</span>
          <span>${restaurant.walkingMinutes} 分钟</span>
        </div>
        <div class="tag-row">
          ${restaurant.tags.slice(0, 3).map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </div>
      <div class="action-inline">
        <button class="button button--ghost" type="button" data-action="open-detail" data-restaurant-id="${restaurant.id}">详情</button>
        <button class="button button--secondary" type="button" data-action="toggle-favorite" data-restaurant-id="${restaurant.id}">移除</button>
      </div>
    </article>
  `;
}

function renderSchoolChips() {
  return schools.map((school) => `
    <button class="school-chip ${state.currentSchool === school.id ? "is-active" : ""}" type="button" data-school-id="${school.id}">
      ${school.shortName}
    </button>
  `).join("");
}

function renderScenarioChips() {
  const scenarios = [
    ["all", "全部场景"],
    ["solo", "一人食"],
    ["dorm", "宿舍聚餐"],
    ["date", "约会"],
    ["night", "夜宵"],
    ["budget", "20 元内"],
    ["walk", "步行 10 分钟内"]
  ];

  return scenarios.map(([value, label]) => `
    <button class="chip ${state.activeScenario === value ? "is-active" : ""}" type="button" data-scenario="${value}">
      ${label}
    </button>
  `).join("");
}

function renderFavoritesFilterChip(value, label) {
  return `
    <button class="tab-chip ${state.favoritesFilter === value ? "is-active" : ""}" type="button" data-favorites-filter="${value}">
      ${label}
    </button>
  `;
}

function renderRouteThemeChip(value, label) {
  return `
    <button class="tab-chip ${state.currentRouteTheme === value ? "is-active" : ""}" type="button" data-route-theme="${value}">
      ${label}
    </button>
  `;
}

function renderScenarioLabel(value) {
  const labels = {
    solo: "一人食",
    dorm: "宿舍聚餐",
    date: "约会",
    night: "夜宵",
    budget: "预算友好",
    walk: "步行近"
  };
  return labels[value] || value;
}

function renderSelectOptions(options, currentValue, labels) {
  return options.map((option) => `
    <option value="${option}" ${currentValue === option ? "selected" : ""}>${labels[option] || option}</option>
  `).join("");
}

function clampMapPan(x, y, canvas, stage) {
  const maxX = 0;
  const maxY = 0;
  const minX = Math.min(0, canvas.clientWidth - stage.offsetWidth);
  const minY = Math.min(0, canvas.clientHeight - stage.offsetHeight);
  return {
    x: Math.max(minX, Math.min(maxX, x)),
    y: Math.max(minY, Math.min(maxY, y))
  };
}

function applyMapPan() {
  const stage = document.querySelector(".map-stage");
  if (!stage) return;
  stage.style.transform = `translate(${state.mapPan.x}px, ${state.mapPan.y}px)`;
}

function updateMapHoverState() {
  const markers = dom.map.querySelectorAll(".map-marker");
  const resultCards = dom.map.querySelectorAll(".result-card");
  const hoveredId = state.hoveredRestaurantId;

  markers.forEach((marker) => {
    marker.classList.toggle("is-highlighted", marker.dataset.restaurantId === hoveredId);
  });

  resultCards.forEach((card) => {
    card.classList.toggle("is-highlighted", card.dataset.restaurantId === hoveredId);
  });
}

function getRestaurantImage(restaurant, variant = "card") {
  const [start, end] = getCategoryColors(restaurant.category);
  const emoji = categoryEmoji[restaurant.category] || "🍽️";
  const presets = {
    hero: { width: 1200, height: 760, titleSize: 66, subtitleSize: 28, emojiSize: 126 },
    card: { width: 760, height: 520, titleSize: 40, subtitleSize: 20, emojiSize: 82 },
    result: { width: 420, height: 260, titleSize: 24, subtitleSize: 14, emojiSize: 56 },
    mini: { width: 280, height: 220, titleSize: 22, subtitleSize: 14, emojiSize: 54 }
  };
  const preset = presets[variant] || presets.card;
  const title = escapeSvgText(restaurant.name);
  const subtitle = escapeSvgText(`${restaurant.category} · ${restaurant.tags.slice(0, 2).join(" / ")}`);
  const overlay = restaurant.isOpen ? "营业中" : "已打烊";

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${preset.width} ${preset.height}">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${start}"/>
          <stop offset="100%" stop-color="${end}"/>
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="18" stdDeviation="20" flood-color="rgba(31,34,51,0.18)"/>
        </filter>
      </defs>
      <rect width="${preset.width}" height="${preset.height}" rx="36" fill="url(#g)"/>
      <circle cx="${preset.width - 80}" cy="84" r="120" fill="rgba(255,255,255,0.16)"/>
      <circle cx="80" cy="${preset.height - 60}" r="120" fill="rgba(255,255,255,0.12)"/>
      <rect x="36" y="34" rx="24" ry="24" width="${variant === "hero" ? 210 : 144}" height="${variant === "hero" ? 52 : 42}" fill="rgba(255,255,255,0.2)"/>
      <text x="${variant === "hero" ? 64 : 58}" y="${variant === "hero" ? 68 : 62}" font-size="${variant === "hero" ? 28 : 22}" font-family="PingFang SC, Microsoft YaHei, sans-serif" fill="#ffffff">${overlay}</text>
      <g filter="url(#shadow)">
        <rect x="${preset.width * 0.12}" y="${preset.height * 0.2}" rx="36" ry="36" width="${preset.width * 0.76}" height="${preset.height * 0.58}" fill="rgba(255,255,255,0.16)"/>
      </g>
      <text x="${preset.width * 0.14}" y="${preset.height * 0.46}" font-size="${preset.emojiSize}" fill="#ffffff">${emoji}</text>
      <text x="${preset.width * 0.14}" y="${preset.height * 0.72}" font-size="${preset.titleSize}" font-weight="700" font-family="PingFang SC, Microsoft YaHei, sans-serif" fill="#ffffff">${title}</text>
      <text x="${preset.width * 0.14}" y="${preset.height * 0.82}" font-size="${preset.subtitleSize}" font-family="PingFang SC, Microsoft YaHei, sans-serif" fill="rgba(255,255,255,0.88)">${subtitle}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getRankingImage(ranking) {
  const leadRestaurant = getRestaurantById(ranking.restaurantIds[0]);
  return getRestaurantImage(
    {
      ...leadRestaurant,
      name: ranking.title,
      category: leadRestaurant.category,
      tags: leadRestaurant.tags,
      isOpen: true
    },
    "result"
  );
}

function escapeSvgText(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderEmptyState(title, description) {
  return `
    <div class="empty-state">
      <p class="eyebrow">Empty State</p>
      <h3>${title}</h3>
      <p>${description}</p>
    </div>
  `;
}

function escapeAttribute(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function showToast(message) {
  dom.toast.textContent = message;
  dom.toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    dom.toast.classList.remove("is-visible");
  }, 1800);
}
