const { NotImplementedError } = require('../extensions/index.js');

function getSumOfDigits(n) {
  let digit = String(n).split('');
  let sum=0;
  for (let i=0; i<digit.length; i++) {
    sum += +digit[i];
  }
  if (String(sum).length === 1) {
    return sum;
  } else {
    return getSumOfDigits(sum);
  }
}

module.exports = {
  getSumOfDigits
};
