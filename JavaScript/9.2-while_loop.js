let arr = ["boo", "doooo", "hoo","ro"];
let lengtnArray = [];
let index = 0;
while (lengtnArray.length < arr.length) {
    lengtnArray.push(arr[index].length);
    index++;
}
console.log(lengtnArray);