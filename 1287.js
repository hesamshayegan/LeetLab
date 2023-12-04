// 1287. Element Appearing More Than 25% In Sorted Array


/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {

    // ws: window size
    const ws = Math.floor(arr.length / 4)

    // (arr.length - ws) ensures that there is always a window of at least 25% of the array size.
        for (let i=0; i<arr.length - ws; i++) {

        // if the element at the i'th position is the same is i'th + ws, then is more than 25%

        if (arr[i] === arr [i+ws]) {

            return arr[i];

        }
    }
    
    return -1

};

// TC: O(n)
// SC: O(1)


// var findSpecialInteger = function(nums) {

//     console.log(typeof(nums[0]))
//     let freq = {}

//     for (let num of nums) {

//         freq[num] = freq[num] ? freq[num] + 1 : 1

//     }

//     for (let num in freq) {

//         if (freq[num]/nums.length > 0.25 ) {
//             return num
//         }

//     }
    
// };

// TC: O(n)
// SC: O(n)