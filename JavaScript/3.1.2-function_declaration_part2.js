/*
    JavaScript - Declaring Functions
    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.
    Submit the file to Hive
*/

// From function declarations to explicit and implicit return functions (one of each).

// function welcome() {
//     let welcome = 'Welcome to Appleseeds Bootcamp!';
//     return welcome;
// }
const welcome = () => 'Welcome to Appleseeds Bootcamp!';
console.log(welcome());


// function power(a) {
//     let myNumber = a;
//     let result = Math.pow(myNumber, 2);
//     return result;
// }
const power = a => {
    return Math.pow(a, 2);
}
console.log(power(3));

// From function expressions to IIFE functions.
// const squareRoot = a => Math.sqrt(a);

(function(a) {
    console.log(Math.sqrt(a));
    return Math.sqrt(a)
  }(a=4));

//const randomNumbers = (a, b) => Math.random() * (a - b) + b;

(function(a, b) {
    console.log(Math.floor(Math.random() * (a - b) + b));
    return Math.random() * (a - b) + b;
  }(a=5, b=2));
