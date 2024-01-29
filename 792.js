// c


/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {

    // Initialize a dictionary to store indices of characters in the string 's'
    let lookup = {};
    // Initialize a count variable to keep track of the number of matching subsequences
    let count = 0;

    // Create lookup dictionary
    [...s].forEach((c, i) => {
        // If the character 'c' is already in the lookup, append the index 'i' to its list
        // Otherwise, create a new list with index 'i' for the character 'c'
        lookup[c] ? lookup[c].push(i) : (lookup[c] = [i]);
    });

    // Binary search function
    function bs(arr, i) {
        // debugger;
        let l = 0, r = arr.length;
        // Perform binary search to find the index of the first element greater than or equal to 'i'
        while (l < r) {
            let mid = Math.floor((l + r) / 2);
            if (i < arr[mid]) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }
        return l;
    }

    // Iterate through each word in the array 'words'
    for (let w of words) {
        // debugger;
        // Initialize the previous index to -1 for the first character in the word
        let prevIdx = -1;
        // Initialize a flag to track if the current word is a subsequence of 's'
        let found = true;

        // Iterate through each character 'c' in the current word 'w'
        for (let c of w) {
            // Check if the character 'c' is not in the lookup or its list is empty
            if (!lookup[c] || lookup[c].length === 0) {
                found = false;
                break;
            }

            // Use binary search to find the index of the first element greater than the previous index
            let tmp = bs(lookup[c], prevIdx);
            
            // If the index 'tmp' is equal to the length of the list, no such element was found
            // Set the 'found' flag to false and break the loop
            if (tmp === lookup[c].length) {
                found = false;
                break;
            } else {
                // Update the previous index to the found index for the next iteration
                prevIdx = lookup[c][tmp];
            }
        } 

        // If the entire word is a subsequence, increment the count
        if (found) {
            count++;
        }
    }

    // Return the final count of matching subsequences
    return count;
};


// The problem involves finding the number of words in an array that are subsequences of a given string s. 
// To efficiently determine if a word is a subsequence of s, we can pre-process s to store the positions of 
// each character in a dictionary. Then, for each word in the array, we can perform a binary search to find 
// the positions of its characters in s. If we can find valid positions for all characters in the word, 
// it is a subsequence.


// Time Complexity:
// The time complexity is determined by the nested loops and the binary search.

// Outer Loop: Iterates through each word in the words array. Let's denote the total number of words as m.
// Inner Loop: Iterates through each character in a word. Let's denote the maximum length of a word as n.
// Binary Search: The binary search within the inner loop has a time complexity of O(log k), where k is the length of the lookup list for a particular character.
// The overall time complexity is O(m * n * log k), where m is the number of words, n is the maximum length of a word, and k is the average size of the lookup lists.

// Space Complexity:
// The space complexity is determined by the storage of the lookup dictionary.

// Lookup Dictionary: Stores the indices of characters in the input string s. The space complexity is O(s), where s is the length of the input string.
// Summary:
// Time Complexity: O(m * n * log k)
// Space Complexity: O(s)