const scroll = document.getElementById("scroll");

animate(scroll);

function animate(element) {
    let elementWidth = element.offsetWidth;
    let parentWidth = element.parentElement.offsetWidth;
    let flag = 0;
    const speed = 2; // Adjust this value to control the speed of scrolling
    
    function step() {
        element.style.marginLeft = -flag + "px"; // move the element left by 'flag' px
        flag += speed; // increment the flag faster by the 'speed' value

        if (flag >= elementWidth) { // when the entire element has scrolled off the screen
            flag = 0; // reset the flag to restart the scroll from the beginning
        }

        requestAnimationFrame(step); // request the next frame
    }

    requestAnimationFrame(step); // start the animation
}
