import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

// Use JavaScript, fetch and DOM-manipulation to create a SPA with the following functionality:
// 1) Show all users (in a table) - GET
// 2) Show a single user, given an ID - GET BY ID
// 3) Add a new User - POST
// 4) Edit an existing user - PUT
// 5) Delete an existing user - DELETE
// You should only use the index.html file and the index.js file in the src-folder. 

/**
 * Basic Get requests. 
 * @param String URL 
 */
var basicFetchGet = function (URL, callback) {
    fetch(URL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            callback(data);
        });
}

/**
 * Fetch with Error Handling
 * @param String URL 
 * @param function callback 
 */
var errorHandlingFetch = function (URL, callback) {
    function handleHttpErrors(res) {
        if (!res.ok) {
            return Promise.reject({ status: res.status, fullError: res.json() })
        }
        return res.json();
    }

    fetch(URL)
        .then(handleHttpErrors)
        .then(data => callback(data))
        .catch(err => {
            if (err.status) {
                err.fullError.then(e => callback(e.detail))
            }
            else { callback("Network error"); }
        });
}


// For requests other than GET,  you need to provide fetch with an object containing the options for the request you plan to do. 
// As an example, this is how you could make a POST request:
/**
 * POST PUT DELETE Requests. 
 * @param String URL 
 * @param String method - POST PUT DELETE  
 * @param Person body 
 */
function request(URL, method, body) {
    function makeOptions(method, body) {
        var opts = {
            method: method,
            headers: {
                "Content-type": "application/json"
            }
        }
        if (body) {
            opts.body = JSON.stringify(body);
        }
        return opts;
    }
    return fetch(URL, makeOptions(method, body));
}



