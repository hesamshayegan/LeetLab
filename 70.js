// 70. Climbing Stairs


/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

    let prev = 0;
    let curr = 1;
    let temp;

    for (let i = 0; i < n; i++) {
        debugger;
        temp = prev;
        prev = curr;
        curr += temp;
    }

    return curr;

};

// stairs = 1, 2, 3, 4, 5,...
// ways = 1, 2, 3, 5, 8