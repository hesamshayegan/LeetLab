// 268. Missing Number


/**
 * @param {number[]} nums
 * @return {number}
 */

var missingNumber = function(nums) {

    let sum = nums.reduce((acc,curr) => acc + curr, 0)

    let min = Math.min(...nums)
    let max = nums.length
    
    let expectedSum = 0;
    for (let i=min; i<=max; i++) {
        expectedSum += i
    }
    
    return (expectedSum - sum)
    
};

/*
for the range of [0,3] I calculate the total sum over this range = 0+1+2+3 = 6
I calculate the sum over the nums = [3,0,1] --> sum = 4
6 - 4 = 2 (Missing Number)

var missingNumber = function(nums) {
    
    let range = [] 
    for (let i=0; i <= nums.length ; i++) {
        range.push(i)
    }
    let expectedSum = range.reduce((acc,curr) => acc += curr)
    let sum = nums.reduce((acc,curr) => acc += curr)

    return expectedSum - sum
    
};
*/