// HSK1 教学参考 · 第 17 批（10 词）：前 钱 千 起床 请 请问 去 去年 热 人
window.H1_WORDS = window.H1_WORDS || {};
Object.assign(H1_WORDS, {

'前': {
  pos: [['名词', 'noun']],
  zh: ['面对着的方向（和"后"相对）。', '比某个时间早的时候：吃饭前、三天前。'],
  en: ['front; ahead', 'before; ago'],
  syl: [{ py: 'qián', i: 'q', f: 'ian', t: 2 }],
  phon: [
    '第二声，从中往高升。',
    'q 是送气的舌面音，不要读成 jián 或 "chian"。',
    'ian 里的 a 读得像 "e"（接近 chyen）。和"钱 qián"读音一样。'
  ],
  img: { src: 'img/qian2.jpg', cap: "前边有很多人。", by: "Asurnipal", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Bregenz-Vorarlberg (ship)-queue-01ASD.jpg" },
  use: ['名词 + 前边：学校前边', '动作 / 时间 + 前：吃饭前、三天前', '前 ↔ 后'],
  ex: [
    { ctx: '位置', zh: '学校 前 边 有 一 个 商店 。', py: 'Xuéxiào qiánbian yǒu yí gè shāngdiàn.', en: 'There is a shop in front of the school.' },
    { ctx: '课堂', zh: '她 坐 在 我 前 边 。', py: 'Tā zuò zài wǒ qiánbian.', en: 'She sits in front of me.' },
    { ctx: '时间', zh: '上课 前 ， 我 喝 茶 。', py: 'Shàngkè qián, wǒ hē chá.', en: 'I drink tea before class.' },
    { ctx: '过去', zh: '三 天 前 我 去 了 医院 。', py: 'Sān tiān qián wǒ qù le yīyuàn.', en: 'Three days ago I went to the hospital.' }
  ],
  drill: [
    { t: 'choice', q: '他在后边，我在他 ___ 边。', opts: ['前', '钱', '千', '去'], a: 0, why: '前 ↔ 后。' },
    { t: 'order', words: ['前', '睡觉', '我', '看书'], a: '睡觉前我看书。', alt: ['我睡觉前看书。'], en: 'I read before going to sleep.' },
    { t: 'choice', q: '"三天前"的意思是：', opts: ['three days later', 'three days ago', 'in front of three days', 'the third day'], a: 1, why: '时间 + 前 = …ago。' },
    { t: 'choice', say: '前', q: '听录音，选拼音。', opts: ['qián', 'jián', 'qiān', 'xián'], a: 0, why: '前 qián，第二声。' }
  ],
  bop: {
    b: '老师请三位学生排成一队，指着第一个："她在前边。"指最后一个："他在后边。"',
    o: ['能听、说、认读"前 qián"', '能说"……在……前边"', '能说"……前"表示时间'],
    pre: '复习"后、后边、上、下、里"。',
    p: '① 跟读 qián，对比 qián（前、钱）/ qiān（千）；② 位置练习：书在杯子前边；③ 时间练习：吃饭前、睡觉前、上课前 + 做什么。',
    post: '学生描述座位："……坐在我前边。"；或做本页练习 1–4。',
    s: '板书：前 ↔ 后 ／ 名词 + 前边 ／ 动作 + 前。作业：写两句"……前我……"。'
  },
  act: [
    { tag: 'TPR', name: '前后左右', how: '老师说"向前走""向后走""看前边""看后边"，学生照做；越来越快。' },
    { tag: '游戏', name: '排队', how: '学生排成一队，老师问"谁在 A 前边？""谁在 B 后边？"，学生回答。' },
    { tag: '排序', name: '我的一天', how: '用"……前"说一天的习惯："上课前我喝茶。睡觉前我看手机。"' }
  ],
  teach: [
    { h: '前 / 前边', p: '说位置时一般说"前边"（或"前面"，超纲），不单用"前"。' },
    { h: '时间方向', p: '汉语里"前"表示过去，"后"表示将来：前天、三天前；后天、三天后。' }
  ],
  err: [
    { x: '他在前我。', v: '他在我前边。', why: '方位词放在名词后面。' },
    { x: '前吃饭我洗手。', v: '吃饭前我洗手。', why: '"前"放在动作的后面。' }
  ],
  hz: [{ c: '前', rad: '刂', radName: '立刀旁', radMean: '刀 knife', struct: '上下结构', parts: '丷 + 一 + 月 + 刂', tip: '上面"丷"像人的脚尖，下面像一只船（月）和桨（刂）——脚在船上往"前"走。', fam: '立刀旁的字：到、别（超纲）。' }],
  cul: ['中国人排队、上车时会说"请往前走"。', '"前"在汉语里也表示过去：从前（once upon a time）、以前（before）（超纲）。'],
  syn: [],
  ant: [{ w: '后', note: '背对着的方向；比某个时间晚。' }],
  rel: ['后', '上', '下', '里', '外', '边']
},

'钱': {
  pos: [['名词', 'noun']],
  zh: ['用来买东西的东西（货币）。'],
  en: ['money'],
  syl: [{ py: 'qián', i: 'q', f: 'ian', t: 2 }],
  phon: [
    '第二声，从中往高升。',
    'q 是送气的舌面音，要有一口气出来。',
    '和"前 qián"读音一样，靠上下文区分。'
  ],
  img: { src: 'img/qian.jpg', cap: "钱", by: "Avij", lic: "Public domain", from: "Wikimedia Commons · Euro coins and banknotes (cropped).jpg" },
  use: ['多少钱？', '数词 + 块 + 钱', '有 / 没有 + 钱'],
  ex: [
    { ctx: '问价', zh: '这个 多少 钱 ？', py: 'Zhège duōshao qián?', en: 'How much is this?' },
    { ctx: '价钱', zh: '一 个 苹果 三 块 钱 。', py: 'Yí gè píngguǒ sān kuài qián.', en: 'One apple is three yuan.' },
    { ctx: '没钱', zh: '我 没有 钱 。', py: 'Wǒ méiyǒu qián.', en: 'I have no money.' },
    { ctx: '家人', zh: '妈妈 给 我 钱 。', py: 'Māma gěi wǒ qián.', en: 'Mom gives me money.' }
  ],
  drill: [
    { t: 'choice', q: '这件衣服多少 ___ ？', opts: ['钱', '前', '千', '去'], a: 0, why: '问价钱：多少钱？' },
    { t: 'order', words: ['钱', '多少', '这个'], a: '这个多少钱？', en: 'How much is this?' },
    { t: 'choice', q: '"五块钱"里的"钱"可以省略吗？', opts: ['可以：五块', '不可以', '要说"五钱"', '要说"钱五块"'], a: 0, why: '口语里常说"五块"。' },
    { t: 'choice', say: '钱', q: '听录音，选拼音。', opts: ['qián', 'qiān', 'jián', 'qiǎn'], a: 0, why: '钱 qián，第二声。' }
  ],
  bop: {
    b: '老师打开钱包，拿出几张纸币："这是什么？——钱！有钱可以买东西。"',
    o: ['能听、说、认读"钱 qián"', '能问"多少钱？"', '能说"……块钱"'],
    pre: '复习数字、"块、买、卖"。',
    p: '① 跟读 qián；② 问价练习：老师出示东西，学生问"多少钱？"；③ 买卖对话："这个多少钱？""二十块钱。""给你钱。"',
    post: '每组用"假钱"在"小商店"里买三样东西；或做本页练习 1–4。',
    s: '板书：多少钱？—— __ 块（钱）／ 有钱 ↔ 没有钱。作业：记下你今天花了多少钱。'
  },
  act: [
    { tag: '情境表演', name: '小商店', how: '用纸做"人民币"，学生买卖文具和零食："多少钱？""三块。""给你钱。""谢谢！"' },
    { tag: '游戏', name: '猜价钱', how: '老师出示东西的图片，学生猜"……块钱"，老师说"多了／少了"。' },
    { tag: '文化体验', name: '认识人民币', how: '出示人民币图片，认识上面的数字和汉字（壹、贰、伍、拾、佰——大写数字，超纲）。' }
  ],
  teach: [
    { h: '多少钱', p: '问价钱固定说"多少钱？"，不说"几钱"。' },
    { h: '钱 / 前', p: '读音一样（qián），写法不同：钱有"钅"（金属）。' }
  ],
  err: [
    { x: '这个几钱？', v: '这个多少钱？', why: '问价钱用"多少"。' },
    { x: '我有钱五块。', v: '我有五块钱。', why: '数量放在"钱"的前面。' }
  ],
  hz: [{ c: '钱', rad: '钅', radName: '金字旁', radMean: '金属 metal', struct: '左右结构', parts: '钅 + 戋', tip: '左边"钅"是金属——古代的钱是铜做的；右边"戋 jiān"表示读音。', fam: '金字旁的字：钟（分钟）；铁、银（超纲）。' }],
  cul: ['中国古代的钱是圆形、中间有方孔的铜钱，表示"天圆地方"。', '现在中国人买东西大多用手机支付，很少带现金。'],
  syn: [],
  ant: [],
  rel: ['块', '元', '多少', '买', '卖', '贵', '便宜']
},

'千': {
  pos: [['数词', 'numeral']],
  zh: ['数字 1000，十个一百。'],
  en: ['thousand'],
  syl: [{ py: 'qiān', i: 'q', f: 'ian', t: 1 }],
  phon: [
    '第一声，高而平。',
    '和"前、钱 qián"只差声调：千是第一声。',
    'q 要送气。'
  ],
  img: { src: 'img/qian1.jpg', cap: "一千", by: "Gb89.2", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · US 1000 square.png" },
  use: ['数词 + 千：一千、三千', '一千 + 零 + 数：一千零五', '两千（比"二千"常用）'],
  ex: [
    { ctx: '价钱', zh: '这个 电脑 五 千 块 。', py: 'Zhège diànnǎo wǔqiān kuài.', en: 'This computer is five thousand yuan.' },
    { ctx: '人数', zh: '学校 有 三 千 个 学生 。', py: 'Xuéxiào yǒu sānqiān gè xuésheng.', en: 'The school has three thousand students.' },
    { ctx: '数字', zh: '一 千 零 五 。', py: 'Yìqiān líng wǔ.', en: 'One thousand and five.' },
    { ctx: '贵', zh: '两 千 块 太 贵 了 。', py: 'Liǎngqiān kuài tài guì le.', en: 'Two thousand yuan is too expensive.' }
  ],
  drill: [
    { t: 'choice', q: '十个一百是一 ___ 。', opts: ['千', '百', '万', '十'], a: 0, why: '10 × 100 = 1000 = 一千。' },
    { t: 'order', words: ['千', '五', '块', '这个手机'], a: '这个手机五千块。', en: 'This phone is five thousand yuan.' },
    { t: 'choice', q: '"2000"常说：', opts: ['两千', '二百', '二十百', '两百'], a: 0, why: '2000 = 两千。' },
    { t: 'choice', say: '千', q: '听录音，选拼音。', opts: ['qiān', 'qián', 'jiān', 'qiǎn'], a: 0, why: '千 qiān，第一声。' }
  ],
  bop: {
    b: '老师在黑板上写 10、100、1000，问："十、一百……这个呢？——一千！"',
    o: ['能听、说、认读"千 qiān"', '能读四位数', '分清 qiān 和 qián'],
    pre: '复习"十、百、零"和三位数。',
    p: '① 跟读 qiān，对比 qiān（千）/ qián（前、钱）；② 读数：1000、2000、3500、1005；③ 价钱：手机多少钱？电脑多少钱？',
    post: '听写五个四位数；或做本页练习 1–4。',
    s: '板书：十 → 百 → 千 ／ 两千 ／ 一千零五。作业：查三样贵东西的价钱，用中文读出来。'
  },
  act: [
    { tag: '游戏', name: '拍卖会', how: '老师拍卖几样东西（图片），学生用"一千！""两千！""三千五！"喊价。' },
    { tag: '游戏', name: '读数接力', how: '老师写一个四位数，学生轮流读，读对的人写下一个数。' },
    { tag: '语音', name: '千、前、钱', how: '老师读 qiān / qián，学生举"千"或"钱"的卡片，练习听声调。' }
  ],
  teach: [
    { h: '读数', p: '四位数：千、百、十、个，中间有零读"零"：3050 = 三千零五十。' },
    { h: '两千', p: '"千"前面的 2 常说"两"：两千。' }
  ],
  err: [
    { x: '十百', v: '一千', why: '1000 说"一千"。' },
    { x: '三千五十（3050）', v: '三千零五十', why: '中间的 0 要读"零"。' }
  ],
  hz: [{ c: '千', rad: '十', radName: '十部', radMean: '——', struct: '独体字', parts: '丿 + 十', tip: '"十"上面加一撇。古字是"人"加一横，借来表示一千。注意第一笔是平撇。', fam: '样子相近的字：干、午（午饭）。' }],
  cul: ['"千"常用来表示"很多"：千言万语（很多很多话）、千万（一定，超纲）。', '"千里之行，始于足下"——再远的路也从第一步开始。学汉语也是这样！'],
  syn: [],
  ant: [],
  rel: ['百', '十', '零', '块', '钱', '多少']
},

'起床': {
  pos: [['动词', 'verb']],
  zh: ['睡醒以后从床上起来。'],
  en: ['to get up (out of bed)'],
  syl: [{ py: 'qǐ', i: 'q', f: 'i', t: 3 }, { py: 'chuáng', i: 'ch', f: 'uang', t: 2 }],
  phon: [
    '第三声 + 第二声："起"只读前半段（低降），"床"往上升。',
    'q 是舌面送气音，ch 是卷舌送气音，两个都要送气。',
    'chuáng 是后鼻音 -ng。'
  ],
  img: { src: 'img/qichuang.jpg', cap: "七点了，起床！", by: "Santeri Viinamäki", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Classic alarm clock 20180513.jpg" },
  use: ['时间 + 起床：七点起床', '起床了！', '还没起床'],
  ex: [
    { ctx: '作息', zh: '我 早上 七 点 起床 。', py: 'Wǒ zǎoshang qī diǎn qǐchuáng.', en: 'I get up at seven in the morning.' },
    { ctx: '叫醒', zh: '起床 了 ！', py: 'Qǐchuáng le!', en: 'Time to get up!' },
    { ctx: '询问', zh: '你 几 点 起床 ？', py: 'Nǐ jǐ diǎn qǐchuáng?', en: 'What time do you get up?' },
    { ctx: '周末', zh: '弟弟 还 没有 起床 。', py: 'Dìdi hái méiyǒu qǐchuáng.', en: 'My little brother has not got up yet.' }
  ],
  drill: [
    { t: 'choice', q: '早上六点，妈妈说："___ 了！"', opts: ['起床', '睡觉', '下课', '下班'], a: 0, why: '早上叫人：起床了！' },
    { t: 'order', words: ['起床', '我', '六点'], a: '我六点起床。', en: 'I get up at six.' },
    { t: 'choice', q: '"起床"的反义词是：', opts: ['睡觉', '上课', '吃饭', '回家'], a: 0, why: '起床 ↔ 睡觉。' },
    { t: 'choice', say: '起床', q: '听录音，选拼音。', opts: ['qǐchuáng', 'jǐchuáng', 'qǐchuán', 'qǐzhuáng'], a: 0, why: '起床 qǐchuáng。' }
  ],
  bop: {
    b: '老师趴在桌上假装睡觉，闹钟（手机）响了，伸个懒腰站起来："啊——七点了，起床！"',
    o: ['能听、说、认读"起床 qǐchuáng"', '能说"我……点起床"', '能问"你几点起床？"'],
    pre: '复习时间"……点"和"睡觉"。',
    p: '① 跟读 qǐ、chuáng、qǐchuáng；② 说作息：我……点起床，……点睡觉；③ 两人问答："你几点起床？""星期六呢？"',
    post: '全班调查：谁起得最早，谁起得最晚；或做本页练习 1–4。',
    s: '板书：__ 点起床 ／ 起床 ↔ 睡觉 ／ 起床了！作业：写出你一天的时间表（起床、吃饭、上课、睡觉）。'
  },
  act: [
    { tag: 'TPR', name: '起床睡觉', how: '老师说"睡觉"学生趴下，说"起床"学生站起来伸懒腰；越来越快，做错的人表演"赖床"。' },
    { tag: '调查', name: '几点起床', how: '学生互相问"你几点起床？"，按起床时间排队，最早的人当"早起之星"。' },
    { tag: '情境表演', name: '妈妈叫起床', how: '"起床了！""再睡五分钟……""不行！七点了！"' }
  ],
  teach: [
    { h: '离合词', p: '"起床"可以分开：起了床（拓展）。HSK1 阶段先作为整体用。' },
    { h: '起床 / 醒', p: '"醒"（超纲）是睁开眼睛；"起床"是从床上起来。' }
  ],
  err: [
    { x: '我起床七点。', v: '我七点起床。', why: '时间放在动词前面。' },
    { x: '我起来床。', v: '我起床。', why: '固定搭配是"起床"。' }
  ],
  hz: [
    { c: '起', rad: '走', radName: '走字旁', radMean: '走 to walk', struct: '半包围结构', parts: '走 + 己', tip: '左边是"走"——起来就要走；右边"己"表示读音（古音相近）。先写"走"，最后一笔捺托住"己"。', fam: '走字旁的字：赶、超（超市）。' },
    { c: '床', rad: '广', radName: '广字旁', radMean: '房屋 building', struct: '半包围结构', parts: '广 + 木', tip: '房子（广）里有木头（木）做的东西——就是"床"。', fam: '广字旁的字：店、应（超纲）。' }
  ],
  cul: ['中国的学生常常很早起床：很多中学生六点就起床，七点前到学校早读。', '中国人说"早睡早起身体好"。'],
  syn: [],
  ant: [{ w: '睡觉', note: '上床睡。' }],
  rel: ['睡觉', '早上', '点', '早饭', '休息']
},

'请': {
  pos: [['动词', 'verb']],
  zh: ['客气地要求别人做某事。', '邀请；请客（付钱让别人吃饭等）。'],
  en: ['please (polite request)', 'to invite; to treat (someone to a meal)'],
  syl: [{ py: 'qǐng', i: 'q', f: 'ing', t: 3 }],
  phon: [
    '第三声，先降后升，声音要低。',
    'q 要送气；后鼻音 -ng。',
    '"请坐"里"请"只读前半段（低降）：qǐng zuò。'
  ],
  img: { src: 'img/qing.jpg', cap: "请喝茶。", by: "Ralf Steinberger from Northern Italy and Berlin", lic: "CC BY 2.0", from: "Wikimedia Commons · Waiter serving tea with style in Mali's capital Bamako (38075436525).jpg" },
  use: ['请 + 动词：请坐、请进、请喝茶', '请 + 人 + 动词：请你读一下', '我请你吃饭（我付钱）'],
  ex: [
    { ctx: '招待', zh: '请 坐 。', py: 'Qǐng zuò.', en: 'Please sit down.' },
    { ctx: '招待', zh: '请 喝 茶 。', py: 'Qǐng hē chá.', en: 'Please have some tea.' },
    { ctx: '课堂', zh: '请 你 读 一下 。', py: 'Qǐng nǐ dú yíxià.', en: 'Please read it.' },
    { ctx: '请客', zh: '今天 我 请 你 吃 饭 。', py: 'Jīntiān wǒ qǐng nǐ chī fàn.', en: 'Today I am treating you to a meal.' }
  ],
  drill: [
    { t: 'choice', q: '客人来了，你说："___ 坐！"', opts: ['请', '去', '起', '前'], a: 0, why: '请坐 = please sit down。' },
    { t: 'order', words: ['请', '茶', '喝'], a: '请喝茶。', en: 'Please have some tea.' },
    { t: 'choice', q: '"我请你吃饭"的意思是：', opts: ['你付钱', '我付钱', '我们不吃', '你请我'], a: 1, why: '"我请你"= 我付钱。' },
    { t: 'choice', say: '请', q: '听录音，选拼音。', opts: ['qǐng', 'qǐn', 'jǐng', 'qìng'], a: 0, why: '请 qǐng，第三声。' }
  ],
  bop: {
    b: '老师走到门口，做出邀请的手势："请进！"再指椅子："请坐！"递上一杯水："请喝水！"',
    o: ['能听、说、认读"请 qǐng"', '能说"请 + 动词"', '知道"我请你"的意思'],
    pre: '复习课堂指令"读、听、看、写"。',
    p: '① 跟读 qǐng、qǐng zuò、qǐng hē chá；② 课堂指令：请读、请听、请看、请写；③ 情境：来客人了——请进、请坐、请喝茶。',
    post: '学生当小老师用"请……"发指令；或做本页练习 1–4。',
    s: '板书：请 + 动词 ／ 请你 + 动词 ／ 我请你吃饭（= 我付钱）。作业：今天用"请"说三句话。'
  },
  act: [
    { tag: '情境表演', name: '来做客', how: '一人当主人，一人当客人："你好，请进！""谢谢！""请坐，请喝茶。""谢谢你！"' },
    { tag: 'TPR', name: '请你……', how: '老师说"请你站起来""请你坐下""请你看黑板"，只有句子里有"请"时才做（类似"老师说"游戏）。' },
    { tag: '文化体验', name: '谁请客', how: '讨论中国人吃饭时抢着付钱（"我请！""不，我请！"）的习惯，和学生国家比较。' }
  ],
  teach: [
    { h: '礼貌', p: '"请"放在动词前面，让请求变得客气。HSK1 阶段的课堂指令都可以用"请"开头。' },
    { h: '请客', p: '"我请你"表示我付钱请你；中国人吃饭时常常抢着"请客"。' }
  ],
  err: [
    { x: '坐请。', v: '请坐。', why: '"请"放在动词前面。' },
    { x: '请你吗读一下？', v: '请你读一下。', why: '"请"开头的句子不加"吗"。' }
  ],
  hz: [{ c: '请', rad: '讠', radName: '言字旁', radMean: '说话 speech', struct: '左右结构', parts: '讠 + 青', tip: '左边"讠"是说话——用好听的话请人；右边"青 qīng"表示读音。', fam: '言字旁的字：说、话、读、课、谁、语。有"青"的字：清、晴（超纲）。' }],
  cul: ['在中国饭店吃完饭，朋友们常常抢着付钱："我来！""不，我请！"这是表示热情和面子。', '"请"是中国人日常最常用的礼貌词之一，和"谢谢、对不起"一起学。'],
  syn: [],
  ant: [],
  rel: ['请问', '谢谢', '不客气', '坐', '喝', '吃']
},

'请问': {
  pos: [['动词', 'verb']],
  zh: ['客气地向别人提问之前说的话。'],
  en: ['excuse me, may I ask…'],
  syl: [{ py: 'qǐng', i: 'q', f: 'ing', t: 3 }, { py: 'wèn', i: 'w', f: 'en', t: 4 }],
  phon: [
    '第三声 + 第四声："请"只读前半段（低降），"问"全降。',
    'qǐng 是后鼻音，wèn 是前鼻音。',
    'wèn 的 w 要圆唇。'
  ],
  img: { src: 'img/qingwen.jpg', cap: "请问，……在哪儿？", by: "Fanti Salms", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Help Desk.jpg" },
  use: ['请问，+ 问题？', '请问，……在哪儿？', '请问，您是……吗？'],
  ex: [
    { ctx: '问路', zh: '请问 ， 医院 在 哪儿 ？', py: 'Qǐngwèn, yīyuàn zài nǎr?', en: 'Excuse me, where is the hospital?' },
    { ctx: '确认', zh: '请问 ， 您 是 老师 吗 ？', py: 'Qǐngwèn, nín shì lǎoshī ma?', en: 'Excuse me, are you a teacher?' },
    { ctx: '时间', zh: '请问 ， 现在 几 点 ？', py: 'Qǐngwèn, xiànzài jǐ diǎn?', en: 'Excuse me, what time is it?' },
    { ctx: '名字', zh: '请问 ， 你 叫 什么 名字 ？', py: 'Qǐngwèn, nǐ jiào shénme míngzi?', en: 'Excuse me, what is your name?' }
  ],
  drill: [
    { t: 'choice', q: '___ ，超市在哪儿？', opts: ['请问', '谢谢', '再见', '没关系'], a: 0, why: '提问前客气地说"请问"。' },
    { t: 'order', words: ['请问', '在', '哪儿', '商店'], a: '请问，商店在哪儿？', en: 'Excuse me, where is the shop?' },
    { t: 'choice', q: '"请问"后面一般是：', opts: ['一个问题', '一个命令', '"谢谢"', '"再见"'], a: 0, why: '"请问"后面跟问题。' },
    { t: 'choice', say: '请问', q: '听录音，选拼音。', opts: ['qǐngwèn', 'qǐnwèng', 'jǐngwèn', 'qǐngwěn'], a: 0, why: '请问 qǐngwèn。' }
  ],
  bop: {
    b: '老师假装是游客，手拿地图走向一位学生，礼貌地说："请问，学校在哪儿？"',
    o: ['能听、说、认读"请问 qǐngwèn"', '能用"请问"礼貌地提问', '能问路'],
    pre: '复习"在哪儿、几点、什么"等问句。',
    p: '① 跟读 qǐngwèn，注意前后鼻音；② 把问题变礼貌：几点？→ 请问，现在几点？；③ 问路对话："请问，……在哪儿？""在那边。""谢谢！""不客气。"',
    post: '在教室里设"问路站"，学生轮流问路；或做本页练习 1–4。',
    s: '板书：请问，+ 问题？／ 请问 ≈ Excuse me。作业：用"请问"写三个问题。'
  },
  act: [
    { tag: '情境表演', name: '问路', how: '教室四角贴地点（医院、超市、学校、饭店），一人问"请问，超市在哪儿？"，另一人指路。' },
    { tag: '游戏', name: '礼貌升级', how: '老师说一个直接的问题（"几点？"），学生加上"请问"把它变礼貌，再加上"谢谢"结束对话。' },
    { tag: '情境表演', name: '找人', how: '"请问，王老师在吗？""在，请进。""谢谢！"' }
  ],
  teach: [
    { h: '请问 / 请', p: '"请问"只用在提问之前；"请"用在请求之前（请坐）。' },
    { h: 'Excuse me', p: '英语的 "Excuse me" 在问路时是"请问"，碰到别人时是"对不起"。' }
  ],
  err: [
    { x: '请问，坐这儿。', v: '请坐这儿。', why: '"请问"后面是问题，不是请求。' },
    { x: '请问吗医院在哪儿？', v: '请问，医院在哪儿？', why: '"请问"后面直接说问题。' }
  ],
  hz: [
    { c: '请', rad: '讠', radName: '言字旁', radMean: '说话 speech', struct: '左右结构', parts: '讠 + 青', tip: '用好听的话（讠）请人。', fam: '言字旁的字：说、话、读、课、谁。' },
    { c: '问', rad: '门', radName: '门字框', radMean: '门 door', struct: '半包围结构', parts: '门 + 口', tip: '门（门）里有一张嘴（口）——站在门口张嘴"问"。', fam: '门字框的字：们（亻 + 门）、间（房间）。' }
  ],
  cul: ['问路时先说"请问"，问完说"谢谢"，是中国人觉得很有礼貌的方式。', '在中国问路，人们常常很热情，有时会直接带你走过去。'],
  syn: [],
  ant: [],
  rel: ['请', '问', '问题', '谢谢', '哪儿', '几']
},

'去': {
  pos: [['动词', 'verb']],
  zh: ['从说话人这儿到别的地方。'],
  en: ['to go'],
  syl: [{ py: 'qù', i: 'q', f: 'ü', t: 4 }],
  phon: [
    '第四声，从高处全降。',
    '韵母其实是 ü（j、q、x 后面的 ü 省去两点写成 u）：嘴唇要圆，不要读成英语的 "choo"。',
    'q 要送气。'
  ],
  img: { src: 'img/qu.jpg', cap: "我们去……", by: "ahead4220", lic: "CC BY-SA 2.0", from: "Wikimedia Commons · 観光 (14299627671).jpg" },
  use: ['去 + 地方：去学校、去中国', '去 + 地方 + 做什么：去商店买东西', '去哪儿？'],
  ex: [
    { ctx: '日常', zh: '我 去 学校 。', py: 'Wǒ qù xuéxiào.', en: 'I am going to school.' },
    { ctx: '询问', zh: '你 去 哪儿 ？', py: 'Nǐ qù nǎr?', en: 'Where are you going?' },
    { ctx: '目的', zh: '我们 去 饭店 吃 饭 。', py: 'Wǒmen qù fàndiàn chī fàn.', en: 'We are going to a restaurant to eat.' },
    { ctx: '计划', zh: '我 想 去 中国 。', py: 'Wǒ xiǎng qù Zhōngguó.', en: 'I want to go to China.' }
  ],
  drill: [
    { t: 'choice', q: '明天我 ___ 北京。', opts: ['去', '来', '前', '请'], a: 0, why: '离开这儿到别的地方：去。' },
    { t: 'order', words: ['去', '买', '商店', '东西', '我'], a: '我去商店买东西。', en: 'I go to the shop to buy things.' },
    { t: 'choice', q: '"去"的反义词是：', opts: ['来', '回', '到', '在'], a: 0, why: '来（到这儿）↔ 去（到那儿）。' },
    { t: 'choice', say: '去', q: '听录音，选拼音。', opts: ['qù', 'jù', 'xù', 'cù'], a: 0, why: '去 qù（u 是 ü）。' }
  ],
  bop: {
    b: '老师背起包往门口走，回头挥手："我去商店。你们去哪儿？"',
    o: ['能听、说、认读"去 qù"', '能说"去 + 地方 + 做什么"', '分清"来"和"去"'],
    pre: '复习地点词和"来"。',
    p: '① 跟读 qù，练 ü 的嘴形；② 替换：去学校 / 去医院 / 去超市 + 做什么；③ 两人问答："你去哪儿？""我去……。你呢？"',
    post: '每人说一句"明天我去……"；或做本页练习 1–4。',
    s: '板书：去 + 地方 ／ 去 + 地方 + 做什么 ／ 来 ↔ 去。作业：写三句"我去……"。'
  },
  act: [
    { tag: 'TPR', name: '来和去', how: '老师说"来"学生走向老师，说"去"学生走向门口。再加地点："去黑板那儿！"' },
    { tag: '游戏', name: '去哪儿做什么', how: '一人说地点（超市），下一个人说目的（买东西），第三个人说完整的句子："我去超市买东西。"' },
    { tag: '情境表演', name: '路上见面', how: '"你好！去哪儿？""我去医院。你呢？""我去学校。再见！"' }
  ],
  teach: [
    { h: '来 / 去', p: '以说话人为中心：向说话人移动是"来"，离开说话人是"去"。' },
    { h: '语序', p: '去 + 地方 + 目的：去饭店吃饭。不说"去吃饭在饭店"。' }
  ],
  err: [
    { x: '我去到学校。', v: '我去学校。', why: '"去"后面直接加地点。' },
    { x: '我吃饭去饭店。', v: '我去饭店吃饭。', why: '先说去哪儿，再说做什么。' }
  ],
  hz: [{ c: '去', rad: '厶', radName: '私字儿', radMean: '——', struct: '上下结构', parts: '土 + 厶', tip: '古字上面是一个人（大），下面是门口——人离开家门，就是"去"。现在写成上"土"下"厶"。', fam: '有"去"的词：去年。' }],
  cul: ['中国人见面常问"去哪儿？"，这是打招呼，不一定要回答得很清楚。', '"去"还在"去年"里表示"过去的"：去年 = 过去的那一年。'],
  syn: [],
  ant: [{ w: '来', note: '到说话人这儿。' }],
  rel: ['来', '回', '到', '去年', '哪儿', '在']
},

'去年': {
  pos: [['名词', 'noun']],
  zh: ['今年的前一年。'],
  en: ['last year'],
  syl: [{ py: 'qù', i: 'q', f: 'ü', t: 4 }, { py: 'nián', i: 'n', f: 'ian', t: 2 }],
  phon: [
    '第四声 + 第二声：先全降，再往上升。',
    'qù 的 u 是 ü，嘴唇要圆。',
    'nián 里的 a 读得像 "e"。'
  ],
  img: { src: 'img/qunian.jpg', cap: "去年", by: "Mats Landin", lic: "CC0", from: "Wikimedia Commons · Ur Photografiskt Album för år 1861 öfver fångar förvarade å Landskrona fästning - NMA.0056768 (2).jpg" },
  use: ['去年 + 主语 + 动词 / 主语 + 去年 + 动词', '去年 + 数词 + 岁', '去年 — 今年 — 明年'],
  ex: [
    { ctx: '经历', zh: '我 去年 去 了 中国 。', py: 'Wǒ qùnián qù le Zhōngguó.', en: 'I went to China last year.' },
    { ctx: '年龄', zh: '去年 我 十 九 岁 。', py: 'Qùnián wǒ shíjiǔ suì.', en: 'Last year I was nineteen.' },
    { ctx: '学习', zh: '他 去年 在 中国 学习 汉语 。', py: 'Tā qùnián zài Zhōngguó xuéxí Hànyǔ.', en: 'He studied Chinese in China last year.' },
    { ctx: '天气', zh: '去年 这儿 很 冷 。', py: 'Qùnián zhèr hěn lěng.', en: 'It was cold here last year.' }
  ],
  drill: [
    { t: 'choice', q: '今年我二十岁， ___ 我十九岁。', opts: ['去年', '明年', '昨天', '明天'], a: 0, why: '今年的前一年：去年。' },
    { t: 'order', words: ['去年', '我', '北京', '去了'], a: '我去年去了北京。', alt: ['去年我去了北京。'], en: 'I went to Beijing last year.' },
    { t: 'choice', q: '按时间排列：', opts: ['去年—今年—明年', '明年—今年—去年', '今年—去年—明年', '去年—明年—今年'], a: 0, why: '过去 → 现在 → 将来。' },
    { t: 'choice', say: '去年', q: '听录音，选拼音。', opts: ['qùnián', 'qūnián', 'jùnián', 'qùniǎn'], a: 0, why: '去年 qùnián。' }
  ],
  bop: {
    b: '老师在黑板上画时间轴，写三个年份，指着中间："今年。"指后面："明年。"指前面："这是——去年！"',
    o: ['能听、说、认读"去年 qùnián"', '能说"我去年……"', '能排列"去年、今年、明年"'],
    pre: '复习"今年、明年、年"。',
    p: '① 跟读 qù、nián、qùnián；② 时间轴练习；③ 两人问答："你去年几岁？""你去年去了哪儿？"',
    post: '每人说一件去年做的事；或做本页练习 1–4。',
    s: '板书：去年 — 今年 — 明年 ／ 我去年……了。作业：写三句话：去年我……，今年我……，明年我……。'
  },
  act: [
    { tag: '游戏', name: '时间轴站位', how: '地上贴"去年、今年、明年"，老师说句子，学生跳到正确的位置。' },
    { tag: '调查', name: '去年做了什么', how: '学生互相问"你去年去了哪儿？"，把答案标在地图上。' },
    { tag: '展示', name: '照片故事', how: '学生带一张去年的照片，介绍："这是去年。我在……。"' }
  ],
  teach: [
    { h: '"去"的意思', p: '这里的"去"是"过去"的意思，不是"go"。' },
    { h: '不说"上年"', p: '"last year"说"去年"，不说"上年"。' }
  ],
  err: [
    { x: '上年我去了中国。', v: '去年我去了中国。', why: '"last year"是"去年"。' },
    { x: '我去了中国去年。', v: '我去年去了中国。', why: '时间词放在动词前面。' }
  ],
  hz: [
    { c: '去', rad: '厶', radName: '私字儿', radMean: '——', struct: '上下结构', parts: '土 + 厶', tip: '人离开家门——"去"。在"去年"里是"过去"的意思。', fam: '有"去"的词：去年。' },
    { c: '年', rad: '干', radName: '干部（有的字典归"丿"部）', radMean: '——', struct: '独体字', parts: '撇 + 横 + 横 + 竖 + 横 + 竖', tip: '人背着庄稼——一年收一次。', fam: '有"年"的词：今年、明年。' }
  ],
  cul: ['中国人过年时常回顾"去年"：去年怎么样，今年有什么希望。', '再往前一年是"前年"（超纲）：前年 — 去年 — 今年 — 明年 — 后年。'],
  syn: [],
  ant: [{ w: '明年', note: '今年的下一年。' }],
  rel: ['今年', '明年', '年', '去', '昨天']
},

'热': {
  pos: [['形容词', 'adjective']],
  zh: ['温度高；感觉温度高。'],
  en: ['hot'],
  syl: [{ py: 'rè', i: 'r', f: 'e', t: 4 }],
  phon: [
    '第四声，从高处全降。',
    'r 是卷舌音：舌尖卷起来靠近上腭，但不碰到；声带振动。不要读成英语的 r 或 l。',
    '韵母 e 嘴形扁，不圆唇。'
  ],
  img: { src: 'img/re.jpg', cap: "今天很热。", by: "Tangopaso", lic: "Public domain", from: "Wikimedia Commons · 2026 heat event in France - 43°C in Colombes 2026-june 24-03 13-24.jpg（已裁剪）" },
  use: ['天气 / 今天 + 很热', '太热了！', '热吗？ / 不热'],
  ex: [
    { ctx: '天气', zh: '今天 很 热 。', py: 'Jīntiān hěn rè.', en: 'It is hot today.' },
    { ctx: '感叹', zh: '太 热 了 ！', py: 'Tài rè le!', en: 'It is too hot!' },
    { ctx: '关心', zh: '你 热 吗 ？', py: 'Nǐ rè ma?', en: 'Are you hot?' },
    { ctx: '饮食', zh: '我 想 喝 热 水 。', py: 'Wǒ xiǎng hē rè shuǐ.', en: 'I want to drink hot water.' }
  ],
  drill: [
    { t: 'choice', q: '今天三十八度，非常 ___ 。', opts: ['热', '冷', '贵', '早'], a: 0, why: '温度高 = 热。' },
    { t: 'order', words: ['热', '太', '了', '天气'], a: '天气太热了。', en: 'The weather is too hot.' },
    { t: 'choice', q: '"热"的反义词是：', opts: ['冷', '大', '多', '新'], a: 0, why: '热 ↔ 冷。' },
    { t: 'choice', say: '热', q: '听录音，选拼音。', opts: ['rè', 'lè', 'shè', 'rì'], a: 0, why: '热 rè，第四声。' }
  ],
  bop: {
    b: '老师用手扇风、擦汗："啊——今天太热了！你们热吗？"',
    o: ['能听、说、认读"热 rè"', '能读准 r', '能说"今天很热 / 不热"'],
    pre: '复习"冷、天气、很、太……了"。',
    p: '① 跟读 rè，练 r 的发音（从 shì 延长，让声带振动）；② 看天气图片说"很热／很冷"；③ 两人问答："你热吗？""你喜欢热天还是冷天？"',
    post: '说说自己国家哪个月最热；或做本页练习 1–4。',
    s: '板书：热 ↔ 冷 ／ 很热 ／ 太热了！／ 热水。作业：看天气预报，说明天热不热。'
  },
  act: [
    { tag: 'TPR', name: '冷和热', how: '老师说"热"学生扇风、擦汗，说"冷"学生发抖；说"太热了"动作更夸张。' },
    { tag: '语音', name: 'r 音挑战', how: '练习带 r 的词：热、人、日；绕口令"日日热"。比谁的 r 最标准。' },
    { tag: '看图说话', name: '世界天气', how: '出示各地温度（广州 35℃、哈尔滨 -20℃），学生说"那儿很热／很冷"。' }
  ],
  teach: [
    { h: 'r 的发音', p: '汉语的 r 和英语的 r 不一样：从 sh 开始，让声带振动，就是 r。' },
    { h: '热水', p: '中国人习惯喝热水，饭店常给客人热水或热茶。' }
  ],
  err: [
    { x: '今天是热。', v: '今天很热。', why: '形容词前面用"很"，不用"是"。' },
    { x: 'lè', v: 'rè', why: 'r 是卷舌音，不是 l。' }
  ],
  hz: [{ c: '热', rad: '灬', radName: '四点底', radMean: '火 fire', struct: '上下结构', parts: '执 + 灬', tip: '下面的四点"灬"是火——下面有火，上面当然"热"。', fam: '四点底的字：点（一点儿）、照、熊（超纲）。' }],
  cul: ['中国人生病时常听到"多喝热水"，这几乎成了一句流行语。', '中国有"三大火炉"：重庆、武汉、南京，夏天非常热。'],
  syn: [],
  ant: [{ w: '冷', note: '温度低。' }],
  rel: ['冷', '天气', '水', '很', '太']
},

'人': {
  pos: [['名词', 'noun']],
  zh: ['人类；一个人。', '某种身份的人：中国人、家人。'],
  en: ['person; people', 'person of a certain kind: 中国人 Chinese person'],
  syl: [{ py: 'rén', i: 'r', f: 'en', t: 2 }],
  phon: [
    '第二声，从中往高升。',
    'r 是卷舌音，舌尖卷起来不碰上腭；不要读成 lén 或英语的 "run"。',
    '前鼻音 -n，不要读成 réng。'
  ],
  img: { src: 'img/ren.jpg', cap: "这儿有很多人。", by: "Jennifer Woodard Maderazo", lic: "CC BY 2.0", from: "Wikimedia Commons · Corner of Stockton and Jackson Street, crowd, San Francisco (April 2007).jpg（已裁剪）" },
  use: ['国名 + 人：中国人', '数词 + 个 + 人', '有 / 没有 + 人', '很多人'],
  ex: [
    { ctx: '国籍', zh: '我 是 中国 人 。', py: 'Wǒ shì Zhōngguó rén.', en: 'I am Chinese.' },
    { ctx: '数量', zh: '这儿 有 很 多 人 。', py: 'Zhèr yǒu hěn duō rén.', en: 'There are many people here.' },
    { ctx: '家庭', zh: '我 家 有 四 口 人 。', py: 'Wǒ jiā yǒu sì kǒu rén.', en: 'There are four people in my family.' },
    { ctx: '询问', zh: '那个 人 是 谁 ？', py: 'Nàge rén shì shéi?', en: 'Who is that person?' }
  ],
  drill: [
    { t: 'choice', q: '你是哪国 ___ ？', opts: ['人', '个', '口', '们'], a: 0, why: '哪国人 = what nationality。' },
    { t: 'order', words: ['人', '很多', '超市里', '有'], a: '超市里有很多人。', en: 'There are many people in the supermarket.' },
    { t: 'choice', q: '哪个是对的？', opts: ['我是中国。', '我是中国人。', '我是人中国。', '我中国人是。'], a: 1, why: '说国籍要加"人"。' },
    { t: 'choice', say: '人', q: '听录音，选拼音。', opts: ['rén', 'lén', 'réng', 'shén'], a: 0, why: '人 rén，第二声。' }
  ],
  bop: {
    b: '老师在黑板上写一个大大的"人"，两手叉腰、两腿分开站着："像不像？这是——人！"',
    o: ['能听、说、认读"人 rén"', '能读准 r', '能说"……国人""……个人"'],
    pre: '复习"国、哪国人、口"。',
    p: '① 跟读 rén，练 r 和前鼻音；② 国籍：中国人、……人；③ 数人：教室里有……个人；我家有……口人。',
    post: '全班问答"你是哪国人？"；或做本页练习 1–4。',
    s: '板书：人 ／ 国名 + 人 ／ 几个人？几口人？作业：写五个带"人"的词（中国人、家人……）。'
  },
  act: [
    { tag: 'TPR', name: '人字操', how: '学生用身体摆出"人"字（两腿分开），再一起摆"大"（张开手臂）、"天"（头上加一横——用书本）。' },
    { tag: '游戏', name: '"人"字家族', how: '黑板上写"人"，学生轮流加上学过的词：中国人、家人、男人……比哪组说得多。' },
    { tag: '调查', name: '数人数', how: '学生数一数教室里、学校里、家里有几个人，用"……有……个人"报告。' }
  ],
  teach: [
    { h: '国名 + 人', p: '说国籍：国名 + 人。不能说"我是中国"。' },
    { h: '个 / 口', p: '一般说"三个人"；说家里的人数常说"三口人"。' }
  ],
  err: [
    { x: '我是中国。', v: '我是中国人。', why: '国籍要加"人"。' },
    { x: 'lén', v: 'rén', why: 'r 是卷舌音，不是 l。' }
  ],
  hz: [{ c: '人', rad: '人', radName: '人部', radMean: '人 person', struct: '独体字', parts: '撇 + 捺', tip: '像一个人侧着身子迈开两条腿走路。只有两画：一撇一捺，互相支撑——人和人要互相帮助。', fam: '有"人"的字：个、会、大、天、从；单人旁"亻"：你、他、们、住、做。' }],
  cul: ['"人"字一撇一捺互相支撑，中国人常用它来说明"人和人要互相帮助"。', '中国有十四亿多人，是世界上人口最多的国家之一。'],
  syn: [],
  ant: [],
  rel: ['家人', '个', '口', '国', '大家', '男', '女']
}

});
