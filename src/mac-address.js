const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let arr = n.split('-');
  return (arr.length === 6)  ?
  !(isNaN(parseInt(arr[0], 16)) || isNaN(parseInt(arr[1], 16)) || isNaN(parseInt(arr[2], 16)) || 
  isNaN(parseInt(arr[3], 16)) || isNaN(parseInt(arr[4], 16)) || isNaN(parseInt(arr[5], 16))) : false;
  
}
module.exports = {
  isMAC48Address
};
