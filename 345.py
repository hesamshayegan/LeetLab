class Solution(object):
    def reverseVowels(self, s):
        """
        :type s: str
        :rtype: str
        """
        vowels='AEIOUaeiou'

        lst_s = list(s)

        left = 0
        right = len(s) - 1

        while left < right:
            if lst_s[left] in vowels and lst_s[right] in vowels:
                tmp = lst_s[right]
                lst_s[right] = lst_s[left]
                lst_s[left] = tmp
                left += 1
                right -= 1
            elif lst_s[left] in vowels and lst_s[right] not in vowels:
                right -= 1
            else:
                left += 1
        
        return ''.join(lst_s)