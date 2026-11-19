// HSK1 教学参考 · 第 28 批（10 词）：再 再见 早 早饭 早上 怎么 怎么样 找 这 这边
window.H1_WORDS = window.H1_WORDS || {};
Object.assign(H1_WORDS, {

'再': {
  pos: [['副词', 'adverb']],
  zh: ['又一次（动作还没发生，将来重复）。', '然后，以后再做：吃了饭再去。'],
  en: ['again (in the future)', 'then; after that'],
  syl: [{ py: 'zài', i: 'z', f: 'ai', t: 4 }],
  phon: [
    '第四声，从高处全降。',
    '和"在 zài"读音一样，写法和意思不一样。',
    'z 是平舌音，不要读成 zhài。'
  ],
  img: { src: 'img/zai4.jpg', cap: "再听一下", by: "佚名（Unknown author）", lic: "Public domain", from: "Wikimedia Commons · Shuffle and repeat icons from music player in iOS 15.2.1.jpg" },
  use: ['再 + 动词：再说一遍（"遍"超纲）、再来', '明天再……', '再见'],
  ex: [
    { ctx: '课堂', zh: '请 你 再 说 一下 。', py: 'Qǐng nǐ zài shuō yíxià.', en: 'Please say it again.' },
    { ctx: '邀请', zh: '明天 再 来 吧 。', py: 'Míngtiān zài lái ba.', en: 'Come again tomorrow.' },
    { ctx: '点东西', zh: '我 想 再 喝 一点儿 茶 。', py: 'Wǒ xiǎng zài hē yìdiǎnr chá.', en: 'I want to drink a bit more tea.' },
    { ctx: '顺序', zh: '我们 吃 了 饭 再 去 。', py: 'Wǒmen chī le fàn zài qù.', en: 'We will go after we eat.' }
  ],
  drill: [
    { t: 'choice', q: '我没听见，请你 ___ 说一下。', opts: ['再', '在', '也', '还'], a: 0, why: '又一次：再。' },
    { t: 'order', words: ['再', '明天', '来', '吧'], a: '明天再来吧。', en: 'Come again tomorrow.' },
    { t: 'choice', q: '"再"和"在"：', opts: ['读音一样，意思不一样', '意思一样', '读音不一样', '都是地点'], a: 0, why: '再（again）/ 在（at）。' },
    { t: 'choice', say: '再', q: '听录音，选拼音。', opts: ['zài', 'zhài', 'cài', 'zǎi'], a: 0, why: '再 zài，第四声。' }
  ],
  bop: {
    b: '老师很小声地说一句话，学生说"听不见"。老师说："好，我再说一下！"',
    o: ['能听、说、认读"再 zài"', '能说"请再说一下""明天再来"', '分清"再"和"在"'],
    pre: '复习"在、再见、一下"。',
    p: '① 跟读 zài；② 课堂用语：请再说一下、请再读一下；③ 再（将来重复）/ 在（地点、进行）。',
    post: '学生用"再"提请求；或做本页练习 1–4。',
    s: '板书：再 + 动词（again）／ 在 + 地方（at）／ 再见 = 再 + 见。作业：写三句带"再"的话。'
  },
  act: [
    { tag: '日常活动', name: '请再说一下', how: '每次没听懂，学生都要说"老师，请再说一下"。' },
    { tag: '游戏', name: '再还是在', how: '老师说半句，学生判断用"再"还是"在"：我……家 / 明天……来。' },
    { tag: '情境表演', name: '饭店', how: '"还要什么？""我想再要一个包子。"' }
  ],
  teach: [
    { h: '再 / 又 / 还', p: '"再"是将来的重复；"又"是已经重复了（超纲）；"还"是继续。' },
    { h: '再 / 在', p: '读音一样，写法不同。再见 = 再 + 见（again + see）。' }
  ],
  err: [
    { x: '我明天在来。', v: '我明天再来。', why: '将来重复用"再"。' },
    { x: '我再家。', v: '我在家。', why: '地点用"在"。' }
  ],
  hz: [{ c: '再', rad: '冂', radName: '同字框（有的字典归"一"部）', radMean: '——', struct: '独体字', parts: '一 + 冉', tip: '"冉"上面再加一横——加了一次又一次，就是"再"。', fam: '有"再"的词：再见。' }],
  cul: ['中国人告别时说"再见"，意思是"希望再见面"。', '"再接再厉"：一次又一次地努力（成语）。'],
  syn: [],
  ant: [],
  rel: ['再见', '在', '还', '也', '一下']
},

'再见': {
  pos: [['动词', 'verb']],
  zh: ['分别时说的话：希望以后再见面。'],
  en: ['goodbye; see you'],
  syl: [{ py: 'zài', i: 'z', f: 'ai', t: 4 }, { py: 'jiàn', i: 'j', f: 'ian', t: 4 }],
  phon: [
    '两个第四声连读：两个字都要降，第一个降得短一点。',
    'z 是平舌音，j 是舌面音。',
    'jiàn 里的 a 读得像 "e"。'
  ],
  img: { src: 'img/zaijian.jpg', cap: "再见！", by: "Ciara Ní Riain", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Waving sail-out parade Tall Ships Aarhus.jpg" },
  use: ['再见！', '人 + 再见：老师再见！', '明天见 / 下午见（时间 + 见）'],
  ex: [
    { ctx: '告别', zh: '再见 ！', py: 'Zàijiàn!', en: 'Goodbye!' },
    { ctx: '课堂', zh: '老师 再见 ！', py: 'Lǎoshī zàijiàn!', en: 'Goodbye, teacher!' },
    { ctx: '告别', zh: '朋友 们 ， 再见 ！', py: 'Péngyoumen, zàijiàn!', en: 'Goodbye, friends!' },
    { ctx: '打电话', zh: '好 ， 再见 。', py: 'Hǎo, zàijiàn.', en: 'OK, bye.' }
  ],
  drill: [
    { t: 'choice', q: '下课了，学生说："老师，___ ！"', opts: ['再见', '你好', '谢谢', '对不起'], a: 0, why: '分别说再见。' },
    { t: 'order', words: ['再见', '老师'], a: '老师再见！', en: 'Goodbye, teacher!' },
    { t: 'choice', q: '"再见"的反义是：', opts: ['你好', '谢谢', '没关系', '不客气'], a: 0, why: '见面说你好，分别说再见。' },
    { t: 'choice', say: '再见', q: '听录音，选拼音。', opts: ['zàijiàn', 'zhàijiàn', 'zàiqiàn', 'zǎijiàn'], a: 0, why: '再见 zàijiàn。' }
  ],
  bop: {
    b: '下课时老师挥手："同学们，再见！"学生挥手回答："老师再见！"',
    o: ['能听、说、认读"再见 zàijiàn"', '会用"再见"和"……见"告别', '理解"再 + 见"的意思'],
    pre: '复习"你好、再、见、明天"。',
    p: '① 跟读 zàijiàn；② 告别方式：再见、明天见、下午见；③ 构词：再（again）+ 见（see）。',
    post: '全班挥手告别；或做本页练习 1–4。',
    s: '板书：再 + 见 = 再见 ／ 时间 + 见：明天见。作业：今天和三个人说"再见"或"明天见"。'
  },
  act: [
    { tag: '日常活动', name: '下课告别', how: '每节课结束："同学们再见！""老师再见！"' },
    { tag: '游戏', name: '……见', how: '老师说时间（明天、星期一、下午），学生说"明天见！""星期一见！"' },
    { tag: '情境表演', name: '打电话结束', how: '"好，明天见！""再见！"' }
  ],
  teach: [
    { h: '构词', p: '再见 = 再 + 见，"希望再见面"。' },
    { h: '其他说法', p: '"拜拜"（bye-bye，超纲）在口语里很常用。' }
  ],
  err: [
    { x: '在见', v: '再见', why: '"再"是 again。' },
    { x: '见再', v: '再见', why: '顺序是"再见"。' }
  ],
  hz: [
    { c: '再', rad: '冂', radName: '同字框', radMean: '——', struct: '独体字', parts: '一 + 冉', tip: '又加一次——再。', fam: '有"再"的词：再见。' },
    { c: '见', rad: '见', radName: '见部', radMean: '看见', struct: '独体字', parts: '冂 + 儿', tip: '大眼睛的人在看——见。', fam: '有"见"的词：看见、听见。' }
  ],
  cul: ['年轻人告别常说"拜拜"，是从英语 bye-bye 来的。', '中国人送客常送到门口，说"慢走"（超纲）。'],
  syn: [],
  ant: [{ w: '你好', note: '见面时说。' }],
  rel: ['再', '见', '你好', '明天', '谢谢']
},

'早': {
  pos: [['形容词', 'adjective']],
  zh: ['时间靠前的（和"晚"相对）。', '早上见面的问候：早！'],
  en: ['early', 'good morning'],
  syl: [{ py: 'zǎo', i: 'z', f: 'ao', t: 3 }],
  phon: [
    '第三声，先降后升，声音要低。',
    'z 是平舌音，不要读成 zhǎo（找）。',
    'ao 像英语 "how" 里的元音。'
  ],
  img: { src: 'img/zao.jpg', cap: "早！", by: "Abdul Momin", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · A foggy winter morning.jpg" },
  use: ['早！/ 老师早！（问候）', '很早 / 太早了', '早上 / 早饭'],
  ex: [
    { ctx: '问候', zh: '老师 早 ！', py: 'Lǎoshī zǎo!', en: 'Good morning, teacher!' },
    { ctx: '时间', zh: '他 起床 很 早 。', py: 'Tā qǐchuáng hěn zǎo.', en: 'He gets up early.' },
    { ctx: '比较', zh: '现在 太 早 了 。', py: 'Xiànzài tài zǎo le.', en: 'It is too early now.' },
    { ctx: '到达', zh: '我 来 早 了 。', py: 'Wǒ lái zǎo le.', en: 'I came too early.' }
  ],
  drill: [
    { t: 'choice', q: '早上见到老师说："老师 ___ ！"', opts: ['早', '晚', '好吗', '再见'], a: 0, why: '早上问候：早！' },
    { t: 'order', words: ['早', '太', '了'], a: '太早了！', en: 'Too early!' },
    { t: 'choice', q: '"早"的反义词是：', opts: ['晚', '小', '少', '冷'], a: 0, why: '早 ↔ 晚。' },
    { t: 'choice', say: '早', q: '听录音，选拼音。', opts: ['zǎo', 'zhǎo', 'zào', 'cǎo'], a: 0, why: '早 zǎo，第三声。' }
  ],
  bop: {
    b: '早上第一节课，老师走进教室："同学们早！"',
    o: ['能听、说、认读"早 zǎo"', '会用"早"问候', '分清"早"和"晚"、zǎo 和 zhǎo'],
    pre: '复习"晚、早上、起床"。',
    p: '① 跟读 zǎo，对比 zǎo / zhǎo；② 问候：早！老师早！；③ 早 ↔ 晚：五点起床很早。',
    post: '用"早"和"晚"说作息；或做本页练习 1–4。',
    s: '板书：早！（问候）／ 早 ↔ 晚 ／ 早上、早饭。作业：明天早上用"早"和家人打招呼。'
  },
  act: [
    { tag: '日常活动', name: '早上问候', how: '早上的课一开始，大家互相说"早！"' },
    { tag: '游戏', name: '早还是晚', how: '老师说"五点起床""十二点睡觉"，学生说"很早！""很晚！"' },
    { tag: '语音', name: '早和找', how: '老师读 zǎo / zhǎo，学生举相应的卡片。' }
  ],
  teach: [
    { h: '问候', p: '早上见面说"早！""你早！""老师早！"，比"早上好"更口语。' },
    { h: '早 / 早上', p: '"早"可单用做问候；"早上"是时间段。' }
  ],
  err: [
    { x: 'zhǎo', v: 'zǎo', why: '"早"是平舌音 z。' },
    { x: '我早来了。（想说来得太早）', v: '我来早了。', why: '"早"放在动词后面表示结果。' }
  ],
  hz: [{ c: '早', rad: '日', radName: '日字头', radMean: '太阳 sun', struct: '上下结构', parts: '日 + 十', tip: '太阳（日）刚刚升到草（十）上面——早上。', fam: '有"日"的字：是、明、时。' }],
  cul: ['中国人早上见面常说"早！"，晚上说"晚上好"。', '中国人说"早起的鸟儿有虫吃"——早起的人有收获。'],
  syn: [],
  ant: [{ w: '晚', note: '时间靠后。' }],
  rel: ['晚', '早上', '早饭', '起床', '点']
},

'早饭': {
  pos: [['名词', 'noun']],
  zh: ['早上吃的饭。'],
  en: ['breakfast'],
  syl: [{ py: 'zǎo', i: 'z', f: 'ao', t: 3 }, { py: 'fàn', i: 'f', f: 'an', t: 4 }],
  phon: [
    '第三声 + 第四声："早"只读前半段（低降），"饭"全降。',
    'z 是平舌音。',
    'f 是上牙碰下唇。'
  ],
  img: { src: 'img/zaofan.jpg', cap: "早饭", by: "Marc-Lautenbacher", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Hard boiled egg on breakfast table.jpg" },
  use: ['吃 + 早饭', '早饭 + 吃什么', '时间 + 吃早饭'],
  ex: [
    { ctx: '作息', zh: '我 七 点 吃 早饭 。', py: 'Wǒ qī diǎn chī zǎofàn.', en: 'I have breakfast at seven.' },
    { ctx: '询问', zh: '你 早饭 吃 什么 ？', py: 'Nǐ zǎofàn chī shénme?', en: 'What do you have for breakfast?' },
    { ctx: '食物', zh: '我 早饭 吃 包子 ， 喝 牛奶 。', py: 'Wǒ zǎofàn chī bāozi, hē niúnǎi.', en: 'For breakfast I eat steamed buns and drink milk.' },
    { ctx: '否定', zh: '他 没有 吃 早饭 。', py: 'Tā méiyǒu chī zǎofàn.', en: 'He did not have breakfast.' }
  ],
  drill: [
    { t: 'choice', q: '早上七点吃 ___ 。', opts: ['早饭', '午饭', '晚饭', '米饭'], a: 0, why: '早上吃早饭。' },
    { t: 'order', words: ['早饭', '吃', '你', '了吗'], a: '你吃了早饭吗？', alt: ['你吃早饭了吗？'], en: 'Have you had breakfast?' },
    { t: 'choice', q: '一天三顿饭：___、午饭、晚饭', opts: ['早饭', '米饭', '饭店', '做饭'], a: 0, why: '三顿饭。' },
    { t: 'choice', say: '早饭', q: '听录音，选拼音。', opts: ['zǎofàn', 'zhǎofàn', 'zǎohàn', 'zàofàn'], a: 0, why: '早饭 zǎofàn。' }
  ],
  bop: {
    b: '老师出示包子、鸡蛋、牛奶的图片："早上我吃这些。这是我的——早饭！"',
    o: ['能听、说、认读"早饭 zǎofàn"', '能说自己的早饭', '复习三顿饭'],
    pre: '复习"午饭、晚饭、包子、牛奶、鸡蛋"。',
    p: '① 跟读 zǎofàn；② 三顿饭：早饭、午饭、晚饭；③ 问答："你早饭吃什么？几点吃？"',
    post: '比较中国早饭和自己国家的早饭；或做本页练习 1–4。',
    s: '板书：早饭 / 午饭 / 晚饭 ／ 早饭吃什么？作业：写一写今天的早饭。'
  },
  act: [
    { tag: '调查', name: '早饭吃什么', how: '学生互相问"你早饭吃什么？"，统计结果。' },
    { tag: '文化体验', name: '中国早饭', how: '介绍中国早饭：包子、豆浆、油条、粥（超纲），和学生的早饭比较。' },
    { tag: '情境表演', name: '早饭店', how: '"你要什么？""两个包子、一个鸡蛋。"' }
  ],
  teach: [
    { h: '三顿饭', p: '早饭、午饭、晚饭。也说"早餐"（超纲，更正式）。' },
    { h: '吃了吗', p: '"吃早饭了吗？"也是早上常用的问候。' }
  ],
  err: [
    { x: '我吃早饭在七点。', v: '我七点吃早饭。', why: '时间放在动词前面。' },
    { x: '我喝早饭。', v: '我吃早饭。', why: '早饭用"吃"。' }
  ],
  hz: [
    { c: '早', rad: '日', radName: '日字头', radMean: '太阳', struct: '上下结构', parts: '日 + 十', tip: '太阳刚升起——早。', fam: '有"早"的词：早上、早饭。' },
    { c: '饭', rad: '饣', radName: '食字旁', radMean: '食物', struct: '左右结构', parts: '饣 + 反', tip: '和吃有关。', fam: '有"饭"的词：午饭、晚饭。' }
  ],
  cul: ['中国北方早饭常吃包子、油条、豆浆；南方常吃粥、米粉。', '"早饭要吃好"是中国人常说的话。'],
  syn: [],
  ant: [],
  rel: ['午饭', '晚饭', '早上', '早', '包子', '牛奶']
},

'早上': {
  pos: [['名词', 'noun']],
  zh: ['天刚亮到八九点钟的时间。'],
  en: ['(early) morning'],
  syl: [{ py: 'zǎo', i: 'z', f: 'ao', t: 3 }, { py: 'shang', i: 'sh', f: 'ang', t: 0 }],
  phon: [
    '第三声 + 轻声："早"读低降，"上"又轻又短、音稍高。',
    'z（平舌）和 sh（卷舌）要分清。',
    '"上"在这里读轻声。'
  ],
  img: { src: 'img/zaoshang.jpg', cap: "早上我喝茶。", by: "Eneas De Troya", lic: "CC BY 2.0", from: "Wikimedia Commons · Morning Coffee Cafe mañanero (7007117179).jpg" },
  use: ['早上 + 时间：早上七点', '早上 + 做什么', '今天 / 明天 + 早上'],
  ex: [
    { ctx: '作息', zh: '我 早上 六 点 起床 。', py: 'Wǒ zǎoshang liù diǎn qǐchuáng.', en: 'I get up at six in the morning.' },
    { ctx: '习惯', zh: '早上 我 喝 茶 。', py: 'Zǎoshang wǒ hē chá.', en: 'I drink tea in the morning.' },
    { ctx: '天气', zh: '早上 很 冷 。', py: 'Zǎoshang hěn lěng.', en: 'It is cold in the morning.' },
    { ctx: '计划', zh: '明天 早上 我 去 学校 。', py: 'Míngtiān zǎoshang wǒ qù xuéxiào.', en: 'Tomorrow morning I am going to school.' }
  ],
  drill: [
    { t: 'choice', q: '___ 六点我起床。', opts: ['早上', '晚上', '下午', '中午'], a: 0, why: '起床是早上。' },
    { t: 'order', words: ['早上', '我', '茶', '喝'], a: '我早上喝茶。', alt: ['早上我喝茶。'], en: 'I drink tea in the morning.' },
    { t: 'choice', q: '"早上"的反义词是：', opts: ['晚上', '上午', '中午', '今天'], a: 0, why: '早上 ↔ 晚上。' },
    { t: 'choice', say: '早上', q: '听录音，选拼音。', opts: ['zǎoshang', 'zhǎoshang', 'zǎoshàng', 'zǎosang'], a: 0, why: '早上 zǎoshang。' }
  ],
  bop: {
    b: '老师出示日出的照片："太阳出来了，现在是——早上！"',
    o: ['能听、说、认读"早上 zǎoshang"', '能说"早上 + 时间 + 做什么"', '完成一天时间线'],
    pre: '复习"上午、晚上、起床、早"。',
    p: '① 跟读 zǎoshang；② 时间线：早上 → 上午 → 中午 → 下午 → 晚上；③ 问答："你早上几点起床？做什么？"',
    post: '介绍自己的早上；或做本页练习 1–4。',
    s: '板书：早上（6–9 点）→ 上午 → 中午 → 下午 → 晚上。作业：写一写你的早上。'
  },
  act: [
    { tag: '游戏', name: '时间线', how: '把一天的时间词打乱，学生按顺序排好。' },
    { tag: '调查', name: '早上做什么', how: '学生互相问"你早上做什么？"' },
    { tag: 'TPR', name: '早上的动作', how: '老师说"起床、喝茶、吃早饭、去学校"，学生做动作。' }
  ],
  teach: [
    { h: '早上 / 上午', p: '"早上"是很早的时候（起床前后）；"上午"是 8 点到 12 点。范围有重叠。' },
    { h: '早上好', p: '问候语"早上好"= Good morning。' }
  ],
  err: [
    { x: '六点早上', v: '早上六点', why: '时间段在前。' },
    { x: 'zǎoshàng', v: 'zǎoshang', why: '"上"读轻声。' }
  ],
  hz: [
    { c: '早', rad: '日', radName: '日字头', radMean: '太阳', struct: '上下结构', parts: '日 + 十', tip: '太阳刚升起——早。', fam: '有"早"的词：早饭。' },
    { c: '上', rad: '一', radName: '一部', radMean: '——', struct: '独体字', parts: '竖 + 横 + 横', tip: '表示一段时间：早上、晚上。', fam: '有"上"的词：晚上、上午。' }
  ],
  cul: ['很多中国老人早上去公园打太极拳。', '中国学生早上常有"早读"：大声读课文。'],
  syn: [],
  ant: [{ w: '晚上', note: '天黑以后。' }],
  rel: ['早', '早饭', '上午', '晚上', '起床']
},

'怎么': {
  pos: [['代词', 'pronoun']],
  zh: ['问方式：怎么去？', '问原因：你怎么不来？'],
  en: ['how (manner)', 'why; how come'],
  syl: [{ py: 'zěn', i: 'z', f: 'en', t: 3 }, { py: 'me', i: 'm', f: 'e', t: 0 }],
  phon: [
    '第三声 + 轻声："怎"读低降，"么"轻而稍高。',
    'z 是平舌音，不要读成 zhěn。',
    'zěn 是前鼻音。'
  ],
  img: { src: 'img/zenme.jpg', cap: "怎么？", by: "Lakefire0000", lic: "Public domain", from: "Wikimedia Commons · QUESTION ? MARK MAN.png" },
  use: ['怎么 + 动词：怎么去、怎么读、怎么写', '怎么了？', '怎么 + 不 / 没……（问原因）'],
  ex: [
    { ctx: '出行', zh: '你 怎么 去 学校 ？', py: 'Nǐ zěnme qù xuéxiào?', en: 'How do you get to school?' },
    { ctx: '课堂', zh: '这个 字 怎么 读 ？', py: 'Zhège zì zěnme dú?', en: 'How do you read this character?' },
    { ctx: '关心', zh: '你 怎么 了 ？', py: 'Nǐ zěnme le?', en: 'What is wrong with you?' },
    { ctx: '原因', zh: '你 怎么 不 吃 ？', py: 'Nǐ zěnme bù chī?', en: 'Why are you not eating?' }
  ],
  drill: [
    { t: 'choice', q: '这个字 ___ 写？', opts: ['怎么', '什么', '谁', '哪儿'], a: 0, why: '问方式：怎么。' },
    { t: 'order', words: ['怎么', '你', '了'], a: '你怎么了？', en: 'What is wrong with you?' },
    { t: 'choice', q: '"你怎么不来？"问的是：', opts: ['原因', '时间', '地点', '数量'], a: 0, why: '怎么 + 不 = why not。' },
    { t: 'choice', say: '怎么', q: '听录音，选拼音。', opts: ['zěnme', 'zhěnme', 'zěnmé', 'zěnmo'], a: 0, why: '怎么 zěnme。' }
  ],
  bop: {
    b: '老师在黑板上写一个新字，假装不会："这个字怎么读？怎么写？"',
    o: ['能听、说、认读"怎么 zěnme"', '会问"……怎么读 / 写 / 去？"', '会问"你怎么了？"'],
    pre: '复习"什么、读、写、去"。',
    p: '① 跟读 zěnme；② 问方式：怎么读、怎么写、怎么去；③ 关心："你怎么了？"',
    post: '学生用"怎么"问老师三个问题；或做本页练习 1–4。',
    s: '板书：怎么 + 动词（how）／ 你怎么了？／ 怎么不……（why）。作业：写三个"怎么"问题。'
  },
  act: [
    { tag: '日常活动', name: '怎么读', how: '每学一个新字，学生问"这个字怎么读？怎么写？"' },
    { tag: '情境表演', name: '你怎么了', how: '一人表演不舒服，另一人问"你怎么了？"' },
    { tag: '情境表演', name: '问路', how: '"请问，去医院怎么走？""在那边。"（"走"超纲，作为短语）' }
  ],
  teach: [
    { h: '怎么 / 什么', p: '"怎么"问方式（how）；"什么"问东西（what）。' },
    { h: '怎么了', p: '"你怎么了？"= What\'s wrong?' }
  ],
  err: [
    { x: '你什么去学校？', v: '你怎么去学校？', why: '问方式用"怎么"。' },
    { x: '怎么你去？', v: '你怎么去？', why: '"怎么"放在动词前面。' }
  ],
  hz: [
    { c: '怎', rad: '心', radName: '心字底', radMean: '心 heart', struct: '上下结构', parts: '乍 + 心', tip: '下面是"心"——心里在想"怎么办？"', fam: '心字底的字：想、您、息。' },
    { c: '么', rad: '丿', radName: '撇部', radMean: '——', struct: '上下结构', parts: '丿 + 厶', tip: '读轻声 me。', fam: '有"么"的词：什么、怎么样。' }
  ],
  cul: ['"怎么办？"是中国人遇到问题时最常说的话。', '问路时中国人常说"……怎么走？"（"走"是 HSK2 词）。'],
  syn: [],
  ant: [],
  rel: ['怎么样', '什么', '读', '写', '去']
},

'怎么样': {
  pos: [['代词', 'pronoun']],
  zh: ['问情况、看法：……怎么样？', '提建议：……怎么样？'],
  en: ['how is it?; what do you think?', 'how about…?'],
  syl: [{ py: 'zěn', i: 'z', f: 'en', t: 3 }, { py: 'me', i: 'm', f: 'e', t: 0 }, { py: 'yàng', i: 'y', f: 'ang', t: 4 }],
  phon: [
    '第三声 + 轻声 + 第四声。',
    'zěn 是平舌、前鼻音；yàng 是后鼻音。',
    '"么"又轻又短。'
  ],
  img: { src: 'img/zenmeyang.jpg', cap: "怎么样？不太好。", by: "Shixart1985", lic: "CC BY 2.0", from: "Wikimedia Commons · Close-up of a woman showing thumbs down.jpg" },
  use: ['名词 + 怎么样？：天气怎么样？', '你觉得……怎么样？', '提议 + 怎么样？：我们去吃饭，怎么样？'],
  ex: [
    { ctx: '天气', zh: '今天 天气 怎么样 ？', py: 'Jīntiān tiānqì zěnmeyàng?', en: 'What is the weather like today?' },
    { ctx: '评价', zh: '你 觉得 这 本 书 怎么样 ？', py: 'Nǐ juéde zhè běn shū zěnmeyàng?', en: 'What do you think of this book?' },
    { ctx: '建议', zh: '我们 去 看 电影 ， 怎么样 ？', py: 'Wǒmen qù kàn diànyǐng, zěnmeyàng?', en: 'Let us go see a movie, how about it?' },
    { ctx: '问候', zh: '你 今天 怎么样 ？', py: 'Nǐ jīntiān zěnmeyàng?', en: 'How are you today?' }
  ],
  drill: [
    { t: 'choice', q: '今天天气 ___ ？—— 很好。', opts: ['怎么样', '怎么', '什么', '几'], a: 0, why: '问情况：怎么样。' },
    { t: 'order', words: ['怎么样', '这个', '菜'], a: '这个菜怎么样？', en: 'How is this dish?' },
    { t: 'choice', q: '"我们去公园，怎么样？"是：', opts: ['提建议', '问时间', '问地点', '问原因'], a: 0, why: '句尾"怎么样"= how about。' },
    { t: 'choice', say: '怎么样', q: '听录音，选汉字。', opts: ['怎么样', '怎么', '什么样', '这么样'], a: 0, why: '怎么样 zěnmeyàng。' }
  ],
  bop: {
    b: '老师穿一件新衣服进来，转一圈问："我的衣服怎么样？"',
    o: ['能听、说、认读"怎么样"', '能问情况和看法', '能用"……，怎么样？"提建议'],
    pre: '复习"天气、觉得、好、很"。',
    p: '① 跟读 zěnmeyàng；② 问看法：……怎么样？—— 很好 / 不错；③ 提建议：我们……，怎么样？',
    post: '两人互相提建议；或做本页练习 1–4。',
    s: '板书：A + 怎么样？／ 你觉得……怎么样？／ ……，怎么样？（建议）。作业：用"怎么样"问家人三个问题。'
  },
  act: [
    { tag: '情境表演', name: '约朋友', how: '"星期六我们去看电影，怎么样？""好啊！"' },
    { tag: '调查', name: '你觉得怎么样', how: '学生拿一样东西问别人"你觉得这个怎么样？"' },
    { tag: '日常活动', name: '天气播报', how: '每天问"今天天气怎么样？"' }
  ],
  teach: [
    { h: '怎么 / 怎么样', p: '"怎么 + 动词"问方式；"怎么样"问情况、看法或提建议。' },
    { h: '回答', p: '很好、不错（超纲）、还可以、不太好。' }
  ],
  err: [
    { x: '天气怎么？', v: '天气怎么样？', why: '问情况用"怎么样"。' },
    { x: '你怎么样去学校？', v: '你怎么去学校？', why: '问方式用"怎么"。' }
  ],
  hz: [
    { c: '怎', rad: '心', radName: '心字底', radMean: '心', struct: '上下结构', parts: '乍 + 心', tip: '心里在想怎么样。', fam: '心字底的字：想、您。' },
    { c: '么', rad: '丿', radName: '撇部', radMean: '——', struct: '上下结构', parts: '丿 + 厶', tip: '读轻声。', fam: '有"么"的词：什么、怎么。' },
    { c: '样', rad: '木', radName: '木字旁', radMean: '树木', struct: '左右结构', parts: '木 + 羊', tip: '右边"羊 yáng"表示读音。"样"是样子、模样。', fam: '木字旁的字：机、杯、校。' }
  ],
  cul: ['"最近怎么样？"是老朋友见面最常用的问候。', '"你怎么样？"是朋友之间随意的问候。'],
  syn: [],
  ant: [],
  rel: ['怎么', '什么', '觉得', '天气', '好']
},

'找': {
  pos: [['动词', 'verb']],
  zh: ['想办法得到或见到：找东西、找人。', '把多的钱还给别人：找钱。'],
  en: ['to look for; to find; to seek', 'to give change'],
  syl: [{ py: 'zhǎo', i: 'zh', f: 'ao', t: 3 }],
  phon: [
    '第三声，先降后升，声音要低。',
    'zh 是卷舌音，不要读成 zǎo（早）。',
    'ao 像英语 "how" 里的元音。'
  ],
  img: { src: 'img/zhao.jpg', cap: "我在找……", by: "Rand McNally and Company", lic: "Public domain", from: "Wikimedia Commons · Lost Counties of Virginia on the mouth of the James River.jpg" },
  use: ['找 + 东西 / 人', '找钱（give change）', '找到了（超纲：到）'],
  ex: [
    { ctx: '找东西', zh: '我 在 找 我 的 手机 。', py: 'Wǒ zài zhǎo wǒ de shǒujī.', en: 'I am looking for my phone.' },
    { ctx: '找人', zh: '你 找 谁 ？', py: 'Nǐ zhǎo shéi?', en: 'Who are you looking for?' },
    { ctx: '电话', zh: '我 找 老师 。', py: 'Wǒ zhǎo lǎoshī.', en: 'I am looking for the teacher.' },
    { ctx: '买东西', zh: '找 你 五 块 。', py: 'Zhǎo nǐ wǔ kuài.', en: 'Here is your five yuan change.' }
  ],
  drill: [
    { t: 'choice', q: '我的书不见了，我在 ___ 。', opts: ['找', '早', '做', '坐'], a: 0, why: '找东西。' },
    { t: 'order', words: ['找', '你', '谁'], a: '你找谁？', en: 'Who are you looking for?' },
    { t: 'choice', q: '"找"和"早"：', opts: ['zhǎo / zǎo，卷舌和平舌', '一样', '意思一样', '都是时间'], a: 0, why: '找 zhǎo（卷舌）；早 zǎo（平舌）。' },
    { t: 'choice', say: '找', q: '听录音，选拼音。', opts: ['zhǎo', 'zǎo', 'zhào', 'jiǎo'], a: 0, why: '找 zhǎo，第三声。' }
  ],
  bop: {
    b: '老师翻书包、看桌子下："我的笔呢？我在找我的笔！"',
    o: ['能听、说、认读"找 zhǎo"', '能说"我在找……""你找谁？"', '分清 zhǎo 和 zǎo'],
    pre: '复习"在、哪儿、呢"。',
    p: '① 跟读 zhǎo，对比 zhǎo / zǎo；② 找东西：我在找……；③ 找人：你找谁？—— 我找……；④ 找钱。',
    post: '寻宝游戏；或做本页练习 1–4。',
    s: '板书：找 + 东西 / 人 ／ 你找谁？／ 找钱。作业：写一写你最常找不到的东西。'
  },
  act: [
    { tag: '游戏', name: '寻宝', how: '老师藏东西，学生找，边找边说"我在找……"，找到说"在这儿！"' },
    { tag: '情境表演', name: '办公室', how: '有人敲门："你好，你找谁？""我找王老师。""他不在。"' },
    { tag: '情境表演', name: '找钱', how: '买东西付十块，东西七块："找你三块。""谢谢！"' }
  ],
  teach: [
    { h: '找 / 找到', p: '"找"是动作（look for），"找到"是结果（find，"到"超纲）。' },
    { h: '找钱', p: '买东西时"找钱"= give change。' }
  ],
  err: [
    { x: 'zǎo', v: 'zhǎo', why: '"找"是卷舌音。' },
    { x: '我找了，可是没找。', v: '我找了，可是没有找到。', why: '结果要用"找到"。' }
  ],
  hz: [{ c: '找', rad: '扌', radName: '提手旁', radMean: '手 hand', struct: '左右结构', parts: '扌 + 戈', tip: '左边"扌"是手——用手到处翻找；右边"戈"。和"我"字很像，注意区分。', fam: '提手旁的字：打（打电话）；拿、把（超纲）。' }],
  cul: ['在中国办事常说"你找谁？"、"我找……"。', '"找工作"（look for a job）是中国年轻人常说的话。'],
  syn: [],
  ant: [],
  rel: ['在', '哪儿', '钱', '谁', '看见']
},

'这': {
  pos: [['代词', 'pronoun']],
  zh: ['指离说话人近的人或东西（和"那"相对）。'],
  en: ['this'],
  syl: [{ py: 'zhè', i: 'zh', f: 'e', t: 4 }],
  phon: [
    '第四声，从高处全降。',
    'zh 是卷舌音，不要读成 zè 或 jè。',
    '口语里"这个"常读 zhèige。'
  ],
  img: { src: 'img/zhe.jpg', cap: "这是苹果。", by: "Shixart1985", lic: "CC BY 2.0", from: "Wikimedia Commons · Close-up of a person holding 3 apples on top of eachother.jpg（已裁剪）" },
  use: ['这 + 是……', '这 + 量词 + 名词：这本书', '这 ↔ 那'],
  ex: [
    { ctx: '介绍', zh: '这 是 我 的 书 。', py: 'Zhè shì wǒ de shū.', en: 'This is my book.' },
    { ctx: '询问', zh: '这 是 什么 ？', py: 'Zhè shì shénme?', en: 'What is this?' },
    { ctx: '介绍', zh: '这 是 我 妈妈 。', py: 'Zhè shì wǒ māma.', en: 'This is my mom.' },
    { ctx: '购物', zh: '这 本 书 多少 钱 ？', py: 'Zhè běn shū duōshao qián?', en: 'How much is this book?' }
  ],
  drill: [
    { t: 'choice', q: '___ 是我的手机，那是你的。', opts: ['这', '那', '哪', '它'], a: 0, why: '近：这；远：那。' },
    { t: 'order', words: ['这', '是', '什么'], a: '这是什么？', en: 'What is this?' },
    { t: 'choice', q: '"这"的反义词是：', opts: ['那', '哪', '他', '有'], a: 0, why: '这 ↔ 那。' },
    { t: 'choice', say: '这', q: '听录音，选拼音。', opts: ['zhè', 'zè', 'jè', 'zhě'], a: 0, why: '这 zhè，第四声。' }
  ],
  bop: {
    b: '老师拿起手里的书："这是书。"指远处的门："那是门。"',
    o: ['能听、说、认读"这 zhè"', '能说"这是……"', '分清"这"和"那"'],
    pre: '复习"那、什么、是"。',
    p: '① 跟读 zhè；② 这是……：介绍东西和人；③ 这 + 量词：这本书、这个人。',
    post: '"这是什么？"抢答；或做本页练习 1–4。',
    s: '板书：这（近）↔ 那（远）／ 这是…… ／ 这 + 量词 + 名词。作业：用"这是……"介绍家里五样东西。'
  },
  act: [
    { tag: 'TPR', name: '这和那', how: '老师说"这"学生拍自己的桌子，说"那"指远处。' },
    { tag: '游戏', name: '这是什么', how: '老师拿出东西问"这是什么？"，学生抢答。' },
    { tag: '展示', name: '介绍家人', how: '学生用照片介绍："这是我爸爸，这是我妈妈。"' }
  ],
  teach: [
    { h: '这 / 那', p: '离说话人近用"这"，远用"那"。' },
    { h: '加量词', p: '"这"直接修饰名词时一般要加量词：这本书（✗ 这书，口语偶尔可以）。' }
  ],
  err: [
    { x: '这书是我的。', v: '这本书是我的。', why: '"这"和名词中间要有量词。' },
    { x: 'zè', v: 'zhè', why: '"这"是卷舌音。' }
  ],
  hz: [{ c: '这', rad: '辶', radName: '走之旁', radMean: '走路', struct: '半包围结构', parts: '文 + 辶', tip: '"辶"是走，里面是"文"——走到这里来。先写"文"，最后写"辶"。', fam: '走之旁的字：边、还、道（知道）。' }],
  cul: ['口语里"这个"常读 zhèige，"这些"读 zhèixiē。', '"这"是汉语里用得最多的字之一。'],
  syn: [],
  ant: [{ w: '那', note: '离说话人远。' }],
  rel: ['那', '这个', '这边', '这里', '这儿', '这些']
},

'这边': {
  pos: [['代词', 'pronoun']],
  zh: ['这个方向；离说话人近的地方。'],
  en: ['this side; over here'],
  syl: [{ py: 'zhè', i: 'zh', f: 'e', t: 4 }, { py: 'biān', i: 'b', f: 'ian', t: 1 }],
  phon: [
    '第四声 + 第一声：先全降，再高平。口语里"边"常读轻声。',
    'zh 是卷舌音。',
    'biān 里的 a 读得像 "e"。'
  ],
  img: { src: 'img/zhebian.jpg', cap: "这边", by: "Dietmar Rabich", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Norderney, Dünenlandschaft, Wegweiser -- 2025 -- 9437.jpg" },
  use: ['在 + 这边', '请来这边', '这边 ↔ 那边'],
  ex: [
    { ctx: '指引', zh: '请 来 这边 。', py: 'Qǐng lái zhèbiān.', en: 'Please come this way.' },
    { ctx: '位置', zh: '我 在 这边 。', py: 'Wǒ zài zhèbiān.', en: 'I am over here.' },
    { ctx: '饭店', zh: '请 坐 这边 。', py: 'Qǐng zuò zhèbiān.', en: 'Please sit over here.' },
    { ctx: '比较', zh: '这边 人 很 少 ， 那边 人 很 多 。', py: 'Zhèbiān rén hěn shǎo, nàbiān rén hěn duō.', en: 'Few people here, many over there.' }
  ],
  drill: [
    { t: 'choice', q: '服务员：请坐 ___ 。', opts: ['这边', '这个', '这些', '哪边'], a: 0, why: '说地方用"这边"。' },
    { t: 'order', words: ['这边', '来', '请'], a: '请来这边。', en: 'Please come this way.' },
    { t: 'choice', q: '"这边"的反义词是：', opts: ['那边', '外边', '上边', '前边'], a: 0, why: '这边 ↔ 那边。' },
    { t: 'choice', say: '这边', q: '听录音，选拼音。', opts: ['zhèbiān', 'zèbiān', 'zhèpiān', 'zhěbiān'], a: 0, why: '这边 zhèbiān。' }
  ],
  bop: {
    b: '老师当服务员，用手掌指引："您好，这边请！"',
    o: ['能听、说、认读"这边 zhèbiān"', '会说"请来这边""请坐这边"', '分清"这边"和"那边"'],
    pre: '复习"那边、边、请"。',
    p: '① 跟读 zhèbiān；② 这边 ↔ 那边；③ 指引：请来这边、请坐这边。',
    post: '服务员情境；或做本页练习 1–4。',
    s: '板书：这边 ↔ 那边 ／ 请 + 动词 + 这边。作业：写两句"这边……，那边……"。'
  },
  act: [
    { tag: '情境表演', name: '饭店服务员', how: '"您好，几位？""两位。""请坐这边。"' },
    { tag: 'TPR', name: '这边那边', how: '老师说"这边"学生站到老师身边，说"那边"走到远处。' },
    { tag: '看图说话', name: '比一比', how: '看两边不同的图，说"这边……，那边……"。' }
  ],
  teach: [
    { h: '这边 / 这儿 / 这里', p: '都可以表示 here；"这边"强调方向。' },
    { h: '这边请', p: '服务员常说"这边请"（this way, please）。' }
  ],
  err: [
    { x: '请来这。', v: '请来这边。 / 请来这儿。', why: '"这"单用不表示地方。' },
    { x: '这个边', v: '这边', why: '不加量词。' }
  ],
  hz: [
    { c: '这', rad: '辶', radName: '走之旁', radMean: '走路', struct: '半包围结构', parts: '文 + 辶', tip: '走到这里来。', fam: '走之旁的字：边、还。' },
    { c: '边', rad: '辶', radName: '走之旁', radMean: '走路', struct: '半包围结构', parts: '力 + 辶', tip: '用力走到边上。', fam: '有"边"的词：那边、外边。' }
  ],
  cul: ['在中国的饭店、银行，工作人员常说"这边请"，同时用手掌指方向。', '两个字都是走之旁，和"走"有关。'],
  syn: [{ w: '这儿', note: '口语。' }, { w: '这里', note: '书面一点。' }],
  ant: [{ w: '那边', note: '离说话人远的地方。' }],
  rel: ['那边', '这', '边', '这儿', '这里']
}

});
