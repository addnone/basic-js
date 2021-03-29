const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect){
    this.isDirect = typeof isDirect == 'boolean' ? isDirect : true
  }
  calcCode(code){
    (code-64)%26
  }
  encrypt(text, key) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (typeof text != 'string' || typeof key != 'string') throw new Error()
    else {
      text = text.toUpperCase()
      key = key.toUpperCase()
      let keyLength = key.length
      // console.log(text, key, keyLength)

      let result = []
      let counter = 0
      for (let idx = 0; idx < text.length; idx++) {

        let textLetter = text[idx];
        let textLetterCode = textLetter.charCodeAt()
        let textLetterShift = textLetterCode-65
        // console.log(idx, textLetter, textLetterCode, textLetterShift)

        if (textLetterCode > 64 && textLetterCode <= 90){
          // let keyIdx = idx%(keyLength-1)
          let keyIdx = counter%(keyLength)
          let keyLetter = key[keyIdx]

          let keyLetterCode = keyLetter.charCodeAt()
          let keyShift = keyLetterCode-65
          let newLetterCode = 65 + (textLetterShift+keyShift)%26
          result.push(String.fromCharCode(newLetterCode))
          // console.log('if', idx, textLetter, textLetterCode, textLetterShift, keyIdx, keyLetter, keyLetterCode, keyShift)
          counter += 1
        } 
        else {
          // console.log('else', idx, textLetter, textLetterCode, textLetterShift)
          result.push(textLetter)
        }
      }
      this.isDirect ? null : result.reverse()
      return result.join('')
      
    }

  }    
  decrypt(text, key) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (typeof text != 'string' && typeof key != 'string') throw new Error()
    else {
      text = text.toUpperCase()
      key = key.toUpperCase()
      let keyLength = key.length
      // console.log(text, key, keyLength)

      let result = []
      let counter = 0
      for (let idx = 0; idx < text.length; idx++) {

        let textLetter = text[idx];
        let textLetterCode = textLetter.charCodeAt()
        let textLetterShift = textLetterCode-65
        // console.log(idx, textLetter, textLetterCode, textLetterShift)

        if (textLetterCode > 64 && textLetterCode <= 90){
          // let keyIdx = idx%(keyLength-1)
          let keyIdx = counter%(keyLength)
          let keyLetter = key[keyIdx]

          let keyLetterCode = keyLetter.charCodeAt()
          let keyShift = keyLetterCode-65
          let newLetterCode = 65 + ((textLetterShift-keyShift) >= 0 ? (textLetterShift-keyShift) : 26+(textLetterShift-keyShift))
          result.push(String.fromCharCode(newLetterCode))
          // console.log('if', idx, textLetter, textLetterCode, textLetterShift, keyIdx, keyLetter, keyLetterCode, keyShift)
          counter += 1
        } 
        else {
          // console.log('else', idx, textLetter, textLetterCode, textLetterShift)
          result.push(textLetter)
        }
      }
      this.isDirect ? null : result.reverse()
      return result.join('')
      
    }
  }
}

module.exports = VigenereCipheringMachine;
