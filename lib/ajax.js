import Animations from './animations';

function loadPage(url) {
	return new Promise(function(resolve, reject) {
	var request = new XMLHttpRequest();

	request.onreadystatechange = function() {
		if(request.readyState == 4) {
			if(request.status == 200) {
				resolve(request.response.querySelector(".main").innerHTML);
			} else {
				reject("Error " + request.status);
			}
		}
	};

	request.open("GET", url, true);
	request.responseType = "document";
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
			loadPage(url, main);
		})
		.then(function(html) {
			main.innerHTML = html;
		})
		.catch(function(error) {
			console.log(error);
		})
		.then(function() {
			Animations.animateIn(main);
		});
}

export default changePage;
