function animateOut(element) {
	return new Promise(
		function(resolve, reject) {
			element.classList.remove("ajax-animation-in");
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
			element.classList.remove("ajax-animation-out");
			if(!element.classList.contains("ajax-animation-in")) {
				element.classList.add("ajax-animation-in");
			}
			window.setTimeout(function() {
				element.classList.remove("ajax-animation-done");
				element.classList.remove("ajax-animation-in");
				resolve(true);
			}, 300);
	});
}

function loading(element) {
	element.classList.add("ajax-loading");
}

function stopLoading(element) {
	element.classList.remove("ajax-loading");
}

export default {animateOut, animateIn, loading, stopLoading};
