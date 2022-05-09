let s = ["h","e","l","l","o"];
let s1 = ["H","a","n","n","a","h"]

function onlyJs(string) {
    return string.reverse();    
}

function onlyLoop(string) {
    let i = 0;
    let result = [];
    for (i = string.length-1; i >= 0; i--){
        result.push(string[i]);
    }
    return result;
}
let result = [];
function recursion(string) {
        if (string.length > 0) {
            result.push(string[string.length-1]);
            string.pop();          
            recursion(string);
        }
    return result;
}
// function recursion(string) {
//     if (string.length > 0) {
//         string.pop();
//         console.log(string);          
//         recursion(string);
//     }
   
// return string;
// }

// console.log(onlyJs(s1));
// console.log(onlyLoop(s));
console.log(recursion(s));