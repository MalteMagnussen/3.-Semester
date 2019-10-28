import React from "react";
import PropTypes from "prop-types";
import { names } from "./file2";
/* 
3 Composing Components
The next two exercises focus on props and how to pass props into components. 
So make sure to read about props first, they are one of the top-5 MOST IMPORTANT PARTS to understand in React.
Props-1
a) In the src folder, add a new file App3.js, and import React in the first line.
b) Copy the two files below into this file (remember to export your component):
*/
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

/*
b) In App3.js, add a new functional Component (below the Welcome Component) called WelcomePerson.
This component should take in a props param, but it should be a full person object 
(from the list created in step-a) and it should render firstName, lastName and email for this person. 
*/
function WelcomePerson(props) {
  // Destructuring person for ease of use
  // Taking person from props
  const person = props.person;
  // Taking elements from person
  const { firstName, lastName, gender, email, phone } = person;

  return (
    <div>
      <p>
        Person: <br></br>
        First Name: {firstName} <br></br>
        Last Name: {lastName} <br></br>
        Email: {email} <br></br>
      </p>
    </div>
  );
}
/*
d)  Add Type Checking, using Proptypes, 
to the Welcome component so that it only accepts objects with 
as a minimum (required) the properties firstName, lastName and email, 
which all must be of type String. 
That is, all the objects given in step a) are valid, and so are these (friends will not be rendered):
*/
const validPersons = [
  { firstName: "Kurt", lastName: "Wonnegut", email: "k@wonnegut.dk" },
  {
    firstName: "Kurt",
    lastName: "Wonnegut",
    email: "k@wonnegut.dk",
    friends: ["Kim", "Janne"]
  }
];
/*
But these should report an error (missing required values)
*/
const errorPersons = [
  { firstName: "Jane", email: "j@wonnegut.dk", phone: "12345" },
  { firstName: "Jane" }
];

WelcomePerson.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

/*
d) Add Type Checking, using Proptypes, to the Welcome component so that it only accepts a String value for name, 
and also ensures that a value always is supplied, that is, these two uses should report an error:
<Welcome />
<Welcome name={45} />
*/
Welcome.propTypes = {
  name: PropTypes.string
};

/*
e) Handle list of names of arbitrary sizes 
In the example above you your “list” could only handle exactly three persons.
Use our old friend map to replace the three hardcoded lines to something similar to this (fill in the few missing parts):
{names.map((      )=><WelcomePerson        />)}
This will probably provide a nasty warning in the console. Read about keys here (a topic for tomorrow) to solve this problem
*/
function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      <WelcomePerson person={names[0]} />
      <WelcomePerson person={names[1]} />
      <WelcomePerson person={names[2]} />
      <br></br>
      Map:
      <br></br>
      <ul>
        {names.map((p, index) => (
          <li key={index}>
            <WelcomePerson person={p} />
          </li>
        ))}
      </ul>
      <br></br>
      Valid Persons:
      <br></br>
      <WelcomePerson person={validPersons[0]} />
      <WelcomePerson person={validPersons[1]} />
      <br></br>
      Error Persons:
      <br></br>
      <WelcomePerson person={errorPersons[0]} />
      <WelcomePerson person={errorPersons[1]} />
      {/*<Welcome />
      <Welcome name={45} />*/}
    </div>
  );
  /*
  index.js:1375 Warning: Failed prop type: Invalid prop `name` of type `number` supplied to `Welcome`, expected `string`.
    in Welcome (at App3.js:32)
  */
}
// Make sure you understand why the parenthesis is needed after the return statement in the App component,
// and not in the Welcome Component.

// In Welcome component, it is a 1-line return.
// In App component it is a 5-line return. You can only do 1line returns without ().
export default App;
