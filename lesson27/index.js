alert("limon")
// Dom(document object model) tee

var photos = ["images/web-1images.jpg","images/web-2images.jpg","images/web-3images.jpg","images/web-4images.jpg","images/web-6images.jpg","images/web-7images.jpg","images/web-8images.jpg"];
var imgtag = document.querySelector("img");

count= 0;
function next(){
    count++;
    if(count>=photos.length){
        count = 0;
        imgtag.src= photos[count];
    }
    else{
    imgtag.src= photos[count];
}
}

function priv(){
    count--;
    if(count<0){
        count = photos.length-1;
        imgtag.src= photos[count];
    }
    else{
    imgtag.src= photos[count];
}

}