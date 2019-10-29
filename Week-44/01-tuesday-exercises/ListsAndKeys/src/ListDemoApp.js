// a) Create a new JavaScript file ListDemoApp.js and paste in the code below:

import React, { useState, useEffect } from "react";

/*
c) Change NumberList to return an unordered list which should render the numbers like this 
*/
/*
d) Keys (Important)
*/
/*
[YELLOW] e) Decompose NumberList into several components.
*/
function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList({ numbers }) {
  console.log("--NUMBERS -->", numbers);
  // const listItems = numbers.map((n, index) => <li key={index}>{n}</li>);
  const listItems = numbers.map(number => (
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()} value={number} />
  ));
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}

/*
[YELLOW] f) Implement a new Component NumberTable (just below the NumberList control from above).
This control should accept a number array, similar to NumberList in its props, 
but instead of a UL, create a table with a row for each number. 
*/
function NumberTable({ numbers }) {
  console.log("numbertable numbers: ", numbers);
  const tableItems = numbers.map(number => (
    <NumberRow key={number.toString()} number={number} />
  ));
  return (
    <div>
      <h4>Table:</h4>
      <table>
        <tbody>{tableItems}</tbody>
      </table>
    </div>
  );
}
function NumberRow(props) {
  return (
    <tr>
      <td>{props.number}</td>
    </tr>
  );
}

function ListDemo(props) {
  console.log(props.numbers);
  return (
    <div>
      <h2>All numbers passed in via props</h2>
      {
        //<NumberList numbers={props.numbers} />
      }
      <NumberTable numbers={props.numbers} />
    </div>
  );
}
export default function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4]);

  /*
  Hint: Adding a new value to the numbers array will not force a re-render. 
  You need to replace the numbers property in state, 
  with a new array each time you add a new number 
  (why is this not a problem when you are using keys?)

  It is not a problem because of the virtual DOM. When we have keys, 
  it knows to only re-render the domnode that changed.
  */
  useEffect(() => {
    const timer = setInterval(() => {
      setNumbers([...numbers, numbers.length + 1]);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="App">
      <ListDemo numbers={numbers} />
    </div>
  );
}
