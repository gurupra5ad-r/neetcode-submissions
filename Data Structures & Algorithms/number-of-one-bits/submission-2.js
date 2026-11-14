class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let r = 0
        while (n > 0) {
            n&=(n-1)
            r++
        }
        return r
    }
}
