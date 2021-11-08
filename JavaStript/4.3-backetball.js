let jonsTeam = [44, 44, 2244];
let mikesTeam = [55,55,55];
let marisTeam = [66, 999, 6];

function winerIs (jonsTeam, mikesTeam, marisTeam) {
    let avarageJohnsTeam = jonsTeam.reduce((a, b, c) => (a + b + c)) / jonsTeam.length;
    let avarageMikesTeam = mikesTeam.reduce((a, b, c) => (a + b + c)) / mikesTeam.length;
    let avarageMarisTeam = marisTeam.reduce((a, b, c) => (a + b + c)) /marisTeam.length;

    if ((avarageJohnsTeam > avarageMikesTeam) && (avarageJohnsTeam > avarageMarisTeam)) {
        console.log('John\'s team wings');
        return `John\'s team wing's`;
    } else if ((avarageMikesTeam > avarageJohnsTeam) && (avarageMikesTeam > avarageMarisTeam)) {
        console.log('Mik\'s team win');
        return 'Mik\'s team win';
    } else if ((avarageMarisTeam > avarageJohnsTeam) && (avarageMarisTeam > avarageMikesTeam)) {
        console.log('Mary\'s team win');
        return 'Mary\'s team win';
    } else {
        console.log('Drow');
        return 'Drow';
    }
} 
winerIs (jonsTeam, mikesTeam, marisTeam);   

