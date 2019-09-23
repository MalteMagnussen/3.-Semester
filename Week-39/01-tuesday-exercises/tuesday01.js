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

