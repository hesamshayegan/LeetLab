// 349. Intersection of Two Arrays

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function(nums1, nums2) {

    let uniqueSet1 = new Set([...nums1]);
    let uniqueSet2 = new Set([...nums2]);

    let uniqueArray2 = [...uniqueSet2];

    let result = [];


    for (let i = 0; i < uniqueArray2.length; i++) {

        if (uniqueSet1.has(uniqueArray2[i])) {
            result.push(uniqueArray2[i]);
        }
    }

    return result;
};