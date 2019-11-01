import React, { useState, useEffect } from "react";
import CountryTable from "./CountryTable";
import "./App.css";
import ReactDOM from "react-dom";
import Paginator from "react-hooks-paginator";

const App = props => {
  const factory = props.factory;
  const getLabels = factory.getLabels;
  const getCountries = factory.getCountries;

  const [labels, setLabels] = useState([]);

  /**
   * Pagination
   */
  const pageLimit = 5;

  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    setCurrentData(data.slice(offset, offset + pageLimit));
  }, [offset, data]);

  /**
   * 2) Use your updated countryFactory and
   * import it into the  relevant control and
   * make it available via props in the CountryTable Control
   */

  const updateCountries = () => {
    getCountries().then(data => {
      setData(data);
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
      console.log("Fetching Countries.");
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
        <CountryTable labels={labels} countries={currentData} />
        <div>
          <Paginator
            totalRecords={data.length}
            pageLimit={pageLimit}
            pageNeighbours={1}
            setOffset={setOffset}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
