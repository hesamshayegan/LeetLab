// 28. Find the Index of the First Occurrence in a String


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    if (needle.length > haystack.length) return -1

    for (let i=0; i<haystack.length; i++) {
        
        // j is the incrementor 
        for (let j=0; j<needle.length; j++) {
            
            // break if the character of substring starting from i incrementing by j is different than needle
            if (haystack[i+j] != needle[j]) break
            
            // if it reaches the end of the needle return the index
            if (j === needle.length - 1) return i

        }

    }

    return -1

};