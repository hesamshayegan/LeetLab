# 125. Valid Palindrome

class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        lowered_s = s.lower()
        left, right = 0, len(s) - 1

        while left < right:
            if not lowered_s[left].isalnum():
                left += 1
                continue
            if not lowered_s[right].isalnum():
                right -= 1
                continue
            if lowered_s[left] != lowered_s[right]:
                return False

            left += 1
            right -= 1
                
        return True