alert("limon")
var marks= parseInt(prompt("Enter student marks :"));

var results= marks>99 ? "not valid marks": results= marks>=80? "congratulation you get A+"+marks: results= marks>=70 ? "you get A"+marks : results= marks>=60 ? "you get A-"+marks: results= marks>=50 ? "you get B"+marks : results= marks>=40 ? "C your marks is : "+marks: results= marks>=33 ? "you pass only "+marks: "you fall try again latter "+marks
document.write(results);