let plrinfo= [

    ["limon",109],
    ["chaiti",100],
    ["imtiaj",23],
    ["momtahina",45],
    ["rahman",64]
]
document.write(plrinfo[2][0]);
//document.write(plrinfo)
document.write("</br></br></br>");

for(let i=0; i<5; i++) {
    for(let j=0; j<2; j++){
        document.write("</br>"+plrinfo[i][j])
    }
}

// highest run 
document.write("</br></br></br>");document.write("</br></br></br>");document.write("</br></br></br>");
function highestRun(run){
   let max = run[0][0];
   let maxrun = run[0][1];
   for(let i=1; i<run.length; i++){
       if(maxrun<run[i][1]){
           maxrun = run[i][1];
           max = run[i][0];
       }
   }
   return max;
}

let run=[
    ["limon",99],
    ["imtiaj",89],
    ["rahman",90],
    ["ahmed",24],
    ["ahmed",107]
];

let namE=highestRun(run);
document.write("high run is mr/ : "+namE+"\n");