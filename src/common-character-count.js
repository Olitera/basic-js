const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let shortStr;
  let longStr;
  let arr = [];
  
  if(s1.length < s2.length){
    shortStr = s1;
    longStr = s2;
  }else{
    shortStr = s2;
    longStr = s1;
  }
  
  for(let i = 0; i < shortStr.length; i++){
    if(longStr.indexOf(shortStr[i]) !== -1){
      arr.push(shortStr[i])
    }
  }
  
  return arr.length
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};
