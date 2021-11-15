'use strick';
let array1 = [1, 2, 4, 5, 6, 7, 8, 9]
let array2 = [1, 'abc', 'cef', 'cef', 5, 'eoe', 7, 8, '9']

function doubleValue(array) {
   return array.map(function(element) {
       return element * 2;
    })
}

function onlyEvenValues(array) {
    let arr = [];
    array.forEach(element => {
        if(element%2==0) {
            arr.push(element)
        }
    });
    return arr;
}

function showFirstAndLast(array2) {
    let result = [];
    array2.forEach(element => {
        if (typeof element === 'string') {
          result.push(element);
        }
    });   
    result.splice(1, result.length - 2);
    return result;
}

function vowelCount(string) {
    let array = string.replace(' ', '').split('');
    let result = {};
    array.forEach(element => {
        if (result[element] !== undefined) {
            result[element] +=1;
        } else {
         result[element] = 1;
        }
    });
    return result;
}

function capitalize(string) {
    return string.toUpperCase();
}

function shiftLetters(string) {
    let result = '';
    string.split('').forEach(element => {
        result += String.fromCharCode(element.charCodeAt(0)-1);
    });  
    return result; 
}

function swapCase(string) {
    let result = [];
    string.split(' ').forEach((element, index) => {
        if (index % 2 == 0) {
            result.push(element.toUpperCase());
        } else {
            result.push(element);
        }
    });
    return result.join(' ');
}

console.log(doubleValue(array1));
console.log(onlyEvenValues(array1));
console.log(showFirstAndLast(array2));
console.log('---------------');
console.log(vowelCount('array2'));
console.log(capitalize("Let me know please!"))
console.log('---------------');
console.log(shiftLetters("bcdef"));
console.log(swapCase("letter shifted down the alphabet by one"));