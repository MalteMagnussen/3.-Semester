/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//
//
//JavaScript functions and Callbacks
//1) Create a new JavaScript file and add these three functions

//Function Declaration
//Observe: no return type, no type on parameters
function add(n1, n2) {
    return n1 + n2;
};

//Function Expression
var sub = function (n1, n2) {
    return n1 - n2;
};

// Mul
var mul = function (n1 , n2) {
    return n1 * n2 ;
}

//Callback example
try {

    var cb = function (n1, n2, callback) {
        if (
            typeof n1 === "number", //Will fail if n1 is undefined, or is not a number
            typeof n2 === "number", //Will fail if n2 is undefined, or is not a number
            typeof callback === "function" //Will fail if callback is undefined or is not a function
        ) {
            return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
        } else {
            return console.log("cb Failed because of wrong inputs.")
        }
    };

} catch (e) {
    console.log("cb Failed. Cause: " + e.log);
}

//1)
var names = ["Malte", "Benjamin", "Jens", "Bo", "Paul", "JoJo", "Dio"];
//console.log(names.join());

var newlinenames = names.map(name => "<li>"+name+"</li>");
newlinenames.unshift("<ul>")
newlinenames.push("</ul>")
//console.log(newlinenames.join("\n"));
//console.log(newlinenames.join(""));

var bigNames = names.map(name => name.toUpperCase())

var namefilter = names.filter(name => name.length <= 3);
//console.log(namefilter.join());
/*
names.forEach(element => {
    console.log(element);
})
namefilter.forEach(element => {
    console.log(element);
})*/

// 4))
//console.log(cb(10,10,mul));
// $ node exercise2.js
// Result from the two numbers: 10+10=100

// 5)
//console.log(cb(10,10,function(n1,n2){
//    return n1/n2;
//}))

//
//The following questions might seem trivial, but it's extremely important that you can answer (and understand) each, in order to do the JS-stuff we want to do this semester
//
//2) Call the functions above as sketched below. It’s not about doing it as fast as you can, but about understanding what's happening, so make sure you understand each line.
//console.log( add(1,2) );     // What will this print? 
// It prints 3. It simply adds 1 and 2.

//console.log( add );          // What will it print and what does add represent?
// [Function: add] - It is simply the reference to the Function. 

//console.log( add(1,2,3) ); // What will it print
// It prints 3. It adds 1 and 2. The function only has 2 parameters. It ignores the 3. 

//console.log( add(1) );	  // What will it print 	
// NaN - Not a Number. That function requires 2 parameters. And the second parameter is null, which is not a number. 

//console.log( cb(3,3,add) ); // What will it print
// Result from the two numbers: 3+3=6 - It takes in 3 and 3 and puts them in as strings, then calls add(n1,n2) == add(3,3) == 3+3 == 6. 

//console.log( cb(4,3,sub) ); // What will it print
// Result from the two numbers: 4+3=1 - It takes in 4 and 3 and puts them in as strings, then calls sub(4,3) == 1

//console.log(cb(3, 3, add())); // What will it print (and what was the problem)
// It tries to call the add() function. With no parameters. As a parameter for cb. Does not work.

//console.log(cb(3,"hh",add));// What will it print
// Result from the two numbers: 3+hh=3hh 
// Because hh is a string, and you can concat strings with +, then it just slams on the 3. 

var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];

//console.log("Cars newer than 1999")
var newerthan1999 = cars.filter(car => car.year > 1999)
//newerthan1999.forEach(car => console.log(car))

//console.log("Volvo Cars")
//cars.filter(car => car.make === "Volvo").forEach(car => console.log(car))

//console.log("All cars with a price below 5000")
//cars.filter(car => car.price < 5000).forEach(car => console.log(car))

//       Can you refactor this into three methods, that takes the filter text as an argument.
function newerThan(year) {
    return cars.filter(car => car.year > year)
}

function carMake (make) {
    return cars.filter(car => car.make === make)
}

function lessThanPrice ( price ) {
    return cars.filter(car => car.price < price)
}

//       Can you refactor this into one method, that takes the filter text, and type, as arguments
function oneForAll(type, filter) {
    return cars.filter(type => filter)
}


//4a)      Use map, join + just a little bit more to implement a function, that ,
// given the cars array used above, will create, and return a string with valid SQL statements to '
// insert the data into a table with matching column names (id, year, make, model, price) as sketched below:

//INSERT INTO cars (id,year,make,model,price) VALUES ( 1, 1997 'Ford','E350', 3000 );

var SQLString = cars.map(car => "INSERT INTO cars (id,year,make,model,price) VALUES ("+car.id+","+car.year+","+car.make+","+car.model+","+car.price+");");
console.log(SQLString)


// 1) Given the code below answer, don’t execute the code, in what order you would expect to see the outputs:
// aaaaaaaa
// dddddddd
// ffffffff
// eeeeeeee
// bbbbbbbb

// var msgPrinter = function(msg,delay){
//     setTimeout(function(){
//       console.log(msg);
//     },delay);
//   };
//   console.log("aaaaaaaaaa");
//   msgPrinter ("bbbbbbbbbb",2000);
//   console.log("dddddddddd");
//   msgPrinter ("eeeeeeeeee",1000);
//   console.log("ffffffffff");

// Result:
//aaaaaaaaaa
//dddddddddd
//ffffffffff
//eeeeeeeeee
//bbbbbbbbbb

