// HSK1 教学参考 · 第 24 批（10 词）：现在 小 小朋友 小时 小学 小学生 下午 写 些 谢谢
window.H1_WORDS = window.H1_WORDS || {};
Object.assign(H1_WORDS, {

'现在': {
  pos: [['名词', 'noun']],
  zh: ['说话的这个时候。'],
  en: ['now; at present'],
  syl: [{ py: 'xiàn', i: 'x', f: 'ian', t: 4 }, { py: 'zài', i: 'z', f: 'ai', t: 4 }],
  phon: [
    '两个第四声连读：两个字都要降，第一个降得短一点。',
    'x 是舌面音，不要读成 shiàn。',
    'z 是平舌音，不要读成 zh。'
  ],
  img: { src: 'img/xianzai.jpg', cap: "现在三点二十五分。", by: "cogdogblog", lic: "CC BY 2.0", from: "Wikimedia Commons · Ds106 Photoblitz STARTE (8474406467).jpg" },
  use: ['现在 + 几点？', '主语 + 现在 + 动词', '现在 / 以前（超纲）'],
  ex: [
    { ctx: '时间', zh: '现在 几 点 ？', py: 'Xiànzài jǐ diǎn?', en: 'What time is it now?' },
    { ctx: '状态', zh: '我 现在 很 忙 。', py: 'Wǒ xiànzài hěn máng.', en: 'I am busy now.' },
    { ctx: '位置', zh: '他 现在 在 中国 。', py: 'Tā xiànzài zài Zhōngguó.', en: 'He is in China now.' },
    { ctx: '建议', zh: '我们 现在 去 吧 。', py: 'Wǒmen xiànzài qù ba.', en: 'Let us go now.' }
  ],
  drill: [
    { t: 'choice', q: '___ 几点？—— 八点。', opts: ['现在', '明天', '去年', '小时'], a: 0, why: '问此刻的时间：现在几点？' },
    { t: 'order', words: ['现在', '在', '他', '家'], a: '他现在在家。', alt: ['现在他在家。'], en: 'He is at home now.' },
    { t: 'choice', q: '哪一句是对的？', opts: ['我很忙现在。', '我现在很忙。', '现在我是很忙。', '我忙现在很。'], a: 1, why: '时间词放在动词或形容词前面。' },
    { t: 'choice', say: '现在', q: '听录音，选拼音。', opts: ['xiànzài', 'xiànzhài', 'shiànzài', 'xiánzài'], a: 0, why: '现在 xiànzài。' }
  ],
  bop: {
    b: '老师指着墙上的钟："现在几点？"学生看钟回答。',
    o: ['能听、说、认读"现在 xiànzài"', '能问"现在几点？"', '能说"我现在……"'],
    pre: '复习"点、分、今天"。',
    p: '① 跟读 xiànzài，练 x 和 z；② 问时间："现在几点？"；③ 说状态："我现在在……""我现在很……"。',
    post: '两人互相问"你现在做什么？"；或做本页练习 1–4。',
    s: '板书：现在几点？／ 主语 + 现在 + 动词 / 形容词。作业：写三句"我现在……"。'
  },
  act: [
    { tag: '游戏', name: '现在几点', how: '老师拨钟，学生抢答"现在……点……分"。' },
    { tag: '游戏', name: '现在做什么', how: '一人表演一个动作，其他人问"你现在做什么？"并猜。' },
    { tag: '情境表演', name: '打电话', how: '"喂，你现在在哪儿？""我现在在超市。""好，我现在去找你。"' }
  ],
  teach: [
    { h: '位置', p: '"现在"放在主语前或后都可以：现在我很忙 / 我现在很忙。不放在句子最后。' },
    { h: '在 / 现在', p: '"现在"是 now；"在"是 at / be in。' }
  ],
  err: [
    { x: '我很忙现在。', v: '我现在很忙。', why: '时间词不放在句子最后。' },
    { x: 'xiànzhài', v: 'xiànzài', why: '"在"是平舌音 z。' }
  ],
  hz: [
    { c: '现', rad: '王', radName: '王字旁（斜玉旁）', radMean: '玉 jade', struct: '左右结构', parts: '王 + 见', tip: '左边"王"（玉），右边"见"——玉的光彩"现"出来、看得见。现在 = 现在能看见的时候。', fam: '王字旁的字：玩、班。' },
    { c: '在', rad: '土', radName: '土部', radMean: '土 earth', struct: '半包围结构', parts: '𠂇 + 土', tip: '下面是"土"——人在土地上，"在"表示存在、在某处。', fam: '有"土"的字：块。' }
  ],
  cul: ['中国人常说"现在的年轻人……"，表示和以前不一样。', '"现在"和"在"的拼音 zài 一样，但"现在"是一个时间词。'],
  syn: [],
  ant: [],
  rel: ['在', '点', '时间', '今天', '时候']
},

'小': {
  pos: [['形容词', 'adjective'], ['前缀', 'prefix']],
  zh: ['体积、面积、数量等不大。', '年纪小。', '（前缀）放在姓前面，亲切地称呼年轻人：小王。'],
  en: ['small; little', 'young', '(prefix) used before a surname for younger people: Xiao Wang'],
  syl: [{ py: 'xiǎo', i: 'x', f: 'iao', t: 3 }],
  phon: [
    '第三声，先降后升，声音要低。',
    'x 是舌面音，不要读成 shǎo（少）。',
    'iao 一口气滑过去。'
  ],
  img: { src: 'img/xiao.jpg', cap: "这个大，那个小。", by: "William Felker", lic: "CC0", from: "Wikimedia Commons · Big and small paintbrush (Unsplash).jpg" },
  use: ['很小 / 太小了', '小 + 名词：小猫、小狗', '小 + 姓：小王、小李'],
  ex: [
    { ctx: '描述', zh: '我 的 房间 很 小 。', py: 'Wǒ de fángjiān hěn xiǎo.', en: 'My room is small.' },
    { ctx: '动物', zh: '这 只 小 猫 很 漂亮 。', py: 'Zhè zhī xiǎo māo hěn piàoliang.', en: 'This kitten is pretty.' },
    { ctx: '年龄', zh: '我 弟弟 很 小 。', py: 'Wǒ dìdi hěn xiǎo.', en: 'My younger brother is very young.' },
    { ctx: '购物', zh: '这 件 衣服 太 小 了 。', py: 'Zhè jiàn yīfu tài xiǎo le.', en: 'This piece of clothing is too small.' }
  ],
  drill: [
    { t: 'choice', q: '大 ↔ ___', opts: ['小', '少', '多', '好'], a: 0, why: '大 ↔ 小。' },
    { t: 'order', words: ['小', '很', '杯子', '这个'], a: '这个杯子很小。', en: 'This cup is small.' },
    { t: 'choice', q: '"小"和"少"：', opts: ['小说大小，少说数量', '一样', '少说大小', '都是数字'], a: 0, why: '小 = small；少 = few。' },
    { t: 'choice', say: '小', q: '听录音，选拼音。', opts: ['xiǎo', 'shǎo', 'xiào', 'jiǎo'], a: 0, why: '小 xiǎo，第三声。' }
  ],
  bop: {
    b: '老师拿出一个大苹果和一个小苹果："这个大，这个——小！"',
    o: ['能听、说、认读"小 xiǎo"', '能说"……很小""小 + 名词"', '分清"小"和"少"'],
    pre: '复习"大、多、少"。',
    p: '① 跟读 xiǎo，对比 xiǎo / shǎo；② 大 ↔ 小：看图说话；③ 小 + 名词：小猫、小狗、小朋友。',
    post: '找教室里"很小"的东西；或做本页练习 1–4。',
    s: '板书：大 ↔ 小 ／ 多 ↔ 少 ／ 小 + 名词。作业：写三样很小的东西。'
  },
  act: [
    { tag: 'TPR', name: '大和小', how: '老师说"大"学生张开双臂，说"小"学生缩成一团。' },
    { tag: '游戏', name: '大小排队', how: '每组拿到几张东西的图片（飞机、狗、苹果、手机），按从大到小排好并说出来。' },
    { tag: '文化体验', name: '小王老李', how: '介绍中国人称呼：年轻人叫"小 + 姓"，年长的叫"老 + 姓"。给班里同学起"小……"的称呼。' }
  ],
  teach: [
    { h: '小 / 少', p: '"小"说大小、年龄；"少"说数量。' },
    { h: '称呼', p: '"小 + 姓"是对年轻人亲切的叫法，熟人之间用。' }
  ],
  err: [
    { x: '我的钱很小。', v: '我的钱很少。', why: '说数量用"少"。' },
    { x: 'shǎo', v: 'xiǎo', why: '"小"是舌面音 x。' }
  ],
  hz: [{ c: '小', rad: '小', radName: '小部', radMean: '小 small', struct: '独体字', parts: '亅 + 八', tip: '中间一竖钩，两边各一点——像把东西分成小小的几粒。', fam: '有"小"的字：少、尖（超纲）。' }],
  cul: ['中国人叫年轻的同事"小王、小李"，叫年纪大的"老王、老李"，都很亲切。', '"小"也是谦虚的说法：小店、小地方。'],
  syn: [],
  ant: [{ w: '大', note: '体积、年龄等大。' }],
  rel: ['大', '少', '多', '小朋友', '小时', '小学']
},

'小朋友': {
  pos: [['名词', 'noun']],
  zh: ['儿童；对小孩子的亲切称呼。'],
  en: ['child; kid (also used to address children)'],
  syl: [{ py: 'xiǎo', i: 'x', f: 'iao', t: 3 }, { py: 'péng', i: 'p', f: 'eng', t: 2 }, { py: 'yǒu', i: 'y', f: 'ou', t: 3 }],
  phon: [
    '第三声 + 第二声 + 第三声："小"读低降，"朋"上升，"友"大纲标第三声，口语里常读轻声。',
    'péng 的 p 要送气。',
    'xiǎo 的 x 是舌面音。'
  ],
  img: { src: 'img/xiaopengyou.jpg', cap: "小朋友们", by: "Kgbo", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Kindergarten children at Sławkowska Street in Kraków, 2022.jpg" },
  use: ['小朋友，你好！', '小朋友们', '这个小朋友……'],
  ex: [
    { ctx: '称呼', zh: '小朋友 ， 你 好 ！', py: 'Xiǎopéngyou, nǐ hǎo!', en: 'Hello, little one!' },
    { ctx: '询问', zh: '小朋友 ， 你 几 岁 ？', py: 'Xiǎopéngyou, nǐ jǐ suì?', en: 'How old are you, kid?' },
    { ctx: '描述', zh: '小朋友 们 在 外边 玩 。', py: 'Xiǎopéngyoumen zài wàibian wán.', en: 'The children are playing outside.' },
    { ctx: '称赞', zh: '这个 小朋友 很 漂亮 。', py: 'Zhège xiǎopéngyou hěn piàoliang.', en: 'This child is lovely.' }
  ],
  drill: [
    { t: 'choice', q: '老师问一个五岁的孩子："___ ，你叫什么名字？"', opts: ['小朋友', '先生', '女士', '同学们'], a: 0, why: '叫小孩子用"小朋友"。' },
    { t: 'order', words: ['小朋友', '你', '几岁'], a: '小朋友，你几岁？', en: 'How old are you, kid?' },
    { t: 'choice', q: '"小朋友"的意思是：', opts: ['小孩子', '小的朋友', '年轻的朋友', '好朋友'], a: 0, why: '"小朋友"= 小孩子，不是"小的朋友"。' },
    { t: 'choice', say: '小朋友', q: '听录音，选汉字。', opts: ['小朋友', '朋友', '男朋友', '女朋友'], a: 0, why: '小朋友 xiǎopéngyou。' }
  ],
  bop: {
    b: '老师出示幼儿园孩子的照片："他们是谁？——小朋友！"',
    o: ['能听、说、认读"小朋友 xiǎopéngyǒu"', '会用"小朋友"称呼孩子', '知道"小朋友"不是"小的朋友"'],
    pre: '复习"小、朋友、孩子"。',
    p: '① 跟读 xiǎopéngyou；② 称呼练习：对小孩说"小朋友，你好！你几岁？"；③ 对比：孩子 / 小朋友。',
    post: '情境：在公园和小朋友说话；或做本页练习 1–4。',
    s: '板书：小朋友 = 小孩子 ／ 小朋友，你好！作业：写一写你小时候喜欢玩什么。'
  },
  act: [
    { tag: '情境表演', name: '在公园', how: '一人扮小朋友，一人扮大人："小朋友，你好！你叫什么名字？""我叫……""你几岁？"' },
    { tag: '歌曲', name: '找朋友', how: '一起唱儿歌《找朋友》，体会"小朋友"的感觉。' },
    { tag: '游戏', name: '是不是小朋友', how: '老师出示不同年龄的人的照片，学生说"他是小朋友"或"他不是小朋友"。' }
  ],
  teach: [
    { h: '意思', p: '"小朋友"是对儿童的称呼，不管认识不认识都可以用，很亲切。' },
    { h: '读音', p: '大纲标 xiǎopéngyǒu；口语常读 xiǎopéngyou（"友"轻声）。' }
  ],
  err: [
    { x: '他是我的小朋友。（想说 my little friend）', v: '他是我的好朋友。', why: '"小朋友"是"小孩子"。' },
    { x: '小朋友，您好！', v: '小朋友，你好！', why: '对小孩用"你"。' }
  ],
  hz: [
    { c: '小', rad: '小', radName: '小部', radMean: '小 small', struct: '独体字', parts: '亅 + 八', tip: '分成小小的几粒。', fam: '有"小"的字：少。' },
    { c: '朋', rad: '月', radName: '月字旁', radMean: '月亮 / 肉', struct: '左右结构', parts: '月 + 月', tip: '两个"月"手拉手。', fam: '有"月"的字：有、明。' },
    { c: '友', rad: '又', radName: '又部', radMean: '手 hand', struct: '半包围结构', parts: '𠂇 + 又', tip: '两只手握在一起。', fam: '有"又"的字：对、汉。' }
  ],
  cul: ['在中国，大人见到不认识的孩子也会叫"小朋友"，很自然。', '幼儿园和小学老师常说"小朋友们好！"'],
  syn: [{ w: '孩子', note: '小孩；也指儿女。' }],
  ant: [],
  rel: ['孩子', '朋友', '小', '小学生', '儿子', '女儿']
},

'小时': {
  pos: [['名词', 'noun']],
  zh: ['时间单位，一天有二十四个小时。'],
  en: ['hour'],
  syl: [{ py: 'xiǎo', i: 'x', f: 'iao', t: 3 }, { py: 'shí', i: 'sh', f: '-i', t: 2 }],
  phon: [
    '第三声 + 第二声："小"只读前半段（低降），"时"上升。',
    'x（舌面）和 sh（卷舌）要分清。',
    'shí 的韵母不是 "ee"。'
  ],
  img: { src: 'img/xiaoshi.jpg', cap: "一个小时", by: "John Morgan", lic: "CC BY 2.0", from: "Wikimedia Commons · Hourglass with sand.jpg（已裁剪）" },
  use: ['数词 + 个 + 小时', '动词 + 数词 + 个小时：睡八个小时', '几个小时？'],
  ex: [
    { ctx: '时间', zh: '一 天 有 二 十 四 个 小时 。', py: 'Yì tiān yǒu èrshísì gè xiǎoshí.', en: 'A day has 24 hours.' },
    { ctx: '睡觉', zh: '我 睡 了 八 个 小时 。', py: 'Wǒ shuì le bā gè xiǎoshí.', en: 'I slept for eight hours.' },
    { ctx: '询问', zh: '你 学习 了 几 个 小时 ？', py: 'Nǐ xuéxí le jǐ gè xiǎoshí?', en: 'How many hours did you study?' },
    { ctx: '出行', zh: '坐 飞机 要 三 个 小时 。', py: 'Zuò fēijī yào sān gè xiǎoshí.', en: 'It takes three hours by plane.' }
  ],
  drill: [
    { t: 'choice', q: '一个 ___ 有六十分钟。', opts: ['小时', '点', '天', '号'], a: 0, why: '1 小时 = 60 分钟。' },
    { t: 'order', words: ['小时', '我', '两个', '学习了'], a: '我学习了两个小时。', en: 'I studied for two hours.' },
    { t: 'choice', q: '"两点"和"两个小时"：', opts: ['两点是时间点，两个小时是时间长度', '一样', '两点是长度', '都是长度'], a: 0, why: '点 = o\'clock；小时 = hours。' },
    { t: 'choice', say: '小时', q: '听录音，选拼音。', opts: ['xiǎoshí', 'shǎoshí', 'xiǎosí', 'xiàoshí'], a: 0, why: '小时 xiǎoshí。' }
  ],
  bop: {
    b: '老师出示一个钟，转一整圈分针："六十分钟——一个小时！"',
    o: ['能听、说、认读"小时 xiǎoshí"', '能说"……了……个小时"', '分清"点"和"小时"'],
    pre: '复习"点、分钟、几"。',
    p: '① 跟读 xiǎoshí；② 换算：一小时 = 六十分钟，一天 = 二十四小时；③ 时间长度："你每天睡几个小时？"',
    post: '对比"两点 / 两个小时"；或做本页练习 1–4。',
    s: '板书：点（时间点）／ 小时（时间长度）／ 动词 + 了 + 数 + 个小时。作业：记录你昨天学习、睡觉、玩手机各几个小时。'
  },
  act: [
    { tag: '调查', name: '几个小时', how: '学生互相问"你每天睡几个小时？玩几个小时手机？"，做成图表。' },
    { tag: '游戏', name: '点还是小时', how: '老师说英语（at 3 o\'clock / for 3 hours），学生说"三点"或"三个小时"。' },
    { tag: '情境表演', name: '出行', how: '"从这儿到北京要几个小时？""坐飞机两个小时。"' }
  ],
  teach: [
    { h: '点 / 小时', p: '"三点"是钟点（3 o\'clock）；"三个小时"是时间长度（3 hours）。' },
    { h: '位置', p: '时间长度放在动词后面：睡八个小时。' }
  ],
  err: [
    { x: '我八个小时睡觉。', v: '我睡了八个小时。', why: '时间长度放在动词后面。' },
    { x: '三小时点', v: '三点 / 三个小时', why: '"点"和"小时"不能一起用。' }
  ],
  hz: [
    { c: '小', rad: '小', radName: '小部', radMean: '小 small', struct: '独体字', parts: '亅 + 八', tip: '"小时"比古代的"时辰"（两小时）小，所以叫"小时"。', fam: '有"小"的字：少。' },
    { c: '时', rad: '日', radName: '日字旁', radMean: '太阳 sun', struct: '左右结构', parts: '日 + 寸', tip: '看太阳知道时间。', fam: '有"时"的词：时间、时候。' }
  ],
  cul: ['古代中国把一天分成十二个"时辰"，一个时辰是两个小时——所以现在的一小时叫"小时"（小的时辰）。', '中国全国用北京时间，没有时差。'],
  syn: [{ w: '钟头', py: 'zhōngtóu', note: '口语说法。', out: true }],
  ant: [],
  rel: ['点', '分钟', '时间', '天', '几']
},

'小学': {
  pos: [['名词', 'noun']],
  zh: ['对儿童进行初等教育的学校，一般六年。'],
  en: ['primary school; elementary school'],
  syl: [{ py: 'xiǎo', i: 'x', f: 'iao', t: 3 }, { py: 'xué', i: 'x', f: 'üe', t: 2 }],
  phon: [
    '第三声 + 第二声："小"只读前半段（低降），"学"上升。',
    '两个字都是 x 开头。',
    'xué 的 u 是 ü。'
  ],
  img: { src: 'img/xiaoxue.jpg', cap: "这是一个小学。", by: "Snehrashmi", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Shripor Timbi Primary School Building - Vadodara - Gujarat.jpg" },
  use: ['上 + 小学', '在 + 小学 + 学习 / 工作', '小学 → 中学 → 大学'],
  ex: [
    { ctx: '年龄', zh: '我 弟弟 上 小学 。', py: 'Wǒ dìdi shàng xiǎoxué.', en: 'My younger brother is in primary school.' },
    { ctx: '工作', zh: '她 在 小学 工作 。', py: 'Tā zài xiǎoxué gōngzuò.', en: 'She works at a primary school.' },
    { ctx: '描述', zh: '这个 小学 很 大 。', py: 'Zhège xiǎoxué hěn dà.', en: 'This primary school is big.' },
    { ctx: '询问', zh: '你 的 小学 在 哪儿 ？', py: 'Nǐ de xiǎoxué zài nǎr?', en: 'Where was your primary school?' }
  ],
  drill: [
    { t: 'choice', q: '六岁的孩子上 ___ 。', opts: ['小学', '大学', '中学', '医院'], a: 0, why: '六岁上小学。' },
    { t: 'order', words: ['小学', '妹妹', '上', '我'], a: '我妹妹上小学。', en: 'My younger sister is in primary school.' },
    { t: 'choice', q: '顺序是：', opts: ['小学 → 中学 → 大学', '大学 → 中学 → 小学', '中学 → 小学 → 大学', '小学 → 大学 → 中学'], a: 0, why: '从小到大。' },
    { t: 'choice', say: '小学', q: '听录音，选拼音。', opts: ['xiǎoxué', 'xiǎoshué', 'shǎoxué', 'xiàoxué'], a: 0, why: '小学 xiǎoxué。' }
  ],
  bop: {
    b: '老师出示三张学校照片（小学、中学、大学），问："哪个是小学？"',
    o: ['能听、说、认读"小学 xiǎoxué"', '能说"……上小学"', '知道中国的学制'],
    pre: '复习"大学、中学、学校"。',
    p: '① 跟读 xiǎoxué；② 学校系列：小学、中学、大学；③ 问答："你几岁上小学？""你的小学在哪儿？"',
    post: '介绍中国学制（小学六年）并和学生的国家比较；或做本页练习 1–4。',
    s: '板书：小学 → 中学 → 大学 ／ 上小学。作业：写一写你的小学。'
  },
  act: [
    { tag: '排序', name: '学校楼梯', how: '把"小学、中学、大学"贴在台阶图上，学生按顺序说"我……岁上小学，……岁上中学"。' },
    { tag: '调查', name: '我的小学', how: '学生互相问"你的小学大吗？在哪儿？"' },
    { tag: '文化体验', name: '中国小学', how: '看中国小学的照片（红领巾、早操），和学生自己的小学比较。' }
  ],
  teach: [
    { h: '学校系列', p: '小学（6 年）、中学（初中 3 年 + 高中 3 年）、大学。' },
    { h: '上 + 学校', p: '"上小学"= 在小学读书。' }
  ],
  err: [
    { x: '我弟弟在上小学生。', v: '我弟弟上小学。 / 我弟弟是小学生。', why: '小学是学校，小学生是人。' },
    { x: 'xiǎoshué', v: 'xiǎoxué', why: '"学"是 x。' }
  ],
  hz: [
    { c: '小', rad: '小', radName: '小部', radMean: '小 small', struct: '独体字', parts: '亅 + 八', tip: '给小孩子的学校——小学。', fam: '有"小"的字：少。' },
    { c: '学', rad: '子', radName: '子字底', radMean: '小孩 child', struct: '上下结构', parts: '⺍ + 冖 + 子', tip: '孩子在屋子里学习。', fam: '有"学"的词：大学、中学、学生。' }
  ],
  cul: ['中国孩子一般六岁上小学，读六年。小学生常戴红领巾。', '中国小学一般早上八点上课，每天有眼保健操和课间操。'],
  syn: [],
  ant: [{ w: '大学', note: '高等学校。' }],
  rel: ['小学生', '中学', '大学', '学校', '上学']
},

'小学生': {
  pos: [['名词', 'noun']],
  zh: ['在小学读书的学生。'],
  en: ['primary school pupil'],
  syl: [{ py: 'xiǎo', i: 'x', f: 'iao', t: 3 }, { py: 'xué', i: 'x', f: 'üe', t: 2 }, { py: 'shēng', i: 'sh', f: 'eng', t: 1 }],
  phon: [
    '第三声 + 第二声 + 第一声。大纲"生"标第一声，口语里常读轻声。',
    'x（小、学）和 sh（生）要分清。',
    'shēng 是后鼻音。'
  ],
  img: { src: 'img/xiaoxuesheng.jpg', cap: "她们是小学生。", by: "Municipalidad de Talcahuano", lic: "CC BY-SA 2.0", from: "Wikimedia Commons · Escolares-chilenos-Talcahuano.jpg" },
  use: ['是 + 小学生', '小学生 + 们', '……年级的小学生（超纲）'],
  ex: [
    { ctx: '身份', zh: '我 妹妹 是 小学生 。', py: 'Wǒ mèimei shì xiǎoxuéshēng.', en: 'My younger sister is a primary school pupil.' },
    { ctx: '描述', zh: '小学生 们 都 很 高兴 。', py: 'Xiǎoxuéshēngmen dōu hěn gāoxìng.', en: 'The pupils are all happy.' },
    { ctx: '日常', zh: '小学生 八 点 上课 。', py: 'Xiǎoxuéshēng bā diǎn shàngkè.', en: 'Primary school pupils start class at eight.' },
    { ctx: '询问', zh: '他 是 小学生 吗 ？', py: 'Tā shì xiǎoxuéshēng ma?', en: 'Is he a primary school pupil?' }
  ],
  drill: [
    { t: 'choice', q: '她八岁，是 ___ 。', opts: ['小学生', '大学生', '老师', '医生'], a: 0, why: '八岁上小学。' },
    { t: 'order', words: ['是', '小学生', '弟弟', '我'], a: '我弟弟是小学生。', en: 'My younger brother is a primary school pupil.' },
    { t: 'choice', q: '"小学生"在哪儿学习？', opts: ['小学', '大学', '医院', '公司'], a: 0, why: '小学生在小学学习。' },
    { t: 'choice', say: '小学生', q: '听录音，选汉字。', opts: ['小学生', '大学生', '中学生', '学生'], a: 0, why: '小学生 xiǎoxuéshēng。' }
  ],
  bop: {
    b: '老师出示背着书包的小学生照片："他是谁？——他是小学生！"',
    o: ['能听、说、认读"小学生"', '能说"……是小学生"', '掌握"……学生"系列'],
    pre: '复习"学生、大学生、小学"。',
    p: '① 跟读 xiǎoxuéshēng；② 系列：小学生、中学生、大学生；③ 看照片说"他是……生"。',
    post: '介绍家里的学生；或做本页练习 1–4。',
    s: '板书：小学 + 生 = 小学生 ／ 中学生、大学生。作业：用中文介绍一个家人："他是……生。"'
  },
  act: [
    { tag: '游戏', name: '他是什么学生', how: '老师出示不同年龄学生的照片，学生说"小学生／中学生／大学生"。' },
    { tag: '情境表演', name: '采访小学生', how: '一人扮小学生，一人采访："你几岁？你喜欢上学吗？"' },
    { tag: '展示', name: '我小时候', how: '学生带一张自己小学时的照片："这是我。那时候我是小学生。"' }
  ],
  teach: [
    { h: '构词', p: '学校 + 生 = 那个学校的学生：小学生、中学生、大学生。' },
    { h: '读音', p: '大纲标 xiǎoxuéshēng；口语"生"常读轻声。' }
  ],
  err: [
    { x: '他是小学。', v: '他是小学生。', why: '小学是学校，人要说"小学生"。' },
    { x: '他是一个小学的学生们。', v: '他是小学生。', why: '简单说"小学生"。' }
  ],
  hz: [
    { c: '小', rad: '小', radName: '小部', radMean: '小 small', struct: '独体字', parts: '亅 + 八', tip: '小孩子的学校。', fam: '有"小"的字：少。' },
    { c: '学', rad: '子', radName: '子字底', radMean: '小孩 child', struct: '上下结构', parts: '⺍ + 冖 + 子', tip: '孩子在屋子里学习。', fam: '有"子"的字：字、好、孩。' },
    { c: '生', rad: '生', radName: '生部', radMean: '生长 to grow', struct: '独体字', parts: '丿 + 一 + 一 + 丨 + 一', tip: '小草长出来——在学校"生长"的人，学生。', fam: '有"生"的词：学生、医生、先生。' }
  ],
  cul: ['中国小学生常常背很重的书包，放学后还要写很多作业。', '中国小学生很多戴红领巾，是少先队员的标志。'],
  syn: [],
  ant: [],
  rel: ['小学', '学生', '大学生', '小朋友', '上学']
},

'下午': {
  pos: [['名词', 'noun']],
  zh: ['中午十二点以后到傍晚的时间。'],
  en: ['afternoon; p.m.'],
  syl: [{ py: 'xià', i: 'x', f: 'ia', t: 4 }, { py: 'wǔ', i: 'w', f: 'u', t: 3 }],
  phon: [
    '第四声 + 第三声：先全降，再读低的第三声。',
    'x 是舌面音。',
    'wǔ 和"五"读音一样。'
  ],
  img: { src: 'img/xiawu.jpg', cap: "下午", by: "PattayaPatrol", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · DFC 2134 Shaded beachside cafe with tables and umbrellas set among trees patrons relaxing on the sandy shore as sunlight filters through the canopy.jpg" },
  use: ['下午 + 时间：下午三点', '下午 + 做什么', '上午 ↔ 下午'],
  ex: [
    { ctx: '时间', zh: '下午 三 点 见 。', py: 'Xiàwǔ sān diǎn jiàn.', en: 'See you at 3 p.m.' },
    { ctx: '安排', zh: '我 下午 有 课 。', py: 'Wǒ xiàwǔ yǒu kè.', en: 'I have class in the afternoon.' },
    { ctx: '询问', zh: '你 下午 做 什么 ？', py: 'Nǐ xiàwǔ zuò shénme?', en: 'What are you doing this afternoon?' },
    { ctx: '休息', zh: '明天 下午 我 不 上班 。', py: 'Míngtiān xiàwǔ wǒ bú shàngbān.', en: 'I am not working tomorrow afternoon.' }
  ],
  drill: [
    { t: 'choice', q: '3:00 p.m. 是 ___ 三点。', opts: ['下午', '上午', '晚上', '早上'], a: 0, why: 'p.m. 下午。' },
    { t: 'order', words: ['下午', '我', '课', '有'], a: '我下午有课。', alt: ['下午我有课。'], en: 'I have class in the afternoon.' },
    { t: 'choice', q: '"下午"的反义词是：', opts: ['上午', '晚上', '中午', '明天'], a: 0, why: '上午 ↔ 下午。' },
    { t: 'choice', say: '下午', q: '听录音，选拼音。', opts: ['xiàwǔ', 'shàwǔ', 'xiàwù', 'xiāwǔ'], a: 0, why: '下午 xiàwǔ。' }
  ],
  bop: {
    b: '老师画时间线，标出中午十二点："十二点以前是上午，以后是——下午！"',
    o: ['能听、说、认读"下午 xiàwǔ"', '能说"下午 + 时间 + 做什么"', '完成一天的时间线'],
    pre: '复习"上午、中午、晚上"。',
    p: '① 跟读 xiàwǔ；② 时间线：早上 → 上午 → 中午 → 下午 → 晚上；③ 问答："你下午做什么？"',
    post: '每人说自己的下午安排；或做本页练习 1–4。',
    s: '板书：上午（午前）↔ 下午（午后）／ 下午 + 几点。作业：写一写你明天下午的安排。'
  },
  act: [
    { tag: '游戏', name: '时间站位', how: '地上贴时间段，老师说"15:00"，学生跳到"下午"。' },
    { tag: '信息差', name: '约时间', how: '两人看日程表，用"你下午有时间吗？"约时间。' },
    { tag: '调查', name: '下午做什么', how: '学生互相问"星期六下午你做什么？"' }
  ],
  teach: [
    { h: '午', p: '"午"= 中午。上午 = 午前，下午 = 午后。' },
    { h: '时间顺序', p: '明天下午三点：从大到小。' }
  ],
  err: [
    { x: '三点下午', v: '下午三点', why: '时间段在前，钟点在后。' },
    { x: 'xiàwù', v: 'xiàwǔ', why: '"午"是第三声。' }
  ],
  hz: [
    { c: '下', rad: '一', radName: '一部', radMean: '——', struct: '独体字', parts: '横 + 竖 + 点', tip: '在这里是"后"：午后。', fam: '有"下"的词：下课、下班、下雨。' },
    { c: '午', rad: '十', radName: '十部（有的字典归"丿"部）', radMean: '——', struct: '独体字', parts: '丿 + 一 + 十', tip: '和"牛"像，竖不出头。', fam: '有"午"的词：上午、中午、午饭。' }
  ],
  cul: ['很多中国人下午会喝茶、午睡，广东人喜欢"下午茶"。', '中国学校下午一般四五点放学。'],
  syn: [],
  ant: [{ w: '上午', note: '中午以前。' }],
  rel: ['上午', '中午', '晚上', '早上', '点', '午饭']
},

'写': {
  pos: [['动词', 'verb']],
  zh: ['用笔在纸上画出字。'],
  en: ['to write'],
  syl: [{ py: 'xiě', i: 'x', f: 'ie', t: 3 }],
  phon: [
    '第三声，先降后升，声音要低。',
    'x 是舌面音，不要读成 shiě。',
    'ie 像英语 "yes" 里的 "ye"。'
  ],
  img: { src: 'img/xie.jpg', cap: "他在写字。", by: "Helloquence", lic: "CC0", from: "Wikimedia Commons · Sign here (Unsplash).jpg" },
  use: ['写 + 字 / 汉字 / 名字', '会 + 写', '请写……'],
  ex: [
    { ctx: '能力', zh: '我 会 写 汉字 。', py: 'Wǒ huì xiě Hànzì.', en: 'I can write Chinese characters.' },
    { ctx: '课堂', zh: '请 写 你 的 名字 。', py: 'Qǐng xiě nǐ de míngzi.', en: 'Please write your name.' },
    { ctx: '询问', zh: '这个 字 怎么 写 ？', py: 'Zhège zì zěnme xiě?', en: 'How do you write this character?' },
    { ctx: '称赞', zh: '你 写 的 字 很 漂亮 。', py: 'Nǐ xiě de zì hěn piàoliang.', en: 'Your handwriting is beautiful.' }
  ],
  drill: [
    { t: 'choice', q: '请在这儿 ___ 你的名字。', opts: ['写', '说', '听', '看'], a: 0, why: '写名字。' },
    { t: 'order', words: ['写', '汉字', '我', '会'], a: '我会写汉字。', en: 'I can write Chinese characters.' },
    { t: 'choice', q: '"这个字怎么写？"问的是：', opts: ['写法', '读音', '意思', '价钱'], a: 0, why: '"怎么写"问写法。' },
    { t: 'choice', say: '写', q: '听录音，选拼音。', opts: ['xiě', 'xiè', 'shiě', 'xiē'], a: 0, why: '写 xiě，第三声。' }
  ],
  bop: {
    b: '老师在黑板上写一个大大的"写"："我在做什么？——写！"',
    o: ['能听、说、认读"写 xiě"', '能说"写汉字、写名字"', '会问"……怎么写？"'],
    pre: '复习"听、说、读"。',
    p: '① 跟读 xiě；② 听说读写四个动作；③ 问答："……怎么写？"老师在黑板上示范。',
    post: '学生在黑板上写自己的中文名字；或做本页练习 1–4。',
    s: '板书：写 + 字 / 名字 ／ ……怎么写？／ 听说读写。作业：把今天学的十个字各写五遍。'
  },
  act: [
    { tag: '游戏', name: '背上写字', how: '一人在同伴背上写一个学过的字，同伴猜是什么字。' },
    { tag: 'TPR', name: '听说读写', how: '老师说"写"学生做写字动作，"听"手放耳边……越来越快。' },
    { tag: '游戏', name: '空中写字', how: '全班用手指在空中跟老师一起写字，练习笔顺。' }
  ],
  teach: [
    { h: '怎么写', p: '"……怎么写？"是课堂上最有用的问题之一。' },
    { h: '写的', p: '"你写的字"= the characters you write。' }
  ],
  err: [
    { x: '我写名字我。', v: '我写我的名字。', why: '"我的名字"放在动词后面。' },
    { x: 'xiè', v: 'xiě', why: '"写"是第三声；xiè 是"谢"。' }
  ],
  hz: [{ c: '写', rad: '冖', radName: '秃宝盖', radMean: '覆盖 cover', struct: '上下结构', parts: '冖 + 与', tip: '上面"冖"像一张纸盖着，下面"与"像一只手拿着笔——在纸上写。注意上面是"冖"，没有点。', fam: '秃宝盖的字：军、农（超纲）。' }],
  cul: ['中国人很重视写字，常说"字如其人"——看字就能看出一个人。', '书法（calligraphy）是中国很重要的艺术。'],
  syn: [],
  ant: [{ w: '读', note: '看着字念出来。' }],
  rel: ['字', '汉字', '名字', '读', '说', '听']
},

'些': {
  pos: [['量词', 'measure word']],
  zh: ['表示不确定的数量（不只一个）。'],
  en: ['some; a few (indefinite amount)'],
  syl: [{ py: 'xiē', i: 'x', f: 'ie', t: 1 }],
  phon: [
    '第一声，高而平。',
    'x 是舌面音。',
    '在"这些、那些、一些"里常读轻声。'
  ],
  img: { src: 'img/xie1.jpg', cap: "这些是水果。", by: "PattayaPatrol", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · DFC 3928 A vibrant pile of fresh oranges with mottled green-and-orange skins ready to be picked or enjoyed.jpg" },
  use: ['这些 / 那些 / 哪些 + 名词', '一些 + 名词', '有些 + 名词'],
  ex: [
    { ctx: '指示', zh: '这些 书 是 我 的 。', py: 'Zhèxiē shū shì wǒ de.', en: 'These books are mine.' },
    { ctx: '购物', zh: '我 买 了 一些 水果 。', py: 'Wǒ mǎi le yìxiē shuǐguǒ.', en: 'I bought some fruit.' },
    { ctx: '询问', zh: '那些 人 是 谁 ？', py: 'Nàxiē rén shì shéi?', en: 'Who are those people?' },
    { ctx: '描述', zh: '有些 菜 很 好吃 。', py: 'Yǒuxiē cài hěn hǎochī.', en: 'Some dishes are tasty.' }
  ],
  drill: [
    { t: 'choice', q: '这 ___ 苹果多少钱？', opts: ['些', '个', '本', '件'], a: 0, why: '很多苹果：这些。' },
    { t: 'order', words: ['一些', '买了', '我', '水果'], a: '我买了一些水果。', en: 'I bought some fruit.' },
    { t: 'choice', q: '"这个"和"这些"：', opts: ['这个是一个，这些是几个', '一样', '这些是一个', '都是一个'], a: 0, why: '个（一个）/ 些（几个）。' },
    { t: 'choice', say: '些', q: '听录音，选拼音。', opts: ['xiē', 'xiě', 'xiè', 'shiē'], a: 0, why: '些 xiē，第一声。' }
  ],
  bop: {
    b: '老师拿起一本书："这本书。"再拿起一堆书："这些书！"',
    o: ['能听、说、认读"些 xiē"', '能说"这些、那些、一些"', '知道"些"后不加别的量词'],
    pre: '复习"这个、那个、哪些、那些"。',
    p: '① 跟读 xiē；② 单数 → 多数：这个 → 这些，那个 → 那些；③ "一些"：买了一些水果。',
    post: '指教室里的东西说"这些……那些……"；或做本页练习 1–4。',
    s: '板书：这些 / 那些 / 哪些 / 一些 / 有些 + 名词（✗ 量词）。作业：写三句带"些"的话。'
  },
  act: [
    { tag: 'TPR', name: '个还是些', how: '老师拿一样东西说"这个"，拿一堆说"这些"，学生跟说并指。' },
    { tag: '情境表演', name: '水果摊', how: '"这些苹果多少钱？""那些呢？""我要一些。"' },
    { tag: '游戏', name: '些家族', how: '黑板写"些"，学生说出学过的：这些、那些、哪些、一些、有些。' }
  ],
  teach: [
    { h: '不加量词', p: '"些"本身就是量词：这些书（✗ 这些本书）。' },
    { h: '读音', p: '在"这些、那些、一些"里"些"常读轻声。' }
  ],
  err: [
    { x: '这些本书', v: '这些书', why: '"些"后面不加别的量词。' },
    { x: '这些人们', v: '这些人', why: '有"些"不加"们"。' }
  ],
  hz: [{ c: '些', rad: '二', radName: '二部', radMean: '——', struct: '上下结构', parts: '此 + 二', tip: '上面"此"（这个），下面"二"——不只一个，有好几个。', fam: '有"些"的词：这些、那些、一些、有些、哪些。' }],
  cul: ['"一些"在中国人说话里很常见，比如"多吃一些"（eat some more）。', '中国人说话比较委婉，常用"有些……"代替"很多……"。'],
  syn: [],
  ant: [],
  rel: ['这些', '那些', '哪些', '一些', '有些', '个']
},

'谢谢': {
  pos: [['动词', 'verb']],
  zh: ['对别人的帮助表示感激。'],
  en: ['thank you; thanks'],
  syl: [{ py: 'xiè', i: 'x', f: 'ie', t: 4 }, { py: 'xie', i: 'x', f: 'ie', t: 0 }],
  phon: [
    '第四声 + 轻声：第一个 xiè 全降，第二个 xie 又轻又短。',
    'x 是舌面音，不要读成 "shie"。',
    '不要读成 xièxiè（两个都重）。'
  ],
  img: { src: 'img/xiexie.jpg', cap: "谢谢！", by: "Fabebk", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Thank you chinchilla image.jpg（已裁剪）" },
  use: ['谢谢！', '谢谢 + 你 / 您', '回答：不客气'],
  ex: [
    { ctx: '感谢', zh: '谢谢 你 ！', py: 'Xièxie nǐ!', en: 'Thank you!' },
    { ctx: '对话', zh: '谢谢 ！ 不客气 。', py: 'Xièxie! Bú kèqi.', en: 'Thanks! — You are welcome.' },
    { ctx: '礼貌', zh: '谢谢 您 ， 老师 。', py: 'Xièxie nín, lǎoshī.', en: 'Thank you, teacher.' },
    { ctx: '拒绝', zh: '我 不 喝 ， 谢谢 。', py: 'Wǒ bù hē, xièxie.', en: 'I will not have any, thanks.' }
  ],
  drill: [
    { t: 'choice', q: 'A：给你。　B：___', opts: ['谢谢！', '不客气！', '没关系！', '对不起！'], a: 0, why: '别人给你东西，说"谢谢"。' },
    { t: 'order', words: ['谢谢', '您', '老师'], a: '谢谢您，老师。', alt: ['老师，谢谢您。'], en: 'Thank you, teacher.' },
    { t: 'choice', q: 'A：谢谢！　B：___', opts: ['不客气。', '没关系。', '谢谢。', '对不起。'], a: 0, why: '回答"谢谢"用"不客气"。' },
    { t: 'choice', say: '谢谢', q: '听录音，选拼音。', opts: ['xièxie', 'xièxiè', 'shièshie', 'xiěxie'], a: 0, why: '谢谢 xièxie。' }
  ],
  bop: {
    b: '老师递给一位学生一支笔，等学生接过后问全班："他应该说什么？——谢谢！"',
    o: ['能听、说、认读"谢谢 xièxie"', '会说和回答"谢谢"', '读好轻声'],
    pre: '复习"不客气、对不起、没关系"。',
    p: '① 跟读 xièxie，注意轻声；② 礼貌用语配对：谢谢—不客气，对不起—没关系；③ 情境：递东西、帮忙开门。',
    post: '全班传东西，每次都说"谢谢""不客气"；或做本页练习 1–4。',
    s: '板书：谢谢—不客气 ／ 对不起—没关系 ／ 谢谢你 / 您。作业：今天用中文说五次"谢谢"。'
  },
  act: [
    { tag: '游戏', name: '传礼物', how: '一个"礼物"在全班传，每人接到时说"谢谢"，给的人说"不客气"。' },
    { tag: '游戏', name: '礼貌配对', how: '卡片上写"谢谢、对不起、你好、再见"和回答，学生快速配对。' },
    { tag: '文化体验', name: '多种说法', how: '介绍"谢谢""多谢""太谢谢了""谢谢你的帮助"，讨论什么时候用。' }
  ],
  teach: [
    { h: '轻声', p: '第二个"谢"读轻声。' },
    { h: '拒绝', p: '"不……，谢谢"可以礼貌地拒绝：我不喝，谢谢。' }
  ],
  err: [
    { x: 'xièxiè', v: 'xièxie', why: '第二个字读轻声。' },
    { x: 'A：谢谢！B：没关系。', v: 'B：不客气。', why: '回答谢谢用"不客气"。' }
  ],
  hz: [{ c: '谢', rad: '讠', radName: '言字旁', radMean: '说话 speech', struct: '左中右结构', parts: '讠 + 身 + 寸', tip: '用嘴说（讠）、用身体（身）鞠躬、用手（寸）表示感谢——"谢"。', fam: '言字旁的字：说、话、请、读。' }],
  cul: ['中国人在很熟的朋友和家人之间不常说"谢谢"，说多了反而显得客气、有距离。', '对服务员、陌生人说"谢谢"是礼貌。'],
  syn: [],
  ant: [],
  rel: ['不客气', '对不起', '没关系', '请', '你好']
}

});
