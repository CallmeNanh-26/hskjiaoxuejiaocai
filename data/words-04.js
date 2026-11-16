// HSK1 教学参考 · 第 4 批（10 词）：第 店 点 电话 电脑 电视 电影 电影院 弟弟 东西
window.H1_WORDS = window.H1_WORDS || {};
Object.assign(H1_WORDS, {

'第': {
  pos: [['前缀', 'prefix']],
  zh: ['放在数字前面，表示顺序：第一、第二、第三。'],
  en: ['prefix for ordinal numbers: dì-yī (first), dì-èr (second), dì-sān (third)'],
  syl: [{ py: 'dì', i: 'd', f: 'i', t: 4 }],
  phon: [
    '第四声，全降。声母 d 不送气。',
    '"第一"读 dì-yī："一"在这里不变调，读第一声。',
    '"第二"说 dì-èr，不说"第两"。'
  ],
  img: { src: 'img/di.jpg', cap: "第一！", by: "Trickway", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Ferhat Karmil 2023 WCCC gold medal obverse.jpg" },
  use: ['第 + 数字：第一、第二、第十', '第 + 数字 + 课 / 天：第一课、第三天', '第 + 数字 + 个 + 名词：第一个人'],
  ex: [
    { ctx: '课本', zh: '这 是 第 一 课 。', py: 'Zhè shì dì-yī kè.', en: 'This is Lesson One.' },
    { ctx: '课堂', zh: '今天 学习 第 二 课 。', py: 'Jīntiān xuéxí dì-èr kè.', en: 'Today we study Lesson Two.' },
    { ctx: '时间', zh: '今天 是 第 三 天 。', py: 'Jīntiān shì dì-sān tiān.', en: 'Today is the third day.' }
  ],
  drill: [
    { t: 'choice', q: '"first" 是：', opts: ['一个', '第一', '一第', '一点'], a: 1, why: '第 + 数字 表示顺序。' },
    { t: 'order', words: ['是', '这', '课', '第', '五'], a: '这是第五课。', en: 'This is Lesson Five.' },
    { t: 'choice', q: '"second" 怎么说？', opts: ['第二', '第两', '二第', '两个'], a: 0, why: '说"第二"，不说"第两"。' },
    { t: 'choice', q: '第一、第二、___', opts: ['第三', '三个', '三点', '三岁'], a: 0, why: '第一、第二、第三。' }
  ],
  bop: {
    b: '请三位学生到前面比赛（谁先写完自己的名字）。结束后老师宣布："他是第一，她是第二，他是第三！"',
    o: ['能听、说、认读"第 dì"', '能说第一到第十', '能说"第……课"'],
    pre: '全班数一到十；老师翻开课本问："这是哪一课？"',
    p: '① 跟读 dì-yī、dì-èr、dì-sān……；② 学生排成一队报数："我是第一个""我是第二个"；③ 翻书问答："这是第几课？""这是第……课。"',
    post: '老师说 first / fifth / tenth，学生说中文；或做本页练习 1–4。',
    s: '板书：第 + 数字（第二 ✓ 第两 ✗）。作业：写出今天是这个星期的第几天。'
  },
  act: [
    { tag: '游戏', name: '排队报数', how: '学生排成一列，从前往后说"我是第一个""我是第二个"……然后打乱顺序再来一次，看谁反应快。' },
    { tag: '竞赛', name: '小比赛', how: '做任何一个小比赛（抢读词卡、写字），结束后大家一起说出名次："……是第一，……是第二。"' },
    { tag: 'TPR', name: '第几个站起来', how: '每排学生坐好，老师说"第三个！"，每排的第三个人站起来。' }
  ],
  teach: [
    { h: '一 / 二 的读法', p: '"第一"的"一"读原调 yī；"第二"用"二"不用"两"。' },
    { h: '对比', p: '三个人（数量）／ 第三个人（顺序）。用排队的学生演示最直观。' }
  ],
  err: [
    { x: '第两课', v: '第二课', why: '表示顺序用"二"。' },
    { x: '一第课', v: '第一课', why: '"第"放在数字前面。' }
  ],
  hz: [{ c: '第', rad: '⺮', radName: '竹字头', radMean: '竹子 bamboo', struct: '上下结构', parts: '⺮ + 弓 + 丨 + 丿', tip: '古时候在竹片上写字，一片一片按顺序排好，所以表示顺序的"第"有竹字头。下面和"弟"很像。', fam: '竹字头的字：笔、筷、篮（超纲）。形近字：弟（弟弟）。' }],
  cul: ['"第一"也表示"最好的"：考试第一、比赛第一名。', '中国的楼层从"一楼"开始数，没有"零楼"。'],
  syn: [],
  ant: [],
  rel: ['一', '二', '三', '课', '个']
},

'店': {
  pos: [['名词', 'noun']],
  zh: ['卖东西的地方；商店。'],
  en: ['shop; store'],
  syl: [{ py: 'diàn', i: 'd', f: 'ian', t: 4 }],
  phon: [
    '第四声，全降。',
    '韵母 ian 读起来像"烟 yān"。',
    '和"电 diàn"读音一样。'
  ],
  img: { src: 'img/dian.jpg', cap: "这个店很好看。", by: "PattayaPatrol", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · DFC 4562 Warm red lanterns glow above a cozy street-side waiting area in Nong Pla Lai Pattaya - a quiet moment before the nights bustle.jpg" },
  use: ['这个店 / 那个店', '书店、饭店、商店', '店里'],
  ex: [
    { ctx: '描述', zh: '这个 店 很 大 。', py: 'Zhège diàn hěn dà.', en: 'This shop is big.' },
    { ctx: '购物', zh: '我 去 书店 买 书 。', py: 'Wǒ qù shūdiàn mǎi shū.', en: 'I go to the bookstore to buy books.' },
    { ctx: '描述', zh: '店 里 人 很 多 。', py: 'Diàn lǐ rén hěn duō.', en: 'There are many people in the shop.' },
    { ctx: '评价', zh: '那个 店 的 东西 很 贵 。', py: 'Nàge diàn de dōngxi hěn guì.', en: 'Things in that shop are expensive.' }
  ],
  drill: [
    { t: 'choice', q: '买书去 ___ 。', opts: ['书店', '饭店', '医院', '学校'], a: 0, why: '书店 = bookstore。' },
    { t: 'choice', q: '吃饭去 ___ 。', opts: ['书店', '饭店', '电影院', '公司'], a: 1, why: '饭店 = restaurant。' },
    { t: 'order', words: ['很', '店', '这个', '新'], a: '这个店很新。', en: 'This shop is new.' },
    { t: 'choice', say: '店', q: '听录音，选拼音。', opts: ['diàn', 'tiàn', 'dàn', 'diǎn'], a: 0, why: '店 diàn，第四声。' }
  ],
  bop: {
    b: '展示几张街边小店的照片："这是什么地方？可以买什么？"',
    o: ['能听、说、认读"店 diàn"', '能说"书店、饭店、商店"', '能说"我去……店买……"'],
    pre: '问：你在哪儿买书？在哪儿吃饭？',
    p: '① 跟读 diàn、shūdiàn、fàndiàn、shāngdiàn；② 图片配对：书—书店，饭—饭店；③ 两人问答："你去哪儿？""我去书店买书。"',
    post: '老师说东西，学生说去什么店；或做本页练习 1–4。',
    s: '板书：书 + 店 = 书店；饭 + 店 = 饭店。作业：写出家附近的两个店。'
  },
  act: [
    { tag: '拼词', name: '什么店？', how: '发字卡：书、饭、商、店。学生拼出不同的店，并说在那儿可以做什么。' },
    { tag: '情境表演', name: '开小店', how: '每组开一个"店"，给店起名字、摆上图片商品，其他组来买东西："这个多少钱？"' },
    { tag: '画画', name: '我家旁边的店', how: '学生画一条街，画上两三个店并写上中文名字，向同桌介绍。' }
  ],
  teach: [
    { h: '词族', p: '"店"常和别的字组成词：书店、饭店、商店。让学生猜"水果店"卖什么。' },
    { h: '饭店', p: '"饭店"可以是吃饭的地方，也可以是住的地方（hotel）。HSK1 先教"吃饭的地方"。' }
  ],
  err: [
    { x: '我去店书。', v: '我去书店。', why: '"店"放在后面：书店。' },
    { x: 'tiàn', v: 'diàn', why: 'd 不送气。' }
  ],
  hz: [{ c: '店', rad: '广', radName: '广字旁', radMean: '房子 building', struct: '半包围结构', parts: '广 + 占', tip: '"广"像一边开着的房子；里面的"占 zhàn"是占地方——占了一间房子卖东西，就是"店"。', fam: '广字旁的字多和房子有关：床、座、府（部分超纲）。' }],
  cul: ['中国街上有很多小店，很多店开到很晚。', '现在很多中国人在网上的"店"买东西，这叫"网店"。'],
  syn: [{ w: '商店', note: '商店 = 店，更正式一点。' }],
  ant: [],
  rel: ['商店', '书店', '饭店', '超市', '买', '卖']
},

'点': {
  pos: [['量词', 'measure word'], ['名词', 'noun']],
  zh: ['表示时间：几点、八点。', '小的痕迹；一点儿。'],
  en: ['o\'clock: bā diǎn = eight o\'clock', 'dot; point; a bit'],
  syl: [{ py: 'diǎn', i: 'd', f: 'ian', t: 3 }],
  phon: [
    '第三声：在句子里读得低就可以。',
    '两个第三声在一起，前一个变第二声：几点 jǐ diǎn 读成 jí diǎn；九点 读成 jiú diǎn。',
    '"两点"说 liǎng diǎn，不说"二点"。'
  ],
  img: { src: 'img/dian3.jpg', cap: "现在几点？", by: "Wikimedia Commons contributor", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Clock, Cremyll Quay Landing.jpg" },
  use: ['数字 + 点：三点、十点', '几点？', '……点半：八点半', '时间 + 做什么：我八点上课'],
  ex: [
    { ctx: '报时', zh: '现在 三 点 。', py: 'Xiànzài sān diǎn.', en: 'It\'s three o\'clock now.' },
    { ctx: '提问', zh: '现在 几 点 ？', py: 'Xiànzài jǐ diǎn?', en: 'What time is it now?' },
    { ctx: '作息', zh: '我 七 点 起床 。', py: 'Wǒ qī diǎn qǐchuáng.', en: 'I get up at seven.' },
    { ctx: '约定', zh: '明天 九 点 见 。', py: 'Míngtiān jiǔ diǎn jiàn.', en: 'See you at nine tomorrow.' }
  ],
  drill: [
    { t: 'choice', q: '2:00 怎么说？', opts: ['二点', '两点', '二个点', '两个点'], a: 1, why: '说"两点"。' },
    { t: 'order', words: ['点', '现在', '几'], a: '现在几点？', en: 'What time is it now?' },
    { t: 'choice', q: '哪一句是对的？', opts: ['我上课八点。', '我八点上课。', '八点我课上。', '我上八点课。'], a: 1, why: '时间放在动词前面。' },
    { t: 'choice', say: '十点', q: '听录音，选时间。', opts: ['4:00', '10:00', '7:00', '11:00'], a: 1, why: '十点 shí diǎn = 10:00。' }
  ],
  bop: {
    b: '老师指着教室里的钟（或手表）："现在几点？"',
    o: ['能听、说、认读"点 diǎn"', '能说整点时间', '能问"现在几点？"并回答'],
    pre: '快速复习数字一到十二。',
    p: '① 跟读 yī diǎn、liǎng diǎn……shí\'èr diǎn；② 拨教具钟，学生抢答；③ 两人问答："你几点起床／上课／睡觉？"',
    post: '老师说时间，学生在纸上画出钟面；或做本页练习 1–4。',
    s: '板书：数字 + 点（两点 ✓ 二点 ✗）；我 + 时间 + 做什么。作业：写出自己一天里的三个时间。'
  },
  act: [
    { tag: '游戏', name: '老狼老狼几点了', how: '一人当"老狼"背对大家，其他人问"老狼老狼几点了？"，老狼回答"三点"，大家就走三步；回答"十二点"时老狼转身抓人。' },
    { tag: '教具', name: '拨钟', how: '学生两人一组，一人用纸钟拨时间，另一人说"现在……点"。' },
    { tag: 'TPR', name: '身体时钟', how: '学生用手臂当时针，老师说"三点""六点""九点"，学生摆出来。' }
  ],
  teach: [
    { h: '两点', p: '2:00 说"两点"，12:00 说"十二点"。' },
    { h: '语序', p: '时间放在动词前面：我 + 八点 + 上课。' }
  ],
  err: [
    { x: '现在二点。', v: '现在两点。', why: '2:00 说"两点"。' },
    { x: '我起床七点。', v: '我七点起床。', why: '时间放在动词前面。' }
  ],
  hz: [{ c: '点', rad: '灬', radName: '四点底', radMean: '火 fire', struct: '上下结构', parts: '占 + 灬', tip: '下面正好是四个小"点"，看到四个点就想到"点"。上面的"占 zhàn"和"店"里的一样。', fam: '四点底的字：热、黑、照（部分超纲）。形近：店（广 + 占）。' }],
  cul: ['中国人很看重守时，和别人约好"九点见"，最好提前几分钟到。', '中国全国只用一个时间：北京时间。'],
  syn: [],
  ant: [],
  rel: ['半', '分', '几', '现在', '时间', '小时']
},

'电话': {
  pos: [['名词', 'noun']],
  zh: ['用来和远处的人说话的机器；也指电话号码。'],
  en: ['telephone; phone call; phone number'],
  syl: [{ py: 'diàn', i: 'd', f: 'ian', t: 4 }, { py: 'huà', i: 'h', f: 'ua', t: 4 }],
  phon: [
    '两个第四声：两个音节都要降，第一个可以降得少一点，第二个降到底。',
    'huà：从 u 开始，嘴先圆再张开。',
    'h 的气流从喉咙出来，比英语的 h 重一点。'
  ],
  img: { src: 'img/dianhua.jpg', cap: "他在打电话。", by: "Unknown author", lic: "CC0", from: "Wikimedia Commons · Hand-smartphone-technology-calling.jpg" },
  use: ['打电话', '我的电话 / 你的电话', '电话是多少？'],
  ex: [
    { ctx: '物品', zh: '这 是 我 的 电话 。', py: 'Zhè shì wǒ de diànhuà.', en: 'This is my phone.' },
    { ctx: '问号码', zh: '你 的 电话 是 多少 ？', py: 'Nǐ de diànhuà shì duōshao?', en: 'What\'s your phone number?' },
    { ctx: '动作', zh: '妈妈 在 打电话 。', py: 'Māma zài dǎ diànhuà.', en: 'Mom is on the phone.' }
  ],
  drill: [
    { t: 'choice', q: '我给朋友打 ___ 。', opts: ['电话', '电视', '电影', '电脑'], a: 0, why: '打电话。' },
    { t: 'order', words: ['多少', '你', '电话', '是', '的'], a: '你的电话是多少？', en: 'What\'s your phone number?' },
    { t: 'choice', say: '电话', q: '听录音，选出听到的词。', opts: ['电话', '电视', '电脑', '电影'], a: 0, why: '电话 diànhuà。' },
    { t: 'choice', q: '问电话号码用哪个词？', opts: ['几', '多少', '什么', '谁'], a: 1, why: '你的电话是多少？' }
  ],
  bop: {
    b: '老师拿出手机，假装电话响了："喂？"然后问："这是什么？"',
    o: ['能听、说、认读"电话 diànhuà"', '能问"你的电话是多少？"', '能说出一个电话号码'],
    pre: '复习数字零到九；问：电话号码里的 1 怎么读？（可教 yāo，拓展）',
    p: '① 跟读 diànhuà；② 老师读号码，学生写；③ 两人互相问电话号码并写下来。',
    post: '抽几位学生读同伴的电话号码；或做本页练习 1–4。',
    s: '板书：你的电话是多少？／ 打电话。作业：用中文读出家人的电话号码。'
  },
  act: [
    { tag: '调查', name: '班级通讯录', how: '学生互相问"你的电话是多少？"（可以用编的号码），做成一张班级通讯录。' },
    { tag: '游戏', name: '号码宾果', how: '每人写一个六位数。老师一个一个读数字，听到自己有的数字就划掉，先划完的人赢。' },
    { tag: '情境表演', name: '打电话', how: '两人背对背："喂，你好！""你好！你是……吗？""我是。"' }
  ],
  teach: [
    { h: '两个意思', p: '"电话"既是机器，也可以指号码：你的电话是多少？' },
    { h: '词族"电"', p: '电话、电脑、电视、电影 都有"电"，可以一起教。' }
  ],
  err: [
    { x: '你的电话是几？', v: '你的电话是多少？', why: '问号码用"多少"。' },
    { x: '我做电话。', v: '我打电话。', why: '动词用"打"。' }
  ],
  hz: [
    { c: '电', rad: '田', radName: '田部（有的字典归"乚"部）', radMean: '', struct: '独体字', parts: '日 + 乚', tip: '繁体字"電"上面是"雨"，下面像一道闪电——下雨时的闪电就是"电"。', fam: '带"电"的词：电话、电脑、电视、电影。' },
    { c: '话', rad: '讠', radName: '言字旁', radMean: '说话 speech', struct: '左右结构', parts: '讠 + 舌', tip: '"讠"表示说话，"舌"是舌头——用舌头说出来的就是"话"。', fam: '言字旁的字：说、请、读、课、谁、认识。' }
  ],
  cul: ['"电话"的字面意思是"用电传的话"。汉语常常这样造新词：电 + 脑 = 电脑，电 + 影 = 电影。', '中国的手机号码有十一位。'],
  syn: [{ w: '手机', note: '手机 = mobile phone。' }],
  ant: [],
  rel: ['打电话', '手机', '喂', '多少', '电脑']
},

'电脑': {
  pos: [['名词', 'noun']],
  zh: ['可以工作、学习、上网的机器。'],
  en: ['computer'],
  syl: [{ py: 'diàn', i: 'd', f: 'ian', t: 4 }, { py: 'nǎo', i: 'n', f: 'ao', t: 3 }],
  phon: [
    '第四声 + 第三声：先降下来，再读低低的第三声。',
    '声母 n：舌尖顶住上牙后面，气从鼻子出来，不要读成 l。',
    '韵母 ao：从 a 滑向 o。'
  ],
  img: { src: 'img/diannao.jpg', cap: "桌子上有一个电脑。", by: "Norbert Levajsics levajsics", lic: "CC0", from: "Wikimedia Commons · Laptop on a neat desk (Unsplash).jpg" },
  use: ['我的电脑', '买电脑', '新电脑'],
  ex: [
    { ctx: '物品', zh: '这 是 我 的 电脑 。', py: 'Zhè shì wǒ de diànnǎo.', en: 'This is my computer.' },
    { ctx: '评价', zh: '这个 电脑 很 贵 。', py: 'Zhège diànnǎo hěn guì.', en: 'This computer is expensive.' },
    { ctx: '购物', zh: '我 想 买 新 电脑 。', py: 'Wǒ xiǎng mǎi xīn diànnǎo.', en: 'I want to buy a new computer.' },
    { ctx: '位置', zh: '电脑 在 桌子 上 。', py: 'Diànnǎo zài zhuōzi shàng.', en: 'The computer is on the desk.' }
  ],
  drill: [
    { t: 'choice', say: '电脑', q: '听录音，选出听到的词。', opts: ['电话', '电视', '电脑', '电影'], a: 2, why: '电脑 diànnǎo。' },
    { t: 'order', words: ['电脑', '我', '有', '没'], a: '我没有电脑。', en: 'I don\'t have a computer.' },
    { t: 'choice', q: '"computer" 是：', opts: ['电视', '电脑', '手机', '电影'], a: 1, why: '电脑 = computer。' },
    { t: 'choice', q: '这个电脑很 ___ ，我不买。', opts: ['贵', '好吃', '高兴', '忙'], a: 0, why: '东西的价钱高用"贵"。' }
  ],
  bop: {
    b: '老师指着教室里的电脑（或拿出笔记本电脑）："这是什么？你们家有吗？"',
    o: ['能听、说、认读"电脑 diànnǎo"', '能说"这是我的电脑"', '能分清电脑、电话、电视'],
    pre: '展示电话、电视、电脑的图片，看学生认识几个。',
    p: '① 跟读 diànnǎo，注意 n；② 看图说话："这是电脑／电话／电视"；③ 两人问答："你有电脑吗？""你的电脑贵吗？"',
    post: '老师描述（"可以看电影、可以学习"），学生猜是什么；或做本页练习 1–4。',
    s: '板书：电 + 脑 = 电脑。作业：数一数家里有几个带"电"的东西，用中文写下来。'
  },
  act: [
    { tag: '游戏', name: '带电的词', how: '老师快速出示图片（电话、电脑、电视、电影），学生抢答；答对的小组得分。' },
    { tag: '调查', name: '你有电脑吗？', how: '学生问五位同学"你有电脑吗？"，统计"有"和"没有"的人数并报告。' },
    { tag: '猜词', name: '电 + ？', how: '老师给出"电 + 脑（brain）""电 + 话（speech）""电 + 影（shadow）"的字面意思，让学生猜是什么东西。' }
  ],
  teach: [
    { h: '字面意思', p: '电脑 = "电的脑子"（electric brain），学生一听就能记住。' },
    { h: '量词', p: '电脑正式的量词是"台"（超纲）；HSK1 阶段可以先说"一个电脑"。' }
  ],
  err: [
    { x: 'diànlǎo', v: 'diànnǎo', why: 'n 是鼻音，不是 l。' },
    { x: '我不有电脑。', v: '我没有电脑。', why: '"有"的否定是"没有"。' }
  ],
  hz: [{ c: '脑', rad: '月', radName: '月字旁（肉月旁）', radMean: '身体 body', struct: '左右结构', parts: '月 + 㐫', tip: '左边的"月"在这里表示身体（肉），右边上面三笔像头发，下面像头——头里面的东西就是"脑"。', fam: '月字旁表示身体的字：脸、腿、脚、肚（超纲）。' }],
  cul: ['汉语喜欢用已有的字造新词，而不是直接借用外语的读音：computer → 电脑，telephone → 电话。'],
  syn: [],
  ant: [],
  rel: ['电话', '电视', '手机', '工作', '学习']
},

'电视': {
  pos: [['名词', 'noun']],
  zh: ['可以看节目、看电影的机器；也指电视节目。'],
  en: ['television; TV'],
  syl: [{ py: 'diàn', i: 'd', f: 'ian', t: 4 }, { py: 'shì', i: 'sh', f: '-i', t: 4 }],
  phon: [
    '两个第四声：都要降。',
    'sh 是卷舌音；shi 的韵母不是"衣 yī"。',
    '对比：电视 diànshì ／ 电话 diànhuà。'
  ],
  img: { src: 'img/dianshi.jpg', cap: "家里的电视", by: "Noah Wulf", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Living Room in Henderson House.jpg" },
  use: ['看电视', '在看电视', '不看电视'],
  ex: [
    { ctx: '日常', zh: '我 看 电视 。', py: 'Wǒ kàn diànshì.', en: 'I watch TV.' },
    { ctx: '进行', zh: '爸爸 在 看 电视 。', py: 'Bàba zài kàn diànshì.', en: 'Dad is watching TV.' },
    { ctx: '习惯', zh: '我 晚上 不 看 电视 。', py: 'Wǒ wǎnshang bú kàn diànshì.', en: 'I don\'t watch TV in the evening.' },
    { ctx: '提问', zh: '你 爱 看 电视 吗 ？', py: 'Nǐ ài kàn diànshì ma?', en: 'Do you like watching TV?' }
  ],
  drill: [
    { t: 'choice', q: '我 ___ 电视。', opts: ['看', '听', '读', '打'], a: 0, why: '看电视。' },
    { t: 'order', words: ['电视', '在', '弟弟', '看'], a: '弟弟在看电视。', en: 'My little brother is watching TV.' },
    { t: 'choice', say: '电视', q: '听录音，选出听到的词。', opts: ['电话', '电视', '电脑', '电影'], a: 1, why: '电视 diànshì。' },
    { t: 'choice', q: '哪一句是对的？', opts: ['我看电视晚上。', '我晚上看电视。', '晚上看我电视。', '我电视看晚上。'], a: 1, why: '时间放在动词前面。' }
  ],
  bop: {
    b: '老师拿"遥控器"对着黑板按一下："老师想看电视！你们爱看电视吗？"',
    o: ['能听、说、认读"电视 diànshì"', '能说"我看电视"', '能说"……在看电视"'],
    pre: '问：晚上在家你做什么？看学生会不会说"看……"。',
    p: '① 跟读 diànshì、kàn diànshì；② 看图说话："爸爸在看电视"；③ 两人问答："你晚上看电视吗？""你爱看电视吗？"',
    post: '老师做动作（看电视、打电话、看书），学生说句子；或做本页练习 1–4。',
    s: '板书：看 + 电视 ／ 在 + 看电视。作业：问家人"你爱看电视吗？"。'
  },
  act: [
    { tag: 'TPR', name: '看、听、打', how: '老师说"电视"，学生做"看"的动作并说"看电视"；说"电话"，做"打电话"；说"歌"，做"听歌"。' },
    { tag: '调查', name: '你晚上做什么？', how: '学生问同学"你晚上看电视吗？"，统计全班有多少人看电视。' },
    { tag: '情境表演', name: '小小电视台', how: '用纸箱做一个"电视"，学生在"电视"里说："大家好！我是……。今天天气很好。"' }
  ],
  teach: [
    { h: '搭配', p: '看电视、看电影、看书 都用"看"。' },
    { h: '字面意思', p: '电 + 视（看）= 用电来看的东西。' }
  ],
  err: [
    { x: '我看电视在家。', v: '我在家看电视。', why: '"在 + 地方"放在动词前面。' },
    { x: 'diànsì', v: 'diànshì', why: 'sh 要卷舌。' }
  ],
  hz: [{ c: '视', rad: '礻', radName: '示字旁', radMean: '', struct: '左右结构', parts: '礻 + 见', tip: '右边是"见"（看见）——"视"的意思就是"看"。电视 = 用电"看"的东西。', fam: '含"见"的字：现（现在）、观（超纲）。' }],
  cul: ['每年春节前一天的晚上，很多中国家庭一起看电视上的"春节联欢晚会"（春晚）。'],
  syn: [],
  ant: [],
  rel: ['看', '电影', '电脑', '晚上', '家']
},

'电影': {
  pos: [['名词', 'noun']],
  zh: ['在电影院或电视上看的、有故事的影片。'],
  en: ['movie; film'],
  syl: [{ py: 'diàn', i: 'd', f: 'ian', t: 4 }, { py: 'yǐng', i: 'y', f: 'ing', t: 3 }],
  phon: [
    '第四声 + 第三声：先降，再读低低的第三声。',
    'yǐng 是后鼻音，结束时舌头后面抬起来。',
    '对比：电影 diànyǐng ／ 电视 diànshì。'
  ],
  img: { src: 'img/dianying.jpg', cap: "她在看电影。", by: "U.S. Air Force photo by Airman William Tracy", lic: "Public domain", from: "Wikimedia Commons · 50th FSS hosts free movie night (4075059).jpg" },
  use: ['看电影', '这个电影很好看', '什么电影？'],
  ex: [
    { ctx: '爱好', zh: '我 爱 看 电影 。', py: 'Wǒ ài kàn diànyǐng.', en: 'I love watching movies.' },
    { ctx: '评价', zh: '这个 电影 很 好看 。', py: 'Zhège diànyǐng hěn hǎokàn.', en: 'This movie is good.' },
    { ctx: '建议', zh: '我们 去 看 电影 吧 。', py: 'Wǒmen qù kàn diànyǐng ba.', en: 'Let\'s go see a movie.' },
    { ctx: '提问', zh: '你 想 看 什么 电影 ？', py: 'Nǐ xiǎng kàn shénme diànyǐng?', en: 'What movie do you want to see?' }
  ],
  drill: [
    { t: 'choice', q: '这个电影很 ___ 。', opts: ['好看', '好吃', '好听', '贵'], a: 0, why: '电影用"好看"。' },
    { t: 'order', words: ['电影', '看', '我们', '吧', '去'], a: '我们去看电影吧。', en: 'Let\'s go see a movie.' },
    { t: 'choice', say: '电影', q: '听录音，选出听到的词。', opts: ['电话', '电视', '电脑', '电影'], a: 3, why: '电影 diànyǐng。' },
    { t: 'choice', q: 'A：你想看什么电影？　B：___', opts: ['我想看中国电影。', '我想吃电影。', '电影很大。', '我在电影。'], a: 0, why: '看 + 电影。' }
  ],
  bop: {
    b: '播放一段电影预告片的前十秒（或展示一张电影海报）："这是什么？你们看过吗？"',
    o: ['能听、说、认读"电影 diànyǐng"', '能说"我爱看电影"', '能用"我们去看电影吧"提建议'],
    pre: '问：周末你喜欢做什么？',
    p: '① 跟读 diànyǐng、kàn diànyǐng；② 看海报说："这个电影很好看／不好看"；③ 两人约看电影："我们去看电影吧。""好！几点？""七点。"',
    post: '学生说出一部自己喜欢的电影，并说"这个电影很好看"；或做本页练习 1–4。',
    s: '板书：看电影 ／ 我们去看电影吧。作业：写一句话介绍你最爱看的电影。'
  },
  act: [
    { tag: '情境表演', name: '约朋友看电影', how: '两人一组约时间："明天我们去看电影吧。""好，几点？""八点。""明天见！"' },
    { tag: '调查', name: '好看不好看', how: '老师出示三张电影海报，全班投票"好看／不好看"，复习数字。' },
    { tag: '游戏', name: '你演我猜', how: '一人用动作表演一部有名的电影，其他人猜；猜到后全班说"这个电影很好看！"' }
  ],
  teach: [
    { h: '好看 / 好吃 / 好听', p: '电影、书用"好看"；饭菜用"好吃"；歌用"好听"。' },
    { h: '成组教学', p: '电影—电影院—看电影 一起教。' }
  ],
  err: [
    { x: '这个电影很好吃。', v: '这个电影很好看。', why: '电影用"好看"。' },
    { x: '我看电影爱。', v: '我爱看电影。', why: '"爱"放在"看"的前面。' }
  ],
  hz: [{ c: '影', rad: '彡', radName: '三撇', radMean: '', struct: '左右结构', parts: '景 + 彡', tip: '左边"景"上面有"日"（太阳），右边三撇像太阳照出来的影子。电影 = "用电放出来的影子"。', fam: '带"影"的词：电影、电影院、影子（超纲）。' }],
  cul: ['"电影"的字面意思是"电的影子"，最早在上海叫"影戏"。', '中国功夫电影在世界上很有名。'],
  syn: [],
  ant: [],
  rel: ['电影院', '看', '好看', '电视']
},

'电影院': {
  pos: [['名词', 'noun']],
  zh: ['看电影的地方。'],
  en: ['cinema; movie theater'],
  syl: [{ py: 'diàn', i: 'd', f: 'ian', t: 4 }, { py: 'yǐng', i: 'y', f: 'ing', t: 3 }, { py: 'yuàn', i: 'y', f: 'üan', t: 4 }],
  phon: [
    '第四声 + 第三声 + 第四声：降—低—降。',
    'yuàn 的开头是 ü，嘴唇要圆。',
    '"院"和"医院"的"院"是同一个字、同一个读音。'
  ],
  img: { src: 'img/dianyingyuan.jpg', cap: "电影院里", by: "A.Savin", lic: "FAL", from: "Wikimedia Commons · Berlin Filmtheater am Friedrichshain asv2024-06 img6.jpg" },
  use: ['去电影院', '在电影院 + 看电影', '电影院在……'],
  ex: [
    { ctx: '去向', zh: '我 去 电影院 。', py: 'Wǒ qù diànyǐngyuàn.', en: 'I\'m going to the cinema.' },
    { ctx: '位置', zh: '电影院 在 那边 。', py: 'Diànyǐngyuàn zài nàbiān.', en: 'The cinema is over there.' },
    { ctx: '活动', zh: '我们 在 电影院 看 电影 。', py: 'Wǒmen zài diànyǐngyuàn kàn diànyǐng.', en: 'We watch movies at the cinema.' },
    { ctx: '描述', zh: '电影院 里 人 很 多 。', py: 'Diànyǐngyuàn lǐ rén hěn duō.', en: 'There are many people in the cinema.' }
  ],
  drill: [
    { t: 'choice', q: '看电影去 ___ 。', opts: ['医院', '电影院', '书店', '饭店'], a: 1, why: '在电影院看电影。' },
    { t: 'order', words: ['在', '电影院', '哪儿'], a: '电影院在哪儿？', en: 'Where is the cinema?' },
    { t: 'choice', q: '生病了去 ___ 。', opts: ['电影院', '医院', '学校', '超市'], a: 1, why: '医院 = hospital。两个词都有"院"。' },
    { t: 'choice', say: '电影院', q: '听录音，选出听到的词。', opts: ['电影', '电影院', '医院', '电视'], a: 1, why: '电影院 diànyǐngyuàn。' }
  ],
  bop: {
    b: '展示一张电影院的照片："这是哪儿？在这儿做什么？"',
    o: ['能听、说、认读"电影院 diànyǐngyuàn"', '能说"我去电影院"', '能说"在电影院看电影"'],
    pre: '复习"电影、医院"，问：电影 + 院 = ？',
    p: '① 跟读 diàn—yǐng—yuàn；② 地点图片替换："我去电影院／医院／书店"；③ 两人问答："电影院在哪儿？""在那边。"',
    post: '老师说活动，学生说地方（看电影 → 电影院）；或做本页练习 1–4。',
    s: '板书：电影 + 院 = 电影院；在电影院看电影。作业：写一句"我和……去电影院"。'
  },
  act: [
    { tag: '配对', name: '在哪儿做什么', how: '左边贴地点（电影院、医院、书店、饭店），右边贴活动（看电影、看病、买书、吃饭），学生连线并说句子。' },
    { tag: '情境表演', name: '小电影院', how: '教室变成电影院：学生"买票"入场（"一个人，多少钱？"），老师放一小段中文动画。' },
    { tag: '问路', name: '电影院在哪儿？', how: '在黑板上画简单的地图，学生两人问答："电影院在哪儿？""在这边／那边。"' }
  ],
  teach: [
    { h: '构词', p: '电影 + 院。"院"表示一种场所：医院、电影院。' },
    { h: '语序', p: '在 + 电影院 + 看电影。' }
  ],
  err: [
    { x: '我们看电影在电影院。', v: '我们在电影院看电影。', why: '"在 + 地方"放在动词前面。' },
    { x: '电影店', v: '电影院', why: '看电影的地方叫"院"，不叫"店"。' }
  ],
  hz: [{ c: '院', rad: '阝', radName: '左耳旁', radMean: '山坡、高地 mound', struct: '左右结构', parts: '阝 + 完', tip: '"院"原来是有围墙的院子，后来指一类场所。右边的"完 wán"表示读音。', fam: '带"院"的词：医院、电影院、学院（超纲）。左耳旁的字：那、都（右耳旁）要分清左右。' }],
  cul: ['中国的电影院常常在大商场的最高一层。', '很多人在手机上先买好电影票，再去电影院。'],
  syn: [],
  ant: [],
  rel: ['电影', '医院', '看', '去', '那边']
},

'弟弟': {
  pos: [['名词', 'noun']],
  zh: ['同一个爸爸妈妈、比自己小的男孩子。'],
  en: ['younger brother'],
  syl: [{ py: 'dì', i: 'd', f: 'i', t: 4 }, { py: 'di', i: 'd', f: 'i', t: 0 }],
  phon: [
    '第四声 + 轻声：第一个 dì 重而降，第二个 di 轻而短。',
    '声母 d 不送气，不要读成 tìti。',
    '同类的词：爸爸 bàba、妹妹 mèimei。'
  ],
  img: { src: 'img/didi.jpg', cap: "哥哥和弟弟", by: "Saddam19", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Two brothers together in Bihar, India.jpg" },
  use: ['我弟弟 / 你弟弟', '有 + 一个 + 弟弟', '弟弟 + 几岁'],
  ex: [
    { ctx: '介绍', zh: '这 是 我 弟弟 。', py: 'Zhè shì wǒ dìdi.', en: 'This is my younger brother.' },
    { ctx: '家人', zh: '我 有 一 个 弟弟 。', py: 'Wǒ yǒu yí gè dìdi.', en: 'I have a younger brother.' },
    { ctx: '年龄', zh: '我 弟弟 八 岁 。', py: 'Wǒ dìdi bā suì.', en: 'My younger brother is eight.' },
    { ctx: '身份', zh: '弟弟 是 小学生 。', py: 'Dìdi shì xiǎoxuéshēng.', en: 'My younger brother is a primary school pupil.' }
  ],
  drill: [
    { t: 'choice', q: '比我小的男孩子是我 ___ 。', opts: ['哥哥', '弟弟', '姐姐', '妹妹'], a: 1, why: '弟弟 = younger brother。' },
    { t: 'order', words: ['有', '我', '弟弟', '没'], a: '我没有弟弟。', en: 'I don\'t have a younger brother.' },
    { t: 'choice', say: '弟弟', q: '听录音，选拼音。', opts: ['dìdi', 'dìdì', 'tìti', 'dīdi'], a: 0, why: '第四声 + 轻声。' },
    { t: 'choice', q: '哥哥 ↔ ___', opts: ['姐姐', '弟弟', '妹妹', '爸爸'], a: 1, why: '哥哥（大）↔ 弟弟（小）。' }
  ],
  bop: {
    b: '老师展示一张两兄弟的照片，指着小的那个："他是哥哥吗？不，他是弟弟。"',
    o: ['能听、说、认读"弟弟 dìdi"', '能说"我有 / 没有弟弟"', '能分清哥哥和弟弟'],
    pre: '复习"爸爸、妈妈、哥哥"，在家庭树上指一指。',
    p: '① 跟读 dìdi，拍手（重—轻）；② 在家庭树上加上"弟弟、妹妹"；③ 两人问答："你有弟弟吗？""他几岁？"',
    post: '老师指家庭树，学生快速说称呼；或做本页练习 1–4。',
    s: '板书：哥哥（大）— 我 — 弟弟（小）。作业：画家庭树，写上所有的称呼。'
  },
  act: [
    { tag: '调查', name: '你有弟弟吗？', how: '学生问同学"你有弟弟吗？""你有哥哥吗？"，统计全班的情况。' },
    { tag: '游戏', name: '大还是小', how: '老师说年龄："我十岁，他八岁，他是我……？"学生抢答"弟弟"。' },
    { tag: '节奏', name: '家人拍手歌', how: '全班拍手说："爸爸、妈妈、哥哥、姐姐、弟弟、妹妹"，重拍读第一个字，轻拍读第二个字。' }
  ],
  teach: [
    { h: '大小之分', p: '汉语的兄弟姐妹要分大小：哥哥／弟弟，姐姐／妹妹。' },
    { h: '省略"的"', p: '我弟弟、你弟弟，比"我的弟弟"更自然。' }
  ],
  err: [
    { x: '我有一弟弟。', v: '我有一个弟弟。', why: '数词后面要有量词"个"。' },
    { x: 'dìdì', v: 'dìdi', why: '第二个字读轻声。' }
  ],
  hz: [{ c: '弟', rad: '丷', radName: '八部（传统字典归"弓"部）', radMean: '', struct: '上下结构', parts: '丷 + 弓 + 丨 + 丿', tip: '上面两点像小男孩头上的两个小角（很调皮），中间是"弓"——拿着弓玩的小男孩是"弟弟"。', fam: '形近字：第（第一）= 竹字头 + 弟的下半部分。' }],
  cul: ['中国人称呼家人分得很细，哥哥和弟弟是两个不同的词，不能都叫 "brother"。', '对比自己小的男性朋友，有时也亲切地叫"小弟"或"老弟"。'],
  syn: [],
  ant: [{ w: '哥哥', note: 'older brother' }],
  rel: ['哥哥', '妹妹', '姐姐', '家人', '孩子']
},

'东西': {
  pos: [['名词', 'noun']],
  zh: ['各种物品；事物。'],
  en: ['thing; stuff'],
  syl: [{ py: 'dōng', i: 'd', f: 'ong', t: 1 }, { py: 'xi', i: 'x', f: 'i', t: 0 }],
  phon: [
    '第一声 + 轻声：dōng 高而平，xi 轻而短。',
    '读轻声 dōngxi 是"物品"；读 dōngxī（两个第一声）是"东边和西边"。',
    'x：舌尖放在下牙后面，不卷舌。'
  ],
  img: { src: 'img/dongxi.jpg', cap: "买了很多东西", by: "Donald Trung Quoc Don (Chữ Hán: 徵國單) - Wikimedia Commons - ©", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Holland & Barrett paper shopping bags, Winschoten (2019).jpg" },
  use: ['买东西 / 吃东西', '什么东西？', '很多东西'],
  ex: [
    { ctx: '购物', zh: '我 去 买 东西 。', py: 'Wǒ qù mǎi dōngxi.', en: 'I\'m going shopping.' },
    { ctx: '提问', zh: '这 是 什么 东西 ？', py: 'Zhè shì shénme dōngxi?', en: 'What is this thing?' },
    { ctx: '吃', zh: '我 想 吃 东西 。', py: 'Wǒ xiǎng chī dōngxi.', en: 'I want to eat something.' },
    { ctx: '位置', zh: '你 的 东西 在 桌子 上 。', py: 'Nǐ de dōngxi zài zhuōzi shàng.', en: 'Your things are on the table.' }
  ],
  drill: [
    { t: 'choice', q: '我去超市买 ___ 。', opts: ['东西', '时候', '名字', '天气'], a: 0, why: '买东西 = to shop。' },
    { t: 'order', words: ['东西', '是', '这', '什么'], a: '这是什么东西？', en: 'What is this thing?' },
    { t: 'choice', q: '"买东西"的意思是：', opts: ['to go east', 'to shop / buy things', 'to sell', 'to eat'], a: 1, why: '东西 = things。' },
    { t: 'choice', say: '东西', q: '听录音，选拼音。', opts: ['dōngxi', 'dòngxi', 'tōngxi', 'dōngshi'], a: 0, why: '第一声 + 轻声。' }
  ],
  bop: {
    b: '老师拿出一个袋子，神秘地问："这里有很多东西。是什么东西？"让学生伸手摸一摸、猜一猜。',
    o: ['能听、说、认读"东西 dōngxi"', '能说"买东西、吃东西"', '能问"这是什么东西？"'],
    pre: '老师指教室里的物品问"这是什么？"，复习学过的名词。',
    p: '① 跟读 dōngxi，注意轻声；② 摸袋子猜东西："这是什么东西？""是苹果！"；③ 两人问答："你去哪儿？""我去买东西。""买什么东西？"',
    post: '老师指一堆物品说"这些都是……"，学生答"东西"并一个一个说出名字；或做本页练习 1–4。',
    s: '板书：买东西 ／ 吃东西 ／ 什么东西？作业：写出书包里的三样东西。'
  },
  act: [
    { tag: '游戏', name: '神秘袋', how: '袋子里放几样学过的东西（苹果、杯子、书、手机）。学生闭眼摸一样，大家问"是什么东西？"，他来猜。' },
    { tag: '游戏', name: '少了什么东西？', how: '桌上摆五样东西，学生闭眼，老师拿走一样，学生说出少了什么。' },
    { tag: '情境表演', name: '买东西', how: '两人表演："你去哪儿？""我去超市买东西。""你买什么东西？""我买水果和牛奶。"' }
  ],
  teach: [
    { h: '轻声辨义', p: 'dōngxi（轻声）= 物品；dōngxī = 东和西。HSK1 只要求第一个。' },
    { h: '常用搭配', p: '买东西、吃东西、喝东西，都很常用。' }
  ],
  err: [
    { x: '我买很多东西们。', v: '我买很多东西。', why: '"们"只用在人的后面。' },
    { x: 'dōngxī', v: 'dōngxi', why: '表示"物品"时"西"读轻声。' }
  ],
  hz: [
    { c: '东', rad: '一', radName: '一部', radMean: '', struct: '独体字', parts: '一 + 乚 + 小', tip: '繁体字"東"是"日"在"木"的中间——太阳从树后面升起来的方向就是"东"。', fam: '带"东"的词：东西、东边（超纲）。' },
    { c: '西', rad: '西', radName: '西部', radMean: '', struct: '独体字', parts: '一 + 儿 + 囗', tip: '古字像鸟回到鸟窝——太阳下山、鸟回窝的方向就是"西"。', fam: '含"西"的字：要（上面是西字头）。' }
  ],
  cul: ['为什么"物品"叫"东西"？有一个有趣的说法：古时候长安城有"东市"和"西市"两个大市场，人们去东市、西市买的物品就叫"东西"。'],
  syn: [],
  ant: [],
  rel: ['买', '卖', '什么', '商店', '超市']
}

});
