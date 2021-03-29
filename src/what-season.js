const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  nullObj = null
  season = month => {
    if ([11,0,1].includes(month)) return 'winter'
    else if ([2,3,4].includes(month)) return 'spring'
    else if ([5,6,7].includes(month)) return 'summer'
    else if ([8,9,10].includes(month)) return 'autumn'
  }
  if (Array.from(arguments).length == 0) return 'Unable to determine the time of year!'
  else if (Object.prototype.toString.call(date) != '[object Date]') throw CosCustomErrortum
  else if ((date instanceof Date)) return season(date.getMonth())
  else throw CustomError
};
