/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// MAKE LIST
let mydivtext = document.getElementById("mydivtext");

let people = ["John", "Peter", "Jesper", "Tom"];

function makeList() {

    let text = people.map(person => "<li>" + person + "</li>");

    text.unshift("<ul>");
    text.push("</ul>");

    mydivtext.innerHTML = text.join("");
}
makeList();
// MAKE LIST END

// ADD PERSON START 
function insertPerson(e) {
    e.preventDefault();
    let newPerson = document.getElementById("textInputPerson").value;
    people.push(newPerson);
    makeList();
}

var btn = document.getElementById("submitButton");

btn.addEventListener("click", function (e) {
    insertPerson(e);
});
// ADD PERSON END

// REMOVE FIRST START
function removeFirst(e) {
    e.preventDefault();
    people.shift();
    makeList();
}

document.getElementById("submitFirst").addEventListener("click", function(e) {
    removeFirst(e);
});
// REMOVE FIRST END

// REMOVE LAST START
function removeLast(e) {
    e.preventDefault();
    people.pop();
    makeList();
}
document.getElementById("submitLast").addEventListener("click", function(e) {
   removeLast(e);
});
// REMOVE LAST END


