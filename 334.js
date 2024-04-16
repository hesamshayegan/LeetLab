// 334. Increasing Triplet Subsequence

/**
 * @param {number[]} nums
 * @return {boolean}
*/

// finds the increasing triplets
var increasingTriplet = function(nums) {

    let firstNumber = Infinity;
    let secondNumber = Infinity;

    for (let currentNumber of nums) {
        
        if(currentNumber > secondNumber && currentNumber > firstNumber) {
            return true
        }

        // update firstNumber & secondNumber
        if(currentNumber > firstNumber) {
            secondNumber = currentNumber
        } else {
            firstNumber = currentNumber
        }
    };

    return false
    
};