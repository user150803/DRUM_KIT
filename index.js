//button press


var numberofdrumbuttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofdrumbuttons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {



    var buttonInnerHTML = this.innerHTML;

    makesound(buttonInnerHTML);

buttonanimation(buttonInnerHTML);

  });

}

//keyboard press

document.addEventListener("keypress", function(event){
makesound(event.key);

buttonanimation(event.key);
});


function makesound(key) {

  switch (key) {
    case "s":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1. play();
      break;

    case "w":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2. play();
      break;

    case "d":
      var kickbass = new Audio('sounds/kick-bass.mp3');
      kickbass.play();
      break;

    case "h":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3. play();
      break;

    case "i":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "n":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4. play();
      break;

    default:
      console.log(buttonInnerHTML);

  }
}

function buttonanimation(currentkey){

  var activebutton = document.querySelector("." + currentkey);

  activebutton.classList.add("pressed");
  setTimeout(function(){
    activebutton.classList.remove("pressed");
  },100);
}
