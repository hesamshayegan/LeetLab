// 229. Majority Element II

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {

    let freq = {}
    let output = []
    let n = nums.length

    nums.forEach(num => {
        freq[num] = freq[num] ? freq[num] + 1 : 1
    })
    
    for (let num in freq) {

        if (freq[num] > Math.floor(n/3)) {
            output.push(num)
        }

    }

    return output
    
};