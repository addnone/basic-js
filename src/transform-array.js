const CustomError = require("../extensions/custom-error");

// module.exports = function transform(arr) {
//   // if (Array.isArray(arr)){

//   //   result = []
//   //   arr.forEach((v, i) => {
//   //     if (['--discard-prev', '--double-prev'].includes(v) && i == 0){
//   //       null
//   //     } else if (['--discard-prev', '--double-prev'].includes(v) && i == arr.length-1){
//   //       null
//   //     } else if ('--discard-prev' == v && arr[i-2] != '--discard-next'){
//   //       result.pop()
//   //     } else if (arr[i-1] == '--discard-next'){
//   //       null
//   //     } else if (arr[i-1] == '--double-next'){
//   //       result.push(v)
//   //       result.push(v)
//   //     } else if (v == '--double-prev'){
//   //       result.push(arr[i-1])
//   //     } else result.push(v)
//   //   })
    
//   //  } else throw new CustomError('Not implemented');

//   // throw new CustomError('Not implemented')
//   result = []

//   if (Array.isArray(arr)){

//     if (arr.length == 0) return result
//     if (arr.map(el => (typeof el == 'string')*1).reduce((cum, cur) => cum+cur, 0) == 0) return arr

//     arr.forEach((v, i) => {
//       if (typeof v == 'number' && i > 0){
//         prev = arr[i-1]
//         next = arr[i+1]

//         if (prev == '--discard-next' && next == '--double-prev'){
//           result.push(v)
//         } 
//         else if (prev == '--double-next' && next == '--double-prev') {
//           result.push(v)
//           result.push(v)
//           result.push(v)
//         }
//         else if (prev == '--double-next' && next == '--discard-prev') {
//           result.push(v)
//         }
//         else if (prev == '--discard-next' && next == '--discard-prev') {
//           null
//         }
//         else if (prev == '--double-next'){
//           result.push(v)
//           result.push(v)
//         }
//         else if (prev == '--discard-next'){
//           null
//         }
//         else if (next == '--double-prev'){
//           result.push(v)
//           result.push(v)
//         }
//         else if (next == '--discard-next'){
//           null
//         }
//         else result.push(v)
//       }
//     })
//     return result
//   } else throw new CustomError('Not array');
// };


const rule = {
  "--double-next": 1,
  "--double-prev": 2,
  "--discard-next": 3,
  "--discard-prev": 4
};

module.exports = function transform(arr) {
  if(Array.isArray(arr) === false) {
    throw new Error();
  }

  const result = [];

  // for(let i = 0; i < arr.length; i += 1) {
  //   if(rule[arr[i]]) {
  //     switch(rule[arr[i]]) {
  //       case 1:
  //         if(i < arr.length - 1) {
  //           result.push(arr[i + 1]);
  //         }
  //         break;
  //       case 2:
  //         if(i > 0) {
  //           result.push(result[result.length - 1]);
  //         }
  //         break;
  //       case 3:
  //         if(i < arr.length) {
  //           result.push(undefined);
  //           i += 1;
  //         }
  //         break;
  //       case 4:
  //         if(i > 0) {
  //           result.pop();
  //         }
  //         break;
  //     }
  //   } else {
  //     result.push(arr[i]);
  //   }
  // }
  for(let i = 0; i < arr.length; i += 1) {
    if(rule[arr[i]]) {
      if (rule[arr[i]]==1) {
        if(i < arr.length - 1) {
            result.push(arr[i + 1]);
        }
      } else if (rule[arr[i]]==2) {
        if(i > 0) {
          result.push(result[result.length - 1]);
        }
      } else if (rule[arr[i]]==3) {
        if(i < arr.length) {
          result.push(undefined);
          i += 1;
        }
      } else if (rule[arr[i]]==4) {
        if(i > 0) {
          result.pop();
        }
      }
    } else {
      result.push(arr[i]);
    }
  }
  const res = result.filter(function(x) {
    return x !== undefined;
  });
  return res;
};