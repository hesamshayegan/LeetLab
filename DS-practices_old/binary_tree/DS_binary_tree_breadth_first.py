class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# This function takes a list of values as input, creates a TreeNode with the first value as the root
# , and then iterates through the remaining values in a breadth-first manner. At each step, it pops the oldest 
# node from the queue, creates left and right children if the corresponding values are not None, and adds them to 
# the queue.

def build_tree(nums):
    if not nums:
        return None
    root = TreeNode(nums[0])
    q = [root]
    i = 1
    while i < len(nums):
        curr = q.pop(0)

        # left node
        if nums[i] is not None:
            curr.left = TreeNode(nums[i])
            q.append(curr.left)

        # right node
        i += 1
        if i < len(nums) and nums[i] is not None:
            curr.right = TreeNode(nums[i])
            q.append(curr.right)
        i += 1
    return root

# Now, we can use this function to build a binary tree with the desired shape, and then traverse it 
# in a breadth-first manner to create the desired list. Here's an example implementation:

tree = build_tree([1, 2, 5, 3, 4])
queue = [tree]
result = []
while queue:
    node = queue.pop(0)
    if node:
        result.append(node.val)
        queue.append(node.left)
        queue.append(node.right)
print(result)

# This code creates a binary tree with the shape [1, 2, 5, 3, 4], then initializes a queue with the root node.
# It then repeatedly pops the oldest node from the queue, adds its value to the result list, and appends 
# its left and right children to the queue. This continues until the queue is empty.
# Finally, the result list is printed, which should be [1, 2, 5, 3, 4].


def print_tree(tree, level=0):
    if tree is not None:
        # Recursively print the right subtree
        print_tree(tree.right, level + 1)
        # Print the current node's value, indented based on its depth
        print(' ' * 4 * level + '->', tree.val)
        # Recursively print the left subtree
        print_tree(tree.left, level + 1)

# to execute the function
# print_tree(tree)