// object literals

function studentInformation(name, roll){
    return{
        name,
        roll
    }
}
let stu= studentInformation("LIMON RAHMAN", 22);
console.log(stu);


let message = {
    // body(){
    //     return 'hello im object function';
    // }
    'body name'(){
        return 'hello im object function';
    } 

}
console.log(message['body name']());

console.log("/////////////////////////////////////////");

//  for...of, for...in

const names = ["imtiaj","remu","limon"]
for(let name of names ){
    console.log(name);
}


console.log("/////////////////////////////////////////");



const students = {
    ID : 107,
    name: "LIMON RAHMAN", 
    gpa : 5.00,

}
for (let x in students){
    console.log(`${x} : ${ students[x]}`);
}

console.log("/////////////////////////////////////////");

// for vs foreach

let num= [10,20,30,50];

for (let x=0 ; x< num.length ; x++) {
    console.log(num[x])
}
// foreach loop
let num1= [1,2,3,5,4];
let sqrNum= [];
num1.forEach(myfunction);
function myfunction(x){
    sqrNum.push(x*x);
    console.log(x);   
}

console.log(sqrNum);


console.log("/////////////////////////////////////////");


// map
let numBer= [1,2,3,4,5];
//let sqrrNum= [];
let sqrrNum= numBer.map(function(x){
      return x*x;
});
console.log(sqrrNum);


// filter

let nUmber= [50,10,4,22,6,99,13];
let filterNumber= nUmber.filter(function(x){
    return x>20;
});
console.log(filterNumber);