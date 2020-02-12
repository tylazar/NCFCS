let slideIndex = 1;
showPath(slideIndex);

function changePath(n) {
	showPath(slideIndex += n);
}

function currentPath(n) {
	showPath(slideIndex = n);
}

function showPath(n) {
	let paths = document.getElementsByClassName("path");

	if (n > paths.length) {slideIndex = 1;}
	if (n < 1) {slideIndex = paths.length;}
	for (let i = 0; i < paths.length; i++) {
		paths[i].style.display = "none";
	}
	paths[slideIndex - 1].style.display = "block";
}