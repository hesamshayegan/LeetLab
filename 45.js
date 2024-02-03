// 45. Jump Game II

/**
 * @param {number[]} nums
 * @return {number}
 */

var jump = function(nums) {

    let jump = 0;
    let prev = 0;
    let max = 0;

    for (let i=0; i<nums.length-1; i++) {
        debugger;

        // keep track of the maximum jump
        max = Math.max(max, i+nums[i])

        // when I get to the index where I had my previous max jump, increse the jump..
        if (i === prev) {
            jump++
            prev = max
        }
        
    }
    
    return jump
    
};

/* 

[2,3,1,1,4]

At the beginning (i=0), I can jump up to 2 steps (max=2).
i = prev = 0 -> increase jump (jump++)
The next jump happens when I hit the last bit of the first jump's range [2][3,1] – that's when i becomes 2.

*/
