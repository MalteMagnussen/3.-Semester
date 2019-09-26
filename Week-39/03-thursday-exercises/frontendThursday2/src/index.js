import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";


var content = document.getElementById("content");
var URI = 'http://localhost:8080/jaxrs/api/person/';

function getErrorTable(data) {
    var tableData = ["<tr><td>" + data.code + "</td><td>" + data.message + "</td></tr>"];
    tableData.unshift('<table class="table"><tr><th scope="col">Status</th><th scope="col">Message</th></tr>');
    tableData.push("</table>");
    return tableData.join("");
}

/**
 * Fetch with Error Handling - Help function
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
                err.fullError.then(e => console.log(e.detail))
                err.fullError.then(e => content.innerHTML = getErrorTable(e))
            }
            else { console.log("Network error"); }
        });
}

/**
 * POST PUT DELETE Requests. Help function
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

/**
 * Homemade Table Helper function for all users. 
 * @param data 
 */
function makeTable(data) {
    var tableData = data.all.map(person => "<tr><td>" + person.id + "</td><td>" + person.fName + "</td><td>" + person.lName + "</td><td>" + person.phone + "</td></tr>");
    tableData.unshift('<table class="table"><tr><th scope="col">id</th><th scope="col">First name</th><th scope="col">Last name</th><th scope="col">Phone</th></tr>');
    tableData.push("</table>");
    return tableData.join("");
}

/**
 * Home Helper function for 1 person. 
 * @param data 
 */
function getOneUserTable(data) {
    var tableData = ["<tr><td>" + data.id + "</td><td>" + data.fName + "</td><td>" + data.lName + "</td><td>" + data.phone + "</td></tr>"];
    tableData.unshift('<table class="table"><tr><th scope="col">id</th><th scope="col">First name</th><th scope="col">Last name</th><th scope="col">Phone</th></tr>');
    tableData.push("</table>");
    return tableData.join("");
};

function generateTable(data) {
    var tableData = [];
    //Headers
    tableData.push('<table class="table"><tr>');
    for (var key in Object.keys(data)) {
        tableData.push('<th scope="col">' + key + '</th>');
    }
    tableData.push('</tr>');

    //Body
    tableData.push('<tr>');
    for (var property in Object.values(data)) {
        tableData.push('<td>' + property + '</td>');
    }
    tableData.push('</tr>');
    tableData.push("</table>");
    return tableData.join("");
}

/**
 * Show All Users in a table - GET
 */
function getAllUsers() {

    errorHandlingFetch(URI, function (data) {
        content.innerHTML = makeTable(data);
    })
}
document.getElementById("GetALL").onclick = getAllUsers;

// 2) Show a single user, given an ID - GET BY ID
function getOneUser() {
    var ID = document.getElementById("id").value;
    var URL = URI + ID;

    errorHandlingFetch(URL, function (data) {
        content.innerHTML = getOneUserTable(data);
    })
}
document.getElementById("GET").onclick = getOneUser;

// 3) Add a new User - POST
function postUser() {
    var name = document.getElementById("name").value;
    var person = { name: name };
    var URL = URI;
    request(URL, "POST", person);
}
document.getElementById("POST").onclick = postUser;

// 4) Edit an existing user - PUT
function putUser() {
    var name = document.getElementById("name").value;
    var person = { name: name };
    var URL = URI + document.getElementById("id").value;
    request(URL, "PUT", person);
}
document.getElementById("PUT").onclick = putUser;

// 5) Delete an existing user - DELETE
function deleteUser() {
    request(URI + document.getElementById("id").value, "DELETE");
}
document.getElementById("DELETE").onclick = deleteUser;

