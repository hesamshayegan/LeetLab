# Definition for singly-linked list

class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

    def __repr__(self):
        return (f"{self.val}, {self.next}")

# Using Hashmap
# keep hashmap of nodes.
# if we encounter node that is not in hashmap then add it.
# if it's already in map then we found cycle.
# return true

class Solution:
    def hasCycle(self, head: ListNode) -> bool:
            # breakpoint()
            hashmap = {}

            while head:
                if head in hashmap.keys():
                    return head
                
                else:
                    hashmap[head] = 1
                    head = head.next