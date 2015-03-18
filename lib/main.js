import changePage from './ajax';

document.onreadystatechange = function() {

	if(document.readyState == "interactive") {
		var navLinks = document.querySelectorAll("nav a");

		for (var i = 0 ; i < navLinks.length; ++i) {
			let link = navLinks[i];

			link.addEventListener("click", function(e) {
				if(e.metaKey || e.ctrlKey || e.shiftKey)
					return;

				e.preventDefault();
				changePage(link.getAttribute("href"));
			});
		}
	}

}

window.onpopstate = function(event) {
	changePage(event.state.href);
}
