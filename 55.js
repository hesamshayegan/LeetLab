// 55. Jump Game

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {

    let maxStep = 0
    
    for (let i=0; i<nums.length; i++) {
        
        maxStep = Math.max(maxStep, i + nums[i])

        if (maxStep >= nums.length-1) {
            return true
        }

        if (maxStep <= i && nums[i] === 0) {
            return false;
        } 
    }

    return false

};