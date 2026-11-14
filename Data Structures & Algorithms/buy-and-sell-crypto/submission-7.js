class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxP = 0, minBuy = prices[0]

        for (const sell of prices) {
            minBuy = Math.min(minBuy, sell)
            maxP = Math.max(maxP, sell - minBuy)
        }
        return maxP
    }
}
