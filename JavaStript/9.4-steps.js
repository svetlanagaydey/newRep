function step(n) {
    let result = '';
    for (let i=0; i< n; i++) {
        result += String('#'.repeat(i+1) + ' '.repeat(n-i+1) + '\n');
    }
    return result;
}
console.log(step(5));