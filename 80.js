// 80. Remove Duplicates from Sorted Array II


/**
 * @param {number[]} nums
 * @return {number}
*/
var removeDuplicates = function(nums) {

  let left = 0;
  let right = 0;

  while (right<nums.length) {
      
      count = 1;

      // while the number is equal to the next one 
      // right + 1 < nums.length ensures we reamin in bounds.
      // it could have 1,2,3,... values
      while (nums[right] === nums[right+1] & right + 1 < nums.length) {

          count++;
          right++;

      }
      // I want to make only a copy of 2 of the value above
      // Math.min(2, count) beacuse num can be either one or two. so I take the min
      for (let i=0; i<Math.min(2, count); i++) {
          nums[left] = nums[right]
          left++
      }

      right++
  
  }
  
  return left
};

// const removeDuplicates = (nums) => {
//     let j = 2;
  
//     for (let i = 2; i < nums.length; i++) {
//       if (nums[i] !== nums[j - 2]) {
//         nums[j++] = nums[i];
//       }
//     }
    
//     return j;
//   };
  
  // 1. Initialize a variable j to 2. This will keep track of the index where the next non-duplicate element should be placed.
  
  // 2. Iterate over the array nums starting from index 2 (since the first two elements are allowed to appear twice).
  
  // a. For each index i starting from 2 and going up to the length of nums:
  // i. Check if the current element nums[i] is not equal to the element at index j - 2. This condition ensures that we're only allowing duplicates to appear twice.
  // ii. If the condition is true, assign the value of nums[i] to the position nums[j] (j being the next available index for a non-duplicate element) and increment j by 1.
  
  // 3. After the loop, the variable j now holds the count of unique elements with duplicates allowed at most twice.
  
  // 4. Return the value of j as the new length of the modified array.