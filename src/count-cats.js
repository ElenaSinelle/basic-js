const { NotImplementedError } = require('../extensions/index.js');

function countCats(backyard) {
  let count = 0;
  backyard.forEach(el => el.forEach(e => {
    if (e === '^^') count++;
  }));

  return count;
}

module.exports = {
  countCats
};
