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
  let res = [];
  if(!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  if(arr.includes("--discard-next") || arr.includes("--discard-prev")
    || (arr.includes("--double-next")) || (arr.includes("--double-prev"))) {
      for(let i = 0; i < arr.length; i++) {
        if(((arr[i] === "--discard-prev") || (arr[i] === "--double-prev")) && (i === 0)) continue;
        if(((arr[i] === "--discard-next") || (arr[i] === "--double-next")) && (i === arr.length-1)) continue;
        if(arr[i] === "--discard-prev") res.pop(); else
        if(arr[i] === "--double-prev") res.push(arr[i - 1]); else
        if(arr[i] === "--discard-next") i += 2; else
        if(arr[i] === "--double-next") res.push(arr[i+1]); else
        res.push(arr[i]);
      }
  } else res = [...arr];
  return res;
}

module.exports = {
  transform
};
