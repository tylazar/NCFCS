let slideIndex = 1;
showPath(slideIndex);

function changePath(n) {
	showPath(n);
}

function currentPath(n) {
	showPath(slideIndex = n);
}

function showPath(n) {
	let paths = document.getElementsByClassName("path");
	let nPath = document.getElementsByClassName(n)[0];

	if (n > paths.length) {slideIndex = 1;}
	if (n < 1) {slideIndex = paths.length;}
	for (let i = 0; i < paths.length; i++) {
		paths[i].style.display = "none";
	}
	paths[slideIndex - 1].style.display = "block";
}