import Animations from './animations';

function loadPage(url) {
	return new Promise(function(resolve, reject) {
		var request = new XMLHttpRequest();

		request.onreadystatechange = function() {
			if(request.readyState == 4) {
				if(request.status == 200) {
					// Create a new "Document"
					var doc = document.implementation.createHTMLDocument();
					// And use it to parse the AJAX response
					doc.documentElement.innerHTML = request.response;
					resolve(doc.querySelector(".main").innerHTML);
				} else {
					reject("Error " + request.status);
				}
			}
		};

		request.open("GET", url, true);
		request.responseType = "text";
		request.send();
	});
}

function changePage(url) {
	var main = document.querySelector(".main");
	Animations.animateOut(main)
		.then(function() {
			Animations.loading(main);
		})
		.then(function() {
			return loadPage(url, main);
		})
		.then(function(html) {
			if(html != undefined) {
				main.innerHTML = html;
			}
		})
		.catch(function(error) {
			console.log(error);
		})
		.then(function() {
			Animations.stopLoading(main);
		})
		.then(function() {
			return Animations.animateIn(main);
		});
}

export default changePage;
