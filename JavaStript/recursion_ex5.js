let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function binarySearch(array, el) {
   
    let start = 0;
    let end = array.length;
    let middle;
    let found = false;
    let position = -1;
    
    while (found === false && start <= end) {
        middle = Math.floor( (start + end) / 2);
        if (array[middle] === el) {
            found = true;
            position = middle;
            return position;
        }
        if (el < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
  return position;
}


function binaryRecursion(array, el) {
    //if (array.length === 1 && el != array[0] ){return -1;}
    let middle = Math.floor( array.length / 2);
    if (array[middle] === el && array.length > 1) {
        return middle;
    }
    if (el < array[middle]) {
        return binaryRecursion(array.slice(0, middle), el);
    } else {
        return binaryRecursion(array.slice(middle + 1, array.length), el) + (middle + 1);
    }
}
console.log(binarySearch(array1, 3));
console.log(binaryRecursion(array1, 998));