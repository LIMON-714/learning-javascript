var marks = prompt("Enter student marks : ");


switch(marks) {
    case (marks>99):
        alert("Please enter a valid mark : ");
        break;
    case(marks>=80 && marks<=99):
         alert("congratulation you get A+  : "+marks);
         break;
    case(marks>=70 && marks<=79):
         alert(" you get A  : "+marks);
         break;
    case(marks>=60 && marks<=69):
         alert(" you get A-  : "+marks);
         break;
    case(marks>=50 && marks<=59):
         alert(" you get B  : "+marks);
         break;
    case(marks>=40 && marks<=49):
         alert(" you get C  : "+marks);
         break;
    case(marks>=33 && marks<=39):
         alert(" you get D  : "+marks);
         break;
    default:
         alert(" !sorry you fall try again....")
}

