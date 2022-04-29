// api calling 
// event - onload(), onerror()
// properties - response, responseText , responseURL, status, statusText
// function - open(), send(), serRequestHeader()



console.clear();
//console.log(window);


const makeRequest =(method, url , data)=> {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = () => {
        let data = xhr.response;
        console.log(xhr.status)
        console.log(JSON.parse(data));
    }
    xhr.onerror = () => {
        console.log("error part ")
    }

    xhr.send(JSON.stringify(data));

}

const getData = () => {
    //console.log("get data");
    makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts');
};
getData();


const sendData = () => {
    //console.log("get data");
    makeRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
        titel: 'foo',
        body: 'bar',
        userId: 1,
    });
}

sendData();

const updateData=()=>{

    makeRequest("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
        id : 1,
        titel: 'foo --yyuas',
        body: 'bar----23',
        userId: 9990,
    });
}
updateData();

const deleteData = () => {

    makeRequest("DELETE", "https://jsonplaceholder.typicode.com/posts/1");

}
deleteData();