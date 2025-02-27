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
  let res = new Object();
  for(let i = 0; i < domains.length; i++) {
    let tmp = domains[i].split('.');
    let str = '';
    for(let j = tmp.length-1; j >= 0; j--) {
      str += '.'+tmp[j];
      if(Object.keys(res).includes(str)) res[str]++;
      else res[str] = 1;
    }
  }
  return res;
}

module.exports = {
  getDNSStats
};
