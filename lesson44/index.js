// js BOM 
// js time events mathod 
// setTimeout(), setInterval()

/*
setTimeout(()=>{
      console.log("hellow");
},2000);
*/
/*
setTimeout(display, 2000);
function display(){
    console.log("hellow me limon");
}
*/

const buttons = document.querySelector(".save-btn");
const message = document.querySelector(".message");

/*
buttons.addEventListener("click",functionclick);

function functionclick(){
    message.textContent= "usre ragistation successfull";

   setTimeout(function(){
       message.textContent= " ";

   }, 2000);

}
*/

/*
buttons.addEventListener("click", function(){
    let count = 0;
    message.textContent = count;

    setInterval(function(){
       count = count + 1;
       message.textContent = count;
    },1000);
});
*/

// clock setInterval

buttons.addEventListener("click", startClock);

function startClock(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();


    minute = formatTime(minute);
    second = formatTime(second);



    let time = hour+": "+ minute+": "+ second
  


  

   message.textContent = time;
   setInterval(startClock,1000);
}

function formatTime(value) {
    
     if (value<10){
         value = "0"+value;
     }
    return value;


}