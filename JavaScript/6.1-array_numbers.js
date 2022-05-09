const arr = [1,7,3,0,-5,7,3,9];
for (let i=0; i<arr.length; i++) {
    console.log(arr[i]);
}


function arrayLength(arr) {
    let j=0;                        //counter
    while (arr[j] != undefined) {
        j++
    }
    return j;
}
console.log('The Leygth:' + arrayLength(arr));

function arraySumm(arr) {
    i=0;
    let j=0;                        //counter
    while (arr[j] != undefined) {
        i += arr[j];
        j++
    }
    return i;
}
console.log('The Summ:' + arraySumm(arr));

function arrayMulti(arr) {
    i=1;
    let j=0;                        //counter
    while (arr[j] != undefined) {
        i *= arr[j];
        j++
    }
    return i;
}
console.log('The Multi:' + arrayMulti(arr));
