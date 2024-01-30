// 349. Intersection of Two Arrays

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function(nums1, nums2) {

    let num1Set = new Set([...nums1])
    let num2Set = new Set([...nums2])
    
    let res = [];

    for (let num of num1Set) {
        if (num2Set.has(num)) {
            res.push(num)
        }
    }

    return res
    
};