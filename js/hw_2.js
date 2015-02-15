function load_stu_score() {
	url = "https://hivelab.org/static/students.json"
	d3.json(url, function(o){
       		data = data_process(o)
			tbody = document.getElementById('student_json_loader')
			for (var i = 0; i<o.length; i++) {
				tr = tbody.insertRow()
				tr.insertCell().innerHTML = data[i].Name
				tr.insertCell().innerHTML = data[i].GPA
				tr.insertCell().innerHTML = data[i].GRE_V
				tr.insertCell().innerHTML = data[i].GRE_Q
				tr.insertCell().innerHTML = data[i].Essay
				tr.insertCell().innerHTML = data[i].Recom
				tr.insertCell().innerHTML = data[i].total.toFixed(4)
				tr.insertCell().innerHTML = data[i].ranking
			};
        });
}

function data_process(o) {
	for (var i=0; i<o.length; i++) {
		o[i].total = o[i].GPA/4 + (o[i].GRE_V-130)/40 + (o[i].GRE_Q-130)/40 + o[i].Essay/6 + o[i].Recom/10
		o[i].mark = i
	}
	
	for (var i=0; i<o.length; i++) {
		for (var j=i+1; j<o.length; j++) {
			if (o[i].total < o[j].total) {
				t = o[i]
				o[i] = o[j]
				o[j] = t
			}
		}
	}
	
	for (var i=0; i<o.length; i++) {
		o[i].ranking = i+1
	}

	for (var i=0; i<o.length; i++) {
		for (var j=i+1; j<o.length; j++) {
			if (o[i].mark > o[j].mark) {
				t = o[i]
				o[i] = o[j]
				o[j] = t
			}
		}
	}
	return o
}