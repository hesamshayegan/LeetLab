// 15. 3Sum

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {

    let res = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {

        // skip the value if it's equal to the previous
        // check i > 0 cuz otherwise 0-1 = -1! 
        if (i > 0 && nums[i] === nums[i-1]) continue

        // i+1 -> to prevent the same pair but in a reversed order * 
        // Notice that I'm using left in a nested loop (so it's like two for loops)
        let left = i + 1;
        let right = nums.length - 1

        while (left < right) {
        
           let threeSum =  nums[i] + nums[left] + nums[right]          

           if (threeSum > 0) {

               right--

           } else if (threeSum < 0) {

               left++

           } else {

               res.push([nums[left], nums[right], nums[i]])

               // I need to skip duplicate values so I need another while loop 
               // ex. [-2, -2, -2, 0, 0, 2, 2]
               while (nums[left] === nums[left + 1]) left++;
               while (nums[right] === nums[right - 1]) right--;

               left++;
               right--;

           }
           

        }

    }

    return (res)

};

// let arr = [1, 0]
// for (let i=0; i<arr.length; i++) {
//     for (let j=0; j<arr.length; j++) {
//         console.log([arr[i],arr[j]])
//     }
// }
// 0 0
// [1, 1]
// 0 1
// [1, 0]
// 1 0
// [0, 1]
// 1 1
// [0, 0]