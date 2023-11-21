// 557. Reverse Words in a String III

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

    let sArr = s.split(' ')
    let = res = ''

    for (let i=0; i<sArr.length; i++) {
        let word = [...sArr[i]]
        let left = 0;
        let right = word.length - 1 
        let temp = ''

        while (left < right) {

            temp = word[left]
            word[left] = word[right]
            word[right] = temp
            left++
            right--
        }
        res += word.join('') + ' '
    }

    return res.trim()

};


// var reverseWords = function(s) {
//     let res = '';
//     let word = '';
//     for (let c of s) {
//         debugger;
//         if (c === ' ') {
//             res += word + c;
//             word = '';
//         } else {
//             word = c + word;
//         }
//     }
//     return res + word;
// };