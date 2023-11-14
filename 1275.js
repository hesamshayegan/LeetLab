// 1275. Find Winner on a Tic Tac Toe Game


/**
 * @param {number[][]} moves
 * @return {string}
 */

var tictactoe = function(moves) {

    let a = new Array(8).fill(0);
    let b = new Array(8).fill(0);
    let player;

    for (let i=0; i < moves.length; i++) {

        let [row, col] = moves[i];

        if (i % 2 === 0) {
            player = a
        } else {
            player = b
        }
        
        // once the player is determined, populate the array a or b
        // ex. a = [1,0,0,0,0,0,0,0] -> the row 1 is marked
        // if I have another row 1 marked in the next round 
        // it becomes a = [2,0,0,0,0,0,0,0]
        // and finally if I have the third mark on row one
        // a = [3,0,0,0,0,0,0,0] --> player a wins
        player[row] += 1;

        // why + 3 becasue columns are (0/1/2 + 3 in a or b) --> ex. a = [0,0,0,1,0,0,0,0]
        player[col + 3] += 1;

        // diagonal
        if (row === col) {
            // why 6? because a[6] or b[6] represents the main diagonal
            player[6] += 1;
        }
        // anti diagonal
        // why 2? because if I substract 2 from col, I get the element on anti diagonal
        if (row === 2 - col) {
            // why 7? because a[7] or b[7] represents the anti diagonal
            player[7] += 1
        }       
    }

    for (let j=0; j< a.length; j++ ) {
        if (a[j] === 3) {
            return "A"
        }
        else if (b[j] === 3) {
            return "B"
        }
    }

    if (moves.length === 9) return "Draw"
    else return "Pending"

};

// number of possible ways to win the game
// rows: 3, col: 3; diagonal: 2 =>  3 + 3 + 2 = 8
 
// create an array with the length of 8
// a = [0, 0, 0, 0, 0, 0, 0, 0]
// b = [0, 0, 0, 0, 0, 0, 0, 0]
// first three elements are rows, the second three elements are cols, 
// the last two elements are diagonals