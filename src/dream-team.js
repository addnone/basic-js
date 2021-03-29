const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)){
    arr = []
    members.forEach(element => (typeof element == 'string') ? arr.push(element.replace(/\s/g, '')[0].toUpperCase()) : null )
    return arr.sort().join('')
  } else return false
}
