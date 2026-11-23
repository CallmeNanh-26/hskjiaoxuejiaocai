// 生成朗读音频：在一个空文件夹里 npm i msedge-tts@2.1.1，然后 node gen-audio.mjs <网站文件夹> [voice]
// 使用 Microsoft Edge “大声朗读”的在线语音（非官方接口，可能随时失效）；已生成的 mp3 不受影响。
// node genall.mjs <site dir> [voice]
import { MsEdgeTTS, OUTPUT_FORMAT } from 'msedge-tts';
import fs from 'fs'; import vm from 'vm';
const site = process.argv[2], voice = process.argv[3] || 'zh-CN-XiaoxiaoNeural';
const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
for (const f of ['data/list.js', ...fs.readdirSync(site + '/data').filter(f => /^words-\d+\.js$/.test(f)).sort().map(f => 'data/' + f)]) vm.runInContext(fs.readFileSync(site + '/' + f, 'utf8'), ctx);
const norm = s => String(s).replace(/——/g, '。').replace(/\s+/g, '');
const fnv = s => { let h = 0x811c9dc5; for (const b of Buffer.from(s, 'utf8')) { h ^= b; h = Math.imul(h, 0x01000193) >>> 0; } return h.toString(16).padStart(8, '0'); };
const texts = new Set();
ctx.H1_LIST.forEach(r => texts.add(norm(r[0])));
Object.values(ctx.H1_WORDS).forEach(d => { (d.ex || []).forEach(e => texts.add(norm(e.zh))); (d.drill || []).forEach(x => { if (x.say) texts.add(norm(x.say)); if (x.t === 'order' && x.a) texts.add(norm(x.a)); }); });
const list = [...texts].filter(Boolean);
fs.mkdirSync(site + '/audio', { recursive: true });
const map = {}; list.forEach(t => map[t] = fnv(t));
let done = 0, fail = [];
async function worker(items) {
  let tts = null;
  for (const t of items) {
    const file = site + '/audio/' + map[t] + '.mp3';
    if (fs.existsSync(file) && fs.statSync(file).size > 1000) { done++; continue; }
    for (let attempt = 0; attempt < 4; attempt++) {
      try {
        if (!tts) { tts = new MsEdgeTTS(); await tts.setMetadata(voice, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3); }
        const { audioStream } = tts.toStream(t, { rate: '-10%' });
        const chunks = [];
        await new Promise((res, rej) => { audioStream.on('data', c => chunks.push(c)); audioStream.on('end', res); audioStream.on('close', res); audioStream.on('error', rej); });
        const buf = Buffer.concat(chunks); if (buf.length < 1000) throw new Error('short ' + buf.length);
        fs.writeFileSync(file, buf); break;
      } catch (e) { try { tts && tts.close(); } catch (_) {} tts = null; await new Promise(r => setTimeout(r, 1500 * (attempt + 1))); if (attempt === 3) fail.push(t); }
    }
    if (++done % 100 === 0) console.log(done + '/' + list.length);
  }
  try { tts && tts.close(); } catch (_) {}
}
const N = 4, parts = Array.from({ length: N }, (_, i) => list.filter((_, k) => k % N === i));
await Promise.all(parts.map(worker));
const ok = {}; list.forEach(t => { if (fs.existsSync(site + '/audio/' + map[t] + '.mp3')) ok[t] = map[t]; });
fs.writeFileSync(site + '/data/audio.js', '// 预先生成的朗读音频（Microsoft Edge 神经网络语音 ' + voice + '），文本 → audio/<id>.mp3\nwindow.H1_AUDIO = ' + JSON.stringify(ok) + ';\n');
console.log('total', list.length, 'ok', Object.keys(ok).length, 'fail', fail.length, fail.slice(0, 10).join(' | '));
