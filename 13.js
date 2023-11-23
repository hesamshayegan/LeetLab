// 13. Roman to Integer


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    symbols = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let result = 0;

    for (let i=0; i<s.length; i++) {

        let curr = symbols[s[i]];
        let next = symbols[s[i+1]];
        
        if (curr < next ) {
            result += next - curr
            // increase the index by 1 in order to avoid adding twice the next number
            i++
        } else {
            result += curr            
        }
    }

    return result
    
};

// Trick: IV is 5 - 1 = 4. So I only need to check if the next digit is higher than current one or not.