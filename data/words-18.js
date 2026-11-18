// HSK1 教学参考 · 第 18 批（10 词）：认识 日 三 上 上班 商店 上课 上午 上学 少
window.H1_WORDS = window.H1_WORDS || {};
Object.assign(H1_WORDS, {

'认识': {
  pos: [['动词', 'verb']],
  zh: ['见过、知道某人是谁。', '能认出（字、东西、路等）。'],
  en: ['to know (a person); to meet', 'to recognize (characters, things, the way)'],
  syl: [{ py: 'rèn', i: 'r', f: 'en', t: 4 }, { py: 'shi', i: 'sh', f: '-i', t: 0 }],
  phon: [
    '第四声 + 轻声："认"全降，"识"又轻又短。',
    'r 是卷舌音，舌尖卷起来不碰上腭；不要读成 lèn。',
    '"识"在这里读轻声 shi（单独读是 shí）。'
  ],
  img: { src: 'img/renshi.jpg', cap: "认识你很高兴！", by: "Jessica Spengler", lic: "CC BY 2.0", from: "Wikimedia Commons · Exchanging business cards (3047411627).jpg" },
  use: ['认识 + 人', '认识你很高兴', '认识 + 字 / 路'],
  ex: [
    { ctx: '初次见面', zh: '认识 你 很 高兴 。', py: 'Rènshi nǐ hěn gāoxìng.', en: 'Nice to meet you.' },
    { ctx: '询问', zh: '你 认识 他 吗 ？', py: 'Nǐ rènshi tā ma?', en: 'Do you know him?' },
    { ctx: '否定', zh: '我 不 认识 那个 人 。', py: 'Wǒ bú rènshi nàge rén.', en: 'I do not know that person.' },
    { ctx: '学习', zh: '我 认识 一 百 个 汉字 。', py: 'Wǒ rènshi yìbǎi gè Hànzì.', en: 'I know one hundred characters.' }
  ],
  drill: [
    { t: 'choice', q: '___ 你很高兴！', opts: ['认识', '知道', '看见', '喜欢'], a: 0, why: '初次见面说"认识你很高兴"。' },
    { t: 'order', words: ['认识', '你', '吗', '她'], a: '你认识她吗？', alt: ['她认识你吗？'], en: 'Do you know her?' },
    { t: 'choice', q: '"我认识他"和"我知道他"：', opts: ['意思一样', '"认识"是见过、有来往；"知道"只是听说过', '"知道"更熟', '都不对'], a: 1, why: '认识 = 见过面；知道 = 有这个信息。' },
    { t: 'choice', say: '认识', q: '听录音，选拼音。', opts: ['rènshi', 'lènshi', 'rènshí', 'rénsī'], a: 0, why: '认识 rènshi："识"读轻声。' }
  ],
  bop: {
    b: '老师和一位学生握手："你好，我叫……。认识你很高兴！"引导学生回答："认识你我也很高兴！"',
    o: ['能听、说、认读"认识 rènshi"', '能说"认识你很高兴"', '能问"你认识……吗？"'],
    pre: '复习"你好、我叫……、高兴"。',
    p: '① 跟读 rèn、shi、rènshi，练习 r；② 自我介绍链："你好，我叫……。认识你很高兴！"；③ 看照片问答："你认识他吗？""认识，他是……／不认识。"',
    post: '全班走动，认识五个"新朋友"（可用假名字）；或做本页练习 1–4。',
    s: '板书：认识你很高兴 ／ 认识 + 人 / 字 ／ 认识 ≠ 知道。作业：今天认识一个新朋友，用中文介绍他。'
  },
  act: [
    { tag: '情境表演', name: '新朋友', how: '音乐响时走动，音乐停时和身边的人握手："你好！我叫……。认识你很高兴！"' },
    { tag: '游戏', name: '你认识他吗', how: '老师出示名人或卡通人物照片，学生回答"我认识，他是……"或"我不认识"。' },
    { tag: '游戏', name: '认字比赛', how: '老师快速出示学过的汉字卡，学生说"我认识！这是……"。' }
  ],
  teach: [
    { h: '认识 / 知道', p: '"认识"是见过、有来往，或者能认出来；"知道"是有某个信息：我知道他的名字，可是不认识他。' },
    { h: '认识你很高兴', p: '也可以说"很高兴认识你"。回答："我也很高兴。"' }
  ],
  err: [
    { x: '我知道他。（想说见过、认识）', v: '我认识他。', why: '见过面、有来往用"认识"。' },
    { x: 'lènshi', v: 'rènshi', why: 'r 是卷舌音。' }
  ],
  hz: [
    { c: '认', rad: '讠', radName: '言字旁', radMean: '说话 speech', struct: '左右结构', parts: '讠 + 人', tip: '左边"讠"是说话，右边是"人"——说出这个人是谁，就是"认"。', fam: '言字旁的字：说、话、请、读、课、谁、语。' },
    { c: '识', rad: '讠', radName: '言字旁', radMean: '说话 speech', struct: '左右结构', parts: '讠 + 只', tip: '左边"讠"是说话，右边"只"——能说出来的知识就是"识"。', fam: '言字旁的字：认、说、话、谁。' }
  ],
  cul: ['中国人第一次见面常握手并说"认识你很高兴"或"幸会"（超纲）。', '中国人很重视"认识人"——有熟人帮忙，很多事都更容易。'],
  syn: [{ w: '知道', note: '有某个信息，不一定见过。' }],
  ant: [],
  rel: ['知道', '高兴', '朋友', '名字', '叫', '字']
},

'日': {
  pos: [['量词', 'measure word'], ['名词', 'noun']],
  zh: ['一个月里的某一天（书面）：5 月 1 日。', '（名词）太阳。'],
  en: ['day; date (written)', '(noun) sun'],
  syl: [{ py: 'rì', i: 'r', f: '-i', t: 4 }],
  phon: [
    '第四声，从高处全降。',
    'r 是卷舌音，韵母不是 "ee"：舌尖卷起来不动，让声音延长。',
    '不要读成英语的 "ree" 或 lì。'
  ],
  img: { src: 'img/ri.jpg', cap: "日", by: "Dietmar Rabich", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Dülmen, Hausdülmen, Sonnenaufgang -- 2015 -- 4952.jpg" },
  use: ['数字 + 月 + 数字 + 日（书面）', '星期日', '生日（超纲）'],
  ex: [
    { ctx: '日期', zh: '今天 是 五 月 一 日 。', py: 'Jīntiān shì wǔ yuè yī rì.', en: 'Today is May 1st.' },
    { ctx: '星期', zh: '星期日 我 不 上班 。', py: 'Xīngqīrì wǒ bú shàngbān.', en: 'I do not work on Sunday.' },
    { ctx: '书面', zh: '十 月 一 日 我们 不 上课 。', py: 'Shí yuè yī rì wǒmen bú shàngkè.', en: 'We have no class on October 1st.' },
    { ctx: '日期', zh: '我 七 月 九 日 回 国 。', py: 'Wǒ qī yuè jiǔ rì huí guó.', en: 'I am going back to my country on July 9th.' }
  ],
  drill: [
    { t: 'choice', q: '书面写"五月一号"：五月一 ___ 。', opts: ['日', '天', '年', '点'], a: 0, why: '书面用"日"，口语用"号"。' },
    { t: 'order', words: ['日', '月', '三', '八'], a: '三月八日', en: 'March 8th' },
    { t: 'choice', q: '"日"和"号"：', opts: ['都表示日期，"日"书面，"号"口语', '意思不一样', '"号"是书面', '"日"只是太阳'], a: 0, why: '5月1日 = 五月一号。' },
    { t: 'choice', say: '日', q: '听录音，选拼音。', opts: ['rì', 'lì', 'rè', 'shì'], a: 0, why: '日 rì，第四声。' }
  ],
  bop: {
    b: '老师在黑板上画一个太阳，再写"日"："这是太阳，也是“日”。"然后写日期："5月1日。"',
    o: ['能听、说、认读"日 rì"', '能读书面的日期', '分清"日"和"号"'],
    pre: '复习"号、月、星期"。',
    p: '① 跟读 rì，练 r；② 读书面日期：1月1日、10月1日、12月25日；③ 对比：口语说"号"，书面写"日"；星期日 = 星期天。',
    post: '看日历或车票上的日期，读出来；或做本页练习 1–4。',
    s: '板书：日 = 号（书面）／ __ 月 __ 日 ／ 星期日 = 星期天。作业：找一张写着日期的票或单子，读一读。'
  },
  act: [
    { tag: '游戏', name: '读日期', how: '老师出示车票、电影票上的日期，学生读出来："十月一日。"' },
    { tag: '文化体验', name: '中国节日', how: '介绍几个日期：1月1日（元旦）、10月1日（国庆节）。学生读日期并说"……是中国的节日"。' },
    { tag: '画画', name: '象形字', how: '学生画太阳，再一步步变成"日"字，了解象形字。' }
  ],
  teach: [
    { h: '日 / 号', p: '意思一样。说话时用"号"，写在纸上、看日历时常见"日"。' },
    { h: '星期日', p: '"星期日"和"星期天"一样，"星期日"更书面。' }
  ],
  err: [
    { x: 'lì', v: 'rì', why: 'r 是卷舌音。' },
    { x: '一日五月', v: '五月一日', why: '先说月，再说日。' }
  ],
  hz: [{ c: '日', rad: '日', radName: '日部', radMean: '太阳 sun', struct: '独体字', parts: '竖 + 横折 + 横 + 横', tip: '古字是一个圆圆的太阳，中间一点。后来变成方的"日"。太阳出来一次就是一天。', fam: '日字旁的字：明、时、昨、晚；日字底的字：是、早。' }],
  cul: ['"日"是最早的象形字之一，本义是太阳。', '10月1日是中国的国庆节，有七天假期，叫"黄金周"。'],
  syn: [{ w: '号', note: '口语说法。' }, { w: '天', note: '时间长度：三天。' }],
  ant: [],
  rel: ['号', '月', '年', '星期日', '天', '今天']
},

'三': {
  pos: [['数词', 'numeral']],
  zh: ['数字 3，二加一。'],
  en: ['three'],
  syl: [{ py: 'sān', i: 's', f: 'an', t: 1 }],
  phon: [
    '第一声，高而平。',
    's 是平舌音，舌尖放平，不要读成 shān（山）。',
    '前鼻音 -n，不要读成 sāng。'
  ],
  img: { src: 'img/san.jpg', cap: "一、二、三", by: "Salnitrum", lic: "CC0", from: "Wikimedia Commons · Three baskets with apples.png" },
  use: ['三 + 量词 + 名词：三个人', '三点 / 三月 / 三号 / 三岁', '十三、三十'],
  ex: [
    { ctx: '家庭', zh: '我 家 有 三 口 人 。', py: 'Wǒ jiā yǒu sān kǒu rén.', en: 'There are three people in my family.' },
    { ctx: '时间', zh: '下午 三 点 见 。', py: 'Xiàwǔ sān diǎn jiàn.', en: 'See you at three in the afternoon.' },
    { ctx: '购物', zh: '我 买 了 三 个 苹果 。', py: 'Wǒ mǎi le sān gè píngguǒ.', en: 'I bought three apples.' },
    { ctx: '星期', zh: '今天 星期 三 。', py: 'Jīntiān xīngqīsān.', en: 'Today is Wednesday.' }
  ],
  drill: [
    { t: 'choice', q: '一、二、 ___ 、四', opts: ['三', '五', '六', '十'], a: 0, why: '二后面是三。' },
    { t: 'order', words: ['三', '口人', '有', '我家'], a: '我家有三口人。', en: 'There are three people in my family.' },
    { t: 'choice', q: '"Wednesday"是：', opts: ['星期三', '三星期', '星期二', '第三'], a: 0, why: '星期三 = Wednesday。' },
    { t: 'choice', say: '三', q: '听录音，选拼音。', opts: ['sān', 'shān', 'sāng', 'sàn'], a: 0, why: '三 sān，第一声。' }
  ],
  bop: {
    b: '老师在黑板上依次写"一、二、三"，问："一是一横，二是两横，三呢？——三横！"',
    o: ['能听、说、认读"三 sān"', '分清 s 和 sh', '能说带"三"的时间、数量'],
    pre: '复习"一、二"和手势。',
    p: '① 跟读 sān，对比 sān / shān；② 数字手势 1–3；③ 问答："你家有几口人？""你几点下课？"',
    post: '听写带"三"的数字（13、30、33）；或做本页练习 1–4。',
    s: '板书：一 → 二 → 三（一横、两横、三横）／ 十三、三十、星期三。作业：写五样"三个"的东西。'
  },
  act: [
    { tag: 'TPR', name: '手指数数', how: '老师说数字，学生伸手指；说"三"伸三个手指（中国手势：食指、中指、无名指）。' },
    { tag: '语音', name: 's 还是 sh', how: '老师读 sān / shān，学生举"三"或"山"的卡片（"山"可作为图片）。' },
    { tag: '游戏', name: '三个三个', how: '老师说一个类别（水果），每组在三十秒里说出三个："苹果、包子……不对！"' }
  ],
  teach: [
    { h: '一二三', p: '"一、二、三"的横数就是数字本身，是最容易记的汉字。' },
    { h: '平舌音', p: '三 sān（平舌）和山 shān（卷舌）的区别要早练。' }
  ],
  err: [
    { x: 'shān', v: 'sān', why: '"三"是平舌音 s。' },
    { x: '三星期（想说 Wednesday）', v: '星期三', why: '星期三是一周的第三天；"三个星期"是时间长度。' }
  ],
  hz: [{ c: '三', rad: '一', radName: '一部', radMean: '——', struct: '独体字', parts: '横 + 横 + 横', tip: '三横就是三。注意三横长短不一样：上面中等，中间最短，下面最长。', fam: '一二三：一、二、三。' }],
  cul: ['中国人说"三"常表示"很多"：三思而后行（做事前多想想）。', '"三人行，必有我师"——孔子说，几个人一起走，里面一定有可以做我老师的人。'],
  syn: [],
  ant: [],
  rel: ['一', '二', '四', '几', '星期', '点']
},

'上': {
  pos: [['名词', 'noun'], ['动词', 'verb']],
  zh: ['（方位）高处；在物体的表面。', '（动词）去（某个地方）：上学、上班。', '前一个：上个星期（拓展）。'],
  en: ['on; above; up', '(verb) to go to (school, work, class)', '(extension) last; previous'],
  syl: [{ py: 'shàng', i: 'sh', f: 'ang', t: 4 }],
  phon: [
    '第四声，从高处全降。',
    'sh 是卷舌音，不要读成 sàng。',
    '后鼻音 -ng。放在名词后面时常读轻声：桌子上 zhuōzi shang。'
  ],
  img: { src: 'img/shang.jpg', cap: "猫在桌子上。", by: "Bart Everson", lic: "CC BY 2.0", from: "Wikimedia Commons · Shadow cat and Terrarium on table, New Orleans.jpg" },
  use: ['名词 + 上：桌子上、椅子上', '东西 + 在 + 名词 + 上', '上 + 班 / 课 / 学'],
  ex: [
    { ctx: '位置', zh: '书 在 桌子 上 。', py: 'Shū zài zhuōzi shang.', en: 'The book is on the table.' },
    { ctx: '位置', zh: '猫 在 椅子 上 。', py: 'Māo zài yǐzi shang.', en: 'The cat is on the chair.' },
    { ctx: '存在', zh: '桌子 上 有 一 个 杯子 。', py: 'Zhuōzi shang yǒu yí gè bēizi.', en: 'There is a cup on the table.' },
    { ctx: '动作', zh: '我 八 点 上 课 。', py: 'Wǒ bā diǎn shàng kè.', en: 'I have class at eight.' }
  ],
  drill: [
    { t: 'choice', q: '手机在桌子 ___ 。', opts: ['上', '下', '前', '少'], a: 0, why: '在桌子的表面：桌子上。' },
    { t: 'order', words: ['上', '在', '书', '椅子'], a: '书在椅子上。', en: 'The book is on the chair.' },
    { t: 'choice', q: '"上"的反义词是：', opts: ['下', '里', '前', '外'], a: 0, why: '上 ↔ 下。' },
    { t: 'choice', say: '上', q: '听录音，选拼音。', opts: ['shàng', 'sàng', 'shàn', 'shāng'], a: 0, why: '上 shàng，第四声。' }
  ],
  bop: {
    b: '老师把一本书放在桌子上："书在哪儿？——在桌子上。"再放到椅子下："现在呢？"',
    o: ['能听、说、认读"上 shàng"', '能说"……在……上"', '认识"上班、上课、上学"'],
    pre: '复习"在、里、下、桌子、椅子"。',
    p: '① 跟读 shàng；② 老师摆东西，学生说"……在……上／下／里"；③ 认识"上 + 名词"的动词：上班、上课、上学。',
    post: '看房间图描述位置；或做本页练习 1–4。',
    s: '板书：名词 + 上 ／ ……在……上 ／ 上 ↔ 下 ／ 上班、上课、上学。作业：描述你书桌上有什么。'
  },
  act: [
    { tag: 'TPR', name: '上和下', how: '老师说"手放在头上""书放在椅子上""笔放在桌子下"，学生照做。' },
    { tag: '游戏', name: '东西在哪儿', how: '一人闭眼，老师把东西放在某处，他睁眼后问"……在哪儿？"，全班回答"在……上"。' },
    { tag: '画画', name: '听一听，画一画', how: '老师说"桌子上有一本书，书上有一只猫"，学生画出来。' }
  ],
  teach: [
    { h: '方位词在后', p: '汉语说"桌子上"（on the table），方位词放在名词后面。' },
    { h: '上 + 名词', p: '"上"放在"班、课、学"前面是动词"去"的意思：上班 = 去工作。' }
  ],
  err: [
    { x: '书在上桌子。', v: '书在桌子上。', why: '方位词放在名词后面。' },
    { x: '我在中国上。', v: '我在中国。', why: '国家、城市后面不加"上"。' }
  ],
  hz: [{ c: '上', rad: '一', radName: '一部', radMean: '——', struct: '独体字', parts: '竖 + 横 + 横', tip: '下面一长横是地面，上面一短横加一竖指向上方——"上"就是高处。和"下"正好相反。', fam: '指事字：上、下、本（木 + 一，超纲解释）。' }],
  cul: ['"上"和"下"是"指事字"：用符号指出位置，不是画东西。', '"上"还表示时间的"前一个"：上个星期、上个月（拓展）。'],
  syn: [],
  ant: [{ w: '下', note: '低处；下面。' }],
  rel: ['下', '里', '外', '前', '后', '上班', '上课', '上学']
},

'上班': {
  pos: [['动词', 'verb']],
  zh: ['到工作的地方去工作；在工作时间里工作。'],
  en: ['to go to work; to be at work'],
  syl: [{ py: 'shàng', i: 'sh', f: 'ang', t: 4 }, { py: 'bān', i: 'b', f: 'an', t: 1 }],
  phon: [
    '第四声 + 第一声：先全降，再高平。',
    'shàng 是后鼻音，bān 是前鼻音。',
    'b 不送气，不要读成 pān。'
  ],
  img: { src: 'img/shangban.jpg', cap: "他们去上班。", by: "mattbuck", lic: "CC BY-SA 3.0", from: "Wikimedia Commons · St Pancras railway station MMB E7.jpg" },
  use: ['时间 + 上班：九点上班', '去 + 上班', '在 + 地方 + 上班'],
  ex: [
    { ctx: '作息', zh: '我 九 点 上班 。', py: 'Wǒ jiǔ diǎn shàngbān.', en: 'I start work at nine.' },
    { ctx: '出行', zh: '爸爸 开车 去 上班 。', py: 'Bàba kāichē qù shàngbān.', en: 'Dad drives to work.' },
    { ctx: '地点', zh: '妈妈 在 医院 上班 。', py: 'Māma zài yīyuàn shàngbān.', en: 'Mom works at a hospital.' },
    { ctx: '休息', zh: '星期 六 我 不 上班 。', py: 'Xīngqīliù wǒ bú shàngbān.', en: 'I do not work on Saturday.' }
  ],
  drill: [
    { t: 'choice', q: '我每天早上八点 ___ 。', opts: ['上班', '下班', '睡觉', '生病'], a: 0, why: '早上去工作：上班。' },
    { t: 'order', words: ['上班', '公司', '在', '他'], a: '他在公司上班。', en: 'He works at a company.' },
    { t: 'choice', q: '"上班"的反义词是：', opts: ['下班', '上课', '上学', '工作'], a: 0, why: '上班 ↔ 下班。' },
    { t: 'choice', say: '上班', q: '听录音，选拼音。', opts: ['shàngbān', 'sàngbān', 'shàngpān', 'shàngbāng'], a: 0, why: '上班 shàngbān。' }
  ],
  bop: {
    b: '老师穿上外套、拿起包，看看表："八点了！我去上班。"',
    o: ['能听、说、认读"上班 shàngbān"', '能说"我……点上班"', '能说"在……上班"'],
    pre: '复习"工作、公司、点"。',
    p: '① 跟读 shàng、bān、shàngbān；② 说时间：几点上班？几点下班？；③ 两人问答："你爸爸在哪儿上班？""他怎么去上班？"',
    post: '介绍一位家人的上班时间和地点；或做本页练习 1–4。',
    s: '板书：__ 点上班 ／ 在 + 地方 + 上班 ／ 上班 ↔ 下班。作业：问问家人几点上班、几点下班。'
  },
  act: [
    { tag: '调查', name: '几点上班', how: '学生扮演不同职业（医生、老师、司机），互相问"你几点上班？""你在哪儿上班？"' },
    { tag: 'TPR', name: '上班下班', how: '老师说"上班"学生做开车或拿包的动作，说"下班"学生伸懒腰回家。' },
    { tag: '情境表演', name: '早上的家', how: '"妈妈，你几点上班？""八点。我走了！""再见！"' }
  ],
  teach: [
    { h: '上班 / 工作', p: '"上班"不能加宾语和地点在后面：在公司上班（✗ 上班公司）。"工作"可以做名词：我的工作。' },
    { h: '离合词', p: '"上班"可以分开：上了一天班（拓展）。' }
  ],
  err: [
    { x: '我上班在公司。', v: '我在公司上班。', why: '"在 + 地点"放在动词前面。' },
    { x: '我上班公司。', v: '我去公司上班。', why: '"上班"后面不能加地点。' }
  ],
  hz: [
    { c: '上', rad: '一', radName: '一部', radMean: '——', struct: '独体字', parts: '竖 + 横 + 横', tip: '指向上方。在这里是"去"的意思。', fam: '有"上"的词：上课、上学、上午。' },
    { c: '班', rad: '王', radName: '王字旁（斜玉旁）', radMean: '玉 jade', struct: '左中右结构', parts: '王 + 刂 + 王', tip: '两块玉（王）中间一把刀（刂）——把玉分开，分成一组一组，就是"班"。', fam: '王字旁的字：玩、现。' }
  ],
  cul: ['在中国，很多公司九点上班，六点下班。互联网公司常说"996"：早九点上班、晚九点下班、一周六天（很辛苦）。', '早上的上班时间叫"早高峰"，路上和地铁里人很多。'],
  syn: [{ w: '工作', note: '可以做名词。' }],
  ant: [{ w: '下班', note: '工作结束。' }],
  rel: ['下班', '工作', '公司', '上课', '上学', '点']
},

'商店': {
  pos: [['名词', 'noun']],
  zh: ['卖东西的地方。'],
  en: ['shop; store'],
  syl: [{ py: 'shāng', i: 'sh', f: 'ang', t: 1 }, { py: 'diàn', i: 'd', f: 'ian', t: 4 }],
  phon: [
    '第一声 + 第四声：先高平，再全降。',
    'shāng 是卷舌音、后鼻音。',
    'diàn 里的 a 读得像 "e"。'
  ],
  img: { src: 'img/shangdian.jpg', cap: "这是一个商店。", by: "Donald Trung Quoc Don", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Naaimachines written on a former storefront, Winschoten (2022) 01.jpg" },
  use: ['去 + 商店 + 买东西', '商店 + 在 + 哪儿', '商店 + 里 + 有……'],
  ex: [
    { ctx: '购物', zh: '我 去 商店 买 东西 。', py: 'Wǒ qù shāngdiàn mǎi dōngxi.', en: 'I am going to the shop to buy things.' },
    { ctx: '问路', zh: '商店 在 哪儿 ？', py: 'Shāngdiàn zài nǎr?', en: 'Where is the shop?' },
    { ctx: '描述', zh: '这个 商店 很 大 。', py: 'Zhège shāngdiàn hěn dà.', en: 'This shop is big.' },
    { ctx: '存在', zh: '商店 里 有 很 多 人 。', py: 'Shāngdiàn lǐ yǒu hěn duō rén.', en: 'There are many people in the shop.' }
  ],
  drill: [
    { t: 'choice', q: '我想买衣服，我去 ___ 。', opts: ['商店', '医院', '学校', '飞机'], a: 0, why: '买东西去商店。' },
    { t: 'order', words: ['商店', '去', '买东西', '我'], a: '我去商店买东西。', en: 'I go to the shop to buy things.' },
    { t: 'choice', q: '"商店"里可以做什么？', opts: ['看病', '买东西', '上课', '睡觉'], a: 1, why: '商店是买东西的地方。' },
    { t: 'choice', say: '商店', q: '听录音，选拼音。', opts: ['shāngdiàn', 'sāngdiàn', 'shāndiàn', 'shàngdiàn'], a: 0, why: '商店 shāngdiàn。' }
  ],
  bop: {
    b: '老师出示超市、书店、饭店、商店的照片，问："我想买东西，我去哪儿？"',
    o: ['能听、说、认读"商店 shāngdiàn"', '能说"去商店买东西"', '分清"商店、书店、饭店"'],
    pre: '复习"店、买、东西、超市"。',
    p: '① 跟读 shāng、diàn、shāngdiàn（注意和"上 shàng"的声调不同）；② "……店"家族：商店、书店、饭店；③ 两人问答："你去哪儿？""我去商店。""你买什么？"',
    post: '画一张"我家附近的商店"地图并介绍；或做本页练习 1–4。',
    s: '板书：商店 ／ 书店 ／ 饭店 ／ 去商店买东西。作业：写出你常去的三家店。'
  },
  act: [
    { tag: '情境表演', name: '开商店', how: '每组开一家"商店"，摆上东西和价钱，其他组来买："你好，有……吗？多少钱？"' },
    { tag: '游戏', name: '什么店', how: '老师说要买的东西（书、饭、衣服），学生抢答去哪个店。' },
    { tag: '语音', name: 'shāng 和 shàng', how: '对比"商店 shāngdiàn"和"上 shàng"，老师读，学生判断。' }
  ],
  teach: [
    { h: '店 家族', p: '"店"是卖东西或提供服务的地方：商店（综合）、书店（书）、饭店（饭）。' },
    { h: '商店 / 超市', p: '超市是自己拿东西、最后付钱的大商店。' }
  ],
  err: [
    { x: '我买东西去商店。', v: '我去商店买东西。', why: '先说去哪儿，再说做什么。' },
    { x: 'shàngdiàn', v: 'shāngdiàn', why: '"商"是第一声。' }
  ],
  hz: [
    { c: '商', rad: '亠', radName: '文字头（有的字典归"口"部）', radMean: '——', struct: '上下结构', parts: '亠 + 丷 + 冏', tip: '"商"是做买卖的意思。古代商朝人很会做生意，所以做买卖的人叫"商人"。', fam: '有"商"的词：商店；商人（超纲）。' },
    { c: '店', rad: '广', radName: '广字旁', radMean: '房屋 building', struct: '半包围结构', parts: '广 + 占', tip: '大房子（广）里占（占）了一块地方卖东西——"店"。', fam: '有"店"的词：书店、饭店、商店。' }
  ],
  cul: ['中国的商店常常营业到很晚，很多便利店 24 小时开门。', '"商"来自三千多年前的商朝，那时的人很会做生意，后来"商人"就是做生意的人。'],
  syn: [{ w: '店', note: '口语常只说"店"。' }],
  ant: [],
  rel: ['店', '书店', '饭店', '超市', '买', '卖', '东西']
},

'上课': {
  pos: [['动词', 'verb']],
  zh: ['（学生）听课；（老师）讲课。', '课开始。'],
  en: ['to attend class; to teach a class', 'class begins'],
  syl: [{ py: 'shàng', i: 'sh', f: 'ang', t: 4 }, { py: 'kè', i: 'k', f: 'e', t: 4 }],
  phon: [
    '两个第四声连读：两个字都要降，第一个降得短一点。',
    'sh 卷舌，k 送气。',
    'kè 的 e 嘴形扁。'
  ],
  img: { src: 'img/shangke.jpg', cap: "我们在上课。", by: "Harrison Keely", lic: "CC BY 4.0", from: "Wikimedia Commons · A college professor teaching in a university classroom full of students in Tennessee, United States 08.jpg" },
  use: ['时间 + 上课', '上课了！', '在 + 地方 + 上课'],
  ex: [
    { ctx: '课堂', zh: '上课 了 ！', py: 'Shàngkè le!', en: 'Class has started!' },
    { ctx: '作息', zh: '我们 八 点 上课 。', py: 'Wǒmen bā diǎn shàngkè.', en: 'We have class at eight.' },
    { ctx: '询问', zh: '你 今天 上课 吗 ？', py: 'Nǐ jīntiān shàngkè ma?', en: 'Do you have class today?' },
    { ctx: '规定', zh: '上课 的 时候 不 能 打电话 。', py: 'Shàngkè de shíhou bù néng dǎ diànhuà.', en: 'You cannot make phone calls during class.' }
  ],
  drill: [
    { t: 'choice', q: '老师来了，___ 了！', opts: ['上课', '下课', '上班', '起床'], a: 0, why: '老师来了，课开始：上课了。' },
    { t: 'order', words: ['上课', '九点', '我们'], a: '我们九点上课。', en: 'We have class at nine.' },
    { t: 'choice', q: '"上课"的反义词是：', opts: ['下课', '上学', '上班', '下班'], a: 0, why: '上课 ↔ 下课。' },
    { t: 'choice', say: '上课', q: '听录音，选拼音。', opts: ['shàngkè', 'sàngkè', 'shàngkē', 'shàngkà'], a: 0, why: '上课 shàngkè。' }
  ],
  bop: {
    b: '老师在门口打铃（或拍手），大声说："上课！"带学生起立："老师好！"',
    o: ['能听、说、认读"上课 shàngkè"', '能说"我……点上课"', '会中国学校的上课礼仪'],
    pre: '复习"课、老师好、点"。',
    p: '① 跟读 shàngkè；② 上课礼仪："上课！""起立！""老师好！""请坐！"；③ 问答："你几点上课？""你星期几上汉语课？"',
    post: '学生当"班长"喊上课口令；或做本页练习 1–4。',
    s: '板书：上课了！／ __ 点上课 ／ 上课 ↔ 下课。作业：写一写你一周的上课时间。'
  },
  act: [
    { tag: '日常活动', name: '上课礼仪', how: '每节课由一名学生当班长："上课！起立！"全班："老师好！"老师："同学们好，请坐！"' },
    { tag: 'TPR', name: '上课下课', how: '老师说"上课"学生坐好、拿出书，说"下课"学生站起来伸懒腰。' },
    { tag: '信息差', name: '课程表', how: '两人看不同的课程表，互相问"你星期二几点上课？"' }
  ],
  teach: [
    { h: '上课 / 上学', p: '"上课"是一节课开始或在课上；"上学"是去学校学习（一个阶段或每天去学校）。' },
    { h: '离合词', p: '可以说"上汉语课""上了两节课"（拓展）。' }
  ],
  err: [
    { x: '我上课汉语。', v: '我上汉语课。', why: '课名放在"上"和"课"中间。' },
    { x: '我上课在学校。', v: '我在学校上课。', why: '"在 + 地点"放在动词前面。' }
  ],
  hz: [
    { c: '上', rad: '一', radName: '一部', radMean: '——', struct: '独体字', parts: '竖 + 横 + 横', tip: '在这里是"去、开始"的意思。', fam: '有"上"的词：上班、上学、上午。' },
    { c: '课', rad: '讠', radName: '言字旁', radMean: '说话 speech', struct: '左右结构', parts: '讠 + 果', tip: '上课要说话（讠），上了课就有成果（果）。', fam: '言字旁的字：说、话、请、读。' }
  ],
  cul: ['中国学校上课前，班长喊"起立"，全班站起来说"老师好"。', '中国的中小学一节课一般四十到四十五分钟。'],
  syn: [],
  ant: [{ w: '下课', note: '一节课结束。' }],
  rel: ['下课', '课', '老师', '学生', '上学', '学校']
},

'上午': {
  pos: [['名词', 'noun']],
  zh: ['早上到中午十二点之间的时间。'],
  en: ['morning; a.m. (before noon)'],
  syl: [{ py: 'shàng', i: 'sh', f: 'ang', t: 4 }, { py: 'wǔ', i: 'w', f: 'u', t: 3 }],
  phon: [
    '第四声 + 第三声：先全降，再读低的第三声。',
    'shàng 是卷舌、后鼻音。',
    'wǔ 和"五"读音一样。'
  ],
  img: { src: 'img/shangwu.jpg', cap: "上午", by: "Dpalma01", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · View of Montreal City Hall in the early morning sun.jpg" },
  use: ['上午 + 时间：上午九点', '上午 + 做什么', '早上 → 上午 → 中午 → 下午 → 晚上'],
  ex: [
    { ctx: '时间', zh: '我 上午 九 点 上课 。', py: 'Wǒ shàngwǔ jiǔ diǎn shàngkè.', en: 'I have class at 9 a.m.' },
    { ctx: '安排', zh: '明天 上午 你 忙 吗 ？', py: 'Míngtiān shàngwǔ nǐ máng ma?', en: 'Are you busy tomorrow morning?' },
    { ctx: '活动', zh: '上午 我 在 家 看 书 。', py: 'Shàngwǔ wǒ zài jiā kàn shū.', en: 'In the morning I read at home.' },
    { ctx: '约定', zh: '我们 上午 十 点 见 。', py: 'Wǒmen shàngwǔ shí diǎn jiàn.', en: 'Let us meet at 10 a.m.' }
  ],
  drill: [
    { t: 'choice', q: '10:00 a.m. 是 ___ 十点。', opts: ['上午', '下午', '晚上', '中午'], a: 0, why: 'a.m. = 上午。' },
    { t: 'order', words: ['上午', '我', '上班', '九点'], a: '我上午九点上班。', alt: ['上午九点我上班。'], en: 'I start work at 9 a.m.' },
    { t: 'choice', q: '"上午"的反义词是：', opts: ['下午', '中午', '早上', '晚上'], a: 0, why: '上午（午前）↔ 下午（午后）。' },
    { t: 'choice', say: '上午', q: '听录音，选拼音。', opts: ['shàngwǔ', 'shàngwù', 'sàngwǔ', 'shāngwǔ'], a: 0, why: '上午 shàngwǔ。' }
  ],
  bop: {
    b: '老师画一条时间线：太阳升起 → 太阳最高 → 太阳下山。指着前半段："这是上午。"',
    o: ['能听、说、认读"上午 shàngwǔ"', '能说"上午 + 时间 + 做什么"', '能排列一天的时间词'],
    pre: '复习"早上、中午、点"。',
    p: '① 跟读 shàngwǔ；② 一天的时间线：早上 → 上午 → 中午 → 下午 → 晚上；③ 问答："你上午做什么？""明天上午你有课吗？"',
    post: '每人说一句"我上午……"；或做本页练习 1–4。',
    s: '板书：上午（午前）— 中午（12:00）— 下午（午后）。作业：写一写你明天上午的安排。'
  },
  act: [
    { tag: '游戏', name: '时间线站位', how: '地上贴"早上、上午、中午、下午、晚上"，老师说时间（"10:00"），学生跳到正确的位置。' },
    { tag: '信息差', name: '约时间', how: '两人看不同的日程表，用"你上午有时间吗？"找到共同的空闲时间。' },
    { tag: '调查', name: '上午做什么', how: '学生互相问"星期六上午你做什么？"，统计结果。' }
  ],
  teach: [
    { h: '午', p: '"午"是中午 12 点。"上午"是午前，"下午"是午后。' },
    { h: '时间顺序', p: '汉语时间从大到小：明天上午九点。' }
  ],
  err: [
    { x: '九点上午', v: '上午九点', why: '时间段在前，钟点在后。' },
    { x: 'shàngwù', v: 'shàngwǔ', why: '"午"是第三声。' }
  ],
  hz: [
    { c: '上', rad: '一', radName: '一部', radMean: '——', struct: '独体字', parts: '竖 + 横 + 横', tip: '在这里是"前"的意思：午前。', fam: '有"上"的词：上班、上课、上学。' },
    { c: '午', rad: '十', radName: '十部（有的字典归"丿"部）', radMean: '——', struct: '独体字', parts: '丿 + 一 + 十', tip: '和"牛"很像，但"午"的竖不出头。"午"是中午十二点，古代叫"午时"。', fam: '样子相近的字：牛（竖出头）、千。' }
  ],
  cul: ['古代中国把一天分成十二个时辰，中午 11–13 点叫"午时"，所以 12 点前叫"上午"，后叫"下午"。', '中国很多人有午睡的习惯，中午休息一会儿。'],
  syn: [],
  ant: [{ w: '下午', note: '中午以后。' }],
  rel: ['下午', '中午', '早上', '晚上', '点', '时间']
},

'上学': {
  pos: [['动词', 'verb']],
  zh: ['到学校学习；在学校读书。'],
  en: ['to go to school; to attend school'],
  syl: [{ py: 'shàng', i: 'sh', f: 'ang', t: 4 }, { py: 'xué', i: 'x', f: 'üe', t: 2 }],
  phon: [
    '第四声 + 第二声：先全降，再往上升。',
    'xué 的 u 是 ü（x 后面省去两点）：嘴唇要圆。',
    'sh（卷舌）和 x（舌面）要分清。'
  ],
  img: { src: 'img/shangxue.jpg', cap: "她们去上学。", by: "Bright Kwame Ayisi", lic: "CC0", from: "Wikimedia Commons · Pupils going for breakfast before school starts.jpg" },
  use: ['去 + 上学', '时间 + 上学', '在 + 学校 + 上学'],
  ex: [
    { ctx: '日常', zh: '孩子 们 去 上学 了 。', py: 'Háizimen qù shàngxué le.', en: 'The children have gone to school.' },
    { ctx: '作息', zh: '我 七 点 半 上学 。', py: 'Wǒ qī diǎn bàn shàngxué.', en: 'I leave for school at 7:30.' },
    { ctx: '询问', zh: '你 妹妹 上学 了 吗 ？', py: 'Nǐ mèimei shàngxué le ma?', en: 'Is your younger sister in school yet?' },
    { ctx: '出行', zh: '他 坐 车 去 上学 。', py: 'Tā zuò chē qù shàngxué.', en: 'He goes to school by car.' }
  ],
  drill: [
    { t: 'choice', q: '早上七点，孩子们去 ___ 。', opts: ['上学', '上班', '睡觉', '看病'], a: 0, why: '孩子去学校：上学。' },
    { t: 'order', words: ['上学', '去', '弟弟', '了'], a: '弟弟去上学了。', en: 'My little brother has gone to school.' },
    { t: 'choice', q: '"上学"和"上班"：', opts: ['学生上学，大人上班', '一样', '大人上学', '都是工作'], a: 0, why: '学生去学校，大人去工作。' },
    { t: 'choice', say: '上学', q: '听录音，选拼音。', opts: ['shàngxué', 'shàngshué', 'shàngxuè', 'sàngxué'], a: 0, why: '上学 shàngxué。' }
  ],
  bop: {
    b: '老师出示孩子背书包出门的照片："他去哪儿？——去学校。他去——上学！"',
    o: ['能听、说、认读"上学 shàngxué"', '能说"……去上学"', '分清"上学、上课、上班"'],
    pre: '复习"学校、学生、上课、上班"。',
    p: '① 跟读 shàngxué，练 xué 的嘴形；② 分类：学生——上学；老师、医生——上班；③ 问答："你小时候几点上学？""你怎么去上学？"',
    post: '看图说"他去上学／上班"；或做本页练习 1–4。',
    s: '板书：上学（学生去学校）／ 上班（去工作）／ 上课（课开始）。作业：问问家人小时候怎么去上学。'
  },
  act: [
    { tag: '游戏', name: '上什么', how: '老师出示人物（小学生、医生、老师、大学生），学生说"他去上学"或"他去上班"。' },
    { tag: '调查', name: '怎么去上学', how: '学生互相问"你怎么去上学？"（坐车、开车、走），统计结果。' },
    { tag: '情境表演', name: '早上出门', how: '"妈妈，我去上学了！""好，再见！"' }
  ],
  teach: [
    { h: '三个"上"', p: '上学（去学校）、上课（课开始）、上班（去工作）。' },
    { h: '上学了', p: '"孩子上学了"也可以表示孩子到了上学的年龄，开始读书了。' }
  ],
  err: [
    { x: '我上学学校。', v: '我去学校。 / 我去上学。', why: '"上学"后面不加地点。' },
    { x: '我爸爸去上学。（他在工作）', v: '我爸爸去上班。', why: '大人去工作用"上班"。' }
  ],
  hz: [
    { c: '上', rad: '一', radName: '一部', radMean: '——', struct: '独体字', parts: '竖 + 横 + 横', tip: '在这里是"去"的意思。', fam: '有"上"的词：上班、上课、上午。' },
    { c: '学', rad: '子', radName: '子字底', radMean: '小孩 child', struct: '上下结构', parts: '⺍ + 冖 + 子', tip: '下面是"子"（孩子），上面像房顶——孩子在屋子里学习。', fam: '有"子"的字：字、好、孩。' }
  ],
  cul: ['中国的小学生常常有家长接送上学和放学。', '中国孩子一般六岁上小学，小学六年、初中三年、高中三年。'],
  syn: [],
  ant: [{ w: '放学', py: 'fàngxué', note: '学校一天的课结束。', out: true }],
  rel: ['学校', '学生', '上课', '上班', '小学', '学习']
},

'少': {
  pos: [['形容词', 'adjective'], ['动词', 'verb']],
  zh: ['数量小，不多。', '（动词，拓展）缺：少了一个。'],
  en: ['few; little; not many', '(verb, extension) to be missing; to lack'],
  syl: [{ py: 'shǎo', i: 'sh', f: 'ao', t: 3 }],
  phon: [
    '第三声，先降后升，声音要低。',
    'sh 是卷舌音，不要读成 sǎo。',
    '韵母 ao 像英语 "how" 里的元音。'
  ],
  img: { src: 'img/shao.jpg', cap: "这儿人很少。", by: "Thank you for visiting my page（Flickr 用户名）", lic: "CC BY 2.0", from: "Wikimedia Commons · The memorial is empty but not for long, later in the day this was packed with people. (14706728736).jpg" },
  use: ['很少 / 太少', '人 / 东西 + 很少', '多少？（问数量）'],
  ex: [
    { ctx: '数量', zh: '今天 学生 很 少 。', py: 'Jīntiān xuésheng hěn shǎo.', en: 'There are few students today.' },
    { ctx: '钱', zh: '我 的 钱 太 少 了 。', py: 'Wǒ de qián tài shǎo le.', en: 'I have too little money.' },
    { ctx: '问价', zh: '这个 多少 钱 ？', py: 'Zhège duōshao qián?', en: 'How much is this?' },
    { ctx: '描述', zh: '这儿 的 人 很 少 。', py: 'Zhèr de rén hěn shǎo.', en: 'There are few people here.' }
  ],
  drill: [
    { t: 'choice', q: '商店里人很 ___ ，只有两个人。', opts: ['少', '多', '大', '贵'], a: 0, why: '只有两个人 = 很少。' },
    { t: 'order', words: ['少', '很', '这儿', '人'], a: '这儿人很少。', en: 'There are few people here.' },
    { t: 'choice', q: '"少"的反义词是：', opts: ['多', '小', '大', '好'], a: 0, why: '多 ↔ 少。' },
    { t: 'choice', say: '少', q: '听录音，选拼音。', opts: ['shǎo', 'sǎo', 'xiǎo', 'shào'], a: 0, why: '少 shǎo，第三声。' }
  ],
  bop: {
    b: '老师一只手拿很多支笔，另一只手只拿一支："这边多，这边——少。"',
    o: ['能听、说、认读"少 shǎo"', '能说"……很少"', '分清"少"和"小"'],
    pre: '复习"多、多少、很"。',
    p: '① 跟读 shǎo，对比 shǎo（少）/ xiǎo（小）；② 比较图片：这边人多，那边人少；③ 认识"多少"：多 + 少 = 问数量。',
    post: '看两张图说"……多，……少"；或做本页练习 1–4。',
    s: '板书：多 ↔ 少 ／ 大 ↔ 小 ／ 多少？作业：写三句"……很少"。'
  },
  act: [
    { tag: '游戏', name: '多还是少', how: '老师快速出示两堆东西的图片，学生指着说"这个多，那个少"。' },
    { tag: '语音', name: '少还是小', how: '老师读 shǎo / xiǎo，学生举"少"或"小"的卡片；再说"人很少""猫很小"。' },
    { tag: '调查', name: '多不多', how: '学生互相问"你的朋友多吗？""你的书多吗？"，回答"很多／很少"。' }
  ],
  teach: [
    { h: '少 / 小', p: '"少"说数量（few），"小"说大小（small）：人很少（few people）；房间很小（small room）。' },
    { h: '不能直接放名词前', p: '"很少"一般不直接放在名词前面：✗ 很少人。要说"人很少"。' }
  ],
  err: [
    { x: '很少人来。', v: '来的人很少。', why: '"很少"一般不直接放在名词前面。' },
    { x: '我的房间很少。（想说小）', v: '我的房间很小。', why: '说大小用"小"。' }
  ],
  hz: [{ c: '少', rad: '小', radName: '小字头', radMean: '小 small', struct: '上下结构', parts: '小 + 丿', tip: '"小"下面再切掉一撇——东西又小又被拿走一块，就"少"了。', fam: '有"小"的字：小、少。' }],
  cul: ['"少"还读 shào，意思是年轻：少年（teenager，超纲）。', '中国人吃饭时，主人常说"多吃点儿"，客人说"够了够了，少吃点儿"。'],
  syn: [],
  ant: [{ w: '多', note: '数量大。' }],
  rel: ['多', '多少', '小', '很', '太']
}

});
