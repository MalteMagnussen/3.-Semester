import 'bootstrap/dist/css/bootstrap.css'
import "isomorphic-fetch"

var myFetch = function (URL) {
    fetch(URL)
        .then(response => {
            return response.json()
        })
        .then(data => {
            return data;
        })
}

var jokeURL = 'https://studypoints.info/jokes/api/jokes/period/hour';

var addQuote = function () {
    document.getElementById("myDiv").innerHTML = myFetch(jokeURL);
}

document.getElementById("myButton").addEventListener("click", addQuote);
