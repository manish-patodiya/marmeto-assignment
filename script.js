var mainImage = document.getElementById("main-img");
var smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function () {
  mainImage.src = smallimg[0].src;
};
smallimg[1].onclick = function () {
  mainImage.src = smallimg[1].src;
};
smallimg[2].onclick = function () {
  mainImage.src = smallimg[2].src;
};
smallimg[3].onclick = function () {
  mainImage.src = smallimg[3].src;
};
