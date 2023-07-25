// document.querySelector("button").addEventListener("click",function(){
//     alert("hi");
//     });

var x=document.querySelectorAll("button").length;
for(var i=0;i<x;i++){
    document.querySelectorAll("button")[i].addEventListener("click",
    function(){
        var a=this.innerHTML;
        switch(a){
                case "w":
                var audio=new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
                case "a":
                var budio=new Audio("sounds/tom-2.mp3");
                budio.play();
                break;
                case "s":
                var audio=new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
                case "d":
                var dudio=new Audio('sounds/tom-4.mp3');
                dudio.play();
                break;
                case "j":
                var eudio=new Audio('sounds/snare.mp3');
                eudio.play();
                break;
                case "k":
                var fudio=new Audio('sounds/crash.mp3');
                fudio.play();
                break;
                case "l":
                var gudio=new Audio('sounds/kick-bass.mp3');
                gudio.play();
                break;
        }
       
    });
}

for(var i=0;i<x;i++){
    document.querySelectorAll("button")[i].addEventListener("click",
    function(){
        var a=this.innerHTML;
        makesound(a);
        ba(a);//button animation
    });
}

document.addEventListener("keydown",function(event){
   makesound(event.key);
   ba(a);//button animation
});

function makesound(a){
    switch(a){
        case "w":
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
        case "a":
        var budio=new Audio("sounds/tom-2.mp3");
        budio.play();
        break;
        case "s":
        var audio=new Audio('sounds/tom-3.mp3');
        audio.play();
        break;
        case "d":
        var dudio=new Audio('sounds/tom-4.mp3');
        dudio.play();
        break;
        case "j":
        var eudio=new Audio('sounds/snare.mp3');
        eudio.play();
        break;
        case "k":
        var fudio=new Audio('sounds/crash.mp3');
        fudio.play();
        break;
        case "l":
        var gudio=new Audio('sounds/kick-bass.mp3');
        gudio.play();
        break;
}
}
function ba(a){
    var button=document.querySelector("."+a);
    button.classList.add("pressed");
    setTimeout(function(){
        button.classList.remove("pressed");
    },100);
}