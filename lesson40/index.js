
const input = document.querySelector('input');
const p = document.querySelector('p');



input.addEventListener("copy", function(){
    p.innerText= "you have copy";

});

input.addEventListener("cut", function(){
    p.innerText= "you have cut";

});

input.addEventListener("paste", function(){
    p.innerText= "you have paste";


});


// dragEvent object

// dragover
input.addEventListener("dragover", function(){
    console.log("dragover");
});

// dragleave
input.addEventListener(" dragleave", function(){
    console.log(" dragleave");
});

// dragstart
input.addEventListener(" dragstart", function(){
    console.log(" dragstart");
});