// hight number

function highsqr(scores){
    let max= scores[0];
    for(let i=1;i<scores.length;i++){
        
        if(max<scores[i]){
            max=scores[i];
        }
    }
    return max;
}

// for user input
let scores= [];
let size = 5; // Array size
 
for(let a=0; a<size; a++) 
{
     
     
    scores[a] = prompt('Enter array Element ' + (a+1));
}
 
//user eneter array
document.write(scores+"</br>");



let maxScore=highsqr(scores);
document.write("big number is : "+maxScore);