import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const redborder = {
  border: "2px solid red",
  width: "400px",
  margin: "5px"
};

const parentborder = {
  border: "2px solid green",
  width: "414px"
};

const blueborder = {
  border: "2px solid blue",
  width: "400px",
  margin: "5px"
};

function App(props) {
  // Single source of truth
  const [name, setName] = useState("");

  return (
    <div style={parentborder}>
      <h2>Parent componet holding the state</h2>
      <InputComp setName={setName} name={name}></InputComp>
      <ShowComp name={name}></ShowComp>
    </div>
  );
}

const InputComp = props => {
  // Only use name to set new useState
  // Only use setName in UseEffect
  const { name, setName } = props;
  // Make new to use here in handleChange and as value on input fields
  const [newName, setNewName] = useState(name);

  const handleChange = event => {
    const name = event.target.value;
    setNewName(name);
  };

  useEffect(() => {
    setName(newName);
  }, [newName]);

  return (
    <div style={redborder}>
      <input
        type="text"
        onChange={handleChange}
        value={newName}
        placeholder="write input to show in sibling component"
      />
    </div>
  );
};

const ShowComp = props => {
  // Only displays name
  return (
    <div style={blueborder}>
      Show content:
      {props.name}
    </div>
  );
};

export default App;
