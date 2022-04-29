/*
var btn1= document.querySelectorAll(".mybutton")[0];
var btn2= document.querySelectorAll(".mybutton")[1];
var btn3= document.querySelectorAll(".mybutton")[2];



btn1.addEventListener("click",myfun)
function myfun() {
    var text = this.innerHTML;
    document.querySelector("h1").innerHTML= text+ " is clicked alrady"

}

btn2.addEventListener("click",myfun1)
function myfun1() {
    var text = this.innerHTML;
    document.querySelector("h1").innerHTML= text+ " is clicked alrady  "

}

btn3.addEventListener("click",myfun2)
function myfun2() {
    var text = this.innerHTML;
    document.querySelector("h1").innerHTML= text+ " is alrady  three clicked "

}
*/

// same work 
var len = document.querySelectorAll(".mybutton").length;

 for (var i=0; i<len ; i++) {
    document.querySelectorAll(".mybutton")[i].addEventListener("click",myfun);
    var text = this.innerHTML;
    document.querySelector("h1").innerHTML= text+ " is alrady  three clicked ";

    
    function myfun() {
    var text = this.innerHTML;
    document.querySelector("h1").innerHTML= text+ " is clicked alrady";

}
     
 }