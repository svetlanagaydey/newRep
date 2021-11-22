function binarySearch(array, el) {
   
    let start = 0;
    let end = array.length;
   
    let middle;
    let found = false;
    let position = -1;
    

    while (found === false && start <= end) {
        middle = Math.floor( (start + end) / 2);
        console.log(middle + '-');
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
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1));