const { NotImplementedError } = require('../extensions/index.js');


function renameFiles(names) {

let k = 0;
let newNames = names;
for (let i = 0; i < names.length; i++) {
  for (let j = i+1; j < names.length; j++) {
    if (names[i] === names[j]) {
      k++;
      let newName = `${names[j]}(${k})`;
      newNames.splice(j, 1, newName);
    }
  }
  k = 0;
}
return newNames;

}

module.exports = {
  renameFiles
};
