var b = 1;
function someFunction(number) {         // don't use number in function
    function otherFunction(input) {     // don't use input
        return b;
    }

    b = 5;                              // override b 
    return otherFunction;               // return inner function with overrided b
}

var firstResult = someFunction(9);
var result = firstResult(2);

console.log('--------block1----------');
console.log(firstResult());             // => 5 
console.log(result);                    // => 5
console.log('--------block2----------');

var a = 1;
function bb2() {
    a = 10;
    return;             // return undefined
    function a() { }    // don't see after return and function don't do anything       
}
bb2();                  // override value 'a' was in the function
console.log(a);         // => 1

console.log('--------block2----------');
let i;
for (i = 0; i < 3; i++) {
const log = () => { console.log(i);     // => 3 times 3 becouse of setTimeOut
}
setTimeout(log, 100); }


