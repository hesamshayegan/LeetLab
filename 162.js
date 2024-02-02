// 162. Find Peak Element


/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {

    let left = 0;
    let right = nums.length - 1
    
    while (left <= right) {

        // let mid = Math.floor((left + right) / 2);
        // to avoid overflow
        let mid = Math.floor(left + ((right - left)/2));

        // search on the left side of the array
        if (mid > 0 && nums[mid] < nums[mid-1]) {
            right = mid - 1
        }
        // search on the right side of the array
        else if (mid < nums.length -1 && nums[mid] < nums[mid+1]){    
            left = mid + 1
        }

        // (nums[mid-1]<nums[mid] && nums[mid]<nums[mid+1]) => mid is the peak value
        else  {
            return mid
        }

    }

};

/* The idea behind the binary search algorithm here:
If the mid-point is the peak, return the peak.
If not, search on the left or right side where the neighbor of the mid-point is greater than the mid-point. 
This guarantees the existence of a peak.

Example: [1, 2, 3, 4]

Mid-point (index) = 1 => nums[mid] = 2
Since 3 > 2, 4 is the peak.

Even if 4 were 2 (lower than 3), then 3 would be the peak.

Thus, this approach ensures there is a peak on the side where the neighbor is greater than the mid-point.
*/