

const textarea = document.querySelector('textarea');


//  textarea.addEventListener('keydown',function(e) {
//      console.log(e.repeat);
//      //alert('do not repeat');

//  });

// textarea.addEventListener('keypress',function() {
//     console.log('key press');

// });

textarea.addEventListener('keyup',function(e) {
   console.log(e.key);
   //console.log(e.keyCode);

});