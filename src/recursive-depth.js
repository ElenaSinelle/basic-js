const { NotImplementedError } = require('../extensions/index.js');

class DepthCalculator {
  calculateDepth(arr) {
    let count = 0;
    if (Array.isArray(arr)) {
      arr.forEach(elem => {
        if (Array.isArray(elem)) {
          count = Math.max(count, this.calculateDepth(elem));
        }
      })
      return count + 1;
    } else {
      return 0;
    }
  }
}

module.exports = {
  DepthCalculator
};
