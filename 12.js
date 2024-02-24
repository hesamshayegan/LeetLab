// 12. Integer to Roman


/**
 * @param {number} num
 * @return {string}
*/
// 1st Soultion
// var intToRoman = function(num) {
    
//     let romanMapping = {
//         'M':  1000, 'CM': 900, 'D':  500, 'CD': 400,
//         'C':  100,  'XC': 90,  'L':  50,  'XL': 40,
//         'X':  10,   'IX': 9,   'V':  5,   'IV': 4, 'I':  1
//     }

//     let result = "";

//     for (let symbol in romanMapping) {
//         while (num >= romanMapping[symbol]) {
//             result += symbol;
//             num -= romanMapping[symbol];
//         }
//     }

//     return result;
// };



// 2nd Solution
var intToRoman = function(num) {

    const int = [1,4,5,9,10,40,50,90,100,400,500,900,1000]
    const roman = ['I','IV','V','IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']

    let i = int.length - 1
    let romanNum = "";

    while (num>0) {

        if (num - int[i] >= 0) {
            romanNum += roman[i]
            num = num - int[i]
        } 
        else {
            i--
        }
        
    }

    return romanNum

};