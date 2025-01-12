# 1207. Unique Number of Occurrences

class Solution(object):
    def uniqueOccurrences(self, arr):
        """
        :type arr: List[int]
        :rtype: bool
        """
        
        map = {}

        for num in arr:
            if num in map:
                map[num] += 1

            else:
                map[num] = 1
        
        num_set = set()
        for num in map:
            if map[num] in num_set:
                return False

            num_set.add(map[num])
        

        return True
    
# TC: O(n); SC: O(n)