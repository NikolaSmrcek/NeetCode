export default class Solution {
  /**
     * @param {character[][]} board
     * @return {boolean}
     */
  // eslint-disable-next-line class-methods-use-this
  isValidSudoku(board) {
    let isInvalid = false;

    const rows = new Map();
    const columns = new Map();

    const squares = new Map();

    function getSquare(
      i,
      j,
    ) {
      if (i < 3 && j < 3) {
        return 0;
      }

      if (i < 3 && (j > 2 && j < 6)) {
        return 1;
      }

      if (i < 3 && (j > 5)) {
        return 2;
      }

      if ((i > 2 && i < 6) && (j < 3)) {
        return 3;
      }

      if ((i > 2 && i < 6) && (j > 2 && j < 6)) {
        return 4;
      }

      if ((i > 2 && i < 6) && (j > 5)) {
        return 5;
      }

      if ((i > 5) && (j < 3)) {
        return 6;
      }

      if ((i > 5) && (j > 2 && j < 6)) {
        return 7;
      }

      if ((i > 5) && (j > 5)) {
        return 8;
      }
      return 99;
    }

    for (let k = 0; k < 9; k += 1) {
      rows.set(k, new Set());
      columns.set(k, new Set());

      squares.set(k, new Set());
    }

    for (let i = 0; i < 9; i += 1) {
      if (isInvalid) {
        break;
      }
      for (let j = 0; j < 9; j += 1) {
        const squareN = (getSquare(i, j));
        // Skip empty slot
        if (board[i][j] === '.') {
          // eslint-disable-next-line no-continue
          continue;
        }
        // Check square
        if (squares.get(squareN).has(board[i][j])) {
          isInvalid = true;
          break;
        }

        // Set square value
        squares.get(squareN).add(board[i][j]);

        // Check row
        if (rows.get(i).has(board[i][j])) {
          isInvalid = true;
          break;
        }
        // Set row value
        rows.get(i).add(board[i][j]);

        // Check column
        if (columns.get(j).has(board[i][j])) {
          isInvalid = true;
          break;
        }
        // Set column value
        columns.get(j).add(board[i][j]);
      }
    }

    return !isInvalid;
  }
}
/*
const board = [
  ['1', '2', '.', '.', '3', '.', '.', '.', '.'],
  ['4', '.', '.', '5', '.', '.', '.', '.', '.'],
  ['.', '9', '1', '.', '.', '.', '.', '.', '3'],
  ['5', '.', '.', '.', '6', '.', '.', '.', '4'],
  ['.', '.', '.', '8', '.', '3', '.', '.', '5'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '.', '.', '.', '.', '.', '2', '.', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '8'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9']
];
*/

// const result = new Solution().isValidSudoku([1, 2, 4, 6]);
