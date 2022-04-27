alert("limon")


var nameS= ["Limon","chaiti","momtahina","imtiaj","rahman"];
document.write(nameS)
document.write("</br></br></br></br>")
for (var i= 0; i<=4; i++){
    document.write("<h4>"+nameS[i]+"</h4>");
}



//task 8
function highsq(scores){
    let max= scores[0];
    for(let i=1; i<scores.length; i++){
        if(max<scores[i]){
            max= scores[i];
        }
} 
  return max;

}

let scores=[12,21,24,56,78,46,34];
let maxScore=highsq(scores);
document.write("</br>"+ maxScore);