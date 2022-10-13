const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let readyString = '';
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++
    } else {
      readyString += `${count===1 ? '' : count}${str[i - 1]}`
      count = 1;
    }
    if (i === str.length - 1) {
      readyString += `${count===1 ? '' : count}${str[i]}`
    }
  }
  return readyString
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
