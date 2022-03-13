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
console.log(simpleValidation('099999999999d9fdfd'));


function advancesValidation(passowrd) {
    return passowrd.match(/[A-Z]/) && passowrd.length > 7 ? 'Very Strong': passowrd.length == 7 ? 'STRONG':'WEAK';
}
console.log(advancesValidation('Aasdfasdfasdf'));


