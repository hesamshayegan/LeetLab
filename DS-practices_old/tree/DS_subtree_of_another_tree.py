from typing import Optional

# Definition for a binary tree node.
class TreeNode:
     def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:

            def isIdentical(s, t):
                # base case
                if s is None and t is None:
                    return True
                if s is None or t is None:
                    return False
                
                if (s.val == t.val and 
                    isIdentical(s.left, t.left) and
                    isIdentical(s.right, t.right)): 

                    return True
                
            if root is None:
                return False

            if isIdentical(root, subRoot):
                return True

            return self.isSubtree(root.left, subRoot) or self.isSubtree(root.right, subRoot)