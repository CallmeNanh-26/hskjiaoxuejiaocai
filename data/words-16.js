// HSK1 教学参考 · 第 16 批（10 词）：牛奶 女 女儿 女朋友 女士 朋友 便宜 漂亮 苹果 七
window.H1_WORDS = window.H1_WORDS || {};
Object.assign(H1_WORDS, {

'牛奶': {
  pos: [['名词', 'noun']],
  zh: ['牛的奶，是常见的饮料。'],
  en: ['milk (cow\'s milk)'],
  syl: [{ py: 'niú', i: 'n', f: 'iu', t: 2 }, { py: 'nǎi', i: 'n', f: 'ai', t: 3 }],
  phon: [
    '第二声 + 第三声：先升上去，再读低的第三声。',
    '韵母 iu 其实是 i + ou：niú 读起来像 "nyo"。',
    '两个字都是 n，不要读成 liúlǎi。'
  ],
  img: { src: 'img/niunai.jpg', cap: "牛奶", by: "FiveRings", lic: "CC BY 3.0", from: "Wikimedia Commons · Milk-bottle.jpg" },
  use: ['喝 + 牛奶', '牛奶 + 和 + 面包', '买 + 牛奶'],
  ex: [
    { ctx: '早饭', zh: '我 早上 喝 牛奶 。', py: 'Wǒ zǎoshang hē niúnǎi.', en: 'I drink milk in the morning.' },
    { ctx: '询问', zh: '你 喝 牛奶 吗 ？', py: 'Nǐ hē niúnǎi ma?', en: 'Do you drink milk?' },
    { ctx: '购物', zh: '妈妈 去 超市 买 牛奶 。', py: 'Māma qù chāoshì mǎi niúnǎi.', en: 'Mom goes to the supermarket to buy milk.' },
    { ctx: '孩子', zh: '孩子 们 都 喜欢 喝 牛奶 。', py: 'Háizimen dōu xǐhuan hē niúnǎi.', en: 'The children all like drinking milk.' }
  ],
  drill: [
    { t: 'choice', q: '早饭我吃面包，喝 ___ 。', opts: ['牛奶', '米饭', '鸡蛋', '饺子'], a: 0, why: '牛奶是喝的。' },
    { t: 'order', words: ['喝', '牛奶', '我', '喜欢'], a: '我喜欢喝牛奶。', en: 'I like drinking milk.' },
    { t: 'choice', q: '哪个搭配是对的？', opts: ['吃牛奶', '喝牛奶', '看牛奶', '穿牛奶'], a: 1, why: '牛奶是液体，用"喝"。' },
    { t: 'choice', say: '牛奶', q: '听录音，选拼音。', opts: ['niúnǎi', 'liúlǎi', 'niǔnài', 'niúnái'], a: 0, why: '牛奶 niúnǎi：第二声 + 第三声。' }
  ],
  bop: {
    b: '老师拿出一盒牛奶（或图片），学一声牛叫"哞——"，问："这是什么？——牛奶！"',
    o: ['能听、说、认读"牛奶 niúnǎi"', '能说"我喝牛奶"', '能说出自己的早饭'],
    pre: '复习"喝、茶、水"和早饭的词（面包、鸡蛋）。',
    p: '① 跟读 niú、nǎi、niúnǎi，注意 n 和 l；② 吃还是喝：牛奶、面包、茶、鸡蛋；③ 两人问答："你早上喝什么？""我喝牛奶。"',
    post: '全班调查：早上喝牛奶、喝茶、喝水的人各有几个；或做本页练习 1–4。',
    s: '板书：喝牛奶 ／ 吃面包、吃鸡蛋。作业：用中文写出明天的早饭。'
  },
  act: [
    { tag: 'TPR', name: '吃还是喝', how: '老师说食物或饮料，学生做"吃"或"喝"的动作：牛奶——喝；面包——吃；茶——喝。' },
    { tag: '调查', name: '早饭喝什么', how: '学生互相问"你早上喝什么？"，统计结果并报告："……个人喝牛奶。"' },
    { tag: '情境表演', name: '早饭店', how: '"你要什么？""一个包子，一个鸡蛋，还要牛奶。""好，十块钱。"' }
  ],
  teach: [
    { h: '构词', p: '牛 + 奶 = 牛的奶。"牛"单独的意思是 cow（超纲）。' },
    { h: '量词', p: '一杯牛奶、一瓶牛奶（杯、瓶超纲）。HSK1 阶段可以说"我要牛奶"。' }
  ],
  err: [
    { x: '我吃牛奶。', v: '我喝牛奶。', why: '液体用"喝"。' },
    { x: 'liúlǎi', v: 'niúnǎi', why: 'n 和 l 要分清。' }
  ],
  hz: [
    { c: '牛', rad: '牛', radName: '牛部', radMean: '牛 cow', struct: '独体字', parts: '丿 + 一 + 一 + 丨', tip: '像一头牛的正面：上面一撇是牛角，中间一竖是牛的身体。注意竖要穿过两横、出头。', fam: '有"牛"的字：物、特（牜旁，超纲）。' },
    { c: '奶', rad: '女', radName: '女字旁', radMean: '女人 woman', struct: '左右结构', parts: '女 + 乃', tip: '左边"女"——妈妈喂宝宝吃奶；右边"乃 nǎi"表示读音。', fam: '女字旁的字：妈、姐、妹、好、她。"奶奶"是爸爸的妈妈（超纲）。' }
  ],
  cul: ['以前中国人喝牛奶不多，现在很多孩子早上都喝牛奶。也有人喜欢喝豆浆（超纲）。', '"奶茶"在中国非常流行，街上到处都有奶茶店（超纲）。'],
  syn: [{ w: '奶', py: 'nǎi', note: '口语里常只说"奶"。', out: true }],
  ant: [],
  rel: ['喝', '茶', '水', '面包', '鸡蛋', '早饭']
},

'女': {
  pos: [['形容词', 'adjective']],
  zh: ['女性的（和"男"相对）。'],
  en: ['female; woman'],
  syl: [{ py: 'nǚ', i: 'n', f: 'ü', t: 3 }],
  phon: [
    '第三声，先降后升，声音要低。',
    '韵母是 ü：嘴唇圆起来说 "ee"。拼音写 nǚ，两点不能省。',
    '对比 nǚ（女）和 nǔ（努，超纲）：嘴唇的圆和舌头的位置不一样。'
  ],
  img: { src: 'img/nv.jpg', cap: "女", by: "Ji-Elle", lic: "CC BY-SA 3.0", from: "Wikimedia Commons · Nizwa-Toilet signs (2).jpg" },
  use: ['女 + 名词：女老师、女学生、女朋友', '是女的', '男 ↔ 女'],
  ex: [
    { ctx: '身份', zh: '她 是 女 老师 。', py: 'Tā shì nǚ lǎoshī.', en: 'She is a female teacher.' },
    { ctx: '学校', zh: '学校 里 有 很 多 女 学生 。', py: 'Xuéxiào lǐ yǒu hěn duō nǚ xuésheng.', en: 'There are many female students at the school.' },
    { ctx: '询问', zh: '你 的 医生 是 女 的 吗 ？', py: 'Nǐ de yīshēng shì nǚ de ma?', en: 'Is your doctor a woman?' },
    { ctx: '家人', zh: '我 家 有 两 个 女 孩子 。', py: 'Wǒ jiā yǒu liǎng gè nǚ háizi.', en: 'There are two girls in my family.' }
  ],
  drill: [
    { t: 'choice', q: '妈妈和姐姐都是 ___ 的。', opts: ['女', '男', '大', '老'], a: 0, why: '妈妈、姐姐是女的。' },
    { t: 'order', words: ['是', '女', '她', '老师'], a: '她是女老师。', en: 'She is a female teacher.' },
    { t: 'choice', q: '"女"的拼音怎么写？', opts: ['nu', 'nǚ', 'nǔ', 'nü'], a: 1, why: 'nǚ：ü 的两点和声调都要写。' },
    { t: 'choice', say: '女', q: '听录音，选拼音。', opts: ['nǚ', 'nǔ', 'lǚ', 'nǐ'], a: 0, why: '女 nǚ，第三声。' }
  ],
  bop: {
    b: '老师出示厕所门上"男""女"两个标志，指着"女"问："这个是什么意思？"',
    o: ['能听、说、认读"女 nǚ"', '能读准 ü', '能说"女 + 名词"'],
    pre: '复习"男、妈妈、姐姐、妹妹"。',
    p: '① 跟读 nǚ，练 ü 的嘴形（先说 i，嘴唇慢慢圆起来）；② 分类：妈妈、姐姐、妹妹、女儿 → 女；③ 数一数："我们有……个男学生，……个女学生。"',
    post: '看标志图片说"男"还是"女"；或做本页练习 1–4。',
    s: '板书：男 ↔ 女 ／ 女老师、女学生、女朋友 ／ nǚ（ü 两点）。作业：写一写家里有几个女的。'
  },
  act: [
    { tag: '语音', name: 'ü 的嘴形', how: '学生先说"yi——"，保持舌头不动，慢慢把嘴唇圆起来，就是 ü。再加声母读 nǚ、lǚ（旅，超纲）。' },
    { tag: '游戏', name: '男女分类', how: '老师说家庭称呼，男称呼学生举左手，女称呼举右手：哥哥、女儿、爸爸、姐姐……' },
    { tag: '文化体验', name: '认标志', how: '出示中国厕所、更衣室的标志照片，学生判断"男"还是"女"。' }
  ],
  teach: [
    { h: '女 + 名词', p: '"女"一般不单用，放在名词前面：女老师；或说"女的"：她是女的。' },
    { h: 'ü 的写法', p: 'n、l 后面的 ü 两点不能省（nǚ、lǜ），因为 nu、lu 是另外的音。' }
  ],
  err: [
    { x: 'nu / nǔ', v: 'nǚ', why: '韵母是 ü，两点不能省。' },
    { x: '她是女。', v: '她是女的。', why: '单独做谓语要加"的"。' }
  ],
  hz: [{ c: '女', rad: '女', radName: '女部', radMean: '女人 woman', struct: '独体字', parts: '撇点 + 撇 + 横', tip: '古字像一个女人跪坐着、两手交叉放在胸前。只有三画：撇点、撇、横。', fam: '女字旁的字很多：妈、姐、妹、好、她、奶（牛奶）。' }],
  cul: ['很多和女性有关的字都有"女"字旁：妈、姐、妹、她、奶。', '中国厕所门上常写"男""女"两个字，这是生活中最常见的汉字之一。'],
  syn: [],
  ant: [{ w: '男', note: '男性的。' }],
  rel: ['男', '女儿', '女朋友', '女士', '妈妈', '姐姐', '妹妹']
},

'女儿': {
  pos: [['名词', 'noun']],
  zh: ['女性的孩子（对父母来说）。'],
  en: ['daughter'],
  syl: [{ py: 'nǚ', i: 'n', f: 'ü', t: 3 }, { py: 'ér', i: '', f: 'er', t: 2 }],
  phon: [
    '第三声 + 第二声："女"只读前半段（低降），"儿"往上升。',
    '"儿"在这里是完整的一个音节 ér，不是儿化。拼音写 nǚ\'ér，中间有隔音符号。',
    'ér 的舌头要卷起来。'
  ],
  img: { src: 'img/nver.jpg', cap: "爸爸和女儿", by: "Caroline Hernandez carolinehdz", lic: "CC0", from: "Wikimedia Commons · Father and Daughter (Unsplash).jpg" },
  use: ['我 / 他 + 女儿（常省略"的"）', '数词 + 个 + 女儿', '女儿 + 数词 + 岁'],
  ex: [
    { ctx: '家庭', zh: '我 有 一 个 女儿 。', py: 'Wǒ yǒu yí gè nǚ\'ér.', en: 'I have a daughter.' },
    { ctx: '年龄', zh: '他 女儿 五 岁 。', py: 'Tā nǚ\'ér wǔ suì.', en: 'His daughter is five years old.' },
    { ctx: '上学', zh: '我 女儿 是 小学生 。', py: 'Wǒ nǚ\'ér shì xiǎoxuéshēng.', en: 'My daughter is a primary school student.' },
    { ctx: '称赞', zh: '你 女儿 真 漂亮 。', py: 'Nǐ nǚ\'ér zhēn piàoliang.', en: 'Your daughter is really pretty.' }
  ],
  drill: [
    { t: 'choice', q: '王先生有一个儿子和一个 ___ 。', opts: ['女儿', '女士', '女朋友', '妈妈'], a: 0, why: '儿子 ↔ 女儿。' },
    { t: 'order', words: ['女儿', '我', '八岁'], a: '我女儿八岁。', en: 'My daughter is eight.' },
    { t: 'choice', q: '"女儿"有几个音节？', opts: ['一个', '两个', '三个', '没有'], a: 1, why: 'nǚ + ér，两个音节（不是儿化）。' },
    { t: 'choice', say: '女儿', q: '听录音，选拼音。', opts: ['nǚ\'ér', 'nǚr', 'nǔ\'ér', 'lǚ\'ér'], a: 0, why: '女儿 nǚ\'ér。' }
  ],
  bop: {
    b: '老师出示一张一家三口的照片："这是爸爸、妈妈。这个孩子是女孩子——她是他们的女儿。"',
    o: ['能听、说、认读"女儿 nǚ\'ér"', '能说"我 / 他有……个女儿"', '分清"女儿"和"儿子"'],
    pre: '复习"儿子、孩子、女"。',
    p: '① 跟读 nǚ、ér、nǚ\'ér；② 看家庭照片说"他有一个儿子，两个女儿"；③ 问答："他有女儿吗？""她女儿几岁？"',
    post: '介绍一个家庭（照片或画）；或做本页练习 1–4。',
    s: '板书：儿子（男）↔ 女儿（女）＝ 孩子。作业：画一个家庭，写上"儿子、女儿"。'
  },
  act: [
    { tag: '看图说话', name: '谁的女儿', how: '用卡通或名人家庭图，学生说"她是……的女儿"。' },
    { tag: '游戏', name: '儿子还是女儿', how: '老师出示孩子的图片，学生说"这是他们的儿子"或"这是他们的女儿"。' },
    { tag: '情境表演', name: '介绍孩子', how: '"这是我女儿，她五岁。""你好，小朋友！"' }
  ],
  teach: [
    { h: '不是儿化', p: '"女儿"的"儿"读完整的 ér，和"哪儿 nǎr"的儿化不一样。' },
    { h: '隔音符号', p: 'ér 以 e 开头，前面有音节时要加隔音符号：nǚ\'ér。' }
  ],
  err: [
    { x: 'nǚr', v: 'nǚ\'ér', why: '"女儿"不是儿化，读两个音节。' },
    { x: '我有二个女儿。', v: '我有两个女儿。', why: '量词前用"两"。' }
  ],
  hz: [
    { c: '女', rad: '女', radName: '女部', radMean: '女人 woman', struct: '独体字', parts: '撇点 + 撇 + 横', tip: '像一个跪坐着、两手交叉的女人。', fam: '女字旁的字：妈、姐、妹、好、她。' },
    { c: '儿', rad: '儿', radName: '儿部', radMean: '孩子 child', struct: '独体字', parts: '撇 + 竖弯钩', tip: '只有两画，像一个小孩的两条腿。"儿"本来就是孩子的意思。', fam: '有"儿"的词：儿子、女儿。' }
  ],
  cul: ['中国人常说女儿是爸爸妈妈的"小棉袄"（贴心的小棉衣），意思是女儿很贴心、会照顾父母。', '"儿女"合在一起是"孩子们"的意思。'],
  syn: [],
  ant: [{ w: '儿子', note: '男性的孩子。' }],
  rel: ['儿子', '孩子', '女', '妈妈', '爸爸', '家人']
},

'女朋友': {
  pos: [['名词', 'noun']],
  zh: ['恋爱关系中的女性一方。'],
  en: ['girlfriend'],
  syl: [{ py: 'nǚ', i: 'n', f: 'ü', t: 3 }, { py: 'péng', i: 'p', f: 'eng', t: 2 }, { py: 'you', i: 'y', f: 'ou', t: 0 }],
  phon: [
    '第三声 + 第二声 + 轻声："女"读低降，"朋"上升，"友"又轻又短。',
    'nǚ 的 ü 要圆唇。',
    'péng 是后鼻音，p 要送气。'
  ],
  img: { src: 'img/nvpengyou.jpg', cap: "她是他的女朋友。", by: "Adam Jones from Kelowna, BC, Canada", lic: "CC BY-SA 2.0", from: "Wikimedia Commons · Young Couple in Park - Yangon - Myanmar (Burma) (11774382796).jpg" },
  use: ['我的 / 他的 + 女朋友', '有 / 没有 + 女朋友', '和 + 女朋友 + 动词'],
  ex: [
    { ctx: '介绍', zh: '她 是 我 的 女朋友 。', py: 'Tā shì wǒ de nǚpéngyou.', en: 'She is my girlfriend.' },
    { ctx: '询问', zh: '你 有 女朋友 吗 ？', py: 'Nǐ yǒu nǚpéngyou ma?', en: 'Do you have a girlfriend?' },
    { ctx: '职业', zh: '他 女朋友 是 老师 。', py: 'Tā nǚpéngyou shì lǎoshī.', en: 'His girlfriend is a teacher.' },
    { ctx: '约会', zh: '我 和 女朋友 去 吃 饭 。', py: 'Wǒ hé nǚpéngyou qù chī fàn.', en: 'I am going to eat with my girlfriend.' }
  ],
  drill: [
    { t: 'choice', q: '她是我哥哥的 ___ 。', opts: ['女朋友', '男朋友', '女儿', '妈妈'], a: 0, why: '哥哥的女性恋人是"女朋友"。' },
    { t: 'order', words: ['女朋友', '漂亮', '他的', '很'], a: '他的女朋友很漂亮。', en: 'His girlfriend is pretty.' },
    { t: 'choice', q: '"女朋友"和"女的朋友"：', opts: ['意思一样', '"女朋友"是 girlfriend，"女的朋友"是 female friend', '都是 girlfriend', '都是 female friend'], a: 1, why: '中间加"的"意思就不一样了。' },
    { t: 'choice', say: '女朋友', q: '听录音，选拼音。', opts: ['nǚpéngyou', 'nǔpéngyǒu', 'lǚpéngyou', 'nǚpényou'], a: 0, why: '女朋友 nǚpéngyou。' }
  ],
  bop: {
    b: '老师出示一张卡通情侣的图，指着男孩问："他是她的什么？——男朋友。"指着女孩："她是他的——女朋友。"',
    o: ['能听、说、认读"女朋友 nǚpéngyou"', '能说"……是……的女朋友"', '分清"女朋友"和"女的朋友"'],
    pre: '复习"男朋友、朋友、女"。',
    p: '① 跟读 nǚ、péngyou、nǚpéngyou；② 关系图说话："她是他的女朋友。"；③ 对比：女朋友 / 女的朋友。',
    post: '看图介绍人物关系；或做本页练习 1–4。',
    s: '板书：男朋友 ↔ 女朋友 ／ 女朋友 ≠ 女的朋友。作业：用卡通或电影人物写两句"……是……的女朋友"。'
  },
  act: [
    { tag: '看图说话', name: '关系图', how: '用电影或卡通人物画关系图，学生说"她是他的女朋友""他是她的哥哥"。' },
    { tag: '游戏', name: '加"的"还是不加', how: '老师说英语（girlfriend / female friend / boyfriend），学生说出正确的汉语。' },
    { tag: '情境表演', name: '介绍朋友', how: '"这是我的女朋友，她叫小月。""你好！认识你很高兴。"（用假名字。）' }
  ],
  teach: [
    { h: '注意隐私', p: '课堂上用卡通、电影人物或假设的情境练习，不追问学生的真实感情生活。' },
    { h: '有"的"没"的"', p: '"女朋友"= girlfriend；"女的朋友"= a friend who is female。' }
  ],
  err: [
    { x: '她是我女的朋友。（想说 girlfriend）', v: '她是我女朋友。', why: '加"的"意思就变了。' },
    { x: 'nǔpéngyou', v: 'nǚpéngyou', why: '"女"是 ü，要圆唇。' }
  ],
  hz: [
    { c: '女', rad: '女', radName: '女部', radMean: '女人 woman', struct: '独体字', parts: '撇点 + 撇 + 横', tip: '像一个跪坐着、两手交叉的女人。', fam: '女字旁的字：妈、姐、妹、好、她。' },
    { c: '朋', rad: '月', radName: '月字旁', radMean: '月亮 / 肉', struct: '左右结构', parts: '月 + 月', tip: '两个"月"并排——好朋友手拉手。', fam: '有"月"的字：有、明、期。' },
    { c: '友', rad: '又', radName: '又部', radMean: '手 hand', struct: '半包围结构', parts: '𠂇 + 又', tip: '古字是两只手握在一起——朋友握手。', fam: '有"又"的字：对、汉、没。' }
  ],
  cul: ['中国的情人节有两个：2 月 14 日和农历七月七日的"七夕"。', '"女朋友"在网上常简称"女友"。'],
  syn: [{ w: '女友', py: 'nǚyǒu', note: '简称，书面和网上常用。', out: true }],
  ant: [{ w: '男朋友', note: 'boyfriend。' }],
  rel: ['女', '朋友', '男朋友', '爱', '喜欢']
},

'女士': {
  pos: [['名词', 'noun']],
  zh: ['对女性的尊称。'],
  en: ['lady; Ms.; madam'],
  syl: [{ py: 'nǚ', i: 'n', f: 'ü', t: 3 }, { py: 'shì', i: 'sh', f: '-i', t: 4 }],
  phon: [
    '第三声 + 第四声："女"只读前半段（低降），"士"全降。',
    'shì 是卷舌音，韵母不是 "ee"。',
    'nǚ 的 ü 要圆唇。'
  ],
  img: { src: 'img/nvshi.jpg', cap: "女士", by: "Daniela_oliiver-637925", lic: "CC0", from: "Wikimedia Commons · Black woman with women's suit 4.jpg（已裁剪）" },
  use: ['姓 + 女士：李女士（姓超纲时可换成学生的姓）', '女士们，先生们', '这位女士'],
  ex: [
    { ctx: '演讲', zh: '女士 们 ， 先生 们 ， 你们 好 ！', py: 'Nǚshìmen, xiānshengmen, nǐmen hǎo!', en: 'Ladies and gentlemen, hello!' },
    { ctx: '服务', zh: '女士 ， 您 要 喝 什么 ？', py: 'Nǚshì, nín yào hē shénme?', en: 'Madam, what would you like to drink?' },
    { ctx: '介绍', zh: '那个 女士 是 我们 的 老师 。', py: 'Nàge nǚshì shì wǒmen de lǎoshī.', en: 'That lady is our teacher.' },
    { ctx: '询问', zh: '请问 ， 女士 ， 您 叫 什么 名字 ？', py: 'Qǐngwèn, nǚshì, nín jiào shénme míngzi?', en: 'Excuse me, madam, what is your name?' }
  ],
  drill: [
    { t: 'choice', q: '___ 们，先生们，你们好！', opts: ['女士', '女儿', '女朋友', '妹妹'], a: 0, why: '"女士们，先生们"是正式场合的开场白。' },
    { t: 'order', words: ['女士', '请', '坐'], a: '女士，请坐。', en: 'Please have a seat, madam.' },
    { t: 'choice', q: '"女士"的反义词（对男性的尊称）是：', opts: ['先生', '男朋友', '儿子', '老师'], a: 0, why: '女士 ↔ 先生。' },
    { t: 'choice', say: '女士', q: '听录音，选拼音。', opts: ['nǚshì', 'nǚsì', 'nǔshì', 'nǚshí'], a: 0, why: '女士 nǚshì。' }
  ],
  bop: {
    b: '老师模仿主持人，对全班鞠躬："女士们，先生们，晚上好！"学生笑起来，老师问："女士是谁？先生是谁？"',
    o: ['能听、说、认读"女士 nǚshì"', '能用"女士们，先生们"开场', '知道"女士"是尊称'],
    pre: '复习"先生、女、您"。',
    p: '① 跟读 nǚ、shì、nǚshì；② 称呼练习：老师出示人物，学生说"……先生""……女士"；③ 服务员情境："女士，您要什么？"',
    post: '学生轮流当主持人，用"女士们，先生们"开场；或做本页练习 1–4。',
    s: '板书：女士 ↔ 先生 ／ 女士们，先生们 ／ 姓 + 女士。作业：看一段中文视频，听听有没有"女士们，先生们"。'
  },
  act: [
    { tag: '情境表演', name: '主持人', how: '学生轮流上台说"女士们，先生们，你们好！我叫……"，像主持晚会一样。' },
    { tag: '情境表演', name: '饭店服务员', how: '服务员对客人说"女士，请坐。""先生，您要喝什么？"' },
    { tag: '游戏', name: '尊称配对', how: '老师说"李 + 男"，学生说"李先生"；"王 + 女"，学生说"王女士"。' }
  ],
  teach: [
    { h: '正式称呼', p: '"女士"用在正式场合，对不认识的成年女性也可以用。日常口语里常叫"阿姨、小姐"等（超纲）。' },
    { h: '姓 + 女士', p: '和"先生"一样，姓放在前面：李女士。' }
  ],
  err: [
    { x: '女士李', v: '李女士', why: '姓放在前面。' },
    { x: 'nǚsì', v: 'nǚshì', why: '"士"是卷舌音。' }
  ],
  hz: [
    { c: '女', rad: '女', radName: '女部', radMean: '女人 woman', struct: '独体字', parts: '撇点 + 撇 + 横', tip: '像一个跪坐着、两手交叉的女人。', fam: '女字旁的字：妈、姐、妹、好、她。' },
    { c: '士', rad: '士', radName: '士部', radMean: '读书人 scholar', struct: '独体字', parts: '十 + 一', tip: '上横长、下横短。对比"土"：上横短、下横长。"士"原来是有学问、有身份的人，所以"女士"是尊称。', fam: '样子相近的字：土。' }
  ],
  cul: ['"女士"是比较正式、礼貌的称呼，在信件、广播、演讲里很常用。', '飞机和火车上的广播常以"女士们，先生们"开头。'],
  syn: [],
  ant: [{ w: '先生', note: '对男性的尊称。' }],
  rel: ['先生', '女', '您', '请', '你们']
},

'朋友': {
  pos: [['名词', 'noun']],
  zh: ['关系好、常常在一起的人。'],
  en: ['friend'],
  syl: [{ py: 'péng', i: 'p', f: 'eng', t: 2 }, { py: 'you', i: 'y', f: 'ou', t: 0 }],
  phon: [
    '第二声 + 轻声："朋"往上升，"友"又轻又短。',
    'p 是送气音，要有一口气出来，不要读成 béng。',
    'péng 是后鼻音 -ng。'
  ],
  img: { src: 'img/pengyou.jpg', cap: "我们是好朋友。", by: "Ahmed Mo Abd Elaaty", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Two friends sitting together, chatting and laughing.jpg" },
  use: ['我的 / 好 + 朋友', '数词 + 个 + 朋友', '和 + 朋友 + 动词', '中国朋友'],
  ex: [
    { ctx: '介绍', zh: '他 是 我 的 朋友 。', py: 'Tā shì wǒ de péngyou.', en: 'He is my friend.' },
    { ctx: '数量', zh: '我 有 很 多 中国 朋友 。', py: 'Wǒ yǒu hěn duō Zhōngguó péngyou.', en: 'I have many Chinese friends.' },
    { ctx: '活动', zh: '我 和 朋友 去 看 电影 。', py: 'Wǒ hé péngyou qù kàn diànyǐng.', en: 'I am going to see a movie with my friend.' },
    { ctx: '称赞', zh: '我们 是 好 朋友 。', py: 'Wǒmen shì hǎo péngyou.', en: 'We are good friends.' }
  ],
  drill: [
    { t: 'choice', q: '我们常常一起玩，我们是好 ___ 。', opts: ['朋友', '老师', '医生', '先生'], a: 0, why: '常常一起玩的人是朋友。' },
    { t: 'order', words: ['朋友', '是', '我们', '好'], a: '我们是好朋友。', en: 'We are good friends.' },
    { t: 'choice', q: '"我有三 ___ 朋友。"', opts: ['个', '口', '本', '只'], a: 0, why: '朋友用量词"个"。' },
    { t: 'choice', say: '朋友', q: '听录音，选拼音。', opts: ['péngyou', 'béngyou', 'péngyǒu', 'pényou'], a: 0, why: '朋友 péngyou："友"读轻声。' }
  ],
  bop: {
    b: '老师和一位学生手拉手站在一起："我们是——朋友！"让全班也和旁边的人手拉手说一遍。',
    o: ['能听、说、认读"朋友 péngyou"', '能说"他是我的朋友"', '能说"我和朋友……"'],
    pre: '复习"同学、和、我们"。',
    p: '① 跟读 péng、péngyou，注意送气和轻声；② 介绍朋友："这是我的朋友，他叫……"；③ 两人问答："你有中国朋友吗？""你常常和朋友做什么？"',
    post: '每人介绍一个好朋友（名字、哪国人、喜欢什么）；或做本页练习 1–4。',
    s: '板书：我的朋友 ／ 好朋友 ／ 和朋友 + 动词。作业：用中文写三句话介绍你的好朋友。'
  },
  act: [
    { tag: '歌曲', name: '《找朋友》', how: '学唱儿歌《找朋友》："找呀找呀找朋友，找到一个好朋友，敬个礼，握握手，你是我的好朋友。"边唱边找搭档。' },
    { tag: '情境表演', name: '介绍朋友', how: '三人一组："这是我的朋友，他叫……。""你好！认识你很高兴！"' },
    { tag: '调查', name: '和朋友做什么', how: '学生互相问"你常常和朋友做什么？"，统计最受欢迎的活动。' }
  ],
  teach: [
    { h: '朋友 / 同学', p: '"同学"是在一个学校或班里学习的人，"朋友"是关系好的人。同学可以是朋友，朋友不一定是同学。' },
    { h: '小朋友', p: '"小朋友"是对小孩子的亲切称呼，不是"小的朋友"。' }
  ],
  err: [
    { x: 'péngyǒu', v: 'péngyou', why: '"友"读轻声。' },
    { x: '我有三个朋友们。', v: '我有三个朋友。', why: '有数量词时不加"们"。' }
  ],
  hz: [
    { c: '朋', rad: '月', radName: '月字旁', radMean: '月亮 / 肉', struct: '左右结构', parts: '月 + 月', tip: '两个"月"并排站在一起——好朋友手拉手。左边"月"的最后一笔是撇。', fam: '有"月"的字：有、明、期（星期）。' },
    { c: '友', rad: '又', radName: '又部', radMean: '手 hand', struct: '半包围结构', parts: '𠂇 + 又', tip: '古字是两只手（𠂇 和 又）握在一起——朋"友"握手。', fam: '有"又"的字：对、汉、没。' }
  ],
  cul: ['孔子说："有朋自远方来，不亦乐乎？"——有朋友从远方来看我，不是很快乐吗？这是中国人最熟悉的一句话之一。', '中国人常说"多个朋友多条路"：朋友多，办法就多。'],
  syn: [{ w: '同学', note: '一起学习的人。' }],
  ant: [],
  rel: ['同学', '男朋友', '女朋友', '小朋友', '认识', '和']
},

'便宜': {
  pos: [['形容词', 'adjective']],
  zh: ['价钱低，不贵。'],
  en: ['cheap; inexpensive'],
  syl: [{ py: 'pián', i: 'p', f: 'ian', t: 2 }, { py: 'yi', i: 'y', f: 'i', t: 0 }],
  phon: [
    '第二声 + 轻声："便"往上升，"宜"又轻又短。',
    '"便"在这里读 pián，不读 biàn（方便的"便"，超纲）。',
    'p 是送气音。'
  ],
  img: { src: 'img/pianyi.jpg', cap: "很便宜！", by: "Retired electrician", lic: "CC0", from: "Wikimedia Commons · Two cuts of cheese marked down 50 percent.jpg" },
  use: ['很 / 真 / 非常 + 便宜', '便宜一点儿吧！（讲价）', '不便宜'],
  ex: [
    { ctx: '购物', zh: '这 件 衣服 很 便宜 。', py: 'Zhè jiàn yīfu hěn piányi.', en: 'This piece of clothing is cheap.' },
    { ctx: '讲价', zh: '太 贵 了 ， 便宜 一点儿 吧 。', py: 'Tài guì le, piányi yìdiǎnr ba.', en: 'Too expensive, make it a bit cheaper.' },
    { ctx: '评价', zh: '那个 商店 的 东西 都 很 便宜 。', py: 'Nàge shāngdiàn de dōngxi dōu hěn piányi.', en: 'Everything in that shop is cheap.' },
    { ctx: '询问', zh: '苹果 便宜 吗 ？', py: 'Píngguǒ piányi ma?', en: 'Are the apples cheap?' }
  ],
  drill: [
    { t: 'choice', q: '这个手机一百块，很 ___ 。', opts: ['便宜', '贵', '冷', '远'], a: 0, why: '价钱低 = 便宜。' },
    { t: 'order', words: ['便宜', '一点儿', '吧'], a: '便宜一点儿吧。', en: 'Make it a bit cheaper.' },
    { t: 'choice', q: '"便宜"的反义词是：', opts: ['贵', '大', '多', '好'], a: 0, why: '便宜 ↔ 贵。' },
    { t: 'choice', say: '便宜', q: '听录音，选拼音。', opts: ['piányi', 'biànyí', 'piànyì', 'piányí'], a: 0, why: '便宜 piányi："宜"读轻声。' }
  ],
  bop: {
    b: '老师举起一支笔："这个一百块。"学生惊讶。"不对不对，一块钱！——很便宜！"',
    o: ['能听、说、认读"便宜 piányi"', '能说"很便宜 / 不便宜"', '会用"便宜一点儿吧"讲价'],
    pre: '复习"贵、多少钱、块"。',
    p: '① 跟读 pián、piányi；② 看"东西 + 价钱"卡片，学生判断"贵"还是"便宜"；③ 讲价对话："多少钱？""五十块。""太贵了，便宜一点儿吧！""四十吧。"',
    post: '分组表演讲价；或做本页练习 1–4。',
    s: '板书：便宜 ↔ 贵 ／ 便宜一点儿吧！作业：比较两家店同一样东西的价钱，说"……便宜"。'
  },
  act: [
    { tag: '情境表演', name: '讲价大赛', how: '一人当卖家，一人当买家，用"太贵了""便宜一点儿吧"讲价，看谁买得最便宜。' },
    { tag: '游戏', name: '贵还是便宜', how: '老师出示东西和价钱（飞机票 100 块、一个苹果 50 块），学生说"很便宜！"或"太贵了！"' },
    { tag: '调查', name: '哪儿便宜', how: '学生互相问"你在哪儿买衣服？那儿便宜吗？"' }
  ],
  teach: [
    { h: '多音字', p: '"便"读 pián 只在"便宜"里；其他时候多读 biàn（方便，超纲）。' },
    { h: '讲价用语', p: '"便宜一点儿吧"是最实用的讲价句子。注意"一点儿"放在形容词后面。' }
  ],
  err: [
    { x: 'biànyí', v: 'piányi', why: '在"便宜"里读 pián。' },
    { x: '一点儿便宜吧。', v: '便宜一点儿吧。', why: '"一点儿"放在形容词后面。' }
  ],
  hz: [
    { c: '便', rad: '亻', radName: '单人旁', radMean: '人 person', struct: '左右结构', parts: '亻 + 更', tip: '左边"亻"是人，右边是"更"——让人更方便，就是"便"。', fam: '单人旁的字：你、他、们、住、做、件。' },
    { c: '宜', rad: '宀', radName: '宝盖头', radMean: '房子 roof, house', struct: '上下结构', parts: '宀 + 且', tip: '房子（宀）里放着东西（且）——合适、适宜。', fam: '宝盖头的字：家、字、客（不客气）。' }
  ],
  cul: ['"便宜没好货"是中国的俗语：太便宜的东西质量常常不好。', '"占便宜"是得到额外好处的意思（超纲）。'],
  syn: [],
  ant: [{ w: '贵', note: '价钱高。' }],
  rel: ['贵', '钱', '多少', '买', '卖', '块', '一点儿']
},

'漂亮': {
  pos: [['形容词', 'adjective']],
  zh: ['好看，美丽。', '（事情）做得很好：这件事做得很漂亮（拓展）。'],
  en: ['pretty; beautiful', '(extension) well done; splendid'],
  syl: [{ py: 'piào', i: 'p', f: 'iao', t: 4 }, { py: 'liang', i: 'l', f: 'iang', t: 0 }],
  phon: [
    '第四声 + 轻声："漂"全降，"亮"又轻又短。',
    'p 是送气音；iao 一口气滑过去。',
    '"亮"是后鼻音 -ng，读轻声。'
  ],
  img: { src: 'img/piaoliang.jpg', cap: "真漂亮！", by: "Lewenslus", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Flowers in a beautiful garden.jpg（已裁剪）" },
  use: ['很 / 真 / 非常 + 漂亮', '漂亮 + 的 + 名词', '人 / 衣服 / 地方 + 很漂亮'],
  ex: [
    { ctx: '称赞', zh: '你 的 衣服 真 漂亮 。', py: 'Nǐ de yīfu zhēn piàoliang.', en: 'Your clothes are really pretty.' },
    { ctx: '描述', zh: '她 很 漂亮 。', py: 'Tā hěn piàoliang.', en: 'She is beautiful.' },
    { ctx: '地方', zh: '这儿 非常 漂亮 。', py: 'Zhèr fēicháng piàoliang.', en: 'It is very beautiful here.' },
    { ctx: '写字', zh: '你 写 的 汉字 很 漂亮 。', py: 'Nǐ xiě de Hànzì hěn piàoliang.', en: 'The characters you write are beautiful.' }
  ],
  drill: [
    { t: 'choice', q: '这个地方很 ___ ，我很喜欢。', opts: ['漂亮', '便宜', '冷', '忙'], a: 0, why: '地方好看 = 漂亮。' },
    { t: 'order', words: ['漂亮', '真', '你的', '衣服'], a: '你的衣服真漂亮。', en: 'Your clothes are really pretty.' },
    { t: 'choice', q: '"漂亮"和"好看"：', opts: ['意思差不多', '意思相反', '"漂亮"是动词', '"好看"只能说电影'], a: 0, why: '说外表时两个词意思差不多。' },
    { t: 'choice', say: '漂亮', q: '听录音，选拼音。', opts: ['piàoliang', 'biàoliang', 'piàoliàng', 'piāoliang'], a: 0, why: '漂亮 piàoliang："亮"读轻声。' }
  ],
  bop: {
    b: '老师出示一张美丽的风景照片，做出很惊喜的样子："哇——真漂亮！"',
    o: ['能听、说、认读"漂亮 piàoliang"', '能用"真漂亮"称赞', '能描述人、衣服、地方'],
    pre: '复习"好看、很、真"。',
    p: '① 跟读 piào、liang、piàoliang；② 看图称赞：衣服、花、城市、汉字；③ 两人互相称赞："你的……真漂亮！""谢谢！"',
    post: '每人说一个觉得很漂亮的地方；或做本页练习 1–4。',
    s: '板书：很漂亮 ／ 真漂亮 ／ 漂亮 ≈ 好看。作业：拍一张很漂亮的照片，用中文写一句话。'
  },
  act: [
    { tag: '情境表演', name: '称赞与回应', how: '两人互相称赞："你的字真漂亮！""哪里哪里。／谢谢！"讨论两种回答的不同。' },
    { tag: '看图说话', name: '漂亮的地方', how: '出示中国的风景照片（桂林、西湖、长城），学生说"这儿很漂亮"并选出最喜欢的。' },
    { tag: '游戏', name: '漂亮的汉字', how: '每人写一个学过的汉字，全班投票谁写得最漂亮。' }
  ],
  teach: [
    { h: '使用范围', p: '可以说人（多说女性和孩子）、衣服、东西、地方，也可以说字写得漂亮。说男性多用"帅"（超纲）。' },
    { h: '漂亮 / 好看', p: '说外表时差不多；"好看"还可以说电影、书有意思。' }
  ],
  err: [
    { x: '他是很漂亮。', v: '他很漂亮。', why: '形容词前面不用"是"。' },
    { x: 'piàoliàng', v: 'piàoliang', why: '"亮"读轻声。' }
  ],
  hz: [
    { c: '漂', rad: '氵', radName: '三点水', radMean: '水 water', struct: '左右结构', parts: '氵 + 票', tip: '"漂"原来的意思是在水上漂，所以有"氵"；右边"票 piào"表示读音。', fam: '三点水的字：汉、没；河、海（超纲）。' },
    { c: '亮', rad: '亠', radName: '文字头', radMean: '——', struct: '上下结构', parts: '亠 + 口 + 冖 + 几', tip: '上面像一个高高的屋顶，下面有"几"——高处很"亮"。漂亮的东西会发光、很亮眼。', fam: '有"亠"的字：六、高、京（超纲）。' }
  ],
  cul: ['"漂亮"是中国人最常用的称赞词之一，听到称赞时，传统的回答是"哪里哪里"，现在说"谢谢"也很自然。', '中国人也会说事情"做得很漂亮"，意思是做得很好、很成功。'],
  syn: [{ w: '好看', note: '说外表时意思差不多。' }],
  ant: [{ w: '不好看', note: 'HSK1 阶段用否定式表达反义。' }],
  rel: ['好看', '很', '真', '非常', '衣服', '喜欢']
},

'苹果': {
  pos: [['名词', 'noun']],
  zh: ['一种圆形的水果，红色、绿色或黄色。'],
  en: ['apple'],
  syl: [{ py: 'píng', i: 'p', f: 'ing', t: 2 }, { py: 'guǒ', i: 'g', f: 'uo', t: 3 }],
  phon: [
    '第二声 + 第三声：先升上去，再读低的第三声。',
    'píng 是后鼻音 -ng，p 要送气。',
    'guǒ 的 uo 要圆唇，不要读成 gǒ。'
  ],
  img: { src: 'img/pingguo.jpg', cap: "一个苹果", by: "Abhijit Tembhekar from Mumbai, India", lic: "CC BY 2.0", from: "Wikimedia Commons · Red Apple.jpg" },
  use: ['吃 / 买 + 苹果', '数词 + 个 + 苹果', '苹果 + 多少钱？'],
  ex: [
    { ctx: '爱好', zh: '我 喜欢 吃 苹果 。', py: 'Wǒ xǐhuan chī píngguǒ.', en: 'I like eating apples.' },
    { ctx: '购物', zh: '我 要 三 个 苹果 。', py: 'Wǒ yào sān gè píngguǒ.', en: 'I want three apples.' },
    { ctx: '问价', zh: '苹果 多少 钱 ？', py: 'Píngguǒ duōshao qián?', en: 'How much are the apples?' },
    { ctx: '评价', zh: '这个 苹果 很 好吃 。', py: 'Zhège píngguǒ hěn hǎochī.', en: 'This apple is tasty.' }
  ],
  drill: [
    { t: 'choice', q: '___ 是水果。', opts: ['苹果', '米饭', '面包', '鸡蛋'], a: 0, why: '苹果是水果。' },
    { t: 'order', words: ['苹果', '两个', '买', '我'], a: '我买两个苹果。', en: 'I buy two apples.' },
    { t: 'choice', q: '"一 ___ 苹果"', opts: ['个', '本', '件', '口'], a: 0, why: '苹果用量词"个"。' },
    { t: 'choice', say: '苹果', q: '听录音，选拼音。', opts: ['píngguǒ', 'pínguǒ', 'bíngguǒ', 'pīngguǒ'], a: 0, why: '苹果 píngguǒ。' }
  ],
  bop: {
    b: '老师从包里拿出一个红苹果，咬一口："嗯，这是什么？——苹果！很好吃！"',
    o: ['能听、说、认读"苹果 píngguǒ"', '能说"我吃 / 买……个苹果"', '能问"苹果多少钱？"'],
    pre: '复习"水果、个、多少钱"。',
    p: '① 跟读 píng、guǒ、píngguǒ；② 数苹果：一个、两个、三个……；③ 买水果对话："苹果多少钱？""三块一个。""我要五个。"',
    post: '每人说"我喜欢吃……"（水果）；或做本页练习 1–4。',
    s: '板书：一个苹果 ／ 吃苹果、买苹果 ／ 苹果多少钱？作业：去超市看看苹果多少钱，用中文写下来。'
  },
  act: [
    { tag: '情境表演', name: '水果摊', how: '用真苹果或图片摆摊："苹果多少钱？""五块一个。""太贵了！""四块吧。"' },
    { tag: '游戏', name: '传苹果', how: '音乐响时传苹果，音乐停时拿到苹果的人回答一个问题："你喜欢吃苹果吗？"' },
    { tag: '文化体验', name: '平安夜苹果', how: '介绍中国平安夜送苹果的习俗（"苹"和"平"同音），学生写一张"平平安安"的卡片。' }
  ],
  teach: [
    { h: '构词', p: '"果"是水果，"苹果、水果"里都有"果"。' },
    { h: '品牌', p: '"苹果"也是一个手机和电脑品牌的中文名：苹果手机。' }
  ],
  err: [
    { x: 'pínguǒ', v: 'píngguǒ', why: '"苹"是后鼻音 -ng。' },
    { x: '我买三苹果。', v: '我买三个苹果。', why: '数词和名词中间要有量词。' }
  ],
  hz: [
    { c: '苹', rad: '艹', radName: '草字头', radMean: '草 grass, plant', struct: '上下结构', parts: '艹 + 平', tip: '上面"艹"表示是植物，下面"平 píng"表示读音。', fam: '草字头的字：菜、茶、花（超纲）。' },
    { c: '果', rad: '木', radName: '木部', radMean: '树 tree', struct: '上下结构', parts: '田 + 木', tip: '树（木）上长着圆圆的果子（田）——"果"就是水果。', fam: '有"果"的字：课（讠 + 果）；有"木"的字：杯、椅、桌。' }
  ],
  cul: ['"苹"和"平"读音一样，所以中国人在平安夜（12 月 24 日）互相送苹果，祝对方"平平安安"。', '中国是世界上生产苹果最多的国家。'],
  syn: [],
  ant: [],
  rel: ['水果', '吃', '买', '个', '好吃', '多少']
},

'七': {
  pos: [['数词', 'numeral']],
  zh: ['数字 7，六加一。'],
  en: ['seven'],
  syl: [{ py: 'qī', i: 'q', f: 'i', t: 1 }],
  phon: [
    '第一声，高而平。',
    'q 是送气音，舌面贴上腭，要有一口气出来；不要读成 jī 或英语的 "chee"。',
    '"七"不变调（和"一、不"不一样）：七个 qī gè、七点 qī diǎn。'
  ],
  img: { src: 'img/qi.jpg', cap: "七", by: "Korenn", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Sign number 7 on Jerusalem Street.jpg" },
  use: ['七 + 量词 + 名词：七个人', '七点 / 七月 / 七号 / 七岁', '星期七？✗（说"星期日"）'],
  ex: [
    { ctx: '作息', zh: '我 七 点 起床 。', py: 'Wǒ qī diǎn qǐchuáng.', en: 'I get up at seven.' },
    { ctx: '日期', zh: '今天 七 月 七 号 。', py: 'Jīntiān qī yuè qī hào.', en: 'Today is July 7th.' },
    { ctx: '年龄', zh: '我 女儿 七 岁 。', py: 'Wǒ nǚ\'ér qī suì.', en: 'My daughter is seven.' },
    { ctx: '数量', zh: '一 个 星期 有 七 天 。', py: 'Yí gè xīngqī yǒu qī tiān.', en: 'A week has seven days.' }
  ],
  drill: [
    { t: 'choice', q: '六、 ___ 、八', opts: ['七', '九', '五', '十'], a: 0, why: '六后面是七。' },
    { t: 'order', words: ['七天', '一个', '有', '星期'], a: '一个星期有七天。', en: 'A week has seven days.' },
    { t: 'choice', q: '"Sunday"是：', opts: ['星期七', '星期日', '星期六', '七星期'], a: 1, why: '没有"星期七"，说"星期日 / 星期天"。' },
    { t: 'choice', say: '七', q: '听录音，选拼音。', opts: ['qī', 'jī', 'xī', 'qí'], a: 0, why: '七 qī，第一声。' }
  ],
  bop: {
    b: '老师伸出大拇指、食指和中指捏在一起（中国手势"七"）："这是几？——七！"',
    o: ['能听、说、认读"七 qī"', '能读准 q', '能说带"七"的时间、日期'],
    pre: '复习数字 1–6 和手势。',
    p: '① 跟读 qī，对比 qī / jī / xī；② 手势 1–10，重点练"七"；③ 问答："你几点起床？""一个星期有几天？"',
    post: '听写五个带"七"的数字；或做本页练习 1–4。',
    s: '板书：七 qī ／ 十七、七十 ／ 一个星期有七天（星期一……星期日）。作业：写一写你七点做什么。'
  },
  act: [
    { tag: 'TPR', name: '数字手势', how: '老师说数字，学生做中国手势。"七"是三个手指尖捏在一起。' },
    { tag: '语音', name: 'j q x', how: '老师读 jī / qī / xī，学生举相应的卡片；再用手放在嘴前感受 q 的送气。' },
    { tag: '游戏', name: '逢七拍手', how: '全班轮流报数，遇到带"七"或"七"的倍数（7、14、17、21……）就拍手不说。说错的人表演节目。' }
  ],
  teach: [
    { h: 'q 的发音', p: 'q 是送气的舌面音，和 j（不送气）、x（擦音）是一组。拼音 q 不读英语的 /k/。' },
    { h: '星期', p: '星期一到星期六用数字，第七天是"星期日 / 星期天"，没有"星期七"。' }
  ],
  err: [
    { x: '星期七', v: '星期日 / 星期天', why: '一周的第七天不用数字。' },
    { x: 'jī', v: 'qī', why: 'q 要送气。' }
  ],
  hz: [{ c: '七', rad: '一', radName: '一部', radMean: '——', struct: '独体字', parts: '横 + 竖弯钩', tip: '只有两画：先写一横，再写竖弯钩，横被竖弯钩"切开"。古字像一刀切开的样子（"切"里也有"七"）。', fam: '有"七"的字：切（超纲）。' }],
  cul: ['农历七月七日是"七夕节"，传说牛郎和织女这一天在天上的鹊桥相会，被称为中国的情人节。', '在中国，"七"不算特别吉利也不算不吉利；在西方，"7"常被认为是幸运数字。'],
  syn: [],
  ant: [],
  rel: ['六', '八', '星期', '点', '几', '天']
}

});
