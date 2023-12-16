// 804. Unique Morse Code Words


/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {

    const morse_codes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.",  "--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

    let morse = words.map(word => (
        word.split('').map(char => morse_codes[char.charCodeAt(0) - 'a'.charCodeAt(0)]).join('')
    ));

    let transformations = new Set(morse)

    return transformations.size
    
};


// above the compact solution

// var uniqueMorseRepresentations = function(words) {

//     const morse_codes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.",  "--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

//     let morse = words.map((word) => {
//         let  morseRepresentation= ""
//         for (let char of word) {
//             morseRepresentation += morse_codes[char.charCodeAt(0) - 'a'.charCodeAt(0)]
//         }

//         return morseRepresentation
//     })

//     let transformations = new Set(morse)

//     return transformations.size
    
// };