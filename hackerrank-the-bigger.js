// The bigger is the greater




function biggerIsGreater(string) {
    
    // !!! strings are immutable
    let w = string.split('')
    let found = false
    let pivotIndex = 0;
    
    // 1) find the pivotIndex
    for (let i = w.length - 1; i >= 0; i--) {
        
        if (w[i-1] < w[i] ) {   
            pivotIndex = i-1
            found = true;
            break; 
        }           
    }
    
    if (!found) return 'no answer'    
    
    let rightMostIndex = -1;
    
    // 2) find the smallest character at the right of the pivotIndex
    for (let j = w.length-1 ; j> pivotIndex; j--) {
                
        if (w[j] > w[pivotIndex]) {    
            rightMostIndex = j
            break;
        }                
    }
    
    // 3) swap the characters
    
    let swap_temp = '';
    swap_temp = w[pivotIndex];
    w[pivotIndex] = w[rightMostIndex];
    w[rightMostIndex] = swap_temp
    
    //4) reverse the right side of the pivotIndex in an ascending order
    
    let left = pivotIndex + 1;
    let right = w.length - 1
    
    while (left < right) {
        let temp = w[left];
        w[left] = w[right];
        w[right] = temp;
        
        left++
        right--       
    }

    return w.join('')
}


// 1) find the pivotIndex where the increasing order of characters from right to left breaks.
// example input: hegf (g>f but e<g)

// 2) find the rightmost samllest character on the right side of the pivotIndex
// example input: hegf -> the rightmost smallest char. is g

// 3) swap the char at pivotIndex with the smallest char at its right

// 4) reverse the rightside of pivotIndex. This ensures that the new string is the smallest lexicographically.