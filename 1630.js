// 1630. Arithmetic Subarrays


/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    
    let res = [];

    for (let i=0; i<l.length; i++) {

        let left = l[i];
        let right = r[i];

        let slicedArr = nums.slice(left, right+1);

        // sort the subarray
        slicedArr.sort((a,b) => a - b)

        res.push(isArithmetic(slicedArr))

    }

    return res

};

// check if is arithmetic
function isArithmetic(arr) {


    for (let i=1; i<arr.length; i++) {

        if (arr[1] - arr[0] !== arr[i] - arr[i-1]) {
            return false
        }
    }

    return true
    
}