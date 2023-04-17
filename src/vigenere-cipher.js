const { NotImplementedError } = require('../extensions/index.js');

class VigenereCipheringMachine {

  constructor(type = true) {
    this.type = type;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    while (key.length < message.length) {
      key = key.padEnd(message.length, key);
    }
    let keyArr = key.toUpperCase().split('');

    let mesUpper = message.toUpperCase();

    let result = [];

    for (let i = 0; i < mesUpper.length; i++) {                      //проход по буквам
      if (mesUpper.charCodeAt(i) >= 65 && mesUpper.charCodeAt(i) <= 90) { // проверка - буква ли
          let letterID = mesUpper.charCodeAt(i) - 65;                //номер буквы от 0 до 25
          let keyLetterID = keyArr[0].charCodeAt(0) - 65;       //номер сдвига от 0 до 25
          let letter = String.fromCharCode(65 + (letterID + keyLetterID) % 26); // определение буквы, исходя из сдвига
          result.push(letter);
          keyArr.splice(0, 1);                                  //удаление буквы из keyArr для следующего прохода
        } else {
          result.push(mesUpper[i]);
        }
      }

      if (this.type === false) {
        return result.reverse().join('');
      }
      return result.join('');
    }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    while (key.length < message.length) {
      key = key.padEnd(message.length, key);
    }
    let keyArr = key.toUpperCase().split('');

    let mesUpper = message.toUpperCase();

    let result = [];

    for (let i = 0; i < mesUpper.length; i++) {
      if (mesUpper.charCodeAt(i) >= 65 && mesUpper.charCodeAt(i) <= 90) {
        let letterID = mesUpper.charCodeAt(i) - 65;
        let keyLetterID = keyArr[0].charCodeAt(0) - 65;
        let letter = String.fromCharCode(65 + (letterID - keyLetterID + 26) % 26); // обратный сдвиг
        result.push(letter);
        keyArr.splice(0, 1);
      } else {
        result.push(mesUpper[i]);
      }
    }

    if (this.type === false) {
      return result.reverse().join('');
    }
    return result.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
