

/*
var btn= document.querySelector("#btn1");
btn.addEventListener("click",myfun);

function myfun(){
    alert("hello");

}
*/
var heading= document.querySelector("#hh");
heading.addEventListener("mouseover",thefun);

function thefun(){
    heading.classList.add("hh1");
}

var heading= document.querySelector("#hh");
heading.addEventListener("mouseout", outfun)

function outfun(){
    heading.classList.remove("hh1");
    heading.style. transition="0.3s";
}