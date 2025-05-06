export default class Solution {
  /**
     * @param {character[][]} board
     * @return {boolean}
     */
  // eslint-disable-next-line class-methods-use-this
  longestConsecutive(nums) {
    let longestSeq = 0;

    const setOfNums = new Set(nums);

    // O(n)
    while (setOfNums.size) {
      const seq = new Set();
      // Get next number

      const num = setOfNums.values().next().value;
      let currentNum = num;
      seq.add(currentNum);
      // remove from set
      setOfNums.delete(currentNum);

      while (setOfNums.has(currentNum + 1)) {
        seq.add(currentNum + 1);
        setOfNums.delete(currentNum + 1);
        currentNum += 1;
      }

      currentNum = num;

      while (setOfNums.has(currentNum - 1)) {
        seq.add(currentNum - 1);
        setOfNums.delete(currentNum - 1);
        currentNum -= 1;
      }

      if (seq.size > longestSeq) {
        longestSeq = seq.size;
      }
    }

    return longestSeq;
  }
}
/*
const nums = [-3,-9,-3,4,-3,-9,-3,-6,8,-3,0,1,5,-1,-4,0,-7,1,5];
*/

// const result = new Solution().longestConsecutive(nums);
