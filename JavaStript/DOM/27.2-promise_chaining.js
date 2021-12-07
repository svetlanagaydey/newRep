const writeArray = ['The', 'summer', 'was', 'very', 'hot'];
const wrongArray = ['The', 'summer', 'was', 1, true];

const ifWrite = (array) => {

    const isWriteArray = function(array) {
        return array.find((el) => typeof(el) !== 'string') ?  false : true;
    }

    return new Promise((resolve, reject) => {
        isWriteArray(array) ? resolve() : reject();
    } )     
}

ifWrite(writeArray)
    .then(() => {
        console.log('Its ok')
        console.log(makeAllCaps(writeArray))
        } )
    .catch(() => {throw "Error---------Error"})

ifWrite(writeArray)
    .then(() => {
        console.log('Its ok')
        console.log(sortWords(writeArray))
        } )
    .catch(() => {throw "Error------------------Error"})


const makeAllCaps = function(array) {
        return array.map(element => {
            return element.toUpperCase();
        } )
}
const sortWords = function(array) {
    const sortArray = array.concat().sort();
    return sortArray;
}

// console.log(makeAllCaps(writeArray));
// console.log(sortWords(writeArray));
// console.log(writeArray);
// console.log(isWriteArray(wrongArray));
// console.log(isWriteArray(writeArray));