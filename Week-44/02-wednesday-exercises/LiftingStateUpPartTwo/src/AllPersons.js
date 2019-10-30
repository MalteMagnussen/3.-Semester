import React from "react";

const AllPersons = ({ persons, deletePerson, editPerson }) => {
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
          {persons.map(person => (
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
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};
export default AllPersons;
