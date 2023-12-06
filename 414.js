// 414. Third Maximum Number


/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {

    let sorted = nums.sort((a,b) => a - b)

    let unique = new Set(sorted)

    let numsArr = [...unique]

    if (numsArr.length >= 3) return numsArr[numsArr.length - 3]
    else return Math.max(...numsArr)

}