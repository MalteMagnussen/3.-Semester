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



