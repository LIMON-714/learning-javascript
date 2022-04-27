alert("limon");


// object

// student details
/*
 let namE = "limon rahman";
 let age= 22;
let gpa= 3.00;
let language= ["English", "bangla","chiness"];
*/

/*
let student1= {
    namE :"limon rahman",
    age: 22,
    gpa: 3.00,
    language: ["English", "bangla","chiness"]


}
document.write(student1.language);
*/

/*
var student2 = {
    namE: "rahman",
    age: 22,
    language: ["English","urdhu"],
    gpa:5.00
}


const student3={
    namE: "imtiaj",
    age: 21,
    language: ["japanis", "bangla"],
    gpa: 5.00
}
*/

function Student(namE,age,gpa,language) {
    this.namE = namE;
    this.age = age;
    this.gpa = gpa;
    this.language = language;


    // add function inside constructor
    this.display= function(){
        document.write("</br>"+this.age+" ");
        document.write(this.namE+" ");
        document.write(this.gpa+" ");
        document.write(this.language+" ");


    }
}
let student1= new Student("rahman", 22,4.22,["bangla","english"]);
let student2= new Student("limon rahman", 25,3.02,["bangla","english"]);
let student3= new Student("imtiaj ahmed", 22,5.01,["bangla","english","chiness"]);
let student4= new Student("limon ", 22,5.00,["bangla","english"]);
let student5= new Student("momtahina", 22,5.00,["bangla","english","urdhu"]);
/*
document.write(student1.age);
document.write(student1.namE);
document.write(student1.gpa);
document.write(student1.language);

*/

student1.display();
student2.display();
