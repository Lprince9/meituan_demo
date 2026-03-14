const appState = {
  currentScreen: "home",
  currentCampus: "north",
  activeRank: "hot",
  activeFavoriteTab: "want",
  selectedRestaurantId: null,
  selectedGalleryIndex: 0,
  filters: { open: true, rating45: true, walk15: false, budget30: false },
  saved: new Set(["r02", "r04", "r07", "r13", "r18"])
};

const campuses = [
  { id: "north", name: "理工大学", short: "理工", area: "北门商圈", x: 22, y: 22 },
  { id: "arts", name: "师范学院", short: "师范", area: "东门生活带", x: 72, y: 26 },
  { id: "med", name: "医学院", short: "医学院", area: "南侧夜市带", x: 28, y: 66 },
  { id: "finance", name: "财经大学", short: "财经", area: "西门综合街", x: 74, y: 68 }
];

const categories = [
  ["快餐简餐", "#FFE3D0", "饭"],
  ["火锅烧烤", "#FFD7D2", "锅"],
  ["咖啡甜品", "#F0E4FF", "甜"],
  ["夜宵小吃", "#DFF0D8", "夜"],
  ["轻食健康", "#E7F6DD", "轻"],
  ["适合聚餐", "#FDE7C9", "聚"],
  ["约会氛围", "#F7E1EF", "约"],
  ["校门口热门", "#E7EBFF", "热"]
].map(([name, color, icon]) => ({ name, color, icon }));

const bannerStories = [
  { title: "宿舍夜宵地图", desc: "10 点后还在营业、步行 12 分钟内、学生回购率高的 8 家热门店。" },
  { title: "30 元吃饱清单", desc: "把预算压住也能吃得像样，优先推荐双拼饭、拉面和简餐窗口。" },
  { title: "约会不踩雷路线", desc: "从咖啡到晚饭再到甜品，适合周末轻松散步的一条线。" }
];

const rankTabs = [
  { id: "hot", label: "本周热门" },
  { id: "saved", label: "学生收藏最多" },
  { id: "late", label: "深夜友好" },
  { id: "new", label: "新店速递" }
];

const profileLinks = [
  ["我的评价", "整理最近写过的 12 条精选短评"],
  ["我的路线", "查看和分享自己收藏的校园美食路线"],
  ["消息通知", "夜宵榜单和新店提醒都在这里"],
  ["设置", "校区切换、口味偏好、隐私选项"]
].map(([title, desc]) => ({ title, desc }));

const routePlans = [
  { title: "下午咖啡 + 晚饭 + 甜品", desc: "师范学院东门出发，2 小时轻松走完，适合周末约会。", time: "总步行 24 分钟", theme: "约会氛围" },
  { title: "校门口速食线", desc: "理工大学北门三连吃，40 分钟内解决晚饭和加餐。", time: "总步行 11 分钟", theme: "下课快吃" },
  { title: "周末夜宵线", desc: "医学院宿舍区到南侧夜市，适合 21:30 后出发。", time: "总步行 18 分钟", theme: "夜宵友好" }
];

const restaurants = [
  {
    id: "r01", name: "锅气食堂", campus: "north", category: "快餐简餐", rating: 4.7, price: 22, status: "营业中",
    distance: "步行 6 分钟", gate: "理工大学北门", x: 26, y: 28, recommended: true,
    tags: ["20元内", "下课快吃", "排队少"], reason: "双拼饭出餐快，午休时间也能稳稳吃上。",
    reviews: ["12:10 人虽然多，但翻台快，适合下课冲。", "双拼鸡腿饭很稳，米饭量对男生也够。"],
    dishes: [["椒香鸡腿双拼", 18], ["黑椒牛柳饭", 24], ["椒盐鸡米花", 12]],
    photos: ["linear-gradient(135deg,#e8a86a,#7e4326)", "linear-gradient(135deg,#f6d7a3,#bf6a3b)", "linear-gradient(135deg,#7bc47f,#f3e0c1)"]
  },
  {
    id: "r02", name: "半糖研究所", campus: "arts", category: "咖啡甜品", rating: 4.8, price: 26, status: "营业中",
    distance: "步行 8 分钟", gate: "师范学院东门", x: 68, y: 30, recommended: false,
    tags: ["拍照好看", "约会氛围", "甜口推荐"], reason: "靠窗位出片稳定，蛋糕和拿铁都属于不容易踩雷的类型。",
    reviews: ["芋泥巴斯克很稳，下午四点后比较容易有窗边位。", "灯光柔和，适合带朋友来坐一会。"],
    dishes: [["海盐巴斯克", 28], ["焦糖燕麦拿铁", 24], ["葡萄茉莉卷", 26]],
    photos: ["linear-gradient(135deg,#d3b6ff,#fce8dc)", "linear-gradient(135deg,#f5c6c6,#b48ee5)", "linear-gradient(135deg,#f7e3b5,#d8b3ff)"]
  },
  {
    id: "r03", name: "铁板夜宵局", campus: "med", category: "夜宵小吃", rating: 4.6, price: 31, status: "营业中",
    distance: "步行 12 分钟", gate: "医学院南门", x: 34, y: 72, recommended: true,
    tags: ["夜宵友好", "适合聚餐", "22点后营业"], reason: "烤串和铁板主食一起点更划算，适合晚自习后补一顿。",
    reviews: ["11 点到还很热闹，烤五花基本不会失手。", "两三个人拼单很合适。"],
    dishes: [["招牌牛肉串", 16], ["铁板炒面", 18], ["蒜香茄子", 14]],
    photos: ["linear-gradient(135deg,#5d2a17,#ff9f5a)", "linear-gradient(135deg,#f3be77,#7d3a1b)", "linear-gradient(135deg,#6c3420,#f0d0a0)"]
  },
  {
    id: "r04", name: "面面俱到", campus: "finance", category: "快餐简餐", rating: 4.5, price: 19, status: "营业中",
    distance: "步行 5 分钟", gate: "财经大学西门", x: 70, y: 62, recommended: false,
    tags: ["20元内", "一个人吃", "出餐快"], reason: "人均压得住，汤面和拌面都适合预算紧的时候。",
    reviews: ["西门出来拐个弯就到，懒得走远时首选。", "番茄肥牛面量大，女生两个人都能分。"],
    dishes: [["番茄肥牛面", 19], ["椒麻拌面", 17], ["卤蛋豆干拼", 8]],
    photos: ["linear-gradient(135deg,#f0d2a0,#ca5d2e)", "linear-gradient(135deg,#eac89a,#a8482b)", "linear-gradient(135deg,#f7e8c9,#8d3c21)"]
  },
  {
    id: "r05", name: "烤匠同学会", campus: "north", category: "火锅烧烤", rating: 4.7, price: 58, status: "营业中",
    distance: "步行 14 分钟", gate: "理工大学北门", x: 18, y: 18, recommended: false,
    tags: ["适合聚餐", "氛围在线", "周末热门"], reason: "社团聚会常去，烤鱼和小串组合性价比高。",
    reviews: ["四个人点一条鱼加小串就够。", "周五要早点去，不然得排。"],
    dishes: [["青花椒烤鱼", 98], ["招牌五花肉", 28], ["冰粉", 12]],
    photos: ["linear-gradient(135deg,#3f2b22,#d46f42)", "linear-gradient(135deg,#b44b26,#ffb36d)", "linear-gradient(135deg,#f4d7b0,#6f2c1d)"]
  },
  {
    id: "r06", name: "轻食植物园", campus: "arts", category: "轻食健康", rating: 4.4, price: 29, status: "营业中",
    distance: "步行 9 分钟", gate: "师范学院东门", x: 77, y: 24, recommended: false,
    tags: ["轻食健康", "低负担", "午餐友好"], reason: "课间想吃得清爽一点时很合适，沙拉碗搭配自由。",
    reviews: ["鸡胸和牛油果都挺新鲜。", "适合健身后回来顺路吃。"],
    dishes: [["烟熏鸡胸能量碗", 29], ["牛油果酸奶杯", 18], ["抹茶坚果酸奶", 16]],
    photos: ["linear-gradient(135deg,#b7d9a8,#f6f4df)", "linear-gradient(135deg,#7bc47f,#e9f7ce)", "linear-gradient(135deg,#d5efc2,#98b77d)"]
  },
  {
    id: "r07", name: "甜橙面包房", campus: "finance", category: "咖啡甜品", rating: 4.9, price: 23, status: "营业中",
    distance: "步行 7 分钟", gate: "财经大学西门", x: 78, y: 74, recommended: true,
    tags: ["面包烘焙", "早餐友好", "拍照好看"], reason: "早八前也来得及买，碱水和可颂是学生回购率最高的两样。",
    reviews: ["西门早上排队但速度快。", "芝士火腿可颂很顶，适合带去自习室。"],
    dishes: [["芝士火腿可颂", 16], ["碱水结", 9], ["桂花拿铁", 21]],
    photos: ["linear-gradient(135deg,#f7d5a5,#e6804d)", "linear-gradient(135deg,#fce6ba,#b76132)", "linear-gradient(135deg,#f3c49e,#855235)"]
  },
  {
    id: "r08", name: "深夜砂锅铺", campus: "med", category: "夜宵小吃", rating: 4.5, price: 27, status: "营业中",
    distance: "步行 10 分钟", gate: "医学院南门", x: 20, y: 76, recommended: false,
    tags: ["夜宵友好", "热汤热饭", "宿舍常吃"], reason: "晚上温度低的时候尤其受欢迎，砂锅粉和小炒盖饭都偏稳。",
    reviews: ["夜里想吃热的来这就对了。", "砂锅粉有点辣，但很香。"],
    dishes: [["肥肠砂锅粉", 24], ["香菇滑鸡盖饭", 22], ["红糖糍粑", 10]],
    photos: ["linear-gradient(135deg,#7d3a28,#d9a16f)", "linear-gradient(135deg,#f0c58a,#8a4226)", "linear-gradient(135deg,#e7b882,#69311d)"]
  },
  {
    id: "r09", name: "西门炸鸡站", campus: "finance", category: "夜宵小吃", rating: 4.3, price: 21, status: "营业中",
    distance: "步行 4 分钟", gate: "财经大学西门", x: 65, y: 70, recommended: false,
    tags: ["校门口", "夜宵友好", "下课快吃"], reason: "从校门出来几乎不用绕路，适合边走边吃。",
    reviews: ["韩式甜辣味最稳。", "晚上十点后基本都是学生。"],
    dishes: [["招牌炸鸡块", 18], ["薯条拼盘", 14], ["可乐桶", 12]],
    photos: ["linear-gradient(135deg,#ffcf8e,#c05f1d)", "linear-gradient(135deg,#f6d2a1,#9f4218)", "linear-gradient(135deg,#f4bf7c,#7e300d)"]
  },
  {
    id: "r10", name: "校门口冒菜局", campus: "north", category: "火锅烧烤", rating: 4.6, price: 28, status: "营业中",
    distance: "步行 9 分钟", gate: "理工大学北门", x: 31, y: 16, recommended: false,
    tags: ["30元吃饱", "适合聚餐", "辣口"], reason: "自己拿菜更灵活，控制预算也方便。",
    reviews: ["配料多，28 左右就能吃很饱。", "晚饭点人多，但翻台还行。"],
    dishes: [["麻辣冒菜", 26], ["牛肉丸拼盘", 14], ["冰豆花", 8]],
    photos: ["linear-gradient(135deg,#ff9a73,#873521)", "linear-gradient(135deg,#e26c46,#ffd2a4)", "linear-gradient(135deg,#ffc18b,#682b1d)"]
  },
  {
    id: "r11", name: "云朵酸奶杯", campus: "arts", category: "咖啡甜品", rating: 4.5, price: 18, status: "营业中",
    distance: "步行 6 分钟", gate: "师范学院东门", x: 63, y: 22, recommended: false,
    tags: ["低负担", "下午茶", "一个人吃"], reason: "价格轻，适合上课间隙来一杯。",
    reviews: ["草莓酸奶碗颜值高。", "想吃点甜但不腻的时候很合适。"],
    dishes: [["莓果酸奶碗", 18], ["芒果酸奶杯", 16], ["燕麦脆", 6]],
    photos: ["linear-gradient(135deg,#f9d5e1,#f8f7f3)", "linear-gradient(135deg,#f6c2d9,#d7b8ff)", "linear-gradient(135deg,#fdf0d4,#eab1cf)"]
  },
  {
    id: "r12", name: "食间小馆", campus: "med", category: "快餐简餐", rating: 4.4, price: 24, status: "营业中",
    distance: "步行 7 分钟", gate: "医学院南门", x: 30, y: 60, recommended: false,
    tags: ["下课快吃", "宿舍常吃", "预算友好"], reason: "盖饭和汤饭都稳，适合不想思考时直接冲。",
    reviews: ["番茄牛腩饭很下饭。", "离宿舍区近，下楼就能买。"],
    dishes: [["番茄牛腩饭", 24], ["照烧鸡排饭", 22], ["海带豆腐汤", 8]],
    photos: ["linear-gradient(135deg,#d3a77d,#88411e)", "linear-gradient(135deg,#f0d6a4,#b55b34)", "linear-gradient(135deg,#eab884,#7f341c)"]
  },
  {
    id: "r13", name: "山谷炭火", campus: "finance", category: "火锅烧烤", rating: 4.8, price: 65, status: "营业中",
    distance: "步行 13 分钟", gate: "财经大学西门", x: 82, y: 60, recommended: true,
    tags: ["适合聚餐", "约会氛围", "热门"], reason: "环境在线，肉质也稳定，想吃得更有仪式感可以来这里。",
    reviews: ["约会和聚餐都很体面。", "厚切五花和南瓜粥必点。"],
    dishes: [["厚切五花", 32], ["调味牛五花", 36], ["南瓜粥", 12]],
    photos: ["linear-gradient(135deg,#2f1d1a,#f0a870)", "linear-gradient(135deg,#6c3420,#f0c08c)", "linear-gradient(135deg,#f8d7b2,#8a4227)"]
  },
  {
    id: "r14", name: "晴空便当屋", campus: "north", category: "快餐简餐", rating: 4.6, price: 20, status: "营业中",
    distance: "步行 8 分钟", gate: "理工大学北门", x: 24, y: 35, recommended: false,
    tags: ["20元内", "带走方便", "一个人吃"], reason: "适合打包回寝室，便当结构很清晰。",
    reviews: ["鸡排便当量很足。", "晚上打包回去看剧刚好。"],
    dishes: [["照烧鸡排便当", 20], ["咖喱牛肉便当", 24], ["玉子烧", 10]],
    photos: ["linear-gradient(135deg,#f0cf88,#d86f2d)", "linear-gradient(135deg,#f9e6c1,#af4b20)", "linear-gradient(135deg,#ffbc7a,#6c3418)"]
  },
  {
    id: "r15", name: "茶汐小站", campus: "arts", category: "咖啡甜品", rating: 4.3, price: 15, status: "营业中",
    distance: "步行 5 分钟", gate: "师范学院东门", x: 74, y: 18, recommended: false,
    tags: ["低价", "下课快买", "饮品"], reason: "奶茶价格友好，出杯速度快。",
    reviews: ["珍珠奶茶和椰椰系列都很稳。", "课间十分钟够买。"],
    dishes: [["黑糖珍珠奶茶", 13], ["椰椰乌龙", 15], ["芋圆奶绿", 14]],
    photos: ["linear-gradient(135deg,#f7dcc0,#d89d72)", "linear-gradient(135deg,#f2cdb2,#b48369)", "linear-gradient(135deg,#f6eadb,#d4b8a0)"]
  },
  {
    id: "r16", name: "椒麻香锅社", campus: "med", category: "火锅烧烤", rating: 4.7, price: 33, status: "营业中",
    distance: "步行 11 分钟", gate: "医学院南门", x: 38, y: 63, recommended: false,
    tags: ["适合聚餐", "重口满足", "晚饭热门"], reason: "三个人拼一锅很合适，口味重但容易上头。",
    reviews: ["香锅的锅气很足。", "学生套餐挺划算。"],
    dishes: [["双人香锅", 58], ["酥肉", 18], ["气泡梅子汁", 10]],
    photos: ["linear-gradient(135deg,#934124,#ffb16d)", "linear-gradient(135deg,#5d2418,#ef8952)", "linear-gradient(135deg,#f9d5ac,#87361e)"]
  },
  {
    id: "r17", name: "谷仓沙拉", campus: "finance", category: "轻食健康", rating: 4.4, price: 27, status: "营业中",
    distance: "步行 9 分钟", gate: "财经大学西门", x: 76, y: 80, recommended: false,
    tags: ["轻食健康", "午餐友好", "拍照好看"], reason: "色彩干净，适合想控制热量又想拍照的人。",
    reviews: ["三文鱼藜麦碗味道清爽。", "适合中午一个人来。"],
    dishes: [["三文鱼藜麦碗", 32], ["香草鸡肉卷", 26], ["冷萃美式", 15]],
    photos: ["linear-gradient(135deg,#c6e4b5,#eef6d8)", "linear-gradient(135deg,#a1c98d,#f6f3df)", "linear-gradient(135deg,#d5efc2,#8db07c)"]
  },
  {
    id: "r18", name: "星幕甜品屋", campus: "north", category: "咖啡甜品", rating: 4.8, price: 25, status: "营业中",
    distance: "步行 11 分钟", gate: "理工大学北门", x: 14, y: 26, recommended: true,
    tags: ["约会氛围", "拍照好看", "甜品强"], reason: "甜品摆盘漂亮，室内光线也很适合拍照。",
    reviews: ["伯爵千层和抹茶卷都很稳。", "晚上过去氛围更好。"],
    dishes: [["伯爵千层", 26], ["海盐奶油卷", 18], ["青提气泡饮", 16]],
    photos: ["linear-gradient(135deg,#d9c0ff,#fbe0d7)", "linear-gradient(135deg,#f5d4ee,#c6acf2)", "linear-gradient(135deg,#fce8dc,#c6b3ff)"]
  },
  {
    id: "r19", name: "晚风烤冷面", campus: "med", category: "夜宵小吃", rating: 4.2, price: 13, status: "营业中",
    distance: "步行 6 分钟", gate: "医学院南门", x: 22, y: 69, recommended: false,
    tags: ["低价", "夜宵友好", "校门口"], reason: "嘴馋的时候最容易顺手买一份。",
    reviews: ["加蛋加肠就很满足。", "适合边走边吃。"],
    dishes: [["招牌烤冷面", 10], ["双蛋加肠版", 13], ["冰豆浆", 5]],
    photos: ["linear-gradient(135deg,#c96a3a,#f2c08a)", "linear-gradient(135deg,#7a331d,#f0b079)", "linear-gradient(135deg,#f4dab4,#995031)"]
  },
  {
    id: "r20", name: "松露小馆", campus: "arts", category: "约会氛围", rating: 4.7, price: 52, status: "营业中",
    distance: "步行 13 分钟", gate: "师范学院东门", x: 82, y: 34, recommended: false,
    tags: ["约会氛围", "西餐", "环境好"], reason: "适合想稍微认真吃一顿的时候，氛围不压人。",
    reviews: ["双人套餐不错，拍照也舒服。", "人均稍高，但体验在线。"],
    dishes: [["黑松露奶油意面", 46], ["香煎鸡排", 52], ["提拉米苏", 22]],
    photos: ["linear-gradient(135deg,#eee2d0,#9f7b65)", "linear-gradient(135deg,#d9c7b3,#7a5c48)", "linear-gradient(135deg,#f7ead9,#b6907a)"]
  },
  {
    id: "r21", name: "北门煎饼社", campus: "north", category: "夜宵小吃", rating: 4.4, price: 11, status: "营业中",
    distance: "步行 4 分钟", gate: "理工大学北门", x: 29, y: 24, recommended: false,
    tags: ["低价", "校门口", "下课快买"], reason: "赶时间时最方便，四分钟内就能拿到手。",
    reviews: ["加薄脆很香。", "早课前买一份也很方便。"],
    dishes: [["双蛋煎饼", 9], ["里脊煎饼", 11], ["豆浆", 4]],
    photos: ["linear-gradient(135deg,#f8d28f,#d4702f)", "linear-gradient(135deg,#efc386,#9a4319)", "linear-gradient(135deg,#ffe2b6,#ac632e)"]
  },
  {
    id: "r22", name: "椰子研究室", campus: "finance", category: "咖啡甜品", rating: 4.6, price: 20, status: "营业中",
    distance: "步行 8 分钟", gate: "财经大学西门", x: 72, y: 78, recommended: false,
    tags: ["饮品", "拍照好看", "下午茶"], reason: "椰子系饮品辨识度高，杯子也很适合拍照。",
    reviews: ["生椰系列很受欢迎。", "下午来排队还算可控。"],
    dishes: [["生椰拿铁", 19], ["椰青美式", 18], ["椰椰冰沙", 20]],
    photos: ["linear-gradient(135deg,#f7f1dd,#b0c98c)", "linear-gradient(135deg,#ebf0cf,#90b27d)", "linear-gradient(135deg,#f6f5dd,#7e9b67)"]
  },
  {
    id: "r23", name: "食光家宴", campus: "arts", category: "适合聚餐", rating: 4.5, price: 42, status: "营业中",
    distance: "步行 14 分钟", gate: "师范学院东门", x: 66, y: 38, recommended: false,
    tags: ["适合聚餐", "家庭菜", "社团聚会"], reason: "桌型舒服，四到六个人一起去最合适。",
    reviews: ["酸菜鱼和小炒黄牛肉最稳。", "聚会点套餐很方便。"],
    dishes: [["酸菜鱼", 68], ["小炒黄牛肉", 56], ["青柠气泡饮", 12]],
    photos: ["linear-gradient(135deg,#f0b77e,#9f4e2d)", "linear-gradient(135deg,#f9e0be,#b66534)", "linear-gradient(135deg,#ffc990,#84401d)"]
  },
  {
    id: "r24", name: "宿舍楼下卷饼", campus: "med", category: "快餐简餐", rating: 4.3, price: 14, status: "营业中",
    distance: "步行 3 分钟", gate: "医学院南门", x: 27, y: 56, recommended: false,
    tags: ["低价", "宿舍常吃", "带走方便"], reason: "距离极近，适合懒得出门的时候解决一餐。",
    reviews: ["卷饼分量挺足。", "加土豆丝更香。"],
    dishes: [["鸡排卷饼", 14], ["里脊卷饼", 13], ["豆浆", 4]],
    photos: ["linear-gradient(135deg,#efc68d,#b45a2f)", "linear-gradient(135deg,#f8debd,#a74a24)", "linear-gradient(135deg,#f8cf97,#773114)"]
  }
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const campusPalettes = {
  north: ["#ffcf8e", "#ff9f5a", "#8a4227"],
  arts: ["#d9c0ff", "#f8d8e8", "#6b4b88"],
  med: ["#bfe2c3", "#7bc47f", "#31543a"],
  finance: ["#f7e7b1", "#f0b46a", "#7c5535"]
};

const mapState = {
  x: 0,
  y: 0,
  scale: 1,
  dragging: false,
  startX: 0,
  startY: 0
};

const imageCache = new Map();

function getCampusById(id) {
  return campuses.find((campus) => campus.id === id);
}

function getRestaurantById(id) {
  return restaurants.find((restaurant) => restaurant.id === id);
}

function getCampusRestaurants(campusId) {
  return restaurants.filter((restaurant) => restaurant.campus === campusId);
}

function getFilteredRestaurants() {
  return getCampusRestaurants(appState.currentCampus).filter((restaurant) => {
    if (appState.filters.open && restaurant.status !== "营业中") return false;
    if (appState.filters.rating45 && restaurant.rating < 4.5) return false;
    if (appState.filters.budget30 && restaurant.price > 30) return false;
    if (appState.filters.walk15) {
      const minutes = Number.parseInt(restaurant.distance.replace(/\D/g, ""), 10);
      if (minutes > 15) return false;
    }
    return true;
  });
}

function svgImage(title, subtitle, palette, accent) {
  const [c1, c2, c3] = palette;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${c1}"/>
          <stop offset="60%" stop-color="${c2}"/>
          <stop offset="100%" stop-color="${c3}"/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" rx="36" fill="url(#bg)"/>
      <circle cx="650" cy="120" r="120" fill="#ffffff" fill-opacity="0.18"/>
      <circle cx="140" cy="490" r="160" fill="#ffffff" fill-opacity="0.14"/>
      <rect x="56" y="70" width="158" height="42" rx="21" fill="#ffffff" fill-opacity="0.22"/>
      <text x="76" y="98" font-size="24" font-family="Arial, PingFang SC, sans-serif" fill="white">${subtitle}</text>
      <text x="56" y="340" font-size="64" font-weight="700" font-family="Arial, PingFang SC, sans-serif" fill="white">${title}</text>
      <rect x="56" y="390" width="220" height="18" rx="9" fill="#ffffff" fill-opacity="0.34"/>
      <rect x="56" y="425" width="170" height="18" rx="9" fill="#ffffff" fill-opacity="0.22"/>
      <rect x="560" y="420" width="150" height="76" rx="24" fill="${accent}" opacity="0.92"/>
      <text x="603" y="468" font-size="28" font-weight="700" font-family="Arial, PingFang SC, sans-serif" fill="#1f2233">Food</text>
    </svg>
  `;
  return svg;
}

function getRestaurantImage(restaurant, index = 0) {
  const key = `${restaurant.id}-${index}`;
  if (imageCache.has(key)) return imageCache.get(key);
  const palette = campusPalettes[restaurant.campus] || campusPalettes.north;
  const variants = [
    svgImage(restaurant.name, restaurant.category, palette, "#d9f06a"),
    svgImage(restaurant.dishes[index % restaurant.dishes.length][0], restaurant.gate, [palette[1], palette[0], palette[2]], "#ff9f5a"),
    svgImage(restaurant.tags[0], `人均 ¥${restaurant.price}`, [palette[0], palette[2], palette[1]], "#ffffff")
  ];
  const svg = variants[index % variants.length];
  const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  imageCache.set(key, url);
  return imageCache.get(key);
}

function restaurantCard(restaurant) {
  const saved = appState.saved.has(restaurant.id);
  const badge = restaurant.recommended ? "推荐" : restaurant.category;
  const badgeClass = restaurant.recommended ? "accent" : "soft";
  return `
    <article class="restaurant-card" data-restaurant="${restaurant.id}">
      <div class="card-rail">
        <div class="thumb">
          <img class="media-img" src=${JSON.stringify(getRestaurantImage(restaurant))} alt="${restaurant.name}">
          <button class="heart" data-save="${restaurant.id}">${saved ? "♥" : "♡"}</button>
        </div>
        <div class="badge-stack">
          ${restaurant.tags.slice(0, 3).map((tag, index) => `<span class="badge ${index === 0 ? "soft" : ""}">${tag}</span>`).join("")}
        </div>
      </div>
      <div class="restaurant-main">
        <div class="row">
          <div class="title-sm">${restaurant.name}</div>
          <span class="badge ${badgeClass}">${badge}</span>
        </div>
        <div class="meta">
          <span>${restaurant.rating.toFixed(1)} 分</span>
          <span>人均 ¥${restaurant.price}</span>
          <span>${restaurant.distance}</span>
          <span>${restaurant.gate}</span>
        </div>
        <p class="desc">${restaurant.reason}</p>
      </div>
    </article>
  `;
}

function renderCampusSwitcher() {
  $("#campus-switcher").innerHTML = campuses.map((campus) => `
    <button class="campus-pill ${campus.id === appState.currentCampus ? "active" : ""}" data-campus="${campus.id}">
      <strong>${campus.name}</strong>
      <small>${campus.area}</small>
    </button>
  `).join("");
}

function renderCategories() {
  $("#category-grid").innerHTML = categories.map((category) => `
    <div class="category-card">
      <div class="category-icon" style="background:${category.color};">${category.icon}</div>
      <span>${category.name}</span>
    </div>
  `).join("");
}

function renderHome() {
  renderCampusSwitcher();
  renderCategories();
  const nearby = getCampusRestaurants(appState.currentCampus).sort((a, b) => b.rating - a.rating).slice(0, 4);
  $("#nearby-list").innerHTML = nearby.map(restaurantCard).join("");
  const story = bannerStories[campuses.findIndex((campus) => campus.id === appState.currentCampus) % bannerStories.length];
  $("#hero-banner-title").textContent = story.title;
  $("#hero-banner-desc").textContent = story.desc;
  $("#rank-tabs").innerHTML = rankTabs.map((tab) => `
    <button class="tab-pill ${tab.id === appState.activeRank ? "active" : ""}" data-rank="${tab.id}">${tab.label}</button>
  `).join("");

  let rankItems = [];
  if (appState.activeRank === "hot") rankItems = [...restaurants].sort((a, b) => b.rating - a.rating).slice(0, 4);
  if (appState.activeRank === "saved") rankItems = restaurants.filter((restaurant) => appState.saved.has(restaurant.id)).slice(0, 4);
  if (appState.activeRank === "late") rankItems = restaurants.filter((restaurant) => restaurant.tags.includes("夜宵友好")).slice(0, 4);
  if (appState.activeRank === "new") rankItems = restaurants.slice(-4).reverse();

  $("#rank-list").innerHTML = rankItems.map((restaurant) => `
    <div class="list-item" data-restaurant="${restaurant.id}">
      <div>
        <strong>${restaurant.name}</strong>
        <span class="desc">${restaurant.gate} · ${restaurant.reason}</span>
      </div>
      <span class="badge accent">¥${restaurant.price}</span>
    </div>
  `).join("");
}

function renderQuickFilters() {
  const quicks = [
    ["open", "正在营业"],
    ["rating45", "评分 4.5+"],
    ["walk15", "步行 15 分钟内"],
    ["budget30", "人均 30 元内"]
  ];
  $("#quick-filters").innerHTML = quicks.map(([key, label]) => `
    <button class="quick-filter ${appState.filters[key] ? "active" : ""}" data-filter="${key}">${label}</button>
  `).join("");
}

function markerMarkup(restaurant) {
  const isSaved = appState.saved.has(restaurant.id);
  const isActive = appState.selectedRestaurantId === restaurant.id;
  const classes = ["marker"];
  if (restaurant.recommended) classes.push("recommended");
  if (isSaved) classes.push("saved");
  if (isActive) classes.push("active");
  return `
    <button class="${classes.join(" ")}" data-marker="${restaurant.id}" style="left:${restaurant.x}%;top:${restaurant.y}%;">
      <span>${isSaved ? "♥" : "●"}</span>
      <span>¥${restaurant.price}</span>
    </button>
  `;
}

function renderPreviewCard() {
  const preview = $("#preview-card");
  const restaurant = getRestaurantById(appState.selectedRestaurantId);
  if (!restaurant) {
    preview.classList.remove("active");
    preview.innerHTML = "";
    return;
  }
  preview.classList.add("active");
  preview.innerHTML = `
    <div class="preview-rail">
      <div class="preview-thumb"><img class="media-img" src=${JSON.stringify(getRestaurantImage(restaurant))} alt="${restaurant.name}"></div>
      <div class="badge-stack">
        ${restaurant.tags.slice(0, 2).map((tag, index) => `<span class="badge ${index === 0 ? "soft" : ""}">${tag}</span>`).join("")}
      </div>
    </div>
    <div class="preview-meta">
      <div class="row">
        <strong>${restaurant.name}</strong>
        <span class="badge accent">${restaurant.rating.toFixed(1)} 分</span>
      </div>
      <div class="meta">
        <span>人均 ¥${restaurant.price}</span>
        <span>${restaurant.distance}</span>
        <span>${restaurant.gate}</span>
      </div>
      <div class="preview-actions">
        <button class="btn btn-secondary" data-detail="${restaurant.id}">查看详情</button>
        <button class="btn btn-primary">去这里</button>
      </div>
    </div>
  `;
}

function renderSheet() {
  const sheetOptions = [
    ["菜系", "快餐简餐 / 咖啡甜品 / 夜宵小吃 / 火锅烧烤"],
    ["价格区间", "20 元内 / 30 元内 / 50 元内"],
    ["距离学校", "校门口 / 步行 10 分钟 / 步行 15 分钟"],
    ["评分", "4.3+ / 4.5+ / 4.8+"],
    ["营业状态", "正在营业 / 深夜营业"],
    ["用餐场景", "适合一个人 / 适合聚餐 / 约会氛围"],
    ["氛围偏好", "拍照好看 / 排队少 / 宿舍常吃"],
    ["路线", "从当前学校出发 / 加入周末路线"]
  ];
  $("#sheet-grid").innerHTML = sheetOptions.map(([title, text]) => `
    <div class="sheet-card">
      <strong>${title}</strong>
      <span class="desc">${text}</span>
    </div>
  `).join("");
}

function renderMap() {
  $("#current-campus-button").textContent = getCampusById(appState.currentCampus).short;
  renderQuickFilters();
  $("#campus-nodes").innerHTML = campuses.map((campus) => `
    <div class="campus-node" style="left:${campus.x}%;top:${campus.y}%;">
      <div><strong>${campus.short}</strong><br>${campus.area}</div>
    </div>
  `).join("");

  const markers = getFilteredRestaurants();
  if (!markers.find((item) => item.id === appState.selectedRestaurantId)) {
    appState.selectedRestaurantId = markers[0] ? markers[0].id : null;
  }
  $("#map-markers").innerHTML = markers.map(markerMarkup).join("");
  renderPreviewCard();
  renderSheet();
}

function renderDetail() {
  const restaurant = getRestaurantById(appState.selectedRestaurantId) || getCampusRestaurants(appState.currentCampus)[0];
  if (!restaurant) return;
  const campus = getCampusById(restaurant.campus);
  $("#detail-name").textContent = restaurant.name;
  $("#detail-status").textContent = restaurant.status;
  $("#detail-main-image").innerHTML = `<img class="media-img" src=${JSON.stringify(getRestaurantImage(restaurant, appState.selectedGalleryIndex))} alt="${restaurant.name}">`;
  $("#detail-meta").innerHTML = `
    <span>${restaurant.rating.toFixed(1)} 分</span>
    <span>人均 ¥${restaurant.price}</span>
    <span>${restaurant.distance}</span>
    <span>${restaurant.gate}</span>
  `;
  $("#detail-tags").innerHTML = restaurant.tags.map((tag, index) => `<span class="badge ${index === 0 ? "accent" : "soft"}">${tag}</span>`).join("");
  $("#gallery-strip").innerHTML = [0, 1, 2].map((index) => `
    <button class="gallery-item ${index === appState.selectedGalleryIndex ? "active" : ""}" data-gallery-index="${index}">
      <img class="media-img" src=${JSON.stringify(getRestaurantImage(restaurant, index))} alt="${restaurant.name} ${index + 1}">
    </button>
  `).join("");
  $("#detail-reasons").innerHTML = [
    restaurant.reason,
    "下课高峰出餐快，学生点单容错率高。",
    "双人或三人拼单性价比更好，适合作为校园固定局。"
  ].map((text) => `<div class="review">${text}</div>`).join("");
  $("#detail-info-grid").innerHTML = `
    <div class="info-pill"><strong>${campus.name}</strong><span class="desc">最近学校</span></div>
    <div class="info-pill"><strong>${restaurant.distance}</strong><span class="desc">从校门出发</span></div>
    <div class="info-pill"><strong>${restaurant.tags.includes("带走方便") ? "适合外带" : "堂食更佳"}</strong><span class="desc">宿舍 / 路上都方便</span></div>
    <div class="info-pill"><strong>${restaurant.tags.includes("适合聚餐") ? "2-4 人最佳" : "1-2 人轻松吃"}</strong><span class="desc">推荐人数</span></div>
  `;
  $("#dish-row").innerHTML = restaurant.dishes.map(([name, price], index) => `
    <div class="dish-card">
      <div class="dish-photo"><img class="media-img" src=${JSON.stringify(getRestaurantImage(restaurant, index + 1))} alt="${name}"></div>
      <div class="copy">
        <strong>${name}</strong>
        <span class="desc">学生常点</span>
        <span class="badge accent">¥${price}</span>
      </div>
    </div>
  `).join("");
  $("#review-list").innerHTML = restaurant.reviews.map((review) => `<div class="review">${review}</div>`).join("");
  $("#detail-route-title").textContent = `${restaurant.gate} 出发 · ${restaurant.name} 到店路线`;
  $("#detail-route-desc").textContent = `从 ${restaurant.gate} 步行前往约 ${restaurant.distance.replace("步行 ", "")}，适合晚课后顺路吃一顿，再加入甜品或夜宵路线。`;
  $("#detail-save").textContent = appState.saved.has(restaurant.id) ? "♥" : "♡";
}

function renderFavorites() {
  const tabs = [
    ["want", "想去"],
    ["done", "已打卡"],
    ["dorm", "宿舍常吃"],
    ["date", "约会备选"],
    ["late", "夜宵清单"]
  ];
  $("#favorite-tabs").innerHTML = tabs.map(([id, label]) => `
    <button class="tab-pill ${id === appState.activeFavoriteTab ? "active" : ""}" data-favorite-tab="${id}">${label}</button>
  `).join("");

  let data = restaurants.filter((restaurant) => appState.saved.has(restaurant.id));
  if (appState.activeFavoriteTab === "done") data = restaurants.filter((restaurant) => ["r01", "r07", "r16"].includes(restaurant.id));
  if (appState.activeFavoriteTab === "dorm") data = restaurants.filter((restaurant) => restaurant.tags.includes("宿舍常吃")).slice(0, 4);
  if (appState.activeFavoriteTab === "date") data = restaurants.filter((restaurant) => restaurant.tags.includes("约会氛围")).slice(0, 4);
  if (appState.activeFavoriteTab === "late") data = restaurants.filter((restaurant) => restaurant.tags.includes("夜宵友好")).slice(0, 4);

  $("#favorite-list").innerHTML = data.slice(0, 4).map(restaurantCard).join("");
  $("#favorites-count").textContent = `${data.length} 家店`;
  $("#route-list").innerHTML = routePlans.map((route) => `
    <div class="route-card">
      <div class="row">
        <strong>${route.title}</strong>
        <span class="badge accent">${route.theme}</span>
      </div>
      <p class="desc">${route.desc}</p>
      <div class="route-line"></div>
      <div class="row">
        <span class="desc">${route.time}</span>
        <button class="btn btn-secondary" style="height:40px;">一键开始</button>
      </div>
    </div>
  `).join("");
}

function renderProfile() {
  $("#profile-links").innerHTML = profileLinks.map((item) => `
    <div class="list-item">
      <div>
        <strong>${item.title}</strong>
        <span class="desc">${item.desc}</span>
      </div>
      <span class="badge soft">进入</span>
    </div>
  `).join("");
}

function setScreen(screen) {
  appState.currentScreen = screen;
  $$(".screen").forEach((section) => section.classList.toggle("active", section.id === `screen-${screen}`));
  $$(".nav-btn").forEach((button) => button.classList.toggle("active", button.dataset.target === screen));
}

function toggleSave(id) {
  if (appState.saved.has(id)) appState.saved.delete(id);
  else appState.saved.add(id);
  renderAll();
}

function openDetail(id) {
  appState.selectedRestaurantId = id;
  appState.selectedGalleryIndex = 0;
  renderDetail();
  setScreen("detail");
}

function renderAll() {
  renderHome();
  renderMap();
  renderDetail();
  renderFavorites();
  renderProfile();
}

function applyMapTransform() {
  const surface = $("#map-panzoom");
  if (!surface) return;
  surface.firstElementChild.style.transform = `translate(${mapState.x}px, ${mapState.y}px) scale(${mapState.scale})`;
}

function resetMapPosition() {
  mapState.x = 0;
  mapState.y = 0;
  mapState.scale = 1;
  applyMapTransform();
}

document.addEventListener("click", (event) => {
  const campusButton = event.target.closest("[data-campus]");
  if (campusButton) {
    appState.currentCampus = campusButton.dataset.campus;
    appState.selectedRestaurantId = getCampusRestaurants(appState.currentCampus)[0]?.id || null;
    renderAll();
    return;
  }

  const navButton = event.target.closest(".nav-btn");
  if (navButton) {
    setScreen(navButton.dataset.target);
    return;
  }

  const marker = event.target.closest("[data-marker]");
  if (marker) {
    appState.selectedRestaurantId = marker.dataset.marker;
    renderMap();
    return;
  }

  const saveButton = event.target.closest("[data-save]");
  if (saveButton) {
    event.stopPropagation();
    toggleSave(saveButton.dataset.save);
    return;
  }

  const detailButton = event.target.closest("[data-detail]");
  if (detailButton) {
    openDetail(detailButton.dataset.detail);
    return;
  }

  const card = event.target.closest("[data-restaurant]");
  if (card) {
    openDetail(card.dataset.restaurant);
    return;
  }

  const quickFilter = event.target.closest("[data-filter]");
  if (quickFilter) {
    const key = quickFilter.dataset.filter;
    appState.filters[key] = !appState.filters[key];
    renderMap();
    return;
  }

  const rankButton = event.target.closest("[data-rank]");
  if (rankButton) {
    appState.activeRank = rankButton.dataset.rank;
    renderHome();
    return;
  }

  const favoriteButton = event.target.closest("[data-favorite-tab]");
  if (favoriteButton) {
    appState.activeFavoriteTab = favoriteButton.dataset.favoriteTab;
    renderFavorites();
    return;
  }

  const galleryButton = event.target.closest("[data-gallery-index]");
  if (galleryButton) {
    appState.selectedGalleryIndex = Number(galleryButton.dataset.galleryIndex);
    renderDetail();
    return;
  }

  const action = event.target.closest("[data-action]");
  if (!action) return;
  const type = action.dataset.action;
  if (type === "go-map") setScreen("map");
  if (type === "go-favorites") setScreen("favorites");
  if (type === "back-map") setScreen("map");
  if (type === "random-pick") {
    const pool = getCampusRestaurants(appState.currentCampus);
    const choice = pool[Math.floor(Math.random() * pool.length)];
    appState.selectedRestaurantId = choice.id;
    renderMap();
    setScreen("map");
  }
});

$("#open-filters").addEventListener("click", () => $("#filter-sheet").classList.add("active"));
$("#close-filters").addEventListener("click", () => $("#filter-sheet").classList.remove("active"));
$("#detail-save").addEventListener("click", () => {
  if (appState.selectedRestaurantId) toggleSave(appState.selectedRestaurantId);
});

$("#home-search").addEventListener("input", (event) => {
  const keyword = event.target.value.trim();
  if (!keyword) {
    renderHome();
    return;
  }
  const results = restaurants.filter((item) => `${item.name}${item.category}${item.gate}`.includes(keyword)).slice(0, 4);
  $("#nearby-list").innerHTML = results.map(restaurantCard).join("");
});

$("#map-search").addEventListener("input", (event) => {
  const keyword = event.target.value.trim();
  const pool = keyword
    ? getFilteredRestaurants().filter((item) => `${item.name}${item.category}${item.gate}`.includes(keyword))
    : getFilteredRestaurants();
  appState.selectedRestaurantId = pool.length ? pool[0].id : null;
  $("#map-markers").innerHTML = pool.map(markerMarkup).join("");
  renderPreviewCard();
});

const mapPanzoom = $("#map-panzoom");

function beginDrag(clientX, clientY) {
  mapState.dragging = true;
  mapState.startX = clientX - mapState.x;
  mapState.startY = clientY - mapState.y;
  mapPanzoom.classList.add("dragging");
}

function moveDrag(clientX, clientY) {
  if (!mapState.dragging) return;
  mapState.x = clientX - mapState.startX;
  mapState.y = clientY - mapState.startY;
  applyMapTransform();
}

function endDrag() {
  mapState.dragging = false;
  mapPanzoom.classList.remove("dragging");
}

mapPanzoom.addEventListener("mousedown", (event) => {
  if (event.target.closest(".marker")) return;
  beginDrag(event.clientX, event.clientY);
});

window.addEventListener("mousemove", (event) => moveDrag(event.clientX, event.clientY));
window.addEventListener("mouseup", endDrag);

mapPanzoom.addEventListener("touchstart", (event) => {
  if (event.target.closest(".marker")) return;
  const touch = event.touches[0];
  beginDrag(touch.clientX, touch.clientY);
}, { passive: true });

window.addEventListener("touchmove", (event) => {
  if (!mapState.dragging) return;
  const touch = event.touches[0];
  moveDrag(touch.clientX, touch.clientY);
}, { passive: true });

window.addEventListener("touchend", endDrag);

$$(".map-actions .icon-btn")[0].addEventListener("click", resetMapPosition);

appState.selectedRestaurantId = getCampusRestaurants(appState.currentCampus)[0].id;
renderAll();
applyMapTransform();
