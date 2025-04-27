// Author: Maram Ismail

// Popup JS 

// Handles the display and hiding of a popup on first visit
document.addEventListener("DOMContentLoaded", () => {
    // Get the popup element and close button
    const popup = document.getElementById("popup");
    const closeBtn = document.querySelector(".close-popup");

    // Show the popup only if it hasn't been shown before (check localStorage)
    if (!localStorage.getItem("popupShown")) {
        popup.classList.remove("hidden");  // Show the popup
        localStorage.setItem("popupShown", "true");  // Mark it as shown in localStorage
    }

    // Close the popup when the close button is clicked
    closeBtn.addEventListener("click", () => {
        popup.classList.add("hidden");  // Hide the popup
    });

    // Show the popup again if Ctrl + B is pressed (for demonstration)
    document.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.key.toLowerCase() === "b") {
            popup.classList.remove("hidden");  // Show the popup
        }
    });

    // Long press to open the popup (for mobile and touch devices)
    let pressTimer;
    const longPressThreshold = 500; // Threshold for detecting a long press (in milliseconds)

    // Detect long press on the entire document or a specific area
    document.addEventListener('touchstart', (event) => {
        pressTimer = setTimeout(() => {
            // Trigger popup when long press is detected
            popup.classList.remove("hidden");

        }, longPressThreshold);
    });

    document.addEventListener('touchend', () => {
        clearTimeout(pressTimer);  // Clear the timer if the user releases the touch before the threshold
    });

    document.addEventListener('touchcancel', () => {
        clearTimeout(pressTimer);  // Clear the timer if the touch is interrupted (e.g., by scrolling)
    });

});

// Slideshow JS 

// Handles the automatic slideshow of images
let currentSlide = 0;  // Current slide index
const slides = document.querySelectorAll('.slide');  // Select all slides

// Function to display the slide based on its index
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);  // Only add 'active' to the selected slide
    });
    currentSlide = index;  // Update the current slide index
}

// Move to the next slide every 2.5 seconds
function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;  // Loop back to the first slide
    showSlide(nextIndex);
}

// Initialize the first slide when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlide);
    setInterval(nextSlide, 2500);  // Automatically change slides every 2500 ms
});

// Slideshow animation JS 

// Adjusts the slideshow's appearance on scroll
const slideshowWrapper = document.querySelector('.slideshow-wrapper');

// Update the slideshow's scale and opacity based on scroll position
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const maxScroll = window.innerHeight * 0.75;  // 75% of the viewport height
    const progress = Math.min(scrollTop / maxScroll, 1);  // Limit progress between 0 and 1

    const scale = 1 - progress * 0.3;  // Scale the slideshow down as you scroll
    const opacity = 1 - progress;  // Reduce opacity as you scroll

    // Apply the transformation to the slideshow wrapper
    slideshowWrapper.style.transform = `scale(${scale})`;
    slideshowWrapper.style.opacity = opacity;
});

// Featured Article JS

// Handles visibility change detection of the featured article
const featured = document.querySelector('.featured-article-wrapper');

// IntersectionObserver monitors when the 'featured' element becomes visible in the viewport
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            // Add/remove the 'visible' class based on the visibility of the featured element
            featured.classList.toggle('visible', entry.isIntersecting);
        });
    },
    { threshold: 0.3 }  // Trigger when at least 30% of the element is visible
);

// Start observing the 'featured' element
observer.observe(featured);

// Credit Icon JS 

// Toggles visibility of photo credit text on mobile
document.addEventListener('DOMContentLoaded', () => {
    const creditIcons = document.querySelectorAll('.credit-icon');

    creditIcons.forEach(icon => {
        icon.addEventListener('click', (event) => {
            event.preventDefault();  // Prevent the default link action
            event.stopPropagation();  // Prevent the click event from bubbling up

            icon.classList.toggle('active');  // Toggle the visibility of the credit text
        });
    });
});
