const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
  calculateDepth(arr, depth=1) {
    
    let onlyArrs = arr.filter((v) => Array.isArray(v))

    if (onlyArrs.length == 0) return depth

    let mapArr = onlyArrs.map(element => this.calculateDepth(element, depth+1))
    return mapArr.reduce((cum, cur) => cur >= cum ? cur : cum, mapArr[0])
  }
}