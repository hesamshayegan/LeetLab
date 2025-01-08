class Solution(object):
    def isSubsequence(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        
        pointer_s = 0
        pointer_t = 0


        while pointer_s < len(s) and pointer_t < len(t):
            if s[pointer_s] == t[pointer_t]:
                pointer_s += 1
            
            # move pointer_t in any case
            pointer_t += 1

        return pointer_s == len(s)


# different edge cases for s & t
# s.  , t.
# ace , abdce 
# abdce , ace (t shorter than s)
# ace, bvxdu (t iterates through all of t without finding a match for a character in s)