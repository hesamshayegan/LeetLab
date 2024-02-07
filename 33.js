// 33. Search in Rotated Sorted Array


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
*/

var search = function(nums, target) {
   
    let left = 0
    let right = nums.length - 1
    
    while (left <= right) {

        const mid = Math.floor((left+right)/2)
        const midVal = nums[mid]

        if (midVal === target) {
            return mid
        }

        // when mid value is on the left sorted portion of the array
        if (nums[left] <= midVal) {
            if (target > midVal || target < nums[left]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        } 

        // when mid value is on the right sorted portion of the array
        else {
            if (target > nums[right] || target < midVal) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
    }
    return -1
};



/* 

[4,5,6,7,0,1,2] -> nums[mid] = 7

if mid belongs to the left side of the array (nums[mid] >= left) 
case 1) for target = 0
    0 > nums[mid]? No 
    0 < nums[left=0] Yes (comparison with most-left element)-> I have to look on the right side of the array -> left = mid + 1
    ...

case 2) for taget = 6 
    6 > nums[mid]? No
    6 < nums[left=0] No (comparison with most-left element) -> I have to look on the left side of the array -> right = mid -1
    ...

This holds also when mid belongs to the right side of the array

*/ 