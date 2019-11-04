// /**
//  * Created by tha on 23-10-2017.
//  */
// import React from "react";

// const redborder = {
//   border: "2px solid red",
//   width: "400px",
//   margin: "5px"
// };

// const parentborder = {
//   border: "2px solid green",
//   width: "414px"
// };

// const blueborder = {
//   border: "2px solid blue",
//   width: "400px",
//   margin: "5px"
// };

// export default class StateDemo extends React.Component {
//   constructor() {
//     super();
//     this.state = { name: "" };
//   }
//   update = event => {
//     const name = event.target.value;
//     this.setState({ name: name });
//   };
//   render() {
//     return (
//       <div style={parentborder}>
//         <h2>Parent componet holding the state</h2>
//         <InputComp update={this.update}></InputComp>
//         <ShowComp name={this.state.name}></ShowComp>
//       </div>
//     );
//   }
// }

// const InputComp = props => {
//   return (
//     <div style={redborder}>
//       <input
//         type="text"
//         onChange={props.update}
//         placeholder="write input to show in sibling component"
//       />
//     </div>
//   );
// };

// const ShowComp = props => {
//   return (
//     <div style={blueborder}>
//       Show content:
//       {props.name}
//     </div>
//   );
// };
