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