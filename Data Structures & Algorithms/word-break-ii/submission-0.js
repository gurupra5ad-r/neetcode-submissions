class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {string[]}
     */
    wordBreak(s, wordDict) {
        const wordSet = new Set(wordDict)
        const n = s.length
        const arr = Array.from({length: n + 1}, () => [])

        arr[0].push('')

        for (let i = 1; i <= n; i++) {
            for (let j = 0; j < i; j++) {
                if (wordSet.has(s.substring(j, i))) {
                    for (const sentence of arr[j]) {
                        arr[i].push((sentence + ' ' + s.substring(j, i)).trim())
                    }
                }
            }
        }
        return arr[n]
    }
}
