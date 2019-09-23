// PAGE 3. 
// REDUCE

// reduce is used to reduce an array into a single item (a number, string, object, etc). 
// This is a very common problem in all languages, for specific problems, so common, 
// that the Array actually has a specific “reduce” method called join,  
// which can reduce an array into a string separated by whatever we choose.
var all= ["Lars", "Peter", "Jan", "Bo"];

// a) Use join to create a single string from all, with names: comma-, space. and  # - separated.

console.log('\nUse join to create a single string from all, with names: comma-, space. and  # - separated.');
console.log(all.join());
console.log(all.join(' '));
console.log(all.join('#'));

// b) Given this array: 

var numbers = [2, 3, 67, 33]; 

// Create a reducer callback that, with reduce(..),  will return the sum (105) of all values in numbers

console.log('Create a reducer callback that, with reduce(..),  will return the sum (105) of all values in numbers');

function getSum(total, num) {
    return total + num;
}
// How the fuck does this even work. 
console.log(numbers.reduce(getSum, 0));

