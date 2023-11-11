// 442. Find all duplicates in an array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {

    let res = []
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1
        
        if (nums[index] < 0) {
            res.push(index + 1)
        }

        nums[index] = -nums[index]


    }

    return res
    
};

// the result can be O(n) but I can't use an extra space to solve the problem (only O(1))
// The range is important: 1 <= nums[i] <= n;
// N.B. The value of an element can be ALSO an index within the array.
// Trick: I make the element, which is at the idx = value - 1, negative 
// ex. [4,3,2,7,8,2,3,1] --> nums[0] = 4 --> idx = 4 - 1 --> nums[3] = 7 becomes -7
// Now, if I encounter a negative number, it means that I have already seen that

// Why Math.abs(nums[i]) - 1: because the numbers go from 1 to the length of the array:
// [4,3,2,7,8,2,3,1] -> 1,2,3,4,5,6,7,8 but the last index is 8 - 1 (so I need -1)
// Math.abs to get the appropriate index (there is no - index)
