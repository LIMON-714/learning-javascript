alert("limon");

var digit= prompt('Enter any digit 0-9 : ');

/*
if (digit==0){
    document.write("this is zero ");
}
else if(digit==1){
    document.write("this is one :"+digit);
}
else if(digit==2){
    document.write("this is two :"+digit);
}
else if(digit==3){
    document.write("this is three :"+digit);
}
else if(digit==4){
    document.write("this is four :"+digit);
}
else if(digit==5){
    document.write("this is five :"+digit);
}
else if(digit==6){
    document.write("this is six :"+digit);
}
else if(digit==7){
    document.write("this is seven :"+digit);
}
else if(digit==8){
    document.write("this is eight :"+digit);
}
else if(digit==9){
    document.write("this is nine :"+digit);
}
else 
    document.write("not a valid");
*/
// switch , case , break, default

switch (digit) {
    case "0":
        document.write("this is zero :"+digit);
        break;
    case "1": 
         document.write("this is one :"+digit);
         break;
    case "2": 
         document.write("this is two :"+digit);
         break;
    case "3": 
         document.write("this is three :"+digit);
         break;
    case "4": 
         document.write("this is four :"+digit);
         break;
    case "5": 
         document.write("this is five :"+digit);
         break;
    case "6": 
         document.write("this is six :"+digit);
         break;
    case "7": 
         document.write("this is seven :"+digit);
         break;
    case "8":
         document.write("this is eight :"+digit); 
         break;
    
    case "9": 
         document.write("this is nune :"+digit);  
         break;
    default:
        document.write("this is not a digit "); 

}