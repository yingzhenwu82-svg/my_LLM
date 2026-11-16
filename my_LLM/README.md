# LLM Wild｜中文大型語言模型研究知識庫

LLM Wild 是一個以繁體中文整理大型語言模型（LLM）研究知識的持續型 Wiki。專案參考「LLM 維護 Wiki」的工作模式，將原始來源、整理後的知識頁與 AI 協作規範分層管理。

## 專案特色

- **累積式知識管理**：新資料會整合到既有頁面，不只是新增摘要。
- **來源可追溯**：保留論文、官方文件與文章連結。
- **知識互相連結**：透過索引、分類與關聯地圖探索主題。
- **AI 可接手維護**：`AGENTS.md` 定義新增、查詢、健檢與網站開發流程。
- **靜態網站**：原生 HTML/CSS/JavaScript，可部署到 GitHub Pages。

## 快速開始

直接用瀏覽器開啟 `index.html` 即可預覽。若瀏覽器限制本機檔案讀取，建議使用 VS Code Live Server，或部署至 GitHub Pages。

## GitHub Pages 部署

1. 將整個資料夾內容上傳到 GitHub Repository 根目錄。
2. 進入 Repository 的 **Settings → Pages**。
3. 在 **Build and deployment** 選擇 **Deploy from a branch**。
4. Branch 選 `main`，資料夾選 `/(root)`，按 Save。
5. 等待部署完成，網站網址通常為 `https://你的帳號.github.io/Repository名稱/`。

## 新增知識文章

1. 先閱讀 `AGENTS.md`。
2. 將原始資料或來源紀錄放入 `raw/sources/`。
3. 依規範新增或更新 `wiki/` 對應 Markdown 頁面。
4. 同步新增 `data/articles.js` 中的網站文章資料。
5. 更新 `index.md`、`sitemap.md`，並在 `log.md` 追加紀錄。

## 目錄

```text
AGENTS.md
README.md
index.html
index.md
sitemap.md
log.md
css/style.css
js/app.js
data/articles.js
raw/README.md
raw/sources/
wiki/concepts/
wiki/methods/
wiki/papers/
wiki/applications/
wiki/questions/
assets/README.md
```

## 研究範圍

目前包含 LLM 基礎、Transformer、RAG、Agent、微調與模型評估。後續可擴充多模態模型、推論最佳化、長上下文、開源模型與 AI 安全等主題。

## 參考理念

本專案的知識管理方式參考 Andrej Karpathy 提出的 LLM Wiki 概念：讓 LLM 將新來源逐步整合到持續演進、互相連結的 Markdown 知識庫，而非每次查詢都從原始文件重新拼湊答案。
