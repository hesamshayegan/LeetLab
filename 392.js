// 392. Is Subsequence


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
*/
var isSubsequence = function(s, t) {
    
    let pointer_s = 0;
    let pointer_t = 0;

    while (pointer_t < t.length && pointer_s < s.length) {

        if (s[pointer_s] === t[pointer_t]) {
            pointer_s++;
        }
        pointer_t++;
    }

    return pointer_s === s.length;
};