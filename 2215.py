# 2215. Find the Difference of Two Arrays
class Solution(object):
    def findDifference(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[List[int]]
        """

        set_num1 = set(nums1)
        set_num2 = set(nums2)

        set1 = set()
        set2 = set()

        for num in nums1:
            if num not in set_num2:
                set1.add(num)

        for num in nums2:
            if num not in set_num1:
                set2.add(num) 
        
        res = [list(set1), list(set2)]

        return res


# Input: nums1 = [1,2,3], nums2 = [2,4,6]
# Output: [[1,3],[4,6]]

# Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
# Output: [[3],[]]


# nums1 and nums2 are converted to sets, the in operation becomes O(1), 
# and the total time for this loop reduces to O(n) + O(m)