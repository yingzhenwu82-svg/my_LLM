# 知識關聯地圖

```text
大型語言模型（LLM）
├── Token 與 Context Window
├── Transformer
│   └── Self-Attention
├── 訓練與調整
│   └── Fine-tuning
├── 推論與應用
│   ├── RAG
│   └── LLM Agent
└── 評估
    └── Benchmark／人類評估
```

## 主要關聯

- **Transformer** 是許多現代 LLM 的核心架構。
- **Token** 是模型處理文字的基本單位；**Context Window** 限制單次輸入與輸出可處理的 token 數量。
- **RAG** 在生成前檢索外部資料，適合需要引用外部知識的任務。
- **Agent** 讓 LLM 能透過工具與環境互動，完成多步驟工作。
- **Fine-tuning** 改變模型參數，使模型更適應特定任務或行為。
- **Evaluation** 用來檢查模型能力、可靠性與限制，需搭配多種評估方式。
