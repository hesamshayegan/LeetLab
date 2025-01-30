# 242. Valid Anagram

class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """

        if len(s) != len(t):
            return False

        freq = [0] * 26

        for i in range(len(s)):
            freq[ord(s[i]) - ord('a')] += 1
            freq[ord(t[i]) - ord('a')] -= 1
        
        for i in range(len(freq)):
            if freq[i] != 0:
                return False
        
        return True


# # helper function
# def count(string):
#     freq = {}
#     for char in string:
#         if char in freq:
#             freq[char] +=1
#         else:
#             freq[char] = 1

#     return freq

# freq_s = count(s)
# freq_t = count(t)

# for char in freq_t:
#     if char not in freq_s or freq_s[char] != freq_t[char]:
#         return False

# return True