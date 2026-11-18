// HSK1 教学参考 · 第 23 批（10 词）：我 我们 五 午饭 下 下雨 下班 下课 想 先生
window.H1_WORDS = window.H1_WORDS || {};
Object.assign(H1_WORDS, {

'我': {
  pos: [['代词', 'pronoun']],
  zh: ['说话人称自己。'],
  en: ['I; me'],
  syl: [{ py: 'wǒ', i: 'w', f: 'o', t: 3 }],
  phon: [
    '第三声，先降后升，声音要低。',
    '读起来像 "waw"，嘴唇要圆。',
    '"我很好"里"我"读第二声：wó hén hǎo（三个第三声连读）。'
  ],
  img: { src: 'img/wo.jpg', cap: "我", by: "Pittigrilli", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Man photographing himself in hotel bathroom with mirrors all around to generate illusion.jpg" },
  use: ['我 + 是……', '我的 + 名词', '我们（多数）'],
  ex: [
    { ctx: '介绍', zh: '我 是 学生 。', py: 'Wǒ shì xuésheng.', en: 'I am a student.' },
    { ctx: '名字', zh: '我 叫 小 月 。', py: 'Wǒ jiào Xiǎoyuè.', en: 'My name is Xiaoyue.' },
    { ctx: '所属', zh: '这 是 我 的 书 。', py: 'Zhè shì wǒ de shū.', en: 'This is my book.' },
    { ctx: '感情', zh: '我 爱 我 的 家人 。', py: 'Wǒ ài wǒ de jiārén.', en: 'I love my family.' }
  ],
  drill: [
    { t: 'choice', q: '___ 叫大卫，我是美国人。', opts: ['我', '你', '他', '它'], a: 0, why: '说自己用"我"。' },
    { t: 'order', words: ['我', '是', '学生'], a: '我是学生。', en: 'I am a student.' },
    { t: 'choice', q: '"my book"怎么说？', opts: ['我的书', '书我的', '我书的', '的我书'], a: 0, why: '我 + 的 + 名词。' },
    { t: 'choice', say: '我', q: '听录音，选拼音。', opts: ['wǒ', 'wò', 'wó', 'wā'], a: 0, why: '我 wǒ，第三声。' }
  ],
  bop: {
    b: '老师拍拍自己的胸口："我！我是老师。"然后请学生拍自己说："我！我是学生。"',
    o: ['能听、说、认读"我 wǒ"', '能做简单的自我介绍', '能说"我的……"'],
    pre: '看学生已经会说哪些自我介绍的话。',
    p: '① 跟读 wǒ；② 自我介绍：我叫……，我是……人，我是学生；③ 所属：我的书、我的手机。',
    post: '每人用三句话自我介绍；或做本页练习 1–4。',
    s: '板书：我 / 你 / 他 ／ 我的 + 名词 ／ 我们。作业：写五句"我……"的自我介绍。'
  },
  act: [
    { tag: 'TPR', name: '我你他', how: '老师说"我"学生指自己，"你"指老师，"他"指旁边的男同学。越来越快。' },
    { tag: '展示', name: '自我介绍', how: '每人上台："你好！我叫……。我是……人。我喜欢……。认识你们很高兴！"' },
    { tag: '游戏', name: '这是我的', how: '老师拿起学生的东西问"这是谁的？"，主人说"这是我的！"' }
  ],
  teach: [
    { h: '没有变化', p: '汉语的"我"做主语、宾语都一样：我爱你，你爱我（不像英语 I / me）。' },
    { h: '我的', p: '亲属前常省略"的"：我妈妈。' }
  ],
  err: [
    { x: '我是叫大卫。', v: '我叫大卫。', why: '"叫"前不用"是"。' },
    { x: '这是我书。', v: '这是我的书。', why: '东西前一般加"的"。' }
  ],
  hz: [{ c: '我', rad: '戈', radName: '戈部', radMean: '古代兵器 dagger-axe', struct: '独体字', parts: '手 + 戈', tip: '古字是一把带锯齿的兵器（戈）。后来借来表示"自己"。注意笔顺：撇、横、竖钩、提、斜钩、撇、点，共七画。', fam: '有"戈"的字：找、我；战（超纲）。' }],
  cul: ['"我"字本来是一种古代兵器，后来才借来说"自己"。', '古代汉语里表示"我"的字很多：吾、余、朕（皇帝用）等。'],
  syn: [],
  ant: [{ w: '你', note: '听话的人。' }],
  rel: ['我们', '你', '他', '她', '的']
},

'我们': {
  pos: [['代词', 'pronoun']],
  zh: ['说话人和别的人（包括自己在内的一些人）。'],
  en: ['we; us'],
  syl: [{ py: 'wǒ', i: 'w', f: 'o', t: 3 }, { py: 'men', i: 'm', f: 'en', t: 0 }],
  phon: [
    '第三声 + 轻声："我"读低降，"们"轻而稍高。',
    '"们"是前鼻音 -n。',
    '不要读成 wǒmén。'
  ],
  img: { src: 'img/women.jpg', cap: "我们是朋友。", by: "Kwameghana", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Group of friends eating together.jpg" },
  use: ['我们 + 是……', '我们 + 一起 / 都……', '我们的 + 名词'],
  ex: [
    { ctx: '身份', zh: '我们 是 学生 。', py: 'Wǒmen shì xuésheng.', en: 'We are students.' },
    { ctx: '邀请', zh: '我们 去 吃 饭 吧 。', py: 'Wǒmen qù chī fàn ba.', en: 'Let us go and eat.' },
    { ctx: '描述', zh: '我们 都 喜欢 汉语 。', py: 'Wǒmen dōu xǐhuan Hànyǔ.', en: 'We all like Chinese.' },
    { ctx: '所属', zh: '这 是 我们 的 老师 。', py: 'Zhè shì wǒmen de lǎoshī.', en: 'This is our teacher.' }
  ],
  drill: [
    { t: 'choice', q: '我和你都是学生，___ 是同学。', opts: ['我们', '你们', '他们', '它们'], a: 0, why: '包括自己用"我们"。' },
    { t: 'order', words: ['我们', '吧', '去', '看电影'], a: '我们去看电影吧。', en: 'Let us go to see a movie.' },
    { t: 'choice', q: '"our school"：', opts: ['我们的学校', '我们学校的', '学校我们', '的我们学校'], a: 0, why: '我们 + 的 + 名词（也常说"我们学校"）。' },
    { t: 'choice', say: '我们', q: '听录音，选拼音。', opts: ['wǒmen', 'wǒmén', 'wómen', 'wǒmeng'], a: 0, why: '我们 wǒmen。' }
  ],
  bop: {
    b: '老师把两个学生拉到身边，画一个圈："我和他和她——我们！"',
    o: ['能听、说、认读"我们 wǒmen"', '会用"我们……吧"提建议', '分清"我们、你们、他们"'],
    pre: '复习"我、们、你们、他们"。',
    p: '① 跟读 wǒmen；② 手势：我们（包括自己）/ 你们 / 他们；③ 建议句：我们去……吧！',
    post: '小组用"我们都……"找共同点；或做本页练习 1–4。',
    s: '板书：我们（包括我）／ 我们……吧！／ 我们都……。作业：写三个"我们……吧"的建议。'
  },
  act: [
    { tag: '游戏', name: '我们都', how: '三人一组找共同点，报告："我们都是学生。我们都喜欢猫。"' },
    { tag: '情境表演', name: '提建议', how: '"我们去吃饭吧！""好啊！我们去哪儿？""我们去那个饭店吧。"' },
    { tag: 'TPR', name: '画圈', how: '老师说"我们"，学生和旁边的人手拉手；说"你们"，指另一组。' }
  ],
  teach: [
    { h: '……吧', p: '"我们 + 动词 + 吧"是常用的建议句：我们走吧。' },
    { h: '我们学校', p: '"我们 + 集体名词"常省略"的"：我们学校、我们班、我们家。' }
  ],
  err: [
    { x: '我们们', v: '我们', why: '只加一个"们"。' },
    { x: '我们是学生们。', v: '我们是学生。', why: '名词不需要加"们"。' }
  ],
  hz: [
    { c: '我', rad: '戈', radName: '戈部', radMean: '古代兵器', struct: '独体字', parts: '手 + 戈', tip: '本来是一种兵器，借来表示"自己"。', fam: '有"戈"的字：找。' },
    { c: '们', rad: '亻', radName: '单人旁', radMean: '人 person', struct: '左右结构', parts: '亻 + 门', tip: '很多人从门里走出来——多数。', fam: '有"们"的词：你们、他们、她们、它们。' }
  ],
  cul: ['北方口语里还有"咱们 zánmen"（超纲），一定包括听话的人。', '中国人说"我们学校""我们家"比"我的学校"更自然。'],
  syn: [{ w: '大家', note: '所有的人。' }],
  ant: [{ w: '你们', note: '听话的一群人。' }, { w: '他们', note: '说话人和听话人以外的人。' }],
  rel: ['我', '们', '你们', '他们', '大家']
},

'五': {
  pos: [['数词', 'numeral']],
  zh: ['数字 5，四加一。'],
  en: ['five'],
  syl: [{ py: 'wǔ', i: 'w', f: 'u', t: 3 }],
  phon: [
    '第三声，先降后升，声音要低。',
    '嘴唇要圆，像 "woo"，但声调是低的。',
    '"五百"里"五"读第二声：wú bǎi。'
  ],
  img: { src: 'img/wu.jpg', cap: "五", by: "Korenn", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Sign number 5 on Jerusalem Street.jpg" },
  use: ['五 + 量词 + 名词：五个人', '五点 / 五月 / 五号 / 五岁', '十五、五十'],
  ex: [
    { ctx: '数量', zh: '我 有 五 本 书 。', py: 'Wǒ yǒu wǔ běn shū.', en: 'I have five books.' },
    { ctx: '时间', zh: '下午 五 点 下班 。', py: 'Xiàwǔ wǔ diǎn xiàbān.', en: 'I get off work at 5 p.m.' },
    { ctx: '星期', zh: '今天 星期 五 。', py: 'Jīntiān xīngqīwǔ.', en: 'Today is Friday.' },
    { ctx: '日期', zh: '五 月 一 号 不 上课 。', py: 'Wǔ yuè yī hào bú shàngkè.', en: 'There is no class on May 1st.' }
  ],
  drill: [
    { t: 'choice', q: '四、 ___ 、六', opts: ['五', '午', '七', '三'], a: 0, why: '四后面是五。' },
    { t: 'order', words: ['五', '我', '点', '下班'], a: '我五点下班。', en: 'I get off work at five.' },
    { t: 'choice', q: '"五"和"午"：', opts: ['读音一样，意思不一样', '意思一样', '读音不一样', '都是数字'], a: 0, why: '五（5）、午（中午）都读 wǔ。' },
    { t: 'choice', say: '五', q: '听录音，选拼音。', opts: ['wǔ', 'wù', 'hǔ', 'wǒ'], a: 0, why: '五 wǔ，第三声。' }
  ],
  bop: {
    b: '老师张开一只手："几个手指？——五！"',
    o: ['能听、说、认读"五 wǔ"', '能说带"五"的时间、数量', '分清"五"和"午"'],
    pre: '复习 1–4 和数字手势。',
    p: '① 跟读 wǔ；② 手势 1–5；③ 问答："你几点下班？""今天星期几？"',
    post: '听写带"五"的数字（15、50、55、5:05）；或做本页练习 1–4。',
    s: '板书：五 ／ 十五、五十 ／ 五（5）= 午（中午）读音一样。作业：写一写你星期五做什么。'
  },
  act: [
    { tag: 'TPR', name: '击掌', how: '老师说"五"，学生和旁边的人击掌（high five）；说别的数字不动。' },
    { tag: '游戏', name: '石头剪刀布', how: '用"石头（0）、剪刀（2）、布（5）"玩，出"布"时说"五！"' },
    { tag: '游戏', name: '数字宾果', how: '九宫格里写带"五"的数字，老师读，听到就划掉。' }
  ],
  teach: [
    { h: '同音字', p: '五（5）和 午（中午）读音一样，写法不同。' },
    { h: '变调', p: '"五"在第三声前读第二声：五百 wú bǎi、五点 wú diǎn。' }
  ],
  err: [
    { x: 'wù', v: 'wǔ', why: '"五"是第三声。' },
    { x: '五十（想说 15）', v: '十五', why: '十 + 五 = 15。' }
  ],
  hz: [{ c: '五', rad: '一', radName: '一部（有的字典归"二"部）', radMean: '——', struct: '独体字', parts: '一 + 丨 + 𠃍 + 一', tip: '只有四画：横、竖、横折、横。古字是上下两横中间一个"×"，表示天地交叉。', fam: '有"五"的字：语（讠+ 吾，吾里有五）。' }],
  cul: ['"五"在中国文化里很重要：五行（金木水火土）、五味（酸甜苦辣咸）。', '五月一日是劳动节，中国人有几天假。'],
  syn: [],
  ant: [],
  rel: ['四', '六', '午饭', '星期', '点', '几']
},

'午饭': {
  pos: [['名词', 'noun']],
  zh: ['中午吃的饭。'],
  en: ['lunch'],
  syl: [{ py: 'wǔ', i: 'w', f: 'u', t: 3 }, { py: 'fàn', i: 'f', f: 'an', t: 4 }],
  phon: [
    '第三声 + 第四声："午"只读前半段（低降），"饭"全降。',
    '"午"和"五"读音一样。',
    'f 是上牙碰下唇。'
  ],
  img: { src: 'img/wufan.jpg', cap: "这是我的午饭。", by: "Hay Kranen", lic: "CC0", from: "Wikimedia Commons · Box-veggies-and-two-apples.jpg" },
  use: ['吃 + 午饭', '午饭 + 吃什么', '时间 + 吃午饭'],
  ex: [
    { ctx: '作息', zh: '我 十 二 点 吃 午饭 。', py: 'Wǒ shí\'èr diǎn chī wǔfàn.', en: 'I have lunch at twelve.' },
    { ctx: '询问', zh: '你 午饭 吃 什么 ？', py: 'Nǐ wǔfàn chī shénme?', en: 'What are you having for lunch?' },
    { ctx: '地点', zh: '我们 在 学校 吃 午饭 。', py: 'Wǒmen zài xuéxiào chī wǔfàn.', en: 'We have lunch at school.' },
    { ctx: '邀请', zh: '我们 去 饭店 吃 午饭 吧 。', py: 'Wǒmen qù fàndiàn chī wǔfàn ba.', en: 'Let us go to a restaurant for lunch.' }
  ],
  drill: [
    { t: 'choice', q: '中午十二点吃 ___ 。', opts: ['午饭', '早饭', '晚饭', '米饭'], a: 0, why: '中午吃午饭。' },
    { t: 'order', words: ['吃', '午饭', '在', '我', '学校'], a: '我在学校吃午饭。', en: 'I have lunch at school.' },
    { t: 'choice', q: '早饭、___ 、晚饭', opts: ['午饭', '米饭', '饭店', '做饭'], a: 0, why: '三顿饭。' },
    { t: 'choice', say: '午饭', q: '听录音，选拼音。', opts: ['wǔfàn', 'wùfàn', 'wǔhàn', 'wǔfān'], a: 0, why: '午饭 wǔfàn。' }
  ],
  bop: {
    b: '老师看看表："十二点了，我饿了——我们去吃午饭吧！"',
    o: ['能听、说、认读"午饭 wǔfàn"', '能说"我……点吃午饭"', '三顿饭全部掌握'],
    pre: '复习"早饭、晚饭、中午"。',
    p: '① 跟读 wǔfàn；② 三顿饭 + 时间；③ 问答："你午饭吃什么？在哪儿吃？"',
    post: '介绍自己一天的三顿饭；或做本页练习 1–4。',
    s: '板书：早饭 / 午饭 / 晚饭 ／ 午 = 中午。作业：写一写今天的午饭。'
  },
  act: [
    { tag: '调查', name: '午饭在哪儿吃', how: '学生互相问"你午饭在哪儿吃？吃什么？"，统计结果。' },
    { tag: '游戏', name: '三顿饭排序', how: '把"早饭、午饭、晚饭"和时间卡配对。' },
    { tag: '文化体验', name: '中国的午饭', how: '介绍中国学校和公司的午饭和午休习惯。' }
  ],
  teach: [
    { h: '午', p: '"午"是中午：午饭、上午、下午、中午。' },
    { h: '午饭 / 中午', p: '"午饭"是一顿饭（lunch），"中午"是时间（noon）。' }
  ],
  err: [
    { x: '我吃午饭在十二点。', v: '我十二点吃午饭。', why: '时间放在动词前面。' },
    { x: 'wùfàn', v: 'wǔfàn', why: '"午"是第三声。' }
  ],
  hz: [
    { c: '午', rad: '十', radName: '十部（有的字典归"丿"部）', radMean: '——', struct: '独体字', parts: '丿 + 一 + 十', tip: '和"牛"很像，但"午"的竖不出头。', fam: '有"午"的词：上午、下午、中午。' },
    { c: '饭', rad: '饣', radName: '食字旁', radMean: '食物 food', struct: '左右结构', parts: '饣 + 反', tip: '和吃有关的"饣"。', fam: '有"饭"的词：早饭、晚饭、米饭。' }
  ],
  cul: ['很多中国人吃完午饭会午睡一会儿，学校和公司也常有午休时间。', '中国学生常在学校食堂吃午饭。'],
  syn: [],
  ant: [],
  rel: ['早饭', '晚饭', '中午', '饭', '吃', '上午']
},

'下': {
  pos: [['名词', 'noun'], ['动词', 'verb'], ['量词', 'measure word']],
  zh: ['（方位）低处；在……下面。', '（动词）从高处到低处；下雨、下班、下课。', '（时间）下一个：下个星期（拓展）。'],
  en: ['under; below', '(verb) to go down; (rain) to fall; to finish (work/class)', '(time) next'],
  syl: [{ py: 'xià', i: 'x', f: 'ia', t: 4 }],
  phon: [
    '第四声，从高处全降。',
    'x 是舌面音，嘴角向两边拉，不要读成 shà。',
    '放在名词后面时常读轻声：桌子下 zhuōzi xia。'
  ],
  img: { src: 'img/xia.jpg', cap: "猫在桌子下。", by: "Clyrmze", lic: "CC0", from: "Wikimedia Commons · Sleepy Cat Under a Table.png" },
  use: ['名词 + 下：桌子下、椅子下', '下 + 雨 / 班 / 课', '上 ↔ 下'],
  ex: [
    { ctx: '位置', zh: '猫 在 桌子 下 。', py: 'Māo zài zhuōzi xia.', en: 'The cat is under the table.' },
    { ctx: '天气', zh: '下雨 了 。', py: 'Xiàyǔ le.', en: 'It is raining.' },
    { ctx: '作息', zh: '我 五 点 下班 。', py: 'Wǒ wǔ diǎn xiàbān.', en: 'I get off work at five.' },
    { ctx: '时间', zh: '下 个 星期 我 去 中国 。', py: 'Xià gè xīngqī wǒ qù Zhōngguó.', en: 'I am going to China next week.' }
  ],
  drill: [
    { t: 'choice', q: '书在桌子上，猫在桌子 ___ 。', opts: ['下', '上', '里', '前'], a: 0, why: '上 ↔ 下。' },
    { t: 'order', words: ['下', '在', '椅子', '狗'], a: '狗在椅子下。', en: 'The dog is under the chair.' },
    { t: 'choice', q: '"下个星期"的意思是：', opts: ['next week', 'last week', 'this week', 'under the week'], a: 0, why: '下 = next。' },
    { t: 'choice', say: '下', q: '听录音，选拼音。', opts: ['xià', 'shà', 'xiā', 'jià'], a: 0, why: '下 xià，第四声。' }
  ],
  bop: {
    b: '老师把书放在桌子上："上。"再放到桌子下："下！"',
    o: ['能听、说、认读"下 xià"', '能说"……在……下"', '认识"下雨、下班、下课"'],
    pre: '复习"上、桌子、椅子"。',
    p: '① 跟读 xià，对比 xià / shà；② 位置：上 ↔ 下；③ 动词"下"：下雨、下班、下课；④ 时间：下个星期（拓展）。',
    post: '看图说位置；或做本页练习 1–4。',
    s: '板书：上 ↔ 下 ／ 下雨、下班、下课 ／ 下个星期。作业：用"下"写三句话。'
  },
  act: [
    { tag: 'TPR', name: '上和下', how: '老师说"上"学生举手，说"下"学生蹲下；"书在桌子下"学生把书放到桌子下。' },
    { tag: '游戏', name: '下什么', how: '老师说"下"，学生接"下雨！下班！下课！"，看谁接得最多。' },
    { tag: '画画', name: '听说画', how: '老师说"桌子上有一个杯子，桌子下有一只猫"，学生画出来。' }
  ],
  teach: [
    { h: '多用法', p: '方位（桌子下）、动作（下雨、下课）、时间（下个星期）。' },
    { h: '上 / 下 时间', p: '上个星期（last week）、下个星期（next week）。' }
  ],
  err: [
    { x: '猫在下桌子。', v: '猫在桌子下。', why: '方位词放在名词后面。' },
    { x: 'shà', v: 'xià', why: '"下"是 x，不是 sh。' }
  ],
  hz: [{ c: '下', rad: '一', radName: '一部', radMean: '——', struct: '独体字', parts: '横 + 竖 + 点', tip: '上面一长横是地面，下面一竖一点指向下方——"下"是低处。和"上"正好相反。', fam: '指事字：上、下。' }],
  cul: ['"下"和"上"是一对指事字，用符号表示方向。', '中国人说"下馆子"是去饭店吃饭（超纲口语）。'],
  syn: [],
  ant: [{ w: '上', note: '高处。' }],
  rel: ['上', '下雨', '下班', '下课', '下午', '里', '外']
},

'下雨': {
  pos: [['短语', 'phrase']],
  zh: ['从天上落下雨来。'],
  en: ['to rain'],
  syl: [{ py: 'xià', i: 'x', f: 'ia', t: 4 }, { py: 'yǔ', i: 'y', f: 'ü', t: 3 }],
  phon: [
    '第四声 + 第三声：先全降，再读低的第三声。',
    'yǔ 其实是 ü，嘴唇要圆。',
    'x 是舌面音。'
  ],
  img: { src: 'img/xiayu.jpg', cap: "下雨了。", by: "Alsafrata", lic: "CC BY 2.5", from: "Wikimedia Commons · Rain Umbrella 01.JPG" },
  use: ['下雨了', '明天会下雨', '不下雨'],
  ex: [
    { ctx: '天气', zh: '下雨 了 。', py: 'Xiàyǔ le.', en: 'It is raining.' },
    { ctx: '预报', zh: '明天 会 下雨 。', py: 'Míngtiān huì xiàyǔ.', en: 'It will rain tomorrow.' },
    { ctx: '询问', zh: '外边 下雨 吗 ？', py: 'Wàibian xiàyǔ ma?', en: 'Is it raining outside?' },
    { ctx: '原因', zh: '下雨 了 ， 我们 不 去 了 。', py: 'Xiàyǔ le, wǒmen bú qù le.', en: 'It is raining, so we are not going.' }
  ],
  drill: [
    { t: 'choice', q: '外边 ___ 了，你有伞吗？', opts: ['下雨', '上雨', '雨下', '雪'], a: 0, why: '下雨了。' },
    { t: 'order', words: ['会', '明天', '下雨'], a: '明天会下雨。', en: 'It will rain tomorrow.' },
    { t: 'choice', q: '"下雨"的"下"是什么意思？', opts: ['从上到下落', '下面', '下班', '下个'], a: 0, why: '雨从天上落下来。' },
    { t: 'choice', say: '下雨', q: '听录音，选拼音。', opts: ['xiàyǔ', 'xiàyù', 'shàyǔ', 'xiàyóu'], a: 0, why: '下雨 xiàyǔ。' }
  ],
  bop: {
    b: '老师用手指敲桌子模仿雨声"嗒嗒嗒"，问："这是什么声音？——下雨了！"',
    o: ['能听、说、认读"下雨 xiàyǔ"', '能说"下雨了""明天会下雨"', '会用"下雨"描述天气'],
    pre: '复习"天气、冷、热、雪"。',
    p: '① 跟读 xiàyǔ；② 天气说法：下雨了、下雪了、很冷、很热；③ 问答："明天会下雨吗？""下雨的时候你做什么？"',
    post: '学生当天气预报员；或做本页练习 1–4。',
    s: '板书：下雨了 ／ 会下雨 ／ 下雪了。作业：记录一个星期的天气，有几天下雨。'
  },
  act: [
    { tag: 'TPR', name: '雨声', how: '全班用手指敲桌子、拍腿、跺脚，模仿小雨到大雨；老师说"不下雨了"，大家停下。' },
    { tag: '情境表演', name: '天气预报', how: '学生轮流当播报员："明天北京下雨，上海很热。"' },
    { tag: '情境表演', name: '下雨了', how: '"下雨了！""我们回家吧。""好，我们坐出租车。"' }
  ],
  teach: [
    { h: '固定说法', p: '汉语说"下雨"，雨在"下"后面（✗ 雨下）。同样：下雪。' },
    { h: '了', p: '"下雨了"的"了"表示情况有了变化（开始下雨）。' }
  ],
  err: [
    { x: '雨下了。', v: '下雨了。', why: '固定说法是"下雨"。' },
    { x: '今天是下雨。', v: '今天下雨。', why: '不用"是"。' }
  ],
  hz: [
    { c: '下', rad: '一', radName: '一部', radMean: '——', struct: '独体字', parts: '横 + 竖 + 点', tip: '指向下方——雨从天上"下"来。', fam: '有"下"的词：下班、下课、下午。' },
    { c: '雨', rad: '雨', radName: '雨部', radMean: '雨 rain', struct: '独体字', parts: '一 + 冂 + 丨 + 四点', tip: '上面一横是天，下面是云，里面四点是雨滴。在字的上面时写成"⻗"。', fam: '雨字头的字：雪、零。' }
  ],
  cul: ['中国南方的春天和夏天常下雨，有"梅雨季节"。', '中国人说"春雨贵如油"——春天的雨对庄稼非常宝贵。'],
  syn: [],
  ant: [],
  rel: ['雨', '雪', '天气', '冷', '下']
},

'下班': {
  pos: [['动词', 'verb']],
  zh: ['工作时间结束，离开工作的地方。'],
  en: ['to get off work; to finish work'],
  syl: [{ py: 'xià', i: 'x', f: 'ia', t: 4 }, { py: 'bān', i: 'b', f: 'an', t: 1 }],
  phon: [
    '第四声 + 第一声：先全降，再高平。',
    'x 是舌面音。',
    'b 不送气。'
  ],
  img: { src: 'img/xiaban.jpg', cap: "下班了！", by: "Sashimi-b", lic: "CC BY 4.0", from: "Wikimedia Commons · Bedford Park–Lehman College entrance-2.jpg" },
  use: ['时间 + 下班', '下班 + 以后（超纲）/ 后', '下班了！'],
  ex: [
    { ctx: '作息', zh: '我 六 点 下班 。', py: 'Wǒ liù diǎn xiàbān.', en: 'I get off work at six.' },
    { ctx: '询问', zh: '你 几 点 下班 ？', py: 'Nǐ jǐ diǎn xiàbān?', en: 'What time do you get off work?' },
    { ctx: '回家', zh: '下班 后 我 回 家 。', py: 'Xiàbān hòu wǒ huí jiā.', en: 'I go home after work.' },
    { ctx: '高兴', zh: '下班 了 ！', py: 'Xiàbān le!', en: 'Work is over!' }
  ],
  drill: [
    { t: 'choice', q: '我九点上班，六点 ___ 。', opts: ['下班', '下课', '下雨', '上班'], a: 0, why: '上班 ↔ 下班。' },
    { t: 'order', words: ['下班', '你', '几点'], a: '你几点下班？', en: 'What time do you get off work?' },
    { t: 'choice', q: '"下班"和"下课"：', opts: ['下班是工作结束，下课是课结束', '一样', '下课是工作', '下班是上学'], a: 0, why: '班 = 工作；课 = 上课。' },
    { t: 'choice', say: '下班', q: '听录音，选拼音。', opts: ['xiàbān', 'shàbān', 'xiàpān', 'xiàbàn'], a: 0, why: '下班 xiàbān。' }
  ],
  bop: {
    b: '老师看看表，伸个懒腰："六点了，下班！回家！"',
    o: ['能听、说、认读"下班 xiàbān"', '能说"我……点下班"', '分清"上班 / 下班 / 下课"'],
    pre: '复习"上班、点、回家"。',
    p: '① 跟读 xiàbān；② 上班 ↔ 下班 + 时间；③ 问答："你爸爸几点下班？""下班后你做什么？"',
    post: '介绍一位家人的上下班时间；或做本页练习 1–4。',
    s: '板书：上班 ↔ 下班 ／ 下班后 + 做什么。作业：问问家人几点下班，下班后做什么。'
  },
  act: [
    { tag: 'TPR', name: '上班下班', how: '老师说"上班"学生拿起包、坐直，说"下班"学生伸懒腰、站起来。' },
    { tag: '调查', name: '下班后', how: '学生扮演不同职业，互相问"你几点下班？下班后做什么？"' },
    { tag: '情境表演', name: '下班了', how: '"下班了！你去哪儿？""我回家。你呢？""我去超市。"' }
  ],
  teach: [
    { h: '上 / 下 + 班 / 课', p: '上班 ↔ 下班；上课 ↔ 下课。' },
    { h: '下班后', p: '"……后"表示以后：下班后、吃饭后。' }
  ],
  err: [
    { x: '我下班在六点。', v: '我六点下班。', why: '时间放在动词前面。' },
    { x: '学生下班了。', v: '学生下课了。', why: '学生用"下课"。' }
  ],
  hz: [
    { c: '下', rad: '一', radName: '一部', radMean: '——', struct: '独体字', parts: '横 + 竖 + 点', tip: '在这里是"结束、离开"。', fam: '有"下"的词：下课、下雨、下午。' },
    { c: '班', rad: '王', radName: '王字旁', radMean: '玉 jade', struct: '左中右结构', parts: '王 + 刂 + 王', tip: '两块玉中间一把刀——分成一组组，"班"。', fam: '有"班"的词：上班、下班。' }
  ],
  cul: ['中国大城市下班时间（下午五六点）路上和地铁里人很多，叫"晚高峰"。', '"加班"（超纲）是下班后继续工作，在中国很常见。'],
  syn: [],
  ant: [{ w: '上班', note: '开始工作。' }],
  rel: ['上班', '下课', '工作', '回', '家', '点']
},

'下课': {
  pos: [['动词', 'verb']],
  zh: ['一节课结束。'],
  en: ['to finish class; class is over'],
  syl: [{ py: 'xià', i: 'x', f: 'ia', t: 4 }, { py: 'kè', i: 'k', f: 'e', t: 4 }],
  phon: [
    '两个第四声连读：两个字都要降，第一个降得短一点。',
    'x 是舌面音，k 要送气。',
    'kè 的 e 嘴形扁。'
  ],
  img: { src: 'img/xiake.jpg', cap: "下课了！", by: "Infrogmation of New Orleans", lic: "CC BY-SA 3.0", from: "Wikimedia Commons · OLStarofSeaSchoolBell.jpg" },
  use: ['下课了！', '时间 + 下课', '下课后 + 做什么'],
  ex: [
    { ctx: '课堂', zh: '下课 了 ！', py: 'Xiàkè le!', en: 'Class is over!' },
    { ctx: '作息', zh: '我们 十 二 点 下课 。', py: 'Wǒmen shí\'èr diǎn xiàkè.', en: 'We finish class at twelve.' },
    { ctx: '询问', zh: '你 几 点 下课 ？', py: 'Nǐ jǐ diǎn xiàkè?', en: 'What time does your class end?' },
    { ctx: '活动', zh: '下课 后 我们 去 吃 饭 。', py: 'Xiàkè hòu wǒmen qù chī fàn.', en: 'After class we go to eat.' }
  ],
  drill: [
    { t: 'choice', q: '老师说："好，___ ！再见！"', opts: ['下课', '上课', '下班', '下雨'], a: 0, why: '课结束：下课。' },
    { t: 'order', words: ['下课', '了', '同学们'], a: '同学们，下课了。', en: 'Class is over, everyone.' },
    { t: 'choice', q: '"下课"的反义词是：', opts: ['上课', '下班', '上学', '起床'], a: 0, why: '上课 ↔ 下课。' },
    { t: 'choice', say: '下课', q: '听录音，选拼音。', opts: ['xiàkè', 'shàkè', 'xiàgè', 'xiàkē'], a: 0, why: '下课 xiàkè。' }
  ],
  bop: {
    b: '下课铃响了，老师说："同学们，下课了！再见！"学生："老师再见！"',
    o: ['能听、说、认读"下课 xiàkè"', '会用下课礼仪', '分清"下课"和"下班"'],
    pre: '复习"上课、点、再见"。',
    p: '① 跟读 xiàkè；② 上下课礼仪："上课！""老师好！"……"下课！""老师再见！"；③ 问答："你几点下课？下课后做什么？"',
    post: '学生当班长喊下课口令；或做本页练习 1–4。',
    s: '板书：上课 ↔ 下课 ／ 下课了！／ 下课后 + 做什么。作业：写一写你一天几点上课、几点下课。'
  },
  act: [
    { tag: '日常活动', name: '下课礼仪', how: '每节课结束："下课！起立！"全班："老师再见！"老师："同学们再见！"' },
    { tag: 'TPR', name: '上课下课', how: '老师说"上课"学生坐直，说"下课"学生站起来伸懒腰。' },
    { tag: '调查', name: '下课后', how: '学生互相问"下课后你做什么？"，找到和自己一样的人。' }
  ],
  teach: [
    { h: '上 / 下 + 课 / 班', p: '学生：上课 ↔ 下课；工作的人：上班 ↔ 下班。' },
    { h: '课间', p: '两节课中间的休息叫"课间"（超纲），一般十分钟。' }
  ],
  err: [
    { x: '我下课在三点。', v: '我三点下课。', why: '时间放在动词前面。' },
    { x: '老师下班了（指一节课结束）', v: '下课了', why: '一节课结束说"下课"。' }
  ],
  hz: [
    { c: '下', rad: '一', radName: '一部', radMean: '——', struct: '独体字', parts: '横 + 竖 + 点', tip: '在这里是"结束"。', fam: '有"下"的词：下班、下雨、下午。' },
    { c: '课', rad: '讠', radName: '言字旁', radMean: '说话 speech', struct: '左右结构', parts: '讠 + 果', tip: '上课要说话，上了课有成果。', fam: '言字旁的字：说、话、请、读。' }
  ],
  cul: ['中国学校上下课都要打铃，下课时班长喊"起立"，全班说"老师再见"。', '中国中小学课间有"眼保健操"和"课间操"。'],
  syn: [],
  ant: [{ w: '上课', note: '课开始。' }],
  rel: ['上课', '课', '下班', '老师', '学生', '休息']
},

'想': {
  pos: [['动词', 'verb']],
  zh: ['希望，打算（做某事）。', '思考。', '想念：我想你。'],
  en: ['to want to; would like to', 'to think', 'to miss (someone)'],
  syl: [{ py: 'xiǎng', i: 'x', f: 'iang', t: 3 }],
  phon: [
    '第三声，先降后升，声音要低。',
    'x 是舌面音，不要读成 shǎng。',
    'iang 是后鼻音。'
  ],
  img: { src: 'img/xiang.jpg', cap: "她在想什么？", by: "Charles Sillem Lidderdale", lic: "Public domain", from: "Wikimedia Commons · Charles Sillem Lidderdale A pensive moment.jpg（已裁剪）" },
  use: ['想 + 动词：想去、想吃', '想 + 人：想妈妈（miss）', '不想 + 动词'],
  ex: [
    { ctx: '愿望', zh: '我 想 去 中国 。', py: 'Wǒ xiǎng qù Zhōngguó.', en: 'I want to go to China.' },
    { ctx: '点菜', zh: '你 想 吃 什么 ？', py: 'Nǐ xiǎng chī shénme?', en: 'What would you like to eat?' },
    { ctx: '想念', zh: '我 很 想 妈妈 。', py: 'Wǒ hěn xiǎng māma.', en: 'I miss my mom very much.' },
    { ctx: '否定', zh: '我 不 想 睡觉 。', py: 'Wǒ bù xiǎng shuìjiào.', en: 'I do not want to sleep.' }
  ],
  drill: [
    { t: 'choice', q: '我 ___ 喝茶，你呢？', opts: ['想', '是', '在', '的'], a: 0, why: '想 + 动词 = want to。' },
    { t: 'order', words: ['想', '你', '什么', '买'], a: '你想买什么？', en: 'What do you want to buy?' },
    { t: 'choice', q: '"我想你"的意思是：', opts: ['I miss you', 'I think you', 'I want you to go', 'I am you'], a: 0, why: '想 + 人 = miss。' },
    { t: 'choice', say: '想', q: '听录音，选拼音。', opts: ['xiǎng', 'shǎng', 'xiàng', 'xiǎn'], a: 0, why: '想 xiǎng，第三声。' }
  ],
  bop: {
    b: '老师看着一张饺子的照片："嗯……我想吃饺子！你们想吃什么？"',
    o: ['能听、说、认读"想 xiǎng"', '能说"我想 + 动词"', '知道"想 + 人"是想念'],
    pre: '复习"要、喜欢、去、吃"。',
    p: '① 跟读 xiǎng，对比 xiǎng / shǎng；② 愿望：我想去……、我想吃……、我想买……；③ 想念：我想妈妈。',
    post: '每人说三个"我想……"；或做本页练习 1–4。',
    s: '板书：想 + 动词（want to）／ 想 + 人（miss）／ 不想。作业：写一写你今年想做的三件事。'
  },
  act: [
    { tag: '游戏', name: '愿望墙', how: '每人在便利贴上写"我想……"，贴到墙上，全班一起读。' },
    { tag: '情境表演', name: '点菜', how: '"你想吃什么？""我想吃面条儿。你呢？""我想吃饺子。"' },
    { tag: '调查', name: '想去哪儿', how: '学生互相问"你想去哪儿？"，在地图上标出来。' }
  ],
  teach: [
    { h: '想 / 要', p: '"想"语气比较软（would like to）；"要"更直接、更坚决（want to / will）。' },
    { h: '三个意思', p: 'want to（想去）、think（我想想）、miss（想家）。' }
  ],
  err: [
    { x: '我想要去中国。（初级）', v: '我想去中国。', why: '初级阶段用"想 + 动词"就可以。' },
    { x: 'shǎng', v: 'xiǎng', why: '"想"是舌面音 x。' }
  ],
  hz: [{ c: '想', rad: '心', radName: '心字底', radMean: '心 heart', struct: '上下结构', parts: '相 + 心', tip: '上面"相 xiāng"表示读音，下面是"心"——用心去想。', fam: '心字底的字：您、思、意、怎（怎么）。' }],
  cul: ['中国人离家时常说"想家"，打电话说"我很想你们"。', '"想"和"相"（xiāng）读音相近——心里有一个"相"（样子），就是在想。'],
  syn: [{ w: '要', note: '语气更直接。' }, { w: '觉得', note: '表示看法。' }],
  ant: [],
  rel: ['要', '喜欢', '觉得', '爱', '去']
},

'先生': {
  pos: [['名词', 'noun']],
  zh: ['对男性的尊称。', '丈夫（她先生 = her husband）。'],
  en: ['Mr.; sir; gentleman', 'husband'],
  syl: [{ py: 'xiān', i: 'x', f: 'ian', t: 1 }, { py: 'sheng', i: 'sh', f: 'eng', t: 0 }],
  phon: [
    '第一声 + 轻声："先"高平，"生"又轻又短。',
    'x（舌面）和 sh（卷舌）要分清。',
    '"生"在这里读轻声 sheng。'
  ],
  img: { src: 'img/xiansheng.jpg', cap: "先生，您好！", by: "Geoff Charles", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Man in a suit jacket, shirt and tie (1571971).jpg（已裁剪）" },
  use: ['姓 + 先生：王先生', '先生，请……', '女士们，先生们'],
  ex: [
    { ctx: '称呼', zh: '先生 ， 您 好 ！', py: 'Xiānsheng, nín hǎo!', en: 'Hello, sir!' },
    { ctx: '服务', zh: '先生 ， 您 要 喝 什么 ？', py: 'Xiānsheng, nín yào hē shénme?', en: 'Sir, what would you like to drink?' },
    { ctx: '演讲', zh: '女士 们 ， 先生 们 ， 你们 好 ！', py: 'Nǚshìmen, xiānshengmen, nǐmen hǎo!', en: 'Ladies and gentlemen, hello!' },
    { ctx: '家庭', zh: '她 先生 是 医生 。', py: 'Tā xiānsheng shì yīshēng.', en: 'Her husband is a doctor.' }
  ],
  drill: [
    { t: 'choice', q: '女士们， ___ 们，你们好！', opts: ['先生', '男朋友', '儿子', '同学'], a: 0, why: '"女士们，先生们"是固定的开场白。' },
    { t: 'order', words: ['先生', '请', '坐'], a: '先生，请坐。', en: 'Please sit down, sir.' },
    { t: 'choice', q: '"她先生"的意思是：', opts: ['her husband', 'her teacher', 'her son', 'her brother'], a: 0, why: '"先生"也可以指丈夫。' },
    { t: 'choice', say: '先生', q: '听录音，选拼音。', opts: ['xiānsheng', 'shānsheng', 'xiānshēng', 'xiānsēng'], a: 0, why: '先生 xiānsheng。' }
  ],
  bop: {
    b: '老师扮演饭店服务员，对一位男同学鞠躬："先生，您好！请坐。"',
    o: ['能听、说、认读"先生 xiānsheng"', '能用"姓 + 先生"称呼', '知道"先生"的两个意思'],
    pre: '复习"女士、您、请"。',
    p: '① 跟读 xiānsheng，对比 x / sh；② 称呼：王先生、李女士；③ "她先生"= 她的丈夫。',
    post: '服务员情境表演；或做本页练习 1–4。',
    s: '板书：姓 + 先生 ／ 女士 ↔ 先生 ／ 她先生 = her husband。作业：写一写你们国家怎么称呼男士。'
  },
  act: [
    { tag: '情境表演', name: '饭店服务员', how: '服务员对客人："先生，您好！您要什么？""女士，请喝茶。"' },
    { tag: '情境表演', name: '主持人', how: '学生轮流上台说"女士们，先生们，你们好！"' },
    { tag: '游戏', name: '称呼配对', how: '老师说"王 + 男"，学生说"王先生"；"李 + 女"，说"李女士"。' }
  ],
  teach: [
    { h: '两个意思', p: '对男性的尊称（Mr.），也指丈夫：我先生（my husband）。' },
    { h: '古代', p: '古代"先生"是老师的意思（先出生的人），现在一些老学者仍被称为"先生"。' }
  ],
  err: [
    { x: '先生王', v: '王先生', why: '姓放在前面。' },
    { x: 'xiānshēng', v: 'xiānsheng', why: '"生"读轻声。' }
  ],
  hz: [
    { c: '先', rad: '儿', radName: '儿部', radMean: '人的腿', struct: '上下结构', parts: '⺧ + 儿', tip: '下面"儿"是人的腿，上面是脚——走在前面的人，就是"先"。', fam: '有"儿"的字：儿、见、光（超纲）。' },
    { c: '生', rad: '生', radName: '生部', radMean: '生长 to grow', struct: '独体字', parts: '丿 + 一 + 一 + 丨 + 一', tip: '小草从地里长出来。"先生"= 先出生的人（比我年长、有学问）。', fam: '有"生"的词：学生、医生、生病。' }
  ],
  cul: ['"先生"字面意思是"先出生的人"，古代用来称呼老师和有学问的人，鲁迅等大作家常被尊称为"先生"。', '现在"先生"最常用的意思是 Mr.，太太说"我先生"就是"我丈夫"。'],
  syn: [],
  ant: [{ w: '女士', note: '对女性的尊称。' }],
  rel: ['女士', '您', '请', '老师', '男']
}

});
