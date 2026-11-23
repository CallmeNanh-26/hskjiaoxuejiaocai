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
  var deck = Object.assign({ tpl: 'farm', accent: '', title: '', parts: { cover: true, word: true, stroke: true, use: true, review: true, dialog: false } }, store.get('h1ref-deck', {}));
  deck.parts = Object.assign({ cover: true, word: true, stroke: true, use: true, review: true, dialog: false }, deck.parts);
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
    '<span class="sp"></span><button class="st-ai" data-act="ai-open" title="填写你自己的 Anthropic API key">AI 设置<i class="dot"></i></button>' +
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
    '<p class="hint"><b>快速生成</b>：用本站的例句马上出题，不需要 API key。<br><b>AI 生成</b>：按你的要求写新题，只用 HSK1 词；几种题型同时生成，边写边显示。用到 HSK1 以外的字会标出来。</p>' +
    '</aside><div class="ex-main"><div class="ex-bar"><label class="tog"><input type="checkbox" id="exAns"> 显示答案（教师版）</label><span class="sp"></span><span class="stat" id="exStat"></span>' +
    '<button class="btn ghost" data-act="ex-copy">复制文字</button><button class="btn ghost" data-act="ex-print">打印 / 存 PDF</button></div>' +
    '<div class="ex-out" id="exOut"><p class="empty">在左边选好题型和数量，点“快速生成”或“AI 生成”。</p></div></div></div></section>' +
    '</div></div>' +
    /* AI 设置 */
    '<dialog class="ai-dlg" id="aiDlg"><form method="dialog">' +
    '<h3>AI 设置 <small>使用你自己的 Anthropic API key</small></h3>' +
    '<label class="fld">API key<input id="aiKey" type="password" autocomplete="off" spellcheck="false" placeholder="sk-ant-..."></label>' +
    '<label class="row"><input type="checkbox" id="aiRemember"> 在这台电脑上记住（不勾选则关掉网页就清除）</label>' +
    '<label class="fld">模型<select id="aiModel">' +
    '<option value="claude-opus-5-5">Claude Opus 5.5 · 质量最好</option>' +
    '<option value="claude-sonnet-5-5">Claude Sonnet 5.5 · 更快</option>' +
    '<option value="claude-haiku-5-5">Claude Haiku 5.5 · 最快、最便宜</option></select></label>' +
    '<p class="hint">key 只保存在你的浏览器里，只发送到 api.anthropic.com（Anthropic 官方接口）。费用按你的账户计算。还没有 key：在 console.anthropic.com 创建。</p>' +
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
     3. 课件：模板、背景、幻灯片模型（英寸，10 × 5.625）
     ===================================================================== */
  var THEMES = {
    farm: { name: '秋日农场', sub: '奶油底 · 南瓜橙 · 木框', accent: '#e8792b', bg: '#fbecc9', ink: '#5b3417', ink2: '#8a5d38', card: '#fff8e8', frame: '#b9773d', tagInk: '#fff6df' },
    diner: { name: '小餐馆', sub: '红白格桌布 · 挂单卡', accent: '#d8402f', bg: '#fff4e2', ink: '#4a2a22', ink2: '#8b5e50', card: '#fffbf3', frame: '#c98f55', tagInk: '#ffffff' },
    fresh: { name: '清新', sub: '米白 · 鼠尾草绿', accent: '#d4522a', bg: '#f3ecdd', ink: '#1f3a34', ink2: '#55675f', card: '#fffdf8', frame: '#b7ccba', tagInk: '#ffffff' }
  };
  var SWATCHES = ['#e8792b', '#d8402f', '#d4522a', '#c9488a', '#8a5cc2', '#3a6ea5', '#2f8a7a', '#5f8f3a', '#a9853f'];
  function hexRgb(h) { h = h.replace('#', ''); if (h.length === 3) h = h.replace(/./g, '$&$&'); return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)]; }
  function mix(a, b, t) { var x = hexRgb(a), y = hexRgb(b); return '#' + x.map(function (v, i) { return ('0' + Math.round(v + (y[i] - v) * t).toString(16)).slice(-2); }).join(''); }
  function themeNow(key, accent) {
    var t = Object.assign({ key: key || deck.tpl }, THEMES[key || deck.tpl] || THEMES.farm);
    t.accent = accent || (key ? t.accent : deck.accent) || t.accent;
    t.soft = mix(t.accent, '#ffffff', 0.82); t.grid = mix(t.accent, '#ffffff', 0.6); t.outline = mix(t.ink, '#ffffff', 0.86);
    t.tag = t.key === 'farm' ? t.frame : t.key === 'diner' ? t.accent : t.ink;
    return t;
  }

  /* --- 背景（canvas 绘制；网页和 PPT 用同一张） --- */
  var bgCache = {};
  function background(th) {
    var k = th.key + th.accent; if (bgCache[k]) return bgCache[k];
    var S = 160, W = 10 * S, H = 5.625 * S, cv = document.createElement('canvas'); cv.width = W; cv.height = H;
    var g = cv.getContext('2d');
    g.fillStyle = th.bg; g.fillRect(0, 0, W, H);
    if (th.key === 'fresh') {
      blob(g, W * 1.02, -H * 0.1, W * 0.45, '#d3dfe4'); blob(g, -W * 0.05, H * 1.1, W * 0.4, '#dde8db');
      g.fillStyle = mix(th.accent, '#ffffff', 0.55);
      for (var i = 0; i < 7; i++) for (var j = 0; j < 3; j++) { g.beginPath(); g.arc(W - S * (0.25 + i * 0.16), S * (0.22 + j * 0.16), S * 0.025, 0, 7); g.fill(); }
    } else if (th.key === 'farm') {
      blob(g, W * 0.1, -H * 0.15, W * 0.4, '#fff7e2');
      wave(g, H * 0.9, S * 0.08, mix(th.accent, '#ffffff', 0.7), W, H, 0);
      wave(g, H * 0.94, S * 0.07, '#c9d48f', W, H, 1.7);
      leaf(g, S * 9.55, S * 0.42, S * 0.26, 0.6, th.accent); leaf(g, S * 9.2, S * 0.25, S * 0.18, -0.5, '#d9a441'); leaf(g, S * 9.75, S * 0.9, S * 0.16, 1.4, '#b8552c');
      leaf(g, S * 0.3, S * 5.15, S * 0.2, -0.9, '#d9a441'); leaf(g, S * 0.62, S * 5.35, S * 0.15, 0.4, th.accent);
      pumpkin(g, S * 9.35, S * 5.25, S * 0.26, th.accent); pumpkin(g, S * 8.95, S * 5.36, S * 0.17, '#e5a53a');
      g.lineWidth = S * 0.09; g.strokeStyle = th.frame; rrect(g, S * 0.07, S * 0.07, W - S * 0.14, H - S * 0.14, S * 0.22); g.stroke();
      g.lineWidth = S * 0.018; g.strokeStyle = mix(th.frame, '#ffffff', 0.45); rrect(g, S * 0.14, S * 0.14, W - S * 0.28, H - S * 0.28, S * 0.17); g.stroke();
    } else {
      g.fillStyle = mix(th.accent, '#ffffff', 0.93); for (var x = 0; x < W; x += S * 0.5) g.fillRect(x, 0, S * 0.25, H);
      var cs = S * 0.28, y0 = S * 5.0;
      g.fillStyle = '#fffaf0'; g.fillRect(0, y0, W, H - y0);
      g.globalAlpha = 0.5; g.fillStyle = th.accent;
      for (var cx = 0; cx < W; cx += cs * 2) g.fillRect(cx, y0, cs, H - y0);
      for (var cy = y0; cy < H; cy += cs * 2) g.fillRect(0, cy, W, cs);
      g.globalAlpha = 1;
      g.fillStyle = 'rgba(0,0,0,.08)'; g.fillRect(0, y0, W, S * 0.03);
      var sw = S * 0.5, ah = S * 0.34;
      for (var k = 0; k * sw < W; k++) {
        g.fillStyle = k % 2 ? '#fffaf0' : th.accent; g.fillRect(k * sw, 0, sw, ah);
        g.beginPath(); g.arc(k * sw + sw / 2, ah, sw / 2, 0, Math.PI); g.fill();
      }
      g.strokeStyle = '#8a5a3c'; g.lineWidth = S * 0.02; g.beginPath(); g.moveTo(0, S * 1.06); g.quadraticCurveTo(W / 2, S * 1.26, W, S * 1.06); g.stroke();
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
  function stringY(x) { var u = (x - 5) / 5; return 1.06 + 0.1 * (1 - u * u); }
  function blob(g, x, y, r, c) { var gr = g.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, c); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, g.canvas.width, g.canvas.height); }
  function rrect(g, x, y, w, h, r) { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); }
  function wave(g, y, amp, c, W, H, ph) { g.fillStyle = c; g.beginPath(); g.moveTo(0, H); for (var x = 0; x <= W; x += 10) g.lineTo(x, y + Math.sin(x / W * 6.3 + ph) * amp); g.lineTo(W, H); g.closePath(); g.fill(); }
  function leaf(g, x, y, s, rot, c) {
    g.save(); g.translate(x, y); g.rotate(rot); g.fillStyle = c; g.beginPath(); g.moveTo(0, -s);
    g.bezierCurveTo(s * 0.75, -s * 0.6, s * 0.7, s * 0.45, 0, s); g.bezierCurveTo(-s * 0.7, s * 0.45, -s * 0.75, -s * 0.6, 0, -s); g.fill();
    g.strokeStyle = 'rgba(80,40,10,.28)'; g.lineWidth = s * 0.07; g.beginPath(); g.moveTo(0, -s * 0.75); g.lineTo(0, s * 1.3); g.stroke(); g.restore();
  }
  function pumpkin(g, x, y, r, c) {
    g.fillStyle = mix(c, '#000000', 0.12); [-0.5, 0.5].forEach(function (k) { g.beginPath(); g.ellipse(x + k * r * 0.62, y, r * 0.6, r * 0.72, 0, 0, 7); g.fill(); });
    g.fillStyle = c; g.beginPath(); g.ellipse(x, y, r * 0.58, r * 0.76, 0, 0, 7); g.fill();
    g.fillStyle = '#6b4a2a'; g.fillRect(x - r * 0.07, y - r * 0.98, r * 0.14, r * 0.3);
    leaf(g, x + r * 0.28, y - r * 0.86, r * 0.2, 1.2, '#7d9a3c');
  }

  /* --- 元素 --- */
  function R(x, y, w, h, o) { return Object.assign({ t: 'rect', x: x, y: y, w: w, h: h }, o); }
  function T(x, y, w, h, runs, o) { return Object.assign({ t: 'text', x: x, y: y, w: w, h: h, runs: typeof runs === 'string' ? [{ text: runs }] : runs }, o); }
  var FONT = { kai: ['var(--kai)', 'KaiTi'], zh: ['var(--sans)', 'Microsoft YaHei'], py: ['var(--sans)', 'Segoe UI'] };
  function textW(s, pt) { var w = 0; for (var i = 0; i < s.length; i++) w += /[　-鿿＀-￯]/.test(s[i]) ? 1 : 0.56; return w * pt / 72; }
  function card(els, th, x, y, w, h, o) {
    o = o || {};
    if (th.key === 'farm' && !o.plain) {
      els.push(R(x, y, w, h, { fill: th.frame, r: 0.2 }));
      els.push(R(x + 0.07, y + 0.07, w - 0.14, h - 0.14, { fill: o.fill || th.card, r: 0.15 }));
      var nail = mix(th.frame, '#000000', 0.3);
      [[x + 0.035, y + 0.035], [x + w - 0.105, y + 0.035], [x + 0.035, y + h - 0.105], [x + w - 0.105, y + h - 0.105]].forEach(function (p) { els.push(R(p[0] + 0.01, p[1] + 0.01, 0.05, 0.05, { fill: nail, ellipse: true })); });
    } else if (th.key === 'diner' && !o.plain) {
      if (o.hang) [x + Math.min(0.45, w / 4), x + w - Math.min(0.45, w / 4)].forEach(function (hx) {
        var sy = stringY(hx); els.push(R(hx - 0.006, sy, 0.012, y - sy, { fill: '#8a5a3c' })); els.push(R(hx - 0.04, sy - 0.07, 0.08, 0.2, { fill: th.frame, r: 0.02 }));
      });
      els.push(R(x, y, w, h, { fill: o.fill || th.card, line: mix(th.accent, '#ffffff', 0.35), lw: 1.5, r: 0.1 }));
      if (!o.noband) els.push(R(x, y, w, 0.09, { fill: th.accent, r: 0.03 }));
    } else {
      els.push(R(x, y, w, h, { fill: o.fill || th.card, line: th.frame, lw: 1.25, r: 0.18 }));
    }
  }
  function tagEl(els, th, text, x, y) {
    x = x == null ? 0.5 : x; y = y == null ? 0.58 : y;
    var w = textW(text, 14) + 0.5;
    els.push(R(x, y, w, 0.42, { fill: th.tag, r: th.key === 'fresh' ? 0.21 : 0.1 }));
    els.push(T(x, y, w, 0.42, text, { size: 14, color: th.tagInk, bold: true, align: 'center', valign: 'middle', font: 'zh' }));
    return x + w;
  }
  function tokensRuns(zh, word, size, th) {
    return zh.split(' ').map(function (t) { return { text: t, size: size, color: (t === word || (word.length > 1 && t.indexOf(word) >= 0)) ? th.accent : th.ink, bold: t === word }; });
  }

  /* --- 幻灯片 --- */
  function coverSlide(th) {
    var els = [], title = deck.title || 'HSK 1 · 生词';
    tagEl(els, th, '汉语课 · Chinese class');
    card(els, th, 1.1, 1.3, 7.8, 3.6, { hang: true });
    els.push(T(1.4, 1.55, 7.2, 1.0, title, { size: 40, bold: true, color: th.ink, align: 'center', valign: 'middle', font: 'zh' }));
    els.push(T(1.4, 2.55, 7.2, 0.45, 'HSK 3.0 一级 · 共 ' + cart.length + ' 个生词', { size: 16, color: th.ink2, align: 'center', valign: 'middle', font: 'zh' }));
    els.push(R(3.9, 3.1, 2.2, 0.03, { fill: th.accent }));
    var shown = cart.slice(0, 24).join('　') + (cart.length > 24 ? '　…' : '');
    els.push(T(1.5, 3.25, 7.0, 1.5, shown, { size: cart.length > 12 ? 20 : 26, color: th.accent, align: 'center', valign: 'top', font: 'kai', lh: 1.35 }));
    return { kind: 'cover', els: els, notes: '本课生词：' + cart.join('、') };
  }
  function wordSlide(w, i, th) {
    var els = [], r = LIST[IDX[w]], d = WORDS[w];
    tagEl(els, th, '生词 ' + (i + 1) + ' / ' + cart.length);
    els.push(T(7.2, 0.58, 2.3, 0.42, 'HSK1 · No. ' + (IDX[w] + 1), { size: 11, color: th.ink2, align: 'right', valign: 'middle', font: 'py' }));
    card(els, th, 0.5, 1.25, 5.15, 3.9, { hang: true });
    els.push(T(0.75, 1.4, 4.65, 0.32, posText(w), { size: 11, color: th.ink2, font: 'zh', valign: 'middle' }));
    var hs = w.length === 1 ? 110 : w.length === 2 ? 96 : w.length === 3 ? 78 : 62;
    els.push(T(0.75, 1.72, 4.65, 1.5, w, { size: hs, color: th.ink, font: 'kai', align: 'center', valign: 'middle', lh: 1 }));
    els.push(T(0.75, 3.2, 4.65, 0.55, r[1], { size: 30, color: th.accent, font: 'py', align: 'center', valign: 'middle' }));
    els.push({ t: 'say', x: 4.85, y: 3.25, w: 0.46, h: 0.46, text: w });
    els.push(R(0.85, 3.83, 4.45, 0.02, { fill: mix(th.ink, '#ffffff', 0.75) }));
    var zh = d ? d.zh.slice(0, 2).join('；') : '', en = d ? d.en.slice(0, 2).join('; ') : r[3];
    if (zh) els.push(T(0.8, 3.92, 4.55, 0.55, zh, { size: zh.length > 22 ? 13 : 15, color: th.ink, font: 'zh', valign: 'top' }));
    els.push(T(0.8, zh ? 4.47 : 3.95, 4.55, 0.6, en, { size: 12.5, color: th.ink2, font: 'py', italic: true, valign: 'top' }));
    card(els, th, 5.9, 1.25, 3.6, 3.9, { hang: true });
    if (d && d.img) {
      els.push({ t: 'img', x: 6.07, y: 1.42, w: 3.26, h: 2.445, src: d.img.src });
      els.push(T(6.07, 3.95, 3.26, 0.5, d.img.cap, { size: 13, color: th.ink, font: 'zh', align: 'center', valign: 'middle' }));
      els.push(T(6.07, 4.55, 3.26, 0.45, '图：' + d.img.by + ' · ' + d.img.lic, { size: 7, color: th.ink2, font: 'py', align: 'center', valign: 'bottom' }));
    } else {
      els.push(T(6.07, 1.5, 3.26, 3.4, w, { size: 90, color: th.soft, font: 'kai', align: 'center', valign: 'middle' }));
    }
    var notes = w + '  ' + r[1] + '\n' + (zh ? zh + '\n' : '') + en + (d && d.bop ? '\n\n导入：' + d.bop.b : '');
    return { kind: 'word', els: els, notes: notes };
  }
  function strokeSlide(w, th) {
    var chars = w.split('').filter(function (c, i, a) { return STROKES[c] && a.indexOf(c) === i; });
    if (!chars.length) return null;
    var els = [], d = WORDS[w], r = LIST[IDX[w]];
    var tx = tagEl(els, th, '笔顺 · Stroke order');
    els.push(T(tx + 0.2, 0.55, 4, 0.48, [{ text: w + '  ', size: 22, color: th.ink, font: 'kai' }, { text: r[1], size: 15, color: th.accent, font: 'py' }], { valign: 'middle' }));
    var n = chars.length, size = n === 1 ? 3.25 : n === 2 ? 3.1 : n === 3 ? 2.7 : 2.05, gap = n >= 3 ? 0.35 : 0.6;
    var x0 = (10 - (n * size + (n - 1) * gap)) / 2;
    chars.forEach(function (c, k) {
      var x = x0 + k * (size + gap), y = 1.32;
      card(els, th, x, y, size, size, { hang: true, noband: true });
      var p = th.key === 'farm' ? 0.13 : 0.08;
      els.push({ t: 'stroke', x: x + p, y: y + p, w: size - 2 * p, h: size - 2 * p, ch: c });
      var hz = d && d.hz ? d.hz.filter(function (z) { return z.c === c; })[0] : null;
      var label = c + ' · ' + STROKES[c].strokes.length + ' 画' + (hz ? ' · 部首 ' + hz.rad + (hz.struct ? ' · ' + hz.struct : '') : '');
      els.push(T(x - 0.2, y + size + 0.07, size + 0.4, 0.36, label, { size: 12.5, color: th.ink, font: 'zh', align: 'center', valign: 'middle' }));
    });
    var tips = d && d.hz ? d.hz.filter(function (z) { return chars.indexOf(z.c) >= 0; }).map(function (z) { return z.c + '：' + z.tip; }).join('\n') : '';
    return { kind: 'stroke', els: els, notes: tips };
  }
  function useSlide(w, th) {
    var d = WORDS[w]; if (!d || !d.ex || !d.ex.length) return null;
    var els = [], r = LIST[IDX[w]];
    var tx = tagEl(els, th, '搭配 · 例句');
    els.push(T(tx + 0.2, 0.55, 4, 0.48, [{ text: w + '  ', size: 22, color: th.ink, font: 'kai' }, { text: r[1], size: 15, color: th.accent, font: 'py' }], { valign: 'middle' }));
    card(els, th, 0.5, 1.25, 3.45, 3.9, { hang: true });
    els.push(T(0.75, 1.42, 3.0, 0.4, '常用搭配', { size: 15, bold: true, color: th.accent, font: 'zh', valign: 'middle' }));
    var lines = (d.use && d.use.length ? d.use : (d.rel || []).map(function (x) { return x + '  ' + (LIST[IDX[x]] || ['', ''])[1]; })).slice(0, 4);
    var runs = []; lines.forEach(function (u, k) { runs.push({ text: '• ' + u, br: k < lines.length - 1 }); });
    els.push(T(0.75, 1.9, 3.0, 3.1, runs, { size: lines.join('').length > 70 ? 12 : 13.5, color: th.ink, font: 'zh', valign: 'top', lh: 1.45, gap: 6 }));
    card(els, th, 4.2, 1.25, 5.3, 3.9, { hang: true });
    var exs = d.ex.slice(0, 3), bh = 3.6 / exs.length;
    exs.forEach(function (e, k) {
      var y = 1.42 + k * bh;
      if (k) els.push(R(4.45, y - 0.06, 4.8, 0.015, { fill: mix(th.ink, '#ffffff', 0.8) }));
      els.push(T(4.45, y, 4.25, 0.5, tokensRuns(e.zh, w, 19, th), { font: 'zh', valign: 'middle' }));
      els.push({ t: 'say', x: 8.85, y: y + 0.05, w: 0.4, h: 0.4, text: e.zh });
      els.push(T(4.45, y + 0.5, 4.8, 0.3, e.py, { size: 11.5, color: th.ink2, font: 'py', valign: 'middle' }));
      els.push(T(4.45, y + 0.8, 4.8, 0.3, e.en, { size: 11, color: th.ink2, font: 'py', italic: true, valign: 'middle' }));
    });
    return { kind: 'use', els: els, notes: exs.map(function (e) { return e.zh.replace(/ /g, '') + '  ' + e.py + '  ' + e.en; }).join('\n') };
  }
  function reviewSlide(words, th, off) {
    var els = [];
    tagEl(els, th, '复习 · Review' + (cart.length > 20 ? '（' + (off + 1) + '–' + (off + words.length) + '）' : ''));
    var cols = 5, gx = 0.15, gy = 0.12, cw = (9 - (cols - 1) * gx) / cols, rows = Math.ceil(words.length / cols), ch = Math.min(0.9, (3.85 - (rows - 1) * gy) / Math.max(rows, 1));
    words.forEach(function (w, k) {
      var x = 0.5 + (k % cols) * (cw + gx), y = 1.28 + Math.floor(k / cols) * (ch + gy);
      card(els, th, x, y, cw, ch, { plain: th.key !== 'fresh', fill: th.card });
      if (th.key !== 'fresh') els.push(R(x, y, cw, ch, { fill: th.card, line: th.key === 'farm' ? th.frame : mix(th.accent, '#ffffff', 0.4), lw: 1.5, r: 0.1 }));
      els.push(T(x, y + 0.04, cw, ch * 0.6, w, { size: w.length > 2 ? 21 : 26, color: th.ink, font: 'kai', align: 'center', valign: 'middle' }));
      els.push(T(x, y + ch * 0.6, cw, ch * 0.36, LIST[IDX[w]][1], { size: 11, color: th.accent, font: 'py', align: 'center', valign: 'middle' }));
    });
    return { kind: 'review', els: els, notes: '请学生读出每个词，再说一个用这个词的句子。' };
  }
  function dialogSlide(dl, th) {
    var els = [], lines = (dl.lines || []).slice(0, 6);
    var tx = tagEl(els, th, '情境对话 · Dialogue');
    if (dl.title) els.push(T(tx + 0.2, 0.55, 5, 0.48, dl.title, { size: 18, color: th.ink, font: 'zh', valign: 'middle', bold: true }));
    var h = 0.56, gap = 0.08;
    lines.forEach(function (l, k) {
      var A = k % 2 === 0, y = 1.3 + k * (h + gap), x = A ? 1.15 : 2.75, w = 6.1;
      els.push(R(A ? 0.55 : 9.0, y + 0.06, 0.44, 0.44, { fill: A ? th.accent : th.tag, ellipse: true }));
      els.push(T(A ? 0.55 : 9.0, y + 0.06, 0.44, 0.44, l.who || (A ? 'A' : 'B'), { size: 14, bold: true, color: '#ffffff', align: 'center', valign: 'middle', font: 'py' }));
      els.push(R(x, y, w, h, { fill: A ? th.card : th.soft, line: mix(th.ink, '#ffffff', 0.78), lw: 1, r: 0.16 }));
      els.push(T(x + 0.18, y + 0.03, w - 0.75, 0.3, l.zh || '', { size: 16, color: th.ink, font: 'zh', valign: 'middle' }));
      els.push(T(x + 0.18, y + 0.31, w - 0.75, 0.22, l.py || '', { size: 10, color: th.ink2, font: 'py', valign: 'middle' }));
      els.push({ t: 'say', x: x + w - 0.48, y: y + 0.09, w: 0.38, h: 0.38, text: l.zh || '' });
    });
    return { kind: 'dialog', els: els, notes: lines.map(function (l) { return (l.who || '') + '：' + l.zh + '  ' + (l.en || ''); }).join('\n') };
  }
  function buildSlides(th, dlg) {
    var S = [], P = deck.parts;
    if (P.cover) S.push(coverSlide(th));
    cart.forEach(function (w, i) {
      if (P.word) S.push(wordSlide(w, i, th));
      if (P.stroke) { var s = strokeSlide(w, th); if (s) S.push(s); }
      if (P.use) { var u = useSlide(w, th); if (u) S.push(u); }
    });
    if (P.dialog && dlg) S.push(dialogSlide(dlg, th));
    if (P.review) for (var k = 0; k < cart.length; k += 20) S.push(reviewSlide(cart.slice(k, k + 20), th, k));
    return S;
  }

  /* --- HTML 渲染（缩略图 + 放映共用；字号用 cqw 与 PPT 的 pt 对应） --- */
  var pc = function (v, t) { return (v / t * 100).toFixed(3) + '%'; };
  var cq = function (pt) { return (pt * 10 / 72).toFixed(3) + 'cqw'; };
  function gridSvg(c) { return "url('data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><g stroke="' + c + '" stroke-width="0.6" stroke-dasharray="2.5 2.5" fill="none"><path d="M0 0L100 100M100 0L0 100M50 0V100M0 50H100"/></g></svg>') + "')"; }
  function slideHTML(s, th, cls) {
    return '<div class="sl ' + bgClass(th) + ' ' + (cls || '') + '">' + s.els.map(function (e) {
      var pos = 'left:' + pc(e.x, 10) + ';top:' + pc(e.y, 5.625) + ';width:' + pc(e.w, 10) + ';height:' + pc(e.h, 5.625) + ';';
      if (e.t === 'rect') return '<div class="se" style="' + pos + 'background:' + (e.fill || 'transparent') + ';' + (e.line ? 'border:' + cq(e.lw || 1) + ' solid ' + e.line + ';' : '') + 'border-radius:' + (e.ellipse ? '50%' : ((e.r || 0) * 10).toFixed(3) + 'cqw') + '"></div>';
      if (e.t === 'text') {
        var f = FONT[e.font || 'zh'][0];
        var inner = e.runs.map(function (r) {
          var st = (r.size ? 'font-size:' + cq(r.size) + ';' : '') + (r.color ? 'color:' + r.color + ';' : '') + (r.bold ? 'font-weight:700;' : '') + (r.font ? 'font-family:' + FONT[r.font][0] + ';' : '');
          return '<span style="' + st + '">' + esc(r.text) + '</span>' + (r.br ? '<br>' + (e.gap ? '<span class="gap" style="height:' + cq(e.gap) + '"></span>' : '') : '');
        }).join('');
        return '<div class="se st" style="' + pos + 'justify-content:' + ({ top: 'flex-start', bottom: 'flex-end' }[e.valign] || 'center') + ';text-align:' + (e.align || 'left') + ';font-size:' + cq(e.size || 14) + ';color:' + (e.color || th.ink) + ';font-family:' + f + ';' + (e.bold ? 'font-weight:700;' : '') + (e.italic ? 'font-style:italic;' : '') + 'line-height:' + (e.lh || 1.2) + '"><div>' + inner + '</div></div>';
      }
      if (e.t === 'img') return '<div class="se si" style="' + pos + '"><img src="' + esc(e.src) + '" alt="" loading="lazy"></div>';
      if (e.t === 'stroke') return '<div class="se sw" data-ch="' + esc(e.ch) + '" style="' + pos + 'background-image:' + gridSvg(th.grid) + ';color:' + th.ink + ';font-size:' + cq(e.w * 72 * 0.8) + '"><span>' + esc(e.ch) + '</span></div>';
      if (e.t === 'say') return '<span class="se say" role="button" data-say="' + esc(e.text.replace(/ /g, '')) + '" style="' + pos + 'background:' + th.accent + '" title="朗读">' + ICON_PLAY + '</span>';
      return '';
    }).join('') + '</div>';
  }

  /* --- 课件设置面板 --- */
  function renderDeckOpts() {
    var th = themeNow();
    var sample = cart[0] || current || LIST[0][0], saved = cart; if (!cart.length) cart = [sample];
    $('tpls').innerHTML = Object.keys(THEMES).map(function (k) {
      var t = themeNow(k, k === deck.tpl ? deck.accent : '');
      return '<button class="tpl' + (k === deck.tpl ? ' on' : '') + '" data-tpl="' + k + '">' + slideHTML(wordSlide(sample, 0, t), t, 'mini') + '<b>' + THEMES[k].name + '</b><small>' + THEMES[k].sub + '</small></button>';
    }).join('');
    cart = saved;
    $('swatches').innerHTML = SWATCHES.map(function (c) { return '<button class="sw-c' + (c === th.accent ? ' on' : '') + '" data-color="' + c + '" style="background:' + c + '" title="' + c + '"></button>'; }).join('') +
      '<label class="sw-pick" title="自选颜色"><input type="color" id="deckColor" value="' + th.accent + '"></label><button class="btn ghost sm" data-color="">默认</button>';
    $('deckTitle').value = deck.title;
    var P = [['cover', '封面'], ['word', '词卡（字、拼音、意思、图片）'], ['stroke', '笔顺动画'], ['use', '搭配 · 例句'], ['review', '复习页'], ['dialog', '情境对话（AI 生成）']];
    $('deckParts').innerHTML = P.map(function (p) { return '<label><input type="checkbox" data-part="' + p[0] + '"' + (deck.parts[p[0]] ? ' checked' : '') + '> ' + p[1] + '</label>'; }).join('');
    $('deckHint').innerHTML = '<b>网页放映</b>：笔顺实时演示，点 🔊 朗读。<br><b>PPTX</b>：笔顺是 GIF 动图（放映时会动）。PPT 里没有声音——浏览器朗读无法存进文件，上课要读音时请用网页放映。' + (location.protocol === 'file:' ? '<br><b>注意</b>：直接打开本地文件时，PPT 里放不进图片；请用网站（GitHub Pages）或本地服务器打开。' : '');
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
    if (t.id === 'deckColor') { deck.accent = t.value; saveDeck(); clearTimeout(renderThumbs.c); renderThumbs.c = setTimeout(renderDeckOpts, 120); }
    if (t.id === 'exNote') { exCfg.note = t.value; saveEx(); }
  });
  studio.addEventListener('change', function (e) {
    var t = e.target;
    if (t.dataset.part) {
      deck.parts[t.dataset.part] = t.checked; saveDeck();
      if (t.dataset.part === 'dialog' && t.checked && !aiKey()) { toast('情境对话需要 AI：请先填写 API key。'); openAi(); }
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
    var key = cart.join('|') + '#' + deck.title;
    if (dlgCache.key === key && dlgCache.data) return dlgCache.data;
    if (!aiKey()) { toast('没有 API key，这次先不加情境对话。'); return null; }
    var old = btn && btn.textContent; if (btn) { btn.disabled = true; btn.textContent = 'AI 正在写对话…'; }
    try {
      var words = cart.slice(0, 10).join('、');
      var res = await aiText({
        user: 'Task: dialog\nTarget words: ' + words + '\nTopic hint: ' + (deck.title || '(none)') + '\nWrite ONE JSON line: {"type":"dialog","title":"<2-6 Chinese characters>","lines":[{"who":"A","zh":"...","py":"...","en":"..."}, ...]} with 4 to 6 lines alternating A and B. Each line max 12 characters. Use as many target words as is natural.',
        maxTokens: 4000
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
  function go(d) { var n = showI + d; if (n < 0 || n >= showSlides.length) return; showI = n; drawShow(); }
  function drawShow() {
    showWriters.forEach(function (w) { try { w.pauseAnimation(); } catch (e) {} }); showWriters = [];
    $('stage').innerHTML = slideHTML(showSlides[showI], showTh, 'live');
    $('showN').textContent = (showI + 1) + ' / ' + showSlides.length;
    if (!window.HanziWriter) return;
    $('stage').querySelectorAll('.sw').forEach(function (box) {
      var c = box.dataset.ch, size = Math.floor(box.clientWidth);
      box.innerHTML = '';
      var wr = HanziWriter.create(box, c, {
        width: size, height: size, padding: size * 0.05, showOutline: true, strokeColor: showTh.ink, outlineColor: showTh.outline, radicalColor: showTh.accent,
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
  function strokeGif(ch, th) {
    var k = ch + th.card + th.ink + th.accent; if (gifCache[k]) return gifCache[k];
    var d = STROKES[ch], S = 240, pad = S * 0.05, sc = (S - 2 * pad) / 1024;
    var cv = document.createElement('canvas'); cv.width = cv.height = S;
    var g = cv.getContext('2d', { willReadFrequently: true });
    var paths = d.strokes.map(function (p) { return new Path2D(p); });
    function base(upto) {
      g.setTransform(1, 0, 0, 1, 0, 0); g.fillStyle = th.card; g.fillRect(0, 0, S, S);
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
      g.save(); g.clip(paths[i]); g.strokeStyle = th.accent; g.lineWidth = 160; g.lineCap = 'round'; g.lineJoin = 'round';
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
          var W = 800, H = 600, cv = document.createElement('canvas'); cv.width = W; cv.height = H;
          var r = Math.max(W / im.naturalWidth, H / im.naturalHeight), w = im.naturalWidth * r, h = im.naturalHeight * r;
          cv.getContext('2d').drawImage(im, (W - w) / 2, (H - h) / 2, w, h);
          res(cv.toDataURL('image/jpeg', 0.85));
        } catch (e) { res(null); }
      };
      im.onerror = function () { res(null); };
      im.src = src;
    }));
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
      var missingImg = 0;
      for (var i = 0; i < slides.length; i++) {
        btn.textContent = '正在生成 ' + (i + 1) + ' / ' + slides.length + '…'; await tick();
        var s = slides[i], sl = pptx.addSlide({ masterName: 'BG' });
        for (var k = 0; k < s.els.length; k++) {
          var e = s.els[k], box = { x: e.x, y: e.y, w: e.w, h: e.h };
          if (e.t === 'rect') {
            sl.addShape(e.ellipse ? 'ellipse' : e.r ? 'roundRect' : 'rect', Object.assign({}, box, {
              fill: e.fill ? { color: hex(e.fill) } : { color: 'FFFFFF', transparency: 100 },
              line: e.line ? { color: hex(e.line), width: e.lw || 1 } : { type: 'none' }, rectRadius: e.r || 0
            }));
          } else if (e.t === 'text') {
            sl.addText(e.runs.map(function (r) {
              return { text: r.text, options: { fontSize: r.size || e.size || 14, color: hex(r.color || e.color || th.ink), bold: r.bold != null ? r.bold : !!e.bold, italic: !!e.italic, fontFace: FONT[r.font || e.font || 'zh'][1], breakLine: !!r.br } };
            }), Object.assign({}, box, { align: e.align || 'left', valign: e.valign || 'middle', margin: 0, fontFace: FONT[e.font || 'zh'][1], fontSize: e.size || 14, color: hex(e.color || th.ink), paraSpaceAfter: e.gap || 0, lineSpacingMultiple: e.lh && e.lh > 1.25 ? e.lh * 0.85 : undefined }));
          } else if (e.t === 'img') {
            var data = await imgData(e.src);
            if (data) sl.addImage(Object.assign({}, box, { data: data }));
            else { missingImg++; sl.addText('（图片）', Object.assign({}, box, { align: 'center', valign: 'middle', fontSize: 12, color: hex(th.ink2), fontFace: 'Microsoft YaHei' })); }
          } else if (e.t === 'stroke') {
            sl.addImage(Object.assign({}, box, { data: strokeGif(e.ch, th) }));
            await tick();
          }
        }
        if (s.notes) sl.addNotes(s.notes);
      }
      btn.textContent = '正在打包…'; await tick();
      var name = ('HSK1-' + (deck.title || cart.slice(0, 4).join('') + (cart.length > 4 ? '等' + cart.length + '词' : ''))).replace(/[\\/:*?"<>|\s]+/g, '-');
      await pptx.writeFile({ fileName: name + '.pptx' });
      toast('PPTX 已下载：' + slides.length + ' 页。' + (missingImg ? ' 有 ' + missingImg + ' 张图片没能放进去（请用网站版打开再导出）。' : ''));
    } catch (err) { console.error(err); toast('导出失败：' + (err && err.message || err)); }
    finally { btn.disabled = false; btn.textContent = label; }
  }

  /* =====================================================================
     6. AI（Anthropic SDK，浏览器直连）
     ===================================================================== */
  var SDK_URL = 'https://cdn.jsdelivr.net/npm/@anthropic-ai/sdk@1.6.0/+esm';
  var sdkP = null;
  function sdk() { return sdkP || (sdkP = import(SDK_URL).catch(function (e) { sdkP = null; throw e; })); }
  function aiKey() { try { return sessionStorage.getItem('h1ref-ai-key') || localStorage.getItem('h1ref-ai-key') || ''; } catch (e) { return ''; } }
  function aiModel() { return store.get('h1ref-ai-model', 'claude-opus-5-5'); }
  function setKey(k, remember) {
    try {
      sessionStorage.removeItem('h1ref-ai-key'); localStorage.removeItem('h1ref-ai-key');
      if (k) (remember ? localStorage : sessionStorage).setItem('h1ref-ai-key', k);
    } catch (e) {}
    paintAi();
  }
  function paintAi() { var b = studio.querySelector('.st-ai'); if (b) b.classList.toggle('ok', !!aiKey()); }
  function openAi() {
    $('aiKey').value = aiKey();
    var rem = false; try { rem = !!localStorage.getItem('h1ref-ai-key'); } catch (e) {}
    $('aiRemember').checked = rem; $('aiModel').value = aiModel(); $('aiStat').textContent = '';
    $('aiDlg').showModal();
  }
  $('aiKey').addEventListener('input', function () { setKey(this.value.trim(), $('aiRemember').checked); });
  $('aiRemember').addEventListener('change', function () { setKey($('aiKey').value.trim(), this.checked); });
  $('aiModel').addEventListener('change', function () { store.set('h1ref-ai-model', this.value); });
  async function testAi() {
    var st = $('aiStat'); st.className = 'stat'; st.textContent = '连接中…';
    try {
      var c = await aiClient();
      var m = await c.models.retrieve(aiModel());
      st.className = 'stat ok'; st.textContent = '✓ 可以使用 ' + (m.display_name || m.id);
    } catch (e) { st.className = 'stat no'; st.textContent = aiError(e); }
  }
  async function aiClient() {
    var key = aiKey(); if (!key) { var err = new Error('NOKEY'); err.code = 'nokey'; throw err; }
    var mod = await sdk(); var Anthropic = mod.default || mod.Anthropic;
    return new Anthropic({ apiKey: key, dangerouslyAllowBrowser: true, maxRetries: 2 });
  }
  function aiError(e) {
    if (!e) return '未知错误';
    if (e.code === 'nokey') return '请先在「AI 设置」里填写 API key。';
    if (e.code === 'refusal') return 'AI 没有完成这个请求，请换一种要求再试。';
    var s = e.status;
    if (s === 401) return 'API key 不对，请检查后再试。';
    if (s === 403) return '这个 key 没有权限使用所选模型。';
    if (s === 404) return '找不到这个模型，请在「AI 设置」里换一个。';
    if (s === 429) return '请求太多或额度不足（429），请稍等再试。';
    if (s === 529 || s === 503) return 'AI 服务现在很忙，请稍后再试。';
    if (s === 400) return '请求被拒绝：' + ((e.error && e.error.error && e.error.error.message) || e.message);
    if (!s) return '连不上 AI：请检查网络（需要能访问 api.anthropic.com 和 cdn.jsdelivr.net）。';
    return 'AI 出错（' + s + '）：' + e.message;
  }

  /* 固定的系统提示（含 HSK1 全部词表）—— 每次请求都一样，开启提示缓存，几种题型并行时更快更省 */
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
    'JSON Lines: one complete JSON object per line, nothing else — no markdown fences, no numbering, no comments, no blank lines.',
    'Schemas by type:',
    'blank:     {"type":"blank","q":"我 ＿＿ 妈妈。","options":["爱","吃","去","是"],"answer":"爱","en":"I love my mom."}   (q uses ＿＿ for the gap; spaces between words)',
    'listen:    {"type":"listen","say":"<sentence read aloud to students>","q":"<short question in Chinese, HSK1 words only>","options":["…","…","…","…"],"answer":"…"}',
    'translate: {"type":"translate","dir":"zh-en" or "en-zh","q":"<source sentence>","answer":"<reference translation>","py":"<pinyin of the Chinese sentence>"}',
    'read:      {"type":"read","passage":"<3-5 short Chinese sentences forming a tiny text>","py":"<pinyin of the passage>","en":"<English translation>","qs":[{"q":"<question in Chinese>","options":["…","…","…","…"],"answer":"…"}]}   (2-3 questions per passage; one passage = one line)',
    'order:     {"type":"order","words":["我","爱","妈妈"],"answer":"我爱妈妈。","en":"I love my mom."}   (words = the sentence split into words, without the final punctuation, in correct order — the app shuffles them)',
    'dialog:    {"type":"dialog","title":"…","lines":[{"who":"A","zh":"…","py":"…","en":"…"}]}',
    '',
    'HSK1 WORD LIST (word|pinyin|English):',
    LIST.map(function (r) { return r[0] + '|' + r[1] + '|' + r[3]; }).join('\n')
  ].join('\n');

  async function aiText(o) {
    var c = await aiClient(), model = aiModel();
    var body = {
      model: model, max_tokens: o.maxTokens || 8000,
      output_config: { effort: 'low' },
      system: [{ type: 'text', text: SYSTEM, cache_control: { type: 'ephemeral' } }],
      messages: [{ role: 'user', content: o.user }]
    };
    var stream = model === 'claude-haiku-5-5'
      ? c.messages.stream(body)
      : c.beta.messages.stream(Object.assign({}, body, { betas: ['server-side-fallback-2026-07-01'], fallbacks: 'default' }));
    if (o.signal) o.signal.addEventListener('abort', function () { try { stream.abort(); } catch (e) {} });
    if (o.onText) stream.on('text', o.onText);
    var msg = await stream.finalMessage();
    if (msg.stop_reason === 'refusal') { var err = new Error('refusal'); err.code = 'refusal'; throw err; }
    var blocks = msg.content, fi = blocks.map(function (b) { return b.type; }).lastIndexOf('fallback');
    if (fi >= 0) blocks = blocks.slice(fi + 1);
    return { text: blocks.filter(function (b) { return b.type === 'text'; }).map(function (b) { return b.text; }).join(''), msg: msg };
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
      var res = await aiText({ user: user, maxTokens: s.type === 'read' ? 10000 : 7000, onText: function (t) { if (run === exRun) p.push(t); } });
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
