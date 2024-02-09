/*
Given an array of integers a, your task is to count the number of pairs i and j (where 0 ≤ i < j < a.length), such that a[i] and a[j] are digit anagrams.

Two integers are considered to be digit anagrams if they contain the same digits. In other words, one can be obtained from the other by rearranging the digits (or trivially, if the numbers are equal). For example, 54275 and 45572 are digit anagrams, but 321 and 782 are not (since they don't contain the same digits). 220 and 22 are also not considered as digit anagrams, since they don't even have the same number of digits.

Example

For a = [25, 35, 872, 228, 53, 278, 872], the output should be solution(a) = 4.

There are 4 pairs of digit anagrams:

a[1] = 35 and a[4] = 53 (i = 1 and j = 4),
a[2] = 872 and a[5] = 278 (i = 2 and j = 5),
a[2] = 872 and a[6] = 872 (i = 2 and j = 6),
a[5] = 278 and a[6] = 872 (i = 5 and j = 6).

*/

function solution(a) {
  
    let count = 0;
    let freq = {}
    
    for (let i=0; i<a.length; i++) {
        
    let digits = [...a[i].toString()]
    let sortedDigits = digits.sort((a,b) => a- b)
    let num = sortedDigits.join('')
    
    freq[num] = freq[num] ? freq[num] + 1 : 1
   
    }
      
    for (num in freq) {
     
      if (freq[num] > 1) {
        
        let paircombinations = freq[num] * (freq[num]-1)/2
        count += paircombinations
        
      }
    }
    
    return count
      
  }