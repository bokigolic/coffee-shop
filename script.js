/*var imageClick = document.getElementById("image-click");
var formContainer = document.querySelector(".form-container");

imageClick.addEventListener("click", function() {
  formContainer.classList.toggle("open");
})*/

//const location = document.getElementById("location")

// modal

var modal = document.getElementById("modal");
var button = document.getElementById("modal-button");
var close = document.getElementsByClassName("close")[0];

button.onclick = function() {
  modal.style.display = "block";
}

close.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
