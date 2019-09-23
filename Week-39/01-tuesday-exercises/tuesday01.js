// I use node to run these functions via git bash. 

// Tuesday Exercises.

// 1) Using existing functions that takes a callback as an argument
// Using the filter method:
// Declare a JavaScript array and initialize it with some names (Lars, Jan, Peter, Bo, Frederik etc.). 
console.log('Use the filter method to create a new array with only names that contains the letter ‘a’.');

var namesArray = ['Lars', 'Jan', 'Bo', 'Peter', 'Frederik', 'Mads', 'Jens', 'Albert', 'Sofus', 'Julius', 'Martin'];

function filterNames(name) {
    if (name.includes('a'))
        return name;
}

console.log(namesArray.filter(filterNames));

// Using the map method:
console.log('Use the names-array created above, and, using its map method, create a new array with all names reversed.');

function reverseString(name) {
    return name.split('').reverse().join('');
}

console.log(namesArray.map(reverseString));

// 2)       Implement user defined functions that take callbacks as an argument
// Now, assume the array did not offer these two methods. Then we would have to implement them by our self. 
// a) Implement a function: myFilter(array, callback) that takes an array as the first argument, 
// and a callback as the second and returns a new (filtered) array according to the code provided in the callback 
// (this method should provide the same behaviour as the original filter method).
// Test the method with the same array and callback as in the example with the original filter method.

function myFilter(array, callback) {
    var returnArray = [];
    array.forEach(element => {
        if (!(callback(element) == undefined)) {
            returnArray.push(callback(element));
        }
    });
    return returnArray;
}

console.log('a) Implement a function: myFilter(array, callback) that takes an array as the first argument');
console.log(myFilter(namesArray, filterNames));

// b) Implement a function: myMap(array, callback)that, provided an array and a callback, 
// provides the same functionality as calling the existing map method on an array.
// Test the method with the same array and callback as in the example with the original map method.

console.log('b) Implement a function: myMap(array, callback)that, provided an array and a callback, ');

function myMap(array, callback) {
    var returnArray = [];
    array.forEach(element => {
        if (!(callback(element) == undefined)) {
            returnArray.push(callback(element));
        }
    });
    return returnArray;
}

console.log(myMap(namesArray, reverseString));

// 3) Using the Prototype property to add new functionality to existing objects
// Every JavaScript function has a prototype property (this property is empty by default), 
// and you can attach properties and methods on this prototype property. 
// You add methods and properties on an object’s prototype property to make those methods and properties available to all instances of that Object. 
// You can even implement (classless) inheritance hierarchies with this property.
// The problem with our two user defined functions above (myFilter and myMap) is that they are not really attached to the Array Object. 
// They are just functions, where we have to pass in both the array and the callback.
// Create a new version of the two functions (without the array argument) which you should add to the Array prototype property 
// so they can be called on any array as sketched below:
// var names = ["Lars", "Peter", "Jan", "Bo"];
// var newArray = names.myFilter(function(name) {…});

Array.prototype.myFilter = function (callback) {
    var returnArray = [];
    this.forEach(element => {
        if (!(callback(element) == undefined)) {
            returnArray.push(callback(element));
        }
    });
    return returnArray;
};

console.log('3) Using the Prototype property to add new functionality to existing objects');
console.log(namesArray.myFilter(filterNames));

// 4) Getting really comfortable with filter and map
// a) Given this array: var numbers = [1, 3, 5, 10, 11];
// Use map + a sufficient callback to map numbers into this array:
// var result = [4,8,15,21,11];
// Hints: The map() callback can take me additional arguments, see here

var numbers = [1, 3, 5, 10, 11];
var result = [4, 8, 15, 21, 11];
// Basically every number is just summed with the next one. So lets iterate over and plus the next number unto the one you're standing on. 
// And lets hope for no nullpointer shenanigans at the last number. 

function comfortable(element, index, array) {
    if (index < array.length-1)
        return element + array[index + 1];
    else return element;
}

var printArray = numbers.map(comfortable);

console.log('4) Getting really comfortable with filter and map '
    + '\na) Given this array: var numbers = [1, 3, 5, 10, 11]; '
    + '\nUse map + a sufficient callback to map numbers into this array: var result = [4,8,15,21,11];')
console.log(printArray);

// b) Use map() to create to create the <a>’s for a navigation set and eventually a string like below (use join() to get the string of <a>’s):
// <nav>
//   <a href=””>Lars</a>
//   <a href=””>Peter</a>
//   <a href=””>Jan</a>
//   <a href=””>Bo</a>
// </nav>

function navigationHelper(item) {
    return '<a href="">'+item+'</a>'
}

console.log(' b) Use map() to create to create the <a>’s for a navigation set ');

var aNames = namesArray.map(navigationHelper);

var printString = '<nav>\n';
printString += aNames.join('\n');
printString += '\n</nav>';

console.log(printString);

// c) Use map()+(join + ..) to create to create a string, representing a two column table, for the data given below:
var names = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];

console.log('c) Use map()+(join + ..) to create to create a string, representing a two column table');

function myTable(array) {
    var returnString = '<table>\n';

    var myTableArray = function(array) {
        function helper(element) {
            var returnString = '<tr>\n';
            returnString += '<td>' + element.name + '</td>\n';
            returnString += '<td>' + element.phone + '</td>';
            return returnString + '\n</tr>';
        }
        var objects = array.map(helper);
        return objects.join("\n");
    };

    returnString += myTableArray(array);

    return returnString + '\n</table>';
}

console.log(myTable(names));

// d) Create a single html-file and test the two examples given above.
// Hint: add a single div with an id=names, and use DOM-manipulation (document.getElementById.innerHTML = theString) to add the nav or table.

document.getElementById("names").innerHTML = myTable(names);

document.getElementById("printString").innerHTML = printString;
