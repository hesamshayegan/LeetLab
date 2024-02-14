// 698. Partition to K Equal Sum Subsets


var canPartitionKSubsets = function(nums, k) {

    nums.sort((a,b) => b-a);
    
    const total = nums.reduce((acc, curr) => acc+curr, 0);

    if (total % k !== 0) {
        return false
    }


    const target = total / k;
    const visited = new Array(nums.length).fill(false)


    const backtrack = (start, numberOfSubsets, currentSum) => {
        // base case
        if (numberOfSubsets === 1) return true


        if (currentSum > target) return false;


        // when a subset is found, we launch another search to find the 
        // remaining subsets from the unvisited elements.
        if (currentSum === target) {
            return backtrack(0, numberOfSubsets - 1, 0)
        }


        for (let j=start; j<nums.length; j++) {
            
            // if this value is not used (i.e it's not in the visited elements)
            if (!visited[j]) {
                visited[j] = true

                // launch a search to find other elements that will sum up to 
                // the target with the current element.
                if (backtrack(j+1, numberOfSubsets, currentSum + nums[j])) {
                    return true
                }
                
                // reset to enable backtracking
                visited[j] = false
            }
        }

        return false;
        
    };

    return backtrack(0, k, 0);

};