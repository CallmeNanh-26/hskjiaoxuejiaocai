// HSK1 教学参考 · 第 21 批（10 词）：他 她 太 她们 它们 他们 天 天气 听 听见
window.H1_WORDS = window.H1_WORDS || {};
Object.assign(H1_WORDS, {

'他': {
  pos: [['代词', 'pronoun']],
  zh: ['指说话人和听话人以外的男性（也用于不知道性别的人）。'],
  en: ['he; him'],
  syl: [{ py: 'tā', i: 't', f: 'a', t: 1 }],
  phon: [
    '第一声，高而平。',
    't 是送气音，要有一口气出来，不要读成 dā。',
    '和"她、它"读音一样。'
  ],
  img: { src: 'img/ta_he.jpg', cap: "他很高兴。", by: "Basile Morin", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Portrait in sunshine at golden hour of a smiling boy wearing a yellow sweater with hood pulled up in Laos.jpg（已裁剪）" },
  use: ['他 + 是……', '他的 + 名词', '他们（多数）'],
  ex: [
    { ctx: '介绍', zh: '他 是 我 哥哥 。', py: 'Tā shì wǒ gēge.', en: 'He is my older brother.' },
    { ctx: '询问', zh: '他 叫 什么 名字 ？', py: 'Tā jiào shénme míngzi?', en: 'What is his name?' },
    { ctx: '所属', zh: '这 是 他 的 书 。', py: 'Zhè shì tā de shū.', en: 'This is his book.' },
    { ctx: '描述', zh: '他 很 高兴 。', py: 'Tā hěn gāoxìng.', en: 'He is happy.' }
  ],
  drill: [
    { t: 'choice', q: '这是我爸爸， ___ 是医生。', opts: ['他', '她', '它', '你'], a: 0, why: '男性用"他"。' },
    { t: 'order', words: ['他', '是', '老师', '我们'], a: '他是我们老师。', en: 'He is our teacher.' },
    { t: 'choice', q: '"his book"怎么说？', opts: ['他的书', '他书的', '书他的', '的他书'], a: 0, why: '他 + 的 + 名词。' },
    { t: 'choice', say: '他', q: '听录音，选拼音。', opts: ['tā', 'dā', 'tǎ', 'tà'], a: 0, why: '他 tā，第一声。' }
  ],
  bop: {
    b: '老师指一位男同学："他是谁？——他是……。"写"他"：亻 + 也。',
    o: ['能听、说、认读"他 tā"', '能用"他"介绍男性', '能说"他的……"'],
    pre: '复习"我、你"。',
    p: '① 跟读 tā，注意送气；② 指人练习：我、你、他；③ 介绍：他是……，他叫……，他是……人。',
    post: '看照片介绍一位男性家人或朋友；或做本页练习 1–4。',
    s: '板书：我 — 你 — 他 ／ 他的 + 名词 ／ 亻 + 也 = 他。作业：写三句话介绍一位男性朋友。'
  },
  act: [
    { tag: 'TPR', name: '我你他', how: '老师说"我"学生指自己，"你"指老师，"他"指旁边的男同学。' },
    { tag: '游戏', name: '猜猜他是谁', how: '一人描述班里的一位男同学："他是……人，他喜欢……"，其他人猜。' },
    { tag: '看图说话', name: '他做什么', how: '出示男性人物图片，学生说"他是医生""他在看书"。' }
  ],
  teach: [
    { h: '他 / 她 / 它', p: '读音一样，写法不同。"他"也可以指性别不明的人，或者男女都有的一群人（他们）。' },
    { h: '他的', p: '亲属前常省略"的"：他哥哥 = 他的哥哥。' }
  ],
  err: [
    { x: '这是他书。', v: '这是他的书。', why: '表示所属一般加"的"。' },
    { x: 'dā', v: 'tā', why: 't 要送气。' }
  ],
  hz: [{ c: '他', rad: '亻', radName: '单人旁', radMean: '人 person', struct: '左右结构', parts: '亻 + 也', tip: '左边是"人"，右边"也"——"也"是一个人，就是"他"。', fam: '单人旁的字：你、们、住、做、件、作、什。' }],
  cul: ['古代汉语里"他"可以指任何人；"她"字是一百多年前（1920 年左右）才造出来专门指女性的。', '写信或文章里不知道对方性别时，中国人常用"他"，也有人写"他／她"。'],
  syn: [],
  ant: [],
  rel: ['她', '它', '他们', '你', '我']
},

'她': {
  pos: [['代词', 'pronoun']],
  zh: ['指说话人和听话人以外的女性。'],
  en: ['she; her'],
  syl: [{ py: 'tā', i: 't', f: 'a', t: 1 }],
  phon: [
    '第一声，高而平。',
    't 是送气音。',
    '和"他、它"读音一样，只能从写法区分。'
  ],
  img: { src: 'img/ta_she.jpg', cap: "她很高兴。", by: "Basile Morin", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Young girl smiling in sunshine.jpg（已裁剪）" },
  use: ['她 + 是……', '她的 + 名词', '她们（多数，都是女性）'],
  ex: [
    { ctx: '介绍', zh: '她 是 我 妈妈 。', py: 'Tā shì wǒ māma.', en: 'She is my mom.' },
    { ctx: '询问', zh: '她 是 哪 国 人 ？', py: 'Tā shì nǎ guó rén?', en: 'What country is she from?' },
    { ctx: '所属', zh: '这 是 她 的 衣服 。', py: 'Zhè shì tā de yīfu.', en: 'These are her clothes.' },
    { ctx: '称赞', zh: '她 很 漂亮 。', py: 'Tā hěn piàoliang.', en: 'She is pretty.' }
  ],
  drill: [
    { t: 'choice', q: '这是我姐姐， ___ 是老师。', opts: ['她', '他', '它', '我'], a: 0, why: '女性用"她"。' },
    { t: 'order', words: ['她', '叫', '什么', '名字'], a: '她叫什么名字？', en: 'What is her name?' },
    { t: 'choice', q: '"她"的部首是：', opts: ['女', '亻', '宀', '口'], a: 0, why: '她 = 女 + 也。' },
    { t: 'choice', q: '说"妹妹"用哪个 tā？', opts: ['她', '他', '它', '都可以'], a: 0, why: '妹妹是女的：她。' }
  ],
  bop: {
    b: '老师在黑板上写"他"和"她"，指一位男同学："他。"指一位女同学："她。"问："有什么不一样？"',
    o: ['能认读"她 tā"', '能用"她"介绍女性', '分清"他"和"她"的写法'],
    pre: '复习"他、女"。',
    p: '① 读 tā；② 对比字形：亻（他）/ 女（她）；③ 介绍：她是……，她叫……。',
    post: '看图选"他"还是"她"；或做本页练习 1–4。',
    s: '板书：他（亻）／ 她（女）／ 它（宀）＝ tā。作业：写三句话介绍一位女性家人。'
  },
  act: [
    { tag: '游戏', name: '他还是她', how: '老师出示人物图片，学生举"他"或"她"的卡片。' },
    { tag: '游戏', name: '部首配对', how: '黑板上写"亻、女、宀"，学生把"他、她、它"贴到正确的部首下面，再写出更多同部首的字。' },
    { tag: '展示', name: '我的家人', how: '介绍一位女性家人："她是我妈妈。她是老师。她很漂亮。"' }
  ],
  teach: [
    { h: '写法', p: '"她"是女字旁，只用于女性。听的时候和"他、它"分不出来。' },
    { h: '她们', p: '一群人里有男有女，用"他们"；都是女性才用"她们"。' }
  ],
  err: [
    { x: '我妈妈，他是老师。', v: '我妈妈，她是老师。', why: '女性用"她"。' },
    { x: '这是她书。', v: '这是她的书。', why: '表示所属一般加"的"。' }
  ],
  hz: [{ c: '她', rad: '女', radName: '女字旁', radMean: '女人 woman', struct: '左右结构', parts: '女 + 也', tip: '左边是"女"，右边"也"——女性的"他"，就是"她"。', fam: '女字旁的字：妈、姐、妹、好、奶。' }],
  cul: ['"她"字是 1920 年左右由诗人刘半农提倡使用的，在那以前汉语只有一个"他"。', '中文网络上有时用"TA"表示不分性别的第三人称。'],
  syn: [],
  ant: [],
  rel: ['他', '它', '她们', '女', '妈妈']
},

'太': {
  pos: [['副词', 'adverb']],
  zh: ['程度过高（常有不满意）：太贵了。', '程度很高（表示感叹）：太好了！', '"不太"：不很。'],
  en: ['too (excessively)', 'so; really (exclamation)', '不太: not very'],
  syl: [{ py: 'tài', i: 't', f: 'ai', t: 4 }],
  phon: [
    '第四声，从高处全降。',
    't 是送气音，不要读成 dài。',
    '韵母 ai 像英语 "eye"。'
  ],
  img: { src: 'img/tai.jpg', cap: "太大了！", by: "William I. Harter", lic: "Public domain", from: "Wikimedia Commons · Gigantic hamburger at Giant Burger Festival, 2008.jpg" },
  use: ['太 + 形容词 + 了：太贵了', '太好了！', '不太 + 形容词：不太忙'],
  ex: [
    { ctx: '讲价', zh: '太 贵 了 ！', py: 'Tài guì le!', en: 'Too expensive!' },
    { ctx: '高兴', zh: '太 好 了 ！', py: 'Tài hǎo le!', en: 'Great!' },
    { ctx: '天气', zh: '今天 太 热 了 。', py: 'Jīntiān tài rè le.', en: 'It is too hot today.' },
    { ctx: '程度', zh: '我 不 太 忙 。', py: 'Wǒ bú tài máng.', en: 'I am not very busy.' }
  ],
  drill: [
    { t: 'choice', q: '一千块？ ___ 贵了！', opts: ['太', '很', '是', '都'], a: 0, why: '太……了 = too…' },
    { t: 'order', words: ['太', '了', '好'], a: '太好了！', en: 'Great!' },
    { t: 'choice', q: '"不太好"的意思是：', opts: ['非常好', '不是很好', '太好了', '很好'], a: 1, why: '不太 = not very。' },
    { t: 'choice', say: '太', q: '听录音，选拼音。', opts: ['tài', 'dài', 'tāi', 'tè'], a: 0, why: '太 tài，第四声。' }
  ],
  bop: {
    b: '老师拿出一件很小的衣服往身上比："太小了！"再拿出一个"一百块的苹果"："太贵了！"',
    o: ['能听、说、认读"太 tài"', '能说"太……了"', '能说"不太……"'],
    pre: '复习形容词（贵、大、小、冷、热、好）和"很、非常"。',
    p: '① 跟读 tài；② "太……了"：看图说"太贵了／太大了／太冷了"；③ "太好了！"表示高兴；④ "不太……"：我不太忙。',
    post: '老师说情境，学生用"太……了"回应；或做本页练习 1–4。',
    s: '板书：太 + 形容词 + 了 ／ 太好了！／ 不太 + 形容词。作业：用"太……了"写三句话。'
  },
  act: [
    { tag: '游戏', name: '夸张反应', how: '老师说情境（"明天不上课！""这个苹果一百块！"），学生用"太好了！""太贵了！"夸张地回应。' },
    { tag: '情境表演', name: '买衣服', how: '"这件怎么样？""太大了。""这件呢？""太贵了！""那件？""太好了，我要那件！"' },
    { tag: '游戏', name: '程度排队', how: '把"不太、很、非常、太……了"写在卡片上，学生按程度排队并造句。' }
  ],
  teach: [
    { h: '太……了', p: '"太"常和"了"一起用：太贵了。不说"太贵"（单独）。' },
    { h: '两种意思', p: '不满意：太贵了、太冷了；感叹：太好了、太漂亮了。' }
  ],
  err: [
    { x: '太贵。', v: '太贵了！', why: '"太"常和句末"了"一起用。' },
    { x: '我太很忙了。', v: '我太忙了。', why: '程度副词只用一个。' }
  ],
  hz: [{ c: '太', rad: '大', radName: '大部', radMean: '大 big', struct: '独体字', parts: '大 + 丶', tip: '"大"下面再加一点——比"大"还大，就是"太"（太大了！）。', fam: '有"大"的字：天、夫（超纲）。' }],
  cul: ['"太好了！"是中国人表示高兴最常用的话之一。', '"太太"是对已婚女性的称呼（Mrs.，超纲）：王太太。'],
  syn: [{ w: '很', note: '程度一般。' }, { w: '非常', note: '程度高。' }],
  ant: [{ w: '不太', note: 'not very。' }],
  rel: ['很', '非常', '真', '了', '有点儿']
},

'她们': {
  pos: [['代词', 'pronoun']],
  zh: ['指说话人和听话人以外的几个女性。'],
  en: ['they; them (all female)'],
  syl: [{ py: 'tā', i: 't', f: 'a', t: 1 }, { py: 'men', i: 'm', f: 'en', t: 0 }],
  phon: [
    '第一声 + 轻声："们"又轻又短、音很低。',
    '和"他们、它们"读音一样。',
    '"们"是前鼻音 -n。'
  ],
  img: { src: 'img/tamen_f.jpg', cap: "她们是学生。", by: "Franklin Heijnen", lic: "CC BY-SA 2.0", from: "Wikimedia Commons · School uniforms of Japan - Tokyo - 2015 June - 19029901179.jpg" },
  use: ['她们 + 是……', '她们的 + 名词', '她们 + 都……'],
  ex: [
    { ctx: '介绍', zh: '她们 是 我 的 同学 。', py: 'Tāmen shì wǒ de tóngxué.', en: 'They are my classmates.' },
    { ctx: '家人', zh: '她们 是 我 的 姐姐 和 妹妹 。', py: 'Tāmen shì wǒ de jiějie hé mèimei.', en: 'They are my older and younger sisters.' },
    { ctx: '描述', zh: '她们 都 很 漂亮 。', py: 'Tāmen dōu hěn piàoliang.', en: 'They are all pretty.' },
    { ctx: '询问', zh: '她们 去 哪儿 ？', py: 'Tāmen qù nǎr?', en: 'Where are they going?' }
  ],
  drill: [
    { t: 'choice', q: '妈妈和姐姐去商店了， ___ 买衣服。', opts: ['她们', '他们', '它们', '我们'], a: 0, why: '都是女性用"她们"。' },
    { t: 'order', words: ['她们', '学生', '是', '都'], a: '她们都是学生。', en: 'They are all students.' },
    { t: 'choice', q: '三个女孩和一个男孩，用：', opts: ['他们', '她们', '它们', '你们'], a: 0, why: '有男有女用"他们"。' },
    { t: 'choice', say: '她们', q: '听录音，选拼音。', opts: ['tāmen', 'tāmén', 'dāmen', 'tàmen'], a: 0, why: '她们 tāmen。' }
  ],
  bop: {
    b: '老师请三位女同学站起来："她是……，她是……，她是……。她们是我的学生！"',
    o: ['能认读"她们 tāmen"', '能用"她们"说几个女性', '知道男女都有时用"他们"'],
    pre: '复习"她、们、他们"。',
    p: '① 读 tāmen；② 判断：全是女的——她们；有男有女——他们；③ 介绍：她们是……，她们都……。',
    post: '看图选"他们／她们／它们"；或做本页练习 1–4。',
    s: '板书：她们（都是女的）／ 他们（有男有女 / 都是男的）／ 它们（动物、东西）。作业：用照片写两句"她们……"。'
  },
  act: [
    { tag: '游戏', name: '站起来', how: '老师说"她们站起来"，被指到的一组女同学站起来；说"他们站起来"，男女混合的一组站起来。' },
    { tag: '看图说话', name: '谁在做什么', how: '出示一群女性的图片，学生说"她们在唱歌""她们是医生"。' },
    { tag: '游戏', name: '三个 tāmen', how: '老师出示图片，学生快速写出正确的"他们／她们／它们"。' }
  ],
  teach: [
    { h: '有男有女', p: '一群人里只要有一个男的，一般就用"他们"。' },
    { h: '读音', p: '他们、她们、它们读音都是 tāmen。' }
  ],
  err: [
    { x: '我和我哥哥，她们……', v: '我们……', why: '包括自己用"我们"。' },
    { x: '她们们', v: '她们', why: '只加一个"们"。' }
  ],
  hz: [
    { c: '她', rad: '女', radName: '女字旁', radMean: '女人 woman', struct: '左右结构', parts: '女 + 也', tip: '女性的"他"。', fam: '女字旁的字：妈、姐、妹、好。' },
    { c: '们', rad: '亻', radName: '单人旁', radMean: '人 person', struct: '左右结构', parts: '亻 + 门', tip: '很多人（亻）从门里走出来——多数。', fam: '有"们"的词：我们、你们、他们、它们。' }
  ],
  cul: ['在中国，一群人里有男有女时用"他们"，这是语法习惯，并不表示看不起女性。现在也有人主张写"他（她）们"。', '演讲开头常说"女士们、先生们"，不说"她们、他们"。'],
  syn: [],
  ant: [],
  rel: ['她', '他们', '它们', '我们', '你们', '们']
},

'它们': {
  pos: [['代词', 'pronoun']],
  zh: ['指人以外的几个动物或东西。'],
  en: ['they; them (animals or things)'],
  syl: [{ py: 'tā', i: 't', f: 'a', t: 1 }, { py: 'men', i: 'm', f: 'en', t: 0 }],
  phon: [
    '第一声 + 轻声。',
    '和"他们、她们"读音一样。',
    '"们"是前鼻音 -n。'
  ],
  img: { src: 'img/tamen_it.jpg', cap: "它们是小猫。", by: "Vanessa Kay", lic: "CC BY 3.0", from: "Wikimedia Commons · Basket Full Of Kittens (62200211).jpeg" },
  use: ['它们 + 是……', '它们 + 都……', '我的猫 / 书……，它们……'],
  ex: [
    { ctx: '宠物', zh: '我 有 两 只 猫 ， 它们 很 漂亮 。', py: 'Wǒ yǒu liǎng zhī māo, tāmen hěn piàoliang.', en: 'I have two cats; they are pretty.' },
    { ctx: '东西', zh: '这些 书 ， 它们 都 是 我 的 。', py: 'Zhèxiē shū, tāmen dōu shì wǒ de.', en: 'These books, they are all mine.' },
    { ctx: '动物', zh: '它们 是 小 狗 。', py: 'Tāmen shì xiǎo gǒu.', en: 'They are puppies.' },
    { ctx: '位置', zh: '它们 在 桌子 上 。', py: 'Tāmen zài zhuōzi shang.', en: 'They are on the table.' }
  ],
  drill: [
    { t: 'choice', q: '我家有三只狗， ___ 都很好玩儿。', opts: ['它们', '他们', '她们', '你们'], a: 0, why: '动物用"它们"。' },
    { t: 'order', words: ['它们', '小', '很', '都'], a: '它们都很小。', en: 'They are all small.' },
    { t: 'choice', q: '说两本书，可以用：', opts: ['它们', '他们', '她们', '我们'], a: 0, why: '东西用"它们"。' },
    { t: 'choice', q: '"它们"的部首（第一个字）是：', opts: ['宀', '亻', '女', '口'], a: 0, why: '它 = 宀 + 匕。' }
  ],
  bop: {
    b: '老师出示一张几只小猫的照片："这些是什么？——猫。它们很漂亮！"',
    o: ['能认读"它们 tāmen"', '能用"它们"说几个动物或东西', '分清三个 tāmen'],
    pre: '复习"它、们、猫、狗"。',
    p: '① 读 tāmen；② 三个 tāmen 的分类练习；③ 介绍宠物或喜欢的东西："它们是……，它们都……"。',
    post: '看图选"他们／她们／它们"；或做本页练习 1–4。',
    s: '板书：它 + 们 = 它们（动物、东西）。作业：介绍你的两样东西或两只动物，用"它们"。'
  },
  act: [
    { tag: '游戏', name: '三个 tāmen', how: '老师出示图片（一群男孩、几只狗、几个女孩、一堆书），学生举"他们／它们／她们"的卡片。' },
    { tag: '展示', name: '我的东西', how: '学生介绍书包里的东西："这些是我的书，它们都是汉语书。"' },
    { tag: '看图说话', name: '动物园', how: '出示动物园照片，学生说"它们是……，它们在……"。' }
  ],
  teach: [
    { h: '口语习惯', p: '口语里说东西时常省略"它们"，直接说名词。说动物时用得多一些。' },
    { h: '不加在名词后', p: '"们"不加在东西的名词后面：✗ 书们。' }
  ],
  err: [
    { x: '我的狗们很好。', v: '我的狗很好。 / 它们很好。', why: '动物、东西的名词后面不加"们"。' },
    { x: '我的猫，他们很小。', v: '我的猫，它们很小。', why: '动物用"它们"。' }
  ],
  hz: [
    { c: '它', rad: '宀', radName: '宝盖头', radMean: '房子 roof, house', struct: '上下结构', parts: '宀 + 匕', tip: '古字是一条蛇，后来指人以外的东西。', fam: '宝盖头的字：家、字、客。' },
    { c: '们', rad: '亻', radName: '单人旁', radMean: '人 person', struct: '左右结构', parts: '亻 + 门', tip: '表示多数。', fam: '有"们"的词：我们、你们、他们、她们。' }
  ],
  cul: ['"它们"在书面语里常见，口语里用得比较少。', '很多中国人把宠物当家人，会叫它们"宝贝"。'],
  syn: [],
  ant: [],
  rel: ['它', '他们', '她们', '们', '猫', '狗']
},

'他们': {
  pos: [['代词', 'pronoun']],
  zh: ['指说话人和听话人以外的几个人（男性，或有男有女）。'],
  en: ['they; them'],
  syl: [{ py: 'tā', i: 't', f: 'a', t: 1 }, { py: 'men', i: 'm', f: 'en', t: 0 }],
  phon: [
    '第一声 + 轻声。',
    't 要送气。',
    '和"她们、它们"读音一样。'
  ],
  img: { src: 'img/tamen.jpg', cap: "他们是好朋友。", by: "Basile Morin", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Laughing girl and smiling boy in Laos.jpg" },
  use: ['他们 + 是……', '他们的 + 名词', '他们 + 都……'],
  ex: [
    { ctx: '介绍', zh: '他们 是 我 的 朋友 。', py: 'Tāmen shì wǒ de péngyou.', en: 'They are my friends.' },
    { ctx: '描述', zh: '他们 都 是 中国 人 。', py: 'Tāmen dōu shì Zhōngguó rén.', en: 'They are all Chinese.' },
    { ctx: '询问', zh: '他们 在 做 什么 ？', py: 'Tāmen zài zuò shénme?', en: 'What are they doing?' },
    { ctx: '所属', zh: '这 是 他们 的 学校 。', py: 'Zhè shì tāmen de xuéxiào.', en: 'This is their school.' }
  ],
  drill: [
    { t: 'choice', q: '爸爸和妈妈都是老师， ___ 在学校工作。', opts: ['他们', '她们', '它们', '我们'], a: 0, why: '有男有女用"他们"。' },
    { t: 'order', words: ['他们', '朋友', '是', '我的'], a: '他们是我的朋友。', en: 'They are my friends.' },
    { t: 'choice', q: '"their"怎么说？', opts: ['他们的', '他的们', '们他的', '他们'], a: 0, why: '他们 + 的。' },
    { t: 'choice', say: '他们', q: '听录音，选拼音。', opts: ['tāmen', 'dāmen', 'tāmén', 'tàmen'], a: 0, why: '他们 tāmen。' }
  ],
  bop: {
    b: '老师指着教室一角的几位学生："他是……，她是……。他们是我的学生！"',
    o: ['能听、说、认读"他们 tāmen"', '能用"他们"介绍几个人', '完成人称代词表'],
    pre: '复习"我们、你们、他、她"。',
    p: '① 跟读 tāmen；② 完成人称代词表：我 → 我们，你 → 你们，他 / 她 / 它 → 他们 / 她们 / 它们；③ 看图说"他们是……，他们在……"。',
    post: '用照片介绍一群朋友或家人；或做本页练习 1–4。',
    s: '板书：人称代词表（单数 / 多数）。作业：画一张人称代词表并配上图。'
  },
  act: [
    { tag: 'TPR', name: '代词大挑战', how: '老师快速说"我们、你们、他们"，学生用手势表示：我们——指自己和旁边的人；你们——指对面一组；他们——指远处一组。' },
    { tag: '看图说话', name: '他们在做什么', how: '出示多人活动的照片，学生说"他们在吃饭""他们在上课"。' },
    { tag: '游戏', name: '代词表填空', how: '黑板上画空白的人称代词表，学生分组抢填。' }
  ],
  teach: [
    { h: '有男有女', p: '一群人里有男有女，或者不知道性别，用"他们"。' },
    { h: '完整的表', p: '单数：我、你、您、他、她、它；多数：我们、你们、他们、她们、它们。' }
  ],
  err: [
    { x: '他们是学生们。', v: '他们是学生。', why: '名词不需要再加"们"。' },
    { x: '这是他们学校。', v: '这是他们的学校。', why: '表示所属一般加"的"。' }
  ],
  hz: [
    { c: '他', rad: '亻', radName: '单人旁', radMean: '人 person', struct: '左右结构', parts: '亻 + 也', tip: '"也"是一个人——"他"。', fam: '单人旁的字：你、们、住、做。' },
    { c: '们', rad: '亻', radName: '单人旁', radMean: '人 person', struct: '左右结构', parts: '亻 + 门', tip: '很多人（亻）从门里走出来——多数。', fam: '有"们"的词：我们、你们、她们、它们。' }
  ],
  cul: ['汉语的人称代词非常规则：单数加"们"就是多数。', '"他们"在汉语里是男女通用的多数。'],
  syn: [],
  ant: [{ w: '我们', note: '包括说话人。' }],
  rel: ['他', '她们', '它们', '我们', '你们', '们']
},

'天': {
  pos: [['名词', 'noun'], ['量词', 'measure word']],
  zh: ['天空。', '一天，一昼夜。', '（量词）表示天数：三天。'],
  en: ['sky', 'day', '(measure word) day(s): 三天 three days'],
  syl: [{ py: 'tiān', i: 't', f: 'ian', t: 1 }],
  phon: [
    '第一声，高而平。',
    't 是送气音，不要读成 diān。',
    'ian 里的 a 读得像 "e"（接近 tyen）。'
  ],
  img: { src: 'img/tian.jpg', cap: "天", by: "ADARSHluck", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Cirrus uncinus clouds in the morning sky.jpg" },
  use: ['数词 + 天：三天（不加"个"）', '今天 / 明天 / 昨天', '天 + 很蓝（"蓝"超纲）'],
  ex: [
    { ctx: '时间', zh: '我 在 中国 住 三 天 。', py: 'Wǒ zài Zhōngguó zhù sān tiān.', en: 'I am staying in China for three days.' },
    { ctx: '日期', zh: '今天 是 星期 一 。', py: 'Jīntiān shì xīngqīyī.', en: 'Today is Monday.' },
    { ctx: '星期', zh: '一 个 星期 有 七 天 。', py: 'Yí gè xīngqī yǒu qī tiān.', en: 'A week has seven days.' },
    { ctx: '天空', zh: '天 上 有 很 多 飞机 。', py: 'Tiān shàng yǒu hěn duō fēijī.', en: 'There are many planes in the sky.' }
  ],
  drill: [
    { t: 'choice', q: '我在中国住了五 ___ 。', opts: ['天', '个天', '号', '点'], a: 0, why: '天数：五天（不加"个"）。' },
    { t: 'order', words: ['有', '七天', '一个星期'], a: '一个星期有七天。', en: 'A week has seven days.' },
    { t: 'choice', q: '"三天"和"三号"：', opts: ['三天 = 3 days；三号 = the 3rd', '意思一样', '三号 = 3 days', '都是日期'], a: 0, why: '天 = 长度；号 = 日期。' },
    { t: 'choice', say: '天', q: '听录音，选拼音。', opts: ['tiān', 'diān', 'tiàn', 'tān'], a: 0, why: '天 tiān，第一声。' }
  ],
  bop: {
    b: '老师指着窗外的天空："这是天。"再在黑板上写"大"，头上加一横："人的头上是——天！"',
    o: ['能听、说、认读"天 tiān"', '能说"……天"表示天数', '分清"天"和"号"'],
    pre: '复习"今天、明天、昨天、星期"。',
    p: '① 跟读 tiān；② 天数：一天、两天、三天（不加"个"）；③ 对比：三天（3 days）/ 三号（the 3rd）。',
    post: '问答："你在中国住几天？""一个星期有几天？"；或做本页练习 1–4。',
    s: '板书：天 = sky / day ／ 三天（✗ 三个天）／ 三天 ≠ 三号。作业：写一写你最长的一次旅行有几天。'
  },
  act: [
    { tag: '游戏', name: '天还是号', how: '老师说英语（3 days / the 3rd），学生说"三天"或"三号"。' },
    { tag: '画画', name: '大和天', how: '学生画一个张开手脚的人（大），再在头上画一横——"天"。讨论这个字的意思。' },
    { tag: '调查', name: '假期几天', how: '学生互相问"你的假期有几天？"，比较谁的假期最长。' }
  ],
  teach: [
    { h: '不加"个"', p: '"天"和"年"本身是量词：三天、三年（✗ 三个天）。"月"和"星期"要加"个"：三个月、三个星期。' },
    { h: '天 / 号', p: '"三天"是时间长度，"三号"是日期。' }
  ],
  err: [
    { x: '我住三个天。', v: '我住三天。', why: '"天"不加"个"。' },
    { x: 'diān', v: 'tiān', why: 't 要送气。' }
  ],
  hz: [{ c: '天', rad: '大', radName: '大部（有的字典归"一"部）', radMean: '大 big', struct: '独体字', parts: '一 + 大', tip: '"大"是一个张开手脚的人，头上的一横是"天"——人的头顶上是天。', fam: '有"大"的字：太；有"天"的词：今天、明天、昨天、天气、白天、星期天。' }],
  cul: ['古代中国人认为"天"是最高的，皇帝叫"天子"（天的儿子）。', '中国人说"天天向上"——每天都进步一点。'],
  syn: [{ w: '日', note: '书面语。' }],
  ant: [],
  rel: ['今天', '明天', '昨天', '天气', '白天', '星期天', '号']
},

'天气': {
  pos: [['名词', 'noun']],
  zh: ['一个地方一段时间里冷热、晴雨等情况。'],
  en: ['weather'],
  syl: [{ py: 'tiān', i: 't', f: 'ian', t: 1 }, { py: 'qì', i: 'q', f: 'i', t: 4 }],
  phon: [
    '第一声 + 第四声：先高平，再全降。',
    't 和 q 都是送气音。',
    'qì 的舌面贴上腭，不要读成 "chee"。'
  ],
  img: { src: 'img/tianqi.jpg', cap: "下雨了。", by: "Sascha Kohlmann", lic: "CC BY-SA 3.0", from: "Wikimedia Commons · Woman With Umbrella (58400972).jpeg" },
  use: ['天气 + 怎么样？', '天气 + 很好 / 很冷 / 很热', '今天 / 明天 + 天气'],
  ex: [
    { ctx: '询问', zh: '今天 天气 怎么样 ？', py: 'Jīntiān tiānqì zěnmeyàng?', en: 'What is the weather like today?' },
    { ctx: '描述', zh: '今天 天气 很 好 。', py: 'Jīntiān tiānqì hěn hǎo.', en: 'The weather is nice today.' },
    { ctx: '预报', zh: '明天 天气 很 冷 。', py: 'Míngtiān tiānqì hěn lěng.', en: 'The weather will be cold tomorrow.' },
    { ctx: '比较', zh: '中国 的 天气 怎么样 ？', py: 'Zhōngguó de tiānqì zěnmeyàng?', en: 'What is the weather like in China?' }
  ],
  drill: [
    { t: 'choice', q: '今天 ___ 怎么样？—— 很好，不冷不热。', opts: ['天气', '时间', '名字', '东西'], a: 0, why: '问天气：天气怎么样？' },
    { t: 'order', words: ['天气', '今天', '热', '很'], a: '今天天气很热。', en: 'The weather is hot today.' },
    { t: 'choice', q: '哪个不是说天气的？', opts: ['很冷', '下雨', '很热', '很贵'], a: 3, why: '"贵"说价钱。' },
    { t: 'choice', say: '天气', q: '听录音，选拼音。', opts: ['tiānqì', 'diānqì', 'tiānjì', 'tiānqí'], a: 0, why: '天气 tiānqì。' }
  ],
  bop: {
    b: '老师看看窗外，问："今天天气怎么样？"做冷、热、下雨的动作让学生猜。',
    o: ['能听、说、认读"天气 tiānqì"', '能问"天气怎么样？"', '能用学过的词描述天气'],
    pre: '复习"冷、热、下雨、雪"。',
    p: '① 跟读 tiānqì；② 天气词：很冷、很热、下雨、下雪、天气很好；③ 天气预报：学生当播报员说"明天……，天气……"。',
    post: '每人说一说自己城市现在的天气；或做本页练习 1–4。',
    s: '板书：天气怎么样？—— 很好 / 很冷 / 很热 / 下雨了。作业：连续三天用中文记录天气。'
  },
  act: [
    { tag: '情境表演', name: '天气预报', how: '学生轮流当播报员，看着天气图说："明天北京天气很冷，上海下雨。"' },
    { tag: 'TPR', name: '天气动作', how: '老师说"很冷"学生发抖，"很热"扇风，"下雨"打伞，"下雪"接雪花。' },
    { tag: '日常活动', name: '每天的天气', how: '每节课开始问"今天天气怎么样？"，值日生回答并在日历上画天气符号。' }
  ],
  teach: [
    { h: '怎么样', p: '问天气固定说"天气怎么样？"。' },
    { h: '话题', p: '天气是最安全的聊天话题，中国人见面也常说"今天天气不错！"' }
  ],
  err: [
    { x: '天气是好。', v: '天气很好。', why: '形容词前面用"很"。' },
    { x: '今天天气是什么？', v: '今天天气怎么样？', why: '问天气用"怎么样"。' }
  ],
  hz: [
    { c: '天', rad: '大', radName: '大部', radMean: '大 big', struct: '独体字', parts: '一 + 大', tip: '人的头上是天。', fam: '有"天"的词：今天、明天、昨天。' },
    { c: '气', rad: '气', radName: '气部', radMean: '空气 air', struct: '独体字', parts: '𠂉 + 一 + 乙', tip: '古字是三条飘着的线——像天上飘着的云气。', fam: '有"气"的词：天气、不客气、生气（超纲）。' }
  ],
  cul: ['中国很大，同一天北方可能下雪，南方可能很热。', '中国人常说"天气预报"（weather forecast，超纲），很多人每天早上看手机上的天气。'],
  syn: [],
  ant: [],
  rel: ['天', '冷', '热', '下雨', '雪', '怎么样']
},

'听': {
  pos: [['动词', 'verb']],
  zh: ['用耳朵接收声音。', '听从（别人的话）：听妈妈的话。'],
  en: ['to listen; to hear', 'to obey; to follow (advice)'],
  syl: [{ py: 'tīng', i: 't', f: 'ing', t: 1 }],
  phon: [
    '第一声，高而平。',
    't 是送气音。',
    '后鼻音 -ng，不要读成 tīn。'
  ],
  img: { src: 'img/ting.jpg', cap: "她在听歌。", by: "Lars Frantzen", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Beautiful girl listening to music with headphones.jpg" },
  use: ['听 + 歌 / 音乐 / 老师说', '请听！', '听 + 人 + 的话'],
  ex: [
    { ctx: '爱好', zh: '我 喜欢 听 歌 。', py: 'Wǒ xǐhuan tīng gē.', en: 'I like listening to songs.' },
    { ctx: '课堂', zh: '请 听 。', py: 'Qǐng tīng.', en: 'Please listen.' },
    { ctx: '课堂', zh: '你们 听 老师 说 。', py: 'Nǐmen tīng lǎoshī shuō.', en: 'Listen to the teacher.' },
    { ctx: '进行', zh: '他 在 听 电话 。', py: 'Tā zài tīng diànhuà.', en: 'He is on the phone.' }
  ],
  drill: [
    { t: 'choice', q: '我在 ___ 中文歌。', opts: ['听', '看', '吃', '写'], a: 0, why: '歌是听的。' },
    { t: 'order', words: ['听', '我', '喜欢', '歌'], a: '我喜欢听歌。', en: 'I like listening to songs.' },
    { t: 'choice', q: '"听"和"听见"：', opts: ['听是动作，听见是结果', '一样', '听见是动作', '都是名词'], a: 0, why: '听（listen）→ 听见（hear）。' },
    { t: 'choice', say: '听', q: '听录音，选拼音。', opts: ['tīng', 'tīn', 'dīng', 'tíng'], a: 0, why: '听 tīng，第一声。' }
  ],
  bop: {
    b: '老师把手放在耳朵旁："嘘——请听！"然后放一段声音。',
    o: ['能听、说、认读"听 tīng"', '能说"听歌""请听"', '分清"听"和"听见"'],
    pre: '复习"说、看、读、写、歌"。',
    p: '① 跟读 tīng；② 课堂指令：请听、请说、请读、请写；③ 问答："你喜欢听什么歌？"',
    post: '听声音猜东西（猫叫、雨声、电话）；或做本页练习 1–4。',
    s: '板书：听 + 歌 / 老师说 ／ 请听 ／ 听、说、读、写。作业：听一首中文歌。'
  },
  act: [
    { tag: 'TPR', name: '听说读写', how: '老师说"听"学生手放耳边，"说"指嘴，"读"捧书，"写"拿笔。' },
    { tag: '游戏', name: '听声音', how: '老师播放声音（猫叫、狗叫、电话、下雨），学生说"我听……"然后猜是什么。' },
    { tag: '调查', name: '听什么歌', how: '学生互相问"你喜欢听什么歌？"，分享一首喜欢的中文歌。' }
  ],
  teach: [
    { h: '听 / 听见', p: '"听"是动作（listen），"听见"是结果（hear）：我听了，可是没听见。' },
    { h: '听话', p: '"听……的话"= 听从：听妈妈的话。"听话"也是"乖"的意思（拓展）。' }
  ],
  err: [
    { x: '我看歌。', v: '我听歌。', why: '歌是听的。' },
    { x: 'tīn', v: 'tīng', why: '"听"是后鼻音。' }
  ],
  hz: [{ c: '听', rad: '口', radName: '口字旁', radMean: '嘴 mouth', struct: '左右结构', parts: '口 + 斤', tip: '别人张"口"说话，我们才能"听"。繁体字"聽"里有"耳"。', fam: '口字旁的字：吃、喝、叫、唱。' }],
  cul: ['繁体字"聽"里有耳朵（耳）、眼睛（目）、心（心）——用耳朵、眼睛和心一起听，才是真正的听。', '中国父母常说"要听话"，意思是要听大人的话、要乖。'],
  syn: [],
  ant: [{ w: '说', note: '用嘴讲话。' }],
  rel: ['听见', '说', '看', '读', '写', '歌', '好听']
},

'听见': {
  pos: [['动词', 'verb']],
  zh: ['听到了；耳朵接收到了声音。'],
  en: ['to hear'],
  syl: [{ py: 'tīng', i: 't', f: 'ing', t: 1 }, { py: 'jiàn', i: 'j', f: 'ian', t: 4 }],
  phon: [
    '第一声 + 第四声：先高平，再全降。',
    't 送气，j 不送气。',
    'tīng 是后鼻音，jiàn 是前鼻音。'
  ],
  img: { src: 'img/tingjian.jpg', cap: "你听见了吗？", by: "JoanDragonfly", lic: "CC BY-SA 2.0", from: "Wikimedia Commons · Hand on ear.jpg" },
  use: ['听见 + 声音 / 人说……', '没有听见', '听见了吗？'],
  ex: [
    { ctx: '确认', zh: '你 听见 了 吗 ？', py: 'Nǐ tīngjiàn le ma?', en: 'Did you hear (it)?' },
    { ctx: '否定', zh: '我 没有 听见 。', py: 'Wǒ méiyǒu tīngjiàn.', en: 'I did not hear (it).' },
    { ctx: '发现', zh: '我 听见 有 人 叫 我 。', py: 'Wǒ tīngjiàn yǒu rén jiào wǒ.', en: 'I heard someone calling me.' },
    { ctx: '电话', zh: '我 听见 你 的 手机 了 。', py: 'Wǒ tīngjiàn nǐ de shǒujī le.', en: 'I heard your phone.' }
  ],
  drill: [
    { t: 'choice', q: '对不起，我没有 ___ 。请再说一下。', opts: ['听见', '看见', '听', '说'], a: 0, why: '没有听见 = didn\'t hear。' },
    { t: 'order', words: ['听见', '我', '了'], a: '我听见了。', en: 'I heard it.' },
    { t: 'choice', q: '"听见"的否定是：', opts: ['没有听见', '不听见', '听不见了吗', '不是听见'], a: 0, why: '结果的否定用"没有"。' },
    { t: 'choice', say: '听见', q: '听录音，选拼音。', opts: ['tīngjiàn', 'tīnjiàn', 'tīngqiàn', 'dīngjiàn'], a: 0, why: '听见 tīngjiàn。' }
  ],
  bop: {
    b: '老师非常小声地说一句话，问："你们听见了吗？"学生说"没有"。再大声说一遍："现在听见了吗？"',
    o: ['能听、说、认读"听见 tīngjiàn"', '能说"听见了 / 没有听见"', '分清"听"和"听见"'],
    pre: '复习"听、看见"。',
    p: '① 跟读 tīngjiàn；② 小声大声游戏："你听见了吗？"；③ 对比：看 → 看见；听 → 听见。',
    post: '"传话"游戏后问"你听见什么了？"；或做本页练习 1–4。',
    s: '板书：听（动作）→ 听见（结果）／ 看 → 看见 ／ 没有听见（✗ 不听见）。作业：写三句"我听见……"。'
  },
  act: [
    { tag: '游戏', name: '悄悄话', how: '老师在一位学生耳边说一个词，问他"你听见什么了？"，他大声说出来。' },
    { tag: '游戏', name: '声音侦探', how: '全班闭眼一分钟，然后说"我听见了……"（车的声音、有人说话、下雨）。' },
    { tag: '情境表演', name: '打电话', how: '"喂？喂？你听见了吗？""听见了！你说吧。"' }
  ],
  teach: [
    { h: '动作 + 结果', p: '"听"是动作，"见"是结果；同样：看 → 看见。' },
    { h: '否定', p: '用"没有听见"，不用"不听见"。' }
  ],
  err: [
    { x: '我不听见。', v: '我没有听见。', why: '结果的否定用"没有"。' },
    { x: '我听了，可是我没有听。', v: '我听了，可是没有听见。', why: '动作是"听"，结果是"听见"。' }
  ],
  hz: [
    { c: '听', rad: '口', radName: '口字旁', radMean: '嘴 mouth', struct: '左右结构', parts: '口 + 斤', tip: '别人张口说话，我们才能听。', fam: '口字旁的字：吃、喝、叫。' },
    { c: '见', rad: '见', radName: '见部', radMean: '看见 to see', struct: '独体字', parts: '冂 + 儿', tip: '在这里是"结果"的意思：听到了。', fam: '有"见"的词：看见、再见。' }
  ],
  cul: ['打电话信号不好时，中国人常说"喂？听得见吗？"', '"听见"和"听到"意思一样，"听到"在南方更常用（超纲）。'],
  syn: [{ w: '听到', py: 'tīngdào', note: '意思一样。', out: true }],
  ant: [],
  rel: ['听', '看见', '见', '没有', '说']
}

});
