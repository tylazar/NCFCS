filterSelection("all");


function filterSelection(c) {
	let x = document.getElementsByClassName("project-content");
	if (c == "all") c = "";
	for (let i = 0; i < x.length; i++) {
		removeClass(x[i], "show");
		if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
	}
}

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

function addClass(element, name) {
	let arr1 = element.className.split(" ");
	let arr2 = name.split(" ");
	for (let i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += " " + arr2[i];
		}
	}
}

let btns = document.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function() {
		let current = document.getElementsByClassName("active");
		for (let j = 0; j < current.length; j++) {
			current[j].className = current[j].className.replace("active", "");
		}
		this.className += " active";
	});
}