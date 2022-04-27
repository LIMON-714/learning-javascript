var n = parseInt(prompt("Enter your frist value : "));
var x = parseInt(prompt("Enter your last value : "));


sum=0;
for (i=n;i<=x; i++) {
    if (i%3==0 && i%5==0) {
        document.write(i +"<br/>")
        sum= sum + i;
    }  
    
}

document.write(sum)