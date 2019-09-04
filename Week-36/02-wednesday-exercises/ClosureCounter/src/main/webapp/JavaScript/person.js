/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 Implement a reusable function using the Module pattern that should encapsulate information about a person (name, and age) and returns an object with the following methods:
 setAge
 setName
 getInfo (should return a string like Peter, 45)
 */

var person = function () {
    var Name;
    var Age;
    function setage(age) {
        Age = age;
    }
    function setname(name) {
        Name = name;
    }
    return {
        info: function () {
            return "Name: " + Name + " and Age: " + Age;
        },
        setAge: function (age) {
            setage(age);
        },
        setName: function (name) {
            setname(name);
        }
    };
};

var testperson = person();