class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const n = grid.length,
            m = grid[0].length;
        const visited = Array.from({ length: n }, () => new Array(m).fill(false));
        let maxArea = 0;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (!visited[i][j] && grid[i][j] === 1) {
                    const count = this.dfs(i, j, grid, visited);
                    maxArea = Math.max(maxArea, count);
                }
            }
        }
        return maxArea;
    }

    dfs(i, j, grid, visited) {
        if (
            i < 0 ||
            j < 0 ||
            i >= grid.length ||
            j >= grid[0].length ||
            grid[i][j] === 0 ||
            visited[i][j]
        )
            return 0;
        visited[i][j] = true;
        let count = 1;
        count += this.dfs(i, j + 1, grid, visited);
        count += this.dfs(i, j - 1, grid, visited);
        count += this.dfs(i + 1, j, grid, visited);
        count += this.dfs(i - 1, j, grid, visited);
        return count;
    }
}