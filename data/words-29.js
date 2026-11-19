// HSK1 教学参考 · 第 29 批（10 词）：这个 这里 真 正在 这儿 这些 只 知道 中国 中文
window.H1_WORDS = window.H1_WORDS || {};
Object.assign(H1_WORDS, {

'这个': {
  pos: [['代词', 'pronoun']],
  zh: ['指离说话人近的一个人或东西。'],
  en: ['this; this one'],
  syl: [{ py: 'zhè', i: 'zh', f: 'e', t: 4 }, { py: 'ge', i: 'g', f: 'e', t: 0 }],
  phon: [
    '第四声 + 轻声："个"又轻又短。',
    '口语里常读成 zhèige。',
    'zh 是卷舌音。'
  ],
  img: { src: 'img/zhege.jpg', cap: "我要这个。", by: "cara fealy choate", lic: "CC BY 2.0", from: "Wikimedia Commons · Winter Wedding Cake.jpg" },
  use: ['这个 + 名词：这个人', '我要这个', '这个 ↔ 那个'],
  ex: [
    { ctx: '购物', zh: '我 要 这个 。', py: 'Wǒ yào zhège.', en: 'I want this one.' },
    { ctx: '询问', zh: '这个 多少 钱 ？', py: 'Zhège duōshao qián?', en: 'How much is this?' },
    { ctx: '指人', zh: '这个 人 是 我 的 朋友 。', py: 'Zhège rén shì wǒ de péngyou.', en: 'This person is my friend.' },
    { ctx: '课堂', zh: '这个 字 怎么 读 ？', py: 'Zhège zì zěnme dú?', en: 'How do you read this character?' }
  ],
  drill: [
    { t: 'choice', q: '我不要那个，我要 ___ 。', opts: ['这个', '那个', '哪个', '这边'], a: 0, why: '这个 ↔ 那个。' },
    { t: 'order', words: ['这个', '钱', '多少'], a: '这个多少钱？', en: 'How much is this?' },
    { t: 'choice', q: '哪一个是对的？', opts: ['这个书', '这本书', '这个本书', '这书本'], a: 1, why: '书用"本"：这本书。' },
    { t: 'choice', say: '这个', q: '听录音，选拼音。', opts: ['zhège', 'zège', 'zhègè', 'nàge'], a: 0, why: '这个 zhège。' }
  ],
  bop: {
    b: '老师在讲台上放一个苹果，远处放一个："这个、那个。你要哪个？"',
    o: ['能听、说、认读"这个 zhège"', '会说"我要这个""这个多少钱"', '分清这个 / 那个 / 哪个'],
    pre: '复习"那个、哪个、个"。',
    p: '① 跟读 zhège / zhèige；② 这个 / 那个 / 哪个；③ 买东西："这个多少钱？我要这个。"',
    post: '水果摊表演；或做本页练习 1–4。',
    s: '板书：这个（近）/ 那个（远）/ 哪个（问）。作业：写三句"这个……"。'
  },
  act: [
    { tag: '情境表演', name: '水果摊', how: '"这个多少钱？""三块。""那个呢？""两块。""我要这个。"' },
    { tag: '游戏', name: '这个那个', how: '老师指近的东西，学生说"这个"；指远的，说"那个"。' },
    { tag: '游戏', name: '量词替换', how: '老师说"这个书"，学生改正为"这本书"。' }
  ],
  teach: [
    { h: '个 / 专用量词', p: '"这个"用于人和多数东西；有专用量词的要换：这本书、这件衣服。' },
    { h: '口语', p: '"这个……"也是口语里想词时的填充词。' }
  ],
  err: [
    { x: '这个书', v: '这本书', why: '书用量词"本"。' },
    { x: '这个们', v: '这些', why: '多数用"这些"。' }
  ],
  hz: [
    { c: '这', rad: '辶', radName: '走之旁', radMean: '走路', struct: '半包围结构', parts: '文 + 辶', tip: '走到这里。', fam: '有"这"的词：这边、这里。' },
    { c: '个', rad: '人', radName: '人字头', radMean: '人', struct: '上下结构', parts: '人 + 丨', tip: '最常用的量词。', fam: '有"个"的词：那个、哪个。' }
  ],
  cul: ['在中国的饭店点菜，指着菜单说"这个、这个、还有这个"就可以了。', '口语"这个"常读 zhèige。'],
  syn: [],
  ant: [{ w: '那个', note: '离说话人远的一个。' }],
  rel: ['这', '个', '那个', '哪个', '这些']
},

'这里': {
  pos: [['代词', 'pronoun']],
  zh: ['这个地方（离说话人近的地方）。'],
  en: ['here; this place'],
  syl: [{ py: 'zhè', i: 'zh', f: 'e', t: 4 }, { py: 'lǐ', i: 'l', f: 'i', t: 3 }],
  phon: [
    '第四声 + 第三声；口语里"里"常读轻声：zhèli。',
    'zh 是卷舌音。',
    'l 不要读成 n。'
  ],
  img: { src: 'img/zheli.jpg', cap: "这里", by: "Kenneth Allen", lic: "CC BY-SA 2.0", from: "Wikimedia Commons · Stand here marker, Omagh - geograph.org.uk - 6483042.jpg" },
  use: ['在 + 这里', '这里 + 有 / 很……', '这里 ↔ 那里'],
  ex: [
    { ctx: '位置', zh: '我 在 这里 。', py: 'Wǒ zài zhèlǐ.', en: 'I am here.' },
    { ctx: '描述', zh: '这里 很 漂亮 。', py: 'Zhèlǐ hěn piàoliang.', en: 'It is beautiful here.' },
    { ctx: '存在', zh: '这里 有 很 多 书 。', py: 'Zhèlǐ yǒu hěn duō shū.', en: 'There are many books here.' },
    { ctx: '指引', zh: '请 坐 在 这里 。', py: 'Qǐng zuò zài zhèlǐ.', en: 'Please sit here.' }
  ],
  drill: [
    { t: 'choice', q: '你的书在 ___ ，给你。', opts: ['这里', '这个', '这些', '哪里'], a: 0, why: '说地方用"这里"。' },
    { t: 'order', words: ['这里', '很', '冷'], a: '这里很冷。', en: 'It is cold here.' },
    { t: 'choice', q: '"这里"的反义词是：', opts: ['那里', '哪里', '里边', '外边'], a: 0, why: '这里 ↔ 那里。' },
    { t: 'choice', say: '这里', q: '听录音，选拼音。', opts: ['zhèlǐ', 'zèlǐ', 'zhènǐ', 'nàlǐ'], a: 0, why: '这里 zhèlǐ。' }
  ],
  bop: {
    b: '老师拍拍讲台："我在这里。"指向远处的学生："你在那里。"',
    o: ['能听、说、认读"这里 zhèlǐ"', '能说"在这里""这里很……"', '掌握"这里 / 那里 / 哪里"'],
    pre: '复习"那里、哪里、在"。',
    p: '① 跟读 zhèlǐ；② 这里 / 那里 / 哪里；③ 描述："这里很……""这里有……"。',
    post: '介绍自己的城市："这里……"；或做本页练习 1–4。',
    s: '板书：这里（近）/ 那里（远）/ 哪里（问）＝ 这儿 / 那儿 / 哪儿。作业：写三句话介绍你住的地方。'
  },
  act: [
    { tag: 'TPR', name: '这里那里', how: '老师说"这里"学生拍桌子，说"那里"指远处，说"哪里"做疑问手势。' },
    { tag: '展示', name: '我的城市', how: '学生介绍："这里是……。这里很……。这里有……。"' },
    { tag: '游戏', name: '在这里', how: '老师藏东西，学生找到后说"在这里！"' }
  ],
  teach: [
    { h: '三组近义词', p: '这里 = 这儿 = 这边（略）；那里 = 那儿 = 那边；哪里 = 哪儿。' },
    { h: '南北差别', p: '南方多说"这里"，北方多说"这儿"。' }
  ],
  err: [
    { x: '我在这。', v: '我在这里。 / 我在这儿。', why: '"这"单用不表示地方。' },
    { x: 'zhènǐ', v: 'zhèlǐ', why: 'l 不要读成 n。' }
  ],
  hz: [
    { c: '这', rad: '辶', radName: '走之旁', radMean: '走路', struct: '半包围结构', parts: '文 + 辶', tip: '走到这里。', fam: '有"这"的词：这边、这儿。' },
    { c: '里', rad: '里', radName: '里部', radMean: '村子', struct: '独体字', parts: '田 + 土', tip: '有田有土的地方。', fam: '有"里"的词：那里、哪里。' }
  ],
  cul: ['"这里"在南方和台湾用得多。', '中国人带客人参观时常说"这里是……"。'],
  syn: [{ w: '这儿', note: '口语，北方多用。' }, { w: '这边', note: '强调方向。' }],
  ant: [{ w: '那里', note: '离说话人远的地方。' }],
  rel: ['这', '里', '这儿', '这边', '那里', '哪里']
},

'真': {
  pos: [['副词', 'adverb'], ['形容词', 'adjective']],
  zh: ['（副词）的确，实在（带感叹）：真好！', '（形容词）真实的，不是假的。'],
  en: ['really; truly (exclamatory)', 'real; true'],
  syl: [{ py: 'zhēn', i: 'zh', f: 'en', t: 1 }],
  phon: [
    '第一声，高而平。',
    'zh 是卷舌音。',
    '前鼻音 -n，不要读成 zhēng。'
  ],
  img: { src: 'img/zhen.jpg', cap: "真漂亮！", by: "Babin Dulal", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Amazing Sunset of Pheriche.jpg" },
  use: ['真 + 形容词：真好、真漂亮', '真的吗？', '真 + 喜欢'],
  ex: [
    { ctx: '称赞', zh: '你 的 衣服 真 漂亮 ！', py: 'Nǐ de yīfu zhēn piàoliang!', en: 'Your clothes are really pretty!' },
    { ctx: '天气', zh: '今天 真 冷 ！', py: 'Jīntiān zhēn lěng!', en: 'It is really cold today!' },
    { ctx: '感叹', zh: '这个 菜 真 好吃 ！', py: 'Zhège cài zhēn hǎochī!', en: 'This dish is really delicious!' },
    { ctx: '确认', zh: '真 的 吗 ？', py: 'Zhēn de ma?', en: 'Really?' }
  ],
  drill: [
    { t: 'choice', q: '你的汉字写得 ___ 好！', opts: ['真', '很多', '是', '有'], a: 0, why: '感叹：真好！' },
    { t: 'order', words: ['真', '这儿', '漂亮'], a: '这儿真漂亮！', en: 'It is really beautiful here!' },
    { t: 'choice', q: '"真"和"很"：', opts: ['"真"带感叹语气', '一样', '"很"更强烈', '都不能用'], a: 0, why: '真好！（感叹）' },
    { t: 'choice', say: '真', q: '听录音，选拼音。', opts: ['zhēn', 'zhēng', 'zēn', 'zhèn'], a: 0, why: '真 zhēn，第一声。' }
  ],
  bop: {
    b: '老师看到一张美丽的风景照，惊叹："哇，真漂亮！"',
    o: ['能听、说、认读"真 zhēn"', '会用"真 + 形容词"感叹', '会问"真的吗？"'],
    pre: '复习"很、非常、太、漂亮、好吃"。',
    p: '① 跟读 zhēn；② 感叹：真好！真漂亮！真好吃！；③ "真的吗？"表示惊讶。',
    post: '互相称赞；或做本页练习 1–4。',
    s: '板书：真 + 形容词！／ 真的吗？／ 很（陈述）· 真（感叹）。作业：用"真……"称赞家人三次。'
  },
  act: [
    { tag: '游戏', name: '夸夸你', how: '学生互相称赞："你的字真好看！""你的汉语真好！"' },
    { tag: '情境表演', name: '真的吗', how: '一人说一件惊人的事（"明天不上课"），另一人惊讶："真的吗？"' },
    { tag: '看图说话', name: '真……', how: '出示美食、美景，学生用"真……！"感叹。' }
  ],
  teach: [
    { h: '真 / 很', p: '"真"带感叹语气，多用于口语；不能用在"的"前修饰名词（✗ 真漂亮的衣服）。' },
    { h: '真的', p: '"真的吗？"= Really?' }
  ],
  err: [
    { x: '她是一个真漂亮的女孩。', v: '她是一个很漂亮的女孩。', why: '"真"不放在"的"字结构里。' },
    { x: 'zhēng', v: 'zhēn', why: '"真"是前鼻音。' }
  ],
  hz: [{ c: '真', rad: '十', radName: '十部（有的字典归"目"部）', radMean: '——', struct: '上下结构', parts: '十 + 具（目 + 八）', tip: '中间有"目"（眼睛）——亲眼看到的，就是"真"的。', fam: '有"目"的字：看、睡。' }],
  cul: ['中国人称赞时常说"真棒""真厉害"（超纲）。', '"真"和"假"是一对：真的 / 假的。'],
  syn: [{ w: '很', note: '陈述。' }, { w: '非常', note: '程度高。' }, { w: '太', note: '太……了。' }],
  ant: [],
  rel: ['很', '非常', '太', '好', '漂亮']
},

'正在': {
  pos: [['副词', 'adverb']],
  zh: ['表示动作在进行中。'],
  en: ['in the process of; be doing (right now)'],
  syl: [{ py: 'zhèng', i: 'zh', f: 'eng', t: 4 }, { py: 'zài', i: 'z', f: 'ai', t: 4 }],
  phon: [
    '两个第四声连读：两个字都要降。',
    'zhèng 是卷舌、后鼻音；zài 是平舌。',
    'zh 和 z 要分清。'
  ],
  img: { src: 'img/zhengzai.jpg', cap: "他正在做饭。", by: "Sunnya343", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Chef cooking Mysore masala dosa in Mysuru, July 2013.jpg" },
  use: ['正在 + 动词', '正在 + 动词 + 呢', '……的时候，……正在……'],
  ex: [
    { ctx: '进行', zh: '我 正在 吃 饭 。', py: 'Wǒ zhèngzài chī fàn.', en: 'I am eating right now.' },
    { ctx: '电话', zh: '他 正在 上课 。', py: 'Tā zhèngzài shàngkè.', en: 'He is in class right now.' },
    { ctx: '进行', zh: '妈妈 正在 做饭 呢 。', py: 'Māma zhèngzài zuòfàn ne.', en: 'Mom is cooking right now.' },
    { ctx: '询问', zh: '你 正在 做 什么 ？', py: 'Nǐ zhèngzài zuò shénme?', en: 'What are you doing right now?' }
  ],
  drill: [
    { t: 'choice', q: '别打电话，老师 ___ 上课。', opts: ['正在', '再', '已经', '要'], a: 0, why: '动作在进行：正在。' },
    { t: 'order', words: ['正在', '我', '看书'], a: '我正在看书。', en: 'I am reading right now.' },
    { t: 'choice', q: '"正在"和"在"：', opts: ['都表示进行，"正在"更强调"此刻"', '意思相反', '"在"表示过去', '都表示将来'], a: 0, why: '正在 ≈ 在（进行）。' },
    { t: 'choice', say: '正在', q: '听录音，选拼音。', opts: ['zhèngzài', 'zhènzài', 'zèngzài', 'zhèngzhài'], a: 0, why: '正在 zhèngzài。' }
  ],
  bop: {
    b: '老师在黑板上写字，问："我正在做什么？——你正在写字！"',
    o: ['能听、说、认读"正在 zhèngzài"', '能说"正在 + 动词（+ 呢）"', '复习"在"的进行用法'],
    pre: '复习"在 + 动词""呢"。',
    p: '① 跟读 zhèngzài；② 看动作说话："他正在……"；③ 正在……呢。',
    post: '"你正在做什么？"打电话游戏；或做本页练习 1–4。',
    s: '板书：正在 + 动词（+ 呢）＝ 在 + 动词 ＝ 动词 + 呢。作业：写三句"……正在……"。'
  },
  act: [
    { tag: '游戏', name: '他正在做什么', how: '一人做动作，全班说"他正在……"。' },
    { tag: '情境表演', name: '打电话', how: '"喂，你正在做什么？""我正在吃饭。"' },
    { tag: '看图说话', name: '一家人', how: '看一家人的图："爸爸正在看电视，妈妈正在做饭……"' }
  ],
  teach: [
    { h: '正在 / 在 / 呢', p: '三个都表示进行：正在吃饭 / 在吃饭 / 吃饭呢，可以组合。' },
    { h: '否定', p: '否定用"没（有）在……"，HSK1 阶段了解就可以。' }
  ],
  err: [
    { x: '我正在吃饭了。', v: '我正在吃饭。', why: '进行时不加"了"。' },
    { x: '正在我看书。', v: '我正在看书。', why: '"正在"在主语后面。' }
  ],
  hz: [
    { c: '正', rad: '止', radName: '止部（有的字典归"一"部）', radMean: '脚 foot', struct: '独体字', parts: '一 + 止', tip: '下面"止"是脚，上面一横是目标——脚正对着目标走，就是"正"。', fam: '有"正"的字：是（下面）。' },
    { c: '在', rad: '土', radName: '土部', radMean: '土', struct: '半包围结构', parts: '𠂇 + 土', tip: '人在土地上——存在、正在。', fam: '有"在"的词：现在、正在。' }
  ],
  cul: ['中国人打电话常问"你在干什么呢？"（"干"超纲口语）。', '"正"还有"正好"的意思：正好八点（拓展）。'],
  syn: [{ w: '在', note: '进行。' }, { w: '呢', note: '放句尾表示进行。' }],
  ant: [],
  rel: ['在', '呢', '现在', '时候']
},

'这儿': {
  pos: [['代词', 'pronoun']],
  zh: ['这个地方（口语）。'],
  en: ['here (spoken)'],
  syl: [{ py: 'zhèr', i: 'zh', f: 'er', t: 4 }],
  phon: [
    '儿化音：两个字读一个音节 zhèr，舌头卷起来。',
    '第四声，从高处全降。',
    '不要读成两个音节 zhè-ér。'
  ],
  img: { src: 'img/zher.jpg', cap: "我在这儿！", by: "Viktoria.sm2012", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Uchit 0.jpg" },
  use: ['在 + 这儿', '来 + 这儿', '这儿 + 有 / 很……'],
  ex: [
    { ctx: '位置', zh: '我 在 这儿 ！', py: 'Wǒ zài zhèr!', en: 'I am here!' },
    { ctx: '邀请', zh: '你 来 这儿 吧 。', py: 'Nǐ lái zhèr ba.', en: 'Come here.' },
    { ctx: '描述', zh: '这儿 的 菜 很 好吃 。', py: 'Zhèr de cài hěn hǎochī.', en: 'The food here is tasty.' },
    { ctx: '找东西', zh: '你 的 手机 在 这儿 。', py: 'Nǐ de shǒujī zài zhèr.', en: 'Your phone is here.' }
  ],
  drill: [
    { t: 'choice', q: '你的书在 ___ ，给你。', opts: ['这儿', '这个', '这些', '哪儿'], a: 0, why: '说地方：这儿。' },
    { t: 'order', words: ['这儿', '很', '冷'], a: '这儿很冷。', en: 'It is cold here.' },
    { t: 'choice', q: '"这儿"读几个音节？', opts: ['一个', '两个', '三个', '没有'], a: 0, why: '儿化：zhèr。' },
    { t: 'choice', say: '这儿', q: '听录音，选拼音。', opts: ['zhèr', 'zhè\'ér', 'nàr', 'nǎr'], a: 0, why: '这儿 zhèr。' }
  ],
  bop: {
    b: '老师举手："我在这儿！"让学生一个个举手说"我在这儿！"（像点名）。',
    o: ['能听、说、认读"这儿 zhèr"', '读准儿化音', '完成儿化三兄弟：这儿、那儿、哪儿'],
    pre: '复习"那儿、哪儿"。',
    p: '① 跟读 zhè → zhèr；② 儿化三兄弟：这儿 / 那儿 / 哪儿；③ 点名游戏："……在这儿吗？""我在这儿！"',
    post: '"东西在哪儿？——在这儿！"；或做本页练习 1–4。',
    s: '板书：这儿 / 那儿 / 哪儿 ＝ 这里 / 那里 / 哪里。作业：用三个儿化词各写一句。'
  },
  act: [
    { tag: '日常活动', name: '点名', how: '老师点名，学生举手说"我在这儿！"' },
    { tag: '语音', name: '儿化三兄弟', how: '"这儿、那儿、哪儿"连读十遍，比谁卷舌最好。' },
    { tag: '游戏', name: '在这儿', how: '藏东西游戏，找到的人说"在这儿！"' }
  ],
  teach: [
    { h: '儿化', p: '"这儿"读 zhèr，一个音节。南方常说"这里"。' },
    { h: '近义', p: '这儿 = 这里 ≈ 这边。' }
  ],
  err: [
    { x: 'zhè-ér', v: 'zhèr', why: '儿化，一个音节。' },
    { x: '我在这。', v: '我在这儿。', why: '"这"单用不表示地方。' }
  ],
  hz: [
    { c: '这', rad: '辶', radName: '走之旁', radMean: '走路', struct: '半包围结构', parts: '文 + 辶', tip: '走到这里。', fam: '有"这"的词：这里、这边。' },
    { c: '儿', rad: '儿', radName: '儿部', radMean: '孩子', struct: '独体字', parts: '撇 + 竖弯钩', tip: '只表示儿化。', fam: '儿化的词：那儿、哪儿。' }
  ],
  cul: ['北京人说话儿化很多，"这儿、那儿、哪儿"是最常见的。', '学校点名时学生回答"到！"或"我在这儿！"'],
  syn: [{ w: '这里', note: '书面一点。' }, { w: '这边', note: '强调方向。' }],
  ant: [{ w: '那儿', note: 'there。' }],
  rel: ['这', '这里', '这边', '那儿', '哪儿']
},

'这些': {
  pos: [['代词', 'pronoun']],
  zh: ['指离说话人近的两个以上的人或东西。'],
  en: ['these'],
  syl: [{ py: 'zhè', i: 'zh', f: 'e', t: 4 }, { py: 'xiē', i: 'x', f: 'ie', t: 1 }],
  phon: [
    '第四声 + 第一声：先全降，再高平。口语里"些"常读轻声。',
    '口语里常读 zhèixiē。',
    'zh（卷舌）和 x（舌面）要分清。'
  ],
  img: { src: 'img/zhexie.jpg', cap: "这些书", by: "Brett", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · A pile of English grammar books.png" },
  use: ['这些 + 名词', '这些 + 是……', '这些 + 都……'],
  ex: [
    { ctx: '所属', zh: '这些 书 是 我 的 。', py: 'Zhèxiē shū shì wǒ de.', en: 'These books are mine.' },
    { ctx: '询问', zh: '这些 是 什么 ？', py: 'Zhèxiē shì shénme?', en: 'What are these?' },
    { ctx: '购物', zh: '这些 苹果 多少 钱 ？', py: 'Zhèxiē píngguǒ duōshao qián?', en: 'How much are these apples?' },
    { ctx: '描述', zh: '这些 人 都 是 学生 。', py: 'Zhèxiē rén dōu shì xuésheng.', en: 'These people are all students.' }
  ],
  drill: [
    { t: 'choice', q: '___ 衣服都是新的。', opts: ['这些', '这个', '这儿', '这边'], a: 0, why: '很多件衣服：这些。' },
    { t: 'order', words: ['这些', '是', '我的', '书'], a: '这些书是我的。', en: 'These books are mine.' },
    { t: 'choice', q: '哪一个是对的？', opts: ['这些本书', '这些书', '这些个书', '书这些'], a: 1, why: '"这些"后面不加量词。' },
    { t: 'choice', say: '这些', q: '听录音，选拼音。', opts: ['zhèxiē', 'zèxiē', 'zhèshiē', 'nàxiē'], a: 0, why: '这些 zhèxiē。' }
  ],
  bop: {
    b: '老师抱起一堆书："这本书……不对，这么多——这些书！"',
    o: ['能听、说、认读"这些 zhèxiē"', '能说"这些 + 名词"', '完成"些"家族'],
    pre: '复习"这个、那些、些"。',
    p: '① 跟读 zhèxiē；② 这个 → 这些；③ 这些 / 那些 / 哪些 / 一些 / 有些。',
    post: '购物表演"这些多少钱？"；或做本页练习 1–4。',
    s: '板书：这个（一）→ 这些（多）／ 这些 + 名词（✗ 量词）。作业：用"这些"写三句话。'
  },
  act: [
    { tag: 'TPR', name: '一个还是很多', how: '老师拿一样东西说"这个"，拿一堆说"这些"，学生跟说。' },
    { tag: '情境表演', name: '买水果', how: '"这些苹果多少钱？""十块。""我要这些。"' },
    { tag: '游戏', name: '些家族', how: '学生说出"这些、那些、哪些、一些、有些"并各造一句。' }
  ],
  teach: [
    { h: '不加量词', p: '这些书（✗ 这些本书）。' },
    { h: '读音', p: '口语里"这些"常读 zhèixiē。' }
  ],
  err: [
    { x: '这些本书', v: '这些书', why: '不加量词。' },
    { x: '这些人们', v: '这些人', why: '不加"们"。' }
  ],
  hz: [
    { c: '这', rad: '辶', radName: '走之旁', radMean: '走路', struct: '半包围结构', parts: '文 + 辶', tip: '走到这里。', fam: '有"这"的词：这个、这里。' },
    { c: '些', rad: '二', radName: '二部', radMean: '——', struct: '上下结构', parts: '此 + 二', tip: '不只一个。', fam: '有"些"的词：那些、一些。' }
  ],
  cul: ['"这些年"是中国人回忆时常用的说法："这些年你好吗？"', '口语读 zhèixiē。'],
  syn: [],
  ant: [{ w: '那些', note: '离说话人远的多个。' }],
  rel: ['这', '些', '这个', '那些', '哪些', '一些']
},

'只': {
  pos: [['量词', 'measure word']],
  zh: ['（量词，读 zhī）用于小动物：一只猫、两只狗。', '（拓展，副词，读 zhǐ）仅仅：只有一个。'],
  en: ['(measure word, zhī) for small animals', '(extension, adverb zhǐ) only; just'],
  syl: [{ py: 'zhī', i: 'zh', f: '-i', t: 1 }],
  phon: [
    '量词读第一声 zhī。',
    '副词"只（only）"读第三声 zhǐ（拓展）。',
    'zh 是卷舌音，韵母不是 "ee"。'
  ],
  img: { src: 'img/zhi.jpg', cap: "一只猫", by: "James St. John", lic: "CC BY 2.0", from: "Wikimedia Commons · Momma Cat in the cat tree 2 (48763023117).jpg" },
  use: ['数词 + 只 + 动物：一只猫', '这 / 那 + 只 + 动物', '（拓展）只 zhǐ + 动词：只有'],
  ex: [
    { ctx: '宠物', zh: '我 家 有 一 只 猫 。', py: 'Wǒ jiā yǒu yì zhī māo.', en: 'My family has a cat.' },
    { ctx: '数量', zh: '他 有 两 只 狗 。', py: 'Tā yǒu liǎng zhī gǒu.', en: 'He has two dogs.' },
    { ctx: '指示', zh: '这 只 猫 很 漂亮 。', py: 'Zhè zhī māo hěn piàoliang.', en: 'This cat is pretty.' },
    { ctx: '询问', zh: '你 家 有 几 只 狗 ？', py: 'Nǐ jiā yǒu jǐ zhī gǒu?', en: 'How many dogs does your family have?' }
  ],
  drill: [
    { t: 'choice', q: '我家有三 ___ 猫。', opts: ['只', '个', '本', '件'], a: 0, why: '小动物用"只"。' },
    { t: 'order', words: ['只', '一', '狗', '我有'], a: '我有一只狗。', en: 'I have a dog.' },
    { t: 'choice', q: '哪个搭配是对的？', opts: ['一只书', '一只猫', '一只衣服', '一只人'], a: 1, why: '只 + 小动物。' },
    { t: 'choice', say: '只', q: '听录音，选拼音（量词）。', opts: ['zhī', 'zhǐ', 'zī', 'jī'], a: 0, why: '量词"只"读 zhī。' }
  ],
  bop: {
    b: '老师出示一张猫的照片："一个猫？不对——一只猫！"',
    o: ['能听、说、认读"只 zhī"', '能说"数词 + 只 + 动物"', '知道"只"还读 zhǐ（拓展）'],
    pre: '复习"猫、狗、个、几"。',
    p: '① 跟读 zhī；② 数动物：一只猫、两只狗；③ 量词分类：个、本、件、只、口。',
    post: '量词配对游戏；或做本页练习 1–4。',
    s: '板书：一只猫 / 两只狗 ／ 个（人）、本（书）、件（衣服）、只（动物）、口（家人）。作业：写一写你喜欢的动物，用"只"。'
  },
  act: [
    { tag: '游戏', name: '量词配对', how: '名词卡和量词卡配对：猫—只，书—本，衣服—件，人—个。' },
    { tag: '看图说话', name: '数动物', how: '出示动物园图片，学生说"有三只……"。' },
    { tag: '调查', name: '家里的动物', how: '学生互相问"你家有几只猫／狗？"' }
  ],
  teach: [
    { h: '多音字', p: 'zhī（量词，一只猫）/ zhǐ（副词，只有、只是，HSK2）。大纲列的是量词 zhī。' },
    { h: '适用范围', p: '"只"用于大多数小动物和鸟；也用于成对东西中的一个：一只手（拓展）。' }
  ],
  err: [
    { x: '一个猫', v: '一只猫', why: '动物用"只"。' },
    { x: '一只 zhǐ 猫', v: '一只 zhī 猫', why: '量词读第一声。' }
  ],
  hz: [{ c: '只', rad: '口', radName: '口部', radMean: '嘴', struct: '上下结构', parts: '口 + 八', tip: '上面"口"，下面"八"。繁体字是"隻"（手里抓着一只鸟）和"只"两个字，简体字合成了一个。', fam: '有"口"的字：叫、吃、喝。' }],
  cul: ['繁体字"隻"是一只手（又）抓着一只鸟（隹），所以"只"用来数鸟和小动物。', '"只"zhǐ（only）也很常用：我只有一个哥哥（HSK2）。'],
  syn: [],
  ant: [],
  rel: ['猫', '狗', '个', '几', '本', '件']
},

'知道': {
  pos: [['动词', 'verb']],
  zh: ['对某件事有了解，有这个信息。'],
  en: ['to know (a fact)'],
  syl: [{ py: 'zhī', i: 'zh', f: '-i', t: 1 }, { py: 'dào', i: 'd', f: 'ao', t: 4 }],
  phon: [
    '第一声 + 第四声。大纲标 zhīdào；口语里"道"常读轻声 zhīdao。',
    'zh 是卷舌音。',
    '"不知道"读 bù zhīdào。'
  ],
  img: { src: 'img/zhidao.jpg', cap: "我知道了！", by: "Jorge Royan", lic: "CC BY-SA 3.0", from: "Wikimedia Commons · Lightbulb - 6731.jpg" },
  use: ['知道 + 事情', '我不知道', '你知道……吗？'],
  ex: [
    { ctx: '回答', zh: '我 不 知道 。', py: 'Wǒ bù zhīdào.', en: 'I do not know.' },
    { ctx: '询问', zh: '你 知道 他 的 名字 吗 ？', py: 'Nǐ zhīdào tā de míngzi ma?', en: 'Do you know his name?' },
    { ctx: '确认', zh: '我 知道 了 。', py: 'Wǒ zhīdào le.', en: 'I see. / Got it.' },
    { ctx: '询问', zh: '你 知道 医院 在 哪儿 吗 ？', py: 'Nǐ zhīdào yīyuàn zài nǎr ma?', en: 'Do you know where the hospital is?' }
  ],
  drill: [
    { t: 'choice', q: 'A：他是谁？　B：我不 ___ 。', opts: ['知道', '认识', '觉得', '喜欢'], a: 0, why: '不知道 = I don\'t know。' },
    { t: 'order', words: ['知道', '了', '我'], a: '我知道了。', en: 'I see.' },
    { t: 'choice', q: '"知道"和"认识"：', opts: ['知道是有信息，认识是见过、认得', '一样', '认识是信息', '都不对'], a: 0, why: '知道名字，不一定认识人。' },
    { t: 'choice', say: '知道', q: '听录音，选拼音。', opts: ['zhīdào', 'zīdào', 'zhīdǎo', 'zhìdào'], a: 0, why: '知道 zhīdào。' }
  ],
  bop: {
    b: '老师问一个难题："中国有多少人？"学生耸肩。老师示范："我不知道。"',
    o: ['能听、说、认读"知道 zhīdào"', '会说"我知道 / 不知道 / 知道了"', '分清"知道"和"认识"'],
    pre: '复习"认识、觉得"。',
    p: '① 跟读 zhīdào；② 回答：我知道、我不知道、我知道了；③ 知道（信息）/ 认识（人、字）。',
    post: '问答游戏："你知道……吗？"；或做本页练习 1–4。',
    s: '板书：知道（信息）/ 认识（人、字）／ 我不知道 ／ 我知道了。作业：写三个"你知道……吗？"问题问朋友。'
  },
  act: [
    { tag: '游戏', name: '知不知道', how: '老师问常识题，学生回答"我知道！是……"或"我不知道。"' },
    { tag: '日常活动', name: '知道了', how: '老师布置任务后，学生回答"知道了！"' },
    { tag: '游戏', name: '知道还是认识', how: '老师说句子（我……他的名字 / 我……他），学生选"知道"或"认识"。' }
  ],
  teach: [
    { h: '知道 / 认识', p: '知道 + 事情（名字、地址）；认识 + 人、字、路。' },
    { h: '知道了', p: '"知道了"= I see / Got it，很常用。' }
  ],
  err: [
    { x: '我知道他。（想说见过他）', v: '我认识他。', why: '认识人用"认识"。' },
    { x: '我没知道。', v: '我不知道。', why: '"知道"用"不"否定。' }
  ],
  hz: [
    { c: '知', rad: '矢', radName: '矢字旁', radMean: '箭 arrow', struct: '左右结构', parts: '矢 + 口', tip: '左边"矢"是箭，右边"口"——说话像箭一样快、准，因为"知道"。', fam: '有"口"的字：叫、吃。' },
    { c: '道', rad: '辶', radName: '走之旁', radMean: '走路', struct: '半包围结构', parts: '首 + 辶', tip: '"首"是头，"辶"是走——头脑带着脚走的路，就是"道"。知道路，就是"知道"。', fam: '走之旁的字：这、边、还。' }
  ],
  cul: ['孔子说："知之为知之，不知为不知，是知也。"——知道就说知道，不知道就说不知道，这才是真正的智慧。', '"知道了"在中国人说话里非常常用。'],
  syn: [],
  ant: [{ w: '不知道', note: 'HSK1 阶段用否定式。' }],
  rel: ['认识', '觉得', '想', '了']
},

'中国': {
  pos: [['名词', 'noun']],
  zh: ['国家名，亚洲东部的国家。'],
  en: ['China'],
  syl: [{ py: 'Zhōng', i: 'zh', f: 'ong', t: 1 }, { py: 'guó', i: 'g', f: 'uo', t: 2 }],
  phon: [
    '第一声 + 第二声：先高平，再往上升。',
    'zhōng 是卷舌、后鼻音。',
    '拼音专名首字母大写：Zhōngguó。'
  ],
  img: { src: 'img/zhongguo.jpg', cap: "中国", by: "CEphoto, Uwe Aranas", lic: "CC BY-SA 3.0", from: "Wikimedia Commons · Badaling China Great-Wall-of-China-06.jpg" },
  use: ['中国 + 人', '去 / 在 + 中国', '中国 + 菜 / 茶'],
  ex: [
    { ctx: '国籍', zh: '我 是 中国 人 。', py: 'Wǒ shì Zhōngguó rén.', en: 'I am Chinese.' },
    { ctx: '计划', zh: '我 想 去 中国 。', py: 'Wǒ xiǎng qù Zhōngguó.', en: 'I want to go to China.' },
    { ctx: '描述', zh: '中国 很 大 。', py: 'Zhōngguó hěn dà.', en: 'China is big.' },
    { ctx: '爱好', zh: '我 喜欢 中国 菜 。', py: 'Wǒ xǐhuan Zhōngguó cài.', en: 'I like Chinese food.' }
  ],
  drill: [
    { t: 'choice', q: '我是 ___ 人，我说汉语。', opts: ['中国', '中文', '中午', '中学'], a: 0, why: '国籍：中国人。' },
    { t: 'order', words: ['中国', '去', '想', '我'], a: '我想去中国。', en: 'I want to go to China.' },
    { t: 'choice', q: '"中国"的拼音怎么写？', opts: ['Zhōngguó', 'zhōngguó', 'ZhōngGuó', 'Zhongguo'], a: 0, why: '专名首字母大写，连写。' },
    { t: 'choice', say: '中国', q: '听录音，选拼音。', opts: ['Zhōngguó', 'Zōngguó', 'Zhōngguǒ', 'Zhòngguó'], a: 0, why: '中国 Zhōngguó。' }
  ],
  bop: {
    b: '老师出示世界地图，指着中国："这是哪儿？——中国！"',
    o: ['能听、说、认读"中国 Zhōngguó"', '能说"中国人""去中国"', '了解"中国"的意思'],
    pre: '复习"国、哪国人、去"。',
    p: '① 跟读 Zhōngguó；② 中国人、中国菜、中国茶；③ 问答："你去过中国吗？""你想去中国哪儿？"',
    post: '说一个你知道的中国城市；或做本页练习 1–4。',
    s: '板书：中国 = 中 + 国（中间的国家）／ 中国人、中国菜。作业：写三样你喜欢的"中国……"。'
  },
  act: [
    { tag: '文化体验', name: '地图之旅', how: '在中国地图上找北京、上海、西安，学生说"我想去……"。' },
    { tag: '游戏', name: '中国……', how: '学生接龙说"中国人、中国菜、中国茶……"' },
    { tag: '展示', name: '我知道的中国', how: '每人说一件关于中国的事。' }
  ],
  teach: [
    { h: '意思', p: '"中国"= 中间的国家，古人认为中国在天下的中心。' },
    { h: '拼音', p: '国名拼音首字母大写，两个音节连写：Zhōngguó。' }
  ],
  err: [
    { x: '我是中国。', v: '我是中国人。', why: '国籍加"人"。' },
    { x: 'Zōngguó', v: 'Zhōngguó', why: '"中"是卷舌音。' }
  ],
  hz: [
    { c: '中', rad: '丨', radName: '竖部', radMean: '——', struct: '独体字', parts: '口 + 丨', tip: '一竖从"口"的正中间穿过——"中"就是中间。', fam: '有"中"的词：中文、中午、中学。' },
    { c: '国', rad: '囗', radName: '国字框', radMean: '围起来', struct: '全包围结构', parts: '囗 + 玉', tip: '边界里面守着玉（宝贝）。', fam: '国字框的字：回、四。' }
  ],
  cul: ['中国有十四亿多人口，五十六个民族。', '中国的首都是北京。'],
  syn: [],
  ant: [],
  rel: ['国', '中文', '汉语', '人', '去']
},

'中文': {
  pos: [['名词', 'noun']],
  zh: ['中国的语言和文字，特别指汉语。'],
  en: ['Chinese (language and writing)'],
  syl: [{ py: 'Zhōng', i: 'zh', f: 'ong', t: 1 }, { py: 'wén', i: 'w', f: 'en', t: 2 }],
  phon: [
    '第一声 + 第二声：先高平，再往上升。',
    'zhōng 后鼻音，wén 前鼻音。',
    'w 要圆唇。'
  ],
  img: { src: 'img/zhongwen.jpg', cap: "中文", by: "Thankei", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Free newspaper \"Welcome to OSAKA! for Chinese tourist\" is produced in collaboration with Osaka Convention & Tourism Bureaum, and Sankei Shimbun (Japanese Newspaper).jpg" },
  use: ['说 / 学 / 写 + 中文', '中文 + 书 / 名字 / 歌', '会说中文'],
  ex: [
    { ctx: '能力', zh: '我 会 说 中文 。', py: 'Wǒ huì shuō Zhōngwén.', en: 'I can speak Chinese.' },
    { ctx: '学习', zh: '我 学习 中文 。', py: 'Wǒ xuéxí Zhōngwén.', en: 'I study Chinese.' },
    { ctx: '名字', zh: '你 有 中文 名字 吗 ？', py: 'Nǐ yǒu Zhōngwén míngzi ma?', en: 'Do you have a Chinese name?' },
    { ctx: '阅读', zh: '这 是 一 本 中文 书 。', py: 'Zhè shì yì běn Zhōngwén shū.', en: 'This is a Chinese book.' }
  ],
  drill: [
    { t: 'choice', q: '我会写一点儿 ___ 。', opts: ['中文', '中国', '中午', '中学'], a: 0, why: '写中文。' },
    { t: 'order', words: ['中文', '有', '你', '名字', '吗'], a: '你有中文名字吗？', en: 'Do you have a Chinese name?' },
    { t: 'choice', q: '"中文"和"汉语"：', opts: ['意思差不多', '完全不一样', '中文是国家', '汉语是文字'], a: 0, why: '都可以指 Chinese language。' },
    { t: 'choice', say: '中文', q: '听录音，选拼音。', opts: ['Zhōngwén', 'Zhōngwēn', 'Zōngwén', 'Zhōngwéng'], a: 0, why: '中文 Zhōngwén。' }
  ],
  bop: {
    b: '老师出示一本中文书和一本英文书："哪本是中文书？"',
    o: ['能听、说、认读"中文 Zhōngwén"', '能说"会说中文""中文名字"', '分清中国 / 中文 / 汉语'],
    pre: '复习"汉语、汉字、中国"。',
    p: '① 跟读 Zhōngwén；② 中文 ≈ 汉语；③ 中文名字、中文书、中文歌。',
    post: '学生介绍自己的中文名字；或做本页练习 1–4。',
    s: '板书：中国（国家）/ 中文 ≈ 汉语（语言）/ 汉字（文字）。作业：用中文写一段自我介绍。'
  },
  act: [
    { tag: '文化体验', name: '中文名字', how: '每人说自己的中文名字和意思。' },
    { tag: '游戏', name: '中国还是中文', how: '老师说半句，学生选"中国"或"中文"：我会说……/ 我想去……' },
    { tag: '展示', name: '中文歌', how: '一起唱一首学过的中文歌。' }
  ],
  teach: [
    { h: '中文 / 汉语', p: '意思差不多；"中文"常包括书面文字，"汉语"多指语言。' },
    { h: '文', p: '"文"是文字、文章：中文、英文（超纲）。' }
  ],
  err: [
    { x: '我会说中国。', v: '我会说中文。', why: '语言是"中文"。' },
    { x: 'Zhōngwēn', v: 'Zhōngwén', why: '"文"是第二声。' }
  ],
  hz: [
    { c: '中', rad: '丨', radName: '竖部', radMean: '——', struct: '独体字', parts: '口 + 丨', tip: '一竖穿过中间。', fam: '有"中"的词：中国、中午。' },
    { c: '文', rad: '文', radName: '文部', radMean: '花纹 pattern', struct: '独体字', parts: '丶 + 一 + 丿 + 乀', tip: '古字像一个胸前有花纹的人——"文"是花纹，后来是文字。', fam: '有"文"的字：这（里面是文）。' }
  ],
  cul: ['联合国有六种工作语言，中文是其中之一。', '"英文、日文、法文"也都用"文"。'],
  syn: [{ w: '汉语', note: '意思差不多。' }],
  ant: [],
  rel: ['汉语', '汉字', '中国', '说', '学习', '名字']
}

});
