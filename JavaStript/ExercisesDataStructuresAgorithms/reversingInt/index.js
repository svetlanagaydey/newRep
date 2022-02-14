// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//Math.sign(num) return 1 if num positive and -1 if negative
function reverseInt(n) {
    const sign = Math.sign(n);
    const reversedString = Math.abs(n).toString().split('').reverse().join('');
    return sign * reversedString
}

console.log(reverseInt(91));
console.log(reverseInt(-291));
module.exports = reverseInt;