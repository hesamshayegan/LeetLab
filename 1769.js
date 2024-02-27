// 1769. Minimum Number of Operations to Move All Balls to Each Box


/**
 * @param {string} boxes
 * @return {number[]}
*/
var minOperations = function(boxes) {

    const result = Array(boxes.length).fill(0);

    // left to right
    let nonEmpty = 0;
    let runningSum = 0;

    for (let i=0; i<boxes.length; i++) {        
        result[i] += runningSum;
        if (boxes[i] === '1') nonEmpty++;
        runningSum += nonEmpty
    }
    
    // right to left
    nonEmpty = 0;
    runningSum = 0;
    
    for (let i = boxes.length - 1; i >= 0; --i) {
        result[i] += runningSum;
        if (boxes[i] === '1') ++nonEmpty;
        runningSum += nonEmpty;
    }
        

    return result

}

// TC: O(n)
// SC: O(1)


// var minOperations = function(boxes) {

//     let res = new Array(boxes.length).fill(0)


//     for (let i=0; i<boxes.length; i++) {
//         for (let j=0; j<boxes.length; j++) {
//             if (boxes[j] === '1' && i !== j) {
//                 res[i] += Math.abs(i - j)
//             }
//         }
//     }

//     return res
    
// };
// TC: O(n^2)
// SC: O(1)