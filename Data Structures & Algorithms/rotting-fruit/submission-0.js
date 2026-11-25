class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const q = new Queue();
        const rows = grid.length;
        const cols = grid[0].length;

        let fresh = 0;
        let minutes = 0;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 2)
                    q.enqueue([i, j]);
                else if (grid[i][j] === 1)
                    fresh++;
            }
        }

        while (!q.isEmpty() && fresh > 0) {
            const levels = q.size();

            for (let k = 0; k < levels; k++) {
                const [i, j] = q.dequeue();

                if (i > 0 && grid[i - 1][j] === 1) {
                    grid[i - 1][j] = 2;
                    q.enqueue([i - 1, j]);
                    fresh--;
                }

                if (i < rows - 1 && grid[i + 1][j] === 1) {
                    grid[i + 1][j] = 2;
                    q.enqueue([i + 1, j]);
                    fresh--;
                }

                if (j > 0 && grid[i][j - 1] === 1) {
                    grid[i][j - 1] = 2;
                    q.enqueue([i, j - 1]);
                    fresh--;
                }

                if (j < cols - 1 && grid[i][j + 1] === 1) {
                    grid[i][j + 1] = 2;
                    q.enqueue([i, j + 1]);
                    fresh--;
                }
            }

            minutes++;
        }

        return fresh === 0 ? minutes : -1;
    }
}