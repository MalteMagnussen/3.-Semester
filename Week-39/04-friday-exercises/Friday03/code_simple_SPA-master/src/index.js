// import 'bootstrap/dist/css/bootstrap.css'

var URI = 'http://uinames.com/api/';
var table = document.getElementById('tblbody');
var submitbutton = document.getElementById('btnsend');
var sqlbutton = document.getElementById('btnsql');
var sql = document.getElementById("sql");
var dataStore = [];

function getErrorTable(data) {
    return "<tr><td>" + data.error + "</td></tr>";
}

function generateTable(data) {
    var tableData = [];
    //Body
    data.map(function (value) {
        tableData.push('<tr>');
        tableData.push('<td>' + value.name + '</td>');
        tableData.push('<td>' + value.surname + '</td>');
        tableData.push('<td>' + value.gender + '</td>');
        tableData.push('</tr>');
    })

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
                err.fullError.then(e => sql.innerHTML = e.error)
            }
            else { console.log("Network error"); }
        });
}

function personTable(data) {
    dataStore += data;
    table.innerHTML = generateTable(data);
}

function populateTable() {

    var gender = document.getElementById('gender').value;
    var region = document.getElementById('region').value;
    var amount = document.getElementById('amount').value;
    var url = "";
    if (amount > 0) {
        url += "?amount=" + amount;
    }
    if (gender !== "both") {
        url += "?gender=" + gender;
    }
    if (region !== "all") {
        url += "?region=" + region;
    }

    errorHandlingFetch(URI + url, personTable);
}



submitbutton.addEventListener("click", populateTable);