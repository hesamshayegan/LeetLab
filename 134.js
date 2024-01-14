// 134. Gas Station


/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {

    sumGas = gas.reduce((acc,curr) => acc+curr, 0)
    sumCost = cost.reduce((acc,curr) => acc+curr, 0)

    // it guarantees the solution exists
    if (sumGas < sumCost) {
        return -1
    }

    let totalTank=0;
    let start=0; // starting index

    for (let i=0; i<gas.length; i++) {
        
        totalTank += gas[i]-cost[i]

        if ( totalTank < 0) {
            totalTank = 0 // reset to 0 
            start = i+1
        }

    }

    return start

    
};


// gas = [1,2,3,4,5]
// -
// cost = [3,4,5,1,2]
// diff = [-2,-2,-2,3,3]
// The difference between amount of gas and cost shows that in indexes 0, 1, 2 the circuite cannot be completed.
// the condition which guarantees the solution is that sum(gas) < sum(cost).

// starting at index 3 
// tank = 4 -> 4-1 = 3
// tank = 3 + 5 = 8 -> 8 - 2 = 6
// tank = 6 + 1 = 7 -> 7 - 3 = 4
// tank = 4 + 2 = 6 -> 6 - 4 = 2
// tank = 2 + 3 = 5 -> 5 - 5 = 0 (complete circuit)