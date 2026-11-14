class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0, r = height.length - 1
        let maxLeft = height[l], maxRight = height[r]
        let res = 0

        while (l < r) {
            
            if (maxLeft < maxRight) {
                l++
                maxLeft = Math.max(maxLeft, height[l])
                res = res + maxLeft - height[l]
            } else {
                r--
                maxRight = Math.max(maxRight, height[r])
                res = res + maxRight - height[r]
            }
        } 
        return res
    }
}
