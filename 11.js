// 11. Container With Most Water


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let left = 0;
    let right = height.length - 1;

    let maxVol = 0;
    let currVol = 0; 

    while (left<right) {

        currVol = (right - left) * Math.min(height[left], height[right]);
        maxVol = Math.max(maxVol, currVol);

        if (height[left] <= height[right]) {
            left++
        } else {
            right--
        }
    }

    return maxVol
    
};