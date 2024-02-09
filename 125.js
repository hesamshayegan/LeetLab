// 125. Valid Palindrome



/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
    
    let lowerCasedS = s.toLowerCase();
    let newS = "";

    for (char of lowerCasedS) {
        if (/^[a-zA-Z0-9]/.test(char)) {
            newS += char
        } 
    }

    let left = 0;
    let right = newS.length - 1

    while (left<right) {

        if (newS[left] !== newS[right]) return false
        left++
        right--        
    }

    return true

};

/*
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

*/