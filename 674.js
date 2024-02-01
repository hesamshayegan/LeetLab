// 674. Longest Continuous Increasing Subsequence


/**
 * @param {number[]} nums
 * @return {number}
 */

var findLengthOfLCIS = function(nums) {
    
    let longest = 1;
    let subLength = 1;

    for (let i=0; i<nums.length; i++) {
        
        if (nums[i]<nums[i+1]) {
            subLength++
        } else {
            subLength = 1
        }
        
        longest = Math.max(subLength, longest)

    }

    return longest

};


// old solution
/* 
var findLengthOfLCIS = function(nums) {

    if (nums.length === 1) return 1

    let left = 0;
    let right = left + 1;

    let subLen = 1;
    let maxLen = 1;

    while (right < nums.length) {
        
        if (nums[right] > nums[right - 1]) {
            subLen = (right - left + 1);
            right++;
        } else {
            subLen = 1;
            left = right;
            right++;
        }
        

        if (subLen > maxLen) {
            maxLen = subLen
        }

    }

    return maxLen
    
};
*
*/