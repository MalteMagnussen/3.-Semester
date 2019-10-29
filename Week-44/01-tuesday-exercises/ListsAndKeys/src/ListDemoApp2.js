// a) Add a new file ListDemoApp2.js, and paste in the code below:
import React, { useState } from "react";

/*
b) Change MemberTable to render a table of members passed in via props.
c) Add the missing part in MemberDemo to use MemberTable and pass down members to it
*/
function TableRow(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.age}</td>
    </tr>
  );
}
function MemberTable({ members }) {
  const tableItems = members.map(member => (
    <TableRow key={member.id} name={member.name} age={member.age} />
  ));
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>{tableItems}</tbody>
    </table>
  );
}

function MemberDemo(props) {
  return (
    <div>
      <h4>All Members</h4>
      <MemberTable members={props.members} />
    </div>
  );
}

export default function App() {
  const initialMembers = [
    { name: "Peter", age: 18, id: 1 },
    { name: "Jan", age: 35, id: 2 },
    { name: "Janne", age: 25, id: 3 },
    { name: "Martin", age: 22, id: 4 }
  ];
  const [members, setMembers] = useState(initialMembers);

  return <MemberDemo members={members} />;
}
