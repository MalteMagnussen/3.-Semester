import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//Create a new file App2.js (and App3.js ....)
//In index.js, delete EVERYTHING BELOW the import of App and use the strategy below to switch between the smaller exercises
//NOTE: THIS IS NOT THE WAY TO DO THINGS AFTER THE FIRST 2-3 DAYS

import App2 from "./App2";
import App3 from "./App3";

let app = <App initialValue={10} increment={2} />;

const DontUseMeForReal = () => {
  return (
    <div className="App" onClick={handleSelect}>
      <a href="/" className="x" id="app1">
        ex1
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app2">
        ex2
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app3">
        ex3
      </a>{" "}
      &nbsp;
      {/* Add as many as you have exercises, but remember className="x" */}
      {app}
    </div>
  );
};

function handleSelect(event) {
  event.preventDefault();
  if (event.target.className !== "x") {
    return;
  }
  const id = event.target.id;
  switch (id) {
    case "app1":
      app = <App initialValue={10} increment={2} />;
      break;
    case "app2":
      app = <App2 />;
      break;
    case "app3":
      app = <App3 />;
      break;
  }
  ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));
