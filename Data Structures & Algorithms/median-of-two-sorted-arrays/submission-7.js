class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let len1 = nums1.length, len2 = nums2.length
        let i = 0, j = 0
        let median1 = 0, median2 = 0

        for (let k = 0; k < Math.floor((len1 + len2) / 2) + 1; k++) {
            median2 = median1

            if (i < len1 && j < len2) {
                if (nums1[i] > nums2[j]) {
                    median1 = nums2[j]
                    j++
                } else {
                    median1 = nums1[i]
                    i++
                }
            } else if (i < len1) {
                median1 = nums1[i]
                i++
            } else {
                median1 = nums2[j]
                j++
            }
        }

        return (len1 + len2) % 2 === 1 ? median1 : (median1 + median2) / 2
    }
}
