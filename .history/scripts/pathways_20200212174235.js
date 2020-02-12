let slideIndex = 1;
showPath('AOC');

function changePath(n) {
	showPath(n);
}

function currentPath(n) {
	showPath(slideIndex = n);
}

function showPath(n) {
	if (n == 'AOC') {
		let btn = document.getElementById('aoc-btn');
		btn.style.backgroundColor = 'red';
	}


	let paths = document.getElementsByClassName("path");
	let nPath = document.getElementsByClassName(n)[0];

	for (let i = 0; i < paths.length; i++) {
		paths[i].style.display = "none";
	}
	nPath.style.display = "block";
}