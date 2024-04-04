from typing import List

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:

        low = 0
        high = low + 1

        while high < len(nums):
            if nums[low] == nums [high]:
                high += 1
            else:
                nums[low + 1] = nums [high]
                low += 1
                high += 1
    
        return low + 1