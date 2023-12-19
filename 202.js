
// 202. Happy Number


/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy = function(n) {
    let sum = 0;
    // use a set and store the results I have calculated.
    let seen = new Set();

    while (sum !== 1 && !seen.has(sum)) {
        seen.add(sum);
        sum = n
            .toString()
            .split('')
            .reduce((acc, curr) => acc + Number(curr) ** 2, 0);

        n = sum; // Update n for the next iteration
    }

    return sum === 1;
};

// If the process enters into a cycle, it means that the sequence of numbers will repeat, 
// and the algorithm will not converge to the happy number (1). In such cases, using a set 
// to keep track of seen numbers helps prevent the algorithm from running indefinitely in a loop.`