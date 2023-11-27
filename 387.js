// 387. First Unique Character in a String


/***
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
    let freq = new Array(26).fill(0)

    

    for (let i=0; i<s.length; i++) {

        let idx = (s.charCodeAt(i) - 'a'.charCodeAt(0))
        freq[idx] += 1

    }

    for (let i=0; i<s.length; i++) {
        let idx = (s.charCodeAt(i) - 'a'.charCodeAt(0))
        if (freq[idx] === 1) return i

    }

    return -1

};

// keep track of frequency of each character in a 26-element array
// then loop through the array and return the index where count == 1