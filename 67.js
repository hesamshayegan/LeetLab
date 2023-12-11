// 67. Add Binary

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(num1, num2) {

    let i = num1.length - 1;
    let j = num2.length - 1;

    let carry = 0;
    let res = ''

    while (i >= 0 || j >= 0 || carry > 0) {

        // i < 0 ? 0 checks if I have reached the end of the string otherwise I'm still within the valid range of indices
        let digit1 = i < 0 ? 0 : num1.charAt(i) - '0'
        let digit2 = j < 0 ? 0 : num2.charAt(j) - '0'

        let digitSum = digit1 + digit2 + carry
        
        res =`${digitSum % 2}${res}`
        console.log('res', res)
        carry = Math.floor(digitSum / 2);

        i--
        j--
    }

    return res
}

// 111
// 011
// step1) 1 + 1 + carry (=0) = 2; carry = 1 (digitalSum = 2 / 2)
// step2) 1 + 1 + carry (=1) = 3; carry = 1 (digitalSum = 3 / 2)
// step3) 1 + 0 + carry (=1) = 2; carry = 1 (digitalSum = 2 / 2)
// step4) 0 + 0 + carry (=1) = 1; carry = 0 (digitalSum = 1 / 2)

// console.log:
// res 0
// res 10
// res 010
// res 1010

// Binary Sum
//   0 +  0 = 0; carry = 0  
//   1 +  0 = 1; carry = 0 
//   0 +  1 = 1; carry = 0
//   1 +  1 = 0; carry = 1