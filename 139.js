// 139. Word Break


/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    debugger;
    // Initialize an array to store whether substrings up to index i can be segmented
    let dp = new Array(s.length + 1).fill(false)

    // Base case: an empty string can always be segmented
    dp[0] = true;

    // Iterate over the input string
    for (let i = 0; i <= s.length; i++) {
        
        // If the substring up to index i can be segmented
        if (dp[i] === true) {
            
            // Check each word in the dictionary
            for (let word of wordDict) {
                
                // Check if the current substring from index i matches any word in the dictionary
                if (s.slice(i, i + word.length) === word) {
                    
                    // If a match is found, mark the next index as true in dp array
                    // This indicates that the substring up to this index + word length can be segmented
                    dp[i + word.length] = true
                }
            }
        }
    }

    // Return whether the entire string can be segmented
    return dp[s.length]
    
};

/*

Example:
Suppose s = "leetcode" and wordDict = ["leet","code"].

Initially, dp = [true, false, false, false, false, false, false, false, false].

When i = 0, dp[0] is true, indicating that an empty string can be segmented.

Then, for each index i, we check if dp[i] is true.

At i = 0, we find that dp[0] is true, so we iterate over each word in the dictionary.

We find that "leet" matches the substring from index 0 to 4, so we set dp[4] to true.

After completing the loop, dp = [true, false, false, false, true, false, false, false, false].

Continuing this process, we eventually reach dp[s.length], which is dp[8] in this case. 
Since it's true, the entire string can be segmented into words from the dictionary.

*/