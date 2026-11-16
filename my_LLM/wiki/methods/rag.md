---
title: "檢索增強生成 RAG"
category: "methods"
created: "2026-11-16"
updated: "2026-11-16"
tags: ["RAG", "Embedding", "Retrieval"]
sources:
  - "https://arxiv.org/abs/2005.11401"
---

# 檢索增強生成 RAG

## 一句話摘要
將外部知識檢索整合進生成流程。

## 核心內容
檢索增強生成（Retrieval-Augmented Generation, RAG）將資訊檢索與語言模型生成結合。當問題送進系統時，系統先從外部資料庫找出相關內容，再把內容放進提示中，讓模型根據資料回答。\n\n## 典型流程\n- 文件載入：收集 PDF、網頁或文字資料。\n- 切塊（Chunking）：將文件切成適合檢索的片段。\n- 向量化（Embedding）：將文字轉成向量表示。\n- 檢索（Retrieval）：依問題找出相關片段。\n- 生成（Generation）：將問題與檢索結果交給 LLM 回答。\n\n## 優點\n- 可使用模型訓練後才出現的新資料。\n- 可將回答連結到外部來源，提升可追溯性。\n- 更新知識庫通常不必重新訓練模型。\n\n## 限制與挑戰\n檢索到錯誤或不完整的片段，會影響最終答案。切塊大小、Embedding 品質、排序方法與資料更新都會影響效果。RAG 也不代表模型一定會忠實引用資料。\n\n## RAG 與持續型 Wiki 的差異\n一般 RAG 在每次提問時檢索原始文件；持續型 Wiki 則先把來源整理成可累積的知識頁，再透過索引與連結維護跨文件綜合。兩者可以互補：Wiki 負責整理與累積，RAG 可在規模擴大後協助搜尋。\n\n## 延伸閱讀\n參考 [llm-agent">LLM Agent]，了解檢索如何成為工具流程的一部分。\n

## 與其他概念的關聯
- [[what-is-llm]]
- [[transformer]]
- [[rag]]
- [[llm-agent]]

## 參考來源
- [Lewis et al. (2020), Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](https://arxiv.org/abs/2005.11401)
