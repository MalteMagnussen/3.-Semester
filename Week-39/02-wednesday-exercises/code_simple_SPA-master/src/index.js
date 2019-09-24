import 'bootstrap/dist/css/bootstrap.css'
import "isomorphic-fetch"

var myFetch = function (URL, element) {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            element = data.joke;
        })
}

var jokeURL = 'https://studypoints.info/jokes/api/jokes/period/hour';

var getJoke = function () {
    return myFetch(jokeURL, document.getElementById("myDiv").innerHTML);
}

document.getElementById("myButton").addEventListener("click", getJoke);
