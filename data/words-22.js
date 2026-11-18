// HSK1 教学参考 · 第 22 批（10 词）：同学 外 外边 玩 晚 晚饭 晚上 喂 问 问题
window.H1_WORDS = window.H1_WORDS || {};
Object.assign(H1_WORDS, {

'同学': {
  pos: [['名词', 'noun']],
  zh: ['在同一个学校或同一个班学习的人。', '老师对学生的称呼：同学们。'],
  en: ['classmate; schoolmate', '(teacher addressing students) students'],
  syl: [{ py: 'tóng', i: 't', f: 'ong', t: 2 }, { py: 'xué', i: 'x', f: 'üe', t: 2 }],
  phon: [
    '两个第二声：两个字都往上升，第一个升得短一点。',
    'tóng 是后鼻音 -ng，t 要送气。',
    'xué 的 u 是 ü，嘴唇要圆。'
  ],
  img: { src: 'img/tongxue.jpg', cap: "她们是同学。", by: "NATO Training Mission-Afghanistan", lic: "Public domain", from: "Wikimedia Commons · Student from Setara High school watch their classmates play volleyball. (8014490496).jpg" },
  use: ['我的 + 同学', '同学们好！', '是 + 同学'],
  ex: [
    { ctx: '介绍', zh: '他 是 我 的 同学 。', py: 'Tā shì wǒ de tóngxué.', en: 'He is my classmate.' },
    { ctx: '课堂', zh: '同学 们 好 ！', py: 'Tóngxuémen hǎo!', en: 'Hello, everyone! (to students)' },
    { ctx: '关系', zh: '我们 是 大学 同学 。', py: 'Wǒmen shì dàxué tóngxué.', en: 'We were university classmates.' },
    { ctx: '数量', zh: '我 有 很 多 同学 。', py: 'Wǒ yǒu hěn duō tóngxué.', en: 'I have many classmates.' }
  ],
  drill: [
    { t: 'choice', q: '我们在一个班学习，我们是 ___ 。', opts: ['同学', '老师', '医生', '先生'], a: 0, why: '一起学习的人是同学。' },
    { t: 'order', words: ['同学', '是', '我们'], a: '我们是同学。', en: 'We are classmates.' },
    { t: 'choice', q: '老师上课时说：', opts: ['同学们好！', '老师们好！', '先生们好！', '朋友好！'], a: 0, why: '老师称呼学生"同学们"。' },
    { t: 'choice', say: '同学', q: '听录音，选拼音。', opts: ['tóngxué', 'dóngxué', 'tóngshué', 'tōngxué'], a: 0, why: '同学 tóngxué。' }
  ],
  bop: {
    b: '老师走进教室说："同学们好！"学生回答"老师好！"，老师问："你们是什么关系？——同学！"',
    o: ['能听、说、认读"同学 tóngxué"', '能介绍"他是我的同学"', '会用"同学们"称呼'],
    pre: '复习"学生、朋友、学校"。',
    p: '① 跟读 tóngxué；② 上课问候：同学们好——老师好；③ 介绍旁边的人："他是我的同学，他叫……"',
    post: '分清"同学、朋友、学生"；或做本页练习 1–4。',
    s: '板书：同 + 学 = 一起学习 ／ 同学们好！作业：用中文介绍三位同学。'
  },
  act: [
    { tag: '情境表演', name: '介绍同学', how: '三人一组："这是我的同学，他叫……。""你好！认识你很高兴！"' },
    { tag: '游戏', name: '找同学', how: '每人抽一张卡（姓名 + 班），走动问"你是几班的？"，找到同一个班的"同学"。' },
    { tag: '日常活动', name: '上课问候', how: '每节课开始："同学们好！""老师好！"' }
  ],
  teach: [
    { h: '同学 / 朋友', p: '同学是在同一个学校、班学习的人，不一定是朋友。' },
    { h: '称呼', p: '老师常用"同学们"称呼全班；叫一个学生也可以说"这位同学"。' }
  ],
  err: [
    { x: '他是我的同学们。', v: '他是我的同学。', why: '一个人不加"们"。' },
    { x: 'tóngshué', v: 'tóngxué', why: '"学"是 x，不是 sh。' }
  ],
  hz: [
    { c: '同', rad: '冂', radName: '同字框', radMean: '——', struct: '半包围结构', parts: '冂 + 一 + 口', tip: '一个框（冂）里有"一口"——大家在一个地方说一样的话，"同"就是一样、一起。', fam: '有"同"的词：同学、一同（超纲）。' },
    { c: '学', rad: '子', radName: '子字底', radMean: '小孩 child', struct: '上下结构', parts: '⺍ + 冖 + 子', tip: '孩子（子）在屋子里学习。', fam: '有"学"的词：学生、学校、学习、大学。' }
  ],
  cul: ['中国人很重视"同学情"，毕业很多年后还常常开"同学会"。', '在中国，"老同学"是一个很亲切的称呼。'],
  syn: [],
  ant: [],
  rel: ['学生', '朋友', '老师', '学校', '学习']
},

'外': {
  pos: [['名词', 'noun']],
  zh: ['外面（和"里"相对）。', '别的（国家、地方）：外国。'],
  en: ['outside; outer', 'foreign; other'],
  syl: [{ py: 'wài', i: 'w', f: 'uai', t: 4 }],
  phon: [
    '第四声，从高处全降。',
    '读起来像英语的 "why"，但声调要降下来。',
    'w 要圆唇。'
  ],
  img: { src: 'img/wai.jpg', cap: "外边", by: "Acabashi", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Abbess Roding - St Edmund's Church - Essex England - nave south door and porch interior.jpg（已裁剪）" },
  use: ['名词 + 外：门外、学校外', '外国 / 外国人', '里 ↔ 外'],
  ex: [
    { ctx: '位置', zh: '他 在 学校 外 。', py: 'Tā zài xuéxiào wài.', en: 'He is outside the school.' },
    { ctx: '国籍', zh: '他 在 外 边 。', py: 'Tā zài wàibian.', en: 'He is outside.' },
    { ctx: '天气', zh: '外 边 很 冷 。', py: 'Wàibian hěn lěng.', en: 'It is cold outside.' },
    { ctx: '国籍', zh: '他 是 外 国 人 。', py: 'Tā shì wàiguó rén.', en: 'He is a foreigner.' }
  ],
  drill: [
    { t: 'choice', q: '房间里很热，___ 边很冷。', opts: ['外', '里', '上', '前'], a: 0, why: '里 ↔ 外。' },
    { t: 'order', words: ['外国', '是', '人', '他'], a: '他是外国人。', en: 'He is a foreigner.' },
    { t: 'choice', q: '"外"的反义词是：', opts: ['里', '上', '后', '下'], a: 0, why: '里 ↔ 外。' },
    { t: 'choice', say: '外', q: '听录音，选拼音。', opts: ['wài', 'wèi', 'wǎi', 'huài'], a: 0, why: '外 wài，第四声。' }
  ],
  bop: {
    b: '老师站在教室门口，一只脚在里，一只脚在外："这是里，这是——外！"',
    o: ['能听、说、认读"外 wài"', '能说"……外边""外国人"', '分清"里"和"外"'],
    pre: '复习"里、上、下、前、后"。',
    p: '① 跟读 wài；② 方位：里 ↔ 外，学生走到门里门外；③ 外国、外国人。',
    post: '看图说"……在里边 / 外边"；或做本页练习 1–4。',
    s: '板书：里 ↔ 外 ／ 外边 ／ 外国人。作业：写两句"……外边……"。'
  },
  act: [
    { tag: 'TPR', name: '里和外', how: '地上画一个圈，老师说"里"学生跳进圈，说"外"跳出圈，越来越快。' },
    { tag: '游戏', name: '外国人', how: '学生说自己国家的人在中国是"外国人"，中国人在自己国家也是"外国人"——讨论"外"是相对的。' },
    { tag: '看图说话', name: '猫在哪儿', how: '出示猫在箱子里、箱子外的图，学生说"猫在外边"。' }
  ],
  teach: [
    { h: '外 / 外边', p: '"外"常和名词一起用（门外、外国）；单说位置时用"外边"。' },
    { h: '外国人', p: '"外国人"是中国人对外国人的一般说法，不是不礼貌的词。' }
  ],
  err: [
    { x: '他在外。', v: '他在外边。', why: '单说位置用"外边"。' },
    { x: 'wèi', v: 'wài', why: '"外"是 uai，像 "why"。' }
  ],
  hz: [{ c: '外', rad: '夕', radName: '夕字旁', radMean: '晚上 evening', struct: '左右结构', parts: '夕 + 卜', tip: '"夕"是晚上，"卜"是占卜。古人一般早上占卜，晚上占卜是"例外"——"外"就是在规矩外面。', fam: '有"夕"的字：多、名、岁。' }],
  cul: ['中国人叫外国人"老外"，是一种比较随意、亲切的说法。', '"外语"是 foreign language，中国学生一般从小学就学英语。'],
  syn: [{ w: '外边', note: '单说位置时用。' }],
  ant: [{ w: '里', note: '在范围以内。' }],
  rel: ['外边', '里', '上', '下', '前', '后', '国']
},

'外边': {
  pos: [['名词', 'noun']],
  zh: ['外面；某个范围以外的地方。'],
  en: ['outside; the outside'],
  syl: [{ py: 'wài', i: 'w', f: 'uai', t: 4 }, { py: 'bian', i: 'b', f: 'ian', t: 0 }],
  phon: [
    '第四声 + 轻声："外"全降，"边"又轻又短。',
    'wài 像英语 "why"。',
    'b 不送气。'
  ],
  img: { src: 'img/waibian.jpg', cap: "外边很冷。", by: "Ruth Hartnup from Vancouver, Canada", lic: "CC BY 2.0", from: "Wikimedia Commons · Playing in the snow (8199758869).jpg" },
  use: ['在 + 外边', '外边 + 很冷 / 有……', '名词 + 外边'],
  ex: [
    { ctx: '天气', zh: '外边 很 冷 。', py: 'Wàibian hěn lěng.', en: 'It is cold outside.' },
    { ctx: '位置', zh: '孩子 们 在 外边 玩 。', py: 'Háizimen zài wàibian wán.', en: 'The children are playing outside.' },
    { ctx: '天气', zh: '外边 下雨 了 。', py: 'Wàibian xiàyǔ le.', en: 'It is raining outside.' },
    { ctx: '位置', zh: '学校 外边 有 一 个 商店 。', py: 'Xuéxiào wàibian yǒu yí gè shāngdiàn.', en: 'There is a shop outside the school.' }
  ],
  drill: [
    { t: 'choice', q: '里边很热，___ 很冷。', opts: ['外边', '上边', '前边', '那边'], a: 0, why: '里边 ↔ 外边。' },
    { t: 'order', words: ['在', '外边', '玩', '他们'], a: '他们在外边玩。', en: 'They are playing outside.' },
    { t: 'choice', q: '"外边"的"边"怎么读？', opts: ['轻声 bian', 'biān', 'biàn', 'piān'], a: 0, why: '"外边"的"边"读轻声。' },
    { t: 'choice', say: '外边', q: '听录音，选拼音。', opts: ['wàibian', 'wèibian', 'wàipian', 'wǎibian'], a: 0, why: '外边 wàibian。' }
  ],
  bop: {
    b: '老师打开窗户，往外看："外边天气怎么样？"',
    o: ['能听、说、认读"外边 wàibian"', '能说"在外边""外边很……"', '复习方位词'],
    pre: '复习"外、里、边、上、下、前、后"。',
    p: '① 跟读 wàibian；② 方位词总结：上边、下边、前边、后边、里边、外边；③ 问答："外边冷吗？""孩子在哪儿玩？"',
    post: '看校园图片说"……在外边"；或做本页练习 1–4。',
    s: '板书：上边 / 下边 / 前边 / 后边 / 里边 / 外边。作业：画一张房子的图，标出六个方位。'
  },
  act: [
    { tag: 'TPR', name: '六个方位', how: '老师说"书在桌子上边／下边／里边／外边"，学生把书放到正确位置。' },
    { tag: '游戏', name: '天气报告', how: '每节课开始请一位学生看窗外："外边天气很好／下雨了。"' },
    { tag: '画画', name: '我的家', how: '学生画自己的家，说"外边有……，里边有……"。' }
  ],
  teach: [
    { h: '方位词系列', p: '……边：上边、下边、前边、后边、里边、外边、那边。"边"常读轻声。' },
    { h: '外 / 外边', p: '"外边"可以单独用：在外边。"外"一般不单独做宾语。' }
  ],
  err: [
    { x: '他在外。', v: '他在外边。', why: '单说位置用"外边"。' },
    { x: '外边学校', v: '学校外边', why: '方位词放在名词后面。' }
  ],
  hz: [
    { c: '外', rad: '夕', radName: '夕字旁', radMean: '晚上 evening', struct: '左右结构', parts: '夕 + 卜', tip: '晚上占卜是"例外"——在外面。', fam: '有"夕"的字：多、名、岁。' },
    { c: '边', rad: '辶', radName: '走之旁', radMean: '走路 walking', struct: '半包围结构', parts: '力 + 辶', tip: '用力走，走到"边"上。', fam: '有"边"的词：那边、前边、外边。' }
  ],
  cul: ['中国的家长常说"外边冷，多穿点儿衣服"。', '"外边"也说"外面"（超纲），北方口语多说"外边"。'],
  syn: [{ w: '外', note: '常和名词一起用。' }],
  ant: [{ w: '里边', py: 'lǐbian', note: '里面（里 + 边）。', out: true }],
  rel: ['外', '边', '里', '那边', '上', '下']
},

'玩': {
  pos: [['动词', 'verb']],
  zh: ['做游戏，做让自己高兴的事。', '到某个地方去游览、休息。'],
  en: ['to play; to have fun', 'to visit (for fun); to hang out'],
  syl: [{ py: 'wán', i: 'w', f: 'an', t: 2 }],
  phon: [
    '第二声，从中往高升。',
    '口语里常说儿化：玩儿 wánr。',
    '前鼻音 -n。'
  ],
  img: { src: 'img/wan.jpg', cap: "孩子们在这儿玩。", by: "Geographer", lic: "CC BY-SA 2.0", from: "Wikimedia Commons · Children's Playground at King George V Playing Fields - geograph.org.uk - 3929911.jpg" },
  use: ['在 + 地方 + 玩', '去 + 地方 + 玩', '玩 + 手机 / 电脑'],
  ex: [
    { ctx: '邀请', zh: '请 来 我 家 玩 。', py: 'Qǐng lái wǒ jiā wán.', en: 'Please come over to my place.' },
    { ctx: '孩子', zh: '孩子 们 在 外边 玩 。', py: 'Háizimen zài wàibian wán.', en: 'The children are playing outside.' },
    { ctx: '旅行', zh: '我 想 去 中国 玩 。', py: 'Wǒ xiǎng qù Zhōngguó wán.', en: 'I want to go to China for fun.' },
    { ctx: '习惯', zh: '他 很 喜欢 玩 手机 。', py: 'Tā hěn xǐhuan wán shǒujī.', en: 'He likes playing on his phone.' }
  ],
  drill: [
    { t: 'choice', q: '星期六我们去公园 ___ 吧！', opts: ['玩', '晚', '问', '外'], a: 0, why: '去……玩 = go … for fun。' },
    { t: 'order', words: ['玩', '我家', '来', '请'], a: '请来我家玩。', en: 'Please come over to my place.' },
    { t: 'choice', q: '"玩"和"晚"：', opts: ['声调不一样：wán / wǎn', '一样', '意思一样', '都是形容词'], a: 0, why: '玩 wán（第二声）；晚 wǎn（第三声）。' },
    { t: 'choice', say: '玩', q: '听录音，选拼音。', opts: ['wán', 'wǎn', 'wàn', 'wān'], a: 0, why: '玩 wán，第二声。' }
  ],
  bop: {
    b: '老师拿出一个球扔给学生："我们玩吧！"',
    o: ['能听、说、认读"玩 wán"', '能说"去……玩""来我家玩"', '分清"玩"和"晚"'],
    pre: '复习"好玩儿、去、来"。',
    p: '① 跟读 wán / wánr；② 去哪儿玩：去公园玩、去中国玩、来我家玩；③ 问答："周末你去哪儿玩？"',
    post: '邀请同学"……来我家玩吧"；或做本页练习 1–4。',
    s: '板书：去 / 来 + 地方 + 玩 ／ 玩 wán ≠ 晚 wǎn。作业：写一写你喜欢去哪儿玩。'
  },
  act: [
    { tag: '游戏', name: '玩什么', how: '学生轮流说一个喜欢玩的东西或游戏："我喜欢玩手机。""我喜欢玩……"' },
    { tag: '情境表演', name: '邀请', how: '"星期六来我家玩吧！""好啊！几点？""十点。"' },
    { tag: '语音', name: '玩和晚', how: '老师读 wán / wǎn，学生举"玩"或"晚"的卡片。' }
  ],
  teach: [
    { h: '比英语宽', p: '中文"玩"不只是小孩玩游戏，大人去旅游、去朋友家也说"玩"：来我家玩。' },
    { h: '儿化', p: '北方口语常说"玩儿"。' }
  ],
  err: [
    { x: '我玩在外边。', v: '我在外边玩。', why: '"在 + 地点"放在动词前面。' },
    { x: 'wǎn', v: 'wán', why: '"玩"是第二声。' }
  ],
  hz: [{ c: '玩', rad: '王', radName: '王字旁（斜玉旁）', radMean: '玉 jade', struct: '左右结构', parts: '王 + 元', tip: '左边"王"其实是"玉"——古人把玉拿在手里玩；右边"元 yuán"表示读音。', fam: '王字旁的字：现、班（上班）。' }],
  cul: ['中国人邀请朋友常说"有空来我家玩"，这是很热情的客气话。', '"玩"也可以说"去旅游"：去北京玩了三天。'],
  syn: [],
  ant: [],
  rel: ['好玩儿', '去', '来', '喜欢', '手机']
},

'晚': {
  pos: [['形容词', 'adjective']],
  zh: ['时间靠后的；比规定的时间迟。', '晚上。'],
  en: ['late', 'evening; night'],
  syl: [{ py: 'wǎn', i: 'w', f: 'an', t: 3 }],
  phon: [
    '第三声，先降后升，声音要低。',
    '和"玩 wán"只差声调。',
    '前鼻音 -n。'
  ],
  img: { src: 'img/wan3.jpg', cap: "很晚了。", by: "Siri bharathi Rajanala", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · City lights hyderabad.jpg" },
  use: ['很晚 / 太晚了', '来晚了', '晚上 / 晚饭'],
  ex: [
    { ctx: '时间', zh: '现在 很 晚 了 。', py: 'Xiànzài hěn wǎn le.', en: 'It is very late now.' },
    { ctx: '道歉', zh: '对不起 ， 我 来 晚 了 。', py: 'Duìbuqǐ, wǒ lái wǎn le.', en: 'Sorry, I am late.' },
    { ctx: '劝告', zh: '太 晚 了 ， 你 睡觉 吧 。', py: 'Tài wǎn le, nǐ shuìjiào ba.', en: 'It is too late, go to sleep.' },
    { ctx: '作息', zh: '他 昨天 睡觉 很 晚 。', py: 'Tā zuótiān shuìjiào hěn wǎn.', en: 'He went to bed late yesterday.' }
  ],
  drill: [
    { t: 'choice', q: '十二点了，太 ___ 了！', opts: ['晚', '早', '玩', '多'], a: 0, why: '十二点，很晚。' },
    { t: 'order', words: ['晚', '我', '来', '了'], a: '我来晚了。', en: 'I am late.' },
    { t: 'choice', q: '"晚"的反义词是：', opts: ['早', '小', '少', '冷'], a: 0, why: '早 ↔ 晚。' },
    { t: 'choice', say: '晚', q: '听录音，选拼音。', opts: ['wǎn', 'wán', 'wàn', 'wǎng'], a: 0, why: '晚 wǎn，第三声。' }
  ],
  bop: {
    b: '一位学生上课迟到，老师示范："对不起，我来晚了。""没关系，请坐。"',
    o: ['能听、说、认读"晚 wǎn"', '会说"我来晚了"', '分清"早"和"晚"'],
    pre: '复习"早、晚上、点"。',
    p: '① 跟读 wǎn，对比 wán / wǎn；② 早 ↔ 晚：六点起床很早，十二点睡觉很晚；③ 情境："对不起，我来晚了。"',
    post: '学生表演迟到和道歉；或做本页练习 1–4。',
    s: '板书：早 ↔ 晚 ／ 来晚了 ／ 太晚了。作业：写一写你一般几点睡觉，早还是晚。'
  },
  act: [
    { tag: '情境表演', name: '迟到了', how: '一人敲门进来："对不起，我来晚了。"老师："没关系，请坐。"' },
    { tag: '游戏', name: '早还是晚', how: '老师说时间和事情（"五点起床""一点睡觉"），学生说"很早！"或"很晚！"' },
    { tag: '语音', name: '玩和晚', how: '老师读 wán / wǎn，学生举对应的卡片。' }
  ],
  teach: [
    { h: '来晚了', p: '"来晚了"= I am late。注意"晚"放在动词后面。' },
    { h: '晚 = 晚上', p: '"晚"在词里常表示晚上：晚饭、晚上。' }
  ],
  err: [
    { x: '我晚来了。', v: '我来晚了。', why: '"晚"放在动词后面表示结果。' },
    { x: 'wán', v: 'wǎn', why: '"晚"是第三声。' }
  ],
  hz: [{ c: '晚', rad: '日', radName: '日字旁', radMean: '太阳 sun', struct: '左右结构', parts: '日 + 免', tip: '左边"日"是太阳，右边"免"是"没有"——太阳没有了，就是"晚"。', fam: '日字旁的字：明、时、昨。' }],
  cul: ['中国人见面晚上常说"晚上好"（超纲），睡前说"晚安"。', '中国人约会如果来晚了，一般会先说"不好意思，我来晚了"。'],
  syn: [],
  ant: [{ w: '早', note: '时间靠前。' }],
  rel: ['早', '晚上', '晚饭', '睡觉', '点']
},

'晚饭': {
  pos: [['名词', 'noun']],
  zh: ['晚上吃的饭。'],
  en: ['dinner; supper'],
  syl: [{ py: 'wǎn', i: 'w', f: 'an', t: 3 }, { py: 'fàn', i: 'f', f: 'an', t: 4 }],
  phon: [
    '第三声 + 第四声："晚"只读前半段（低降），"饭"全降。',
    'f 是上牙碰下唇。',
    '两个字都是前鼻音 -an。'
  ],
  img: { src: 'img/wanfan.jpg', cap: "我们吃晚饭。", by: "Jason M. C., Han", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Special foods & cuisines in Chongqing - Family Dinner 3rd.jpg" },
  use: ['吃 + 晚饭', '做 + 晚饭', '晚饭 + 吃什么'],
  ex: [
    { ctx: '作息', zh: '我 七 点 吃 晚饭 。', py: 'Wǒ qī diǎn chī wǎnfàn.', en: 'I have dinner at seven.' },
    { ctx: '家庭', zh: '妈妈 在 做 晚饭 。', py: 'Māma zài zuò wǎnfàn.', en: 'Mom is making dinner.' },
    { ctx: '询问', zh: '晚饭 吃 什么 ？', py: 'Wǎnfàn chī shénme?', en: 'What are we having for dinner?' },
    { ctx: '邀请', zh: '我们 去 饭店 吃 晚饭 吧 。', py: 'Wǒmen qù fàndiàn chī wǎnfàn ba.', en: 'Let us go to a restaurant for dinner.' }
  ],
  drill: [
    { t: 'choice', q: '晚上七点我们吃 ___ 。', opts: ['晚饭', '早饭', '午饭', '水果'], a: 0, why: '晚上吃晚饭。' },
    { t: 'order', words: ['在', '妈妈', '晚饭', '做'], a: '妈妈在做晚饭。', en: 'Mom is making dinner.' },
    { t: 'choice', q: '一天三顿饭：早饭、午饭、___', opts: ['晚饭', '米饭', '饭店', '做饭'], a: 0, why: '早饭、午饭、晚饭。' },
    { t: 'choice', say: '晚饭', q: '听录音，选拼音。', opts: ['wǎnfàn', 'wánfàn', 'wǎnhàn', 'wǎnfān'], a: 0, why: '晚饭 wǎnfàn。' }
  ],
  bop: {
    b: '老师出示一张一家人围坐吃饭的照片："晚上了，他们在吃什么？——晚饭！"',
    o: ['能听、说、认读"晚饭 wǎnfàn"', '能说"我……点吃晚饭"', '认识三顿饭的名字'],
    pre: '复习"早饭、饭、晚上"。',
    p: '① 跟读 wǎnfàn；② 三顿饭：早饭、午饭、晚饭 + 时间；③ 问答："你几点吃晚饭？晚饭吃什么？"',
    post: '全班调查晚饭时间；或做本页练习 1–4。',
    s: '板书：早饭（早上）／ 午饭（中午）／ 晚饭（晚上）。作业：写一写昨天的晚饭。'
  },
  act: [
    { tag: '调查', name: '晚饭吃什么', how: '学生互相问"你晚饭吃什么？"，找出最受欢迎的晚饭。' },
    { tag: '游戏', name: '三顿饭', how: '老师说时间（7:00、12:00、19:00），学生说"早饭／午饭／晚饭"。' },
    { tag: '情境表演', name: '一起吃晚饭', how: '"晚上一起吃晚饭吧！""好啊，去哪儿？""去那个饭店。"' }
  ],
  teach: [
    { h: '三顿饭', p: '早饭、午饭、晚饭——"饭"在这里是一顿饭（meal）。' },
    { h: '晚饭 / 晚上', p: '"晚饭"是一顿饭（dinner），"晚上"是一段时间（evening）。' }
  ],
  err: [
    { x: '我吃晚饭在七点。', v: '我七点吃晚饭。', why: '时间放在动词前面。' },
    { x: 'wánfàn', v: 'wǎnfàn', why: '"晚"是第三声。' }
  ],
  hz: [
    { c: '晚', rad: '日', radName: '日字旁', radMean: '太阳 sun', struct: '左右结构', parts: '日 + 免', tip: '太阳没有了——晚。', fam: '日字旁的字：明、时、昨。' },
    { c: '饭', rad: '饣', radName: '食字旁', radMean: '食物 food', struct: '左右结构', parts: '饣 + 反', tip: '和吃有关的"饣"。', fam: '有"饭"的词：早饭、午饭、米饭、饭店。' }
  ],
  cul: ['晚饭是中国家庭最重要的一顿饭，全家人常常一起吃。', '中国人吃晚饭比较早，一般六七点。'],
  syn: [],
  ant: [{ w: '早饭', note: '早上吃的饭。' }],
  rel: ['早饭', '午饭', '饭', '晚上', '吃', '做饭']
},

'晚上': {
  pos: [['名词', 'noun']],
  zh: ['太阳下山以后到睡觉以前的时间；夜里。'],
  en: ['evening; night'],
  syl: [{ py: 'wǎn', i: 'w', f: 'an', t: 3 }, { py: 'shang', i: 'sh', f: 'ang', t: 0 }],
  phon: [
    '第三声 + 轻声："晚"读低降，"上"又轻又短、音稍高。',
    '"上"在这里读轻声 shang。',
    'shang 是卷舌、后鼻音。'
  ],
  img: { src: 'img/wanshang.jpg', cap: "晚上", by: "Colin", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Super moon over City of London from Tate Modern 2018-01-31 4.jpg" },
  use: ['晚上 + 时间：晚上八点', '晚上 + 做什么', '今天 / 明天 + 晚上'],
  ex: [
    { ctx: '活动', zh: '我 晚上 看 电视 。', py: 'Wǒ wǎnshang kàn diànshì.', en: 'I watch TV in the evening.' },
    { ctx: '时间', zh: '晚上 八 点 见 。', py: 'Wǎnshang bā diǎn jiàn.', en: 'See you at 8 p.m.' },
    { ctx: '询问', zh: '你 今天 晚上 忙 吗 ？', py: 'Nǐ jīntiān wǎnshang máng ma?', en: 'Are you busy tonight?' },
    { ctx: '描述', zh: '晚上 很 冷 。', py: 'Wǎnshang hěn lěng.', en: 'It is cold in the evening.' }
  ],
  drill: [
    { t: 'choice', q: '8:00 p.m. 是 ___ 八点。', opts: ['晚上', '早上', '上午', '中午'], a: 0, why: 'p.m. 晚上。' },
    { t: 'order', words: ['晚上', '你', '做', '什么'], a: '你晚上做什么？', alt: ['晚上你做什么？'], en: 'What do you do in the evening?' },
    { t: 'choice', q: '"晚上"的反义词是：', opts: ['早上', '下午', '中午', '今天'], a: 0, why: '早上 ↔ 晚上。' },
    { t: 'choice', say: '晚上', q: '听录音，选拼音。', opts: ['wǎnshang', 'wánshang', 'wǎnshàng', 'wǎnsang'], a: 0, why: '晚上 wǎnshang。' }
  ],
  bop: {
    b: '老师关掉灯（或出示夜空照片）："天黑了，月亮出来了——现在是晚上。"',
    o: ['能听、说、认读"晚上 wǎnshang"', '能说"晚上 + 时间 / 做什么"', '完成一天的时间词'],
    pre: '复习"早上、上午、中午、下午"。',
    p: '① 跟读 wǎnshang；② 一天的时间：早上 → 上午 → 中午 → 下午 → 晚上；③ 问答："你晚上做什么？""今天晚上你忙吗？"',
    post: '每人说"我晚上……"；或做本页练习 1–4。',
    s: '板书：早上 — 上午 — 中午 — 下午 — 晚上。作业：写一写你今天晚上的安排。'
  },
  act: [
    { tag: '游戏', name: '一天时间线', how: '把"早上、上午、中午、下午、晚上"打乱，学生按顺序排好并说一句话。' },
    { tag: '调查', name: '晚上做什么', how: '学生互相问"你晚上做什么？"，统计：看电视、学习、玩手机……' },
    { tag: '情境表演', name: '约朋友', how: '"今天晚上有时间吗？""有。""一起去看电影吧！"' }
  ],
  teach: [
    { h: '时间顺序', p: '汉语时间从大到小：今天晚上八点。' },
    { h: '晚上好', p: '"晚上好"是问候语（超纲）；"晚安"是睡前说的。' }
  ],
  err: [
    { x: '八点晚上', v: '晚上八点', why: '时间段在前，钟点在后。' },
    { x: 'wǎnshàng', v: 'wǎnshang', why: '"上"读轻声。' }
  ],
  hz: [
    { c: '晚', rad: '日', radName: '日字旁', radMean: '太阳 sun', struct: '左右结构', parts: '日 + 免', tip: '太阳没有了——晚。', fam: '日字旁的字：明、时、昨。' },
    { c: '上', rad: '一', radName: '一部', radMean: '——', struct: '独体字', parts: '竖 + 横 + 横', tip: '在"晚上、早上"里表示一段时间。', fam: '有"上"的词：早上、上午。' }
  ],
  cul: ['中国城市的晚上很热闹，很多人去公园跳广场舞、散步。', '中国的夜市很有名，晚上可以吃到很多小吃。'],
  syn: [],
  ant: [{ w: '早上', note: '太阳出来的时候。' }],
  rel: ['早上', '上午', '中午', '下午', '晚', '晚饭']
},

'喂': {
  pos: [['叹词', 'interjection']],
  zh: ['打电话时的招呼语。', '招呼别人（不太礼貌）。'],
  en: ['hello (on the phone)', 'hey (calling someone; not very polite)'],
  syl: [{ py: 'wèi', i: 'w', f: 'ei', t: 4 }],
  phon: [
    '标准读第四声 wèi；打电话时常读成第二声 wéi，听起来更客气。',
    '韵母 ei 像英语 "way"。',
    'w 要圆唇。'
  ],
  img: { src: 'img/wei.jpg', cap: "喂，你好！", by: "Shixart1985", lic: "CC BY 2.0", from: "Wikimedia Commons · Woman smiling while talking on the phone by the window.jpg" },
  use: ['喂，你好！（打电话）', '喂，请问……在吗？', '喂，你听见了吗？'],
  ex: [
    { ctx: '打电话', zh: '喂 ， 你好 ！', py: 'Wéi, nǐ hǎo!', en: 'Hello! (on the phone)' },
    { ctx: '找人', zh: '喂 ， 请问 老师 在 吗 ？', py: 'Wéi, qǐngwèn lǎoshī zài ma?', en: 'Hello, is the teacher there?' },
    { ctx: '信号', zh: '喂 ？ 你 听见 了 吗 ？', py: 'Wéi? Nǐ tīngjiàn le ma?', en: 'Hello? Can you hear me?' },
    { ctx: '确认', zh: '喂 ， 你 是 谁 ？', py: 'Wéi, nǐ shì shéi?', en: 'Hello, who is this?' }
  ],
  drill: [
    { t: 'choice', q: '电话响了，你拿起手机说："___ ，你好！"', opts: ['喂', '再见', '谢谢', '对不起'], a: 0, why: '接电话说"喂"。' },
    { t: 'order', words: ['喂', '在吗', '妈妈', '请问'], a: '喂，请问妈妈在吗？', en: 'Hello, is Mom there?' },
    { t: 'choice', q: '见面时对老师说"喂！"：', opts: ['不礼貌，应该说"老师好"', '很礼貌', '很正式', '没问题'], a: 0, why: '"喂"当面叫人不礼貌。' },
    { t: 'choice', say: '喂', q: '听录音，选拼音。', opts: ['wèi', 'wài', 'wēi', 'huì'], a: 0, why: '喂 wèi（打电话常读 wéi）。' }
  ],
  bop: {
    b: '老师的手机响了，拿起来说："喂，你好！"',
    o: ['能听、说、认读"喂 wèi"', '会用"喂"接打电话', '知道当面不用"喂"叫人'],
    pre: '复习"打电话、你好、请问、在"。',
    p: '① 跟读 wèi / wéi；② 打电话流程：喂，你好 → 请问……在吗 → 我是…… → 再见；③ 两人用手机模拟打电话。',
    post: '学生表演打电话找人；或做本页练习 1–4。',
    s: '板书：喂，你好！／ 请问……在吗？／ 我是……。作业：用中文给同学打一个"电话"（录音）。'
  },
  act: [
    { tag: '情境表演', name: '打电话', how: '两人背对背坐，假装打电话："喂，你好！请问小月在吗？""我就是。"' },
    { tag: '游戏', name: '电话接龙', how: '围成一圈，每人"打电话"给下一个人，说一句新内容。' },
    { tag: '文化体验', name: '礼貌不礼貌', how: '讨论：电话里说"喂"很正常，当面大声叫"喂！"可能不礼貌。' }
  ],
  teach: [
    { h: '声调', p: '词典标第四声，打电话时大多数人读第二声 wéi，更友好。' },
    { h: '使用场合', p: '"喂"主要用在电话里。当面招呼别人用"你好""请问"。' }
  ],
  err: [
    { x: '（见到老师）喂！', v: '老师好！', why: '当面用"喂"不礼貌。' },
    { x: 'wài', v: 'wèi', why: '"喂"的韵母是 ei。' }
  ],
  hz: [{ c: '喂', rad: '口', radName: '口字旁', radMean: '嘴 mouth', struct: '左右结构', parts: '口 + 畏', tip: '左边"口"——用嘴喊；右边"畏 wèi"表示读音。"喂"还有"喂饭"的意思（拓展）。', fam: '口字旁的字：吃、喝、叫、听、吗、呢。' }],
  cul: ['中国人接电话几乎都说"喂"，然后说"你好"。', '"喂"还是动词：喂孩子吃饭、喂猫（拓展）。'],
  syn: [],
  ant: [],
  rel: ['电话', '打电话', '你好', '请问', '手机']
},

'问': {
  pos: [['动词', 'verb']],
  zh: ['请别人回答问题。'],
  en: ['to ask'],
  syl: [{ py: 'wèn', i: 'w', f: 'en', t: 4 }],
  phon: [
    '第四声，从高处全降。',
    '前鼻音 -n，不要读成 wèng。',
    'w 要圆唇。'
  ],
  img: { src: 'img/wen.jpg', cap: "他在问问题。", by: "Airman 1st Class Ashlee Galloway", lic: "Public domain", from: "Wikimedia Commons · ALS students leave lasting impression on third graders 111208-F-AV409-027.jpg" },
  use: ['问 + 人：问老师', '问 + 人 + 问题', '请问'],
  ex: [
    { ctx: '课堂', zh: '我 可以 问 你 一 个 问题 吗 ？', py: 'Wǒ kěyǐ wèn nǐ yí gè wèntí ma?', en: 'May I ask you a question?' },
    { ctx: '学习', zh: '你 去 问 老师 吧 。', py: 'Nǐ qù wèn lǎoshī ba.', en: 'Go and ask the teacher.' },
    { ctx: '转述', zh: '他 问 我 叫 什么 名字 。', py: 'Tā wèn wǒ jiào shénme míngzi.', en: 'He asked me what my name was.' },
    { ctx: '问路', zh: '我 去 问 一下 。', py: 'Wǒ qù wèn yíxià.', en: 'I will go and ask.' }
  ],
  drill: [
    { t: 'choice', q: '我不知道，我去 ___ 老师。', opts: ['问', '说', '听', '看'], a: 0, why: '不知道就问。' },
    { t: 'order', words: ['问', '我', '你', '可以', '吗'], a: '我可以问你吗？', en: 'May I ask you?' },
    { t: 'choice', q: '"问"的反义（回答）是：', opts: ['回答', '说话', '听见', '知道'], a: 0, why: '问 ↔ 回答（"回答"超纲）。' },
    { t: 'choice', say: '问', q: '听录音，选拼音。', opts: ['wèn', 'wèng', 'wén', 'mèn'], a: 0, why: '问 wèn，第四声。' }
  ],
  bop: {
    b: '老师举手，用学生的口气说："老师，我可以问一个问题吗？"',
    o: ['能听、说、认读"问 wèn"', '能说"问 + 人 + 问题"', '敢在课堂上提问'],
    pre: '复习"请问、问题、可以"。',
    p: '① 跟读 wèn；② 结构：问 + 人、问 + 人 + 问题；③ 课堂提问："老师，我可以问一个问题吗？""……怎么读？"',
    post: '"记者采访"：一人问三个问题；或做本页练习 1–4。',
    s: '板书：问 + 人 + 问题 ／ 请问 ／ 门 + 口 = 问。作业：问家人三个问题，用中文记下回答。'
  },
  act: [
    { tag: '情境表演', name: '小记者', how: '一人当记者，问同学："你叫什么名字？你是哪国人？你喜欢什么？"' },
    { tag: '游戏', name: '问题球', how: '抛球给一个人并问他一个问题，他回答后再问下一个人。' },
    { tag: '日常活动', name: '提问时间', how: '每节课最后五分钟是"提问时间"，学生用"老师，我想问……"提问。' }
  ],
  teach: [
    { h: '问 / 请问', p: '"请问"是提问前的礼貌用语；"问"是动词：我问老师。' },
    { h: '双宾语', p: '问 + 人 + 事：我问老师一个问题。' }
  ],
  err: [
    { x: '我问问题老师。', v: '我问老师一个问题。', why: '先说人，再说问题。' },
    { x: '我问给老师。', v: '我问老师。', why: '"问"后面直接加人。' }
  ],
  hz: [{ c: '问', rad: '门', radName: '门字框', radMean: '门 door', struct: '半包围结构', parts: '门 + 口', tip: '门（门）里有一张嘴（口）——站在门口张嘴问。', fam: '门字框的字：们（亻 + 门）、间（房间）。' }],
  cul: ['孔子说"不耻下问"：向不如自己的人请教也不觉得丢脸。', '中国学生以前不太爱在课上提问，现在越来越多的老师鼓励学生多问。'],
  syn: [{ w: '请问', note: '礼貌地开始提问。' }],
  ant: [],
  rel: ['请问', '问题', '说', '老师', '知道']
},

'问题': {
  pos: [['名词', 'noun']],
  zh: ['需要回答的题目。', '要解决的事情、麻烦。'],
  en: ['question', 'problem; issue'],
  syl: [{ py: 'wèn', i: 'w', f: 'en', t: 4 }, { py: 'tí', i: 't', f: 'i', t: 2 }],
  phon: [
    '第四声 + 第二声：先全降，再往上升。',
    't 是送气音。',
    'wèn 是前鼻音。'
  ],
  img: { src: 'img/wenti.jpg', cap: "有问题吗？", by: "WOLF LΔMBERT", lic: "CC0", from: "Wikimedia Commons · Lol question mark.png" },
  use: ['有 / 没有 + 问题', '问 + 一个问题', '没问题！'],
  ex: [
    { ctx: '课堂', zh: '你们 有 问题 吗 ？', py: 'Nǐmen yǒu wèntí ma?', en: 'Do you have any questions?' },
    { ctx: '提问', zh: '老师 ， 我 有 一 个 问题 。', py: 'Lǎoshī, wǒ yǒu yí gè wèntí.', en: 'Teacher, I have a question.' },
    { ctx: '答应', zh: '没有 问题 。', py: 'Méiyǒu wèntí.', en: 'There is no problem. / No problem.' },
    { ctx: '描述', zh: '这个 问题 很 好 。', py: 'Zhège wèntí hěn hǎo.', en: 'That is a good question.' }
  ],
  drill: [
    { t: 'choice', q: '老师：你们有 ___ 吗？学生：没有。', opts: ['问题', '问', '题', '时间'], a: 0, why: '有问题吗？' },
    { t: 'order', words: ['问题', '一个', '我', '有'], a: '我有一个问题。', en: 'I have a question.' },
    { t: 'choice', q: 'A：你能帮我吗？　B：___', opts: ['没问题！', '有问题！', '问题！', '不问题。'], a: 0, why: '"没问题"= no problem。' },
    { t: 'choice', say: '问题', q: '听录音，选拼音。', opts: ['wèntí', 'wèndí', 'wěntí', 'wèngtí'], a: 0, why: '问题 wèntí。' }
  ],
  bop: {
    b: '老师讲完一段，停下来问："你们有问题吗？"',
    o: ['能听、说、认读"问题 wèntí"', '能说"我有一个问题"', '会用"没问题"'],
    pre: '复习"问、有、没有"。',
    p: '① 跟读 wèntí；② 课堂用语："有问题吗？""我有一个问题。""没有问题。"；③ "没问题！"表示答应。',
    post: '学生互相请求帮忙，用"没问题"回答；或做本页练习 1–4。',
    s: '板书：有问题吗？／ 我有一个问题 ／ 没问题！作业：写下你学汉语的一个问题，下次问老师。'
  },
  act: [
    { tag: '日常活动', name: '问题盒', how: '教室里放一个"问题盒"，学生把问题写在纸上放进去，老师每周回答。' },
    { tag: '情境表演', name: '没问题', how: '"你能给我一个苹果吗？""没问题！给你。""谢谢！"' },
    { tag: '游戏', name: '二十个问题', how: '一人想一个东西，其他人用"是……吗？"提问，最多二十个问题。' }
  ],
  teach: [
    { h: '两个意思', p: '"问题"可以是 question，也可以是 problem：这是一个大问题（problem）。' },
    { h: '没问题', p: '"没问题"是很常用的口语，表示"可以、OK"。' }
  ],
  err: [
    { x: '我有一个问。', v: '我有一个问题。', why: '名词是"问题"。' },
    { x: '不问题。', v: '没问题。', why: '"有"的否定是"没"。' }
  ],
  hz: [
    { c: '问', rad: '门', radName: '门字框', radMean: '门 door', struct: '半包围结构', parts: '门 + 口', tip: '站在门口张嘴问。', fam: '门字框的字：们、间。' },
    { c: '题', rad: '页', radName: '页字旁', radMean: '头 head', struct: '半包围结构', parts: '是 + 页', tip: '右边"页"原来是"头"——题目写在最前面（头上）。', fam: '页字旁的字：顺、预（超纲）。' }
  ],
  cul: ['"没问题"是中国人非常爱说的话，有时候只是表示愿意帮忙，不一定真的完全没问题。', '中国的老师常说"有问题随时问我"。'],
  syn: [],
  ant: [],
  rel: ['问', '请问', '有', '没有', '老师']
}

});
