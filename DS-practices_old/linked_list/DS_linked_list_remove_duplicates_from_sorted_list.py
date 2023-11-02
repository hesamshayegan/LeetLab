from typing import Optional

class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

    def __repr__(self):
        return (f"{self.val}, {self.next}")

class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # Check if the linked list is empty
        if head is None:
            return head
        
        # Set the current node as the head of the linked list
        cur = head

        # Traverse the linked list
        while cur and cur.next:
            # Check if the current node value is the same as the next node value
            if cur.val == cur.next.val:
                # If there is a duplicate, update the next pointer of the current node
                # to skip the duplicate node and connect to the node after it
                cur.next = cur.next.next
            else:
                # Move to the next node if the values are different
                cur = cur.next

        # Return the head of the modified linked list
        return head
