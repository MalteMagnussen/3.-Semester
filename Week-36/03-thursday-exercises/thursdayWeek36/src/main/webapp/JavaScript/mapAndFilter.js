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

let carmap = function (cars) {
  // Creating the table headers. 
  let returnString = "<table class=\"table\"><thead><tr>";
  returnString += "<th scope=\"col\">id</th>";
  returnString += "    <th scope=\"col\">year</th>";
  returnString += "    <th scope=\"col\">make</th>";
  returnString += "    <th scope=\"col\">model</th>";
  returnString += "    <th scope=\"col\">price</th>";
  returnString += "  </tr>";
  returnString += "</thead>";
  returnString += "<tbody>";
  
  
  
  
  // Ending table:
  returnString +="</tbody></table>"
};

