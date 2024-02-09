/*
You are given two strings - pattern and source. The first string pattern contains only the symbols 0 and 1, and the second string source contains only lowercase English letters.

Let's say that pattern matches a substring source[l..r] of source if the following three conditions are met:

they have equal length,
for each 0 in pattern the corresponding letter in the substring is a vowel,
for each 1 in pattern the corresponding letter is a consonant.
Your task is to calculate the number of substrings of source that match pattern.

Note: In this task we define the vowels as 'a', 'e', 'i', 'o', 'u', and 'y'. All other letters are consonants.

*/

function solution(pattern, source) {
  
    let len = pattern.length;
    let code = "";
    let count = 0;
    let vowels = {'a': "0", 'e': "0", 'i': "0", 'o': "0", 'u': "0", 'y': "0"}
    
    for (let char of source) {
      
      code = vowels[char] ? code += "0" : code += "1"
          
    }
      
    for (let i=0; i<code.length; i++) {
      
      let substr = code.slice(i,i+len)
          
      if (substr === pattern) {
        count++
      }
            
    }
     
    return count
    
  }