# 53. Maximum Subarray

class Solution(object):
    def maxSubArray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        i = 0 
        currSum = 0
        maxSub = nums[0]

        for num in nums:
            
            # check the negative prefix
            # if the current sum is negative I skip the whole sum till the current element 
            if currSum < 0:
               currSum = 0
            
            currSum += num
            maxSub = max(maxSub, currSum)

        return maxSub