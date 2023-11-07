// 680. Valid Palindrome II

/**
 * @param {string} s
 * @return {boolean}
 */

var validPalindrome = function(s) {
    
    let left = 0;
    let right = s.length - 1;

    while (left < right) { 

        if (s[left] !== s[right]) {
            return isPalindrome(s, left+1, right) || isPalindrome(s, left, right-1)
        }
        
        left++
        right--
    }
    return true;

}

function isPalindrome(str, left, right) {

    while (left < right) {

        if (str[left] !== str[right]) return false
        left++;
        right--
    }

    return true

}

// aaaz
// azaa

// The time complexity is O(N), where N is the length of the input string s.
// This is because both the validPalindrome and isPalindrome functions iterate
// through the characters in the string linearly. Therefore, the overall time
// complexity of the solution is O(N).