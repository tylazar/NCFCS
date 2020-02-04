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
		let title = div.getElementsByClassName("project-title");
		let captions = div.getElementsByClassName("project-exp");

		window.alert(captions.length);

		for (let i = 0; i < title.length; i++) {
			captionText.appendChild(title[i]);
		}
		for (let i = 0; i < captions.length; i++) {
			captionText.appendChild(captions[i]);
		}
	});
}

let span = document.getElementsByClassName("close")[0];
span.addEventListener("click", function() {
	modal.style.display = "none";
});