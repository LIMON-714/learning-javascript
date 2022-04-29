// ES6 arrow function

/*
function message(message) {
 console.log(message);

}
message("hello mr/mst welcome our new project");


const display = () =>console.log('this is 2nd message');

display()
*/



//arrow function
function message1(){
    return ("hello this is  message1");
}
console.log(message1());
message1();


const message2= () => console.log('this is message2');
message2();

// add prrametter
const add= (x,y)=>  x + y 
console.log(add(20,30));

console.log("///////////////////////////////////////////////////////////");


// using map filter arrow function

let student = [
    {
        Name : 'LIMON RAHMAN',
        Roll : 103,
        Gpa : 5.00
    },
    {
        Name : 'IMTIAJ AHMED',
        Roll : 106,
        Gpa : 4.00
    },
    {
        Name : 'MOMTAHINA CHAITI',
        Roll : 109,
        Gpa : 5.00
    },
    {
        Name : 'DABASIS ',
        Roll : 104,
        Gpa : 2.60
    }
]

console.log(student);

function studentInfo(){
    return student.filter(function(x){
      return x.Gpa < 3

    }).map(function(y){
      return   y.Name; // if we need only name

    });
}
console.log(studentInfo());


const studentInfo2 = () => student.filter((x) => x.Gpa > 3).map((y)=>y.Name); // if we need only name)


console.log(studentInfo2())