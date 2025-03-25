export default class Solution {
  /**
     * @param {number[]} nums
     * @return {number[]}
     */
  // eslint-disable-next-line class-methods-use-this
  productExceptSelf(nums) {
    if (nums.length < 2) throw new Error('invalid input');

    const result = new Array(nums.length).fill(0);

    let j = (nums.length - 1) - 1;
    let i = 1;
    const iCursorMap = new Map();
    // Set first element and it's product to 1 - "hack"
    iCursorMap.set(0, 1);
    const jCursorMap = new Map();
    // Set last element and it's product to 1 - "hack"
    jCursorMap.set(nums.length - 1, 1);

    while (i < nums.length) {
      // Left side without current number total product
      iCursorMap.set(i, nums[i - 1] * (iCursorMap.get(i - 1)));
      // Right side without current number total product
      jCursorMap.set(j, nums[j + 1] * (jCursorMap.get(j + 1)));

      // Means that right cursor reached point of left side
      if (iCursorMap.get(j)) {
        result[j] = (iCursorMap.get(j)) * jCursorMap.get(j);
      }

      // Means that left cursor reached point of right side
      if (jCursorMap.get(i)) {
        result[i] = (jCursorMap.get(i)) * iCursorMap.get(i);
      }

      i += 1;
      j -= 1;
    }

    return result;
  }
}
//     const nums = [-1, 0, 1, 2, 3];
// [0, -6, 0, 0, 0]
// [ 0, -6, -0, -0, -0 ]

// const result = new Solution().productExceptSelf([1, 2, 4, 6]);
// const result = new Solution().productExceptSelf([4, 3]);
// const result = new Solution().productExceptSelf([-1, 0, 1, 2, 3]);
// console.log(result);
