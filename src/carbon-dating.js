const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  // console.log(sampleActivity)
  if (typeof sampleActivity == 'string' && /^[+-]?([0-9]*[.])?[0-9]+$/.test(sampleActivity)){
    sampleActivityNum = Number.parseFloat(sampleActivity)
    if (sampleActivityNum > 0 && sampleActivityNum < 15){
      k = Math.LN2/HALF_LIFE_PERIOD
      t = Math.log(MODERN_ACTIVITY/sampleActivityNum)/k
      return Math.ceil(t)
    } else return false
  } else return false
};
