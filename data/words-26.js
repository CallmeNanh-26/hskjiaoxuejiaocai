// HSK1 教学参考 · 第 26 批（10 词）：学校 要 也 一 一半 一点儿 衣服 医生 一下 一些
window.H1_WORDS = window.H1_WORDS || {};
Object.assign(H1_WORDS, {

'学校': {
  pos: [['名词', 'noun']],
  zh: ['老师教学生的地方。'],
  en: ['school'],
  syl: [{ py: 'xué', i: 'x', f: 'üe', t: 2 }, { py: 'xiào', i: 'x', f: 'iao', t: 4 }],
  phon: [
    '第二声 + 第四声：先升上去，再从高处降下来。',
    '两个字都是 x，舌面音。',
    'xué 的 u 是 ü，嘴唇要圆。'
  ],
  img: { src: 'img/xuexiao.jpg', cap: "这是一个学校。", by: "Solomon203", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Taipei Municipal Zhongxiao Junior High School main entrance 20171111.jpg" },
  use: ['去 / 在 + 学校', '我们学校', '学校 + 里 / 外边'],
  ex: [
    { ctx: '日常', zh: '我 去 学校 。', py: 'Wǒ qù xuéxiào.', en: 'I am going to school.' },
    { ctx: '描述', zh: '我们 学校 很 大 。', py: 'Wǒmen xuéxiào hěn dà.', en: 'Our school is big.' },
    { ctx: '位置', zh: '学校 在 哪儿 ？', py: 'Xuéxiào zài nǎr?', en: 'Where is the school?' },
    { ctx: '存在', zh: '学校 里 有 很 多 学生 。', py: 'Xuéxiào lǐ yǒu hěn duō xuésheng.', en: 'There are many students in the school.' }
  ],
  drill: [
    { t: 'choice', q: '老师和学生在 ___ 。', opts: ['学校', '医院', '饭店', '商店'], a: 0, why: '老师和学生在学校。' },
    { t: 'order', words: ['学校', '去', '我', '八点'], a: '我八点去学校。', en: 'I go to school at eight.' },
    { t: 'choice', q: '"学校、学生、学习"：哪个是地方？', opts: ['学校', '学生', '学习', '都是'], a: 0, why: '学校是地方。' },
    { t: 'choice', say: '学校', q: '听录音，选拼音。', opts: ['xuéxiào', 'xuéshào', 'xuěxiào', 'shuéxiào'], a: 0, why: '学校 xuéxiào。' }
  ],
  bop: {
    b: '老师出示学校大门的照片："这是哪儿？——学校！我们在学校学习。"',
    o: ['能听、说、认读"学校 xuéxiào"', '能说"去学校、我们学校"', '分清"学校、学生、学习"'],
    pre: '复习"学、学生、学习、小学、大学"。',
    p: '① 跟读 xuéxiào；② "学"家族：学校（哪儿）、学生（谁）、学习（做什么）；③ 问答："你们学校大吗？学校在哪儿？"',
    post: '介绍自己的学校；或做本页练习 1–4。',
    s: '板书：学校（哪儿）/ 学生（谁）/ 学习（做什么）。作业：画一张学校的地图，写上中文。'
  },
  act: [
    { tag: '游戏', name: '学家族', how: '老师问"哪儿？谁？做什么？"，学生抢答"学校！学生！学习！"' },
    { tag: '展示', name: '我的学校', how: '学生介绍："我们学校很大，有很多学生和老师。"' },
    { tag: '画画', name: '学校地图', how: '分组画学校地图，标出"教室、商店、饭店（食堂）"等。' }
  ],
  teach: [
    { h: '我们学校', p: '"我们 + 学校"常省略"的"。' },
    { h: '学校系列', p: '小学、中学、大学都是学校。' }
  ],
  err: [
    { x: '我学习在学校。', v: '我在学校学习。', why: '"在 + 地点"放在动词前面。' },
    { x: 'xuéshào', v: 'xuéxiào', why: '"校"是 x。' }
  ],
  hz: [
    { c: '学', rad: '子', radName: '子字底', radMean: '小孩 child', struct: '上下结构', parts: '⺍ + 冖 + 子', tip: '孩子在屋子里学习。', fam: '有"学"的词：学生、学习、同学。' },
    { c: '校', rad: '木', radName: '木字旁', radMean: '树木 wood', struct: '左右结构', parts: '木 + 交', tip: '左边"木"——古代学校是木头房子；右边"交 jiāo"表示读音，也有"交流"的意思。', fam: '木字旁的字：机、杯、椅。' }
  ],
  cul: ['中国学校常有升国旗仪式和早操。', '中国孩子一般六岁上学，小学六年、初中三年、高中三年。'],
  syn: [],
  ant: [],
  rel: ['学生', '学习', '老师', '小学', '大学', '中学']
},

'要': {
  pos: [['动词', 'verb']],
  zh: ['想得到；需要：我要一杯茶。', '想做（意愿很强）：我要去中国。', '应该：你要多休息。'],
  en: ['to want; to need', 'to want to; will', 'should; must'],
  syl: [{ py: 'yào', i: 'y', f: 'ao', t: 4 }],
  phon: [
    '第四声，从高处全降。',
    '读起来像英语 "yow"。',
    '"不要"读 bú yào（"不"变第二声）。'
  ],
  img: { src: 'img/yao.jpg', cap: "我要这个。", by: "PattayaPatrol", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · DFC 2596 A bustling food stall at a busy market as customers point out their orders while vendors prepare dishes behind the counter.jpg" },
  use: ['要 + 名词：要茶', '要 + 动词：要去', '不要 + 动词（别）'],
  ex: [
    { ctx: '点东西', zh: '我 要 一 个 包子 。', py: 'Wǒ yào yí gè bāozi.', en: 'I want a steamed bun.' },
    { ctx: '计划', zh: '我 明天 要 去 医院 。', py: 'Wǒ míngtiān yào qù yīyuàn.', en: 'I have to go to the hospital tomorrow.' },
    { ctx: '询问', zh: '你 要 什么 ？', py: 'Nǐ yào shénme?', en: 'What do you want?' },
    { ctx: '劝告', zh: '你 生病 了 ， 要 多 休息 。', py: 'Nǐ shēngbìng le, yào duō xiūxi.', en: 'You are sick; you should rest more.' }
  ],
  drill: [
    { t: 'choice', q: '服务员：你 ___ 什么？客人：我要茶。', opts: ['要', '是', '在', '有'], a: 0, why: '点东西：要。' },
    { t: 'order', words: ['要', '我', '中国', '去'], a: '我要去中国。', en: 'I am going to China.' },
    { t: 'choice', q: '"要"和"想"：', opts: ['"要"更直接、更坚决', '一样', '"想"更坚决', '都不常用'], a: 0, why: '要 > 想（语气）。' },
    { t: 'choice', say: '要', q: '听录音，选拼音。', opts: ['yào', 'yǎo', 'yáo', 'yòu'], a: 0, why: '要 yào，第四声。' }
  ],
  bop: {
    b: '老师当服务员："你要什么？"学生回答"我要……"。',
    o: ['能听、说、认读"要 yào"', '会用"我要……"点东西', '分清"要"和"想"'],
    pre: '复习"想、买、吃、喝"。',
    p: '① 跟读 yào；② 点东西：我要……；③ 要 + 动词：我要去……；④ 要 vs 想。',
    post: '餐厅情境表演；或做本页练习 1–4。',
    s: '板书：要 + 名词 / 动词 ／ 不要 + 动词 ／ 想（温和）< 要（坚决）。作业：写三句"我要……"。'
  },
  act: [
    { tag: '情境表演', name: '点菜', how: '"你要什么？""我要一个包子和一杯茶。""还要什么？""不要了，谢谢。"' },
    { tag: '游戏', name: '要还是不要', how: '老师拿出东西问"你要吗？"，学生说"要！"或"不要，谢谢。"' },
    { tag: '调查', name: '明天要做什么', how: '学生互相问"你明天要做什么？"' }
  ],
  teach: [
    { h: '多用法', p: '要 + 名词（want）、要 + 动词（will / want to）、要 + 动词（should）。' },
    { h: '否定', p: '"不要"多是"别"（don\'t）；"不想"是"不愿意"。' }
  ],
  err: [
    { x: '我要去中国。（想说不想去）不要去。', v: '我不想去。', why: '"不要去"是命令"别去"。' },
    { x: '我要一茶。', v: '我要一杯茶。', why: '要量词（"杯"超纲，可说"我要茶"）。' }
  ],
  hz: [{ c: '要', rad: '西', radName: '西字头', radMean: '——', struct: '上下结构', parts: '覀 + 女', tip: '古字像一个人两手叉腰——"腰"的本字。后来借来表示"要"。', fam: '有"女"的字：好、妈、她。' }],
  cul: ['在中国饭店点菜，常说"来一个……"或"我要……"。', '中国人说"不要"有时是客气，主人可能还会再给。'],
  syn: [{ w: '想', note: '语气温和。' }],
  ant: [{ w: '不要', note: 'don\'t / don\'t want。' }],
  rel: ['想', '不要', '买', '吃', '喝']
},

'也': {
  pos: [['副词', 'adverb']],
  zh: ['表示同样，和前面说的一样。'],
  en: ['also; too; as well'],
  syl: [{ py: 'yě', i: 'y', f: 'ie', t: 3 }],
  phon: [
    '第三声，先降后升，声音要低。',
    '读起来像英语 "ye"（yes 去掉 s）。',
    '"也很好"三个第三声连读：yé hén hǎo。'
  ],
  img: { src: 'img/ye.jpg', cap: "这只猫是黑的，那只也是。", by: "Андрей Романенко", lic: "CC BY-SA 3.0", from: "Wikimedia Commons · Two black cats from Pyatigorsk.jpg" },
  use: ['主语 + 也 + 动词 / 形容词', '我也是……', 'A……，B 也……'],
  ex: [
    { ctx: '身份', zh: '他 是 学生 ， 我 也 是 学生 。', py: 'Tā shì xuésheng, wǒ yě shì xuésheng.', en: 'He is a student; I am a student too.' },
    { ctx: '爱好', zh: '我 也 喜欢 猫 。', py: 'Wǒ yě xǐhuan māo.', en: 'I like cats too.' },
    { ctx: '状态', zh: '我 也 很 忙 。', py: 'Wǒ yě hěn máng.', en: 'I am busy too.' },
    { ctx: '询问', zh: '你 也 去 吗 ？', py: 'Nǐ yě qù ma?', en: 'Are you going too?' }
  ],
  drill: [
    { t: 'choice', q: '你是中国人，我 ___ 是中国人。', opts: ['也', '都', '还', '很'], a: 0, why: '同样：也。' },
    { t: 'order', words: ['也', '我', '喜欢', '茶'], a: '我也喜欢茶。', en: 'I like tea too.' },
    { t: 'choice', q: '哪一句是对的？', opts: ['也我是学生。', '我也是学生。', '我是也学生。', '我是学生也。'], a: 1, why: '"也"放在主语后面、动词前面。' },
    { t: 'choice', say: '也', q: '听录音，选拼音。', opts: ['yě', 'yè', 'yé', 'yā'], a: 0, why: '也 yě，第三声。' }
  ],
  bop: {
    b: '老师说"我喜欢猫"，请喜欢猫的学生站起来说"我也喜欢猫！"',
    o: ['能听、说、认读"也 yě"', '能说"我也……"', '知道"也"的位置'],
    pre: '复习"都、喜欢、是"。',
    p: '① 跟读 yě；② 接龙：A 说"我喜欢……"，同样喜欢的 B 说"我也喜欢……"；③ 位置：主语 + 也 + 动词。',
    post: '找和自己一样的同学："我也……"；或做本页练习 1–4。',
    s: '板书：主语 + 也 + 动词 ／ ✗ 也 + 主语 ／ 也 + 都（拓展）。作业：写三句"我也……"。'
  },
  act: [
    { tag: '游戏', name: '我也是', how: '一人说一句关于自己的话，一样的人站起来说"我也是！"' },
    { tag: '游戏', name: '找同伴', how: '每人拿一张卡（喜欢的东西），走动找"我也喜欢……"的同伴。' },
    { tag: '情境表演', name: '朋友聊天', how: '"我饿了。""我也饿了。我们去吃饭吧！"' }
  ],
  teach: [
    { h: '位置', p: '"也"只能放在主语后面、动词前面，不能像英语 "too" 放在句尾。' },
    { h: '也都', p: '"也"和"都"一起用时"也"在前：我们也都去。' }
  ],
  err: [
    { x: '我是学生也。', v: '我也是学生。', why: '"也"在动词前面。' },
    { x: '也我喜欢。', v: '我也喜欢。', why: '"也"在主语后面。' }
  ],
  hz: [{ c: '也', rad: '乙', radName: '乙部', radMean: '——', struct: '独体字', parts: '乛 + 丨 + 乚', tip: '只有三画：横折钩、竖、竖弯钩。很多字里有"也"：他、她、地。', fam: '有"也"的字：他、她、地。' }],
  cul: ['"也"是汉语里最常用的副词之一。', '"他、她"右边都是"也"。'],
  syn: [{ w: '都', note: '全部。' }],
  ant: [],
  rel: ['都', '还', '和', '他', '她']
},

'一': {
  pos: [['数词', 'numeral']],
  zh: ['数字 1，最小的正整数。', '表示"全、满"：一天、一家人。'],
  en: ['one', 'whole; all'],
  syl: [{ py: 'yī', i: 'y', f: 'i', t: 1 }],
  phon: [
    '单独读、数数、序数时读第一声 yī：一、十一、第一。',
    '在第四声前读第二声：一个 yí gè、一下 yíxià。',
    '在第一、二、三声前读第四声：一天 yì tiān、一年 yì nián、一点 yì diǎn。'
  ],
  img: { src: 'img/yi.jpg', cap: "一", by: "Korenn", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Sign number 1 on Tel Aviv street.jpg" },
  use: ['一 + 量词 + 名词', '第一', '一月 / 一号 / 星期一'],
  ex: [
    { ctx: '数量', zh: '我 有 一 个 哥哥 。', py: 'Wǒ yǒu yí gè gēge.', en: 'I have one older brother.' },
    { ctx: '日期', zh: '今天 星期 一 。', py: 'Jīntiān xīngqīyī.', en: 'Today is Monday.' },
    { ctx: '时间', zh: '我 学 了 一 年 汉语 。', py: 'Wǒ xué le yì nián Hànyǔ.', en: 'I studied Chinese for one year.' },
    { ctx: '序数', zh: '这 是 第 一 课 。', py: 'Zhè shì dì yī kè.', en: 'This is Lesson One.' }
  ],
  drill: [
    { t: 'choice', q: '"一个"怎么读？', opts: ['yí gè', 'yī gè', 'yì gè', 'yǐ gè'], a: 0, why: '在第四声前读第二声。' },
    { t: 'choice', q: '"一天"怎么读？', opts: ['yì tiān', 'yí tiān', 'yī tiān', 'yǐ tiān'], a: 0, why: '在第一声前读第四声。' },
    { t: 'order', words: ['一', '我', '本', '买了', '书'], a: '我买了一本书。', en: 'I bought a book.' },
    { t: 'choice', q: '"第一"怎么读？', opts: ['dì yī', 'dì yí', 'dì yì', 'dì yǐ'], a: 0, why: '序数读原调 yī。' }
  ],
  bop: {
    b: '老师在黑板上写一横："一！最简单的汉字。"',
    o: ['能认读"一"', '掌握"一"的变调', '能说"一 + 量词 + 名词"'],
    pre: '复习数字和量词。',
    p: '① 读 yī；② 变调规则：yī（单独、序数）/ yí（+ 第四声）/ yì（+ 一二三声）；③ 练习：一个、一天、一年、一点、第一、星期一。',
    post: '变调抢答；或做本页练习 1–4。',
    s: '板书：yī（一、十一、第一）／ yí + 四声（一个、一下）／ yì + 一二三声（一天、一年、一点）。作业：标出十个带"一"的词的读音。'
  },
  act: [
    { tag: '语音', name: '变调抢答', how: '老师出示"一 + 词"卡，学生举 yī / yí / yì 牌。' },
    { tag: 'TPR', name: '数字手势', how: '老师说"一"，学生伸一根食指。' },
    { tag: '游戏', name: '第一名', how: '比赛后说"我是第一！""他是第二！"' }
  ],
  teach: [
    { h: '变调', p: '"一"的变调是 HSK1 的重点：四声前 yí，其他声调前 yì，单独 / 序数 / 数字中 yī。' },
    { h: '拼音标写', p: '课本和本网站标变调后的读音（yí gè），帮助学生读准。' }
  ],
  err: [
    { x: 'yī gè', v: 'yí gè', why: '第四声前变第二声。' },
    { x: '我有一哥哥。', v: '我有一个哥哥。', why: '要有量词。' }
  ],
  hz: [{ c: '一', rad: '一', radName: '一部', radMean: '——', struct: '独体字', parts: '横', tip: '一横就是"一"——最简单的汉字。从左往右写。', fam: '有"一"的字：二、三、十、上、下。' }],
  cul: ['"一"是很多成语的开头：一心一意（全心全意）、一路平安。', '中国人说"一"有时读成"幺 yāo"，比如电话号码"110"读"幺幺零"。'],
  syn: [],
  ant: [],
  rel: ['二', '三', '十', '第', '个', '一下', '一些']
},

'一半': {
  pos: [['数词', 'numeral']],
  zh: ['二分之一。'],
  en: ['half; one half'],
  syl: [{ py: 'yí', i: 'y', f: 'i', t: 2 }, { py: 'bàn', i: 'b', f: 'an', t: 4 }],
  phon: [
    '"一"在第四声前读第二声：yíbàn。',
    'b 不送气。',
    'bàn 是前鼻音。'
  ],
  img: { src: 'img/yiban.jpg', cap: "一半", by: "KorkyE", lic: "CC0", from: "Wikimedia Commons · Villands Glasäpple (Villands glass-apple), cut section.jpg" },
  use: ['一半 + 名词', '名词 + 的 + 一半', '吃 / 给 + 一半'],
  ex: [
    { ctx: '分享', zh: '我们 一 人 一半 。', py: 'Wǒmen yì rén yíbàn.', en: 'Half each.' },
    { ctx: '吃东西', zh: '我 吃 了 一半 。', py: 'Wǒ chī le yíbàn.', en: 'I ate half.' },
    { ctx: '数量', zh: '一半 的 学生 是 中国 人 。', py: 'Yíbàn de xuésheng shì Zhōngguó rén.', en: 'Half of the students are Chinese.' },
    { ctx: '给', zh: '我 给 你 一半 苹果 。', py: 'Wǒ gěi nǐ yíbàn píngguǒ.', en: 'I will give you half of the apple.' }
  ],
  drill: [
    { t: 'choice', q: '十个苹果，我吃了五个，吃了 ___ 。', opts: ['一半', '一些', '一点儿', '一下'], a: 0, why: '五是十的一半。' },
    { t: 'order', words: ['一半', '吃', '了', '我'], a: '我吃了一半。', en: 'I ate half.' },
    { t: 'choice', q: '"一半"怎么读？', opts: ['yíbàn', 'yībàn', 'yìbàn', 'yǐbàn'], a: 0, why: '第四声前"一"读第二声。' },
    { t: 'choice', q: '"一半"和"半"：', opts: ['意思差不多，"一半"可以单独用', '一样，都不能单用', '"半"更常用', '意思相反'], a: 0, why: '"我吃了一半"可以单用；"半"常加量词：半个。' }
  ],
  bop: {
    b: '老师把一张纸撕成两半："一张纸，现在是两个一半。给你一半！"',
    o: ['能听、说、认读"一半 yíbàn"', '能说"……的一半"', '分清"一半"和"半"'],
    pre: '复习"半、两、个"。',
    p: '① 跟读 yíbàn，注意变调；② 分东西：一人一半；③ "一半的……"：一半的学生是……。',
    post: '全班统计"一半的同学……"；或做本页练习 1–4。',
    s: '板书：一半 ／ ……的一半 ／ 一人一半 ／ 半 + 量词（半个）。作业：在家和家人分一样东西，说"一人一半"。'
  },
  act: [
    { tag: 'TPR', name: '分一分', how: '学生两人一组分东西（纸、积木），说"我们一人一半"。' },
    { tag: '调查', name: '一半的同学', how: '调查后报告："一半的同学喜欢猫。"' },
    { tag: '游戏', name: '一半还是半个', how: '老师说英语（half / half an apple），学生说"一半"或"半个苹果"。' }
  ],
  teach: [
    { h: '一半 / 半', p: '"一半"可以单用（吃了一半）；"半"后面常加量词（半个、半天）。' },
    { h: '变调', p: '"一半"读 yíbàn。' }
  ],
  err: [
    { x: 'yībàn', v: 'yíbàn', why: '第四声前读第二声。' },
    { x: '我吃了半。', v: '我吃了一半。', why: '单用要说"一半"。' }
  ],
  hz: [
    { c: '一', rad: '一', radName: '一部', radMean: '——', struct: '独体字', parts: '横', tip: '一横就是"一"。', fam: '有"一"的字：二、三。' },
    { c: '半', rad: '丷', radName: '八部（丷）', radMean: '分开 apart', struct: '独体字', parts: '丷 + 二 + 丨', tip: '上面"丷"像分开，中间一竖从上到下把东西分成两半。', fam: '有"半"的词：一半、半个。' }
  ],
  cul: ['中国人吃饭常分享，"一人一半"是朋友之间常说的话。', '"事半功倍"：用一半的力气得到双倍的结果（成语）。'],
  syn: [{ w: '半', note: '常加量词。' }],
  ant: [],
  rel: ['半', '一', '两', '一些', '一点儿']
},

'一点儿': {
  pos: [['数量词', 'quantifier']],
  zh: ['表示很少的数量或程度。'],
  en: ['a little; a bit'],
  syl: [{ py: 'yì', i: 'y', f: 'i', t: 4 }, { py: 'diǎnr', i: 'd', f: 'ianr', t: 3 }],
  phon: [
    '"一"在第三声前读第四声：yì。',
    '"点儿"是儿化音：diǎnr，三个字只读两个音节。',
    'diǎn 后面舌头卷起来。'
  ],
  img: { src: 'img/yidianr.jpg', cap: "一点儿", by: "Talita Oliveira", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Refined kitchen salt under microscope.jpg" },
  use: ['动词 + 一点儿 + 名词：喝一点儿水', '形容词 + 一点儿：便宜一点儿', '会说一点儿汉语'],
  ex: [
    { ctx: '能力', zh: '我 会 说 一点儿 汉语 。', py: 'Wǒ huì shuō yìdiǎnr Hànyǔ.', en: 'I can speak a little Chinese.' },
    { ctx: '讲价', zh: '便宜 一点儿 吧 。', py: 'Piányi yìdiǎnr ba.', en: 'Make it a bit cheaper.' },
    { ctx: '吃喝', zh: '请 喝 一点儿 水 。', py: 'Qǐng hē yìdiǎnr shuǐ.', en: 'Please drink a little water.' },
    { ctx: '比较', zh: '今天 冷 一点儿 。', py: 'Jīntiān lěng yìdiǎnr.', en: 'It is a bit colder today.' }
  ],
  drill: [
    { t: 'choice', q: '我会说 ___ 汉语。', opts: ['一点儿', '有点儿', '一下', '一半'], a: 0, why: '名词前用"一点儿"。' },
    { t: 'order', words: ['一点儿', '便宜', '吧'], a: '便宜一点儿吧。', en: 'Make it a bit cheaper.' },
    { t: 'choice', q: '"一点儿"和"有点儿"：', opts: ['一点儿在名词前或形容词后；有点儿在形容词前', '一样', '有点儿在名词前', '都在句尾'], a: 0, why: '一点儿汉语 / 便宜一点儿；有点儿贵。' },
    { t: 'choice', say: '一点儿', q: '听录音，选拼音。', opts: ['yìdiǎnr', 'yídiǎnr', 'yīdiǎnr', 'yìdiǎn\'ér'], a: 0, why: '一点儿 yìdiǎnr。' }
  ],
  bop: {
    b: '老师拿起水杯倒一点点水："一点儿水。"再拿手指比一个很小的距离："一点儿！"',
    o: ['能听、说、认读"一点儿 yìdiǎnr"', '能说"会说一点儿汉语""便宜一点儿"', '初步分清"一点儿 / 有点儿"'],
    pre: '复习"便宜、汉语、喝"。',
    p: '① 跟读 yìdiǎnr，注意儿化和变调；② 名词前：一点儿汉语、一点儿水；③ 形容词后：便宜一点儿、快一点儿（"快"超纲）。',
    post: '讲价表演："便宜一点儿吧！"；或做本页练习 1–4。',
    s: '板书：一点儿 + 名词 ／ 形容词 + 一点儿 ／ 有点儿 + 形容词（不满意）。作业：用"一点儿"写三句话。'
  },
  act: [
    { tag: '情境表演', name: '讲价', how: '"这个多少钱？""一百块。""太贵了，便宜一点儿吧！"' },
    { tag: 'TPR', name: '一点儿还是很多', how: '老师说"一点儿"学生用两个手指比很小，说"很多"学生张开双臂。' },
    { tag: '自我介绍', name: '我会说一点儿', how: '每人说"我会说一点儿汉语，我会写一点儿汉字。"' }
  ],
  teach: [
    { h: '位置', p: '名词前：一点儿水；形容词后：便宜一点儿。' },
    { h: '一点儿 / 有点儿', p: '"有点儿"在形容词前，多表示不满意：有点儿贵。' }
  ],
  err: [
    { x: '我会说汉语一点儿。', v: '我会说一点儿汉语。', why: '"一点儿"放在名词前面。' },
    { x: '一点儿便宜吧。', v: '便宜一点儿吧。', why: '"一点儿"放在形容词后面。' }
  ],
  hz: [
    { c: '一', rad: '一', radName: '一部', radMean: '——', struct: '独体字', parts: '横', tip: '一横。', fam: '有"一"的词：一些、一下。' },
    { c: '点', rad: '灬', radName: '四点底', radMean: '火 fire', struct: '上下结构', parts: '占 + 灬', tip: '下面四个小点——"点"就是很小的东西。', fam: '有"点"的词：几点、一点儿。' },
    { c: '儿', rad: '儿', radName: '儿部', radMean: '孩子 child', struct: '独体字', parts: '撇 + 竖弯钩', tip: '只表示儿化。', fam: '儿化的词：哪儿、这儿、好玩儿。' }
  ],
  cul: ['外国人说"我会说一点儿汉语"，中国人常常会热情地称赞"你的汉语很好！"', '南方人常说"一点"，不加"儿"。'],
  syn: [{ w: '一些', note: '数量不多（可数和不可数）。' }],
  ant: [{ w: '很多', py: 'hěn duō', note: 'a lot（很 + 多）', out: true }],
  rel: ['有点儿', '一些', '点', '一', '多', '少']
},

'衣服': {
  pos: [['名词', 'noun']],
  zh: ['穿在身上的东西。'],
  en: ['clothes; clothing'],
  syl: [{ py: 'yī', i: 'y', f: 'i', t: 1 }, { py: 'fu', i: 'f', f: 'u', t: 0 }],
  phon: [
    '第一声 + 轻声："衣"高平，"服"又轻又短。',
    'f 是上牙碰下唇。',
    '"服"单独读 fú，在这里读轻声。'
  ],
  img: { src: 'img/yifu.jpg', cap: "她在买衣服。", by: "Pattaya Patrol", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · DFC 1570, a woman shopping for clothes at an outdoor market - Flickr - PattayaPatrol.jpg" },
  use: ['穿 + 衣服', '一件衣服', '买 + 衣服'],
  ex: [
    { ctx: '购物', zh: '我 想 买 一 件 衣服 。', py: 'Wǒ xiǎng mǎi yí jiàn yīfu.', en: 'I want to buy a piece of clothing.' },
    { ctx: '称赞', zh: '你 的 衣服 很 漂亮 。', py: 'Nǐ de yīfu hěn piàoliang.', en: 'Your clothes are pretty.' },
    { ctx: '天气', zh: '天 冷 了 ， 多 穿 衣服 。', py: 'Tiān lěng le, duō chuān yīfu.', en: 'It is cold; wear more clothes.' },
    { ctx: '价钱', zh: '这 件 衣服 多少 钱 ？', py: 'Zhè jiàn yīfu duōshao qián?', en: 'How much is this piece of clothing?' }
  ],
  drill: [
    { t: 'choice', q: '我想买一 ___ 衣服。', opts: ['件', '个', '本', '口'], a: 0, why: '衣服用量词"件"。' },
    { t: 'order', words: ['衣服', '穿', '你', '多'], a: '你多穿衣服。', en: 'Wear more clothes.' },
    { t: 'choice', q: '衣服用什么动词？', opts: ['穿', '吃', '喝', '看'], a: 0, why: '穿衣服。' },
    { t: 'choice', say: '衣服', q: '听录音，选拼音。', opts: ['yīfu', 'yīfú', 'yífu', 'yīhu'], a: 0, why: '衣服 yīfu。' }
  ],
  bop: {
    b: '老师指着自己的外套："这是什么？——衣服！一件衣服。"',
    o: ['能听、说、认读"衣服 yīfu"', '能说"一件衣服""穿衣服"', '能用"衣服"买东西'],
    pre: '复习"件、穿、买、漂亮"。',
    p: '① 跟读 yīfu；② 量词"件"：一件衣服；③ 买衣服对话："这件衣服多少钱？"',
    post: '称赞同学的衣服；或做本页练习 1–4。',
    s: '板书：一件衣服 ／ 穿衣服 ／ 买衣服。作业：介绍你最喜欢的一件衣服。'
  },
  act: [
    { tag: '情境表演', name: '服装店', how: '"你好，我想买一件衣服。""这件怎么样？""太大了。"' },
    { tag: '游戏', name: '称赞', how: '学生互相称赞："你的衣服真漂亮！""谢谢！"' },
    { tag: 'TPR', name: '穿衣服', how: '老师说"穿衣服"学生做穿外套的动作。' }
  ],
  teach: [
    { h: '量词', p: '衣服用"件"。' },
    { h: '穿', p: '衣服、鞋都用"穿"。' }
  ],
  err: [
    { x: '一个衣服', v: '一件衣服', why: '衣服用"件"。' },
    { x: 'yīfú', v: 'yīfu', why: '"服"读轻声。' }
  ],
  hz: [
    { c: '衣', rad: '衣', radName: '衣部', radMean: '衣服 clothing', struct: '独体字', parts: '亠 + 𧘇', tip: '古字像一件上衣：上面是领子，两边是袖子。在左边写成"衤"。', fam: '衣字旁"衤"的字：衬、裤（超纲）。' },
    { c: '服', rad: '月', radName: '月字旁', radMean: '肉/身体', struct: '左右结构', parts: '月 + 𠬝', tip: '左边"月"是身体（肉），右边是一只手——穿在身上的"服"。', fam: '有"月"的字：朋、有、明。' }
  ],
  cul: ['中国传统服装有汉服、旗袍、唐装。', '中国妈妈常说"多穿点儿衣服"——这是关心的表现。'],
  syn: [],
  ant: [],
  rel: ['穿', '件', '买', '漂亮', '冷']
},

'医生': {
  pos: [['名词', 'noun']],
  zh: ['给病人看病的人。'],
  en: ['doctor'],
  syl: [{ py: 'yī', i: 'y', f: 'i', t: 1 }, { py: 'shēng', i: 'sh', f: 'eng', t: 1 }],
  phon: [
    '两个第一声，都要高而平。',
    'shēng 是卷舌、后鼻音。',
    '口语里"生"有时读轻声。'
  ],
  img: { src: 'img/yisheng.jpg', cap: "医生", by: "Shixart1985", lic: "CC BY 2.0", from: "Wikimedia Commons · Female doctor uses stethoscope on teddy bear to help girl closeup.jpg" },
  use: ['是 + 医生', '看 + 医生', '医生 + 说……'],
  ex: [
    { ctx: '职业', zh: '我 妈妈 是 医生 。', py: 'Wǒ māma shì yīshēng.', en: 'My mom is a doctor.' },
    { ctx: '看病', zh: '医生 ， 我 生病 了 。', py: 'Yīshēng, wǒ shēngbìng le.', en: 'Doctor, I am sick.' },
    { ctx: '地点', zh: '医生 在 医院 工作 。', py: 'Yīshēng zài yīyuàn gōngzuò.', en: 'Doctors work at hospitals.' },
    { ctx: '建议', zh: '医生 说 我 要 多 休息 。', py: 'Yīshēng shuō wǒ yào duō xiūxi.', en: 'The doctor said I should rest more.' }
  ],
  drill: [
    { t: 'choice', q: '___ 在医院工作。', opts: ['医生', '老师', '学生', '先生'], a: 0, why: '医生在医院工作。' },
    { t: 'order', words: ['是', '医生', '爸爸', '我'], a: '我爸爸是医生。', en: 'My dad is a doctor.' },
    { t: 'choice', q: '生病了，去找：', opts: ['医生', '老师', '同学', '服务员'], a: 0, why: '生病找医生。' },
    { t: 'choice', say: '医生', q: '听录音，选拼音。', opts: ['yīshēng', 'yīsēng', 'yíshēng', 'yīshēn'], a: 0, why: '医生 yīshēng。' }
  ],
  bop: {
    b: '老师戴上"听诊器"（用绳子做），对一位学生说："你好，我是医生。你怎么了？"',
    o: ['能听、说、认读"医生 yīshēng"', '能说"……是医生"', '能用于看病情境'],
    pre: '复习"医院、看病、生病"。',
    p: '① 跟读 yīshēng；② 职业：医生、老师、学生；③ 看病对话："医生，我生病了。""你要多休息。"',
    post: '小医院表演；或做本页练习 1–4。',
    s: '板书：医生（在医院工作）／ 看医生 ／ 生病 → 医院 → 医生。作业：问问家人有没有医生朋友。'
  },
  act: [
    { tag: '情境表演', name: '小医院', how: '一人当医生，一人当病人："医生，我生病了。""你怎么了？""我很冷。"' },
    { tag: '游戏', name: '职业猜猜', how: '一人做动作（看病、上课），其他人猜"你是医生吗？"' },
    { tag: '调查', name: '想做医生吗', how: '学生互相问"你想做医生吗？"' }
  ],
  teach: [
    { h: '读音', p: '大纲标 yīshēng；口语也常读 yīsheng。' },
    { h: '"生"家族', p: '学生、医生、先生都有"生"。' }
  ],
  err: [
    { x: '我妈妈是一个医院。', v: '我妈妈是医生。', why: '医院是地方，医生是人。' },
    { x: 'yīsēng', v: 'yīshēng', why: '"生"是卷舌音。' }
  ],
  hz: [
    { c: '医', rad: '匚', radName: '匚字框', radMean: '盒子 box', struct: '半包围结构', parts: '匚 + 矢', tip: '一个盒子（匚）里放着箭（矢）——古代医生用来治伤的工具。', fam: '有"匚"的字：区（超纲）。' },
    { c: '生', rad: '生', radName: '生部', radMean: '生长', struct: '独体字', parts: '丿 + 一 + 一 + 丨 + 一', tip: '小草长出来。', fam: '有"生"的词：学生、先生、生病。' }
  ],
  cul: ['中国有"中医"和"西医"两种医生。', '中国人说"医者仁心"——医生要有爱心。'],
  syn: [{ w: '大夫', py: 'dàifu', note: '口语，北方常说。', out: true }],
  ant: [],
  rel: ['医院', '看病', '生病', '病', '休息']
},

'一下': {
  pos: [['数量词', 'quantifier'], ['副词', 'adverb']],
  zh: ['用在动词后面，表示动作短暂或轻松：看一下。', '（副词，拓展）一会儿；突然。'],
  en: ['(after a verb) briefly; a bit; give it a go', '(extension) all at once; in a moment'],
  syl: [{ py: 'yí', i: 'y', f: 'i', t: 2 }, { py: 'xià', i: 'x', f: 'ia', t: 4 }],
  phon: [
    '"一"在第四声前读第二声：yíxià。',
    '在动词后面常读得轻快。',
    'x 是舌面音。'
  ],
  img: { src: 'img/yixia.jpg', cap: "看一下！", by: "LeoBlanchette", lic: "CC0", from: "Wikimedia Commons · 0585-vector-orange-man-magnifying-glass-up.jpg" },
  use: ['动词 + 一下：看一下、等一下、休息一下', '请 + 动词 + 一下'],
  ex: [
    { ctx: '请求', zh: '请 你 说 一下 。', py: 'Qǐng nǐ shuō yíxià.', en: 'Please say it.' },
    { ctx: '课堂', zh: '请 你 读 一下 。', py: 'Qǐng nǐ dú yíxià.', en: 'Please read it.' },
    { ctx: '休息', zh: '我们 休息 一下 吧 。', py: 'Wǒmen xiūxi yíxià ba.', en: 'Let us take a short break.' },
    { ctx: '询问', zh: '我 可以 看 一下 吗 ？', py: 'Wǒ kěyǐ kàn yíxià ma?', en: 'May I take a look?' }
  ],
  drill: [
    { t: 'choice', q: '请你看 ___ 这个字。', opts: ['一下', '一点儿', '一些', '一半'], a: 0, why: '动词 + 一下。' },
    { t: 'order', words: ['休息', '一下', '我们', '吧'], a: '我们休息一下吧。', en: 'Let us take a short break.' },
    { t: 'choice', q: '"一下"怎么读？', opts: ['yíxià', 'yīxià', 'yìxià', 'yǐxià'], a: 0, why: '第四声前"一"读第二声。' },
    { t: 'choice', q: '"看一下"的意思是：', opts: ['看一会儿，看看', '看一个', '看下面', '不看'], a: 0, why: '短时间地看。' }
  ],
  bop: {
    b: '老师把一本书递给学生："请你看一下。"学生看了一眼，老师说："好，谢谢！"',
    o: ['能听、说、认读"一下 yíxià"', '会说"动词 + 一下"', '用"一下"让请求更礼貌'],
    pre: '复习"请、看、读、休息"。',
    p: '① 跟读 yíxià；② 动词 + 一下：看一下、读一下、等一下、休息一下；③ 礼貌请求：请你……一下。',
    post: '课堂指令全部加"一下"；或做本页练习 1–4。',
    s: '板书：动词 + 一下 ／ 请（你）+ 动词 + 一下。作业：用"一下"写三个请求。'
  },
  act: [
    { tag: 'TPR', name: '一下指令', how: '老师说"站一下""坐一下""看一下黑板"，学生照做。' },
    { tag: '情境表演', name: '借东西', how: '"我可以看一下你的书吗？""可以，给你。"' },
    { tag: '游戏', name: '加一下', how: '老师说一个直接的命令（"读！"），学生改成礼貌说法："请读一下。"' }
  ],
  teach: [
    { h: '让语气轻松', p: '"动词 + 一下"让请求更礼貌、更随意：请等一下。' },
    { h: '一下 / 一点儿', p: '"一下"在动词后（短时间）；"一点儿"表示少量。' }
  ],
  err: [
    { x: '请一下看。', v: '请看一下。', why: '"一下"放在动词后面。' },
    { x: 'yīxià', v: 'yíxià', why: '"一"变第二声。' }
  ],
  hz: [
    { c: '一', rad: '一', radName: '一部', radMean: '——', struct: '独体字', parts: '横', tip: '一横。', fam: '有"一"的词：一些、一点儿。' },
    { c: '下', rad: '一', radName: '一部', radMean: '——', struct: '独体字', parts: '横 + 竖 + 点', tip: '在这里是"次"的意思：做一下 = 做一次。', fam: '有"下"的词：下课、下午。' }
  ],
  cul: ['中国人说"等一下"，可能是一分钟，也可能是很久。', '"麻烦你……一下"是非常礼貌的请求（"麻烦"超纲）。'],
  syn: [],
  ant: [],
  rel: ['一点儿', '请', '看', '休息', '下']
},

'一些': {
  pos: [['数量词', 'quantifier']],
  zh: ['表示不确定的少量（不只一个）。'],
  en: ['some; a few; a little'],
  syl: [{ py: 'yì', i: 'y', f: 'i', t: 4 }, { py: 'xiē', i: 'x', f: 'ie', t: 1 }],
  phon: [
    '"一"在第一声前读第四声：yìxiē。',
    'x 是舌面音。',
    '口语里"些"常读得轻。'
  ],
  img: { src: 'img/yixie.jpg', cap: "一些菜", by: "Crnorizec", lic: "Public domain", from: "Wikimedia Commons · Christmas Eve (Badnik) Dinner Table Macedonian.jpg" },
  use: ['一些 + 名词', '动词 + 了 + 一些 + 名词', '一些 + 人 / 东西'],
  ex: [
    { ctx: '购物', zh: '我 买 了 一些 水果 。', py: 'Wǒ mǎi le yìxiē shuǐguǒ.', en: 'I bought some fruit.' },
    { ctx: '朋友', zh: '我 有 一些 中国 朋友 。', py: 'Wǒ yǒu yìxiē Zhōngguó péngyou.', en: 'I have some Chinese friends.' },
    { ctx: '课堂', zh: '老师 说 了 一些 汉字 。', py: 'Lǎoshī shuō le yìxiē Hànzì.', en: 'The teacher talked about some characters.' },
    { ctx: '招待', zh: '请 吃 一些 苹果 。', py: 'Qǐng chī yìxiē píngguǒ.', en: 'Please have some apples.' }
  ],
  drill: [
    { t: 'choice', q: '我去超市买了 ___ 东西。', opts: ['一些', '一下', '一半', '一个'], a: 0, why: '不确定的数量：一些。' },
    { t: 'order', words: ['一些', '我', '朋友', '有', '中国'], a: '我有一些中国朋友。', en: 'I have some Chinese friends.' },
    { t: 'choice', q: '"一些"怎么读？', opts: ['yìxiē', 'yíxiē', 'yīxiē', 'yǐxiē'], a: 0, why: '第一声前"一"读第四声。' },
    { t: 'choice', q: '哪一个是对的？', opts: ['一些个书', '一些书', '一些本书', '一书些'], a: 1, why: '"一些"后面不加量词。' }
  ],
  bop: {
    b: '老师抓起一把糖："这是多少？——不知道，一些！给你们一些。"',
    o: ['能听、说、认读"一些 yìxiē"', '能说"一些 + 名词"', '复习"些"家族'],
    pre: '复习"些、这些、那些、有些"。',
    p: '① 跟读 yìxiē；② 一些 + 名词：一些水果、一些朋友；③ "些"家族：这些、那些、哪些、一些、有些。',
    post: '"购物车"游戏："我买了一些……"；或做本页练习 1–4。',
    s: '板书：一些 + 名词（✗ 量词）／ 这些、那些、一些、有些。作业：写三句"我有一些……"。'
  },
  act: [
    { tag: '游戏', name: '购物车', how: '接龙："我买了一些苹果。""我买了一些苹果和一些面包……"' },
    { tag: '情境表演', name: '招待客人', how: '"请吃一些水果。""谢谢！"' },
    { tag: '游戏', name: '些家族', how: '老师说"这""那""哪""一""有"，学生加"些"并造句。' }
  ],
  teach: [
    { h: '不加量词', p: '一些 + 名词：一些书（✗ 一些本书）。' },
    { h: '一些 / 一点儿', p: '意思接近；"一点儿"更强调"少"。' }
  ],
  err: [
    { x: '一些本书', v: '一些书', why: '不加量词。' },
    { x: 'yíxiē', v: 'yìxiē', why: '第一声前"一"读第四声。' }
  ],
  hz: [
    { c: '一', rad: '一', radName: '一部', radMean: '——', struct: '独体字', parts: '横', tip: '一横。', fam: '有"一"的词：一下、一点儿。' },
    { c: '些', rad: '二', radName: '二部', radMean: '——', struct: '上下结构', parts: '此 + 二', tip: '不只一个，有好几个。', fam: '有"些"的词：这些、那些、有些。' }
  ],
  cul: ['中国人请客人吃东西常说"多吃一些"。', '"一些"在书面语里比"一点儿"更常用。'],
  syn: [{ w: '一点儿', note: '更强调少。' }, { w: '有些', note: '"有的"的意思，或"有点儿"。' }],
  ant: [],
  rel: ['些', '这些', '那些', '有些', '一点儿']
}

});
