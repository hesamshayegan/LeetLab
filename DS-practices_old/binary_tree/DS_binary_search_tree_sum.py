from typing import Optional
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def rangeSumBST(self, root: Optional[TreeNode], low: int, high: int) -> int:
        # base case
        if not root:
            return 0

        # exclude right branch because it's a binary tree (left branch    has lower values)    
        elif root.val < low:
            return self.rangeSumBST(root.right, low, high) 

        # exclude left branch
        elif (root.val > high):
            return self.rangeSumBST(root.left, low, high) 

        return root.val + self.rangeSumBST(root.right, low, high) + self.rangeSumBST(root.left, low, high)
    
# Here I used preorder traverse method!