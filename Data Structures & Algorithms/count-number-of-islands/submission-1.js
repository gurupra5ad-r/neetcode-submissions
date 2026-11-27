class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.count = n;
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // path compression
    }
    return this.parent[x];
  }

  union(a, b) {
    const rootA = this.find(a);
    const rootB = this.find(b);
    if (rootA === rootB) return;
    this.parent[rootA] = rootB;
    this.count--;
  }

  connected(a, b) {
    return this.find(a) === this.find(b);
  }

  countComponents() {
    return this.count;
  }
}

class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const n = grid.length
        const m = grid[0].length
        let uf = new UnionFind(n * m)
        let first0 = -1
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                let index = j + m * i
                
                if (grid[i][j] === '1') {
                    if (i > 0 && grid[i - 1][j] === '1') {
                        uf.union(index,  index - m)
                    }
                    if (i < n - 1 && grid[i + 1][j] === '1') {
                        uf.union(index,  index + m)
                    }
                    if (j > 0 && grid[i][j - 1] === '1') {
                        uf.union(index,  index - 1)
                    }
                    if (j < m - 1 && grid[i][j + 1] === '1') {
                        uf.union(index,  index + 1)
                    }
                } else {
                    if (first0 === -1)
                        first0 = index
                    uf.union(first0, index)
                }
            }
        }
        let count = uf.countComponents()
        
        if (first0 === -1)
            return count
        else
            return count - 1
    }
}


// 
