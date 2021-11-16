const numbers = [1, -5, 666, 2, 400, 11];
const ascSort = function(numbers) {
    return numbers.sort((a, c) => a - c);
};
const descSort = function(numbers) {
    return numbers.sort((b, d) => d - b);
};

console.log(numbers);
console.log(ascSort(numbers));
console.log(descSort(numbers));