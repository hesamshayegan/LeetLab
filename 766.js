// 766. Toeplitz Matrix


/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    
    const rows = matrix.length
    const columns = matrix[0].length

    for (let i = 1; i<rows; i++) {
        for  (let j = 1; j<columns; j++) {
            if (matrix[i][j] !== matrix[i-1][j-1]) {
                return false
            }
        }
    }

    return true

}


// Follow up:

// What if the matrix is stored on disk, and the memory is limited such that you can only load at most one row of the matrix into the memory at once?
// What if the matrix is so large that you can only load up a partial row into the memory at once?