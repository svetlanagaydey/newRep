//using arrayPrototype
const stringReversal = function(string) {
    return string.split('').reverse().join('');
}


//using loop
const stringRev = (string) => {
    let result = "";
    for (let symbol of string) {
        result = symbol + result
    }
    return result;
}

//using reducer
// ES5 Reduce is used to take all the different values with an array and condense them all down to one singular value, 
const stringR = (string) => {
    return string.split('').reduce((reversed, character) => {
        return character + reversed;
    }, '') // second argument is a starting initial value for our function
}

console.log(stringReversal("12345"));
console.log(stringRev("12345"));
console.log(stringR("12345"));