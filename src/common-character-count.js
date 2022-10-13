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
  let short ='';
  let long='';
  let arr = [];
  if(s1.length <= s2.length){
    short = s1;
    long = s2;
  }else{
    short = s2;
    long = s1;
  }
  for(let i = 0; i < short.length; i++){
    if(long.indexOf(short[i]) !== -1){
      arr.push(short[i])
      long = long.slice(0,long.indexOf(short[i])) + long.slice(long.indexOf(short[i])+1)
    }
  }
  return arr.length
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};
