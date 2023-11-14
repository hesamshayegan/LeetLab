// 977. Squares of a Sorted Array


/**
 * @param {number[]} nums
 * @return {number[]}
*/

var sortedSquares = function(nums) {

    let left = 0;
    let right = nums.length - 1;
    const numsSq = [];

    while (left <= right) {

        let num1Sq = nums[left] ** 2
        let num2Sq = nums[right] ** 2

        if (num1Sq >= num2Sq) {
            numsSq.unshift(num1Sq)
            left++   
        }
        else {
            numsSq.unshift(num2Sq)
            right--
        }

    }

    return numsSq

};

// TC: O(n)
// SC: O(n)