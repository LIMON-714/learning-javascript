// 4 ways to call api - XMLHttpRequest, fetch, axios, jquery

// fetch() has replaced XMLHttpRequest
// fetch() - global method for making HTTP Request
// 2 ways to call - then, async await

// + fetch() is easy to use compare to XMLHttpRequest
// + fetch() returns a promise
// - returned promise can only handle network error
// - does not support all the older browser

// method for making HTTP Request

console.clear();

// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method:'POST',
//     headers: {
//             "conttent-type": "application/json; charset=UTF-8",
//     },
//     body : JSON.stringify({
//        // Id: 11,
//         title: 'fos ty',
//         body : 'hello all',
//         userID : 123,
//     }),
// })
// .then((res) => {
//     if (!res.ok){
//         const message = `Error ${res.status}`
//         throw new Error(message)
//     }
//     return res.json();

// })
// .then((res) => console.log(res))
// .catch((err) => console.log(err));

const makeRequest = async (url,config) => {
   const res = await fetch(url,config);
   if (!res.ok){
       const message = `Error ${res.status}`;
       throw new Error(message);
   }
   const data = await res.json();
   return data;

}

// const getData = async () =>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts')
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))
// };

// getData();



// const sendData = async () =>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts',{
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'foofa',
//             body: 'booma',
//             userID:11,

//         }),
//         headers:{
//             'Content-Type': 'application/json; charset=UTF-8',
//         }
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))
// };

// sendData();


// const updateData = async () =>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1',{
//         method: 'PUT',
//         body: JSON.stringify({
//             Id: 111,
//             title: 'foofa22',
//             body: 'booma66',
//             userID:11,

//         }),
//         headers:{
//             'Content-Type': 'application/json; charset=UTF-8',
//         }
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))
// };

// updateData();

const deleteData = async () =>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/1',{
        method: 'DELETE',
})
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
};

deleteData();