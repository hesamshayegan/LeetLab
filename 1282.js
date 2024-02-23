// 1282. Group the People Given the Group Size They Belong To

/**
 * @param {number[]} groupSizes
 * @return {number[][]}
*/

var groupThePeople = function(groupSizes) {

    let groupPeople = {}
    let res = []



    for (let i=0; i<groupSizes.length; i++) {

        let size = groupSizes[i] 
        
        if (!groupPeople[size]) {

            groupPeople[size] = []

        }
      
        groupPeople[size].push(i)

        // If the number of people in the group matches the group size,
        // push the group to the result array and reset the group
        if (size === groupPeople[size].length) {
            res.push([...groupPeople[size]]);
            groupPeople[size] = []
        }
    }

    return res

};