$(document).ready(
	function() {
		url = window.location.href
		var content = url.search("#")
		if (content>=0) {
			q = url.split("#")
			content = q[1]
		} else {
			content = "team"
		}

		load_page(content)
	}
)



function load_page(content) {
	url = "./pages/" + content + ".html"
	$.get(
			url,
			{},
			function(o) {
				document.getElementById('content-loader').innerHTML = o
			},
			"html"
		);
	
}