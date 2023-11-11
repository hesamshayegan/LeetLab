// 5. Longest Palindromic Substring

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    let res = '';
    let resLength = 0;

    
    for (let i = 0; i < s.length; i++) {

        // odd length
        let left = i
        let right = i

        // s[left] === s[right] checks if the substring is a palindrome
        while (left >= 0 && right < s.length && s[left] === s[right]) {

            // check if the current substring is the longest so far if yes I update the resLength
            if ((right - left + 1) > res.length) {
                res = s.slice(left, right+1)
                resLength = right - left + 1
            }
            left--
            right++
        }

        // even length
        left = i
        right = i + 1 // this means that the center includes two characters
        while (left >= 0 && right < s.length && s[left] === s[right]) {

            if ((right - left + 1) > res.length) {
                res = s.slice(left, right+1)
                resLength = right - left + 1
            }
            left--
            right++
        }
    }
    
    return res

};

// Strategy: consider a character and expand to the left & right. (expand-around-center approach)
// palindromic substrings could have odd or even lengths --> aba; axxa