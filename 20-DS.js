// 20. Valid Parentheses


/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    let stack = [];
  
    for (let i = 0; i < s.length; i++) {
  
      if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
        stack.push(s[i]);
  
      } else {
        console.log('stack', stack)
        if (
          stack.length === 0 ||
          (s[i] === ')' && stack[stack.length - 1] !== '(') ||
          (s[i] === ']' && stack[stack.length - 1] !== '[') ||
          (s[i] === '}' && stack[stack.length - 1] !== '{')
        ) {
          return false;
        } else {
          stack.pop();
        }
        console.log('stack', stack)
      }
  
  
    }
  
    return stack.length === 0;
  };
  
  // push the opening paranthesis to the stack
  // if it is the closeing check if the last element matches then pop otherwise return false
  // at the end of the travser check if the length of the stack is 0