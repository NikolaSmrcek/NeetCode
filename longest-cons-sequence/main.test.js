import Solution from './main';

// main.test.js

describe('Solution', () => {
  test('longestConsecutive should return correct output for example input', () => {
    const solution = new Solution();
    const nums = [-3, -9, -3, 4, -3, -9, -3, -6, 8, -3, 0, 1, 5, -1, -4, 0, -7, 1, 5];
    const result = solution.longestConsecutive(nums);
    expect(result).toEqual(3); // Replace with the expected output
  });

  test('longestConsecutive should return correct output', () => {
    const solution = new Solution();
    const nums = [0, 3, 2, 5, 4, 6, 1, 1];
    const result = solution.longestConsecutive(nums);
    expect(result).toEqual(7); // Replace with the expected output
  });
});
