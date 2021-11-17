// function funcA() {
//     var a = 1;
//     console.log(a);
//     console.log(foo());
//     function foo() {
//         return 2;
//     }
// }
// funcA();

// no matter where the body of the function is, you can call it from anywhere.
// A variable can only be called after a value has been assigned to it.
// move variable declaration

// var fullName = 'John Doe';
// var obj = {
//     fullName: 'Colin Ihrig',
//     prop: {
//         fullName: 'Aurelio De Rosa',
//         getFullName: function () {
//             return this.fullName;
//         }
//     }
// };
// console.log(obj.prop.getFullName());
// var test = obj.prop.getFullName;
// console.log(test());

//there is no test any function test

// function funcB() {
//     let a = b = 0;
//     console.log(a);
//     console.log(b);
//     a++;
//     return a;
// }

// funcB();
// console.log(typeof a);
// console.log(typeof b);
// console.log(funcB());
// a have local scope - he let,  b have global scope defolt it will be var



// function funcC() {
//     console.log("1");
// }
// funcC();
// function funcC() {
//     console.log("2");
// }
// funcC();

// the function is called by the name of the last change.

// function funcD1() {
//     d = 1;
// }
// funcD1();
// console.log(d);

// function funcD2() {
//     var e = 1;
// }
// funcD2();
// console.log(e);

//d = 1 in function will have global scope, var e=1 - will be local scope

function funcE() {
    console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
funcE();
var f = 1;




