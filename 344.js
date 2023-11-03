// 344. Reverse String

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
*/

var reverseString = function(s) {

    let left = 0;
    let right = s.length - 1;
    let temp = "";
 
    while (left < right) {
 
       temp = s[left]
       s[left] = s[right]
       s[right] = temp
       
       left++
       right--
    }
    
    return s
 }


// The time complexity of this code is O(n/2), where n is the length of the input array s. However,
// the constant factor of 1/2 is dropped in big O notation. So, the time complexity simplifies to O(n),
// where n is the length of the array.

// The code uses a constant amount of additional space regardless of the input size. It only declares a few variables
// (left, right, and temp) and performs swaps in-place without using any additional data structures.
// The space complexity of this code is O(1), indicating that it uses a constant amount of space regardless of the size of
// the input array.