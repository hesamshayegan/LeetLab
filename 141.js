// 141. Linked List Cycle


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
*/
var hasCycle = function(head) {

    let fast = head;

    while(fast && fast.next) {

        head = head.next;
        fast = fast.next.next;

        if (head === fast) return true

    }

    return false

};

/*

Make a slower pointer and a faster pointer. Then we loop and loop again:

if the fast pointer catch up with slow pointer, then it's a cyclic linked list
if the fast pointer get to the end, then it's not a cyclic linked list.

*/