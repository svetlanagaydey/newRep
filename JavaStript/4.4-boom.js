function boom(n) {
    let arrayNambers = [];
    for (var i = 1; i <= n; i++) {
        arrayNambers.push(i);
    }

    for (let j=1; j<arrayNambers.length; j++) {
        if ((j.toString().includes('7')) && (j % 7 == 0)) {
            console.log('BOOM BOOM')
        }
         else if ((j % 7 == 0) || (j.toString().includes('7'))) {
            console.log('BOOM');
        } 
        else {
        console.log(j)
        }
    }
}
boom(71);