// math obj
let num = parseInt(prompt("Enter any number to select : "));
let num2= parseInt(prompt("Enter any number to select : "));

document.write("</br>The number of sqrt is :  "+Math.sqrt(num));
document.write("</br>The number of pow is :  "+Math.pow(num,num2));
document.write("</br>The number of max is :  "+Math.max(num,num2));
document.write("</br>The number of min  is :  "+Math.min(num,num2));


// for 3.445/2.667 float number 

document.write("</br></br></br></br>")
let flt= parseFloat(prompt("Enter any number to select : "));

document.write("</br>The number of round is  :  "+Math.round(flt));
document.write("</br>The number of ceil  is :  "+Math.ceil(flt));
document.write("</br>The number of floor  is :  "+Math.floor(flt));

var ran= Math.floor(Math.random()*6);// for 1 to 5 < 6 so that
//var ran= Math.floor(Math.random()*5)+1; // for same work 5)+1=6
document.write("</br>The number of random  is :  "+ran);
