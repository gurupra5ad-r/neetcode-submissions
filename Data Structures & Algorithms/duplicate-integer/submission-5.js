class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const len = nums.length

        if (len <= 1) return false

        const seen = new Set()

        for (let i = 0; i < len; i++) {
            if (seen.has(nums[i])) return true

            seen.add(nums[i])
        }
        return false
    }
}
