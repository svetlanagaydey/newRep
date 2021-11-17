function getSum(arr1, arr2){
    let sum = 0;
    for (let i=0; i < arr1.length; i++){
        sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++){
        sum += arr2[i];
    }
    return sum;
}
getSum([1,2,3], [5,66,23]);
console.log(getSum([1,2,3], [5,66,23]));

// there is no coma between arguments str.10
// the sum can't be const str.2
// must return
