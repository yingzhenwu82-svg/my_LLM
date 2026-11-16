---
title: "大型語言模型是什麼？"
category: "concepts"
created: "2026-11-16"
updated: "2026-11-16"
tags: ["LLM", "預訓練", "生成模型"]
sources:
  - "https://arxiv.org/abs/1706.03762"
  - "https://stanford-cs324.github.io/winter2022/"
---

# 大型語言模型是什麼？

## 一句話摘要
LLM 的定義、訓練概念與能力邊界。

## 核心內容
大型語言模型（Large Language Model, LLM）是一類以大量文字資料訓練、能理解與生成自然語言的模型。它通常透過學習文字序列中的統計規律，預測接下來可能出現的 token。\n\n## 核心概念\n許多現代 LLM 使用 Transformer 架構。模型先將文字切分成 token，再將 token 轉成向量表示，經過多層神經網路運算，最後輸出下一個 token 的機率分布。\n\n## 常見訓練階段\n- **預訓練（Pre-training）**：從大量資料學習語言模式、知識與部分推理能力。\n- **監督式微調（SFT）**：使用示範資料，使模型更符合指令格式。\n- **偏好對齊**：透過人類偏好或其他回饋，調整模型輸出行為。\n\n## 能力與限制\nLLM 能協助摘要、翻譯、寫作、程式輔助與問答，但生成內容不保證正確。模型可能產生看似合理卻錯誤的內容，也可能受訓練資料、提示方式與上下文影響。\n\n## 延伸閱讀\n可接著閱讀 [transformer">Transformer 架構]、[token-and-context-window">Token 與 Context Window]。\n

## 與其他概念的關聯
- [[what-is-llm]]
- [[transformer]]
- [[rag]]
- [[llm-agent]]

## 參考來源
- [Attention Is All You Need（原始 Transformer 論文）](https://arxiv.org/abs/1706.03762)
- [Stanford CS324: Large Language Models](https://stanford-cs324.github.io/winter2022/)
