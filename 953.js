// 953. Verifying an Alien Dictionary

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */


// var isAlienSorted = function(words, order) {

//     let lexOrder = {}
//     let position = 1
//     lexOrder[undefined] = 0

//     for (char of order) {

//         lexOrder[char] = position
//         position++
//     }
//     console.log(lexOrder)
  
//     for (let i=0; i < words.length - 1; i++ ) {

//         for (let j=0; j < words[i].length; j++ ) {

//             if ( j > words[i].length - 1) {
//                 return false
//             }

//             else if (lexOrder[words[i][j]] > lexOrder[words[i+1][j]]) {
                
//                 return false

//             } else if (lexOrder[words[i][j]] < lexOrder[words[i+1][j]]) {
//                 console.log('inner loop')
//                 break; // move to the next word
//             }
//         }
//     }

//     return true  
// };


// The outer loop iterates through the words, so it has a time complexity of O(N).

// The inner loop iterates through the characters of each word. In the worst case, 
// when you have a very long word, this loop will run M times, where M is the length of the longest word.

// Combining both loops, you get O(N * M) as the worst-case time complexity.

// As for space complexity, it is O(1) because you are using a constant amount of additional space 
// (the lexOrder object and a few variables) that doesn't depend on the input size. The lexOrder object
//  has a fixed size because it is based on the given order of characters, and you don't create any additional 
//  data structures that depend on the input size.

var isAlienSorted = function(words, order) {
    
    let orderIndex = {};
    let position = 1
    orderIndex[undefined] = 0

    for (char of order) {

        orderIndex[char] = position
        position++
    }

    for (let i=0; i<words.length-1; i++) {
        // debugger;

        let w1 = words[i];
        let w2 = words[i+1];

        for (let j=0; j<w1.length; j++) {
            
            // if the prefix comes after: ['hello', 'hel']
            if ( j > w1.length - 1) {
                return false
            }
            
            // if the characters are ordered correctly
            else if (orderIndex[w1[j]] > orderIndex[w2[j]]) {
                return false
            }
            
            else if (orderIndex[w1[j]] < orderIndex[w2[j]]) {
                break;
            }
        }
                
    }
    
    return true

} 