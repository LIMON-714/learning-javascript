// // session storage
// sessionStorage.setItem("user", "limon");
// const userName= sessionStorage.getItem("user" ,"limon");
// console.log(userName);

//sessionStorage.removeItem("user");
//sessionStorage.clear();

// const user= {id: "101" , name: "imtiaj ahmed"};
// sessionStorage.setItem("user", JSON.stringify(user));


// const userInfo= JSON.parse(sessionStorage.getItem("user"));
// console.log(userInfo);

// cookies
document.cookie = "username=limon; expires= Mon,02 May 2022 20:27:00 GMT";
console.log(document.cookie);