class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const n = grid.length,
            m = grid[0].length;
        const visited = Array.from({ length: n }, () => new Array(m).fill(false));
        let count = 0;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (!visited[i][j] && grid[i][j] === "1") {
                    this.dfs(i, j, grid, visited);
                    count++;
                }
            }
        }
        return count;
    }

    dfs(i, j, grid, visited) {
        if (
            i < 0 ||
            j < 0 ||
            i >= grid.length ||
            j >= grid[0].length ||
            grid[i][j] === "0" ||
            visited[i][j]
        )
            return;
        visited[i][j] = true;
        this.dfs(i, j + 1, grid, visited);
        this.dfs(i, j - 1, grid, visited);
        this.dfs(i + 1, j, grid, visited);
        this.dfs(i - 1, j, grid, visited);
    }
}
