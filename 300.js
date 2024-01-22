// 300. Longest Increasing Subsequence



/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {

    if (!nums || nums.length === 0) {
        return 0;
    }
    
    let n = nums.length;

    const dp = new Array(n).fill(1);

    for (let current=1; current<n; current++) {

        for (let previous=0; previous<current; previous++) {
            
            if (nums[current]>nums[previous]) {

                dp[current] = Math.max(dp[current], dp[previous]+1)

            }
        }
    }

    let maxLength = Math.max(...dp)

    return maxLength

};


// important: The subarray should not be necessarily contiguous!

// nums = [0,1,0,3,2,3]
// dp =   [1,1,1,1,1,1]
// if nums[i]>nums[j]
//      for each check: 
//          dp[current] = max(dp[current], dp[previous]+1)

// is 1>0: yes dp = [1,2,1,1,1,1] (max(1, 1+1))
// is 0>1: no
// is 0>0: no
// is 3>0: yes dp = [1,2,1,2,1,1] (max(1, 1+1)) 
// is 3>1: yes dp = [1,2,1,3,1,1] (max(2, 2+1))
// is 3>0: yes dp = [1,2,1,3,1,1] (max(3, 1+1))
// is 2>3: no
// if 2>0: yes dp = [1,2,1,3,2,1] max((1, 1+1))
// if 2>1: yes dp = [1,2,1,3,3,1] max(2, 2+1) 
// if 2>0 yes dp = [1,2,1,3,3,1] max((3,1+1))
// is 3>2: yes dp = [1,2,1,3,3,4] (max(1, 3+1))
// is 3>3: no
// is 3>0: yes dp = [1,2,1,3,3,4] max((4, 3+1))
// is 3>1: yes dp = [1,2,1,3,3,4] max((4, 2+1))
// is 3>0: yes dp = [1,2,1,3,3,4] max((4, 1+1))