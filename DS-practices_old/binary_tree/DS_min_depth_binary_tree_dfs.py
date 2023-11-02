from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def minDepth(self, root: Optional[TreeNode]) -> int:
            # base case
            # If the subtree is empty i.e. root is NULL, return depth as 0...
            if root is None :
                return 0
            
            # If the both subtrees are empty...
            if root.left is None and root.right is None:
                return  1

            if root.right is None:
                return 1 + self.minDepth(root.left)

            if root.left is None:
                return 1 + self.minDepth(root.right)
            
            #When the two child function return its depth
            return 1 + min(self.minDepth(root.left), self.minDepth(root.right))
    
