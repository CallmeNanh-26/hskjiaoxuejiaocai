// HSK1 教学参考 · 第 27 批（10 词）：医院 椅子 有 有的 有点儿 有些 雨 元 月 在
window.H1_WORDS = window.H1_WORDS || {};
Object.assign(H1_WORDS, {

'医院': {
  pos: [['名词', 'noun']],
  zh: ['给病人看病、治病的地方。'],
  en: ['hospital'],
  syl: [{ py: 'yī', i: 'y', f: 'i', t: 1 }, { py: 'yuàn', i: 'y', f: 'üan', t: 4 }],
  phon: [
    '第一声 + 第四声：先高平，再全降。',
    'yuàn 的 u 是 ü，嘴唇要圆。',
    'yuàn 是前鼻音。'
  ],
  img: { src: 'img/yiyuan.jpg', cap: "医院", by: "Cx1son", lic: "CC0", from: "Wikimedia Commons · Guangzhou Fosun Chancheng Hospital Building Exterior.jpg" },
  use: ['去 + 医院 + 看病', '在 + 医院 + 工作', '医院 + 在 + 哪儿'],
  ex: [
    { ctx: '看病', zh: '我 去 医院 看病 。', py: 'Wǒ qù yīyuàn kànbìng.', en: 'I am going to the hospital to see a doctor.' },
    { ctx: '工作', zh: '她 在 医院 工作 。', py: 'Tā zài yīyuàn gōngzuò.', en: 'She works at a hospital.' },
    { ctx: '问路', zh: '请问 ， 医院 在 哪儿 ？', py: 'Qǐngwèn, yīyuàn zài nǎr?', en: 'Excuse me, where is the hospital?' },
    { ctx: '描述', zh: '医院 里 人 很 多 。', py: 'Yīyuàn lǐ rén hěn duō.', en: 'There are many people in the hospital.' }
  ],
  drill: [
    { t: 'choice', q: '生病了，要去 ___ 。', opts: ['医院', '学校', '商店', '饭店'], a: 0, why: '生病去医院。' },
    { t: 'order', words: ['医院', '去', '看病', '我'], a: '我去医院看病。', en: 'I am going to the hospital to see a doctor.' },
    { t: 'choice', q: '"医生"和"医院"：', opts: ['医生是人，医院是地方', '一样', '医院是人', '都是人'], a: 0, why: '医生（人）/ 医院（地方）。' },
    { t: 'choice', say: '医院', q: '听录音，选拼音。', opts: ['yīyuàn', 'yīyàn', 'yíyuàn', 'yīyuǎn'], a: 0, why: '医院 yīyuàn。' }
  ],
  bop: {
    b: '老师出示红十字标志和医院大楼的照片："这是哪儿？——医院！"',
    o: ['能听、说、认读"医院 yīyuàn"', '能说"去医院看病"', '分清"医生"和"医院"'],
    pre: '复习"医生、看病、生病"。',
    p: '① 跟读 yīyuàn；② 医生（人）/ 医院（地方）；③ 问路："请问，医院在哪儿？"',
    post: '看地图问路；或做本页练习 1–4。',
    s: '板书：医院（地方）/ 医生（人）／ 去医院看病。作业：写一写离你家最近的医院在哪儿。'
  },
  act: [
    { tag: '情境表演', name: '问路', how: '"请问，医院在哪儿？""在那边。""谢谢！"' },
    { tag: '游戏', name: '人还是地方', how: '老师说"医生、医院、老师、学校"，学生判断"人"或"地方"。' },
    { tag: '情境表演', name: '看病', how: '在"医院"里：病人、医生对话。' }
  ],
  teach: [
    { h: '院', p: '"院"是有围墙的地方：医院、电影院。' },
    { h: '语序', p: '去医院看病：先说地方，再说做什么。' }
  ],
  err: [
    { x: '我看病去医院。', v: '我去医院看病。', why: '先说去哪儿。' },
    { x: 'yīyàn', v: 'yīyuàn', why: '"院"是 üan。' }
  ],
  hz: [
    { c: '医', rad: '匚', radName: '匚字框', radMean: '盒子 box', struct: '半包围结构', parts: '匚 + 矢', tip: '盒子里放着箭——治伤的工具。', fam: '有"医"的词：医生、医院。' },
    { c: '院', rad: '阝', radName: '左耳旁', radMean: '土山 mound', struct: '左右结构', parts: '阝 + 完', tip: '左边"阝"（左耳旁）表示地方、墙；右边"完 wán"——有墙的院子。', fam: '有"院"的词：电影院。' }
  ],
  cul: ['中国的大医院人很多，看病常要排队挂号。', '中国医院有"中医科"和"西医科"。'],
  syn: [],
  ant: [],
  rel: ['医生', '看病', '生病', '电影院', '病']
},

'椅子': {
  pos: [['名词', 'noun']],
  zh: ['有靠背、可以坐的家具。'],
  en: ['chair'],
  syl: [{ py: 'yǐ', i: 'y', f: 'i', t: 3 }, { py: 'zi', i: 'z', f: '-i', t: 0 }],
  phon: [
    '第三声 + 轻声："椅"读低降，"子"轻而稍高。',
    'zi 的韵母不是 "ee"。',
    'z 是平舌音。'
  ],
  img: { src: 'img/yizi.jpg', cap: "一个椅子", by: "James Dobson / National Trust", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Hughenden DisraeliSedanChair January2024 NT CCBYSA open.jpg" },
  use: ['一把椅子（"把"超纲，可说"一个椅子"）', '坐 + 在 + 椅子 + 上', '桌子和椅子'],
  ex: [
    { ctx: '课堂', zh: '请 坐 在 椅子 上 。', py: 'Qǐng zuò zài yǐzi shang.', en: 'Please sit on the chair.' },
    { ctx: '房间', zh: '房间 里 有 桌子 和 椅子 。', py: 'Fángjiān lǐ yǒu zhuōzi hé yǐzi.', en: 'There are tables and chairs in the room.' },
    { ctx: '位置', zh: '猫 在 椅子 下 。', py: 'Māo zài yǐzi xia.', en: 'The cat is under the chair.' },
    { ctx: '购物', zh: '这个 椅子 很 贵 。', py: 'Zhège yǐzi hěn guì.', en: 'This chair is expensive.' }
  ],
  drill: [
    { t: 'choice', q: '请坐在 ___ 上。', opts: ['椅子', '杯子', '包子', '饺子'], a: 0, why: '坐在椅子上。' },
    { t: 'order', words: ['椅子', '上', '坐', '在', '他'], a: '他坐在椅子上。', en: 'He is sitting on the chair.' },
    { t: 'choice', q: '"桌子"和"椅子"：', opts: ['桌子放东西，椅子坐人', '一样', '椅子放东西', '都是吃的'], a: 0, why: '桌子 / 椅子。' },
    { t: 'choice', say: '椅子', q: '听录音，选拼音。', opts: ['yǐzi', 'yǐzǐ', 'yìzi', 'yǐzhi'], a: 0, why: '椅子 yǐzi。' }
  ],
  bop: {
    b: '老师拍拍椅子："这是什么？——椅子！请坐。"',
    o: ['能听、说、认读"椅子 yǐzi"', '能说"坐在椅子上"', '复习"子"结尾的名词'],
    pre: '复习"桌子、坐、上、下"。',
    p: '① 跟读 yǐzi；② 位置：在椅子上 / 下；③ "子"家族：桌子、椅子、杯子、包子、饺子、孩子。',
    post: '描述教室里的桌子和椅子；或做本页练习 1–4。',
    s: '板书：椅子 ／ 坐在椅子上 ／ ……子：桌子、杯子、包子。作业：数一数你家有几个椅子。'
  },
  act: [
    { tag: 'TPR', name: '椅子游戏', how: '抢椅子游戏：音乐停时坐到椅子上，说"我坐在椅子上！"' },
    { tag: '游戏', name: '子家族', how: '学生说出所有学过的"……子"词，说得最多的组赢。' },
    { tag: '看图说话', name: '在哪儿', how: '老师把东西放在椅子上 / 下，学生说位置。' }
  ],
  teach: [
    { h: '量词', p: '椅子的量词是"把"（超纲）；HSK1 阶段可说"一个椅子"。' },
    { h: '"子"后缀', p: '"子"读轻声，构成名词：桌子、椅子、杯子。' }
  ],
  err: [
    { x: 'yǐzǐ', v: 'yǐzi', why: '"子"读轻声。' },
    { x: '我坐椅子在。', v: '我坐在椅子上。', why: '坐在 + 地方 + 上。' }
  ],
  hz: [
    { c: '椅', rad: '木', radName: '木字旁', radMean: '树木 wood', struct: '左右结构', parts: '木 + 奇', tip: '左边"木"——椅子是木头做的；右边"奇 qí"表示读音（古音相近）。', fam: '木字旁的字：机、杯、校。' },
    { c: '子', rad: '子', radName: '子部', radMean: '小孩 child', struct: '独体字', parts: '横撇 + 弯钩 + 横', tip: '名词后缀，读轻声。', fam: '带"子"的词：桌子、杯子、包子。' }
  ],
  cul: ['古代中国人坐在地上（席子），后来才有了椅子。', '中国传统的"太师椅"很有名，是木头做的大椅子。'],
  syn: [],
  ant: [],
  rel: ['桌子', '坐', '上', '下', '房间']
},

'有': {
  pos: [['动词', 'verb']],
  zh: ['拥有：我有一个哥哥。', '存在：桌子上有一本书。'],
  en: ['to have; to own', 'there is / are'],
  syl: [{ py: 'yǒu', i: 'y', f: 'ou', t: 3 }],
  phon: [
    '第三声，先降后升，声音要低。',
    '读起来像 "yo"，不是英语 "you"。',
    '"有"在第三声前读第二声：有点儿 yóudiǎnr。'
  ],
  img: { src: 'img/you.jpg', cap: "他有一只狗。", by: "Fortepan", lic: "CC BY-SA 3.0", from: "Wikimedia Commons · Portrait, dog, man Fortepan 213.jpg" },
  use: ['主语 + 有 + 名词', '地方 + 有 + 名词', '否定：没有'],
  ex: [
    { ctx: '家人', zh: '我 有 一 个 姐姐 。', py: 'Wǒ yǒu yí gè jiějie.', en: 'I have an older sister.' },
    { ctx: '存在', zh: '桌子 上 有 一 本 书 。', py: 'Zhuōzi shang yǒu yì běn shū.', en: 'There is a book on the table.' },
    { ctx: '询问', zh: '你 有 时间 吗 ？', py: 'Nǐ yǒu shíjiān ma?', en: 'Do you have time?' },
    { ctx: '否定', zh: '我 没有 钱 。', py: 'Wǒ méiyǒu qián.', en: 'I have no money.' }
  ],
  drill: [
    { t: 'choice', q: '我 ___ 一只猫。', opts: ['有', '是', '在', '要'], a: 0, why: '拥有：有。' },
    { t: 'order', words: ['有', '房间里', '人', '很多'], a: '房间里有很多人。', en: 'There are many people in the room.' },
    { t: 'choice', q: '"有"的否定是：', opts: ['没有', '不有', '不是', '没是'], a: 0, why: '有 → 没有。' },
    { t: 'choice', say: '有', q: '听录音，选拼音。', opts: ['yǒu', 'yòu', 'yóu', 'yǎo'], a: 0, why: '有 yǒu，第三声。' }
  ],
  bop: {
    b: '老师打开包："我有书、有手机、有水。你们有什么？"',
    o: ['能听、说、认读"有 yǒu"', '能说"我有……""……有……"', '知道否定是"没有"'],
    pre: '复习"没有、是、在"。',
    p: '① 跟读 yǒu；② 拥有：我有……；③ 存在：地方 + 有 + 东西；④ 否定：没有（✗ 不有）。',
    post: '"包里有什么"游戏；或做本页练习 1–4。',
    s: '板书：主语 + 有 + 名词 ／ 地方 + 有 + 名词 ／ 没有（✗ 不有）。作业：写五句"我有……"和"……有……"。'
  },
  act: [
    { tag: '游戏', name: '包里有什么', how: '一人闭眼摸包，说"包里有……"。' },
    { tag: '调查', name: '你有吗', how: '学生互相问"你有哥哥吗？你有猫吗？"，填表。' },
    { tag: '看图说话', name: '房间里有什么', how: '看房间图说"房间里有桌子、椅子……"。' }
  ],
  teach: [
    { h: '两个用法', p: '拥有（我有书）和存在（桌子上有书）。' },
    { h: '否定', p: '"有"只能用"没"否定：没有。' }
  ],
  err: [
    { x: '我不有钱。', v: '我没有钱。', why: '"有"用"没"否定。' },
    { x: '书有在桌子上。', v: '桌子上有书。 / 书在桌子上。', why: '"有"和"在"不一起用。' }
  ],
  hz: [{ c: '有', rad: '月', radName: '月部', radMean: '肉 meat', struct: '上下结构', parts: '𠂇 + 月', tip: '上面是一只手，下面的"月"其实是"肉"——手里拿着肉，就是"有"。', fam: '有"月"的字：朋、明、期。' }],
  cul: ['"有"在古代是"手里拿着肉"，那时有肉吃就是富有。', '中国人说"有空吗？"= 你有时间吗？'],
  syn: [],
  ant: [{ w: '没有', note: '否定。' }],
  rel: ['没有', '在', '是', '有的', '有点儿', '有些']
},

'有的': {
  pos: [['代词', 'pronoun']],
  zh: ['一部分（人或东西）。常和"有的……有的……"一起用。'],
  en: ['some (of them)'],
  syl: [{ py: 'yǒu', i: 'y', f: 'ou', t: 3 }, { py: 'de', i: 'd', f: 'e', t: 0 }],
  phon: [
    '第三声 + 轻声："有"读低降，"的"轻而稍高。',
    '"的"读轻声 de。',
    'yǒu 像 "yo"。'
  ],
  img: { src: 'img/youde.jpg', cap: "有的人在说话，有的人在看。", by: "Neal Herbert", lic: "Public domain", from: "Wikimedia Commons · Crowds of people at Mud Volcano (e2241462-ee02-494e-8cde-26162bbb94f4).jpg" },
  use: ['有的 + 名词 + ……', '有的……，有的……', '名词 + 有的 + ……'],
  ex: [
    { ctx: '分类', zh: '有的 人 喜欢 猫 ， 有的 人 喜欢 狗 。', py: 'Yǒude rén xǐhuan māo, yǒude rén xǐhuan gǒu.', en: 'Some people like cats; some like dogs.' },
    { ctx: '学校', zh: '有的 学生 是 中国 人 。', py: 'Yǒude xuésheng shì Zhōngguó rén.', en: 'Some of the students are Chinese.' },
    { ctx: '活动', zh: '同学 们 有的 唱 歌 ， 有的 看 书 。', py: 'Tóngxuémen yǒude chàng gē, yǒude kàn shū.', en: 'Some classmates are singing, some are reading.' },
    { ctx: '评价', zh: '有的 菜 很 好吃 。', py: 'Yǒude cài hěn hǎochī.', en: 'Some dishes are tasty.' }
  ],
  drill: [
    { t: 'choice', q: '___ 人喜欢茶，有的人喜欢牛奶。', opts: ['有的', '有点儿', '一下', '那个'], a: 0, why: '有的……有的……' },
    { t: 'order', words: ['有的', '学生', '中国人', '是'], a: '有的学生是中国人。', en: 'Some of the students are Chinese.' },
    { t: 'choice', q: '"有的"后面一般是：', opts: ['名词或动词短语', '形容词', '数字', '"了"'], a: 0, why: '有的人、有的……' },
    { t: 'choice', say: '有的', q: '听录音，选拼音。', opts: ['yǒude', 'yǒudé', 'yòude', 'yǒudi'], a: 0, why: '有的 yǒude。' }
  ],
  bop: {
    b: '老师问"谁喜欢猫？谁喜欢狗？"，然后总结："有的同学喜欢猫，有的同学喜欢狗。"',
    o: ['能听、说、认读"有的 yǒude"', '会用"有的……，有的……"', '分清"有的、有点儿、有些"'],
    pre: '复习"有、些、都"。',
    p: '① 跟读 yǒude；② "有的……有的……"描述一群人；③ 对比：都（全部）/ 有的（一部分）。',
    post: '用"有的……有的……"描述一张人多的照片；或做本页练习 1–4。',
    s: '板书：有的……，有的……／ 都（全部）↔ 有的（一部分）。作业：用"有的……有的……"写两句话。'
  },
  act: [
    { tag: '调查', name: '有的有的', how: '全班举手调查，然后用"有的同学……，有的同学……"报告。' },
    { tag: '看图说话', name: '公园里', how: '看公园照片："有的人在跑，有的人在坐。"' },
    { tag: '游戏', name: '都还是有的', how: '老师说一句话（"我们喜欢茶"），学生根据实际情况改成"我们都……"或"有的同学……"。' }
  ],
  teach: [
    { h: '常成对用', p: '"有的……，有的……"描述一群人里的不同部分。' },
    { h: '都 / 有的', p: '"都"是全部，"有的"是一部分。' }
  ],
  err: [
    { x: '有的人们喜欢猫。', v: '有的人喜欢猫。', why: '不加"们"。' },
    { x: '人有的喜欢猫。（初级）', v: '有的人喜欢猫。', why: '初级阶段先放在名词前。' }
  ],
  hz: [
    { c: '有', rad: '月', radName: '月部', radMean: '肉 meat', struct: '上下结构', parts: '𠂇 + 月', tip: '手里拿着肉——有。', fam: '有"有"的词：有点儿、有些。' },
    { c: '的', rad: '白', radName: '白字旁', radMean: '白 white', struct: '左右结构', parts: '白 + 勺', tip: '在这里读轻声 de。', fam: '有"的"的词：有的。' }
  ],
  cul: ['"有的人……有的人……"是中国人说明不同意见时常用的句子。', '著名诗句："有的人活着，他已经死了；有的人死了，他还活着。"（臧克家）'],
  syn: [{ w: '有些', note: '意思接近。' }],
  ant: [{ w: '都', note: '全部。' }],
  rel: ['有', '有些', '都', '一些', '人']
},

'有点儿': {
  pos: [['副词', 'adverb']],
  zh: ['稍微；程度不高（多表示不满意、不如意）。'],
  en: ['a bit; somewhat; rather (often negative)'],
  syl: [{ py: 'yǒu', i: 'y', f: 'ou', t: 3 }, { py: 'diǎnr', i: 'd', f: 'ianr', t: 3 }],
  phon: [
    '两个第三声连读，"有"读第二声：yóu diǎnr。',
    '"点儿"是儿化音，三个字读两个音节。',
    'diǎnr 舌头卷起来。'
  ],
  img: { src: 'img/youdianr.jpg', cap: "今天有点儿冷。", by: "佚名（Unknown artist）", lic: "Public domain", from: "Wikimedia Commons · Print, Gazette du Bon Ton (Journal of Good Taste), Vol. 1, No. 12, Dieu! Qu'il Fait Froid - (God! It's Cold - ), Plate 4, October 1913 (CH 18614913).jpg" },
  use: ['有点儿 + 形容词：有点儿贵', '有点儿 + 不 + 形容词', '我有点儿……（感觉）'],
  ex: [
    { ctx: '购物', zh: '这 件 衣服 有点儿 贵 。', py: 'Zhè jiàn yīfu yǒudiǎnr guì.', en: 'This piece of clothing is a bit expensive.' },
    { ctx: '天气', zh: '今天 有点儿 冷 。', py: 'Jīntiān yǒudiǎnr lěng.', en: 'It is a bit cold today.' },
    { ctx: '感觉', zh: '我 有点儿 忙 。', py: 'Wǒ yǒudiǎnr máng.', en: 'I am a bit busy.' },
    { ctx: '心情', zh: '他 有点儿 不 高兴 。', py: 'Tā yǒudiǎnr bù gāoxìng.', en: 'He is a bit unhappy.' }
  ],
  drill: [
    { t: 'choice', q: '这个苹果 ___ 贵。', opts: ['有点儿', '一点儿', '一些', '一下'], a: 0, why: '形容词前用"有点儿"。' },
    { t: 'order', words: ['有点儿', '今天', '热'], a: '今天有点儿热。', en: 'It is a bit hot today.' },
    { t: 'choice', q: '哪一句是对的？', opts: ['这个有点儿便宜。', '这个有点儿贵。', '这个贵有点儿。', '这个一点儿贵。'], a: 1, why: '"有点儿"多用于不满意的事（贵）。' },
    { t: 'choice', say: '有点儿', q: '听录音，选拼音。', opts: ['yǒudiǎnr', 'yìdiǎnr', 'yǒudiǎn\'ér', 'yòudiǎnr'], a: 0, why: '有点儿 yǒudiǎnr。' }
  ],
  bop: {
    b: '老师穿上外套搓搓手："今天有点儿冷。"',
    o: ['能听、说、认读"有点儿 yǒudiǎnr"', '能说"有点儿 + 形容词"', '分清"有点儿"和"一点儿"'],
    pre: '复习"一点儿、贵、冷、忙"。',
    p: '① 跟读 yǒudiǎnr（变调 + 儿化）；② 有点儿 + 形容词（多为不满意）；③ 对比：有点儿贵 / 便宜一点儿。',
    post: '"有点儿还是一点儿"填空；或做本页练习 1–4。',
    s: '板书：有点儿 + 形容词（不满意）／ 形容词 + 一点儿（比较）／ 一点儿 + 名词。作业：写三句"……有点儿……"。'
  },
  act: [
    { tag: '情境表演', name: '买衣服', how: '"这件怎么样？""有点儿大。""这件呢？""有点儿贵。便宜一点儿吧！"' },
    { tag: '游戏', name: '有点儿还是一点儿', how: '老师出示半句话，学生选"有点儿"或"一点儿"补全。' },
    { tag: 'TPR', name: '感觉', how: '老师说"有点儿冷"学生轻轻发抖，说"非常冷"学生大力发抖。' }
  ],
  teach: [
    { h: '有点儿 / 一点儿', p: '有点儿 + 形容词（有点儿贵）；形容词 + 一点儿（便宜一点儿）；一点儿 + 名词（一点儿水）。' },
    { h: '语气', p: '"有点儿"多表示不满意，一般不说"有点儿好"。' }
  ],
  err: [
    { x: '这个一点儿贵。', v: '这个有点儿贵。', why: '形容词前用"有点儿"。' },
    { x: '我有点儿高兴。（想表达很开心）', v: '我很高兴。', why: '"有点儿"多用于不如意的情况。' }
  ],
  hz: [
    { c: '有', rad: '月', radName: '月部', radMean: '肉', struct: '上下结构', parts: '𠂇 + 月', tip: '手里拿着肉——有。', fam: '有"有"的词：有的、有些。' },
    { c: '点', rad: '灬', radName: '四点底', radMean: '火', struct: '上下结构', parts: '占 + 灬', tip: '小小的点——一点点。', fam: '有"点"的词：一点儿、几点。' },
    { c: '儿', rad: '儿', radName: '儿部', radMean: '孩子', struct: '独体字', parts: '撇 + 竖弯钩', tip: '只表示儿化。', fam: '儿化的词：一点儿、哪儿。' }
  ],
  cul: ['中国人表达不满时常用"有点儿"让语气缓和：有点儿贵（其实可能很贵）。', '南方人常说"有点"，不加"儿"。'],
  syn: [{ w: '有些', note: '副词用法意思接近：有些冷。' }],
  ant: [{ w: '非常', note: '程度很高。' }],
  rel: ['一点儿', '有些', '很', '非常', '太']
},

'有些': {
  pos: [['代词', 'pronoun'], ['副词', 'adverb']],
  zh: ['（代词）一部分：有些人。', '（副词）稍微，有点儿：有些冷。'],
  en: ['some (of them)', '(adverb) somewhat; a bit'],
  syl: [{ py: 'yǒu', i: 'y', f: 'ou', t: 3 }, { py: 'xiē', i: 'x', f: 'ie', t: 1 }],
  phon: [
    '第三声 + 第一声："有"只读前半段（低降），"些"高平。',
    'x 是舌面音。',
    'yǒu 像 "yo"。'
  ],
  img: { src: 'img/youxie.jpg', cap: "有些苹果很大。", by: "George Chernilevsky", lic: "Public domain", from: "Wikimedia Commons · Apples in basket 2018 G1.jpg" },
  use: ['有些 + 名词：有些人', '有些 + 形容词：有些冷（= 有点儿）', '有些……，有些……'],
  ex: [
    { ctx: '分类', zh: '有些 人 不 喜欢 下雨 。', py: 'Yǒuxiē rén bù xǐhuan xiàyǔ.', en: 'Some people do not like rain.' },
    { ctx: '评价', zh: '有些 菜 很 好吃 。', py: 'Yǒuxiē cài hěn hǎochī.', en: 'Some dishes are tasty.' },
    { ctx: '感觉', zh: '今天 有些 冷 。', py: 'Jīntiān yǒuxiē lěng.', en: 'It is somewhat cold today.' },
    { ctx: '学习', zh: '有些 汉字 我 不 认识 。', py: 'Yǒuxiē Hànzì wǒ bú rènshi.', en: 'There are some characters I do not know.' }
  ],
  drill: [
    { t: 'choice', q: '___ 学生喜欢唱歌，有些学生喜欢看书。', opts: ['有些', '有点儿', '一下', '那个'], a: 0, why: '有些……有些……' },
    { t: 'order', words: ['有些', '我', '不', '认识', '人'], a: '有些人我不认识。', en: 'There are some people I do not know.' },
    { t: 'choice', q: '"有些冷"的意思和哪个一样？', opts: ['有点儿冷', '非常冷', '不冷', '太冷了'], a: 0, why: '副词"有些"= 有点儿。' },
    { t: 'choice', say: '有些', q: '听录音，选拼音。', opts: ['yǒuxiē', 'yìxiē', 'yǒushiē', 'yòuxiē'], a: 0, why: '有些 yǒuxiē。' }
  ],
  bop: {
    b: '老师出示一盘有好有坏的苹果："有些苹果很好，有些不好。"',
    o: ['能听、说、认读"有些 yǒuxiē"', '能说"有些 + 名词"', '知道"有些"也可以 = 有点儿'],
    pre: '复习"有的、有点儿、一些"。',
    p: '① 跟读 yǒuxiē；② 代词：有些人、有些菜；③ 副词：有些冷 = 有点儿冷。',
    post: '对比"有的、有些、一些、有点儿"；或做本页练习 1–4。',
    s: '板书：有些 + 名词（= 有的）／ 有些 + 形容词（= 有点儿）。作业：用"有些"写两句话。'
  },
  act: [
    { tag: '调查', name: '有些同学', how: '调查后报告："有些同学喜欢……，有些同学不喜欢。"' },
    { tag: '游戏', name: '四兄弟', how: '老师出示句子，学生选"有的 / 有些 / 一些 / 有点儿"填空。' },
    { tag: '看图说话', name: '水果摊', how: '"有些苹果很大，有些很小。"' }
  ],
  teach: [
    { h: '两种用法', p: '名词前 ≈ 有的；形容词前 ≈ 有点儿。' },
    { h: '有些 / 一些', p: '"有些"强调"一部分（不是全部）"；"一些"强调"不多的数量"。' }
  ],
  err: [
    { x: '有些本书', v: '有些书', why: '不加量词。' },
    { x: '我有些书很多。', v: '我有很多书。', why: '不要混用。' }
  ],
  hz: [
    { c: '有', rad: '月', radName: '月部', radMean: '肉', struct: '上下结构', parts: '𠂇 + 月', tip: '手里拿着肉——有。', fam: '有"有"的词：有的、有点儿。' },
    { c: '些', rad: '二', radName: '二部', radMean: '——', struct: '上下结构', parts: '此 + 二', tip: '不只一个。', fam: '有"些"的词：一些、这些、那些。' }
  ],
  cul: ['中国人表达意见时常用"有些人认为……"，比较委婉。', '"有些"在书面语里很常用。'],
  syn: [{ w: '有的', note: '代词用法。' }, { w: '有点儿', note: '副词用法。' }],
  ant: [{ w: '都', note: '全部。' }],
  rel: ['有的', '有点儿', '一些', '些', '有']
},

'雨': {
  pos: [['名词', 'noun']],
  zh: ['从云里落下来的水。'],
  en: ['rain'],
  syl: [{ py: 'yǔ', i: 'y', f: 'ü', t: 3 }],
  phon: [
    '第三声，先降后升，声音要低。',
    'yǔ 其实是 ü，嘴唇要圆，不要读成 "yoo"。',
    '和"语 yǔ"读音一样。'
  ],
  img: { src: 'img/yu.jpg', cap: "雨", by: "Frank Vincentz", lic: "CC BY-SA 3.0", from: "Wikimedia Commons · Rain drops on window 03 ies.jpg" },
  use: ['下雨', '雨很大', '大雨 / 小雨'],
  ex: [
    { ctx: '天气', zh: '外边 下雨 了 。', py: 'Wàibian xiàyǔ le.', en: 'It is raining outside.' },
    { ctx: '描述', zh: '雨 很 大 。', py: 'Yǔ hěn dà.', en: 'The rain is heavy.' },
    { ctx: '天气', zh: '今天 有 小 雨 。', py: 'Jīntiān yǒu xiǎo yǔ.', en: 'There is light rain today.' },
    { ctx: '爱好', zh: '我 不 喜欢 雨 。', py: 'Wǒ bù xǐhuan yǔ.', en: 'I do not like rain.' }
  ],
  drill: [
    { t: 'choice', q: '外边下 ___ 了，带伞吧。', opts: ['雨', '鱼', '语', '月'], a: 0, why: '下雨。' },
    { t: 'order', words: ['大', '雨', '很'], a: '雨很大。', en: 'The rain is heavy.' },
    { t: 'choice', q: '"雨"的部首在"雪"里吗？', opts: ['在，雨字头', '不在', '在下面', '是"日"'], a: 0, why: '雪 = 雨字头 + 彐。' },
    { t: 'choice', say: '雨', q: '听录音，选拼音。', opts: ['yǔ', 'yù', 'yú', 'wǔ'], a: 0, why: '雨 yǔ，第三声。' }
  ],
  bop: {
    b: '老师在黑板上画"雨"的象形字：一横是天，下面的点是雨滴。',
    o: ['能听、说、认读"雨 yǔ"', '能说"下雨、雨很大"', '认识雨字头'],
    pre: '复习"下雨、雪、天气"。',
    p: '① 跟读 yǔ，练 ü；② 象形：雨的字形；③ 大雨 / 小雨、雨很大。',
    post: '雨字头家族：雪、零；或做本页练习 1–4。',
    s: '板书：雨 ／ 下雨 ／ 大雨 / 小雨 ／ 雨字头：雪、零。作业：画雨的象形字。'
  },
  act: [
    { tag: 'TPR', name: '雨声', how: '全班用手指敲桌子模仿小雨、大雨。' },
    { tag: '画画', name: '象形雨', how: '学生画"天 + 云 + 雨滴"，变成"雨"字。' },
    { tag: '游戏', name: '雨字头', how: '找出所有带雨字头的字：雪、零。' }
  ],
  teach: [
    { h: '雨 / 下雨', p: '"雨"是名词；"下雨"是动作。' },
    { h: 'ü', p: 'yu 的 u 是 ü。' }
  ],
  err: [
    { x: '雨下了。', v: '下雨了。', why: '固定说法"下雨"。' },
    { x: 'yù', v: 'yǔ', why: '"雨"是第三声。' }
  ],
  hz: [{ c: '雨', rad: '雨', radName: '雨部', radMean: '雨 rain', struct: '独体字', parts: '一 + 冂 + 丨 + 四点', tip: '上面一横是天，下面是云，里面四点是雨滴。在字的上面写成"⻗"。', fam: '雨字头的字：雪、零。' }],
  cul: ['中国南方春夏常下雨，有"梅雨"季节。', '"雨"是象形字：天上落下的水滴。'],
  syn: [],
  ant: [],
  rel: ['下雨', '雪', '天气', '冷', '下']
},

'元': {
  pos: [['量词', 'measure word']],
  zh: ['人民币的单位（书面），口语说"块"。'],
  en: ['yuan (unit of Chinese currency, written)'],
  syl: [{ py: 'yuán', i: 'y', f: 'üan', t: 2 }],
  phon: [
    '第二声，从中往高升。',
    'yuán 的 u 是 ü，嘴唇要圆。',
    '前鼻音 -n。'
  ],
  img: { src: 'img/yuan.jpg', cap: "¥ = 元", by: "NateNate60", lic: "CC BY-SA 4.0", from: "Wikimedia Commons · Digital RMB sign Hangzhou.jpg" },
  use: ['数词 + 元：十元', '……元钱', '元 = 块（口语）'],
  ex: [
    { ctx: '价钱', zh: '这 本 书 二 十 元 。', py: 'Zhè běn shū èrshí yuán.', en: 'This book is twenty yuan.' },
    { ctx: '书面', zh: '一 个 苹果 三 元 。', py: 'Yí gè píngguǒ sān yuán.', en: 'One apple is three yuan.' },
    { ctx: '询问', zh: '这个 多少 元 ？', py: 'Zhège duōshao yuán?', en: 'How many yuan is this?' },
    { ctx: '口语', zh: '十 元 是 十 块 。', py: 'Shí yuán shì shí kuài.', en: 'Ten yuan is ten kuai.' }
  ],
  drill: [
    { t: 'choice', q: '价签上写"5元"，口语说：', opts: ['五块', '五个', '五本', '五口'], a: 0, why: '元（书面）= 块（口语）。' },
    { t: 'order', words: ['元', '这个', '十'], a: '这个十元。', en: 'This is ten yuan.' },
    { t: 'choice', q: '"元"和"块"：', opts: ['意思一样，元书面、块口语', '不一样', '块书面', '元是硬币'], a: 0, why: '10 元 = 10 块。' },
    { t: 'choice', say: '元', q: '听录音，选拼音。', opts: ['yuán', 'yuǎn', 'yán', 'yuàn'], a: 0, why: '元 yuán，第二声。' }
  ],
  bop: {
    b: '老师出示超市价签"12元"："这个怎么读？——十二元。说话的时候说——十二块！"',
    o: ['能听、说、认读"元 yuán"', '能读价签', '知道元 = 块'],
    pre: '复习"块、钱、多少"。',
    p: '① 跟读 yuán；② 读价签：5 元、20 元、100 元；③ 书面"元" → 口语"块"。',
    post: '看菜单读价钱；或做本页练习 1–4。',
    s: '板书：元（书面）= 块（口语）／ 角 = 毛 ／ ¥ = 人民币。作业：找一张中文价签，读出价钱。'
  },
  act: [
    { tag: '游戏', name: '读价签', how: '老师出示中国超市价签照片，学生读"……元"再说"……块"。' },
    { tag: '情境表演', name: '超市', how: '"这个多少钱？""价签上写十五元。""好，十五块。"' },
    { tag: '文化体验', name: '人民币', how: '介绍人民币符号 ¥ 和单位元、角、分。' }
  ],
  teach: [
    { h: '元 / 块', p: '写的时候用"元"（价签、发票），说的时候用"块"。' },
    { h: '读价签', p: '价签上常写"¥10"或"10元"，读的时候说"十块"。' }
  ],
  err: [
    { x: '这个是十元的。（回答价钱）', v: '这个十元。', why: '说价钱不用"是"。' },
    { x: 'yán', v: 'yuán', why: '"元"是 üan。' }
  ],
  hz: [{ c: '元', rad: '儿', radName: '儿部', radMean: '人', struct: '上下结构', parts: '二 + 儿', tip: '上面"二"，下面"儿"——古字像一个人突出的头，"元"原来是"头、第一"的意思：元旦（一年的第一天）。', fam: '有"元"的字：玩（王 + 元）、园（超纲）。' }],
  cul: ['人民币的单位：元、角、分；口语：块、毛、分。', '"元旦"是 1 月 1 日，"元"是"第一"的意思。'],
  syn: [{ w: '块', note: '口语。' }],
  ant: [],
  rel: ['块', '钱', '多少', '买', '卖', '贵']
},

'月': {
  pos: [['名词', 'noun']],
  zh: ['月亮。', '一年有十二个月：一月、二月……'],
  en: ['moon', 'month'],
  syl: [{ py: 'yuè', i: 'y', f: 'üe', t: 4 }],
  phon: [
    '第四声，从高处全降。',
    'yuè 的 u 是 ü，嘴唇要圆。',
    'üe 从 ü 滑到 e。'
  ],
  img: { src: 'img/yue.jpg', cap: "月", by: "Luc Viatour", lic: "CC BY-SA 3.0", from: "Wikimedia Commons · Full Moon Luc Viatour.jpg" },
  use: ['数字 + 月：一月 ～ 十二月', '数词 + 个 + 月：三个月', '这个月 / 下个月'],
  ex: [
    { ctx: '日期', zh: '今天 五 月 一 号 。', py: 'Jīntiān wǔ yuè yī hào.', en: 'Today is May 1st.' },
    { ctx: '时间', zh: '一 年 有 十 二 个 月 。', py: 'Yì nián yǒu shí\'èr gè yuè.', en: 'A year has twelve months.' },
    { ctx: '计划', zh: '我 在 中国 住 了 三 个 月 。', py: 'Wǒ zài Zhōngguó zhù le sān gè yuè.', en: 'I lived in China for three months.' },
    { ctx: '询问', zh: '你 几 月 去 中国 ？', py: 'Nǐ jǐ yuè qù Zhōngguó?', en: 'In which month are you going to China?' }
  ],
  drill: [
    { t: 'choice', q: '一年有十二个 ___ 。', opts: ['月', '天', '号', '星期'], a: 0, why: '十二个月。' },
    { t: 'order', words: ['月', '几', '今天', '几号'], a: '今天几月几号？', en: 'What is the date today?' },
    { t: 'choice', q: '"三月"和"三个月"：', opts: ['三月是 March，三个月是 3 months', '一样', '三月是 3 months', '都是 March'], a: 0, why: '加"个"是时间长度。' },
    { t: 'choice', say: '月', q: '听录音，选拼音。', opts: ['yuè', 'yè', 'yuě', 'yuàn'], a: 0, why: '月 yuè，第四声。' }
  ],
  bop: {
    b: '老师出示月亮的照片："这是月亮——月。"再翻日历："一月、二月……也是“月”。"',
    o: ['能听、说、认读"月 yuè"', '能说月份和日期', '分清"三月"和"三个月"'],
    pre: '复习数字、"号、年、星期"。',
    p: '① 跟读 yuè，练 üe；② 十二个月：一月 ～ 十二月；③ 日期：……月……号；④ 三月（March）/ 三个月（3 months）。',
    post: '问生日"几月几号"；或做本页练习 1–4。',
    s: '板书：一月 ～ 十二月 ／ __ 月 __ 号 ／ 三月 ≠ 三个月。作业：写出家人的生日（几月几号）。'
  },
  act: [
    { tag: '游戏', name: '生日排队', how: '只用汉语问"你的生日是几月几号？"，按生日排队。' },
    { tag: '歌曲', name: '月份歌', how: '用简单曲调唱"一月、二月……十二月"。' },
    { tag: '文化体验', name: '中秋节', how: '介绍农历八月十五中秋节、吃月饼、看月亮。' }
  ],
  teach: [
    { h: '月份', p: '数字 + 月：一月到十二月，很规则。' },
    { h: '加"个"', p: '时间长度要加"个"：三个月。（"年、天"不加"个"）' }
  ],
  err: [
    { x: '我住了三月。', v: '我住了三个月。', why: '时间长度加"个"。' },
    { x: '一号五月', v: '五月一号', why: '先说月，再说号。' }
  ],
  hz: [{ c: '月', rad: '月', radName: '月部', radMean: '月亮 moon', struct: '独体字', parts: '丿 + 𠃌 + 一 + 一', tip: '像一弯月亮，里面两横是月亮上的影子。古人看月亮圆缺来记"月"。', fam: '有"月"的字：明、朋、期、有。' }],
  cul: ['中秋节（农历八月十五）家人团圆、吃月饼、看月亮。', '"月"在左边时多表示"肉"（身体）：服、朋（拓展）。'],
  syn: [],
  ant: [],
  rel: ['年', '号', '日', '天', '星期', '明天']
},

'在': {
  pos: [['动词', 'verb'], ['介词', 'preposition'], ['副词', 'adverb']],
  zh: ['（动词）存在于某处：我在家。', '（介词）表示地点：在学校学习。', '（副词）表示动作正在进行：他在看书。'],
  en: ['to be (at a place)', '(preposition) at; in', '(adverb) be doing (in progress)'],
  syl: [{ py: 'zài', i: 'z', f: 'ai', t: 4 }],
  phon: [
    '第四声，从高处全降。',
    'z 是平舌音，不要读成 zhài。',
    'ai 像英语 "eye"。'
  ],
  img: { src: 'img/zai.jpg', cap: "他们在看书。", by: "Mabel Betsy Hill", lic: "Public domain", from: "Wikimedia Commons · Children reading beneath a tree - Story-Friends (1927) - Mabel Betsy Hill.jpg" },
  use: ['人 / 东西 + 在 + 地方', '在 + 地方 + 动词', '在 + 动词（正在做）'],
  ex: [
    { ctx: '位置', zh: '我 在 家 。', py: 'Wǒ zài jiā.', en: 'I am at home.' },
    { ctx: '地点', zh: '他 在 学校 学习 。', py: 'Tā zài xuéxiào xuéxí.', en: 'He studies at school.' },
    { ctx: '进行', zh: '妈妈 在 做饭 。', py: 'Māma zài zuòfàn.', en: 'Mom is cooking.' },
    { ctx: '询问', zh: '你 的 手机 在 哪儿 ？', py: 'Nǐ de shǒujī zài nǎr?', en: 'Where is your phone?' }
  ],
  drill: [
    { t: 'choice', q: '书 ___ 桌子上。', opts: ['在', '有', '是', '去'], a: 0, why: '东西 + 在 + 地方。' },
    { t: 'order', words: ['在', '看', '他', '电视'], a: '他在看电视。', en: 'He is watching TV.' },
    { t: 'choice', q: '哪一句是对的？', opts: ['我学习在学校。', '我在学校学习。', '在我学校学习。', '我学校在学习。'], a: 1, why: '"在 + 地方"放在动词前面。' },
    { t: 'choice', say: '在', q: '听录音，选拼音。', opts: ['zài', 'zhài', 'cài', 'zǎi'], a: 0, why: '在 zài，第四声。' }
  ],
  bop: {
    b: '老师打电话："喂，你在哪儿？——我在学校。你在做什么？——我在上课。"',
    o: ['能听、说、认读"在 zài"', '掌握"在"的三种用法', '知道"在 + 地点"放在动词前'],
    pre: '复习地点词和"哪儿"。',
    p: '① 跟读 zài；② 位置：……在……；③ 地点：在……做……；④ 进行：在 + 动词。',
    post: '打电话游戏："你在哪儿？你在做什么？"；或做本页练习 1–4。',
    s: '板书：A 在 + 地方 ／ 在 + 地方 + 动词 ／ 在 + 动词（正在）。作业：写三句话，各用一种"在"。'
  },
  act: [
    { tag: '情境表演', name: '打电话', how: '"你在哪儿？""我在超市。""你在做什么？""我在买东西。"' },
    { tag: '游戏', name: '他在做什么', how: '一人做动作，全班说"他在……"。' },
    { tag: '游戏', name: '东西在哪儿', how: '老师藏东西，学生问"……在哪儿？"，回答"在……上 / 下 / 里"。' }
  ],
  teach: [
    { h: '三种用法', p: '动词（我在家）、介词（在家吃饭）、副词（在吃饭）。' },
    { h: '在 / 有', p: '"东西 + 在 + 地方"（书在桌子上）；"地方 + 有 + 东西"（桌子上有书）。' }
  ],
  err: [
    { x: '我吃饭在家。', v: '我在家吃饭。', why: '"在 + 地方"放在动词前面。' },
    { x: '书有在桌子上。', v: '书在桌子上。', why: '"有"和"在"不一起用。' }
  ],
  hz: [{ c: '在', rad: '土', radName: '土部', radMean: '土 earth', struct: '半包围结构', parts: '𠂇 + 丨 + 土', tip: '下面是"土"——东西在土地上，"在"表示存在。注意笔顺：横、撇、竖、横、竖、横。', fam: '有"土"的字：块、地（超纲）。' }],
  cul: ['"在"是汉语里最常用的字之一。', '中国人打电话第一句常问"你在哪儿？"'],
  syn: [{ w: '正在', note: '强调正在进行。' }],
  ant: [],
  rel: ['正在', '有', '哪儿', '家', '里', '上']
}

});
