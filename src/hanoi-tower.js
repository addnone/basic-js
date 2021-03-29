const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  turnsCount = Math.pow(2, disksNumber) - 1
  turnsTime = Math.floor(turnsCount*3600/turnsSpeed)
  return {
    turns: turnsCount,
    seconds: turnsTime
  }
};
