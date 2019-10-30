import React, { useState, useEffect } from "react";
import "./App.css";
import uuid from "uuid/v1";
/**
 * b) Add the necessary components to render a web-site as sketched in this figure..
 */
function App() {
  const initialValue = [
    {
      name: "Malte",
      id: uuid()
    },
    {
      name: "Asger",
      id: uuid()
    },
    {
      name: "Camilla",
      id: uuid()
    },
    {
      name: "Rùni",
      id: uuid()
    }
  ];

  return (
    <div className="App">
      <h1>State Lift Demo</h1>
      <br />
      <br />
      <h2>Total Persons: {persons.length}</h2>
      <p>Place content here</p>
    </div>
  );
}

export default App;
