import React, { useState, useEffect } from "react";

/* 
2)   Create a simple React Component that can display time, and update the value every second as sketched below:
b) Make sure that the required timer, is not started until the Component is mounted (useEffect)
c) Make sure that the timer is disabled when the component is unmounted (the user leaves the page)
Hint: Use the effect hook with a cleanup function
*/

export default function App2() {
  const [time, setTime] = useState(Time());
  //setInterval(() => {},1000);
  useEffect(() => {
    setInterval(() => {
      setTime(Time());
    }, 1000);
  });

  return (
    <div>
      <h3>Exercise 2</h3>
      {time}
    </div>
  );
}

function Time() {
  return new Date().toLocaleString();
}
