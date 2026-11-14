class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const len = nums.length
        const prevMap = new Map()

        for (let i = 0; i < len; i++) {
            const diff = target - nums[i]

            if (prevMap.has(diff)) {
                return [prevMap.get(diff), i]
            } else {
                prevMap.set(nums[i], i)
            }
        }
        return []
    }
}
