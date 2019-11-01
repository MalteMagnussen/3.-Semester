import React, { useState, useEffect } from "react";
import CountryTable from "./CountryTable";
import "./App.css";

const App = props => {
  const factory = props.factory;
  const getLabels = factory.getLabels;
  const getCountries = factory.getCountries;

  const [labels, setLabels] = useState([]);
  const [countries, setCountries] = useState([]);

  /**
   * 2) Use your updated countryFactory and
   * import it into the  relevant control and
   * make it available via props in the CountryTable Control
   */

  const updateCountries = () => {
    getCountries().then(data => {
      setCountries(data);
    });
  };

  const updateLabels = () => {
    getLabels().then(data => {
      setLabels(data);
    });
  };

  useEffect(() => {
    updateLabels();
    updateCountries();
    //This would be a great place to fetch data (all persons) from the backend
    /**
     * 5) Use JavaScript’s setInterval function to repeatedly update the counties array with fresh data from the server
     * (while developing, fetch every 3 seconds to see changes). Make sure to do this in a way, that updates your UI.
     */
    const timer = setInterval(() => {
      updateLabels();
      updateCountries();
    }, 3000);

    // Clean-up
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <div className="App-header">
        <h2>React, State, Fetch</h2>
      </div>
      <div className="App-intro">
        <p>
          Your initial task is to fetch data from the server (see exercise for
          how to start it), and create a table below, with these data
        </p>
        <CountryTable labels={labels} countries={countries} />
      </div>
    </div>
  );
};

export default App;
