import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

var makeList = function () {
    const allJokes = jokes.getJokes().map(joke => "<li>" + joke + "</li>");
    document.getElementById("jokes").innerHTML = allJokes.join("");
}

makeList();

// In the public folder index.html file, add an input field,  
// a button with the text get joke, 
// and a p-tag to hold the joke you will find. 
// Investigate the start code and implement functionality 
// (in index.js) to find a joke, given it’s id.
document.getElementById("jokeButton").onclick =
    function () {
        var jokeID = document.getElementById("jokeInput").value;
        var joke = jokes.getJokeById(jokeID);
        document.getElementById("selectedJoke").innerHTML = joke;
    }

// Still only in the public folders index.html and in index.js, 
// add the necessary changes to add new jokes to the internal joke-facade.

document.getElementById("addJokeButton").onclick =
    function () {
        var newJoke = document.getElementById("jokeInput").value;
        jokes.addJoke(newJoke);
        document.getElementById("selectedJoke").innerHTML = "Added new Joke: " + newJoke;
        makeList();
    }


