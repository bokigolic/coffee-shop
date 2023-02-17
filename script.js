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

button.onclick = function () {
  modal.style.display = "block";
}

close.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


const americano = document.getElementById("americano");
const customizeYourOrder = document.getElementById("za-size")

americano.onclick = function(){
  console.log(customizeYourOrder)
  
}


//const myImage = document.getElementById("myImage");
//const customizeYourOrder = document.getElementById("customize-order");

//myImage.onclick = function() {
  //customizeYourOrder.style.display = "block";
//};

/*
const americano = document.getElementById("americano");
americano.onclick = function(){

  if(americano){
    
  }
  console.log("You clicked americano");
}
 */


const esspresso = document.getElementById("esspresso").onclick = function(){
  //alert("You clicked")
};
const chapuchino = document.getElementById("chapuchino").onclick = function(){
  //alert("You clicked")
};
const icedCoffee = document.getElementById("iced-coffee").onclick = function(){
  //alert("You clicked")
};
const frappe = document.getElementById("frappe").onclick = function(){
  //alert("You clicked")
};
const late = document.getElementById("late").onclick = function(){
  //alert("You clicked")
};
