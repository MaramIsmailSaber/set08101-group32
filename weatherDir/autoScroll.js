const scroll1 = document.getElementById("scroll");
const scroll2 = document.getElementById("scrollCentre");

animateScroll(scroll1, scroll2);

function animateScroll(element1, element2) {
    const speed = 2;
    let x1 = 0;
    let x2 = element1.offsetWidth;

    function step() {
		x1 -= speed;
		x2 -= speed;

    // When an element moves completely off-screen, reset its position to appear from the right
		if (x1 <= -element1.offsetWidth) {
			x1 = Math.max(x2, 0) + element2.offsetWidth; // Ensures proper placement after the second element
		}
		if (x2 <= -element2.offsetWidth) {
			x2 = Math.max(x1, 0) + element1.offsetWidth; // Ensures smooth transition
		}

		element1.style.transform = `translateX(${x1}px)`;
		element2.style.transform = `translateX(${x2}px)`;

		requestAnimationFrame(step);
	}

    requestAnimationFrame(step);
}
