export default class Solution {
  /**
     * @param {character[][]} board
     * @return {boolean}
     */
  // eslint-disable-next-line class-methods-use-this
  isPalindrome(s) {
    if (s.length < 2) return true;
    let i = 0;
    let j = (s.length - 1);

    while (i < j) {
      // 65-90
      // 97-122
      while (!(((s.charCodeAt(i) > 64 && s.charCodeAt(i) < 91))
        || ((s.charCodeAt(i) > 96 && s.charCodeAt(i) < 123))
        || (s.charCodeAt(i) > 47 && s.charCodeAt(i) < 58)) && i < j) {
        i += 1;
      }

      while (!(((s.charCodeAt(j) > 64 && s.charCodeAt(j) < 91))
        || ((s.charCodeAt(j) > 96 && s.charCodeAt(j) < 123))
        || (s.charCodeAt(j) > 47 && s.charCodeAt(j) < 58)) && i < j) {
        j -= 1;
      }

      // console.log(`i - ${s[i]}`);
      // console.log(`j - ${s[j]}`);

      if (i > j || s[i].toLowerCase() !== s[j].toLowerCase()) {
        return false;
      }

      i += 1;
      j -= 1;
    }

    return true;
  }
}
/*
const s = 'Was it a car or a cat I saw?';

const s = 'tab a cat';

const s ='0P'

const s = 'A man, a plan, a canal: Panama';
*/

const s = 'A man, a plan, a canal: Panama';

const result = new Solution().isPalindrome(s);
console.log(`result: ${result}`);
