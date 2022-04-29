// load, unload
//scroll
// resize
//toggle


    window.addEventListener("load", function(){
   console.log("load");
   });
    window.addEventListener("unload", function(){        console.log("unload");
  });


window.addEventListener("scroll", function(){
    console.log("scrolling");
});

window.addEventListener("resize", function(){
    console.log("resizing");
    //  const windowWidth = window.outerWidth;
    //  const windowHeight = window.outerHeight;
    //  console.log(`height:${height},width:${width}`);




});

const nAME = document.querySelector('details');
nAME.addEventListener("toggle", function(e){
    console.log(e.target.open);
})