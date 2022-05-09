const foods = ["alafel", "abich", "3ummus", "2izza with extra pineapple"];
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];
const foodsWithUpperCase = [ "falafel", "Sabich", "hummus", "Hars", "pizza with extra pineapple", ];

function ascOrder(array) {
    return (array.sort((a,b) => {
        return a > b ? 1 : a == 0 ? 0 : -1;
    }));
}
function descOrder(array) {
    return (array.sort((a,b) => {
        return a < b ? 1 : a == 0 ? 0 : -1;
    }));
}
function ascUpperOrder(array) {
    return (array.sort((a,b) => {
        a = a.toLowerCase();
        b = b.toLowerCase();
        return a < b ? 1 : (a == 0) ? 0 : -1;
    }));
}
function decsUpperOrder(array) {
    return (array.sort((a,b) => {
        a = a.toLowerCase();
        b = b.toLowerCase();
        return a.localeCompare(b);
    }));
}

function longestWord(array) {
    return array.sort((a,b) => a.length - b.length);
}

// console.log(words);
// console.log(longestWord(words));
// console.log(ascOrder(foods));
// console.log(descOrder(foods));
console.log(ascUpperOrder(foodsWithUpperCase));
console.log(decsUpperOrder(foodsWithUpperCase));
