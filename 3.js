// 3. Longest Substring Without Repeating Characters

/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    let seen = new Set()
    let max = 0;
    let left = 0;
    let right = 0;

    while (right<s.length) {
        
        // If s[right] has not been seen yet, add it to the set
        if (!seen.has(s[right])) {
            seen.add(s[right]);
            right++;
            max = Math.max(max, right - left);
        }
        else {
            // We've seen s[right] so we need to shrink the window
            seen.delete(s[left]);
            left++;
        }
    }

    return max

};