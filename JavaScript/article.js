const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get('id');

function loadArticle(id) {
    fetch('../articles/entertainment.json') // Fetch the JSON file (make sure the path is correct)
        .then(response => response.json())
        .then(articles => {
            const article = articles.find(a => a.id == id);

            if (article) {
                document.getElementById('article-title').innerText = article.title;
                document.getElementById('article-content').innerText = article.content;
            } else {
                document.getElementById('article-title').innerText = 'Article not found';
                document.getElementById('article-content').innerText = 'Sorry, this article is not available.';
            }
        })
        .catch(error => {
            console.error('Error fetching article data:', error);
            document.getElementById('article-title').innerText = 'Error loading article';
            document.getElementById('article-content').innerText = 'Sorry, we encountered an error.';
        });
}

window.onload = function () {
    loadArticle(articleId);
};