// synchronous 
/*

const taskOne= ()=>{
    console.log("text1");

}

const dataLoading = ()=>{
    
    console.log("text2.Data Loading");
}

const taskTweo= ()=>{
    // console.log("text2.Data Loading"); 
    setTimeout(dataLoading, 1);
    

}

const taskThree= ()=>{
    console.log("text3"); 

}

const taskFour= ()=>{
    console.log("text4");

}
const taskFive= ()=>{
    console.log("text5");

}




taskOne();
taskTweo();
taskThree();
taskFour();
taskFive();

*/


// anonimus function

const taskOne= ()=>{
    console.log("text1");

}



const taskTweo= ()=>{
    // console.log("text2.Data Loading"); 
    setTimeout(()=>{
           console.log("text2.Data Loading");
    },3000);
    

}

const taskThree= ()=>{
    console.log("text3"); 

}

const taskFour= ()=>{
    console.log("text4");

}
const taskFive= ()=>{
    console.log("text5");

}




taskOne();
taskTweo();
taskThree();
taskFour();
taskFive();