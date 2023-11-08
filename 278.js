// 278. First Bad Version

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
*/

/**
 * @param {function} isBadVersion()
 * @return {function}
*/


var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {

        left = 1;
        right = n;

        // console.log('left', left, 'right', right)

        while (left <= right) {

            let middle = Math.floor((left + right) / 2)

            // console.log('middle', middle)

            if (!isBadVersion(middle)) {
                left = middle + 1
            } 
            else {
                right = middle - 1
            }
            // console.log('left', left, 'right', right)
        }

        return left
        
    };

};