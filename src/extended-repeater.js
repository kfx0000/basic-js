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
  let res = new Array;
  let add = new Array;
  if(!options.additionSeparator) options.additionSeparator = '|';
  if(!options.additionRepeatTimes) options.additionRepeatTimes = 1;
  if(!options.separator) options.separator = '+';
  if(!options.repeatTimes) options.repeatTimes = 1;
  for (let i = 0; i < options.additionRepeatTimes; i++)
    if (options.addition !== undefined ) add.push(`${options.addition}`);
  for (let i = 0; i < options.repeatTimes; i++) 
    res.push(str + add.join(options.additionSeparator));
  return res.join(options.separator);
}

module.exports = {
  repeater
};
