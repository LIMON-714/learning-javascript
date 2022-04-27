/*
how i can print a text length 
and get input 
*/


var text= "canada";
var len=text.length;

document.write("the number of characters is "+len + "<br/>")

//imnput
var text = prompt("Enter your name : ");

document.write("<br/>the number of characters is "+ text.length);

// charAt using library ch to see index number of characters
document.write("<br/>the "+text.charAt(prompt("enter index no: ")) );

// using uppercase letters same lowercase
document.write("<br/>" + text.toUpperCase(text));

// concatination we can using variables or directly*

var text2 ="bangladesh is ";
var text3 = " a small country";

document.write("<br/>" + text2.concat(text3));

//using slice library
text2= text2.slice(0,5);
document.write("<br/>"+ text2) 

