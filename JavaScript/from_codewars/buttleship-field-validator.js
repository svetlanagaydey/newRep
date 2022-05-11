
// Write a method that takes a field for well-known board game "Battleship" as an argument and returns true if it has a valid disposition of ships, false otherwise. Argument is guaranteed to be 10*10 two-dimension array. Elements in the array are numbers, 0 if the cell is free and 1 if occupied by ship.

// Battleship (also Battleships or Sea Battle) is a guessing game for two players. Each player has a 10x10 grid containing several "ships" and objective is to destroy enemy's forces by targetting individual cells on his field. The ship occupies one or more cells in the grid. Size and number of ships may differ from version to version. In this kata we will use Soviet/Russian version of the game.


// Before the game begins, players set up the board and place the ships accordingly to the following rules:
// There must be single battleship (size of 4 cells), 2 cruisers (size 3), 3 destroyers (size 2) and 4 submarines (size 1). Any additional ships are not allowed, as well as missing ships.
// Each ship must be a straight line, except for submarines, which are just single cell.

// The ship cannot overlap or be in contact with any other ship, neither by edge nor by corner.

function validateBattlefield(field) {

    count = 0;
    let submarines = 0;
    let destroyers = 0;
    let cruisers = 0;
    let single = 0;
    
    const CONTROL = {
      submarines: 4,
      destroyers: 3,
      cruisers: 2,
      single: 1
    }
    for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 9; j++){
            
            if (field[i][j] == 1) {
                count++;

            //     if (i == 0 && j < 9 && j > 0) {
            //         if ( field[i][j+1]<=0 
            //             && field[i][j-1]<=0 
            //             && field[i+1][j+1]<=0 
            //             && field[i+1][j]<=0
            //             && field[i+1][j-1]<=0 ){
            //                 submarines++;
            //         }
            //     }
                
            //     if (i == 0 && j == 0) {
            //         if ( field[i][j+1]<=0 
            //             && field[i+1][j+1]<=0 
            //             && field[i+1][j]<=0)
            //                 submarines++;
            //     }

            //     if (i == 0 && j == 9) {
            //         if ( field[i][j-1]<=0 
            //             && field[i+1][j-1]<=0 
            //             && field[i+1][j]<=0)
            //                 submarines++;
            //     }

                // if (i > 0 && i < 9) {
                    //validate submarine
                    // if (field[i-1][j] == 0
                    //     && field[i-1][j-1]<=0 
                    //     && field[i-1][j+1]<=0 
                    //     && field[i+1][j]<=0 
                    //     && field[i+1][j-1]<=0 
                    //     && field[i+1][j+1]<=0 
                    //     && field[i][j-1]<=0 
                    //     && field[i][j+1]<=0) {
                    //     submarines++;
                    // }
                // }
            }
        }
    }
    return count == 20;
  }


console.log(validateBattlefield(
    [[1, 0, 0, 0, 0, 1, 1, 0, 0, 1],
     [1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
     [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
     [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
     [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]));