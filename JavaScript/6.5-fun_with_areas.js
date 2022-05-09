let arr1 = Array(100).fill(100, 0, 100);
console.log(arr1);

let arr2 = [];
Array.from(arr1, (element) => { 
    for (let i=1; i <= 100; i++){
        arr2[i] = i;
    }
    return arr2;
} )
console.log(arr2);

console.log(Array.isArray(arr1));

let obj = Object.assign({}, arr1);
console.log(Array.isArray(obj));

let objToArray = Object.values(obj);
console.log(Array.isArray(objToArray));

let copy = arr2.splice(0, arr2.length);
console.log(copy);

copy.unshift('YE');
console.log(arr1);

let copyEffect = copy;
console.log(copyEffect);

copyEffect[1] = 'WOW'
console.log(copy);
