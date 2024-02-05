// 9. palindrome number


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    let numStr = x.toString();

    let left = 0;
    let right = numStr.length - 1;

    while (left<right) {

        if (numStr[left] !== numStr[right]) {
            return false
        }
        left++
        right--
    }

    return true

    
};