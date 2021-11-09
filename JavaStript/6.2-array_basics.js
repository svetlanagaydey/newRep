let people = ["Greg", "Mary", "Devon", "James"];

// people.forEach(function (item) {
//     console.log(item);
// });

people.map(function (item) {
    console.log(item);
});
console.log('-----------------');

people.pop();
people.shift();
people.unshift('Matt');
people.push('Svetlana');

people.map(function (item) {
    console.log(item);
});
console.log('-----------------');

for (let i=0; i<people.length; i++) {
    if (people[i] === 'Mary') {
        console.log (people[i]);
        break;
    }
}
let copy = people.slice(2, people.length);
copy.map(function (item) {
    console.log(item);
});

console.log(people.indexOf('Svetlana'));
console.log(people.indexOf('Foo'));

people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie")

console.log('-----------------');
let withBob = people.slice();
withBob.unshift('Bob');
withBob.map(function (item) {
    console.log(item);
});


