// 125. Valid Palindrome

/**
 * @param {string} s
 * @return {boolean}
 */

/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {

    const lowercaseS = s.toLowerCase();

    let cleanedString = "";  
    let reversedString = "";

    for (const char of lowercaseS) {   
        if (/[a-zA-Z0-9]/.test(char)) {
            cleanedString += char;
        }
    }

    for (let i = cleanedString.length - 1; i >= 0; i--) {
        reversedString += cleanedString[i];
    }

    if (reversedString === "") return true;
    else if (cleanedString === reversedString) return true;
    else return false;
};