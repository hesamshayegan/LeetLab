// 896. Monotonic Array


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {

    if (nums.length < 2) return true

    let direction = 0;

    for (let i=0; i < nums.length; i++) {

       if (nums[i] > nums[i+1]) {
          if (direction === 0) direction = 1; // increasing
          else if (direction === -1) return false 
       }
       else if (nums[i] < nums[i+1]) {
          if (direction === 0 ) direction = -1; // decreasing
          else if (direction === 1) return false
       }

    }

     return true

};