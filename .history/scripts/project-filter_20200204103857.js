filterSelection("all");

/* set up filtering buttons */
let btns = document.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function() {
		let current = document.getElementsByClassName("active-tag");
		for (let j = 0; j < current.length; j++) {
			current[j].className = current[j].className.replace(" active-tag", "");
		}
		this.className += " active-tag";
	});
}

/* only show projects with class name c */
function filterSelection(c) {
	let x = document.getElementsByClassName("project-content");
	if (c == "all") c = "";
	for (let i = 0; i < x.length; i++) {
		removeClass(x[i], "show");
		if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
	}
}

/* remove class - for new filter */
function removeClass(element, name) {
	let arr1 = element.className.split(" ");
	let arr2 = name.split(" ");
	for (let i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(" ");
}

/* add class - for new filter */
function addClass(element, name) {
	let arr1 = element.className.split(" ");
	let arr2 = name.split(" ");
	for (let i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += " " + arr2[i];
		}
	}
}