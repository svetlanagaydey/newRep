"use strict";
function describeCountry(country, population, capitalCity) {
    let str = `${country} has population ${population} million people and its capital city is ${capitalCity}.`
    return str;
}
let ukraine = describeCountry('Ukraine', 47, 'Kyiv');
let israel = describeCountry("Israel", 9, 'Jerusalim');
let usa = describeCountry('USA', 200, 'New York');

console.log(ukraine);
console.log(israel);
console.log(usa);