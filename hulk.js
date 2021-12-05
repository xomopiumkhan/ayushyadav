const imageBox = document.querySelectorAll(".image-box");
const modal = document.querySelector(".image-screen");
const modalClose = document.querySelector(".modal-close");
const modalImage = document.querySelector(".modal");


imageBox.forEach((image => {
	image.onclick = () => {
		modal.style.transform = "scale(1)"
		modalImage.src = image.getAttribute("src");
	}
}));

modalClose.onclick = () => {
	modal.style.transform = "scale(0)"
}