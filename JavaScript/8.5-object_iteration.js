const object = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: 'value4',
    key5: 'value5',
    key6: 'value6',
}

function reverse(obj) {
    const objectReverse = {};
    Object.keys(obj).forEach(element => {
        objectReverse[obj[element]] = element
    });
    return objectReverse;
}

console.log(object);
console.log(reverse(object));