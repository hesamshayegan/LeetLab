// 347. Top K Frequent Elements


/**
* @param {number[]} nums
* @param {number} k
* @return {number[]}
*/
var topKFrequent = function(nums, k) {

let freqMap = {}
let res = []

// creating the bucket
const bucket = [];
for (let i = 0; i <= nums.length; i++) {
    bucket.push([]);
}

nums.forEach((num) =>{
    freqMap[num] = freqMap[num] ? freqMap[num] + 1 : 1
})

for (let num in freqMap) {
    let freq = freqMap[num]
    bucket[freq].push(Number(num))
}

for (let i=bucket.length -1; i>0; i--) {
    for (let j=0; j < bucket[i].length; j++) {
    res.push(bucket[i][j])
    if (res.length === k) {
        return res
    }
    }
}

};


// TC: O(n)
// SC: O(n)


// The time complexity is o(n) because:

// The outer loop iterates over the buckets from the last one to the first one (bucket.length - 1 to 1).
// This loop has a constant number of iterations, equal to the number of buckets.

// The inner loop iterates through the elements in the current bucket (bucket[i]).
// The number of iterations in the inner loop is proportional to the number of elements in that specific bucket,
// not the total number of elements in the entire array.