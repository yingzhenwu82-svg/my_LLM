---
title: "Transformer 架構"
category: "concepts"
created: "2026-11-16"
updated: "2026-11-16"
tags: ["Transformer", "Attention", "神經網路"]
sources:
  - "https://arxiv.org/abs/1706.03762"
---

# Transformer 架構

## 一句話摘要
Self-Attention、位置資訊與模型堆疊。

## 核心內容
Transformer 是一種以注意力機制（Attention）為核心的神經網路架構。2017 年論文 *Attention Is All You Need* 提出此架構，讓序列處理不必完全依賴循環式網路。\n\n## Self-Attention\nSelf-Attention 讓序列中的每個 token 根據其他 token 的資訊計算關聯程度。常見計算會將輸入投影成 Query、Key、Value，再計算注意力權重。\n```text\nAttention(Q, K, V) = softmax(QKᵀ / √dₖ)V\n```\n## 主要組件\n- **Multi-Head Attention**：使用多個注意力頭，從不同表示子空間學習關係。\n- **Feed-Forward Network**：對每個位置的表示進行非線性轉換。\n- **Positional Information**：提供 token 順序資訊。\n- **Residual Connection 與 Layer Normalization**：協助深層網路訓練。\n\n## Encoder 與 Decoder\n原始 Transformer 同時包含 Encoder 與 Decoder。許多生成式 LLM 採用 decoder-only 架構，透過 causal mask 使每個位置只能關注先前 token。\n\n## 延伸閱讀\nTransformer 是理解 [what-is-llm">大型語言模型] 的重要基礎。\n

## 與其他概念的關聯
- [[what-is-llm]]
- [[transformer]]
- [[rag]]
- [[llm-agent]]

## 參考來源
- [Vaswani et al. (2017), Attention Is All You Need](https://arxiv.org/abs/1706.03762)
