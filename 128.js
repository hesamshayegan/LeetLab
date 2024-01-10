// 128. Longest Consecutive Sequence


/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    if (nums.length === 0) {
        return 0
    }
    
    let numSet = new Set(nums);
    
    let counter = 1;
    let longest = 1; 

    for (let num of numSet) {
        
        // If the current element 'num' is the start of a sequence (no 'num-1' in 'numSet')
        if (!numSet.has(num - 1)) { 
            counter = 1
            let currentNum = num

        // While consecutive elements exist in 'numSet', increment 'counter' and 'currentNum'.
            while (numSet.has(currentNum + 1)) {
                counter++
                currentNum++
            }
        }

        longest = Math.max(longest, counter)

    }

    return longest

};