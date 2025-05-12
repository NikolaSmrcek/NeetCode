import Solution from './main';

// main.test.js

describe('Solution', () => {
  describe('twoSum', () => {
    test.each([
      [[2, 7, 11, 15], 9, [1, 2]],
      [[-1, 0], -1, [1, 2]],
      [[2, 3, 4], 6, [1, 3]],
      [[5, 25, 75], 100, [2, 3]],
    ])('should test arg array to find the target number - and return indexes "%s"', (input, target, expected) => {
      const solution = new Solution();
      const result = solution.twoSum(input, target);
      expect(result).toStrictEqual(expected);
    });
  });
});
