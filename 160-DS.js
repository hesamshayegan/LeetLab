// 160. Intersection of Two Linked Lists

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let a_pointer = headA;
    let b_pointer = headB;
    
    // console.log('headA', a_pointer)
    // console.log('headB', b_pointer)
    
    // The while loop runs until pointers meet
    while (a_pointer !== b_pointer) {
        
        if (a_pointer === null) {
            a_pointer = headB
        } else {
            a_pointer = a_pointer.next
        }

        // console.log('a_pointer', a_pointer)

        if (b_pointer === null) {
            b_pointer = headA
        } else {
            b_pointer = b_pointer.next
        }

        // console.log('b_pointer', b_pointer)

    }

    // return the intersected node
    return a_pointer; // or return the b_pointer
};


// The main problem here is the size of the lists which are not equal
// So if I set two pointers that traverse both lists at the same time 
// they point to the different nodes. So, I can't never identify the intersection
// But If I traverse both lists, I actually traverse the same distance and
// when  "pointer a" traverses the list1 and reaches the null value, I set it to the
// the head of the list2. Similar for "pointer b". 
// If there is an intersection, at a certain moment they both point to the same head.