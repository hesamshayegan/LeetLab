# 1768. Merge Strings Alternately

class Solution(object):
    def mergeAlternately(self, word1, word2):
        """
        :type word1: str
        :type word2: str
        :rtype: str
        """
        
        p1 = 0
        p2 = 0
        merged = ""

        while p1 < len(word1) and p2 < len(word2):
            merged += word1[p1]
            merged += word2[p2]
            p1 += 1
            p2 += 1

        if p1 < len(word1):
            merged += word1[p1:]

        if p2 < len(word2):
            merged += word2[p2:]

        return merged