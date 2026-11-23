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
- **Slide** (dựng ngay từ dữ liệu, không cần AI): bìa → mỗi từ 3 trang (thẻ từ, 笔顺, 搭配·例句) → trang ôn tập; tuỳ chọn thêm “情境对话” do AI viết. 3 mẫu: 秋日农场, 小餐馆, 清新; màu chủ đạo chọn tự do.
  - Trình chiếu trên web: nét chữ chạy trực tiếp (HanziWriter), nút 🔊 đọc to.
  - Xuất PPTX (`vendor/pptxgen.bundle.js` — PptxGenJS 3.12.0): nét chữ là GIF động (`vendor/gifenc.js` — gifenc 1.0.3, bọc thành biến toàn cục `window.gifenc`), ghi chú cho giáo viên nằm ở Notes. PPTX không có âm thanh (giọng đọc của trình duyệt không lưu được vào file). Mở trực tiếp bằng `file://` thì ảnh không nhúng được vào PPTX.
- **Bài tập**: 选词填空, 听力, 翻译, 阅读理解, 连词成句, 连线.
  - “快速生成” dùng câu ví dụ có sẵn, ra ngay.
  - “AI 生成” dùng API key Anthropic của giáo viên (chỉ lưu trong trình duyệt; gửi thẳng tới api.anthropic.com qua `@anthropic-ai/sdk@1.6.0` từ jsDelivr).
  - Mặc định model `claude-opus-5-5`, effort `low`; mỗi dạng bài một yêu cầu chạy song song, hiện dần từng câu (JSON Lines). System prompt chứa cả bảng 300 từ và được cache.
  - Chữ ngoài HSK1 được đánh dấu “超纲字”.
