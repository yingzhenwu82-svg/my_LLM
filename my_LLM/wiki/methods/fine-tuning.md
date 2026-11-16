---
title: "Fine-tuning 微調"
category: "methods"
created: "2026-11-16"
updated: "2026-11-16"
tags: ["Fine-tuning", "SFT", "LoRA"]
sources:
  - "https://huggingface.co/docs/peft/index"
  - "https://arxiv.org/abs/2106.09685"
---

# Fine-tuning 微調

## 一句話摘要
以額外訓練資料調整模型行為。

## 核心內容
Fine-tuning（微調）是在已預訓練模型的基礎上，使用額外資料繼續訓練，讓模型的參數朝特定任務或行為調整。它與只在提示中提供資料的方式不同，微調會改變模型權重。\n\n## 常見形式\n- **Supervised Fine-Tuning（SFT）**：使用輸入與理想輸出範例訓練模型。\n- **Parameter-Efficient Fine-Tuning（PEFT）**：只調整少量參數，降低訓練成本。\n- **LoRA**：以低秩矩陣更新方式減少需要訓練的參數量。\n\n## 什麼時候考慮微調？\n當任務需要穩定的輸出格式、特定領域行為或大量重複的任務模式時，可以評估微調。但若需求只是讓模型取得最新知識，RAG 或工具檢索通常更容易更新與追溯。\n\n## 風險與限制\n資料品質不足可能讓模型學到錯誤模式；過度訓練可能造成過擬合或能力退化。應保留獨立驗證集，並在部署前測試原有能力是否受到影響。\n\n## 延伸閱讀\n微調後仍需進行 [llm-evaluation">模型評估]，不能只以訓練損失判斷品質。\n

## 與其他概念的關聯
- [[what-is-llm]]
- [[transformer]]
- [[rag]]
- [[llm-agent]]

## 參考來源
- [Hugging Face PEFT documentation](https://huggingface.co/docs/peft/index)
- [LoRA: Low-Rank Adaptation of Large Language Models](https://arxiv.org/abs/2106.09685)
