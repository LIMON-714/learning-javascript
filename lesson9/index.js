/*
for (i=10; i>=1; i=i-1)
{
    document.write(i+"<br/>")
}
*/

var n= parseInt(prompt(" Enter start value : "));
var x= parseInt(prompt("Enter end value : "));
var sum=0;
/*
for(i=n; i<=x; i++)
{
   sum=sum+i;
   
}

document.write("total sumation is :"+ sum);
*/
var i=n;
while(i<=x){
    document.write(i+"<br/>")
    i++;
}