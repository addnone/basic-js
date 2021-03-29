const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr : [],

  getLength() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.arr.length
  },
  addLink(value) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    arguments.length == 0 ? this.arr.push('') : this.arr.push(value)
    return this
  },
  removeLink(position) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (Number.isInteger(position) 
        && position >= -1*this.getLength() 
        && position <= this.getLength()){
      this.arr.splice(position > 0 ? position-1 : position, 1)
      return this
    } else {
      this.arr = []
      throw Error()
    }
  },
  reverseChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.arr.reverse()
    return this
  },
  finishChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    result = this.arr.map(el => `( ${el} )`).join('~~')
    this.arr = []
    return result
  }
};

module.exports = chainMaker;
