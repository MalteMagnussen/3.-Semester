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

// c) Given this array:
var members = [
 {name : "Peter", age: 18},
 {name : "Jan", age: 35},
 {name : "Janne", age: 25},
 {name : "Martin", age: 22}]

// Create a reducer callback that, using the Array’s  reduce() method,  will return the average age of all members (25 for the provided array).
// Hint: The reduce callback takes two additional arguments as sketched below:
// var reducer = function(accumulator, member,index,arr ){
// Index is the current index for which the value (member) are passed in, and arr is the array.
// Use this to return different values from your reduce-function,  according to whether you have reached the last element or not.

console.log('Create a reducer callback that, using the Array’s  reduce() method,'  
+ '\nwill return the average age of all members (25 for the provided array).');

members.reduce(function(total, member, index, array){

    var averageAge = 0 + (total + member.age) / (index+1);

    console.log('Average age after '+(index+1)+' iterations is: ' + averageAge);

    return total + member.age;
}, 0);


