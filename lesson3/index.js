var num = 20;

num = toString(num)

document.write(typeof(num));


// for int
var num = "20";

num = parseInt(num);

document.write("<br/>"+typeof(num));

// for floot

num = parseFloat(num);
document.write("<br/>"+typeof(num));


// how many number i can see after .
var num1 = 20.567;
document.write("<br/>" + num1.toFixed(2));

// using to precision for total  (around count number)
var num2= 3.8676
document.write("<br/>"+ num2.toPrecision(1))

