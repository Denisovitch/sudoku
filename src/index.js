module.exports = function solveSudoku(matrix) {
  //backtracking algorithm
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (matrix[i][j] == 0) {
        for (let n = 1; n <= 9; n++) {
          if (isTru(matrix, i, j, n)) {
            matrix[i][j] = n;
            if (solveSudoku(matrix)) {
              return matrix;
            } else {
              matrix[i][j] = 0;
            }
          }
        }
        return false;
      }
    }
  }
  return matrix;
};

function isTru(matrix, row, col, num) {
  for (let i = 0; i < 9; i++) {
    const sqrow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const sqcol = 3 * Math.floor(col / 3) + (i % 3);
    if (
      matrix[row][i] == num ||
      matrix[i][col] == num ||
      matrix[sqrow][sqcol] == num
    ) {
      return false;
    }
  }
  return true;
}
