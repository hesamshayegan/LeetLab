// 763. Partition Labels

/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {

    let lastIndex = {}
    let output = []
    
    for (let i=0; i<s.length; i++) {
        lastIndex[s[i]] = i
    }

    let size = 0;
    let end = 0;
    
    for (let i=0; i<s.length; i++) {
        size++
        end = Math.max(end, lastIndex[s[i]])

        if (i === end) {
            output.push(size)
            size = 0
        }

    }

    return output
};

// SC: O(26) -> O(1) max 26 english letters