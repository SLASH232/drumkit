var btns = document.querySelectorAll(".drum");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {

        var btnInnerHTML = this.innerHTML;
        makesound(btnInnerHTML);
        doAnimation(btnInnerHTML);
});
}
document.addEventListener("keypress",function(event){
   var key_pressed=event.key;
  makesound(key_pressed);
  doAnimation(key_pressed);
});
function makesound(key){
    switch (key) {
        case "w":
            var a = new Audio("sounds/tom-1.mp3");
            a.play();
            break;
        case "a":
            var a = new Audio("sounds/tom-2.mp3");
            a.play();
            break;
        case "s":
            var a = new Audio("sounds/tom-3.mp3");
            a.play();
            break;
        case "d":
            var a = new Audio("sounds/tom-4.mp3");
            a.play();
            break;
        case "j":
            var a = new Audio("sounds/kick-bass.mp3");
            a.play();
            break;
        case "k":
            var a = new Audio("sounds/snare.mp3");
            a.play();
            break;
        case "l":
            var a = new Audio("sounds/crash.mp3");
            a.play();
            break;
    
        default:
            break;
    }
}

function doAnimation(key){
    var key_class=document.querySelector('.'+key);
    key_class.classList.add("pressed");
    
    
    setTimeout(function() {
        key_class.classList.remove("pressed")
      }, 100);
    

}