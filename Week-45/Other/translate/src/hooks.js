import React, { useState, useEffect } from "react";

export default Translated = props => {
  const [name, setName] = useState("");
  useEffect(event => {
    const name = event.target.value;
    setName(name);
  });

  return (
    <div style={parentborder}>
      <h2>Parent componet holding the state</h2>
      <InputComp update={this.update}></InputComp>
      <ShowComp name={this.state.name}></ShowComp>
    </div>
  );
};

const InputComp = props => {
  return (
    <div style={redborder}>
      <input
        type="text"
        onChange={props.update}
        placeholder="write input to show in sibling component"
      />
    </div>
  );
};

const ShowComp = props => {
  return (
    <div style={blueborder}>
      Show content:
      {props.name}
    </div>
  );
};
