let arr = ["boo", "doooo", "hoo","ro"];

function lengthsOfWords(arr) {
    let lengthArr = [];
    arr.forEach(element => {
        lengthArr.push(element.toString().length);
    });
return lengthArr;
}
console.log(lengthsOfWords(arr));