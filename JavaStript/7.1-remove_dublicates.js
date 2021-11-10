function dublicateUnic(arr) {
    const arrayUnic = []
    arr.forEach(element => {
        if (arrayUnic.indexOf(element) == -1){
            arrayUnic.push(element);
        }
    } )
    return arrayUnic;
}
console.log(dublicateUnic([3, 4, 4, 3, 6]))