// 884. Uncommon Words from Two Sentences


/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    
    let words = [...s1.split(' '),...s2.split(' ')];

    let freq = {};

    let uncommonWords = new Set();

    for (let word of words) {
        freq[word] = freq[word] ? freq[word] + 1 : 1

        // console.log('before', word,uncommonWords)
        if (freq[word] === 1) {
            uncommonWords.add(word)
            
        } else {
            uncommonWords.delete(word)
        }

        // console.log('after', word,uncommonWords)
    }

    return [...uncommonWords]

};

// could sentences be empty?
// is there any leading/ tailing spaces?
// is punctuation considered part of the sentence?

// see the above solution for a more compact approach
// var uncommonFromSentences = function(s1, s2) {
    
//     let arr1 = s1.split(' ')
//     let arr2 = s2.split(' ')
    
//     let freq1 = {}
//     let freq2 = {}

//     let res = []

//     for (let word of arr1) {
//         freq1[word] = freq1[word] ? freq1[word] + 1 : 1
//     }

//     for (let word of arr2) {
//         freq2[word] = freq2[word] ? freq2[word] + 1 : 1
//     }

//     for (let word in freq1) {
//         if (freq1[word] === 1 && !freq2[word]) {
//             res.push(word)
//         } 
//     }

//     for (let word in freq2) {
//         if (freq2[word] === 1 && !freq1[word]) {
//             res.push(word)
//         } 
//     }

//     return res
   
// };