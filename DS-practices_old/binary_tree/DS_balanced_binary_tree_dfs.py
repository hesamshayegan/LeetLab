from typing import Optional

# Definition for a binary tree node.
class TreeNode:
     def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        
        # The helper (inner) function checks if the the subtree is balanced and calculates its height
        # I need this helper function cuz I have to calculate the height
        def dfs(root):
            if not root:    return [True, 0] # the output is a list [True/False, height]
        
            left = dfs(root.left)
            right = dfs(root.right)

            balanced = (left[0] and right[0] and
                        abs(left[1] - right[1]) <= 1)
            
            return [balanced, 1 + max( left[1], right[1] )]
    
        return dfs(root)[0] # The dfs function returns a list; index 0 is boolean
    

# root = [3,9,20,None,None,15,7]
        
# Step 1:

# Function: dfs(root)
# Argument: root = TreeNode(3, TreeNode(9), TreeNode(20))
# Call Stack: dfs(TreeNode(3, TreeNode(9), TreeNode(20)))
# Step 2:

# Function: dfs(root)
# Argument: root = TreeNode(9)
# Call Stack: dfs(TreeNode(9))
# Step 3:

# Function: dfs(root)
# Argument: root = None
# Call Stack: dfs(None)
# Step 4:

# Function: dfs(root)
# Argument: root = None
# Call Stack: dfs(None)
# Step 5:

# Function: dfs(root)
# Argument: root = TreeNode(20, TreeNode(15), TreeNode(7))
# Call Stack: dfs(TreeNode(20, TreeNode(15), TreeNode(7)))
# Step 6:

# Function: dfs(root)
# Argument: root = TreeNode(15)
# Call Stack: dfs(TreeNode(15))
# Step 7:

# Function: dfs(root)
# Argument: root = None
# Call Stack: dfs(None)
# Step 8:

# Function: dfs(root)
# Argument: root = None
# Call Stack: dfs(None)
# Step 9:

# Function: dfs(root)
# Argument: root = TreeNode(7)
# Call Stack: dfs(TreeNode(7))
# Step 10:

# Function: dfs(root)
# Argument: root = None
# Call Stack: dfs(None)
# Step 11:

# Function: dfs(root)
# Argument: root = None
# Call Stack: dfs(None)
# Note: Steps 3, 4, 7, 8, 10, and 11 correspond to the leaf nodes (nodes with no children) in the binary tree.

# As the recursion unwinds, the call stack will pop out the function calls in reverse order until we reach the initial call:

# Step 11:

# Function: dfs(root)
# Result: [True, 0]
# Call Stack: dfs(None)
# Step 10:

# Function: dfs(root)
# Result: [True, 0]
# Call Stack: dfs(TreeNode(7))
# Step 9:

# Function: dfs(root)
# Result: [True, 0]
# Call Stack: dfs(TreeNode(7))
# Step 8:

# Function: dfs(root)
# Result: [True, 1]
# Call Stack: dfs(None)
# Step 7:

# Function: dfs(root)
# Result: [True, 1]
# Call Stack: dfs(None)
# Step 6:

# Function: dfs(root)
# Result: [True, 1]
# Call Stack: dfs(TreeNode(15))
# Step 5:

# Function: dfs(root)
# Result: [True, 2]
# Call Stack: dfs(TreeNode(20, TreeNode(15), TreeNode(7)))
# Step 4:

# Function: dfs(root)
# Result: [True, 0]
# Call Stack: dfs(None)
# Step 3:

# Function: dfs(root)
# Result: [True, 0]
# Call Stack: dfs(None)
# Step 2:

# Function: dfs(root)
# Result: [True, 1]
# Call Stack: dfs(TreeNode(9))
# Step 1:

# Function: dfs(root)
# Result: [True, 2]
# Call Stack: dfs(TreeNode(3, TreeNode(9), TreeNode(20)))
# Finally, the initial call to dfs(root) will return the result [True, 1]
