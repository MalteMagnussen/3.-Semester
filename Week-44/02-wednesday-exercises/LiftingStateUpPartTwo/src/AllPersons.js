import React, { useState, useEffect } from "react";

export default function AllPersons(props) {
  const { persons, deletePerson, editPerson } = props;

  return (
    <React.Fragment>
      <p>All Persons - Complete me</p>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <TableRows
            persons={persons}
            deletePerson={deletePerson}
            editPerson={editPerson}
          />
        </tbody>
      </table>
    </React.Fragment>
  );
}

function TableRows(props) {
  const { persons, deletePerson, editPerson } = props;
  const rows = persons.map(person => {
    return (
      <tr key={person.id}>
        <td>{person.name}</td>
        <td>{person.id}</td>
        <td>
          <a
            href="#"
            onClick={event => {
              event.preventDefault();
              deletePerson(person.id);
            }}
          >
            delete
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              editPerson(person.id);
            }}
          >
            edit
          </a>
        </td>
      </tr>
    );
  });
  return <React.Fragment>{rows}</React.Fragment>;
}
