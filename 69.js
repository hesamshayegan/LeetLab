// 69. Sqrt(x)


/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {

    let left = 0;
    let right = x;

    while (left <= right) {
        debugger

        // avoid the overflow
        let mid = Math.floor(left + ((right-left)/2))

        
        if (mid * mid > x) {
            // we search on the left side
            right = mid - 1
            
        } else if (mid * mid < x) {

            // search on the right side
            left = mid + 1
            // set the mid value to result, because it could be the result if the loop finishes
            res = mid
        }
        else {
            return mid
        }
    }

    return res
    
};