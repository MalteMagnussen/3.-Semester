import React, { useState, useEffect } from "react";

export default function NewPerson(props) {
  const { addPerson } = props;

  const [person, setPerson] = useState(props.newPerson);

  const handleChange = event => {
    const target = event.target;
    const id = target.id;
    const value = target.value;
    setPerson({ ...person, [id]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (person.name === "") return;
    addPerson(person);
    setPerson({ name: "", id: "" });
  };

  const title = person.id === "" ? "New" : "Edit";
  return (
    <React.Fragment>
      <p>{title} Person</p>
      <form>
        <label>
          Name
          <br />
          <input
            type="text"
            value={person.name}
            onChange={handleChange}
            id="name"
          />
          <br />
          <button onClick={handleSubmit}>Save</button>
        </label>
      </form>
      <p>{JSON.stringify(person)}</p>
    </React.Fragment>
  );
}
