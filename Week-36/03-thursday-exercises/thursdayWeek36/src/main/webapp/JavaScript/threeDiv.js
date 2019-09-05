/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// 1
function divcolor() {
    let divarray = Array.from(document.body.getElementsByTagName('div'));
    divarray.forEach(element => {
        element.style.backgroundColor = "red";
    });
}
divcolor();

// 2
function colorChanger() {
    document.getElementById('myDiv1').style.backgroundColor = "blue";
    document.getElementById('myDiv2').style.backgroundColor = "yellow";
    document.getElementById('myDiv3').style.backgroundColor = "orange";
}

