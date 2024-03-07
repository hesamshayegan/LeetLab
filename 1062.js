// 1062. Longest Repeating Substring


var longestRepeatedSubstring = function(s) {
    
    let n = s.length;

    // binary search algo
    // lower and higher length of boundary
    let left = 1;
    let right = n;

    while (left <= right) {
        // debugger;
        let mid = Math.floor(left +((right - left) / 2));
        
        // If a repeating substring is found, it means that there might be longer repeating substrings.
        // So, I update the lower bound (left) to mid + 1 to search for longer substrings in the higher length range.
        if (search(mid, n, s)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // When the while loop finishes, either left or right is OK because they are equal
    return left - 1;
};

// helper function
function search(mid, n, s) {
    let seen = new Set();
    let subStr;
    
    // the loop should stop before n - mid + 1, as n - mid is the last valid starting index.
    // For the upper bound, I can't use start + mid + 1 instead of n - mid + 1 cuz start is changing!
    for (let start = 0; start < n - mid + 1; start++) {
        // debugger;
        subStr = s.slice(start, start + mid);

        if (seen.has(subStr)) {
            return true;
        }

        seen.add(subStr);
    }

    return false;
}



// longestRepeatedSubstring("abcd") -> 0
// longestRepeatedSubstring("abbaba") -> 2 
// longestRepeatedSubstring("aabcaabdaab") -> 3
// longestRepeatedSubstring("aaaaa") -> 4



// 1. Set the low and high bounds for the length of the repeating substring. Initialize low as 1 and high as the length of the string.

// 2. While low is less than or equal to high, perform binary search.

// 3. For each mid-point, check, using a helper function, if there exists a repeating substring of length at least mid in the string using a hashSet .

// 4. If a repeating substring is found, update the low bound to mid + 1, else update the high bound to mid - 1.

// 5. Continue the binary search until low is greater than high.

// 6. The answer is the length of the repeating substring found during the binary search.