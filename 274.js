// 274. H-Index


/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    
    // sort citations in a decreasing order
    let sortedCitations = citations.sort((a,b) => b-a);
  
    let i = 0;

    while(sortedCitations[i] > i) {
        i++
    }
    return i
};