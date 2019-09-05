/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


let submitButton = document.getElementById("submitButton");

let printPerson = document.getElementById("printPerson");

function getPerson(obj) {
    return JSON.stringify(obj, null, 4);
}

submitButton.addEventListener("click", function () {
    let personId = document.getElementById("personId");
    let url = "https://jsonplaceholder.typicode.com/users/" + personId;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                // Inside this callback, and only here, the response data is available
                printPerson.innerHTML = getPerson(data);
            });

    
})
