/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// TABLE HELPER FUNCTIONS

// START OF TABLE CREATION - USE THE FUNCTIONS IN ORDER:
// ADD THEM TO A STRING LIKE += IN THE ORDER SEEN HERE. 

// 1)
// MAKES THE START OF THE TABLE. 
function tableHeaderStart() {
    return "<table class=\"table\"><thead><tr>";
}

// 2)
// MAKES A TABLE HEADER. HAND IT AN ARRAY OF VALUES FOR A TABLE HEADER ROW.
function tableHeader(array) {
    let returnString = "";
    array.forEach(element => returnString += "<th scope=\"col\">" + element + "</th>");
    return returnString;
}

// 3)
// END OF TABLE HEADER
function tableHeaderEnd() {
    return "</tr></thead><tbody>";
}

//4)
// MAKES A SINGLE TABLE ROW. HAND IT AN ARRAY OF VALUES FOR A TABLE BODY ROW.
function tableRow(array) {
    let returnString = "<tr>";
    array.forEach(element => returnString += "<td>" + element + "</td>");
    return returnString + "</tr>";
}

//5)
// END OF TABLE
function endOfTable() {
    return "</tbody></table>";
}

// END OF TABLE HELPER FUNCTIONS
