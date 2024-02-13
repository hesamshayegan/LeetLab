// 49. Group Anagrams


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let res = {}

    for (let str of strs) {

        let letterCodes = new Array(26).fill(0)

        for (char of str) {

            let code = char.charCodeAt(0) - 'a'.charCodeAt(0)
            letterCodes[code]++

        }

        let key = letterCodes.join("#");
        
        res[key] ? res[key].push(str) : res[key] = [str];

    }
    
    
    return Object.values(res)

};

/*

create a map s.t:
    its keys are arrays filled with letters frequencies in a string
    its values are arrays of all strings that has that keys. i.e. anagrams
*/