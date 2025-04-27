// Author: Maram Ismail

// JS to not make 28!!!! individual html pages for all the articles. 
//Probably could have used it or somthing similar to display the article cards rather than coding each one seperatetly.

// Get the URL parameters from the current page's URL (helps for accessing query params from the current page's URL).
const urlParams = new URLSearchParams(window.location.search);

// Extract the 'id' parameter from the query string (from 1 - 28).
const articleId = urlParams.get('id');

// Function to load an article by its ID.
function loadArticle(id) {
    // Use the Fetch API to request a JSON file containing articles.
    fetch('../articles/entertainment.json')
        .then(response => response.json()) // Parse the response as JSON.
        .then(articles => {
            // Find the article with the matching 'id' from the list of articles.
            const article = articles.find(a => a.id == id);

            // If the article is found, display its title and content in the respective HTML elements.
            if (article) {
                document.getElementById('article-title').innerText = article.title;
                document.getElementById('article-content').innerText = article.content;
            } else {
                // If the article is not found, display a 'not found' message.
                document.getElementById('article-title').innerText = 'Article not found';
                document.getElementById('article-content').innerText = 'Sorry, this article is not available.';
            }
        })
        .catch(error => {
            // If there is an error fetching the article data, display an error message.
            console.error('Error fetching article data:', error);
            document.getElementById('article-title').innerText = 'Error loading article';
            document.getElementById('article-content').innerText = 'Sorry, we encountered an error.';
        });
}

// When the page has finished loading, call the loadArticle function with the extracted 'id' parameter.
window.onload = function () {
    loadArticle(articleId);
};
