let modal = document.getElementById("myModal");

let imgs = document.getElementsByClassName("thumb-img");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");

for (let i = 0; i < imgs.length; i++) {
	imgs[i].addEventListener("click", function() {
		modal.style.display = "block";
		modalImg.src = this.src;
		/*captionText.innerHTML = this.alt;*/

		let div = this.parentNode;
		captionText.appendChild(div.getElementsByClassName("project-title")[0]);
		captionText.appendChild(div.getElementsByClassName("project-exp")[0]);
	});
}

let span = document.getElementsByClassName("close")[0];
span.addEventListener("click", function() {
	modal.style.display = "none";
});