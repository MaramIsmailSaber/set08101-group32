<script>
    // Get the 'id' from the URL query string
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');

    // Fetch the article data based on the articleId
    function loadArticle(id) {
        // Normally, you'd fetch article data from an API or a database, but for simplicity:
        const articles = [
            { id: 1, title: 'The Future of Music in the AI Era', content: 'Article 1 content goes here...' },
            { id: 2, title: 'The Rise of Indie Pop Stars', content: 'Article 2 content goes here...' },
            { id: 3, title: 'Top Albums That Shook 2025', content: 'Article 3 content goes here...' },
            { id: 4, title: 'How AI Is Changing Music Creation', content: 'Article 4 content goes here...' },
        ];

        // Find the article by id
        const article = articles.find(a => a.id == id);

        if (article) {
            document.getElementById('article-title').innerText = article.title;
            document.getElementById('article-content').innerText = article.content;
        } else {
            document.getElementById('article-title').innerText = 'Article not found';
            document.getElementById('article-content').innerText = 'Sorry, this article is not available.';
        }
    }

    // Load the article when the page loads
    window.onload = function() {
        loadArticle(articleId);
    };
</script>

<!--In your base - article.html-- >
<h1 id="article-title">Article Title</h1>
<p id="article-content">Article content will go here.</p>
