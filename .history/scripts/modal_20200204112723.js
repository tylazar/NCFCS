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
		captionText.innerHTML = this.alt;
		let capt = div.getElementsByClassName("capt");

		captionText.appendChild(title);
		for (let i = 0; i < capt.length; i++) {
			captionText.appendChild(capt[i]);
		}
	});
}

let span = document.getElementsByClassName("close")[0];
span.addEventListener("click", function() {
	modal.style.display = "none";
});