
function firstFor(number) {
    for (let i = 0; i < number; i++) {
        console.log(i);
    }
}
let number = 6
function secondRecursion(number) {
    if (number > 0) {
        console.log('in function: ' + number);
        secondRecursion(number-1);
    }
    console.log('stack out' + number);
}
console.log(number);

function thirdWithoutExit(number) {
    if (number <= 0) return;
    console.log(number);
    thirdWithoutExit(number - 1);
}
// firstFor(5);
// console.log('----------');
secondRecursion(number);
console.log(number);
// console.log('----------');
// thirdWithoutExit(5);
