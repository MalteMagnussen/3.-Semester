import 'bootstrap/dist/css/bootstrap.css'
import "isomorphic-fetch"

var myFetch = function (URL) {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            document.getElementById("myDiv").innerHTML = data.joke;
        })
}

var jokeURL = 'https://studypoints.info/jokes/api/jokes/period/hour';

var getJoke = function () {
    return myFetch(jokeURL);
}

document.getElementById("myButton").addEventListener("click", getJoke);

// 7) Change the functionality to get a new quote every hour. (Hint: use setInterval() )

// I don't understand this task. Like, if you click the button, and the JSON endpoint has a new joke, then it shows the new joke.
// The joke has changed while I was working on this. Like, it takes a joke from the endpoint.
// And the endpoint changes jokes by itself every hour. I dont understand what they want here. 

// Use developer-tools in your browser and it’s network options to monitor the AJAX-request. 
// Explain why, what you did above, is even possible, 
// when we know the Same Origin Policy governs when/where AJAX-request can go

// Imma be real with you. 
// I have no fucking clue what "Same Origin Policy" even is. 
// And I've read several webpages about it so far. 
// Read about it here: https://en.wikipedia.org/wiki/Same-origin_policy
// It is something about security. 