
//localStorage store data as key value pair- string

// setItem(key, value)
localStorage.setItem("userName", "limon rahman");
localStorage.setItem("password", "36789");
const countries = ["canada","london","china","bangladesh"];
localStorage.setItem("country", JSON.stringify( countries));

// get data from localStorage

const userName = localStorage.getItem("userName");
const userPassword = localStorage.getItem("password");
console.log(userName, userPassword);



// // update user
// localStorage.setItem("userName", "imtiaj ahmed");
// localStorage.setItem("password", "1111234");

// // remove 
// localStorage.removeItem("userName");
// localStorage.removeItem("password");


//localStorage.clear();

