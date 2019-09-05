/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
];

// MAKES THE START OF THE TABLE. 
function tableHeaderStart() {
    return "<table class=\"table\"><thead><tr>";
}

// END OF TABLE HEADER
function tableHeaderEnd() {
    return "</tr></thead><tbody>";
}

// MAKES A SINGLE TABLE HEADER.
function tableHeader(header) {
    return "<th scope=\"col\">" + header + "</th>";
}

// MAKES A SINGLE TABLE ROW.
function tableRow(car) {
    let returnString = "<tr>";
    Object.values(car).forEach(element => returnString += "<td>"+element+"</td>");
    return returnString+"</tr>";
}

// RETURNS AN ARRAY OF OBJECTS AS A TABLE.
let carmap = function (cars) {
    // TABLE HEADER
    let returnString = tableHeaderStart();
    Object.keys(cars[0]).forEach(element => returnString += tableHeader(element));
    returnString += tableHeaderEnd();
    
    // TABLE ROWS
    cars.forEach(element => returnString += tableRow(element));
    
    // Ending table:
    returnString += "</tbody></table>";
    
    return returnString;
};

document.getElementById("CarsTable").innerHTML = carmap(cars);
