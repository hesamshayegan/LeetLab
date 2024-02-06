// 153. Find Minimum in Rotated Sorted Array


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    
    let left = 0;
    let right = nums.length - 1;
       

    while (left < right) {
        
        let mid = Math.floor((left + right) / 2)

        // If nums[mid] is greater than the last element,
        // then the minimum element must be in the right subarray
        if (nums[mid] > nums[right]) {
            left = mid +1
        }
         // Otherwise, the minimum element is in the left subarray
        else {
            right = mid
        }

    }
    
    // At the end of the loop, left == right and points to the minimum element
    return nums[left]

};

// TC: O(logn)
// SC: O(1)