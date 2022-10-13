const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
 let f = email.indexOf('@')
 let h = email.slice(f+1)
 if (h.includes('@') === true) {
  let m = h.indexOf('@')
  return h.slice(m+1)
 }
 return h
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getEmailDomain
};
