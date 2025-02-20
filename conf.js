// 假設這是你的文章清單（從資料庫或 API 取得）
const articles = [
    { title: "Linux commands", link: "Articles/Linux commands.html" },
    { title: "", link: "article2.html" },
    { title: "", link: "article3.html" },
  ];
  
  const articlesPerPage = 10; // 每頁顯示幾個標題
  let currentPage = 1;
  
  // 渲染目錄
  function renderTableOfContents() {
    const start = (currentPage - 1) * articlesPerPage;
    const end = start + articlesPerPage;
    const pageArticles = articles.slice(start, end);
  
    const tocContainer = document.getElementById("table-of-contents");
    tocContainer.innerHTML = pageArticles
      .map(article => `<p><a href="${article.link}">${article.title}</a></p>`)
      .join("");
  
    updatePagination();
  }
  
  // 生成分頁按鈕
  function updatePagination() {
    const totalPages = Math.ceil(articles.length / articlesPerPage);
    const paginationContainer = document.getElementById("pagination");
  
    paginationContainer.innerHTML = `
      ${currentPage > 1 ? `<button onclick="changePage(${currentPage - 1})">上一頁</button>` : ""}
      ${Array.from({ length: totalPages }, (_, i) => `
        <button onclick="changePage(${i + 1})" ${i + 1 === currentPage ? "disabled" : ""}>
          ${i + 1}
        </button>
      `).join("")}
      ${currentPage < totalPages ? `<button onclick="changePage(${currentPage + 1})">下一頁</button>` : ""}
    `;
  }
  
  // 切換頁面
  function changePage(page) {
    currentPage = page;
    renderTableOfContents();
  }