const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
    let arr1=[];
    if (arr.length === 0) {
      return arr
    }
      
    for (let i = 0; i < arr.length; i++) {
      if ( arr[i] === '--discard-next') {          
          i = i + 2;
      } else if ( arr[i] === '--discard-prev'){
          arr1.pop()
      }else if (arr[i] === '--double-next'){
        if (i !== arr.length-1){
          arr1.push(arr[i+1])
        }
      }else if (arr[i] === '--double-prev') {
        if (arr1.length > 0){
         arr1.push(arr1[arr1.length-1])
        }
      } else{
        arr1.push(arr[i])}
    }
    return arr1
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};
