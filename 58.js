// 58. Length of Last Word


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let right = s.length-1;
    let length = 0;
    while (right >= 0) {
        if (s[right] === " " && length === 0) {
            right--         
        }
        else {
            if (s[right] === " ") return length
            else {
                length++
                right--
            }
        }
    }
    return length
};