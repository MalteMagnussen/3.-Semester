//Add imports here
import React from "react";

const URL = "http://localhost:8080/Threads/api/binance";

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

function coinFactory() {
  const getCoins = coins => {
    return fetch(URL, makeOptions("POST", { coins })).then(handleHttpErrors);
  };

  return {
    getCoins
  };
}

export default coinFactory();
