// 80. Remove Duplicates from Sorted Array II


/**
 * @param {number[]} nums
 * @return {number}
 */

const removeDuplicates = (nums) => {
    let j = 2;
  
    for (let i = 2; i < nums.length; i++) {
      if (nums[i] !== nums[j - 2]) {
        nums[j++] = nums[i];
      }
    }
    
    return j;
  };
  
  // 1. Initialize a variable j to 2. This will keep track of the index where the next non-duplicate element should be placed.
  
  // 2. Iterate over the array nums starting from index 2 (since the first two elements are allowed to appear twice).
  
  // a. For each index i starting from 2 and going up to the length of nums:
  // i. Check if the current element nums[i] is not equal to the element at index j - 2. This condition ensures that we're only allowing duplicates to appear twice.
  // ii. If the condition is true, assign the value of nums[i] to the position nums[j] (j being the next available index for a non-duplicate element) and increment j by 1.
  
  // 3. After the loop, the variable j now holds the count of unique elements with duplicates allowed at most twice.
  
  // 4. Return the value of j as the new length of the modified array.