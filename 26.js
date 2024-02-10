// 26. Remove Duplicates from Sorted Array


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let low = 0;
    let high = low + 1;
    
    while (high<nums.length) {
        if (nums[low] === nums[high]) {
            high++
        } else {
            nums[low+1] = nums[high]
            low++
            high++
        }
    }

    return low+1
    
};


/* 
low pointer keeps track of unique elements
high pointer keeps track of repeated elements

low:0, high:1 ---> [0,0,1,1,1,2,2,3,3,4] 
low:0, high:2 ---> [0,0,1,1,1,2,2,3,3,4]
              ---> [0,1,1,1,1,2,2,3,3,4] 
low:1, high:3 ---> [0,1,1,1,1,2,2,3,3,4]
low:1, high:4 ---> [0,1,1,1,1,2,2,3,3,4]
low:1, high:5 ---> [0,1,1,1,1,2,2,3,3,4]
              ---> [0,1,2,1,1,2,2,3,3,4] 
low:2, high:6 ---> [0,1,2,1,1,2,2,3,3,4]
low:2, high:7 ---> [0,1,2,1,1,2,2,3,3,4]
              ---> [0,1,2,3,1,2,2,3,3,4]
low:3, high:8 ---> [0,1,2,3,1,2,2,3,3,4]
low:3, high:9 ---> [0,1,2,3,1,2,2,3,3,4]
              ---> [0,1,2,3,4,2,2,3,3,4]
low:4, high:10

return low + 1 = 4 + 1 ---> [0,1,2,3,4]

*/

