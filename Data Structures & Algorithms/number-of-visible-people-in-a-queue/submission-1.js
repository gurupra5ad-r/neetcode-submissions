class Solution {
    /**
     * @param {number[]} heights
     * @return {number[]}
     */
    canSeePersonsCount(heights) {
        const n = heights.length
        const stack = []
        const result = new Array(n).fill(0)

        for (let i = n - 1; i >=0; i--) {
            while (stack.length && stack[stack.length - 1] < heights[i]) {
                stack.pop()
                result[i]++
            }

            if(stack.length) {
                result[i]++
            }

            stack.push(heights[i])
        }
        return result
    }
}
