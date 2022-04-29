// calback and higher order function
/*
function square(a) {
         console.log(`square of ${a}: ${a*a} `);
};
//sqrt(5);

let y = square;
y(4);

console.log(" ");
function higherOrderfunction(num, callback) {
         callback(num)
};
higherOrderfunction(9,square);
*/



const taskOne= (callback)=>{
    console.log("text1");
    callback();

}



const taskTweo= (callback)=>{
    // console.log("text2.Data Loading"); 
    setTimeout(()=>{
           console.log("text2.Data Loading");
           callback();
    },3000);
    

};

const taskThree= (callback)=>{
    console.log("text3"); 
    callback();

};

const taskFour= (callback)=>{
    console.log("text4");
    callback();

};
const taskFive= ()=>{
    console.log("text5");
    

};




taskOne( ()=>{
    taskTweo(()=>{
        taskThree(()=>{
            taskFour(()=>{
               taskFive();
            });
        });
    });
});


// taskTweo();
// taskThree();
// taskFour();
// taskFive();


// addeven 
console.log("  ");

console.log("hello")
let button = document.querySelector("#btn");
button.addEventListener("click", ()=>{
    console.log("button is clicked");

});
console.log("bye")