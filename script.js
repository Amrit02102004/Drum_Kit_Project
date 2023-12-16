let len_offset = document.querySelectorAll(".drum").length;

let sounds = ["tom-1","tom-2","tom-3","tom-4","crash","kick-bass","snare"];
let keyss = ["w", "a", "s", "d", "j", "k", "l"];

document.addEventListener("keydown", function(event){
    if(keyss.includes(event.key)){playsound(keyss.indexOf(event.key));}
});
for (var i = 0; i < len_offset;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    playsound(keyss.indexOf(this.innerText.toLowerCase()))
    });
}



function playsound(bas){
    let audio = new Audio("sounds/"+sounds[bas]+".mp3");
    audio.play();
}
