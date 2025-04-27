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

