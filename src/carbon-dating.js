const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  if (sampleActivity && (typeof sampleActivity === 'string') && (typeof parseFloat(sampleActivity) === 'number') && (parseFloat(sampleActivity) > 0 && parseFloat(sampleActivity) < 15)) {
    let time = (Math.log(MODERN_ACTIVITY / Number.parseFloat(sampleActivity))) / (0.693 / HALF_LIFE_PERIOD);
    let age = Math.ceil(time);
    return age;
  } else {
    return false;
  }
}

module.exports = {
  dateSample
};
