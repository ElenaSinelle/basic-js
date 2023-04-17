const { NotImplementedError } = require('../extensions/index.js');

function isMAC48Address(n) {
  let chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

  let arr = n.split('-');
  let arr2 = [];
  arr.forEach(item => {
    let unit = item.split('');
    arr2.push(unit);
  })
  arr2 = arr2.flat(1);

  for(let item of arr2) {
    if (!chars.includes(item)) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = {
  isMAC48Address
};
