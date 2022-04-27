//vowel 
var ch = prompt("Enter a character as you like :");

if(ch=='a'|| ch=='e'||ch=='i'|| ch=='o'||ch=='u')
    document.write("This is vowel : " +ch.toUpperCase(ch));

else
  document.write("This is a consonent : " +ch.toUpperCase(ch));



  // letter grade  

  var marks = parseInt(prompt("Enter a students mark : "));
if (marks > 0){
    if (marks>99){
        alert("Please enter a valid marks ") 
  }
  else if (marks>=80 && marks<=99){
      alert("congratulation you get A+ "+marks)
  }
       
  else if (marks>=70 && marks<=79){
      alert(" you get A "+marks)
  }
      
  else if (marks>=60 && marks<=69){
      alert(" you get A- "+marks)
  }
      
  else if (marks>=50 && marks<=59){
      alert(" you get B "+marks)
  }
       
  else if (marks>=40 && marks<=49){
      alert(" you get  C "+marks)
  
  }
       
  else if (marks>=33 && marks<=39){
  
      alert(" you get D "+marks)
  }
        
  else 
        alert(" sorry  you fall the exm try again latter .. ")
         
  
}
else if (marks<0){
    alert("the number is nagative ")
    
}
else if(marks==0){
    alert("the number is Zero ")
    alert(" sorry  you fall the exm try again latter .. ")
}
else
   alert("not a valid number ")
   