class Solution(object):
    def moveZeroes(self, nums):
        """
        :type nums: List[int]
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        
        slow = 0
        fast = 1

        while fast < len(nums):
            if nums[slow] == 0 and nums[fast] != 0:
                tmp = nums[fast]
                nums[fast] = nums[slow]
                nums[slow] = tmp

                slow += 1
                fast += 1

            elif nums[slow] == 0 and nums[fast] == 0:
                fast += 1

            # elif nums[slow] != 0 and nums[fast] != 0:
            #     slow += 1
            #     fast += 1

            # elif nums[slow] != 0 and nums[fast] == 0:
            #     slow += 1
            #     fast += 1

            else:
                slow += 1
                fast += 1

        return nums



# Input: nums = [0,1,0,3,12]
# [1,0,0,3,12]
# [1,0,40,3,12]
# [2,3,4,5,0,4]
# [1,3,12,0,0]
# Output: [1,3,12,0,0]