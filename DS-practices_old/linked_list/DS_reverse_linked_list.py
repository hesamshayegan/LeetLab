from typing import Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # I use two pointers, one points to the previous node and another to the current node
        # first store the next node in a temporary node and then move the two pointers
        # up to the end of the linked list
        # NB. Each node has a value and a next attributes

        # | |  tmp
        #   1 - 2 - 3 - None
       
        # breakpoint();

        prev = None
        cur = head

        while cur:
            tmp = cur.next
            cur.next = prev
            prev = cur
            cur = tmp
        
        return prev


  
# head = [1,2,3,4,5]

head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(3)
head.next.next.next = ListNode(4)
head.next.next.next.next = ListNode(5)

sol = Solution()
sol.reverseList(head)

def print_list(head):
        while head is not None:
            print(head.val)
            head = head.next


    