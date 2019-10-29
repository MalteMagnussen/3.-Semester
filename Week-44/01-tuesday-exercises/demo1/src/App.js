import React, { useState } from "react";
import "./App.css";

/*
1) Create a simple React component using the useState hook as described below

a) It should have a button which when pressed should increment a count value, 
initially by one, and print the result in the component.
*/

function App() {
  // State variable count
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p>The button has been clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>
        Click me to increment by one
      </button>
      <br></br>
      {/*b) Add a new button to the Component which when pressed, should decrement the count value*/}
      <button onClick={() => setCount(count - 1)}>
        Click me to decrement by one
      </button>
    </div>
  );
}

export default App;
