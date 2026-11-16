---
title: "LLM Agent"
category: "methods"
created: "2026-11-16"
updated: "2026-11-16"
tags: ["Agent", "Tool Use", "Workflow"]
sources:
  - "https://arxiv.org/abs/2210.03629"
  - "https://huggingface.co/learn/agents-course"
---

# LLM Agent

## 一句話摘要
讓模型使用工具、規劃並執行多步驟任務。

## 核心內容
LLM Agent 通常指以語言模型作為核心決策元件，能根據目標選擇工具、執行動作、觀察結果並繼續下一步的系統。它不只是回答問題，而是能在受控環境中完成多步驟任務。\n\n## 常見循環\n- **理解目標**：解析使用者希望完成的任務。\n- **規劃**：決定下一步與所需工具。\n- **行動**：呼叫搜尋、程式執行或其他工具。\n- **觀察**：讀取工具結果與錯誤訊息。\n- **修正**：依結果繼續、重試或回報。\n\n## Agent 與一般聊天機器人的差異\n一般聊天模型主要輸出文字；Agent 系統則增加工具介面、狀態管理、任務流程與權限控制。工具呼叫本身仍需要可靠的程式環境與安全設計。\n\n## 設計注意事項\n- 限制可使用的工具與權限。\n- 對刪除、付款、寄信等高影響操作加入人類確認。\n- 保留工具輸入、輸出與錯誤紀錄。\n- 設定停止條件，避免無限循環。\n\n## 延伸閱讀\nAgent 可結合 [rag">RAG] 取得外部資訊，也需要透過 [llm-evaluation">評估方法] 檢查任務成功率與安全性。\n

## 與其他概念的關聯
- [[what-is-llm]]
- [[transformer]]
- [[rag]]
- [[llm-agent]]

## 參考來源
- [ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629)
- [Hugging Face Agents Course](https://huggingface.co/learn/agents-course)
