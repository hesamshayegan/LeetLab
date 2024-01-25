// 16. 3Sum Closest


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {

    let threeSum = 0;
    nums.sort((a,b) => a-b);

    let closestSum = Infinity;

    for (let i=0; i<nums.length; i++) {

        let left = i+1;
        let right = nums.length - 1;

        while (left<right) {

            threeSum = nums[i] + nums[left] + nums[right]
            
            if (Math.abs(threeSum - target) < Math.abs(closestSum - target)) {

                closestSum = threeSum

            }

            if (threeSum > target) {
                right--
            } else {
                left++
            }
        }
        
    }

    return closestSum  

    
}


// follow-up:
// Can  you achieve O(1) memory complexity? 
// Yes, I can use the selection sort instead of a built-in sort in the Two Pointers approach.
// But, it'll make the overall time complexity a bit slower.