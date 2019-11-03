import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

// Let's create a dummy component
/*
const NewRoute = () => {
  return (
    <div>
      <p>New Route</p>
    </div>
  );
};
*/

function App() {
  return (
    <BrowserRouter>
      {
        //} <Route path="/new" component={NewRoute} />
      }
      {
        // A BrowserRouter may only have 1 child element
      }
      <div>
        <Route path="/" component={Home} exact />{" "}
        {/* Exact is so that Home doesn't show up on all other pages */}
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={Error} />
        {/* This is the 404 page - Notice no Path */}
      </div>
    </BrowserRouter>
  );
}

export default App;
