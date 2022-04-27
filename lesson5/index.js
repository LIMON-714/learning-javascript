// arithmatic oporator +,-,*,/, %,++,--
// assignment oporator =, += ,-= ,*= , /=, %=

/*
var x= 2;
pre incriment is
x=2
print (2)
then
++x; // print  befor add x=x+1 ;
print (3)
again print (4....n)
then


var x= 2;
post incriment is
x=2
x++; // print after add x=x+1 ;
print(2)
then again get x then 
2+1
print (3..n)

-- decriment is oposite of incriment
x=10;
x--;
--x;
......n



//assignment oporator =, += ,-= ,*= , /=, %=
var x= 2;
x+=2 // x=x+2;
x*=3 // x=x*3;
x%=2 // x=x%2;
all is same
*/


var num1= parseInt(prompt("Enter frist number : "));
var num2= parseInt(prompt("Enter another number : "));

var sum,sub,mul,div,mod ;

sum = num1 + num2;
sub = num1 - num2;
mul = num1 * num2;
div = num1 / num2;
mod = num1 % num2;

document.write("The sumation " +num1+ "+"+num2+"= "+sum);
document.write("<br/>The subctraction " +num1+ "-"+num2+"= "+sub);
document.write("<br/>The multiplication " +num1+ "*"+num2+"= "+mul);
document.write("<br/>The division " +num1+ "/"+num2+"= "+div);
document.write("<br/>The modulus " +num1+ "%"+num2+"= "+mod);