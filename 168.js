// 168. Excel Sheet Column Title


/**
 * @param {number} columnNumber
 * @return {string}
 */

var convertToTitle = function(columnNumber) {

    
    let res = '';

    while (columnNumber > 0) {
        
        debugger;
        let offset = (columnNumber - 1) % 26;

        res = String.fromCharCode(offset + ('A').charCodeAt(0)) + res

        columnNumber = Math.floor((columnNumber - 1) / 26);
    }
    
    return res;

};


// 1 - 26 are mapped to A - Z. So, the first letter corresponds to 1.
// columnNumber-1 because I'm offset by 1.

// res = String.fromCharCode(offset + ('A').charCodeAt(0)) + res 
// I build the column from right to left. ex. 28 is AB. ---> first B then A

// Time complexity is log(n)

// In each iteration of the while loop, you divide columnNumber by 26 using Math.floor((columnNumber - 1) / 26),
// and this operation reduces the value of columnNumber significantly. The number of iterations required to reduce
// columnNumber to zero is determined by the logarithm of columnNumber with base 26. Therefore, the time complexity
// is logarithmic in terms of the input columnNumber.
