const { NotImplementedError } = require('../extensions/index.js');


function deleteDigit(n) {
  let arr = [];
  let digit = String(n);

  for (let i = 0; i < digit.length; i++) {
    let item = digit.slice(0, i) + digit.slice(i + 1);
    arr.push(+item);
  }

  return Math.max(...arr);
}
//deleteDigit(1880);

module.exports = {
  deleteDigit
};
