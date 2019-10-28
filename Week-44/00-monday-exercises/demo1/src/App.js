import React from "react";
import "./App.css";

/* 
What you export as default (only one value pr. File) must be imported like this:
import upper from "./file1";
 
What you export as named (non-default) exports will be exported as one single object 
(containing the three properties text1, text2, text3) 
and must be included with the Object Destructuring syntax, see below:
 
import {text1,text2, text3} from "./file1";
 
You can import it all, as sketched below: 
*/

import upper, { text1, text2, text3 } from "./file1";

/* 
b) Import the three strings, and the function in App.js, 
and add four <p> tags that will print the variables 
(remember the default export is a function, so call it with a default value like:
*/
function App() {
  return (
    <div className="App">
      <p>{upper("please uppercase me")}</p>
      <p>{upper(text1)}</p>
      <p>{upper(text2)}</p>
      <p>{upper(text3)}</p>
    </div>
  );
}

export default App;
