

console.clear();

// console.log(location.href);

// // protocol
// console.log(location.protocol);

// //hostname
// console.log(location.hostname);


// //port
// console.log(location.port);

// // pathname
// console.log(location.pathname);


let loca = document.querySelector('.my-div');
console.log(loca);

let p1= loca.children[0];
   p1.innerText= location.href;

   let p2= loca.children[1];
   p2.innerText= location.protocol;

   let p3= loca.children[2];
   p3.innerText= location.hostname;

   let p4= loca.children[3];
   p4.innerText= location.port;

   let p5= loca.children[4];
   p5.innerText= location.pathname;





   const buttons= document.querySelector("#btn");

   buttons.addEventListener("click",function(){
            location.assign("https://www.google.com");
   });

  
