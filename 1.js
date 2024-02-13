// 1. Two Sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var twoSum = function(nums, target) {

    let map = {};

    for(let i=0; i < nums.length; i++) {

        let value = nums[i]
        let complementPair = target - value;
        
        // if the complement value is different than undefined, it means I found it.
        if (map[complementPair] !== undefined) {
            
            return [map[complementPair], i]
            
        
        } else {

            map[value] = i;

        }        
    }  
};


// [3,2,4], target = 6
// i = 0 -> value = 3, complement = 6 - 3  = 3, map[3] does not exist => map = {3: 0}
// i = 1 -> value = 2, complement = 6 - 2 = 4, map[4] does not exist => map = {3: 0, 2: 1}
// i = 2 -> value = 4, complement = 6 - 4 = 2, map[2] exists THEN  
// the condition of map[complementPair] !== undefined is satisfied => retutn [1, 2]


// using Map

/*

var twoSum = function(nums, target) {

      
    let complement = 0;
    let map = new Map()


    for (let i=0; i<nums.length; i++) {

        complement = target - nums[i]
        
        if (map.has(nums[i])) {
            let idx = map.get(nums[i])
            return [idx, i]

        } else {
            map.set(complement, i)
        }
    }

};

*/