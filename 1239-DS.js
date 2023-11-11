// 1239. Maximum Length of a Concatenated String with Unique Characters


/**
 * @param {string[]} arr
 * @return {number}
 */

var maxLength = function(arr) {

    // Set to keep track of unique characters
    let charSet = new Set()

    // Helper function to check for overlapping characters
    function overlap(charSet, s) {
        let prev = new Set()
        
        for (let c of s) {
            if (charSet.has(c) || prev.has(c)) {
                console.log(c)
                console.log(charSet.has(c), prev.has(c))
                return true;
            }
            prev.add(c);
        }
        return false;
    }

    // Backtracking function to explore all possible concatenations
    function backtrack(i) {
        if (i === arr.length) {
            return charSet.size; // Base case: Return the size of the set when all strings are processed
        }
        
        let res = 0;

        // Check for overlap with the current string in the array
        if (!overlap(charSet, arr[i])) {
            // If no overlap, add characters to the set and continue exploring
            for (let c of arr[i]) {
                console.log('c, arr[i]', c, arr[i])
                charSet.add(c);
                console.log(charSet)
            }
            res = backtrack(i + 1);

            // Remove characters added for backtracking to explore other possibilities
            for (let c of arr[i]) {
                charSet.delete(c);
            }
        }

        // Continue exploring without including the current string
        return Math.max(res, backtrack(i + 1));
    }

    // Start backtracking from the first string in the array
    return backtrack(0);
};