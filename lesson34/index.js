
const form = document.querySelector('form');

const namE =form.querySelector('div #name');
const emaiL = form.querySelector('div #email');
const pass = form.querySelector('div #password');

form.addEventListener('submit',formHandler);



function formHandler(e){
    e.preventDefault();
    
    

    const userinfo={
        namE:namE.value,
        emaiL: emaiL.value,
        pass: pass.value
    
    }
       console.log(userinfo);
       namE.value="";
       emaiL.value="";
       pass.value="";
}

