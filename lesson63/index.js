
// add jquery for api

console.clear();
//console.log(window);

const makeRequest= async (url, method,data)=>{
   try {
    const result= await $.ajax({
        url : url,
        method : method,
        data: data,
    })
    return result;
   }
   catch(error){
       console.log(error);
   }
}

// const getDtata=()=>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'GET').then(
//         (res)=> console.log(res)
//     );
// }
// getDtata();


const creatDtata=()=>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/', 'POST',{     // (same type using put,delet same )
        title: 'foo',
        body: 'bar',
        userId: 11,
    }).then(
        (res)=> console.log(res)
    );
}
creatDtata();

/*
// for delete data 
const deleteData = ()=>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'DELETE').then(
                (res)=> console.log(res)
            );
        };
    deleteData();
*/

