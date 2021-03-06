/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//a) MAKE ARRAYS
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

//b) ADD THE TWO ARRAYS
var all = boys.concat(girls);
// console.log(all.forEach(n=>console.log(n)));

//c) LIST ALL THE ITEMS WITH COMMA FIRST, THEN DASH
//console.log(all.join());
//console.log(all.join('-'));

//d) ADD TO THE END OF THE ARRAY
all.push("Lone", "Gitte");
//console.log(all);

//e) ADD TO THE START OF THE ARRAY
all.unshift("Hans", "Kurt");
//console.log(all);

//f) REMOVE FROM THE START OF THE ARRAY
all.shift("Hans");

//g) REMOVE FROM THE END OF THE ARRAY
all.pop("Gitte");
//console.log(all);

//h) SPLICE
all.splice(3,2);
//console.log(all);

//i) REVERSE
all.reverse();
//console.log(all);

//j) && k) SORT
all.sort(function (a, b) {
  return a.localeCompare(b);
});
//console.log(all);

//l) MAP
var all2 = all.map(name => name.toUpperCase());
//console.log(all2);

//m) FILTER
var all3 = all.filter(name => name.charAt(0) === "L" || name.charAt(0) === "L");
//console.log(all3);