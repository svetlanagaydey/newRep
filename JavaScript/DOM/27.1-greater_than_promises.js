const greaterThan = (num) => {
    return new Promise((resolve, reject) => {
        num < 10 ? reject("less") : resolve('greater');
    } )     
}
greaterThan(3)
    .then((res) => {console.log(res)})
    .catch((res) => {console.log(res)})

