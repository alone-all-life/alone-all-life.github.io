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
		if (content != "Tableau") {
			load_page(content)
		} else {
			window.location = "./Tableau.html#Tableau"
		}
	}
)



function load_page(content) {
	if (content != "Tableau") {
		url = "./pages/" + content + ".html"
		$.get(
				url,
				{},
				function(o) {
					document.getElementById('content-loader').innerHTML = o
				},
				"html"
			);
		change_active(content)
	} else {
		window.location.reload()		
	}
}

function change_active(content) {

	document.getElementById("datasrc").className  = ""
	document.getElementById("team").className  = ""
	document.getElementById("Tableau").className  = ""
	document.getElementById(content).className  = "active"
}