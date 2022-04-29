//spread operator

/*

function add(x, y, z) {
    return x + y + z;
}
let numbers = [1, 2, 3];

//console.log(add(numbers[0],numbers[1],numbers[2]));
console.log(add(...numbers));

let numBer1= [5,6,7, ...numbers];
console.log(numBer1);

let numBer2= [4,7,9];
//let num= numBer1.concat(numBer2);
let num= [...numBer1, ...numBer2]; // using spread operator
console.log(num);

*/

// another
let s1 = {
    name: 'LIMON RAHMAN',
    age: 22,

}
let s2 = {
    nationality: "Bangladesh",
    occupation: "Teacher"
}

let stu = {...s1, ...s2};
console.log(stu);
