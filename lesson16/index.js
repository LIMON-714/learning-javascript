var num =[10,20,30,66,34,44];
var sum=0;
var sum1=0;

for(var i=0; i<=5; i++){
    document.write(num[i]+" ");
    var sum = sum+num[i];

}
document.write("</br>The sumation is = "+sum+"</br>");


var num =new Array();

for(var i=0; i<=5; i++){
   
    num[i] = parseInt(prompt("Enter nay number : "));

    sum1= sum1+num[i];
    
}
document.write("</br>"+num);
document.write("</br>The sumation is = "+sum1);


