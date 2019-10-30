import React, { useState, useEffect } from "react";

export default function AllPersons(props) {
  return (
    <React.Fragment>
      <p>All Persons - Complete me</p>
      <table>
        <tableHead>
          <tr>
            <th>Name</th>
          </tr>
        </tableHead>
        <tableBody>
          <TableRows persons={props.persons} />
        </tableBody>
      </table>
    </React.Fragment>
  );
}

function TableRows(props) {
  const persons = props.persons;
  const rows = persons.map(person => {
    return (
      <tr>
        <td>{person.name}</td>
      </tr>
    );
  });
  return <React.Fragment>{rows}</React.Fragment>;
}
