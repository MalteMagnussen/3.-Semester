import React, { useState, useEffect } from "react";
import "./App.css";
import uuid from "uuid/v1";
import NewPerson from "./NewPerson";
import AllPersons from "./AllPersons";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
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

  const [persons, setPersons] = useState(initialValue);
  const [newPerson, setNewPerson] = useState({ name: "", id: "" });

  const addPerson = person => {
    const id = person.id;
    // If id === "" then it is a new person
    if (id === "") {
      person.id = uuid();
      persons.push(person);
    } else {
      // if id !== "" then it is a editPerson
      // Find person
      let personToEdit = persons.find(p => p.id === person.id);
      // Edit person with new values
      personToEdit.name = person.name;
    }
    setPersons([...persons]);
    setNewPerson({ name: "", id: "" });
  };

  const deletePerson = id => {
    setPersons(
      persons.filter(person => {
        return person.id !== id;
      })
    );
  };

  const editPerson = id => {
    const editPerson = persons.find(person => {
      return person.id === id;
    });
    setNewPerson(editPerson);
  };

  return (
    <div className="App">
      <h1>State Lift Demo</h1>
      <h2>Total Persons: {persons.length}</h2>
      <p>{JSON.stringify(persons)}</p>
      <div className="row">
        <div className="col-6">
          <AllPersons
            persons={persons}
            deletePerson={deletePerson}
            editPerson={editPerson}
          />
        </div>
        <div className="col-6">
          <NewPerson addPerson={addPerson} newPerson={newPerson} />
        </div>
      </div>
    </div>
  );
}

export default App;
