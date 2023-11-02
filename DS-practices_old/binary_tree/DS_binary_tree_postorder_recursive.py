# The current stack frame is a tuple that contains the name of the function,
# the line number, and the arguments that were passed to the function.

import inspect
from typing import Optional, List
from DS_binary_tree_breadth_first import build_tree, print_tree

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        
        # import pdb
        # pdb.set_trace()
  
        if root:
            breakpoint();    
        # Print the step number
            # print(f"Current value in stack: {root.val}")

            return self.postorderTraversal(root.left) + self.postorderTraversal(root.right) + [root.val]
        else:
            return []
        

root = build_tree([1,None,2,3])

# print_tree(root)
print(Solution().postorderTraversal(root))




