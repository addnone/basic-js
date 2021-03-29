const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  count = 0
  matrix.forEach(element => {
    element.map(el => el == '^^' ? count++ : null)
  });
  return count
};
