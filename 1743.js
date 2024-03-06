// 1743. Restore the Array From Adjacent Pairs


/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function(adjacentPairs) {

    const map = new Map();
    const len = adjacentPairs.length;
    const result = Array(len + 1);

    // Go through the adjacentPairs to build a HashMap, using the spot number as keys and the array of adjacent numbers as values.
    for (let i=0; i<len; i++) {
        
        let array = map.get(adjacentPairs[i][0]) || [];
        array.push(adjacentPairs[i][1]);
        map.set(adjacentPairs[i][0], array);

        array = map.get(adjacentPairs[i][1]) || []; 
        array.push(adjacentPairs[i][0]);
        map.set(adjacentPairs[i][1], array)

    }

    // Find an endpoint from the map and place it in the first element of the result array.
    map.forEach((value, key) => {
        if (value.length === 1 && result[0] === undefined) {
            result[0] = key
            return
        }
        
    })

    // Find the right-hand side adjacent number of the current index until the current index is len - 1   
    for (let i=0; i<len; i++) {
        const key = result[i];
        let arr;

        if (i === 0) {
            arr = map.get(key);
        } else {
            arr = map.get(key).filter(num => num !== result[i-1]);
        }

        result[i + 1] = arr[0]

    }
    
    return result
    
};


/*

1. Go through the adjacentPairs to build a HashMap, using the spot number as keys and the array of adjacent numbers as values.
For example, if adjacentPairs = [[2,1],[3,4],[3,2]], then map = 2 => [1,3], 1 => [2], 3 => [4,2], 4 => [3].

2. Find an endpoint from the map and place it in the first element of the result array. For example, 1 or 4 are the endpoints,
both result[0] = 1 and result[0] = 4 are acceptable.

3. Find the right-hand side adjacent number of the current index until the current index is n - 1.

*/