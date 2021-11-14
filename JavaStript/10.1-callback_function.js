const isString = (stringArgument, callback) => {
    if (typeof stringArgument === 'string') {
        callback(stringArgument);
    } else (
        console.log('Sorry, this is no string!')
    )
}
function callbackPrint(stringArgument) {
    console.log('Yes! ' + stringArgument);
}

function firstWordUpperCase(string, callback) {
    //string.split(' ')[0].toUpperCase;
    let firstWordUpper = string.substring(0, string.indexOf(' ')).toUpperCase() + string.slice(string.indexOf(' '));
    callback(firstWordUpper);
}

function dashesPrint(string) { 
    console.log(string.split(' ').join('-'));
}

firstWordUpperCase("Let me now, please!", callbackPrint);
firstWordUpperCase("Let me now, please!", dashesPrint);