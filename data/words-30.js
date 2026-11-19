// HSK1 教学参考 · 第 30 批（10 词）：中午 中学 中学生 住 桌子 字 做 坐 做饭 昨天
window.H1_WORDS = window.H1_WORDS || {};
Object.assign(H1_WORDS, {

'中午': {
  pos: [['名词', 'noun']],
  zh: ['白天十二点左右的时间。'],
  en: ['noon; midday'],
  syl: [{ py: 'zhōng', i: 'zh', f: 'ong', t: 1 }, { py: 'wǔ', i: 'w', f: 'u', t: 3 }],
  phon: [
    '第一声 + 第三声：先高平，再读低的第三声。',
    'zhōng 是卷舌、后鼻音。',
    'wǔ 和"五"读音一样。'
  ],
  img: { src: 'img/zhongwu.jpg', cap: "现在几点？", by: "Doug Wertman", lic: "CC BY 2.0", from: "Wikimedia Commons · Quarter 'Til Twelve (7032718079).jpg" },
  use: ['中午 + 十二点', '中午 + 做什么', '上午 → 中午 → 下午'],
  ex: [
    { ctx: '时间', zh: '中午 十 二 点 吃 午饭 。', py: 'Zhōngwǔ shí\'èr diǎn chī wǔfàn.', en: 'We have lunch at twelve noon.' },
    { ctx: '休息', zh: '我 中午 休息 一下 。', py: 'Wǒ zhōngwǔ xiūxi yíxià.', en: 'I rest a bit at noon.' },
    { ctx: '约定', zh: '我们 中午 见 。', py: 'Wǒmen zhōngwǔ jiàn.', en: 'See you at noon.' },
    { ctx: '天气', zh: '中午 很 热 。', py: 'Zhōngwǔ hěn rè.', en: 'It is hot at noon.' }
  ],
  drill: [
    { t: 'choice', q: '十二点是 ___ 。', opts: ['中午', '早上', '晚上', '下午'], a: 0, why: '12:00 中午。' },
    { t: 'order', words: ['中午', '见', '我们'], a: '我们中午见。', en: 'See you at noon.' },
    { t: 'choice', q: '顺序：上午 → ___ → 下午', opts: ['中午', '早上', '晚上', '昨天'], a: 0, why: '午前 → 中午 → 午后。' },
    { t: 'choice', say: '中午', q: '听录音，选拼音。', opts: ['zhōngwǔ', 'zōngwǔ', 'zhōngwù', 'zhòngwǔ'], a: 0, why: '中午 zhōngwǔ。' }
  ],
  bop: {
    b: '老师画太阳在天空最高处："太阳在中间——中午！"',
    o: ['能听、说、认读"中午 zhōngwǔ"', '能说"中午 + 做什么"', '完成一天的时间线'],
    pre: '复习"上午、下午、午饭"。',
    p: '① 跟读 zhōngwǔ；② 时间线：早上 → 上午 → 中午 → 下午 → 晚上；③ 问答："你中午做什么？"',
    post: '一天时间线复习；或做本页练习 1–4。',
    s: '板书：上午 → 中午（12:00）→ 下午 ／ 中午吃午饭。作业：写一写你中午做什么。'
  },
  act: [
    { tag: '游戏', name: '一天时间线', how: '打乱五个时间段，学生排序并各说一句。' },
    { tag: '调查', name: '中午做什么', how: '学生互相问"你中午做什么？"（吃饭、休息、睡觉）。' },
    { tag: '文化体验', name: '午休', how: '介绍中国人午休的习惯，和学生的国家比较。' }
  ],
  teach: [
    { h: '午', p: '"午"是中午 12 点：上午、中午、下午、午饭。' },
    { h: '中午 / 午饭', p: '"中午"是时间，"午饭"是一顿饭。' }
  ],
  err: [
    { x: '十二点中午', v: '中午十二点', why: '时间段在前。' },
    { x: 'zōngwǔ', v: 'zhōngwǔ', why: '"中"是卷舌音。' }
  ],
  hz: [
    { c: '中', rad: '丨', radName: '竖部', radMean: '——', struct: '独体字', parts: '口 + 丨', tip: '中间——一天的中间。', fam: '有"中"的词：中国、中文。' },
    { c: '午', rad: '十', radName: '十部', radMean: '——', struct: '独体字', parts: '丿 + 一 + 十', tip: '和"牛"像，竖不出头。', fam: '有"午"的词：上午、下午、午饭。' }
  ],
  cul: ['很多中国人中午休息一到两个小时，有的人会午睡。', '古代"午时"是 11 点到 13 点。'],
  syn: [],
  ant: [],
  rel: ['上午', '下午', '午饭', '早上', '晚上']
},

'中学': {
  pos: [['名词', 'noun']],
  zh: ['小学以后、大学以前的学校（初中和高中）。'],
  en: ['middle school; secondary school'],
  syl: [{ py: 'zhōng', i: 'zh', f: 'ong', t: 1 }, { py: 'xué', i: 'x', f: 'üe', t: 2 }],
  phon: [
    '第一声 + 第二声：先高平，再往上升。',
    'zh（卷舌）和 x（舌面）要分清。',
    'xué 的 u 是 ü。'
  ],
  img: { src: 'img/zhongxue.jpg', cap: "中学", by: "Quince Pan.", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Hwa Chong Institution Clock Tower Front View.JPG" },
  use: ['上 + 中学', '在 + 中学 + 工作 / 学习', '小学 → 中学 → 大学'],
  ex: [
    { ctx: '学习', zh: '我 哥哥 上 中学 。', py: 'Wǒ gēge shàng zhōngxué.', en: 'My older brother is in middle school.' },
    { ctx: '工作', zh: '她 在 中学 工作 。', py: 'Tā zài zhōngxué gōngzuò.', en: 'She works at a middle school.' },
    { ctx: '描述', zh: '这个 中学 很 大 。', py: 'Zhège zhōngxué hěn dà.', en: 'This middle school is big.' },
    { ctx: '询问', zh: '你 的 中学 在 哪儿 ？', py: 'Nǐ de zhōngxué zài nǎr?', en: 'Where was your middle school?' }
  ],
  drill: [
    { t: 'choice', q: '小学 → ___ → 大学', opts: ['中学', '中午', '中文', '中国'], a: 0, why: '学校顺序。' },
    { t: 'order', words: ['中学', '上', '弟弟', '我'], a: '我弟弟上中学。', en: 'My younger brother is in middle school.' },
    { t: 'choice', q: '中国的中学一般几年？', opts: ['六年（初中三年 + 高中三年）', '一年', '十年', '两年'], a: 0, why: '初中 3 + 高中 3。' },
    { t: 'choice', say: '中学', q: '听录音，选拼音。', opts: ['zhōngxué', 'zōngxué', 'zhōngshué', 'zhòngxué'], a: 0, why: '中学 zhōngxué。' }
  ],
  bop: {
    b: '老师画三级台阶：小学、中学、大学，指着中间："这是——中学！"',
    o: ['能听、说、认读"中学 zhōngxué"', '能说"上中学"', '完成学校系列'],
    pre: '复习"小学、大学、学校"。',
    p: '① 跟读 zhōngxué；② 学校台阶：小学 → 中学 → 大学；③ 问答："你几岁上中学？"',
    post: '介绍自己的中学；或做本页练习 1–4。',
    s: '板书：小学（6 年）→ 中学（6 年）→ 大学。作业：写一写你的中学。'
  },
  act: [
    { tag: '排序', name: '学校台阶', how: '学生把"小学、中学、大学"按顺序放好，说"我……岁上……"。' },
    { tag: '调查', name: '我的中学', how: '学生互相问"你的中学大吗？有很多学生吗？"' },
    { tag: '文化体验', name: '中国中学', how: '看中国中学生的照片（校服、早操），讨论和自己的中学有什么不一样。' }
  ],
  teach: [
    { h: '初中 / 高中', p: '中学 = 初中（3 年）+ 高中（3 年）（超纲）。' },
    { h: '上 + 学校', p: '上小学、上中学、上大学。' }
  ],
  err: [
    { x: '我哥哥是中学。', v: '我哥哥上中学。 / 我哥哥是中学生。', why: '中学是学校。' },
    { x: 'zōngxué', v: 'zhōngxué', why: '"中"是卷舌音。' }
  ],
  hz: [
    { c: '中', rad: '丨', radName: '竖部', radMean: '——', struct: '独体字', parts: '口 + 丨', tip: '中间的学校。', fam: '有"中"的词：中国、中文。' },
    { c: '学', rad: '子', radName: '子字底', radMean: '小孩', struct: '上下结构', parts: '⺍ + 冖 + 子', tip: '孩子在屋子里学。', fam: '有"学"的词：小学、大学。' }
  ],
  cul: ['中国中学生学习很紧张，高中毕业要参加"高考"。', '中国中学生一般穿校服。'],
  syn: [],
  ant: [],
  rel: ['中学生', '小学', '大学', '学校', '上学']
},

'中学生': {
  pos: [['名词', 'noun']],
  zh: ['在中学读书的学生。'],
  en: ['middle school student; secondary school student'],
  syl: [{ py: 'zhōng', i: 'zh', f: 'ong', t: 1 }, { py: 'xué', i: 'x', f: 'üe', t: 2 }, { py: 'shēng', i: 'sh', f: 'eng', t: 1 }],
  phon: [
    '第一声 + 第二声 + 第一声。大纲"生"标第一声，口语里常读轻声。',
    'zh、x、sh 三个音要分清。',
    'zhōng 和 shēng 都是后鼻音。'
  ],
  img: { src: 'img/zhongxuesheng.jpg', cap: "他们是中学生。", by: "褒忠國中 雲端網", lic: "CC BY 2.0", from: "Wikimedia Commons · Students of Baozhong Junior High School in khaki uniforms 20121207.jpg" },
  use: ['是 + 中学生', '中学生 + 们', '小学生 / 中学生 / 大学生'],
  ex: [
    { ctx: '身份', zh: '我 是 中学生 。', py: 'Wǒ shì zhōngxuéshēng.', en: 'I am a middle school student.' },
    { ctx: '描述', zh: '这些 中学生 都 很 高兴 。', py: 'Zhèxiē zhōngxuéshēng dōu hěn gāoxìng.', en: 'These middle school students are all happy.' },
    { ctx: '询问', zh: '你 妹妹 是 中学生 吗 ？', py: 'Nǐ mèimei shì zhōngxuéshēng ma?', en: 'Is your younger sister a middle school student?' },
    { ctx: '日常', zh: '中学生 很 忙 。', py: 'Zhōngxuéshēng hěn máng.', en: 'Middle school students are busy.' }
  ],
  drill: [
    { t: 'choice', q: '他十四岁，是 ___ 。', opts: ['中学生', '小学生', '大学生', '老师'], a: 0, why: '十四岁上中学。' },
    { t: 'order', words: ['是', '中学生', '她'], a: '她是中学生。', en: 'She is a middle school student.' },
    { t: 'choice', q: '"中学生"在哪儿学习？', opts: ['中学', '小学', '大学', '医院'], a: 0, why: '中学生在中学。' },
    { t: 'choice', say: '中学生', q: '听录音，选汉字。', opts: ['中学生', '小学生', '大学生', '学生'], a: 0, why: '中学生 zhōngxuéshēng。' }
  ],
  bop: {
    b: '老师出示三张学生照片（小孩、少年、大学生），问："谁是中学生？"',
    o: ['能听、说、认读"中学生"', '能说"……是中学生"', '完成"……学生"系列'],
    pre: '复习"小学生、大学生、中学"。',
    p: '① 跟读 zhōngxuéshēng；② 系列：小学生 / 中学生 / 大学生；③ 看照片说"他是……生"。',
    post: '介绍家里的学生；或做本页练习 1–4。',
    s: '板书：小学生 / 中学生 / 大学生。作业：写一写你中学的时候喜欢什么。'
  },
  act: [
    { tag: '游戏', name: '什么学生', how: '老师说年龄（7 岁、14 岁、20 岁），学生说"小学生 / 中学生 / 大学生"。' },
    { tag: '展示', name: '我的中学时代', how: '学生带一张中学时的照片："那时候我是中学生。"' },
    { tag: '情境表演', name: '采访', how: '采访"中学生"："你忙吗？你喜欢什么课？"' }
  ],
  teach: [
    { h: '构词', p: '中学 + 生 = 中学生。' },
    { h: '读音', p: '大纲标 zhōngxuéshēng；口语"生"常读轻声。' }
  ],
  err: [
    { x: '他是中学。', v: '他是中学生。', why: '人是"中学生"。' },
    { x: 'zōngxuéshēng', v: 'zhōngxuéshēng', why: '"中"是卷舌音。' }
  ],
  hz: [
    { c: '中', rad: '丨', radName: '竖部', radMean: '——', struct: '独体字', parts: '口 + 丨', tip: '中间。', fam: '有"中"的词：中学、中国。' },
    { c: '学', rad: '子', radName: '子字底', radMean: '小孩', struct: '上下结构', parts: '⺍ + 冖 + 子', tip: '孩子在屋子里学。', fam: '有"学"的词：学生、学习。' },
    { c: '生', rad: '生', radName: '生部', radMean: '生长', struct: '独体字', parts: '丿 + 一 + 一 + 丨 + 一', tip: '小草长出来。', fam: '有"生"的词：学生、医生。' }
  ],
  cul: ['中国中学生常常早上七点到校，晚上还有晚自习。', '中学生的校服常是运动服。'],
  syn: [],
  ant: [],
  rel: ['中学', '学生', '小学生', '大学生', '同学']
},

'住': {
  pos: [['动词', 'verb']],
  zh: ['在某个地方生活或过夜。'],
  en: ['to live; to stay'],
  syl: [{ py: 'zhù', i: 'zh', f: 'u', t: 4 }],
  phon: [
    '第四声，从高处全降。',
    'zh 是卷舌音，不要读成 zù 或 jù。',
    'u 的嘴唇要圆。'
  ],
  img: { src: 'img/zhu.jpg', cap: "我住在这儿。", by: "Matti Blume", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Apartment block, Zadar (P1080730).jpg（已裁剪）" },
  use: ['住 + 在 + 地方', '在 + 地方 + 住', '住 + 时间长度'],
  ex: [
    { ctx: '住址', zh: '你 住 在 哪儿 ？', py: 'Nǐ zhù zài nǎr?', en: 'Where do you live?' },
    { ctx: '住址', zh: '我 住 在 学校 里 。', py: 'Wǒ zhù zài xuéxiào lǐ.', en: 'I live at school.' },
    { ctx: '饭店', zh: '我 住 三 零 二 房间 。', py: 'Wǒ zhù sān líng èr fángjiān.', en: 'I am staying in room 302.' },
    { ctx: '时间', zh: '我 在 中国 住 了 一 年 。', py: 'Wǒ zài Zhōngguó zhù le yì nián.', en: 'I lived in China for a year.' }
  ],
  drill: [
    { t: 'choice', q: '你 ___ 在哪儿？—— 我住在学校里。', opts: ['住', '坐', '做', '在'], a: 0, why: '住在 = live in。' },
    { t: 'order', words: ['住', '在', '哪儿', '你'], a: '你住在哪儿？', en: 'Where do you live?' },
    { t: 'choice', q: '"住"和"在"：', opts: ['住是生活、过夜；在是位置', '一样', '在是生活', '都是量词'], a: 0, why: '我住在北京（live）；我在北京（am in）。' },
    { t: 'choice', say: '住', q: '听录音，选拼音。', opts: ['zhù', 'zù', 'jù', 'zhǔ'], a: 0, why: '住 zhù，第四声。' }
  ],
  bop: {
    b: '老师出示一张房子的照片："这是我家。我住在这儿。你们住在哪儿？"',
    o: ['能听、说、认读"住 zhù"', '能问、答"你住在哪儿？"', '会说"住了……（时间）"'],
    pre: '复习"在、家、房间、哪儿"。',
    p: '① 跟读 zhù；② 你住在哪儿？—— 我住在……；③ 住饭店：住……房间；④ 时间：住了一年。',
    post: '全班调查住处；或做本页练习 1–4。',
    s: '板书：住在 + 地方 ／ 你住在哪儿？／ 住了 + 时间。作业：写一写你住在哪儿，住了多长时间。'
  },
  act: [
    { tag: '调查', name: '住在哪儿', how: '学生互相问"你住在哪儿？"，在地图上标出。' },
    { tag: '情境表演', name: '饭店前台', how: '"您好，我住三零二。""好，这是您的钥匙。"（"钥匙"超纲）' },
    { tag: '游戏', name: '住还是在', how: '老师说半句，学生判断用"住"还是"在"。' }
  ],
  teach: [
    { h: '住在', p: '"住在 + 地方"最常用。也可以说"在 + 地方 + 住"。' },
    { h: '住 / 在', p: '"住"是生活、过夜；"在"只说位置。' }
  ],
  err: [
    { x: '我住北京在。', v: '我住在北京。', why: '住在 + 地方。' },
    { x: 'zù', v: 'zhù', why: '"住"是卷舌音。' }
  ],
  hz: [{ c: '住', rad: '亻', radName: '单人旁', radMean: '人', struct: '左右结构', parts: '亻 + 主', tip: '左边"亻"是人，右边"主 zhǔ"表示读音——人是家里的主人，"住"在家里。', fam: '单人旁的字：你、他、们、做、休。' }],
  cul: ['中国城市里很多人住在高楼里。', '中国人问"你住哪儿？"是很平常的问题。'],
  syn: [],
  ant: [],
  rel: ['在', '家', '房间', '饭店', '哪儿']
},

'桌子': {
  pos: [['名词', 'noun']],
  zh: ['上面平、下面有腿，可以放东西、吃饭、写字的家具。'],
  en: ['table; desk'],
  syl: [{ py: 'zhuō', i: 'zh', f: 'uo', t: 1 }, { py: 'zi', i: 'z', f: '-i', t: 0 }],
  phon: [
    '第一声 + 轻声："桌"高平，"子"又轻又短。',
    'zhuō 卷舌，zi 平舌，要分清。',
    'uo 要圆唇。'
  ],
  img: { src: 'img/zhuozi.jpg', cap: "一个桌子", by: "Hal Blakeley", lic: "CC0", from: "Wikimedia Commons · Hal Blakeley, Wooden Table, c. 1953, NGA 20059.jpg" },
  use: ['桌子 + 上 / 下', '一张桌子（"张"超纲，可说"一个桌子"）', '桌子和椅子'],
  ex: [
    { ctx: '位置', zh: '书 在 桌子 上 。', py: 'Shū zài zhuōzi shang.', en: 'The book is on the table.' },
    { ctx: '存在', zh: '桌子 上 有 一 个 杯子 。', py: 'Zhuōzi shang yǒu yí gè bēizi.', en: 'There is a cup on the table.' },
    { ctx: '房间', zh: '房间 里 有 桌子 和 椅子 。', py: 'Fángjiān lǐ yǒu zhuōzi hé yǐzi.', en: 'There is a table and chairs in the room.' },
    { ctx: '描述', zh: '这个 桌子 很 大 。', py: 'Zhège zhuōzi hěn dà.', en: 'This table is big.' }
  ],
  drill: [
    { t: 'choice', q: '我的手机在 ___ 上。', opts: ['桌子', '椅子下', '杯子里', '水'], a: 0, why: '桌子上。' },
    { t: 'order', words: ['桌子', '上', '书', '有'], a: '桌子上有书。', en: 'There are books on the table.' },
    { t: 'choice', q: '"桌子"和"椅子"：', opts: ['桌子放东西，椅子坐人', '一样', '椅子放东西', '都是吃的'], a: 0, why: '桌子 / 椅子。' },
    { t: 'choice', say: '桌子', q: '听录音，选拼音。', opts: ['zhuōzi', 'zuōzi', 'zhuōzǐ', 'zhōuzi'], a: 0, why: '桌子 zhuōzi。' }
  ],
  bop: {
    b: '老师拍拍讲台："这是桌子。"拍椅子："这是椅子。"',
    o: ['能听、说、认读"桌子 zhuōzi"', '能说"……在桌子上 / 下"', '复习"子"家族'],
    pre: '复习"椅子、上、下、有"。',
    p: '① 跟读 zhuōzi；② 位置：桌子上 / 下；③ 存在：桌子上有……。',
    post: '描述自己的书桌；或做本页练习 1–4。',
    s: '板书：桌子 ↔ 椅子 ／ 桌子上有…… ／ ……在桌子上。作业：写一写你的桌子上有什么。'
  },
  act: [
    { tag: 'TPR', name: '放东西', how: '老师说"书放在桌子上""笔放在桌子下"，学生照做。' },
    { tag: '游戏', name: '记忆桌', how: '桌上放五样东西，看三十秒后盖上，学生说"桌子上有……"。' },
    { tag: '画画', name: '我的书桌', how: '画自己的书桌，写上中文。' }
  ],
  teach: [
    { h: '量词', p: '桌子的量词是"张"（超纲）；HSK1 阶段可说"一个桌子"。' },
    { h: '"子"后缀', p: '桌子、椅子、杯子、包子、饺子、孩子——"子"读轻声。' }
  ],
  err: [
    { x: 'zuōzi', v: 'zhuōzi', why: '"桌"是卷舌音。' },
    { x: '书在上桌子。', v: '书在桌子上。', why: '方位词在名词后。' }
  ],
  hz: [
    { c: '桌', rad: '木', radName: '木字底', radMean: '树木', struct: '上下结构', parts: '卓 + 木（上面是"⺊ + 日"）', tip: '下面是"木"——桌子是木头做的；上面像高高的桌面。', fam: '有"木"的字：椅、杯、机。' },
    { c: '子', rad: '子', radName: '子部', radMean: '小孩', struct: '独体字', parts: '横撇 + 弯钩 + 横', tip: '名词后缀，读轻声。', fam: '带"子"的词：椅子、杯子。' }
  ],
  cul: ['中国人吃饭常用圆桌，大家围着坐，一起吃。', '饭店的大圆桌中间常有可以转动的玻璃转盘。'],
  syn: [],
  ant: [],
  rel: ['椅子', '上', '下', '房间', '杯子', '书']
},

'字': {
  pos: [['名词', 'noun']],
  zh: ['文字；一个一个的汉字。'],
  en: ['character; written word'],
  syl: [{ py: 'zì', i: 'z', f: '-i', t: 4 }],
  phon: [
    '第四声，从高处全降。',
    'z 是平舌音，韵母不是 "ee"：发 z 后舌头不动。',
    '不要读成 zhì 或 jì。'
  ],
  img: { src: 'img/zi.jpg', cap: "字", by: "佚名（Unknown）", lic: "CC BY-SA 2.5", from: "Wikimedia Commons · Aki no kanji.jpg" },
  use: ['写 / 读 / 认识 + 字', '这个字', '名字 / 汉字'],
  ex: [
    { ctx: '课堂', zh: '这个 字 怎么 读 ？', py: 'Zhège zì zěnme dú?', en: 'How do you read this character?' },
    { ctx: '能力', zh: '我 认识 很 多 字 。', py: 'Wǒ rènshi hěn duō zì.', en: 'I know many characters.' },
    { ctx: '称赞', zh: '你 的 字 很 漂亮 。', py: 'Nǐ de zì hěn piàoliang.', en: 'Your handwriting is beautiful.' },
    { ctx: '课堂', zh: '请 写 这 三 个 字 。', py: 'Qǐng xiě zhè sān gè zì.', en: 'Please write these three characters.' }
  ],
  drill: [
    { t: 'choice', q: '这个 ___ 怎么写？', opts: ['字', '自', '子', '紫'], a: 0, why: '写字。' },
    { t: 'order', words: ['字', '很', '你的', '漂亮'], a: '你的字很漂亮。', en: 'Your handwriting is beautiful.' },
    { t: 'choice', q: '"字"和"子"：', opts: ['zì / zi，字有宀，子没有', '一样', '读音一样', '都是名词后缀'], a: 0, why: '字 = 宀 + 子。' },
    { t: 'choice', say: '字', q: '听录音，选拼音。', opts: ['zì', 'zhì', 'jì', 'zǐ'], a: 0, why: '字 zì，第四声。' }
  ],
  bop: {
    b: '老师在黑板上写一个大大的"字"："这个字是什么？——字！"',
    o: ['能听、说、认读"字 zì"', '会问"这个字怎么读 / 写？"', '复习"汉字、名字"'],
    pre: '复习"汉字、名字、写、读"。',
    p: '① 跟读 zì，练平舌；② 课堂问句：这个字怎么读 / 写？；③ 称赞：你的字很漂亮。',
    post: '学生写自己最喜欢的字；或做本页练习 1–4。',
    s: '板书：字 = 宀 + 子 ／ 写字、汉字、名字 ／ 这个字怎么读？作业：写十个学过的字。'
  },
  act: [
    { tag: '游戏', name: '字的家族', how: '黑板上写"字"，学生说出带"字"的词：汉字、名字、写字。' },
    { tag: '展示', name: '我最喜欢的字', how: '每人写一个最喜欢的汉字，说说为什么。' },
    { tag: '游戏', name: '找不同', how: '对比"字、子、学"，找出部件的不同。' }
  ],
  teach: [
    { h: '字 / 子', p: '字 zì（第四声，有宝盖头）/ 子 zi（轻声后缀）。' },
    { h: '你的字', p: '"你的字很漂亮"= your handwriting is nice。' }
  ],
  err: [
    { x: 'zhì', v: 'zì', why: '"字"是平舌音。' },
    { x: '这个字怎么说？（问读音）', v: '这个字怎么读？', why: '问读音常用"怎么读"。' }
  ],
  hz: [{ c: '字', rad: '宀', radName: '宝盖头', radMean: '房子', struct: '上下结构', parts: '宀 + 子', tip: '房子（宀）里有孩子（子）——孩子在家里学写字。', fam: '宝盖头的字：家、客、宜。' }],
  cul: ['中国人说"字如其人"：看一个人的字，就能看出这个人。', '书法是中国传统艺术，很多中国孩子从小练字。'],
  syn: [{ w: '汉字', note: '中文的字。' }],
  ant: [],
  rel: ['汉字', '名字', '写', '读', '认识']
},

'做': {
  pos: [['动词', 'verb']],
  zh: ['进行某种活动，干：做什么？', '制作：做饭、做衣服。', '从事（工作）：做老师。'],
  en: ['to do', 'to make', 'to work as; to be'],
  syl: [{ py: 'zuò', i: 'z', f: 'uo', t: 4 }],
  phon: [
    '第四声，从高处全降。',
    'z 是平舌音，不要读成 zhuò。',
    '和"坐 zuò"读音一样，要靠写法和意思区分。'
  ],
  img: { src: 'img/zuo.jpg', cap: "她在做饭。", by: "Oratile Leipego", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · A woman cooking at the wedding.jpg" },
  use: ['做 + 什么', '做 + 饭 / 菜', '做 + 工作'],
  ex: [
    { ctx: '询问', zh: '你 在 做 什么 ？', py: 'Nǐ zài zuò shénme?', en: 'What are you doing?' },
    { ctx: '家庭', zh: '妈妈 在 做 饭 。', py: 'Māma zài zuò fàn.', en: 'Mom is cooking.' },
    { ctx: '工作', zh: '你 做 什么 工作 ？', py: 'Nǐ zuò shénme gōngzuò?', en: 'What do you do for a living?' },
    { ctx: '计划', zh: '明天 你 想 做 什么 ？', py: 'Míngtiān nǐ xiǎng zuò shénme?', en: 'What do you want to do tomorrow?' }
  ],
  drill: [
    { t: 'choice', q: '你在 ___ 什么？', opts: ['做', '坐', '昨', '作'], a: 0, why: 'do：做。' },
    { t: 'order', words: ['做', '你', '什么', '工作'], a: '你做什么工作？', en: 'What do you do for a living?' },
    { t: 'choice', q: '"做"和"坐"：', opts: ['读音一样，"做"是 do，"坐"是 sit', '意思一样', '读音不一样', '都是 sit'], a: 0, why: '做（do）/ 坐（sit）。' },
    { t: 'choice', say: '做', q: '听录音，选拼音。', opts: ['zuò', 'zhuò', 'zuǒ', 'cuò'], a: 0, why: '做 zuò，第四声。' }
  ],
  bop: {
    b: '老师问学生："你周末做什么？"学生回答后，老师写"做"。',
    o: ['能听、说、认读"做 zuò"', '能问"你在做什么？""你做什么工作？"', '分清"做"和"坐"'],
    pre: '复习"工作、饭、什么"。',
    p: '① 跟读 zuò；② 做什么？做饭、做工作；③ 做 vs 坐（同音）。',
    post: '"你在做什么？"动作游戏；或做本页练习 1–4。',
    s: '板书：做 + 什么 / 饭 / 工作 ／ 做（亻，do）≠ 坐（土，sit）。作业：写一写你周末做什么。'
  },
  act: [
    { tag: '游戏', name: '你在做什么', how: '一人做动作，全班问"你在做什么？"，他回答"我在……"。' },
    { tag: '游戏', name: '做还是坐', how: '老师说句子，学生举"做"或"坐"的卡片：请……／你……什么？' },
    { tag: '调查', name: '周末做什么', how: '学生互相问"你周末做什么？"（"周末"超纲，可说"星期六"）。' }
  ],
  teach: [
    { h: '做 / 坐 / 作', p: '做（do / make）、坐（sit）、作（工作的"作"）读音都是 zuò。' },
    { h: '做什么', p: '"你做什么？"可以问现在的动作，也可以问职业（做什么工作）。' }
  ],
  err: [
    { x: '请做。（想说请坐）', v: '请坐。', why: 'sit 是"坐"。' },
    { x: 'zhuò', v: 'zuò', why: '"做"是平舌音。' }
  ],
  hz: [{ c: '做', rad: '亻', radName: '单人旁', radMean: '人', struct: '左右结构', parts: '亻 + 故', tip: '左边"亻"是人——人在做事。右边是"故"。', fam: '单人旁的字：你、他、住、休、件。' }],
  cul: ['"做饭"是中国家庭的大事，很多人每天自己做饭。', '"做人"是"为人处世"的意思：先学做人，再学做事（拓展）。'],
  syn: [],
  ant: [],
  rel: ['做饭', '工作', '坐', '什么', '在']
},

'坐': {
  pos: [['动词', 'verb']],
  zh: ['把身体放在椅子等上面休息。', '乘坐（交通工具）：坐车、坐飞机。'],
  en: ['to sit', 'to travel by (vehicle)'],
  syl: [{ py: 'zuò', i: 'z', f: 'uo', t: 4 }],
  phon: [
    '第四声，从高处全降。',
    'z 是平舌音。',
    '和"做 zuò"读音一样。'
  ],
  img: { src: 'img/zuo4.jpg', cap: "他坐在椅子上。", by: "Acabashi", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Man on bench Easton Lodge Gardens, Little Easton, Essex, England.jpg" },
  use: ['请坐', '坐在 + 地方', '坐 + 车 / 飞机 / 火车'],
  ex: [
    { ctx: '招待', zh: '请 坐 。', py: 'Qǐng zuò.', en: 'Please sit down.' },
    { ctx: '位置', zh: '他 坐 在 椅子 上 。', py: 'Tā zuò zài yǐzi shang.', en: 'He is sitting on the chair.' },
    { ctx: '出行', zh: '我 坐 飞机 去 中国 。', py: 'Wǒ zuò fēijī qù Zhōngguó.', en: 'I am going to China by plane.' },
    { ctx: '询问', zh: '你 坐 车 来 吗 ？', py: 'Nǐ zuò chē lái ma?', en: 'Are you coming by car?' }
  ],
  drill: [
    { t: 'choice', q: '客人来了，你说："请 ___ ！"', opts: ['坐', '做', '昨', '住'], a: 0, why: '请坐。' },
    { t: 'order', words: ['坐', '去', '火车', '我'], a: '我坐火车去。', en: 'I am going by train.' },
    { t: 'choice', q: '"坐"的部首是：', opts: ['土', '亻', '口', '木'], a: 0, why: '坐 = 两个人坐在土上。' },
    { t: 'choice', say: '坐', q: '听录音，选拼音。', opts: ['zuò', 'zhuò', 'zuǒ', 'cuò'], a: 0, why: '坐 zuò，第四声。' }
  ],
  bop: {
    b: '老师站在门口迎接学生："请进！请坐！"',
    o: ['能听、说、认读"坐 zuò"', '会说"请坐""坐在……上"', '会说"坐 + 交通工具"'],
    pre: '复习"椅子、车、飞机、火车"。',
    p: '① 跟读 zuò；② 请坐 / 坐在椅子上；③ 坐车、坐飞机、坐火车；④ 坐 vs 做。',
    post: '"你怎么去？"——"我坐……去"；或做本页练习 1–4。',
    s: '板书：请坐 ／ 坐在 + 地方 ／ 坐 + 车 / 飞机 ／ 坐（土，sit）≠ 做（亻，do）。作业：写一写你怎么来学校。'
  },
  act: [
    { tag: 'TPR', name: '站和坐', how: '老师说"站起来""请坐"，学生照做，越来越快。' },
    { tag: '调查', name: '怎么来学校', how: '学生互相问"你怎么来学校？""我坐车来。"' },
    { tag: '画画', name: '象形坐', how: '看"坐"字：两个人（人人）坐在地上（土），学生画出来。' }
  ],
  teach: [
    { h: '坐 + 交通工具', p: '乘车、乘飞机都用"坐"：坐车、坐飞机、坐出租车。' },
    { h: '做 / 坐', p: '读音一样：做（do）、坐（sit）。' }
  ],
  err: [
    { x: '请做。', v: '请坐。', why: 'sit 是"坐"。' },
    { x: '我坐在飞机去中国。', v: '我坐飞机去中国。', why: '交通工具前不加"在"。' }
  ],
  hz: [{ c: '坐', rad: '土', radName: '土部', radMean: '土 earth', struct: '上下结构', parts: '人 + 人 + 土', tip: '两个"人"坐在"土"（地）上——"坐"。', fam: '有"土"的字：在、块。' }],
  cul: ['"坐"字很形象：两个人面对面坐在地上，古人就是坐在地上的。', '中国人请客人坐时常说"请坐，请坐"，要说两遍表示热情。'],
  syn: [],
  ant: [],
  rel: ['做', '椅子', '车', '飞机', '火车', '请']
},

'做饭': {
  pos: [['短语', 'phrase']],
  zh: ['准备饭菜；煮饭、炒菜。'],
  en: ['to cook; to make a meal'],
  syl: [{ py: 'zuò', i: 'z', f: 'uo', t: 4 }, { py: 'fàn', i: 'f', f: 'an', t: 4 }],
  phon: [
    '两个第四声连读：两个字都要降，第一个降得短一点。',
    'z 是平舌音。',
    'f 是上牙碰下唇。'
  ],
  img: { src: 'img/zuofan.jpg', cap: "做饭", by: "Infrogmation of New Orleans", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Cooking stir fry beef, Terrytown, Louisiana, February 2016 Skillet.jpg" },
  use: ['会 + 做饭', '在 + 做饭', '给 + 人 + 做饭'],
  ex: [
    { ctx: '能力', zh: '我 会 做饭 。', py: 'Wǒ huì zuòfàn.', en: 'I can cook.' },
    { ctx: '进行', zh: '妈妈 在 做饭 。', py: 'Māma zài zuòfàn.', en: 'Mom is cooking.' },
    { ctx: '家庭', zh: '爸爸 给 我们 做饭 。', py: 'Bàba gěi wǒmen zuòfàn.', en: 'Dad cooks for us.' },
    { ctx: '爱好', zh: '你 喜欢 做饭 吗 ？', py: 'Nǐ xǐhuan zuòfàn ma?', en: 'Do you like cooking?' }
  ],
  drill: [
    { t: 'choice', q: '妈妈在厨房 ___ 。', opts: ['做饭', '坐饭', '吃饭店', '饭做'], a: 0, why: '做饭。' },
    { t: 'order', words: ['做饭', '会', '你', '吗'], a: '你会做饭吗？', en: 'Can you cook?' },
    { t: 'choice', q: '"做饭"的"做"是：', opts: ['做（亻）', '坐（土）', '作', '昨'], a: 0, why: '做饭 = make a meal。' },
    { t: 'choice', say: '做饭', q: '听录音，选拼音。', opts: ['zuòfàn', 'zhuòfàn', 'zuòhàn', 'zuǒfàn'], a: 0, why: '做饭 zuòfàn。' }
  ],
  bop: {
    b: '老师系上围裙，拿着锅铲做炒菜的动作："我在做什么？——做饭！"',
    o: ['能听、说、认读"做饭 zuòfàn"', '能说"我会 / 不会做饭"', '复习"做"和"饭"'],
    pre: '复习"做、饭、会、给"。',
    p: '① 跟读 zuòfàn；② 问答："你会做饭吗？""谁给你做饭？"；③ 给 + 人 + 做饭。',
    post: '全班调查谁会做饭；或做本页练习 1–4。',
    s: '板书：做饭 ／ 会做饭 ／ 给 + 人 + 做饭。作业：写一写你会做的一个菜。'
  },
  act: [
    { tag: '调查', name: '谁会做饭', how: '学生互相问"你会做饭吗？你会做什么菜？"' },
    { tag: 'TPR', name: '做饭动作', how: '老师说"做饭"学生做炒菜的动作，说"吃饭"做吃的动作。' },
    { tag: '文化体验', name: '包饺子', how: '一起学做简单的中国菜，或者用橡皮泥"包饺子"。' }
  ],
  teach: [
    { h: '离合词', p: '"做饭"可以分开：做了一个菜、做中国饭（拓展）。' },
    { h: '做饭 / 吃饭', p: '做饭（cook）/ 吃饭（eat）。' }
  ],
  err: [
    { x: '坐饭', v: '做饭', why: 'cook 的"做"是单人旁。' },
    { x: '我做饭给你。（初级）', v: '我给你做饭。', why: '"给 + 人"放在动词前。' }
  ],
  hz: [
    { c: '做', rad: '亻', radName: '单人旁', radMean: '人', struct: '左右结构', parts: '亻 + 故', tip: '人在做事。', fam: '单人旁的字：你、他、住。' },
    { c: '饭', rad: '饣', radName: '食字旁', radMean: '食物', struct: '左右结构', parts: '饣 + 反', tip: '和吃有关。', fam: '有"饭"的词：早饭、午饭、晚饭。' }
  ],
  cul: ['很多中国家庭爸爸也做饭，"会做饭"是很受欢迎的优点。', '中国菜做法很多：炒、煮、蒸、炸（超纲）。'],
  syn: [],
  ant: [],
  rel: ['做', '饭', '吃', '菜', '米饭', '早饭']
},

'昨天': {
  pos: [['名词', 'noun']],
  zh: ['今天的前一天。'],
  en: ['yesterday'],
  syl: [{ py: 'zuó', i: 'z', f: 'uo', t: 2 }, { py: 'tiān', i: 't', f: 'ian', t: 1 }],
  phon: [
    '第二声 + 第一声：先升上去，再保持高平。',
    'z 是平舌音，不要读成 zhuó。',
    't 要送气。'
  ],
  img: { src: 'img/zuotian.jpg', cap: "昨天", by: "george ruiz", lic: "CC BY 2.0", from: "Wikimedia Commons · 2011-03-05 The little guy's special day.jpg（已裁剪）" },
  use: ['昨天 + 主语 + 动词', '主语 + 昨天 + 动词', '昨天 — 今天 — 明天'],
  ex: [
    { ctx: '过去', zh: '我 昨天 去 了 医院 。', py: 'Wǒ zuótiān qù le yīyuàn.', en: 'I went to the hospital yesterday.' },
    { ctx: '日期', zh: '昨天 星期 天 。', py: 'Zuótiān xīngqītiān.', en: 'Yesterday was Sunday.' },
    { ctx: '天气', zh: '昨天 很 冷 。', py: 'Zuótiān hěn lěng.', en: 'It was cold yesterday.' },
    { ctx: '询问', zh: '你 昨天 做 什么 了 ？', py: 'Nǐ zuótiān zuò shénme le?', en: 'What did you do yesterday?' }
  ],
  drill: [
    { t: 'choice', q: '今天星期二，___ 星期一。', opts: ['昨天', '明天', '今年', '去年'], a: 0, why: '今天的前一天：昨天。' },
    { t: 'order', words: ['昨天', '我', '电影', '看了'], a: '我昨天看了电影。', alt: ['昨天我看了电影。'], en: 'I watched a movie yesterday.' },
    { t: 'choice', q: '顺序：___ — 今天 — 明天', opts: ['昨天', '去年', '早上', '中午'], a: 0, why: '昨天 — 今天 — 明天。' },
    { t: 'choice', say: '昨天', q: '听录音，选拼音。', opts: ['zuótiān', 'zhuótiān', 'zuǒtiān', 'zuódiān'], a: 0, why: '昨天 zuótiān。' }
  ],
  bop: {
    b: '老师指着日历上昨天的日期："今天是……，这天是——昨天！"',
    o: ['能听、说、认读"昨天 zuótiān"', '能说"我昨天……了"', '完成"昨天—今天—明天"'],
    pre: '复习"今天、明天、了"。',
    p: '① 跟读 zuótiān；② 时间轴：昨天 — 今天 — 明天；③ 过去的事：我昨天……了。',
    post: '每人说一件昨天做的事；或做本页练习 1–4。',
    s: '板书：昨天 — 今天 — 明天 ／ 我昨天 + 动词 + 了。作业：写三句话说说你昨天做了什么。'
  },
  act: [
    { tag: '游戏', name: '昨天今天明天', how: '老师说"今天星期三"，学生抢答"昨天星期二，明天星期四"。' },
    { tag: '调查', name: '昨天做了什么', how: '学生互相问"你昨天做什么了？"' },
    { tag: '游戏', name: '时间旅行', how: '地上贴"昨天、今天、明天"，老师说句子，学生跳到对应位置。' }
  ],
  teach: [
    { h: '时间词位置', p: '昨天我去了 / 我昨天去了，不放句尾。' },
    { h: '了', p: '说昨天做了的事常加"了"：我昨天去了医院。说状态不加：昨天很冷。' }
  ],
  err: [
    { x: '我去了医院昨天。', v: '我昨天去了医院。', why: '时间词不放句尾。' },
    { x: '昨天很冷了。', v: '昨天很冷。', why: '形容词说过去的状态不加"了"。' }
  ],
  hz: [
    { c: '昨', rad: '日', radName: '日字旁', radMean: '太阳', struct: '左右结构', parts: '日 + 乍', tip: '左边"日"——太阳刚刚过去的那一天。右边"乍 zhà"表示读音（古音相近）。', fam: '日字旁的字：明、时、晚。' },
    { c: '天', rad: '大', radName: '大部', radMean: '大', struct: '独体字', parts: '一 + 大', tip: '人头上的天。', fam: '有"天"的词：今天、明天。' }
  ],
  cul: ['"昨天"在歌词和诗里常表示"过去"：昨天的我（the old me）。', '前天 — 昨天 — 今天 — 明天 — 后天（"前天、后天"超纲）。'],
  syn: [],
  ant: [{ w: '明天', note: '今天的下一天。' }],
  rel: ['今天', '明天', '天', '去年', '了']
}

});
