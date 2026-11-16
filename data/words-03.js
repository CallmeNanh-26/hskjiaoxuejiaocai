// HSK1 教学参考 · 第 3 批（10 词）：吃 穿 出租车 大 打电话 大家 到 大学 大学生 的
window.H1_WORDS = window.H1_WORDS || {};
Object.assign(H1_WORDS, {

'吃': {
  pos: [['动词', 'verb']],
  zh: ['把食物放进嘴里，咽下去。'],
  en: ['to eat'],
  syl: [{ py: 'chī', i: 'ch', f: '-i', t: 1 }],
  phon: [
    '声母 ch：卷舌、送气。',
    'chi 的韵母不是"衣 yī"：保持卷舌的样子把声音拉长，嘴不要咧开。',
    '第一声，高而平。对比：吃 chī ／ 七 qī。'
  ],
  img: { src: 'img/chi.jpg', cap: "她在吃饭。", by: "dknisely", lic: "CC BY-SA 2.0", from: "Wikimedia Commons · Girl with chopsticks at dumpling restaurant.jpg" },
  use: ['吃 + 食物：吃米饭、吃包子', '吃饭', '好吃'],
  ex: [
    { ctx: '日常', zh: '我 吃 米饭 。', py: 'Wǒ chī mǐfàn.', en: 'I eat rice.' },
    { ctx: '提问', zh: '你 吃 什么 ？', py: 'Nǐ chī shénme?', en: 'What are you eating?' },
    { ctx: '建议', zh: '我们 去 吃 饭 吧 。', py: 'Wǒmen qù chī fàn ba.', en: 'Let\'s go eat.' },
    { ctx: '评价', zh: '这个 很 好吃 。', py: 'Zhège hěn hǎochī.', en: 'This is delicious.' }
  ],
  drill: [
    { t: 'choice', q: '我 ___ 包子，喝茶。', opts: ['吃', '喝', '看', '听'], a: 0, why: '包子用"吃"。' },
    { t: 'order', words: ['吃', '你', '什么'], a: '你吃什么？', en: 'What are you eating?' },
    { t: 'choice', say: '吃', q: '听录音，选拼音。', opts: ['chī', 'qī', 'cī', 'chē'], a: 0, why: '吃 chī，卷舌。' },
    { t: 'choice', q: '哪个不能"吃"？', opts: ['苹果', '面包', '牛奶', '饺子'], a: 2, why: '牛奶用"喝"。' }
  ],
  bop: {
    b: '老师做吃东西的动作，摸摸肚子："老师想吃包子。你们想吃什么？"',
    o: ['能听、说、认读"吃 chī"', '能说"我吃 + 食物"', '能问"你吃什么？"'],
    pre: '快速复习食物词：包子、米饭、面包、苹果、饺子。',
    p: '① 跟读 chī，对比 chī—qī；② 图片替换："我吃米饭／面包／苹果"；③ 两人问答："你吃什么？""我吃……。"',
    post: '老师说食物或饮料，学生做"吃"或"喝"的动作并说出来；或做本页练习 1–4。',
    s: '板书：吃 + 食物 ／ 你吃什么？作业：用中文写今天的三顿饭吃了什么。'
  },
  act: [
    { tag: 'TPR', name: '吃还是喝？', how: '老师说"包子、茶、米饭、牛奶、水"，学生做吃或喝的动作，并说"吃包子、喝茶"。' },
    { tag: '游戏', name: '我的午饭', how: '"我吃米饭。""我吃米饭和菜。"每人加一样，看谁记得最多。' },
    { tag: '调查', name: '你早上吃什么？', how: '学生问三位同学"你早上吃什么？"，记下来并向全班报告。' }
  ],
  teach: [
    { h: '搭配', p: '吃 + 食物；喝 + 水、茶、牛奶。' },
    { h: '文化用语', p: '"你吃了吗？"是中国人常用的问候，不是真的请人吃饭。' }
  ],
  err: [
    { x: '我吃牛奶。', v: '我喝牛奶。', why: '牛奶用"喝"。' },
    { x: 'qī / cī', v: 'chī', why: 'ch 要卷舌。' }
  ],
  hz: [{ c: '吃', rad: '口', radName: '口字旁', radMean: '嘴 mouth', struct: '左右结构', parts: '口 + 乞', tip: '左边是"口"——吃东西要用嘴；右边"乞 qǐ"表示读音。', fam: '口字旁的字：喝、唱、叫、吗、吧、呢。' }],
  cul: ['"民以食为天"：对中国人来说，吃是很重要的事。见面常问"你吃了吗？"', '中国人吃饭用筷子。'],
  syn: [],
  ant: [],
  rel: ['喝', '饭', '好吃', '米饭', '包子', '饭店']
},

'穿': {
  pos: [['动词', 'verb']],
  zh: ['把衣服、鞋等放到身上。'],
  en: ['to wear; to put on (clothes, shoes)'],
  syl: [{ py: 'chuān', i: 'ch', f: 'uan', t: 1 }],
  phon: [
    '声母 ch：卷舌、送气。',
    '韵母 uan：从 u 开始（嘴圆），再到 an。',
    '第一声，高而平。'
  ],
  img: { src: 'img/chuan.jpg', cap: "她穿新衣服。", by: "Adjoajo", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Young Nigerian Girl at Nigerian Independence Day, NYC, 2016, photo by Linda Fletcher Dabo.jpg" },
  use: ['穿衣服', '穿 + 新衣服', '穿什么？'],
  ex: [
    { ctx: '日常', zh: '我 穿 衣服 。', py: 'Wǒ chuān yīfu.', en: 'I\'m getting dressed.' },
    { ctx: '描述', zh: '她 穿 新 衣服 。', py: 'Tā chuān xīn yīfu.', en: 'She is wearing new clothes.' },
    { ctx: '提问', zh: '你 今天 穿 什么 ？', py: 'Nǐ jīntiān chuān shénme?', en: 'What are you wearing today?' }
  ],
  drill: [
    { t: 'choice', q: '天气很冷，多 ___ 衣服。', opts: ['穿', '吃', '喝', '看'], a: 0, why: '穿衣服。' },
    { t: 'order', words: ['衣服', '穿', '我', '新'], a: '我穿新衣服。', en: 'I\'m wearing new clothes.' },
    { t: 'choice', say: '穿', q: '听录音，选拼音。', opts: ['chuān', 'cuān', 'chān', 'chuáng'], a: 0, why: '穿 chuān，第一声。' },
    { t: 'choice', q: '"穿"可以和哪个词一起用？', opts: ['衣服', '米饭', '牛奶', '电影'], a: 0, why: '穿衣服。' }
  ],
  bop: {
    b: '老师拿出一件外衣，慢慢穿上："今天很冷，老师穿衣服。"',
    o: ['能听、说、认读"穿 chuān"', '能说"穿衣服"', '能问"你今天穿什么？"'],
    pre: '问：今天冷吗？冷的时候怎么办？',
    p: '① 跟读 chuān、chuān yīfu；② 看图说话："他穿新衣服"；③ 两人描述："你今天穿什么？""我穿……"',
    post: '老师说"穿衣服／吃衣服／喝衣服"，学生判断对错；或做本页练习 1–4。',
    s: '板书：穿 + 衣服。作业：画出今天穿的衣服，写"我今天穿……"。'
  },
  act: [
    { tag: 'TPR', name: '穿衣服', how: '老师说"穿衣服"，学生做穿外衣的动作；说"天气热"，学生做脱衣服的动作。' },
    { tag: '游戏', name: '他是谁？', how: '一名学生描述："他穿新衣服，他很高兴。"其他人猜是班里的谁。' },
    { tag: '画画', name: '我的新衣服', how: '学生画一件衣服并上颜色，展示给同桌："这是我的新衣服，好看吗？"' }
  ],
  teach: [
    { h: '搭配', p: 'HSK1 只有"衣服"可以搭配，重点练"穿衣服、穿新衣服"。' },
    { h: '结合天气', p: '和"冷、热"一起练：今天很冷，多穿衣服。' }
  ],
  err: [
    { x: '我穿衣服新。', v: '我穿新衣服。', why: '"新"放在"衣服"的前面。' },
    { x: 'cuān', v: 'chuān', why: 'ch 要卷舌。' }
  ],
  hz: [{ c: '穿', rad: '穴', radName: '穴宝盖', radMean: '洞 hole', struct: '上下结构', parts: '穴 + 牙', tip: '上面"穴"是洞，下面"牙"是牙齿——老鼠用牙咬出一个洞，就"穿"过去了。穿衣服也是把手"穿"过袖子。', fam: '穴宝盖的字：空、窗（超纲）。' }],
  cul: ['过春节的时候，中国人喜欢穿新衣服，红色的最受欢迎，表示新年新开始。'],
  syn: [],
  ant: [],
  rel: ['衣服', '件', '新', '冷', '热']
},

'出租车': {
  pos: [['名词', 'noun']],
  zh: ['给钱以后，司机开车送你去想去的地方的车。'],
  en: ['taxi; cab'],
  syl: [{ py: 'chū', i: 'ch', f: 'u', t: 1 }, { py: 'zū', i: 'z', f: 'u', t: 1 }, { py: 'chē', i: 'ch', f: 'e', t: 1 }],
  phon: [
    '三个音节都是第一声：一样高、一样平。',
    'ch（卷舌）和 z（舌头平）要分清：chū — zū — chē。',
    'u 的嘴唇要圆。'
  ],
  img: { src: 'img/chuzuche.jpg', cap: "北京的出租车", by: "Anonymousfox36", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Beijing EU5 Taxi IMG003.jpg" },
  use: ['坐出租车', '坐出租车 + 去 + 地方', '出租车来了'],
  ex: [
    { ctx: '出行', zh: '我 坐 出租车 。', py: 'Wǒ zuò chūzūchē.', en: 'I take a taxi.' },
    { ctx: '去医院', zh: '我 坐 出租车 去 医院 。', py: 'Wǒ zuò chūzūchē qù yīyuàn.', en: 'I take a taxi to the hospital.' },
    { ctx: '等车', zh: '出租车 来 了 。', py: 'Chūzūchē lái le.', en: 'The taxi is here.' },
    { ctx: '提问', zh: '那 是 出租车 吗 ？', py: 'Nà shì chūzūchē ma?', en: 'Is that a taxi?' }
  ],
  drill: [
    { t: 'choice', q: '我 ___ 出租车去学校。', opts: ['坐', '吃', '穿', '写'], a: 0, why: '坐出租车。' },
    { t: 'order', words: ['了', '出租车', '来'], a: '出租车来了。', en: 'The taxi is here.' },
    { t: 'choice', q: '"taxi" 是：', opts: ['火车', '飞机', '出租车', '开车'], a: 2, why: '出租车 = taxi。' },
    { t: 'choice', say: '出租车', q: '听录音，选拼音。', opts: ['chūzūchē', 'cūzūcē', 'chúzúché', 'zhūzūchē'], a: 0, why: '三个第一声；ch 卷舌，z 平舌。' }
  ],
  bop: {
    b: '老师站在"路边"招手："出租车！出租车！"问学生："老师在做什么？"',
    o: ['能听、说、认读"出租车 chūzūchē"', '能说"我坐出租车"', '能说"我坐出租车去……"'],
    pre: '复习"车、火车、开车、坐车"，问：还有什么车？',
    p: '① 跟读 chū—zū—chē，一个一个音节连起来；② 图片替换："我坐出租车去学校／医院／超市"；③ 表演：乘客和司机，"你好，去哪儿？""去医院。"',
    post: '老师说地方，学生说"我坐出租车去……"；或做本页练习 1–4。',
    s: '板书：坐 + 出租车 + 去 + 地方。作业：写一句"我坐出租车去……"。'
  },
  act: [
    { tag: '情境表演', name: '我是司机', how: '椅子排成"出租车"。司机问"你好，去哪儿？"，乘客回答"去……"，到了以后说"到了，二十块。""谢谢，再见。"' },
    { tag: '游戏', name: '什么车？', how: '老师模仿不同的车（招手叫出租车、火车"呜——"、开车），学生抢答车的名字。' },
    { tag: '节奏', name: '三个第一声', how: '全班拍手三下，一下一个音节：chū — zū — chē，保持一样高。' }
  ],
  teach: [
    { h: '拆词', p: '出租 = 租出去（for hire），车 = car。出租车就是"可以租的车"。' },
    { h: '搭配', p: '用"坐"：坐出租车。HSK1 不要求"打车"。' }
  ],
  err: [
    { x: '我去医院坐出租车。', v: '我坐出租车去医院。', why: '先说怎么去，再说去哪儿。' },
    { x: 'cūzūcē', v: 'chūzūchē', why: 'ch 卷舌，z 不卷舌。' }
  ],
  hz: [
    { c: '出', rad: '凵', radName: '凵部', radMean: '', struct: '独体字', parts: '屮 + 凵', tip: '古字像一只脚从门口走出去。也可以这样记：两座"山"叠在一起，从山里走"出"来。', fam: '反义字：进（超纲）。' },
    { c: '租', rad: '禾', radName: '禾木旁', radMean: '粮食 grain', struct: '左右结构', parts: '禾 + 且', tip: '"禾"是粮食。古时候租别人的地，要用粮食来付租金。', fam: '禾木旁的字：和、种、秋（超纲）。' }
  ],
  cul: ['在中国，现在很多人用手机叫车，路边招手叫出租车的人少了。', '不同城市的出租车颜色不一样。'],
  syn: [{ w: '的士', py: 'dīshì', note: '南方常用，来自英语 taxi。', out: true }],
  ant: [],
  rel: ['车', '坐', '开车', '火车', '去']
},

'大': {
  pos: [['形容词', 'adjective']],
  zh: ['不小；面积、数量、年龄等超过一般。'],
  en: ['big; large', 'old (in age): duō dà = how old'],
  syl: [{ py: 'dà', i: 'd', f: 'a', t: 4 }],
  phon: [
    '声母 d 不送气：手放在嘴前，几乎没有气流（对比 t）。',
    '第四声，全降。',
    'a 的嘴要张大。'
  ],
  img: { src: 'img/da.jpg', cap: "大狗和小狗", by: "Nick Ares from Auburn, CA, United States", lic: "CC BY-SA 2.0", from: "Wikimedia Commons · Dog Meets Dog (2952673183).jpg" },
  use: ['很大 / 不大', '大 + 名词：大苹果、大杯子', '你多大？（问年龄）'],
  ex: [
    { ctx: '描述', zh: '这个 苹果 很 大 。', py: 'Zhège píngguǒ hěn dà.', en: 'This apple is big.' },
    { ctx: '家', zh: '我 家 很 大 。', py: 'Wǒ jiā hěn dà.', en: 'My home is big.' },
    { ctx: '天气', zh: '今天 雨 很 大 。', py: 'Jīntiān yǔ hěn dà.', en: 'It\'s raining hard today.' },
    { ctx: '年龄', zh: '你 多 大 ？', py: 'Nǐ duō dà?', en: 'How old are you?' }
  ],
  drill: [
    { t: 'choice', q: '大 ↔ ___', opts: ['多', '小', '少', '好'], a: 1, why: '大的反义词是小。' },
    { t: 'order', words: ['很', '学校', '大', '我们'], a: '我们学校很大。', en: 'Our school is big.' },
    { t: 'choice', q: '"你多大？"问的是：', opts: ['名字', '年龄', '工作', '家'], a: 1, why: '你多大？= How old are you?' },
    { t: 'choice', say: '大', q: '听录音，选拼音。', opts: ['dā', 'dá', 'dǎ', 'dà'], a: 3, why: '大 dà，第四声。' }
  ],
  bop: {
    b: '老师一手拿大苹果（或大书），一手拿小的："这个大，这个小。"',
    o: ['能听、说、认读"大 dà"', '能说"……很大 / 不大"', '能问"你多大？"'],
    pre: '老师指教室里的东西问："这个大吗？"看学生怎么回答。',
    p: '① 跟读 dà，手臂张开；② 实物对比："这个大，那个小"；③ 两人问答："你多大？""我……岁。"',
    post: '老师说东西的名字，学生用手比"大"或"小"并说句子；或做本页练习 1–4。',
    s: '板书：名词 + 很大 ／ 大 ↔ 小 ／ 你多大？作业：找三样大的东西，写"……很大"。'
  },
  act: [
    { tag: 'TPR', name: '大大小小', how: '老师说"大"，学生张开双臂站起来；说"小"，学生缩成一团蹲下。学生也可以当小老师。' },
    { tag: '游戏', name: '比一比', how: '两位学生各拿一样东西比较，全班说"……的大，……的小"。' },
    { tag: '画画', name: '大和小', how: '学生画一大一小两个同样的东西（大猫、小猫），向同桌介绍："这是大猫，这是小猫。"' }
  ],
  teach: [
    { h: '形容词谓语', p: '汉语说"苹果很大"，不说"苹果是大"。"很"在这里读得很轻。' },
    { h: '成对教学', p: '大—小 一起教，再扩展到 多—少。' }
  ],
  err: [
    { x: '这个苹果是大。', v: '这个苹果很大。', why: '形容词前面用"很"，不用"是"。' },
    { x: '你几大？', v: '你多大？', why: '问年龄说"多大"。' }
  ],
  hz: [{ c: '大', rad: '大', radName: '大部', radMean: '大 big', struct: '独体字', parts: '一 + 人', tip: '像一个人张开双臂、分开双腿站着——"我有这么大！"', fam: '在"大"上加笔画：天（头上一横）、太（下面一点）、夫（超纲）。' }],
  cul: ['"大"常用在称呼里表示尊敬或年长：大哥、大姐、大家。', '"你多大？"一般问年轻人；问老人要说"您多大年纪？"'],
  syn: [],
  ant: [{ w: '小', note: 'small; little' }],
  rel: ['小', '多', '少', '大学', '大家']
},

'打电话': {
  pos: [['短语', 'phrase'], ['动词', 'verb']],
  zh: ['用电话和别人说话。'],
  en: ['to make a phone call; to call (someone)'],
  syl: [{ py: 'dǎ', i: 'd', f: 'a', t: 3 }, { py: 'diàn', i: 'd', f: 'ian', t: 4 }, { py: 'huà', i: 'h', f: 'ua', t: 4 }],
  phon: [
    '第三声 + 第四声 + 第四声：dǎ 读得低，后面两个音节都下降。',
    'd 不送气。',
    'huà：从 u 开始，嘴先圆再张开。'
  ],
  img: { src: 'img/dadianhua.jpg', cap: "她在打电话。", by: "Shixart1985", lic: "CC BY 2.0", from: "Wikimedia Commons · Woman talking on phone while holding glass of water in kitchen during daytime.jpg" },
  use: ['给 + 人 + 打电话', '在打电话（正在）', '打 + 电话'],
  ex: [
    { ctx: '家人', zh: '我 给 妈妈 打电话 。', py: 'Wǒ gěi māma dǎ diànhuà.', en: 'I call my mom.' },
    { ctx: '进行', zh: '他 在 打电话 。', py: 'Tā zài dǎ diànhuà.', en: 'He is on the phone.' },
    { ctx: '请求', zh: '请 给 我 打电话 。', py: 'Qǐng gěi wǒ dǎ diànhuà.', en: 'Please call me.' }
  ],
  drill: [
    { t: 'choice', q: '我 ___ 朋友打电话。', opts: ['给', '是', '的', '很'], a: 0, why: '给 + 人 + 打电话。' },
    { t: 'order', words: ['打电话', '我', '爸爸', '给'], a: '我给爸爸打电话。', alt: ['爸爸给我打电话。'], en: 'I call my dad.' },
    { t: 'choice', q: '哪一句是对的？', opts: ['我打电话妈妈。', '我给妈妈打电话。', '我妈妈打电话给。', '打电话我妈妈。'], a: 1, why: '给 + 人 + 打电话。' },
    { t: 'choice', say: '打电话', q: '听录音，选出听到的词。', opts: ['打电话', '看电视', '看电影', '说话'], a: 0, why: '打电话 dǎ diànhuà。' }
  ],
  bop: {
    b: '老师的手机"响了"，老师拿起来："喂？你好！"放下后问："老师在做什么？"',
    o: ['能听、说、认读"打电话 dǎ diànhuà"', '能说"我给……打电话"', '能说"他在打电话"'],
    pre: '复习"电话、手机"，问：你常常给谁打电话？',
    p: '① 跟读 dǎ diànhuà；② 替换练习："我给妈妈／朋友／老师打电话"；③ 两人背对背"打电话"："喂，你好！你在哪儿？"',
    post: '老师做动作（打电话、看电视、睡觉），学生说"老师在……"；或做本页练习 1–4。',
    s: '板书：给 + 人 + 打电话。作业：用中文给同学打一个电话，说三句话。'
  },
  act: [
    { tag: '情境表演', name: '喂，你好！', how: '两人背对背坐，用手当电话："喂，你好！""你好！你在哪儿？""我在家。""明天见！"' },
    { tag: '游戏', name: '传话', how: '排成一列，老师小声告诉第一个人一句话（如"我给妈妈打电话"），一个一个往后传，最后一个人大声说出来。' },
    { tag: '听写', name: '电话号码', how: '学生互相说自己编的电话号码，同伴写下来再读一遍核对，复习数字。' }
  ],
  teach: [
    { h: '重点结构', p: '"给 + 人 + 打电话"，人不能直接放在"打电话"后面。' },
    { h: '打电话用语', p: '接电话说"喂 wéi"；可以顺便教"你是哪位？"（拓展）。' }
  ],
  err: [
    { x: '我打电话妈妈。', v: '我给妈妈打电话。', why: '要用"给 + 人"，放在"打电话"前面。' },
    { x: '我打妈妈电话。', v: '我给妈妈打电话。', why: 'HSK1 统一用"给……打电话"。' }
  ],
  hz: [
    { c: '打', rad: '扌', radName: '提手旁', radMean: '手 hand', struct: '左右结构', parts: '扌 + 丁', tip: '左边"扌"是手——用手"打"；右边"丁 dīng"表示读音。', fam: '提手旁的字多是手的动作：找、把、拿、推（部分超纲）。' },
    { c: '电', rad: '田', radName: '田部（有的字典归"乚"部）', radMean: '', struct: '独体字', parts: '日 + 乚', tip: '繁体字"電"上面是"雨"，下面像一道闪电——下雨时的闪电就是"电"。', fam: '带"电"的词：电话、电脑、电视、电影。' },
    { c: '话', rad: '讠', radName: '言字旁', radMean: '说话 speech', struct: '左右结构', parts: '讠 + 舌', tip: '"讠"表示说话，"舌"是舌头——用舌头说出来的就是"话"。', fam: '言字旁的字多和说话有关：说、请、读、课、谁、认识。' }
  ],
  cul: ['中国人接电话先说"喂 wéi"（第二声）。', '现在很多中国人更常用微信打语音或视频电话。'],
  syn: [],
  ant: [],
  rel: ['电话', '手机', '给', '喂', '说话']
},

'大家': {
  pos: [['代词', 'pronoun']],
  zh: ['所有的人。'],
  en: ['everyone; everybody'],
  syl: [{ py: 'dà', i: 'd', f: 'a', t: 4 }, { py: 'jiā', i: 'j', f: 'ia', t: 1 }],
  phon: [
    '第四声 + 第一声：dà 降下来，jiā 回到高处并保持。',
    'j：舌面抬起，不卷舌，不送气。',
    'jiā：i 很短，马上到 a。'
  ],
  img: { src: 'img/dajia.jpg', cap: "大家都很高兴。", by: "Tulane Public Relations", lic: "CC BY 2.0", from: "Wikimedia Commons · Tulane football vs Navy, Louisiana Superdome, November 21, 2006.jpg" },
  use: ['大家好！', '谢谢大家', '大家 + 都 + ……', '请大家 + 动词'],
  ex: [
    { ctx: '问候', zh: '大家 好 ！', py: 'Dàjiā hǎo!', en: 'Hello, everyone!' },
    { ctx: '道谢', zh: '谢谢 大家 。', py: 'Xièxie dàjiā.', en: 'Thank you all.' },
    { ctx: '描述', zh: '大家 都 很 高兴 。', py: 'Dàjiā dōu hěn gāoxìng.', en: 'Everyone is happy.' },
    { ctx: '课堂', zh: '请 大家 坐 。', py: 'Qǐng dàjiā zuò.', en: 'Everyone, please sit.' }
  ],
  drill: [
    { t: 'choice', q: '老师：___ 好！　学生：老师好！', opts: ['大家', '什么', '那个', '多少'], a: 0, why: '大家好 = Hello, everyone。' },
    { t: 'order', words: ['都', '大家', '来', '了'], a: '大家都来了。', en: 'Everyone has come.' },
    { t: 'choice', q: '"大家"的意思是：', opts: ['big house', 'everyone', 'my family', 'adult'], a: 1, why: '大家 = everyone。' },
    { t: 'choice', say: '大家', q: '听录音，选拼音。', opts: ['dàjiā', 'dàjiá', 'tàjiā', 'dàzhā'], a: 0, why: '第四声 + 第一声。' }
  ],
  bop: {
    b: '老师走进教室，向全班挥手："大家好！"引导学生回答："老师好！"',
    o: ['能听、说、认读"大家 dàjiā"', '能说"大家好""谢谢大家"', '能说"大家都……"'],
    pre: '问：对一个人说"你好"，对很多人怎么说？',
    p: '① 跟读 dàjiā、dàjiā hǎo；② 学生轮流到前面向全班问好并介绍自己；③ 看图说话："大家都很高兴。"',
    post: '老师说 "Hello everyone / Thank you all"，学生说中文；或做本页练习 1–4。',
    s: '板书：大家好！／ 谢谢大家！／ 大家都……。作业：准备三句自我介绍，以"大家好"开始。'
  },
  act: [
    { tag: '展示', name: '小主持人', how: '学生轮流到前面："大家好！我叫……。谢谢大家！"全班鼓掌。' },
    { tag: 'TPR', name: '请大家……', how: '学生当小老师发指令："请大家坐。""请大家看书。""请大家说：你好！"全班照做。' },
    { tag: '调查', name: '大家都……吗？', how: '老师问"大家都喝茶吗？"，全班举手，如果都举手就一起说"大家都喝茶"。' }
  ],
  teach: [
    { h: '不是"大的家"', p: '"大家"是一个词，意思是"所有的人"，和"家"没有关系。' },
    { h: '常和"都"一起用', p: '大家都来了／大家都很好。' }
  ],
  err: [
    { x: '大家们好！', v: '大家好！', why: '"大家"已经是很多人，后面不加"们"。' },
    { x: '好大家！', v: '大家好！', why: '问候时先说人，再说"好"。' }
  ],
  hz: [{ c: '家', rad: '宀', radName: '宝盖头', radMean: '房子 house', struct: '上下结构', parts: '宀 + 豕', tip: '上面"宀"是房子，下面"豕"是猪——古时候家里养猪，房子里有猪的地方就是"家"。', fam: '宝盖头的字：客、字、安（超纲）。' }],
  cul: ['在中国，上课、开会、表演开始时，第一句话常常是"大家好！"', '"大"的字形和记忆方法见"大"这个词。'],
  syn: [],
  ant: [],
  rel: ['都', '我们', '你们', '好', '谢谢']
},

'到': {
  pos: [['动词', 'verb']],
  zh: ['来到一个地方；到达。'],
  en: ['to arrive; to reach; to get to'],
  syl: [{ py: 'dào', i: 'd', f: 'ao', t: 4 }],
  phon: [
    '声母 d 不送气。',
    '韵母 ao：从 a 滑向 o。',
    '第四声，全降。'
  ],
  img: { src: 'img/dao.jpg', cap: "火车到了。", by: "Philip Mallis", lic: "CC BY-SA 2.0", from: "Wikimedia Commons · Comeng train operating a service to Flinders Street Station arriving at Platform 1 at Hawksburn Station, South Yarra (53187079413).jpg" },
  use: ['到 + 地方 + 了：到家了、到学校了', '时间 + 到 + 地方', '到哪儿了？'],
  ex: [
    { ctx: '上学', zh: '我 到 学校 了 。', py: 'Wǒ dào xuéxiào le.', en: 'I\'ve arrived at school.' },
    { ctx: '回家', zh: '他 到 家 了 。', py: 'Tā dào jiā le.', en: 'He has got home.' },
    { ctx: '电话里', zh: '你 到 哪儿 了 ？', py: 'Nǐ dào nǎr le?', en: 'Where are you now? (Where have you got to?)' },
    { ctx: '时间', zh: '我 八 点 到 公司 。', py: 'Wǒ bā diǎn dào gōngsī.', en: 'I get to the office at eight.' }
  ],
  drill: [
    { t: 'choice', q: '我 ___ 家了，你不用来了。', opts: ['到', '吃', '大', '的'], a: 0, why: '到家了 = got home。' },
    { t: 'order', words: ['了', '学校', '到', '我'], a: '我到学校了。', en: 'I\'ve arrived at school.' },
    { t: 'choice', q: '"你到哪儿了？"的意思是：', opts: ['Where are you from?', 'Where have you got to?', 'Where do you live?', 'Where is it?'], a: 1, why: '问对方现在到了什么地方。' },
    { t: 'choice', say: '到', q: '听录音，选拼音。', opts: ['dào', 'tào', 'dāo', 'dòu'], a: 0, why: '到 dào，第四声，d 不送气。' }
  ],
  bop: {
    b: '老师从门外走进教室，走到讲台前停下："老师到了！"',
    o: ['能听、说、认读"到 dào"', '能说"我到……了"', '能问"你到哪儿了？"'],
    pre: '问：你今天几点来学校的？引出"到学校"。',
    p: '① 跟读 dào、dào le；② 图片替换："我到家／学校／公司／医院了"；③ 两人打电话："你到哪儿了？""我到学校了。"',
    post: '老师在教室里走到不同的地方（门、桌子），学生说"老师到……了"；或做本页练习 1–4。',
    s: '板书：到 + 地方 + 了。作业：今天到家以后说一句"我到家了"。'
  },
  act: [
    { tag: '游戏', name: '小火车到站', how: '把地点卡片贴在教室四周，学生排成"火车"开过去，到一站全班说"到学校了！""到医院了！"' },
    { tag: '情境表演', name: '你到哪儿了？', how: '两人打电话：A 在等 B，"你到哪儿了？""我到超市了。""好，我在这儿。"' },
    { tag: 'TPR', name: '到了！', how: '老师说"到门口""到桌子那边"，学生走过去，到了以后说"我到了！"' }
  ],
  teach: [
    { h: '到……了', p: '"到 + 地方 + 了"表示已经到了，是最常用的说法。' },
    { h: '来 / 去 / 到', p: '来、去强调方向；到强调"已经在那儿了"。HSK1 不必细讲。' }
  ],
  err: [
    { x: '我到了学校。（想说"已经到了"）', v: '我到学校了。', why: '"了"放在句子最后更自然。' },
    { x: 'tào', v: 'dào', why: 'd 不送气。' }
  ],
  hz: [{ c: '到', rad: '刂', radName: '立刀旁', radMean: '刀 knife', struct: '左右结构', parts: '至 + 刂', tip: '左边"至"的意思就是"到"；右边"刂"是"刀 dāo"，表示读音。', fam: '立刀旁的字：别、刚、刻（超纲）。' }],
  cul: ['中国老师点名时，学生回答"到！"，意思是"我在这儿"。', '到家以后给家人或朋友发一句"我到了"，是让对方放心的习惯。'],
  syn: [{ w: '来', note: '易混：来 = come（向说话人的方向）。' }],
  ant: [],
  rel: ['来', '去', '回', '哪儿', '了']
},

'大学': {
  pos: [['名词', 'noun']],
  zh: ['中学以后上的学校。'],
  en: ['university; college'],
  syl: [{ py: 'dà', i: 'd', f: 'a', t: 4 }, { py: 'xué', i: 'x', f: 'üe', t: 2 }],
  phon: [
    '第四声 + 第二声：先降下来，再升上去。',
    'x：舌面抬起，舌尖放在下牙后面，像笑着发 "sh"。',
    'xue 的 u 其实是 ü：嘴唇要圆。'
  ],
  img: { src: 'img/daxue.jpg', cap: "清华大学", by: "Dquai", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · The second gate of Tsinghua University rebuilt in 1991.jpg" },
  use: ['上大学', '在大学 + 学习 / 工作', '我们大学'],
  ex: [
    { ctx: '学习', zh: '我 在 大学 学习 。', py: 'Wǒ zài dàxué xuéxí.', en: 'I study at a university.' },
    { ctx: '家人', zh: '我 姐姐 上 大学 。', py: 'Wǒ jiějie shàng dàxué.', en: 'My older sister goes to university.' },
    { ctx: '介绍', zh: '这 是 我们 大学 。', py: 'Zhè shì wǒmen dàxué.', en: 'This is our university.' },
    { ctx: '提问', zh: '你 的 大学 在 哪儿 ？', py: 'Nǐ de dàxué zài nǎr?', en: 'Where is your university?' }
  ],
  drill: [
    { t: 'choice', q: '小学 → 中学 → ___', opts: ['大学', '学生', '学习', '同学'], a: 0, why: '小学、中学、大学。' },
    { t: 'order', words: ['大学', '上', '哥哥', '我'], a: '我哥哥上大学。', en: 'My older brother goes to university.' },
    { t: 'choice', q: '"上大学"的意思是：', opts: ['to go to university', 'on the university', 'big study', 'to teach'], a: 0, why: '上大学 = 在大学读书。' },
    { t: 'choice', say: '大学', q: '听录音，选拼音。', opts: ['dàxué', 'dàxuě', 'dàshué', 'tàxué'], a: 0, why: '第四声 + 第二声。' }
  ],
  bop: {
    b: '展示一所有名大学校门的照片："这是什么地方？谁在这里学习？"',
    o: ['能听、说、认读"大学 dàxué"', '能说"我在大学学习"', '能说"上大学"'],
    pre: '复习"学校、学生、学习"，问：你知道哪些大学？',
    p: '① 跟读 dàxué，练 x 和 ü；② 排顺序：小学—中学—大学；③ 两人问答："你哥哥／姐姐上大学吗？""你的大学在哪儿？"',
    post: '老师说年龄（八岁、十四岁、二十岁），学生说"上小学／中学／大学"；或做本页练习 1–4。',
    s: '板书：小学 → 中学 → 大学 ／ 上大学。作业：写一句话介绍家里一个人在哪儿上学。'
  },
  act: [
    { tag: '游戏', name: '上什么学？', how: '老师出示人物卡（八岁、十四岁、二十岁），学生抢答"他上小学／中学／大学"。' },
    { tag: '展示', name: '我的大学', how: '学生画或找一张学校的图片，介绍："这是我们大学，我们大学很大。"' },
    { tag: '拼词', name: '大 + 学', how: '发字卡：大、小、中、学、生。学生拼出 小学、中学、大学、学生、大学生，拼得多的组赢。' }
  ],
  teach: [
    { h: '词族', p: '小学、中学、大学；加"生"变成学生：小学生、中学生、大学生。' },
    { h: '搭配', p: '"上大学"的"上"和"上学、上课"的"上"一样。' }
  ],
  err: [
    { x: '我学习在大学。', v: '我在大学学习。', why: '"在 + 地方"放在动词前面。' },
    { x: 'dàshué', v: 'dàxué', why: 'x 不卷舌。' }
  ],
  hz: [{ c: '学', rad: '子', radName: '子部', radMean: '孩子 child', struct: '上下结构', parts: '⺍ + 冖 + 子', tip: '下面是"子"（孩子），上面像屋顶——孩子在屋子里"学"习。', fam: '带"学"的词：学生、学习、学校、同学、上学。' }],
  cul: ['中国学生要参加"高考"才能上大学，这是非常重要的考试。', '北京大学和清华大学是中国最有名的两所大学。'],
  syn: [],
  ant: [],
  rel: ['大学生', '小学', '中学', '学校', '学习', '上学']
},

'大学生': {
  pos: [['名词', 'noun']],
  zh: ['在大学学习的学生。'],
  en: ['university student; college student'],
  syl: [{ py: 'dà', i: 'd', f: 'a', t: 4 }, { py: 'xué', i: 'x', f: 'üe', t: 2 }, { py: 'shēng', i: 'sh', f: 'eng', t: 1 }],
  phon: [
    '第四声 + 第二声 + 第一声：降—升—高平。',
    'x 不卷舌，sh 卷舌：xué — shēng 要分清。',
    'shēng 是后鼻音。'
  ],
  img: { src: 'img/daxuesheng.jpg', cap: "大学生", by: "Dennis Ludlow - Sharkshock", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Students walking through UNC campus.jpg" },
  use: ['是 + 大学生', '一个大学生', '大学生 + 很忙'],
  ex: [
    { ctx: '身份', zh: '我 是 大学生 。', py: 'Wǒ shì dàxuéshēng.', en: 'I am a university student.' },
    { ctx: '家人', zh: '我 哥哥 是 大学生 。', py: 'Wǒ gēge shì dàxuéshēng.', en: 'My older brother is a university student.' },
    { ctx: '提问', zh: '你 是 大学生 吗 ？', py: 'Nǐ shì dàxuéshēng ma?', en: 'Are you a university student?' },
    { ctx: '描述', zh: '大学生 很 忙 。', py: 'Dàxuéshēng hěn máng.', en: 'University students are busy.' }
  ],
  drill: [
    { t: 'choice', q: '我姐姐上大学，她是 ___ 。', opts: ['小学生', '中学生', '大学生', '老师'], a: 2, why: '上大学的学生是大学生。' },
    { t: 'order', words: ['是', '我', '大学生', '不'], a: '我不是大学生。', en: 'I\'m not a university student.' },
    { t: 'choice', q: 'A：你是大学生吗？　B：___', opts: ['是，我是大学生。', '是，我是大学。', '我在大学生。', '我很大学生。'], a: 0, why: '是 + 大学生。' },
    { t: 'choice', say: '大学生', q: '听录音，选出听到的词。', opts: ['大学生', '小学生', '中学生', '大学'], a: 0, why: '大学生 dàxuéshēng。' }
  ],
  bop: {
    b: '展示三张照片（小学生、中学生、大学生）："他们都是学生。谁是大学生？"',
    o: ['能听、说、认读"大学生 dàxuéshēng"', '能说"我是 / 不是大学生"', '能分清小学生、中学生、大学生'],
    pre: '复习"大学"和"学生"，问：大学 + 学生 = ？',
    p: '① 跟读 dà—xué—shēng；② 看图说"他是小学生／中学生／大学生"；③ 两人问答："你是大学生吗？""你哥哥是大学生吗？"',
    post: '老师说年龄，学生说身份（二十岁 → 大学生）；或做本页练习 1–4。',
    s: '板书：大学 + 生 = 大学生；我是大学生。作业：写一句"……是大学生"。'
  },
  act: [
    { tag: '游戏', name: '我是谁？', how: '学生抽身份卡（小学生、中学生、大学生、老师、医生），别人用"你是……吗？"来猜。' },
    { tag: '分类', name: '排排队', how: '学生拿着年龄卡排队，再按"小学生／中学生／大学生"分成三组并齐声说"我们是……"。' },
    { tag: '采访', name: '大学生的一天', how: '一名学生扮演大学生，其他人提问："你几点上课？""你忙吗？"' }
  ],
  teach: [
    { h: '构词', p: '大学 + 生 → 大学生。同样：小学生、中学生。让学生自己推出来。' },
    { h: '注意', p: '不说"大学学生"，直接说"大学生"。' }
  ],
  err: [
    { x: '我是大学学生。', v: '我是大学生。', why: '"大学生"是一个词。' },
    { x: '我是一大学生。', v: '我是一个大学生。／我是大学生。', why: '数词后面要有量词"个"；也可以不说"一个"。' }
  ],
  hz: [{ c: '生', rad: '生', radName: '生部', radMean: '生长 to grow', struct: '独体字', parts: '丿 + 一 + 土', tip: '下面是"土"，上面像一棵小草从土里长出来——"生"长。学生就是正在"成长"的人。', fam: '带"生"的词：学生、医生、先生、生病。' }],
  cul: ['中国大学一般读四年，学生大多住在学校的宿舍里，几个人住一个房间。', '"大"和"学"的字形见"大""大学"两个词。'],
  syn: [],
  ant: [],
  rel: ['大学', '学生', '小学生', '中学生', '同学']
},

'的': {
  pos: [['助词', 'particle']],
  zh: ['放在名词或代词后面，表示"谁的"。', '放在句子最后，省略后面的名词：是我的。'],
  en: ['particle marking possession: wǒ de shū = my book', 'used alone when the noun is understood: shì wǒ de = it\'s mine'],
  syl: [{ py: 'de', i: 'd', f: 'e', t: 0 }],
  phon: [
    '轻声：又短又轻，和前面的字连在一起读。',
    'e 读得很轻、很松，像英语 "the" 里的元音。',
    '不要读成 dé 或 dì。'
  ],
  img: { src: 'img/de.jpg', cap: "这是她的书。", by: "Zack Clark", lic: "Public domain", from: "Wikimedia Commons · Honduras San Ramon Choluteca school 4.jpg" },
  use: ['我 / 你 / 他 + 的 + 东西：我的书', '人 + 的 + 东西：老师的杯子', '谁的？—— 我的。'],
  ex: [
    { ctx: '物品', zh: '这 是 我 的 书 。', py: 'Zhè shì wǒ de shū.', en: 'This is my book.' },
    { ctx: '物品', zh: '那 是 老师 的 杯子 。', py: 'Nà shì lǎoshī de bēizi.', en: 'That is the teacher\'s cup.' },
    { ctx: '提问', zh: '这 是 谁 的 手机 ？', py: 'Zhè shì shéi de shǒujī?', en: 'Whose phone is this?' },
    { ctx: '朋友', zh: '她 是 我 的 朋友 。', py: 'Tā shì wǒ de péngyou.', en: 'She is my friend.' }
  ],
  drill: [
    { t: 'choice', q: '这是我 ___ 书。', opts: ['的', '吗', '吧', '了'], a: 0, why: '我的书 = my book。' },
    { t: 'order', words: ['的', '这', '是', '手机', '谁'], a: '这是谁的手机？', en: 'Whose phone is this?' },
    { t: 'choice', q: 'A：这是谁的杯子？　B：___', opts: ['是我的。', '是杯子。', '我是的。', '的我。'], a: 0, why: '是我的 = It\'s mine。' },
    { t: 'choice', q: '"teacher\'s book" 是：', opts: ['书的老师', '老师的书', '老师书的', '的老师书'], a: 1, why: '人 + 的 + 东西。' }
  ],
  bop: {
    b: '老师拿起一位学生的笔问："这是谁的？"再拿起自己的书："这是我的书。"',
    o: ['能听、说、认读"的 de"', '能说"我的 / 你的 / 他的 + 东西"', '能问"这是谁的……？"'],
    pre: '老师指东西问"这是你的吗？"，看学生能不能听懂。',
    p: '① 跟读 wǒ de、nǐ de、tā de，"的"读轻声；② 实物替换："这是我的书／杯子／手机"；③ 失物招领：收几样东西，"这是谁的……？""是我的。"',
    post: '老师说英文 my book / his cup，学生说中文；或做本页练习 1–4。',
    s: '板书：人 + 的 + 东西 ／ 谁的？——我的。作业：给自己的三样东西写上"这是我的……"。'
  },
  act: [
    { tag: '游戏', name: '失物招领', how: '每人把一样东西放进袋子里。老师一个一个拿出来问"这是谁的？"，主人说"是我的！"，其他人说"是……的"。' },
    { tag: 'TPR', name: '我的你的', how: '老师说"我的书"，学生举起自己的书；说"你的书"，学生指同桌的书；说"老师的书"，指老师的书。' },
    { tag: '画画', name: '我的家人', how: '学生画家人，每个人下面写"我的爸爸、我的妈妈……"，再告诉学生口语里可以说"我爸爸"。' }
  ],
  teach: [
    { h: '语序', p: '汉语是"谁 + 的 + 东西"：老师的书。让学生注意顺序和英语 of 结构不一样。' },
    { h: '可以省"的"', p: '家人和很熟的关系可以不说"的"：我妈妈、我朋友、我们学校。' }
  ],
  err: [
    { x: '书的我', v: '我的书', why: '顺序是：人 + 的 + 东西。' },
    { x: '这是我书。', v: '这是我的书。', why: '东西前面的"的"不能省。' }
  ],
  hz: [{ c: '的', rad: '白', radName: '白字旁', radMean: '', struct: '左右结构', parts: '白 + 勺', tip: '左边是"白"，右边是"勺"（勺子）。可以这样记：白色的勺子是我"的"。', fam: '含"白"的字：百、怕。"的"是汉语里用得最多的一个字。' }],
  cul: ['"的"是现代汉语中出现次数最多的汉字，几乎每个句子里都能看到。', '家人之间说"我妈妈"而不说"我的妈妈"，听起来更亲近。'],
  syn: [],
  ant: [],
  rel: ['我', '你', '他', '谁', '这', '那']
}

});
