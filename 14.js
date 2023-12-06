// 14. Longest Common Prefix


/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
    
    let res = ""

    // Iterate over the characters of the first string in the array
    for (let i=0; i<strs[0].length; i++) {
        // Iterate over each string in the array
        for (let s of strs) {
            // Check if the current character index is out of bounds for the current string
            // or if the character at the current index is not equal to the corresponding character
            // in the first string. If true, return the current common prefix.
            if (i === s.length || s[i] !== strs[0][i]) {
                return res
            }        
        }
        // If the inner loop completes without returning, append the current character to the common prefix
        res += strs[0][i]        
    }

    return res
}