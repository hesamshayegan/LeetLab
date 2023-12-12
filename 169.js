// 169. Majority Element


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    let res = 0;
    let count = 0;

    for (let num of nums) {

        if (count === 0) {
            res = num
        }

        if (num === res) {
            count += 1
        } else {
            count -= 1
        }

    }

    return res

};


// TC: O(n) SC: O(n)
// var majorityElement = function(nums) {

//     let freq = {}
//     let maxCount = 0
//     let res = 0

//     for (let num of nums) {
//         freq[num] = freq[num] ? freq[num] + 1 : 1
//     } 

//     for (let num in freq) {
//         res = freq[num] > maxCount ? num : res
//         maxCount = Math.max(freq[num], maxCount)
//     }

//     return res


// };