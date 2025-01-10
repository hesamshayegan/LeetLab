# 1071. Greatest Common Divisor of Strings
class Solution(object):
    def gcdOfStrings(self, str1, str2):
        """
        :type str1: str
        :type str2: str
        :rtype: str
        """
        len1, len2 = len(str1), len(str2)

        # helper function
        def isDivisor(l):
            # if either of len1 or len2 mud l returns a value other than 0 => it's not divisor
            if len1 % l or len2 % l:
                return False
            # factor1 and 2 tell me how many times the substring has to be multiplied
            factor1, factor2 = len1 // l, len2 // l

            return str1[:l] * factor1 == str1 and str1[:l] * factor2 == str2

        # loop starts at the min length, decreasing by 1, and it stops at the index 0
        # i start at the largest substring (the whole string) cuz it's asking the greatest common divisor
        for l in range(min(len1, len2), 0, -1):
            # l is the index at which I'm checking the substring
            if isDivisor(l):
                # i can also return str2[:l] cuz it should be a common divisor
                return str1[:l]

        return ""



# Input: str1 = "ABCABC", str2 = "ABC"
# len1 = 6, len2 = 3.
# Loop starts with l = 3 (minimum of len1 and len2):
#   isDivisor(3):
#       len1 % 3 == 0, len2 % 3 == 0 → valid divisor length.
#       str1[:3] = "ABC", factor1 = 6 // 3 = 2, factor2 = 3 // 3 = 1.
#       "ABC" * 2 == "ABCABC", "ABC" * 1 == "ABC" → returns True.
#   Return str1[:3] = "ABC".
# Output: "ABC"


# Input: str1 = "ABABAB", str2 = "ABAB"
# len1 = 6, len2 = 4.
# Loop starts with l = 4:
#   isDivisor(4):
#       len1 % 4 != 0 → not a valid divisor length.
#       Returns False.
# Loop continues with l = 3:
#   isDivisor(3):
#       len1 % 3 != 0 → not a valid divisor length.
#       Returns False.
# Loop continues with l = 2:
#   isDivisor(2):
#       len1 % 2 == 0, len2 % 2 == 0 → valid divisor length.
#       str1[:2] = "AB", factor1 = 6 // 2 = 3, factor2 = 4 // 2 = 2.
#       "AB" * 3 == "ABABAB", "AB" * 2 == "ABAB" → returns True.
#      Return str1[:2] = "AB".
# Output: "AB"