const fetch = require('node-fetch');

//GET
fetch('https://reqres.in/api/users/1')
    .then(res => {    
        if (res.ok) { console.log("HTTP request successful") }
        else { console.log("HTTP request unsuccessful") }
        return res
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
    
//POST 

fetch('https://reqres.in/api/users', {
    method: "POST",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(
        { name: "Sergio"}
    )
})
.then(res => {
    if (res.ok) { console.log("HTTP request successful") }
    else { console.log("HTTP request unsuccessful") }
    return res
})
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log(error))

//PUT
fetch('https://reqres.in/api/users/2', {
    method: "PUT",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(
        { name: "Augusto"}
    )
})
.then(res => {
    if (res.ok) { console.log("HTTP request successful") }
    else { console.log("HTTP request unsuccessful") }
    return res
})
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log(error))

//DELETE
fetch('https://reqres.in/api/users/2', {
    method: "DELETE",
    headers: {
        'Content-type': 'application/json'
    }
})



