  
const string = "The more you know, the more you know that you don't know";
console.log(string.lastIndexOf('you'));

function lastOccuranceIndex(string, substring) {
    let occuranceIndex = 0;
    for (let i = 0; i < string.length; i++){
        if (string.substring(i, i + substring.length) == substring) {
            occuranceIndex = i;
        }   
    }
    return occuranceIndex;
}
console.log(lastOccuranceIndex(string, 'you'));