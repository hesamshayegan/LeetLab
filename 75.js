// 75. Sort Colors

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
*/
// one-pass approach

function sortColors(nums) {
    
    let left = 0;
    let right = nums.length - 1;
    let i = 0;

    
    while (i <= right) {

        if (nums[i] === 0) {

            // If current element is 0, swap it with element at left pointer
            [nums[i], nums[left]] = [nums[left], nums[i]];
            left++; // Move left pointer to the right
            i++; // Move current position pointer to the right

        } else if (nums[i] === 2) {

            // If current element is 2, swap it with element at right pointer
            [nums[i], nums[right]] = [nums[right], nums[i]];
            right--; // Move right pointer to the left
            // Note that we don't increment i here, as the swapped element from right could be 0
            // So, we need to reevaluate the current element after swapping

        } else {
            // If current element is 1, leave it in its position and move to the next one
            i++; 
        }
    }
    
    return nums;
    
}


// brute force - two-pass approach
/*
var sortColors = function(nums) {

    let zero = 0;
    let one = 0;
    let two = 0;

    for (let num of nums) {
        if (num === 0) zero++
        if (num === 1) one++
        if (num === 2) two++
    }

    nums.length = 0

    for (let i=0; i<zero; i++) nums.push(0);
    for (let i=0; i<one; i++) nums.push(1);
    for (let i=0; i<two; i++) nums.push(2);
    
    return nums

};
*/