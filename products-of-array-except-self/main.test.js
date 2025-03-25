// const Solution = require('./main');
import Solution from './main';

// main.test.js

describe('Solution', () => {
  test('productExceptSelf should return correct output for example input', () => {
    const solution = new Solution();
    const nums = [1, 2, 4, 6];
    const result = solution.productExceptSelf(nums);
    expect(result).toEqual([48, 24, 12, 8]); // Replace with the expected output
  });

  test('productExceptSelf should handle input with zeros', () => {
    const solution = new Solution();
    const nums = [-1, 0, 1, 2, 3];
    const result = solution.productExceptSelf(nums);
    expect(result).toEqual([0, -6, -0, -0, -0]); // Replace with the expected output
  });

  test('productExceptSelf should handle single element array', () => {
    const solution = new Solution();
    const nums = [5];
    expect(() => solution.productExceptSelf(nums)).toThrow('invalid input'); // Replace with the expected output
  });

  test('productExceptSelf should handle empty array', () => {
    const solution = new Solution();
    const nums = [];
    expect(() => solution.productExceptSelf(nums)).toThrow('invalid input'); // Replace with the expected output
  });
});
