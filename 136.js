// 136. Single Number

/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {
    
    let res = 0

    for (let num of nums) {

        res =  res ^ num

    }

    return res

};


// XOR : ^
// 0 ^ 0 = 0; 1 ^ 1 = 0
// 1 ^ 0 = 1; 0 ^ 1 = 0


// The solution with hashset (SC: O(n))

// var singleNumber = function(nums) {
    
//     let set = new Set()

//     for (let num of nums) {
        
//         if (set.has(num)) {
//             set.delete(num)
//         } else {
//             set.add(num)
//         }
//     }

//     return [...set]

// };