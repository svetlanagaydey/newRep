// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable (seconds) {
    function format(number) {
        if (number < 10) {
            return `0${number}`;
        } else if (number === 0) {
            return '00'
        } else return number
    }
    
    let hh = format(Math.floor(seconds/3600));
    let mm = format(Math.floor(seconds%3600 / 60));
    let ss = format(seconds%60);

    return `${hh}:${mm}:${ss}`;
}
console.log(humanReadable(359999))

