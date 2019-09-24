// PAGE 3. 
// REDUCE

// reduce is used to reduce an array into a single item (a number, string, object, etc). 
// This is a very common problem in all languages, for specific problems, so common, 
// that the Array actually has a specific “reduce” method called join,  
// which can reduce an array into a string separated by whatever we choose.
var all = ["Lars", "Peter", "Jan", "Bo"];

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
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 }]

// Create a reducer callback that, using the Array’s  reduce() method,  will return the average age of all members (25 for the provided array).
// Hint: The reduce callback takes two additional arguments as sketched below:
// var reducer = function(accumulator, member,index,arr ){
// Index is the current index for which the value (member) are passed in, and arr is the array.
// Use this to return different values from your reduce-function,  according to whether you have reached the last element or not.

console.log('Create a reducer callback that, using the Array’s  reduce() method,'
    + '\nwill return the average age of all members (25 for the provided array).');

members.reduce(function (total, member, index, array) {

    var averageAge = 0 + (total + member.age) / (index + 1);

    console.log('Average age after ' + (index + 1) + ' iterations is: ' + averageAge);

    return total + member.age;
}, 0);

// d) Imagine you were to create a system that could count votes for the presidential election in USA.
// Given this array of votes: 
var votes = ["Clinton", "Trump", "Clinton", "Clinton", "Trump", "Trump", "Trump", "None"];
// Create a reduce function that will return a single object like {Clinton: 3, Trump: 4, None: 1 }
// Hints: You can check whether a property exists in a JavaScript, and add new properties as sketched below:
var a = {}
if (a["clinton"])
    console.log("I Will Not Print")
a["clinton"] = 1;
console.log("You will see me")
console.log("Value of clinton " + a["clinton"]);

console.log('Create a reduce function that will return a single object like {Clinton: 3, Trump: 4, None: 1 }');

// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)


function reduceVotes() {
    var Trump = "Trump";
    var Clinton = "Clinton";
    var None = "None";

    var returnObject = { Clinton: 0, Trump: 0, None: 0 };

    function myCompare(string, checkString) {
        if (string == checkString) {
            return 1;
        } else {
            return 0;
        }
    }

    function myReduce(checkString) {
        var returnValue = votes.reduce(function (total, currentValue, currentIndex, array) {
            return total + myCompare(currentValue, checkString);
        }, 0);
        return returnValue;
    }

    returnObject.Clinton = myReduce(Clinton);
    returnObject.Trump = myReduce(Trump);
    returnObject.None = myReduce(None);

    return returnObject;
}

console.log(reduceVotes());

// Hoisting
// READ: https://www.w3schools.com/js/js_hoisting.asp 
// Team up with another member of the class. Read about hoisting and implement at least two examples (individually) to illustrate that:
// 1) Function declarations are completely hoisted



// 2) var declarations are also hoisted, but not assignments made with them



// Explain to each other (as if it was the exam):
// 1) What hoisting is:

// Hoisting is that variable declarations are "hoisted" to the top of the page.
// You can use a variable that is declared below. Because it is hoisted. As long as it is assigned. 

// 2) A design rule we could follow, now we know about hoisting

// It is a good idea to declare your variables at the top of the page. 
// Because if you use things like let or strict mode, then hoisting doesn't really work that well.
// Also, if you initialize a variable then it doesn't get hoisted. 
// So if you want to use hoisting you have to seperate the assignment and the declaration. 

// 3) What is the difference between the keyword var and the ES6 keyword let?

// let is not hoisted. 