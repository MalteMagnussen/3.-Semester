import 'bootstrap/dist/css/bootstrap.css'

var fetchJoke = function () {

    var returnObj;

    fetch('https://studypoints.info/jokes/api/jokes/period/hour')
    .then(response => {
      return response.json()
    })
    .then(data => {
      returnObj = JSON.parse(data);
    })

    return returnObj.joke;
}

var addQuote = function () {
    document.getElementById("myDiv").innerHTML = fetchJoke();
}

var myButton = document.getElementById("myButton");

myButton.addEventListener("click", addQuote);
