class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const res = []
        let l = 1, r = Math.max(...piles)
        let ans = 0

        while (l <= r) {
            let m = l + Math.floor((r - l) / 2)
            
            if (this.timeTaken(piles, m) <= h) {
                r = m - 1
                ans = m
            } else {
                l = m + 1
            }
        }
        return ans
    }

    timeTaken(piles, k) {
        let time = 0
        for (const pile of piles) {
            const q = Math.ceil(pile / k)
            time += q
        }
        return time
    }

}
