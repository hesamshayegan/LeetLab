// 1408. String Matching in an Array

/**
 * @param {string[]} words
 * @return {string[]}
 */

var stringMatching = function(words) {

    let substrings = new Set()

    for (let word of words) {
        for (sub of words) {
            if (word != sub && word.includes(sub)) {
                    substrings.add(sub)
            }
        }
    }

    
    return [...substrings]

};