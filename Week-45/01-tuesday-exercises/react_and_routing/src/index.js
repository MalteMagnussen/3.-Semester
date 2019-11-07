import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import bookFactory from "./bookFactory";
import coinFactory from "./coinFactory";
import { BrowserRouter as Router } from "react-router-dom";

const AppWithRouter = () => {
  return (
    <Router>
      <App bookFactory={bookFactory} coinFactory={coinFactory} />
    </Router>
  );
};
ReactDOM.render(<AppWithRouter />, document.getElementById("root"));
