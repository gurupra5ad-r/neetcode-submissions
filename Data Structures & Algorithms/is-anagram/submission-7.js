class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const len = s.length

        if (len !== t.length) return false
        const countS = {}, countT = {}

        for (let i = 0; i < len; i++) {
            countS[s[i]] = (countS[s[i]] || 0) + 1
            countT[t[i]] = (countT[t[i]] || 0) + 1
        }

        for (const key in countS) {
            if (countS[key] !== countT[key]) return false
        }
        return true
    }
}
