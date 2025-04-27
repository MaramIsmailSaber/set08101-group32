// Author: Maram Ismail

// Pop up JS

document.addEventListener("DOMContentLoaded", () => {
    // Get the popup element by its ID "popup"
    const popup = document.getElementById("popup");

    // Get the button inside the popup that has the class "close-popup"
    const closeBtn = document.querySelector(".close-popup");

    // Check if "popupShown" is NOT already saved in the browser's localStorage
    if (!localStorage.getItem("popupShown")) {
        // If not, show the popup by removing the "hidden" class
        popup.classList.remove("hidden");
        // And set "popupShown" to "true" in localStorage so it won't show again next time
        localStorage.setItem("popupShown", "true");
    }

    // When the user clicks the close button:
    closeBtn.addEventListener("click", () => {
        // Add the "hidden" class back to the popup to hide it
        popup.classList.add("hidden");
    });

    // Listen for any key press anywhere on the document
    document.addEventListener("keydown", (e) => {
        // If the user presses Ctrl + B (case insensitive)
        if (e.ctrlKey && e.key.toLowerCase() === "b") {
            // Show the popup again by removing the "hidden" class
            popup.classList.remove("hidden");
        }
    });
});

// Slideshow JS

// Start by setting the current slide index to 0 (the first slide)
let currentSlide = 0;

// Select all elements with the class 'slide' and store them in a list
const slides = document.querySelectorAll('.slide');

// Function to show a specific slide
function showSlide(index) {
    // Go through every slide
    slides.forEach((slide, i) => {
        // For each slide, add the 'active' class if it's the one matching the index, otherwise remove it
        slide.classList.toggle('active', i === index);
    });
    // Update the currentSlide to the new index
    currentSlide = index;
}

// Function to go to the next slide
function nextSlide() {
    // Calculate the next slide index, looping back to 0 when reaching the end
    const nextIndex = (currentSlide + 1) % slides.length;
    // Show the next slide
    showSlide(nextIndex);
}

// Automatically move to the next slide every 2500 milliseconds (2.5 seconds)
setInterval(nextSlide, 2500);

// When the page content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Display the first slide initially
    showSlide(currentSlide);
});


// Slideshow animation JS

// Select the wrapper around the slideshow
const slideshowWrapper = document.querySelector('.slideshow-wrapper');

// When the user scrolls the page
window.addEventListener('scroll', () => {
    // Get the vertical scroll distance in pixels
    const scrollTop = window.scrollY;
    // Set the maximum scroll threshold (75% of the viewport height)
    const maxScroll = window.innerHeight * 0.75;

    // Calculate progress as a number between 0 and 1
    let progress = Math.min(scrollTop / maxScroll, 1);

    // Make the slideshow slightly smaller as you scroll (down to 70% size)
    const scale = 1 - progress * 0.3;
    // Make the slideshow more transparent as you scroll (opacity goes to 0)
    const opacity = 1 - progress;

    // Apply the scaling and opacity to the slideshow wrapper
    slideshowWrapper.style.transform = `scale(${scale})`;
    slideshowWrapper.style.opacity = opacity;
});


// Featured Article JS

// Select the featured article wrapper element
const featured = document.querySelector('.featured-article-wrapper');

// Create an IntersectionObserver to monitor visibility changes of the featured element
const observer = new IntersectionObserver(
    (entries) => { // The callback function that will run when visibility changes
        entries.forEach(entry => {
            // If the element is more than 30% visible in the viewport
            if (entry.isIntersecting) {
                // Add the 'visible' (CSS)
                featured.classList.add('visible');
            } else {
                // Remove the 'visible' 
                featured.classList.remove('visible');
            }
        });
    },
    {
        // This defines the threshold (visibility percentage) at which the callback triggers
        threshold: 0.3 // 30% of the element must be visible before triggering
    }
);

// Start observing the 'featured' element to track visibility
observer.observe(featured);
