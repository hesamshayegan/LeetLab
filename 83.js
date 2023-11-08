// 83. Move Zeroes

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    let low = 0
    let high = low + 1
    let temp = 0;
    
    while (high < nums.length) {

        if (nums[low] !== 0) {
            low++
            high++
        }       

        else if (nums[low] === 0) {

            if (nums[high] !== 0) {
                temp = nums[low];
                nums[low] = nums[high];
                nums[high] = temp;

                low++
                high++
            }
            else  {
                high++
            }
        }
    }

    return nums

};