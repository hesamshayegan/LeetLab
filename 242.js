// 242. Valid Anagram


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// the idea is add frequency of all the characters of string "s" in terms of unicodes.
// and then substract of the frequency of all the characters of the string t
// if at the end all the elements of the counter are zero then two strings are anagram.

var isAnagram = function(s, t) {

    if (s.length !== t.length) {
      return false
    }
  
    let counter = new Array(26).fill(0)
  
    
    for (let i = 0; i < s.length; i++) {
      let unicode = s.charCodeAt(i) - 'a'.charCodeAt(0)
      counter[unicode] =  counter[unicode] ?  counter[unicode] + 1 : 1  
    }
  
    for (let j = 0; j < t.length; j++) {
      let unicode = t.charCodeAt(j) - 'a'.charCodeAt(0)
      counter[unicode] =  counter[unicode] ?  counter[unicode] - 1 : 1  
    }
  
    for (let freq of counter) {
      if (freq !== 0) return false
    }
    
    return true
      
  };
  
  // The code aboce is the solution to the follow up question (unicode)
  
  // first problem:
  // var isAnagram = function(s, t) {
  
  //   if (s.length !== t.length) {
  //     return false
  //   }
  
  //   let sArr = [...s]
  //   let tArr = [...t]
  //   let sLetters = {}
  //   let tLetters = {}
  
  //   sArr.forEach((char) => {
  //     sLetters[char] = sLetters[char] ? sLetters[char] + 1 : 1  
  //   })
  
  //   tArr.forEach((char) => {
  //     tLetters[char] = tLetters[char] ? tLetters[char] + 1 : 1  
  //   })
  
  //   for (let c of t) {
  //     console.log(c)
  //       if (sLetters[c] !== tLetters[c]) return false
  //   }
  
  //   return true
      
  // };  