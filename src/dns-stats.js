const { NotImplementedError } = require('../extensions/index.js');

function getDNSStats(domains) {
  let resultObject = {};

  for (let elem of domains) {
    let domainArr = elem.split('.').reverse();
    let key = '';
    for (let item of domainArr){
      key = key + '.' + item;
      if(resultObject[key]) {
        resultObject[key]++;
      } else {
        resultObject[key] = 1;
      }
    }
  }
  return resultObject;
}

module.exports = {
  getDNSStats
};
