// 13. Roman to Integer


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    let symbols = {
        'I': 1, "IV": 4, "V": 5, "IX": 9, "X": 10,
        "XL": 40, "L": 50, "XC": 90, "C": 100,
        "CD": 400, "D": 500, "CM": 900, "M": 1000,
    }

    let right = s.length - 1;
    let num = 0;
    
    while (right>=0) {

        if (symbols[s[right-1]+s[right]]) {
            num += symbols[s[right-1]+s[right]]
            right -= 2
        } else {
            num += symbols[s[right]]
            right--
        }
    }
    
    return num
};


// var romanToInt = function(s) {

//     symbols = {
//         'I': 1,
//         'V': 5,
//         'X': 10,
//         'L': 50,
//         'C': 100,
//         'D': 500,
//         'M': 1000
//     }

//     let result = 0;

//     for (let i=0; i<s.length; i++) {

//         let curr = symbols[s[i]];
//         let next = symbols[s[i+1]];
        
//         if (curr < next ) {
//             result += next - curr
//             // increase the index by 1 in order to avoid adding twice the next number
//             i++
//         } else {
//             result += curr            
//         }
//     }

//     return result
    
// };

// Trick: IV is 5 - 1 = 4. So I only need to check if the next digit is higher than current one or not.