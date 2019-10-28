/*
2 Object and Array Destructuring 
Skim this article first for a "dead Simple intro to Destructuring JavaScript Objects"
1) In the src folder, create a new JavaScript-file file2.js, 
and export an object as sketched below
*/

export default {
  firstName: "Kurt",
  lastName: "Wonnegut",
  gender: "Male",
  email: "kurt@wonnegut.dk"
};

/*
5) Add these lines to file2.js
*/
export const males = ["Peter", "Jan"];
export const females = ["Janne", "Sarah"];

/*
Props-2
Let's make the example above, a bit more interesting.
a) First, open file2.js and add this export to the file:
*/
export const names = [
  {
    firstName: "Kurt",
    lastName: "Wonnegut",
    gender: "Male",
    email: "k@wonnegut.dk",
    phone: "12345"
  },
  {
    firstName: "Jane",
    lastName: "Wonnegut",
    gender: "female",
    email: "j@wonnegut.dk",
    phone: "12345"
  },
  {
    firstName: "ib",
    lastName: "Wonnegut",
    gender: "Male",
    email: "i@wonnegut.dk",
    phone: "12345"
  }
];
