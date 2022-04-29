
var vid = document.querySelector("video");


vid.addEventListener('canplay',function(){
    console.log("canplay")
});

vid.addEventListener('play',function(){
    console.log("play")
});

vid.addEventListener('pause',function(){
    console.log("pause")
});

vid.addEventListener('playing',function(){
    console.log("playing")
});

vid.addEventListener('ended',function(){
    console.log("thanks for watching")
});

vid.addEventListener('volumechange',function(){
    console.log("volumechangeed")
});