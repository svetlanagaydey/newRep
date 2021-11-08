function dateFormat () {
    let now = new Date();
    let dayOfWeek = now.getDay();
    let dayOfMonth = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();
    return (`Today is ${dayOfWeek} the ${dayOfMonth} of ${month}, ${year}`);
}
console.log(new Date());
console.log(dateFormat());
