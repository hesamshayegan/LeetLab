// 415. Add Strings

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {

    let i = num1.length - 1;
    let j = num2.length - 1;

    let carry = 0;
    let res = ''

    // the loop runs until i or j are higher than 0 or there is the last carry to add to the res
    while (i >= 0 || j >= 0 || carry > 0) {

        // i or j less than 0 means one of the number las lower length
        // Substraction of the ASCII code of a number as string from 0 is the number
        let digit1 = i < 0 ? 0 : num1.charAt(i) - '0'
        let digit2 = j < 0 ? 0 : num2.charAt(j) - '0'

        let digitSum = digit1 + digit2 + carry
        
        // example 456 + 077 
        // -> 6+7 = 13 => 3; carry = 1
        // -> 5+6 + carry = 12 + 1 = 13; carry = 1
        // -> 4+0 + 1 = 5
        res =`${digitSum % 10}${res}`
        carry = Math.floor(digitSum / 10);

        i--
        j--
    }
    
    return res

};

// 456 
// 077