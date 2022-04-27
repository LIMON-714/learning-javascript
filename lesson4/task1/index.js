var text = prompt('Enter your frist name : ');
var text1 = prompt('Enter your secound name : ')

document.write("<br/>"+ text + " "+ text1 + "</br>");
// add using library function
fullName = text.concat(" "+text1);

document.write(fullName);


// uppercase
fullName= fullName.toUpperCase(fullName);
document.write("<br/>"+fullName);


//len
fullName = fullName.length;
document.write("<br/> The length of fullName is :" + fullName);

// 2nd possition of full name
fullName = text.concat(" "+text1);
fullName= fullName.charAt(2);
document.write("<br/>the sound position is "+fullName);