

    var tag = document.getElementsByTagName("a")[0];
    tag.innerHTML="link"
   tag.style.textDecoration= "none";
   tag.style.color= "red";
   //every css style allow

   var heading1= document.getElementsByTagName("h1")[0];
   heading1.innerHTML= "say just hellow";

   // creating eliments
   var heading3 = document.createElement("h1");
   var text = document.createTextNode("  limon rahman");
   heading3.appendChild(text);


   var mydiv= document.getElementById("my-div");
   mydiv.appendChild(heading3);

// add under but i add its under
var heading0 = document.createElement("h1");
   var text0 = document.createTextNode(" by imtiaj ahmed ");
   heading0.appendChild(text0);

   var heading1= document.getElementsByTagName("h1")[0];
   mydiv.insertBefore(heading0,heading1)


   // removing elements
   /*
   var heading2 = document.getElementsByTagName("h1")[1];
   mydiv.removeChild(heading2)
   */