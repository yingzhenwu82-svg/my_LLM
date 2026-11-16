---
title: "Token 與 Context Window"
category: "concepts"
created: "2026-11-16"
updated: "2026-11-16"
tags: ["Token", "Context Window", "Prompt"]
sources:
  - "https://platform.openai.com/tokenizer"
  - "https://huggingface.co/learn/nlp-course/chapter6/1"
---

# Token 與 Context Window

## 一句話摘要
文字切分、上下文長度與限制。

## 核心內容
LLM 並不是直接以人類看到的字或句子作為運算單位，而是先透過 tokenizer 將文字切分成 token。Token 可能是完整單字、字的一部分、標點符號或其他文字片段。\n\n## Token 數量為什麼重要？\n模型的輸入、輸出與部分服務費用通常以 token 數量計算。不同語言、文字內容與 tokenizer 會影響切分結果，因此不能簡單假設一個中文字就等於一個 token。\n\n## Context Window\nContext Window 是模型在一次推論中可處理的上下文 token 容量。它通常包含系統指令、對話歷史、使用者輸入、檢索內容與模型輸出；實際計算方式依模型與服務而異。\n\n## 實務注意\n- 長文件可先摘要或分段處理。\n- 把最重要的任務指示與資料放在清楚的位置。\n- 不要把 Context Window 大小誤認為模型一定能準確使用全部內容。\n\n## 延伸閱讀\n在 [rag">RAG] 系統中，檢索與切塊策略常與上下文容量有關。\n

## 與其他概念的關聯
- [[what-is-llm]]
- [[transformer]]
- [[rag]]
- [[llm-agent]]

## 參考來源
- [OpenAI Tokenizer 說明](https://platform.openai.com/tokenizer)
- [Hugging Face NLP Course — Tokenizers](https://huggingface.co/learn/nlp-course/chapter6/1)
