/* HSK1 教学参考 — 词表 H1_LIST（300 词）+ 详细内容 H1_WORDS（分批补充） */
(function () {
  'use strict';
  var LIST = window.H1_LIST || [], WORDS = window.H1_WORDS || {}, STROKES = window.HSK_STROKES || {};
  var IDX = {}; LIST.forEach(function (r, i) { IDX[r[0]] = i; });
  var $ = function (id) { return document.getElementById(id); };
  var POS = { '名': ['名词', 'noun'], '动': ['动词', 'verb'], '形': ['形容词', 'adjective'], '副': ['副词', 'adverb'], '数': ['数词', 'numeral'], '量': ['量词', 'measure word'], '代': ['代词', 'pronoun'], '助': ['助词', 'particle'], '介': ['介词', 'preposition'], '连': ['连词', 'conjunction'], '叹': ['叹词', 'interjection'], '数量': ['数量词', 'numeral-measure'], '前缀': ['前缀', 'prefix'], '后缀': ['后缀', 'suffix'] };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var href = function (w) { return '#/' + encodeURIComponent(w); };
  var plain = function (s) { return s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ü/g, 'v').replace(/[\s'’·]/g, '').toLowerCase(); };
  var prefs = { py: true, en: true };
  try { var saved = JSON.parse(localStorage.getItem('h1ref-prefs') || '{}'); if (saved.py === false) prefs.py = false; if (saved.en === false) prefs.en = false; } catch (e) {}
  var savePrefs = function () { try { localStorage.setItem('h1ref-prefs', JSON.stringify(prefs)); } catch (e) {} };

  /* ---------- 语音 (Web Speech) ---------- */
  var voice = null;
  function pickVoice() {
    if (!('speechSynthesis' in window)) return;
    var vs = speechSynthesis.getVoices().filter(function (v) { return /^zh([-_](CN|Hans))?/i.test(v.lang) && !/HK|TW|yue/i.test(v.lang + v.name); });
    voice = vs.filter(function (v) { return /Xiaoxiao|Yunxi|Google|Tingting|Huihui/i.test(v.name); })[0] || vs[0] || null;
  }
  if ('speechSynthesis' in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  function speak(text, rate) {
    if (!('speechSynthesis' in window)) return toast('此浏览器不支持朗读，请使用 Chrome 或 Edge。');
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text.replace(/——/g, '。').replace(/\s+/g, ''));
    u.lang = 'zh-CN'; u.rate = rate || 0.85; if (voice) u.voice = voice;
    else if (speechSynthesis.getVoices().length) toast('电脑上没有中文语音。请在系统设置里添加"中文（简体）"语音。');
    speechSynthesis.speak(u);
  }
  var toastT;
  function toast(msg) { var t = $('toast'); t.textContent = msg; t.hidden = false; clearTimeout(toastT); toastT = setTimeout(function () { t.hidden = true; }, 3200); }
  var ICON_PLAY = '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16.5 8.5a5 5 0 010 7M19 6a8.5 8.5 0 010 12" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/></svg>';

  /* ---------- 声调图 ---------- */
  function toneSvg(t) {
    var y = function (l) { return 40 - (l - 1) * 8.5; }, d;
    if (t === 1) d = 'M8 ' + y(5) + ' L50 ' + y(5);
    else if (t === 2) d = 'M8 ' + y(3) + ' L50 ' + y(5);
    else if (t === 3) d = 'M8 ' + y(2) + ' Q24 ' + (y(1) + 6) + ' 30 ' + y(1) + ' T50 ' + y(4);
    else if (t === 4) d = 'M8 ' + y(5) + ' L50 ' + y(1);
    var grid = ''; for (var l = 1; l <= 5; l++) grid += '<line x1="4" x2="54" y1="' + y(l) + '" y2="' + y(l) + '" stroke="#e4d9c3" stroke-width="1"/>';
    var mark = d ? '<path d="' + d + '" stroke="#d4522a" stroke-width="3.5" fill="none" stroke-linecap="round"/>' : '<circle cx="29" cy="' + y(2.5) + '" r="4.5" fill="#d4522a"/>';
    return '<svg viewBox="0 0 58 46" width="64" height="50" aria-hidden="true">' + grid + mark + '</svg>';
  }
  var TONE = ['轻声', '第一声 · 55', '第二声 · 35', '第三声 · 214', '第四声 · 51'];

  /* ---------- 词表 ---------- */
  var listFilter = 'all', current = null;
  function renderList() {
    $('wordlist').innerHTML = LIST.map(function (r, i) {
      var done = !!WORDS[r[0]];
      if (listFilter === 'done' && !done) return '';
      return '<a class="wl' + (done ? '' : ' todo') + (r[0] === current ? ' on' : '') + '" href="' + href(r[0]) + '" data-w="' + esc(r[0]) + '"><span class="n">' + (i + 1) + '</span><span><span class="hz">' + esc(r[0]) + '</span><span class="py">' + esc(r[1]) + '</span></span>' + (done ? '<span class="dot" title="已完成"></span>' : '<span></span>') + '</a>';
    }).join('');
    var on = $('wordlist').querySelector('.on'); if (on) on.scrollIntoView({ block: 'nearest' });
  }
  $('listFilter').addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    listFilter = b.dataset.f; [].forEach.call(this.children, function (x) { x.classList.toggle('on', x === b); }); renderList();
  });
  var nDone = LIST.filter(function (r) { return WORDS[r[0]]; }).length;
  $('progress').innerHTML = '已完成 <b>' + nDone + '</b> / ' + LIST.length + ' 词';

  /* ---------- 搜索 ---------- */
  var q = $('q'), resBox = $('results'), resSel = 0, resItems = [];
  function search(s) {
    s = s.trim(); if (!s) return [];
    var cjk = /[㐀-鿿]/.test(s), p = plain(s), low = s.toLowerCase(), out = [];
    LIST.forEach(function (r, i) {
      var score = -1, w = r[0], py = plain(r[1]), en = r[3].toLowerCase(), full = WORDS[w];
      if (cjk) { if (w === s) score = 0; else if (w.indexOf(s) === 0) score = 1; else if (w.indexOf(s) > 0) score = 2; else if (s.indexOf(w) >= 0 && w.length > 1) score = 3; }
      else {
        if (py === p) score = 0; else if (p && py.indexOf(p) === 0) score = 1;
        var enAll = en + (full ? ' ; ' + full.en.join(' ; ').toLowerCase() : '');
        if (score < 0 && new RegExp('(^|[^a-z])' + low.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '([^a-z]|$)').test(enAll)) score = en.split(';')[0].replace(/^to /, '').trim() === low ? 1 : 2;
        if (score < 0 && low.length >= 2 && enAll.indexOf(low) >= 0) score = 4;
        if (score < 0 && p.length >= 2 && py.indexOf(p) > 0) score = 5;
      }
      if (score >= 0) out.push([score, i]);
    });
    out.sort(function (a, b) { return a[0] - b[0] || a[1] - b[1]; });
    return out.slice(0, 14).map(function (o) { return LIST[o[1]]; });
  }
  function showResults() {
    resItems = search(q.value); resSel = 0;
    if (!q.value.trim()) { resBox.hidden = true; return; }
    resBox.hidden = false;
    resBox.innerHTML = resItems.length ? resItems.map(function (r, i) {
      return '<a class="res' + (i === 0 ? ' on' : '') + '" href="' + href(r[0]) + '"><span class="hz">' + esc(r[0]) + '</span><span><span class="py">' + esc(r[1]) + '</span><span class="en">' + esc(r[3]) + '</span></span><span class="tag' + (WORDS[r[0]] ? ' done">已完成' : '">待补充') + '</span></a>';
    }).join('') : '<div class="res-empty">HSK1 词表里没有找到 "' + esc(q.value) + '"</div>';
  }
  q.addEventListener('input', showResults);
  q.addEventListener('focus', showResults);
  q.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { resBox.hidden = true; q.blur(); return; }
    if (!resItems.length) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault(); resSel = (resSel + (e.key === 'ArrowDown' ? 1 : -1) + resItems.length) % resItems.length;
      [].forEach.call(resBox.children, function (c, i) { c.classList.toggle('on', i === resSel); if (i === resSel) c.scrollIntoView({ block: 'nearest' }); });
    } else if (e.key === 'Enter') { e.preventDefault(); go(resItems[resSel][0]); }
  });
  resBox.addEventListener('click', function () { closeSearch(); });
  document.addEventListener('click', function (e) { if (!e.target.closest('#searchBox')) resBox.hidden = true; });
  document.addEventListener('keydown', function (e) { if (e.key === '/' && document.activeElement !== q) { e.preventDefault(); q.focus(); q.select(); } });
  function closeSearch() { resBox.hidden = true; q.value = ''; q.blur(); }
  function go(w) { closeSearch(); if (location.hash === href(w)) render(); else location.hash = href(w); }

  /* ---------- 例句分词 ---------- */
  function tokens(zh, cur) {
    return zh.split(' ').map(function (t) {
      if (t === cur) return '<mark class="cur">' + esc(t) + '</mark>';
      if (IDX[t] != null) { var r = LIST[IDX[t]]; var inner = t.indexOf(cur) >= 0 ? esc(t).replace(esc(cur), '<mark class="cur">' + esc(cur) + '</mark>') : esc(t); return '<a class="tk" href="' + href(t) + '" title="' + esc(r[1] + ' · ' + r[3]) + '">' + inner + '</a>'; }
      return esc(t);
    }).join('');
  }
  function wordLink(w, cls) {
    var r = LIST[IDX[w]]; if (!r) return '';
    return '<a class="' + cls + '" href="' + href(w) + '" title="' + esc(r[3]) + '">' + esc(w) + '<small>' + esc(r[1]) + '</small></a>';
  }

  /* ---------- 页面 ---------- */
  var writers = [];
  function posChips(w, row) {
    var list = w ? w.pos : row[2].replace(/[（）]/g, '').split('、').filter(Boolean).map(function (p) { return POS[p] || [p, '']; });
    if (!list.length) list = [['短语', 'phrase']];
    return list.map(function (p) { return '<span class="chip">' + esc(p[0]) + (p[1] ? ' <small>' + esc(p[1]) + '</small>' : '') + '</span>'; }).join('');
  }
  function relCard(o) {
    var inList = IDX[o.w] != null, r = inList ? LIST[IDX[o.w]] : null, py = o.py || (r && r[1]) || '';
    var inner = '<span class="hz">' + esc(o.w) + (py ? '<small>' + esc(py) + '</small>' : '') + '</span>' + (o.note ? '<span class="note">' + esc(o.note) + '</span>' : '') + (o.out ? '<span class="out">超纲 · beyond HSK1</span>' : '');
    return inList ? '<a class="rel" href="' + href(o.w) + '">' + inner + '</a>' : '<div class="rel">' + inner + '</div>';
  }
  function strokeCard(word) {
    var chars = word.split('').filter(function (c, i, a) { return STROKES[c] && a.indexOf(c) === i; });
    if (!chars.length) return '';
    return '<section class="card half" id="s-stroke"><header><h2>笔顺</h2><span class="sub">Stroke order</span></header><div class="writers">' + chars.map(function (c, i) {
      return '<div class="writer"><div class="wbox" id="wb' + i + '"></div><div class="btns"><button class="mini" data-act="anim" data-i="' + i + '">▶ 演示</button><button class="mini" data-act="quiz" data-i="' + i + '">✎ 描写</button></div><div class="cnt">' + esc(c) + ' · 共 ' + STROKES[c].strokes.length + ' 笔</div></div>';
    }).join('') + '</div><p class="hint">点"演示"看笔顺动画；点"描写"后用鼠标或手指在田字格里按笔顺写。</p></section>';
  }
  function mountWriters(word) {
    writers = [];
    if (!window.HanziWriter) return;
    word.split('').filter(function (c, i, a) { return STROKES[c] && a.indexOf(c) === i; }).forEach(function (c, i) {
      var box = $('wb' + i), size = box.clientWidth || 150;
      writers.push(HanziWriter.create(box, c, {
        width: size, height: size, padding: 10, showOutline: true, strokeColor: '#1f3a34', outlineColor: '#d9cfba', radicalColor: '#a9853f',
        highlightColor: '#d4522a', drawingColor: '#d4522a', drawingWidth: 26, strokeAnimationSpeed: 1, delayBetweenStrokes: 260, showHintAfterMisses: 2,
        charDataLoader: function (ch, done) { done(STROKES[ch]); }
      }));
    });
  }

  function drillHtml(d, i) {
    var audio = d.say ? '<button class="round" data-say="' + esc(d.say) + '" title="播放">' + ICON_PLAY + '</button>' : '';
    if (d.t === 'order') {
      return '<div class="drill" data-d="' + i + '"><div class="q"><span>连词成句' + (d.en ? '：' + esc(d.en) : '') + '</span></div><div class="slot"></div><div class="bank">' + d.words.map(function (w, k) { return '<button class="wchip" data-k="' + k + '">' + esc(w) + '</button>'; }).join('') + '</div><div class="acts"><button class="btn" data-act="check">检查</button><button class="btn ghost" data-act="reset">重来</button><span class="verdict"></span></div></div>';
    }
    return '<div class="drill" data-d="' + i + '"><div class="q"><span>' + esc(d.q) + '</span>' + audio + '</div><div class="opts">' + d.opts.map(function (o, k) { return '<button class="opt" data-k="' + k + '">' + 'ABCD'[k] + '. ' + esc(o) + '</button>'; }).join('') + '</div></div>';
  }

  function render() {
    var word = decodeURIComponent(location.hash.replace(/^#\/?/, '')) || LIST[0][0];
    if (IDX[word] == null) word = LIST[0][0];
    current = word;
    var i = IDX[word], row = LIST[i], w = WORDS[word], main = $('main');
    var prev = LIST[i - 1], next = LIST[i + 1];
    var h = '';

    /* hero */
    h += '<section class="hero"><div><div class="crumbs"><span class="chip lv">HSK 1 · No. ' + (i + 1) + '</span>' + posChips(w, row) + '</div>' +
      '<div class="headword"><span class="hz" lang="zh">' + esc(word) + '</span><span class="py">' + esc(row[1]) + '</span></div>' +
      '<div class="audio"><button class="play main" data-say="' + esc(word) + '">' + ICON_PLAY + ' 朗读</button><button class="play" data-say="' + esc(word) + '" data-rate="0.5">' + ICON_PLAY + ' 慢速</button></div>';
    if (w) h += '<ol class="senses">' + w.zh.map(function (z, k) { return '<li><span><span class="zh">' + esc(z) + '</span><span class="en">' + esc(w.en[k] || '') + '</span></span></li>'; }).join('') + '</ol>';
    else h += '<ol class="senses"><li><span><span class="zh">' + esc(row[3]) + '</span><span class="en">英文简释（中文释义待补充）</span></span></li></ol>';
    h += '</div>';
    if (w && w.img) h += '<figure class="frame"><div class="pic"><img src="' + esc(w.img.src) + '" alt="' + esc(w.img.cap) + '" loading="lazy"></div><figcaption><span class="cap">' + esc(w.img.cap) + '</span><span class="credit">图：' + esc(w.img.by) + ' · ' + esc(w.img.lic) + ' · ' + esc(w.img.from) + '</span></figcaption></figure>';
    h += '</section>';

    if (!w) {
      h += '<div class="tabs"></div><div class="grid"><div class="stub-note"><b>这个词的教学内容还在准备中。</b><br>目前可以查看拼音、词性、英文简释、朗读和笔顺。完整内容（语音要点、例句、练习、教学建议、近反义词）会分批补充。</div>' + strokeCard(word) + '</div>';
    } else {
      h += '<div class="tabs" id="tabs"><a data-to="s-phon">语音</a><a data-to="s-stroke">笔顺</a><a data-to="s-hz">汉字 · 文化</a><a data-to="s-ex">例句</a><a data-to="s-drill">练习</a><a data-to="s-bop">BOPPPS · 活动</a><a data-to="s-teach">提示 · 易错</a><a data-to="s-syn">近义 · 反义</a><span class="sp"></span>' +
        '<label class="tog"><input type="checkbox" id="togPy"' + (prefs.py ? ' checked' : '') + '>拼音</label><label class="tog"><input type="checkbox" id="togEn"' + (prefs.en ? ' checked' : '') + '>English</label></div>';
      h += '<div class="grid">';

      /* 语音 */
      h += '<section class="card half" id="s-phon"><header><h2>语音</h2><span class="sub">Pronunciation</span></header><div class="syls">' + w.syl.map(function (s, k) {
        return '<button class="syl" data-say="' + esc((k === w.syl.length - 1 && word.length > w.syl.length ? word.slice(k) : word.charAt(k)) || word) + '" title="点击听这个音节"><span class="big">' + esc(s.py) + '</span>' + toneSvg(s.t) + '<span class="parts">声母 <b>' + esc(s.i) + '</b> · 韵母 <b>' + esc(s.f) + '</b><br>' + TONE[s.t] + '</span></button>';
      }).join('') + '</div><h3>发音要点</h3><ul class="notes">' + w.phon.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul></section>';

      /* 笔顺 */
      h += strokeCard(word);

      /* 汉字（部首、记忆）+ 文化 */
      if (w.hz || w.cul) {
        h += '<section class="card" id="s-hz"><header><h2>汉字 · 文化</h2><span class="sub">Radicals, memory tips & culture</span></header>';
        if (w.hz) h += '<h3>部首与记忆方法</h3><div class="hzs">' + w.hz.map(function (z) {
          return '<div class="hzrow"><div class="big" lang="zh">' + esc(z.c) + '</div><div><div class="hzmeta"><span><b>部首</b><i class="radc" style="font-style:normal">' + esc(z.rad) + '</i>' + esc(z.radName) + (z.radMean ? ' · ' + esc(z.radMean) : '') + '</span><span><b>结构</b>' + esc(z.struct) + '</span><span><b>部件</b>' + esc(z.parts) + '</span></div><p class="tip">' + esc(z.tip) + '</p>' + (z.fam ? '<p class="fam">' + esc(z.fam) + '</p>' : '') + '</div></div>';
        }).join('') + '</div>';
        if (w.cul) h += '<h3>文化小知识</h3><div class="culture">' + w.cul.map(function (x) { return '<p>' + esc(x) + '</p>'; }).join('') + '</div>';
        h += '</section>';
      }

      /* 用法 + 例句 */
      h += '<section class="card" id="s-ex"><header><h2>例句</h2><span class="sub">Examples by situation</span></header>' +
        (w.use ? '<h3>常用结构</h3><ul class="patterns">' + w.use.map(function (u) { return '<li>' + esc(u) + '</li>'; }).join('') + '</ul><h3>情境例句</h3>' : '') +
        '<div class="exs">' + w.ex.map(function (e) {
          return '<div class="ex"><span class="ctx">' + esc(e.ctx) + '</span><div><div class="zh" lang="zh">' + tokens(e.zh, word) + '</div><div class="py">' + esc(e.py) + '</div><div class="en">' + esc(e.en) + '</div></div><button class="round" data-say="' + esc(e.zh) + '" title="朗读">' + ICON_PLAY + '</button></div>';
        }).join('') + '</div><p class="hint">点击例句里带虚线的词，可以跳到那个词的页面。</p></section>';

      /* 练习 */
      h += '<section class="card" id="s-drill"><header><h2>练习资源</h2><span class="sub">Practice</span></header><h3>学生练习（可直接投屏做）</h3><div class="drills">' + w.drill.map(drillHtml).join('') + '</div></section>';

      /* BOPPPS + 趣味活动 */
      var BOP = [['b', 'B', '导入', 'Bridge-in', '2′'], ['o', 'O', '学习目标', 'Objectives', '1′'], ['pre', 'P', '前测', 'Pre-assessment', '2′'], ['p', 'P', '参与式学习', 'Participatory learning', '10′'], ['post', 'P', '后测', 'Post-assessment', '3′'], ['s', 'S', '总结', 'Summary', '2′']];
      h += '<section class="card" id="s-bop"><header><h2>BOPPPS 教学设计</h2><span class="sub">Lesson plan & fun activities</span></header>' +
        (w.bop ? '<div class="bop">' + BOP.map(function (s) {
          var v = w.bop[s[0]], body = Array.isArray(v) ? '<ul class="notes">' + v.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' : '<p>' + esc(v) + '</p>';
          return '<div class="bstep"><span class="letter">' + s[1] + '</span><div><div class="bh"><b>' + s[2] + '</b><i>' + s[3] + '</i><span class="min">约 ' + s[4] + '</span></div>' + body + '</div></div>';
        }).join('') + '</div><p class="hint">时间为这一个词的参考用时（约 20 分钟），可按课堂情况调整。</p>' : '') +
        '<h3>趣味教学活动</h3><div class="acts-list">' + w.act.map(function (a) { return '<div class="activity">' + (a.tag ? '<span class="atag">' + esc(a.tag) + '</span>' : '') + '<b>' + esc(a.name) + '</b><p>' + esc(a.how) + '</p></div>'; }).join('') + '</div></section>';

      /* 教学提示 */
      h += '<section class="card" id="s-teach"><header><h2>教学提示 · 易错</h2><span class="sub">Teaching notes & common errors</span></header><h3>教学提示</h3><div class="steps">' + w.teach.map(function (t) { return '<div class="step"><span class="h">' + esc(t.h) + '</span><p>' + esc(t.p) + '</p></div>'; }).join('') + '</div>' +
        '<h3>易错例子</h3><div class="errs">' + w.err.map(function (e) { return '<div class="errrow"><div class="x"><i>✗</i><span>' + esc(e.x) + '</span></div><div class="v"><i>✓</i><span>' + esc(e.v) + '</span></div><p class="why">' + esc(e.why) + '</p></div>'; }).join('') + '</div></section>';

      /* 近反义 */
      h += '<section class="card" id="s-syn"><header><h2>近义词 · 反义词</h2><span class="sub">Synonyms & antonyms</span></header>' +
        '<h3>近义词 / 易混词</h3>' + (w.syn.length ? '<div class="rels">' + w.syn.map(relCard).join('') + '</div>' : '<p class="none">HSK1 范围内没有常用的近义词。</p>') +
        '<h3>反义词 / 对应词</h3>' + (w.ant.length ? '<div class="rels">' + w.ant.map(relCard).join('') + '</div>' : '<p class="none">这个词没有反义词。</p>') +
        (w.rel && w.rel.length ? '<h3>相关词（HSK1）</h3><div class="pills">' + w.rel.map(function (x) { return wordLink(x, 'pill'); }).join('') + '</div>' : '') + '</section>';
      h += '</div>';
    }

    h += '<div class="pager">' + (prev ? '<a href="' + href(prev[0]) + '"><small>← 上一个</small><b>' + esc(prev[0]) + '</b></a>' : '<span></span>') + (next ? '<a href="' + href(next[0]) + '"><small>下一个 →</small><b>' + esc(next[0]) + '</b></a>' : '<span></span>') + '</div>';

    main.innerHTML = h;
    main.classList.toggle('hide-py', !prefs.py); main.classList.toggle('hide-en', !prefs.en);
    document.title = word + ' ' + row[1] + ' · HSK1 教学参考';
    mountWriters(word);
    renderList();
    $('side').classList.remove('open');
    window.scrollTo(0, 0);
  }

  /* ---------- 事件 ---------- */
  $('main').addEventListener('click', function (e) {
    var t = e.target, el;
    if ((el = t.closest('[data-say]'))) { speak(el.dataset.say, parseFloat(el.dataset.rate) || 0); return; }
    if ((el = t.closest('[data-to]'))) { var s = $(el.dataset.to); if (s) s.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
    if ((el = t.closest('.mini'))) { var wr = writers[+el.dataset.i]; if (!wr) return; if (el.dataset.act === 'anim') { wr.cancelQuiz(); wr.showCharacter(); wr.animateCharacter(); } else { wr.quiz({ onComplete: function () { toast('写对了！'); } }); } return; }
    var drill = t.closest('.drill'); if (!drill) return;
    var d = WORDS[current].drill[+drill.dataset.d];
    if ((el = t.closest('.opt'))) {
      var k = +el.dataset.k, ok = k === d.a;
      el.classList.add(ok ? 'right' : 'wrong');
      if (!ok) drill.querySelectorAll('.opt')[d.a].classList.add('right');
      drill.classList.add('done');
      if (!drill.querySelector('.why')) drill.insertAdjacentHTML('beforeend', '<div class="why"><b>' + (ok ? '✓ 正确。' : '答案：' + 'ABCD'[d.a] + '。') + '</b> ' + esc(d.why || '') + '</div>');
      return;
    }
    var slot = drill.querySelector('.slot'), verdict = drill.querySelector('.verdict');
    if ((el = t.closest('.wchip'))) {
      if (el.parentNode === slot) { drill.querySelector('.bank [data-k="' + el.dataset.k + '"]').classList.remove('used'); el.remove(); }
      else { el.classList.add('used'); var c = el.cloneNode(true); c.classList.remove('used'); slot.appendChild(c); }
      verdict.textContent = ''; return;
    }
    if ((el = t.closest('[data-act]'))) {
      if (el.dataset.act === 'reset') { slot.innerHTML = ''; drill.querySelectorAll('.bank .wchip').forEach(function (x) { x.classList.remove('used'); }); verdict.textContent = ''; return; }
      var got = [].map.call(slot.children, function (x) { return x.textContent; }).join('');
      var strip = function (s) { return s.replace(/[。？！，]/g, ''); };
      var good = [d.a].concat(d.alt || []).some(function (a) { return strip(a) === got; });
      verdict.className = 'verdict ' + (good ? 'ok' : 'no');
      verdict.textContent = good ? '✓ ' + d.a : (slot.children.length < d.words.length ? '还有词没用上。' : '✗ 再试一次。');
      if (good) speak(d.a);
    }
  });
  $('main').addEventListener('change', function (e) {
    if (e.target.id === 'togPy') prefs.py = e.target.checked; else if (e.target.id === 'togEn') prefs.en = e.target.checked; else return;
    $('main').classList.toggle('hide-py', !prefs.py); $('main').classList.toggle('hide-en', !prefs.en); savePrefs();
  });
  $('menuBtn').addEventListener('click', function () { $('side').classList.toggle('open'); });
  $('scrim').addEventListener('click', function () { $('side').classList.remove('open'); });
  window.addEventListener('hashchange', render);
  render();
})();
