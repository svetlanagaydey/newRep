// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//     const columns = 2*n-1;
//     for (let row = 0; row < n; row++) {
//         let level = '';
//         for (let col = 1; col <= columns; col++) {
//             col <= Math.floor(columns/2) - row || col >  Math.floor(columns/2) +1 + row 
//             ? level += " ": level += "#";
//         }
//         console.log(level);
//     }
// }

// function pyramid(n) {
//     const columns = 2*n-1;
//     const midpoint = Math.floor(columns/2);
//     for (let row = 0; row < n; row++) {
//         let level = '';
//         for (let col = 0; col < columns; col++) {
//             midpoint - row <= col && midpoint + row >= col
//             ? level += "#": level += "-";
//         }
//         console.log(level);
//     }
// }

function pyramid(n, row=0, level='') {
    const midpoint = Math.floor((n*2-1) / 2);
    if (row === n) {
        return;
    }
    if (level.length === n*2-1) {
        console.log(level);
        return pyramid(n, row + 1)
    }
    let add;
    if ((level.length >= midpoint - row) && (level.length <= midpoint + row)) {
        add = "#";
    } else {
        add = " ";
    }
    pyramid(n, row, level + add);
}
console.log(pyramid(5));