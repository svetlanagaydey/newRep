function printToN(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

function friends(n){
    return n > 2 ?  1 + friends(n/2) : 0;
  }

printToN(9);
console.log(friends(112));