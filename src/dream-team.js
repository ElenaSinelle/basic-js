const { NotImplementedError } = require('../extensions/index.js');

function createDreamTeam(members) {
  if(Array.isArray(members)) {
    let names = [];
    members.forEach(el => {
      if (typeof el === 'string' ) {
        names.push(el);
      }
    })

    let result = names.map(el => el.replace(/ /g, '')[0].toUpperCase()).sort((a, b) => a.localeCompare(b)).join('');

    return result.length == 0 ? false : result;

  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam
};
