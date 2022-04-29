
console.clear();
const div= document.querySelector("div");

/*
div.addEventListener("click",myfunc);

function myfunc(){
    console.log("clicked")
}


div.addEventListener("dblclick",myfunc1);

function myfunc1(){
    console.log("dobule clicked")
}

div.addEventListener("mousedown",myfunc2);

function myfunc2(){
    console.log("mouse down ")
}
div.addEventListener("mouseup",myfunc3);

function myfunc3(){
    console.log("mouseupp")
}


div.addEventListener("mouseenter",myfunc4);

function myfunc4(){
    console.log("mouse enter")
}

div.addEventListener("mouseleave",myfunc5);

function myfunc5(){
    console.log("leave mouse")
}

div.addEventListener("mousemove",myfunc6);

function myfunc6(){
    console.log("mouse move")
}
div.addEventListener("mouseover",myfunc1);

function myfunc1(){
    console.log("over")
}
*/

// move in live windows


/*
div.addEventListener("mousemove",myfunc6);

function myfunc6(e){
   // console.log("clientX = " + e.clientX+ " clientY = " + e.clientY);

   console.log("offsetX = " + e.offsetX+ " offsetY = " + e.offsetY);
}

*/

/*

div.addEventListener("click",myfunc);

function myfunc(e){
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.innerHTML);
    console.log(e.target.textContent);
    //console.log(e.target.innerText);
}

*/

const buttons = document.querySelectorAll('.btn');
// array of buttons
Array.from(buttons).map((button)=>{
   button.addEventListener("click", function(e){
       console.log(e.target.textContent);
       //console.log(e.target.innerText);

   });
});

