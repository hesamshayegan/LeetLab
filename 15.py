class Solution(object):
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        res = []
        sorted_nums = sorted(nums)

        for index in range(len(sorted_nums)):
            if index > 0 and sorted_nums[index] == sorted_nums[index-1]: 
                continue

            left = index + 1
            right = len(sorted_nums) - 1

            while left < right:
                threesum = sorted_nums[index] + sorted_nums[left] + sorted_nums[right]

                if threesum > 0:
                    right -= 1
                elif threesum < 0:
                    left += 1
                else:
                    res.append([sorted_nums[index], sorted_nums[left], sorted_nums[right]])

                    # skip duplicate numbers
                    while left < right and sorted_nums[left] == sorted_nums[left+1]: 
                        left += 1
                    while left < right and sorted_nums[right] == sorted_nums[right-1]: 
                        right -= 1

                    left += 1
                    right -= 1

        return res

