// HSK1 教学参考 · 第 25 批（10 词）：喜欢 新 星期 星期日 星期天 休息 学 雪 学生 学习
window.H1_WORDS = window.H1_WORDS || {};
Object.assign(H1_WORDS, {

'喜欢': {
  pos: [['动词', 'verb']],
  zh: ['对人或事物有好感，觉得好。'],
  en: ['to like; to be fond of'],
  syl: [{ py: 'xǐ', i: 'x', f: 'i', t: 3 }, { py: 'huan', i: 'h', f: 'uan', t: 0 }],
  phon: [
    '第三声 + 轻声："喜"读低降，"欢"又轻又短、音稍高。',
    'x 是舌面音。',
    '"欢"单独读 huān，在这里读轻声。'
  ],
  img: { src: 'img/xihuan.jpg', cap: "她很喜欢猫。", by: "Joseph Hilger", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Teen and Cat.jpg" },
  use: ['喜欢 + 名词：喜欢猫', '喜欢 + 动词：喜欢唱歌', '很 / 非常 + 喜欢'],
  ex: [
    { ctx: '爱好', zh: '我 喜欢 猫 。', py: 'Wǒ xǐhuan māo.', en: 'I like cats.' },
    { ctx: '爱好', zh: '她 很 喜欢 唱 歌 。', py: 'Tā hěn xǐhuan chàng gē.', en: 'She likes singing very much.' },
    { ctx: '询问', zh: '你 喜欢 什么 ？', py: 'Nǐ xǐhuan shénme?', en: 'What do you like?' },
    { ctx: '否定', zh: '我 不 喜欢 下雨 。', py: 'Wǒ bù xǐhuan xiàyǔ.', en: 'I do not like rain.' }
  ],
  drill: [
    { t: 'choice', q: '我很 ___ 吃饺子。', opts: ['喜欢', '认识', '知道', '觉得'], a: 0, why: '喜欢 + 动词。' },
    { t: 'order', words: ['喜欢', '你', '什么', '水果'], a: '你喜欢什么水果？', en: 'What fruit do you like?' },
    { t: 'choice', q: '"喜欢"和"爱"：', opts: ['"爱"程度更深', '一样', '"喜欢"程度更深', '都不常用'], a: 0, why: '爱 > 喜欢。' },
    { t: 'choice', say: '喜欢', q: '听录音，选拼音。', opts: ['xǐhuan', 'xǐhuān', 'shǐhuan', 'xīhuan'], a: 0, why: '喜欢 xǐhuan。' }
  ],
  bop: {
    b: '老师出示几张图（猫、咖啡、雨），一张张竖起大拇指或摇头："我喜欢猫。我不喜欢下雨。"',
    o: ['能听、说、认读"喜欢 xǐhuan"', '能说"我喜欢 / 不喜欢……"', '能问"你喜欢……吗？"'],
    pre: '复习"爱、很、吃、看、听"。',
    p: '① 跟读 xǐhuan，注意轻声；② 喜欢 + 名词 / 动词；③ 调查："你喜欢……吗？"',
    post: '每人说三个喜欢、一个不喜欢；或做本页练习 1–4。',
    s: '板书：喜欢 + 名词 / 动词 ／ 很喜欢、不喜欢 ／ 喜欢 < 爱。作业：写五句"我喜欢……"。'
  },
  act: [
    { tag: '调查', name: '喜欢不喜欢', how: '学生拿表格问五个同学"你喜欢……吗？"（猫、狗、茶、下雨），统计结果。' },
    { tag: '游戏', name: '站队', how: '教室左边"喜欢"，右边"不喜欢"，老师说东西，学生站队并说一句话。' },
    { tag: '游戏', name: '猜猜我喜欢', how: '一人说三个提示，其他人猜他喜欢的东西："你喜欢……吗？"' }
  ],
  teach: [
    { h: '后面可以加动词', p: '喜欢 + 动词：喜欢唱歌、喜欢看书。' },
    { h: '喜欢 / 爱', p: '"爱"程度更深，也用于家人；日常爱好常用"喜欢"。' }
  ],
  err: [
    { x: '我是喜欢猫。', v: '我喜欢猫。', why: '不加"是"。' },
    { x: '我喜欢很猫。', v: '我很喜欢猫。', why: '"很"放在"喜欢"前面。' }
  ],
  hz: [
    { c: '喜', rad: '口', radName: '口部', radMean: '嘴 mouth', struct: '上下结构', parts: '士 + 口 + 䒑 + 口', tip: '上面像一面鼓，下面是"口"——敲鼓、张嘴笑，表示高兴。结婚时贴的"囍"就是两个"喜"。', fam: '有"口"的字：吃、喝、叫。' },
    { c: '欢', rad: '欠', radName: '欠字旁', radMean: '张口 open mouth', struct: '左右结构', parts: '又 + 欠', tip: '右边"欠"是张大嘴的人——高兴得张嘴笑。', fam: '欠字旁的字：歌。' }
  ],
  cul: ['中国人结婚时到处贴红色的"囍"（双喜），表示双倍的快乐。', '中国人表达喜欢比较含蓄，常说"还不错""挺好的"。'],
  syn: [{ w: '爱', note: '程度更深。' }],
  ant: [{ w: '不喜欢', note: 'HSK1 阶段用否定式表达反义。' }],
  rel: ['爱', '高兴', '想', '很', '好']
},

'新': {
  pos: [['形容词', 'adjective']],
  zh: ['刚出现的；刚买的；没用过的（和"旧"相对）。'],
  en: ['new'],
  syl: [{ py: 'xīn', i: 'x', f: 'in', t: 1 }],
  phon: [
    '第一声，高而平。',
    '前鼻音 -n，不要读成 xīng（星）。',
    'x 是舌面音。'
  ],
  img: { src: 'img/xin.jpg', cap: "这是新的。", by: "MIKI Yoshihito", lic: "CC BY 2.0", from: "Wikimedia Commons · New Balance FS503M.(15cm) (4334056953).jpg（已裁剪）" },
  use: ['新 + 名词：新手机、新同学', '很新', '新年'],
  ex: [
    { ctx: '购物', zh: '这 是 我 的 新 手机 。', py: 'Zhè shì wǒ de xīn shǒujī.', en: 'This is my new phone.' },
    { ctx: '学校', zh: '他 是 我们 的 新 同学 。', py: 'Tā shì wǒmen de xīn tóngxué.', en: 'He is our new classmate.' },
    { ctx: '描述', zh: '这 件 衣服 很 新 。', py: 'Zhè jiàn yīfu hěn xīn.', en: 'This piece of clothing is new.' },
    { ctx: '节日', zh: '新 年 好 ！', py: 'Xīnnián hǎo!', en: 'Happy New Year!' }
  ],
  drill: [
    { t: 'choice', q: '我昨天买了一个 ___ 电脑。', opts: ['新', '星', '心', '小'], a: 0, why: '刚买的 = 新。' },
    { t: 'order', words: ['新', '是', '这', '书', '的'], a: '这是新的书。', alt: ['这书是新的。'], en: 'This is a new book.' },
    { t: 'choice', q: '"新"和"星"：', opts: ['新 xīn 前鼻音，星 xīng 后鼻音', '一样', '都是后鼻音', '都是前鼻音'], a: 0, why: '-n / -ng 要分清。' },
    { t: 'choice', say: '新', q: '听录音，选拼音。', opts: ['xīn', 'xīng', 'xìn', 'shīn'], a: 0, why: '新 xīn，第一声。' }
  ],
  bop: {
    b: '老师拿出一支新笔和一支旧笔："这支是新的。"',
    o: ['能听、说、认读"新 xīn"', '能说"新 + 名词"', '分清 xīn 和 xīng'],
    pre: '复习"手机、衣服、同学、年"。',
    p: '① 跟读 xīn，对比 xīn / xīng；② 新 + 名词：新手机、新同学、新年；③ "新年好！"',
    post: '展示一样自己的新东西；或做本页练习 1–4。',
    s: '板书：新 + 名词 ／ 新年好！／ 新 xīn ≠ 星 xīng。作业：介绍你最新买的一样东西。'
  },
  act: [
    { tag: '展示', name: '我的新东西', how: '每人介绍一样新东西："这是我的新……，很漂亮。"' },
    { tag: '语音', name: '新还是星', how: '老师读 xīn / xīng，学生举"新"或"星（期）"的卡片。' },
    { tag: '文化体验', name: '新年好', how: '学说"新年好！""新年快乐！"并做一张新年贺卡。' }
  ],
  teach: [
    { h: '新 + 名词', p: '单音节形容词修饰名词时常不加"的"：新手机、新同学。' },
    { h: '反义', p: '"旧"（超纲）是 old（东西），"老"是 old（人）。' }
  ],
  err: [
    { x: 'xīng', v: 'xīn', why: '"新"是前鼻音。' },
    { x: '这是新。', v: '这是新的。', why: '单独做宾语要加"的"。' }
  ],
  hz: [{ c: '新', rad: '斤', radName: '斤字旁', radMean: '斧头 axe', struct: '左右结构', parts: '亲 + 斤', tip: '右边"斤"是斧头——用斧头刚砍下来的木头，是"新"的。', fam: '有"斤"的字：听（右边是"斤"）。' }],
  cul: ['中国人过春节说"新年好""过年好"。', '"新"也是很多地名里的字：新疆、新加坡。'],
  syn: [],
  ant: [{ w: '旧', py: 'jiù', note: 'old（东西）', out: true }],
  rel: ['年', '手机', '衣服', '同学', '好']
},

'星期': {
  pos: [['名词', 'noun']],
  zh: ['一周，七天。', '和数字一起表示一周中的某一天：星期一。'],
  en: ['week', 'day of the week (with a number)'],
  syl: [{ py: 'xīng', i: 'x', f: 'ing', t: 1 }, { py: 'qī', i: 'q', f: 'i', t: 1 }],
  phon: [
    '两个第一声，都要高而平。',
    'xīng 是后鼻音 -ng，不要读成 xīn。',
    'q 要送气。'
  ],
  img: { src: 'img/xingqi.jpg', cap: "星期一、星期二……", by: "AbbythePup", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Days of the Week (Abby the Pup).jpg" },
  use: ['星期 + 一 ～ 六', '今天星期几？', '数词 + 个 + 星期'],
  ex: [
    { ctx: '日期', zh: '今天 星期 几 ？', py: 'Jīntiān xīngqī jǐ?', en: 'What day is it today?' },
    { ctx: '回答', zh: '今天 星期 一 。', py: 'Jīntiān xīngqīyī.', en: 'Today is Monday.' },
    { ctx: '时间', zh: '一 个 星期 有 七 天 。', py: 'Yí gè xīngqī yǒu qī tiān.', en: 'A week has seven days.' },
    { ctx: '计划', zh: '我 在 中国 住 两 个 星期 。', py: 'Wǒ zài Zhōngguó zhù liǎng gè xīngqī.', en: 'I am staying in China for two weeks.' }
  ],
  drill: [
    { t: 'choice', q: '今天 ___ 几？—— 星期三。', opts: ['星期', '月', '号', '年'], a: 0, why: '问星期几。' },
    { t: 'order', words: ['星期', '今天', '几'], a: '今天星期几？', en: 'What day is it today?' },
    { t: 'choice', q: '"星期一"和"一个星期"：', opts: ['星期一是 Monday，一个星期是 a week', '一样', '都是 Monday', '都是 a week'], a: 0, why: '顺序不同，意思不同。' },
    { t: 'choice', say: '星期', q: '听录音，选拼音。', opts: ['xīngqī', 'xīnqī', 'xīngjī', 'xíngqí'], a: 0, why: '星期 xīngqī。' }
  ],
  bop: {
    b: '老师指着日历："今天星期几？"一个一个指："星期一、星期二……"',
    o: ['能听、说、认读"星期 xīngqī"', '能说一周七天', '能问"今天星期几？"'],
    pre: '复习数字 1–7 和"天、几"。',
    p: '① 跟读 xīngqī；② 星期一到星期六 + 星期日/天；③ 问答："今天星期几？""你星期几有课？"',
    post: '"一个星期"和"星期一"的区别；或做本页练习 1–4。',
    s: '板书：星期一 ～ 星期六 + 星期日 / 星期天 ／ 星期几？／ 一个星期 = 七天。作业：写出你一周的课表。'
  },
  act: [
    { tag: '歌曲', name: '星期歌', how: '用简单的曲调唱"星期一、星期二……星期天"。' },
    { tag: '游戏', name: '昨天明天', how: '老师说"今天星期三"，学生抢答"昨天星期二，明天星期四"。' },
    { tag: '信息差', name: '课表', how: '两人有不同的课表，问"你星期几有汉语课？"' }
  ],
  teach: [
    { h: '规律', p: '星期 + 数字（一到六）；第七天是星期日 / 星期天。' },
    { h: '口语', p: '口语里也说"周一、礼拜一"（超纲）。' }
  ],
  err: [
    { x: '一星期（想说 Monday）', v: '星期一', why: '数字放在"星期"后面。' },
    { x: '星期七', v: '星期日 / 星期天', why: '没有"星期七"。' }
  ],
  hz: [
    { c: '星', rad: '日', radName: '日字头', radMean: '太阳 sun', struct: '上下结构', parts: '日 + 生', tip: '上面"日"表示天上发光的东西，下面"生 shēng"表示读音——星星。', fam: '有"生"的字：生、星。' },
    { c: '期', rad: '月', radName: '月字旁', radMean: '月亮 moon', struct: '左右结构', parts: '其 + 月', tip: '右边"月"——古人看月亮记时间。"期"是一段时间。', fam: '有"月"的字：有、明、朋。' }
  ],
  cul: ['"星期"来自古代天文：七天对应日、月和五颗行星。', '中国人现在多用"周一、周二"，书面和口语都很常见。'],
  syn: [{ w: '周', py: 'zhōu', note: '周一 = 星期一。', out: true }],
  ant: [],
  rel: ['星期日', '星期天', '天', '几', '今天', '月']
},

'星期日': {
  pos: [['名词', 'noun']],
  zh: ['一个星期的第七天（书面一点）。'],
  en: ['Sunday'],
  syl: [{ py: 'xīng', i: 'x', f: 'ing', t: 1 }, { py: 'qī', i: 'q', f: 'i', t: 1 }, { py: 'rì', i: 'r', f: '-i', t: 4 }],
  phon: [
    '第一声 + 第一声 + 第四声。',
    'rì 是卷舌音，韵母不是 "ee"。',
    'xīng 是后鼻音。'
  ],
  img: { src: 'img/xingqiri.jpg', cap: "星期日", by: "Rick Obst", lic: "CC BY 2.0", from: "Wikimedia Commons · Sunday Afternoon at Hendricks Bridge County Park.jpg" },
  use: ['今天星期日', '星期日 + 做什么', '星期日 = 星期天'],
  ex: [
    { ctx: '日期', zh: '今天 是 星期日 。', py: 'Jīntiān shì xīngqīrì.', en: 'Today is Sunday.' },
    { ctx: '休息', zh: '星期日 我 不 上班 。', py: 'Xīngqīrì wǒ bú shàngbān.', en: 'I do not work on Sunday.' },
    { ctx: '询问', zh: '你 星期日 做 什么 ？', py: 'Nǐ xīngqīrì zuò shénme?', en: 'What do you do on Sunday?' },
    { ctx: '家庭', zh: '星期日 我 在 家 休息 。', py: 'Xīngqīrì wǒ zài jiā xiūxi.', en: 'On Sunday I rest at home.' }
  ],
  drill: [
    { t: 'choice', q: '星期六后面是 ___ 。', opts: ['星期日', '星期七', '星期一', '星期八'], a: 0, why: '星期六 → 星期日。' },
    { t: 'order', words: ['星期日', '不', '我', '上课'], a: '星期日我不上课。', alt: ['我星期日不上课。'], en: 'I have no class on Sunday.' },
    { t: 'choice', q: '"星期日"和"星期天"：', opts: ['意思一样', '不一样', '星期天是 Monday', '星期日是 Saturday'], a: 0, why: '都是 Sunday。' },
    { t: 'choice', say: '星期日', q: '听录音，选拼音。', opts: ['xīngqīrì', 'xīngqīlì', 'xīnqīrì', 'xīngqīrí'], a: 0, why: '星期日 xīngqīrì。' }
  ],
  bop: {
    b: '老师指着日历上红色的那一天："这是星期日。我们休息！"',
    o: ['能听、说、认读"星期日 xīngqīrì"', '知道星期日 = 星期天', '能说星期日做什么'],
    pre: '复习"星期一～星期六、日、休息"。',
    p: '① 跟读 xīngqīrì，练 r；② 星期日 = 星期天（书面 / 口语）；③ 问答："你星期日做什么？"',
    post: '介绍自己的星期日；或做本页练习 1–4。',
    s: '板书：星期日（书面）= 星期天（口语）／ 没有"星期七"。作业：写一写你上个星期日做了什么。'
  },
  act: [
    { tag: '调查', name: '星期日做什么', how: '学生互相问"你星期日做什么？"，统计最常见的活动。' },
    { tag: '游戏', name: '日历找红字', how: '看中国日历，找星期日（常用红色），说"这天是星期日"。' },
    { tag: '读一读', name: '日 / 天', how: '看车票、日历上的"星期日"，再说口语"星期天"。' }
  ],
  teach: [
    { h: '日 / 天', p: '"星期日"书面多，"星期天"口语多，意思完全一样。' },
    { h: '没有星期七', p: '一周第七天只能说"星期日 / 星期天"。' }
  ],
  err: [
    { x: '星期七', v: '星期日', why: '没有"星期七"。' },
    { x: 'xīngqīlì', v: 'xīngqīrì', why: 'r 是卷舌音。' }
  ],
  hz: [
    { c: '星', rad: '日', radName: '日字头', radMean: '太阳 sun', struct: '上下结构', parts: '日 + 生', tip: '天上发光的星星。', fam: '有"星"的词：星期。' },
    { c: '期', rad: '月', radName: '月字旁', radMean: '月亮 moon', struct: '左右结构', parts: '其 + 月', tip: '看月亮记时间。', fam: '有"期"的词：星期。' },
    { c: '日', rad: '日', radName: '日部', radMean: '太阳 sun', struct: '独体字', parts: '竖 + 横折 + 横 + 横', tip: '太阳——"星期日"是太阳的日子（Sun-day）。', fam: '日字旁的字：明、时、昨、晚。' }
  ],
  cul: ['"星期日"和英语 Sunday 一样，都和太阳（日）有关。', '中国的日历上星期日常用红色印。'],
  syn: [{ w: '星期天', note: '口语说法。' }],
  ant: [],
  rel: ['星期天', '星期', '日', '休息', '天']
},

'星期天': {
  pos: [['名词', 'noun']],
  zh: ['一个星期的第七天（口语）。'],
  en: ['Sunday'],
  syl: [{ py: 'xīng', i: 'x', f: 'ing', t: 1 }, { py: 'qī', i: 'q', f: 'i', t: 1 }, { py: 'tiān', i: 't', f: 'ian', t: 1 }],
  phon: [
    '三个第一声，都要高而平。',
    't 和 q 要送气。',
    'xīng 是后鼻音，tiān 是前鼻音。'
  ],
  img: { src: 'img/xingqitian.jpg', cap: "星期天的早饭", by: "Hanna Hirsch-Pauli", lic: "Public domain", from: "Wikimedia Commons · Hanna Pauli - Breakfast-Time - Google Art Project.jpg" },
  use: ['这个星期天', '星期天 + 做什么', '星期天 = 星期日'],
  ex: [
    { ctx: '邀请', zh: '星期天 我们 去 看 电影 吧 。', py: 'Xīngqītiān wǒmen qù kàn diànyǐng ba.', en: 'Let us go to see a movie on Sunday.' },
    { ctx: '休息', zh: '星期天 我 不 上课 。', py: 'Xīngqītiān wǒ bú shàngkè.', en: 'I have no class on Sunday.' },
    { ctx: '询问', zh: '你 星期天 有 时间 吗 ？', py: 'Nǐ xīngqītiān yǒu shíjiān ma?', en: 'Do you have time on Sunday?' },
    { ctx: '家庭', zh: '星期天 我们 去 爸爸 妈妈 家 。', py: 'Xīngqītiān wǒmen qù bàba māma jiā.', en: 'On Sunday we go to Mom and Dad\'s place.' }
  ],
  drill: [
    { t: 'choice', q: '星期六、___ 我不上班。', opts: ['星期天', '星期七', '星期八', '星期零'], a: 0, why: '周末：星期六、星期天。' },
    { t: 'order', words: ['有', '你', '星期天', '时间', '吗'], a: '你星期天有时间吗？', en: 'Do you have time on Sunday?' },
    { t: 'choice', q: '"星期天"更常用在：', opts: ['口语', '只在书面', '只在电视', '不常用'], a: 0, why: '星期天（口语）/ 星期日（书面）。' },
    { t: 'choice', say: '星期天', q: '听录音，选拼音。', opts: ['xīngqītiān', 'xīnqītiān', 'xīngqīdiān', 'xīngqítiān'], a: 0, why: '星期天 xīngqītiān。' }
  ],
  bop: {
    b: '老师伸个懒腰："明天是星期天，不上课！你们想做什么？"',
    o: ['能听、说、认读"星期天 xīngqītiān"', '能约朋友"星期天……吧"', '知道星期天 = 星期日'],
    pre: '复习"星期、星期日、时间"。',
    p: '① 跟读 xīngqītiān；② 星期天 = 星期日；③ 约人："星期天你有时间吗？我们去……吧。"',
    post: '两人约一个星期天的活动；或做本页练习 1–4。',
    s: '板书：星期天（口语）= 星期日 ／ 星期天……吧。作业：计划你的下一个星期天。'
  },
  act: [
    { tag: '情境表演', name: '约朋友', how: '"星期天你有时间吗？""有。""我们去公园玩吧！""好啊！"' },
    { tag: '调查', name: '周末计划', how: '学生互相问"星期六、星期天你做什么？"' },
    { tag: '游戏', name: '一周接龙', how: '一人说"星期一"，下一个人说"星期二"……到"星期天"再从头开始，越来越快。' }
  ],
  teach: [
    { h: '天 / 日', p: '"星期天"口语多，"星期日"书面多。' },
    { h: '周末', p: '星期六和星期天合起来叫"周末"（超纲）。' }
  ],
  err: [
    { x: '星期七', v: '星期天', why: '没有"星期七"。' },
    { x: '天星期', v: '星期天', why: '"星期"在前。' }
  ],
  hz: [
    { c: '星', rad: '日', radName: '日字头', radMean: '太阳 sun', struct: '上下结构', parts: '日 + 生', tip: '天上发光的星星。', fam: '有"星"的词：星期。' },
    { c: '期', rad: '月', radName: '月字旁', radMean: '月亮 moon', struct: '左右结构', parts: '其 + 月', tip: '看月亮记时间。', fam: '有"期"的词：星期。' },
    { c: '天', rad: '大', radName: '大部', radMean: '大 big', struct: '独体字', parts: '一 + 大', tip: '人头上的天。', fam: '有"天"的词：今天、明天、天气。' }
  ],
  cul: ['很多中国人星期天去公园、逛商场或者回父母家吃饭。', '中国学生星期天常常要上补习班（超纲）。'],
  syn: [{ w: '星期日', note: '书面说法。' }],
  ant: [],
  rel: ['星期日', '星期', '天', '休息', '时间']
},

'休息': {
  pos: [['动词', 'verb']],
  zh: ['停下工作或学习，让身体和精神放松。'],
  en: ['to rest; to take a break'],
  syl: [{ py: 'xiū', i: 'x', f: 'iu', t: 1 }, { py: 'xi', i: 'x', f: 'i', t: 0 }],
  phon: [
    '第一声 + 轻声："休"高平，"息"又轻又短。',
    'xiū 的 iu = i + ou。',
    '两个字都是 x。'
  ],
  img: { src: 'img/xiuxi.jpg', cap: "他在休息。", by: "Jules Verne Times Two", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Man resting on a park bench near the Jerónimos Monastery, Lisbon, Portugal julesvernex2.jpg" },
  use: ['休息一下', '在家休息', '休息 + 时间长度：休息十分钟'],
  ex: [
    { ctx: '课堂', zh: '我们 休息 一下 。', py: 'Wǒmen xiūxi yíxià.', en: 'Let us take a break.' },
    { ctx: '关心', zh: '你 生病 了 ， 要 多 休息 。', py: 'Nǐ shēngbìng le, yào duō xiūxi.', en: 'You are sick; you should rest more.' },
    { ctx: '周末', zh: '星期天 我 在 家 休息 。', py: 'Xīngqītiān wǒ zài jiā xiūxi.', en: 'On Sunday I rest at home.' },
    { ctx: '时间', zh: '休息 十 分钟 。', py: 'Xiūxi shí fēnzhōng.', en: 'Take a ten-minute break.' }
  ],
  drill: [
    { t: 'choice', q: '我很累，想 ___ 一下。', opts: ['休息', '上班', '学习', '工作'], a: 0, why: '累了，休息。' },
    { t: 'order', words: ['休息', '我们', '一下'], a: '我们休息一下。', en: 'Let us take a break.' },
    { t: 'choice', q: '"休息"的反义是：', opts: ['工作', '睡觉', '吃饭', '喝水'], a: 0, why: '工作 ↔ 休息。' },
    { t: 'choice', say: '休息', q: '听录音，选拼音。', opts: ['xiūxi', 'xiūxí', 'shiūxi', 'xiùxi'], a: 0, why: '休息 xiūxi。' }
  ],
  bop: {
    b: '上课二十分钟后，老师拍手："好，我们休息五分钟！"',
    o: ['能听、说、认读"休息 xiūxi"', '能说"休息一下""在家休息"', '能关心别人"多休息"'],
    pre: '复习"生病、累（超纲）、星期天"。',
    p: '① 跟读 xiūxi；② 休息 + 时间：休息十分钟；③ 关心：你生病了，多休息。',
    post: '课间用"休息"做活动；或做本页练习 1–4。',
    s: '板书：休息一下 ／ 休息 + 时间 ／ 工作 ↔ 休息。作业：写一写你怎么休息。'
  },
  act: [
    { tag: 'TPR', name: '工作休息', how: '老师说"工作"学生做写字的动作，说"休息"学生伸懒腰、闭眼。' },
    { tag: '调查', name: '怎么休息', how: '学生互相问"你休息的时候做什么？"（睡觉、看电视、听歌）。' },
    { tag: '日常活动', name: '课间', how: '每节课中间老师说"我们休息五分钟"，学生回答"好！"' }
  ],
  teach: [
    { h: '休息一下', p: '"动词 + 一下"表示短时间：休息一下、看一下。' },
    { h: '位置', p: '时间长度放在后面：休息十分钟。' }
  ],
  err: [
    { x: '我十分钟休息。', v: '我休息十分钟。', why: '时间长度放在动词后面。' },
    { x: 'xiūxí', v: 'xiūxi', why: '"息"读轻声。' }
  ],
  hz: [
    { c: '休', rad: '亻', radName: '单人旁', radMean: '人 person', struct: '左右结构', parts: '亻 + 木', tip: '一个人（亻）靠在树（木）旁边——休息！', fam: '单人旁的字：你、他、们、住、做。' },
    { c: '息', rad: '心', radName: '心字底', radMean: '心 heart', struct: '上下结构', parts: '自 + 心', tip: '上面"自"是鼻子，下面是"心"——用鼻子呼吸，心慢慢平静，就是"息"。', fam: '心字底的字：想、您、怎。' }
  ],
  cul: ['"休"字是人靠着树——古人很形象地表达了"休息"。', '中国很多单位中午有一到两小时的午休。'],
  syn: [],
  ant: [{ w: '工作', note: '做事、上班。' }],
  rel: ['睡觉', '工作', '生病', '星期天', '一下']
},

'学': {
  pos: [['动词', 'verb']],
  zh: ['学习（知识、技能）。', '模仿：学猫叫。'],
  en: ['to learn; to study', 'to imitate'],
  syl: [{ py: 'xué', i: 'x', f: 'üe', t: 2 }],
  phon: [
    '第二声，从中往高升。',
    'x 后面的 u 其实是 ü：嘴唇要圆，不要读成 "shweh"。',
    'üe 从 ü 滑到 e。'
  ],
  img: { src: 'img/xue.jpg', cap: "他们在学汉语。", by: "Gary Todd", lic: "CC0", from: "Wikimedia Commons · Sias Library - Students Studying 2017.jpg" },
  use: ['学 + 语言 / 技能：学汉语、学开车', '跟 + 人 + 学（超纲）', '学 + 动物叫'],
  ex: [
    { ctx: '学习', zh: '我 学 汉语 。', py: 'Wǒ xué Hànyǔ.', en: 'I learn Chinese.' },
    { ctx: '技能', zh: '我 想 学 开车 。', py: 'Wǒ xiǎng xué kāichē.', en: 'I want to learn to drive.' },
    { ctx: '询问', zh: '你 学 了 几 年 汉语 ？', py: 'Nǐ xué le jǐ nián Hànyǔ?', en: 'How many years have you studied Chinese?' },
    { ctx: '模仿', zh: '他 学 猫 叫 。', py: 'Tā xué māo jiào.', en: 'He imitates a cat.' }
  ],
  drill: [
    { t: 'choice', q: '我在大学 ___ 汉语。', opts: ['学', '雪', '写', '谢'], a: 0, why: '学 + 语言。' },
    { t: 'order', words: ['学', '想', '我', '做饭'], a: '我想学做饭。', en: 'I want to learn to cook.' },
    { t: 'choice', q: '"学"和"雪"：', opts: ['xué / xuě，声调不一样', '一样', '意思一样', '都是动词'], a: 0, why: '学 xué（第二声）；雪 xuě（第三声）。' },
    { t: 'choice', say: '学', q: '听录音，选拼音。', opts: ['xué', 'xuě', 'shué', 'xié'], a: 0, why: '学 xué，第二声。' }
  ],
  bop: {
    b: '老师问："你们在这儿做什么？——学汉语！"',
    o: ['能听、说、认读"学 xué"', '能说"学 + 东西"', '分清"学"和"雪"'],
    pre: '复习"学习、学生、学校"。',
    p: '① 跟读 xué，练 ü；② 学什么：学汉语、学开车、学做饭；③ 问答："你学了几年汉语？你想学什么？"',
    post: '"学猫叫、学狗叫"游戏；或做本页练习 1–4。',
    s: '板书：学 + 语言 / 技能 ／ 学 xué ≠ 雪 xuě。作业：写一写你还想学什么。'
  },
  act: [
    { tag: '游戏', name: '学动物', how: '老师说"学猫叫"，学生学猫叫；"学狗叫"……越来越快。' },
    { tag: '调查', name: '想学什么', how: '学生互相问"你想学什么？"，把答案写在黑板上。' },
    { tag: '语音', name: '学和雪', how: '老师读 xué / xuě，学生举相应的卡片。' }
  ],
  teach: [
    { h: '学 / 学习', p: '"学"后面常直接加内容：学汉语。"学习"更正式，也可以单用：他学习很好。' },
    { h: 'ü', p: 'x 后面的 u 都是 ü，嘴要圆。' }
  ],
  err: [
    { x: 'xuě（想说 learn）', v: 'xué', why: '"学"是第二声。' },
    { x: '我学汉语三年。', v: '我学了三年汉语。', why: '时间长度放在动词和宾语中间。' }
  ],
  hz: [{ c: '学', rad: '子', radName: '子字底', radMean: '小孩 child', struct: '上下结构', parts: '⺍ + 冖 + 子', tip: '下面"子"是孩子，上面像屋顶和两只手——孩子在屋子里学习。繁体字"學"更复杂。', fam: '有"学"的词：学生、学校、学习、大学、小学、同学。' }],
  cul: ['孔子说"学而时习之，不亦说乎"——学了以后常常复习，不是很快乐吗？', '中国人说"活到老，学到老"。'],
  syn: [{ w: '学习', note: '更正式，也可以单用。' }],
  ant: [],
  rel: ['学习', '学生', '学校', '同学', '老师', '汉语']
},

'雪': {
  pos: [['名词', 'noun']],
  zh: ['冬天从天上落下的白色冰花。'],
  en: ['snow'],
  syl: [{ py: 'xuě', i: 'x', f: 'üe', t: 3 }],
  phon: [
    '第三声，先降后升，声音要低。',
    'u 是 ü，嘴唇要圆。',
    '和"学 xué"只差声调。'
  ],
  img: { src: 'img/xue3.jpg', cap: "下雪了。", by: "Gerald England", lic: "CC BY-SA 2.0", from: "Wikimedia Commons · Winter snowfall - geograph.org.uk - 7074913.jpg" },
  use: ['下雪', '下雪了', '雪 + 很大'],
  ex: [
    { ctx: '天气', zh: '下 雪 了 ！', py: 'Xià xuě le!', en: 'It is snowing!' },
    { ctx: '天气', zh: '今天 雪 很 大 。', py: 'Jīntiān xuě hěn dà.', en: 'The snow is heavy today.' },
    { ctx: '爱好', zh: '我 很 喜欢 雪 。', py: 'Wǒ hěn xǐhuan xuě.', en: 'I like snow very much.' },
    { ctx: '询问', zh: '你 那儿 下 雪 吗 ？', py: 'Nǐ nàr xià xuě ma?', en: 'Does it snow where you are?' }
  ],
  drill: [
    { t: 'choice', q: '冬天很冷，常常下 ___ 。', opts: ['雪', '学', '写', '谢'], a: 0, why: '冬天下雪。' },
    { t: 'order', words: ['下', '雪', '了'], a: '下雪了。', en: 'It is snowing.' },
    { t: 'choice', q: '"雪"的部首是：', opts: ['雨', '子', '日', '口'], a: 0, why: '雪 = 雨字头 + 彐。' },
    { t: 'choice', say: '雪', q: '听录音，选拼音。', opts: ['xuě', 'xué', 'shuě', 'xiě'], a: 0, why: '雪 xuě，第三声。' }
  ],
  bop: {
    b: '老师出示一张大雪的照片："哇，下雪了！你们喜欢雪吗？"',
    o: ['能听、说、认读"雪 xuě"', '能说"下雪了"', '认识雨字头'],
    pre: '复习"下雨、冷、天气"。',
    p: '① 跟读 xuě，对比 xué / xuě；② 天气：下雨、下雪；③ 问答："你那儿下雪吗？你喜欢雪吗？"',
    post: '雨字头家族：雨、雪、零；或做本页练习 1–4。',
    s: '板书：下雪了 ／ 雨字头：雨、雪、零 ／ 雪 xuě ≠ 学 xué。作业：画一张下雪的图，写"下雪了"。'
  },
  act: [
    { tag: 'TPR', name: '下雨下雪', how: '老师说"下雨"学生打伞，说"下雪"学生接雪花、发抖。' },
    { tag: '手工', name: '剪雪花', how: '学生用纸剪雪花，贴在窗上，写上"雪"。' },
    { tag: '调查', name: '见过雪吗', how: '学生互相问"你见过雪吗？你那儿下雪吗？"' }
  ],
  teach: [
    { h: '下雪', p: '和"下雨"一样："下雪"，不说"雪下"。' },
    { h: '部首', p: '"雪"上面是雨字头，和天气有关的字很多有"雨"。' }
  ],
  err: [
    { x: '雪下了。', v: '下雪了。', why: '固定说法是"下雪"。' },
    { x: 'xué（想说 snow）', v: 'xuě', why: '"雪"是第三声。' }
  ],
  hz: [{ c: '雪', rad: '雨', radName: '雨字头', radMean: '雨 rain', struct: '上下结构', parts: '⻗ + 彐', tip: '上面"雨"——从天上落下来的；下面"彐"像一只扫帚——下了雪要扫雪。', fam: '雨字头的字：零；雷、电（繁体"電"）。' }],
  cul: ['哈尔滨每年冬天有冰雪节，用冰和雪做成很大的建筑。', '中国人说"瑞雪兆丰年"——冬天下大雪，明年会有好收成。'],
  syn: [],
  ant: [],
  rel: ['下雨', '冷', '天气', '下', '雨']
},

'学生': {
  pos: [['名词', 'noun']],
  zh: ['在学校学习的人。'],
  en: ['student'],
  syl: [{ py: 'xué', i: 'x', f: 'üe', t: 2 }, { py: 'shēng', i: 'sh', f: 'eng', t: 1 }],
  phon: [
    '第二声 + 第一声：大纲"生"标第一声，口语里常读轻声 xuésheng。',
    'x（舌面）和 sh（卷舌）要分清。',
    'shēng 是后鼻音。'
  ],
  img: { src: 'img/xuesheng.jpg', cap: "她是学生。", by: "Roby Pernawan", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · A masters student of Mathematics shows off her Wikipedia backpack in Bandung, Indonesia. May 5, 2017.jpg（已裁剪）" },
  use: ['是 + 学生', '学生 + 们', '……学校的学生'],
  ex: [
    { ctx: '身份', zh: '我 是 学生 。', py: 'Wǒ shì xuéshēng.', en: 'I am a student.' },
    { ctx: '询问', zh: '你 是 学生 吗 ？', py: 'Nǐ shì xuéshēng ma?', en: 'Are you a student?' },
    { ctx: '描述', zh: '这个 学校 有 很 多 学生 。', py: 'Zhège xuéxiào yǒu hěn duō xuéshēng.', en: 'This school has many students.' },
    { ctx: '关系', zh: '他 是 我 的 学生 。', py: 'Tā shì wǒ de xuéshēng.', en: 'He is my student.' }
  ],
  drill: [
    { t: 'choice', q: '老师和 ___ 在教室里。', opts: ['学生', '医生', '先生', '女士'], a: 0, why: '老师 ↔ 学生。' },
    { t: 'order', words: ['是', '我', '学生'], a: '我是学生。', en: 'I am a student.' },
    { t: 'choice', q: '"学生"的反义（相对的人）是：', opts: ['老师', '同学', '朋友', '孩子'], a: 0, why: '老师 ↔ 学生。' },
    { t: 'choice', say: '学生', q: '听录音，选汉字。', opts: ['学生', '学习', '学校', '先生'], a: 0, why: '学生 xuéshēng。' }
  ],
  bop: {
    b: '老师指着自己："我是老师。"指着全班："你们是——学生！"',
    o: ['能听、说、认读"学生"', '能说"我是学生"', '掌握"……学生"系列'],
    pre: '复习"老师、学、小学生、大学生"。',
    p: '① 跟读 xuéshēng / xuésheng；② 老师 ↔ 学生；③ 系列：小学生、中学生、大学生。',
    post: '自我介绍："我是……学校的学生。"；或做本页练习 1–4。',
    s: '板书：学 + 生 = 学生 ／ 老师 ↔ 学生 ／ 小学生、大学生。作业：写一写你是哪个学校的学生。'
  },
  act: [
    { tag: '游戏', name: '老师和学生', how: '一人当"老师"，其他人当"学生"，"老师"发指令（请读、请写），学生照做。' },
    { tag: '游戏', name: '什么生', how: '老师说学校，学生说人：小学——小学生；大学——大学生。' },
    { tag: '展示', name: '自我介绍', how: '"我叫……，我是……学校的学生。我学习汉语。"' }
  ],
  teach: [
    { h: '读音', p: '大纲标 xuéshēng；口语常读 xuésheng（轻声）。' },
    { h: '学生 / 同学', p: '"学生"是相对老师说的身份；"同学"是学生之间的关系。' }
  ],
  err: [
    { x: '我是一个学生们。', v: '我是学生。', why: '一个人不加"们"。' },
    { x: 'shuéshēng', v: 'xuéshēng', why: '"学"是 x。' }
  ],
  hz: [
    { c: '学', rad: '子', radName: '子字底', radMean: '小孩 child', struct: '上下结构', parts: '⺍ + 冖 + 子', tip: '孩子在屋子里学习。', fam: '有"学"的词：学校、学习。' },
    { c: '生', rad: '生', radName: '生部', radMean: '生长 to grow', struct: '独体字', parts: '丿 + 一 + 一 + 丨 + 一', tip: '小草从地里长出来——在学校成长的人。', fam: '有"生"的词：医生、先生、生病。' }
  ],
  cul: ['在中国，学生对老师很尊敬，见面要问好。', '中国学生的学习压力比较大，特别是高中学生要准备"高考"。'],
  syn: [{ w: '同学', note: '学生之间的称呼。' }],
  ant: [{ w: '老师', note: '教学生的人。' }],
  rel: ['老师', '同学', '学校', '学习', '小学生', '大学生']
},

'学习': {
  pos: [['动词', 'verb']],
  zh: ['读书、听课、练习，获得知识或技能。'],
  en: ['to study; to learn'],
  syl: [{ py: 'xué', i: 'x', f: 'üe', t: 2 }, { py: 'xí', i: 'x', f: 'i', t: 2 }],
  phon: [
    '两个第二声：两个字都往上升，第一个升得短一点。',
    '两个字都是 x。',
    'xué 的 u 是 ü。'
  ],
  img: { src: 'img/xuexi.jpg', cap: "她在学习。", by: "Tulane Public Relations", lic: "CC BY 2.0", from: "Wikimedia Commons · Study Break - Reading at Tulane University, 2009.jpg" },
  use: ['学习 + 内容：学习汉语', '在 + 地方 + 学习', '学习 + 很好 / 很忙'],
  ex: [
    { ctx: '学习', zh: '我 学习 汉语 。', py: 'Wǒ xuéxí Hànyǔ.', en: 'I study Chinese.' },
    { ctx: '地点', zh: '他 在 大学 学习 。', py: 'Tā zài dàxué xuéxí.', en: 'He studies at university.' },
    { ctx: '称赞', zh: '她 学习 很 好 。', py: 'Tā xuéxí hěn hǎo.', en: 'She is a good student.' },
    { ctx: '询问', zh: '你 今天 学习 了 几 个 小时 ？', py: 'Nǐ jīntiān xuéxí le jǐ gè xiǎoshí?', en: 'How many hours did you study today?' }
  ],
  drill: [
    { t: 'choice', q: '我在中国 ___ 汉语。', opts: ['学习', '学生', '学校', '同学'], a: 0, why: '学习 + 内容。' },
    { t: 'order', words: ['学习', '在', '他', '大学'], a: '他在大学学习。', en: 'He studies at university.' },
    { t: 'choice', q: '"她学习很好"的意思是：', opts: ['她是好学生', '她喜欢学习', '她学习很多', '她在学校'], a: 0, why: '学习好 = 成绩好。' },
    { t: 'choice', say: '学习', q: '听录音，选拼音。', opts: ['xuéxí', 'xuéshí', 'xuěxí', 'shuéxí'], a: 0, why: '学习 xuéxí。' }
  ],
  bop: {
    b: '老师指着认真读书的学生："他在做什么？——他在学习！"',
    o: ['能听、说、认读"学习 xuéxí"', '能说"在……学习……"', '分清"学习、学生、学校"'],
    pre: '复习"学、学生、学校、在"。',
    p: '① 跟读 xuéxí；② 学习 + 内容 / 地点；③ 分清"学"家族：学习（动作）、学生（人）、学校（地方）。',
    post: '介绍自己学习汉语的情况；或做本页练习 1–4。',
    s: '板书：学习（做什么）/ 学生（谁）/ 学校（哪儿）。作业：写三句话说说你怎么学习汉语。'
  },
  act: [
    { tag: '游戏', name: '学家族', how: '老师问"做什么？谁？哪儿？"，学生分别回答"学习、学生、学校"。' },
    { tag: '调查', name: '怎么学习', how: '学生互相问"你在哪儿学习？学习几个小时？"' },
    { tag: '展示', name: '学习计划', how: '每人写一个"我的汉语学习计划"，用中文说一句。' }
  ],
  teach: [
    { h: '学 / 学习', p: '"学习"可以单用：他在学习。"学"后面常要有内容：学汉语。' },
    { h: '学习好', p: '"学习很好"= 成绩好、是好学生。' }
  ],
  err: [
    { x: '我学习在大学。', v: '我在大学学习。', why: '"在 + 地点"放在动词前面。' },
    { x: '我是学习。', v: '我是学生。', why: '人是"学生"，动作是"学习"。' }
  ],
  hz: [
    { c: '学', rad: '子', radName: '子字底', radMean: '小孩 child', struct: '上下结构', parts: '⺍ + 冖 + 子', tip: '孩子在屋子里学。', fam: '有"学"的词：学生、学校。' },
    { c: '习', rad: '乛', radName: '折部（有的字典归"乙"部）', radMean: '——', struct: '独体字', parts: '𠃌 + 丶 + ㇀', tip: '繁体字"習"上面是"羽"（翅膀）——小鸟一次次练习扇翅膀学飞，就是"习"。', fam: '有"习"的词：学习；练习（超纲）。' }
  ],
  cul: ['"学习"的"习"本来是小鸟练习飞——学了以后要常常练习。', '中国人常说"好好学习，天天向上"。'],
  syn: [{ w: '学', note: '后面常加内容。' }],
  ant: [{ w: '休息', note: '停下来放松。' }],
  rel: ['学', '学生', '学校', '老师', '汉语', '大学']
}

});
