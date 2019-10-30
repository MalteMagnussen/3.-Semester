import React, { useState, useEffect } from "react";

export default function NewPerson(props) {
  const { addPerson, newPerson } = props;

  const [person, setPerson] = useState(newPerson);

  const handleChange = event => {
    const target = event.target;
    const id = target.id;
    const value = target.value;
    setPerson({ ...person, [id]: value });
  };

  const handleSubmit = event => {
    if (person.name === "") return;
    addPerson(person);
    setPerson({ name: "", id: "" });
    event.preventDefault();
  };

  useEffect(
    () =>
      setPerson({
        ...newPerson
      }),
    [newPerson]
  );

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
