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
  function checkEl(a, b) {
    let startI = a > 0 ? a - 1 : 0;
    let startJ = b > 0 ? b - 1: 0;
    let finishI = a < matrix.length - 1 ? a + 1 : a; 
    let finishJ = b < matrix[0].length - 1 ? b + 1 : b; 
    let sum = 0;
    for (let i = startI; i <= finishI; i++) {
      for (let j = startJ ; j <= finishJ; j++) {
        console.log(i,j);
        if (matrix[i][j] === true && (i !== a || j !==b)) {
          console.log(i,j);
          sum++;
        }
      }
    }
    return sum
  }
  let arr = [];
  for(let i = 0; i < matrix.length; i++) {
    arr.push(new Array());

    for (let j = 0; j < matrix[i].length; j++) {
      arr[i].push(checkEl(i,j));
    }
  }
  return arr
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  minesweeper
};
