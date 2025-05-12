export default class Solution {
  /**
Given an array of integers numbers that is sorted in non-decreasing order.

Return the indices (1-indexed) of two numbers, [index1, index2],
such that they add up to a given target number target and index1 < index2.
Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.

There will always be exactly one valid solution.

Your solution must use

O(1) additional space.

Example 1:

Input: numbers = [1,2,3,4], target = 3

Output: [1,2]
Explanation:
The sum of 1 and 2 is 3. Since we are assuming a 1-indexed array, index1 = 1, index2 = 2.
We return [1, 2].
     */
  // eslint-disable-next-line class-methods-use-this
  twoSum(numbers, target) {
    if (numbers.length === 2) return [1, 2];

    let j = numbers.length - 1;
    while (true) {
      let i = 0;
      while (i < j && ((numbers[i] + numbers[j]) <= target)) {
        if (numbers[i] + numbers[j] === target) {
          return [i + 1, j + 1];
        }
        i += 1;
      }

      j -= 1;
    }
  }
}
/*
const numbers = [2, 7, 11, 15];
const target = 9;

const numbers = [-1, 0];
const target = -1;

const numbers = [2, 3, 4];
const target = 6;

const numbers = [5,25,75];
const target = 100;
*/
const numbers = [5, 25, 75];
const target = 100;

const result = new Solution().twoSum(numbers, target);
console.log(`result: ${result}`);
