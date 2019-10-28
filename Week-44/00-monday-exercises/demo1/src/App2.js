import React from "react";
/*
2) Create a new file App2.js (change index.js so we can “select” this component),
 and  import the object from file2.js into a variable called person.
*/
import Person from "./file2";

import { males } from "./file2";
import { females } from "./file2";
/* 
3) Implement a one-liner (using Object destructuring)
 to initialize (only) two variables, firstName and email.
*/

const { firstName, email } = Person;

/*
6) Use array destructuring and the spread syntax to create 
a few one-lines that will print out (use console.log) 
these values (in the given order):
["Peter", "Jan", "Janne", "Sarah"]
And this: 
["Peter", "Jan", "Kurt", "Helle", "Janne", "Sarah", "Tina"]
*/
console.log([...males, ...females]);
console.log([...males, firstName, "Helle", ...females, "Tina"]);
/* RESULTS FROM DEVELOPER CONSOLE CHROME:
(4) ["Peter", "Jan", "Janne", "Sarah"]
App2.js:19 (7) ["Peter", "Jan", "Kurt", "Helle", "Janne", "Sarah", "Tina"]
*/

export default function App2() {
  return (
    <div>
      <h3>Exercise 2</h3>
      {
        // 4) Add a new <p>-tag (in App.js) , that prints firstName, email.
      }
      <p>
        firstName: {firstName} and email: {email}
      </p>
    </div>
  );
}

/*
[RED] 7) Use Object Destructuring and the spread syntax, 
to create a new object personV2 from person, 
but with two new fields: phone and friends. 
The last one must be initialized with the values from males and females 
(must be done as a simple one-liner).
Console log the value, which should print something similar to this:
{
email: "kurt@wonnegut.dk"
firstName: "Kurt"
friends: ["Peter", "Jan", "Janne", "Sarah"]
gender: "Male"
lastName: "Wonnegut"
phone: 123456
}
*/
const personV2 = {
  email,
  firstName,
  friends: [...males, ...females],
  gender: Person.gender,
  lastName: Person.lastName,
  phone: 123456
};
console.log(personV2);
/* RESULT FROM DEVELOPER CONSOLE IN CHROME:
{email: "kurt@wonnegut.dk", firstName: "Kurt", friends: Array(4), gender: "Male", lastName: "Wonnegut", …}
email: "kurt@wonnegut.dk"
firstName: "Kurt"
friends: (4) ["Peter", "Jan", "Janne", "Sarah"]
gender: "Male"
lastName: "Wonnegut"
phone: 123456
*/
// Attempt:
const personv3 = {
  Person,
  friends: [...males, ...females],
  phone: 123456
};
console.log(personv3);
// This v3 was wrong, V2 is right.
/* results from log:
{Person: {…}, friends: Array(4), phone: 123456}
Person:
email: "kurt@wonnegut.dk"
firstName: "Kurt"
gender: "Male"
lastName: "Wonnegut"
__proto__: Object
friends: (4) ["Peter", "Jan", "Janne", "Sarah"]
phone: 123456
__proto__: Object
*/
