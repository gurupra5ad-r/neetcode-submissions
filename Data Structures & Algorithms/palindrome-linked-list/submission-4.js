/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    isPalindrome(head) {
        let slow = head, fast = head

        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }

        let prev = null

        while (slow) {
            let temp = slow.next
            slow.next = prev
            prev = slow
            slow = temp
        }

        let left = head, right = prev

        while (right) {
            if (left.val !== right.val) {
                return false
            }

            right = right.next
            left = left.next
        }
        return true
    }
}
