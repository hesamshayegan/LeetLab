// 724. Find Pivot Index

/**
 * @param {number[]} nums
 * @return {number}
 */

var pivotIndex = function(nums) {

    let rightSum = 0;
    let leftSum = 0;

    // calculate the sum of the entire array
    rightSum = nums.reduce((acc,curr) => acc+curr, 0)

    for (let i=0; i < nums.length; i++) {

        let curr = nums[i]

        // The right sum no longer contains the curr number
        rightSum -= curr

        // if left sum equals right sum, we return index
        if (leftSum === rightSum) return i;

        leftSum += curr

    }

    return -1   

}

// [left....right]
// I calculate the total sum of the entire array 
// then sbutract from the sumRight (i.e. total sum) and compare it to the leftSum
// if I didn't find the index I add the current value to the leftSum



/**
 * console.log included version: 
 *
 * */ 

// var pivotIndex = function(nums) {

//     let rightSum = 0;
//     let leftSum = 0;

//     // calculate the sum of the entire array
//     rightSum = nums.reduce((acc,curr) => acc+curr, 0)

//     for (let i=0; i < nums.length; i++) {
        
//         console.log('i', i)
//         let curr = nums[i]
//         console.log('curr', curr)
//         console.log('rightSum before substracting', rightSum)
//         // The right sum no longer contains the curr number

//         rightSum -= curr

//         console.log('rightSum after substracting', rightSum)
//         console.log('leftSum', leftSum)

//         // if left sum equals right sum, we return index
//         if (leftSum === rightSum) return i;

//         console.log(`didn't find the match`)

//         leftSum += curr

//         console.log('rightSum', rightSum)
//         console.log('leftSum', leftSum)

//     }

//     return -1   

// }