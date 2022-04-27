
//imideatly function calling
limon= (function display (massage){
    document.write(massage);
})("hello world! <br/>");

// task

limon= (function display (num1,num2){
    var sum= num1+num2;
    document.write(" the sumation of : "+num1+" + "+num2+ " = "+ sum+"<br/>");
})(num1= parseInt(prompt("Enter a number")),num2= parseInt(prompt("Enter another number")));



// function expressions
var display2= (function display (msg){
    document.write(msg);
});
display2("<br/><h1>this is function expression </h1>");


// what is array?
var numE1,numE2,numE3,numE4,numE5;
namE1= "limon";
namE2= "imtiaj";
namE3= "chaiti";
namE4= "montahina";
namE5= "rahman";
console.log(namE5);

// array
var namEs = new Array(6);
   namEs[0]= "limon2";
   namEs[1]= "imtiaj2";
   namEs[2]= "imtiaj3";
   namEs[3]= "chaiti2";
   namEs[4]= "montahina2";
   namEs[5]= "rahman2";

   namEs.pop();// for removing list 
 document.write(namEs+"</br>");
 document.write("The length of name : "+namEs.length+"</br>");

// another 
 var names = ["limon","imtiaj","chaiti","momtahina","rahman"];
   
    names.push("sokhina");// add new name
    document.write(names + "</br>");
   document.write("The length of name : "+names.length);
   