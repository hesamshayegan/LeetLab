// 274. H-Index


/**
 * @param {number[]} citations
 * @return {number}
 */
/*

Goal: find max value m, such that 
    - I have at least m numbers >= m 
    - and the rest (n-m) numbers are =< m

*/

// 1) brute force

// var hIndex = function(citations) {
    
//     // sort citations in a decreasing order
//     let sortedCitations = citations.sort((a,b) => b-a);
  
//     let i = 0;

//     while(sortedCitations[i] > i) {
//         debugger;
//         i++
//     }
//     return i
// };


// TC: O(nlogn)
// SC: O(1)

/*

input = [3,0,6,1,5]
sorted = [6,5,3,1,0]

count 6,5,3,1,0 
idx   0 1 2 3 4

*/


// 2) binary_searech
var hIndex = function(citations) {
    
    // sort citations in a decreasing order
    let sortedCitations = citations.sort((a,b) => b-a);
    console.log(sortedCitations)
  
    let left = 0;
    let right = citations.length - 1

    while (left <= right) {

        let mid = left+Math.floor((right-left)/2)

        if (sortedCitations[mid] > mid) {
            left = mid  + 1 
        }
        else {
            right = mid - 1
        }
    }

    // when left exceeds right, the search range has been exhausted and the desired condition is no longer met.
    // At this point, left represents the first index where the condition is no longer satisfied, and right
    // represents the last index where the condition is still satisfied.
    return left
};

// TC: O(nlogn)
// SC: O(1)