// 190. Reverse Bits


/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

var reverseBits = function(n) {
    // Initialize the result variable to store the reversed bits
    var result = 0;
    // Set the count variable to 32, representing the 32 bits in the input integer
    var count = 32;
  
    // Iterate through each bit position from left to right
    while (count--) {
      // Left shift the current result by 1 position to make room for the next bit
      result *= 2;
      // Use bitwise AND (&) with 1 to extract the rightmost bit of the original integer
      // Add the extracted bit to the result, effectively reversing its order
      result += n & 1;
      // Right shift the original integer by 1 position to move to the next bit
      n = n >> 1;
    }
  
    // Return the final result with reversed bits
    return result;
  };
  
  
  // N.B. Left shifting by 1 position is equivalent to multiplying by 2.
  // b = 1010 (10)
  // b << 1 = 10100 (20)