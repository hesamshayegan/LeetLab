from typing import Optional
from DS_binary_tree_breadth_first import build_tree
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
            # import pdb
            # pdb.set_trace()
            # base case
            if not root:
                return 0
            # self is used because maxDepth is the current instance of the Solution class
            # 1 takes into account the parent element
            return  1 + max(self.maxDepth(root.left), self.maxDepth(root.right))
    

root = build_tree([3,9,20,None,None,15,7])

# Initial Call:

# root = 3
# maxDepth(3)
# Call Stack: [maxDepth(3)]
# Return: 1 + max(maxDepth(9), maxDepth(20))
# First Recursive Call (left subtree):

# root = 9
# maxDepth(9)
# Call Stack: [maxDepth(3), maxDepth(9)]
# Return: 1 + max(maxDepth(None), maxDepth(None))
# First Recursive Call (left child of 9):

# root = None
# maxDepth(None)
# Call Stack: [maxDepth(3), maxDepth(9), maxDepth(None)]
# Return: 0
# Second Recursive Call (right subtree)
# ...similar

# root = 20
# maxDepth(20)
# Call Stack: [maxDepth(3), maxDepth(9), maxDepth(None), maxDepth(20)]
# Return: 1 + max(maxDepth(15), maxDepth(7))
# First Recursive Call (left child of 20):

# root = 15
# maxDepth(15)
# Call Stack: [maxDepth(3), maxDepth(9), maxDepth(None), maxDepth(20), maxDepth(15)]
# Return: 1 + max(maxDepth(None), maxDepth(None))
# First Recursive Call (left child of 15):

# root = None
# maxDepth(None)
# Call Stack: [maxDepth(3), maxDepth(9), maxDepth(None), maxDepth(20), maxDepth(15), maxDepth(None)]
# Return: 0
# Second Recursive Call (right child of 15):

# root = None
# maxDepth(None)
# Call Stack: [maxDepth(3), maxDepth(9), maxDepth(None), maxDepth(20), maxDepth(15), maxDepth(None), maxDepth(None)]
# Return: 0
# Second Recursive Call (right child of 20):

# root = 7
# maxDepth(7)
# Call Stack: [maxDepth(3), maxDepth(9), maxDepth(None), maxDepth(20), maxDepth(15), maxDepth(None), maxDepth(None), maxDepth(7)]
# Return: 1 + max(maxDepth(None), maxDepth(None))
# First Recursive Call (left child of 7): 
# ...similart to 15

# The result = 1 + 1 + 1 = 3
