class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
    
        map = {}

        for index, num in enumerate(nums):
            complement_pair = target - num

            if complement_pair in map:
                return [map[complement_pair], index]
            else:
                map[num] = index