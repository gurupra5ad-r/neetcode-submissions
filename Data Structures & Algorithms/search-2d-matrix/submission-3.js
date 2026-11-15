class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const ROWS = matrix.length,
            COLS = matrix[0].length;
        
        let top = 0, bot = ROWS - 1

        while (top <= bot) {
            const m = Math.floor((top + bot) / 2)

            if (target > matrix[m][COLS - 1]) {
                top = m + 1
            } else if (target < matrix[m][0]) {
                bot = m - 1
            } else {
                break
            }
        }

        if (top > bot)
            return false

        const row = Math.floor((top + bot) / 2)
        let l = 0, r = COLS - 1

        while (l <= r) {
            const m = Math.floor((l + r) / 2)
           
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