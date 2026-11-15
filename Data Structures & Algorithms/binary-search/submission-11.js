class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0, r = nums.length

        while (l < r) {
            const m = Math.floor((l + r) / 2)

            if (target > nums[m]) {
                l = m + 1
            } else {
                r = m
            }
        }
        return l < nums.length && nums[l] === target ? l : -1
    }
}
