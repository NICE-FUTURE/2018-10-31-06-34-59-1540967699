'use strict';

function convert(num) {
  var r = [];
  while (num != 0) {
    let mod = num % 26;
    if (mod == 0) {
      mod = 26;  // z
      num -= 1;
    }
    r.unshift(String.fromCharCode(mod-1+'a'.charCodeAt(0)));
    num = Math.floor(num/26);
  }
  return r.join('');
}

function get_letter_interval_2(number_a, number_b) {
  var r = [];

  if (number_a <= number_b) {
    for (let i=number_a; i<=number_b; i++) r.push(convert(i));
  } else {
    for (let i=number_a; i>=number_b; i--) r.push(convert(i));
  }

  return r;
}

// console.log(get_letter_interval_2(20, 53));

module.exports = get_letter_interval_2;

