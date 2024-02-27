// 890. Find and Replace Pattern

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
*/

var findAndReplacePattern = function(words, pattern) {
    
    
    let res = []

    for (let i=0; i<words.length; i++) {

        const str = words[i]
        
        if (pattern.length !== words[i].length) continue
        
        if (isDirectPermutation(str, pattern) && isReversedPermutation(str, pattern)) {
            res.push(words[i])
        }
    }
    return res

};


function isDirectPermutation(str, pattern) { 
    let mapDirect = {}
    for (let j=0; j<str.length; j++) {
            if (!mapDirect[pattern[j]]) {
                mapDirect[pattern[j]] = str[j] 
            }       
            else if (mapDirect[pattern[j]] !== str[j]) return false
    }
    return true
}

function isReversedPermutation(str, pattern) { 
    let mapReversed = {}
    for (let j=0; j<str.length; j++) {
            if (!mapReversed[str[j]]) {
                mapReversed[str[j]] = pattern[j]
            }       
            else if (mapReversed[str[j]] !== pattern[j]) return false
    }
    return true
}