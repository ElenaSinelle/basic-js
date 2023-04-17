const { NotImplementedError } = require('../extensions/index.js');

function getCommonCharacterCount(s1, s2) {
  let result = 0;
  let s1arr = s1.split('');
  let s2arr = s2.split('');

  for (let i=0; i < s1arr.length; i++) {
    if (s2arr.includes(s1arr[i])) {
      result++;
      s2arr.splice(s2arr.indexOf(s1arr[i]), 1);
    }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};
