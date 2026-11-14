/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        const res = [0]
        this.getHeight(root, res)
        return res[0]
    }

    getHeight(root, res) {
        if (!root) return 0

        const left = this.getHeight(root.left, res)
        const right = this.getHeight(root.right, res)
        res[0] = Math.max(res[0], left + right)
        return 1 + Math.max(left, right)
    }
}
