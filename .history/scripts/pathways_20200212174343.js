let slideIndex = 1;
showPath('AOC');

function changePath(n) {
	showPath(n);
}

function currentPath(n) {
	showPath(slideIndex = n);
}

function showPath(n) {
	var btn;
	if (n == 'AOC') {
		btn = document.getElementById('aoc-btn');
	} else if (n == 'double') {
		btn = document.getElementById('double-btn');
	} else {
		btn = document.getElementById('slash-btn');
	}
	btn.style.backgroundColor = '#fcbf49';


	let paths = document.getElementsByClassName("path");
	let nPath = document.getElementsByClassName(n)[0];

	for (let i = 0; i < paths.length; i++) {
		paths[i].style.display = "none";
	}
	nPath.style.display = "block";
}