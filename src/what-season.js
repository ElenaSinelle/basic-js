const { NotImplementedError } = require('../extensions/index.js');

function getSeason(date) {
  //если нет аргумента
  if (!date) {
    return 'Unable to determine the time of year!';
  }
//если передали объект, булеан и тп, который нельзя преобразовать в таймстэмп
  if (!Date.parse(date)) {
    throw new Error('Invalid date!');
  }

//если передали объект, у которого есть OwnPropertyNames (у date их нет)
  if (Object.getOwnPropertyNames(date)[0]) {
    throw new Error('Invalid date!');
  }

  let month = date.getMonth();
  if (month < 2 || month == 11) {
    return 'winter';
  } else if (month >= 2 && month < 5) {
    return 'spring';
  } else if (month >= 5 && month < 8) {
    return 'summer';
  } else {
    return 'autumn';
  }
}

module.exports = {
  getSeason
};
