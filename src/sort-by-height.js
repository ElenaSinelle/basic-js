const { NotImplementedError } = require('../extensions/index.js');

function sortByHeight(arr) {

  let minusIndexes = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) minusIndexes.push(i);
  }
  //console.log(minusIndexes);

  let newArr = arr.filter(item => item !== -1).sort((a, b) => a - b);

  for (let i = 0; i < minusIndexes.length; i++) {
    newArr.splice(minusIndexes[i], 0, -1);
  }
  return newArr;

}

//sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])


module.exports = {
  sortByHeight
};
