from typing import Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeTwoLists(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        import pdb
        pdb.set_trace() 
       # create a dummy node to avoid additional checks in loop
        dummy = ListNode(0)
        # create a pointer to the tail of the merged list
        tail = dummy
        
        while l1 and l2:
            if l1.val < l2.val:
                # add the smaller node to the merged list
                tail.next = l1
                # move the pointer of the smaller list forward
                l1 = l1.next
            else:
                # add the smaller node to the merged list
                tail.next = l2
                # move the pointer of the smaller list forward
                l2 = l2.next
            # move the pointer of the merged list forward
            tail = tail.next
        
        # append the remaining nodes of the non-empty list to the merged list
        tail.next = l1 or l2
        
        # return the head of the merged list
        return dummy.next



###############################################
#creating lists

l1 = ListNode(1, ListNode(2, ListNode(3)))
l2 = ListNode(1, ListNode(3, ListNode(4)))


###############################################
s = Solution()
merged_list = s.mergeTwoLists(l1, l2)

result = []
current_node = merged_list
while current_node:
    result.append(current_node.val)
    current_node = current_node.next

print("merged list is", result)
