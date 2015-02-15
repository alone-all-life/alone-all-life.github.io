$(document).ready(
	function() {
		url = window.location.href
		var hw_no = url.search("[0-9]")
		if (hw_no === -1) {
			hw_no = 2
		} else {
			hw_no = url[hw_no]
		}
		if (hw_no == 0) {
			load_ref()
		} else {
			load_homework(hw_no)
		}
	}
)

function load_homework(hw_no) {
	url = "./hw-page/hw_" + hw_no + ".html"
	$.get(
			url,
			{},
			function(o) {
				document.getElementById('homework-loader').innerHTML = o
				if (hw_no==2) {
					load_stu_score()
				}
			},
			"html"
		);
}

function load_ref() {
	url = "./ref.html"
	$.get(
			url,
			{},
			function(o) {
				document.getElementById('homework-loader').innerHTML = o
			},
			"html"
		);
}