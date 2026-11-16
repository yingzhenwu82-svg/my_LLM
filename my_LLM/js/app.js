(() => {
  const articles = window.LLM_WILD_ARTICLES || [];
  const grid = document.getElementById('article-grid');
  const search = document.getElementById('search-input');
  const filters = document.getElementById('filters');
  const empty = document.getElementById('empty-state');
  const count = document.getElementById('total-count');
  let activeCategory = 'all';

  const escapeHTML = (value) => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));

  function render() {
    const query = search.value.trim().toLowerCase();
    const visible = articles.filter(article => {
      const categoryMatch = activeCategory === 'all' || article.category === activeCategory;
      const haystack = [article.title, article.summary, ...(article.tags || []), article.content.replace(/<[^>]*>/g, ' ')].join(' ').toLowerCase();
      return categoryMatch && haystack.includes(query);
    });
    grid.innerHTML = visible.map(article => `
      <article class="article-card" data-id="${escapeHTML(article.id)}" tabindex="0" role="link" aria-label="閱讀${escapeHTML(article.title)}">
        <div class="card-top"><span class="category">${escapeHTML(article.categoryLabel)}</span><span class="read-time">${escapeHTML(article.readTime)}</span></div>
        <h3>${escapeHTML(article.title)}</h3><p>${escapeHTML(article.summary)}</p>
        <div class="tags">${article.tags.map(tag => `<span>#${escapeHTML(tag)}</span>`).join('')}<span class="card-arrow">↗</span></div>
      </article>`).join('');
    empty.hidden = visible.length !== 0;
    count.textContent = String(articles.length).padStart(2, '0');
    grid.querySelectorAll('.article-card').forEach(card => {
      const open = () => { location.href = `?article=${encodeURIComponent(card.dataset.id)}`; };
      card.addEventListener('click', open);
      card.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); } });
    });
  }

  function renderReader(article) {
    document.querySelector('main').innerHTML = `
      <article class="reader">
        <a class="back-link" href="index.html#explore">← 返回知識庫</a>
        <div class="reader-meta"><span class="category">${escapeHTML(article.categoryLabel)}</span><span class="read-time">${escapeHTML(article.readTime)}閱讀</span><span class="read-time">更新於 ${escapeHTML(article.updated)}</span></div>
        <h1>${escapeHTML(article.title)}</h1><p class="reader-summary">${escapeHTML(article.summary)}</p>
        <div class="reader-body">${article.content}</div>
        <div class="reader-sources"><b>參考來源 SOURCES</b>${article.sources.map(source => `<a href="${escapeHTML(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(source.label)} ↗</a>`).join('')}</div>
      </article>`;
    document.title = `${article.title}｜LLM Wild`;
  }

  const requested = new URLSearchParams(location.search).get('article');
  if (requested) {
    const article = articles.find(item => item.id === requested);
    if (article) renderReader(article);
    else { document.querySelector('main').innerHTML = '<div class="reader"><a class="back-link" href="index.html">← 返回首頁</a><h1>找不到這篇文章</h1><p>請從知識庫首頁重新選擇主題。</p></div>'; }
    document.querySelector('.topbar nav').style.display = 'none';
  } else {
    search.addEventListener('input', render);
    filters.addEventListener('click', event => {
      const button = event.target.closest('button[data-category]');
      if (!button) return;
      activeCategory = button.dataset.category;
      filters.querySelectorAll('button').forEach(item => item.classList.toggle('active', item === button));
      render();
    });
    render();
  }
})();
