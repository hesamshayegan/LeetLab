// 509. Fibonacci Number


/**
 * @param {number} n
 * @return {number}
 */
// var fib = function(n) {

//     if (n<=1) {

//         return n

//     } else {

//         return fib(n-1) + fib(n-2)

//     }

// };

// TC: O(2n)
// SC: O(n)

/*
var fib = function(n) {

    let a = 0
    let b = 1

    let count = 2;
    let c;

    if (n === 0 || n === 1) return n

    while (count <=n ) {

        c = a + b;
        a = b;
        b = c;
        count++
    }

    return c

};
*/

// TC: O(n)
// SC: O(1)


var fib = function(n) {

    if (n === 0 || n === 1) return n

    let sequence = [0, 1];

    for (let i = 2; i <= n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    return sequence[n];
};

// TC: O(n)
// SC: O(n)