// 2545. Sort the Students by Their Kth Score

/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
*/
// approach 1
var sortTheStudents = function(score, k) {
    return score.sort((a,b) => b[k]-a[k])
}


// approach 2
var sortTheStudents = function(score, k) {
    
    for(let i=0 ; i<score.length-1 ; i++) {
       for(let j=i+1 ; j<score.length ; j++) {
            if (score[i][k] < score[j][k]) {
                let temp = score[i]
                score[i] = score[j]
                score[j] = temp
            }
        }
    }
    
    return score

};


