# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

    def __repr__(self):
        return (f"{self.val}")

class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        # outer funtion (above) only accepts the root
        # So I need a function to consider the left and right children
        def dfs(left, right):
            # if both left and right nodes are null
            if not left and not right: 
                return True
            # if one of them is null, it's not symmetric
            if not left or not right:
                return False
            
            # the value of right and left should be equal in order to dfs returning a True value
            
            return (left.val == right.val and 
            # but I also need to compare subtrees
                dfs(left.left, right.right) and
            # and also compare the inner subtrees
                dfs(left.right, right.left))
            
            # NB note that if (left.val == and righ.val) is false, the following recursvie funtions won't run

        return dfs(root.left, root.right)
    
# We run a dfs on left subtree and a dfs on right subtree at the same time simultaneously which means we visit every node --> O(n)
# Memory (space) complexity of DFS is O(h)




# n1 = TreeNode(1)
# n2 = TreeNode(2)
# n3 = TreeNode(2)
# n4 = TreeNode(3)
# n5 = TreeNode(3)
# n1.left = n2
# n1.right = n3
# n2.right = n4
# n3.right = n5