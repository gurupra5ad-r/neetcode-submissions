class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const prev = new Set()

        for (const n of nums) {
            if (prev.has(n)) {
                return true
            } else {
                prev.add(n)
            }
        }
        return false
    }
}
