// 209. Minimum Size Subarray Sum


/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {

    let left = 0;
    let right = 0;
    let sum = 0;
    result = 0;

    while (right<nums.length) {
        // debugger;

        sum += nums[right];

        while (sum >= target) {
            let len = right - left + 1
            // store the last length in result. In the next steps,
            // if len is less than current length stored in result, it will substitute that in result..
            if (result === 0 || len < result) result = len
            sum -= nums[left]
            left++
        }
        right++
    }
    return result
};