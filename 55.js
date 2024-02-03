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
        // early exit condition
        if (maxStep <= i && nums[i] === 0) {
            return false;
        } 
    }

    return false

};

/*

It's a typical problem that can be solved by Greedy algorithm, which is an algorithm makes the optimal choice at each step as going forward.

I'll need to iterate over the nums starting from 0 to the last, and keep updating max to record how far I can jump so far.
max = Math.max(max, idx + nums[idx]);
And check if the max is greater or equal to the target at each step.

But I still can add a bit of optimization by checking an early exit condition when there is no way to move forward.
If a current value is 0, I cannot jump to the next. But there might be a way to jump farther from the previous step. How can I check that? max again!
max > idx then I can conclude I can go further from the previous step. Otherwise, it's impossible.

So the early exit condition is
if (max <= idx && nums[idx] === 0) { return false; }

*/