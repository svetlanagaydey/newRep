// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//     let countVowels = 0;
//     for (let chat of str) {
//         if (chat === 'a' || chat === 'e'|| chat === 'i'||chat === 'o'||chat === 'u') {
//             countVowels++;
//         }
//     }
//     return countVowels;
// }

// function vowels(str) {
//     let count = 0;
//     let vowelsString = 'aeiou';
//     for (let char of str) {
//         if (vowelsString.includes(char)) {   //includes works with string and with array
//             count++
//         }
//     }
// return count;
// }

function vowels(str) {
    let matches = str.match(/[aeiou]/g);  //g-get all matches, i-case insensative, match works with string and regex
    console.log(matches)
    return matches ? matches.length : 0;
}

console.log(vowels('Why do you ask?'));
module.exports = vowels;