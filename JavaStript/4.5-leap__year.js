function leapYear (year) {
    if (((year % 100 == 0) && (year % 400 != 0))) {
        console.log('NOT LEAP')
    } else  if (year % 4 == 0) {
        console.log ('LEAP');
    } else {
    console.log('NOT LEAP');
    }
}
leapYear(2500);