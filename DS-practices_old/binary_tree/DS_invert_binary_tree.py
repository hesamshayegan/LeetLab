from typing import Optional
from DS_binary_tree_breadth_first import build_tree, print_tree

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        # import pdb
        # pdb.set_trace()

        if root is None:
            return None
        
        a = root.left
        b = root.right

        # Swap the left and right children of the root node
        root.left = b
        root.right = a

        self.invertTree(root.left)
        self.invertTree(root.right)

        return root
    

root = build_tree([4,2,7,1,3,6,9])
print_tree(root)