//Add imports here
import React from "react";

const labelsURL = "http://localhost:3333/labels";
const countriesURL = "http://localhost:3333/countries";

//The two methods below, are the utility-methods introduced here (use them if you like):
//https://docs.google.com/document/d/1hF9P65v_AJKCjol_gFkm3oZ1eVTuOKc15V6pcb3iFa8/edit?usp=sharing

function makeOptions(method, body) {
  var opts = {
    method: method,
    headers: {
      "Content-type": "application/json"
    }
  };
  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
}

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

// 1) Complete the countryFactory class to fetch data  (using fetch), from the REST-API given above

const countryFacade = () => {
  const getLabels = () => {
    //TODO: Get Labels from server
    // This returns a promise
    return fetch(labelsURL).then(handleHttpErrors);
  };

  const getCountries = () => {
    //TODO: Get Countries from server
    // This returns a promise
    return fetch(countriesURL).then(handleHttpErrors);
  };
  return {
    getLabels,
    getCountries
  };
};

export default countryFacade();
