// promise
console.log("welcome ...");
// cerate promise - panding , resolve, reject
const promise = new Promise((resolve, reject) =>{
    // let completedPromise= true;
    // if(completedPromise){
    //     resolve("completed promise ...  " );
    
    // }
    // else{
    //     // reject("Not completed promise... ");
    //     reject (new Error("Not completed promise"));
    // }
    setTimeout(()=>{
        resolve("complated promise 1....")
    },1000);


});

//console.log(promise);

  promise
  .then((res)=> {
    console.log(res);
   })
   .catch((err) => {
      console.log(err.message);
   })

console.log("End.. ");



console.log("  ");

const promise2 = new Promise ((resolve, reject)=>{
    // resolve("complated promise 2.....");
    setTimeout(()=>{
        resolve("complated promise 2.....");
    },2000);
});


promise2
.then((res)=>{
   console.log(res);
});


// for all promises
/*
 promise.all([promise,promise2 ])
 .then((res)=>{
    console.log(res);
})

*/

Promise.race([promise,promise2]).then((res)=>console.log(res));