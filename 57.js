// 57. Insert Interval


/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {

    let res = []

    for (let i=0; i<intervals.length; i++) {
        debugger;
        
        // newinterval has no overlapping with current interval (first edge case)
        if (newInterval[1] < intervals[i][0]) {

            res.push(newInterval)
            return [...res, ...intervals.slice(i)];

        // current interval has no overlapping with new interval
        } else if (newInterval[0] > intervals[i][1]) {

            res.push(intervals[i])

        // there is overlapping
        } else {
            
            // update the new interval. But the new interval can still have overlapping with next intervals
            newInterval = [Math.min(newInterval[0],intervals[i][0]), Math.max(newInterval[1],intervals[i][1])]
        }

    }
    // second edge case
    res.push(newInterval)
    

    return res    
};

// the edge case when I need to add the newInterval after finishing the loop 
// as there was not any exit condition inside the loop
// intervals = [[1, 3], [6, 9]];
// newInterval = [10, 12];