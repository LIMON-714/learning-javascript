// error handling try catch finally
// the throw statment with custom  error
//----------------------------------------------------------------



document.getElementById('btn').addEventListener('click',function(){
    //alert('is clicked');

    let num =document.querySelector('#numText').value ;
    console.log(num);

    try{
        if (num<5){
            throw "input is too low"
        }
        else if(num>10){
            throw "input is too higher"

        }
    }catch(error){
        console.log(error);
    }
    finally{
       alert('thank you');
    }




});
