/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

const { response } = require("express")

/* =============== 1. Print the status code of the response =============== */
    // Your code here
    function printStatusCode(url,option){
        const res = fetch(url) 
        res
        .then((response) => {
            console.log(response.status)
            //also return the statusCode just in case
            return response.status
            } 
        )
    }
    printStatusCode("/products")

/* ====== 2. Print true if the status of the response was successful ====== */
    // Your code here
    function printTrue(url,option){
        
        const res = fetch(url) 
        res
        .then(console.log(true))
        .catch(error => console.log( "Error :", error))
    }
    // We expect this endPoint to return true
    printTrue("/products")

    // We would expect this endPoint to return an Error
    printTrue("/produkkcts")

    // OR
    const res = fetch(url) 
    res.then(response => console.log(response.ok))

/* =================== 3. Print the Content-Type Header =================== */
    // Your code here
    res.then(response => console.log(response.headers.get("Content-Type")))


/* ============== 4. Print the body of the response as text =============== */
    // Your code here4
    res.then(response => console.log(response.text()))
