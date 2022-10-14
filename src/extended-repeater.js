const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let sep = '+'
    if (Object.keys(options).includes('separator')) {
      sep = options.separator
    }
    if (Object.keys(options).includes('addition')) {
      let addSep = '|';
      let repeatTimes = 1;
      if (Object.keys(options).includes('additionSeparator')) {
        addSep = options.additionSeparator
      }
      if (Object.keys(options).includes('additionRepeatTimes')) {
        repeatTimes = options.additionRepeatTimes
      }
      str = addSep.length <= 0 ? (str + ((options.addition + addSep).repeat(repeatTimes))) :  (str + ((options.addition + addSep).repeat(repeatTimes))).slice(0, -addSep.length);

    }
     if (Object.keys(options).includes('repeatTimes')) {
      str = str + sep
      return str.repeat(options.repeatTimes).slice(0, -sep.length)
     } else {
      return str
     }
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
