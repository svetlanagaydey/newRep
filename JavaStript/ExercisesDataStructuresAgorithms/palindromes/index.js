// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    const reversed = str.split('').reduce((rev, sym) => {
        return sym + rev
    })
    return str === reversed;
}

console.log(palindrome('abcdef'));
console.log(palindrome('abcdeffedcba'));
module.exports = palindrome;