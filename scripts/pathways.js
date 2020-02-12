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
	let btns = document.getElementsByClassName('path-btn');
	if (n == 'AOC') {
		btn = btns[0];
	} else if (n == 'double') {
		btn = btns[1];
	} else {
		btn = btns[2];
	}
	for (let i = 0; i < btns.length; i++) {
		btns[i].style.backgroundColor = '#00539B';
	}
	btn.style.backgroundColor = '#2070ba';


	let paths = document.getElementsByClassName("path");
	let nPath = document.getElementsByClassName(n)[0];

	for (let i = 0; i < paths.length; i++) {
		paths[i].style.display = "none";
	}
	nPath.style.display = "block";
}