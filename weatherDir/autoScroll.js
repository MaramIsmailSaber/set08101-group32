const scroll = document.getElementById("scroll");

animate(scroll);

function animate(element) {
	let elementWidth =  element.offsetWidth;
	let parentWidth =  element.parentElement.offsetWidth;
	let flag = 0;
	
	set interval(()=> {
		element.style.marginLeft = --flag + "px";
		
		if elementWidth == -flag) {
			flag = parentWidth;
		}
	}, 10);