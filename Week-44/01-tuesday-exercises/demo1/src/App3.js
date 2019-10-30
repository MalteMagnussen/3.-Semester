import React, { useState, useEffect } from "react";

/*
3)
Create a simple React Component that can fetch and display 
a Chuck Norris joke fetched from this API: https://api.chucknorris.io/ 
whenever a button “Get ChuckNorris” is clicked.

a) Add a feature, so that every 10 second 
(don’t decrease this number, the risk is that they will block our IP) 
a joke is fetched from this API: https://icanhazdadjoke.com/api.

b) Make sure that you don’t fetch a new Chuck Norris Joke also every 10 seconds. 
This should only happen on a click on the button, rated: Under 17 requires accompanying parent or adult guardian ;-)

c) Ensure that the required timer for the dad jokes is cancelled when the user leaves the page.
*/

export default function App3() {
  const [chuckNorris, setChuckNorris] = useState("");
  const [dadJoke, setDadJoke] = useState("");

  const [chuckSelector, setChuckSelector] = useState(false);

  useEffect(() => {
    function fetchChuckNorris() {
      console.log("Fetching Chuck Norris");
      fetch("https://api.chucknorris.io/jokes/random")
        .then(res => res.json())
        .then(data => setChuckNorris(data.value))
        .catch(err => console.log(err));
    }
    fetchChuckNorris();
  }, [chuckSelector]);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Fetching Dad Joke");
      fetch("https://icanhazdadjoke.com/slack", {
        headers: {
          Accept: "application/json"
        }
      })
        .then(res => res.json())
        .then(data => setDadJoke(data.attachments[0].text))
        .catch(err => console.log(err));
    }, 10000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <h1>App3</h1>
      <button onClick={() => setChuckSelector(!chuckSelector)}>
        Get ChuckNorris
      </button>
      <p>Chuck Norris Joke: {chuckNorris}</p>
      <p>Dad Joke: {dadJoke}</p>
    </div>
  );
}
