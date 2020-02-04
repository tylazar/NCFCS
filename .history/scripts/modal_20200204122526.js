let modal = document.getElementById("myModal");

let imgs = document.getElementsByClassName("thumb-img");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");

for (let i = 0; i < imgs.length; i++) {
	imgs[i].addEventListener("click", function() {
		modal.style.display = "block";
		modalImg.src = this.src;

		window.alert(this.alt);
		captionText.appendChild(this.alt);
		captionText.style.display = "block";
		let div = this.parentNode;
		/* let capt = div.getElementsByClassName("capt");

		for (let i = 0; i < capt.length; i++) {
			captionText.appendChild(capt[i]);
		} */
	});
}

let span = document.getElementsByClassName("close")[0];
span.addEventListener("click", function() {
	modal.style.display = "none";
});