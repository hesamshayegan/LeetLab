// 36. Valid Sudoku


/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    // Check rows
    for (let i=0; i<9; i++) {

        let set = new Set()

        for (let j=0; j<9; j++) {
            if (board[i][j] !== ".") {
                if (set.has(board[i][j])) {
                    return false
                } else {
                    set.add(board[i][j])
                }
            }
        }
    }

    // Check columns
    for (let j=0; j<9; j++) {

        let set = new Set()

        for (let i=0; i<9; i++) {
            if (board[i][j] !== ".") {
                if (set.has(board[i][j])) {
                    return false
                } else {
                    set.add(board[i][j])
                }
            }
        }
    }
    
    // Check sub-boxes
    for (let box=0; box<9; box++)  {
        
        let set = new Set()
        let rowStart = Math.floor(box /3) * 3
        let colStart = (box % 3) * 3

        for (let i=rowStart; i< rowStart + 3; i++) {
            for (let j=colStart; j< colStart + 3; j++) {
                if (board[i][j] !== '.') {
                    if (set.has(board[i][j])) {
                        return false;
                    }
                    set.add(board[i][j]);
                }
            }
        }
    }

    return true

};