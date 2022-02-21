// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//     const arrayFibonacci = [0, 1];
//     for (let i=2; i<=n; i++) {
//         arrayFibonacci.push(arrayFibonacci[i-1] + arrayFibonacci[i-2])
//     }
//     return arrayFibonacci[n]
// }

// function fib(n, index=2, arrayFibonacci = [0, 1]) {
//     if (index <= n) {
//         let first = arrayFibonacci[index-1];
//         let second = arrayFibonacci[index-2];
//         arrayFibonacci.push(first + second);
//         index++;
//         fib(n, index++, arrayFibonacci)
//     }
//     return arrayFibonacci[n]

function fib(n) {
    if (n < 2) {
        return n
    } else {
        return fib(n-1)+fib(n-2);
    }
}

console.log(fib(2));