---
title: "LLM 評估方法"
category: "questions"
created: "2026-11-16"
updated: "2026-11-16"
tags: ["Evaluation", "Benchmark", "Reliability"]
sources:
  - "https://crfm.stanford.edu/helm/"
  - "https://github.com/google/BIG-bench"
---

# LLM 評估方法

## 一句話摘要
Benchmark、人類評估與評估陷阱。

## 核心內容
LLM 評估（Evaluation）是系統性檢查模型能力、可靠性、安全性與實際效用的過程。單一分數通常無法完整代表模型表現，因此需要依使用情境設計多種測試。\n\n## 常見評估方式\n- **Benchmark**：使用固定資料集與指標比較模型，例如知識、數學或程式任務。\n- **Human Evaluation**：由人類評估答案是否正確、有幫助、清楚且符合需求。\n- **Model-based Evaluation**：使用另一個模型協助評分，但需留意評分偏誤。\n- **Task-based Evaluation**：在真實工作流程中測試任務完成率、時間與錯誤。\n\n## 評估時要注意\n- 資料集可能與真實使用情境不同。\n- 模型可能針對公開 benchmark 過度最佳化。\n- 答案流暢不代表內容正確。\n- 評估結果會受提示詞、抽樣設定與評分規則影響。\n\n## 建議的評估紀錄\n每次評估至少記錄模型版本、日期、提示詞、資料集版本、評估指標、樣本數與主要錯誤類型，才能比較不同版本。\n\n## 延伸閱讀\n若評估的是 Agent，還需衡量工具選擇、步驟效率與任務完成情況，可參考 [llm-agent">LLM Agent]。\n

## 與其他概念的關聯
- [[what-is-llm]]
- [[transformer]]
- [[rag]]
- [[llm-agent]]

## 參考來源
- [HELM: Holistic Evaluation of Language Models](https://crfm.stanford.edu/helm/)
- [BIG-bench](https://github.com/google/BIG-bench)
