var number = parseInt(prompt("Enter number any : "));
/*
if (number>0){
    document.write(number +" :This is positive number");

}
else if(number==0){
    document.write(number+" This is zero number ")
}
else if(number<0){

    document.write(number+" This is nagative number ")
}
else{
    document.write("not valid ")
}
*/

// tarnary oporator
var result= number>0? "this is positive number " : result= number<0? "this is negative number" : "the number is zero"
document.write(result)