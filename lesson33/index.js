// var namE= document.querySelector("input[name=name]");
// namE.addEventListener("change",chng);

// function chng(event){
//     // console.log(event.type);
//     // console.log(event);
//     console.log(event.target);
//     console.log(event.target.className);
//     console.log(event.target.id);
//     console.log(event.target.value);
   
// }





// const prg = document.querySelectorAll("input[name=program]");
// console.log(prg);

// Array.from(prg).map((program)=>{
//     program.addEventListener("change",programHandler)
// })
// function programHandler(e) {
//    if(e.target.checked) {
//        console.log(e.target.value)
//    }

// }






const deprt = document.querySelector('#dep');
console.log(deprt);

deprt.addEventListener("change",depHandler)

function depHandler(e) {
    //console.log("selected");
    console.log(e.target.value);
}
