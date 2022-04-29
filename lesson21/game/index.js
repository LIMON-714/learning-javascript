
var numberOfwon=0;
var numberOfloss=0;

for (var i = 1; i <=10; i++) {
var gussNumber = parseInt(prompt("Enter any gussNumber 1 to 5 : "));
var randomNumber= Math.floor(Math.random() * 5)+1;

if (gussNumber== randomNumber){
    console.log("congratulation! You have won the game  : " +randomNumber);
    numberOfwon++;
}
else {
    console.log("sorry ! you have loss the game : " +randomNumber);
    numberOfloss++;
}


}

document.write("</br> you won "+numberOfwon+" time total...");
document.write("</br> you have loss "+numberOfloss+" time total....");
