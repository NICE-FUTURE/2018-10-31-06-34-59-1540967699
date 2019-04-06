'use strict';

function spilt_to_zero(number, interval) {
  var r = [];
  while (true) {
    r.push(number);
    if (number <= 0) break;
    // console.log(number);
    number = +(number-interval).toFixed(1);
  }
  return r;
}

module.exports = spilt_to_zero;
