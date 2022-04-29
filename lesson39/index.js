
const input = document.querySelector("input");

input.addEventListener("blur", function(e) {
    //console.log("blur is working");
     input.style.padding="0";
     input.style.backgroundColor="#fff";
    console.log(e.target.value.toUpperCase());

    // //for uppercase characters input box
    //input.value = e.target.value.toUpperCase(); 



    
}) ;

input.addEventListener("focus", function() {
    //console.log("focus ");
    input.style.backgroundColor = "orange";
    
    // in same to css
}) ;

// input.addEventListener("focusin", function() {
//     console.log("focusin is work");
// }) ;

// input.addEventListener("focusout", function() {
//     console.log("working focus out");
// }) ;

