// HSK1 教学参考 · 第 2 批（10 词）：边 病 不 不客气 不要 菜 茶 唱 超市 车
window.H1_WORDS = window.H1_WORDS || {};
Object.assign(H1_WORDS, {

'边': {
  pos: [['名词', 'noun'], ['后缀', 'suffix']],
  zh: ['东西的旁边、边上。', '放在"这、那、外"等词后面，表示地方：这边、那边、外边。'],
  en: ['side; edge', 'suffix for place words: zhèbiān (this side, here), nàbiān (over there), wàibian (outside)'],
  syl: [{ py: 'biān', i: 'b', f: 'ian', t: 1 }],
  phon: [
    '第一声，高而平（55）。',
    '韵母 ian 读起来像"烟 yān"，a 的开口比较小。',
    '在"外边"里常常读轻声：wàibian。'
  ],
  img: { src: 'img/bian.jpg', cap: "路的这边和那边", by: "rheins", lic: "CC BY 3.0", from: "Wikimedia Commons · 滨溪路步道 - Riverside Walking Path - 2015.11 - panoramio.jpg" },
  use: ['这边 / 那边', '外边', '……在那边'],
  ex: [
    { ctx: '请客人', zh: '请 这边 坐 。', py: 'Qǐng zhèbiān zuò.', en: 'Please sit over here.' },
    { ctx: '问路', zh: '商店 在 那边 。', py: 'Shāngdiàn zài nàbiān.', en: 'The shop is over there.' },
    { ctx: '天气', zh: '外边 很 冷 。', py: 'Wàibian hěn lěng.', en: 'It\'s cold outside.' }
  ],
  drill: [
    { t: 'choice', q: '"over there" 是：', opts: ['这边', '那边', '外边', '上边'], a: 1, why: '那边 = over there；这边 = over here。' },
    { t: 'order', words: ['在', '学校', '那边'], a: '学校在那边。', en: 'The school is over there.' },
    { t: 'choice', q: '___ 很冷，我们在家吧。', opts: ['外边', '这个', '什么', '今年'], a: 0, why: '外边 = outside。' },
    { t: 'choice', say: '边', q: '听录音，选拼音。', opts: ['biān', 'bān', 'biàn', 'bīn'], a: 0, why: '边 biān，第一声。' }
  ],
  bop: {
    b: '老师站在教室左边说"这边"，指着远处说"那边"，再指窗外说"外边"。',
    o: ['能听、说、认读"边 biān"', '能说"这边、那边、外边"', '能说"……在那边"'],
    pre: '老师问："老师的书在哪儿？"看学生会用什么词指地方。',
    p: '① 跟读 这边、那边、外边；② 老师指方向，学生说词；③ 两人问答："商店在哪儿？""在那边。"',
    post: '老师说"这边"或"那边"，学生用手指出方向；或做本页练习 1–4。',
    s: '板书：这 / 那 / 外 + 边。作业：用"这边、那边"各写一句话。'
  },
  act: [
    { tag: 'TPR', name: '这边那边', how: '老师说"这边"，学生跳到左边；说"那边"，跳到右边；说"外边"，指窗外。越说越快。' },
    { tag: '游戏', name: '东西在哪儿？', how: '把词卡（商店、学校、医院）贴在教室不同的地方，学生问"医院在哪儿？"，同伴指着说"在那边"。' },
    { tag: '情境表演', name: '请这边坐', how: '学生扮演饭店服务员和客人："你好，请这边坐。""谢谢。"' }
  ],
  teach: [
    { h: '重点', p: 'HSK1 阶段"边"主要出现在"这边、那边、外边"里，当作整个词来教。' },
    { h: '辨析', p: '这边 ≈ 这儿 / 这里；那边 ≈ 那儿 / 那里。HSK1 可以告诉学生意思差不多。' }
  ],
  err: [
    { x: '商店那边在。', v: '商店在那边。', why: '"在"放在地方的前面。' },
    { x: '请坐这边。', v: '请这边坐。', why: '请客人坐时，习惯说"请这边坐"。' }
  ],
  hz: [{ c: '边', rad: '辶', radName: '走之旁', radMean: '走路 walking', struct: '半包围结构', parts: '力 + 辶', tip: '"辶"表示走路，"力"是力气——用力走到路的"边"上。', fam: '走之旁的字多和走路、距离有关：这、还、进、远、近。' }],
  cul: ['中国人请客人时常常伸出手说"这边请"或"请这边坐"，表示客气。'],
  syn: [{ w: '这儿', note: '这边 ≈ 这儿 / 这里。' }],
  ant: [],
  rel: ['这边', '那边', '外边', '里', '上', '下']
},

'病': {
  pos: [['名词', 'noun'], ['动词', 'verb']],
  zh: ['身体不舒服的情况。', '生病。'],
  en: ['illness; disease', 'to be ill; to fall ill'],
  syl: [{ py: 'bìng', i: 'b', f: 'ing', t: 4 }],
  phon: [
    '第四声，全降（51）。',
    '后鼻音 -ng：结束时舌头后面抬起来，不要读成 bìn。'
  ],
  img: { src: 'img/bing.jpg', cap: "他生病了。", by: "Alabama Extension", lic: "CC0", from: "Wikimedia Commons · Thermometer (Fever) with Mask (50838355502).jpg" },
  use: ['病了', '生病', '看病（去医院）'],
  ex: [
    { ctx: '身体', zh: '他 病 了 。', py: 'Tā bìng le.', en: 'He is sick.' },
    { ctx: '家人', zh: '妈妈 生病 了 。', py: 'Māma shēngbìng le.', en: 'Mom is ill.' },
    { ctx: '医院', zh: '我 去 医院 看病 。', py: 'Wǒ qù yīyuàn kànbìng.', en: 'I\'m going to the hospital to see a doctor.' }
  ],
  drill: [
    { t: 'choice', q: '他 ___ 了，今天不来上课。', opts: ['病', '好', '忙', '大'], a: 0, why: '病了 = 生病了。' },
    { t: 'choice', q: '生病了，去哪儿？', opts: ['商店', '医院', '电影院', '饭店'], a: 1, why: '去医院看病。' },
    { t: 'order', words: ['了', '我', '病'], a: '我病了。', en: 'I\'m sick.' },
    { t: 'choice', say: '病', q: '听录音，选拼音。', opts: ['bīn', 'bìn', 'bìng', 'bǐng'], a: 2, why: '病 bìng，第四声，后鼻音。' }
  ],
  bop: {
    b: '老师摸着头，做出不舒服的样子，小声说："老师今天病了。"让学生猜意思。',
    o: ['能听、说、认读"病 bìng"', '能说"我病了"', '能说"去医院看病"'],
    pre: '问：身体不舒服的时候去哪儿？引出"医院、医生"。',
    p: '① 跟读 bìng、病了、生病、看病；② 看图说话：他病了，他去医院看病；③ 两人对话："你怎么了？""我病了。"',
    post: '老师做动作（咳嗽、摸头），学生说"老师病了"；或做本页练习 1–4。',
    s: '板书：病了 ／ 生病 ／ 去医院看病。作业：写两句话，用"病了"和"看病"。'
  },
  act: [
    { tag: '情境表演', name: '小医院', how: '两人一组扮演医生和病人："你怎么了？""我病了。""多喝水，多休息。"' },
    { tag: 'TPR', name: '我病了', how: '老师说"我病了"，学生做出生病的样子；说"我好了"，学生站起来伸手。' },
    { tag: '游戏', name: '请假条', how: '学生抽卡片（妈妈、哥哥、老师……），说"……病了，今天不来"。' }
  ],
  teach: [
    { h: '成组教学', p: '病、生病、看病、医院、医生 放在一起教。' },
    { h: '注意', p: '"看病"是病人去看医生，不是"看着病"。' }
  ],
  err: [
    { x: '他是病。', v: '他病了。', why: '说"病了"，不用"是"。' },
    { x: '我看病去医院。', v: '我去医院看病。', why: '先说去哪儿，再说做什么。' }
  ],
  hz: [{ c: '病', rad: '疒', radName: '病字旁', radMean: '生病 illness', struct: '半包围结构', parts: '疒 + 丙', tip: '"疒"像一个人躺在床上，表示生病；里面的"丙 bǐng"表示读音。', fam: '病字旁的字都和生病有关：疼、痛、瘦（超纲）。' }],
  cul: ['朋友生病时，中国人常说"多喝热水""多休息"，表示关心。'],
  syn: [{ w: '生病', note: '动词：生病了 = 病了。' }],
  ant: [],
  rel: ['生病', '看病', '医院', '医生', '休息']
},

'不': {
  pos: [['副词', 'adverb']],
  zh: ['放在动词、形容词前面，表示否定。', '单独用，表示不同意。'],
  en: ['not (before verbs and adjectives)', 'no'],
  syl: [{ py: 'bù', i: 'b', f: 'u', t: 4 }],
  phon: [
    '单念或在第一、二、三声前面读第四声：bù hē、bù lái、bù hǎo。',
    '在第四声前面变成第二声：bú shì（不是）、bú qù（不去）、bú zài（不在）。',
    'u 的嘴唇要圆。'
  ],
  img: { src: 'img/bu.jpg', cap: "不好！", by: "Pinerineks", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Jempol Ngadep Bawah (cropped).jpg" },
  use: ['不 + 是：我不是老师', '不 + 动词：不喝、不去、不吃', '不 + 形容词：不冷、不忙、不大'],
  ex: [
    { ctx: '身份', zh: '我 不 是 老师 。', py: 'Wǒ bú shì lǎoshī.', en: 'I am not a teacher.' },
    { ctx: '喜好', zh: '我 不 喝 茶 。', py: 'Wǒ bù hē chá.', en: 'I don\'t drink tea.' },
    { ctx: '天气', zh: '今天 不 冷 。', py: 'Jīntiān bù lěng.', en: 'It\'s not cold today.' },
    { ctx: '地点', zh: '他 不 在 家 。', py: 'Tā bú zài jiā.', en: 'He is not at home.' }
  ],
  drill: [
    { t: 'choice', q: '我 ___ 是学生，我是老师。', opts: ['不', '很', '也', '都'], a: 0, why: '不是 = am not。' },
    { t: 'order', words: ['不', '我', '忙'], a: '我不忙。', en: 'I\'m not busy.' },
    { t: 'choice', q: '"不是"怎么读？', opts: ['bù shì', 'bú shì', 'bǔ shì', 'bū shì'], a: 1, why: '"不"在第四声前读第二声。' },
    { t: 'choice', q: '哪一句是对的？', opts: ['我不有书。', '我没有书。', '我有不书。', '我书不有。'], a: 1, why: '"有"的否定是"没有"，不说"不有"。' }
  ],
  bop: {
    b: '老师拿着一本书问："这是杯子吗？"自己摇头回答："不，这不是杯子。"',
    o: ['能听、说、认读"不 bù"', '能说"不是、不 + 动词、不 + 形容词"', '知道"不"在第四声前读 bú'],
    pre: '老师问几个是非问句："你是老师吗？""今天冷吗？"看学生怎么回答否定。',
    p: '① 跟读 bù hē、bù lái、bù hǎo、bú shì、bú qù；② 肯定句变否定句：我喝茶 → 我不喝茶；③ 两人问答："你……吗？""我不……。"',
    post: '老师说肯定句，学生马上说否定句；或做本页练习 1–4。',
    s: '板书：不 + 动词 / 形容词；不 + 第四声 → bú。提醒：有 → 没有。作业：写三句"我不……"。'
  },
  act: [
    { tag: '游戏', name: '是不是？', how: '老师举图片故意说错："这是苹果。"学生抢着说："不是！这是包子。"' },
    { tag: 'TPR', name: '点头摇头', how: '老师说句子，对的学生点头说"是"，不对的摇头说"不是"。' },
    { tag: '调查', name: '你喝不喝茶？', how: '学生问三位同学"你喝茶吗？""你吃包子吗？"，记下"喝 / 不喝"，然后报告。' }
  ],
  teach: [
    { h: '变调', p: '先教 bù，再集中练 bú shì、bú qù、bú zài、bú yào、bú kèqi。可以用手势：第四声前"不"往上扬。' },
    { h: '不 / 没', p: 'HSK1 只需记住：有 → 没有；其他一般用"不"。' }
  ],
  err: [
    { x: '我不有手机。', v: '我没有手机。', why: '"有"的否定是"没有"。' },
    { x: '我是不学生。', v: '我不是学生。', why: '"不"放在"是"的前面。' }
  ],
  hz: [{ c: '不', rad: '一', radName: '一部', radMean: '', struct: '独体字', parts: '一 + 丿 + 丨 + 丶', tip: '上面一横像天，下面像一只鸟往上飞——飞上去"不"下来。', fam: '含"不"的字：杯、还、坏（超纲）。' }],
  cul: ['中国人拒绝别人时常常不直接说"不"，而是说"我想一想""下次吧"，这样比较客气。'],
  syn: [{ w: '没有', note: '易混："有"的否定用"没有"。' }],
  ant: [{ w: '是', note: '是 ↔ 不是' }],
  rel: ['不要', '不客气', '没有', '对', '是']
},

'不客气': {
  pos: [['短语', 'phrase']],
  zh: ['别人说"谢谢"的时候，用来回答。'],
  en: ['you\'re welcome; don\'t mention it'],
  syl: [{ py: 'bú', i: 'b', f: 'u', t: 2 }, { py: 'kè', i: 'k', f: 'e', t: 4 }, { py: 'qi', i: 'q', f: 'i', t: 0 }],
  phon: [
    '"不"在第四声"客"前面读第二声：bú kèqi。',
    'k 要送气；e 的嘴不要圆。',
    '"气"读轻声，短而轻。'
  ],
  img: { src: 'img/bukeqi.jpg', cap: "\"谢谢！\" \"不客气。\"", by: "asenat29", lic: "CC BY 2.0", from: "Wikimedia Commons · Giving a gift.jpg" },
  use: ['A：谢谢！　B：不客气。'],
  ex: [
    { ctx: '道谢', zh: '谢谢 ！ —— 不客气 。', py: 'Xièxie! — Bú kèqi.', en: 'Thanks! — You\'re welcome.' },
    { ctx: '道谢', zh: '谢谢 你 。 —— 不客气 。', py: 'Xièxie nǐ. — Bú kèqi.', en: 'Thank you. — You\'re welcome.' },
    { ctx: '课堂', zh: '谢谢 老师 ！ —— 不客气 。', py: 'Xièxie lǎoshī! — Bú kèqi.', en: 'Thank you, teacher! — You\'re welcome.' }
  ],
  drill: [
    { t: 'choice', q: 'A：谢谢你！　B：___', opts: ['对不起。', '不客气。', '再见。', '你好。'], a: 1, why: '回答"谢谢"用"不客气"。' },
    { t: 'choice', q: 'A：对不起！　B：___', opts: ['不客气。', '没关系。', '谢谢。', '请坐。'], a: 1, why: '回答"对不起"用"没关系"。' },
    { t: 'choice', say: '不客气', q: '听录音，选拼音。', opts: ['bù kèqi', 'bú kèqi', 'bú kěqi', 'bù gèqi'], a: 1, why: '"不"在第四声前读第二声。' },
    { t: 'choice', q: '"不客气"的意思是：', opts: ['Sorry.', 'Thank you.', 'You\'re welcome.', 'Goodbye.'], a: 2, why: '不客气 = You\'re welcome。' }
  ],
  bop: {
    b: '老师把一支笔递给学生，学生说"谢谢"，老师笑着回答："不客气！"',
    o: ['能听、说"不客气 bú kèqi"', '能用"不客气"回答"谢谢"', '能分清"不客气"和"没关系"'],
    pre: '问：别人说"谢谢"，你怎么回答？看学生已经知道什么。',
    p: '① 跟读 bú kèqi；② 传东西：学生把书递给同桌，"谢谢。""不客气。"；③ 对比练习：谢谢—不客气 ／ 对不起—没关系。',
    post: '老师随机说"谢谢"或"对不起"，学生快速回答；或做本页练习 1–4。',
    s: '板书：谢谢 → 不客气；对不起 → 没关系。作业：今天对三个人说中文的"谢谢"或"不客气"。'
  },
  act: [
    { tag: '游戏', name: '传球说谢谢', how: '全班围成一圈传球：传的人说"给你"，接的人说"谢谢"，传的人回"不客气"。' },
    { tag: '快速反应', name: '谢谢还是对不起？', how: '老师举"谢谢"或"对不起"的卡片，学生齐声回答"不客气"或"没关系"，越来越快。' },
    { tag: '情境表演', name: '小帮手', how: '两人表演：一个人东西掉了，另一个人帮忙捡起来，然后完成"谢谢—不客气"的对话。' }
  ],
  teach: [
    { h: '成对教学', p: '把礼貌用语成对教：谢谢—不客气，对不起—没关系，你好—你好，再见—再见。' },
    { h: '词义', p: '"客气"是"像客人一样有礼貌"，"不客气"就是"不用这么客气"。HSK1 当作一个整体教。' }
  ],
  err: [
    { x: 'A：谢谢！ B：没关系。', v: 'A：谢谢！ B：不客气。', why: '"没关系"用来回答"对不起"。' },
    { x: 'bù kèqi', v: 'bú kèqi', why: '"不"在第四声前读第二声。' }
  ],
  hz: [
    { c: '客', rad: '宀', radName: '宝盖头', radMean: '房子 house', struct: '上下结构', parts: '宀 + 各', tip: '"宀"是房子，来到家里的人就是"客"人。', fam: '宝盖头的字多和房子有关：家、字、室（超纲）。' },
    { c: '气', rad: '气', radName: '气部', radMean: '空气 air', struct: '独体字', parts: '𠂉 + 一 + 乁', tip: '三条横线像天上飘动的云气。', fam: '带"气"的词：天气、生气（超纲）。' }
  ],
  cul: ['中国人很重视礼貌。朋友和家人之间反而少说"谢谢"，因为太客气会显得不亲近。', '回答"谢谢"还可以说"不用谢""没事"。'],
  syn: [{ w: '没事', note: '口语里也可以用来回答"谢谢"。' }, { w: '没关系', note: '易混：用来回答"对不起"。' }],
  ant: [],
  rel: ['谢谢', '对不起', '没关系', '请', '再见']
},

'不要': {
  pos: [['副词', 'adverb']],
  zh: ['放在动词前面，叫别人不做某事。'],
  en: ['don\'t (do something)'],
  syl: [{ py: 'bú', i: 'b', f: 'u', t: 2 }, { py: 'yào', i: 'y', f: 'ao', t: 4 }],
  phon: [
    '"不"在第四声"要"前面读第二声：búyào。',
    '第二声 + 第四声：先升后降。',
    'yào 读起来是 i + ao。'
  ],
  img: { src: 'img/buyao.jpg', cap: "不要！", by: "https://www.vperemen.com", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Stop Coronavirus COVID-19.jpg" },
  use: ['不要 + 动词：不要说话', '请 + 不要 + 动词（更客气）', '上课 / 这里 + 不要 + 动词'],
  ex: [
    { ctx: '课堂', zh: '不要 说话 。', py: 'Búyào shuōhuà.', en: 'Don\'t talk.' },
    { ctx: '课堂', zh: '上课 不要 看 手机 。', py: 'Shàngkè búyào kàn shǒujī.', en: 'Don\'t look at your phone in class.' },
    { ctx: '关心', zh: '不要 喝 冷 水 。', py: 'Búyào hē lěng shuǐ.', en: 'Don\'t drink cold water.' },
    { ctx: '请求', zh: '请 不要 睡觉 。', py: 'Qǐng búyào shuìjiào.', en: 'Please don\'t sleep.' }
  ],
  drill: [
    { t: 'choice', q: '上课 ___ 说话。', opts: ['不要', '没有', '很', '是'], a: 0, why: '不要 + 动词 = don\'t。' },
    { t: 'order', words: ['不要', '手机', '看'], a: '不要看手机。', en: 'Don\'t look at your phone.' },
    { t: 'choice', q: '"不要睡觉"的意思是：', opts: ['I\'m not sleeping.', 'Don\'t sleep.', 'I want to sleep.', 'He didn\'t sleep.'], a: 1, why: '不要 + 动词：叫别人不做。' },
    { t: 'choice', say: '不要', q: '听录音，选拼音。', opts: ['bùyào', 'búyào', 'búyāo', 'bùyǎo'], a: 1, why: '"不"在第四声前读第二声。' }
  ],
  bop: {
    b: '老师展示几个"禁止"标志（不能打电话、不能吃东西），问："这是什么意思？"引出"不要……"。',
    o: ['能听、说、认读"不要 búyào"', '能说"不要 + 动词"', '能看懂简单的课堂规定'],
    pre: '问：上课的时候，什么可以做？什么不可以做？',
    p: '① 跟读 búyào；② 看标志说句子：不要说话、不要打电话、不要吃东西；③ 小组一起写三条"教室规定"。',
    post: '老师做动作（睡觉、看手机），学生说"老师，不要……！"；或做本页练习 1–4。',
    s: '板书：（请）不要 + 动词。作业：给自己的房间画一个"不要……"标志并写上中文。'
  },
  act: [
    { tag: '手工', name: '画标志', how: '每人画一个禁止标志（红圈加斜线），下面写"不要……"，贴在教室墙上做成"规定墙"。' },
    { tag: 'TPR', name: '老师说不要', how: '老师说"不要坐""不要说话""不要看书"，学生做相反的动作（站、说话、合上书）。' },
    { tag: '情境表演', name: '图书馆里', how: '一个学生在"图书馆"里打电话、吃东西，另一个学生客气地说"请不要……"。' }
  ],
  teach: [
    { h: '两个意思', p: '①不要 + 动词 = don\'t（不要说话）；②不 + 要 + 东西 = don\'t want（我不要茶）。HSK1 大纲里是第一个。' },
    { h: '语气', p: '直接说"不要……"语气比较强，加上"请"会客气得多。' }
  ],
  err: [
    { x: '不说话要。', v: '不要说话。', why: '"不要"放在动词的前面。' },
    { x: 'bùyào', v: 'búyào', why: '"不"在第四声前读第二声。' }
  ],
  hz: [{ c: '要', rad: '覀', radName: '西字头', radMean: '', struct: '上下结构', parts: '覀 + 女', tip: '上面是"西"，下面是"女"——可以这样记：西边来的女孩想"要"东西。', fam: '含"要"的字：腰（超纲）。' }],
  cul: ['中国的公共场所常有"请不要……"或"请勿……"的牌子，比如"请不要说话"。"勿"是书面语，意思和"不要"一样。'],
  syn: [{ w: '别', py: 'bié', note: '口语：别说话 = 不要说话。', out: true }],
  ant: [{ w: '可以', note: 'may; can' }, { w: '要', note: '要 ↔ 不要' }],
  rel: ['不', '要', '请', '可以']
},

'菜': {
  pos: [['名词', 'noun']],
  zh: ['做好的、吃饭时吃的东西（一个菜）。', '蔬菜。'],
  en: ['dish; cuisine', 'vegetable'],
  syl: [{ py: 'cài', i: 'c', f: 'ai', t: 4 }],
  phon: [
    '声母 c 像英语 cats 里的 ts，要送气。不要读成 k 或 s。',
    '把纸片放在嘴前：c 有气流（纸片动），z 没有。',
    '第四声，全降。'
  ],
  img: { src: 'img/cai.jpg', cap: "很多中国菜", by: "Wikimedia Commons contributor", lic: "CC BY-SA 2.5", from: "Wikimedia Commons · Chinese meal.jpg" },
  use: ['买菜 / 做菜 / 吃菜', '中国菜', '这个菜很好吃'],
  ex: [
    { ctx: '买东西', zh: '我 去 买 菜 。', py: 'Wǒ qù mǎi cài.', en: 'I\'m going to buy groceries.' },
    { ctx: '评价', zh: '这个 菜 很 好吃 。', py: 'Zhège cài hěn hǎochī.', en: 'This dish is delicious.' },
    { ctx: '喜好', zh: '我 爱 吃 中国 菜 。', py: 'Wǒ ài chī Zhōngguó cài.', en: 'I love Chinese food.' },
    { ctx: '饭店', zh: '你 想 吃 什么 菜 ？', py: 'Nǐ xiǎng chī shénme cài?', en: 'What dish would you like to eat?' }
  ],
  drill: [
    { t: 'choice', say: '菜', q: '听录音，选拼音。', opts: ['zài', 'cài', 'sài', 'kài'], a: 1, why: '菜 cài，c 送气。' },
    { t: 'order', words: ['菜', '很', '这个', '好吃'], a: '这个菜很好吃。', en: 'This dish is delicious.' },
    { t: 'choice', q: '妈妈去超市买 ___ 。', opts: ['菜', '课', '字', '事'], a: 0, why: '买菜 = buy groceries。' },
    { t: 'choice', q: '"中国菜"的意思是：', opts: ['Chinese tea', 'Chinese food', 'Chinese book', 'Chinese people'], a: 1, why: '中国菜 = Chinese food / cuisine。' }
  ],
  bop: {
    b: '展示一桌中国菜的图片："你们吃过中国菜吗？你最喜欢哪个？"',
    o: ['能听、说、认读"菜 cài"', '能说"这个菜很好吃"', '能说"我爱吃中国菜"'],
    pre: '问：你知道哪些中国菜的名字？把学生说的写在黑板上。',
    p: '① 跟读 cài，用纸片练送气；② 看图说话："这个菜很好吃／不好吃"；③ 饭店对话："你想吃什么菜？""我想吃这个。"',
    post: '老师指图片，学生说"这个菜好吃"或"这个菜不好吃"；或做本页练习 1–4。',
    s: '板书：买菜 ／ 中国菜 ／ 这个菜很好吃。作业：画出自己最爱吃的一个菜，写一句话。'
  },
  act: [
    { tag: '情境表演', name: '小饭店', how: '用图片做一份菜单。学生扮演服务员和客人："你想吃什么菜？""我要这个菜。"' },
    { tag: '调查', name: '好吃不好吃', how: '展示五张菜的图片，全班举手投票"好吃／不好吃"，老师在黑板上记数字，复习数字。' },
    { tag: '游戏', name: '菜篮子', how: '轮流说："我去买菜，我买苹果。""我去买菜，我买苹果和鸡蛋。"每人加一样，看谁记得多。' }
  ],
  teach: [
    { h: '两个意思', p: '"菜"可以是做好的一道菜（dish），也可以是蔬菜（vegetable）。用图片分别展示。' },
    { h: '搭配', p: '饭和菜：中国人吃饭时，米饭是"饭"，其他的是"菜"。' }
  ],
  err: [
    { x: 'kài / sài', v: 'cài', why: 'c 是送气的 ts 音。' },
    { x: '这个菜很好喝。', v: '这个菜很好吃。', why: '菜用"吃"，茶和水用"喝"。' }
  ],
  hz: [{ c: '菜', rad: '艹', radName: '草字头', radMean: '草、植物 plants', struct: '上下结构', parts: '艹 + 采', tip: '上面"艹"表示植物，下面"采 cǎi"是用手在树上摘东西，也表示读音——摘来的植物就是"菜"。', fam: '草字头的字多和植物有关：茶、苹、花、草、药。' }],
  cul: ['中国人吃饭时，菜放在桌子中间，大家一起吃，不是一人一份。', '中国各地的菜很不一样：四川菜很辣，广东菜比较清淡。'],
  syn: [],
  ant: [],
  rel: ['饭', '米饭', '好吃', '吃', '做饭', '超市']
},

'茶': {
  pos: [['名词', 'noun']],
  zh: ['用茶叶泡的饮料；茶叶。'],
  en: ['tea'],
  syl: [{ py: 'chá', i: 'ch', f: 'a', t: 2 }],
  phon: [
    '声母 ch：舌尖向上卷，顶住上面，要送气。',
    '第二声，从中往高升（35），像英语问 "What?" 的语调。',
    '对比：茶 chá ／ 擦 cā（舌头平）。'
  ],
  img: { src: 'img/cha.jpg', cap: "请喝茶。", by: "Acabashi", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Tai Won Mein restaurant Chinese tea Greenwich Church Street, Greenwich London England.jpg" },
  use: ['喝茶', '请喝茶', '中国茶'],
  ex: [
    { ctx: '喜好', zh: '我 爱 喝 茶 。', py: 'Wǒ ài hē chá.', en: 'I love drinking tea.' },
    { ctx: '待客', zh: '请 喝 茶 。', py: 'Qǐng hē chá.', en: 'Please have some tea.' },
    { ctx: '介绍', zh: '这 是 中国 茶 。', py: 'Zhè shì Zhōngguó chá.', en: 'This is Chinese tea.' },
    { ctx: '提问', zh: '你 喝 茶 吗 ？', py: 'Nǐ hē chá ma?', en: 'Do you drink tea?' }
  ],
  drill: [
    { t: 'choice', q: '请 ___ 茶。', opts: ['吃', '喝', '看', '听'], a: 1, why: '茶用"喝"。' },
    { t: 'order', words: ['茶', '我', '喝', '不'], a: '我不喝茶。', en: 'I don\'t drink tea.' },
    { t: 'choice', say: '茶', q: '听录音，选拼音。', opts: ['chā', 'chá', 'cá', 'zhá'], a: 1, why: '茶 chá，第二声。' },
    { t: 'choice', q: 'A：你喝茶吗？　B：___', opts: ['我喝茶。', '我吃茶。', '我是茶。', '我在茶。'], a: 0, why: '喝茶。' }
  ],
  bop: {
    b: '老师拿出茶叶让学生闻一闻，或者倒一杯茶："这是什么？你们喝吗？"',
    o: ['能听、说、认读"茶 chá"', '能说"我喝茶 / 我不喝茶"', '能说"请喝茶"'],
    pre: '问：你们家喝什么？水、牛奶，还是……？',
    p: '① 跟读 chá、hē chá；② 饮料图片：茶、水、牛奶，学生说"我喝……／我不喝……"；③ 待客表演："请坐，请喝茶。""谢谢。"',
    post: '全班调查：喝茶的人举手，一起数"一、二、三……"；或做本页练习 1–4。',
    s: '板书：喝 + 茶 ／ 请喝茶。作业：问家人"你喝茶吗？"，明天告诉大家。'
  },
  act: [
    { tag: '情境表演', name: '请喝茶', how: '学生扮演主人和客人："你好，请坐，请喝茶。""谢谢！""不客气。"（同时复习"不客气"）' },
    { tag: '体验', name: '小茶会', how: '带一点茶叶和杯子，现场泡茶，学生闻一闻、喝一口，说"好喝／不好喝"。' },
    { tag: '游戏', name: '喝还是吃？', how: '老师说"茶、包子、水、米饭、牛奶"，学生快速做"喝"或"吃"的动作并说出来。' }
  ],
  teach: [
    { h: '搭配', p: '茶、水、牛奶用"喝"；饭、菜、包子用"吃"。' },
    { h: '语音', p: 'ch 是卷舌音，和 c 对比练：chá — cā。' }
  ],
  err: [
    { x: '我吃茶。', v: '我喝茶。', why: '茶用"喝"。' },
    { x: 'cá', v: 'chá', why: 'ch 要卷舌。' }
  ],
  hz: [{ c: '茶', rad: '艹', radName: '草字头', radMean: '草、植物 plants', struct: '上下结构', parts: '艹 + 人 + 朩', tip: '上面是草（艹），下面是树（木），中间有一个"人"——人在草和树中间采茶。', fam: '草字头的字：菜、苹、花、草。' }],
  cul: ['中国是茶的故乡。客人来了，主人先请客人喝茶。', '英语 tea 和很多语言里的 "cha / chai" 都来自汉语的"茶"。'],
  syn: [],
  ant: [],
  rel: ['喝', '水', '杯子', '牛奶', '请']
},

'唱': {
  pos: [['动词', 'verb']],
  zh: ['用嘴发出有音乐的声音。'],
  en: ['to sing'],
  syl: [{ py: 'chàng', i: 'ch', f: 'ang', t: 4 }],
  phon: [
    '声母 ch：卷舌、送气。',
    '后鼻音 ang：嘴张大，结束时舌头后面抬起来。',
    '第四声，全降。'
  ],
  img: { src: 'img/chang.jpg', cap: "她在唱歌。", by: "RWIR", lic: "CC BY-SA 3.0", from: "Wikimedia Commons · 3 year old soloist with back up dancers at PNT Idol Richmond Night Market.jpg" },
  use: ['唱歌', '唱 + 中文歌', '会唱 / 爱唱'],
  ex: [
    { ctx: '爱好', zh: '我 爱 唱 歌 。', py: 'Wǒ ài chàng gē.', en: 'I love singing.' },
    { ctx: '能力', zh: '她 会 唱 中文 歌 。', py: 'Tā huì chàng Zhōngwén gē.', en: 'She can sing Chinese songs.' },
    { ctx: '建议', zh: '我们 唱 歌 吧 。', py: 'Wǒmen chàng gē ba.', en: 'Let\'s sing.' },
    { ctx: '提问', zh: '你 唱 什么 歌 ？', py: 'Nǐ chàng shénme gē?', en: 'What song are you singing?' }
  ],
  drill: [
    { t: 'choice', q: '我爱 ___ 歌。', opts: ['唱', '吃', '喝', '写'], a: 0, why: '唱歌 = to sing (a song)。' },
    { t: 'order', words: ['歌', '我们', '吧', '唱'], a: '我们唱歌吧。', en: 'Let\'s sing.' },
    { t: 'choice', say: '唱', q: '听录音，选拼音。', opts: ['chàn', 'chàng', 'càng', 'zhàng'], a: 1, why: '唱 chàng，后鼻音。' },
    { t: 'choice', q: '"她会唱中文歌"的意思是：', opts: ['She likes Chinese food.', 'She can sing Chinese songs.', 'She is Chinese.', 'She listens to songs.'], a: 1, why: '会 + 唱 = can sing。' }
  ],
  bop: {
    b: '老师播放一首简单的中文儿歌（如《两只老虎》）的开头，问："他们在做什么？"',
    o: ['能听、说、认读"唱 chàng"', '能说"我爱唱歌"', '能说"我会 / 不会唱……"'],
    pre: '问：谁喜欢唱歌？谁会唱中文歌？',
    p: '① 跟读 chàng、chàng gē；② 学唱一首中文儿歌的两句；③ 两人问答："你会唱中文歌吗？""我会／不会。"',
    post: '每组唱一句学到的歌，老师问"他们在做什么？"；或做本页练习 1–4。',
    s: '板书：唱 + 歌 ／ 会唱 ／ 爱唱。作业：回家把今天学的歌唱给家人听。'
  },
  act: [
    { tag: '歌曲', name: '学唱《两只老虎》', how: '先读歌词再跟唱。会唱以后可以把歌词换成学过的词："一个包子，一个包子，很好吃，很好吃。"' },
    { tag: '游戏', name: '歌声传递', how: '音乐响时传球，音乐停时拿球的人唱一句中文歌或说"我不会唱"。' },
    { tag: '调查', name: '谁爱唱歌？', how: '学生问同学"你爱唱歌吗？"，统计全班"爱唱"和"不爱唱"的人数。' }
  ],
  teach: [
    { h: '搭配', p: '"唱"和"歌"常常一起用：唱歌。中间可以加词：唱中文歌、唱一个歌。' },
    { h: '成组教学', p: '和"听（歌）"一起教：我爱唱歌，也爱听歌。' }
  ],
  err: [
    { x: '我爱唱。', v: '我爱唱歌。', why: '一般要说"唱歌"，"唱"后面带上"歌"。' },
    { x: 'chàn', v: 'chàng', why: '后鼻音 -ng。' }
  ],
  hz: [{ c: '唱', rad: '口', radName: '口字旁', radMean: '嘴 mouth', struct: '左右结构', parts: '口 + 昌', tip: '左边是"口"，用嘴唱；右边"昌 chāng"表示读音，是两个"日"——张开口，声音像太阳一样响亮。', fam: '口字旁的字：吃、喝、叫、吗、吧。' }],
  cul: ['很多中国人喜欢和朋友一起去 KTV 唱歌。', '学唱中文歌是练习发音和记生词的好方法。'],
  syn: [],
  ant: [],
  rel: ['歌', '听', '好听', '会']
},

'超市': {
  pos: [['名词', 'noun']],
  zh: ['卖吃的、用的等很多东西的大商店，客人自己拿东西。'],
  en: ['supermarket'],
  syl: [{ py: 'chāo', i: 'ch', f: 'ao', t: 1 }, { py: 'shì', i: 'sh', f: '-i', t: 4 }],
  phon: [
    '第一声 + 第四声：chāo 高而平，shì 从高降到底。',
    'ch 和 sh 都是卷舌音，舌尖向上卷。',
    'shi 的韵母不是"衣 yī"，嘴不要咧开。'
  ],
  img: { src: 'img/chaoshi.jpg', cap: "超市", by: "Wilfredor", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Aisle in L Intermarche supermarket in Quebec City.jpg" },
  use: ['去超市', '在超市 + 买东西', '超市在……'],
  ex: [
    { ctx: '去向', zh: '我 去 超市 。', py: 'Wǒ qù chāoshì.', en: 'I\'m going to the supermarket.' },
    { ctx: '位置', zh: '超市 在 那边 。', py: 'Chāoshì zài nàbiān.', en: 'The supermarket is over there.' },
    { ctx: '购物', zh: '我 在 超市 买 水果 。', py: 'Wǒ zài chāoshì mǎi shuǐguǒ.', en: 'I buy fruit at the supermarket.' },
    { ctx: '描述', zh: '超市 里 人 很 多 。', py: 'Chāoshì lǐ rén hěn duō.', en: 'There are many people in the supermarket.' }
  ],
  drill: [
    { t: 'choice', q: '我去 ___ 买水果和牛奶。', opts: ['超市', '医院', '学校', '电影院'], a: 0, why: '在超市买东西。' },
    { t: 'order', words: ['超市', '去', '我'], a: '我去超市。', en: 'I\'m going to the supermarket.' },
    { t: 'choice', say: '超市', q: '听录音，选出听到的词。', opts: ['超市 chāoshì', '商店 shāngdiàn', '书店 shūdiàn', '饭店 fàndiàn'], a: 0, why: '超市 chāoshì。' },
    { t: 'choice', q: '哪一句是对的？', opts: ['我买水果在超市。', '我在超市买水果。', '我超市在买水果。', '在我超市买水果。'], a: 1, why: '在 + 地方 + 动词。' }
  ],
  bop: {
    b: '展示一张超市的照片或购物袋："这是哪儿？你们常常去吗？买什么？"',
    o: ['能听、说、认读"超市 chāoshì"', '能说"我去超市"', '能说"我在超市买……"'],
    pre: '问：你在哪儿买水果、牛奶？看学生会不会说"商店"或"超市"。',
    p: '① 跟读 chāoshì；② 看图说"我在超市买……"（水果、牛奶、面包、鸡蛋）；③ 两人问答："你去哪儿？""我去超市。""你买什么？"',
    post: '老师说东西的名字，学生说"在超市买"或"不在超市买"；或做本页练习 1–4。',
    s: '板书：我去超市。／ 我在超市买 + 东西。作业：写一张中文的购物单（三样东西）。'
  },
  act: [
    { tag: '情境表演', name: '教室小超市', how: '把食物图片摆在桌子上当"超市"，贴上价格。学生拿着"购物单"买东西："我要两个苹果。""八块钱。"' },
    { tag: '游戏', name: '购物单接龙', how: '"我去超市，我买牛奶。""我去超市，我买牛奶和面包。"每人加一样东西。' },
    { tag: '分类', name: '哪儿买？', how: '把东西的图片分到"超市／书店／医院"三栏，并说"在超市买苹果，在书店买书"。' }
  ],
  teach: [
    { h: '成组教学', p: '和 商店、书店、饭店 一起教"地方"，都可以用"去……""在……"。' },
    { h: '语序', p: '在 + 地方 + 做什么：我在超市买水果。' }
  ],
  err: [
    { x: '我买水果在超市。', v: '我在超市买水果。', why: '"在 + 地方"放在动词前面。' },
    { x: 'cāosì', v: 'chāoshì', why: 'ch、sh 要卷舌。' }
  ],
  hz: [
    { c: '超', rad: '走', radName: '走字旁', radMean: '走路 walking', struct: '半包围结构', parts: '走 + 召', tip: '"走"表示走路，走得比别人快就"超"过去了；"召 zhào"表示读音。', fam: '走字旁的字：起（起床）、越（超纲）。' },
    { c: '市', rad: '亠', radName: '亠部（传统字典归"巾"部）', radMean: '', struct: '上下结构', parts: '亠 + 巾', tip: '"市"是买卖东西的地方（市场），也是城市。上面一点一横像屋顶，下面是"巾"。', fam: '带"市"的词：城市、市场（超纲）。' }
  ],
  cul: ['"超市"是"超级市场"的简称，是从英语 supermarket 翻译来的：super = 超级，market = 市场。', '在中国的超市，很多人用手机付钱。'],
  syn: [{ w: '商店', note: '比较小，范围更广：shop, store。' }],
  ant: [],
  rel: ['商店', '买', '东西', '水果', '钱']
},

'车': {
  pos: [['名词', 'noun']],
  zh: ['在路上走的交通工具，有轮子。'],
  en: ['car; vehicle'],
  syl: [{ py: 'chē', i: 'ch', f: 'e', t: 1 }],
  phon: [
    '声母 ch：卷舌、送气。',
    '韵母 e：嘴半开，嘴唇不圆，不是英语的 "ee" 或 "ay"。',
    '第一声，高而平。'
  ],
  img: { src: 'img/che.jpg', cap: "这是车。", by: "Hannes Grobe", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Google-street-view-car hg.jpg" },
  use: ['开车 / 坐车', '我的车', '火车、出租车'],
  ex: [
    { ctx: '介绍', zh: '这 是 我 的 车 。', py: 'Zhè shì wǒ de chē.', en: 'This is my car.' },
    { ctx: '上班', zh: '我 开车 去 公司 。', py: 'Wǒ kāichē qù gōngsī.', en: 'I drive to the office.' },
    { ctx: '上学', zh: '我 坐 车 去 学校 。', py: 'Wǒ zuò chē qù xuéxiào.', en: 'I go to school by car/bus.' },
    { ctx: '描述', zh: '他 的 车 很 新 。', py: 'Tā de chē hěn xīn.', en: 'His car is new.' }
  ],
  drill: [
    { t: 'choice', q: '爸爸 ___ 车去上班。', opts: ['开', '吃', '看', '写'], a: 0, why: '开车 = to drive。' },
    { t: 'order', words: ['车', '这', '我', '是', '的'], a: '这是我的车。', en: 'This is my car.' },
    { t: 'choice', say: '车', q: '听录音，选拼音。', opts: ['chē', 'cē', 'chī', 'chā'], a: 0, why: '车 chē，第一声。' },
    { t: 'choice', q: '哪个不是"车"？', opts: ['火车', '出租车', '飞机', '我的车'], a: 2, why: '飞机 = airplane。' }
  ],
  bop: {
    b: '老师模仿开车的动作和声音（"嘀嘀——"），问："老师在做什么？"',
    o: ['能听、说、认读"车 chē"', '能说"开车、坐车"', '能说"我坐车去……"'],
    pre: '问：你今天怎么来学校？看学生会用什么词。',
    p: '① 跟读 chē、kāichē、zuò chē；② 交通工具图片：车、火车、出租车、飞机；③ 两人问答："你怎么去学校？""我坐车去。"',
    post: '老师做开车或坐车的动作，学生说"开车／坐车"；或做本页练习 1–4。',
    s: '板书：开车（自己开）／ 坐车（别人开）。作业：写一句"我……去学校"。'
  },
  act: [
    { tag: 'TPR', name: '开车坐车', how: '老师说"开车"，学生双手握方向盘；说"坐车"，学生坐好系安全带；说"火车"，学生排成一列开火车。' },
    { tag: '游戏', name: '开火车', how: '学生排成一列"火车"，"火车头"说一个词，后面的人依次重复，说错的人到车尾。' },
    { tag: '调查', name: '你怎么来学校？', how: '学生互相问"你怎么来学校？"，把"坐车／开车／走路"的人数写在黑板上。' }
  ],
  teach: [
    { h: '开车 / 坐车', p: '自己开是"开车"，别人开、自己坐是"坐车"。' },
    { h: '词族', p: '"车"可以组成很多词：火车、出租车、开车。让学生猜"火 + 车"是什么车。' }
  ],
  err: [
    { x: '我去学校坐车。', v: '我坐车去学校。', why: '先说怎么去（坐车），再说去哪儿。' },
    { x: 'cē', v: 'chē', why: 'ch 要卷舌。' }
  ],
  hz: [{ c: '车', rad: '车', radName: '车部', radMean: '车 vehicle', struct: '独体字', parts: '车', tip: '繁体字"車"像从上面看的一辆车：中间是车厢，上下两横是轮子，一竖是车轴。', fam: '车字旁的字多和车有关：轻、辆、轮（超纲）。' }],
  cul: ['中国的高铁（很快的火车）很有名，从北京到上海只要四个多小时。', '在中国，车在路的右边走。'],
  syn: [],
  ant: [],
  rel: ['开车', '出租车', '火车', '坐', '飞机']
}

});
