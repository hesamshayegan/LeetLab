# 151. Reverse Words in a String

class Solution(object):
    def reverseWords(self, s):
        """
        :type s: str
        :rtype: str
        """
        
        trimmed_s = s.strip()

        splitted_s = trimmed_s.split()

        reversed_s = splitted_s[::-1] # use slicing to reverse the string
        # reversed_s = reversed(splitted_s) # use the iterator (reversed) to reverse the string

        joined_s = " ".join(reversed_s)

        return joined_s