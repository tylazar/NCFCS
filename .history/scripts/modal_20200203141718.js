function openModal() {
	document.getElementById("myModal").style.display = "block";
}

function closeModal() {
	document.getElementById("myModal").style.display = "none";
}

let index = 1;
showProject(index);

function showProject(n) {
	let projects = document.getElementsByClassName("project-slide");
	let captionText = document.getElementById("caption");
	if (n > projects.length) {index = 1};
	if (n < 1) {index = projects.length};
	for (let i = 0; i < projects.length; i++) {
		projects[i].style.display = "none";
	}
	projects[index-1].style.display = "block";
}

function currentProject(n) {
	showProject(index = n);
}

function showProject() {
	let modal = document.getElementById("myModal");
	let img = document.getElementById("myImg");
	let modalImg = document.getElementById("img01");
	let modalCap = document.getElementById("caption");
	img.onclick = function() {
		modal.style.display = "block";
		modalImg.src = this.src;
		modalCap.innerHTML = this.alt;
	}

	let span = document.getElementsByClassName("close")[0];
	span.onclick = function() {
		modal.style.display = "none";
	}
}