// 345. Reverse Vowels of a String

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(string) {
    
    let s = [...string]
    let left = 0;
    let right = s.length - 1;
    let temp = "";

    const vowles = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

    
    while (left < right) {

        if (vowles.indexOf(s[left]) !== -1 && vowles.indexOf(s[right]) !== -1 ) {

            temp = s[left]
            s[left] = s[right]
            s[right] = temp

            left++
            right--

        }
        else if (vowles.indexOf(s[left]) !== -1 && vowles.indexOf(s[right]) === -1) {
            right--

        }
        else if (vowles.indexOf(s[left]) === -1 && vowles.indexOf(s[right]) !== -1) {
            left++

        } 
        else {
            left++
            right--
        }

    }

    return s.join('')
    
};

// indexOf has a time complexity of O(1)
// I can also use a hashset for vowels. The hashmap lookup's time complexity is O(1)

// var reverseVowels = function(string) {

//     let s = [...string]
//     let left = 0;
//     let right = s.length - 1;
//     let temp = "";

//     const vowles = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])

    
//     while (left < right) {

//         if (vowles.has(s[left]) && vowles.has(s[right])) {

//             temp = s[left]
//             s[left] = s[right]
//             s[right] = temp

//             left++
//             right--

//         }
//         else if (!vowles.has(s[left])) {
//             left++

//         }
//         else {
//             right--

//         }

//     }

//     return s.join('')
    
// };