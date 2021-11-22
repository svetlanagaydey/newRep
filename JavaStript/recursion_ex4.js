count = 0;
function exp(base, number) {
    let count = 1;
    while (base/number !== 1)
    {   base = base / number;
        count++;
    }
    return count;
}
console.log(exp(32, 2));

let expexp = 1;
function recExp(base, number) {
    if (base/number !== 1) {
        expexp++;
        recExp(base/number, number);
    }
    return expexp;
}

console.log(recExp(32, 2));