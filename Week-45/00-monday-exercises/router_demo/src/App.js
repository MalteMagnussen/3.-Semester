import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

// Let's create a dummy component
const NewRoute = () => {
  return (
    <div>
      <p>New Route</p>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Route path="/new" component={NewRoute} />
    </BrowserRouter>
  );
}

export default App;
