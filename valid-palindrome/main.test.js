import Solution from './main';

// main.test.js

describe('Solution', () => {
  describe('isPalindrome', () => {
    test.each([
      ['Was it a car or a cat I saw?', true],
      ['tab a cat', false],
      ['0P', false],
      ['A man, a plan, a canal: Panama', true],
    ])('should test string -"%s"- and return output "%s"', (input, expected) => {
      const solution = new Solution();
      const result = solution.isPalindrome(input);
      expect(result).toBe(expected);
    });
  });
});
