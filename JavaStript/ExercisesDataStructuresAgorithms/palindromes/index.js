// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//     const reversed = str.split('').reduce((rev, sym) => {
//         return sym + rev
//     })
//     return str === reversed;
// }

// function palindrome(str) {
//     for (let i=0; i<str.length/2; i++) {
//         if (str[i]!==str[str.length-1-i]) {
//             return false;
//         }
//     } 
//     return true;
// }

//The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length-i-1]
    })
}


console.log(palindrome('abcdef'));
console.log(palindrome('abccba'));

module.exports = palindrome;