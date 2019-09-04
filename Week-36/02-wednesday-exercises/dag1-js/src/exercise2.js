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

//Callback example
var cb = function (n1, n2, callback) {
    return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
};
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

//console.log(cb(3,3,add())); // What will it print (and what was the problem)
// It tries to call the add() function. With no parameters. As a parameter for cb. Does not work.

//console.log(cb(3,"hh",add));// What will it print
// Result from the two numbers: 3+hh=3hh 
// Because hh is a string, and you can concat strings with +, then it just slams on the 3. 

