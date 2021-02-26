const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  matrix = matrix.join().split(',');
  let count = 0;
  for (let i = 0, j = 0; i < matrix.length; i++, j++) {
    if (matrix[i] === "^^") {
      count++;
    } else if (matrix[i][j] === "^^") {
      count++;
    }
  } return count;
};