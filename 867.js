// 867. Transpose Matrix

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

var transpose = function(matrix) {
    
    const rows = matrix.length
    const columns = matrix[0].length

    let transposed = new Array(columns)

    for (let i=0; i < columns; i++) {

        transposed[i] = new Array(rows)

    }
    
    for (let i = 0; i < rows; i++) {

        for (let j = 0; j < columns; j++) {
            
            transposed[j][i] = matrix[i][j]

        }
    }

    return transposed

};


// No in-place swaping! I need to make a new array as 2*3 becomes 3*2 (the Matrix is not always square).