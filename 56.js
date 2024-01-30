// 56. Merge Intervals


/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    
    // sort intervals by the start value
    intervals.sort((a, b) => a[0] - b[0]);
    
    // initialize the result with the first element of intervals
    let prev = intervals[0];
    let res = [prev];
    
    // iterate to find overlaps 
    for (let i = 1; i < intervals.length; i++) {
        
        let start = intervals[i][0];
        let end = intervals[i][1];
        let lastEnd = res[res.length - 1][1];

        if (start <= lastEnd) {
            // check which value is higher for the upper bound. ex: [1,5] [2,4] => [1,5] not [1,4]
            res[res.length - 1][1] = Math.max(lastEnd, end);
        } else {
            res.push([start, end]);
        }
    }

    return res;
};