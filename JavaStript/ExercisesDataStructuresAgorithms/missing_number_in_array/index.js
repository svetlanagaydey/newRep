// You have numbers ordered randomly from 1 to n, one number is missing, write code that finds this number.
// [1,2,3]
// [1,3] -> 2
// [2,3] -> 1

const missingNumber = (arr) => {
    arr.sort();
    if (arr[0] !== 1) {
        return 1
    } else if (arr[arr.length-1] !== arr.length + 1) {
        return (arr.length + 1)
    } else {
        for (let i=1; i<arr.length; i++) {
            if (arr[i-1] !== arr[i]-1) {
                return arr[i]-1;
            }
        }
    }
}
console.log(missingNumber([1, 3, 4]));