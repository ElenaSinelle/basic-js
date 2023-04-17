const { NotImplementedError } = require('../extensions/index.js');


function repeater(str, options) {
  str = String(str);
  if (!str) return;
  if (!options) return str;

  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';
  let addition = options.addition !== undefined ? String(options.addition) : '';
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || '|';

  let resultStr = '';

  for (let i = 0; i < repeatTimes; i++) {
    resultStr += str;
    for (let j = 0; j < additionRepeatTimes; j++) {
      resultStr += addition;
      if (j < additionRepeatTimes - 1) {
        resultStr += additionSeparator;
      }
    }
    if (i < repeatTimes - 1) {
      resultStr += separator;
    }
  }
  return resultStr;
}

module.exports = {
  repeater
};
