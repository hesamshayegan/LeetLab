// 443. String Compression


/**
 * @param {character[]} chars
 * @return {number}
*/

var compress = function(chars) {
    
    let i = 0;
    let j = 0;

    while (j < chars.length) {
        let count = 0;
        let curr = chars[j];

        while (j < chars.length && chars[j] === curr) {
            j++;
            count++;
        }
        
        chars[i] = curr;
        i++

        if (count > 1) {
            for (let digit of count.toString()) {
                chars[i] = digit;
                i++
            }
        }
    }

    return i

};


/*

1. Identify consecutive repeating characters by comparing adjacent elements in the array.

2. Count the number of consecutive occurrences of each character.

3. Compress consecutive repeating characters into a single character followed by their count.

4. Traverse the array while updating it to reflect the compressed representation.

*/