// HSK1 教学参考 · 第 20 批（10 词）：书店 睡 水 水果 睡觉 说 说话 四 岁 它
window.H1_WORDS = window.H1_WORDS || {};
Object.assign(H1_WORDS, {

'书店': {
  pos: [['名词', 'noun']],
  zh: ['卖书的商店。'],
  en: ['bookstore; bookshop'],
  syl: [{ py: 'shū', i: 'sh', f: 'u', t: 1 }, { py: 'diàn', i: 'd', f: 'ian', t: 4 }],
  phon: [
    '第一声 + 第四声：先高平，再全降。',
    'shū 是卷舌音，嘴唇要圆。',
    'diàn 里的 a 读得像 "e"（接近 dyen）。'
  ],
  img: { src: 'img/shudian.jpg', cap: "这是一个书店。", by: "Corpse Reviver", lic: "CC BY-SA 3.0", from: "Wikimedia Commons · Interior of bookstore in Japan. 01.jpg" },
  use: ['去 + 书店 + 买书', '书店 + 在 + 哪儿', '在 + 书店 + 看书'],
  ex: [
    { ctx: '购物', zh: '我 去 书店 买 书 。', py: 'Wǒ qù shūdiàn mǎi shū.', en: 'I am going to the bookstore to buy books.' },
    { ctx: '问路', zh: '请问 ， 书店 在 哪儿 ？', py: 'Qǐngwèn, shūdiàn zài nǎr?', en: 'Excuse me, where is the bookstore?' },
    { ctx: '描述', zh: '这个 书店 很 大 。', py: 'Zhège shūdiàn hěn dà.', en: 'This bookstore is big.' },
    { ctx: '爱好', zh: '我 喜欢 在 书店 看 书 。', py: 'Wǒ xǐhuan zài shūdiàn kàn shū.', en: 'I like reading in bookstores.' }
  ],
  drill: [
    { t: 'choice', q: '我想买一本汉语书，我去 ___ 。', opts: ['书店', '饭店', '医院', '超市'], a: 0, why: '买书去书店。' },
    { t: 'order', words: ['书店', '去', '我们', '吧'], a: '我们去书店吧。', en: 'Let us go to the bookstore.' },
    { t: 'choice', q: '书店卖什么？', opts: ['书', '饭', '水果', '衣服'], a: 0, why: '书店 = 卖书的店。' },
    { t: 'choice', say: '书店', q: '听录音，选拼音。', opts: ['shūdiàn', 'sūdiàn', 'shūtiàn', 'shǔdiàn'], a: 0, why: '书店 shūdiàn。' }
  ],
  bop: {
    b: '老师举起一本新书："这本书是我昨天买的。在哪儿买的？——在书店！"',
    o: ['能听、说、认读"书店 shūdiàn"', '能说"去书店买书"', '复习"……店"家族'],
    pre: '复习"书、商店、饭店"。',
    p: '① 跟读 shūdiàn；② "……店"家族：书店、饭店、商店；③ 问答："你常去书店吗？""你在书店买什么？"',
    post: '画一张书店的图，写上"书店"和三本书的名字；或做本页练习 1–4。',
    s: '板书：书 + 店 = 书店 ／ 饭店、商店 ／ 去书店买书。作业：用中文写一写你喜欢的书店。'
  },
  act: [
    { tag: '情境表演', name: '小书店', how: '把课本和图书摆成"书店"："你好，有汉语书吗？""有，在这儿。""多少钱？"' },
    { tag: '游戏', name: '店名接龙', how: '老师说要买的东西，学生说去哪个店："书——书店！饭——饭店！"' },
    { tag: '文化体验', name: '中国的书店', how: '展示中国有名的书店照片（如北京的大书店），讨论：你们国家的书店是什么样子？' }
  ],
  teach: [
    { h: '构词', p: '书 + 店 = 卖书的店。学生学会"……店"以后可以猜很多新词。' },
    { h: '量词', p: '书店的量词是"家"（超纲）：一家书店。HSK1 阶段可以说"一个书店"。' }
  ],
  err: [
    { x: '我买书去书店。', v: '我去书店买书。', why: '先说去哪儿，再说做什么。' },
    { x: 'sūdiàn', v: 'shūdiàn', why: '"书"是卷舌音。' }
  ],
  hz: [
    { c: '书', rad: '乙', radName: '乙部（有的字典归"丨"部）', radMean: '——', struct: '独体字', parts: '乛 + 乛 + 丨 + 丶', tip: '繁体字"書"是手拿着笔写字。简体字只有四画，最后一点不要忘。', fam: '有"书"的词：读书、书店。' },
    { c: '店', rad: '广', radName: '广字旁', radMean: '房屋 building', struct: '半包围结构', parts: '广 + 占', tip: '大房子（广）里占了一块地方卖东西——"店"。', fam: '有"店"的词：商店、饭店、书店。' }
  ],
  cul: ['中国很多城市有很大的书店，有的 24 小时开门，晚上也有人在那儿看书。', '在中国的书店，常常可以坐在地上或椅子上看书，不买也可以。'],
  syn: [],
  ant: [],
  rel: ['书', '店', '商店', '饭店', '买', '看']
},

'睡': {
  pos: [['动词', 'verb']],
  zh: ['闭上眼睛休息，睡觉。'],
  en: ['to sleep'],
  syl: [{ py: 'shuì', i: 'sh', f: 'ui', t: 4 }],
  phon: [
    '第四声，从高处全降。',
    '韵母 ui 其实是 u + ei：shuì 读起来像 "shway"。',
    '和"水 shuǐ"只有声调不一样。'
  ],
  img: { src: 'img/shui4.jpg', cap: "猫在睡。", by: "Jules Verne Times Two", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Cat sleeping on a bench, Prazeres Cemetery, Lisbon, Portugal julesvernex2.jpg" },
  use: ['睡 + 了', '还在睡', '睡 + 时间长度：睡八个小时'],
  ex: [
    { ctx: '早上', zh: '弟弟 还 在 睡 。', py: 'Dìdi hái zài shuì.', en: 'My little brother is still sleeping.' },
    { ctx: '晚上', zh: '你 睡 了 吗 ？', py: 'Nǐ shuì le ma?', en: 'Are you asleep?' },
    { ctx: '时间', zh: '我 昨天 睡 了 八 个 小时 。', py: 'Wǒ zuótiān shuì le bā gè xiǎoshí.', en: 'I slept eight hours yesterday.' },
    { ctx: '休息', zh: '我 想 再 睡 十 分钟 。', py: 'Wǒ xiǎng zài shuì shí fēnzhōng.', en: 'I want to sleep ten more minutes.' }
  ],
  drill: [
    { t: 'choice', q: '十二点了，孩子们都 ___ 了。', opts: ['睡', '水', '说', '岁'], a: 0, why: '晚上十二点，睡了。' },
    { t: 'order', words: ['睡', '在', '还', '猫'], a: '猫还在睡。', en: 'The cat is still sleeping.' },
    { t: 'choice', q: '"睡"和"水"：', opts: ['读音一样', '只是声调不一样', '意思一样', '都是名词'], a: 1, why: '睡 shuì（第四声）；水 shuǐ（第三声）。' },
    { t: 'choice', say: '睡', q: '听录音，选拼音。', opts: ['shuì', 'shuǐ', 'shuí', 'suì'], a: 0, why: '睡 shuì，第四声。' }
  ],
  bop: {
    b: '老师把头靠在手上，闭上眼睛，发出"呼——呼——"的声音："我在做什么？——睡！"',
    o: ['能听、说、认读"睡 shuì"', '能说"……还在睡"', '分清"睡"和"水"'],
    pre: '复习"睡觉、起床、晚上"。',
    p: '① 跟读 shuì，对比 shuì / shuǐ；② 看图说话："猫在睡""孩子还在睡"；③ 问答："你每天睡几个小时？"',
    post: '全班调查睡觉时间；或做本页练习 1–4。',
    s: '板书：睡 shuì（第四声）≠ 水 shuǐ（第三声）／ 还在睡 ／ 睡……个小时。作业：记下你昨天睡了几个小时。'
  },
  act: [
    { tag: 'TPR', name: '睡和起', how: '老师说"睡"学生趴下，说"起床"学生站起来。越来越快，最后突然说"水"，做错的人表演打呼噜。' },
    { tag: '语音', name: '睡还是水', how: '老师读 shuì / shuǐ，学生做动作：睡——双手合十放在脸旁；水——做喝水的动作。' },
    { tag: '调查', name: '睡几个小时', how: '学生互相问"你每天睡几个小时？"，算出全班的平均数。' }
  ],
  teach: [
    { h: '睡 / 睡觉', p: '"睡"可以加时间长度：睡八个小时。"睡觉"是离合词：睡一会儿觉（拓展）。日常说"我去睡觉"。' },
    { h: '声调', p: '睡 shuì 和 水 shuǐ 读音只差声调，要多练。' }
  ],
  err: [
    { x: 'shuǐ（想说 sleep）', v: 'shuì', why: '"睡"是第四声，"水"是第三声。' },
    { x: '我睡觉八个小时。', v: '我睡八个小时。 / 我睡了八个小时的觉。', why: '时间长度一般放在"睡"后面。' }
  ],
  hz: [{ c: '睡', rad: '目', radName: '目字旁', radMean: '眼睛 eye', struct: '左右结构', parts: '目 + 垂', tip: '左边是"目"（眼睛），右边是"垂"（往下）——眼皮垂下来，就是"睡"。', fam: '目字旁的字：看（目在下面）、眼（超纲）。' }],
  cul: ['中国很多人有午睡的习惯，中午吃完饭睡一会儿。', '"早睡早起身体好"是中国人常说的话。'],
  syn: [{ w: '睡觉', note: '更常用的说法。' }],
  ant: [{ w: '起床', note: '从床上起来。' }],
  rel: ['睡觉', '起床', '休息', '晚上', '小时']
},

'水': {
  pos: [['名词', 'noun']],
  zh: ['无色、无味的液体，可以喝。'],
  en: ['water'],
  syl: [{ py: 'shuǐ', i: 'sh', f: 'ui', t: 3 }],
  phon: [
    '第三声，先降后升，声音要低。',
    '韵母 ui 其实是 u + ei：读起来像 "shway"。',
    '和"睡 shuì"只有声调不一样。'
  ],
  img: { src: 'img/shui.jpg', cap: "一个杯子里有水。", by: "Zmrob25", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Glass of water on vintage sheet.jpg（已裁剪）" },
  use: ['喝 + 水', '热水 / 冷水', '一杯水（"杯"超纲，可说"一个杯子"）'],
  ex: [
    { ctx: '口渴', zh: '我 想 喝 水 。', py: 'Wǒ xiǎng hē shuǐ.', en: 'I want to drink water.' },
    { ctx: '招待', zh: '请 喝 水 。', py: 'Qǐng hē shuǐ.', en: 'Please have some water.' },
    { ctx: '习惯', zh: '中国 人 喜欢 喝 热 水 。', py: 'Zhōngguó rén xǐhuan hē rè shuǐ.', en: 'Chinese people like drinking hot water.' },
    { ctx: '存在', zh: '杯子 里 有 水 。', py: 'Bēizi lǐ yǒu shuǐ.', en: 'There is water in the cup.' }
  ],
  drill: [
    { t: 'choice', q: '我渴了，我要喝 ___ 。', opts: ['水', '睡', '书', '岁'], a: 0, why: '喝水。' },
    { t: 'order', words: ['水', '喝', '请'], a: '请喝水。', en: 'Please have some water.' },
    { t: 'choice', q: '"热水"的反义是：', opts: ['冷水', '大水', '好水', '少水'], a: 0, why: '热 ↔ 冷。' },
    { t: 'choice', say: '水', q: '听录音，选拼音。', opts: ['shuǐ', 'shuì', 'suǐ', 'shǔ'], a: 0, why: '水 shuǐ，第三声。' }
  ],
  bop: {
    b: '老师拿起一杯水喝一口："啊——这是什么？——水！"',
    o: ['能听、说、认读"水 shuǐ"', '能说"喝水""热水""冷水"', '分清"水"和"睡"'],
    pre: '复习"喝、茶、牛奶、杯子"。',
    p: '① 跟读 shuǐ，对比 shuǐ / shuì；② 喝什么：喝水、喝茶、喝牛奶；③ 问答："你喝热水还是冷水？"',
    post: '"三点水"找字：汉、没、漂……；或做本页练习 1–4。',
    s: '板书：水 ／ 喝水、热水、冷水 ／ 氵＝水。作业：找五个有"氵"的字。'
  },
  act: [
    { tag: '语音', name: '水还是睡', how: '老师读 shuǐ / shuì，学生做喝水或睡觉的动作。' },
    { tag: '游戏', name: '三点水家族', how: '黑板上写"氵"，学生说出学过的三点水的字：汉、没、漂……说得最多的组赢。' },
    { tag: '文化体验', name: '多喝热水', how: '讨论中国人为什么喜欢喝热水，学生说说自己国家的习惯：喝冷水还是热水？' }
  ],
  teach: [
    { h: '部首', p: '"水"在字的左边变成"氵"（三点水），和水有关的字多有这个部首。' },
    { h: '量词', p: '一杯水、一瓶水（杯、瓶超纲）。HSK1 阶段可以说"喝水""一个杯子里有水"。' }
  ],
  err: [
    { x: '我吃水。', v: '我喝水。', why: '液体用"喝"。' },
    { x: 'shuì（想说 water）', v: 'shuǐ', why: '"水"是第三声。' }
  ],
  hz: [{ c: '水', rad: '水', radName: '水部（左边写作"氵"）', radMean: '水 water', struct: '独体字', parts: '亅 + 乛 + 丿 + 乀', tip: '古字像一条弯弯的河，中间是水流，两边是水花。在左边时写成三点水"氵"。', fam: '三点水的字：汉、没、漂（漂亮）；水字底：泉（超纲）。' }],
  cul: ['中国人习惯喝热水，饭店常给客人一杯热水或热茶。', '"上善若水"——老子说，最好的品德像水一样：帮助万物，不争不抢。'],
  syn: [],
  ant: [],
  rel: ['喝', '茶', '牛奶', '杯子', '热', '冷']
},

'水果': {
  pos: [['名词', 'noun']],
  zh: ['可以生吃的、有水分的果实，如苹果、香蕉。'],
  en: ['fruit'],
  syl: [{ py: 'shuǐ', i: 'sh', f: 'ui', t: 3 }, { py: 'guǒ', i: 'g', f: 'uo', t: 3 }],
  phon: [
    '两个第三声连读，"水"变成第二声：shuí guǒ。',
    'guǒ 的 uo 要圆唇。',
    'sh 卷舌，g 不送气。'
  ],
  img: { src: 'img/shuiguo.jpg', cap: "很多水果", by: "Suyash Dwivedi", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · A basket of fruits.jpg" },
  use: ['吃 + 水果', '买 + 水果', '什么水果？'],
  ex: [
    { ctx: '爱好', zh: '我 喜欢 吃 水果 。', py: 'Wǒ xǐhuan chī shuǐguǒ.', en: 'I like eating fruit.' },
    { ctx: '询问', zh: '你 喜欢 什么 水果 ？', py: 'Nǐ xǐhuan shénme shuǐguǒ?', en: 'What fruit do you like?' },
    { ctx: '购物', zh: '妈妈 去 超市 买 水果 。', py: 'Māma qù chāoshì mǎi shuǐguǒ.', en: 'Mom goes to the supermarket to buy fruit.' },
    { ctx: '分类', zh: '苹果 是 水果 。', py: 'Píngguǒ shì shuǐguǒ.', en: 'Apples are fruit.' }
  ],
  drill: [
    { t: 'choice', q: '苹果是一种 ___ 。', opts: ['水果', '菜', '饭', '水'], a: 0, why: '苹果是水果。' },
    { t: 'order', words: ['水果', '买', '我', '去'], a: '我去买水果。', en: 'I am going to buy fruit.' },
    { t: 'choice', q: '"水果"怎么读？', opts: ['shuǐ guǒ', 'shuí guǒ', 'shuì guǒ', 'shuǐ guó'], a: 1, why: '两个第三声连读，"水"变第二声。' },
    { t: 'choice', say: '水果', q: '听录音，选汉字。', opts: ['水果', '苹果', '水', '睡觉'], a: 0, why: '水果 shuǐguǒ。' }
  ],
  bop: {
    b: '老师拿出一个装着各种水果的篮子（或图片），问："这些都是什么？——水果！"',
    o: ['能听、说、认读"水果 shuǐguǒ"', '能说"我喜欢吃……"', '能把食物分类'],
    pre: '复习"苹果、吃、喜欢"。',
    p: '① 跟读 shuǐguǒ，注意变调；② 分类：苹果（水果）、米饭（饭）、牛奶（喝的）；③ 问答："你喜欢什么水果？"',
    post: '全班投票选出最受欢迎的水果；或做本页练习 1–4。',
    s: '板书：水 + 果 = 水果 ／ 苹果是水果 ／ 你喜欢什么水果？作业：画三种水果，写上"水果"。'
  },
  act: [
    { tag: '游戏', name: '水果蹲', how: '每人选一种水果（可以用母语说名字），大家说"苹果蹲，苹果蹲，苹果蹲完……蹲"，被叫到的人蹲下。' },
    { tag: '游戏', name: '是不是水果', how: '老师说食物名，是水果的学生站起来：苹果、包子、牛奶、面包……' },
    { tag: '情境表演', name: '水果店', how: '"你好，我要水果。""要什么水果？""苹果。多少钱？"' }
  ],
  teach: [
    { h: '变调', p: '"水果"是第三声 + 第三声，"水"读第二声。' },
    { h: '构词', p: '"果"是果子：苹果、水果。' }
  ],
  err: [
    { x: 'shuǐ guǒ（不变调）', v: 'shuí guǒ', why: '第三声 + 第三声，前一个变第二声。' },
    { x: '我喝水果。', v: '我吃水果。', why: '水果是吃的。' }
  ],
  hz: [
    { c: '水', rad: '水', radName: '水部', radMean: '水 water', struct: '独体字', parts: '亅 + 乛 + 丿 + 乀', tip: '像一条弯弯的河。水果里有很多水。', fam: '三点水的字：汉、没、漂。' },
    { c: '果', rad: '木', radName: '木部', radMean: '树 tree', struct: '上下结构', parts: '田 + 木', tip: '树（木）上长着圆圆的果子（田）。', fam: '有"果"的字：课；有"果"的词：苹果。' }
  ],
  cul: ['中国人饭后常吃水果，招待客人也常摆一盘水果。', '中国南方有很多热带水果，北方的苹果很有名。'],
  syn: [],
  ant: [],
  rel: ['苹果', '吃', '水', '买', '喜欢']
},

'睡觉': {
  pos: [['动词', 'verb']],
  zh: ['进入睡眠状态；上床睡。'],
  en: ['to sleep; to go to bed'],
  syl: [{ py: 'shuì', i: 'sh', f: 'ui', t: 4 }, { py: 'jiào', i: 'j', f: 'iao', t: 4 }],
  phon: [
    '两个第四声连读：两个字都要降，第一个降得短一点。',
    '"觉"在这里读 jiào（"觉得"里读 jué）。',
    'j 不送气，不要读成 qiào。'
  ],
  img: { src: 'img/shuijiao.jpg', cap: "它在睡觉。", by: "Giles Laurent", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · 014 Baby cape fur seal sleeping at Cape cross Photo by Giles Laurent.jpg" },
  use: ['时间 + 睡觉：十一点睡觉', '去 + 睡觉', '在 + 睡觉'],
  ex: [
    { ctx: '作息', zh: '我 十 一 点 睡觉 。', py: 'Wǒ shíyī diǎn shuìjiào.', en: 'I go to bed at eleven.' },
    { ctx: '晚上', zh: '我 去 睡觉 了 。', py: 'Wǒ qù shuìjiào le.', en: 'I am going to bed.' },
    { ctx: '询问', zh: '你 几 点 睡觉 ？', py: 'Nǐ jǐ diǎn shuìjiào?', en: 'What time do you go to bed?' },
    { ctx: '进行', zh: '孩子 们 在 睡觉 。', py: 'Háizimen zài shuìjiào.', en: 'The children are sleeping.' }
  ],
  drill: [
    { t: 'choice', q: '很晚了，你去 ___ 吧。', opts: ['睡觉', '起床', '上班', '上学'], a: 0, why: '晚了，去睡觉。' },
    { t: 'order', words: ['睡觉', '你', '几点'], a: '你几点睡觉？', en: 'What time do you go to bed?' },
    { t: 'choice', q: '"睡觉"的"觉"怎么读？', opts: ['jiào', 'jué', 'jiǎo', 'xiào'], a: 0, why: '睡觉 shuìjiào；觉得 juéde。' },
    { t: 'choice', say: '睡觉', q: '听录音，选拼音。', opts: ['shuìjiào', 'shuǐjiào', 'shuìjué', 'shuìqiào'], a: 0, why: '睡觉 shuìjiào。' }
  ],
  bop: {
    b: '老师打一个大哈欠，看看表："十一点了，我要去睡觉了。晚安！"',
    o: ['能听、说、认读"睡觉 shuìjiào"', '能说"我……点睡觉"', '知道"觉"的两个读音'],
    pre: '复习"睡、起床、晚上、点"。',
    p: '① 跟读 shuìjiào；② 一天的时间：起床 → 上课 → 吃饭 → 睡觉；③ 问答："你几点睡觉？""你几点起床？"',
    post: '画一个"我的一天"时间表；或做本页练习 1–4。',
    s: '板书：__ 点睡觉 ／ 睡觉 ↔ 起床 ／ 觉：jiào（睡觉）/ jué（觉得）。作业：写一写你的作息时间。'
  },
  act: [
    { tag: 'TPR', name: '一天的生活', how: '老师说"起床、吃饭、上课、睡觉"，学生做动作。打乱顺序，越来越快。' },
    { tag: '调查', name: '谁睡得最晚', how: '学生互相问"你几点睡觉？"，找出全班最早和最晚睡觉的人。' },
    { tag: '情境表演', name: '晚上的家', how: '"妈妈，我去睡觉了。""好，晚安！"' }
  ],
  teach: [
    { h: '多音字', p: '"觉"：睡觉 jiào、觉得 jué。' },
    { h: '离合词', p: '"睡觉"可以分开：睡了一个好觉（拓展）。后面不能直接加时间长度：✗ 睡觉八个小时。' }
  ],
  err: [
    { x: 'shuìjué', v: 'shuìjiào', why: '"睡觉"里的"觉"读 jiào。' },
    { x: '我睡觉在十一点。', v: '我十一点睡觉。', why: '时间放在动词前面。' }
  ],
  hz: [
    { c: '睡', rad: '目', radName: '目字旁', radMean: '眼睛 eye', struct: '左右结构', parts: '目 + 垂', tip: '眼睛（目）的眼皮垂下来（垂）——"睡"。', fam: '有"目"的字：看。' },
    { c: '觉', rad: '见', radName: '见字底', radMean: '看见 to see', struct: '上下结构', parts: '⺍ + 冖 + 见', tip: '下面是"见"。睡觉时什么也看不见，醒来才"觉"得。', fam: '有"见"的字：现、视（电视）。' }
  ],
  cul: ['中国人晚上说"晚安"（good night，超纲）。', '中国的中小学生作业多，很多人晚上十一点以后才睡觉。'],
  syn: [{ w: '睡', note: '可以加时间长度：睡八个小时。' }],
  ant: [{ w: '起床', note: '从床上起来。' }],
  rel: ['睡', '起床', '休息', '晚上', '觉得']
},

'说': {
  pos: [['动词', 'verb']],
  zh: ['用嘴讲话。', '说某种语言：说汉语。'],
  en: ['to say; to speak', 'to speak (a language)'],
  syl: [{ py: 'shuō', i: 'sh', f: 'uo', t: 1 }],
  phon: [
    '第一声，高而平。',
    'sh 是卷舌音，不要读成 suō。',
    'uo 从 u 滑到 o，嘴唇是圆的。'
  ],
  img: { src: 'img/shuo.jpg', cap: "她在说话。", by: "DERDAKI ILIAS", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Wikimedia Morocco Mini-Hackathon 2026 day 2 - Woman speaking at wooden podium with microphone during event - 0009.jpg" },
  use: ['说 + 语言：说汉语', '说 + 什么', '请再说一遍（"遍"超纲）'],
  ex: [
    { ctx: '能力', zh: '我 会 说 汉语 。', py: 'Wǒ huì shuō Hànyǔ.', en: 'I can speak Chinese.' },
    { ctx: '询问', zh: '你 说 什么 ？', py: 'Nǐ shuō shénme?', en: 'What did you say?' },
    { ctx: '转述', zh: '老师 说 明天 不 上课 。', py: 'Lǎoshī shuō míngtiān bú shàngkè.', en: 'The teacher said there is no class tomorrow.' },
    { ctx: '请求', zh: '请 你 说 一下 。', py: 'Qǐng nǐ shuō yíxià.', en: 'Please say it.' }
  ],
  drill: [
    { t: 'choice', q: '你会 ___ 汉语吗？', opts: ['说', '听', '看', '写'], a: 0, why: '说 + 语言。' },
    { t: 'order', words: ['说', '我', '一点儿', '会', '汉语'], a: '我会说一点儿汉语。', en: 'I can speak a little Chinese.' },
    { t: 'choice', q: '听不懂时可以说：', opts: ['你说什么？', '你写什么？', '你看什么？', '你吃什么？'], a: 0, why: '"你说什么？"= What did you say?' },
    { t: 'choice', say: '说', q: '听录音，选拼音。', opts: ['shuō', 'suō', 'shōu', 'shuò'], a: 0, why: '说 shuō，第一声。' }
  ],
  bop: {
    b: '老师指着自己的嘴，用汉语、英语、学生的母语各说一句"你好"："我说汉语、说英语……你们说什么话？"',
    o: ['能听、说、认读"说 shuō"', '能说"我会说……"', '能问"你说什么？"'],
    pre: '复习"会、汉语、中文"。',
    p: '① 跟读 shuō；② 语言：说汉语、说英语、说中文；③ 问答："你会说什么语言？""你在家说什么话？"',
    post: '每人用"我会说……，不会说……"介绍自己；或做本页练习 1–4。',
    s: '板书：说 + 语言 ／ 你说什么？／ 听、说、读、写。作业：用汉语说三句话，录音给老师听。'
  },
  act: [
    { tag: '游戏', name: '传话', how: '排成一列，第一个人悄悄说一句汉语，一个一个往后传，最后一个人大声说出来，看对不对。' },
    { tag: 'TPR', name: '听说读写', how: '老师说"说"学生指嘴，"听"指耳朵，"读"捧书，"写"做写字动作。' },
    { tag: '调查', name: '会说什么语言', how: '学生互相问"你会说几种语言？"，统计全班会说的语言。' }
  ],
  teach: [
    { h: '说 / 说话', p: '"说"后面可以加内容和语言：说汉语、说什么。"说话"后面不能再加宾语。' },
    { h: '听不懂', p: '教学生礼貌地说"对不起，请你再说一下"。' }
  ],
  err: [
    { x: '我说话汉语。', v: '我说汉语。', why: '"说话"后面不加语言。' },
    { x: 'suō', v: 'shuō', why: '"说"是卷舌音。' }
  ],
  hz: [{ c: '说', rad: '讠', radName: '言字旁', radMean: '说话 speech', struct: '左右结构', parts: '讠 + 兑', tip: '左边"讠"是说话，右边"兑"——两点像嘴边的话，下面是一个人张着口（兄）在说。', fam: '言字旁的字：话、请、读、课、谁、认识、语。' }],
  cul: ['"说"还有"批评"的意思：妈妈说了我一顿（拓展）。', '中国有很多方言，同样是中国人，说的话可能互相听不懂；大家都会说普通话。'],
  syn: [{ w: '说话', note: '讲话，不加宾语。' }],
  ant: [{ w: '听', note: '用耳朵接收声音。' }],
  rel: ['说话', '听', '读', '写', '汉语', '中文']
},

'说话': {
  pos: [['动词', 'verb']],
  zh: ['用语言表达；讲话。'],
  en: ['to talk; to speak'],
  syl: [{ py: 'shuō', i: 'sh', f: 'uo', t: 1 }, { py: 'huà', i: 'h', f: 'ua', t: 4 }],
  phon: [
    '第一声 + 第四声：先高平，再全降。',
    'shuō 卷舌，huà 的 h 是舌根音。',
    'ua 从 u 滑到 a，嘴巴从圆到大。'
  ],
  img: { src: 'img/shuohua.jpg', cap: "她们在说话。", by: "Michael Coghlan", lic: "CC BY-SA 2.0", from: "Wikimedia Commons · Friends Chatting (25242731825).jpg" },
  use: ['和 + 人 + 说话', '不要说话', '在 + 说话'],
  ex: [
    { ctx: '课堂', zh: '上课 的 时候 不 要 说话 。', py: 'Shàngkè de shíhou búyào shuōhuà.', en: 'Do not talk during class.' },
    { ctx: '进行', zh: '他们 在 说话 。', py: 'Tāmen zài shuōhuà.', en: 'They are talking.' },
    { ctx: '交际', zh: '我 想 和 你 说话 。', py: 'Wǒ xiǎng hé nǐ shuōhuà.', en: 'I want to talk with you.' },
    { ctx: '课堂', zh: '请 不 要 说话 。', py: 'Qǐng bú yào shuōhuà.', en: 'Please do not talk.' }
  ],
  drill: [
    { t: 'choice', q: '老师说："请不要 ___ ！"', opts: ['说话', '说汉语', '说', '听见'], a: 0, why: '"不要说话"= Do not talk。' },
    { t: 'order', words: ['说话', '在', '他们'], a: '他们在说话。', en: 'They are talking.' },
    { t: 'choice', q: '哪一句是对的？', opts: ['我说话汉语。', '我说汉语。', '我说话你。', '我和说话你。'], a: 1, why: '"说话"后面不加宾语。' },
    { t: 'choice', say: '说话', q: '听录音，选拼音。', opts: ['shuōhuà', 'suōhuà', 'shuōfà', 'shuòhuā'], a: 0, why: '说话 shuōhuà。' }
  ],
  bop: {
    b: '老师把手指放在嘴上："嘘——上课了，不要说话！"然后笑着问："“说话”是什么意思？"',
    o: ['能听、说、认读"说话 shuōhuà"', '能说"和……说话"', '分清"说"和"说话"'],
    pre: '复习"说、话、和"。',
    p: '① 跟读 shuōhuà；② 课堂用语："不要说话""请说话"；③ 对比：说汉语 ✓ / 说话汉语 ✗；和朋友说话 ✓。',
    post: '看图说"他们在说话"；或做本页练习 1–4。',
    s: '板书：说 + 内容 ／ 说话（不加宾语）／ 和 + 人 + 说话。作业：写一写你和谁说话最多。'
  },
  act: [
    { tag: '游戏', name: '安静一分钟', how: '全班一分钟不说话，谁说话谁就要用汉语说一句"对不起，我说话了"。' },
    { tag: '看图说话', name: '谁在说话', how: '出示几张人物图片，学生说"他们在说话""他不说话"。' },
    { tag: '情境表演', name: '打电话', how: '"喂，你好！我想和小月说话。""好，请等一下。"' }
  ],
  teach: [
    { h: '离合词', p: '"说话"后面不能加宾语。要说对谁说，用"和 / 跟 + 人 + 说话"。' },
    { h: '说 / 说话', p: '说什么、说汉语——用"说"；只表示"讲话"这个动作——用"说话"。' }
  ],
  err: [
    { x: '我说话他。', v: '我和他说话。', why: '"说话"后面不能加人。' },
    { x: '他说话汉语。', v: '他说汉语。', why: '说语言用"说"。' }
  ],
  hz: [
    { c: '说', rad: '讠', radName: '言字旁', radMean: '说话 speech', struct: '左右结构', parts: '讠 + 兑', tip: '左边"讠"是说话，右边一个人张着口在说。', fam: '言字旁的字：话、请、读、课。' },
    { c: '话', rad: '讠', radName: '言字旁', radMean: '说话 speech', struct: '左右结构', parts: '讠 + 舌', tip: '左边"讠"，右边是"舌"（舌头）——用舌头说出来的就是"话"。', fam: '有"话"的词：电话、打电话。' }
  ],
  cul: ['中国人说"少说话，多做事"，表示做事比说话重要。', '"说话算话"是说到的事一定要做到，表示守信用。'],
  syn: [{ w: '说', note: '可以加宾语。' }],
  ant: [],
  rel: ['说', '电话', '听', '和', '不要']
},

'四': {
  pos: [['数词', 'numeral']],
  zh: ['数字 4，三加一。'],
  en: ['four'],
  syl: [{ py: 'sì', i: 's', f: '-i', t: 4 }],
  phon: [
    '第四声，从高处全降。',
    's 是平舌音，舌尖放平；韵母不是 "ee"。',
    '四 sì（4）和 十 shí（10）要分清：平舌和卷舌、第四声和第二声。'
  ],
  img: { src: 'img/si.jpg', cap: "四", by: "Classiccardinal", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · 4 (house number).jpg" },
  use: ['四 + 量词 + 名词：四个人', '四点 / 四月 / 四号 / 四岁', '十四、四十'],
  ex: [
    { ctx: '家庭', zh: '我 家 有 四 口 人 。', py: 'Wǒ jiā yǒu sì kǒu rén.', en: 'There are four people in my family.' },
    { ctx: '时间', zh: '下午 四 点 下课 。', py: 'Xiàwǔ sì diǎn xiàkè.', en: 'Class ends at four in the afternoon.' },
    { ctx: '星期', zh: '今天 星期 四 。', py: 'Jīntiān xīngqīsì.', en: 'Today is Thursday.' },
    { ctx: '数量', zh: '我 买 了 四 个 苹果 。', py: 'Wǒ mǎi le sì gè píngguǒ.', en: 'I bought four apples.' }
  ],
  drill: [
    { t: 'choice', q: '三、 ___ 、五', opts: ['四', '十', '六', '七'], a: 0, why: '三后面是四。' },
    { t: 'order', words: ['四', '口人', '有', '他家'], a: '他家有四口人。', en: 'There are four people in his family.' },
    { t: 'choice', q: '"40"怎么说？', opts: ['四十', '十四', '四零', '四个十'], a: 0, why: '40 = 四十；14 = 十四。' },
    { t: 'choice', say: '四', q: '听录音，选拼音。', opts: ['sì', 'shí', 'xì', 'sī'], a: 0, why: '四 sì，第四声。' }
  ],
  bop: {
    b: '老师伸出四个手指，再写"四"："四个手指，在一个框里。"',
    o: ['能听、说、认读"四 sì"', '分清"四"和"十"', '能说带"四"的时间、数量'],
    pre: '复习 1–3 和"十"。',
    p: '① 跟读 sì，对比 sì / shí；② 绕口令："四是四，十是十"；③ 问答："你家有几口人？""今天星期几？"',
    post: '听写数字（4、10、14、40、44）；或做本页练习 1–4。',
    s: '板书：四 sì（平舌）≠ 十 shí（卷舌）／ 十四、四十。作业：练习绕口令"四是四，十是十"。'
  },
  act: [
    { tag: '语音', name: '四和十', how: '绕口令："四是四，十是十，十四是十四，四十是四十。"比谁说得又快又准。' },
    { tag: 'TPR', name: '数字手势', how: '老师说数字，学生做手势。"四"是伸出四个手指。' },
    { tag: '文化体验', name: '不吉利的四', how: '介绍"四"和"死"读音相近，很多楼没有四层、房间号避开 4。学生找一找自己身边有没有这种情况。' }
  ],
  teach: [
    { h: '平舌 / 卷舌', p: '四 sì（平舌）和 十 shí（卷舌）是经典的易错对，要早练、多练。' },
    { h: '文化', p: '中国人觉得"四"不吉利（和"死"读音相近），送礼物不送四个。' }
  ],
  err: [
    { x: 'shí（想说 4）', v: 'sì', why: '"四"是平舌、第四声。' },
    { x: '四十（想说 14）', v: '十四', why: '十 + 四 = 14；四 + 十 = 40。' }
  ],
  hz: [{ c: '四', rad: '囗', radName: '国字框', radMean: '围起来 enclosure', struct: '全包围结构', parts: '囗 + 儿', tip: '外面一个框，里面像"儿"——四面围起来。笔顺：竖、横折、撇、竖弯、横（最后封口）。', fam: '国字框的字：国、回。' }],
  cul: ['"四"和"死 sǐ"读音相近，所以很多中国人觉得"四"不吉利：电梯里常没有 4 楼、14 楼，医院和酒店也常避开 4。', '但"四"也有好的意思：四季（春夏秋冬）、四方（东南西北）。'],
  syn: [],
  ant: [],
  rel: ['三', '五', '十', '几', '星期', '口']
},

'岁': {
  pos: [['量词', 'measure word']],
  zh: ['表示年龄的单位。'],
  en: ['years old (age)'],
  syl: [{ py: 'suì', i: 's', f: 'ui', t: 4 }],
  phon: [
    '第四声，从高处全降。',
    's 是平舌音，不要读成 shuì（睡）。',
    '韵母 ui = u + ei：读起来像 "sway"。'
  ],
  img: { src: 'img/sui.jpg', cap: "我二十六岁了！", by: "Brassluff", lic: "CC0", from: "Wikimedia Commons · Tim Tams and Nuts on a Birthday Cake With Candles during her Anniversary.jpg（已裁剪）" },
  use: ['数词 + 岁：五岁、二十岁', '你几岁？（问小孩）', '你多大？（问大人）'],
  ex: [
    { ctx: '年龄', zh: '我 二 十 岁 。', py: 'Wǒ èrshí suì.', en: 'I am twenty years old.' },
    { ctx: '问小孩', zh: '你 几 岁 ？', py: 'Nǐ jǐ suì?', en: 'How old are you? (to a child)' },
    { ctx: '家人', zh: '我 女儿 三 岁 。', py: 'Wǒ nǚ\'ér sān suì.', en: 'My daughter is three.' },
    { ctx: '变化', zh: '弟弟 今年 十 岁 了 。', py: 'Dìdi jīnnián shí suì le.', en: 'My younger brother is ten this year.' }
  ],
  drill: [
    { t: 'choice', q: '小朋友，你几 ___ ？', opts: ['岁', '年', '个', '口'], a: 0, why: '问小孩年龄：你几岁？' },
    { t: 'order', words: ['岁', '我', '十八'], a: '我十八岁。', en: 'I am eighteen.' },
    { t: 'choice', q: '哪一句是对的？', opts: ['我是二十岁。', '我二十岁。', '我有二十岁。', '我二十年。'], a: 1, why: '说年龄不用"是"或"有"。' },
    { t: 'choice', say: '岁', q: '听录音，选拼音。', opts: ['suì', 'shuì', 'xuì', 'suǐ'], a: 0, why: '岁 suì，第四声。' }
  ],
  bop: {
    b: '老师出示一张生日蛋糕的图，上面有五根蜡烛："他今天过生日。他几岁？——五岁！"',
    o: ['能听、说、认读"岁 suì"', '能说"我……岁"', '会用合适的方式问年龄'],
    pre: '复习数字、"几、今年"。',
    p: '① 跟读 suì，对比 suì / shuì；② 说年龄：我……岁，我妈妈……岁；③ 怎么问：小孩——你几岁？大人——你多大？老人——您多大年纪？（超纲）',
    post: '介绍家人的年龄；或做本页练习 1–4。',
    s: '板书：数词 + 岁（✗ 是、有）／ 你几岁？（小孩）／ 你多大？（大人）。作业：写出家里每个人几岁。'
  },
  act: [
    { tag: '游戏', name: '排队', how: '学生不用母语，只用汉语问"你几岁？"（可用假年龄），按年龄从小到大排队。' },
    { tag: '看图说话', name: '猜年龄', how: '出示不同年龄的人的照片，学生猜"他……岁"，老师公布答案。' },
    { tag: '情境表演', name: '问年龄', how: '对小朋友："你几岁？"对同学："你多大？"练习不同的问法。' }
  ],
  teach: [
    { h: '不用"是"', p: '说年龄直接说"我二十岁"，不加"是"和"有"。否定时要加"不是"：我不是二十岁。' },
    { h: '问年龄', p: '问小孩用"几岁"，问同龄人用"多大"，问老人用"多大年纪"（超纲）。' }
  ],
  err: [
    { x: '我有二十岁。', v: '我二十岁。', why: '说年龄不用"有"。' },
    { x: '你几岁？（问老师）', v: '您多大？ / 您今年多大？', why: '问大人不用"几岁"。' }
  ],
  hz: [{ c: '岁', rad: '山', radName: '山字头', radMean: '山 mountain', struct: '上下结构', parts: '山 + 夕', tip: '上面"山"，下面"夕"（晚上）——山上的太阳升起又落下，一年一年过去，人就长了一"岁"。', fam: '有"夕"的字：多、名、外。' }],
  cul: ['中国传统用"虚岁"：孩子出生时就算一岁，过一个春节再加一岁。现在多用"周岁"（实际年龄）。', '中国人问大人年龄比较直接，不太觉得没礼貌；但问女性年龄时要小心。'],
  syn: [],
  ant: [],
  rel: ['年', '几', '多', '今年', '大', '小']
},

'它': {
  pos: [['代词', 'pronoun']],
  zh: ['指人以外的动物或东西。'],
  en: ['it (animals and things)'],
  syl: [{ py: 'tā', i: 't', f: 'a', t: 1 }],
  phon: [
    '第一声，高而平。',
    '和"他、她"读音完全一样，写法不一样。',
    't 是送气音。'
  ],
  img: { src: 'img/ta_it.jpg', cap: "它是一只小猫。", by: "0x010C", lic: "CC BY-SA 2.0", from: "Wikimedia Commons · 1-month-old kittens 32.jpg" },
  use: ['它 + 是……（动物、东西）', '它很……', '它们（多数）'],
  ex: [
    { ctx: '宠物', zh: '这 是 我 的 猫 ， 它 很 漂亮 。', py: 'Zhè shì wǒ de māo, tā hěn piàoliang.', en: 'This is my cat, it is pretty.' },
    { ctx: '动物', zh: '它 是 一 只 小 狗 。', py: 'Tā shì yì zhī xiǎo gǒu.', en: 'It is a puppy.' },
    { ctx: '东西', zh: '我 的 手机 呢 ？ 它 在 哪儿 ？', py: 'Wǒ de shǒujī ne? Tā zài nǎr?', en: 'Where is my phone? Where is it?' },
    { ctx: '喜爱', zh: '我 很 喜欢 它 。', py: 'Wǒ hěn xǐhuan tā.', en: 'I like it very much.' }
  ],
  drill: [
    { t: 'choice', q: '这是我的狗， ___ 三岁。', opts: ['它', '他', '她', '你'], a: 0, why: '动物用"它"。' },
    { t: 'order', words: ['它', '很', '小'], a: '它很小。', en: 'It is small.' },
    { t: 'choice', q: '"他、她、它"的读音：', opts: ['都读 tā', '都不一样', '只有"它"读 tā', '他读 tá'], a: 0, why: '三个字读音一样，写法不一样。' },
    { t: 'choice', q: '说一只猫，用：', opts: ['它', '他', '她', '您'], a: 0, why: '动物用"它"。' }
  ],
  bop: {
    b: '老师出示一只小猫的照片："这是我的猫。它叫……。它很可爱。"写"它"在黑板上。',
    o: ['能认读"它 tā"', '能用"它"说动物和东西', '分清"他、她、它"'],
    pre: '复习"他、她、猫、狗"。',
    p: '① 读 tā，讲三个"tā"的写法；② 分类：哥哥——他，妈妈——她，猫——它；③ 学生介绍自己的宠物或喜欢的动物："它叫……，它……岁。"',
    post: '看图选择"他／她／它"；或做本页练习 1–4。',
    s: '板书：他（男）／ 她（女）／ 它（动物、东西）＝ 都读 tā。作业：介绍一只你喜欢的动物，用"它"。'
  },
  act: [
    { tag: '游戏', name: '他她它', how: '老师出示图片（男孩、女孩、狗、手机），学生举"他／她／它"的卡片。' },
    { tag: '展示', name: '我的宠物', how: '学生带宠物照片（或画），介绍："这是我的狗。它叫……。它三岁。我很喜欢它。"' },
    { tag: '游戏', name: '猜猜它是谁', how: '一人描述一种动物："它很小，它喜欢吃鱼……"，其他人猜。' }
  ],
  teach: [
    { h: '三个 tā', p: '口语里听不出区别，写的时候要分：他（男性，也用于不知道性别的人）、她（女性）、它（动物、东西）。' },
    { h: '口语习惯', p: '口语里说东西时常不用"它"，直接重复名词或省略。' }
  ],
  err: [
    { x: '我的猫，他很漂亮。', v: '我的猫，它很漂亮。', why: '动物用"它"。' },
    { x: '它们是我的书们。', v: '它们是我的书。', why: '名词不加"们"。' }
  ],
  hz: [{ c: '它', rad: '宀', radName: '宝盖头', radMean: '房子 roof, house', struct: '上下结构', parts: '宀 + 匕', tip: '古字是一条蛇的样子。以前人们见面问"无它乎？"（没有蛇吧？），后来"它"指人以外的东西。', fam: '宝盖头的字：家、字、客（不客气）。' }],
  cul: ['"它"字本来是"蛇"，古人住在野外怕蛇，见面问"有没有它"——后来就用"它"指东西和动物。', '中国人对宠物很有感情时，有时也会用"他"或"她"来说自己的猫狗。'],
  syn: [],
  ant: [],
  rel: ['他', '她', '它们', '猫', '狗']
}

});
