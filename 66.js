// 66. Plus One


/**
 * @param {number[]} digits
 * @return {number[]}
 */


var plusOne = function(digits) {

    let i = digits.length - 1;

    while (i >= 0) {
        
        if (digits[i] < 9) {
            digits[i] += 1
            return digits
        }

        else if (digits[i] === 9) {
            digits[i] = 0
            if (i === 0) {
                digits.unshift(1)
            }
        }
        i--
    }

    return digits
      
};


// var plusOne = function(digits) {

//     for (let i=digits.length -1; i >=0; i--) {

//         if (digits[i] < 9) {

//                 digits[i] += 1
//                 return digits ;
//         }

//         else if (i !== 0 && digits[i] === 9) {  

//             digits[i] = 0

//         } else {

//             digits[i] = 0
//             digits.unshift(1)

//         }
//     }
//    return (digits)
  
// };