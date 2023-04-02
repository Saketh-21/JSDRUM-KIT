//Detecting Button Press

for(var i=0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function() {   
    var buttonInnerHTML = this.innerHTML;
    /*switch(buttonInnerHTML){
      case'w':
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
        case'a':
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
        case's':
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
        case'd':
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
        case'j':
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
        case'k':
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
        case'l':
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
      default:console.log(buttonInnerHTML); 
    }   */
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    //this.style.color="white";    //changing content color on click
  });
}
//document.querySelector("button").addEventListener("click", handleClick);  //listening for event click to occurto call handleClick no () else fn called before click event. click here is a keyword
/*for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function() {      //M2 adds ear to all drum buttons by this loop
  alert("I got clicked!");
});
}*/
/*var audio = new Audio("sounds/tom-1.mp3");
    audio.play(); */


    //Detecting keyboard press
document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});



function makeSound(key){
  switch(key){
    case'w':
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
      case'a':
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
      case's':
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
      case'd':
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
      case'j':
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
      case'k':
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
      case'l':
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:console.log(key); 
  }   
}

function buttonAnimation(currentKey){
 var activeButton =  document.querySelector("." + currentKey);
 activeButton.classList.add("pressed"); 
 setTimeout(function(){
 activeButton.classList.remove("pressed");
 },100);
}