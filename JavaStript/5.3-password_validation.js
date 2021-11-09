// function simpleValidation(passowrd) {
//     if (passowrd.length <= 7) {
//         console.log(passowrd.length)
//         return 'Weak';
//     }
//     console.log(passowrd.length)
//     return 'Strong';
// }

function simpleValidation(passowrd) {
    return passowrd.length < 7 ? 'WEAK' : 'STRONG';
}

console.log(simpleValidation('0'));
