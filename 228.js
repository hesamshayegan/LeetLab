// 228. Summary Ranges


/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {

    let i = 0
    let j = i + 1

    let result = []

    while (j < nums.length) {
        if (nums[j] !== nums[j - 1] + 1) {
            result.push(nums[i] !== nums[j - 1] ? `${nums[i]}->${nums[j - 1]}` : `${nums[i]}`);
            i = j;
        }
        j++;
    }

    // Handle the last element separately (see the first test case last element: 7)
    if (i < nums.length) {
        result.push(nums[i] !== nums[j - 1] ? `${nums[i]}->${nums[j - 1]}` : `${nums[i]}`);
    }

    return result;
};