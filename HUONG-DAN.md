# HSK1 教学参考 — hệ thống tham khảo cho giáo viên

## Mở trang
- Cách nhanh: bấm đúp `index.html` (chạy được không cần mạng; chỉ phông chữ đẹp cần mạng).
- Hoặc chạy `node hsk1-giaovien/tools/serve.js` rồi mở http://localhost:8770

Phát âm dùng giọng đọc tiếng Trung của trình duyệt (Chrome / Edge). Nếu máy báo chưa có giọng tiếng Trung, hãy dùng Edge hoặc cài thêm giọng "中文（简体）" trong cài đặt Windows.

## Cấu trúc
- `data/list.js` — 300 từ HSK1 (HSK 3.0, đề cương 2025): từ, pinyin, từ loại, nghĩa tiếng Anh ngắn. Dùng cho tìm kiếm và danh sách.
- `data/words-01.js` — nội dung chi tiết đợt 1 (10 từ). Mỗi đợt sau thêm một file `words-02.js`… và khai báo trong `index.html`.
- `data/strokes.js` — dữ liệu nét chữ (Make Me a Hanzi, giấy phép Arphic).
- `img/` — ảnh minh hoạ từ Wikimedia Commons; tác giả và giấy phép ghi ngay dưới mỗi ảnh.

## Các trường của một từ (`words-XX.js`)
| Trường | Nội dung |
|---|---|
| `pos` | 词性 (中 / EN) |
| `zh`, `en` | 意义 中英, từng nghĩa tương ứng nhau |
| `syl`, `phon` | 语音: thanh mẫu, vận mẫu, thanh điệu; lưu ý phát âm |
| `img` | 插图: `src`, chú thích `cap`, tác giả `by`, giấy phép `lic`, nguồn `from` |
| `hz` | 汉字: mỗi chữ có bộ thủ `rad`/`radName`/`radMean`, kết cấu `struct`, bộ kiện `parts`, cách nhớ `tip`, chữ cùng họ `fam` |
| `cul` | 文化小知识 (mảng câu ngắn) |
| `use` | cấu trúc thường dùng |
| `ex` | 例子 theo tình huống `ctx`; `zh` tách từ bằng dấu cách (từ HSK1 sẽ bấm được) |
| `drill` | bài tập: `choice` (có thể kèm `say` để nghe) và `order` (xếp câu; `alt` = đáp án khác cũng đúng) |
| `bop` | giáo án BOPPPS cho từ: `b` 导入, `o` 目标 (mảng), `pre` 前测, `p` 参与式学习, `post` 后测, `s` 总结 |
| `act` | hoạt động thú vị trên lớp; `tag` = loại (TPR, 游戏, 情境表演…) |
| `teach`, `err` | 教学提示 và 易错例子 (`x` sai, `v` đúng, `why`) |
| `syn`, `ant`, `rel` | 同义词, 反义词, từ liên quan; `out: true` = ngoài phạm vi HSK1 |

## Nguyên tắc nội dung
- Ví dụ ngắn, một mệnh đề, chỉ dùng từ HSK1.
- Lỗi thường gặp viết chung cho mọi học viên, không nhắm vào một tiếng mẹ đẻ cụ thể.
- Pinyin dùng phông `--pinyin` (Noto Serif / Cambria); phông pinyin luôn đứng đầu trong `--serif` và `--sans`; Fraunces và Noto Serif SC vẽ lệch dấu thanh.

## Giỏ từ vựng · Slide · Bài tập (studio.js / studio.css)
- **Giỏ từ**: nút “加入词汇篮” trên mỗi trang từ, hoặc nút 词汇篮 trên thanh đầu trang (thêm theo chữ hoặc số thứ tự, ví dụ `1-20`). Lưu trong localStorage `h1ref-cart`.
- **Slide** (dựng ngay từ dữ liệu, không cần AI): bìa → 课堂导入 (lấy `bop.b` + hoạt động đầu tiên của tối đa 4 từ) → mỗi từ 2 trang (thẻ từ có 笔顺 ngay trên thẻ, chú thích ảnh có pinyin sinh tự động từ bảng HSK1; 搭配·例句) → tuỳ chọn “情境对话” do AI viết → trò chơi ôn tập: 看图说词, 选词填空, 翻译挑战, 读一读.
  - Trò chơi có đáp án ẩn (`hide: true`): trình chiếu web bấm lần đầu hiện đáp án, lần sau sang trang; PPTX tách thành trang câu hỏi + trang đáp án. Không hiển thị số nét hay số thứ tự HSK.
  - 5 mẫu, mỗi mẫu một bố cục riêng (`LAY.ink / shop / panel`; farm và diner dùng chung `LAY_OLD`):
    - 朴物·新中式: giấy màu be, lá bạch quả vẽ mực, con dấu, chữ dọc;
    - 复古小铺: giấy kẻ ô, dải đen, vé đỏ, khung nét đứt;
    - 暖调面板: nền hoa văn thảm, bảng kem, cột danh sách từ bên trái, vòng tiến độ;
    - 秋日农场; 小餐馆.
  - Toàn bộ bảng màu sinh từ **một màu chủ đạo** (`themeNow`): nền pastel gần màu đó, thẻ, khung ảnh, màu chữ; màu phụ `a2` là màu đối (xoay hue 150°).
  - Hoạ tiết (lá bạch quả, con dấu, vòng tiến độ, mũi tên) vẽ bằng canvas thành PNG trong suốt.
  - Trình chiếu trên web: nét chữ chạy trực tiếp (HanziWriter), nút 🔊 đọc to.
  - Xuất PPTX (`vendor/pptxgen.bundle.js` — PptxGenJS 3.12.0): nét chữ là GIF động (`vendor/gifenc.js` — gifenc 1.0.3, bọc thành biến toàn cục `window.gifenc`), ghi chú cho giáo viên nằm ở Notes. PPTX không có âm thanh. Mở trực tiếp bằng `file://` thì ảnh không nhúng được vào PPTX.
- **Bài tập**: 选词填空, 听力, 翻译, 阅读理解, 连词成句, 连线.
  - “快速生成” dùng câu ví dụ có sẵn, ra ngay.
  - “AI 生成”: giáo viên chọn nhà cung cấp và dán API key của mình trong 「AI 设置」. Key lưu riêng theo từng nhà cung cấp, chỉ trong trình duyệt.
    - Các dịch vụ OpenAI‑compatible gọi bằng fetch + SSE: DeepSeek (mặc định, `deepseek-chat`), 通义千问, Kimi, 豆包, 硅基流动, 百度千帆, 腾讯混元, ChatGPT, “其他”.
    - Claude dùng `@anthropic-ai/sdk`.
    - Model và địa chỉ API sửa được trong mục “高级”.
    - Đã kiểm tra (2026‑11): các API trên đều cho phép trình duyệt gọi trực tiếp (CORS); 智谱 GLM thì không nên không đưa vào danh sách.
  - Mỗi dạng bài một yêu cầu chạy song song, hiện dần từng câu (JSON Lines). System prompt chứa cả bảng 300 từ và giống hệt nhau giữa các lần gọi, nên DeepSeek/Qwen tự cache.
  - Chữ ngoài HSK1 được đánh dấu “超纲字”.

## Âm thanh (audio/, data/audio.js)
- Có 1.532 file MP3 (300 từ + câu ví dụ + câu trong 练习), tổng khoảng 21 MB, giọng `zh-CN-XiaoxiaoNeural`.
  - Tạo bằng `tools/gen-audio.mjs`, dùng dịch vụ đọc online của Microsoft Edge qua gói `msedge-tts@2.1.1`.
  - Đây là cách dùng không chính thức, Microsoft có thể chặn bất cứ lúc nào; các file đã tạo thì không bị ảnh hưởng.
- `data/audio.js` ánh xạ văn bản (đã bỏ khoảng trắng) sang mã file. Tên file là mã băm FNV‑1a của văn bản.
- Web: `speak()` trong app.js phát MP3 nếu có (nút 慢速 phát 0,7×), không có file thì mới dùng giọng của trình duyệt.
- PPTX: nút 🔊 nhúng MP3 bằng `addMedia`; khi trình chiếu, bấm vào biểu tượng để phát.
  - `vendor/pptxgen.bundle.js` đã sửa 1 chỗ để âm thanh dùng thẻ `<a:audioFile>` thay cho `<a:videoFile>`.
  - Sau khi PptxGenJS tạo file, `fixPptxAudio()` (dùng JSZip có sẵn trong bundle) sửa lại từng slide: đánh lại ID đối tượng cho khỏi trùng, và thêm `<p:timing>` với `<p:audio><p:cMediaNode>` cho từng âm thanh (giống file PowerPoint tự tạo). Đã kiểm tra: PowerPoint phát được, WPS nhận đủ đối tượng âm thanh.
  - Nếu mở trang bằng `file://` thì không đọc được MP3; khi đó trang chỉ chèn hình loa và thông báo cho biết có bao nhiêu đoạn âm thanh chưa nhúng được.
  - Khi sửa thư viện này phải đọc/ghi ở dạng byte (latin1), không đọc/ghi như văn bản UTF‑8, nếu không phần nén ZIP bên trong sẽ hỏng và lệnh xuất bị treo.
- Thêm hoặc sửa câu ví dụ thì chạy lại script: chỉ những câu chưa có file mới được tạo, rồi `data/audio.js` được ghi lại.
