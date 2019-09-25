import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

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
                var error = getErrorTable(err.fullError);
                document.getElementById("content").innerHTML = error;
                err.fullError.then(e => console.log(e.detail))
            }
            else { console.log("Network error"); }
        });
}


// For requests other than GET,  you need to provide fetch with an object containing the options for the request you plan to do. 
// As an example, this is how you could make a POST request:
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
    var tableData = data.map(person => "<tr><td>" + person.id + "</td><td>" + person.age + "</td><td>" + person.name + "</td><td>" + person.gender + "</td><td>" + person.email + "</td></tr>");
    tableData.unshift('<table class="table"><tr><th scope="col">id</th><th scope="col">age</th><th scope="col">name</th><th scope="col">gender</th><th scope="col">email</th></tr>');
    tableData.push("</table>");
    return tableData.join("");
}

/**
 * Home Helper function for 1 person. 
 * @param data 
 */
function getOneUserTable(data) {
    var tableData = ["<tr><td>" + data.id + "</td><td>" + data.age + "</td><td>" + data.name + "</td><td>" + data.gender + "</td><td>" + data.email + "</td></tr>"];
    tableData.unshift('<table class="table"><tr><th scope="col">id</th><th scope="col">age</th><th scope="col">name</th><th scope="col">gender</th><th scope="col">email</th></tr>');
    tableData.push("</table>");
    return tableData.join("");
};

function getErrorTable(data) {
    var tableData = ["<tr><td>" + data.status + "</td><td>" + data.msg + "</td></tr>"];
    tableData.unshift('<table class="table"><tr><th scope="col">Status</th><th scope="col">Message</th></tr>');
    tableData.push("</table>");
    return tableData.join("");
}

// EXERCISES 
// Use JavaScript, fetch and DOM-manipulation to create a SPA with the following functionality:
// You should only use the index.html file and the index.js file in the src-folder. 

// 1) Show all users (in a table) - GET
/**
 * Show All Users in a table - GET
 */
function getAllUsers() {
    var URL = 'http://localhost:3333/api/users';
    var content = document.getElementById("content");

    errorHandlingFetch(URL, function (data) {
        content.innerHTML = makeTable(data);
    })
}

document.getElementById("getAllData").onclick = getAllUsers;

// 2) Show a single user, given an ID - GET BY ID
function getOneUser() {
    var ID = document.getElementById("input").value;
    var URL = 'http://localhost:3333/api/users/' + ID;
    var content = document.getElementById("content");

    errorHandlingFetch(URL, function (data) {
        content.innerHTML = getOneUserTable(data);
    })
}
document.getElementById("getOneUser").onclick = getOneUser;

// 3) Add a new User - POST
function postUser() {
    var age = document.getElementById("age").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var genderArray = document.getElementsByName("gender");
    var gender;
    for (var i = 0; i < genderArray.length; i++){
        if (genderArray[i].checked){
            gender = genderArray[i].value;
        }
    }
    var person = {age:age, name:name, email:email, gender:gender};
    var URL = 'http://localhost:3333/api/users/';
    request(URL, "POST", person);
}
document.getElementById("postPerson").onclick = postUser;

// 4) Edit an existing user - PUT
function putUser() {
    var age = document.getElementById("age").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var genderArray = document.getElementsByName("gender");
    var gender;
    for (var i = 0; i < genderArray.length; i++){
        if (genderArray[i].checked){
            gender = genderArray[i].value;
        }
    }
    var person = {age:age, name:name, email:email, gender:gender};
    var URL = 'http://localhost:3333/api/users/'+document.getElementById("id").value;
    request(URL, "PUT", person);
}
document.getElementById("putPerson").onclick = postUser;

// 5) Delete an existing user - DELETE
