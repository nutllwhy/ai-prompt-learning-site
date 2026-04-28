// 案例数据
const casesData = {
    wenchuang: [
        {
            id: 1,
            title: "手绘城市美食地图",
            method: "文生图",
            image: "images/001-handdrawn-city-food-map.png",
            prompt: "生成一张手绘水彩风格的城市美食地图海报，复古羊皮纸底，包含河流、道路、公园和地标建筑，用编号标出 10 到 12 个代表性美食点位，加入可爱吉祥物、图例、方位标和中文标题，让它同时具备旅游地图、收藏海报和社交媒体长图的质感。"
        },
        {
            id: 2,
            title: "3D 城市系统图谱信息图",
            method: "文生图",
            image: "images/002-3d-city-system-infographic.png",
            prompt: "制作一张高密度的 3D 城市系统信息图，主体是一座城市的等距剖面结构，完整展示地下管网、轨道交通、电力、通信和地表建筑，四周围绕数据面板、横截面示意和标注说明，整体像一张可发布的专业城市系统图谱。"
        },
        {
            id: 3,
            title: "百科风信息图生成器",
            method: "文生图",
            image: "images/003-encyclopedia-infographic.png",
            prompt: "请围绕一个明确主题生成竖版百科式信息图，包含主视觉、局部放大图、模块化信息框、评分卡、优缺点对比和要点总结，背景干净、排版整洁、信息密度高但不拥挤，成品像博物图鉴和生活方式知识卡的结合。"
        },
        {
            id: 4,
            title: "痛风病理信息图",
            method: "文生图",
            image: "images/004-medical-joint-infographic.png",
            prompt: "生成一张 12 步痛风病理机制信息图，用 3D 解剖结构、代谢通路箭头、症状示意和关键指标模块，清晰展示尿酸形成、结晶沉积和炎症反应的全过程，风格接近医学科普海报。"
        },
        {
            id: 5,
            title: "奇趣程序员黄历信息图",
            method: "文生图",
            image: "images/005-programmer-almanac.png",
            prompt: "做一张"小王子"气质的程序员黄历信息图，用水彩和手绘质感呈现宜与忌、幸运命令、今日提示、警告事项和一句鼓励文案，让它像程序员专属的每日运势海报。"
        },
        {
            id: 6,
            title: "多语言字体样张",
            method: "文生图",
            image: "images/006-multilingual-type-specimen.png",
            prompt: "生成一张多语言字体样张，统一展示日文、英文和汉字在不同字号、字重和版式中的效果，整体为杂志级编辑设计风格，信息有层次、文字清晰可读、适合做字体展示页。"
        },
        {
            id: 7,
            title: "56 个民族服饰图鉴",
            method: "文生图",
            image: "images/007-costume-atlas.png",
            prompt: "生成一张中国传统水墨风服饰图鉴海报，使用 7x8 网格排列 56 个民族人物半身像，每格保留服饰特征与名称标签，整体兼具图鉴感、教育感和收藏感。"
        },
        {
            id: 8,
            title: "等距像素艺术进化博物馆",
            method: "文生图",
            image: "images/008-isometric-pixel-evolution-museum.png",
            prompt: "制作一张等距像素风"进化博物馆"信息图，用多个展厅和时间节点展示某个主题的演化过程，带标题、年代标签、展台说明和路线引导，让它像可玩的博物馆导览海报。"
        },
        {
            id: 9,
            title: "18 面板吉祥物品牌识别文档",
            method: "文生图",
            image: "images/009-mascot-brand-identity-board.png",
            prompt: "设计一份 18 面板的吉祥物品牌识别文档，包含角色主形象、转身图、表情集、色板、应用场景、包装样机和品牌辅助图形，让它像真实提案级品牌手册。"
        },
        {
            id: 10,
            title: "角色关系图海报生成器",
            method: "文生图",
            image: "images/010-character-relationship-chart.png",
            prompt: "请为一部原创故事生成角色关系图海报，画面中心突出核心人物，周围排布配角、势力、时间线和关系连线，兼顾美术统一、信息可读性和海报级主视觉冲击。"
        },
        {
            id: 11,
            title: "中式国风插画",
            method: "文生图",
            image: "images/011-chinese-ink-fantasy-poster.png",
            prompt: "宋代山水意境的中式国风插画，细腻的水墨勾线与柔和矿物颜料设色，银色月光洒落并映照水面，整体以浅蓝、青玉色为主调，点缀柔和粉色花枝，空气中带有朦胧雾气，河面流动倒影细腻，辅以若有若无的淡金色微光，电影感、诗意化灯光，空灵东方美学，高级国风绘本插画质感，4K 细节。"
        }
    ],
    yingshi: [
        {
            id: 12,
            title: "史诗概念电影海报生成器",
            method: "文生图",
            image: "images/012-epic-concept-movie-poster.png",
            prompt: "围绕一个宏大主题生成一张史诗级概念电影海报，自动推导视觉隐喻、主角姿态、支撑结构、光影层级和标题排版，整体要像高端电影主视觉与概念展板的结合。"
        },
        {
            id: 13,
            title: "动漫电影提案板与设定集",
            method: "参考生图",
            image: "images/013-animated-film-pitch-board.png",
            prompt: "基于 1 到 3 张参考图，生成一页完整的动漫电影提案板：上半区是一张电影海报，下半区是角色设定、道具说明、场景设定和概念图模块，整体像动画公司内部的立项提案页。"
        },
        {
            id: 14,
            title: "高品质品牌海报生成器",
            method: "参考生图",
            image: "images/014-premium-brand-poster.png",
            prompt: "基于上传的人像参考图，生成一张高端珠宝品牌风格广告海报，保留人物身份特征，强化珠宝质感、棚拍灯光、奢侈品排版和大面积品牌色，让画面像成熟商业 campaign poster。"
        },
        {
            id: 15,
            title: "姿态与布光分析页转换器",
            method: "图生图",
            image: "images/015-pose-lighting-analysis.png",
            prompt: "把上传人物图转成姿态与布光分析页：纯黑背景、白色人体结构线稿、绿色受光区域和箭头标注，只保留姿态、重心、机位和灯位信息，不保留五官、服装和人物身份。"
        },
        {
            id: 16,
            title: "Y2K 青少年杂志风格摄影棚肖像",
            method: "文生图",
            image: "images/016-y2k-magazine-studio-portrait.png",
            prompt: "生成一张 Y2K 杂志风摄影棚肖像，两位年轻人背靠背手持智能手机，带柔焦、闪光灯、糖果色和青春偶像气质，像 2000 年代青少年杂志的封面内页。"
        },
        {
            id: 17,
            title: "两位女性在复古商店购物",
            method: "文生图",
            image: "images/017-vintage-store-shopping.png",
            prompt: "生成一张照片级真实的抓拍画面，两位女性在拥挤的复古二手店里翻看服装，环境里有密集衣架、暖色灯光和生活化细节，让它像纪实风时尚摄影。"
        },
        {
            id: 18,
            title: "超现实地标用餐肖像",
            method: "文生图",
            image: "images/018-surreal-landmark-dining-portrait.png",
            prompt: "生成一张超现实但写实的照片：一个人坐在著名建筑地标上悠闲吃快餐，构图自然、光线可信、人物神态松弛，形成旅游地标与日常吃饭的反差感。"
        },
        {
            id: 19,
            title: "黑神话：悟空游戏场景",
            method: "文生图",
            image: "images/019-eastern-myth-action-game-scene.png",
            prompt: "生成一张《黑神话：悟空》风格的游戏场景截图，画面表现悟空被二郎神击飞的瞬间，带强动作姿态、粒子效果、东方神话氛围和电影级战斗冲击力。"
        },
        {
            id: 20,
            title: "复古日式温泉摄影",
            method: "文生图",
            image: "images/020-retro-onsen-travel-photo-small.png",
            prompt: "生成一张电影感 35mm 胶片风照片，场景是传统日式温泉旅馆与木质走廊，暖黄灯光、蒸汽、水汽和颗粒感真实自然，氛围静谧又高级。"
        },
        {
            id: 21,
            title: "3D 电影感多分栏宣传海报",
            method: "文生图",
            image: "images/021-3d-cinematic-multi-panel-poster.png",
            prompt: "制作一张多分栏 3D 宣传海报，用夸张表情的卡通角色、戏剧化背景和日文字体排版组成完整 promo poster，每个分栏都像一张可单独传播的角色宣发图。"
        }
    ],
    kuagip: [
        {
            id: 22,
            title: "3D 写实风格 X 个人主页界面",
            method: "文生图",
            image: "images/022-3d-social-profile-ui.png",
            prompt: "根据上传的 X 个人主页截图生成超写实 3D 海报，保留头像、昵称、界面布局和主要文案，让头像人物像从界面中破屏而出，整体像真实社交平台宣传视觉。"
        },
        {
            id: 23,
            title: "3D 社交媒体个人资料破屏而出",
            method: "文生图",
            image: "images/023-3d-profile-breakout.png",
            prompt: "生成一张社交媒体个人主页海报，人物从资料页边框中立体冲出，保留关注按钮、简介区、帖子网格和 UI 细节，让页面既像截图又像 3D 人物广告。"
        },
        {
            id: 24,
            title: "动漫 VTuber 直播界面覆盖图",
            method: "文生图",
            image: "images/024-vtuber-stream-overlay.png",
            prompt: "制作一张动漫 VTuber 直播画面，包含 LIVE 徽章、弹幕聊天框、礼物提示、订阅条和舞台感背景，成片要像真实直播间的封面截图。"
        },
        {
            id: 25,
            title: "卡通便当食谱页面",
            method: "文生图",
            image: "images/025-cartoon-bento-recipe-page.png",
            prompt: "生成一页杂志风卡通便当食谱，包含主菜成品图、食材列表、6 步图解教程、可爱插画标签和清晰排版，整体像可直接发布的生活方式杂志页面。"
        },
        {
            id: 26,
            title: "电商 App 首页界面",
            method: "参考生图",
            image: "images/026-ecommerce-app-home-ui.png",
            prompt: "生成一张 2026 年中国主流电商 App 首页截图，完整包含状态栏、搜索框、频道 tabs、促销 banner、功能宫格、秒杀区、猜你喜欢双列商品流和底部 tab bar，中文文字清晰、间距和阴影像真机截图。"
        },
        {
            id: 27,
            title: "GTA 6 风格实机画面",
            method: "文生图",
            image: "images/027-open-world-urban-action-game.png",
            prompt: "生成一张 GTA 6 风格的游戏画面截图，像用手机拍摄 4K 显示器时截到的轻微手抖画面，海边场景明亮开阔，角色牵着一只狗行走，整体非常写实。"
        },
        {
            id: 28,
            title: "GTA 圣安地列斯玩法截图",
            method: "文生图",
            image: "images/028-retro-street-action-game.png",
            prompt: "生成一张《GTA: San Andreas》玩法截图，一头狮子正在和 NPC 对打，保留老游戏 HUD、机位和粗粝开放世界质感，让它像真玩家录屏中截出来的一帧。"
        },
        {
            id: 29,
            title: "塞尔达：王国之泪风格画面",
            method: "文生图",
            image: "images/029-original-fantasy-adventure-game.png",
            prompt: "生成一张《塞尔达传说：王国之泪》风格画面，让 Link 出现在一列 E531 通勤电车中，保留奇幻冒险氛围与现代交通空间的强反差。"
        },
        {
            id: 30,
            title: "宠物品牌联名海报",
            method: "文生图",
            image: "images/030-pet-brand-collab-poster.png",
            prompt: "制作一张宠物 × 快餐品牌的联名海报，让同一只猫保持外形一致，穿品牌员工制服站在柜台卖炸鸡与套餐，加入红白品牌色、餐厅道具和中文促销文案。"
        },
        {
            id: 31,
            title: "个性化 Minecraft 皮肤提示词",
            method: "图生图",
            image: "images/031-blocky-sandbox-skin-sheet.png",
            prompt: "基于一张人物参考图，为这个角色生成一套 Minecraft 皮肤设计，保留发型、服装辨识点和配色特征，同时让像素块分区清晰，便于直接用于游戏角色。"
        }
    ],
    pinpai: [
        {
            id: 32,
            title: "2x2 日本广告网格",
            method: "文生图",
            image: "images/032-japanese-ad-grid.png",
            prompt: "生成一个 2x2 日本广告海报网格，四格分别表现护肤、招聘、咖啡早餐和旅游主题，每格都有独立 headline、卖点标签、产品或人物主视觉和品牌 logo，整体统一又各自成片。"
        },
        {
            id: 33,
            title: "抖音直播截图提示词",
            method: "文生图",
            image: "images/033-fictional-livestream-shopping-ui.png",
            prompt: "生成一张高度逼真的抖音直播截图，让名人手持定制手牌，界面里包含直播状态、点赞、评论、礼物弹窗和商品卡，整体像真实截屏而不是概念图。"
        },
        {
            id: 34,
            title: "电商商品详情页生成器",
            method: "文生图",
            image: "images/034-ecommerce-product-detail-ui.png",
            prompt: "为一个虚构商品生成电商详情页，完整展示正面、侧面、背面、功能卖点、价格、使用场景和细节特写，版式像淘宝或京东的高转化详情页。"
        },
        {
            id: 35,
            title: "日系美妆杂志封面",
            method: "文生图",
            image: "images/035-japanese-beauty-magazine-cover.png",
            prompt: "生成一张逼真的日系美妆杂志封面，包含封面模特、刊名、主标题、副标题和多个封面卖点文案，整体像书店里能买到的美容刊物。"
        },
        {
            id: 36,
            title: "程序员复古黄历海报",
            method: "文生图",
            image: "images/036-programmer-retro-almanac-poster.png",
            prompt: "做一张为程序员定制的复古中国黄历海报，包含今日宜忌、幸运语言、避坑提示、祝福语和老式版式元素，让它像一张会在技术圈疯传的办公桌海报。"
        },
        {
            id: 37,
            title: "综合餐厅主菜单设计",
            method: "文生图",
            image: "images/037-restaurant-main-menu-design.png",
            prompt: "生成一份高完成度的餐厅主菜单，深色背景配高质感美食摄影，包含多栏目菜品、价格、日文标题和装饰分隔线，让它像真实餐厅菜单。"
        },
        {
            id: 38,
            title: "高端医美诊所网站设计样稿",
            method: "图片编辑",
            image: "images/038-aesthetic-clinic-website-mockup.png",
            prompt: "把上传素材编辑成高端医美诊所官网首页，使用金棕色调、优雅衬线体、大幅人物主图、服务卡片和预约按钮，整体像已经上线的奢华品牌站。"
        },
        {
            id: 39,
            title: "完全相同棒球员列队照",
            method: "文生图",
            image: "images/039-fictional-baseball-team-lineup.png",
            prompt: "生成一张写实体育照片，5 位长相完全相同的亚洲年轻棒球运动员整齐站成一排，穿细条纹队服，表情严肃，背景是白天球场看台，形成强烈的复制人视觉奇观。"
        },
        {
            id: 40,
            title: "音乐播放器界面",
            method: "文生图",
            image: "images/040-fictional-music-player-ui.png",
            prompt: "生成一张高保真中文音乐播放器界面截图，深色模式，中央是专辑封面，下方有进度条、播放控制、滚动歌词和操作按钮，质感像主流音乐 App 的真机界面。"
        },
        {
            id: 41,
            title: "真实杂志内页摄影",
            method: "文生图",
            image: "images/041-realistic-magazine-interior-spread.png",
            prompt: "拍出一张 iPhone 质感的业余照片：一本摊开的杂志内页清晰可见，主题聚焦 GPT Image 2 相关文章，自然光真实、没有景深虚化，像随手拍到的桌面阅读场景。"
        },
        {
            id: 42,
            title: "城市宣传海报",
            method: "文生图",
            image: "images/042-fictional-city-promotion-poster.png",
            prompt: "一张充满新春喜庆氛围但不失高雅格调的 2026 城市宣传海报。双重曝光，构图延续 S 型的流动感；在纯白的纹理背景右下角，一个身穿中国传统服饰的微缩人物正在挥舞着一条长长的红色丝绸舞带，这条红绸在空中舞动，奇幻地变形成了一条壮丽的山海长卷。"
        }
    ],
    egao: [
        {
            id: 43,
            title: "宋朝社交媒体动态",
            method: "文生图",
            image: "images/043-song-dynasty-social-feed.png",
            prompt: "生成一张"宋朝人的朋友圈"手机社交媒体界面，头像、昵称、点赞评论和状态栏都按现代产品逻辑排布，但内容全部替换为苏轼发东坡肉动态的古代版本，文字清晰可读。"
        },
        {
            id: 44,
            title: "四格恶搞电影海报网格",
            method: "文生图",
            image: "images/044-parody-movie-poster-grid.png",
            prompt: "生成一个 2x2 恶搞电影海报网格，分别用宇宙人通勤、饭团爱情、老年逆袭和洗衣灾难等荒诞题材，做成像日本院线电影海报一样认真的宣传图。"
        },
        {
            id: 45,
            title: "食物双关心理咨询室",
            method: "文生图",
            image: "images/045-food-pun-therapy-office.png",
            prompt: "生成一张荒诞温馨的 3D 喜剧插画：拟人化牛油果坐在心理咨询沙发上说"我感觉内心空空的"，对面是拟人化勺子治疗师，整个房间像真实咨询室。"
        },
        {
            id: 46,
            title: "讽刺四格漫画条漫",
            method: "文生图",
            image: "images/046-satirical-four-panel-office-comic.png",
            prompt: "生成一页黑白讽刺四格漫画，使用夸张人物漫画像、对白气泡和旁白框，主题带有强烈社会观察和反讽意味，阅读路径清晰、台词可读。"
        },
        {
            id: 47,
            title: "讽刺四格产品广告",
            method: "文生图",
            image: "images/047-satirical-product-ad-comic.png",
            prompt: "做一张 2x2 恶搞产品广告网格，四个商品都一本正经地介绍荒谬功能，例如"可以坐的石头""会骂人的石头"，每格都带销量徽章、卖点列表和价格。"
        },
        {
            id: 48,
            title: "动漫 VTuber 反应视频缩略图",
            method: "文生图",
            image: "images/048-anime-vtuber-reaction-thumbnail.png",
            prompt: "生成一张霓虹赛博风 YouTube 缩略图，动漫 VTuber 对社交媒体热帖和实时聊天做出夸张震惊反应，表情强烈、文字醒目、像真实热视频封面。"
        },
        {
            id: 49,
            title: "双格科技梗漫画",
            method: "文生图",
            image: "images/049-two-panel-tech-meme-comic.png",
            prompt: "生成一张双格 meme 漫画，左边是自鸣得意发布模糊动态的科技公司员工，右边是苦等发布会等到变成骷髅的用户，用极端反差制造笑点。"
        },
        {
            id: 50,
            title: "漫画页面：猫女大盗",
            method: "文生图",
            image: "images/050-masked-jewel-thief-comic-page.png",
            prompt: "生成一整页 7 分镜漫画，主角是猫女大盗，包含潜入、飞跃、对峙和逃脱等高动态镜头，带对白、旁白和完整封面式标题。"
        },
        {
            id: 51,
            title: "真空吸尘器火箭上的超现实太空猫",
            method: "文生图",
            image: "images/051-surreal-space-vacuum-rocket-cat.png",
            prompt: "生成一幅超现实科幻插画：一只猫骑着改装成火箭的真空吸尘器穿越太空，尾焰夸张、表情认真、场景荒诞但细节极其真实。"
        },
        {
            id: 52,
            title: "第一人称 VRChat 模因联动截图",
            method: "文生图",
            image: "images/052-fictional-virtual-social-world-screenshot.png",
            prompt: "生成一张第一人称 VRChat 大厅截图，视野里挤满动漫角色和模因头像，头顶浮着昵称牌和语音标识，像一次失控的联动现场。"
        },
        {
            id: 53,
            title: "Anthropic 公司在 X 平台官宣式产品发布截图",
            method: "文生图",
            image: "images/053-fictional-ai-company-social-launch.png",
            prompt: "绘制一张 Anthropic 公司在 X 推特上的产品宣传帖子，要求有文案和配图，以及网页端的 UI，内容是我们很高兴地宣布，Claude.ai 和 ClaudeApp 现已支持中国大陆地区用户访问和使用。"
        },
        {
            id: 54,
            title: "物理试卷截图",
            method: "文生图",
            image: "images/054-fictional-physics-exam-screenshot.png",
            prompt: "生成一份物理试卷，左边是题目，右边是答案。"
        }
    ],
    jianzhu: [
        {
            id: 55,
            title: "公共建筑 A1 展板图",
            method: "文生图",
            image: "images/055-public-building-a1-presentation-board.png",
            prompt: "生成一座公共建筑效果图图片，大型美术馆，"高技派"+"现代主义"，建筑坐落在青岛城市的海边，高角度鸟瞰图，白天下午 3 点光影效果。生成该建筑的 A1 展板图，要有展板图上所有应该有的分析图类型和分析模块。"
        },
        {
            id: 56,
            title: "大师海报：柯布西耶与现代建筑",
            method: "文生图",
            image: "images/056-le-corbusier-modern-architecture-poster.png",
            prompt: "A professional cinematic poster titled 'LE CORBUSIER'. The central theme is a complex double exposure effect featuring the side profile silhouette of the architect Le Corbusier, complete with his signature round-framed glasses and a subtle tie. Inside his silhouette, a breathtaking layered composition illustrates the evolution of modern architecture through his key works."
        }
    ]
};

// 渲染案例卡片
function renderCases() {
    Object.keys(casesData).forEach(category => {
        const container = document.getElementById(`cases-${category}`);
        if (!container) return;
        
        container.innerHTML = casesData[category].map(caseItem => `
            <div class="case-card">
                <img src="${caseItem.image}" alt="${caseItem.title}" class="case-image" loading="lazy" onclick="openImageViewer(this.src)">
                <div class="case-content">
                    <h4 class="case-title">${caseItem.title}</h4>
                    <span class="case-method">${caseItem.method}</span>
                    <p class="case-prompt" id="prompt-${caseItem.id}">${caseItem.prompt}</p>
                    <div class="case-actions">
                        <button class="expand-btn" onclick="togglePrompt(${caseItem.id})">展开</button>
                        <button class="copy-btn" onclick="copyPrompt(\`${caseItem.prompt.replace(/`/g, '\\`').replace(/\\/g, '\\\\')}\`)">复制提示词</button>
                    </div>
                </div>
            </div>
        `).join('');
    });
}

// 展开/收起提示词
function togglePrompt(id) {
    const promptEl = document.getElementById(`prompt-${id}`);
    const btn = promptEl.nextElementSibling.querySelector('.expand-btn');
    
    if (promptEl.classList.contains('expanded')) {
        promptEl.classList.remove('expanded');
        btn.textContent = '展开';
    } else {
        promptEl.classList.add('expanded');
        btn.textContent = '收起';
    }
}

// 复制提示词
function copyPrompt(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('已复制到剪贴板');
    }).catch(err => {
        // 降级方案
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('已复制到剪贴板');
    });
}

// 显示 Toast 提示
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// 图片查看器
function openImageViewer(src) {
    let viewer = document.querySelector('.image-viewer');
    
    if (!viewer) {
        viewer = document.createElement('div');
        viewer.className = 'image-viewer';
        viewer.innerHTML = `
            <button class="close-viewer" onclick="closeImageViewer()">×</button>
            <img src="" alt="预览图片">
        `;
        document.body.appendChild(viewer);
        
        viewer.addEventListener('click', (e) => {
            if (e.target === viewer) {
                closeImageViewer();
            }
        });
    }
    
    viewer.querySelector('img').src = src;
    viewer.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeImageViewer() {
    const viewer = document.querySelector('.image-viewer');
    if (viewer) {
        viewer.classList.remove('show');
        document.body.style.overflow = '';
    }
}

// 侧边栏控制
const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menuBtn');
const closeSidebar = document.getElementById('closeSidebar');

menuBtn.addEventListener('click', () => {
    sidebar.classList.add('show');
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('show');
});

// 点击导航链接后关闭侧边栏（移动端）
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 1024) {
            sidebar.classList.remove('show');
        }
    });
});

// 返回顶部
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 导航高亮
const sections = document.querySelectorAll('.section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// 复制按钮事件绑定
document.querySelectorAll('.copy-btn[data-prompt]').forEach(btn => {
    btn.addEventListener('click', () => {
        copyPrompt(btn.dataset.prompt);
    });
});

// ESC 关闭图片查看器
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeImageViewer();
    }
});

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    renderCases();
});
