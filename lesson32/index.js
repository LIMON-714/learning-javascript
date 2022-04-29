var len = document.querySelectorAll(".btn").length;
for(var i=0;i<len;i++){

    document.querySelectorAll(".btn")[i].addEventListener("click",myfun);
    function myfun(){
        var text= this.innerHTML;
        console.log(text);
        audioplay(text); 
        playAnimation(text);
   }

   

}

document.addEventListener("keypress",function(event){

    var text= event.key;
    audioplay(text);
    playAnimation(text);
});



function audioplay(text) {
    switch(text){
        case "A":
            var audio = new Audio('mp3/limon1.mp3');
            audio.play();
            break;

        case "B":
            var audio = new Audio('mp3/limon2.mp3');
            audio.play();
            break;
        
        case "C":
            var audio = new Audio('mp3/limon3.mp3');
            audio.play();
            break;

    }
    


}

function playAnimation(text){
    var limon=document.querySelector("."+text);
    limon.classList.add("anim");
   
    setTimeout(function(){
        limon.classList.remove("anim");

    },1000);

}