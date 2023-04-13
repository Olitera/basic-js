const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  return domains.map(element => 
    element.split('.').reverse()
  ).reduce((ac,el) => {
    if (el[0]) {
    ac['.' + el[0]] = (ac['.' + el[0]] || 0) + 1;
    }
    if (el[1]) {
    ac['.' + el[0]+'.' + el[1]] = (ac['.' + el[0]+'.' + el[1]] || 0) + 1;
    }
    if(el[2]) {
      ac['.' + el[0]+ '.' + el[1] + '.' + el[2]] = (ac['.' + el[0]+'.' + el[1]+'.' + el[2]] || 0) + 1;  
    }
  return ac;
}, {})

}

module.exports = {
  getDNSStats
};
