const arr = [1, 2, 3, 4, 5];

function sum(array) {
    return array.reduce((a, b) => a + b);
}

function max(array) {
    return array.reduce((a, b) => a > b ? a : b);
}
function avg(array) {
    return sum(array) / array.length;
}


console.log(sum(arr));
console.log(max(arr));
console.log(avg(arr));