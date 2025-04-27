function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById('time').textContent = `Time: ${timeString}`;
}

// Update the clock every second
setInterval(updateTime, 1000);

// Update immediately when page loads
updateTime();

function scrollDates(direction) {
    const dateScroll = document.getElementById('dateScroll');
    const scrollAmount = 100; // how much to scroll per click

    dateScroll.scrollBy({
        left: scrollAmount * direction,
        behavior: 'smooth'
    });
}
const mainImages = [
    "../assets/sports/main pic-2.jpg",
    "../assets/sports/main pic-3.jpg",
    "../assets/sports/main pic-4.jpg",
];

let currentImageIndex = 0;

function changeMainImage() {
    const img = document.getElementById('mainNewsImage');

    // Fade out first
    img.style.opacity = 0;

    setTimeout(() => {
        currentImageIndex = (currentImageIndex + 1) % mainImages.length;
        img.src = mainImages[currentImageIndex];
        img.style.opacity = 1; // Fade back in
    }, 400); // Wait 0.4s to change image while fading out
}

// Change image every 3 seconds
setInterval(changeMainImage, 3000);

const quizData = [
    {
        question: "Which country won the 2022 FIFA World Cup?",
        options: ["France", "Argentina", "Brazil", "Germany"],
        correct: "Argentina"
    },
    {
        question: "Who holds the record for the most goals scored in a single World Cup?",
        options: ["Miroslav Klose", "Just Fontaine", "Pelé", "Lionel Messi"],
        correct: "Just Fontaine"
    },
    {
        question: "Which club has won the most UEFA Champions League titles?",
        options: ["Barcelona", "Liverpool", "Real Madrid", "Bayern Munich"],
        correct: "Real Madrid"
    },
    {
        question: "Who is known as 'El Fenomeno' in football?",
        options: ["Lionel Messi", "Ronaldo Nazário", "Cristiano Ronaldo", "Ronaldinho"],
        correct: "Ronaldo Nazário"
    },
    {
        question: "Which country hosted the first ever FIFA World Cup?",
        options: ["Italy", "Brazil", "Uruguay", "Argentina"],
        correct: "Uruguay"
    }
];

let currentQuestion = 0;

function loadQuestion() {
    const questionEl = document.getElementById('quiz-question');
    const optionsEl = document.getElementById('quiz-options');
    const feedbackEl = document.getElementById('quiz-feedback');

    const questionData = quizData[currentQuestion];

    questionEl.textContent = questionData.question;
    optionsEl.innerHTML = '';
    feedbackEl.textContent = '';

    questionData.options.forEach(option => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.onclick = () => {
            if (option === questionData.correct) {
                feedbackEl.textContent = "✅ Correct!";
                feedbackEl.style.color = "green";

                setTimeout(() => {
                    currentQuestion++;
                    if (currentQuestion < quizData.length) {
                        loadQuestion();
                    } else {
                        quizFinished();
                    }
                }, 1500); // wait 1.5 seconds before showing next
            } else {
                feedbackEl.textContent = "❌ Wrong! Try again.";
                feedbackEl.style.color = "red";
            }
        };
        optionsEl.appendChild(btn);
    });
}

function quizFinished() {
    const questionEl = document.getElementById('quiz-question');
    const optionsEl = document.getElementById('quiz-options');
    const feedbackEl = document.getElementById('quiz-feedback');

    questionEl.textContent = "🏆 Quiz Finished!";
    optionsEl.innerHTML = '';
    feedbackEl.textContent = "Well done!";
}

loadQuestion();



