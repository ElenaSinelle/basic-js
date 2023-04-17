const { NotImplementedError } = require('../extensions/index.js');

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-prev') {
      if (resultArr[i - 1] !== 'transformed') {
        resultArr.pop();
        resultArr.push('transformed');
      }
    } else if (arr[i] === '--discard-next') {
      resultArr.push('transformed');
      i++;
    } else if (arr[i] === '--double-prev') {
      if(resultArr[i-1] && resultArr[i - 1] !== 'transformed') {
        resultArr.push(resultArr[i-1]);
      }
    } else if (arr[i] === '--double-next') {
      if(arr[i+1])
      resultArr.push(arr[i+1]);
    } else {
      resultArr.push(arr[i]);
    }
  }

  let resultArrFiltered = resultArr.filter(item => item !== 'transformed');

  return resultArrFiltered;
}

module.exports = {
  transform
};
