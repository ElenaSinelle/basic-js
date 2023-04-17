const { NotImplementedError } = require('../extensions/index.js');


function encodeLine(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let count = 1;
    while (str[i] === str[i + 1]) {
      count++;
      i++;
    }
    if (count === 1) {
      result += str[i];
    } else {
      result += count + str[i];
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
