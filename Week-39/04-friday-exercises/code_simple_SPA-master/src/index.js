import 'bootstrap/dist/css/bootstrap.css'

var URI = 'https://www.maltemagnussen.com/countryRestProxy/api/countryProxy/';
var content = document.getElementById("content");

function generateTable(data) {
    var tableData = [];
    //Headers
    tableData.push('<table class="table"><tr>');
    for (var key in data) {
        tableData.push('<th scope="col">' + key + '</th>');
    }
    tableData.push('</tr>');

    //Body
    tableData.push('<tr>');
    for (var key in data) {
        tableData.push('<td>' + data[key] + '</td>');
    }
    tableData.push('</tr>');
    tableData.push("</table>");
    return tableData.join("");
}

function getErrorTable(data) {
    var tableData = ["<tr><td>" + data.status + "</td><td>" + data.message + "</td></tr>"];
    tableData.unshift('<table class="table"><tr><th scope="col">Status</th><th scope="col">Message</th></tr>');
    tableData.push("</table>");
    return tableData.join("");
}

var errorHandlingFetch = function (URL, callback) {
    function handleHttpErrors(res) {
        if (!res.ok) {
            return Promise.reject({ status: res.status, fullError: res.json() })
        }
        return res.json();
    }

    fetch(URL)
        .then(handleHttpErrors)
        .then(data => callback(data))
        .catch(err => {
            if (err.status) {
                err.fullError.then(e => console.log(e.detail))
                err.fullError.then(e => content.innerHTML = getErrorTable(e))
            }
            else { console.log("Network error"); }
        });
}

// GET THE COUNTRY 
document.getElementById("svg2").addEventListener("click", function (e) {
    var id = e.target.id;
    var URL = URI + id;

    function countryData(data) {
        if (!data.status) {
            var info = {};
            info.Name = data[0].name;
            info.Population = data[0].population;
            info.Area = data[0].area;
            info.Borders = data[0].borders;
            content.innerHTML = generateTable(info);
        } else {
            content.innerHTML = getErrorTable(data);
        }
    }

    errorHandlingFetch(URL, countryData);

})

