
// var btn = document.querySelectorAll(".btn")[0];
// var btn1 = document.querySelectorAll(".btn")[1];
// var btn3 = document.querySelectorAll(".btn")[2];

// btn1.addEventListener("click",myfun);
// function myfun(){

// }

var len = document.querySelectorAll(".btn").length;
for(var i=0;i<len;i++){

    document.querySelectorAll(".btn")[i].addEventListener("click",myfun);
    function myfun(){
        var text= this.innerHTML;
        console.log(text);
        audioplay(text);

        
}

}
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