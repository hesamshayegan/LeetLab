// 1047. Remove All Adjacent Duplicates In String


/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {

    let stack = [];

    for (char of s) {

        if (stack[stack.length - 1] === char) {
            stack.pop()
        } else {
            stack.push(char)
        }

    }
    
    return stack.join('')

};