const { NotImplementedError } = require('../extensions/index.js');

function minesweeper(matrix) {
  let result = [];

  for (let i = 0; i < matrix.length; i++) {
    result[i] = [];

    for (let j = 0; j < matrix[0].length; j++) {
      let qty = 0;

      if (matrix[i-1]) {
        if (matrix[i-1][j-1]) qty++;
        if (matrix[i-1][j]) qty++;
        if (matrix[i-1][j+1]) qty++;
      }

      if (matrix[i]) {
        if (matrix[i][j-1]) qty++;
        if (matrix[i][j+1]) qty++;
      }

      if (matrix[i+1]) {
        if (matrix[i+1][j-1]) qty++;
        if (matrix[i+1][j]) qty++;
        if (matrix[i+1][j+1]) qty++;
      }

      result[i].push(qty);
    }
  }

  return result;
}
/*
minesweeper([
  [true, false, false],
  [false, true, false],
  [false, false, false]
 ])*/

module.exports = {
  minesweeper
};
