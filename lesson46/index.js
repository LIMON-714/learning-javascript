// Error handling -> try, catch , finally, throw
// try.... catch handling run time errors 
// error object
//the finally statement -> execute code ,after  try and catch

try{
     // code
     alert("hello world");
     alert(x);// is error 
     alert("this is limon rahman");

}
catch(error){
   // hendle error 
   alert("inside catch statement");
   console.log(error);
   console.log(error.name);
   console.log(error.message);
 
}
finally{
    alert("the end!");
}