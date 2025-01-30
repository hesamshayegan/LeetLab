# 3. Longest Substring Without Repeating Characters

class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
    
        seen = set()
        left = 0
        right = 0
        max_len = 0

        while right < len(s):
            if s[right] not in seen:
                seen.add(s[right])
                right += 1
                max_len = max(max_len, right - left)
            else:
                seen.remove(s[left])
                left += 1

        return max_len
    

# s = "pwwkew"
# Step 1: right = 0, s[right] = 'p' → Not in seen, add to seen, right++, update max_len = 1.
# Step 2: right = 1, s[right] = 'w' → Not in seen, add to seen, right++, update max_len = 2.
# Step 3: right = 2, s[right] = 'w' → Already in seen, remove s[left] = 'p', left++.
# Step 4: right = 2, s[right] = 'w' → Still in seen, remove s[left] = 'w', left++.
# Step 5: right = 2, s[right] = 'w' → Now unique, add to seen, right++.
# Repeat Steps: Continue adjusting the window and tracking max length.