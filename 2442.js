// 2442. Count Number of Distinct Integers After Reverse Operations

var countDistinctIntegers = function(nums) {

    let res = nums.slice()
    
    for (let num of nums) {
        const reverserdDigits = [...num.toString()].reverse()
        res.push(Number(reverserdDigits.join('')))
    }

    let numSet = new Set(res)
   
    return numSet.size
        
};