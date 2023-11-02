from typing import Optional, List
from DS_binary_tree_breadth_first import build_tree

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def binaryTreePaths(self, root: Optional[TreeNode]) -> List[str]:
        
        def traverse(node, pathTillCurNode):
            # import pdb
            # pdb.set_trace()
            
            # if the node is a leaf node then build that paths
            if not (node.left or node.right):
                paths.append("->".join(pathTillCurNode))
                
            # if the node has a left child then add the left child to the current path
            if node.left:
                traverse(node.left, pathTillCurNode + [str(node.left.val)])
                
            # if the node has a right child then add the right child to the current path
            if node.right:
                traverse(node.right, pathTillCurNode + [str(node.right.val)])
                
        # paths is the union of all current paths
        paths =[]

        traverse(root, [str(root.val)])

        return paths



root = build_tree([1,2,3,None,5])


# The provided code follows a certain algorithm. It is an implementation of a recursive depth-first search algorithm that traverses a binary tree and finds all root-to-leaf paths. The algorithm is as follows:

# Initialize an empty list called paths
# Define a helper function called traverse that takes two arguments: node and pathTillCurNode.
# Inside the traverse function:
# If node is a leaf node, append the current path to paths by converting the elements of pathTillCurNode to a string and joining them with "->" separator.
# If node has a left child, recursively call traverse on the left child with the updated pathTillCurNode list that appends the left child's value.
# If node has a right child, recursively call traverse on the right child with the updated pathTillCurNode list that appends the right child's value.
# Call the traverse function with the root node and a list containing the root node's value.
# Return the paths list.