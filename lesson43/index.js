// js bom
// popup box - alert, confirm, prompt

alert("Please let see");

/*
function delletSomething() {
    let value =confirm("Are you sure you want to delete ?");
    if(value){
        console.log("deleted");
    }
    else{
        console.log("not deleted");
    }
};
delletSomething();
*/

function welcomeMessage(){
    var h1= document.createElement("h1");
    let text;
    var namE= prompt("Enter your name : ");
    if (namE==null || namE==" "){
           text= " no name available";

    }
    else{
        text = ""+namE.toUpperCase();
    }
    var textNod = document.createTextNode(text);
    h1.appendChild(textNod);
    document.body.appendChild(h1);
}

welcomeMessage();


