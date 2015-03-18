function animateOut(element) {
	return new Promise(
		function(resolve, reject) {
			if(!element.classList.contains("ajax-animation-out")) {
				element.classList.add("ajax-animation-out");
			}
			window.setTimeout(function() {
				element.classList.remove("ajax-animation-out");
				element.classList.add("ajax-animation-done");
				resolve(true);
			}, 300);
	});
}

function animateIn(element) {
	return new Promise(
		function(resolve, reject) {
			if(!element.classList.contains("ajax-animation-in")) {
				element.classList.add("ajax-animation-in");
			}
			window.setTimeout(function() {
				resolve(true);
			}, 300);
	});
}

function loading(element) {
	console.log("loading");
}

export default {animateOut, animateIn, loading};
