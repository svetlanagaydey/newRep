function step(n) {
    let result = [];
    // for (let i=0; i< n; i++) {
    //     result += '#'.repeat(i+1) + ' '.repeat(n-i+1) + '\n';
    // }
    for (let i=0; i< n; i++) {
        let rowResult = '';

        for (let j = 0; j <= i; j++){
            rowResult += '#';
        }
        for (let j = i+1; j < n; j++) {
            rowResult += ' ';
        }
       // console.log(rowResult);
        result.push(rowResult);
    }
 return result;
}
console.log(step(5));