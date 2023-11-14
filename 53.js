// 53. Maximum Subarray


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    let maxSub = nums[0];
    let currSum = 0;


    for (let num of nums) {

        // check the negative prefix, set the current sum to cuz I don't want it
        if (currSum < 0) {
            currSum = 0
        }

        currSum += num
        maxSub = Math.max(maxSub, currSum);

    }

    return (maxSub)

};

// the idea is --> a negative prefix (sum of elements that are negative) doesn't contribute to the
// maximum sum
//
// ex. [-2,1,-3,4,-1,2,1,-5,4]
// -2 + 1 = -1 -> -1 -3 = -4 -> -4 + 4 = 0
// so until -4, I skip the elements that don't contribute. by setting currSum = 0
// 4 -1 = 3 -> 3 +2 = 5 -> 5 + 1 =6 -> 6-5 = 1 
// using Math.max I define the maxSum