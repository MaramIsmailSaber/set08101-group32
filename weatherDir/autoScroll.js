const scroll = document.getElementById("scroll");

animate(scroll);

function animate(element) {
	let elementWidth = element.offsetWidth;
	let parentWidth = element.parentElement.offsetWidth;
	let flag = 0;
	const speed = 2; //value may be adjusted to change speed.
	
	function step() {
		element.style.marginLeft = -flag + "px"; //move element right by 'flag' px
		flag += speed; //increment the flag faster by the 'speed' value
		
		//When the element has entirely scrolled off screen:
		if (flag >= elementWidth) {
			flag = 0; //reset the flag to starting position
		}
		requestAnimationFrame(step);
	}
	requestAnimationFrame(step);
}