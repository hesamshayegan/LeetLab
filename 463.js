// 463. Island Perimeter


/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {

    const rows = grid.length
    const columns = grid[0].length
    let perimeter = 0;

    for (let i = 0; i<rows; i++) {
        for  (let j = 0; j<columns; j++) {
            
            // check if the cell is a land
            if (grid[i][j] === 1) {
                
                // j === 0 takes account for the left edge of a cell when I'm on the first column
                if (j === 0 || grid[i][j-1] === 0) {
                    perimeter += 1
                }

                // j === columns -1 takes account for the right edge of a cell when I'm on the last column
                if (j === columns -1 || grid[i][j+1] === 0) {
                    perimeter += 1
                }

                // i === 0 takes account for the top edge of a cell when I'm on the first row
                if (i === 0 || grid[i-1][j] === 0) {
                    perimeter += 1
                }

                // j === rows -1 takes account for the right edge of a cell when I'm on the last row
                if (i === rows -1 || grid[i+1][j] === 0) {
                    perimeter += 1
                }

            }
            
        }
    }

    return perimeter
    
};


// const grid = [[1,0,0,1],[0,0,0,0],[0,0,0,0],[1,0,0,1]]
// const grid = [[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]