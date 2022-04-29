// array destructure

let num = [10,20,40,30,70,80,44]
let [num1, num2, num3, num4,...z]= num;
//console.log(num[0]);
//console.log(num[1]);
console.log(num1);
console.log(num2);
console.log(z);
console.log("///////////////////////////////////////////////////////////");
// swap destructure
let a = 10;
let b = 20;
[a,b]= [b,a]
console.log(a);
console.log(b);

console.log("///////////////////////////////////////////////////////////");
// object destructure and nested obj

const studentInfo = {
    id : 101,
    fullName : 'LIMON RAHMAN',
    gpa : 5.00,
    language: {
        native: 'bangla',
        begineer: 'English'
    }
}
// console.log(studentInfo.id);
// console.log(studentInfo.fullName);
const {id, fullName,language} = studentInfo
console.log(fullName);
console.log(id);
console.log(language.begineer);

console.log("///////////////////////////////////////////////////////////");

// destructure function parameters
const studentInfo4 = ({id ,fullName }) =>{
    console.log(`${id}, ${fullName}`);
 

}

const student = {
    id : 101,
    fullName : 'LIMON RAHMAN',
    gpa : 5.00
   
    }
  studentInfo4(student)






  console.log("///////////////////////////////////////////////////////////");



  // find mathod 
     let number = [35,55,61,88,78,6,4,2];
     let fristEvenNumber = number.find(x=> x%2===0);
     console.log(fristEvenNumber);



  // findindex mathod
  let fristEvenNumberIndex = number.findIndex(x=> x%2===0);
  console.log(fristEvenNumberIndex);


  // exmpl for object for 1st Eliments 1st one only need find and for index use findIndex

  const studentS = [
    {
    id : 1011,
    fullName : 'LIMON RAHMAN',
    gpa : 5.00,
    language: {
        native: 'bangla',
        begineer: 'English'
    }
},
{
    id : 1012,
    fullName : ' RAHMAN limon',
    gpa : 3.50,
    language: {
        native: 'chiness',
        begineer: 'English'
    }
},
{
    id : 1066,
    fullName : 'momtahima ',
    gpa : 5.00,
    language: {
        native: 'ENGLISH',
        begineer: 'chiness'
    }
}
]

console.log(studentS.find(x=> x.gpa>4));