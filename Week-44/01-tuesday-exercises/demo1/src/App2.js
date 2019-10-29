import React, { useState, useEffect } from "react";

/* 
2) Create a simple React Component that can display time, and update the value every second as sketched below:
b) Make sure that the required timer, is not started until the Component is mounted (useEffect)
c) [YELLOW] Make sure that the timer is disabled when the component is unmounted (the user leaves the page)
Hint: Use the effect hook with a cleanup function
*/

export default function App2() {
  const [time, setTime] = useState(Time());
  const [run, setRun] = useState(false);
  //setInterval(() => {},1000);
  useEffect(() => {
    if (run === false) {
      return;
    }
    setInterval(() => {
      setTime(Time());
    }, 1000);
  }, [run]);

  return (
    <div>
      <h3>Exercise 2</h3>
      Time is: {time}
      <br></br>
      <button onClick={() => setRun(!run)}>Time</button>
    </div>
  );
}

function Time() {
  return new Date().toLocaleString();
}
