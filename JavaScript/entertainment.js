function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const amPm = hours >= 12 ? 'PM' : 'AM';

    const formattedTime = `${hours % 12 || 12}:${minutes} ${amPm}`;
    timeElement.textContent = `Time: ${formattedTime}`;
}
setInterval(updateTime, 1000);

updateTime();

//

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    currentSlide = index;
}

function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
}

setInterval(nextSlide, 2500);

document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlide);
});

//
const slideshowWrapper = document.querySelector('.slideshow-wrapper');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const maxScroll = window.innerHeight * 0.75;

    let progress = Math.min(scrollTop / maxScroll, 1);

    const scale = 1 - progress * 0.3;
    const opacity = 1 - progress;

    slideshowWrapper.style.transform = `scale(${scale})`;
    slideshowWrapper.style.opacity = opacity;
});

//
const featured = document.querySelector('.featured-article-wrapper');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                featured.classList.add('visible');
            } else {
                featured.classList.remove('visible');
            }
        });
    },
    {
        threshold: 0.3
    }
);

observer.observe(featured);