/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Getting various things from document first.
let submitButton = document.getElementById("submitButton");

let allButton = document.getElementById("allButton");

let printPerson = document.getElementById("printPerson");

// JSON function
function getPerson(obj) {
    return JSON.stringify(obj, null, 3);
}

// Get by ID
submitButton.addEventListener("click", function () {
    let personId = document.getElementById("personId").value;
    let url = "https://jsonplaceholder.typicode.com/users/" + personId;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                // Inside this callback, and only here, the response data is available
                printPerson.innerHTML = getPerson(data);
            });
});

// Get ALL - Into table - Name, Phone
function getAll(obj) {
    var arrayOfObj = Object.values(obj);

    returnString = tableHeaderStart();

    let headerArray = ['Name', 'Phone'];
    returnString += tableHeader(headerArray);

    returnString += tableHeaderEnd();

    for (let i = 0; i < arrayOfObj.length; i++) {
        let bodyArray = [arrayOfObj[i].name, arrayOfObj[i].phone];
        returnString += tableRow(bodyArray);
    }

    return returnString + endOfTable();

}

// Event Listener for Get All.
allButton.addEventListener("click", function () {
    let url = "https://jsonplaceholder.typicode.com/users";

    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                // Inside this callback, and only here, the response data is available
                printPerson.innerHTML = getAll(data);
            });

});




