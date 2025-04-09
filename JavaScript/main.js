document.addEventListener("DOMContentLoaded", function () {
    // Display Current Date
    function updateDate() {
        const dateElement = document.getElementById("current-date");
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = now.toLocaleDateString("en-US", options);
    }
    updateDate();

    // Dark Mode Toggle
    const darkModeButton = document.getElementById("dark-mode-toggle");
    darkModeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Search Articles
    document.getElementById("search-bar").addEventListener("keyup", function () {
        let filter = this.value.toLowerCase();
        let articles = document.querySelectorAll(".news-grid article");

        articles.forEach(article => {
            let title = article.querySelector("h2").textContent.toLowerCase();
            if (title.includes(filter)) {
                article.style.display = "block";
            } else {
                article.style.display = "none";
            }
        });
    });

    // Read Time Indicator
    function calculateReadTime() {
        let wordsPerMinute = 200;
        let text = document.querySelector(".headline .subheadline").textContent;
        let wordCount = text.split(" ").length;
        let readTime = Math.ceil(wordCount / wordsPerMinute);
        document.getElementById("read-time").textContent = `Estimated read time: ${readTime} min`;
    }
    calculateReadTime();

    // Load More Articles
    const loadMoreButton = document.getElementById("load-more");
    loadMoreButton.addEventListener("click", function () {
        let newsGrid = document.getElementById("news-grid");
        for (let i = 4; i <= 6; i++) {
            let article = document.createElement("article");
            article.innerHTML = `<h2>Article Title ${i}</h2><p>More news content...</p>`;
            newsGrid.appendChild(article);
        }
        loadMoreButton.style.display = "none"; // Hide button after loading
    });
});
