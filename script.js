// === Breaking news rotation ===
const breakingNews = [
    "BREAKING: Sage News launches its sleek new layout!",
    "UPDATE: Major storm expected this weekend.",
    "FLASH: Scientists unveil new AI model!"
];
let currentIndex = 0;

setInterval(() => {
    currentIndex = (currentIndex + 1) % breakingNews.length;
    const breakingText = document.getElementById("breaking-text");
    if (breakingText) breakingText.textContent = breakingNews[currentIndex];
}, 5000);

// === Estimated reading time ===
document.querySelectorAll(".read-time").forEach(el => {
    const article = el.closest('.article');
    if (article) {
        const words = article.textContent.trim().split(/\s+/).length;
        const minutes = Math.ceil(words / 250);
        const span = el.querySelector("span");
        if (span) span.textContent = `${minutes} min`;
    }
});

// === Toggle sensitive content ===
const toggleBtn = document.getElementById("toggleSensitive");
if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        document.querySelectorAll(".sensitive").forEach(article => {
            article.style.display = (article.style.display === "none" ? "block" : "none");
        });
    });
}

// === Modal popup ===
function openSummary(title, content) {
    const modal = document.getElementById("summaryModal");
    if (modal) {
        modal.querySelector("#modalTitle").textContent = title;
        modal.querySelector("#modalContent").textContent = content;
        modal.style.display = "block";
    }
}

const closeBtn = document.querySelector(".close");
if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        document.getElementById("summaryModal").style.display = "none";
    });
}

// === Dark mode toggle ===
const darkToggle = document.getElementById("darkModeToggle");
if (darkToggle) {
    darkToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}

// === Search feature ===
const searchInput = document.getElementById("searchInput");
if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        const term = this.value.toLowerCase();
        document.querySelectorAll(".center-col .article, .featured-article").forEach(article => {
            const text = article.textContent.toLowerCase();
            article.style.display = text.includes(term) ? "block" : "none";
        });
    });
}

// === Live clock ===
setInterval(() => {
    const now = new Date();
    const clock = document.getElementById("clock");
    if (clock) clock.textContent = now.toLocaleString();
}, 1000);
