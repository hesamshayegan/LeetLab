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
  
  // The code above is the solution to the follow up question (unicode)
  
  // first problem:
  
  /*
  var isAnagram = function(s, t) {
    
    if (s.length !== t.length) {
        return false
    }

    let freqS = calculateFreq(s)
    let freqT = calculateFreq(t)

    for (let char of t) {

        if (freqS[char] !== freqT[char]) {
            return false
        }
    }

    return true

};

function calculateFreq(str) {
    
    let freq = {}
    for (let char of str) {
        freq[char] = freq[char] ? freq[char] + 1 : 1
    }

    return freq

}
*/