/* HSK1 教学参考 · 词汇篮 → 课件（网页放映 / PPTX）+ 练习（本地快速生成 / AI 生成）
   依赖：data/*.js（H1_LIST, H1_WORDS, HSK_STROKES）、vendor/hanzi-writer.min.js、vendor/pptxgen.bundle.js、vendor/gifenc.js
   AI：Anthropic TypeScript SDK（浏览器直连，key 由老师自己填写，只保存在本浏览器）。 */
(function () {
  'use strict';
  var LIST = window.H1_LIST || [], WORDS = window.H1_WORDS || {}, STROKES = window.HSK_STROKES || {};
  var IDX = {}; LIST.forEach(function (r, i) { IDX[r[0]] = i; });
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var speak = function (t, r) { if (window.H1speak) window.H1speak(t, r); };
  var toast = function (m) { if (window.H1toast) window.H1toast(m); else alert(m); };
  var store = {
    get: function (k, d) { try { var v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function pick(a, n) { return shuffle(a).slice(0, n); }
  var HSK1_CHARS = new Set(LIST.map(function (r) { return r[0]; }).join('').split(''));
  function badChars(s) { var out = []; (String(s).match(/[㐀-鿿]/g) || []).forEach(function (c) { if (!HSK1_CHARS.has(c) && out.indexOf(c) < 0) out.push(c); }); return out; }
  var POS = { '名': '名词 noun', '动': '动词 verb', '形': '形容词 adj.', '副': '副词 adv.', '数': '数词 numeral', '量': '量词 measure word', '代': '代词 pronoun', '助': '助词 particle', '介': '介词 prep.', '连': '连词 conj.', '叹': '叹词 interj.' };
  function posText(w) {
    var d = WORDS[w]; if (d && d.pos && d.pos.length) return d.pos.map(function (p) { return p[0] + ' ' + (p[1] || ''); }).join(' · ');
    var row = LIST[IDX[w]]; return row[2].replace(/[（）]/g, '').split('、').filter(Boolean).map(function (p) { return POS[p] || p; }).join(' · ') || '短语 phrase';
  }
  var ICON_PLAY = '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16.5 8.5a5 5 0 010 7M19 6a8.5 8.5 0 010 12" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/></svg>';
  var ICON_BASKET = '<svg viewBox="0 0 24 24" width="19" height="19"><path d="M3 10h18l-1.8 9.2a2 2 0 01-2 1.6H6.8a2 2 0 01-2-1.6L3 10z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/><path d="M8 10l3.2-6M16 10l-3.2-6M9 14v3M12 14v3M15 14v3" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg>';

  /* =====================================================================
     1. 词汇篮
     ===================================================================== */
  var cart = store.get('h1ref-cart', []).filter(function (w) { return IDX[w] != null; });
  var current = null;
  function saveCart() { store.set('h1ref-cart', cart); paintCounts(); if (!$('studio').hidden) { renderCart(); if (tab === 'deck') renderThumbs(); } }
  function addWords(ws) { var n = 0; ws.forEach(function (w) { if (IDX[w] != null && cart.indexOf(w) < 0) { cart.push(w); n++; } }); saveCart(); return n; }
  function toggleWord(w) { var i = cart.indexOf(w); if (i >= 0) cart.splice(i, 1); else cart.push(w); saveCart(); return i < 0; }
  function parseInput(s) {
    var out = [], bad = [];
    s.split(/[\s,，、;；]+/).forEach(function (t) {
      if (!t) return;
      var m = t.match(/^(\d+)[-–~～到](\d+)$/);
      if (m) { var a = +m[1], b = +m[2]; if (a > b) { var x = a; a = b; b = x; } for (var i = Math.max(1, a); i <= Math.min(LIST.length, b); i++) out.push(LIST[i - 1][0]); }
      else if (/^\d+$/.test(t)) { if (LIST[+t - 1]) out.push(LIST[+t - 1][0]); else bad.push(t); }
      else if (IDX[t] != null) out.push(t);
      else bad.push(t);
    });
    return { words: out, bad: bad };
  }
  function paintCounts() {
    var n = cart.length;
    if ($('cartN')) $('cartN').textContent = n;
    document.querySelectorAll('.st-tabs .cnt').forEach(function (el) { el.textContent = n; });
    var b = document.querySelector('#main .cart-add');
    if (b) { var on = cart.indexOf(b.dataset.cartToggle) >= 0; b.classList.toggle('in', on); b.innerHTML = ICON_BASKET + (on ? ' 已在词汇篮' : ' 加入词汇篮'); }
  }

  /* 顶栏按钮 + 词页按钮 */
  (function () {
    var top = document.querySelector('.top'), prog = $('progress');
    var btn = document.createElement('button');
    btn.className = 'cart-btn'; btn.id = 'cartBtn'; btn.title = '词汇篮：做课件、出练习';
    btn.innerHTML = ICON_BASKET + '<span class="lbl">词汇篮</span><b id="cartN">0</b>';
    top.insertBefore(btn, prog);
    btn.addEventListener('click', function () { openStudio(cart.length ? 'deck' : 'cart'); });
  })();
  document.addEventListener('h1:render', function (e) {
    current = e.detail.word;
    var a = document.querySelector('#main .hero .audio');
    if (a) a.insertAdjacentHTML('beforeend', '<button class="play cart-add" data-cart-toggle="' + esc(current) + '"></button>');
    paintCounts();
  });
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-cart-toggle]'); if (!b) return;
    var w = b.dataset.cartToggle, added = toggleWord(w);
    toast(added ? '已加入词汇篮：' + w + '（共 ' + cart.length + ' 个）' : '已从词汇篮移除：' + w);
  });

  /* =====================================================================
     2. 工作台（词汇篮 / 课件 / 练习）
     ===================================================================== */
  var tab = 'cart';
  var deck = Object.assign({ tpl: 'ink', accent: '', title: '', parts: {} }, store.get('h1ref-deck', {}));
  deck.parts = Object.assign({ cover: true, warm: true, word: true, stroke: true, use: true, gPic: true, gCloze: true, gTrans: true, review: true, dialog: false }, deck.parts);
  var EXT = [
    ['blank', '选词填空', 'Fill in the blank', 5],
    ['listen', '听力选择', 'Listening', 5],
    ['translate', '翻译', 'Translation', 5],
    ['read', '阅读理解', 'Reading', 2],
    ['order', '连词成句', 'Word order', 5],
    ['match', '连线：词—拼音—意思', 'Matching', 8]
  ];
  var exCfg = Object.assign({ on: { blank: true, listen: true, translate: true, read: false, order: true, match: false }, n: {}, dir: 'mix', note: '' }, store.get('h1ref-excfg', {}));
  EXT.forEach(function (t) { if (!exCfg.n[t[0]]) exCfg.n[t[0]] = t[3]; });
  var saveDeck = function () { store.set('h1ref-deck', deck); };
  var saveEx = function () { store.set('h1ref-excfg', exCfg); };

  var studio = document.createElement('div');
  studio.className = 'studio'; studio.id = 'studio'; studio.hidden = true;
  studio.innerHTML =
    '<div class="st-panel">' +
    '<header class="st-head"><div class="st-tabs">' +
    '<button data-tab="cart">词汇篮 <b class="cnt">0</b></button><button data-tab="deck">课件 · 放映 / PPT</button><button data-tab="ex">练习 · 出题</button></div>' +
    '<span class="sp"></span><button class="st-ai" data-act="ai-open" title="选择 AI 服务，填写你自己的 API key">AI 设置<i class="dot"></i></button>' +
    '<button class="icon-btn st-x" data-act="close" aria-label="关闭">✕</button></header>' +
    '<div class="st-body">' +
    /* 词汇篮 */
    '<section class="pane" data-pane="cart">' +
    '<div class="cart-tools"><input id="cartIn" type="text" autocomplete="off" placeholder="输入词语或序号添加，例：爱 爸爸 吃　或　1-20"><button class="btn" data-act="cart-add">添加</button>' +
    '<button class="btn ghost" data-act="cart-cur">+ 当前页的词</button><span class="sp"></span><button class="btn ghost" data-act="cart-shuffle">打乱顺序</button><button class="btn ghost" data-act="cart-clear">清空</button></div>' +
    '<ol class="cart-list" id="cartList"></ol>' +
    '<div class="cart-next"><button class="btn big" data-tab="deck">用这些词做课件 →</button><button class="btn big alt" data-tab="ex">用这些词出练习 →</button></div>' +
    '</section>' +
    /* 课件 */
    '<section class="pane" data-pane="deck" hidden><div class="deck-grid"><aside class="opts">' +
    '<h3>模板 <small>Template</small></h3><div class="tpls" id="tpls"></div>' +
    '<h3>主色 <small>Accent colour</small></h3><div class="swatches" id="swatches"></div>' +
    '<h3>标题 <small>Title</small></h3><input id="deckTitle" type="text" placeholder="例：第三课 生词">' +
    '<h3>内容 <small>Slides</small></h3><div class="checks" id="deckParts"></div>' +
    '<div class="go"><button class="btn big" data-act="present">▶ 网页放映</button><button class="btn big alt" data-act="pptx">⬇ 下载 PPTX</button></div>' +
    '<p class="hint" id="deckHint"></p>' +
    '</aside><div class="thumbs-wrap"><div class="thumbs-head"><b id="deckCount"></b><span>点击任意一页，从这一页开始放映。</span></div><div class="thumbs" id="thumbs"></div></div></div></section>' +
    /* 练习 */
    '<section class="pane" data-pane="ex" hidden><div class="ex-grid"><aside class="opts">' +
    '<h3>题型 · 数量 <small>Types</small></h3><div class="extypes" id="exTypes"></div>' +
    '<h3>给 AI 的要求 <small>可不填</small></h3><textarea id="exNote" rows="3" placeholder="例：情境是在饭店点菜；句子再短一点；多练习“几”和“多少”。"></textarea>' +
    '<div class="go"><button class="btn big" data-act="ex-local">⚡ 快速生成</button><button class="btn big alt" data-act="ex-ai">✨ AI 生成</button></div>' +
    '<p class="hint"><b>快速生成</b>：用本站的例句马上出题，不需要 API key。<br><b>AI 生成</b>：用「AI 设置」里选的服务（DeepSeek、通义千问等）按你的要求写新题，只用 HSK1 词；几种题型同时生成，边写边显示。用到 HSK1 以外的字会标出来。</p>' +
    '</aside><div class="ex-main"><div class="ex-bar"><label class="tog"><input type="checkbox" id="exAns"> 显示答案（教师版）</label><span class="sp"></span><span class="stat" id="exStat"></span>' +
    '<button class="btn ghost" data-act="ex-copy">复制文字</button><button class="btn ghost" data-act="ex-print">打印 / 存 PDF</button></div>' +
    '<div class="ex-out" id="exOut"><p class="empty">在左边选好题型和数量，点“快速生成”或“AI 生成”。</p></div></div></div></section>' +
    '</div></div>' +
    /* AI 设置 */
    '<dialog class="ai-dlg" id="aiDlg"><form method="dialog">' +
    '<h3>AI 设置 <small>用你自己的 API key。支持 DeepSeek、通义千问、Kimi、豆包、ChatGPT 等。</small></h3>' +
    '<label class="fld">AI 服务<select id="aiProv"></select></label>' +
    '<label class="fld">API key<input id="aiKey" type="password" autocomplete="off" spellcheck="false" placeholder="sk-..."></label>' +
    '<label class="row"><input type="checkbox" id="aiRemember"> 在这台电脑上记住（不勾选则关掉网页就清除）</label>' +
    '<details class="adv"><summary>高级：模型名称、接口地址</summary>' +
    '<label class="fld">模型<input id="aiModelIn" type="text" autocomplete="off" spellcheck="false"></label>' +
    '<label class="fld" id="aiUrlRow">接口地址（OpenAI 兼容 /chat/completions）<input id="aiUrlIn" type="text" autocomplete="off" spellcheck="false"></label></details>' +
    '<p class="hint" id="aiHint"></p>' +
    '<div class="acts"><button type="button" class="btn ghost" data-act="ai-test">测试连接</button><span class="stat" id="aiStat"></span><span class="sp"></span><button class="btn" value="ok">完成</button></div>' +
    '</form></dialog>';
  document.body.appendChild(studio);

  function openStudio(t) { studio.hidden = false; document.body.classList.add('st-open'); showTab(t || tab); }
  function closeStudio() { studio.hidden = true; document.body.classList.remove('st-open'); }
  function showTab(t) {
    tab = t;
    studio.querySelectorAll('.st-tabs [data-tab]').forEach(function (b) { b.classList.toggle('on', b.dataset.tab === t); });
    studio.querySelectorAll('.pane').forEach(function (p) { p.hidden = p.dataset.pane !== t; });
    if (t === 'cart') renderCart();
    if (t === 'deck') renderDeckOpts();
    if (t === 'ex') renderExOpts();
    paintAi();
  }

  function renderCart() {
    var ol = $('cartList');
    if (!cart.length) { ol.innerHTML = '<li class="empty">词汇篮是空的。<br>在任意词页点 <b>加入词汇篮</b>，或在上面输入词语 / 序号（如 <b>1-20</b>）。</li>'; return; }
    ol.innerHTML = cart.map(function (w, i) {
      var r = LIST[IDX[w]];
      return '<li><span class="n">' + (i + 1) + '</span><a class="hz" href="#/' + encodeURIComponent(w) + '" lang="zh">' + esc(w) + '</a><span class="py">' + esc(r[1]) + '</span><span class="en">' + esc(r[3]) + '</span><span class="no">No. ' + (IDX[w] + 1) + '</span>' +
        '<span class="ops"><button data-mv="-1" data-i="' + i + '" title="上移">↑</button><button data-mv="1" data-i="' + i + '" title="下移">↓</button><button data-rm="' + i + '" title="移除">✕</button></span></li>';
    }).join('');
  }

  studio.addEventListener('click', function (e) {
    var t = e.target, el;
    if (t === studio) return closeStudio();
    if ((el = t.closest('[data-tab]'))) { if (el.dataset.tab !== 'cart' && !cart.length) { toast('词汇篮是空的，先加几个词吧。'); return showTab('cart'); } return showTab(el.dataset.tab); }
    if ((el = t.closest('[data-say]'))) return speak(el.dataset.say, parseFloat(el.dataset.rate) || 0);
    if ((el = t.closest('[data-mv]'))) { var i = +el.dataset.i, j = i + +el.dataset.mv; if (j < 0 || j >= cart.length) return; var x = cart[i]; cart[i] = cart[j]; cart[j] = x; return saveCart(); }
    if ((el = t.closest('[data-rm]'))) { cart.splice(+el.dataset.rm, 1); return saveCart(); }
    if ((el = t.closest('.cart-list a.hz'))) { closeStudio(); return; }
    if ((el = t.closest('[data-tpl]'))) { deck.tpl = el.dataset.tpl; deck.accent = ''; saveDeck(); return renderDeckOpts(); }
    if ((el = t.closest('[data-color]'))) { deck.accent = el.dataset.color; saveDeck(); return renderDeckOpts(); }
    if ((el = t.closest('.thumb'))) return present(+el.dataset.i);
    if ((el = t.closest('.eopt'))) { var box = el.parentNode; if (box.classList.contains('done')) return; box.classList.add('done'); el.classList.add(el.dataset.ok === '1' ? 'right' : 'wrong'); var r = box.querySelector('[data-ok="1"]'); if (r) r.classList.add('right'); return; }
    if (!(el = t.closest('[data-act]'))) return;
    switch (el.dataset.act) {
      case 'close': return closeStudio();
      case 'cart-add': return cartAddFromInput();
      case 'cart-cur': if (current) { var n = addWords([current]); toast(n ? '已加入：' + current : current + ' 已经在词汇篮里了'); } return;
      case 'cart-shuffle': cart = shuffle(cart); return saveCart();
      case 'cart-clear': if (cart.length && confirm('清空词汇篮里的 ' + cart.length + ' 个词？')) { cart = []; saveCart(); } return;
      case 'ai-open': return openAi();
      case 'ai-test': return testAi();
      case 'present': return present(0);
      case 'pptx': return exportPptx(el);
      case 'ex-local': return makeExercises(false);
      case 'ex-ai': return makeExercises(true);
      case 'ex-copy': return copyEx();
      case 'ex-print': return printEx();
      case 'sec-retry': return retrySection(+el.dataset.s);
    }
  });
  function cartAddFromInput() {
    var inp = $('cartIn'), p = parseInput(inp.value);
    var n = addWords(p.words);
    toast((n ? '加入了 ' + n + ' 个词。' : '没有新词加入。') + (p.bad.length ? ' 找不到：' + p.bad.join('、') : ''));
    if (!p.bad.length) inp.value = '';
  }
  $('cartIn').addEventListener('keydown', function (e) { if (e.key === 'Enter') cartAddFromInput(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !studio.hidden && !showEl && !$('aiDlg').open) closeStudio(); });

  /* =====================================================================
     3. 课件：风格、配色（全部由主色推导）、装饰、幻灯片模型（英寸，10 × 5.625）
     ===================================================================== */
  var STYLES = {
    ink: { name: '朴物 · 新中式', sub: '米色纸 · 墨色银杏 · 印章', accent: '#a8936b' },
    shop: { name: '复古小铺', sub: '格子纸 · 红票据 · 黑条幅', accent: '#c8382e' },
    panel: { name: '暖调面板', sub: '奶油卡片 · 侧边词表 · 进度环', accent: '#c0643f' },
    farm: { name: '秋日农场', sub: '木框 · 落叶 · 南瓜', accent: '#e8792b' },
    diner: { name: '小餐馆', sub: '红白格桌布 · 挂单卡', accent: '#d8402f' }
  };
  if (!STYLES[deck.tpl]) deck.tpl = 'ink';
  var SWATCHES = ['#a8936b', '#c0643f', '#c8382e', '#e08a3c', '#d08aa0', '#9b7bb0', '#5f87a8', '#6f9a7e', '#3f5d52'];

  /* --- 颜色工具 --- */
  function hexRgb(h) { h = h.replace('#', ''); if (h.length === 3) h = h.replace(/./g, '$&$&'); return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)]; }
  function rgbHex(a) { return '#' + a.map(function (v) { return ('0' + Math.round(Math.max(0, Math.min(255, v))).toString(16)).slice(-2); }).join(''); }
  function mix(a, b, t) { var x = hexRgb(a), y = hexRgb(b); return rgbHex(x.map(function (v, i) { return v + (y[i] - v) * t; })); }
  function toHsl(hex) {
    var c = hexRgb(hex).map(function (v) { return v / 255; }), mx = Math.max.apply(null, c), mn = Math.min.apply(null, c), l = (mx + mn) / 2, h = 0, s = 0;
    if (mx !== mn) { var d = mx - mn; s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn); h = mx === c[0] ? (c[1] - c[2]) / d + (c[1] < c[2] ? 6 : 0) : mx === c[1] ? (c[2] - c[0]) / d + 2 : (c[0] - c[1]) / d + 4; h *= 60; }
    return [h, s, l];
  }
  function fromHsl(h, s, l) { h = ((h % 360) + 360) % 360; var f = function (n) { var k = (n + h / 30) % 12, a = s * Math.min(l, 1 - l); return l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1)); }; return rgbHex([f(0), f(8), f(4)].map(function (v) { return v * 255; })); }
  function lum(hex) { var c = hexRgb(hex).map(function (v) { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; }
  function onColor(fill) { return lum(fill) > 0.4 ? '#2a2420' : '#ffffff'; }

  /* 主色 → 整套配色：背景是接近主色的浅色（pastel），卡片、图片框、文字都跟着变 */
  function themeNow(key, accent) {
    var k = key || deck.tpl, st = STYLES[k] || STYLES.ink;
    var a = accent || (key ? '' : deck.accent) || st.accent, hsl = toHsl(a);
    var t = { key: k, name: st.name, accent: a };
    t.at = lum(a) > 0.22 ? mix(a, '#1d1a17', Math.min(0.55, (lum(a) - 0.12) * 1.4)) : a;
    t.bg = mix(a, '#ffffff', 0.84); t.paper = mix(a, '#ffffff', 0.92); t.card = mix(a, '#ffffff', 0.965);
    t.tile = mix(a, '#ffffff', 0.58); t.tile2 = mix(a, '#ffffff', 0.74);
    t.frame = mix(a, '#2b2520', 0.32);
    t.ink = mix(a, '#1d1a17', 0.86); t.ink2 = mix(t.ink, '#ffffff', 0.4);
    t.soft = mix(a, '#ffffff', 0.8); t.grid = mix(a, '#ffffff', 0.55); t.outline = mix(t.ink, '#ffffff', 0.86);
    t.a2 = fromHsl(hsl[0] + 150, Math.min(0.32, hsl[1] * 0.55 + 0.1), 0.44); t.a2soft = mix(t.a2, '#ffffff', 0.8); t.a2dark = mix(t.a2, '#1d1a17', 0.45);
    t.seal = '#b23a2a';
    t.tag = { ink: t.ink, shop: t.ink, panel: t.accent, farm: t.frame, diner: t.accent }[k];
    t.tagInk = onColor(t.tag);
    t.onA = onColor(a);
    return t;
  }

  /* --- 背景（canvas；网页和 PPT 共用） --- */
  var bgCache = {};
  function canvas(w, h) { var c = document.createElement('canvas'); c.width = Math.round(w); c.height = Math.round(h); return c; }
  function background(th) {
    var k = th.key + th.accent; if (bgCache[k]) return bgCache[k];
    var S = 160, W = 10 * S, H = 5.625 * S, cv = canvas(W, H), g = cv.getContext('2d'), i, x, y;
    g.fillStyle = th.bg; g.fillRect(0, 0, W, H);
    var rnd = seeded(7);
    if (th.key === 'ink') {
      blob(g, W * 0.75, H * 0.2, W * 0.5, th.paper);
      for (i = 0; i < 26000; i++) { g.fillStyle = rnd() < 0.5 ? 'rgba(40,30,20,.05)' : 'rgba(255,255,255,.35)'; g.fillRect(rnd() * W, rnd() * H, 1 + rnd() * 1.6, 1 + rnd() * 1.6); }
      g.strokeStyle = 'rgba(60,45,30,.06)'; g.lineWidth = 1;
      for (i = 0; i < 160; i++) { x = rnd() * W; y = rnd() * H; g.beginPath(); g.moveTo(x, y); g.quadraticCurveTo(x + rnd() * 40 - 20, y + rnd() * 40 - 20, x + rnd() * 70 - 35, y + rnd() * 70 - 35); g.stroke(); }
    } else if (th.key === 'shop') {
      g.fillStyle = th.paper; g.fillRect(0, 0, W, H);
      g.strokeStyle = th.grid; g.globalAlpha = 0.45; g.lineWidth = 1;
      for (x = 0; x < W; x += S * 0.2) { g.beginPath(); g.moveTo(x + 0.5, 0); g.lineTo(x + 0.5, H); g.stroke(); }
      for (y = 0; y < H; y += S * 0.2) { g.beginPath(); g.moveTo(0, y + 0.5); g.lineTo(W, y + 0.5); g.stroke(); }
      g.globalAlpha = 1;
      var cs = S * 0.1, y0 = H - S * 0.2;
      for (x = 0; x < W; x += cs) for (y = y0; y < H; y += cs) { g.fillStyle = (Math.round(x / cs) + Math.round((y - y0) / cs)) % 2 ? th.a2 : th.a2soft; g.fillRect(x, y, cs, cs); }
    } else if (th.key === 'panel') {
      var step = S * 0.42;
      for (y = 0; y < H + step; y += step) for (x = ((y / step) % 2) * step / 2; x < W + step; x += step) {
        diamond(g, x, y, step * 0.3, (Math.round(x / step + y / step) % 2) ? th.accent : th.a2, 0.16);
        g.fillStyle = 'rgba(80,50,30,.08)'; g.beginPath(); g.arc(x + step / 2, y, S * 0.025, 0, 7); g.fill();
      }
      g.strokeStyle = th.frame; g.globalAlpha = 0.25; g.lineWidth = S * 0.02; g.strokeRect(S * 0.12, S * 0.12, W - S * 0.24, H - S * 0.24); g.globalAlpha = 1;
      for (x = S * 0.3; x < W - S * 0.2; x += S * 0.3) { diamond(g, x, S * 0.12, S * 0.06, th.accent, 0.45); diamond(g, x, H - S * 0.12, S * 0.06, th.a2, 0.45); }
    } else if (th.key === 'farm') {
      blob(g, W * 0.1, -H * 0.15, W * 0.4, th.card);
      wave(g, H * 0.9, S * 0.08, th.soft, W, H, 0);
      wave(g, H * 0.94, S * 0.07, mix(th.a2, '#ffffff', 0.55), W, H, 1.7);
      leaf(g, S * 9.55, S * 0.42, S * 0.26, 0.6, th.accent); leaf(g, S * 9.2, S * 0.25, S * 0.18, -0.5, mix(th.accent, '#e0b040', 0.5)); leaf(g, S * 9.75, S * 0.9, S * 0.16, 1.4, th.frame);
      leaf(g, S * 0.3, S * 5.15, S * 0.2, -0.9, mix(th.accent, '#e0b040', 0.5)); leaf(g, S * 0.62, S * 5.35, S * 0.15, 0.4, th.accent);
      pumpkin(g, S * 9.35, S * 5.25, S * 0.26, th.accent, th.a2); pumpkin(g, S * 8.95, S * 5.36, S * 0.17, mix(th.accent, '#e0b040', 0.5), th.a2);
      g.lineWidth = S * 0.09; g.strokeStyle = th.frame; rrect(g, S * 0.07, S * 0.07, W - S * 0.14, H - S * 0.14, S * 0.22); g.stroke();
      g.lineWidth = S * 0.018; g.strokeStyle = mix(th.frame, '#ffffff', 0.45); rrect(g, S * 0.14, S * 0.14, W - S * 0.28, H - S * 0.28, S * 0.17); g.stroke();
    } else {
      g.fillStyle = th.paper; for (x = 0; x < W; x += S * 0.5) g.fillRect(x, 0, S * 0.25, H);
      var c2 = S * 0.28, y1 = S * 5.0;
      g.fillStyle = th.card; g.fillRect(0, y1, W, H - y1);
      g.globalAlpha = 0.5; g.fillStyle = th.accent;
      for (x = 0; x < W; x += c2 * 2) g.fillRect(x, y1, c2, H - y1);
      for (y = y1; y < H; y += c2 * 2) g.fillRect(0, y, W, c2);
      g.globalAlpha = 1; g.fillStyle = 'rgba(0,0,0,.08)'; g.fillRect(0, y1, W, S * 0.03);
      var sw = S * 0.5, ah = S * 0.34;
      for (var n = 0; n * sw < W; n++) { g.fillStyle = n % 2 ? th.card : th.accent; g.fillRect(n * sw, 0, sw, ah); g.beginPath(); g.arc(n * sw + sw / 2, ah, sw / 2, 0, Math.PI); g.fill(); }
      g.strokeStyle = th.frame; g.lineWidth = S * 0.02; g.beginPath(); g.moveTo(0, S * 1.06); g.quadraticCurveTo(W / 2, S * 1.26, W, S * 1.06); g.stroke();
    }
    return (bgCache[k] = cv.toDataURL('image/jpeg', 0.9));
  }
  var bgSheet = null, bgDone = {};
  function bgClass(th) {
    var c = 'bg-' + th.key + '-' + th.accent.replace('#', '');
    if (!bgDone[c]) {
      if (!bgSheet) { bgSheet = document.createElement('style'); document.head.appendChild(bgSheet); }
      bgSheet.appendChild(document.createTextNode('.' + c + '{background-image:url(' + background(th) + ')}\n'));
      bgDone[c] = 1;
    }
    return c;
  }
  function seeded(s) { return function () { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }; }
  function stringY(x) { var u = (x - 5) / 5; return 1.06 + 0.1 * (1 - u * u); }
  function blob(g, x, y, r, c) { var gr = g.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, c); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, g.canvas.width, g.canvas.height); }
  function rrect(g, x, y, w, h, r) { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); }
  function wave(g, y, amp, c, W, H, ph) { g.fillStyle = c; g.beginPath(); g.moveTo(0, H); for (var x = 0; x <= W; x += 10) g.lineTo(x, y + Math.sin(x / W * 6.3 + ph) * amp); g.lineTo(W, H); g.closePath(); g.fill(); }
  function diamond(g, x, y, r, c, a) { g.globalAlpha = a; g.fillStyle = c; g.beginPath(); g.moveTo(x, y - r); g.lineTo(x + r, y); g.lineTo(x, y + r); g.lineTo(x - r, y); g.closePath(); g.fill(); g.globalAlpha = 1; }
  function leaf(g, x, y, s, rot, c) {
    g.save(); g.translate(x, y); g.rotate(rot); g.fillStyle = c; g.beginPath(); g.moveTo(0, -s);
    g.bezierCurveTo(s * 0.75, -s * 0.6, s * 0.7, s * 0.45, 0, s); g.bezierCurveTo(-s * 0.7, s * 0.45, -s * 0.75, -s * 0.6, 0, -s); g.fill();
    g.strokeStyle = 'rgba(80,40,10,.28)'; g.lineWidth = s * 0.07; g.beginPath(); g.moveTo(0, -s * 0.75); g.lineTo(0, s * 1.3); g.stroke(); g.restore();
  }
  function pumpkin(g, x, y, r, c, lc) {
    g.fillStyle = mix(c, '#000000', 0.12); [-0.5, 0.5].forEach(function (k) { g.beginPath(); g.ellipse(x + k * r * 0.62, y, r * 0.6, r * 0.72, 0, 0, 7); g.fill(); });
    g.fillStyle = c; g.beginPath(); g.ellipse(x, y, r * 0.58, r * 0.76, 0, 0, 7); g.fill();
    g.fillStyle = '#6b4a2a'; g.fillRect(x - r * 0.07, y - r * 0.98, r * 0.14, r * 0.3);
    leaf(g, x + r * 0.28, y - r * 0.86, r * 0.2, 1.2, lc);
  }

  /* --- 装饰小图（透明 PNG：银杏、印章、进度环、箭头、星芒） --- */
  var decoCache = {};
  function dataToBlob(d) { var p = d.split(','), bin = atob(p[1]), u = new Uint8Array(bin.length); for (var i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); return new Blob([u], { type: p[0].split(':')[1].split(';')[0] }); }
  function D(x, y, w, h, key, paint) {
    if (!decoCache[key]) {
      var cv = canvas(w * 150, h * 150); paint(cv.getContext('2d'), cv.width, cv.height);
      var data = cv.toDataURL('image/png'); decoCache[key] = { data: data, url: URL.createObjectURL(dataToBlob(data)) };
    }
    return { t: 'img', x: x, y: y, w: w, h: h, data: decoCache[key].data, url: decoCache[key].url, deco: true };
  }
  function ginkgoLeaf(g, x, y, r, rot, col) {
    g.save(); g.translate(x, y); g.rotate(rot); g.fillStyle = col; g.strokeStyle = col;
    g.lineWidth = r * 0.06; g.lineCap = 'round'; g.beginPath(); g.moveTo(0, 0); g.quadraticCurveTo(r * 0.12, r * 0.5, r * 0.02, r * 0.95); g.stroke();
    var a0 = -Math.PI / 2 - 1.0, a1 = -Math.PI / 2 + 1.0;
    g.beginPath(); g.moveTo(0, 0);
    for (var k = 0; k <= 24; k++) {
      var a = a0 + (a1 - a0) * k / 24, rr = r * (1 + 0.045 * Math.sin(k * 1.9));
      if (k === 12) g.lineTo(Math.cos(a) * r * 0.68, Math.sin(a) * r * 0.68);
      g.lineTo(Math.cos(a) * rr, Math.sin(a) * rr);
    }
    g.closePath(); g.fill();
    g.globalCompositeOperation = 'destination-out'; g.lineWidth = Math.max(1, r * 0.02);
    for (var v = 1; v < 11; v++) { var b = a0 + (a1 - a0) * v / 11; g.beginPath(); g.moveTo(Math.cos(b) * r * 0.18, Math.sin(b) * r * 0.18); g.lineTo(Math.cos(b) * r * 0.9, Math.sin(b) * r * 0.9); g.stroke(); }
    g.globalCompositeOperation = 'source-over'; g.restore();
  }
  function paintGinkgo(col, flip) {
    return function (g, W, H) {
      if (flip) { g.translate(W, 0); g.scale(-1, 1); }
      var R = Math.min(W, H) * 0.3, L = [[0.16, 0.5, 0.95, -0.7], [0.34, 0.3, 1.05, -0.05], [0.52, 0.45, 0.85, 0.65], [0.2, 0.18, 0.7, -1.3], [0.68, 0.24, 0.72, 1.15], [0.43, 0.74, 0.62, 2.7], [0.84, 0.55, 0.55, 1.9], [0.07, 0.82, 0.5, -2.2]];
      L.forEach(function (l) { ginkgoLeaf(g, l[0] * W, l[1] * H, R * l[2], l[3], col); });
      var rnd = seeded(11); g.globalCompositeOperation = 'destination-out';
      for (var i = 0; i < W * H / 60; i++) { g.fillStyle = 'rgba(0,0,0,' + (rnd() * 0.7) + ')'; g.fillRect(rnd() * W, rnd() * H, 1.6, 1.6); }
      g.globalCompositeOperation = 'source-over';
    };
  }
  function paintSeal(col, txt) {
    return function (g, W, H) {
      g.fillStyle = col; rrect(g, W * 0.05, H * 0.05, W * 0.9, H * 0.9, W * 0.1); g.fill();
      g.fillStyle = '#ffffff'; g.textAlign = 'center'; g.textBaseline = 'middle';
      var cs = txt.split('');
      if (cs.length === 1) { g.font = 'bold ' + (W * 0.6) + 'px KaiTi, STKaiti, serif'; g.fillText(cs[0], W / 2, H * 0.53); }
      else { g.font = 'bold ' + (W * 0.36) + 'px KaiTi, STKaiti, serif'; g.fillText(cs[0], W / 2, H * 0.3); g.fillText(cs[1], W / 2, H * 0.72); }
      var rnd = seeded(5); g.globalCompositeOperation = 'destination-out';
      for (var i = 0; i < W * H / 40; i++) { g.fillStyle = 'rgba(0,0,0,' + (rnd() * 0.5) + ')'; g.fillRect(rnd() * W, rnd() * H, 2, 2); }
      g.globalCompositeOperation = 'source-over';
    };
  }
  function paintRing(frac, col, track) {
    return function (g, W) {
      var r = W * 0.4, c = W / 2; g.lineWidth = W * 0.12; g.lineCap = 'round';
      g.strokeStyle = track; g.beginPath(); g.arc(c, c, r, 0, 7); g.stroke();
      g.strokeStyle = col; g.beginPath(); g.arc(c, c, r, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * Math.max(0.02, frac)); g.stroke();
    };
  }
  function paintChevrons(col, left) {
    return function (g, W, H) {
      if (left) { g.translate(W, 0); g.scale(-1, 1); }
      g.fillStyle = col;
      [[0.05, 0.55], [0.42, 0.75]].forEach(function (p) {
        var x = p[0] * W, s = p[1];
        g.beginPath(); g.moveTo(x, H * (0.5 - 0.42 * s)); g.lineTo(x + W * 0.34 * s, H * 0.5); g.lineTo(x, H * (0.5 + 0.42 * s)); g.lineTo(x + W * 0.1 * s, H * 0.5); g.closePath(); g.fill();
      });
    };
  }
  function paintSpark(col) {
    return function (g, W, H) {
      g.fillStyle = col; g.beginPath(); var c = W / 2, m = H / 2;
      g.moveTo(c, 0); g.quadraticCurveTo(c, m, W, m); g.quadraticCurveTo(c, m, c, H); g.quadraticCurveTo(c, m, 0, m); g.quadraticCurveTo(c, m, c, 0); g.fill();
    };
  }

  /* --- 元素 --- */
  function R(x, y, w, h, o) { return Object.assign({ t: 'rect', x: x, y: y, w: w, h: h }, o); }
  function T(x, y, w, h, runs, o) { return Object.assign({ t: 'text', x: x, y: y, w: w, h: h, runs: typeof runs === 'string' ? [{ text: runs }] : runs }, o); }
  var FONT = { kai: ['var(--kai)', 'KaiTi'], zh: ['var(--sans)', 'Microsoft YaHei'], py: ['var(--sans)', 'Segoe UI'] };
  function textW(s, pt, ls) { var w = 0; for (var i = 0; i < s.length; i++) w += /[　-鿿＀-￯]/.test(s[i]) ? 1 : 0.58; return w * pt / 72 + (ls || 0) * s.length / 72; }
  function caps(x, y, w, h, text, th, o) { return T(x, y, w, h, text, Object.assign({ size: 8, bold: true, color: th.ink2, font: 'py', ls: 1.6, valign: 'middle' }, o)); }
  function pill(els, x, y, text, o) {
    var size = o.size || 11, h = o.h || 0.34, w = o.w || textW(text, size) + 0.4;
    if (o.right) x -= w;
    if (o.drop) els.push(R(x + 0.04, y + 0.045, w, h, { fill: o.drop, r: h / 2, hide: o.hide }));
    els.push(R(x, y, w, h, { fill: o.fill, line: o.line, lw: o.lw || 1, r: o.r != null ? o.r : h / 2, hide: o.hide }));
    els.push(T(x, y, w, h, text, { size: size, color: o.color, bold: o.bold !== false, align: 'center', valign: 'middle', font: o.font || 'zh', hide: o.hide }));
    return o.right ? x : x + w;
  }
  function say(x, y, s, text, fill) { return { t: 'say', x: x, y: y, w: s, h: s, text: text, fill: fill }; }
  function info(w) {
    var r = LIST[IDX[w]], d = WORDS[w], strokes = 0;
    w.split('').forEach(function (c) { if (STROKES[c]) strokes += STROKES[c].strokes.length; });
    var p0 = d && d.pos && d.pos[0];
    return {
      w: w, r: r, d: d, py: r[1], no: IDX[w] + 1, strokes: strokes, img: d && d.img,
      zh: d ? d.zh.slice(0, 2).map(function (z) { return z.replace(/[。.]+$/, ''); }).join('；') + '。' : '', en: d ? d.en.slice(0, 2).join('; ') : r[3],
      pos: p0 ? p0[0] + ' ' + String(p0[1] || '').toUpperCase() : posText(w).split(' · ')[0],
      ex: d && d.ex ? d.ex : [], use: d && d.use && d.use.length ? d.use : (d && d.rel || []).map(function (x) { return x + '  ' + (LIST[IDX[x]] || ['', ''])[1]; })
    };
  }
  function hzSize(w, base) { return w.length === 1 ? base : w.length === 2 ? base * 0.86 : w.length === 3 ? base * 0.68 : base * 0.54; }
  function uniqChars(w) { return w.split('').filter(function (c, i, a) { return STROKES[c] && a.indexOf(c) === i; }); }
  function charLabel(I, c) {
    var hz = I.d && I.d.hz ? I.d.hz.filter(function (z) { return z.c === c; })[0] : null;
    return c + ' · ' + STROKES[c].strokes.length + ' 画' + (hz ? ' · 部首 ' + hz.rad + (hz.struct ? ' · ' + hz.struct : '') : '');
  }
  function tokensRuns(zh, word, size, th) {
    return zh.split(' ').map(function (t) { var hit = t === word || (word.length > 1 && t.indexOf(word) >= 0); return { text: t, size: size, color: hit ? th.at : th.ink, bold: hit }; });
  }
  function imgBox(els, I, x, y, w, h, th, o) {
    o = o || {};
    if (!I.img) { els.push(R(x, y, w, h, { fill: th.tile2, r: 0.1 })); els.push(T(x, y, w, h, I.w, { size: 60, color: th.card, font: 'kai', align: 'center', valign: 'middle' })); return; }
    if (o.frame !== false) els.push(R(x - 0.05, y - 0.05, w + 0.1, h + 0.1, { fill: o.frameFill || th.card, line: o.frameLine || th.frame, lw: o.lw || 1.5, r: o.r != null ? o.r : 0.1, dash: o.dash }));
    els.push({ t: 'img', x: x, y: y, w: w, h: h, src: I.img.src });
  }
  /* 词卡上的笔顺格：每个字一个田字格（网页实时演示，PPT 里是 GIF）；关掉“笔顺动画”时直接显示大字 */
  function strokeRow(e, th, I, x, y, w, maxS, o) {
    o = o || {};
    var chars = I.w.split(''), n = chars.length, gap = 0.12, s = Math.min(maxS, (w - (n - 1) * gap) / n), tot = n * s + (n - 1) * gap, x0 = o.center ? x + (w - tot) / 2 : x;
    if (!deck.parts.stroke) { e.push(T(x, y, w, s, I.w, { size: Math.min(s * 72 * 0.85, hzSize(I.w, 100)), color: o.color || th.ink, font: 'kai', align: o.center ? 'center' : 'left', valign: 'middle', lh: 1 })); return s; }
    chars.forEach(function (c, k) {
      var bx = x0 + k * (s + gap), bg = o.bg || th.card, r = o.r != null ? o.r : 0.14;
      if (o.drop) e.push(R(bx + 0.04, y + 0.045, s, s, { fill: o.drop, r: r }));
      e.push(R(bx, y, s, s, { fill: bg, line: o.line || th.tile, lw: 1.2, r: r }));
      if (STROKES[c]) e.push({ t: 'stroke', x: bx + s * 0.05, y: y + s * 0.05, w: s * 0.9, h: s * 0.9, ch: c, bg: bg });
      else e.push(T(bx, y, s, s, c, { size: s * 72 * 0.7, font: 'kai', align: 'center', valign: 'middle', color: th.ink }));
    });
    return s;
  }
  /* 图片说明 + 拼音 + 图片来源 */
  function capBlock(e, I, th, x, y, w, o) {
    if (!I.img) return;
    o = o || {}; var h = o.h || 0.36;
    e.push(T(x, y, w, h, I.img.cap, { size: o.size || 13, color: th.ink, font: o.font || 'zh', align: 'center', valign: 'middle' }));
    e.push(T(x, y + h, w, h * 0.8, pinyinOf(I.img.cap), { size: o.pySize || 10, color: th.at, font: 'py', align: 'center', valign: 'middle' }));
    if (!o.noCredit) e.push(T(x, y + h * 1.85, w, 0.3, '图：' + I.img.by + ' · ' + I.img.lic, { size: 6.5, color: th.ink2, font: 'py', align: 'center', valign: 'middle' }));
  }
  /* 用 HSK1 词表给句子注拼音（最长匹配；图片说明只用 HSK1 词） */
  var PMARK = { '。': '.', '，': ',', '？': '?', '！': '!', '、': ',', '：': ':', '；': ';' };
  function pinyinOf(str) {
    var out = [], i = 0;
    while (i < str.length) {
      var ch = str.charAt(i);
      if (PMARK[ch]) { if (out.length) out[out.length - 1] += PMARK[ch]; i++; continue; }
      var hit = null;
      for (var L = Math.min(4, str.length - i); L >= 1; L--) { var sub = str.substr(i, L); if (IDX[sub] != null) { hit = sub; break; } }
      if (!hit) { i++; continue; }
      out.push(LIST[IDX[hit]][1].split('/')[0]); i += hit.length;
    }
    var t = out.join(' ');
    return t.charAt(0).toUpperCase() + t.slice(1);
  }
  function fit4x3(x, y, w, h) { var iw = Math.min(w, h * 4 / 3), ih = iw * 3 / 4; return [x + (w - iw) / 2, y + (h - ih) / 2, iw, ih]; }
  function wordNotes(I) { var tips = strokeNotes(I, uniqChars(I.w)); return I.w + '  ' + I.py + '\n' + (I.zh ? I.zh + '\n' : '') + I.en + (I.d && I.d.bop ? '\n\n导入：' + I.d.bop.b : '') + (tips ? '\n\n汉字：\n' + tips : ''); }

  /* --- 通用卡片 / 标签（复习页、对话页和旧模板使用） --- */
  function card(els, th, x, y, w, h, o) {
    o = o || {};
    if (th.key === 'farm' && !o.plain) {
      els.push(R(x, y, w, h, { fill: th.frame, r: 0.2 }));
      els.push(R(x + 0.07, y + 0.07, w - 0.14, h - 0.14, { fill: o.fill || th.card, r: 0.15 }));
      var nail = mix(th.frame, '#000000', 0.3);
      [[x + 0.035, y + 0.035], [x + w - 0.105, y + 0.035], [x + 0.035, y + h - 0.105], [x + w - 0.105, y + h - 0.105]].forEach(function (p) { els.push(R(p[0] + 0.01, p[1] + 0.01, 0.05, 0.05, { fill: nail, ellipse: true })); });
    } else if (th.key === 'diner' && !o.plain) {
      if (o.hang) [x + Math.min(0.45, w / 4), x + w - Math.min(0.45, w / 4)].forEach(function (hx) {
        var sy = stringY(hx); els.push(R(hx - 0.006, sy, 0.012, y - sy, { fill: th.frame })); els.push(R(hx - 0.04, sy - 0.07, 0.08, 0.2, { fill: mix(th.frame, '#ffffff', 0.3), r: 0.02 }));
      });
      els.push(R(x, y, w, h, { fill: o.fill || th.card, line: th.grid, lw: 1.5, r: 0.1 }));
      if (!o.noband) els.push(R(x, y, w, 0.09, { fill: th.accent, r: 0.03 }));
    } else if (th.key === 'ink') {
      els.push(R(x, y, w, h, { fill: o.fill || th.tile2, r: 0.22 }));
    } else if (th.key === 'shop') {
      els.push(R(x, y, w, h, { fill: o.fill || th.card, line: th.a2, lw: 1.5, r: 0.06 }));
    } else {
      els.push(R(x, y, w, h, { fill: o.fill || th.paper, r: 0.2, shadow: true }));
    }
  }
  function tagEl(els, th, text, x, y) {
    x = x == null ? 0.5 : x; y = y == null ? 0.58 : y;
    var w = textW(text, 14) + 0.5;
    els.push(R(x, y, w, 0.42, { fill: th.tag, r: th.key === 'shop' ? 0.04 : th.key === 'farm' || th.key === 'diner' ? 0.1 : 0.21 }));
    els.push(T(x, y, w, 0.42, text, { size: 14, color: th.tagInk, bold: true, align: 'center', valign: 'middle', font: 'zh' }));
    return x + w;
  }

  /* =====================================================================
     各风格的版式
     ===================================================================== */
  var LAY = {};

  /* ---------- 朴物 · 新中式：米色纸、墨色银杏、竖排、印章、圆角色块 ---------- */
  LAY.ink = {
    cover: function (th) {
      var e = [], title = deck.title || 'HSK 1 · 生词';
      e.push(D(0, 0, 3.0, 1.75, 'gk' + th.ink, paintGinkgo(th.ink)));
      e.push(D(8.85, 0.55, 0.62, 0.62, 'seal汉语', paintSeal(th.seal, '汉语')));
      e.push(T(3.2, 0.5, 5.5, 1.2, title, { size: title.length > 8 ? 32 : 40, color: th.ink, font: 'kai', align: 'right', valign: 'middle' }));
      e.push(caps(3.2, 1.72, 6.25, 0.3, 'CHINESE VOCABULARY  ·  HSK 1', th, { align: 'right', ls: 3 }));
      e.push(T(3.2, 2.02, 6.25, 0.4, 'HSK 3.0 一级 · 共 ' + cart.length + ' 个生词　｜　听 · 说 · 读 · 写', { size: 12, color: th.ink2, align: 'right', valign: 'middle' }));
      e.push(R(0.55, 2.65, 8.9, 2.5, { fill: th.tile, r: 0.3 }));
      var show = cart.length > 12 ? cart.slice(0, 11) : cart, cw = (8.9 - 0.4 - 5 * 0.15) / 6, ch = 0.98;
      show.forEach(function (w, k) {
        var x = 0.75 + (k % 6) * (cw + 0.15), y = 2.85 + Math.floor(k / 6) * (ch + 0.15);
        e.push(R(x, y, cw, ch, { fill: th.card, r: 0.18 }));
        e.push(T(x, y + 0.06, cw, 0.6, w, { size: w.length > 2 ? 18 : 24, color: th.ink, font: 'kai', align: 'center', valign: 'middle' }));
        e.push(T(x, y + 0.64, cw, 0.28, LIST[IDX[w]][1], { size: 9, color: th.at, font: 'py', align: 'center', valign: 'middle' }));
      });
      if (cart.length > 12) { var x = 0.75 + 5 * (cw + 0.15), y = 2.85 + ch + 0.15; e.push(R(x, y, cw, ch, { fill: th.ink, r: 0.18 })); e.push(T(x, y, cw, ch, '+' + (cart.length - 11), { size: 20, bold: true, color: th.paper, align: 'center', valign: 'middle', font: 'py' })); }
      return { kind: 'cover', els: e, notes: '本课生词：' + cart.join('、') };
    },
    word: function (I, i, th) {
      var e = [];
      e.push(R(0.55, 0.75, 4.35, 4.4, { fill: th.tile, r: 0.3 }));
      var b = fit4x3(0.8, 1.15, 3.85, 2.8); imgBox(e, I, b[0], b[1], b[2], b[3], th, { frameFill: th.card, frameLine: th.card, r: 0.14 });
      e.push(D(0, 0, 2.1, 1.25, 'gk' + th.ink, paintGinkgo(th.ink)));
      capBlock(e, I, th, 0.8, 4.04, 3.85, { size: 14, font: 'kai' });
      e.push(caps(5.25, 0.68, 3.5, 0.3, 'VOCABULARY  ·  ' + (i + 1) + ' / ' + cart.length, th, { ls: 2.5 }));
      e.push(D(8.95, 0.6, 0.55, 0.55, 'seal生词', paintSeal(th.seal, '生词')));
      var sz = strokeRow(e, th, I, 5.25, 1.05, 3.6, 1.75, {}), y = 1.05 + sz + 0.12;
      e.push(T(5.25, y, 3.6, 0.55, I.py, { size: 26, color: th.at, font: 'py', valign: 'middle' }));
      e.push(say(8.98, y + 0.04, 0.46, I.w, th.ink));
      e.push(R(5.25, y + 0.66, 4.25, 0.016, { fill: th.ink }));
      pill(e, 5.25, y + 0.8, I.pos, { fill: th.ink, color: th.paper, size: 9.5, h: 0.3, font: 'py' });
      if (I.zh) e.push(T(5.25, y + 1.18, 4.25, 0.42, I.zh, { size: I.zh.length > 24 ? 12.5 : 15, color: th.ink, valign: 'middle' }));
      e.push(T(5.25, y + (I.zh ? 1.58 : 1.22), 4.25, 0.42, I.en, { size: 11.5, color: th.ink2, italic: true, font: 'py', valign: 'middle' }));
      return { kind: 'word', els: e, notes: wordNotes(I) };
    },
    use: function (I, th) {
      if (!I.ex.length) return null;
      var e = [];
      e.push(T(0.6, 0.5, 5, 0.6, [{ text: I.w + '  ', size: 26, color: th.ink, font: 'kai' }, { text: I.py, size: 14, color: th.at, font: 'py' }], { valign: 'middle' }));
      e.push(caps(5.0, 0.62, 3.8, 0.3, 'COLLOCATIONS  ·  EXAMPLES', th, { align: 'right', ls: 2.5 }));
      e.push(D(8.95, 0.55, 0.55, 0.55, 'seal例句', paintSeal(th.seal, '例句')));
      var U = I.use.slice(0, 4), n = Math.max(1, U.length), th1 = Math.min(0.9, (3.85 - (n - 1) * 0.15) / n);
      U.forEach(function (u, k) {
        var y = 1.3 + k * (th1 + 0.15);
        e.push(R(0.55, y, 3.6, th1, { fill: th.tile2, r: 0.2 }));
        e.push(caps(0.75, y + 0.06, 3.2, 0.22, '搭配 0' + (k + 1), th, { size: 7 }));
        e.push(T(0.75, y + 0.27, 3.2, th1 - 0.32, u, { size: u.length > 20 ? 11 : 12.5, color: th.ink, valign: 'middle' }));
      });
      e.push(R(4.4, 1.3, 5.1, 3.85, { fill: th.card, r: 0.28, shadow: true }));
      var X = I.ex.slice(0, 3), bh = 3.55 / X.length;
      X.forEach(function (x, k) {
        var y = 1.48 + k * bh;
        if (k) e.push(R(4.7, y - 0.08, 4.55, 0.012, { fill: th.tile }));
        e.push(R(4.6, y + 0.07, 0.36, 0.36, { fill: th.ink, ellipse: true }));
        e.push(T(4.6, y + 0.07, 0.36, 0.36, String(k + 1), { size: 11, bold: true, color: th.paper, align: 'center', valign: 'middle', font: 'py' }));
        e.push(T(5.1, y, 3.65, 0.5, tokensRuns(x.zh, I.w, 18, th), { valign: 'middle' }));
        e.push(say(8.85, y + 0.05, 0.4, x.zh, th.ink));
        e.push(T(5.1, y + 0.5, 4.2, 0.28, x.py, { size: 10.5, color: th.ink2, font: 'py', valign: 'middle' }));
        e.push(T(5.1, y + 0.76, 4.2, 0.28, x.en, { size: 10, color: th.ink2, font: 'py', italic: true, valign: 'middle' }));
      });
      return { kind: 'use', els: e, notes: exNotes(X) };
    }
  };

  /* ---------- 复古小铺：格子纸、黑条幅、红色票据、虚线框、投影按钮 ---------- */
  function shopChrome(e, th, label) {
    e.push(caps(0.35, 0.04, 4, 0.24, 'HSK 1 · VOCABULARY GOODS', th, { color: th.ink, size: 7 }));
    e.push(caps(5.65, 0.04, 4, 0.24, "TEACHER'S DECK", th, { color: th.ink, size: 7, align: 'right' }));
    e.push(R(0, 0.29, 10, 0.03, { fill: th.ink })); e.push(R(0, 0.35, 10, 0.012, { fill: th.ink }));
    e.push(R(0.35, 0.44, 9.3, 0.42, { fill: th.ink, r: 0.04 }));
    e.push(T(0.35, 0.44, 9.3, 0.42, '•  •  •     ' + label + '     •  •  •', { size: 13, bold: true, color: th.paper, align: 'center', valign: 'middle', ls: 1 }));
    e.push(R(0.35, 0.98, 9.3, 4.3, { fill: th.paper, line: th.a2, lw: 2, r: 0.1 }));
    e.push(R(0.48, 1.1, 9.04, 4.06, { line: th.a2, lw: 1, dash: true, r: 0.06 }));
  }
  LAY.shop = {
    cover: function (th) {
      var e = [], title = deck.title || '生词';
      e.push(T(2.5, 0.12, 5, 0.36, 'V O C A B U L A R Y', { size: 13, bold: true, color: th.at, align: 'center', valign: 'middle', font: 'py' }));
      e.push(D(3.0, 0.2, 0.22, 0.22, 'sp' + th.at, paintSpark(th.at))); e.push(D(6.78, 0.2, 0.22, 0.22, 'sp' + th.at, paintSpark(th.at)));
      e.push(T(2.2, 0.5, 5.6, 0.95, title, { size: title.length > 6 ? 32 : 44, bold: true, color: th.at, align: 'center', valign: 'middle' }));
      e.push(D(1.35, 0.72, 0.75, 0.5, 'chL' + th.at, paintChevrons(th.at, true))); e.push(D(7.9, 0.72, 0.75, 0.5, 'chR' + th.at, paintChevrons(th.at)));
      e.push(R(0.35, 0.92, 0.95, 0.03, { fill: th.ink })); e.push(R(0.35, 1.0, 0.95, 0.012, { fill: th.ink }));
      e.push(R(8.7, 0.92, 0.95, 0.03, { fill: th.ink })); e.push(R(8.7, 1.0, 0.95, 0.012, { fill: th.ink }));
      e.push(caps(0.35, 1.08, 3, 0.22, 'HSK 1 GOODS', th, { color: th.ink, size: 6.5 })); e.push(caps(6.65, 1.08, 3, 0.22, 'CHINESE TALES', th, { color: th.ink, size: 6.5, align: 'right' }));
      e.push(R(0.35, 1.38, 9.3, 0.44, { fill: th.ink, r: 0.04 }));
      e.push(T(0.35, 1.38, 9.3, 0.44, '•  •  •     HSK 3.0 一级 · 共 ' + cart.length + ' 个生词     •  •  •', { size: 13, bold: true, color: th.paper, align: 'center', valign: 'middle' }));
      e.push(R(0.35, 1.95, 9.3, 3.33, { fill: th.paper, line: th.a2, lw: 2, r: 0.1 }));
      e.push(R(0.48, 2.07, 9.04, 3.09, { line: th.a2, lw: 1, dash: true, r: 0.06 }));
      var show = cart.slice(0, 12), cw = (8.6 - 5 * 0.16) / 6, ch = 1.32, rows = Math.ceil(show.length / 6), y0 = 2.12 + (3.0 - rows * ch - (rows - 1) * 0.15) / 2;
      show.forEach(function (w, k) {
        var x = 0.7 + (k % 6) * (cw + 0.16), y = y0 + Math.floor(k / 6) * (ch + 0.15);
        e.push(R(x + 0.04, y + 0.045, cw, ch, { fill: th.ink, r: 0.05 }));
        e.push(R(x, y, cw, ch, { fill: th.card, line: th.ink, lw: 1, r: 0.05 }));
        e.push(R(x, y, cw, 0.3, { fill: th.accent, r: 0.05 }));
        e.push(T(x, y, cw, 0.3, LIST[IDX[w]][1], { size: 9, bold: true, color: th.onA, align: 'center', valign: 'middle', font: 'py' }));
        e.push(T(x, y + 0.34, cw, 0.9, w, { size: w.length > 2 ? 19 : 26, bold: true, color: th.ink, align: 'center', valign: 'middle' }));
      });
      if (cart.length > 12) e.push(caps(0.7, 4.95, 8.6, 0.2, '… + ' + (cart.length - 12) + ' MORE', th, { align: 'right' }));
      return { kind: 'cover', els: e, notes: '本课生词：' + cart.join('、') };
    },
    word: function (I, i, th) {
      var e = []; shopChrome(e, th, '生词  VOCABULARY   ' + (i + 1) + ' / ' + cart.length);
      e.push(R(0.7, 1.3, 3.2, 3.62, { fill: th.card, line: th.a2, lw: 1.5, r: 0.06 }));
      e.push(caps(0.7, 1.36, 3.2, 0.26, 'W E L C O M E', th, { align: 'center', color: th.a2, size: 8 }));
      var b = fit4x3(0.88, 1.68, 2.84, 2.0); imgBox(e, I, b[0], b[1], b[2], b[3], th, { frameFill: th.card, frameLine: th.at, lw: 1.2, dash: true, r: 0.03 });
      if (I.img) {
        e.push(R(0.85, 3.8, 2.9, 0.38, { fill: th.ink, r: 0.04 }));
        e.push(T(0.85, 3.8, 2.9, 0.38, I.img.cap, { size: 11, bold: true, color: th.paper, align: 'center', valign: 'middle' }));
        e.push(T(0.85, 4.2, 2.9, 0.3, pinyinOf(I.img.cap), { size: 9.5, color: th.at, align: 'center', valign: 'middle', font: 'py' }));
        e.push(T(0.85, 4.52, 2.9, 0.34, '图：' + I.img.by + ' · ' + I.img.lic, { size: 6.5, color: th.ink2, align: 'center', valign: 'middle', font: 'py' }));
      }
      e.push(R(4.15, 1.3, 5.15, 1.25, { fill: th.accent, r: 0.08 }));
      e.push(R(4.15, 1.3, 0.13, 1.25, { fill: th.ink }));
      e.push(caps(4.42, 1.35, 3, 0.24, "TODAY'S WORD  ·  今日生词", th, { color: th.onA, size: 7 }));
      pill(e, 9.12, 1.38, I.pos, { right: true, fill: th.card, color: th.ink, size: 8.5, h: 0.28, font: 'py' });
      e.push(T(4.42, 1.56, 3.6, 0.6, I.w, { size: hzSize(I.w, 40), bold: true, color: th.onA, valign: 'middle' }));
      e.push(T(4.42, 2.12, 3.6, 0.36, I.py, { size: 15, color: th.onA, font: 'py', valign: 'middle' }));
      e.push(say(8.72, 1.98, 0.42, I.w, th.ink));
      e.push(caps(4.15, 2.66, 3, 0.24, '笔顺  STROKE ORDER', th, { color: th.a2 }));
      strokeRow(e, th, I, 4.15, 2.94, 5.15, 1.22, { line: th.ink, drop: th.ink, r: 0.04 });
      e.push(R(4.15, 4.3, 5.15, 0.8, { line: th.a2, lw: 1.2, dash: true, r: 0.06 }));
      if (I.zh) e.push(T(4.32, 4.33, 4.85, 0.38, I.zh, { size: I.zh.length > 26 ? 11.5 : 13, color: th.ink, valign: 'middle' }));
      e.push(T(4.32, I.zh ? 4.7 : 4.5, 4.85, 0.34, I.en, { size: 10.5, color: th.ink2, italic: true, font: 'py', valign: 'middle' }));
      return { kind: 'word', els: e, notes: wordNotes(I) };
    },
    use: function (I, th) {
      if (!I.ex.length) return null;
      var e = []; shopChrome(e, th, '搭配 · 例句   ' + I.w + '  ' + I.py);
      e.push(caps(0.7, 1.28, 3, 0.28, '搭配  PATTERNS', th, { color: th.a2 }));
      var U = I.use.slice(0, 4), n = Math.max(1, U.length), h = Math.min(0.78, (3.3 - (n - 1) * 0.14) / n);
      U.forEach(function (u, k) {
        var y = 1.6 + k * (h + 0.14);
        e.push(R(0.7, y, 3.2, h, { fill: th.card, line: th.a2, lw: 1, dash: true, r: 0.05 }));
        e.push(T(0.88, y, 2.9, h, u, { size: u.length > 20 ? 11 : 12.5, color: th.ink, valign: 'middle' }));
      });
      var X = I.ex.slice(0, 3), bh = 1.05, gap = (3.6 - X.length * bh) / Math.max(1, X.length - 1);
      X.forEach(function (x, k) {
        var y = 1.3 + k * (bh + Math.min(gap, 0.18));
        e.push(R(4.19, y + 0.05, 5.1, bh, { fill: th.ink, r: 0.05 }));
        e.push(R(4.15, y, 5.1, bh, { fill: th.card, line: th.ink, lw: 1, r: 0.05 }));
        e.push(R(4.15, y, 0.55, bh, { fill: th.accent, r: 0.05 }));
        e.push(T(4.15, y, 0.55, bh, '例' + (k + 1), { size: 12, bold: true, color: th.onA, align: 'center', valign: 'middle', vert: true }));
        e.push(T(4.85, y + 0.05, 3.75, 0.46, tokensRuns(x.zh, I.w, 17, th), { valign: 'middle' }));
        e.push(T(4.85, y + 0.5, 4.25, 0.25, x.py, { size: 9.5, color: th.ink2, font: 'py', valign: 'middle' }));
        e.push(T(4.85, y + 0.74, 4.25, 0.25, x.en, { size: 9.5, color: th.ink2, italic: true, font: 'py', valign: 'middle' }));
        e.push(say(8.72, y + 0.1, 0.4, x.zh, th.ink));
      });
      return { kind: 'use', els: e, notes: exNotes(X) };
    }
  };

  /* ---------- 暖调面板：地毯纹背景、奶油大面板、侧边词表、统计卡、进度环 ---------- */
  function panelChrome(e, th, cur, head, sub) {
    e.push(R(0.35, 0.3, 9.3, 5.0, { fill: th.card, r: 0.3, shadow: true }));
    e.push(R(0.35, 0.3, 1.9, 5.0, { fill: th.a2dark, r: 0.3 })); e.push(R(1.95, 0.3, 0.3, 5.0, { fill: th.a2dark }));
    e.push(R(0.55, 0.52, 0.38, 0.38, { fill: th.accent, r: 0.09 }));
    e.push(T(0.55, 0.52, 0.38, 0.38, '汉', { size: 14, bold: true, color: th.onA, align: 'center', valign: 'middle', font: 'kai' }));
    var light = mix(th.a2dark, '#ffffff', 0.6);
    e.push(T(1.02, 0.48, 1.2, 0.46, [{ text: 'HSK 1', size: 12, bold: true, color: '#ffffff', font: 'py', br: true }, { text: '生词表 · Words', size: 7.5, color: light }], { valign: 'middle', lh: 1.15 }));
    e.push(caps(0.55, 1.08, 1.6, 0.22, 'WORDS  ' + cart.length, th, { color: light, size: 7 }));
    var i = cart.indexOf(cur), max = 12, s = Math.max(0, Math.min(i - 5, cart.length - max)); if (s < 0 || i < 0) s = 0;
    cart.slice(s, s + max).forEach(function (w, k) {
      var y = 1.36 + k * 0.31, on = w === cur;
      if (on) e.push(R(0.47, y, 1.68, 0.28, { fill: mix(th.a2dark, '#ffffff', 0.2), r: 0.14 }));
      e.push(T(0.64, y, 1.5, 0.28, [{ text: w, size: 11.5, color: on ? '#ffffff' : light, font: 'kai' }, { text: '  ' + LIST[IDX[w]][1], size: 7, color: light, font: 'py' }], { valign: 'middle' }));
    });
    if (cart.length > max) e.push(caps(0.55, 5.05, 1.6, 0.2, (s + 1) + '–' + Math.min(cart.length, s + max) + ' / ' + cart.length, th, { color: light, size: 6.5 }));
    e.push(T(2.5, 0.46, 4.2, 0.46, head, { size: 20, bold: true, color: th.ink, valign: 'middle' }));
    e.push(caps(2.5, 0.9, 4.5, 0.26, sub, th, { ls: 1.5 }));
  }
  LAY.panel = {
    cover: function (th) {
      var e = []; panelChrome(e, th, null, deck.title || 'HSK 1 · 生词', 'OVERVIEW  ·  HSK 3.0 一级');
      var chars = {}, exs = 0; cart.forEach(function (w) { w.split('').forEach(function (c) { chars[c] = 1; }); exs += Math.min(3, info(w).ex.length); });
      [['生词', 'WORDS', cart.length, th.paper], ['汉字', 'CHARACTERS', Object.keys(chars).length, th.a2soft], ['例句', 'EXAMPLES', exs, th.paper]].forEach(function (s, k) {
        var x = 2.5 + k * 2.35;
        e.push(R(x, 1.3, 2.2, 1.55, { fill: s[3], r: 0.22, shadow: k !== 1 }));
        e.push(caps(x + 0.2, 1.4, 1.9, 0.26, s[1] + '  ' + s[0], th));
        e.push(T(x + 0.2, 1.66, 1.9, 1.0, String(s[2]), { size: 48, bold: true, color: k === 1 ? th.a2dark : th.at, valign: 'middle', font: 'py' }));
      });
      e.push(R(2.5, 3.0, 6.9, 2.15, { fill: th.paper, r: 0.22 }));
      e.push(caps(2.7, 3.08, 4, 0.28, 'THIS LESSON  本课生词', th));
      var x = 2.7, y = 3.42;
      cart.slice(0, 24).forEach(function (w) {
        var t = w + ' ' + LIST[IDX[w]][1], wd = textW(t, 10.5) + 0.3;
        if (x + wd > 9.25) { x = 2.7; y += 0.4; }
        if (y > 4.85) return;
        x = pill(e, x, y, t, { fill: th.card, color: th.ink, line: th.tile, size: 10.5, h: 0.32, bold: false }) + 0.1;
      });
      return { kind: 'cover', els: e, notes: '本课生词：' + cart.join('、') };
    },
    word: function (I, i, th) {
      var e = []; panelChrome(e, th, I.w, '生词 · Vocabulary', 'WORD ' + (i + 1) + ' OF ' + cart.length);
      pill(e, 9.4, 0.52, I.pos, { right: true, fill: th.accent, color: th.onA, size: 9.5, h: 0.34, font: 'py' });
      e.push(R(2.5, 1.3, 4.15, 1.62, { fill: th.paper, r: 0.22, shadow: true }));
      e.push(caps(2.68, 1.36, 3.5, 0.24, 'WORD  ·  笔顺', th));
      strokeRow(e, th, I, 2.6, 1.6, 3.95, 1.22, { center: true, bg: th.card, line: th.tile2, r: 0.12, color: th.at });
      e.push(R(6.8, 1.3, 2.6, 1.62, { fill: th.a2soft, r: 0.22 }));
      e.push(caps(6.98, 1.36, 2.3, 0.24, 'PINYIN  拼音', th, { color: th.a2dark }));
      e.push(T(6.9, 1.62, 2.4, 0.6, I.py, { size: I.py.length > 9 ? 15 : I.py.length > 6 ? 19 : 24, color: th.a2dark, font: 'py', align: 'center', valign: 'middle' }));
      e.push(say(7.88, 2.3, 0.44, I.w, th.a2));
      e.push(R(2.5, 3.05, 2.75, 2.1, { fill: th.paper, r: 0.22, shadow: true }));
      var b = fit4x3(2.62, 3.14, 2.51, 1.5); imgBox(e, I, b[0], b[1], b[2], b[3], th, { frameFill: th.frame, frameLine: th.frame, r: 0.1 });
      capBlock(e, I, th, 2.55, 4.68, 2.65, { size: 9.5, pySize: 7.5, h: 0.22, noCredit: true });
      e.push(R(5.4, 3.05, 4.0, 2.1, { fill: th.paper, r: 0.22 }));
      e.push(caps(5.58, 3.12, 3, 0.24, 'MEANING  意思', th));
      if (I.zh) e.push(T(5.58, 3.36, 3.7, 0.4, I.zh, { size: I.zh.length > 22 ? 12 : 14, color: th.ink, valign: 'middle' }));
      e.push(T(5.58, I.zh ? 3.74 : 3.4, 3.7, 0.34, I.en, { size: 10.5, color: th.ink2, italic: true, font: 'py', valign: 'middle' }));
      if (I.ex[0]) {
        e.push(R(5.55, 4.22, 3.7, 0.78, { fill: th.card, r: 0.2 }));
        e.push(T(5.72, 4.26, 3.0, 0.4, tokensRuns(I.ex[0].zh, I.w, 12.5, th), { valign: 'middle' }));
        e.push(T(5.72, 4.64, 3.0, 0.3, I.ex[0].py, { size: 8.5, color: th.ink2, font: 'py', valign: 'middle' }));
        e.push(say(8.75, 4.4, 0.42, I.ex[0].zh, th.accent));
      }
      if (I.img) e.push(T(2.5, 5.16, 2.75, 0.14, '图：' + I.img.by + ' · ' + I.img.lic, { size: 5.5, color: th.ink2, align: 'center', valign: 'middle', font: 'py' }));
      return { kind: 'word', els: e, notes: wordNotes(I) };
    },
    use: function (I, th) {
      if (!I.ex.length) return null;
      var e = []; panelChrome(e, th, I.w, '搭配 · 例句', 'PATTERNS & EXAMPLES  ·  ' + I.w + ' ' + I.py);
      e.push(R(2.5, 1.3, 2.7, 3.85, { fill: th.paper, r: 0.22 }));
      e.push(caps(2.68, 1.38, 2.4, 0.26, 'PATTERNS  搭配', th));
      var U = I.use.slice(0, 4), n = Math.max(1, U.length), h = Math.min(0.72, (3.3 - (n - 1) * 0.12) / n);
      U.forEach(function (u, k) {
        var y = 1.7 + k * (h + 0.12);
        e.push(R(2.65, y, 2.4, h, { fill: k % 2 ? th.a2soft : th.card, r: 0.16 }));
        e.push(T(2.8, y, 2.15, h, u, { size: u.length > 18 ? 10.5 : 12, color: th.ink, valign: 'middle' }));
      });
      e.push(R(5.35, 1.3, 4.05, 3.85, { fill: th.paper, r: 0.22, shadow: true }));
      e.push(caps(5.53, 1.38, 3, 0.26, 'EXAMPLES  例句', th));
      var X = I.ex.slice(0, 3), bh = 3.35 / X.length;
      X.forEach(function (x, k) {
        var y = 1.72 + k * bh;
        e.push(R(5.5, y + 0.06, 0.38, 0.38, { fill: k % 2 ? th.a2 : th.accent, ellipse: true }));
        e.push(T(5.5, y + 0.06, 0.38, 0.38, String(k + 1), { size: 11, bold: true, color: '#ffffff', align: 'center', valign: 'middle', font: 'py' }));
        e.push(T(6.0, y, 2.85, 0.5, tokensRuns(x.zh, I.w, 15, th), { valign: 'middle' }));
        e.push(T(6.0, y + 0.48, 3.3, 0.26, x.py, { size: 9, color: th.ink2, font: 'py', valign: 'middle' }));
        e.push(T(6.0, y + 0.72, 3.3, 0.26, x.en, { size: 9, color: th.ink2, italic: true, font: 'py', valign: 'middle' }));
        e.push(say(8.92, y + 0.06, 0.38, x.zh, th.a2));
      });
      return { kind: 'use', els: e, notes: exNotes(X) };
    }
  };

  /* ---------- 秋日农场 / 小餐馆（原有版式，颜色改为由主色推导） ---------- */
  var LAY_OLD = {
    cover: function (th) {
      var els = [], title = deck.title || 'HSK 1 · 生词';
      tagEl(els, th, '汉语课 · Chinese class');
      card(els, th, 1.1, 1.3, 7.8, 3.6, { hang: true });
      els.push(T(1.4, 1.55, 7.2, 1.0, title, { size: 40, bold: true, color: th.ink, align: 'center', valign: 'middle' }));
      els.push(T(1.4, 2.55, 7.2, 0.45, 'HSK 3.0 一级 · 共 ' + cart.length + ' 个生词', { size: 16, color: th.ink2, align: 'center', valign: 'middle' }));
      els.push(R(3.9, 3.1, 2.2, 0.03, { fill: th.accent }));
      els.push(T(1.5, 3.25, 7.0, 1.5, cart.slice(0, 24).join('　') + (cart.length > 24 ? '　…' : ''), { size: cart.length > 12 ? 20 : 26, color: th.at, align: 'center', valign: 'top', font: 'kai', lh: 1.35 }));
      return { kind: 'cover', els: els, notes: '本课生词：' + cart.join('、') };
    },
    word: function (I, i, th) {
      var els = [];
      tagEl(els, th, '生词 ' + (i + 1) + ' / ' + cart.length);
      card(els, th, 0.5, 1.25, 5.15, 3.9, { hang: true });
      els.push(T(0.75, 1.38, 4.65, 0.3, posText(I.w), { size: 11, color: th.ink2, valign: 'middle' }));
      strokeRow(els, th, I, 0.75, 1.72, 4.65, 1.45, { center: true, bg: th.card, line: th.grid, r: 0.1 });
      els.push(T(0.75, 3.24, 4.65, 0.52, I.py, { size: 28, color: th.at, font: 'py', align: 'center', valign: 'middle' }));
      els.push(say(4.85, 3.27, 0.46, I.w, th.accent));
      els.push(R(0.85, 3.84, 4.45, 0.02, { fill: th.outline }));
      if (I.zh) els.push(T(0.8, 3.92, 4.55, 0.55, I.zh, { size: I.zh.length > 22 ? 13 : 15, color: th.ink, valign: 'top' }));
      els.push(T(0.8, I.zh ? 4.47 : 3.95, 4.55, 0.6, I.en, { size: 12.5, color: th.ink2, font: 'py', italic: true, valign: 'top' }));
      card(els, th, 5.9, 1.25, 3.6, 3.9, { hang: true });
      imgBox(els, I, 6.07, 1.42, 3.26, 2.445, th, { frameFill: th.frame, frameLine: th.frame, r: 0.06 });
      capBlock(els, I, th, 6.07, 3.95, 3.26, { size: 13 });
      return { kind: 'word', els: els, notes: wordNotes(I) };
    },
    use: function (I, th) {
      if (!I.ex.length) return null;
      var els = [], tx = tagEl(els, th, '搭配 · 例句');
      els.push(T(tx + 0.2, 0.55, 4, 0.48, [{ text: I.w + '  ', size: 22, color: th.ink, font: 'kai' }, { text: I.py, size: 15, color: th.at, font: 'py' }], { valign: 'middle' }));
      card(els, th, 0.5, 1.25, 3.45, 3.9, { hang: true });
      els.push(T(0.75, 1.42, 3.0, 0.4, '常用搭配', { size: 15, bold: true, color: th.at, valign: 'middle' }));
      var lines = I.use.slice(0, 4), runs = lines.map(function (u, k) { return { text: '• ' + u, br: k < lines.length - 1 }; });
      els.push(T(0.75, 1.9, 3.0, 3.1, runs, { size: lines.join('').length > 70 ? 12 : 13.5, color: th.ink, valign: 'top', lh: 1.45, gap: 6 }));
      card(els, th, 4.2, 1.25, 5.3, 3.9, { hang: true });
      var X = I.ex.slice(0, 3), bh = 3.6 / X.length;
      X.forEach(function (x, k) {
        var y = 1.42 + k * bh;
        if (k) els.push(R(4.45, y - 0.06, 4.8, 0.015, { fill: th.outline }));
        els.push(T(4.45, y, 4.25, 0.5, tokensRuns(x.zh, I.w, 19, th), { valign: 'middle' }));
        els.push(say(8.85, y + 0.05, 0.4, x.zh, th.accent));
        els.push(T(4.45, y + 0.5, 4.8, 0.3, x.py, { size: 11.5, color: th.ink2, font: 'py', valign: 'middle' }));
        els.push(T(4.45, y + 0.8, 4.8, 0.3, x.en, { size: 11, color: th.ink2, font: 'py', italic: true, valign: 'middle' }));
      });
      return { kind: 'use', els: els, notes: exNotes(X) };
    }
  };
  LAY.farm = LAY_OLD; LAY.diner = LAY_OLD;
  function strokeNotes(I, chars) { return I.d && I.d.hz ? I.d.hz.filter(function (z) { return chars.indexOf(z.c) >= 0; }).map(function (z) { return z.c + '：' + z.tip; }).join('\n') : ''; }
  function exNotes(X) { return X.map(function (e) { return e.zh.replace(/ /g, '') + '  ' + e.py + '  ' + e.en; }).join('\n'); }

  /* --- 复习页 / 对话页（各风格共用，卡片样式随风格） --- */
  /* 课堂导入：用每个词的 BOPPPS“导入”和第一个趣味活动 */
  function warmSlide(th) {
    var ws = cart.filter(function (w) { return WORDS[w] && WORDS[w].bop; }).slice(0, 4); if (!ws.length) return null;
    var e = []; tagEl(e, th, '课堂导入 · Warm-up');
    e.push(caps(5.0, 0.64, 4.5, 0.3, 'LEAD-IN ACTIVITIES', th, { align: 'right', ls: 2 }));
    var n = ws.length, cols = n <= 2 ? n : 2, rows = Math.ceil(n / cols), gw = 0.25, cw = (9 - (cols - 1) * gw) / cols, ch = (3.85 - (rows - 1) * 0.2) / rows;
    ws.forEach(function (w, k) {
      var d = WORDS[w], x = 0.5 + (k % cols) * (cw + gw), y = 1.3 + Math.floor(k / cols) * (ch + 0.2), a = d.act && d.act[0];
      card(e, th, x, y, cw, ch, {});
      e.push(T(x + 0.25, y + 0.14, cw - 0.5, 0.5, [{ text: w + '  ', size: 20, color: th.ink, font: 'kai' }, { text: LIST[IDX[w]][1], size: 11, color: th.at, font: 'py' }], { valign: 'middle' }));
      e.push(T(x + 0.25, y + 0.66, cw - 0.5, ch - 0.66 - (a ? 0.5 : 0.12), d.bop.b, { size: rows > 1 ? 11.5 : 14, color: th.ink, valign: 'top', lh: 1.35 }));
      if (a) pill(e, x + 0.25, y + ch - 0.44, (a.tag ? a.tag + ' · ' : '') + a.name, { fill: th.accent, color: th.onA, size: 9.5, h: 0.3 });
    });
    return { kind: 'warm', els: e, notes: ws.map(function (w) { var d = WORDS[w]; return w + '：' + d.bop.b + (d.act ? '\n  ' + d.act.map(function (a) { return '【' + (a.tag || '') + '】' + a.name + '：' + a.how; }).join('\n  ') : ''); }).join('\n\n') };
  }
  /* 复习游戏：题目先显示，点击（或 PPT 下一页）再出答案 */
  function revealHint(e, th) { e.push(Object.assign(caps(5.2, 5.24, 4.3, 0.24, '点击显示答案  ·  CLICK TO REVEAL  ▶', th, { align: 'right', size: 7 }), { onlyQ: true })); }
  function gameHead(e, th, zh, en, part, parts) { var x = tagEl(e, th, zh + (parts > 1 ? ' ' + part + '/' + parts : '')); e.push(caps(x + 0.2, 0.64, 9.5 - x - 0.2, 0.3, en, th, { align: 'right', ls: 2 })); }
  function chunks(a, n) { var out = []; for (var i = 0; i < a.length; i += n) out.push(a.slice(i, i + n)); return out; }
  function picGame(words, th, part, parts) {
    var e = []; gameHead(e, th, '游戏 · 看图说词', 'LOOK AND SAY', part, parts);
    var n = words.length, cols = n <= 3 ? n : 3, rows = Math.ceil(n / cols), gap = 0.25;
    var ch = Math.min((3.75 - (rows - 1) * gap) / rows, ((9 - (cols - 1) * gap) / cols) * 0.75), cw = ch * 4 / 3, x0 = (10 - (cols * cw + (cols - 1) * gap)) / 2;
    words.forEach(function (w, k) {
      var I = info(w), x = x0 + (k % cols) * (cw + gap), y = 1.3 + Math.floor(k / cols) * (ch + gap);
      imgBox(e, I, x, y, cw, ch, th, { frameFill: th.card, frameLine: th.frame, r: 0.08 });
      e.push(R(x + 0.08, y + 0.08, 0.36, 0.36, { fill: th.accent, ellipse: true }));
      e.push(T(x + 0.08, y + 0.08, 0.36, 0.36, String(k + 1), { size: 11, bold: true, color: th.onA, align: 'center', valign: 'middle', font: 'py' }));
      var lw = Math.min(cw - 0.3, textW(w + '  ' + I.py, 13) + 0.5), lx = x + (cw - lw) / 2, ly = y + ch - 0.52;
      e.push(R(lx, ly, lw, 0.42, { fill: th.card, line: th.accent, lw: 1.2, r: 0.21, hide: true }));
      e.push(T(lx, ly, lw, 0.42, [{ text: w + '  ', size: 15, color: th.ink, font: 'kai' }, { text: I.py, size: 10, color: th.at, font: 'py' }], { align: 'center', valign: 'middle', hide: true }));
    });
    revealHint(e, th);
    return { kind: 'game', els: e, notes: '看图说词：请学生看图说出词语。\n答案：' + words.map(function (w, k) { return (k + 1) + '. ' + w; }).join('  ') };
  }
  function exFor(w, last) { var a = exOf(w); return a.length ? a[last ? a.length - 1 : 0] : null; }
  function clozeGame(words, th, part, parts) {
    var items = words.map(function (w) { return { w: w, ex: exFor(w) }; }).filter(function (x) { return x.ex; });
    if (!items.length) return null;
    var e = []; gameHead(e, th, '游戏 · 选词填空', 'FILL IN THE BLANKS', part, parts);
    card(e, th, 0.5, 1.25, 9, 3.9, {});
    var x = 0.75;
    shuffle(items.map(function (it) { return it.w; })).forEach(function (w) { x = pill(e, x, 1.42, w, { fill: th.soft, color: th.ink, size: 13, h: 0.38, font: 'kai' }) + 0.14; });
    var rh = Math.min(0.66, 3.0 / items.length);
    items.forEach(function (it, k) {
      var y = 2.0 + k * rh;
      e.push(R(0.75, y + rh / 2 - 0.16, 0.32, 0.32, { fill: th.accent, ellipse: true }));
      e.push(T(0.75, y + rh / 2 - 0.16, 0.32, 0.32, String(k + 1), { size: 10, bold: true, color: th.onA, align: 'center', valign: 'middle', font: 'py' }));
      var q = it.ex.zh.split(' ').map(function (t) { return t === it.w ? '＿＿＿' : t; }).join('');
      e.push(T(1.2, y, 4.9, rh, q, { size: 16, color: th.ink, valign: 'middle' }));
      e.push(T(6.15, y, 2.2, rh, it.ex.en, { size: 9, color: th.ink2, italic: true, font: 'py', valign: 'middle' }));
      pill(e, 9.25, y + rh / 2 - 0.17, it.w, { right: true, fill: th.accent, color: th.onA, size: 12, h: 0.34, font: 'kai', hide: true });
    });
    revealHint(e, th);
    return { kind: 'game', els: e, notes: items.map(function (it, k) { return (k + 1) + '. ' + it.ex.zh.replace(/ /g, '') + '  ' + it.ex.py; }).join('\n') };
  }
  function transGame(words, th, part, parts) {
    var items = words.map(function (w) { return { w: w, ex: exFor(w, true) }; }).filter(function (x) { return x.ex; });
    if (!items.length) return null;
    var e = []; gameHead(e, th, '游戏 · 翻译挑战', 'SAY IT IN CHINESE', part, parts);
    card(e, th, 0.5, 1.25, 9, 3.9, {});
    var rh = Math.min(0.72, 3.6 / items.length);
    items.forEach(function (it, k) {
      var y = 1.42 + k * rh;
      if (k) e.push(R(0.75, y - 0.02, 8.5, 0.012, { fill: th.outline }));
      e.push(R(0.75, y + rh / 2 - 0.16, 0.32, 0.32, { fill: th.accent, ellipse: true }));
      e.push(T(0.75, y + rh / 2 - 0.16, 0.32, 0.32, String(k + 1), { size: 10, bold: true, color: th.onA, align: 'center', valign: 'middle', font: 'py' }));
      e.push(T(1.2, y, 3.7, rh, it.ex.en, { size: 13, color: th.ink, font: 'py', valign: 'middle' }));
      e.push(T(5.0, y + 0.02, 4.25, rh * 0.58, tokensRuns(it.ex.zh, it.w, 15, th), { valign: 'middle', hide: true }));
      e.push(T(5.0, y + rh * 0.58, 4.25, rh * 0.38, it.ex.py, { size: 9, color: th.ink2, font: 'py', valign: 'middle', hide: true }));
    });
    revealHint(e, th);
    return { kind: 'game', els: e, notes: items.map(function (it, k) { return (k + 1) + '. ' + it.ex.en + ' → ' + it.ex.zh.replace(/ /g, ''); }).join('\n') };
  }
  function reviewSlide(words, th, off) {
    var els = [];
    tagEl(els, th, '游戏 · 读一读' + (cart.length > 20 ? '（' + (off + 1) + '–' + (off + words.length) + '）' : ''));
    els.push(caps(5.0, 0.64, 4.5, 0.3, 'READ ALOUD', th, { align: 'right', ls: 2 }));
    var cols = 5, gx = 0.15, gy = 0.12, cw = (9 - (cols - 1) * gx) / cols, rows = Math.ceil(words.length / cols), ch = Math.min(0.9, (3.85 - (rows - 1) * gy) / Math.max(rows, 1));
    words.forEach(function (w, k) {
      var x = 0.5 + (k % cols) * (cw + gx), y = 1.28 + Math.floor(k / cols) * (ch + gy);
      if (th.key === 'farm' || th.key === 'diner') els.push(R(x, y, cw, ch, { fill: th.card, line: th.key === 'farm' ? th.frame : th.grid, lw: 1.5, r: 0.1 }));
      else card(els, th, x, y, cw, ch, { fill: k % 2 && th.key === 'panel' ? th.a2soft : null });
      els.push(T(x, y + 0.04, cw, ch * 0.6, w, { size: w.length > 2 ? 21 : 26, color: th.ink, font: 'kai', align: 'center', valign: 'middle' }));
      els.push(T(x, y + ch * 0.6, cw, ch * 0.36, LIST[IDX[w]][1], { size: 11, color: th.at, font: 'py', align: 'center', valign: 'middle', hide: true }));
    });
    revealHint(els, th);
    return { kind: 'review', els: els, notes: '请学生读出每个词（先不看拼音），再说一个用这个词的句子。' };
  }
  function dialogSlide(dl, th) {
    var els = [], lines = (dl.lines || []).slice(0, 6);
    var tx = tagEl(els, th, '情境对话 · Dialogue');
    if (dl.title) els.push(T(tx + 0.2, 0.55, 5, 0.48, dl.title, { size: 18, color: th.ink, valign: 'middle', bold: true }));
    var h = 0.56, gap = 0.08;
    lines.forEach(function (l, k) {
      var A = k % 2 === 0, y = 1.3 + k * (h + gap), x = A ? 1.15 : 2.75, w = 6.1;
      els.push(R(A ? 0.55 : 9.0, y + 0.06, 0.44, 0.44, { fill: A ? th.accent : th.a2, ellipse: true }));
      els.push(T(A ? 0.55 : 9.0, y + 0.06, 0.44, 0.44, l.who || (A ? 'A' : 'B'), { size: 14, bold: true, color: A ? th.onA : onColor(th.a2), align: 'center', valign: 'middle', font: 'py' }));
      els.push(R(x, y, w, h, { fill: A ? th.card : th.soft, line: th.outline, lw: 1, r: 0.16 }));
      els.push(T(x + 0.18, y + 0.03, w - 0.75, 0.3, l.zh || '', { size: 16, color: th.ink, valign: 'middle' }));
      els.push(T(x + 0.18, y + 0.31, w - 0.75, 0.22, l.py || '', { size: 10, color: th.ink2, font: 'py', valign: 'middle' }));
      els.push(say(x + w - 0.48, y + 0.09, 0.38, l.zh || '', A ? th.accent : th.a2));
    });
    return { kind: 'dialog', els: els, notes: lines.map(function (l) { return (l.who || '') + '：' + l.zh + '  ' + (l.en || ''); }).join('\n') };
  }
  function buildSlides(th, dlg) {
    var S = [], P = deck.parts, L = LAY[th.key] || LAY.ink;
    if (P.cover) S.push(L.cover(th));
    if (P.warm) { var wm = warmSlide(th); if (wm) S.push(wm); }
    cart.forEach(function (w, i) {
      var I = info(w);
      if (P.word) S.push(L.word(I, i, th));
      if (P.use) { var u = L.use(I, th); if (u) S.push(u); }
    });
    if (P.dialog && dlg) S.push(dialogSlide(dlg, th));
    var add = function (list, n, fn) { var c = chunks(list, n); c.forEach(function (ws, k) { var g = fn(ws, th, k + 1, c.length); if (g) S.push(g); }); };
    if (P.gPic) add(cart.filter(function (w) { return WORDS[w] && WORDS[w].img; }), 6, picGame);
    if (P.gCloze) add(cart.filter(function (w) { return exFor(w); }), 5, clozeGame);
    if (P.gTrans) add(cart.filter(function (w) { return exFor(w); }), 5, transGame);
    if (P.review) for (var k = 0; k < cart.length; k += 20) S.push(reviewSlide(cart.slice(k, k + 20), th, k));
    return S;
  }

  /* --- HTML 渲染（缩略图 + 放映共用；字号用 cqw 与 PPT 的 pt 对应） --- */
  var pc = function (v, t) { return (v / t * 100).toFixed(3) + '%'; };
  var cq = function (pt) { return (pt * 10 / 72).toFixed(3) + 'cqw'; };
  function gridSvg(c) { return "url('data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><g stroke="' + c + '" stroke-width="0.6" stroke-dasharray="2.5 2.5" fill="none"><path d="M0 0L100 100M100 0L0 100M50 0V100M0 50H100"/></g></svg>') + "')"; }
  function slideHTML(s, th, cls) {
    return '<div class="sl ' + bgClass(th) + ' ' + (cls || '') + '">' + s.els.map(function (e) {
      var h = elHTML(e); return e.hide ? h.replace('class="se', 'class="hid se') : e.onlyQ ? h.replace('class="se', 'class="onlyq se') : h;
    }).join('') + '</div>';
    function elHTML(e) {
      var pos = 'left:' + pc(e.x, 10) + ';top:' + pc(e.y, 5.625) + ';width:' + pc(e.w, 10) + ';height:' + pc(e.h, 5.625) + ';';
      if (e.t === 'rect') return '<div class="se" style="' + pos + 'background:' + (e.fill || 'transparent') + ';' + (e.line ? 'border:' + cq(e.lw || 1) + ' ' + (e.dash ? 'dashed' : 'solid') + ' ' + e.line + ';' : '') + (e.shadow ? 'box-shadow:0 .5cqw 1.4cqw -.5cqw rgba(60,40,20,.35);' : '') + 'border-radius:' + (e.ellipse ? '50%' : ((e.r || 0) * 10).toFixed(3) + 'cqw') + '"></div>';
      if (e.t === 'text') {
        var inner = e.runs.map(function (r) {
          var st = (r.size ? 'font-size:' + cq(r.size) + ';' : '') + (r.color ? 'color:' + r.color + ';' : '') + (r.bold ? 'font-weight:700;' : '') + (r.font ? 'font-family:' + FONT[r.font][0] + ';' : '');
          return '<span style="' + st + '">' + esc(r.text) + '</span>' + (r.br ? '<br>' + (e.gap ? '<span class="gap" style="height:' + cq(e.gap) + '"></span>' : '') : '');
        }).join('');
        var just = { top: 'flex-start', bottom: 'flex-end' }[e.valign] || 'center';
        return '<div class="se st' + (e.vert ? ' vt' : '') + '" style="' + pos + (e.vert ? 'align-items:center;justify-content:' + just : 'justify-content:' + just) + ';text-align:' + (e.align || 'left') + ';font-size:' + cq(e.size || 14) + ';color:' + (e.color || th.ink) + ';font-family:' + FONT[e.font || 'zh'][0] + ';' + (e.bold ? 'font-weight:700;' : '') + (e.italic ? 'font-style:italic;' : '') + (e.ls ? 'letter-spacing:' + cq(e.ls) + ';' : '') + 'line-height:' + (e.lh || 1.2) + '"><div>' + inner + '</div></div>';
      }
      if (e.t === 'img') return e.deco ? '<div class="se sd" style="' + pos + '"><img src="' + e.url + '" alt=""></div>' : '<div class="se si" style="' + pos + '"><img src="' + esc(e.src) + '" alt="" loading="lazy"></div>';
      if (e.t === 'stroke') return '<div class="se sw" data-ch="' + esc(e.ch) + '" style="' + pos + 'background-color:' + (e.bg || th.card) + ';background-image:' + gridSvg(th.grid) + ';color:' + th.ink + ';font-size:' + cq(e.w * 72 * 0.8) + '"><span>' + esc(e.ch) + '</span></div>';
      if (e.t === 'say') return '<span class="se say" role="button" data-say="' + esc(e.text.replace(/ /g, '')) + '" style="' + pos + 'background:' + (e.fill || th.accent) + ';color:' + onColor(e.fill || th.accent) + '" title="朗读">' + ICON_PLAY + '</span>';
      return '';
    }
  }

  /* --- 课件设置面板 --- */
  function renderDeckOpts() {
    var th = themeNow();
    var sample = cart[0] || current || LIST[0][0], saved = cart; if (!cart.length) cart = [sample];
    $('tpls').innerHTML = Object.keys(STYLES).map(function (k) {
      var t = themeNow(k, k === deck.tpl ? deck.accent : '');
      return '<button class="tpl' + (k === deck.tpl ? ' on' : '') + '" data-tpl="' + k + '">' + slideHTML((LAY[k] || LAY.ink).word(info(sample), 0, t), t, 'mini') + '<b>' + STYLES[k].name + '</b><small>' + STYLES[k].sub + '</small></button>';
    }).join('');
    cart = saved;
    $('swatches').innerHTML = SWATCHES.map(function (c) { return '<button class="sw-c' + (c === th.accent ? ' on' : '') + '" data-color="' + c + '" style="background:' + c + '" title="' + c + '"></button>'; }).join('') +
      '<label class="sw-pick" title="自选颜色"><input type="color" id="deckColor" value="' + th.accent + '"></label><button class="btn ghost sm" data-color="">默认</button>' +
      '<div class="palette">' + ['bg', 'tile', 'card', 'frame', 'accent', 'a2', 'ink'].map(function (k) { return '<i style="background:' + th[k] + '"></i>'; }).join('') + '<span>背景、卡片、图片框都按主色自动配色</span></div>';
    $('deckTitle').value = deck.title;
    var P = [['cover', '封面'], ['warm', '课堂导入（引入活动）'], ['word', '词卡（字、拼音、意思、图片）'], ['stroke', '词卡上的笔顺动画'], ['use', '搭配 · 例句'], ['dialog', '情境对话（AI 生成）'], ['gPic', '游戏：看图说词'], ['gCloze', '游戏：选词填空'], ['gTrans', '游戏：翻译挑战'], ['review', '游戏：读一读']];
    $('deckParts').innerHTML = P.map(function (p) { return '<label><input type="checkbox" data-part="' + p[0] + '"' + (deck.parts[p[0]] ? ' checked' : '') + '> ' + p[1] + '</label>'; }).join('');
    $('deckHint').innerHTML = '<b>网页放映</b>：笔顺实时演示，点 🔊 朗读。<br><b>PPTX</b>：笔顺是 GIF 动图（放映时会动）；词和例句旁的 🔊 已嵌入朗读音频（神经网络语音），放映时点击播放（AI 生成的对话没有音频）。' + (location.protocol === 'file:' ? '<br><b>注意</b>：直接打开本地文件时，PPT 里放不进图片和音频；请用网站（GitHub Pages）或本地服务器打开。' : '');
    renderThumbs();
  }
  function renderThumbs() {
    if (!cart.length) { $('thumbs').innerHTML = ''; $('deckCount').textContent = '词汇篮是空的'; return; }
    var th = themeNow(), slides = buildSlides(th, deck.parts.dialog ? dlgCache.data : null);
    $('deckCount').textContent = '共 ' + slides.length + ' 页' + (deck.parts.dialog && !dlgCache.data ? '（+ 情境对话：放映 / 导出时由 AI 生成）' : '');
    $('thumbs').innerHTML = slides.map(function (s, i) { return '<button class="thumb" data-i="' + i + '">' + slideHTML(s, th, 'mini') + '<span>' + (i + 1) + '</span></button>'; }).join('');
  }
  studio.addEventListener('input', function (e) {
    var t = e.target;
    if (t.id === 'deckTitle') { deck.title = t.value.trim(); saveDeck(); clearTimeout(renderThumbs.t); renderThumbs.t = setTimeout(renderThumbs, 250); }
    if (t.id === 'deckColor') { deck.accent = t.value; saveDeck(); clearTimeout(renderThumbs.c); renderThumbs.c = setTimeout(renderDeckOpts, 150); }
    if (t.id === 'exNote') { exCfg.note = t.value; saveEx(); }
  });
  studio.addEventListener('change', function (e) {
    var t = e.target;
    if (t.dataset.part) {
      deck.parts[t.dataset.part] = t.checked; saveDeck();
      if (t.dataset.part === 'dialog' && t.checked && !aiKey()) { toast('情境对话需要 AI：请先在「AI 设置」里选服务并填写 API key。'); openAi(); }
      renderThumbs();
    }
    if (t.dataset.extype) { exCfg.on[t.dataset.extype] = t.checked; saveEx(); }
    if (t.dataset.excount) { exCfg.n[t.dataset.excount] = Math.max(1, Math.min(20, +t.value || 1)); saveEx(); }
    if (t.id === 'exDir') { exCfg.dir = t.value; saveEx(); }
    if (t.id === 'exAns') $('exOut').classList.toggle('show-ans', t.checked);
  });

  /* --- AI 情境对话（可选） --- */
  var dlgCache = { key: '', data: null };
  async function ensureDialog(btn) {
    if (!deck.parts.dialog) return null;
    var key = cart.join('|') + '#' + deck.title + '#' + aiCfg.p;
    if (dlgCache.key === key && dlgCache.data) return dlgCache.data;
    if (!aiKey()) { toast('没有 API key，这次先不加情境对话。'); return null; }
    var old = btn && btn.textContent; if (btn) { btn.disabled = true; btn.textContent = 'AI 正在写对话…'; }
    try {
      var res = await aiText({
        user: 'Task: dialog\nTarget words: ' + cart.slice(0, 10).join('、') + '\nTopic hint: ' + (deck.title || '(none)') + '\nWrite ONE JSON line: {"type":"dialog","title":"<2-6 Chinese characters>","lines":[{"who":"A","zh":"...","py":"...","en":"..."}, ...]} with 4 to 6 lines alternating A and B. Each line max 12 characters. Use as many target words as is natural.',
        maxTokens: 2000
      });
      var obj = parseLines(res.text).filter(function (o) { return o.lines; })[0];
      if (!obj) throw new Error('AI 返回的格式不对，请再试一次。');
      dlgCache = { key: key, data: obj };
      return obj;
    } catch (e) { toast('情境对话没有生成：' + aiError(e)); return null; }
    finally { if (btn) { btn.disabled = false; btn.textContent = old; } }
  }

  /* =====================================================================
     4. 网页放映
     ===================================================================== */
  var showEl = null, showSlides = [], showI = 0, showTh = null, showWriters = [];
  async function present(start) {
    if (!cart.length) return toast('词汇篮是空的。');
    var dl = await ensureDialog(studio.querySelector('[data-act="present"]'));
    showTh = themeNow(); showSlides = buildSlides(showTh, dl); if (dl) renderThumbs();
    showI = Math.max(0, Math.min(start || 0, showSlides.length - 1));
    showEl = document.createElement('div'); showEl.className = 'show';
    showEl.innerHTML = '<div class="stage" id="stage"></div><div class="show-bar"><button data-nav="-1" title="上一页 ←">‹</button><span id="showN"></span><button data-nav="1" title="下一页 →">›</button><button data-nav="fs" title="全屏">⛶</button><button data-nav="x" title="退出 Esc">✕</button></div>';
    document.body.appendChild(showEl);
    showEl.addEventListener('click', function (e) {
      var b = e.target.closest('[data-say]'); if (b) return speak(b.dataset.say);
      var n = e.target.closest('[data-nav]');
      if (n) { var v = n.dataset.nav; if (v === 'x') return endShow(); if (v === 'fs') return toggleFs(); return go(+v); }
      if (e.target.closest('.sw')) { var i = [].indexOf.call(showEl.querySelectorAll('.sw'), e.target.closest('.sw')); if (showWriters[i]) showWriters[i].animateCharacter(); return; }
      if (e.target.closest('.stage')) go(1);
    });
    document.addEventListener('keydown', showKeys);
    window.addEventListener('resize', showResize);
    try { if (document.documentElement.requestFullscreen) await document.documentElement.requestFullscreen(); } catch (e) {}
    drawShow();
  }
  function toggleFs() { if (document.fullscreenElement) document.exitFullscreen(); else if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen(); }
  function showKeys(e) {
    if (!showEl) return;
    if (['ArrowRight', 'PageDown', ' ', 'Enter'].indexOf(e.key) >= 0) { e.preventDefault(); go(1); }
    else if (['ArrowLeft', 'PageUp', 'Backspace'].indexOf(e.key) >= 0) { e.preventDefault(); go(-1); }
    else if (e.key === 'Home') { showI = 0; drawShow(); }
    else if (e.key === 'End') { showI = showSlides.length - 1; drawShow(); }
    else if (e.key === 'Escape') { e.preventDefault(); endShow(); }
  }
  function showResize() { clearTimeout(showResize.t); showResize.t = setTimeout(function () { if (showEl) drawShow(); }, 200); }
  function go(d) {
    var sl = $('stage').querySelector('.sl');
    if (d > 0 && sl && !sl.classList.contains('rev') && sl.querySelector('.hid')) { sl.classList.add('rev'); return; }
    var n = showI + d; if (n < 0 || n >= showSlides.length) return; showI = n; drawShow();
  }
  function drawShow() {
    showWriters.forEach(function (w) { try { w.pauseAnimation(); } catch (e) {} }); showWriters = [];
    $('stage').innerHTML = slideHTML(showSlides[showI], showTh, 'live');
    $('showN').textContent = (showI + 1) + ' / ' + showSlides.length;
    if (!window.HanziWriter) return;
    $('stage').querySelectorAll('.sw').forEach(function (box) {
      var c = box.dataset.ch, size = Math.floor(box.clientWidth);
      box.innerHTML = '';
      var wr = HanziWriter.create(box, c, {
        width: size, height: size, padding: size * 0.05, showOutline: true, strokeColor: showTh.ink, outlineColor: showTh.outline, radicalColor: showTh.at,
        strokeAnimationSpeed: 1, delayBetweenStrokes: 220, delayBetweenLoops: 1600, charDataLoader: function (ch, done) { done(STROKES[ch]); }
      });
      wr.loopCharacterAnimation(); showWriters.push(wr);
    });
  }
  function endShow() {
    showWriters.forEach(function (w) { try { w.pauseAnimation(); } catch (e) {} }); showWriters = [];
    document.removeEventListener('keydown', showKeys); window.removeEventListener('resize', showResize);
    if (showEl) showEl.remove(); showEl = null;
    if (document.fullscreenElement) document.exitFullscreen().catch(function () {});
  }

  /* =====================================================================
     5. PPTX 导出（PptxGenJS；笔顺 = GIF 动图，gifenc 编码）
     ===================================================================== */
  var gifCache = {};
  function strokeGif(ch, th, bg) {
    bg = bg || th.card;
    var k = ch + bg + th.ink + th.at; if (gifCache[k]) return gifCache[k];
    var d = STROKES[ch], S = 240, pad = S * 0.05, sc = (S - 2 * pad) / 1024;
    var cv = canvas(S, S), g = cv.getContext('2d', { willReadFrequently: true });
    var paths = d.strokes.map(function (p) { return new Path2D(p); });
    function base(upto) {
      g.setTransform(1, 0, 0, 1, 0, 0); g.fillStyle = bg; g.fillRect(0, 0, S, S);
      g.strokeStyle = th.grid; g.lineWidth = 1.4; g.setLineDash([6, 6]); g.beginPath();
      g.moveTo(0, 0); g.lineTo(S, S); g.moveTo(S, 0); g.lineTo(0, S); g.moveTo(S / 2, 0); g.lineTo(S / 2, S); g.moveTo(0, S / 2); g.lineTo(S, S / 2); g.stroke(); g.setLineDash([]);
      g.setTransform(sc, 0, 0, -sc, pad, pad + 900 * sc);
      g.fillStyle = th.outline; paths.forEach(function (p) { g.fill(p); });
      g.fillStyle = th.ink; for (var i = 0; i < upto; i++) g.fill(paths[i]);
    }
    function partial(i, frac) {
      var m = d.medians[i], L = [0];
      for (var j = 1; j < m.length; j++) L.push(L[j - 1] + Math.hypot(m[j][0] - m[j - 1][0], m[j][1] - m[j - 1][1]));
      var target = L[L.length - 1] * frac;
      g.save(); g.clip(paths[i]); g.strokeStyle = th.at; g.lineWidth = 160; g.lineCap = 'round'; g.lineJoin = 'round';
      g.beginPath(); g.moveTo(m[0][0], m[0][1]);
      for (var q = 1; q < m.length; q++) {
        if (L[q] <= target) g.lineTo(m[q][0], m[q][1]);
        else { var u = (target - L[q - 1]) / ((L[q] - L[q - 1]) || 1); g.lineTo(m[q - 1][0] + (m[q][0] - m[q - 1][0]) * u, m[q - 1][1] + (m[q][1] - m[q - 1][1]) * u); break; }
      }
      g.stroke(); g.restore();
    }
    var frames = [], F = 6, grab = function (delay) { frames.push({ px: g.getImageData(0, 0, S, S).data, delay: delay }); };
    base(0); grab(500);
    for (var i = 0; i < paths.length; i++) { for (var f = 1; f <= F; f++) { base(i); partial(i, f / F); grab(f === F ? 160 : 55); } }
    base(paths.length); grab(1800);
    var G = window.gifenc, mid = frames[Math.floor(frames.length / 2)].px, last = frames[frames.length - 1].px;
    var both = new Uint8ClampedArray(mid.length + last.length); both.set(mid); both.set(last, mid.length);
    var palette = G.quantize(both, 32), enc = G.GIFEncoder();
    frames.forEach(function (fr, n) { enc.writeFrame(G.applyPalette(fr.px, palette), S, S, n ? { delay: fr.delay } : { palette: palette, delay: fr.delay, repeat: 0 }); });
    enc.finish();
    var bytes = enc.bytes(), bin = '';
    for (var o = 0; o < bytes.length; o += 0x8000) bin += String.fromCharCode.apply(null, bytes.subarray(o, o + 0x8000));
    return (gifCache[k] = 'data:image/gif;base64,' + btoa(bin));
  }
  var imgCache = {};
  function imgData(src) {
    if (imgCache[src]) return imgCache[src];
    return (imgCache[src] = new Promise(function (res) {
      var im = new Image();
      im.onload = function () {
        try {
          var W = 800, H = 600, cv = canvas(W, H);
          var r = Math.max(W / im.naturalWidth, H / im.naturalHeight), w = im.naturalWidth * r, h = im.naturalHeight * r;
          cv.getContext('2d').drawImage(im, (W - w) / 2, (H - h) / 2, w, h);
          res(cv.toDataURL('image/jpeg', 0.85));
        } catch (e) { res(null); }
      };
      im.onerror = function () { res(null); };
      im.src = src;
    }));
  }
  /* PptxGenJS 生成的音频对象缺少 PowerPoint 需要的部分：同一页里形状 ID 重复，也没有 <p:timing> 里的 <p:audio> 节点，
     PowerPoint / WPS 打开时就把音频丢掉。这里在打包后改写每一页的 XML：重新编号 ID，再按 PowerPoint 自己的格式补上 timing。 */
  async function fixPptxAudio(buf) {
    var zip = await window.JSZip.loadAsync(buf);
    var names = Object.keys(zip.files).filter(function (n) { return /^ppt\/slides\/slide\d+\.xml$/.test(n); });
    for (var i = 0; i < names.length; i++) {
      var xml = await zip.file(names[i]).async('string');
      if (xml.indexOf('<a:audioFile') < 0) continue;
      var n = 0, media = [];
      xml = xml.replace(/<p:cNvPr id="\d+"( name="([^"]*)")?/g, function (m, attr, nm) { n++; if (nm && /^Media /.test(nm)) media.push(n); return '<p:cNvPr id="' + n + '"' + (attr || ''); });
      if (media.length && xml.indexOf('<p:timing') < 0) {
        var t = '<p:timing><p:tnLst><p:par><p:cTn id="1" dur="indefinite" restart="never" nodeType="tmRoot"><p:childTnLst>' + media.map(function (id, k) {
          return '<p:audio><p:cMediaNode><p:cTn id="' + (k + 2) + '" fill="hold" display="1"><p:stCondLst><p:cond delay="indefinite"/></p:stCondLst><p:endCondLst><p:cond evt="onStopAudio"><p:tgtEl><p:sldTgt/></p:tgtEl></p:cond></p:endCondLst></p:cTn><p:tgtEl><p:spTgt spid="' + id + '"/></p:tgtEl></p:cMediaNode></p:audio>';
        }).join('') + '</p:childTnLst></p:cTn></p:par></p:tnLst></p:timing>';
        xml = xml.indexOf('</p:clrMapOvr>') >= 0 ? xml.replace('</p:clrMapOvr>', '</p:clrMapOvr>' + t) : xml.replace('</p:sld>', t + '</p:sld>');
      }
      zip.file(names[i], xml);
    }
    return zip.generateAsync({ type: 'blob', compression: 'DEFLATE', mimeType: 'application/vnd.openxmlformats-officedocument.presentationml.presentation' });
  }
  /* 朗读按钮：PPT 里嵌入预先生成的 MP3（放映时点击图标播放） */
  var audioCache = {}, iconCache = {};
  function audioData(text) {
    var id = (window.H1_AUDIO || {})[String(text).replace(/——/g, '。').replace(/\s+/g, '')];
    if (!id) return Promise.resolve(null);
    return audioCache[id] || (audioCache[id] = fetch('audio/' + id + '.mp3').then(function (r) { if (!r.ok) throw 0; return r.arrayBuffer(); }).then(function (b) {
      var u = new Uint8Array(b), bin = ''; for (var o = 0; o < u.length; o += 0x8000) bin += String.fromCharCode.apply(null, u.subarray(o, o + 0x8000));
      return 'audio/mpeg;base64,' + btoa(bin);
    }).catch(function () { return null; }));
  }
  function sayIcon(color) {
    if (iconCache[color]) return iconCache[color];
    var S = 160, cv = canvas(S, S), g = cv.getContext('2d'), fg = onColor(color);
    g.fillStyle = color; g.beginPath(); g.arc(S / 2, S / 2, S / 2 - 2, 0, 7); g.fill();
    g.fillStyle = fg; g.strokeStyle = fg; g.lineCap = 'round'; g.lineJoin = 'round';
    g.beginPath(); g.moveTo(S * 0.27, S * 0.42); g.lineTo(S * 0.37, S * 0.42); g.lineTo(S * 0.5, S * 0.3); g.lineTo(S * 0.5, S * 0.7); g.lineTo(S * 0.37, S * 0.58); g.lineTo(S * 0.27, S * 0.58); g.closePath(); g.fill();
    g.lineWidth = S * 0.055; g.beginPath(); g.arc(S * 0.5, S * 0.5, S * 0.12, -0.9, 0.9); g.stroke(); g.beginPath(); g.arc(S * 0.5, S * 0.5, S * 0.22, -0.9, 0.9); g.stroke();
    return (iconCache[color] = cv.toDataURL('image/png'));
  }
  var hex = function (c) { return (c || '#000000').replace('#', '').toUpperCase(); };
  var tick = function () { return new Promise(function (r) { setTimeout(r, 0); }); };
  async function exportPptx(btn) {
    if (!cart.length) return toast('词汇篮是空的。');
    if (!window.PptxGenJS || !window.gifenc) return toast('PPT 组件没有加载成功，请刷新页面。');
    var label = btn.textContent;
    try {
      var dl = await ensureDialog(btn);
      btn.disabled = true;
      var th = themeNow(), slides = buildSlides(th, dl);
      var pptx = new PptxGenJS();
      pptx.layout = 'LAYOUT_16x9'; pptx.title = deck.title || 'HSK1 生词'; pptx.author = 'HSK1 教学参考';
      pptx.defineSlideMaster({ title: 'BG', background: { data: background(th) } });
      var missingImg = 0, hasAudio = 0, noAudio = 0;
      for (var i = 0; i < slides.length; i++) {
        btn.textContent = '正在生成 ' + (i + 1) + ' / ' + slides.length + '…'; await tick();
        var s = slides[i], hasAns = s.els.some(function (x) { return x.hide; });
        for (var pass = 0; pass < (hasAns ? 2 : 1); pass++) {
        var sl = pptx.addSlide({ masterName: 'BG' });
        for (var k = 0; k < s.els.length; k++) {
          var e = s.els[k], box = { x: e.x, y: e.y, w: e.w, h: e.h };
          if (hasAns && ((pass === 0 && e.hide) || (pass === 1 && e.onlyQ))) continue;
          if (e.t === 'rect') {
            sl.addShape(e.ellipse ? 'ellipse' : e.r ? 'roundRect' : 'rect', Object.assign({}, box, {
              fill: e.fill ? { color: hex(e.fill) } : { color: 'FFFFFF', transparency: 100 },
              line: e.line ? { color: hex(e.line), width: e.lw || 1, dashType: e.dash ? 'dash' : 'solid' } : { type: 'none' }, rectRadius: e.r || 0,
              shadow: e.shadow ? { type: 'outer', color: '3C2814', opacity: 0.22, blur: 8, offset: 3, angle: 90 } : undefined
            }));
          } else if (e.t === 'text') {
            sl.addText(e.runs.map(function (r) {
              return { text: r.text, options: { fontSize: r.size || e.size || 14, color: hex(r.color || e.color || th.ink), bold: r.bold != null ? r.bold : !!e.bold, italic: !!e.italic, fontFace: FONT[r.font || e.font || 'zh'][1], breakLine: !!r.br } };
            }), Object.assign({}, box, {
              align: e.align || 'left', valign: e.valign || 'middle', margin: 0, fontFace: FONT[e.font || 'zh'][1], fontSize: e.size || 14, color: hex(e.color || th.ink),
              paraSpaceAfter: e.gap || 0, lineSpacingMultiple: e.lh && e.lh > 1.25 ? e.lh * 0.85 : undefined, charSpacing: e.ls || undefined, vert: e.vert ? 'eaVert' : undefined
            }));
          } else if (e.t === 'img') {
            var data = e.data || await imgData(e.src);
            if (data) sl.addImage(Object.assign({}, box, { data: data }));
            else { missingImg++; sl.addText('（图片）', Object.assign({}, box, { align: 'center', valign: 'middle', fontSize: 12, color: hex(th.ink2), fontFace: 'Microsoft YaHei' })); }
          } else if (e.t === 'stroke') {
            sl.addImage(Object.assign({}, box, { data: strokeGif(e.ch, th, e.bg) }));
            await tick();
          } else if (e.t === 'say') {
            var mp3 = await audioData(e.text), icon = sayIcon(e.fill || th.accent);
            if (mp3) { sl.addMedia(Object.assign({}, box, { type: 'audio', data: mp3, extn: 'mp3', cover: icon })); hasAudio++; }
            else { if ((window.H1_AUDIO || {})[String(e.text).replace(/\s+/g, '')]) noAudio++; sl.addImage(Object.assign({}, box, { data: icon })); }
          }
        }
        if (s.notes) sl.addNotes((hasAns ? (pass ? '【答案】\n' : '【题目】下一页是答案。\n') : '') + s.notes);
        }
      }
      btn.textContent = '正在打包…'; await tick();
      var name = ('HSK1-' + (deck.title || cart.slice(0, 4).join('') + (cart.length > 4 ? '等' + cart.length + '词' : ''))).replace(/[\\/:*?"<>|\s]+/g, '-');
      var blob = await fixPptxAudio(await pptx.write({ outputType: 'arraybuffer' }));
      window.H1studio.lastPptx = blob;
      var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name + '.pptx';
      document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(a.href); }, 60000);
      toast('PPTX 已下载：' + ((pptx.slides && pptx.slides.length) || slides.length) + ' 页（游戏页后面各有一页答案）。' + (hasAudio ? '含 ' + hasAudio + ' 段朗读音频，放映时点击 🔊 播放。' : '') + (noAudio ? ' 有 ' + noAudio + ' 段音频没能放进去：请用网站地址打开（不要直接双击 index.html），刷新页面后再导出。' : '') + (missingImg ? ' 有 ' + missingImg + ' 张图片没能放进去（请用网站版打开再导出）。' : ''));
    } catch (err) { console.error(err); toast('导出失败：' + (err && err.message || err)); }
    finally { btn.disabled = false; btn.textContent = label; }
  }

  /* =====================================================================
     6. AI：老师自选服务商（DeepSeek、通义千问、Kimi、豆包……OpenAI 兼容接口），自带 API key
     ===================================================================== */
  var PROVIDERS = {
    deepseek: { name: 'DeepSeek 深度求索', url: 'https://api.deepseek.com/chat/completions', model: 'deepseek-chat', site: 'platform.deepseek.com' },
    qwen: { name: '通义千问 Qwen（阿里云百炼）', url: 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions', model: 'qwen-plus', site: 'bailian.console.aliyun.com' },
    kimi: { name: 'Kimi（月之暗面）', url: 'https://api.moonshot.cn/v1/chat/completions', model: 'moonshot-v1-32k', site: 'platform.moonshot.cn' },
    doubao: { name: '豆包（火山方舟）', url: 'https://ark.cn-beijing.volces.com/api/v3/chat/completions', model: '', site: 'console.volcengine.com/ark', needModel: '请在“高级”里填写模型 ID 或接入点 ID（ep-…）。' },
    siliconflow: { name: '硅基流动 SiliconFlow', url: 'https://api.siliconflow.cn/v1/chat/completions', model: 'deepseek-ai/DeepSeek-V3', site: 'cloud.siliconflow.cn' },
    qianfan: { name: '百度千帆（文心）', url: 'https://qianfan.baidubce.com/v2/chat/completions', model: 'ernie-4.0-turbo-8k', site: 'console.bce.baidu.com/qianfan' },
    hunyuan: { name: '腾讯混元', url: 'https://api.hunyuan.cloud.tencent.com/v1/chat/completions', model: 'hunyuan-turbos-latest', site: 'console.cloud.tencent.com/hunyuan' },
    openai: { name: 'ChatGPT（OpenAI）', url: 'https://api.openai.com/v1/chat/completions', model: 'gpt-4o-mini', site: 'platform.openai.com' },
    claude: { name: 'Claude（Anthropic）', kind: 'anthropic', model: 'claude-opus-5-5', site: 'console.anthropic.com' },
    custom: { name: '其他（OpenAI 兼容接口）', url: '', model: '', site: '', needModel: '请在“高级”里填写接口地址和模型名称。' }
  };
  var aiCfg = Object.assign({ p: 'deepseek', models: {}, urls: {} }, store.get('h1ref-ai', {}));
  if (!PROVIDERS[aiCfg.p]) aiCfg.p = 'deepseek';
  try { var oldKey = localStorage.getItem('h1ref-ai-key'); if (oldKey && !localStorage.getItem('h1ref-key-claude')) localStorage.setItem('h1ref-key-claude', oldKey); localStorage.removeItem('h1ref-ai-key'); sessionStorage.removeItem('h1ref-ai-key'); } catch (e) {}
  var saveAi = function () { store.set('h1ref-ai', aiCfg); };
  function prov() { return PROVIDERS[aiCfg.p]; }
  function aiModel() { return (aiCfg.models[aiCfg.p] || '').trim() || prov().model; }
  function aiUrl() { return (aiCfg.urls[aiCfg.p] || '').trim() || prov().url; }
  function keyName(p) { return 'h1ref-key-' + (p || aiCfg.p); }
  function aiKey() { try { return sessionStorage.getItem(keyName()) || localStorage.getItem(keyName()) || ''; } catch (e) { return ''; } }
  function setKey(k, remember) {
    try {
      sessionStorage.removeItem(keyName()); localStorage.removeItem(keyName());
      if (k) (remember ? localStorage : sessionStorage).setItem(keyName(), k);
    } catch (e) {}
    paintAi();
  }
  function paintAi() {
    var b = studio.querySelector('.st-ai'); if (!b) return;
    b.classList.toggle('ok', !!aiKey());
    b.innerHTML = 'AI：' + esc(prov().name.split(/[（ ]/)[0]) + '<i class="dot"></i>';
  }
  function fillAiDlg() {
    var p = prov();
    $('aiProv').value = aiCfg.p;
    $('aiKey').value = aiKey();
    var rem = false; try { rem = !!localStorage.getItem(keyName()); } catch (e) {}
    $('aiRemember').checked = rem;
    $('aiModelIn').value = aiCfg.models[aiCfg.p] || ''; $('aiModelIn').placeholder = p.model || '模型名称';
    $('aiUrlIn').value = aiCfg.urls[aiCfg.p] || ''; $('aiUrlIn').placeholder = p.url || 'https://…/v1/chat/completions';
    $('aiUrlRow').hidden = p.kind === 'anthropic';
    var host = p.kind === 'anthropic' ? 'api.anthropic.com' : (aiUrl().match(/^https?:\/\/([^/]+)/) || [, '你填写的接口地址'])[1];
    $('aiHint').innerHTML = (p.site ? '在 <b>' + esc(p.site) + '</b> 创建 API key。' : '') + 'key 只保存在你的浏览器里，只发送给 <b>' + esc(host) + '</b>；费用按你的账户计算。' + (p.needModel && !aiModel() ? '<br><b>' + esc(p.needModel) + '</b>' : '') + (p.kind === 'anthropic' ? '' : '<br>默认模型：' + esc(aiModel() || '（未填写）'));
    $('aiStat').textContent = ''; $('aiStat').className = 'stat';
  }
  function openAi() { fillAiDlg(); $('aiDlg').showModal(); }
  $('aiProv').innerHTML = Object.keys(PROVIDERS).map(function (k) { return '<option value="' + k + '">' + esc(PROVIDERS[k].name) + '</option>'; }).join('');
  $('aiProv').addEventListener('change', function () { aiCfg.p = this.value; saveAi(); fillAiDlg(); paintAi(); });
  $('aiKey').addEventListener('input', function () { setKey(this.value.trim(), $('aiRemember').checked); });
  $('aiRemember').addEventListener('change', function () { setKey($('aiKey').value.trim(), this.checked); });
  $('aiModelIn').addEventListener('input', function () { aiCfg.models[aiCfg.p] = this.value.trim(); saveAi(); });
  $('aiUrlIn').addEventListener('input', function () { aiCfg.urls[aiCfg.p] = this.value.trim(); saveAi(); });

  async function testAi() {
    var st = $('aiStat'); st.className = 'stat'; st.textContent = '连接中…';
    try {
      if (prov().kind === 'anthropic') { var c = await claudeClient(); var m = await c.models.retrieve(aiModel()); st.className = 'stat ok'; st.textContent = '✓ 可以使用 ' + (m.display_name || m.id); return; }
      var r = await compatText({ user: '只回答一个字：好', maxTokens: 8, test: true });
      st.className = 'stat ok'; st.textContent = '✓ 连接成功（' + aiModel() + '）' + (r.text ? '：' + r.text.slice(0, 10) : '');
    } catch (e) { st.className = 'stat no'; st.textContent = aiError(e); }
  }
  function aiError(e) {
    if (!e) return '未知错误';
    if (e.code === 'nokey') return '请先在「AI 设置」里填写 API key。';
    if (e.code === 'nomodel') return prov().needModel || '请在「AI 设置 → 高级」里填写模型名称。';
    if (e.code === 'nourl') return '请在「AI 设置 → 高级」里填写接口地址。';
    if (e.code === 'refusal') return 'AI 没有完成这个请求，请换一种要求再试。';
    var s = e.status, detail = e.detail ? '（' + String(e.detail).slice(0, 120) + '）' : '';
    if (s === 401) return 'API key 不对，请检查后再试。' + detail;
    if (s === 402) return '账户余额不足（402），请先充值。';
    if (s === 403) return '这个 key 没有权限使用该模型。' + detail;
    if (s === 404) return '找不到接口或模型（404），请检查「高级」里的模型名称 / 接口地址。' + detail;
    if (s === 429) return '请求太多或额度不足（429），请稍等再试。';
    if (s >= 500) return 'AI 服务现在很忙（' + s + '），请稍后再试。';
    if (s === 400) return '请求被拒绝（400）' + (detail || '：' + e.message);
    if (!s) return '连不上 AI：请检查网络；也可能是这个服务不允许网页直接访问，请换一个服务商。';
    return 'AI 出错（' + s + '）' + detail;
  }
  function fail(code) { var e = new Error(code); e.code = code; return e; }

  /* 固定的系统提示（含 HSK1 全部词表）：每次请求都一样，DeepSeek 等服务会自动缓存相同前缀，Claude 用 cache_control */
  var SYSTEM = [
    'You write classroom materials for absolute beginners of Chinese: HSK 3.0 Level 1 (the 300 words listed below).',
    '',
    'HARD RULES',
    '1. Chinese text may use ONLY words from the HSK1 list below, plus numbers and punctuation. Never use any other word or character. For people use 我, 你, 他, 她, 妈妈, 爸爸, 老师, 同学, 朋友; the only allowed personal names are 小月 and 小白.',
    '2. Sentences are short and simple: one clause, about 4–12 characters. Everyday situations: family, school, shop, restaurant, time, weather, hobbies.',
    '3. Simplified characters. Pinyin uses tone marks and spaces between words, e.g. "Wǒ ài māma."',
    '4. English is only for meanings and translations; keep it plain.',
    '5. Every item must use at least one of the target words given by the teacher. Spread the target words evenly across items.',
    '6. For choice questions: exactly 4 options, exactly one correct, distractors must be clearly wrong but plausible for beginners. "answer" must be copied exactly from "options".',
    '',
    'OUTPUT FORMAT',
    'JSON Lines: one complete JSON object per line, nothing else — no markdown fences, no numbering, no comments, no blank lines, no explanation before or after.',
    'Schemas by type:',
    'blank:     {"type":"blank","q":"我 ＿＿ 妈妈。","options":["爱","吃","去","是"],"answer":"爱","en":"I love my mom."}   (q uses ＿＿ for the gap)',
    'listen:    {"type":"listen","say":"<sentence read aloud to students>","q":"<short question in Chinese, HSK1 words only>","options":["…","…","…","…"],"answer":"…"}',
    'translate: {"type":"translate","dir":"zh-en" or "en-zh","q":"<source sentence>","answer":"<reference translation>","py":"<pinyin of the Chinese sentence>"}',
    'read:      {"type":"read","passage":"<3-5 short Chinese sentences forming a tiny text>","py":"<pinyin of the passage>","en":"<English translation>","qs":[{"q":"<question in Chinese>","options":["…","…","…","…"],"answer":"…"}]}   (2-3 questions per passage; one passage = one line)',
    'order:     {"type":"order","words":["我","爱","妈妈"],"answer":"我爱妈妈。","en":"I love my mom."}   (words = the sentence split into words, without the final punctuation, in correct order — the app shuffles them)',
    'dialog:    {"type":"dialog","title":"…","lines":[{"who":"A","zh":"…","py":"…","en":"…"}]}',
    '',
    'HSK1 WORD LIST (word|pinyin|English):',
    LIST.map(function (r) { return r[0] + '|' + r[1] + '|' + r[3]; }).join('\n')
  ].join('\n');

  function aiText(o) { return prov().kind === 'anthropic' ? claudeText(o) : compatText(o); }

  /* OpenAI 兼容接口（DeepSeek / 通义千问 / Kimi / 豆包 / 硅基流动 / 千帆 / 混元 / OpenAI）：fetch + SSE 流式 */
  async function compatText(o) {
    var key = aiKey(), url = aiUrl(), model = aiModel();
    if (!key) throw fail('nokey'); if (!url) throw fail('nourl'); if (!model) throw fail('nomodel');
    var body = { model: model, messages: [{ role: 'system', content: SYSTEM }, { role: 'user', content: o.user }], max_tokens: o.maxTokens || 4000, temperature: 0.7, stream: !o.test };
    if (o.test) body.messages = [{ role: 'user', content: o.user }];
    var res;
    try { res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key }, body: JSON.stringify(body) }); }
    catch (e) { var ne = new Error(e.message); ne.status = 0; throw ne; }
    if (!res.ok) {
      var txt = ''; try { txt = await res.text(); } catch (e) {}
      var msg = txt; try { var j = JSON.parse(txt); msg = (j.error && (j.error.message || j.error.code)) || j.message || j.msg || txt; } catch (e) {}
      var er = new Error('HTTP ' + res.status); er.status = res.status; er.detail = msg; throw er;
    }
    if (o.test) { var tj = await res.json(); return { text: (tj.choices && tj.choices[0] && tj.choices[0].message && tj.choices[0].message.content) || '' }; }
    var reader = res.body.getReader(), dec = new TextDecoder(), buf = '', full = '';
    for (;;) {
      var r = await reader.read(); if (r.done) break;
      buf += dec.decode(r.value, { stream: true });
      var i;
      while ((i = buf.indexOf('\n')) >= 0) {
        var line = buf.slice(0, i).trim(); buf = buf.slice(i + 1);
        if (line.indexOf('data:') !== 0) continue;
        var d = line.slice(5).trim(); if (!d || d === '[DONE]') continue;
        var obj = null; try { obj = JSON.parse(d); } catch (e) { continue; }
        if (obj.error) { var se = new Error('stream error'); se.status = 400; se.detail = obj.error.message || JSON.stringify(obj.error); throw se; }
        var c = obj.choices && obj.choices[0], t = c && c.delta && c.delta.content;
        if (t) { full += t; if (o.onText) o.onText(t); }
      }
    }
    return { text: full };
  }

  /* Claude（Anthropic SDK，浏览器直连） */
  var SDK_URL = 'https://cdn.jsdelivr.net/npm/@anthropic-ai/sdk@1.6.0/+esm';
  var sdkP = null;
  function sdk() { return sdkP || (sdkP = import(SDK_URL).catch(function (e) { sdkP = null; throw e; })); }
  async function claudeClient() {
    var key = aiKey(); if (!key) throw fail('nokey');
    var mod = await sdk(); var Anthropic = mod.default || mod.Anthropic;
    return new Anthropic({ apiKey: key, dangerouslyAllowBrowser: true, maxRetries: 2 });
  }
  async function claudeText(o) {
    var c = await claudeClient(), model = aiModel(), gen5 = /^claude-(opus|sonnet|haiku)-5/.test(model);
    var body = { model: model, max_tokens: o.maxTokens ? Math.max(o.maxTokens * 2, 4000) : 8000, system: [{ type: 'text', text: SYSTEM, cache_control: { type: 'ephemeral' } }], messages: [{ role: 'user', content: o.user }] };
    if (gen5) body.output_config = { effort: 'low' };
    var stream = /^claude-(opus|sonnet)-5-5/.test(model)
      ? c.beta.messages.stream(Object.assign({}, body, { betas: ['server-side-fallback-2026-07-01'], fallbacks: 'default' }))
      : c.messages.stream(body);
    if (o.onText) stream.on('text', o.onText);
    var msg = await stream.finalMessage();
    if (msg.stop_reason === 'refusal') throw fail('refusal');
    var blocks = msg.content, fi = blocks.map(function (b) { return b.type; }).lastIndexOf('fallback');
    if (fi >= 0) blocks = blocks.slice(fi + 1);
    return { text: blocks.filter(function (b) { return b.type === 'text'; }).map(function (b) { return b.text; }).join('') };
  }
  function lineParser(onObj) {
    var buf = '';
    function one(l) { l = l.trim().replace(/^```\w*/, '').replace(/```$/, '').replace(/,\s*$/, '').trim(); if (l.charAt(0) !== '{') return; try { onObj(JSON.parse(l)); } catch (e) {} }
    return { push: function (t) { buf += t; var i; while ((i = buf.indexOf('\n')) >= 0) { one(buf.slice(0, i)); buf = buf.slice(i + 1); } }, end: function () { one(buf); buf = ''; } };
  }
  function parseLines(text) { var out = [], p = lineParser(function (o) { out.push(o); }); p.push(text); p.end(); return out; }

  /* =====================================================================
     7. 练习
     ===================================================================== */
  function renderExOpts() {
    $('exTypes').innerHTML = EXT.map(function (t) {
      return '<div class="extype"><label><input type="checkbox" data-extype="' + t[0] + '"' + (exCfg.on[t[0]] ? ' checked' : '') + '> ' + t[1] + ' <small>' + t[2] + '</small></label>' +
        '<input type="number" min="1" max="20" data-excount="' + t[0] + '" value="' + exCfg.n[t[0]] + '" title="' + (t[0] === 'read' ? '短文篇数' : t[0] === 'match' ? '每组词数' : '题数') + '">' +
        (t[0] === 'translate' ? '<select id="exDir"><option value="mix">中↔英 混合</option><option value="zh-en">中 → 英</option><option value="en-zh">英 → 中</option></select>' : '') + '</div>';
    }).join('') + '<p class="hint">阅读理解的数量 = 短文篇数；连线的数量 = 每组词数（本地生成）。</p>';
    $('exDir').value = exCfg.dir; $('exNote').value = exCfg.note || '';
  }
  var exData = null, exRun = 0;

  /* --- 本地出题（用站内例句） --- */
  function exOf(w) { var d = WORDS[w]; return d && d.ex ? d.ex.filter(function (e) { return e.zh.split(' ').indexOf(w) >= 0; }) : []; }
  function distract(w, n) {
    var pos = LIST[IDX[w]][2], others = cart.filter(function (x) { return x !== w; });
    var res = pick(others.filter(function (x) { return LIST[IDX[x]][2] === pos; }), n);
    var fill = function (pool) { if (res.length < n) res = res.concat(pick(pool.filter(function (x) { return x !== w && res.indexOf(x) < 0; }), n - res.length)); };
    fill(others); fill(LIST.filter(function (r) { return r[2] === pos; }).map(function (r) { return r[0]; })); fill(LIST.map(function (r) { return r[0]; }));
    return res;
  }
  function cycle(n, fn) {
    var out = [], pool = [], guard = 0;
    while (out.length < n && guard++ < n * 6) { if (!pool.length) pool = shuffle(cart); var it = fn(pool.shift()); if (it) out.push(it); }
    return out;
  }
  function randEx(w) { var a = exOf(w); return a.length ? a[Math.floor(Math.random() * a.length)] : null; }
  var punct = /^[。？！，、]$/;
  var LOCAL = {
    blank: function (n) { return cycle(n, function (w) { var e = randEx(w); if (!e) return null; return { type: 'blank', q: e.zh.split(' ').map(function (t) { return t === w ? '＿＿' : t; }).join(' '), options: shuffle([w].concat(distract(w, 3))), answer: w, en: e.en }; }); },
    listen: function (n) {
      return cycle(n, function (w) {
        var e = randEx(w);
        if (e && Math.random() < 0.75) return { type: 'listen', say: e.zh.replace(/ /g, ''), q: '听句子，选出你听到的词。', fixedQ: true, options: shuffle([w].concat(distract(w, 3))), answer: w };
        var py = LIST[IDX[w]][1], opts = [py].concat(distract(w, 6).map(function (x) { return LIST[IDX[x]][1]; }).filter(function (p, i, a) { return p !== py && a.indexOf(p) === i; }).slice(0, 3));
        return { type: 'listen', say: w, q: '听词语，选出正确的拼音。', fixedQ: true, options: shuffle(opts), answer: py };
      });
    },
    translate: function (n) {
      return cycle(n, function (w) {
        var e = randEx(w); if (!e) return null;
        var dir = exCfg.dir === 'mix' ? (Math.random() < 0.5 ? 'zh-en' : 'en-zh') : exCfg.dir, zh = e.zh.replace(/ /g, '');
        return dir === 'zh-en' ? { type: 'translate', dir: dir, q: zh, answer: e.en, py: e.py } : { type: 'translate', dir: dir, q: e.en, answer: zh, py: e.py };
      });
    },
    read: function (n) {
      return cycle(n, function (w) {
        var e = randEx(w); if (!e) return null;
        var others = []; cycle(8, function (x) { var o = randEx(x) || null; if (o && o.en !== e.en && others.indexOf(o.en) < 0) others.push(o.en); return o; });
        if (others.length < 3) Object.keys(WORDS).slice(0, 40).forEach(function (k) { var o = WORDS[k].ex && WORDS[k].ex[0]; if (o && others.length < 3 && o.en !== e.en) others.push(o.en); });
        return { type: 'read', passage: e.zh.replace(/ /g, ''), qs: [{ q: '这句话是什么意思？', fixedQ: true, options: shuffle([e.en].concat(others.slice(0, 3))), answer: e.en }] };
      });
    },
    order: function (n) {
      return cycle(n, function (w) {
        var e = randEx(w); if (!e) return null;
        var t = e.zh.split(' ').filter(function (x) { return !punct.test(x); }); if (t.length < 3) return null;
        return { type: 'order', words: t, answer: e.zh.replace(/ /g, ''), en: e.en };
      });
    },
    match: function (n) {
      var ws = pick(cart, Math.min(n, cart.length, 10));
      return [{ type: 'match', pairs: ws.map(function (w) { var r = LIST[IDX[w]], d = WORDS[w]; return [w, r[1], d ? d.en[0] : r[3]]; }) }];
    }
  };

  function normalize(it, type) {
    it.type = type;
    if (it.options && it.answer != null) { it.options = it.options.map(String).slice(0, 4); if (it.options.indexOf(String(it.answer)) < 0) it.warn = '答案不在选项里，请检查'; else it.options = shuffle(it.options); }
    if (it.qs) it.qs.forEach(function (q) { if (q.options) { q.options = q.options.map(String); if (q.options.indexOf(String(q.answer)) >= 0) q.options = shuffle(q.options); } });
    if (type === 'order' && it.words) { var w0 = it.words.filter(function (x) { return !punct.test(x); }), sh = shuffle(w0), g = 0; while (sh.join('') === w0.join('') && g++ < 6) sh = shuffle(w0); it.shuffled = sh; }
    var zhParts = [it.fixedQ ? '' : it.q, it.say, it.passage, it.answer, (it.options || []).join(''), (it.words || []).join('')];
    if (it.dir === 'zh-en') zhParts.splice(3, 1);
    if (it.dir === 'en-zh') zhParts.splice(0, 1);
    (it.qs || []).forEach(function (q) { zhParts.push(q.fixedQ ? '' : q.q, (q.options || []).join('')); });
    it.bad = badChars(zhParts.filter(Boolean).join(''));
    return it;
  }

  async function makeExercises(useAI) {
    if (!cart.length) return toast('词汇篮是空的。');
    var types = EXT.filter(function (t) { return exCfg.on[t[0]]; });
    if (!types.length) return toast('请至少选一种题型。');
    if (useAI && !aiKey()) { toast('AI 生成需要 API key。'); return openAi(); }
    var run = ++exRun, t0 = Date.now();
    exData = { ai: useAI, sections: types.map(function (t) { return { type: t[0], items: [], status: 'wait' }; }) };
    renderExAll();
    if (!useAI) {
      exData.sections.forEach(function (s) { s.items = LOCAL[s.type](exCfg.n[s.type]).map(function (it) { return normalize(it, s.type); }); s.status = 'done'; });
      renderExAll(); $('exStat').textContent = '本地生成 · ' + (Date.now() - t0) + ' ms';
      return;
    }
    $('exStat').textContent = 'AI 生成中…';
    var timer = setInterval(function () { if (run !== exRun) return clearInterval(timer); $('exStat').textContent = 'AI 生成中… ' + ((Date.now() - t0) / 1000).toFixed(0) + ' 秒'; }, 1000);
    await Promise.all(exData.sections.map(function (s, i) { return aiSection(s, i, run); }));
    clearInterval(timer);
    if (run === exRun) {
      var bad = exData.sections.reduce(function (a, s) { return a + s.items.filter(function (it) { return it.bad && it.bad.length; }).length; }, 0);
      $('exStat').textContent = 'AI 完成 · ' + ((Date.now() - t0) / 1000).toFixed(1) + ' 秒' + (bad ? ' · ' + bad + ' 题含超纲字（已标出）' : '');
    }
  }
  async function aiSection(s, i, run) {
    if (s.type === 'match') { s.items = LOCAL.match(exCfg.n.match).map(function (it) { return normalize(it, 'match'); }); s.status = 'done'; renderSection(i); return; }
    s.status = 'run'; s.items = []; renderSection(i);
    var n = exCfg.n[s.type];
    var user = 'Task: ' + s.type + '\nTarget words: ' + cart.join('、') + '\nNumber of ' + (s.type === 'read' ? 'passages' : 'items') + ': ' + n +
      (s.type === 'translate' ? '\nDirection: ' + (exCfg.dir === 'mix' ? 'mix zh-en and en-zh about half and half' : exCfg.dir) : '') +
      (exCfg.note ? '\nTeacher\'s requests: ' + exCfg.note : '') +
      '\nWrite exactly ' + n + ' JSON lines of type "' + s.type + '".';
    var p = lineParser(function (o) { if (run !== exRun) return; s.items.push(normalize(o, s.type)); renderSection(i); });
    try {
      var res = await aiText({ user: user, maxTokens: s.type === 'read' ? 6000 : 4000, onText: function (t) { if (run === exRun) p.push(t); } });
      if (run !== exRun) return;
      var final = parseLines(res.text);
      if (final.length) s.items = final.map(function (o) { return normalize(o, s.type); });
      s.status = 'done';
    } catch (e) { if (run !== exRun) return; console.error(e); s.status = 'error'; s.err = aiError(e); }
    renderSection(i);
  }
  function retrySection(i) { var s = exData && exData.sections[i]; if (s) aiSection(s, i, exRun); }

  var CN = '一二三四五六七八九十';
  function secHead(s, i) { var t = EXT.filter(function (x) { return x[0] === s.type; })[0]; return '<h3>' + CN[i] + '、' + t[1] + ' <small>' + t[2] + '</small></h3>'; }
  function renderExAll() {
    var out = $('exOut');
    out.innerHTML = '<div class="ws-head"><b>' + esc(deck.title || 'HSK1 练习') + '</b><span>姓名：＿＿＿＿＿＿　日期：＿＿＿＿＿</span></div>' +
      exData.sections.map(function (s, i) { return '<section class="exsec" id="exs' + i + '"></section>'; }).join('');
    exData.sections.forEach(function (s, i) { renderSection(i); });
    out.classList.toggle('show-ans', $('exAns').checked);
  }
  function renderSection(i) {
    var s = exData.sections[i], el = $('exs' + i); if (!el) return;
    var h = secHead(s, i);
    if (s.type === 'match') h += s.items.map(matchHTML).join('');
    else h += '<ol class="items">' + s.items.map(itemHTML).join('') + '</ol>';
    if (s.status === 'run') h += '<p class="loading"><i></i> AI 正在写' + (s.items.length ? '（已完成 ' + s.items.length + ' 题）' : '…') + '</p>';
    if (s.status === 'error') h += '<p class="err">' + esc(s.err) + ' <button class="btn ghost sm" data-act="sec-retry" data-s="' + i + '">重试</button></p>';
    el.innerHTML = h;
  }
  function optsHTML(opts, ans) {
    return '<div class="eopts">' + opts.map(function (o, k) { return '<button class="eopt" data-ok="' + (o === String(ans) ? 1 : 0) + '">' + 'ABCD'[k] + '. ' + esc(o) + '</button>'; }).join('') + '</div>';
  }
  function ansLetter(it) { var k = (it.options || []).indexOf(String(it.answer)); return k >= 0 ? 'ABCD'[k] + '. ' : ''; }
  function flags(it) { return (it.bad && it.bad.length ? '<span class="flag">超纲字：' + esc(it.bad.join(' ')) + '</span>' : '') + (it.warn ? '<span class="flag">' + esc(it.warn) + '</span>' : ''); }
  function itemHTML(it) {
    var h = '<li class="item">';
    if (it.type === 'blank') h += '<div class="eq zh">' + esc(String(it.q).replace(/\s+/g, '')) + '</div>' + (it.en ? '<div class="hint-en">' + esc(it.en) + '</div>' : '') + optsHTML(it.options || [], it.answer) + '<div class="ans">答案：' + ansLetter(it) + esc(it.answer) + '</div>';
    else if (it.type === 'listen') h += '<div class="eq"><button class="say-btn" data-say="' + esc(it.say) + '" title="播放">' + ICON_PLAY + '</button><button class="say-btn slow" data-say="' + esc(it.say) + '" data-rate="0.55" title="慢速">慢</button> <span class="zh">' + esc(it.q) + '</span></div>' + optsHTML(it.options || [], it.answer) + '<div class="ans">答案：' + ansLetter(it) + esc(it.answer) + '<br>录音：' + esc(it.say) + '</div>';
    else if (it.type === 'translate') h += '<div class="eq"><span class="dir">' + (it.dir === 'en-zh' ? '英→中' : '中→英') + '</span> <span class="' + (it.dir === 'en-zh' ? '' : 'zh') + '">' + esc(it.q) + '</span></div><div class="wline"></div><div class="ans">参考答案：' + esc(it.answer) + (it.py ? '<br>' + esc(it.py) : '') + '</div>';
    else if (it.type === 'read') h += '<div class="passage zh">' + esc(it.passage) + '</div>' + (it.py ? '<div class="ans">' + esc(it.py) + (it.en ? '<br>' + esc(it.en) : '') + '</div>' : '') + '<ol class="subq">' + (it.qs || []).map(function (q) { return '<li><div class="eq zh">' + esc(q.q) + '</div>' + optsHTML(q.options || [], q.answer) + '<div class="ans">答案：' + esc(q.answer) + '</div></li>'; }).join('') + '</ol>';
    else if (it.type === 'order') h += '<div class="chips">' + (it.shuffled || it.words || []).map(function (w) { return '<span class="chip zh">' + esc(w) + '</span>'; }).join('') + '</div><div class="wline"></div><div class="ans">答案：' + esc(it.answer) + (it.en ? ' · ' + esc(it.en) : '') + '</div>';
    return h + flags(it) + '</li>';
  }
  function matchHTML(it) {
    var right = shuffle(it.pairs.map(function (p, i) { return i; }));
    return '<p class="hint-en">把汉字和对应的拼音、意思连起来。Match each word with its pinyin and meaning.</p><div class="match"><ol class="ml">' + it.pairs.map(function (p) { return '<li class="zh">' + esc(p[0]) + '</li>'; }).join('') + '</ol><ol class="mr" type="A">' +
      right.map(function (k) { return '<li>' + esc(it.pairs[k][1]) + ' — ' + esc(it.pairs[k][2]) + '</li>'; }).join('') + '</ol></div><div class="ans">答案：' + it.pairs.map(function (p, i) { return (i + 1) + '–' + 'ABCDEFGHIJ'[right.indexOf(i)]; }).join('　') + '</div>';
  }
  function exPlain() {
    if (!exData) return '';
    var L = [deck.title || 'HSK1 练习', ''], A = ['', '答案 Answers'];
    exData.sections.forEach(function (s, i) {
      var t = EXT.filter(function (x) { return x[0] === s.type; })[0];
      L.push(CN[i] + '、' + t[1] + ' ' + t[2]); A.push(CN[i] + '、' + t[1]);
      s.items.forEach(function (it, k) {
        var n = (k + 1) + '. ', op = it.options ? '   ' + it.options.map(function (o, j) { return 'ABCD'[j] + '. ' + o; }).join('   ') : '';
        if (s.type === 'blank') { L.push(n + it.q.replace(/ /g, '') + (it.en ? '  (' + it.en + ')' : ''), op); A.push(n + ansLetter(it) + it.answer); }
        else if (s.type === 'listen') { L.push(n + '（听录音）' + it.q, op); A.push(n + ansLetter(it) + it.answer + '  录音：' + it.say); }
        else if (s.type === 'translate') { L.push(n + it.q, '   ________________________'); A.push(n + it.answer); }
        else if (s.type === 'read') { L.push(n + it.passage); (it.qs || []).forEach(function (q, j) { L.push('   (' + (j + 1) + ') ' + q.q, '      ' + (q.options || []).map(function (o, m) { return 'ABCD'[m] + '. ' + o; }).join('   ')); A.push(n + '(' + (j + 1) + ') ' + q.answer); }); }
        else if (s.type === 'order') { L.push(n + (it.shuffled || it.words).join(' / '), '   ________________________'); A.push(n + it.answer); }
        else if (s.type === 'match') { var right = it.pairs.map(function (p) { return p[1] + ' — ' + p[2]; }); L.push(it.pairs.map(function (p, j) { return (j + 1) + '. ' + p[0]; }).join('   ')); L.push(right.map(function (r, j) { return 'ABCDEFGHIJ'[j] + '. ' + r; }).join('   ')); A.push('（见网页教师版）'); }
      });
      L.push('');
    });
    return L.concat(A).join('\n');
  }
  function copyEx() {
    if (!exData) return toast('还没有练习。');
    var txt = exPlain();
    (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).then(function () { toast('已复制（题目 + 答案），可以粘贴到 Word。'); }, function () {
      var ta = document.createElement('textarea'); ta.value = txt; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); toast('已复制。'); } catch (e) { toast('复制失败。'); } ta.remove();
    });
  }
  function printEx() {
    if (!exData) return toast('还没有练习。');
    document.body.classList.add('print-ex');
    var done = function () { document.body.classList.remove('print-ex'); window.removeEventListener('afterprint', done); };
    window.addEventListener('afterprint', done);
    window.print();
  }

  paintCounts();
  window.H1studio = { open: openStudio, cart: function () { return cart.slice(); } };
})();
