window.LLM_WILD_ARTICLES = [
  {
    "id": "what-is-llm",
    "title": "大型語言模型是什麼？",
    "category": "concepts",
    "categoryLabel": "核心概念",
    "summary": "認識 LLM 的基本定義、預訓練與生成方式，以及它擅長與不擅長的任務。",
    "tags": [
      "LLM入門",
      "預訓練",
      "生成模型"
    ],
    "readTime": "6 分鐘",
    "updated": "2026-11-16",
    "content": "<p>大型語言模型（Large Language Model, LLM）是一類以大量文字資料訓練、能理解與生成自然語言的模型。它通常透過學習文字序列中的統計規律，預測接下來可能出現的 token。</p><h2>核心概念</h2><p>許多現代 LLM 使用 Transformer 架構。模型先將文字切分成 token，再將 token 轉成向量表示，經過多層神經網路運算，最後輸出下一個 token 的機率分布。</p><h2>常見訓練階段</h2><ul><li><b>預訓練（Pre-training）</b>：從大量資料學習語言模式、知識與部分推理能力。</li><li><b>監督式微調（SFT）</b>：使用示範資料，使模型更符合指令格式。</li><li><b>偏好對齊</b>：透過人類偏好或其他回饋，調整模型輸出行為。</li></ul><h2>能力與限制</h2><p>LLM 能協助摘要、翻譯、寫作、程式輔助與問答，但生成內容不保證正確。模型可能產生看似合理卻錯誤的內容，也可能受訓練資料、提示方式與上下文影響。</p><h2>延伸閱讀</h2><p>可接著閱讀 <a href=\"?article=transformer\">Transformer 架構</a>、<a href=\"?article=token-and-context-window\">Token 與 Context Window</a>。</p>",
    "sources": [
      {
        "label": "Attention Is All You Need（原始 Transformer 論文）",
        "url": "https://arxiv.org/abs/1706.03762"
      },
      {
        "label": "Stanford CS324: Large Language Models",
        "url": "https://stanford-cs324.github.io/winter2022/"
      }
    ]
  },
  {
    "id": "transformer",
    "title": "Transformer 架構",
    "category": "concepts",
    "categoryLabel": "核心概念",
    "summary": "理解 Self-Attention 如何讓模型掌握序列中不同 token 之間的關係。",
    "tags": [
      "Transformer",
      "Attention",
      "神經網路"
    ],
    "readTime": "7 分鐘",
    "updated": "2026-11-16",
    "content": "<p>Transformer 是一種以注意力機制（Attention）為核心的神經網路架構。2017 年論文 <i>Attention Is All You Need</i> 提出此架構，讓序列處理不必完全依賴循環式網路。</p><h2>Self-Attention</h2><p>Self-Attention 讓序列中的每個 token 根據其他 token 的資訊計算關聯程度。常見計算會將輸入投影成 Query、Key、Value，再計算注意力權重。</p><pre><code>Attention(Q, K, V) = softmax(QKᵀ / √dₖ)V</code></pre><h2>主要組件</h2><ul><li><b>Multi-Head Attention</b>：使用多個注意力頭，從不同表示子空間學習關係。</li><li><b>Feed-Forward Network</b>：對每個位置的表示進行非線性轉換。</li><li><b>Positional Information</b>：提供 token 順序資訊。</li><li><b>Residual Connection 與 Layer Normalization</b>：協助深層網路訓練。</li></ul><h2>Encoder 與 Decoder</h2><p>原始 Transformer 同時包含 Encoder 與 Decoder。許多生成式 LLM 採用 decoder-only 架構，透過 causal mask 使每個位置只能關注先前 token。</p><h2>延伸閱讀</h2><p>Transformer 是理解 <a href=\"?article=what-is-llm\">大型語言模型</a> 的重要基礎。</p>",
    "sources": [
      {
        "label": "Vaswani et al. (2017), Attention Is All You Need",
        "url": "https://arxiv.org/abs/1706.03762"
      }
    ]
  },
  {
    "id": "token-and-context-window",
    "title": "Token 與 Context Window",
    "category": "concepts",
    "categoryLabel": "核心概念",
    "summary": "Token 是模型讀寫文字的單位；Context Window 則決定單次互動能容納多少上下文。",
    "tags": [
      "Token",
      "Context Window",
      "Prompt"
    ],
    "readTime": "5 分鐘",
    "updated": "2026-11-16",
    "content": "<p>LLM 並不是直接以人類看到的字或句子作為運算單位，而是先透過 tokenizer 將文字切分成 token。Token 可能是完整單字、字的一部分、標點符號或其他文字片段。</p><h2>Token 數量為什麼重要？</h2><p>模型的輸入、輸出與部分服務費用通常以 token 數量計算。不同語言、文字內容與 tokenizer 會影響切分結果，因此不能簡單假設一個中文字就等於一個 token。</p><h2>Context Window</h2><p>Context Window 是模型在一次推論中可處理的上下文 token 容量。它通常包含系統指令、對話歷史、使用者輸入、檢索內容與模型輸出；實際計算方式依模型與服務而異。</p><h2>實務注意</h2><ul><li>長文件可先摘要或分段處理。</li><li>把最重要的任務指示與資料放在清楚的位置。</li><li>不要把 Context Window 大小誤認為模型一定能準確使用全部內容。</li></ul><h2>延伸閱讀</h2><p>在 <a href=\"?article=rag\">RAG</a> 系統中，檢索與切塊策略常與上下文容量有關。</p>",
    "sources": [
      {
        "label": "OpenAI Tokenizer 說明",
        "url": "https://platform.openai.com/tokenizer"
      },
      {
        "label": "Hugging Face NLP Course — Tokenizers",
        "url": "https://huggingface.co/learn/nlp-course/chapter6/1"
      }
    ]
  },
  {
    "id": "rag",
    "title": "檢索增強生成 RAG",
    "category": "methods",
    "categoryLabel": "技術方法",
    "summary": "先從外部知識來源找出相關內容，再把檢索結果交給 LLM 生成答案。",
    "tags": [
      "RAG",
      "Embedding",
      "向量資料庫"
    ],
    "readTime": "8 分鐘",
    "updated": "2026-11-16",
    "content": "<p>檢索增強生成（Retrieval-Augmented Generation, RAG）將資訊檢索與語言模型生成結合。當問題送進系統時，系統先從外部資料庫找出相關內容，再把內容放進提示中，讓模型根據資料回答。</p><h2>典型流程</h2><ol><li>文件載入：收集 PDF、網頁或文字資料。</li><li>切塊（Chunking）：將文件切成適合檢索的片段。</li><li>向量化（Embedding）：將文字轉成向量表示。</li><li>檢索（Retrieval）：依問題找出相關片段。</li><li>生成（Generation）：將問題與檢索結果交給 LLM 回答。</li></ol><h2>優點</h2><ul><li>可使用模型訓練後才出現的新資料。</li><li>可將回答連結到外部來源，提升可追溯性。</li><li>更新知識庫通常不必重新訓練模型。</li></ul><h2>限制與挑戰</h2><p>檢索到錯誤或不完整的片段，會影響最終答案。切塊大小、Embedding 品質、排序方法與資料更新都會影響效果。RAG 也不代表模型一定會忠實引用資料。</p><h2>RAG 與持續型 Wiki 的差異</h2><p>一般 RAG 在每次提問時檢索原始文件；持續型 Wiki 則先把來源整理成可累積的知識頁，再透過索引與連結維護跨文件綜合。兩者可以互補：Wiki 負責整理與累積，RAG 可在規模擴大後協助搜尋。</p><h2>延伸閱讀</h2><p>參考 <a href=\"?article=llm-agent\">LLM Agent</a>，了解檢索如何成為工具流程的一部分。</p>",
    "sources": [
      {
        "label": "Lewis et al. (2020), Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
        "url": "https://arxiv.org/abs/2005.11401"
      }
    ]
  },
  {
    "id": "llm-agent",
    "title": "LLM Agent：讓模型使用工具",
    "category": "methods",
    "categoryLabel": "技術方法",
    "summary": "從單輪文字生成延伸到規劃、工具呼叫、觀察結果與多步驟執行。",
    "tags": [
      "Agent",
      "Tool Use",
      "Workflow"
    ],
    "readTime": "7 分鐘",
    "updated": "2026-11-16",
    "content": "<p>LLM Agent 通常指以語言模型作為核心決策元件，能根據目標選擇工具、執行動作、觀察結果並繼續下一步的系統。它不只是回答問題，而是能在受控環境中完成多步驟任務。</p><h2>常見循環</h2><ol><li><b>理解目標</b>：解析使用者希望完成的任務。</li><li><b>規劃</b>：決定下一步與所需工具。</li><li><b>行動</b>：呼叫搜尋、程式執行或其他工具。</li><li><b>觀察</b>：讀取工具結果與錯誤訊息。</li><li><b>修正</b>：依結果繼續、重試或回報。</li></ol><h2>Agent 與一般聊天機器人的差異</h2><p>一般聊天模型主要輸出文字；Agent 系統則增加工具介面、狀態管理、任務流程與權限控制。工具呼叫本身仍需要可靠的程式環境與安全設計。</p><h2>設計注意事項</h2><ul><li>限制可使用的工具與權限。</li><li>對刪除、付款、寄信等高影響操作加入人類確認。</li><li>保留工具輸入、輸出與錯誤紀錄。</li><li>設定停止條件，避免無限循環。</li></ul><h2>延伸閱讀</h2><p>Agent 可結合 <a href=\"?article=rag\">RAG</a> 取得外部資訊，也需要透過 <a href=\"?article=llm-evaluation\">評估方法</a> 檢查任務成功率與安全性。</p>",
    "sources": [
      {
        "label": "ReAct: Synergizing Reasoning and Acting in Language Models",
        "url": "https://arxiv.org/abs/2210.03629"
      },
      {
        "label": "Hugging Face Agents Course",
        "url": "https://huggingface.co/learn/agents-course"
      }
    ]
  },
  {
    "id": "fine-tuning",
    "title": "Fine-tuning 微調",
    "category": "methods",
    "categoryLabel": "技術方法",
    "summary": "透過額外訓練資料更新模型參數，使模型更適合特定任務、領域或輸出風格。",
    "tags": [
      "Fine-tuning",
      "SFT",
      "LoRA"
    ],
    "readTime": "6 分鐘",
    "updated": "2026-11-16",
    "content": "<p>Fine-tuning（微調）是在已預訓練模型的基礎上，使用額外資料繼續訓練，讓模型的參數朝特定任務或行為調整。它與只在提示中提供資料的方式不同，微調會改變模型權重。</p><h2>常見形式</h2><ul><li><b>Supervised Fine-Tuning（SFT）</b>：使用輸入與理想輸出範例訓練模型。</li><li><b>Parameter-Efficient Fine-Tuning（PEFT）</b>：只調整少量參數，降低訓練成本。</li><li><b>LoRA</b>：以低秩矩陣更新方式減少需要訓練的參數量。</li></ul><h2>什麼時候考慮微調？</h2><p>當任務需要穩定的輸出格式、特定領域行為或大量重複的任務模式時，可以評估微調。但若需求只是讓模型取得最新知識，RAG 或工具檢索通常更容易更新與追溯。</p><h2>風險與限制</h2><p>資料品質不足可能讓模型學到錯誤模式；過度訓練可能造成過擬合或能力退化。應保留獨立驗證集，並在部署前測試原有能力是否受到影響。</p><h2>延伸閱讀</h2><p>微調後仍需進行 <a href=\"?article=llm-evaluation\">模型評估</a>，不能只以訓練損失判斷品質。</p>",
    "sources": [
      {
        "label": "Hugging Face PEFT documentation",
        "url": "https://huggingface.co/docs/peft/index"
      },
      {
        "label": "LoRA: Low-Rank Adaptation of Large Language Models",
        "url": "https://arxiv.org/abs/2106.09685"
      }
    ]
  },
  {
    "id": "llm-evaluation",
    "title": "LLM 評估方法",
    "category": "questions",
    "categoryLabel": "研究與評估",
    "summary": "從基準測試、人類評估到真實任務測試，建立多角度的模型品質檢查。",
    "tags": [
      "Evaluation",
      "Benchmark",
      "可靠性"
    ],
    "readTime": "7 分鐘",
    "updated": "2026-11-16",
    "content": "<p>LLM 評估（Evaluation）是系統性檢查模型能力、可靠性、安全性與實際效用的過程。單一分數通常無法完整代表模型表現，因此需要依使用情境設計多種測試。</p><h2>常見評估方式</h2><ul><li><b>Benchmark</b>：使用固定資料集與指標比較模型，例如知識、數學或程式任務。</li><li><b>Human Evaluation</b>：由人類評估答案是否正確、有幫助、清楚且符合需求。</li><li><b>Model-based Evaluation</b>：使用另一個模型協助評分，但需留意評分偏誤。</li><li><b>Task-based Evaluation</b>：在真實工作流程中測試任務完成率、時間與錯誤。</li></ul><h2>評估時要注意</h2><ul><li>資料集可能與真實使用情境不同。</li><li>模型可能針對公開 benchmark 過度最佳化。</li><li>答案流暢不代表內容正確。</li><li>評估結果會受提示詞、抽樣設定與評分規則影響。</li></ul><h2>建議的評估紀錄</h2><p>每次評估至少記錄模型版本、日期、提示詞、資料集版本、評估指標、樣本數與主要錯誤類型，才能比較不同版本。</p><h2>延伸閱讀</h2><p>若評估的是 Agent，還需衡量工具選擇、步驟效率與任務完成情況，可參考 <a href=\"?article=llm-agent\">LLM Agent</a>。</p>",
    "sources": [
      {
        "label": "HELM: Holistic Evaluation of Language Models",
        "url": "https://crfm.stanford.edu/helm/"
      },
      {
        "label": "BIG-bench",
        "url": "https://github.com/google/BIG-bench"
      }
    ]
  }
];
