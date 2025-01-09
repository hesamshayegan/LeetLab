# 724. Find Pivot Index
class Solution(object):
    def pivotIndex(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        
        total = sum(nums)
        left_sum = 0
        right_sum = 0

        for i, num in enumerate(nums):
            right_sum = total - left_sum - num

            if left_sum == right_sum:
                return i

            left_sum += num

        return -1