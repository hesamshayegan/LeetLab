// 290. Word Pattern


/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    
    let words = s.split(' ')

    console.log(words)

    if (pattern.length !== words.length) return false

    const map = new Map()
    let usedWords = new Set()

    for (let i=0; i<pattern.length; i++) {

        if (!map.has(pattern[i])) {
            if (usedWords.has(words[i])) {
                return false; // Word is already mapped to a different pattern character
            }
            map.set(pattern[i], words[i]);
            usedWords.add(words[i]);
        } else {
            if (map.get(pattern[i]) !== words[i]) return false
        }

    }
    
    return true

};