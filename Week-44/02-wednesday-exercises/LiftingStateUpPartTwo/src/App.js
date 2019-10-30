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
  const [newPerson, setPerson] = useState({ name: "", id: uuid() });

  return (
    <div className="App">
      <h1>State Lift Demo</h1>
      <h2>Total Persons: {persons.length}</h2>
      <p>{JSON.stringify(persons)}</p>
      <div className="row">
        <div className="col-6">
          <AllPersons persons={persons} />
        </div>
        <div className="col-6">
          <NewPerson
            setPersons={setPersons}
            newPerson={newPerson}
            setPerson={setPerson}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
