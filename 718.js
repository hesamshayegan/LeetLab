// 718. Maximum Length of Repeated Subarray


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findLength(nums1, nums2) {
    
    const m = nums1.length;
    const n = nums2.length;

    // Initialize a 2D array dp with dimensions (m+1) x (n+1)
    // (M+1) x (N+1) to represent the subproblem solutions. 
    // This extra row and column are used as a base case or padding.
    const dp = [];
    for (let i = 0; i <= m; i++) {
        dp.push(new Array(n + 1).fill(0));
    }

    let maxLength = 0;

    // Fill the DP table and update the maximum length
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                maxLength = Math.max(maxLength, dp[i][j]);
            }
        }
    }

    return maxLength;
}


// nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]

// (m+1) x (n+1) dp

//     ""  1   2   3   2   1
// ""  0   0   0   0   0   0
// 3   0   0   0   1   0   0
// 2   0   0   1   0   2   0
// 1   0   1   0   0   0   3
// 4   0   0   0   0   0   0
// 7   0   0   0   0   0   0