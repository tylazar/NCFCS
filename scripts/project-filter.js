/* filterSelection("all");

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

function filterSelection(c) {
	let projects = document.getElementsByClassName("project-content");
	if (c == "all") c = "";
	for (let i = 0; i < projects.length; i++) {
		removeClass(projects[i], "show");
		if (projects[i].className.indexOf(c) > -1) addClass(projects[i], "show");
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
	element.className = arr1.join("");
}

function addClass(element, name) {
	let arr1 = element.className.split(" ");
	let arr2 = name.split(" ");
	for (let i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += " " + arr2[i];
		}
	}
} */

filterSelection("all");

function filterSelection(c) {
	let divs = document.getElementsByClassName("project-content");
	if (c == "all") c = "";
	for (let i = 0; i < divs.length; i++) {
		// remove class "show" from unselected elements
		removeClass(divs[i], "show");
		// add class "show" to filtered elements
		if (divs[i].className.indexOf(c) > -1) {
			addClass(divs[i], "show");
		}
	}
}

// show filtered elements
function addClass(element, name) {
	let oldClasses = element.className.split(" ");
	let newClasses = name.split(" ");

	for (let i = 0; i < newClasses.length; i++) {
		if (oldClasses.indexOf(newClasses[i]) == -1) {
			element.className += " " + newClasses[i];
		}
	}
}

// hide elements that aren't selected
function removeClass(element, name) {
	let oldClasses = element.className.split(" ");
	let newClasses = name.split(" ");

	for (let i = 0; i < newClasses.length; i++) {
		while (oldClasses.indexOf(newClasses[i]) > -1) {
			oldClasses.splice(oldClasses.indexOf(newClasses[i]), 1);
		}
	}
	element.className = oldClasses.join(" ");
}

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