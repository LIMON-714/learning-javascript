// Es6

/*
var n= 2;
if (n){
    var n = 3
}
console.log(n);
*/


/*
let n = 2;
if (n){
    let n =3;

}
console.log(n);
*/



/*

function add(x , y){
    let sum = x+y;
    console.log(`the sum is ${sum} the end`);// Es6
} 

*/
// Es6 function for
/*
const add = (x , y) => {
    
    console.log(`the sum is ${x+y} the end`);// Es6
};
add (10,12);


// hoisting & strict mode

x= 20;
if(true){
    y=10;
    console.log(`the y is ${y} the end`);
    var y;
}
console.log(`the x is ${x} the end`)
var x;// after diclear but let and const is not possible

*/
//default and rest parameter
function message(text = "hello this is default parameter") {
    document.write(`${text}`);
}
let n = prompt("Enter your message: ");
message();
message(`</br> ${n}`);



// rest parameter
function numBer(x, y, ...z) {
    console.log(`X= ${x} Y= ${y} Z= ${z}`);;
}
numBer(10, 20, 30, 40, 40, 50, 60, 10, 23);