import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useParams,
  useRouteMatch,
  Link,
  Prompt
} from "react-router-dom";

const Currency = ({ coinFactory }) => {
  const match = useRouteMatch();
  const getCoins = coinFactory.getCoins;

  const coinsInitialValue = [];
  const [coins, setCoins] = useState(coinsInitialValue);
  const [coin, setCoin] = useState("");
  const [prices, setPrices] = useState([]);

  const handleNewCoin = event => {
    event.preventDefault();
    setCoins(coins.push({ ...coin }));
    setCoin("");
  };

  const handleChange = event => {
    const target = event.target;
    const value = target.value;
    setCoin(value);
  };

  const handleSubmit = event => {
    getCoins({ ...coins }).then(res => setPrices(res));
  };

  return (
    <React.Fragment>
      <h4>Insert a Coin Pair</h4>
      <p>
        Coin Pair examples:
        ["ADATUSD","ATOMTUSD","BATTUSD","BNBTUSD","BTCTUSD","EOSTUSD","ETCTUSD","ETHTUSD","LTCTUSD","NEOTUSD","TRXTUSD","XRPTUSD"]
      </p>

      <form>
        <p>One at a time</p>
        <input
          id="coin"
          type="text"
          placeholder="Input Coin Pairs"
          onChange={handleChange}
          value={coin}
        ></input>
        <button onClick={handleNewCoin}>Add Coin to List</button>
      </form>
      <br></br>
      <p>Coins:</p>
      <ul>
        {coins.map((coin, index) => (
          <li key={index}>{coin}</li>
        ))}
      </ul>
      <br></br>
      <button onClick={handleSubmit}>Find Coin Prices</button>
      <br />
      <p>List of prices of coins you want to search for:</p>
      <ul>
        {prices.map((price, index) => (
          <li key={index}>{price.price}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Currency;
