// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//     const obj = {};
//     for (char of str) {
//         if (!obj[char]) {
//             obj[char] = 1;
//         } else {
//             obj[char] = obj[char] + 1;
//         }
//     }
//     return obj;
// }

function maxChar(str) {
    const obj = {};
    let maxNumber = 0;
    let maxSymbol = '';
    for (char of str) {
        obj[char] = obj[char] + 1 || 1;
    }

    for (let char in obj) {
        if (maxNumber < obj[char]) {
            maxNumber = obj[char]
            maxSymbol = char
        }
    }
    return maxSymbol;
}
console.log(maxChar("abcccccccd"))
console.log(maxChar("apple 1231111"))


module.exports = maxChar;