// A Hamming number is a positive integer of the form 2i3j5k, for some non-negative integers i, j, and k.

// Write a function that computes the nth smallest Hamming number.

// Specifically:

// The first smallest Hamming number is 1 = 203050
// The second smallest Hamming number is 2 = 213050
// The third smallest Hamming number is 3 = 203150
// The fourth smallest Hamming number is 4 = 223050
// The fifth smallest Hamming number is 5 = 203051
// The 20 smallest Hamming numbers are given in example test fixture.

// Your code should be able to compute all of the smallest 5,000 (Clojure: 2000, NASM: 13282) Hamming numbers without timing out.


function hamming_smallest_number(num) {
    let hammingNumbersArray = [];
    for (let i =1; hammingNumbersArray.length < num; i++) {
 //       if((i%3 ==0) || (i%2==0) || (i%5==0)) {

        function try_hamming(n) {
            while(n%2 == 0) {
                n = n/2;
            }
            while(n%3 == 0) {
                n = n/3;
            }
            while(n%5 == 0) {
                n = n/5;
            }
            return n==1;
        }
        if(try_hamming(i)) {
            hammingNumbersArray.push(i);
        }
    }
    return hammingNumbersArray[hammingNumbersArray.length-1];
}
console.log(hamming_smallest_number(7));