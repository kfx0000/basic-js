const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let interm = new Array(matrix.length + 2);
  let res = new Array(matrix.length);
  for(let i = 0; i < matrix.length + 2; i++) {
    interm[i] = new Array(matrix[0].length + 2);
    interm[i].fill(false);
  }
  for(let i = 0; i < matrix.length; i++) {
    res[i] = new Array(matrix[0].length);
    res[i].fill(0);
  }
  for(let i = 0; i < matrix.length; i++)
    for(let j = 0; j < matrix[i].length; j++)
      interm[i+1][j+1] = matrix[i][j];
  for(let i = 1; i <= matrix.length; i++)
    for(let j = 1; j <= matrix[0].length; j++) {
      if(interm[i-1][j-1]) res[i-1][j-1]++;
      if(interm[i-1][j]) res[i-1][j-1]++;
      if(interm[i-1][j+1]) res[i-1][j-1]++;
      if(interm[i][j-1]) res[i-1][j-1]++;
      if(interm[i][j+1]) res[i-1][j-1]++;
      if(interm[i+1][j-1]) res[i-1][j-1]++;
      if(interm[i+1][j]) res[i-1][j-1]++;
      if(interm[i+1][j+1]) res[i-1][j-1]++;
    } 
  return res;
}

module.exports = {
  minesweeper
};
