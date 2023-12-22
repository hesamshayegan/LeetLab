// 219. Contains Duplicate II

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let numEqual = {};

    if (nums.length === 1) return false;

    for (let i = 0; i < nums.length; i++) {
        if (numEqual[nums[i]] !== undefined && Math.abs(i - numEqual[nums[i]]) <= k) {
            return true;
        }
        numEqual[nums[i]] = i;
    }

    return false;
};