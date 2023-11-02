from DS_binary_tree_breadth_first import build_tree, print_tree
# preoder dfs solution

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def getTargetCopy(self, original: TreeNode, cloned: TreeNode, target: TreeNode) -> TreeNode:
        # import pdb
        # pdb.set_trace()
        # base case or stop condition
        # empty node or empty tree
        if original is None:
            return
        
        # general cases
        elif original == target:

            # current original node is target, so is cloned
            return cloned
        
        # either left subtree or right subtree has target

        return self.getTargetCopy(original.left, cloned.left, target) or self.getTargetCopy (original.right, cloned.right, target)
    

original = build_tree([7,4,3,None,None,6,19])
cloned =  build_tree([7,4,3,None,None,6,19])


