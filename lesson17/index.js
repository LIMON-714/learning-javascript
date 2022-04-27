//concatination

var cou1= ["bangladesh", "japan","china"];
var cou2= ["uk" , "canada","india"]
cou= cou1.concat(cou2);
document.write(cou);

document.write("</br></br></br>")


// shift / unshift / pop useing 




//splice use

var nameS= ["limon","chaiti","momtahina","imtiaj","amin"];

document.write(nameS);

nameS.splice(1,0,"lc","rahmanmm");// (1start point, 0remove points )index number
document.write("</br>"+nameS);

document.write("</br>"+nameS.splice(2,3)) // start 2 after 3 remove points
document.write("</br></br></br>")

// sort mathod a<b<c 
var sortedName= nameS.sort();
document.write("</br>"+ sortedName)

// using number sortings to
var number= [10,67,1,5,89,14,4,55];
number.sort(function(a,b){
    return a-b;
});
document.write("</br>"+number)
// reverse oposite
var rName= nameS.reverse();
document.write("</br></br>"+ rName);

document.write("</br></br></br>")