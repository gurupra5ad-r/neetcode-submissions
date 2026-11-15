class Solution {
    /**
     * @param {number[][]}
     * @param {number}
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const ROWS = matrix.length, COLS = matrix[0].length
        let top = 0, bot = ROWS - 1, row = 0
        
        while (top <= bot) {
            row = top + Math.floor((bot - top) / 2)

            if (target > matrix[row][COLS - 1]) {
                top = row + 1
            } else if (target < matrix[row][0]) {
                bot = row - 1
            } else {
                break
            }
        }

        if (top > bot)
            return false
        
        let l = 0, r = COLS - 1

        while (l <= r) {
            const m = l + Math.floor((r - l) / 2)

            if (target > matrix[row][m])
                l = m + 1
            else if (target < matrix[row][m])
                r = m - 1
            else
                return true
        }
        return false
    }
}