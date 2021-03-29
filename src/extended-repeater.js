const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  separator = options.separator ? options.separator : '+'
  additionSeparator = options.additionSeparator ? options.additionSeparator : '|'

  // convertObject = el => typeof el == 'object' ? Object.prototype.toString.call(el) : String(el)
  convertObject = el => String(el)

  if (typeof options.addition != 'undefined'){
    additionString =  Array(options.additionRepeatTimes ? options.additionRepeatTimes : 1)
      .fill(convertObject(options.addition))
      .join(additionSeparator)
  } else additionString = ''
  
  mainString = Array(options.repeatTimes ? options.repeatTimes : 1)
    .fill(convertObject(str)+additionString)
    .join(separator)
  
  return mainString
};
  