// 238. Product of Array Except Self 


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    let n = nums.length

    let res= [];

    let = prefix = 1;
    
    for (let i=0; i<n; i++) {

        res[i] = prefix
        prefix *= nums[i]

    };

    let suffix = 1;

    for (let i=n-1; i>=0; i--) {
        
        res[i] *= suffix 
        suffix *= nums[i]
    }

    return res    

}

/* 
TC : O(n)
SC : O(1) res doesn't count as the extra space  

use the same array of results:
1) to store all the prefix products (products of numbers before that index) at each index 
2) update the result, iterating from back to front, and store suffixed multiplied by the prefixes that are already stored
3) return the res

*/
