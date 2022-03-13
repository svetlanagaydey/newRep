function getSumOfEven(arr){
    return (arr[1] + arr[3] + arr[5] + arr[7] + arr[9]);
}

getSumOfEven([1,2,3,4,5,6,7,8,9,10]);
console.log(getSumOfEven([1,2,3,4,5,6,7,8,9,10]));


// watch method withown console.log show that result is NaN
// in debuger i saw that array's parameter length is 10
// that is why last index number must be 9 and we had 10
// if it will be more or less elements in array, 